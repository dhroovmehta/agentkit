import { describe, it, expect } from "vitest";
import { sanitizeText, sanitizeEmail, containsXSS } from "@/lib/sanitize";

describe("sanitizeText", () => {
  it("strips HTML tags", () => {
    expect(sanitizeText("<b>bold</b>")).toBe("bold");
    expect(sanitizeText('<a href="evil.com">click</a>')).toBe("click");
  });

  it("strips script tags", () => {
    expect(sanitizeText('<script>alert("xss")</script>')).toBe(
      'alert("xss")'
    );
  });

  it("strips content that looks like HTML tags", () => {
    // "< 2 >" matches the tag-stripping regex — this is intentional
    // defense-in-depth behavior
    const result = sanitizeText("1 < 2 > 0");
    expect(result).toBe("1  0");
  });

  it("encodes bare angle brackets after tag stripping", () => {
    // Angle brackets that don't form tags get encoded
    const result = sanitizeText("a<b");
    expect(result).toContain("&lt;");
  });

  it("removes null bytes", () => {
    expect(sanitizeText("hello\0world")).toBe("helloworld");
  });

  it("trims whitespace", () => {
    expect(sanitizeText("  hello  ")).toBe("hello");
  });

  it("handles non-string input gracefully", () => {
    // TypeScript would catch this, but defense-in-depth
    expect(sanitizeText(null as unknown as string)).toBe("");
    expect(sanitizeText(undefined as unknown as string)).toBe("");
    expect(sanitizeText(42 as unknown as string)).toBe("");
  });

  it("preserves normal text", () => {
    expect(sanitizeText("Hello, world! This is a test.")).toBe(
      "Hello, world! This is a test."
    );
  });
});

describe("sanitizeEmail", () => {
  it("lowercases email", () => {
    expect(sanitizeEmail("User@Example.COM")).toBe("user@example.com");
  });

  it("strips invalid characters", () => {
    expect(sanitizeEmail("user<script>@example.com")).toBe(
      "userscript@example.com"
    );
  });

  it("preserves valid email characters", () => {
    expect(sanitizeEmail("user+tag@sub.example.com")).toBe(
      "user+tag@sub.example.com"
    );
  });

  it("handles non-string input", () => {
    expect(sanitizeEmail(null as unknown as string)).toBe("");
  });
});

describe("containsXSS", () => {
  it("detects script tags", () => {
    expect(containsXSS('<script>alert(1)</script>')).toBe(true);
    expect(containsXSS("<SCRIPT>alert(1)</SCRIPT>")).toBe(true);
  });

  it("detects javascript: protocol", () => {
    expect(containsXSS('javascript:alert(1)')).toBe(true);
  });

  it("detects event handlers", () => {
    expect(containsXSS('onerror=alert(1)')).toBe(true);
    expect(containsXSS("onclick =evil()")).toBe(true);
  });

  it("detects iframe injection", () => {
    expect(containsXSS('<iframe src="evil.com">')).toBe(true);
  });

  it("detects data:text/html", () => {
    expect(containsXSS('data: text/html;base64,PHNjcmlwdD4=')).toBe(true);
  });

  it("returns false for clean text", () => {
    expect(containsXSS("Hello, world!")).toBe(false);
    expect(containsXSS("user@example.com")).toBe(false);
    expect(containsXSS("This is a normal sentence with numbers 123.")).toBe(
      false
    );
  });

  it("handles non-string input", () => {
    expect(containsXSS(null as unknown as string)).toBe(false);
  });
});
