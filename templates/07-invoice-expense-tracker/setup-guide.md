# Invoice & Expense Tracker Agent — Setup Guide

## Table of Contents
1. Prerequisites
2. Configure MCP Servers
3. Create Expense Tracking Sheet
4. Import the n8n Workflow
5. Set Up Receipt Email Forwarding
6. Test Receipt Processing
7. Monthly Reports
8. Customization
9. Troubleshooting

---

## 1. Prerequisites

- Claude Desktop or Cursor IDE
- Anthropic API key
- n8n (self-hosted or cloud)
- Gmail account
- Google Sheets
- 15-20 minutes setup time

---

## 2. Configure MCP Servers

1. Copy `mcp-config.json` into Claude Desktop config
2. Set the filesystem path to your receipts folder
3. Add Google Drive credentials
4. Restart Claude Desktop

---

## 3. Create Expense Tracking Sheet

Create a Google Sheet with an "Expenses" tab:

| Date | Vendor | Description | Category | Subcategory | Amount | Tax | Payment Method | Deductible | Business Purpose |
|------|--------|-------------|----------|-------------|--------|-----|----------------|-----------|-----------------|

Share with your Google service account.

---

## 4. Import the n8n Workflow

1. Import `workflow-n8n.json` into n8n
2. Configure: Gmail, Anthropic, Google Sheets, SMTP credentials
3. Update `YOUR_GOOGLE_SHEET_ID` and email addresses

---

## 5. Set Up Receipt Email Forwarding

Option A: Forward receipt emails to your Gmail
Option B: Set up a Gmail filter to auto-label receipt emails

The workflow checks for emails with "receipt," "invoice," "payment," or "charge" in the subject line every 15 minutes.

---

## 6. Test Receipt Processing

1. Forward a real receipt email to your Gmail
2. Manually execute the workflow (or wait 15 minutes)
3. Check Google Sheets — the expense should appear with all fields populated
4. Verify category and amount are correct

---

## 7. Monthly Reports

On the 1st of each month at 9 AM, the workflow automatically:
1. Reads all expenses from the sheet
2. Generates a financial summary
3. Emails the report to you

---

## 8. Customization

- **Categories:** Edit the system prompt to add custom categories
- **Processing frequency:** Change from 15 minutes to 5 minutes
- **Anomaly thresholds:** Adjust the $500 flag threshold in the prompt
- **Tax rates:** Add your state/local tax rates for better estimates

---

## 9. Troubleshooting

| Problem | Solution |
|---------|----------|
| Receipts not processed | Check Gmail filter and email trigger subject keywords |
| Wrong categories | Add more examples to the system prompt for your common vendors |
| Missing tax amounts | Many digital receipts don't show tax separately — this is normal |
| Duplicate entries | Add a deduplication check based on vendor + date + amount |

### Need Help?
Email hello@agentkit.ai — we respond within 24 hours.
