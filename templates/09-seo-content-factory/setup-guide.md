# SEO Content Factory — Setup Guide

## Table of Contents
1. Prerequisites
2. Configure MCP Servers
3. Import the n8n Workflow
4. Submit Your First Keyword
5. Review and Publish
6. Scale Content Production
7. Customization
8. Troubleshooting

---

## 1. Prerequisites

- Claude Desktop or Cursor IDE
- Anthropic API key
- n8n (self-hosted or cloud)
- Brave Search API key
- 20-25 minutes setup time

---

## 2. Configure MCP Servers

1. Copy `mcp-config.json` into Claude Desktop config
2. Add your Brave Search API key
3. Set filesystem path to your content folder
4. Restart Claude Desktop

---

## 3. Import the n8n Workflow

1. Import `workflow-n8n.json` into n8n
2. Configure: Brave Search, Anthropic, SMTP credentials
3. Activate the workflow to enable the webhook

---

## 4. Submit Your First Keyword

Send a POST request to the webhook:

```bash
curl -X POST YOUR_N8N_WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -d '{"keyword": "how to set up ai agent for business", "audience": "solo founders"}'
```

Within 3-5 minutes, you will receive an email with the complete article package.

---

## 5. Review and Publish

The email contains:
1. Keyword research and clustering
2. Competitor content analysis
3. Article outline
4. Full article draft (2,000+ words)
5. SEO optimization checklist

Review the article, make edits, then publish to your blog.

---

## 6. Scale Content Production

To produce content at scale:
1. Create a list of target keywords in a Google Sheet
2. Set up a schedule trigger in n8n to process 1-2 keywords per day
3. Review drafts daily, edit and publish
4. Track rankings in Google Search Console

---

## 7. Customization

- **Writing style:** Edit the system prompt's writing quality section
- **Article length:** Adjust target word count
- **SEO focus:** Modify the checklist for your specific needs
- **Brand voice:** Add tone guidelines to the prompt

---

## 8. Troubleshooting

| Problem | Solution |
|---------|----------|
| Article too generic | Add more context about your audience and expertise area |
| Missing competitor analysis | Ensure Brave Search API is working (check quota) |
| Article too short | Increase maxTokensToSample in the Claude node |

### Need Help?
Email hello@agentkit.ai — we respond within 24 hours.
