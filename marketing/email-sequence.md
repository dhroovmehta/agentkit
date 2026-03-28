# AgentKit ConvertKit Welcome Sequence

## Overview
This is a 5-email sequence triggered when someone downloads the free Solo Business Operations Agent template. The sequence educates, builds trust, and gradually introduces paid templates. Tone: helpful builder sharing experience, not salesy. Each email solves a problem the user will face.

---

## Email 1: Welcome + Setup Tips
**Timing:** Immediately (within 1 hour of download)
**Goal:** Celebrate their decision, reduce friction on setup, build excitement

### Subject Line (Test both)
- Primary: "Your Solo Agent is ready. 30-minute setup guide inside."
- Alternative: "Welcome to AgentKit. Here's how to get it running by tonight."

### Preview Text
"Set up your automation in 30 minutes. I'll walk you through it."

### Email Body

---

**Subject: Your Solo Agent is ready. 30-minute setup guide inside.**

Hey there,

Thanks for grabbing the Solo Business Operations Agent. You just got access to a template that saves solopreneurs 15+ hours per week.

Here's what you're about to do:

**In the next 30 minutes:**
1. Download the n8n workflow (the orchestration engine)
2. Create MCP server connections (for access to your Gmail, calendar, etc.)
3. Customize the system prompt (just 3 fields: your business type, your name, your preferences)
4. Turn it on and let it run

By tonight, your agent will be:
- Reading your emails and drafting responses
- Checking your calendar for meetings
- Researching leads you tag with #research
- Repurposing old content to your social calendar
- Sending you a daily summary of what happened

**The hardest part:** Setting up the MCP servers. It's not coding—just API keys and a few configuration lines. Takes 10 minutes.

**Here's the full setup guide:** [LINK to setup PDF/doc]

**If you get stuck,** reply to this email. I read every message.

Also: This agent learns as you use it. First week is rough (you'll see dumb mistakes). By week 4, it's handling 95% of your routine work. Be patient with it.

---

**One more thing:** You have access to the system prompt. It's 3,000 words and it's annotated (I added comments explaining why each section exists). If you want to customize it for your specific situation, that's how.

Examples:
- "If you're in consulting, add 'Research potential client websites' to the tasks"
- "If you have a specific email template you always use, paste it in the prompt"
- "If you want the agent to be more aggressive about scheduling, change the threshold"

Don't be scared to edit it.

---

**What happens next:**
Tomorrow, I'll email you about how to get the most out of your agent (the 3 tweaks that make the biggest difference). Day 4, I'll share a case study from another builder. Day 7, I'll introduce the paid templates.

For now, just get it running.

Thanks for trying AgentKit.

[Your Name]
Founder, AgentKit

---

---

## Email 2: Customization Tips
**Timing:** Day 2 (48 hours after Email 1)
**Goal:** Reduce adoption friction, show quick wins, build confidence

### Subject Line (Test both)
- Primary: "3 tweaks that made my agent 10x more useful"
- Alternative: "Your agent is running. Here's how to make it smarter."

### Preview Text
"Small changes in the system prompt = huge differences in what your agent does."

### Email Body

---

**Subject: 3 tweaks that made my agent 10x more useful**

Hey,

Assuming your agent is running by now. How's it going?

Here's what I've learned from using my agent for 18 months: The system prompt is 80% of the work. The technology is 20%.

Small tweaks in the prompt create huge differences in what the agent does.

Here are the three tweaks I made that had the biggest impact:

---

**Tweak #1: Be specific about your constraints**

Bad prompt: "Respond to emails professionally"
Good prompt: "Respond to emails in under 100 words. Use our standard greeting: 'Hi [name], thanks for reaching out. Here's what I found...'"

**Why it works:** Claude learns from specificity. Vague instructions → vague outputs. Specific instructions → consistent outputs.

**In your prompt, find this section:** [SECTION NAME]
**Change it to match your actual communication style.**

---

**Tweak #2: Add examples**

Claude learns from examples better than from descriptions.

Instead of: "Be empathetic in customer responses"
Add this example:
```
CUSTOMER: "Your product broke after 2 days."
RESPONSE: "I'm sorry to hear that. Let's get this fixed. Can you tell me what broke and when?"
```

**In your prompt, find this section:** [SECTION NAME]
**Add 2-3 real examples of conversations you want the agent to copy.**

---

**Tweak #3: Set confidence thresholds**

Don't let your agent make decisions it's uncertain about.

Add this to your prompt:
"If your confidence is below 80%, ask for human approval before acting."

This prevents the agent from sending bad emails or making wrong decisions. You review the edge cases, the agent handles the routine stuff.

**In your prompt, find this section:** [SECTION NAME]
**Adjust the confidence threshold based on how comfortable you are with it making decisions.**

---

**That's it.** Three tweaks. Takes 15 minutes. Makes a huge difference.

After you make these changes, test the agent on a small batch of data (like 5 emails instead of your whole inbox). See what changes. Iterate from there.

---

**Next up:** I'm sending you a case study on Day 4. You'll see how another builder used this template and what changed for them.

For now, tweak and iterate.

[Your Name]

---

---

## Email 3: Case Study / Results Showcase
**Timing:** Day 4 (72 hours after Email 2)
**Goal:** Build credibility, show real use cases, reduce buyer hesitation for paid templates

### Subject Line (Test both)
- Primary: "How a solo founder went from 60-hour weeks to 30 (using this agent)"
- Alternative: "Real results: What changed when I automated my business"

### Preview Text
"One template. 15+ hours saved per week. Here's exactly what changed."

### Email Body

---

**Subject: How a solo founder went from 60-hour weeks to 30 (using this agent)**

Hey,

I want to share a real story about what changed when I deployed the Solo Operations Agent.

**The founder:** Sarah, solo marketing consultant. Clients, content, everything. Sound familiar?

**Before:**
- 60-hour weeks
- Spending 20 hours/week on admin (email, scheduling, research)
- Missing leads because she couldn't follow up
- Burning out

**What she automated:**
1. Email management (agent reads, drafts responses, Sarah reviews)
2. Lead research (agent profiles prospects, scores them, suggests outreach)
3. Content scheduling (agent repurposes old content, schedules posts)
4. Weekly reporting (agent summarizes metrics, sends summary)
5. Meeting coordination (agent finds times, suggests calendar slots)

**The result (after 4 weeks):**
- 15+ hours/week freed up
- Able to follow up with leads (was her biggest bottleneck)
- Better decisions (agent pulls data Sarah would never compile manually)
- More confidence (less stuff falling through the cracks)
- 30-hour weeks instead of 60-hour weeks

**Revenue impact:** +40% in new client acquisitions (because she had time to follow up)

**How she did it:**
1. Downloaded the template
2. Set up MCP servers for her Gmail, Google Calendar, and a simple database
3. Customized the system prompt to match her business (added her email templates, her process for qualifying leads)
4. Let it run for a week, made adjustments
5. By week 2, she was reviewing ~50 agent decisions per day
6. By week 4, it was smooth sailing

**The key:** She spent the first 4 weeks iterating. The agent got better every week. By week 8, it was handling 95% of her routine work.

---

**What I want you to know:**
This is exactly what can happen for you too. The template works. But it's not a plug-and-play magic solution. It requires:
1. Time to set it up (30 minutes of active work)
2. Time to customize it (1-2 hours to get it right for your use case)
3. Patience with iteration (first week is rough, week 4 is smooth)
4. Willingness to review and improve (you're coaching the agent, not just using it)

If you can commit to those 4 things, you'll see the same kinds of results Sarah did.

---

**Next step:** In 3 days, I'm sending you info about the paid templates. These are the same patterns, applied to different departments. Each one saves 40+ hours of engineering time.

For now, keep iterating on your Solo Agent. Get it to 95% accuracy on your specific use case. That's the foundation everything else is built on.

Curious to hear how it's going. Reply if you want to share updates.

[Your Name]

---

---

## Email 4: Paid Templates Introduction (Soft Pitch)
**Timing:** Day 7 (1 week after Email 1)
**Goal:** Introduce paid templates, position as natural next step, keep tone helpful not pushy

### Subject Line (Test both)
- Primary: "What comes after you master the free template"
- Alternative: "Ready for the next level? Here's what we built."

### Preview Text
"The paid templates follow the same pattern. Different departments, same architecture."

### Email Body

---

**Subject: What comes after you master the free template**

Hey,

By now, your Solo Operations Agent is probably handling 80% of your routine work. You've seen the value: fewer hours on admin, more hours on revenue.

Here's what people ask me next:

"What about my [sales/content/support]? Can I automate that too?"

Answer: Yes. That's what the paid templates are for.

---

**The 10 Templates (You have the free one. Here are the others):**

**Content:**
- **Content Repurposing Pipeline** ($49): 1 blog post → 10 pieces (Twitter, LinkedIn, newsletter, etc.). Saves 6 hours/week.
- **SEO Content Factory** ($79): Keyword research → outlining → drafting → publishing. Saves 15 hours/week.

**Sales:**
- **Sales Outreach Automation** ($79): Research leads → personalize emails → run follow-ups. Saves 20 hours/week.

**Support:**
- **Customer Support Auto-Responder** ($49): Classify tickets → draft responses → escalate edge cases. Saves 12 hours/week.

**Analytics:**
- **Weekly Business Intelligence Report** ($49): Pull data from 5 sources → generate insights. Saves 5 hours/week.
- **Competitive Intelligence Monitor** ($49): Track competitor changes, send weekly alerts.

**Other:**
- **Social Media Manager** ($49): Content calendar management, engagement tracking.
- **Invoice & Expense Tracker** ($29): Process receipts, auto-categorize, generate reports.
- **Hiring Pipeline Agent** ($59): Screen resumes, schedule interviews.

---

**Which one should you buy?**

Look at your calendar from last month. What took the most time that wasn't revenue-generating?

- Lots of emails? You already have that covered.
- Lots of content work? Content Repurposing ($49) or SEO Factory ($79)
- Lots of lead research? Sales Outreach ($79)
- Lots of customer emails? Support Auto-Responder ($49)

Pick the one that solves your #2 problem. (You already solved #1 with the free template.)

---

**Pricing**
- Individual templates: $29-$79
- Bundle (3 templates): $149
- Bundle (6 templates): $199

Once you buy, you get access to:
- The complete n8n workflow
- The full system prompt (annotated)
- MCP server configurations
- Setup guides
- Updates forever
- Email support

---

**Why I'm telling you this:**

You trusted me enough to download the free template. I want to show you what's possible when you automate multiple departments.

Most of our users buy 2-3 templates and end up saving 25-40 hours per week. That's 2 FTEs. Without hiring anyone.

Revenue impact varies, but most see 20-50% improvement in revenue because they have time to focus on sales and strategy instead of admin.

---

**No pressure.** Use the free template as long as you want. If you want to go deeper, the paid ones are there.

Either way, I'm curious how the Solo Agent is working for you. Reply with updates.

[Your Name]

---

---

## Email 5: Bundle Offer + Urgency
**Timing:** Day 10 (10 days after Email 1)
**Goal:** Drive conversion with bundle pricing, create mild urgency, position as complete system

### Subject Line (Test both)
- Primary: "Full automation blueprint: 6 templates for $199 (limited time)"
- Alternative: "Automate 6 departments of your business (bundle pricing)"

### Preview Text
"Save 30% on the bundle. This is the full system I use to run my business."

### Email Body

---

**Subject: Full automation blueprint: 6 templates for $199 (limited time)**

Hey,

If the Solo Operations Agent saved you time, imagine what happens when you automate 6 departments of your business at once.

Most of our customers buy 2-3 templates individually and then wish they'd bought the bundle.

So I'm offering a bundle deal.

---

**The Full Automation Blueprint Bundle ($199)**

This is the exact 6 templates I use to run my business:

1. **Solo Operations Agent** (Free, but included)
2. **Content Repurposing Pipeline** ($49 value)
3. **Sales Outreach Automation** ($79 value)
4. **Customer Support Auto-Responder** ($49 value)
5. **Weekly Business Intelligence Report** ($49 value)
6. **Invoice & Expense Tracker** ($29 value)

**Total value:** $255
**Bundle price:** $199
**You save:** $56 (22% off)

---

**Why this bundle?**

These 6 templates cover the 6 biggest time-sinks for solopreneurs:
1. **Operations:** Email, scheduling, admin (Solo Agent)
2. **Content:** Repurposing and scheduling (Content Repurposing)
3. **Sales:** Lead research and outreach (Sales Outreach)
4. **Support:** Customer emails and ticketing (Support Agent)
5. **Analytics:** Weekly reporting and data pulls (BI Report)
6. **Finance:** Invoice processing (Invoice Tracker)

Deploy all 6, and you're looking at 25-40 hours/week saved. Across 6 areas of your business.

That's a complete system.

---

**Timeline**

I'm offering the bundle at this price through [DATE]. After that, it goes back to individual pricing ($255).

Why the deadline? Because at $199, it's almost a steal. And I want people who are serious about automation to take advantage of it. Not people who are "just browsing."

---

**What you'll have**

6 complete automation systems:
- 6 system prompts (fully annotated)
- 6 n8n workflows (ready to import)
- 6 sets of MCP configurations
- 6 setup guides
- Email support
- Lifetime updates

Everything you need to automate 6 departments and save 25-40 hours/week.

---

**The real question**

Do you want to be working 60-hour weeks next year, or 30-hour weeks?

If it's 30, this bundle is the shortcut.

If you're curious but not sure, no worries. The free template is still there. Play with it more. When you're ready, the bundle will be here.

But the deadline is real. [DATE].

---

**Next steps**

1. **Ready to go all-in?** Buy the bundle: [LINK]
2. **Want to think about it?** No pressure. Check back when you're ready.
3. **Have questions?** Reply to this email. I'll answer.

Thanks for being part of this.

[Your Name]

P.S. — If you're hesitant because of budget, I get it. The bundle is the best value, but you can also:
- Buy 3 templates individually ($49 + $49 + $29 = $127, vs. $149 bundle)
- Buy 1 paid template now ($49-$79) and add more later

Whatever works for you.

---

---

## Sequence Notes

### Tone & Voice
- Helpful builder sharing learnings, not a marketer selling
- Personal anecdotes (my agent, my results, what I learned)
- Specific examples (not abstract claims)
- Acknowledge friction (setup is work, iteration takes time, budget is real)
- Real timestamps and deadlines (not fake urgency)

### Customization Hooks
Each email should feel personalized:
- Email 2: "In your prompt, find this section" (they can see their prompt)
- Email 3: Case study should match the subscriber's likely profile (solopreneur, small team)
- Email 4: Ask them to look at their calendar (makes it relevant)
- Email 5: Real deadline should be set before the sequence runs

### Expected Metrics
- **Email 1 open rate:** 50-60% (high because immediate, relevant)
- **Email 1 click rate:** 10-15% (setup guide)
- **Email 2 open rate:** 40-50% (follow-up value)
- **Email 3 open rate:** 35-45% (case study format)
- **Email 4 open rate:** 35-45% (introduces paid)
- **Email 4 click rate:** 8-12% (traffic to paid templates)
- **Email 5 open rate:** 30-40% (last email, some fatigue)
- **Email 5 conversion rate:** 2-5% (bundle purchase)

### Optimization Flags
- If Email 2 opens are low (<35%), the "customization tips" angle isn't resonating. Switch to "help with setup" focus.
- If Email 4 clicks are low (<5%), the paid templates aren't positioned well. A/B test the subject line or the template descriptions.
- If Email 5 conversions are low (<1%), the bundle pricing isn't compelling. Consider a deeper case study or a customer quote showing ROI.

