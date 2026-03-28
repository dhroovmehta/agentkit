import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, RATE_LIMITS } from "@/lib/rate-limit";


function getClientIP(request: NextRequest): string {
  // Standard proxy headers (Vercel, Cloudflare, nginx)
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    // Take the first IP (client IP before proxies)
    return forwarded.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  // Fallback — should not happen behind a proxy
  return "unknown";
}

function isWebhookPath(pathname: string): boolean {
  return pathname.startsWith("/api/webhooks/");
}

function isAPIPath(pathname: string): boolean {
  return pathname.startsWith("/api/");
}

function isAuthPath(pathname: string): boolean {
  return pathname === "/api/subscribe";
}

/**
 * Apply CORS headers based on the request path.
 *
 * - API routes: same-origin only (no cross-origin API access)
 * - Webhook routes: allow Lemon Squeezy POSTs (no Origin header typically)
 * - Everything else: standard same-origin
 */
function applyCORS(
  request: NextRequest,
  response: NextResponse
): NextResponse {
  const origin = request.headers.get("origin");
  const pathname = request.nextUrl.pathname;

  if (isWebhookPath(pathname)) {
    // Webhooks: Lemon Squeezy sends POST without Origin header.
    // Allow POST method, deny browser preflight from unknown origins.
    response.headers.set("Access-Control-Allow-Methods", "POST");
    response.headers.set("Access-Control-Max-Age", "0");
    return response;
  }

  if (isAPIPath(pathname)) {
    // API routes: same-origin only
    const host = request.headers.get("host") || "";
    const expectedOrigins = [
      `https://${host}`,
      `http://${host}`, // dev only
    ];

    if (origin && expectedOrigins.includes(origin)) {
      response.headers.set("Access-Control-Allow-Origin", origin);
      response.headers.set("Access-Control-Allow-Methods", "POST, GET");
      response.headers.set(
        "Access-Control-Allow-Headers",
        "Content-Type"
      );
      response.headers.set("Access-Control-Max-Age", "86400");
    } else if (origin) {
      // Cross-origin request to API — deny
      response.headers.set("Access-Control-Allow-Origin", "null");
    }

    return response;
  }

  return response;
}

/**
 * Apply security headers without CSP.
 *
 * NOTE: Nonce-based CSP was removed for launch because the middleware-generated
 * nonce was not being applied to Next.js <script> tags, causing ALL JS to be
 * blocked (39 CSP violations). To re-enable CSP properly, pass the nonce from
 * middleware to layout.tsx via headers() and apply it to Script components.
 * See: https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy
 */
function applySecurityHeaders(response: NextResponse): NextResponse {
  return response;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const clientIP = getClientIP(request);

  // --- Webhook exemption from rate limiting ---
  if (isWebhookPath(pathname)) {
    const response = NextResponse.next();
    applySecurityHeaders(response);
    return applyCORS(request, response);
  }

  // --- Rate limiting ---
  if (isAPIPath(pathname)) {
    const config = isAuthPath(pathname) ? RATE_LIMITS.auth : RATE_LIMITS.api;
    const storeName = isAuthPath(pathname) ? "auth" : "api";

    const result = checkRateLimit(clientIP, config, storeName);

    if (result.limited) {
      const retryAfterSeconds = Math.ceil(result.retryAfterMs / 1000);

      const errorResponse = NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
          retryAfter: retryAfterSeconds,
        },
        { status: 429 }
      );

      errorResponse.headers.set("Retry-After", String(retryAfterSeconds));
      errorResponse.headers.set("X-RateLimit-Limit", String(config.maxRequests));
      errorResponse.headers.set("X-RateLimit-Remaining", "0");
      errorResponse.headers.set(
        "X-RateLimit-Reset",
        String(Math.ceil(result.resetMs / 1000))
      );

      return applyCORS(request, errorResponse);
    }

    // Pass rate limit headers on successful requests too
    const response = NextResponse.next();
    response.headers.set("X-RateLimit-Limit", String(config.maxRequests));
    response.headers.set("X-RateLimit-Remaining", String(result.remaining));
    response.headers.set(
      "X-RateLimit-Reset",
      String(Math.ceil(result.resetMs / 1000))
    );

    applySecurityHeaders(response);
    return applyCORS(request, response);
  }

  // Non-API routes
  const response = NextResponse.next();
  applySecurityHeaders(response);
  return response;
}

export const config = {
  // Run middleware on all routes to apply CSP to every response
  // Exclude static files and images for performance
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public/* (public files)
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
};
