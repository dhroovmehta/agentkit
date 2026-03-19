# Solo Business Operations Agent

> Run 8 departments of your solo business with one AI agent.

## Quick Start

1. **Install Claude Desktop** — [claude.ai/download](https://claude.ai/download)
2. **Copy MCP config** — Replace your Claude Desktop config with `mcp-config.json` (update paths and API keys)
3. **Restart Claude Desktop** — Verify tool icons appear at bottom of chat
4. **Import n8n workflow** — Open n8n > Import from File > select `workflow-n8n.json`
5. **Configure n8n credentials** — Add Brave, Google Sheets, Anthropic, SMTP credentials
6. **Activate the workflow** — Toggle on in n8n. You'll get your first briefing at 7 AM.

**Full setup guide:** See `setup-guide.md` (or the PDF version) for detailed instructions with screenshots.

## What's Included

| File | Description |
|------|-------------|
| `system-prompt.txt` | 4,000+ word system prompt covering 8 departments |
| `mcp-config.json` | MCP server configuration for Claude Desktop (6 servers) |
| `workflow-n8n.json` | n8n workflow for automated daily briefing |
| `setup-guide.md` | 10-page setup guide with prerequisites and troubleshooting |
| `README.md` | This file — quick-start reference |

## Departments Covered

1. **Sales** — Pipeline management, follow-ups, win/loss analysis
2. **Marketing** — Content calendar, social posts, engagement tracking
3. **Customer Support** — Triage, response drafting, escalation
4. **Finance** — Revenue/expense tracking, P&L, cash runway
5. **HR** — Contractor management, time tracking, hiring pipeline
6. **Operations** — Task prioritization, project tracking, process improvement
7. **Product** — Backlog management, feature requests, sprint tracking
8. **Analytics** — KPI tracking, trend detection, data-driven recommendations

## Requirements

- Claude Desktop or Cursor IDE
- Anthropic API key
- Node.js 18+
- n8n (self-hosted free, or n8n Cloud $20/month)
- Google account (for Sheets, Gmail, Calendar)
- ~30 minutes setup time

## Support

Email hello@agentkit.ai — we respond within 24 hours.
