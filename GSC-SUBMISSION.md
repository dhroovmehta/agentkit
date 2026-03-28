# Google Search Console — Sitemap Submission Guide

## Prerequisites
- Google account with access to Google Search Console
- Verified ownership of the domain (agentkit-sandy.vercel.app)

---

## Step 1: Open Google Search Console

Go to https://search.google.com/search-console

If you haven't added this property yet, go to Step 1A first. Otherwise skip to Step 2.

### Step 1A: Add Property (first time only)

1. Click the property dropdown (top-left) → "Add property"
2. Choose **"URL prefix"** (right side)
3. Enter: `https://agentkit-sandy.vercel.app`
4. Click "Continue"
5. For verification, choose **"HTML tag"** method
   - Copy the meta tag content value (just the long string, e.g. `wLbd6xY9C9Au3kOPz2sR6J_dDdh5E4dvUDesuqo9lIA`)
   - This is already in the site's `layout.tsx` under `metadata.verification.google`
   - Click "Verify" — it should succeed immediately since the tag is already deployed

---

## Step 2: Submit the Sitemap

1. In the left sidebar, click **"Sitemaps"**
2. In the "Add a new sitemap" field, type: `sitemap.xml`
   - The full URL shown will be: `https://agentkit-sandy.vercel.app/sitemap.xml`
3. Click **"Submit"**
4. You should see "Sitemap submitted successfully"
5. Status will show "Pending" initially — Google will process it within minutes to hours

---

## Step 3: Verify Sitemap Was Processed

1. Stay on the Sitemaps page
2. Wait for the status to change from "Pending" to "Success"
3. Click on the sitemap URL to see details:
   - **Discovered URLs:** Should show 17
   - **Status:** Success
4. If status shows "Couldn't fetch" — the sitemap URL may be wrong. Verify by visiting https://agentkit-sandy.vercel.app/sitemap.xml in your browser

---

## Step 4: Request Indexing for Key Pages (Optional but Recommended)

For faster indexing of the most important pages:

1. In the left sidebar, click **"URL Inspection"**
2. Paste each URL one at a time and click Enter:
   - `https://agentkit-sandy.vercel.app/`
   - `https://agentkit-sandy.vercel.app/blog/best-ai-agent-templates`
   - `https://agentkit-sandy.vercel.app/blog/build-ai-agent-guide`
   - `https://agentkit-sandy.vercel.app/blog/system-prompts-guide`
   - `https://agentkit-sandy.vercel.app/blog/mcp-servers-explained`
   - `https://agentkit-sandy.vercel.app/blog/n8n-ai-agent-workflows`
   - `https://agentkit-sandy.vercel.app/templates/solo-business-operations`
3. For each URL, click **"Request Indexing"**
4. Wait for the "Indexing requested" confirmation before doing the next one
5. Note: Google limits indexing requests to ~10-12 per day per property

---

## Step 5: Monitor Coverage (Check Back in 2-3 Days)

1. In the left sidebar, click **"Pages"** (formerly "Coverage")
2. Check the summary:
   - **Indexed:** Pages Google has added to search results
   - **Not indexed:** Pages discovered but not yet indexed (with reasons)
3. Common "not indexed" reasons and fixes:
   - **"Discovered - currently not indexed"** — Google found it but hasn't crawled yet. Wait.
   - **"Crawled - currently not indexed"** — Google crawled but didn't find it valuable enough. Check content quality.
   - **"Excluded by robots.txt"** — Check your robots.txt isn't blocking anything

---

## Expected Timeline

| Milestone | Timeframe |
|-----------|-----------|
| Sitemap processed | Minutes to hours |
| Pages discovered | 1-2 days |
| Pages crawled | 2-5 days |
| Pages indexed | 3-14 days |
| Rankings appear | 1-4 weeks |

---

## What Was Submitted

17 URLs in the sitemap:

| Type | Count | Priority | URLs |
|------|-------|----------|------|
| Homepage | 1 | 1.0 | `/` |
| Bundles | 1 | 0.8 | `/bundles` |
| Blog articles | 5 | 0.8 | `/blog/best-ai-agent-templates`, `/blog/build-ai-agent-guide`, `/blog/mcp-servers-explained`, `/blog/n8n-ai-agent-workflows`, `/blog/system-prompts-guide` |
| Template pages | 10 | 0.7 | `/templates/solo-business-operations`, `/templates/content-repurposing`, `/templates/customer-support-auto-responder`, `/templates/sales-outreach-automation`, `/templates/weekly-bi-report`, `/templates/social-media-manager`, `/templates/invoice-expense-tracker`, `/templates/hiring-pipeline`, `/templates/seo-content-factory`, `/templates/competitive-intelligence` |
