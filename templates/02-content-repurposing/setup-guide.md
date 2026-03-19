# Content Repurposing Pipeline — Setup Guide

## Table of Contents
1. Prerequisites
2. Install Claude Desktop
3. Configure MCP Servers
4. Import the n8n Workflow
5. Configure the Webhook Trigger
6. Test Your Pipeline
7. Daily Usage
8. Customization
9. Troubleshooting

---

## 1. Prerequisites

- **Claude Desktop** or **Cursor IDE** ([claude.ai/download](https://claude.ai/download))
- **Anthropic API key** ([console.anthropic.com](https://console.anthropic.com/))
- **n8n** (free self-hosted or cloud at $20/month)
- **Node.js 18+** ([nodejs.org](https://nodejs.org/))
- **15-20 minutes** setup time

---

## 2. Install Claude Desktop

1. Download from [claude.ai/download](https://claude.ai/download)
2. Install and sign in
3. Enable Developer Mode in Settings > Developer

---

## 3. Configure MCP Servers

1. Find your Claude Desktop config file:
   - Mac: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
2. Replace contents with the provided `mcp-config.json`
3. Update `/path/to/your/content-folder` to your content directory
4. Add your Brave Search API key (free at [brave.com/search/api](https://brave.com/search/api/))
5. Restart Claude Desktop

---

## 4. Import the n8n Workflow

1. Open n8n (install with `npm install -g n8n && n8n start` if needed)
2. Go to Workflows > Import from File
3. Select `workflow-n8n.json`
4. Set up credentials:
   - **Anthropic API** — your API key
   - **Google Sheets** — OAuth2 credentials for saving to content calendar
   - **SMTP** — email credentials for receiving content pieces

---

## 5. Configure the Webhook Trigger

The workflow uses a webhook trigger. When you publish a new blog post:

1. Copy the webhook URL from the n8n "New Blog Post Webhook" node
2. Send a POST request with: `{"blog_url": "https://your-blog.com/new-post"}`
3. You can trigger this manually, from your CMS, or via another automation

**Manual trigger example:**
```bash
curl -X POST YOUR_N8N_WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -d '{"blog_url": "https://your-blog.com/latest-post"}'
```

---

## 6. Test Your Pipeline

1. Pick any published blog post URL
2. Send it to the webhook (or use the curl command above)
3. Watch the workflow execute in n8n
4. Check your email for the generated content pieces
5. Review each piece for quality and platform-appropriateness

---

## 7. Daily Usage

**When you publish a new blog post:**
1. Copy the blog post URL
2. Trigger the webhook (or set up automatic CMS integration)
3. Receive repurposed content via email within 2-3 minutes
4. Review, edit if needed, and schedule for each platform

**For manual repurposing in Claude:**
1. Open Claude Desktop
2. Paste your blog post text
3. Say: "Repurpose this blog post following the content repurposing system prompt"
4. Get platform-optimized content pieces instantly

---

## 8. Customization

- **Add platforms:** Edit the system prompt to include new output formats (TikTok script, podcast notes, etc.)
- **Change tone:** Modify the tone guidelines in each platform section
- **Add scheduling:** Connect Buffer, Hootsuite, or native platform APIs to auto-schedule posts
- **Customize hashtags:** Add your industry-specific hashtags to the system prompt

---

## 9. Troubleshooting

| Problem | Solution |
|---------|----------|
| Webhook not receiving | Check that the workflow is activated (toggle on) |
| Blog content not fetching | Verify the URL is publicly accessible |
| Content quality low | Ensure the blog post has substantial content (500+ words works best) |
| Google Sheets not saving | Check OAuth credentials and sheet sharing permissions |

### Need Help?
Email hello@agentkit.ai — we respond within 24 hours.
