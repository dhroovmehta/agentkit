/**
 * In-memory idempotency store for webhook event deduplication.
 *
 * In production with multiple instances, replace with Redis or a DB table.
 * Events are evicted after MAX_AGE_MS to prevent unbounded memory growth.
 */

const MAX_AGE_MS = 24 * 60 * 60 * 1000; // 24 hours
const MAX_ENTRIES = 10_000;

interface EventEntry {
  processedAt: number;
}

const processedEvents = new Map<string, EventEntry>();

/**
 * Check if an event ID has already been processed.
 * Returns true if the event is a duplicate (already processed).
 */
export function isDuplicateEvent(eventId: string): boolean {
  cleanup();
  return processedEvents.has(eventId);
}

/**
 * Mark an event ID as processed.
 */
export function markEventProcessed(eventId: string): void {
  processedEvents.set(eventId, { processedAt: Date.now() });
}

/**
 * Remove expired entries to prevent memory leaks.
 */
function cleanup(): void {
  if (processedEvents.size < MAX_ENTRIES) return;

  const now = Date.now();
  processedEvents.forEach((entry, id) => {
    if (now - entry.processedAt > MAX_AGE_MS) {
      processedEvents.delete(id);
    }
  });
}

/**
 * Reset the store (for testing only).
 */
export function resetIdempotencyStore(): void {
  processedEvents.clear();
}

/**
 * Get the number of tracked events (for testing/monitoring).
 */
export function getProcessedEventCount(): number {
  return processedEvents.size;
}
