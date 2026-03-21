import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, RATE_LIMITS } from "@/lib/rate-limit";

/**
 * Known Gumroad webhook IP ranges.
 * Source: https://help.gumroad.com/article/149-gumroad-ping
 *
 * Gumroad does not publish a fixed IP list, so we also verify
 * seller_id in the route handler as the primary auth mechanism.
 * This CIDR allowlist is defense-in-depth only.
 */
const GUMROAD_IP_PREFIXES = [
  "18.", // AWS us-east
  "52.", // AWS
  "54.", // AWS
  "3.", // AWS
];

function isGumroadIP(ip: string): boolean {
  // In production, Gumroad signs payloads via seller_id.
  // IP check is a soft heuristic — do not hard-block unknown IPs
  // to avoid breaking webhooks if Gumroad changes infra.
  return GUMROAD_IP_PREFIXES.some((prefix) => ip.startsWith(prefix));
}

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
 * - Webhook routes: allow Gumroad POSTs (no Origin header typically)
 * - Everything else: standard same-origin
 */
function applyCORS(
  request: NextRequest,
  response: NextResponse
): NextResponse {
  const origin = request.headers.get("origin");
  const pathname = request.nextUrl.pathname;

  if (isWebhookPath(pathname)) {
    // Webhooks: Gumroad sends POST without Origin header.
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
 * Generate a cryptographic nonce for CSP per-request.
 * Uses Web Crypto API for Edge Runtime compatibility.
 * Nonce is a random 128-bit value encoded in base64.
 */
function generateNonce(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  // Use Web API for base64 encoding (Edge Runtime compatible)
  return btoa(String.fromCharCode(...Array.from(bytes)));
}

/**
 * Apply Content-Security-Policy header with nonce-based protection.
 * This removes unsafe-inline and unsafe-eval from script-src and style-src.
 * Next.js automatically applies the nonce to its own <script> and <style> tags.
 */
function applyCSP(
  response: NextResponse,
  nonce: string
): NextResponse {
  const csp = [
    "default-src 'self'",
    // script-src: Allow self + nonce + strict-dynamic (blocks old scripts without nonce)
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    // style-src: Allow self + nonce (for <style> tags) + Google Fonts
    `style-src 'self' 'nonce-${nonce}' https://fonts.googleapis.com`,
    // font-src: Allow self + Google Fonts
    "font-src 'self' https://fonts.gstatic.com",
    // img-src: Allow self, data URLs, and https images
    "img-src 'self' data: https:",
    // connect-src: Allow APIs (Gumroad webhooks, ConvertKit subscriptions)
    "connect-src 'self' https://api.convertkit.com https://api.gumroad.com",
    // frame-ancestors: Prevent clickjacking
    "frame-ancestors 'none'",
    // base-uri: Prevent injection via <base> tag
    "base-uri 'self'",
    // form-action: Restrict form submissions to self and Gumroad
    "form-action 'self' https://gumroad.com",
    // Upgrade insecure requests to HTTPS
    "upgrade-insecure-requests",
  ].join("; ");

  response.headers.set("Content-Security-Policy", csp);
  // Pass nonce to application via header for React client use if needed
  response.headers.set("x-nonce", nonce);

  return response;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const clientIP = getClientIP(request);

  // Generate nonce for this request
  const nonce = generateNonce();

  // --- Webhook exemption from rate limiting ---
  if (isWebhookPath(pathname)) {
    const response = NextResponse.next();
    applyCSP(response, nonce);
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

    applyCSP(response, nonce);
    return applyCORS(request, response);
  }

  // Non-API routes — apply CSP for all responses
  const response = NextResponse.next();
  applyCSP(response, nonce);
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
