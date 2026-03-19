# Social Media Manager Agent — Setup Guide

## Table of Contents
1. Prerequisites
2. Configure MCP Servers
3. Import the n8n Workflow
4. Configure Your Brand
5. Test Content Generation
6. Weekly Usage
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
2. Update paths and API keys
3. Restart Claude Desktop

---

## 3. Import the n8n Workflow

1. Import `workflow-n8n.json` into n8n
2. Configure: Brave Search, Anthropic, Google Sheets, SMTP credentials
3. Update placeholders in workflow nodes

---

## 4. Configure Your Brand

In the "Generate Content Calendar" node, replace:
- `CONFIGURE_YOUR_BRAND` — your brand name and brief description
- `CONFIGURE_YOUR_INDUSTRY` — your industry (e.g., "B2B SaaS," "fintech")

Edit the system prompt to add:
- Your brand voice guidelines
- Topics you want to cover
- Topics to avoid
- Competitor accounts to monitor

---

## 5. Test Content Generation

1. Manually execute the workflow
2. Review the generated content calendar
3. Check each post for brand alignment, tone, and quality
4. Adjust the prompt if needed

---

## 6. Weekly Usage

**Automated:** Content calendar generated every Sunday at 8 AM.

**Manual workflow:**
1. Receive the calendar via email on Sunday
2. Review and edit posts as needed
3. Schedule posts using Buffer, Hootsuite, or native scheduling
4. Monitor engagement throughout the week
5. Feed results back for next week's optimization

---

## 7. Customization

- **Posting frequency:** Adjust the calendar structure in the system prompt
- **Platforms:** Add or remove platforms (TikTok, YouTube, etc.)
- **Tone:** Modify tone guidelines for your brand
- **Auto-posting:** Connect Buffer or native platform APIs for automatic scheduling

---

## 8. Troubleshooting

| Problem | Solution |
|---------|----------|
| Content doesn't match brand voice | Add more brand guidelines to the prompt |
| Posts are too generic | Include recent company news/events in the prompt |
| Calendar format inconsistent | Specify exact table format in the prompt |

### Need Help?
Email hello@agentkit.ai — we respond within 24 hours.
