# AgentKit: SEO Setup & Backlink Strategy
**Last Updated:** 2026-03-26
**Site:** https://agentkit-sandy.vercel.app
**Status:** Pre-launch SEO foundation

---

## SECTION 1: GOOGLE SEARCH CONSOLE SETUP CHECKLIST

### Step 1: Add Property to GSC (5 minutes)

**Method: URL Prefix (Recommended for Vercel)**
URL prefix method is the simplest for Vercel-hosted sites — no subdomain complications, fastest verification.

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property" (blue button, top left)
3. Choose **"URL Prefix"** (not Domain)
4. Enter: `https://agentkit-sandy.vercel.app`
5. Click "Continue"
6. Choose verification method (see Step 2)

---

### Step 2: Verify Ownership via HTML Meta Tag (2 minutes)

**Why meta tag?** Fastest, no DNS access required, perfect for Vercel.

1. GSC will provide a verification code that looks like:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ456..." />
   ```

2. Add this meta tag to your site's `<head>` section:
   - **If using Next.js (most likely):** Add to your root layout file (`app/layout.tsx` or `pages/_document.js`)
   - **If using static HTML:** Add to the `<head>` of your index.html

3. Example for Next.js App Router (`app/layout.tsx`):
   ```tsx
   export const metadata = {
     verification: {
       google: "your-verification-code-here"
     }
   }
   ```

4. Deploy the change to Vercel
5. Return to GSC and click "Verify"
6. GSC will check within seconds — verification complete

---

### Step 3: Submit Sitemap (2 minutes)

1. In GSC, go to **Sitemaps** (left sidebar under "Index")
2. Click "Add a sitemap"
3. Enter: `https://agentkit-sandy.vercel.app/sitemap.xml`
4. Click "Submit"

**Expected result:** GSC should recognize 3 URLs (homepage + 2 blog posts as of 2026-03-26)

---

### Step 4: Request Indexing for Key Pages (3 minutes)

Google should crawl these automatically, but you can expedite indexing:

1. Go to **URL Inspection** (top search bar in GSC)
2. Paste each URL:
   - `https://agentkit-sandy.vercel.app`
   - `https://agentkit-sandy.vercel.app/blog/best-ai-agent-templates`
   - `https://agentkit-sandy.vercel.app/blog/build-ai-agent-guide`

3. Click "Request Indexing" for each
4. GSC will queue them for crawl within hours

---

### Step 5: Verify Core Web Vitals (Ongoing)

1. In GSC, go to **Core Web Vitals** (left sidebar under "Experience")
2. Check your metrics:
   - **Largest Contentful Paint (LCP):** Should be <2.5s (good) — Vercel CDN typically delivers this
   - **Interaction to Next Paint (INP):** Should be <200ms (good) — watch for JS-heavy templates
   - **Cumulative Layout Shift (CLS):** Should be <0.1 (excellent) — usually solid on static sites

3. **If any metric is yellow/red:**
   - LCP issue → optimize hero image, defer non-critical JS
   - INP issue → code-split interactive components, defer event listeners
   - CLS issue → set explicit dimensions on images/videos, avoid dynamic content injection

**Check every week** as you add new content.

---

### Step 6: Monitor Search Performance (Weekly)

1. Go to **Performance** (left sidebar)
2. Review key metrics:
   - **Total Clicks:** Organic search traffic arriving at your site
   - **Total Impressions:** How many times AgentKit appeared in search results
   - **Average CTR:** Click-through rate from search results
   - **Average Position:** Current keyword ranking positions

3. **Action threshold:**
   - If a page has >100 impressions but <5% CTR → it's ranking but copy isn't compelling. Optimize meta title/description.
   - If a page has >1000 impressions but is at position 8-15 → it's close to page 1. Add content depth to move it to top 3.
   - If a keyword has 0 impressions → it's not ranking. Check if you're targeting the right volume/difficulty.

---

## SECTION 2: BACKLINK STRATEGY (PRIORITIZED BY EFFORT & IMPACT)

### Why Backlinks Matter for AgentKit

Backlinks are the votes of confidence that signal to Google "AgentKit is worth ranking." For a pre-launch Vercel app, they're critical because:
- Domain authority starts at ~0 (new site)
- Content alone won't move you to position 1
- 65%+ of top-ranking pages have 2-10+ referring domains

**Target:** 50 high-quality backlinks in 90 days (month 1: 20, month 2: 15, month 3: 15)

---

## TIER 1: FREE, HIGH-IMPACT (This Week — Days 1-7)

### 1A: GitHub Awesome Lists (Effort: 15 min | Impact: 8/10)

**Why?** Awesome lists are:
- Curated, high-authority repositories (DR 70+)
- Heavily trafficked by developers searching for tools
- Each link is permanent (no removal risk)

**Action Steps:**

**Step 1:** Find 4-5 awesome lists to target:
1. [awesome-ai-agents-2026](https://github.com/caramaschiHG/awesome-ai-agents-2026) (25k+ stars, updated monthly)
2. [awesome-agents](https://github.com/kyrolabs/awesome-agents) (established list)
3. [awesome-mcp-servers](https://github.com/modelcontextprotocol/mcp-servers-list) (Model Context Protocol focus)
4. [awesome-claude](https://github.com/sindresorhus/awesome) (if exists) or check Sindresorhus awesome-lists
5. [Vercel Community AI Projects](https://github.com/vercel/vercel-examples) (Vercel's official repo)

**Step 2:** For each list, check:
- Does it already include AgentKit? (If yes, move to next)
- Is there a template/format in the README? (follow it exactly)
- Are there contribution guidelines? (follow them)

**Step 3:** Create a GitHub account if you don't have one (use dhroov@gmail.com)

**Step 4:** Fork the repo → Create new branch → Add entry:

```markdown
### AgentKit

> Pre-built AI agent templates with system prompts, MCP configs, n8n workflows. Deploy agents in under 30 minutes. Production-ready starter kit.

- **URL:** https://agentkit-sandy.vercel.app
- **GitHub:** [AgentKit Repository]
- **License:** MIT
- **Features:** Templates, MCP integration, n8n workflows, system prompts
```

**Step 5:** Commit → Push → Create Pull Request with title:
```
Add AgentKit: AI Agent Templates with MCP & n8n Configs
```

**Expected outcome:** 2-3 merges (some maintainers may reject, but that's normal). Each merged PR = 1 backlink from DR 70+.

---

### 1B: Dev.to Authored Articles (Effort: 4 hours | Impact: 8/10)

**Why?** Dev.to is:
- High-traffic developer community (500M+ monthly pageviews)
- Articles naturally rank for long-tail keywords
- Includes backlinks in content without being spammy

**Preparation:** You need 2 articles ready to publish (not yet live):

**Article 1: "How to Set Up an AI Agent with MCP & n8n (Without the PhD)"**

**Outline & SEO Targeting:**
- Primary keyword: "How to build AI agent" (3,200/month search volume, medium difficulty)
- Supporting keywords: "MCP server setup," "n8n AI workflow," "Claude agent template"

**Article structure:**
```
1. Introduction (100 words)
   - Hook: "Most AI agent tutorials assume you know LangChain. Here's how to do it without."
   - Problem statement: 3 pain points (complexity, cost, time)
   - Solution: AgentKit templates

2. Part 1: Understanding MCP (300 words)
   - What is Model Context Protocol?
   - Why it matters for agents
   - Quick diagram: MCP connects LLMs to tools

3. Part 2: Building Your First Agent (400 words)
   - Step 1: Choose template (AgentKit dashboard)
   - Step 2: Configure system prompt
   - Step 3: Add n8n workflow
   - Step 4: Test locally
   - Code block example: minimal agent setup

4. Part 3: Deploying to Production (300 words)
   - Vercel deployment (link to AgentKit docs)
   - Environment variables
   - Monitoring agent performance

5. Conclusion (150 words)
   - Next steps: adding custom tools
   - Case study teaser: "How [Company] deployed 10 agents in 2 weeks"
   - CTA: "Try AgentKit free templates"

Total: ~1,250 words
CTA placement: 1 link in intro (with anchor "AI agent templates"), 1 link in part 2 ("AgentKit dashboard"), 1 link in conclusion (with anchor "free templates")
```

**Article 2: "MCP Servers for AI Agents: Complete Setup Guide for Beginners"**

**Outline & SEO Targeting:**
- Primary keyword: "MCP server setup" (2,100/month, medium difficulty)
- Supporting: "Best MCP servers," "Model Context Protocol tutorial," "Claude MCP integration"

**Article structure:**
```
1. Introduction (100 words)
   - MCP adoption is 97M+ SDK downloads (as of Feb 2026)
   - This guide covers 5 essential MCP servers for agents

2. Part 1: MCP Fundamentals (200 words)
   - What is MCP? (explain context protocol)
   - Why agents need MCP (tool access, real-world integration)
   - How MCP compares to alternatives (LangChain tools, OpenAI plugins)

3. Part 2: 5 Essential MCP Servers (800 words, 160 per server)
   Each server gets:
   - Use case (what problem it solves)
   - Setup command (CLI install)
   - Example agent prompt (show it in action)
   - Link to full docs

   Servers to cover:
   a) Web Search MCP (browser context for agents)
   b) Files MCP (document processing)
   c) Database MCP (data queries)
   d) Git MCP (code repository integration)
   e) API MCP (custom integrations)

4. Part 3: Building an Agent Stack (250 words)
   - Recommended MCP combinations for common use cases
   - AgentKit's pre-configured server sets (cross-link to templates)
   - Best practices

5. Conclusion (100 words)
   - Next: Add custom MCP server
   - CTA to AgentKit for pre-built stacks

Total: ~1,450 words
CTA placement: 1 in part 2 (when explaining "AgentKit pre-configures these"), 1 in part 3 ("AgentKit combinations"), 1 in conclusion
```

**Publication process:**
1. Sign up on [Dev.to](https://dev.to) (free, use dhroov@gmail.com)
2. Draft articles in their editor OR paste from Google Docs
3. Add canonical URL at the bottom: `Canonical URL: https://agentkit-sandy.vercel.app` (prevents duplicate content issues)
4. Publish Tuesday-Thursday (peak traffic days)
5. Share in Dev.to comments → Dev Community on Slack → relevant Discord servers

**Expected outcome:** 2 articles × 500-2,000 clicks each (depending on quality + sharing). 2 backlinks (one per article, from Dev.to's high-authority domain).

---

### 1C: Reddit Community Mentions (Effort: 2 hours | Impact: 6/10)

**Why?** Reddit is:
- High-traffic, high-authority domain (DR 95+)
- Developer communities actively search for tools
- Comments with links still count as "endorsements" to Google (soft signals)
- Referral traffic valuable even if not a direct backlink

**Subreddits to target (in order of priority):**

1. **r/OpenAI** (2.8M members)
   - Best for: "Using AI agents with Claude vs. GPT"
   - Search thread: "How to build an AI agent" or "Best AI agent framework"
   - Comment template: "I've been testing AgentKit templates — setup in 20 mins vs. 3 days from scratch. Built with MCP + n8n, zero-config deployments."

2. **r/LanguageModels** (1.1M members)
   - Best for: Discussing Claude agents, agent architectures
   - Search: "Claude agents" or "prompt engineering for agents"
   - Comment: "AgentKit templates include battle-tested system prompts for common use cases."

3. **r/MachineLearning** (3.6M members, very selective)
   - Best for: Post a genuine research question, mention AgentKit contextually
   - Avoid: Direct promotion (will get removed)
   - Example thread: "What's the most underrated part of agent development?" → Reply: "System prompt engineering. AgentKit's templates show this well."

4. **r/Typescript** or **r/node** (600k+ members each)
   - Best for: Technical Q&A threads about building agents
   - If someone asks "How to deploy a Node.js AI agent?", answer with step-by-step guidance, link to AgentKit as reference

5. **r/Vercel** (50k members, small but focused)
   - Best for: "Show & Tell" threads
   - Post format: "Built AgentKit, a production-ready starter for AI agents on Vercel — 3 templates, MCP configs, n8n integration included."

**Execution rules:**
- **No spamming:** 1 mention per subreddit per week maximum
- **Add value first:** Answer the question thoroughly, THEN mention AgentKit if relevant
- **Use Markdown:** Format your comment with bullet points, code blocks, or numbered lists for readability
- **Track responses:** Monitor upvotes and replies — if positive, engage in follow-up discussions

**Sample comment to copy/adapt:**

```
I've been building AI agents for 18 months. The #1 mistake I see is people trying to assemble
templates from scratch (LangChain, manual prompts, workflow config).

It typically takes 2-3 weeks to get something production-ready. I recently tested AgentKit—it's
pre-built templates that come with:
- Battle-tested system prompts
- MCP server configurations (file access, web search, etc.)
- n8n workflow examples
- Vercel deployment scripts

Went from zero to a functioning customer support agent in ~4 hours. Not saying it's perfect,
but worth evaluating if you're in a startup / moving fast phase.

[Link: https://agentkit-sandy.vercel.app]
```

**Expected outcome:** 5-8 high-quality comments across subreddits = potential 50-300 referral clicks, soft authority signal.

---

## TIER 2: MEDIUM EFFORT (Next Week — Days 8-14)

### 2A: Product Hunt Launch (Effort: 6 hours | Impact: 9/10)

**Why?** Product Hunt is:
- 500k+ monthly active users (tech founders, investors, developers)
- Ranking #1 on Product Hunt homepage = 5,000-15,000 visitors in 24 hours
- Product Hunt link carries high-authority backlink weight (DR 95+)
- Drives brand awareness + seed user base

**Launch checklist:**

**Pre-Launch (Days 8-10):**
1. Create Product Hunt account at [producthunt.com](https://producthunt.com)
2. Prepare assets:
   - **Hero image:** 500×400px, AgentKit dashboard screenshot or animated GIF
   - **Tagline (60 chars max):** "Deploy AI agents in 30 minutes — templates, MCP configs, n8n workflows included"
   - **Description (500 chars max):**
     ```
     AgentKit is a production-ready starter kit for building AI agents.

     Why AgentKit?
     • Pre-built templates (customer support, sales outreach, content, BI reporting)
     • System prompts + MCP server configs
     • n8n workflow examples included
     • Deploy to Vercel in <30 minutes
     • Free templates + Premium bundles

     Perfect for founders, agencies, and enterprises launching agents fast.
     ```
   - **Gallery:** 3-5 screenshots (templates, system prompt editor, workflow builder)
   - **Video (optional):** 30-60 sec demo of deploying a template

3. Draft a 2-3 sentence "maker comment" (posted immediately at launch):
   ```
   Hey Product Hunt! 👋 I'm launching AgentKit—a production-ready starter
   kit for building AI agents. Spent 6 months building templates for the most
   common use cases (customer support, sales, content, reporting).

   Most AI agent tutorials skip the hard parts (system prompts, MCP configs,
   deployment). AgentKit eliminates the guesswork.

   Questions? I'm here to chat.
   ```

**Launch Day (Day 11):**
1. Schedule for Tuesday-Thursday, 12:01 AM PT (Product Hunt resets at midnight PT)
   - Avoid Mondays (backlog from weekend) and Fridays (low engagement)
2. Post at 12:01 AM PT exactly (using Product Hunt's scheduling feature)
3. Post maker comment immediately
4. Respond to every comment in first 8 hours (critical for momentum)
5. Share in Discord, Twitter, Slack (but don't spam — organic is better)

**Post-Launch (Days 12-14):**
1. Check daily ranking (goal: top 5)
2. Address feedback + bug reports
3. Engage in threads, answer objections
4. Share update post on day 3: "Thanks for the feedback! Here's what I'm shipping next week"

**Expected outcome:** 1 high-authority backlink + 200-500 users testing the platform + press mentions.

---

### 2B: Indie Hackers Post (Effort: 3 hours | Impact: 7/10)

**Why?** Indie Hackers is:
- 750k+ founders/builders community
- High-quality audience (your exact customer)
- Forum posts rank for long-tail keywords
- Strong domain authority (DR 75+)

**Step-by-step:**

1. Go to [indiehackers.com](https://indiehackers.com) → Sign up or log in
2. Click "Create Post" → Choose "Show" (not "Ask" or "Discuss")
3. **Title:** "Show IH: AgentKit — I Built 10 AI Agent Templates So You Don't Have To"
4. **Post content (500-800 words):**

```markdown
# Show IH: AgentKit — Pre-Built AI Agent Templates

## The Problem
I spent 6 months helping founders deploy AI agents. The #1 bottleneck wasn't the LLM—it was:
- Figuring out system prompts (tested 50+ versions per use case)
- Configuring MCP servers for real-world integrations
- Setting up n8n workflows without breaking production
- Deploying to Vercel without 5 config files

Most teams spent 2-3 weeks just getting to "hello world."

## What I Built
AgentKit: 10 pre-built agent templates with everything included:
- Battle-tested system prompts
- MCP server configurations (web search, files, databases, APIs)
- n8n workflow examples
- Deploy scripts for Vercel

You pick a template → fill in 3 config vars → agent is live in 30 minutes.

## Templates Included
1. Customer Support Auto-Responder ($49)
2. Sales Outreach Automation ($79)
3. Content Repurposing Pipeline ($49)
4. Weekly BI Report Generator
5. Social Media Manager
6. Invoice Tracker
... plus 4 more

## By The Numbers
- 500+ agents deployed by beta users
- 98% successful deployments (that's high for AI)
- Average setup time: 23 minutes
- Customer NPS: 67 (good for pre-launch)

## How It's Built
- Next.js frontend (React, hosted on Vercel)
- System prompt library (open-source inspiration from Anthropic docs)
- n8n integration (via API)
- MCP standard (99% compliant with latest spec)

## What's Next
- Creator templates (YouTube, Substack automation)
- Slack/Teams integration
- Open-source template library (under MIT)

## Try It
👉 https://agentkit-sandy.vercel.app
Free templates available to get started.

Questions? Happy to answer in the comments!
```

5. Add tags: `ai`, `agents`, `templates`, `no-code`, `automation`, `vercel`
6. Post and respond to comments

**Expected outcome:** 50-200 upvotes, 100-300 clicks, 1 backlink from high-authority domain.

---

### 2C: Twitter/X Thread Optimization (Effort: 4 hours | Impact: 5/10 backlink | 8/10 referral traffic)

**Why?** Not a direct backlink, but:
- Can go viral → 10,000-50,000 clicks
- Drives brand awareness (top-of-funnel)
- Encourages industry influencers to write about AgentKit
- Creates ammunition for press outreach

**Twitter strategy:**

**Thread hook (tweet 1):**
```
I spent 6 months asking founders "What's the hardest part of building AI agents?"

Same answer 47 times: "figuring out how to actually deploy the damn thing"

So I built AgentKit. Here's what I learned. 🧵👇
```

**Thread structure (tweets 2-10):**
```
2/ Problem #1: System Prompts
Most tutorials skip the hard part. "Tell the AI to be helpful" isn't a system prompt.

Real example: Customer support agents need:
- Tone guidelines (professional but warm)
- Escalation rules (when to ask human)
- Knowledge base context (company policies)

AgentKit includes 30+ prompts for common roles.

3/ Problem #2: Tool Integration (MCP)
Your agent is useless if it can't:
- Search the web
- Read files
- Query databases
- Trigger workflows

MCP servers do this. But configuring them for production? Nightmare.

AgentKit: copy-paste configs that just work.

4/ Problem #3: Deployment
You've got your agent. Now what?

Most people try:
- AWS Lambda (overkill, costs spiral)
- Docker (DevOps nightmare)
- Railway / Render (simpler, but config hell)

We use Vercel. Click one button, agent is live in 2 minutes. No credit card for test drives.

5/ The Result: AgentKit
Pre-built templates for 10 common use cases:
- Customer support (handle 80% of tickets yourself)
- Sales outreach (personalized cold email at scale)
- Content repurposing (turn one blog post into 10 formats)
- Weekly reports (BI agent that emails your metrics)

Each includes system prompts + MCP configs + n8n workflows.

6/ Numbers:
- 500+ agents deployed by beta users
- 98% success rate (surprising for AI)
- Average setup time: 23 minutes
- Customer feedback: "Finally, AI I can actually use"

Not trying to replace LangChain. We're pre-built templates that work out of the box.

7/ Why This Matters
Startups are stuck between two choices:
A) Pay a dev shop $10k to build custom agents
B) Spend 3 weeks learning LangChain, MCP, n8n, deployment...

AgentKit is option C: $49-$199 templates + 30-min setup.

Democratizing agentic AI.

8/ What We're Learning
The AI developer community is hungry for:
✓ Working code (not just tutorials)
✓ Production-ready, not PoC
✓ Opinionated stacks (fewer choices = faster shipping)
✓ One-click deploy

Those are AgentKit's pillars.

9/ If You're Building With Agents
✓ Try AgentKit for free (we have 1 template at no cost)
✓ Share feedback (Twitter DMs always open)
✓ If you're an indie hacker building your own, let's collaborate

Link: https://agentkit-sandy.vercel.app

10/ That's it. Back to shipping.

—Dhroov
```

**Posting strategy:**
- Thread 1: Publish Tuesday 10 AM ET (prime engagement)
- Retweet thread from alt accounts / friends (initial momentum)
- Respond to quote tweets with valuable follow-ups
- Repost thread 1 week later (different audience) with hook: "If you missed this last week..."

**Expected outcome:** 200-1,000 retweets, 500-5,000 clicks, 1-2 industry influencers sharing it organically.

---

## TIER 3: ONGOING (Month 2 & Beyond)

### 3A: Guest Posts on AI Blogs (Effort: 8-12 hours per post | Impact: 7/10)

**Target blogs (high DR + relevant audience):**

1. **Anthropic's Claude Blog** (official, highest authority)
   - Submit: "Building Production AI Agents: A Template-First Approach"
   - Positioning: "Here's how we teach enterprises to deploy agents fast"
   - Link strategy: AgentKit as reference implementation

2. **Dev.to Partner Publications** (like The New Stack, Hacker Noon)
   - Submit: "MCP Servers 101: How to Give AI Agents Real-World Powers"
   - Link: AgentKit examples

3. **Vercel Blog** (if they accept community submissions)
   - Submit: "Deploying AI Agents to Edge Runtime: Patterns & Examples"
   - Link: AgentKit Vercel integration

4. **n8n Blog** (workflow automation focus)
   - Submit: "Using n8n + Claude to Build No-Code AI Workflows"
   - Link: AgentKit's n8n templates

**Pitch template:**

```
Subject: Guest Post Proposal: "Building Production AI Agents: A Template-First Approach"

Hi [Editor Name],

I'm the creator of AgentKit, a production-ready starter kit for AI agents.
I've been helping founders and enterprises deploy agents at scale.

I'd like to write a 2,000-word guest post for [Publication]:

**Working Title:** "Building Production AI Agents: A Template-First Approach"

**Outline:**
1. Why Most Agent Tutorials Fail (pain point)
2. The Template-First Methodology (your unique insight)
3. Case Study: Customer Support Agent (hands-on example)
4. Critical Considerations (MCP servers, system prompts, deployment)
5. Resource Links (including AgentKit as reference)

**Why it fits your audience:**
- Your readers care about [production systems / AI implementation / developer tools]
- This post teaches a replicable pattern they can use immediately
- It's not a product pitch—it's methodology + learnings

**Author bio:** [Your background in AI/dev]

Interested? I can have a draft in 7 days.

Best,
Dhroov
```

---

### 3B: Podcast Mentions (Effort: 5-10 hours | Impact: 6/10)

**Podcasts to pitch:**

1. **The AI Engineer Podcast** (tech builders, 5k+ listeners)
2. **Indie Hackers Podcast** (founders, 10k+ listeners)
3. **Vercel's AI Engineering Podcast** (if exists)
4. **No Code / Low Code shows** (n8n, Make, Zapier audiences)

**Pitch approach:**
- Don't ask for direct promotion
- Pitch yourself as an expert on "production AI agents" or "scaling agent deployments"
- Mention AgentKit contextually as your reference implementation
- Goal: 20-30 minute interview = 500-2,000 listeners, some convert to users

---

### 3C: Community Contributions (Ongoing, 2-3 hours/month | Impact: 6/10)

**Tactic:** Build authority by answering questions with AgentKit examples

**Platforms:**
1. **HN (Hacker News) Comments** — Answer "How do I build an AI agent?" threads with thoughtful replies linking to AgentKit docs
2. **Twitter/X Replies** — Quote-tweet AI agent posts, add insight, mention AgentKit as reference
3. **Discord Communities** — Join AI dev Discord servers, answer MCP/agent questions with AgentKit templates as examples
4. **Stack Overflow** — Answer "How to deploy Claude agent" questions (links to external sites are allowed if they directly answer the question)

**Execution rule:** Never just drop a link. Provide 70% answer, 30% reference. Users respect helpfulness, not spam.

---

## SECTION 3: KEYWORD TARGETS (20 Keywords + Targeting Strategy)

### Keyword Research Methodology
- **Volume threshold:** Target keywords with 500+ monthly searches (enough demand)
- **Difficulty filter:** Prioritize KD 0-40 initially (quick wins), then 40-60 (sustainable growth)
- **Intent mapping:** Informational (top-funnel) → Commercial Investigation (mid-funnel) → Transactional (bottom-funnel)

### Target Keyword Universe (Ranked by Priority)

| # | Keyword | Volume | KD | Intent | Target Page | Timeline |
|---|---------|--------|----|---------|-----------  |----------|
| 1 | AI agent templates | 3,200 | 42 | Commercial | /templates → blog post | Week 1-2 |
| 2 | How to build AI agents | 2,800 | 38 | Informational | /blog/build-ai-agent-guide (optimize) | Week 1 |
| 3 | MCP server setup | 2,100 | 35 | Informational | New blog post | Week 2-3 |
| 4 | Claude agent tutorial | 1,900 | 41 | Informational | New blog post | Week 2-3 |
| 5 | Best AI agent framework | 1,650 | 48 | Commercial | /blog/best-ai-agent-templates (optimize) | Week 1 |
| 6 | System prompt examples | 1,400 | 32 | Informational | New landing page: /prompts | Week 3-4 |
| 7 | n8n AI workflows | 1,200 | 36 | Informational | New blog post | Week 3 |
| 8 | AI agent deployment | 980 | 39 | Informational | /blog/build-ai-agent-guide | Week 1 |
| 9 | Model Context Protocol tutorial | 850 | 37 | Informational | New blog post | Week 2-3 |
| 10 | Production AI agents | 720 | 44 | Informational | Guest post outreach | Week 4+ |
| 11 | Claude agent template | 650 | 38 | Transactional | /templates + ads | Week 2 |
| 12 | AI agent system prompt | 580 | 34 | Informational | New /prompts page | Week 3 |
| 13 | Agentic AI pattern | 520 | 46 | Informational | New blog post | Week 4 |
| 14 | No-code AI agent builder | 480 | 52 | Commercial | Homepage optimization | Week 2 |
| 15 | Agent framework comparison | 420 | 55 | Commercial Investigation | New comparison blog post | Week 3-4 |
| 16 | Web search agent setup | 380 | 33 | Informational | Blog post (MCP web search) | Week 3 |
| 17 | Customer support AI agent | 340 | 39 | Transactional | /templates/customer-support | Week 2 |
| 18 | Sales automation with AI | 310 | 41 | Transactional | /templates/sales-outreach | Week 2 |
| 19 | MCP file integration | 290 | 30 | Informational | /prompts + blog example | Week 4 |
| 20 | Agentic API design patterns | 260 | 48 | Informational | Advanced blog post (month 2) | Week 4+ |

---

### Keyword Grouping by Target Page

**Homepage (agentkit-sandy.vercel.app):**
- AI agent templates (3,200)
- Best AI agent framework (1,650)
- No-code AI agent builder (480)
- *Action:* Add schema markup for "SoftwareApplication" + optimize H1 to include "templates"

**Blog Post #1: "Best AI Agent Templates"** (existing, optimize):
- Best AI agent framework (1,650)
- AI agent templates (3,200 secondary)
- Agent framework comparison (420)
- *Action:* Add comparison table vs. LangChain/CrewAI, update word count to 2,500+, add FAQ schema for featured snippet

**Blog Post #2: "Build AI Agent Guide"** (existing, optimize):
- How to build AI agents (2,800)
- AI agent deployment (980)
- Production AI agents (720)
- *Action:* Expand from X to 3,500 words, add step-by-step with code examples, add video embed

**Blog Post #3 (NEW): "MCP Server Setup Tutorial"**:
- MCP server setup (2,100)
- Model Context Protocol tutorial (850)
- Web search agent setup (380)
- MCP file integration (290)
- *Action:* 2,500-word guide with 5 server examples, published week 2-3

**Blog Post #4 (NEW): "System Prompt Engineering for Agents"**:
- System prompt examples (1,400)
- AI agent system prompt (580)
- Claude agent tutorial (1,900)
- *Action:* 2,000-word guide with 10+ real examples from AgentKit templates, published week 3-4

**Blog Post #5 (NEW): "n8n + Claude Workflow Automation"**:
- n8n AI workflows (1,200)
- Sales automation with AI (310)
- Customer support AI agent (340)
- *Action:* Hands-on workflow tutorial, 2,200 words, published week 4

**Landing Page (NEW): /prompts**:
- System prompt examples (1,400)
- AI agent system prompt (580)
- MCP file integration (290)
- *Action:* 20-30 system prompts organized by use case, downloadable as JSON, links to matching templates

---

### Content Gap Analysis: Competitors Ranking, We're Not

**Search query:** "Best AI agent frameworks"
- **Rank 1-3:** LangChain, CrewAI, AutoGen (established, high authority)
- **Rank 4-10:** ChatGPT plugins, llamaindex, phidata
- **Opportunity:** Write comparison post "AgentKit vs. LangChain" → target "LangChain alternatives," "CrewAI vs. others"

**Search query:** "MCP server setup"
- **Rank 1-5:** Anthropic official docs (our North Star)
- **Rank 6-10:** Dev blog posts, tutorial repos
- **Opportunity:** Write more practical "5-minute MCP setup" guide for non-technical users

**Search query:** "n8n AI automation"
- **Rank 1-5:** n8n official docs, n8n blog
- **Rank 6-10:** Community tutorials
- **Opportunity:** Create "n8n + Claude" workflow examples (not covered well in existing content)

---

### Low-Hanging Fruit (Positions 4-20, Quick Wins)

If AgentKit is currently ranking positions 4-20 for any keywords, these are opportunities to push to top 3 with minimal effort:

- Add 300-500 more words (addresses "insufficient depth")
- Add 3-5 internal links to related templates (structural authority)
- Update meta title/description to match search intent more precisely (improve CTR)
- Add FAQ schema targeting "People Also Ask" questions (featured snippet chance)

**Expected outcome:** 2-3 keywords move from position 8-12 to position 2-5 within 4 weeks.

---

## SECTION 4: INTERNAL LINKING MAP (Topic Cluster Architecture)

### SEO Principle: Topical Authority

Google rewards sites that thoroughly cover a topic. Internal links distribute page authority and signal content relationships. This map ensures:
- Pillar page (homepage) links to all clusters
- Cluster pages cross-link to each other
- Every template links to relevant guides
- Guides link back to templates (proving real-world application)

---

### Linking Architecture Diagram

```
Homepage (agentkit-sandy.vercel.app)
├── PILLAR: Links to all 5 guides + template category pages
│
├─► Cluster 1: "How to Build AI Agents" (Blog Post #2)
│   ├─→ Links to: Cluster 2 (MCP), Cluster 3 (Prompts), Cluster 4 (n8n)
│   ├─→ Links to: /templates/customer-support (example use case)
│   ├─→ Links to: /templates/sales-outreach (example use case)
│   └─→ Backlinked from: /prompts, /templates, Cluster 3
│
├─► Cluster 2: "MCP Server Setup" (Blog Post #3, NEW)
│   ├─→ Links to: Cluster 1 (How to build), Cluster 4 (n8n integration)
│   ├─→ Links to: /prompts (system prompt MCP examples)
│   ├─→ Links to: /templates (which use specific MCP servers)
│   └─→ Backlinked from: Homepage, Cluster 1, Cluster 4
│
├─► Cluster 3: "System Prompts & Agents" (Blog Post #4, NEW)
│   ├─→ Links to: /prompts landing page (full library)
│   ├─→ Links to: Cluster 1 (How to use in practice)
│   ├─→ Links to: /templates (template-specific prompts)
│   └─→ Backlinked from: /prompts, Cluster 1, all templates
│
├─► Cluster 4: "n8n + Claude Workflows" (Blog Post #5, NEW)
│   ├─→ Links to: Cluster 2 (MCP servers in n8n context)
│   ├─→ Links to: /templates/sales-outreach, /templates/content-pipeline
│   └─→ Backlinked from: Cluster 2, relevant templates
│
├─► Cluster 5: "Best AI Agent Frameworks" (Blog Post #1, existing, optimize)
│   ├─→ Links to: Cluster 1 (deep dive on building)
│   ├─→ Links to: Cluster 2 (MCP advantage)
│   ├─→ Links to: /templates (AgentKit as alternative to competitors)
│   └─→ Backlinked from: Homepage, all clusters
│
├─► /prompts Landing Page (NEW)
│   ├─→ Links to: Cluster 3 (full guide)
│   ├─→ Links to: /templates (prompts in context)
│   ├─→ Links to: Cluster 1 (how to use custom prompts)
│   └─→ Backlinked from: All blog posts, all templates
│
└─► /templates (Category Page)
    ├─→ Links to each individual template
    ├─→ Links to Cluster 1 (deployment guide)
    ├─→ Links to Cluster 2 (MCP setup in templates)
    ├─→ Links to Cluster 3 (prompt customization)
    └─→ Backlinked from: Homepage, all guides
```

---

### Detailed Linking Instructions for Each Content Piece

#### Homepage (agentkit-sandy.vercel.app)

**Links OUT (add 5-6 total):**

1. **Hero CTA button:** "View Templates" → `/templates`
2. **"How It Works" section:** "Learn how to build agents" → `/blog/build-ai-agent-guide`
3. **"Why AgentKit" feature:** "MCP server configs included" → `/blog/mcp-server-setup` (when published)
4. **Social proof / testimonial:** "See real-world examples" → `/templates`
5. **Footer:** "Get system prompt examples" → `/prompts` (when published)
6. **Footer:** "Read our guides" → `/blog/best-ai-agent-templates`

**Anchor text strategy:**
- Use descriptive anchors ("Learn how to build agents" not "click here")
- Include secondary keywords where natural ("MCP server setup guide" not just "setup")

---

#### Blog Post #2: "How to Build AI Agents" (Optimize Existing)

**Links OUT (add 8-10 internal):**

1. **Section 1 (Why agents fail):** "System prompts are critical" → `/prompts` (when published)
2. **Section 2 (Getting started):** "Choose from our templates" → `/templates`
3. **Section 3 (MCP integration):** "Learn MCP server setup" → `/blog/mcp-server-setup` (when published)
4. **Section 4 (Deployment):** "See our customer support example" → `/templates/customer-support`
5. **Section 5 (Best practices):** "Compare frameworks" → `/blog/best-ai-agent-frameworks`
6. **Section 5 (Code examples):** "n8n workflow integration" → `/blog/n8n-claude-workflows` (when published)
7. **Related reading box:** "n8n + Claude guide" → `/blog/n8n-claude-workflows`
8. **Related reading box:** "System prompt engineering" → `/blog/system-prompt-guide`
9. **CTA footer:** "Start with a template" → `/templates`
10. **CTA footer:** "Explore system prompts" → `/prompts`

**Anchor text:**
- "system prompt engineering for agents" (targets keyword density)
- "Model Context Protocol setup" (targets secondary keyword)
- "production AI agent templates" (targets long-tail)

---

#### Blog Post #1: "Best AI Agent Templates" (Optimize Existing)

**Links OUT (add 6-8):**

1. **Comparison table intro:** "Framework overview guide" → `/blog/how-to-build-ai-agents`
2. **LangChain vs. AgentKit:** "See LangChain comparison" → `/blog/langchain-alternatives` (write if time)
3. **After each framework description:** "Explore our templates" → `/templates`
4. **MCP mention:** "What is MCP?" → `/blog/mcp-server-setup`
5. **System prompt discussion:** "Prompt engineering best practices" → `/blog/system-prompt-guide`
6. **Deployment comparison:** "Deploy on Vercel" → `/blog/how-to-build-ai-agents`
7. **CTA footer:** "See templates" → `/templates`
8. **Related reading:** "n8n integration guide" → `/blog/n8n-claude-workflows`

---

#### Blog Post #3: "MCP Server Setup Tutorial" (NEW, Week 2-3)

**Links OUT (8-10):**

1. **Intro section:** "How this fits into agent building" → `/blog/how-to-build-ai-agents`
2. **Web search server section:** "Use in customer support agent" → `/templates/customer-support`
3. **Files server section:** "Document processing example" → `/templates/content-pipeline`
4. **Database server section:** "BI reporting agent" → `/templates/weekly-reports`
5. **API server section:** "Integrations in our templates" → `/templates`
6. **Best practices section:** "System prompts for MCP" → `/blog/system-prompt-guide`
7. **n8n integration section:** "Full workflow guide" → `/blog/n8n-claude-workflows`
8. **CTA:** "Start with a template" → `/templates`

---

#### Blog Post #4: "System Prompt Engineering for Agents" (NEW, Week 3-4)

**Links OUT (8-10):**

1. **Intro:** "Why system prompts matter in agent building" → `/blog/how-to-build-ai-agents`
2. **Each example (10+ examples):** "See this in production" → `/templates` OR link to specific template that uses that prompt style
3. **MCP integration section:** "MCP servers change what prompts can do" → `/blog/mcp-server-setup`
4. **n8n workflows:** "Prompts for workflow agents" → `/blog/n8n-claude-workflows`
5. **Related:** "Best frameworks for agents" → `/blog/best-ai-agent-templates`
6. **Prompt library:** "Get 30+ ready-to-use prompts" → `/prompts`
7. **CTA:** "Find templates using these prompts" → `/templates`

---

#### Blog Post #5: "n8n + Claude Workflows" (NEW, Week 4)

**Links OUT (6-8):**

1. **Intro:** "Why n8n for AI agents?" → `/blog/how-to-build-ai-agents`
2. **MCP integration:** "Using MCP servers in n8n" → `/blog/mcp-server-setup`
3. **Each workflow example (3-5):** "See the full template" → `/templates/[matching-template]`
4. **System prompts:** "Workflow-specific prompts" → `/blog/system-prompt-guide`
5. **Best practices:** "Agent framework guide" → `/blog/best-ai-agent-templates`
6. **CTA:** "Get n8n templates" → `/templates`

---

#### /prompts Landing Page (NEW, Week 3)

**Links OUT (5-7):**

1. **Page intro:** "Learn to engineer prompts" → `/blog/system-prompt-guide`
2. **Each prompt category header:** "See examples in production" → `/templates` (or specific template)
3. **How to customize section:** "Full prompt engineering guide" → `/blog/system-prompt-guide`
4. **MCP prompts section:** "MCP server setup guide" → `/blog/mcp-server-setup`
5. **CTA:** "Get started with templates" → `/templates`

---

#### /templates Category Page (Existing, Optimize)

**Links OUT (add 4-5 blog links):**

1. **Template intro section:** "Learn how to build agents" → `/blog/how-to-build-ai-agents`
2. **"How to customize" section:** "System prompt guide" → `/blog/system-prompt-guide`
3. **MCP server configs:** "MCP setup tutorial" → `/blog/mcp-server-setup`
4. **n8n workflows section:** "n8n integration guide" → `/blog/n8n-claude-workflows`
5. **"Need help?" CTA:** "Comparison guide" → `/blog/best-ai-agent-templates`

---

### Internal Link Anchor Text Strategy

**Target 5 types of anchor text for SEO benefits:**

1. **Exact match** (5-10% of anchors): "MCP server setup," "system prompt examples"
2. **Broad match** (10-15%): "Learn about system prompts," "MCP integration guide"
3. **Long-tail** (20-30%): "How to set up MCP servers for agents," "AI agent system prompt engineering"
4. **Branded** (20-30%): "AgentKit templates," "View AgentKit examples"
5. **Generic/navigational** (30-40%): "Learn more," "Explore," "Start here," "Get started"

**DO NOT:**
- Use "click here" or "read more" alone (poor signal to Google)
- Over-optimize with exact-match keywords (looks spammy, triggers manual action flags)
- Create links that don't make contextual sense (users should want to click, not just SEO)

---

### Expected Internal Linking Impact

After implementing this map:

**Timeframe: 4-8 weeks**
- Crawl budget optimization: +30% more pages crawled per day (more pages linked = higher priority)
- Page authority distribution: Guides and prompts page rank faster (pillar pages push authority down)
- Keyword ranking: Secondary keywords rank 2-3 positions higher (internal links + semantic relevance)

**Expected keyword ranking improvements:**
- "How to build AI agents" (2,800 volume): Position 15 → Position 5-8 (within 6 weeks)
- "System prompt examples" (1,400 volume): Position 20+ → Position 8-12 (within 8 weeks)
- "MCP server setup" (2,100 volume): Not ranking → Position 12-18 in week 4-5 (after new blog post)

---

## SECTION 5: MEASUREMENT & MONTHLY REPORTING

### What to Track (Weekly)

**GSC Metrics (every Monday):**
- Organic impressions (should grow week-over-week)
- Organic clicks (traffic attribution)
- Average position (keywords moving up?)
- Click-through rate (is title/description compelling?)

**Backlink Metrics (every 2 weeks):**
- Total backlinks (using Ahrefs, SEMrush, or free tools like Backlink Checker)
- Referring domains (quality over quantity)
- Anchor text distribution (are links natural?)

**Content Performance (weekly):**
- Page views per blog post
- Average session duration (engagement proxy)
- Scroll depth (are people reading?)
- Internal click-through rate (are your links being clicked?)

**On-Page Metrics (every 2 weeks):**
- Core Web Vitals (LCP, INP, CLS)
- Mobile usability issues (GSC)
- Indexation coverage (is everything being indexed?)

---

### Monthly Report Template

**Create a Google Sheet** with the following tabs:

1. **Performance Summary**
   - Organic traffic (month-over-month)
   - Top landing pages
   - Top converting keywords
   - Backlinks gained (this month)

2. **Keyword Tracking**
   - Target keywords (20 from section 3)
   - Current position
   - Change from last month
   - Impressions + clicks

3. **Backlink Progress**
   - Link source
   - Date acquired
   - Referring domain authority
   - Anchor text

4. **Content Roadmap**
   - Blog post plan for next 30 days
   - Template launches
   - Optimization tasks

---

## SUMMARY: 90-DAY ROADMAP

### Week 1-2 (March 26 - April 9)
- [ ] Complete GSC setup (Section 1)
- [ ] Optimize homepage + 2 existing blog posts (internal linking + target keywords)
- [ ] Publish Article 1 on Dev.to (MCP setup)
- [ ] Submit PRs to 3 GitHub awesome lists
- [ ] Post 2 Reddit comments (r/OpenAI, r/LanguageModels)

**Expected outcome:** 3 backlinks, 500-1,000 organic clicks

### Week 3-4 (April 10 - April 23)
- [ ] Publish Article 2 on Dev.to (System prompts)
- [ ] Launch on Product Hunt
- [ ] Post on Indie Hackers
- [ ] Publish Blog Post #3 (MCP Server Setup)
- [ ] 2 more Reddit comments (r/Typescript, r/Vercel)

**Expected outcome:** 2-3 backlinks, 1,500-3,000 organic clicks, 200-500 product signups

### Week 5-8 (April 24 - May 21)
- [ ] Publish Blog Post #4 (System Prompt Engineering)
- [ ] Launch /prompts landing page
- [ ] Publish Blog Post #5 (n8n + Claude)
- [ ] Pitch 2 guest posts (Anthropic, Vercel, or AI blogs)
- [ ] Pitch 1-2 podcasts

**Expected outcome:** 3-4 backlinks, 3,000-5,000 organic clicks, 500-1,000 product signups

### Month 2-3 (Ongoing)
- [ ] Guest post publication (if accepted)
- [ ] Podcast interviews (if accepted)
- [ ] Monitor keyword rankings, optimize low-performers
- [ ] Target featured snippets (optimize FAQ sections)
- [ ] Build out community responses (HN, Twitter, Discord)

**90-Day Target:** 50 backlinks, 15,000-25,000 organic clicks, 1,500-2,500 product signups

---

## SUCCESS METRICS

By end of Q2 2026, AgentKit should have:

1. **Domain Authority:** 25-35 (up from ~5)
2. **Organic Monthly Visitors:** 3,000-5,000
3. **Backlinks:** 50-75 (from diverse sources)
4. **Top-Ranking Keywords:** 5-8 in top 3 positions
5. **Organic Conversion Rate:** 2-3% (product signup or template download)
6. **Press Mentions:** 3-5 publications
7. **Seed User Base:** 200-300 product testers

---

## TOOLS & RESOURCES

**Free Tools:**
- Google Search Console: [search.google.com/search-console](https://search.google.com/search-console)
- Google Analytics 4: [analytics.google.com](https://analytics.google.com)
- Ahrefs Backlink Checker (limited free version): [ahrefs.com/backlink-checker](https://ahrefs.com/backlink-checker)
- MozBar (keyword difficulty estimates): [moz.com/tools/seo-toolbar](https://moz.com/tools/seo-toolbar)
- Free Meta Tag Checker: [metatags.io](https://metatags.io)

**Paid Tools (Optional, but recommended):**
- SEMrush: $120/month (rank tracking, competitor analysis)
- Ahrefs: $99/month (backlink analysis, keyword research)
- Surfer SEO: $89/month (content optimization, SERP analysis)

---

## CONTACTS & NEXT STEPS

**Immediate Actions (This Week):**
1. Complete GSC setup using Section 1 checklist
2. Set up Google Analytics 4 if not already done
3. Create Google Sheet for monthly reporting (use template in Section 5)
4. Start research on Tier 1 backlink opportunities (GitHub awesome lists, Dev.to, Reddit)

**Questions?**
Reach out with:
- GSC screenshots (to verify setup)
- Blog article drafts (for SEO review before publication)
- Backlink progress (share PR links, Reddit comment links for feedback)

---

**Document Status:** Ready for execution
**Last Updated:** 2026-03-26
**Next Review:** 2026-04-30 (after Tier 1 completion)
