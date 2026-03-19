# AgentKit Implementation Plan

## Phase 1: Next.js Landing Page (Core)
1. Initialize Next.js 14 project with TypeScript + Tailwind
2. Create template metadata content file (`content/templates.ts`)
3. Build all components: Navbar, Footer, TemplateCard, PricingTable, TemplatePreview, FAQ, TestimonialCard
4. Build pages: Homepage (hero + grid + pricing + FAQ), Template detail pages (`/templates/[slug]`), Bundles page
5. Build API route: `/api/subscribe` for ConvertKit integration
6. Configure branding: Inter + Fira Code fonts, indigo/slate/cyan color palette
7. Add SEO: meta tags, OG image placeholder, proper head tags

## Phase 2: Template Bundles (10 templates)
For each of 10 templates, create:
- `system-prompt.txt` (2,000-5,000 words)
- `mcp-config.json` (Claude Desktop/Cursor ready)
- `workflow-n8n.json` (importable n8n workflow)
- `setup-guide.md` (10-15 pages with sections)
- `README.md` (quick-start reference)

Templates:
1. Solo Business Operations Agent ($99) - FREE lead magnet
2. Content Repurposing Pipeline ($49)
3. Customer Support Auto-Responder ($49)
4. Sales Outreach Automation ($79)
5. Weekly Business Intelligence Report ($49)
6. Social Media Manager Agent ($49)
7. Invoice & Expense Tracker Agent ($29)
8. Hiring Pipeline Agent ($59)
9. SEO Content Factory ($79)
10. Competitive Intelligence Monitor ($49)

## Phase 3: Testing & Build Verification
- Run `npm run build` to verify no errors
- Verify all template detail pages render
- Verify API route compiles
- Test responsive design considerations

## Phase 4: Deployment Config
- Vercel config (vercel.json)
- Environment variable documentation (.env.example)
- CLAUDE.md for project

## Phase 5: Completion Report
- COMPLETION.md with what works, what's blocked, deployment status

## Tech Stack (per PRD)
- Next.js 14 + Tailwind CSS + TypeScript
- Gumroad for payments/delivery
- ConvertKit for email
- Vercel for hosting
- No database needed
