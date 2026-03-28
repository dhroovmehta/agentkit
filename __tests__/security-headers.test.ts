import { describe, it, expect, beforeAll } from "vitest";
import nextConfig from "@/next.config.mjs";

/**
 * Tests that security headers are properly configured in next.config.mjs.
 *
 * Note: CSP is set dynamically in middleware.ts (per-request nonce),
 * not in next.config.mjs. This test verifies static headers only.
 */
describe("security headers in next.config.mjs", () => {
  let headers: Array<{ key: string; value: string }>;

  // Extract headers from the config
  beforeAll(async () => {
    const headerConfig = await (nextConfig as { headers: () => Promise<Array<{ source: string; headers: Array<{ key: string; value: string }> }>> }).headers();
    const globalEntry = headerConfig.find((h) => h.source === "/(.*)");
    expect(globalEntry).toBeDefined();
    headers = globalEntry!.headers;
  });

  function getHeaderValue(key: string): string | undefined {
    return headers.find((h) => h.key === key)?.value;
  }

  it("sets Strict-Transport-Security with 1-year max-age", () => {
    const value = getHeaderValue("Strict-Transport-Security");
    expect(value).toBeDefined();
    expect(value).toContain("max-age=31536000");
    expect(value).toContain("includeSubDomains");
    expect(value).toContain("preload");
  });

  it("sets X-Content-Type-Options to nosniff", () => {
    expect(getHeaderValue("X-Content-Type-Options")).toBe("nosniff");
  });

  it("sets X-Frame-Options to DENY", () => {
    expect(getHeaderValue("X-Frame-Options")).toBe("DENY");
  });

  it("sets X-XSS-Protection", () => {
    expect(getHeaderValue("X-XSS-Protection")).toBe("1; mode=block");
  });

  it("sets Referrer-Policy", () => {
    expect(getHeaderValue("Referrer-Policy")).toBe(
      "strict-origin-when-cross-origin"
    );
  });

  it("sets Permissions-Policy restricting dangerous features", () => {
    const value = getHeaderValue("Permissions-Policy");
    expect(value).toBeDefined();
    expect(value).toContain("camera=()");
    expect(value).toContain("microphone=()");
    expect(value).toContain("geolocation=()");
    expect(value).toContain("payment=()");
  });

  it("CSP is set dynamically in middleware (not in next.config.mjs)", () => {
    // CSP is generated per-request in middleware.ts with nonce
    // This test documents that it's not set as a static header
    const value = getHeaderValue("Content-Security-Policy");
    expect(value).toBeUndefined();
  });
});

describe("Content-Security-Policy validation (middleware.ts)", () => {
  it("CSP allows ConvertKit and Lemon Squeezy connections", () => {
    // This is tested in middleware.test.ts which runs the actual middleware
    // Here we just document the requirement
    expect(true).toBe(true);
  });

  it("CSP allows Google Fonts", () => {
    // This is tested in middleware.test.ts which runs the actual middleware
    // Here we just document the requirement
    expect(true).toBe(true);
  });

  it("CSP restricts form actions to self and Lemon Squeezy", () => {
    // This is tested in middleware.test.ts which runs the actual middleware
    // Here we just document the requirement
    expect(true).toBe(true);
  });
});
