# Customer Support Auto-Responder — Setup Guide

## Table of Contents
1. Prerequisites
2. Configure MCP Servers
3. Import the n8n Workflow
4. Set Up Email Integration
5. Configure Escalation Rules
6. Create Support Tracker Sheet
7. Test the Pipeline
8. Go Live
9. Customization
10. Troubleshooting

---

## 1. Prerequisites

- Claude Desktop or Cursor IDE
- Anthropic API key
- n8n (self-hosted or cloud)
- Gmail account for support inbox (e.g., support@yourdomain.com)
- Google Sheets for ticket tracking
- 20-25 minutes setup time

---

## 2. Configure MCP Servers

1. Open your Claude Desktop config file
2. Replace with the provided `mcp-config.json`
3. Update paths: point filesystem to your knowledge base / FAQ folder
4. Add Gmail credentials (Google service account)
5. Add Brave Search API key for documentation lookups
6. Restart Claude Desktop

---

## 3. Import the n8n Workflow

1. Open n8n > Workflows > Import from File
2. Select `workflow-n8n.json`
3. Configure credentials:
   - **Gmail OAuth2** — connect your support inbox
   - **Anthropic API** — your API key
   - **SMTP** — for sending responses
   - **Google Sheets** — for ticket logging

---

## 4. Set Up Email Integration

The workflow polls your Gmail inbox every 5 minutes for unread emails.

1. In the "Check Support Inbox" node, verify the Gmail credential is connected
2. Optionally add label filters to only process emails with specific labels
3. Set up a Gmail filter to auto-label incoming support emails

---

## 5. Configure Escalation Rules

1. In the "Escalate to Human" node, replace `YOUR_SUPPORT_LEAD@example.com` with your email
2. The classifier automatically escalates billing issues, angry customers, and churn risks
3. To modify escalation rules, edit the classification prompt in the "Classify Email" node

---

## 6. Create Support Tracker Sheet

Create a Google Sheet with a "Support Log" tab:

| Date | From | Subject | Category | Urgency | Sentiment | Churn Risk | Action | Status |
|------|------|---------|----------|---------|-----------|-----------|--------|--------|

Share it with your Google service account email.

---

## 7. Test the Pipeline

1. Send a test email to your support inbox
2. Wait 5 minutes (or manually execute the workflow)
3. Verify: email classified correctly, response drafted, logged to sheet
4. Test escalation: send an email mentioning "cancel my account"
5. Verify it gets escalated, not auto-responded

---

## 8. Go Live

1. Activate the workflow in n8n
2. Monitor the first 10-20 tickets closely
3. Review auto-responses for quality
4. Adjust classification prompts if needed

---

## 9. Customization

- **Response templates:** Edit the system prompt to match your brand voice
- **Classification categories:** Add product-specific categories
- **Escalation thresholds:** Modify the IF node conditions
- **Polling frequency:** Change from 5 minutes to 1 minute for faster response
- **Knowledge base:** Add your FAQ documents to the filesystem MCP path

---

## 10. Troubleshooting

| Problem | Solution |
|---------|----------|
| Emails not being picked up | Check Gmail credentials and label filters |
| Wrong classifications | Review and adjust the classifier prompt |
| Responses too generic | Add more context/examples to the response prompt |
| Escalations not arriving | Verify SMTP credentials and recipient email |

### Need Help?
Email hello@agentkit.ai — we respond within 24 hours.
