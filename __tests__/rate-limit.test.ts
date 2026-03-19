import { describe, it, expect, beforeEach } from "vitest";
import {
  checkRateLimit,
  resetRateLimitStores,
  getRequestCount,
  RATE_LIMITS,
  cleanupStores,
} from "@/lib/rate-limit";

beforeEach(() => {
  resetRateLimitStores();
});

describe("rate limiter", () => {
  const testConfig = { windowMs: 60_000, maxRequests: 5 };

  it("allows requests under the limit", () => {
    const result = checkRateLimit("192.168.1.1", testConfig, "test");
    expect(result.limited).toBe(false);
    expect(result.remaining).toBe(4);
  });

  it("tracks request count per IP", () => {
    for (let i = 0; i < 3; i++) {
      checkRateLimit("192.168.1.1", testConfig, "test");
    }
    expect(getRequestCount("192.168.1.1", "test")).toBe(3);
  });

  it("blocks requests at the limit", () => {
    for (let i = 0; i < 5; i++) {
      checkRateLimit("192.168.1.1", testConfig, "test");
    }

    const result = checkRateLimit("192.168.1.1", testConfig, "test");
    expect(result.limited).toBe(true);
    expect(result.remaining).toBe(0);
    expect(result.retryAfterMs).toBeGreaterThan(0);
  });

  it("provides Retry-After in seconds when limited", () => {
    for (let i = 0; i < 5; i++) {
      checkRateLimit("192.168.1.1", testConfig, "test");
    }

    const result = checkRateLimit("192.168.1.1", testConfig, "test");
    expect(result.limited).toBe(true);
    // retryAfterMs should be roughly the window size
    expect(result.retryAfterMs).toBeLessThanOrEqual(60_000);
    expect(result.retryAfterMs).toBeGreaterThanOrEqual(1000);
  });

  it("isolates rate limits per IP", () => {
    for (let i = 0; i < 5; i++) {
      checkRateLimit("192.168.1.1", testConfig, "test");
    }

    // Different IP should not be limited
    const result = checkRateLimit("192.168.1.2", testConfig, "test");
    expect(result.limited).toBe(false);
    expect(result.remaining).toBe(4);
  });

  it("isolates rate limits per store", () => {
    for (let i = 0; i < 5; i++) {
      checkRateLimit("192.168.1.1", testConfig, "store-a");
    }

    // Same IP, different store should not be limited
    const result = checkRateLimit("192.168.1.1", testConfig, "store-b");
    expect(result.limited).toBe(false);
  });

  it("exports predefined rate limit tiers", () => {
    expect(RATE_LIMITS.api.maxRequests).toBe(60);
    expect(RATE_LIMITS.api.windowMs).toBe(60_000);
    expect(RATE_LIMITS.auth.maxRequests).toBe(10);
    expect(RATE_LIMITS.auth.windowMs).toBe(60_000);
  });

  it("resets cleanly for testing", () => {
    checkRateLimit("192.168.1.1", testConfig, "test");
    expect(getRequestCount("192.168.1.1", "test")).toBe(1);

    resetRateLimitStores();
    expect(getRequestCount("192.168.1.1", "test")).toBe(0);
  });

  it("cleanup removes stale entries", () => {
    // Add an entry, then run cleanup — should survive (not stale yet)
    checkRateLimit("192.168.1.1", testConfig, "test");
    cleanupStores();
    expect(getRequestCount("192.168.1.1", "test")).toBe(1);
  });
});
