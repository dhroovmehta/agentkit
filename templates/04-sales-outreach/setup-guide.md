# Sales Outreach Automation — Setup Guide

## Table of Contents
1. Prerequisites
2. Configure MCP Servers
3. Prepare Your Lead List
4. Import the n8n Workflow
5. Configure Your Product Description
6. Test with a Single Lead
7. Go Live
8. Monitoring Responses
9. Customization
10. Troubleshooting

---

## 1. Prerequisites

- Claude Desktop or Cursor IDE
- Anthropic API key
- n8n (self-hosted or cloud)
- Brave Search API key (free tier)
- Gmail or SMTP-compatible email
- Google Sheets for lead tracking
- 25-30 minutes setup time

---

## 2. Configure MCP Servers

1. Copy `mcp-config.json` into your Claude Desktop config
2. Update paths and API keys
3. Restart Claude Desktop

---

## 3. Prepare Your Lead List

Create a Google Sheet with a "Leads" tab:

| company | contact_name | title | email | industry | status | first_email_sent | notes |
|---------|-------------|-------|-------|----------|--------|-----------------|-------|
| Acme Inc | Jane Smith | VP Sales | jane@acme.com | SaaS | pending | | |

Set `status` to "pending" for leads you want to process.

---

## 4. Import the n8n Workflow

1. Import `workflow-n8n.json` into n8n
2. Configure credentials: Google Sheets, Brave Search, Anthropic, SMTP
3. Update `YOUR_GOOGLE_SHEET_ID` in the Read and Update nodes

---

## 5. Configure Your Product Description

In the "Generate Email Sequence" node, replace `[CONFIGURE: Describe your product/service here]` with a 2-3 sentence description of what you sell and who you sell it to.

Example: "We build custom CRM integrations for B2B SaaS companies. Our clients typically see 40% faster deal cycles after connecting their sales tools."

---

## 6. Test with a Single Lead

1. Add one test lead to your sheet (use your own email)
2. Manually execute the workflow
3. Check: research quality, email personalization, tone
4. Verify the email arrived and reads naturally

---

## 7. Go Live

1. Add your lead list to the Google Sheet
2. The workflow processes leads with "pending" status
3. Run manually or set up a schedule trigger
4. Monitor response rates in the sheet

---

## 8. Monitoring Responses

- Check your inbox for replies
- Update lead status in the sheet: "replied," "meeting_booked," "not_interested"
- The follow-up sequence pauses when you manually update status to anything other than "emailed"

---

## 9. Customization

- **Email tone:** Edit the system prompt to match your brand voice
- **Sequence timing:** Adjust wait nodes (3 days, 7 days, 14 days)
- **Research depth:** Add more search queries or data sources
- **CRM integration:** Replace Google Sheets with HubSpot or Salesforce API

---

## 10. Troubleshooting

| Problem | Solution |
|---------|----------|
| Research returns irrelevant results | Refine the search query in the Research node |
| Emails feel too generic | Add more context about your product in the prompt |
| Follow-ups not sending | Check the Wait node — it pauses execution, ensure n8n stays running |
| Gmail blocks sending | Use an App Password, reduce sending volume (10/hour max for cold email) |

### Need Help?
Email hello@agentkit.ai — we respond within 24 hours.
