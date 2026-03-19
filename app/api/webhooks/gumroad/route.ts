import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { isDuplicateEvent, markEventProcessed } from "@/lib/idempotency";
import { sanitizeText, sanitizeEmail } from "@/lib/sanitize";

/**
 * Gumroad Ping (webhook) handler.
 *
 * Gumroad sends a POST with form-encoded data on each sale.
 * See: https://help.gumroad.com/article/149-gumroad-ping
 *
 * Security layers:
 * 1. Webhook path is exempt from rate limiting (middleware.ts)
 * 2. seller_id verification (below)
 * 3. Idempotency dedup (lib/idempotency.ts)
 * 4. Zod schema validation on all fields
 * 5. Input sanitization before any storage
 */

const GumroadWebhookSchema = z.object({
  sale_id: z
    .string()
    .min(1, "sale_id is required")
    .max(100, "sale_id is too long"),
  seller_id: z.string().max(100).optional(),
  email: z.string().max(254).optional(),
  product_name: z.string().max(500).optional(),
  price: z.string().max(20).optional(),
  product_id: z.string().max(100).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract fields into a plain object for zod validation
    const rawPayload: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") {
        rawPayload[key] = value;
      }
    });

    // Validate with zod
    const parsed = GumroadWebhookSchema.safeParse(rawPayload);
    if (!parsed.success) {
      const errors = parsed.error.issues.map((i) => i.message).join(", ");
      console.error(`[AgentKit] Gumroad webhook validation failed: ${errors}`);
      return NextResponse.json(
        { error: "Invalid webhook payload" },
        { status: 400 }
      );
    }

    const { sale_id, seller_id, email, product_name, price } = parsed.data;

    // Verify seller_id matches our account (basic auth)
    const expectedSellerId = process.env.GUMROAD_SELLER_ID;
    if (expectedSellerId && seller_id !== expectedSellerId) {
      console.error(
        `[AgentKit] Gumroad webhook seller_id mismatch: expected ${expectedSellerId}, got ${seller_id}`
      );
      return NextResponse.json(
        { error: "Unauthorized webhook source" },
        { status: 403 }
      );
    }

    // Idempotency check: skip if already processed
    if (isDuplicateEvent(sale_id)) {
      console.log(
        `[AgentKit] Duplicate Gumroad webhook ignored: sale_id=${sale_id}`
      );
      return NextResponse.json(
        { status: "already_processed", sale_id },
        { status: 200 }
      );
    }

    // Process the sale
    try {
      // Sanitize before any storage or logging of user-supplied content
      const sanitizedEmail = email ? sanitizeEmail(email) : undefined;
      const sanitizedProductName = product_name
        ? sanitizeText(product_name)
        : undefined;

      console.log(
        `[AgentKit] Processing Gumroad sale: sale_id=${sale_id}, email=${sanitizedEmail}, product=${sanitizedProductName}, price=${price}`
      );

      // Mark as processed BEFORE async work to prevent race conditions
      markEventProcessed(sale_id);

      // Future: send confirmation email, update database, trigger fulfillment
      // For now, log the sale for tracking
    } catch (processingError) {
      console.error(
        `[AgentKit] Error processing Gumroad sale ${sale_id}:`,
        processingError
      );
      // Still return 200 to prevent Gumroad from retrying endlessly.
      // The sale is marked processed; investigate via logs.
      return NextResponse.json(
        { status: "processing_error", sale_id },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { status: "processed", sale_id },
      { status: 200 }
    );
  } catch (error) {
    console.error("[AgentKit] Gumroad webhook error:", error);
    return NextResponse.json(
      { error: "Failed to process webhook" },
      { status: 500 }
    );
  }
}
