/**
 * Input sanitization utilities.
 *
 * Strips dangerous HTML/script content from user-supplied text
 * before it's stored in a database or rendered.
 *
 * This is a defense-in-depth measure — output encoding and CSP
 * are the primary XSS defenses, but sanitizing input reduces
 * stored XSS risk if those controls are bypassed.
 */

/**
 * Strip HTML tags and dangerous characters from user text.
 * Preserves alphanumeric, common punctuation, and whitespace.
 */
export function sanitizeText(input: string): string {
  if (typeof input !== "string") return "";

  return (
    input
      // Remove HTML tags
      .replace(/<[^>]*>/g, "")
      // Remove null bytes
      .replace(/\0/g, "")
      // Encode HTML entities for any remaining angle brackets
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      // Trim whitespace
      .trim()
  );
}

/**
 * Sanitize an email address.
 * Strips everything except valid email characters.
 */
export function sanitizeEmail(input: string): string {
  if (typeof input !== "string") return "";

  return (
    input
      // Remove any character not valid in an email
      .replace(/[^a-zA-Z0-9@._+\-]/g, "")
      .toLowerCase()
      .trim()
  );
}

/**
 * Check if a string contains potential XSS payloads.
 * Returns true if suspicious content is detected.
 */
export function containsXSS(input: string): boolean {
  if (typeof input !== "string") return false;

  const xssPatterns = [
    /<script[\s>]/i,
    /javascript:/i,
    /on\w+\s*=/i, // onclick=, onerror=, etc.
    /data:\s*text\/html/i,
    /vbscript:/i,
    /<iframe[\s>]/i,
    /<object[\s>]/i,
    /<embed[\s>]/i,
    /<svg[\s/].*?on\w+/i,
  ];

  return xssPatterns.some((pattern) => pattern.test(input));
}
