# ConvertKit Form Setup for AgentKit

**Time:** 3-5 minutes
**Account:** fileforgehq@gmail.com (already has ConvertKit account with API key configured)

---

## What You're Creating

AgentKit's landing page has an email capture form ("Get the free template + updates"). When someone submits their email, it calls ConvertKit's API to subscribe them. The API needs a **Form ID** (a numeric ID) to know which form/list to add them to.

You already have:
- ConvertKit API key: configured in Vercel
- ConvertKit sequences: 5 created (including AgentKit Welcome sequence #2692608)
- Missing: A ConvertKit **Form** to capture subscribers

---

## Step-by-Step

### 1. Log into ConvertKit
- Go to https://app.convertkit.com
- Log in with **fileforgehq@gmail.com** (password in 1Password)

### 2. Create a New Form
- Click **Grow** in the left sidebar
- Click **Landing Pages & Forms**
- Click **+ Create New** (top right)
- Select **Form** (not Landing Page)

### 3. Configure the Form
- **Template:** Pick "Minimal" or any — doesn't matter, we only use the API, not the embedded form
- **Form name:** `AgentKit Email Capture`
- **Success message:** "Thanks! Check your inbox for the free template."
- **No other settings needed** — we're using the API, not embedding this form

### 4. Save and Get the Form ID
- Click **Save**
- Look at the URL in your browser. It will look like:
  ```
  https://app.convertkit.com/forms/designers/XXXXXXX/edit
  ```
- The **XXXXXXX** number is your Form ID (e.g., `7234567`)

### 5. (Optional) Connect to Sequence
- While on the form edit page, click **Settings** tab
- Under **Incentive** or **Automation**, you can connect it to the AgentKit Welcome sequence (#2692608)
- This means anyone who signs up gets the automated email sequence

### 6. Update Vercel Env Var
Run this in terminal:
```bash
cd ~/Claude_Code_Projects/agentkit
echo "XXXXXXX" | vercel env rm CONVERTKIT_FORM_ID production -y 2>/dev/null
echo "XXXXXXX" | vercel env add CONVERTKIT_FORM_ID production
```
Replace `XXXXXXX` with the actual numeric form ID.

### 7. Update Local .env.local
Tell Claude the form ID — or paste it yourself into:
```
~/Claude_Code_Projects/agentkit/.env.local
```
Line: `CONVERTKIT_FORM_ID=XXXXXXX`

### 8. Redeploy
```bash
cd ~/Claude_Code_Projects/agentkit && vercel --prod
```

---

## That's It

After this, the email capture on agentkit-sandy.vercel.app will work. Every email submitted goes into ConvertKit and (if you connected the sequence) starts receiving the AgentKit Welcome emails.

**Paste the form ID in chat and I'll handle the rest.**
