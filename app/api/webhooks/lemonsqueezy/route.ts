import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { isDuplicateEvent, markEventProcessed } from "@/lib/idempotency";
import { sanitizeText, sanitizeEmail } from "@/lib/sanitize";
import crypto from "crypto";

/**
 * Lemon Squeezy Webhook Handler
 *
 * Lemon Squeezy sends JSON payloads with HMAC-SHA256 signature verification.
 * See: https://docs.lemonsqueezy.com/api/webhooks
 *
 * Security layers:
 * 1. Webhook path is exempt from rate limiting (middleware.ts)
 * 2. HMAC-SHA256 signature verification via X-Signature header
 * 3. Idempotency dedup (lib/idempotency.ts)
 * 4. Zod schema validation on all fields
 * 5. Input sanitization before any storage
 */

// Lemon Squeezy webhook payload schema
const LemonSqueezyWebhookSchema = z.object({
  meta: z.object({
    event_name: z.string(),
    custom_data: z.record(z.string(), z.unknown()).optional(),
  }),
  data: z.object({
    id: z.string(),
    type: z.string(),
    attributes: z.object({
      status: z.string().optional(),
      total: z.number().optional(),
      user_email: z.string().optional(),
      user_name: z.string().optional(),
      first_order_item: z.object({
        product_name: z.string().optional(),
      }).optional(),
    }),
  }),
});

type LemonSqueezyWebhookPayload = z.infer<typeof LemonSqueezyWebhookSchema>;

/**
 * Verify HMAC-SHA256 signature from Lemon Squeezy.
 * The signature is in the X-Signature header and is computed as:
 *   HMAC-SHA256(webhook_secret, raw_request_body)
 */
function verifySignature(
  rawBody: string,
  signature: string | null
): boolean {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;

  if (!secret || !signature) {
    console.error(
      "[AgentKit] Missing webhook secret or signature for LS verification"
    );
    return false;
  }

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");

  // Use timing-safe comparison to prevent timing attacks
  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    );
  } catch {
    // If lengths don't match, timingSafeEqual throws
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get raw body for signature verification
    const rawBody = await request.text();
    const signature = request.headers.get("x-signature");

    // Verify HMAC-SHA256 signature
    if (!verifySignature(rawBody, signature)) {
      console.error(
        "[AgentKit] Lemon Squeezy webhook signature verification failed"
      );
      return NextResponse.json(
        { error: "Signature verification failed" },
        { status: 403 }
      );
    }

    // Parse JSON payload
    let payload: LemonSqueezyWebhookPayload;
    try {
      payload = JSON.parse(rawBody);
    } catch (parseError) {
      console.error("[AgentKit] Failed to parse LS webhook JSON:", parseError);
      return NextResponse.json(
        { error: "Invalid JSON payload" },
        { status: 400 }
      );
    }

    // Validate against schema
    const parsed = LemonSqueezyWebhookSchema.safeParse(payload);
    if (!parsed.success) {
      const errors = parsed.error.issues.map((i) => i.message).join(", ");
      console.error(`[AgentKit] LS webhook validation failed: ${errors}`);
      return NextResponse.json(
        { error: "Invalid webhook payload" },
        { status: 400 }
      );
    }

    const {
      meta: { event_name },
      data: { id, attributes },
    } = parsed.data;

    // Idempotency check: skip if already processed
    if (isDuplicateEvent(id)) {
      console.log(
        `[AgentKit] Duplicate Lemon Squeezy webhook ignored: order_id=${id}`
      );
      return NextResponse.json(
        { status: "already_processed", order_id: id },
        { status: 200 }
      );
    }

    // Process the webhook event
    try {
      // Only process paid orders
      if (event_name === "order_created" && attributes.status === "paid") {
        // Sanitize before any storage or logging of user-supplied content
        const sanitizedEmail = attributes.user_email
          ? sanitizeEmail(attributes.user_email)
          : undefined;
        const sanitizedName = attributes.user_name
          ? sanitizeText(attributes.user_name)
          : undefined;
        const sanitizedProductName = attributes.first_order_item
          ?.product_name
          ? sanitizeText(attributes.first_order_item.product_name)
          : undefined;

        console.log(
          `[AgentKit] Processing Lemon Squeezy order: order_id=${id}, email=${sanitizedEmail}, product=${sanitizedProductName}, total=${attributes.total}`
        );

        // Mark as processed BEFORE async work to prevent race conditions
        markEventProcessed(id);

        // Future: send confirmation email, update database, trigger fulfillment
        // For now, log the sale for tracking
      } else {
        // Log other event types but don't fail
        console.log(
          `[AgentKit] Received LS webhook event: ${event_name}, status=${attributes.status}`
        );
        markEventProcessed(id);
      }
    } catch (processingError) {
      console.error(
        `[AgentKit] Error processing LS webhook ${id}:`,
        processingError
      );
      // Still return 200 to prevent Lemon Squeezy from retrying endlessly.
      // The event is marked processed; investigate via logs.
      return NextResponse.json(
        { status: "processing_error", order_id: id },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { status: "processed", order_id: id },
      { status: 200 }
    );
  } catch (error) {
    console.error("[AgentKit] Lemon Squeezy webhook error:", error);
    return NextResponse.json(
      { error: "Failed to process webhook" },
      { status: 500 }
    );
  }
}
