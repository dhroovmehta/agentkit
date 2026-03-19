import { describe, it, expect, beforeEach } from "vitest";
import {
  isDuplicateEvent,
  markEventProcessed,
  resetIdempotencyStore,
  getProcessedEventCount,
} from "@/lib/idempotency";

describe("Idempotency Store", () => {
  beforeEach(() => {
    resetIdempotencyStore();
  });

  it("returns false for a new event ID", () => {
    expect(isDuplicateEvent("sale_abc123")).toBe(false);
  });

  it("returns true for an already-processed event ID", () => {
    markEventProcessed("sale_abc123");
    expect(isDuplicateEvent("sale_abc123")).toBe(true);
  });

  it("tracks multiple distinct event IDs independently", () => {
    markEventProcessed("sale_001");
    markEventProcessed("sale_002");

    expect(isDuplicateEvent("sale_001")).toBe(true);
    expect(isDuplicateEvent("sale_002")).toBe(true);
    expect(isDuplicateEvent("sale_003")).toBe(false);
  });

  it("reports correct count of processed events", () => {
    expect(getProcessedEventCount()).toBe(0);
    markEventProcessed("sale_001");
    markEventProcessed("sale_002");
    expect(getProcessedEventCount()).toBe(2);
  });

  it("resets the store completely", () => {
    markEventProcessed("sale_001");
    markEventProcessed("sale_002");
    resetIdempotencyStore();
    expect(getProcessedEventCount()).toBe(0);
    expect(isDuplicateEvent("sale_001")).toBe(false);
  });
});
