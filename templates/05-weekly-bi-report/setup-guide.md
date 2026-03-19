# Weekly Business Intelligence Report — Setup Guide

## Table of Contents
1. Prerequisites
2. Configure MCP Servers
3. Set Up Your Competitor Watch List
4. Import the n8n Workflow
5. Configure Search Queries
6. Test Your Report
7. Weekly Usage
8. Customization
9. Troubleshooting

---

## 1. Prerequisites

- Claude Desktop or Cursor IDE
- Anthropic API key
- n8n (self-hosted or cloud)
- Brave Search API key (free: 2,000 queries/month)
- 15-20 minutes setup time

---

## 2. Configure MCP Servers

1. Copy `mcp-config.json` into Claude Desktop config
2. Add your Brave Search API key
3. Set the filesystem path to where you want to store reports
4. Restart Claude Desktop

---

## 3. Set Up Your Competitor Watch List

Create a file called `competitors.txt` in your intel-data folder:

```
# Competitor Watch List
Competitor A | competitor-a.com | Direct | High
Competitor B | competitor-b.com | Direct | Medium
Competitor C | competitor-c.com | Indirect | Low
```

---

## 4. Import the n8n Workflow

1. Import `workflow-n8n.json` into n8n
2. Configure credentials: Brave Search, Anthropic, SMTP

---

## 5. Configure Search Queries

In the workflow, update:
- "Search Industry News" node: replace `CONFIGURE_YOUR_INDUSTRY` with your industry
- "Search Competitor News" node: replace `CONFIGURE_COMPETITOR_1` and `CONFIGURE_COMPETITOR_2` with competitor names
- "Email Report" node: replace with your email

---

## 6. Test Your Report

1. Manually execute the workflow
2. Check your email for the BI report
3. Review: are the sources relevant? Is the analysis useful?
4. Adjust search queries if needed

---

## 7. Weekly Usage

Once activated, the report generates every Monday at 6 AM automatically.

For ad-hoc research, use Claude Desktop:
- "What has [competitor] been up to in the last week?"
- "Summarize industry news about [topic]"
- "Analyze [competitor]'s recent job postings for strategic signals"

---

## 8. Customization

- **Report frequency:** Change the cron expression (e.g., twice a week)
- **Data sources:** Add more search nodes for specific sources
- **Report format:** Modify the prompt to change sections or add new ones
- **Competitor list:** Update the search queries when adding/removing competitors

---

## 9. Troubleshooting

| Problem | Solution |
|---------|----------|
| Report is too generic | Make search queries more specific to your industry |
| Brave Search rate limited | Free tier = 2,000/month. Upgrade or reduce query count |
| Report missing competitors | Add specific search queries for each competitor |

### Need Help?
Email hello@agentkit.ai — we respond within 24 hours.
