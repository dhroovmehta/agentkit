# Hiring Pipeline Agent — Setup Guide

## Table of Contents
1. Prerequisites
2. Configure MCP Servers
3. Create Pipeline Tracking Sheet
4. Import the n8n Workflow
5. Configure Job Description
6. Test Resume Screening
7. Interview Scheduling
8. Customization
9. Troubleshooting

---

## 1. Prerequisites

- Claude Desktop or Cursor IDE
- Anthropic API key
- n8n (self-hosted or cloud)
- Gmail for receiving applications
- Google Sheets for pipeline tracking
- Google Calendar for interview scheduling
- 20-25 minutes setup time

---

## 2. Configure MCP Servers

1. Copy `mcp-config.json` into Claude Desktop config
2. Set filesystem path to your hiring folder (store resumes here)
3. Add Google credentials for Gmail, Calendar, and Drive
4. Restart Claude Desktop

---

## 3. Create Pipeline Tracking Sheet

Create a Google Sheet with a "Pipeline" tab:

| Date | Name | Email | Position | Experience Score | Skills Score | Education Score | Culture Score | Total | Verdict | Status | Notes |
|------|------|-------|----------|-----------------|-------------|----------------|--------------|-------|---------|--------|-------|

---

## 4. Import the n8n Workflow

1. Import `workflow-n8n.json` into n8n
2. Configure: Gmail, Anthropic, Google Sheets, SMTP credentials
3. Update Sheet IDs and email addresses

---

## 5. Configure Job Description

In the "Screen Resume" node, replace `CONFIGURE_JOB_DESCRIPTION_HERE` with your full job description including:
- Role title and department
- Required skills and qualifications
- Preferred experience
- Company values/culture description

---

## 6. Test Resume Screening

1. Forward a test application email to your Gmail
2. Manually execute the workflow
3. Check: scoring accuracy, candidate summary, suggested questions
4. Verify the pipeline sheet is updated

---

## 7. Interview Scheduling

For candidates that advance, use Claude Desktop with the calendar MCP to:
- Check available time slots
- Draft interview invitations with scheduling links
- Send calendar invites

---

## 8. Customization

- **Scoring rubric:** Adjust weights in the system prompt (e.g., more weight on skills vs. education)
- **Score threshold:** Change the 20-point cutoff in the IF node
- **Job description:** Update per role — each role should have its own criteria
- **Email templates:** Customize rejection and invitation language

---

## 9. Troubleshooting

| Problem | Solution |
|---------|----------|
| Applications missed | Check Gmail trigger subject keywords, broaden if needed |
| Scores seem wrong | Review and refine the job description context in the prompt |
| Pipeline sheet not updating | Verify Google Sheets credentials and Sheet ID |

### Need Help?
Email hello@agentkit.ai — we respond within 24 hours.
