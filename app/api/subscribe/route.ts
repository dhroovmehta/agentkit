import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sanitizeEmail } from "@/lib/sanitize";

const CONVERTKIT_TIMEOUT_MS = 15_000;
const RETRY_DELAY_MS = 3_000;

/**
 * Zod schema for subscribe request body.
 * Validates and constrains email input before any processing.
 */
const SubscribeSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .max(254, "Email is too long")
    .email("A valid email address is required"),
});

async function fetchWithTimeout(
  url: string,
  options: RequestInit,
  timeoutMs: number
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function subscribeToConvertKit(
  email: string,
  apiKey: string,
  formId: string
): Promise<Response> {
  const url = `https://api.convertkit.com/v3/forms/${formId}/subscribe`;
  const options: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: apiKey, email }),
  };

  try {
    const response = await fetchWithTimeout(url, options, CONVERTKIT_TIMEOUT_MS);
    if (response.ok) return response;

    // Retry once after delay on failure
    await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
    return await fetchWithTimeout(url, options, CONVERTKIT_TIMEOUT_MS);
  } catch (error: unknown) {
    // If first attempt threw (timeout/network), retry once
    if (error instanceof DOMException && error.name === "AbortError") {
      console.error("[AgentKit] ConvertKit request timed out, retrying...");
    } else {
      console.error("[AgentKit] ConvertKit request failed, retrying...", error);
    }

    await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
    return await fetchWithTimeout(url, options, CONVERTKIT_TIMEOUT_MS);
  }
}

export async function POST(request: NextRequest) {
  try {
    let rawEmail: string | null = null;

    // Support both form data and JSON body
    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      try {
        const body = await request.json();
        rawEmail = body.email;
      } catch {
        return NextResponse.json(
          { error: "Invalid JSON in request body" },
          { status: 400 }
        );
      }
    } else {
      const formData = await request.formData();
      rawEmail = formData.get("email") as string;
    }

    // Validate with zod
    const result = SubscribeSchema.safeParse({ email: rawEmail });
    if (!result.success) {
      const errorMessage = result.error.issues[0]?.message || "Invalid input";

      if (contentType.includes("application/json")) {
        return NextResponse.json({ error: errorMessage }, { status: 400 });
      }
      return NextResponse.redirect(
        new URL("/?subscribed=error&reason=invalid", request.url),
        303
      );
    }

    // Sanitize the validated email before using it
    const email = sanitizeEmail(result.data.email);

    const apiKey = process.env.CONVERTKIT_API_KEY;
    const formId = process.env.CONVERTKIT_FORM_ID;

    if (!apiKey || !formId) {
      console.error(
        "[AgentKit] CONVERTKIT_API_KEY or CONVERTKIT_FORM_ID not configured"
      );

      // In production, this is a server config error -- tell the user clearly
      if (contentType.includes("application/json")) {
        return NextResponse.json(
          {
            error:
              "Email subscription is temporarily unavailable. Please try again later.",
          },
          { status: 503 }
        );
      }

      return NextResponse.redirect(
        new URL("/?subscribed=error&reason=config", request.url),
        303
      );
    }

    try {
      const response = await subscribeToConvertKit(email, apiKey, formId);

      if (!response.ok) {
        const errorText = await response.text().catch(() => "Unknown error");
        console.error(
          `[AgentKit] ConvertKit returned ${response.status}: ${errorText}`
        );

        if (contentType.includes("application/json")) {
          return NextResponse.json(
            {
              error:
                "We couldn't subscribe you, please try again",
            },
            { status: 502 }
          );
        }

        return NextResponse.redirect(
          new URL("/?subscribed=error", request.url),
          303
        );
      }
    } catch (error: unknown) {
      const message =
        error instanceof DOMException && error.name === "AbortError"
          ? "Email service timed out"
          : "Email service is unreachable";

      console.error(`[AgentKit] ConvertKit error after retry: ${message}`, error);

      if (contentType.includes("application/json")) {
        return NextResponse.json(
          {
            error:
              "We couldn't subscribe you, please try again",
          },
          { status: 502 }
        );
      }

      return NextResponse.redirect(
        new URL("/?subscribed=error", request.url),
        303
      );
    }

    if (contentType.includes("application/json")) {
      return NextResponse.json({ success: true, email });
    }

    return NextResponse.redirect(
      new URL("/?subscribed=true", request.url),
      303
    );
  } catch (error) {
    console.error("[AgentKit] Subscribe error:", error);

    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "An unexpected error occurred. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.redirect(
      new URL("/?subscribed=error", request.url),
      303
    );
  }
}
