# AgentKit — Dhroov Action Items

**Created:** 2026-03-26
**Time estimate:** ~30-45 minutes total
**Revenue unlock:** Templates ready for sale once LS products created

---

## Step 1: Create Lemon Squeezy Products (20-25 min)

You already have an LS account (Store ID: 303597, rightfullyyours.lemonsqueezy.com).

### Individual Templates (10 products)

Go to https://app.lemonsqueezy.com/products → "New Product" for each:

| # | Product Name | Price | Type |
|---|-------------|-------|------|
| 1 | AgentKit: Solo Business Operations Agent | **$0** (free lead magnet) | Free download |
| 2 | AgentKit: Content Repurposing Pipeline | **$49** | Digital download |
| 3 | AgentKit: Customer Support Auto-Responder | **$49** | Digital download |
| 4 | AgentKit: Sales Outreach Automation | **$79** | Digital download |
| 5 | AgentKit: Weekly Business Intelligence Report | **$49** | Digital download |
| 6 | AgentKit: Social Media Manager Agent | **$49** | Digital download |
| 7 | AgentKit: Invoice & Expense Tracker Agent | **$29** | Digital download |
| 8 | AgentKit: Hiring Pipeline Agent | **$59** | Digital download |
| 9 | AgentKit: SEO Content Factory | **$79** | Digital download |
| 10 | AgentKit: Competitive Intelligence Monitor | **$49** | Digital download |

**For each product:**
1. Click "New Product"
2. Name: use exact name from table above
3. Price: use price from table
4. Description: "Pre-built AI agent workflow. Includes system prompt, MCP config, n8n workflow, and setup guide."
5. **File upload:** Upload the ZIP from `~/Claude_Code_Projects/agentkit/templates/`
   - Template 1: `templates/01-solo-business-operations/bundle.zip`
   - Template 2: `templates/02-content-repurposing/bundle.zip`
   - Template 3: `templates/03-customer-support/bundle.zip`
   - Template 4: `templates/04-sales-outreach/bundle.zip`
   - Template 5: `templates/05-business-intelligence/bundle.zip`
   - Template 6: `templates/06-social-media-manager/bundle.zip`
   - Template 7: `templates/07-invoice-expense-tracker/bundle.zip`
   - Template 8: `templates/08-hiring-pipeline/bundle.zip`
   - Template 9: `templates/09-seo-content-factory/bundle.zip`
   - Template 10: `templates/10-competitive-intelligence/bundle.zip`
6. Click "Publish"

### Bundles (2 products)

| Bundle | Price | Includes |
|--------|-------|----------|
| AgentKit: Solo Founder Bundle | **$149** | Templates 1, 2, 4, 6 (saves $78) |
| AgentKit: Agency Bundle | **$199** | Templates 2, 4, 6, 9, 10 (saves $107) |

For bundles, create a combined ZIP of the included template ZIPs, or just list the included template download links in the LS product description.

### Subscription (1 product)

| Product | Price | Type |
|---------|-------|------|
| AgentKit: All-Access Pass | **$29/month** | Subscription |

In LS: New Product → Subscription → $29/mo → Include all 10 template ZIPs as downloadable files.

---

## Step 2: Send Me the LS Product IDs and Checkout URLs (2 min)

After creating each product, LS shows a product page. I need:

1. **Product ID** (visible in the URL: `app.lemonsqueezy.com/products/XXXXXX`)
2. **Checkout URL** (click "Share" → copy checkout link, format: `https://rightfullyyours.lemonsqueezy.com/buy/XXXXXXXX`)

Just paste them here in chat like:
```
Template 1 (Solo Ops): ID 912345, https://rightfullyyours.lemonsqueezy.com/buy/abc123
Template 2 (Content): ID 912346, https://rightfullyyours.lemonsqueezy.com/buy/def456
...
```

I'll handle all the code changes to wire them in (replacing the Gumroad references with LS).

---

## Step 3: Verify Checkout Flow (5 min)

After I deploy the code update:

1. Go to https://agentkit-sandy.vercel.app
2. Click "Get Free Template" on Solo Business Operations → should open LS checkout
3. Click "Buy Now" on any paid template → should open LS checkout with correct price
4. Go to /bundles → verify bundle buy buttons work
5. Test the free template download (complete the $0 checkout)

---

## That's It

Everything else (migrating Gumroad→LS in code, marketing, SEO, content, backlinks) I'm handling right now.
