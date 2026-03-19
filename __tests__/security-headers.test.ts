import { describe, it, expect } from "vitest";
import nextConfig from "@/next.config.mjs";

/**
 * Tests that security headers are properly configured in next.config.mjs.
 *
 * These are build-time config tests — they verify the config object shape,
 * not runtime behavior (which requires a running Next.js server).
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

  it("sets Content-Security-Policy with restrictive defaults", () => {
    const value = getHeaderValue("Content-Security-Policy");
    expect(value).toBeDefined();
    expect(value).toContain("default-src 'self'");
    expect(value).toContain("frame-ancestors 'none'");
    expect(value).toContain("base-uri 'self'");
    expect(value).toContain("upgrade-insecure-requests");
  });

  it("CSP allows ConvertKit and Gumroad connections", () => {
    const value = getHeaderValue("Content-Security-Policy")!;
    expect(value).toContain("https://api.convertkit.com");
    expect(value).toContain("https://api.gumroad.com");
  });

  it("CSP allows Google Fonts", () => {
    const value = getHeaderValue("Content-Security-Policy")!;
    expect(value).toContain("https://fonts.googleapis.com");
    expect(value).toContain("https://fonts.gstatic.com");
  });

  it("CSP restricts form actions to self and Gumroad", () => {
    const value = getHeaderValue("Content-Security-Policy")!;
    expect(value).toContain("form-action 'self' https://gumroad.com");
  });
});
