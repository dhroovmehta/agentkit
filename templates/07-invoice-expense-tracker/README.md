# Invoice & Expense Tracker Agent

> Scan receipts, categorize expenses, and generate monthly financial reports.

## Quick Start

1. Copy `mcp-config.json` into Claude Desktop config
2. Create a Google Sheet for expense tracking
3. Import `workflow-n8n.json` into n8n
4. Forward receipt emails to Gmail — expenses auto-categorized

**Full setup guide:** See `setup-guide.md`

## What's Included

| File | Description |
|------|-------------|
| `system-prompt.txt` | IRS-aligned categories, receipt extraction, monthly reporting |
| `mcp-config.json` | MCP config for filesystem and Google Drive |
| `workflow-n8n.json` | n8n workflow for receipt processing + monthly summaries |
| `setup-guide.md` | Setup guide |
| `README.md` | This file |

## Features

- Automatic receipt data extraction
- IRS-aligned expense categorization (20 categories)
- Anomaly detection (duplicates, unusual amounts)
- Monthly financial summary with tax estimates
- Google Sheets integration

## Support

Email hello@agentkit.ai — we respond within 24 hours.
