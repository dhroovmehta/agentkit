/**
 * Generate static OG images (1200x630) for AgentKit.
 * Uses Satori (HTML/CSS → SVG) + @resvg/resvg-js (SVG → PNG).
 *
 * Run: node scripts/generate-og-images.mjs
 */

import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public", "og");

mkdirSync(OUT_DIR, { recursive: true });

// Load Inter font for Satori (needs raw .ttf/.woff)
// We'll fetch Inter from Google Fonts CDN
function loadFont() {
  // Static Inter Bold TTF from Google Fonts
  const buf = readFileSync("/tmp/inter-bold.ttf");
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
}

const templates = [
  {
    slug: "homepage",
    name: "AgentKit",
    tagline: "Pre-built AI Agent Workflows. Download. Configure. Run.",
    category: "10 Templates",
    accent: "#6366F1", // indigo
  },
  {
    slug: "solo-business-operations",
    name: "Solo Business Operations Agent",
    tagline: "Run 8 departments of your solo business with one AI agent",
    category: "Operations",
    accent: "#6366F1",
  },
  {
    slug: "content-repurposing",
    name: "Content Repurposing Pipeline",
    tagline: "Turn one blog post into 10 pieces of content automatically",
    category: "Content",
    accent: "#06B6D4",
  },
  {
    slug: "customer-support-auto-responder",
    name: "Customer Support Auto-Responder",
    tagline: "Classify, respond, and escalate support tickets automatically",
    category: "Support",
    accent: "#06B6D4",
  },
  {
    slug: "sales-outreach-automation",
    name: "Sales Outreach Automation",
    tagline: "Research leads, personalize emails, and run follow-up sequences",
    category: "Sales",
    accent: "#6366F1",
  },
  {
    slug: "weekly-bi-report",
    name: "Weekly Business Intelligence Report",
    tagline: "Automated competitor and market intelligence delivered weekly",
    category: "Analytics",
    accent: "#06B6D4",
  },
  {
    slug: "social-media-manager",
    name: "Social Media Manager Agent",
    tagline: "Content calendar, posting schedule, and engagement monitoring",
    category: "Marketing",
    accent: "#6366F1",
  },
  {
    slug: "invoice-expense-tracker",
    name: "Invoice & Expense Tracker Agent",
    tagline: "Scan receipts, categorize expenses, and generate monthly reports",
    category: "Finance",
    accent: "#06B6D4",
  },
  {
    slug: "hiring-pipeline",
    name: "Hiring Pipeline Agent",
    tagline: "Screen resumes, schedule interviews, and draft responses",
    category: "HR",
    accent: "#6366F1",
  },
  {
    slug: "seo-content-factory",
    name: "SEO Content Factory",
    tagline: "Keyword research to published article in one automated pipeline",
    category: "Marketing",
    accent: "#06B6D4",
  },
  {
    slug: "competitive-intelligence",
    name: "Competitive Intelligence Monitor",
    tagline: "Track competitor changes and get weekly alerts",
    category: "Analytics",
    accent: "#6366F1",
  },
];

function buildOgMarkup(template) {
  const isHomepage = template.slug === "homepage";

  return {
    type: "div",
    props: {
      style: {
        width: 1200,
        height: 630,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 80px",
        backgroundColor: "#0F172A",
        fontFamily: "Inter",
      },
      children: [
        // Top section
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column" },
            children: [
              // Category badge
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 24,
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          backgroundColor: template.accent + "22",
                          color: template.accent,
                          padding: "8px 20px",
                          borderRadius: 100,
                          fontSize: 20,
                          fontWeight: 600,
                        },
                        children: template.category,
                      },
                    },
                  ],
                },
              },
              // Title
              {
                type: "div",
                props: {
                  style: {
                    color: "#F8FAFC",
                    fontSize: isHomepage ? 64 : 52,
                    fontWeight: 800,
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    maxWidth: 900,
                  },
                  children: template.name,
                },
              },
              // Tagline
              {
                type: "div",
                props: {
                  style: {
                    color: "#94A3B8",
                    fontSize: 28,
                    fontWeight: 400,
                    lineHeight: 1.4,
                    marginTop: 20,
                    maxWidth: 800,
                  },
                  children: template.tagline,
                },
              },
            ],
          },
        },
        // Bottom bar
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            },
            children: [
              // Logo area
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  },
                  children: [
                    // Logo square
                    {
                      type: "div",
                      props: {
                        style: {
                          width: 40,
                          height: 40,
                          backgroundColor: template.accent,
                          borderRadius: 10,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: 20,
                          fontWeight: 800,
                        },
                        children: "A",
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          color: "#F8FAFC",
                          fontSize: 24,
                          fontWeight: 700,
                        },
                        children: "AgentKit",
                      },
                    },
                  ],
                },
              },
              // URL
              {
                type: "div",
                props: {
                  style: {
                    color: "#64748B",
                    fontSize: 20,
                  },
                  children: "agentkit-sandy.vercel.app",
                },
              },
            ],
          },
        },
      ],
    },
  };
}

async function generate() {
  console.log("Loading font...");
  const fontData = await loadFont();

  for (const template of templates) {
    console.log(`Generating: ${template.slug}.png`);

    const markup = buildOgMarkup(template);

    const svg = await satori(markup, {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          weight: 400,
          style: "normal",
        },
        {
          name: "Inter",
          data: fontData,
          weight: 600,
          style: "normal",
        },
        {
          name: "Inter",
          data: fontData,
          weight: 800,
          style: "normal",
        },
      ],
    });

    const resvg = new Resvg(svg, {
      fitTo: { mode: "width", value: 1200 },
    });

    const png = resvg.render().asPng();
    const outPath = join(OUT_DIR, `${template.slug}.png`);
    writeFileSync(outPath, png);
    console.log(`  → ${outPath}`);
  }

  console.log(`\nDone! Generated ${templates.length} OG images.`);
}

generate().catch((err) => {
  console.error("Failed to generate OG images:", err);
  process.exit(1);
});
