# Competitive Intelligence Monitor — Setup Guide

## Table of Contents
1. Prerequisites
2. Configure MCP Servers
3. Set Up Competitor Watch List
4. Import the n8n Workflow
5. Configure Competitor Names
6. Test Your First Report
7. Weekly Usage
8. Customization
9. Troubleshooting

---

## 1. Prerequisites

- Claude Desktop or Cursor IDE
- Anthropic API key
- n8n (self-hosted or cloud)
- Brave Search API key
- 15-20 minutes setup time

---

## 2. Configure MCP Servers

1. Copy `mcp-config.json` into Claude Desktop config
2. Add your Brave Search API key
3. Set filesystem path to your intelligence data folder
4. Restart Claude Desktop

---

## 3. Set Up Competitor Watch List

Create a `competitors.json` file in your intel-data folder:

```json
{
  "competitors": [
    {
      "name": "Competitor A",
      "website": "https://competitor-a.com",
      "category": "direct",
      "priority": "high"
    },
    {
      "name": "Competitor B",
      "website": "https://competitor-b.com",
      "category": "indirect",
      "priority": "medium"
    }
  ]
}
```

---

## 4. Import the n8n Workflow

1. Import `workflow-n8n.json` into n8n
2. Configure: Brave Search, Anthropic, SMTP credentials

---

## 5. Configure Competitor Names

In the workflow, update these placeholders:
- "Search Competitor News" node: Replace `CONFIGURE_COMPETITOR_NAMES` with actual names
- "Search Competitor Job Postings" node: Same update
- "Generate CI Report" node: Replace `CONFIGURE_COMPETITOR_LIST`
- "Fetch Competitor Pricing Pages" node: Set the competitor website URLs

---

## 6. Test Your First Report

1. Manually execute the workflow
2. Check your email for the CI report
3. Review: relevance, change detection accuracy, actionability
4. Adjust search queries if needed

---

## 7. Weekly Usage

Once activated, reports generate every Monday at 7 AM automatically.

For ad-hoc intelligence, use Claude Desktop:
- "What has [competitor] changed on their pricing page?"
- "Find recent news about [competitor]"
- "Analyze [competitor]'s job postings for strategic signals"

---

## 8. Customization

- **Monitoring frequency:** Change to daily for high-priority competitors
- **Data sources:** Add social media monitoring, G2 review tracking
- **Report depth:** Adjust prompt for more or less detail per competitor
- **Alert triggers:** Add conditional logic to send urgent alerts for major changes

---

## 9. Troubleshooting

| Problem | Solution |
|---------|----------|
| No news found for competitors | Try broader search terms or company name variations |
| Pricing page fetch fails | Some sites block automated requests — use Brave Search instead |
| Report too long | Reduce competitor count or focus on high-priority only |

### Need Help?
Email hello@agentkit.ai — we respond within 24 hours.
