/**
 * Rate limiter with Upstash Redis backend and in-memory fallback.
 *
 * Primary: In-memory sliding window (works in both sync middleware and async handlers).
 * Production note: For true multi-instance deployments, this should be wrapped with
 * Upstash in API route handlers (see endpoint comments).
 *
 * Configuration: UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN (for future use)
 */

const CLEANUP_INTERVAL_MS = 60_000; // Run cleanup every 60s
const MAX_IPS = 50_000; // Hard cap on tracked IPs

interface WindowEntry {
  timestamps: number[];
}

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

// Predefined rate limit tiers
export const RATE_LIMITS = {
  api: { windowMs: 60_000, maxRequests: 60 } as RateLimitConfig,
  auth: { windowMs: 60_000, maxRequests: 10 } as RateLimitConfig,
} as const;

const stores = new Map<string, Map<string, WindowEntry>>();

function getStore(name: string): Map<string, WindowEntry> {
  if (!stores.has(name)) {
    stores.set(name, new Map());
  }
  return stores.get(name)!;
}

/**
 * Check if a request should be rate limited.
 * Returns { limited: false, remaining, resetMs } or { limited: true, retryAfterMs }.
 *
 * Uses synchronous in-memory store. For production multi-instance deployments,
 * wrap API handlers with Upstash Redis checks.
 */
export function checkRateLimit(
  ip: string,
  config: RateLimitConfig,
  storeName: string = "default"
): {
  limited: boolean;
  remaining: number;
  retryAfterMs: number;
  resetMs: number;
} {
  const store = getStore(storeName);
  const now = Date.now();
  const windowStart = now - config.windowMs;

  // Get or create entry for this IP
  let entry = store.get(ip);
  if (!entry) {
    entry = { timestamps: [] };
    store.set(ip, entry);
  }

  // Remove timestamps outside the sliding window
  entry.timestamps = entry.timestamps.filter((t) => t > windowStart);

  const currentCount = entry.timestamps.length;

  if (currentCount >= config.maxRequests) {
    // Calculate when the oldest request in the window expires
    const oldestInWindow = entry.timestamps[0];
    const retryAfterMs = oldestInWindow + config.windowMs - now;

    return {
      limited: true,
      remaining: 0,
      retryAfterMs: Math.max(retryAfterMs, 1000),
      resetMs: oldestInWindow + config.windowMs,
    };
  }

  // Record this request
  entry.timestamps.push(now);

  return {
    limited: false,
    remaining: config.maxRequests - currentCount - 1,
    retryAfterMs: 0,
    resetMs: now + config.windowMs,
  };
}

/**
 * Evict stale entries from all stores. Called periodically.
 */
export function cleanupStores(): void {
  const now = Date.now();

  stores.forEach((store) => {
    // If store exceeds cap, clear it entirely (safety valve)
    if (store.size > MAX_IPS) {
      store.clear();
      return;
    }

    // Remove entries with no recent timestamps
    const cutoff = now - 5 * 60_000;
    store.forEach((entry, ip) => {
      entry.timestamps = entry.timestamps.filter((t) => t > cutoff);
      if (entry.timestamps.length === 0) {
        store.delete(ip);
      }
    });
  });
}

/**
 * Reset all rate limit stores (for testing only).
 */
export function resetRateLimitStores(): void {
  stores.clear();
}

/**
 * Get current count for an IP in a store (for testing/monitoring).
 */
export function getRequestCount(
  ip: string,
  storeName: string = "default"
): number {
  const store = stores.get(storeName);
  if (!store) return 0;
  const entry = store.get(ip);
  if (!entry) return 0;
  return entry.timestamps.length;
}

// Auto-cleanup on interval (only in non-test environments)
if (typeof setInterval !== "undefined" && process.env.NODE_ENV !== "test") {
  setInterval(cleanupStores, CLEANUP_INTERVAL_MS);
}
