import { describe, it, expect, beforeEach, vi } from "vitest";
import { POST } from "@/app/api/webhooks/gumroad/route";
import { resetIdempotencyStore } from "@/lib/idempotency";
import { NextRequest } from "next/server";

function createGumroadRequest(fields: Record<string, string>): NextRequest {
  const formData = new URLSearchParams();
  for (const [key, value] of Object.entries(fields)) {
    formData.append(key, value);
  }

  return new NextRequest("http://localhost:3000/api/webhooks/gumroad", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData.toString(),
  });
}

const validSalePayload = {
  sale_id: "sale_test_001",
  email: "buyer@example.com",
  product_name: "Content Repurposing Pipeline",
  price: "4900",
  seller_id: "test_seller",
};

describe("Gumroad Webhook - /api/webhooks/gumroad", () => {
  beforeEach(() => {
    resetIdempotencyStore();
    vi.unstubAllEnvs();
  });

  it("processes a valid sale and returns 200", async () => {
    const request = createGumroadRequest(validSalePayload);
    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.status).toBe("processed");
    expect(body.sale_id).toBe("sale_test_001");
  });

  it("rejects webhook with missing sale_id", async () => {
    const { sale_id: _, ...payloadWithoutSaleId } = validSalePayload;
    const request = createGumroadRequest(payloadWithoutSaleId);
    const response = await POST(request);

    expect(response.status).toBe(400);
    const body = await response.json();
    expect(body.error).toContain("Invalid webhook payload");
  });

  it("skips duplicate webhook with same sale_id (idempotency)", async () => {
    // First call should process
    const request1 = createGumroadRequest(validSalePayload);
    const response1 = await POST(request1);
    expect(response1.status).toBe(200);
    expect((await response1.json()).status).toBe("processed");

    // Second call with same sale_id should be skipped
    const request2 = createGumroadRequest(validSalePayload);
    const response2 = await POST(request2);
    expect(response2.status).toBe(200);
    expect((await response2.json()).status).toBe("already_processed");
  });

  it("processes different sale_ids independently", async () => {
    const request1 = createGumroadRequest(validSalePayload);
    await POST(request1);

    const request2 = createGumroadRequest({
      ...validSalePayload,
      sale_id: "sale_test_002",
    });
    const response2 = await POST(request2);
    expect(response2.status).toBe(200);
    expect((await response2.json()).status).toBe("processed");
  });

  it("rejects webhook from wrong seller when GUMROAD_SELLER_ID is set", async () => {
    vi.stubEnv("GUMROAD_SELLER_ID", "expected_seller_id");

    const request = createGumroadRequest({
      ...validSalePayload,
      seller_id: "wrong_seller",
    });
    const response = await POST(request);

    expect(response.status).toBe(403);
    const body = await response.json();
    expect(body.error).toContain("Unauthorized");
  });

  it("accepts webhook when seller_id matches GUMROAD_SELLER_ID", async () => {
    vi.stubEnv("GUMROAD_SELLER_ID", "test_seller");

    const request = createGumroadRequest(validSalePayload);
    const response = await POST(request);

    expect(response.status).toBe(200);
    expect((await response.json()).status).toBe("processed");
  });
});
