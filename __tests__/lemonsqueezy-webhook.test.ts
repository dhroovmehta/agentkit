import { describe, it, expect, beforeEach, vi } from "vitest";
import { POST } from "@/app/api/webhooks/lemonsqueezy/route";
import { resetIdempotencyStore } from "@/lib/idempotency";
import { NextRequest } from "next/server";
import crypto from "crypto";

function createLemonSqueezyRequest(
  payload: Record<string, any>,
  secret: string
): NextRequest {
  const rawBody = JSON.stringify(payload);

  // Create HMAC-SHA256 signature
  const signature = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");

  return new NextRequest("http://localhost:3000/api/webhooks/lemonsqueezy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-signature": signature,
    },
    body: rawBody,
  });
}

const testSecret = "test_webhook_secret";

const validOrderPayload = {
  meta: {
    event_name: "order_created",
    custom_data: {},
  },
  data: {
    id: "order_test_001",
    type: "orders",
    attributes: {
      status: "paid",
      total: 4900,
      user_email: "buyer@example.com",
      user_name: "Test Buyer",
      first_order_item: {
        product_name: "Content Repurposing Pipeline",
      },
    },
  },
};

describe("Lemon Squeezy Webhook - /api/webhooks/lemonsqueezy", () => {
  beforeEach(() => {
    resetIdempotencyStore();
    vi.unstubAllEnvs();
  });

  it("processes a valid paid order and returns 200", async () => {
    vi.stubEnv("LEMONSQUEEZY_WEBHOOK_SECRET", testSecret);

    const request = createLemonSqueezyRequest(validOrderPayload, testSecret);
    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.status).toBe("processed");
    expect(body.order_id).toBe("order_test_001");
  });

  it("rejects webhook with invalid signature", async () => {
    vi.stubEnv("LEMONSQUEEZY_WEBHOOK_SECRET", testSecret);

    const request = createLemonSqueezyRequest(
      validOrderPayload,
      "wrong_secret"
    );
    const response = await POST(request);

    expect(response.status).toBe(403);
    const body = await response.json();
    expect(body.error).toContain("Signature verification failed");
  });

  it("rejects webhook with missing signature", async () => {
    vi.stubEnv("LEMONSQUEEZY_WEBHOOK_SECRET", testSecret);

    const rawBody = JSON.stringify(validOrderPayload);
    const request = new NextRequest(
      "http://localhost:3000/api/webhooks/lemonsqueezy",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: rawBody,
      }
    );
    const response = await POST(request);

    expect(response.status).toBe(403);
  });

  it("rejects webhook with invalid JSON", async () => {
    vi.stubEnv("LEMONSQUEEZY_WEBHOOK_SECRET", testSecret);

    const invalidBody = "{ invalid json }";
    const signature = crypto
      .createHmac("sha256", testSecret)
      .update(invalidBody)
      .digest("hex");

    const request = new NextRequest(
      "http://localhost:3000/api/webhooks/lemonsqueezy",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-signature": signature,
        },
        body: invalidBody,
      }
    );
    const response = await POST(request);

    expect(response.status).toBe(400);
    const body = await response.json();
    expect(body.error).toContain("Invalid JSON payload");
  });

  it("skips duplicate webhook with same order_id (idempotency)", async () => {
    vi.stubEnv("LEMONSQUEEZY_WEBHOOK_SECRET", testSecret);

    // First call should process
    const request1 = createLemonSqueezyRequest(validOrderPayload, testSecret);
    const response1 = await POST(request1);
    expect(response1.status).toBe(200);
    expect((await response1.json()).status).toBe("processed");

    // Second call with same order_id should be skipped
    const request2 = createLemonSqueezyRequest(validOrderPayload, testSecret);
    const response2 = await POST(request2);
    expect(response2.status).toBe(200);
    expect((await response2.json()).status).toBe("already_processed");
  });

  it("processes different order_ids independently", async () => {
    vi.stubEnv("LEMONSQUEEZY_WEBHOOK_SECRET", testSecret);

    const request1 = createLemonSqueezyRequest(validOrderPayload, testSecret);
    await POST(request1);

    const request2 = createLemonSqueezyRequest(
      {
        ...validOrderPayload,
        data: {
          ...validOrderPayload.data,
          id: "order_test_002",
        },
      },
      testSecret
    );
    const response2 = await POST(request2);
    expect(response2.status).toBe(200);
    expect((await response2.json()).status).toBe("processed");
  });

  it("processes webhook with minimal required fields (all attributes optional)", async () => {
    vi.stubEnv("LEMONSQUEEZY_WEBHOOK_SECRET", testSecret);

    const minimalPayload = {
      meta: { event_name: "order_created" },
      data: {
        id: "order_test_minimal",
        type: "orders",
        attributes: {}, // Minimal attributes (all optional in schema)
      },
    };

    const request = createLemonSqueezyRequest(minimalPayload, testSecret);
    const response = await POST(request);

    // Should process successfully since all attributes are optional
    expect(response.status).toBe(200);
    expect((await response.json()).status).toBe("processed");
  });

  it("processes unpaid orders without error (logs but doesn't fail)", async () => {
    vi.stubEnv("LEMONSQUEEZY_WEBHOOK_SECRET", testSecret);

    const unpaidPayload = {
      ...validOrderPayload,
      data: {
        ...validOrderPayload.data,
        attributes: {
          ...validOrderPayload.data.attributes,
          status: "pending",
        },
      },
    };

    const request = createLemonSqueezyRequest(unpaidPayload, testSecret);
    const response = await POST(request);

    expect(response.status).toBe(200);
    expect((await response.json()).status).toBe("processed");
  });
});
