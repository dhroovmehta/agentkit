# AgentKit Hacker News Submission Plan

## Overview
Hacker News is where builders hang out. They value authentic technical content, real problems solved, and learning over marketing. AgentKit is a perfect fit IF positioned correctly: as a collection of battle-tested patterns, not a sales pitch.

**Key principles for HN:**
- Lead with the problem you solved, not the product
- Show your work (system design, tradeoffs, lessons learned)
- Be honest about limitations
- Engage thoughtfully with comments (even criticism)
- No hype, no buzzwords, no fake urgency

---

## Submission #1: Show HN (Most Likely to Land)

**Timing:** Tuesday-Thursday, 9-11 AM PT (peak HN traffic)

**Title:**
> Show HN: AgentKit — 10 production-ready AI agent templates I built over 18 months

**Better alternative:**
> Show HN: I automated 8 departments of my business with AI agents. Here are the patterns I learned (and templates to copy)

**Selected:** "Show HN: I automated 8 departments of my business with AI agents. Here are the patterns I learned (and templates to copy)"
*Why: "I" hooks HN (personal story). "Learned" signals knowledge sharing. "Patterns" appeals to engineers. "Copy" is honest (not hiding the commercial aspect).*

**URL:** https://agentkit-sandy.vercel.app

**Your Comment (Post Within 5 Minutes of Submission):**

---

> **Background:** I spent 18 months building AI agents for my business. Started with one (customer support) and ended up with 10 (covering content, sales, operations, analytics).
>
> **The problem I was solving:** Building agents from scratch is *hard*. You need:
> 1. A well-engineered system prompt (not just "be helpful")
> 2. Integration with real tools (MCP servers, not hallucinations)
> 3. Error handling and audit trails (production doesn't forgive mistakes)
> 4. Workflow orchestration (n8n or similar)
> 5. Human review loops (some decisions shouldn't be automatic)
>
> Most guides skip 2-5. So most people fail.
>
> **What I did:** Templated the patterns. Each template includes:
> - A ~3,000 word system prompt (annotated, explaining why each section exists)
> - A complete n8n workflow (ready to import)
> - MCP configurations (for common tools)
> - A setup guide (30 minutes to running)
>
> **The 10 templates:**
> 1. Solo Operations Agent (FREE) — automate 8 departments
> 2. Content Repurposing ($49) — 1 post → 10 pieces
> 3. Sales Outreach ($79) — research → personalize → sequence
> 4. Support Agent ($49) — classify → respond → escalate
> 5-10. (others for analytics, content, hiring, finance, social, competitive intel)
>
> **Why release this?**
> - The hardest part of AI agents isn't the model. It's system design.
> - If I can give people the patterns + templates, they can ship in 30 min instead of 40 hours.
> - The free template is a good intro. Paid ones are for people who want more depth.
>
> **What I'm curious about:**
> - Have you built production AI agents? What patterns did you use?
> - What failed that the guides didn't mention?
> - If you're interested in this, I'd love your feedback.
>
> Happy to answer any questions.

---

### Expected HN Response
**Likely positive:** HN builders like:
- Honest problem-solving ("I struggled with X, here's what worked")
- Practical output ("here are the templates")
- Technical depth (system design, MCP, etc.)
- Authentic story (18 months of iteration, not 2-week MVP hype)

**Likely criticism (prepare answers):**
- "Isn't this just prompts + n8n?" (Yes. That's the point. These aren't magic. They're battle-tested patterns.)
- "Why should I buy instead of DIY?" (You shouldn't, if you have 40 hours. This is for people who don't.)
- "What about open source?" (I may open-source the system prompts. The n8n workflows are easy to replicate.)
- "How do you handle hallucinations?" (MCP gives real data instead of descriptions. Details in the guides.)

**Your response strategy:**
- Answer every question honestly
- Don't oversell
- Share learnings freely (people respect builders who share)
- Engage with criticism (it's often the best feedback)

---

---

## Submission #2: Ask HN (Soft Angle)

**Timing:** If Submission #1 doesn't gain traction, try this 1-2 weeks later

**Title:**
> Ask HN: How do you structure AI agent system prompts for production?

**Why this works:**
- Frames as a genuine question (not a product pitch)
- Taps into a real community need (HN builders are dealing with this)
- Your answer (and templates) are the solution

**Your comment (position yourself as an answer):**

---

> I've been building production AI agents for 18 months and I'm curious what others do.
>
> Here's my approach:
>
> **1. Separate role from responsibility:**
> - ROLE: "You are a customer support agent"
> - RESPONSIBILITY: "Classify incoming emails, generate responses, escalate edge cases"
> - Why: Different agents have the same role (support) but different responsibilities (Spanish speakers, refund authority, etc.)
>
> **2. Constraints before instructions:**
> - "Do NOT offer refunds beyond $500 without approval"
> - "Do NOT make promises about delivery times"
> - "Do NOT share internal metrics with customers"
> - Why: LLMs follow constraints better than they follow instructions. Negative framing prevents mistakes.
>
> **3. Examples over descriptions:**
> - Show 2-3 real exchanges you want the agent to replicate
> - Don't just say "be empathetic"
> - Why: Claude learns from examples better than advice.
>
> **4. Process, not philosophy:**
> - Step-by-step decision tree (if X, then Y)
> - Not abstract guidance
> - Why: Reduces hallucinations. Claude follows process better.
>
> **5. Output format specification:**
> - Always return: {category, confidence, action, reason}
> - Structured output = easier to parse and route
> - Why: Unstructured output breaks your pipeline.
>
> **6. Feedback loops built in:**
> - "If confidence < 80%, ask for human approval"
> - "Log every decision for audit trail"
> - Why: Production agents need audit trails and review.
>
> I've packaged these patterns + templates on [site] if anyone wants to see it in action. But I'm really curious what others are doing differently. What works for you?

---

### Why This Works
- Asks a genuine question (not a pitch)
- Shows your depth (specific, detailed answer)
- Positions templates as "here's an example" not "here's my product"
- Gets HN engagement without feeling spammy
- Natural link to AgentKit in context (helpful, not pushy)

---

---

## Submission #3: Comment Strategy (Ongoing)

Don't submit a third post. Instead, **watch for existing HN discussions about AI agents, automation, or system prompts** and participate authentically.

### Target Discussions
- "Show HN: [AI automation project]"
- "Ask HN: How do you use Claude/OpenAI in production?"
- "Show HN: [n8n automation]"
- "Ask HN: What's your approach to [relevant problem]?"

### Your Comment Template (Adjust per discussion)

> I've been thinking about this too. [Quick personal anecdote about the problem].
>
> Here's what I've learned:
> [Specific insight from your experience]
>
> This is exactly why I [started building templates / open-sourced / documented the patterns]. If you're interested in [specific relevant aspect], I wrote about it here: [link]
>
> Would love to hear what's worked for you.

**Key:** Lead with insight, mention your work as supporting evidence, ask for feedback.

---

---

## Timing Strategy

### Week 1: Show HN Submission
- Submit "Show HN: I automated 8 departments" on Tuesday/Wednesday
- This is your main shot. Prepare for it.
- Engage heavily for 24 hours

### Week 2-3: Monitor & Comment
- Watch for related discussions
- Participate authentically (help people, share insights)
- Link to templates when relevant (not forced)

### Week 4+: Ask HN Submission (If Needed)
- If Show HN didn't hit (outside Top 30), try Ask HN angle
- "How do you structure system prompts?" is more discussion-friendly
- Positions you as expert, not seller

---

---

## Important HN Rules

**Respect these or your posts get flagged/killed:**

1. **No direct product pitches** — "Check out my tool!" = flagged
   - Better: "I built templates to solve X. Here's what I learned." = accepted

2. **No vote manipulation** — Don't ask friends to upvote
   - HN detects voting patterns and kills posts

3. **No spam in comments** — Don't paste your link in unrelated threads
   - Better: Engage authentically, mention your work when relevant

4. **No clickbait titles** — "You won't believe this trick!" = flagged
   - Better: Honest, specific titles

5. **Engage authentically** — HN respects builders who are *there* to learn
   - Spend 24-48 hours answering questions
   - Be honest about tradeoffs and limitations
   - Show your work

---

---

## Response to Common HN Criticisms

**Prepare these in advance so you can respond thoughtfully:**

**Criticism:** "This is just selling templates. Not HN material."
**Response:** "You're right that there's a commercial aspect (templates are paid). But the real value is the patterns and system design approach. The free template is there so people can evaluate without spending money. I'm happy to share the approach in more detail if that's helpful."

**Criticism:** "Prompts + n8n isn't novel."
**Response:** "Totally true. None of these pieces are novel individually. The value is in the combination and the specific patterns that make production agents reliable. It's like a cookbook—recipes aren't novel, but a good cookbook saves time. Happy to discuss the specific patterns you're curious about."

**Criticism:** "Why not open source this?"
**Response:** "Good question. The system prompts and patterns are open to share (I do that freely). The n8n workflows are easy to replicate if you know what you're doing. The pricing is for people who want the shortcut—setup guides, templates ready to import, email support. Open source would require ongoing maintenance I can't commit to. But I'm happy to share more details on the approach."

**Criticism:** "Doesn't solve the real problem [X]."
**Response:** "You're identifying a real limitation. [Acknowledge the limitation honestly]. Here's how I'm approaching it: [your solution or workaround]. Still a tradeoff. Curious what you'd do differently."

---

---

## Post-Launch

### If It Hits Top 10-30 (Good Success)
- You'll get 50-100+ comments
- Engage for 48 hours minimum (respond to all thoughtful questions)
- Take notes on feedback for iterating the product
- Share learnings in follow-up blog post

### If It Hits Top 100 but Outside Top 30 (Moderate)
- Still valuable visibility
- Engage for 24 hours
- Note what didn't resonate
- Consider tweaking the angle for a future submission

### If It Doesn't Gain Traction
- Don't repost the same thing
- Analyze why (wrong timing, weak title, weak angle)
- Try the Ask HN approach in a few weeks
- Keep commenting on related threads to build presence

### Either Way
- **Don't burn bridges.** HN community is tight. Be respectful and authentic.
- **Keep building.** HN respects builders, not vendors. Keep working on the product.
- **Share learnings.** Write about what you learned (HN respects that more than the product itself).

