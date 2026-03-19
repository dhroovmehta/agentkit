# Customer Support Auto-Responder

> Classify, respond, and escalate support tickets automatically.

## Quick Start

1. Copy `mcp-config.json` into Claude Desktop config
2. Import `workflow-n8n.json` into n8n
3. Connect Gmail, Anthropic, and SMTP credentials
4. Create a Google Sheet for ticket logging
5. Activate the workflow — support tickets handled automatically

**Full setup guide:** See `setup-guide.md`

## What's Included

| File | Description |
|------|-------------|
| `system-prompt.txt` | Classification system, response templates, escalation rules |
| `mcp-config.json` | MCP config for email, filesystem, and web search |
| `workflow-n8n.json` | n8n workflow for classify-respond-escalate pipeline |
| `setup-guide.md` | Setup guide with configuration steps |
| `README.md` | This file |

## Features

- 5-category ticket classification (Bug, Feature, Billing, General, Urgent)
- 4-level urgency ranking (P1-P4)
- Sentiment analysis and churn risk detection
- Automatic response drafting
- Smart escalation (never auto-sends billing or angry customer responses)
- Daily support digest

## Support

Email hello@agentkit.ai — we respond within 24 hours.
