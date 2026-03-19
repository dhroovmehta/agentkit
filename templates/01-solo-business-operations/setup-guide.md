# Solo Business Operations Agent — Setup Guide

## Table of Contents
1. Prerequisites
2. Install Claude Desktop
3. Configure MCP Servers
4. Set Up Your Business Data
5. Import the n8n Workflow
6. Configure Email Delivery
7. Test Your Agent
8. Daily Usage
9. Customization
10. Troubleshooting

---

## 1. Prerequisites

Before you begin, make sure you have:

- **A computer** (Mac, Windows, or Linux)
- **Node.js 18+** installed ([download here](https://nodejs.org/))
- **Claude Desktop** or **Cursor IDE** (free to download)
- **An Anthropic API key** (get one at [console.anthropic.com](https://console.anthropic.com/))
- **n8n** installed (free, self-hosted) OR an n8n cloud account ($20/month)
- **A Google account** (for Sheets, Gmail, Calendar integration)
- **30 minutes** of setup time

**Optional:**
- Brave Search API key (free tier: 2,000 queries/month) — for industry news
- Slack workspace — for posting briefings to a channel

---

## 2. Install Claude Desktop

1. Download Claude Desktop from [claude.ai/download](https://claude.ai/download)
2. Install and open the application
3. Sign in with your Anthropic account
4. Go to **Settings > Developer** and enable "Developer Mode"

This gives you access to the MCP configuration file where you'll add the servers.

---

## 3. Configure MCP Servers

The MCP (Model Context Protocol) config file tells Claude which external tools it can access.

### Find your config file:

- **Mac:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux:** `~/.config/Claude/claude_desktop_config.json`

### Edit the config:

1. Open the config file in any text editor
2. Replace the contents with the provided `mcp-config.json` file
3. Update the placeholder values:

| Placeholder | What to put |
|------------|-------------|
| `/path/to/your/business-data` | The folder where you keep business files (e.g., `~/Documents/MyBusiness`) |
| `YOUR_BRAVE_API_KEY` | Your Brave Search API key (get free at [brave.com/search/api](https://brave.com/search/api/)) |
| `/path/to/service-account-key.json` | Your Google service account credentials file (see Step 4) |
| `YOUR_SLACK_BOT_TOKEN` | Your Slack bot token (optional — see [api.slack.com](https://api.slack.com/)) |

4. Save the file
5. Restart Claude Desktop

### Verify MCP is working:

After restarting, you should see small tool icons at the bottom of the Claude chat window. Click one to verify the server is connected.

---

## 4. Set Up Your Business Data

The agent works best with structured data. Create the following files in your business data directory:

### Google Sheets Setup

Create a Google Sheet with these tabs:

**Tab: Pipeline**
| Company | Contact | Deal Value | Stage | Days in Stage | Last Contact | Notes |
|---------|---------|------------|-------|---------------|-------------|-------|
| Acme Corp | John Smith | $5,000 | Proposal | 3 | 2024-01-15 | Waiting on budget approval |

**Tab: Finance**
| Date | Category | Description | Amount | Type |
|------|----------|-------------|--------|------|
| 2024-01-15 | Software | n8n Cloud | -$20 | Expense |
| 2024-01-14 | Revenue | Client Payment | $2,500 | Income |

**Tab: Tasks**
| Task | Department | Priority | Status | Due Date |
|------|-----------|----------|--------|----------|
| Follow up with Acme Corp | Sales | High | Open | 2024-01-16 |

### Google Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or use existing)
3. Enable the Google Sheets API, Gmail API, and Calendar API
4. Create a Service Account (IAM & Admin > Service Accounts)
5. Create a JSON key for the service account
6. Download the key file and save it securely
7. Share your Google Sheet with the service account email address

---

## 5. Import the n8n Workflow

### Install n8n (if not already):

```bash
npm install -g n8n
n8n start
```

Or use [n8n Cloud](https://n8n.io/cloud/) (easier setup, $20/month).

### Import the workflow:

1. Open n8n in your browser (usually `http://localhost:5678`)
2. Click **Workflows > Import from File**
3. Select the `workflow-n8n.json` file from this template
4. The workflow will appear with all nodes pre-configured

### Configure credentials in n8n:

You'll need to set up these credentials in n8n (Settings > Credentials):

1. **Brave Search API** — Add your API key
2. **Google Sheets** — OAuth2 or Service Account credentials
3. **Anthropic API** — Add your Anthropic API key
4. **SMTP** — Configure your email sending (Gmail SMTP works great)
5. **Slack** (optional) — OAuth2 credentials for your workspace

### Update workflow placeholders:

1. **Read Sales Pipeline node:** Replace `YOUR_GOOGLE_SHEET_ID` with your actual Sheet ID (found in the Sheet URL)
2. **Read Finance Data node:** Same Sheet ID, different tab
3. **Send Briefing Email node:** Replace `YOUR_EMAIL@example.com` with your email
4. **Post to Slack node:** Replace `#daily-briefing` with your channel name

---

## 6. Configure Email Delivery

### Using Gmail SMTP:

1. In n8n, go to **Settings > Credentials > New Credential > SMTP**
2. Configure:
   - Host: `smtp.gmail.com`
   - Port: `587`
   - User: Your Gmail address
   - Password: An App Password (not your regular password)
3. To get an App Password: Google Account > Security > 2-Step Verification > App Passwords

### Test email delivery:

1. In n8n, open the "Send Briefing Email" node
2. Click "Execute Node" to send a test email
3. Check your inbox

---

## 7. Test Your Agent

### Test the Claude Agent:

1. Open Claude Desktop
2. Start a new conversation
3. Paste: "Generate today's daily briefing. Use the connected tools to gather current data."
4. Verify it accesses your files, searches the web, and generates a structured briefing

### Test the n8n Workflow:

1. In n8n, click "Execute Workflow" (the play button)
2. Watch each node execute
3. Check your email/Slack for the briefing
4. Fix any credential or configuration errors

### Test the Schedule:

1. The workflow is set to trigger at 7:00 AM Monday-Friday
2. To test immediately, click the "Execute Workflow" button
3. Once confirmed working, activate the workflow (toggle in top-right)

---

## 8. Daily Usage

Once set up, the system works automatically:

**Automatic (no action needed):**
- 7:00 AM: n8n workflow triggers, gathers data, generates briefing, sends email/Slack

**Manual (when you want deeper analysis):**
- Open Claude Desktop and ask specific questions:
  - "What are the 3 most important tasks today?"
  - "Analyze this month's sales pipeline — what's at risk?"
  - "Draft follow-up emails for all stalled deals"
  - "Generate this week's content calendar"
  - "What's my cash runway at current burn rate?"

---

## 9. Customization

### Change briefing time:
In the n8n workflow, edit the Schedule Trigger node. The cron expression `0 7 * * 1-5` means "7:00 AM, Monday through Friday." Change the `7` to your preferred hour.

### Add departments:
Edit the system prompt to add new departments. Follow the existing format: Objective, Responsibilities, Rules.

### Change reporting format:
Edit the "Daily Briefing Format" and "Weekly Summary Format" sections in the system prompt.

### Add more data sources:
Add new MCP servers to `mcp-config.json` and new data-fetching nodes to the n8n workflow. The Merge node will combine them before sending to Claude.

---

## 10. Troubleshooting

| Problem | Solution |
|---------|----------|
| MCP tools not showing in Claude | Restart Claude Desktop. Check that the config file is valid JSON (use jsonlint.com). |
| n8n workflow fails on Google Sheets | Verify the Sheet ID is correct. Make sure the service account has edit access to the sheet. |
| Email not sending | Check SMTP credentials. For Gmail, ensure you're using an App Password, not your regular password. |
| Claude gives vague briefings | Make sure your business data sheets have recent data. The agent can only analyze what it can access. |
| Brave Search returns errors | Check your API key. The free tier allows 2,000 queries/month — you may have hit the limit. |
| Slack posting fails | Verify the bot has permission to post in the target channel. Re-authorize if needed. |

### Need Help?

Email hello@agentkit.ai with your issue and we'll respond within 24 hours.
