# AgentKit — Project Instructions

## Overview
AgentKit is an AI agent workflow template marketplace. Sells downloadable bundles (system prompt + MCP config + n8n workflow + setup guide) via Gumroad. Landing page on Vercel.

## Branding
- **Name:** AgentKit
- **Tagline:** "Pre-built AI agent workflows. Download. Configure. Run."
- **Colors:** Indigo (#6366F1), Slate (#1E293B), Cyan (#06B6D4)
- **Fonts:** Inter (body), Fira Code (code)
- **Anonymous branding** — NOT affiliated with ThinkFraction, Drew, or Dhroov

## Tech Stack
- Next.js 14 + TypeScript + Tailwind CSS
- Gumroad for payments/delivery/subscriptions
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
GUMROAD_ACCESS_TOKEN=
```

## Deployment
- Landing page: `vercel --prod`
- Templates: ZIP and upload to Gumroad manually
- Domain: agentkit-ai.vercel.app (upgrade to custom domain later)

## Revenue Model
- Per-template purchase ($19-$99)
- Bundle discounts (up to 46% off)
- All-Access subscription ($29/month)
- Free flagship template as lead magnet
