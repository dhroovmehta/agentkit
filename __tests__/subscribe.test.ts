import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { POST } from "@/app/api/subscribe/route";
import { NextRequest } from "next/server";

function createJsonRequest(body: Record<string, unknown>): NextRequest {
  return new NextRequest("http://localhost:3000/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

function createFormRequest(fields: Record<string, string>): NextRequest {
  const formData = new URLSearchParams();
  for (const [key, value] of Object.entries(fields)) {
    formData.append(key, value);
  }
  return new NextRequest("http://localhost:3000/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData.toString(),
  });
}

describe("Subscribe API - /api/subscribe", () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  describe("Input validation", () => {
    it("rejects request with missing email", async () => {
      const request = createJsonRequest({});
      const response = await POST(request);

      expect(response.status).toBe(400);
      const body = await response.json();
      expect(body.error).toBeDefined();
    });

    it("rejects request with invalid email (no @)", async () => {
      const request = createJsonRequest({ email: "notanemail" });
      const response = await POST(request);

      expect(response.status).toBe(400);
      const body = await response.json();
      expect(body.error).toContain("email");
    });

    it("rejects malformed JSON body", async () => {
      const request = new NextRequest("http://localhost:3000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: "not json{{{",
      });
      const response = await POST(request);

      expect(response.status).toBe(400);
      const body = await response.json();
      expect(body.error).toContain("Invalid JSON");
    });
  });

  describe("Missing API configuration", () => {
    it("returns 503 when CONVERTKIT_API_KEY is missing (JSON)", async () => {
      // Ensure env vars are not set
      vi.stubEnv("CONVERTKIT_API_KEY", "");
      vi.stubEnv("CONVERTKIT_FORM_ID", "some_form_id");

      const request = createJsonRequest({ email: "test@example.com" });
      const response = await POST(request);

      expect(response.status).toBe(503);
      const body = await response.json();
      expect(body.error).toContain("temporarily unavailable");
    });

    it("returns 503 when CONVERTKIT_FORM_ID is missing (JSON)", async () => {
      vi.stubEnv("CONVERTKIT_API_KEY", "some_key");
      vi.stubEnv("CONVERTKIT_FORM_ID", "");

      const request = createJsonRequest({ email: "test@example.com" });
      const response = await POST(request);

      expect(response.status).toBe(503);
      const body = await response.json();
      expect(body.error).toContain("temporarily unavailable");
    });

    it("redirects with error=config when API keys missing (form)", async () => {
      vi.stubEnv("CONVERTKIT_API_KEY", "");
      vi.stubEnv("CONVERTKIT_FORM_ID", "");

      const request = createFormRequest({ email: "test@example.com" });
      const response = await POST(request);

      expect(response.status).toBe(303);
      const location = response.headers.get("location") || "";
      expect(location).toContain("subscribed=error");
      expect(location).toContain("reason=config");
    });
  });

  describe("ConvertKit API failure", () => {
    it("returns user-friendly error when API is down (JSON)", async () => {
      vi.stubEnv("CONVERTKIT_API_KEY", "test_key");
      vi.stubEnv("CONVERTKIT_FORM_ID", "test_form");

      // Mock fetch to simulate ConvertKit being down
      const mockFetch = vi.fn().mockRejectedValue(new Error("ECONNREFUSED"));
      vi.stubGlobal("fetch", mockFetch);

      const request = createJsonRequest({ email: "test@example.com" });
      const response = await POST(request);

      expect(response.status).toBe(502);
      const body = await response.json();
      expect(body.error).toBe(
        "We couldn't subscribe you, please try again"
      );
    });

    it("retries once when ConvertKit returns server error", async () => {
      vi.stubEnv("CONVERTKIT_API_KEY", "test_key");
      vi.stubEnv("CONVERTKIT_FORM_ID", "test_form");

      // First call fails (500), second succeeds
      const mockFetch = vi
        .fn()
        .mockResolvedValueOnce(
          new Response("Internal Server Error", { status: 500 })
        )
        .mockResolvedValueOnce(
          new Response(JSON.stringify({ subscription: { id: 1 } }), {
            status: 200,
          })
        );
      vi.stubGlobal("fetch", mockFetch);

      const request = createJsonRequest({ email: "test@example.com" });
      const response = await POST(request);

      expect(response.status).toBe(200);
      const body = await response.json();
      expect(body.success).toBe(true);
      // Should have been called twice (initial + retry)
      expect(mockFetch).toHaveBeenCalledTimes(2);
    }, 10_000);

    it("returns error after both attempts fail", async () => {
      vi.stubEnv("CONVERTKIT_API_KEY", "test_key");
      vi.stubEnv("CONVERTKIT_FORM_ID", "test_form");

      const mockFetch = vi
        .fn()
        .mockResolvedValue(
          new Response("Service Unavailable", { status: 503 })
        );
      vi.stubGlobal("fetch", mockFetch);

      const request = createJsonRequest({ email: "test@example.com" });
      const response = await POST(request);

      expect(response.status).toBe(502);
      const body = await response.json();
      expect(body.error).toBe(
        "We couldn't subscribe you, please try again"
      );
    }, 10_000);
  });

  describe("Successful subscription", () => {
    it("returns success for valid email when ConvertKit responds OK (JSON)", async () => {
      vi.stubEnv("CONVERTKIT_API_KEY", "test_key");
      vi.stubEnv("CONVERTKIT_FORM_ID", "test_form");

      const mockFetch = vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ subscription: { id: 1 } }), {
          status: 200,
        })
      );
      vi.stubGlobal("fetch", mockFetch);

      const request = createJsonRequest({ email: "user@example.com" });
      const response = await POST(request);

      expect(response.status).toBe(200);
      const body = await response.json();
      expect(body.success).toBe(true);
      expect(body.email).toBe("user@example.com");
    });

    it("redirects with subscribed=true on form submission success", async () => {
      vi.stubEnv("CONVERTKIT_API_KEY", "test_key");
      vi.stubEnv("CONVERTKIT_FORM_ID", "test_form");

      const mockFetch = vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ subscription: { id: 1 } }), {
          status: 200,
        })
      );
      vi.stubGlobal("fetch", mockFetch);

      const request = createFormRequest({ email: "user@example.com" });
      const response = await POST(request);

      expect(response.status).toBe(303);
      const location = response.headers.get("location") || "";
      expect(location).toContain("subscribed=true");
    });
  });
});
