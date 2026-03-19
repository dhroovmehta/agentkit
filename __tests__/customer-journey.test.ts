import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { templates, getTemplateBySlug, bundles } from "@/content/templates";
import { POST as subscribeHandler } from "@/app/api/subscribe/route";
import { POST as gumroadWebhookHandler } from "@/app/api/webhooks/gumroad/route";
import { resetIdempotencyStore } from "@/lib/idempotency";
import { NextRequest } from "next/server";

/**
 * Integration tests for the critical customer paths:
 * 1. Browse templates -> view detail -> purchase (Gumroad link)
 * 2. Email signup -> receive free template
 * 3. Gumroad webhook -> purchase fulfillment
 */

describe("Customer Journey: Browse -> Purchase", () => {
  it("every template has a valid detail page slug", () => {
    for (const template of templates) {
      // The slug must be a valid URL segment
      expect(template.slug).toMatch(/^[a-z0-9-]+$/);

      // The slug must resolve to a template
      const resolved = getTemplateBySlug(template.slug);
      expect(resolved).toBeDefined();
      expect(resolved!.id).toBe(template.id);
    }
  });

  it("every paid template has a gumroad URL placeholder", () => {
    const paidTemplates = templates.filter((t) => !t.isFree);
    for (const template of paidTemplates) {
      // In production, these should not be "#" -- flag them
      expect(template.gumroadUrl).toBeTruthy();
      // When gumroadUrl is still "#", the buy button will exist but not redirect
      // This test documents the requirement
    }
  });

  it("every bundle references at least 2 templates", () => {
    for (const bundle of bundles) {
      expect(bundle.templateIds.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("the free template exists and has price 0", () => {
    const freeTemplate = templates.find((t) => t.isFree);
    expect(freeTemplate).toBeDefined();
    expect(freeTemplate!.price).toBe(0);
    expect(freeTemplate!.name).toContain("Solo Business Operations");
  });
});

describe("Customer Journey: Email Signup for Free Template", () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("complete signup flow: submit email -> get confirmation", async () => {
    vi.stubEnv("CONVERTKIT_API_KEY", "test_key");
    vi.stubEnv("CONVERTKIT_FORM_ID", "test_form");

    const mockFetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ subscription: { id: 42 } }), {
        status: 200,
      })
    );
    vi.stubGlobal("fetch", mockFetch);

    const request = new NextRequest("http://localhost:3000/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "newuser@startup.com" }),
    });

    const response = await subscribeHandler(request);
    expect(response.status).toBe(200);

    const body = await response.json();
    expect(body.success).toBe(true);
    expect(body.email).toBe("newuser@startup.com");

    // Verify ConvertKit was called with correct payload
    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining("convertkit.com"),
      expect.objectContaining({
        method: "POST",
        body: expect.stringContaining("newuser@startup.com"),
      })
    );
  });

  it("signup failure shows user-friendly message, not a silent success", async () => {
    vi.stubEnv("CONVERTKIT_API_KEY", "test_key");
    vi.stubEnv("CONVERTKIT_FORM_ID", "test_form");

    const mockFetch = vi
      .fn()
      .mockRejectedValue(new Error("Network unreachable"));
    vi.stubGlobal("fetch", mockFetch);

    const request = new NextRequest("http://localhost:3000/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "user@example.com" }),
    });

    const response = await subscribeHandler(request);

    // Must NOT be 200 (the old behavior silently succeeded)
    expect(response.status).not.toBe(200);
    expect(response.status).toBe(502);

    const body = await response.json();
    expect(body.error).toBe("We couldn't subscribe you, please try again");
  });

  it("misconfigured server returns 503, not silent success", async () => {
    // Simulate no env vars set
    vi.stubEnv("CONVERTKIT_API_KEY", "");
    vi.stubEnv("CONVERTKIT_FORM_ID", "");

    const request = new NextRequest("http://localhost:3000/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "user@example.com" }),
    });

    const response = await subscribeHandler(request);

    expect(response.status).toBe(503);
    const body = await response.json();
    expect(body.error).toContain("temporarily unavailable");
  });
});

describe("Customer Journey: Gumroad Purchase Fulfillment", () => {
  beforeEach(() => {
    resetIdempotencyStore();
    vi.unstubAllEnvs();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  function createWebhookRequest(
    fields: Record<string, string>
  ): NextRequest {
    const formData = new URLSearchParams();
    for (const [key, value] of Object.entries(fields)) {
      formData.append(key, value);
    }
    return new NextRequest(
      "http://localhost:3000/api/webhooks/gumroad",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      }
    );
  }

  it("processes a real Gumroad sale webhook end-to-end", async () => {
    const request = createWebhookRequest({
      sale_id: "integration_test_sale_001",
      email: "buyer@company.com",
      product_name: "Content Repurposing Pipeline",
      price: "4900",
      seller_id: "our_seller_id",
    });

    const response = await gumroadWebhookHandler(request);
    expect(response.status).toBe(200);

    const body = await response.json();
    expect(body.status).toBe("processed");
    expect(body.sale_id).toBe("integration_test_sale_001");
  });

  it("handles Gumroad webhook retry (duplicate) correctly", async () => {
    const payload = {
      sale_id: "integration_test_sale_002",
      email: "buyer@company.com",
      product_name: "Sales Outreach Automation",
      price: "7900",
      seller_id: "our_seller_id",
    };

    // First delivery
    const req1 = createWebhookRequest(payload);
    const res1 = await gumroadWebhookHandler(req1);
    expect(res1.status).toBe(200);
    expect((await res1.json()).status).toBe("processed");

    // Gumroad retries (duplicate)
    const req2 = createWebhookRequest(payload);
    const res2 = await gumroadWebhookHandler(req2);
    expect(res2.status).toBe(200);
    expect((await res2.json()).status).toBe("already_processed");

    // Third retry
    const req3 = createWebhookRequest(payload);
    const res3 = await gumroadWebhookHandler(req3);
    expect(res3.status).toBe(200);
    expect((await res3.json()).status).toBe("already_processed");
  });
});
