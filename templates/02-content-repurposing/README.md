# Content Repurposing Pipeline

> Turn one blog post into 10+ pieces of platform-optimized content automatically.

## Quick Start

1. Copy `mcp-config.json` into your Claude Desktop config (update paths/keys)
2. Import `workflow-n8n.json` into n8n
3. Configure Anthropic + SMTP credentials in n8n
4. Trigger the webhook with a blog post URL
5. Receive repurposed content pieces via email

**Full setup guide:** See `setup-guide.md` for detailed instructions.

## What's Included

| File | Description |
|------|-------------|
| `system-prompt.txt` | Platform-specific content transformation prompts |
| `mcp-config.json` | MCP config for filesystem, web search, and URL fetching |
| `workflow-n8n.json` | n8n workflow for automated content pipeline |
| `setup-guide.md` | Setup guide with configuration steps |
| `README.md` | This file |

## Output Formats

- LinkedIn post (professional insight angle)
- Twitter/X thread (7-10 tweet breakdown)
- Newsletter section (email-optimized)
- Instagram caption + carousel structure
- YouTube short/community post script
- Pull quotes for graphics

## Support

Email hello@agentkit.ai — we respond within 24 hours.
