# AgentKit — Project Instructions

## Overview
AgentKit is an AI agent workflow template marketplace. Sells downloadable bundles (system prompt + MCP config + n8n workflow + setup guide) via Lemon Squeezy (rightfullyyours store). Landing page on Vercel. **SITE IS LIVE. All 13 LS products created with checkout URLs wired (2026-03-26).**

## Branding
- **Name:** AgentKit
- **Tagline:** "Pre-built AI agent workflows. Download. Configure. Run."
- **Colors:** Indigo (#6366F1), Slate (#1E293B), Cyan (#06B6D4)
- **Fonts:** Inter (body), Fira Code (code)
- **Anonymous branding** — NOT affiliated with ThinkFraction, Drew, or Dhroov

## Tech Stack
- Next.js 16 + TypeScript + Tailwind CSS
- Lemon Squeezy for payments/delivery/subscriptions (rightfullyyours store, 13 products live)
- ConvertKit for email capture
- Vercel for hosting
- No database — template metadata in `content/templates.ts`

## Key Files
- `content/templates.ts` — All template metadata, prices, descriptions
- `app/page.tsx` — Homepage (hero, template grid, pricing, FAQ, email capture)
- `app/templates/[slug]/page.tsx` — Template detail pages (10 total)
- `app/bundles/page.tsx` — Bundle comparison page
- `app/api/subscribe/route.ts` — ConvertKit email subscription endpoint
- `templates/` — The actual template bundles (10 folders, 5 files each)

## Templates (10)
1. Solo Business Operations Agent ($99 / FREE lead magnet)
2. Content Repurposing Pipeline ($49)
3. Customer Support Auto-Responder ($49)
4. Sales Outreach Automation ($79)
5. Weekly Business Intelligence Report ($49)
6. Social Media Manager Agent ($49)
7. Invoice & Expense Tracker Agent ($29)
8. Hiring Pipeline Agent ($59)
9. SEO Content Factory ($79)
10. Competitive Intelligence Monitor ($49)

## Bundles
- Solo Founder Bundle ($149): templates 1, 2, 4, 6
- Agency Bundle ($199): templates 2, 4, 6, 9, 10
- All-Access Pass ($29/month): all templates

## Environment Variables
```
NEXT_PUBLIC_APP_URL=https://agentkit-ai.vercel.app
CONVERTKIT_API_KEY=
CONVERTKIT_FORM_ID=
LEMONSQUEEZY_API_KEY=
LEMONSQUEEZY_WEBHOOK_SECRET=
```

## Deployment
- Landing page: LIVE on Vercel (`vercel --prod`)
- Payments: Lemon Squeezy (rightfullyyours store) — all 13 checkout URLs wired in `content/templates.ts`
- Domain: agentkit-sandy.vercel.app (production)

## Revenue Model
- Per-template purchase ($29-$99) — 10 templates
- Bundle discounts: Solo Founder ($149, 46% off), Agency ($199, 28% off)
- All-Access subscription ($29/month)
- Free flagship template (#1 Solo Business Operations) as lead magnet

## Key Files (added Phase 1)
- `scripts/generate-og-images.mjs` — Satori + resvg OG image generator (run: `node scripts/generate-og-images.mjs`)
- `public/og/` — 11 static OG images (1200x630 PNG, ~30KB each)

## Status (2026-03-27)
- Site: LIVE (agentkit-sandy.vercel.app)
- LS Products: 13 created (10 templates + 2 bundles + 1 subscription)
- Checkout URLs: All wired in `content/templates.ts`
- OG Images: 11 deployed (1 homepage + 10 templates), meta tags wired in layout.tsx + [slug]/page.tsx
- Email Subscription: Verified E2E (ConvertKit v3 API, form 9253219)
- Credentials: ALL deployed to Vercel production
  - `LEMONSQUEEZY_API_KEY` — set
  - `LEMONSQUEEZY_WEBHOOK_SECRET` — set
  - `CONVERTKIT_API_KEY` — set (v3 API key format, NOT kit_ prefix)
  - `CONVERTKIT_FORM_ID` — set (9253219, https://app.kit.com/forms/9253219)
  - `NEXTAUTH_SECRET` — set
  - `NEXT_PUBLIC_APP_URL` — set
  - Webhook URL configured in LS: `rightfullyyours.co/api/webhooks/lemonsqueezy`
- Revenue: $0 (SEO content deployed, marketing channels prepped, launch Phase 4 pending)

### Phase History
- **Phase 1 (2026-03-26):** COMPLETE — Redeploy, OG images (11), email sub verified E2E
- **Phase 2 (2026-03-27):** COMPLETE — SEO blog content
  - 5 blog articles upgraded: BlogPosting schema, internal template links, free template CTAs
  - New sections added: "How to Evaluate Templates", "Choosing Right Model", "System Prompt Checklist", "MCP Security", "All Templates with n8n"
  - Blog layout wrapper created (app/blog/layout.tsx) with breadcrumbs + CTA footer
  - Sitemap expanded: 17 URLs (homepage + bundles + 5 blogs + 10 templates)
  - Sitemap domain fixed: agentkit.vercel.app → agentkit-sandy.vercel.app
  - GSC: Property verified, sitemap submitted (pending re-crawl), indexing quota hit
  - Deployed to production
- **Phase 3 (2026-03-27):** COMPLETE — Marketing channel prep
  - ConvertKit: 5-email welcome sequence LIVE (Dhroov entered manually via Kit UI)
  - ConvertKit automation: Form 9253219 → "AgentKit Welcome Sequence" (Visual Automations)
  - ConvertKit cost: $30/mo Creator plan (currently free trial — required for automations/sequences)
  - Twitter: 5 threads post-ready at `marketing/TWITTER-THREADS-POST-READY.md`
  - Twitter account: @TheFakeConte (anonymous, not linked to Dhroov/ThinkFraction)
  - Twitter schedule: 1 thread every 2 days, Mar 31 → Apr 8
  - Files created: `marketing/DHROOV-CONVERTKIT-EMAILS.md`, `marketing/TWITTER-THREADS-POST-READY.md`

### Remaining
- Phase 4: Launch execution (Reddit seeding Mar 29+, Twitter threads Mar 31+ @TheFakeConte, ProductHunt prep needed)
- GSC: Resubmit sitemap + request indexing for 7 key URLs (quota resets daily)
- Nice-to-have: /blog index page, robots.txt, Bing Webmaster Tools submission

## Important Notes
- ConvertKit API key MUST be v3 format (short alphanumeric like `HL3Z...`), NOT v4 kit_ prefix
- OG images are static PNGs — regenerate with `node scripts/generate-og-images.mjs` if template names change (requires Inter Bold TTF at /tmp/inter-bold.ttf)
- Next.js 16 middleware.ts deprecation warning — rename to proxy.ts when upgrading
