# Google Search Console Setup — Quick Reference
**Status:** Pre-launch, do this today
**Time Required:** 12 minutes
**Difficulty:** Very Easy (no coding)

---

## BEFORE YOU START
- [ ] Have 1Password open (you'll need nothing from it, but good habit)
- [ ] Go to [Google Search Console](https://search.google.com/search-console)
- [ ] Sign in with **dhroov@gmail.com** (check 1Password if password unclear)

---

## SETUP FLOW (5 steps, ~12 min)

### STEP 1: Add Property
**Time: 2 minutes**

1. Click **"Add Property"** (blue button, top left)
2. Select **"URL Prefix"** (NOT Domain)
3. Paste: `https://agentkit-sandy.vercel.app`
4. Click **"Continue"**

**Screenshot checkpoint:** You should see "Ownership verification pending" screen

---

### STEP 2: Verify with Meta Tag
**Time: 5 minutes**

GSC will show you a verification code. It looks like:
```
<meta name="google-site-verification" content="abc123xyz456..." />
```

**Option A: If you know where the <head> tag is in your code**
- Copy the meta tag
- Add it to your site's `<head>` section
- Deploy to Vercel
- Come back to GSC, click "Verify"

**Option B: If you're unsure (EASIEST)**
- Keep the GSC window open
- Slack/email the verification code to yourself or your dev
- Ask them to add it to `app/layout.tsx` (or `_document.js` for older Next.js)
- Once deployed, come back here and click "Verify"

**Screenshot checkpoint:** You should see "Ownership verified!" (green checkmark)

---

### STEP 3: Submit Sitemap
**Time: 2 minutes**

1. In GSC, click **"Sitemaps"** (left sidebar, under "Index")
2. Click **"Add a sitemap"**
3. Paste: `https://agentkit-sandy.vercel.app/sitemap.xml`
4. Click **"Submit"**

**Expected result:** "Sitemap submitted successfully"

**Screenshot checkpoint:** You should see "3 submitted" and "3 indexed" (3 URLs = homepage + 2 blog posts)

---

### STEP 4: Request Indexing for Key Pages
**Time: 3 minutes**

1. Use the **search bar at the top** of GSC
2. Paste each URL and press Enter:
   - `https://agentkit-sandy.vercel.app`
   - `https://agentkit-sandy.vercel.app/blog/best-ai-agent-templates`
   - `https://agentkit-sandy.vercel.app/blog/build-ai-agent-guide`

3. For each URL, click **"Request Indexing"** (blue button)

**Expected result:** "Request submitted" (takes 1-2 hours to crawl)

**Screenshot checkpoint:** All 3 URLs should say "URL is on Google" (green checkmark)

---

## THAT'S IT

You're done. Now check back in 7 days:

**7-Day Checkpoint:**
- Go to **Performance** tab
- Should show >0 impressions (your site appearing in search results)
- Should show >0 clicks (traffic arriving)

If you see 0 impressions after 7 days, reach out — there's an issue with indexing or sitemap.

---

## COMMON ISSUES

**Q: "Google-site-verification tag won't add to my code"**
A: If your framework doesn't support custom meta tags, use the **DNS verification method** instead. Ask your dev to add a DNS TXT record (alternative verification method in GSC).

**Q: "Sitemap says 'Failed to parse'"**
A: The sitemap.xml file might have an issue. Check that:
1. File exists at `/sitemap.xml`
2. It's valid XML (not HTML)
3. All URLs use `https://` (not `http://`)

**Q: "Indexation stuck at 1 URL"**
A: Normal. Google crawls gradually. Check back in 2-4 weeks. If still stuck, the site might be blocked in robots.txt — let me know.

**Q: "Status shows 'Not indexed – Noindex tag'"**
A: Someone added a `noindex` tag to the page. This blocks Google from indexing. Remove it and re-request indexing.

---

## WEEKLY CHECK-IN CHECKLIST

Every Monday at 9 AM, open GSC and verify:

- [ ] **Performance tab:** Clicks trending up (week-over-week)?
- [ ] **Core Web Vitals tab:** All metrics in green ("Good")?
- [ ] **Coverage tab:** Any new errors or blocked pages?
- [ ] **Sitemaps tab:** All URLs indexed?

**Action threshold:** If any check fails, reach out with a screenshot.

---

## NEXT: BACKLINK BUILDING

Once this is done (today), move to the **Backlink Strategy** section of `seo-backlink-strategy.md`:

- [ ] Start Tier 1 work (GitHub awesome lists, Dev.to, Reddit)
- [ ] Track in [Google Sheet template](#) (link to come)
- [ ] Report progress every Friday

---

**Setup completed:** ___________  (date)
**Verified by:** ___________  (name)
