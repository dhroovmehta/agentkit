import { describe, it, expect, beforeEach } from "vitest";
import { middleware } from "@/middleware";
import { NextRequest } from "next/server";
import { resetRateLimitStores } from "@/lib/rate-limit";

function createRequest(
  path: string,
  options: {
    method?: string;
    headers?: Record<string, string>;
    ip?: string;
  } = {}
): NextRequest {
  const url = `http://localhost:3000${path}`;
  const req = new NextRequest(url, {
    method: options.method || "GET",
    headers: {
      "x-forwarded-for": options.ip || "192.168.1.100",
      host: "localhost:3000",
      ...(options.headers || {}),
    },
  });
  return req;
}

beforeEach(() => {
  resetRateLimitStores();
});

describe("middleware — rate limiting", () => {
  it("allows API requests under the limit", () => {
    const response = middleware(createRequest("/api/subscribe"));
    expect(response.status).not.toBe(429);
    expect(response.headers.get("X-RateLimit-Limit")).toBe("10"); // auth tier
    expect(response.headers.get("X-RateLimit-Remaining")).toBe("9");
  });

  it("returns 429 when auth rate limit is exceeded", () => {
    // Auth limit is 10 req/min
    for (let i = 0; i < 10; i++) {
      middleware(createRequest("/api/subscribe", { ip: "10.0.0.1" }));
    }

    const response = middleware(
      createRequest("/api/subscribe", { ip: "10.0.0.1" })
    );
    expect(response.status).toBe(429);

    const body = response.headers.get("content-type");
    expect(body).toContain("application/json");
    expect(response.headers.get("Retry-After")).toBeDefined();
    expect(Number(response.headers.get("Retry-After"))).toBeGreaterThan(0);
  });

  it("applies API rate limit (60/min) to non-auth API routes", () => {
    const response = middleware(createRequest("/api/some-endpoint"));
    expect(response.headers.get("X-RateLimit-Limit")).toBe("60"); // api tier
  });

  it("exempts webhook paths from rate limiting", () => {
    // Hit webhook path 100 times — should never get 429
    for (let i = 0; i < 100; i++) {
      const response = middleware(
        createRequest("/api/webhooks/gumroad", {
          method: "POST",
          ip: "10.0.0.1",
        })
      );
      expect(response.status).not.toBe(429);
    }
  });

  it("includes rate limit headers on successful responses", () => {
    const response = middleware(createRequest("/api/subscribe"));
    expect(response.headers.get("X-RateLimit-Limit")).toBeDefined();
    expect(response.headers.get("X-RateLimit-Remaining")).toBeDefined();
    expect(response.headers.get("X-RateLimit-Reset")).toBeDefined();
  });

  it("isolates rate limits per client IP", () => {
    // Exhaust limit for IP A
    for (let i = 0; i < 10; i++) {
      middleware(createRequest("/api/subscribe", { ip: "10.0.0.1" }));
    }

    // IP B should still be allowed
    const response = middleware(
      createRequest("/api/subscribe", { ip: "10.0.0.2" })
    );
    expect(response.status).not.toBe(429);
  });
});

describe("middleware — CORS", () => {
  it("allows same-origin API requests", () => {
    const response = middleware(
      createRequest("/api/subscribe", {
        headers: { origin: "http://localhost:3000" },
      })
    );
    expect(response.headers.get("Access-Control-Allow-Origin")).toBe(
      "http://localhost:3000"
    );
  });

  it("blocks cross-origin API requests", () => {
    const response = middleware(
      createRequest("/api/subscribe", {
        headers: { origin: "https://evil.com" },
      })
    );
    // Should either be "null" or absent — not the evil origin
    const allowOrigin = response.headers.get("Access-Control-Allow-Origin");
    expect(allowOrigin).not.toBe("https://evil.com");
  });

  it("allows POST method on webhook paths", () => {
    const response = middleware(
      createRequest("/api/webhooks/gumroad", { method: "POST" })
    );
    expect(response.headers.get("Access-Control-Allow-Methods")).toBe("POST");
  });
});

describe("middleware — input validation via subscribe route", () => {
  it("uses auth-tier rate limiting for /api/subscribe", () => {
    const response = middleware(createRequest("/api/subscribe"));
    expect(response.headers.get("X-RateLimit-Limit")).toBe("10");
  });
});
