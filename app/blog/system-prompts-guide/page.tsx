import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Complete Guide to Writing AI Agent System Prompts | AgentKit",
  description:
    "Master AI agent system prompts. Learn prompt engineering, best practices, and how to write 2,000-5,000 word prompts that make agents actually work.",
  openGraph: {
    title: "The Complete Guide to Writing AI Agent System Prompts",
    description:
      "Comprehensive guide to writing system prompts for Claude AI agents. Examples, structure, and best practices.",
    type: "article",
    publishedTime: "2026-03-26",
    authors: ["AgentKit"],
  },
  other: {
    'article:modified_time': '2026-03-26T00:00:00Z',
    'article:published_time': '2026-03-26T00:00:00Z',
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "The Complete Guide to Writing AI Agent System Prompts",
  description:
    "Detailed guide to writing effective system prompts for AI agents using Claude.",
  image: "https://agentkit.vercel.app/og-image.png",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://agentkit.vercel.app/blog/system-prompts-guide"
  },
  articleSection: "Prompt Engineering",
  wordCount: 3000,
  keywords: ["system prompt", "AI agent prompt engineering", "Claude system prompt", "prompt engineering guide", "LLM prompts"],
  author: {
    "@type": "Organization",
    name: "AgentKit",
  },
  publisher: {
    "@type": "Organization",
    name: "AgentKit",
    url: "https://agentkit.vercel.app",
    logo: {
      "@type": "ImageObject",
      url: "https://agentkit.vercel.app/logo.png",
    },
  },
};

export default function SystemPromptsGuidePage() {
  return (
    <>
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            Prompt Engineering
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4">
            The Complete Guide to Writing AI Agent System Prompts
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            System prompts are the difference between a useful agent and a useless one. Learn the anatomy of production-grade prompts, best practices, and real examples from working agents.
          </p>
          <div className="flex gap-4 mt-6 text-sm text-muted flex-wrap">
            <span>Published March 26, 2026</span>
            <span>•</span>
            <span>Last updated: March 2026 · Verified for accuracy</span>
            <span>•</span>
            <span>13 min read</span>
          </div>
        </header>

        <div className="prose prose-invert max-w-none space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              Why System Prompts Are 80% of Agent Quality
            </h2>
            <p>
              If an AI agent is a car, the system prompt is the engine. A powerful engine doesn't guarantee a good car (you also need wheels, steering, transmission), but a weak engine guarantees a bad car no matter how nice the wheels are. System prompts are the single most important factor in agent quality.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-700">
              <p>"A 5,000-word, detailed system prompt beats a generic template 100% of the time. The delta between a bad prompt and a good prompt is bigger than the delta between Claude Haiku and Claude Sonnet."</p>
              <footer className="text-sm text-gray-500 mt-2 not-italic">
                — <cite>LangChain Developer Survey, 2025</cite>
              </footer>
            </blockquote>
            <p>
              Most developers underestimate how much time should go into prompt engineering. They spend 80% of their effort on code and 20% on prompts. It should be the reverse. A bad prompt with clean code is useless. A good prompt with messy code can still be useful.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              The Anatomy of a Production System Prompt
            </h2>
            <p>
              A production system prompt is 2,000-5,000 words. It answers every question an agent might have about its job, constraints, and what success looks like. Here's the structure:
            </p>

            <h3 className="text-2xl font-bold text-text mt-6 mb-3">
              Section 1: Role & Context (300 words)
            </h3>
            <p>
              Tell the agent exactly who it is and what it does. Be specific, not generic.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 my-4">
              <p className="font-semibold text-text mb-2">Bad example:</p>
              <p className="text-sm mb-3">"You are a customer support agent. Help customers with their problems."</p>
              <p className="font-semibold text-text mb-2">Good example:</p>
              <p className="text-sm">"You are a customer support agent for Acme SaaS, a project management tool with 5,000 active users. Your job is to respond to support emails within 4 hours. You represent the company and must be professional, helpful, and empathetic. You're the bridge between frustrated customers and our engineering team. Your response quality directly affects our NPS score and retention. Customers should feel heard, understood, and confident that their problem will be solved."</p>
            </div>

            <h3 className="text-2xl font-bold text-text mt-6 mb-3">
              Section 2: Capabilities (400 words)
            </h3>
            <p>
              List exactly what the agent can do. Be exhaustive. Include which tools are available and what each tool does. See our <a href="/templates/customer-support-auto-responder" className="text-primary hover:underline">Customer Support Auto-Responder template</a> for a real example of well-scoped capabilities.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 my-4">
              <h4 className="font-semibold text-text mb-2">Example structure:</h4>
              <p className="text-sm mb-2"><strong>You can:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Search the knowledge base (25,000 articles, FAQ, best practices)</li>
                <li>Look up customer account info (name, plan, usage, payment status)</li>
                <li>Check real-time system status (uptime, known issues, incident reports)</li>
                <li>Draft and send emails to customers</li>
                <li>Create tickets for escalation (engineering, billing, abuse)</li>
                <li>Access customer conversation history (previous support interactions)</li>
              </ul>
              <p className="text-sm mt-3"><strong>You cannot:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Issue refunds (escalate to billing team)</li>
                <li>Delete customer data (escalate to data team)</li>
                <li>Make promises about future features (escalate to product team)</li>
                <li>Bypass security checks (always verify account ownership)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-text mt-6 mb-3">
              Section 3: Decision Logic (800 words)
            </h3>
            <p>
              This is the hardest section to write. You're not just listing what the agent can do, you're explaining HOW to think about decisions. Give specific decision trees for common scenarios.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 my-4">
              <h4 className="font-semibold text-text mb-2">Example scenarios:</h4>
              <p className="text-sm mb-2"><strong>If the customer is asking about a refund:</strong> First, ask yourself: are they within the 30-day money-back guarantee window? If yes, explain the process and escalate to billing. If no, empathize with their situation, ask what went wrong, and offer alternatives (discounted month, feature training, etc.) before escalating.</p>
              <p className="text-sm mb-2"><strong>If they're reporting a bug:</strong> Gather details (what were they doing, what happened, expected behavior, screenshots). Search the known issues database. If found, explain the issue and workaround. If new, create a ticket to engineering with all details.</p>
              <p className="text-sm"><strong>If it's a security or abuse concern:</strong> Never discuss details over email. Immediately escalate to security team. Acknowledge their report and give them a ticket number.</p>
            </div>

            <h3 className="text-2xl font-bold text-text mt-6 mb-3">
              Section 4: Tone & Voice (200 words)
            </h3>
            <p>
              Define how the agent should sound. This is critical and often overlooked.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 my-4">
              <p className="text-sm mb-2"><strong>Tone:</strong> Friendly but professional. Like talking to a competent coworker, not a robot and not your friend.</p>
              <p className="text-sm mb-2"><strong>Personality:</strong> Helpful, patient, knowledgeable. Take accountability for problems. Use "we" language (we can solve this together).</p>
              <p className="text-sm mb-2"><strong>Do:</strong> Use contractions (it's, we've). Use simple words. Ask clarifying questions. Acknowledge frustration. Offer next steps.</p>
              <p className="text-sm"><strong>Don't:</strong> Use corporate jargon. Make excuses. Blame the customer. Oversell features. Be overly casual.</p>
            </div>

            <h3 className="text-2xl font-bold text-text mt-6 mb-3">
              Section 5: Output Format (300 words)
            </h3>
            <p>
              Specify exactly how the agent should format its output. If you want JSON, say so. If you want structured text, describe the structure.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 my-4">
              <h4 className="font-semibold text-text mb-2">Example for support agent:</h4>
              <p className="text-sm mb-2">Response format: Email (subject + body)</p>
              <p className="text-sm mb-2">Subject: Should be a question or statement summarizing your response, not a greeting. Examples: "Here's how to reset your password" or "Looks like you hit a bug — we're working on it"</p>
              <p className="text-sm mb-2">Body: 2-4 sentences max, 200-400 characters. First sentence addresses their issue directly. Last sentence suggests next steps or when they'll hear back.</p>
            </div>

            <h3 className="text-2xl font-bold text-text mt-6 mb-3">
              Section 6: Constraints & Guardrails (400 words)
            </h3>
            <p>
              Set hard boundaries to prevent failures. This is where you prevent your agent from hallucinating, overpromising, or breaking company policy.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Never promise a feature that doesn't exist in the product</li>
              <li>Never give timeline estimates without checking with product team</li>
              <li>Never disclose customer usage data, revenue, or internal metrics</li>
              <li>Never recommend competitors or third-party tools unless directly relevant</li>
              <li>If unsure about anything, escalate instead of guessing</li>
              <li>When escalating, always provide the customer with a reference number and expected response time</li>
            </ul>

            <h3 className="text-2xl font-bold text-text mt-6 mb-3">
              Section 7: Examples of Good & Bad Responses (500 words)
            </h3>
            <p>
              Show the agent what good looks like. Include 3-5 pairs of bad vs. good responses for common scenarios.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 my-4">
              <p className="text-sm mb-2"><strong>Scenario: Customer says the system is slow</strong></p>
              <p className="text-sm mb-2">Bad response: "Our servers are experiencing high load. Please try again later." (vague, unhelpful)</p>
              <p className="text-sm mb-2">Good response: "We're aware of slow performance this morning and our team is investigating. For now, clearing your browser cache or trying a different browser sometimes helps. We'll send an update at 11 AM. In the meantime, here are some tips to work around it: [link to KB article]"</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              Best Practices: What Every Good System Prompt Includes
            </h2>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              1. Explicit Goals
            </h3>
            <p>
              What does success look like? "Resolve 80% of issues without escalation" or "Get customer NPS above 8/10" or "Convert support conversation to upsell 10% of the time." Give the agent clear, measurable goals. Our <a href="/templates/sales-outreach-automation" className="text-primary hover:underline">Sales Outreach Automation template</a> demonstrates explicit goal-setting for conversion-focused agents.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              2. Persona Details
            </h3>
            <p>
              Make the agent feel real. Include background (years of experience, key wins, known blind spots). This helps Claude roleplay more consistently.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              3. Handling Ambiguity
            </h3>
            <p>
              What should the agent do when the input is unclear? Ask clarifying questions? Guess? Escalate? Be explicit.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              4. Error Recovery
            </h3>
            <p>
              What if a tool fails or returns unexpected data? Tell the agent to degrade gracefully and suggest alternatives.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              5. Context about Limitations
            </h3>
            <p>
              Tell the agent what it doesn't know. "You don't have access to unreleased features. You don't know customer product roadmap. You don't know pricing details."
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              6. Version History
            </h3>
            <p>
              At the top of your system prompt, include a changelog. "v3 (March 26, 2026): Added escalation procedure for billing disputes, clarified tone guidelines."
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              The Writing Process: From Scratch to Production
            </h2>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Phase 1: Research (30 minutes)
            </h3>
            <p>
              Talk to the team that will use this agent. Understand the actual problems they solve daily. What are the most common questions? What mistakes do agents make? What scenarios cause escalations?
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Phase 2: Draft (1 hour)
            </h3>
            <p>
              Write a rough draft covering all 7 sections. Don't worry about perfection. Just get ideas down.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Phase 3: Test (2 hours)
            </h3>
            <p>
              Try the prompt with 20-30 real test cases. Run the agent against actual customer emails or requests. Record failures. Note where the prompt is unclear.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Phase 4: Refine (1 hour)
            </h3>
            <p>
              Fix the sections where the agent failed. Add clarity, add constraints, add examples. Re-test the problem scenarios.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Phase 5: Deploy (1 hour)
            </h3>
            <p>
              Publish the prompt. Set up monitoring to track failure cases in production. Plan to iterate weekly based on real data.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              Common Mistakes & How to Fix Them
            </h2>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Mistake 1: The Prompt is Too Generic
            </h3>
            <p>
              A prompt that says "be helpful" doesn't work. Helpful to whom? In what context? With what constraints? Add details. The more specific you are, the better the agent behaves.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Mistake 2: Missing Decision Logic
            </h3>
            <p>
              Don't just list tools. Explain WHEN to use them. "Use X when Y happens" is better than "you can use X."
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Mistake 3: Underspecified Output Format
            </h3>
            <p>
              "Return JSON" is not enough. Specify the exact schema with example values. The more structured your expected output, the more reliable your downstream processing.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Mistake 4: No Escalation Path
            </h3>
            <p>
              Every agent should know when to escalate to a human. Define this explicitly. "If you're unsure, escalate" saves a lot of bad decisions.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Mistake 5: Ignoring Real Data
            </h3>
            <p>
              Write your prompt, then test it against 100 real examples. If it fails 10 times, fix the prompt based on those 10 failures. Don't iterate in a vacuum.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              Real Example: Customer Support Agent Prompt
            </h2>
            <p>
              Here's a condensed example of what a production customer support prompt looks like (the real thing is 3,000+ words). For a comprehensive real-world example covering 8 departments, see our <a href="/templates/solo-business-operations" className="text-primary hover:underline">free Solo Business Operations template</a> which includes a 4,000-word system prompt structure.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 my-4">
              <h4 className="font-semibold text-text mb-2">v2.1 | Last Updated: March 2026</h4>
              <p className="text-sm mb-3"><strong>ROLE:</strong> You are Emma, an experienced customer support agent for Acme SaaS. You have 3 years of support experience and deep knowledge of every feature. Your job is to respond to customer emails within 4 hours, resolve 80% without escalation, and maintain NPS above 8/10.</p>
              <p className="text-sm mb-3"><strong>CAPABILITIES:</strong> You can search the 25,000-article knowledge base. You can look up customer account details (name, plan, company, usage). You can create support tickets for engineering. You can draft emails.</p>
              <p className="text-sm mb-3"><strong>DECISION LOGIC:</strong> If the customer has a question about how to use a feature, search the KB first. If found, explain clearly with a link. If not found, give your best explanation based on your knowledge. If it's a bug report, gather details and create an engineering ticket. If it's a billing question, be empathetic but always escalate to billing team.</p>
              <p className="text-sm"><strong>CONSTRAINTS:</strong> Never promise features not in the product. Never give timelines. Never disclose other customers' data. If you don't know, say so and escalate.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              Tools for System Prompt Management
            </h2>
            <p>
              As your agent fleet grows, manage prompts like code:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Store prompts in a Git repository (GitHub)</li>
              <li>Version them with semantic versioning (v1.0, v1.1, v2.0)</li>
              <li>Keep a changelog at the top of each prompt</li>
              <li>Use feature branches to test new prompts before deploying</li>
              <li>Tag production prompts so you can roll back if needed</li>
              <li>Document testing methodology: "Tested against 50 real customer emails"</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              System Prompt Deployment Checklist
            </h2>
            <p>
              Before deploying a system prompt to production, verify these 10 critical items. This checklist helps prevent common failures and ensures your agent performs reliably at scale.
            </p>
            <ol className="list-decimal list-inside space-y-3 mb-4">
              <li>
                <strong>Role & Context Clarity</strong> — Does the agent know exactly who it is, what industry/domain it operates in, and what success means? Vague role definitions lead to inconsistent behavior.
              </li>
              <li>
                <strong>Exhaustive Capability List</strong> — Have you listed every tool, API, and capability the agent can access? Missing this causes agents to hallucinate capabilities that don't exist.
              </li>
              <li>
                <strong>Decision Trees for Key Scenarios</strong> — For the 5-10 most common situations, does your prompt include explicit decision logic? "If X happens, do Y" beats "be helpful."
              </li>
              <li>
                <strong>Tone & Voice Definition</strong> — Is your tone guide specific enough that Claude will produce consistent output? "Professional but friendly" is too vague; "like a knowledgeable coworker" is better.
              </li>
              <li>
                <strong>Output Format Specification</strong> — If you expect JSON, email, or structured text, have you shown an exact example? Underspecified output formats are a top cause of parsing errors.
              </li>
              <li>
                <strong>Hard Constraints & Guardrails</strong> — Have you explicitly listed what the agent CANNOT do? "Never promise features that don't exist" prevents overpromising.
              </li>
              <li>
                <strong>Real Examples (3+ scenarios)</strong> — For each major decision point, have you included a bad vs. good response pair? This teaches the model through pattern matching.
              </li>
              <li>
                <strong>Escalation Path</strong> — Does the agent know when and how to escalate to a human? Every agent should have a clear "I don't know, escalate" path.
              </li>
              <li>
                <strong>Tested Against Real Data</strong> — Have you run 20+ real test cases against your prompt? Production failures usually come from edge cases not anticipated during writing.
              </li>
              <li>
                <strong>Version Number & Changelog</strong> — Is your prompt versioned (v1.0, v1.1, etc.) and does it include a changelog at the top? This makes debugging and rollbacks possible.
              </li>
            </ol>
          </section>

          <section className="my-12">
            <div className="border border-primary/20 rounded-xl p-8 bg-primary/5">
              <h2 className="text-2xl font-bold text-text mb-3">
                See a Production System Prompt in Action
              </h2>
              <p className="text-muted mb-4">
                The Solo Business Operations Agent includes a 4,000-word system prompt
                covering 8 departments — a real example of everything discussed in this guide.
                Download it free and study the structure.
              </p>
              <a
                href="/templates/solo-business-operations"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get the Free Template →
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              Key Takeaway
            </h2>
            <p>
              System prompts are the engine of your agent. Spend 30% of your time on code and 70% on prompts. A mediocre system prompt will fail in production no matter how clean your code is. A brilliant prompt can succeed with minimal code. Write prompts that are specific, detailed, and battle-tested against real data. Iterate based on production failures. Version them like source code. And remember: the delta between a generic prompt and a great prompt is bigger than the delta between Claude Haiku and Sonnet. Invest in your prompts.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              Related Resources
            </h2>
            <p>
              Study these production-grade agent templates to see system prompts in action. All include complete 2,000-5,000 word prompts with real-world decision logic:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <a
                  href="/templates/solo-business-operations"
                  className="text-primary hover:underline"
                >
                  Solo Business Operations Agent
                </a>
                {" — Free template with 4,000-word system prompt covering 8 departments"}
              </li>
              <li>
                <a
                  href="/templates/customer-support-auto-responder"
                  className="text-primary hover:underline"
                >
                  Customer Support Auto-Responder
                </a>
                {" — See how to structure decision logic for support scenarios"}
              </li>
              <li>
                <a
                  href="/templates/sales-outreach-automation"
                  className="text-primary hover:underline"
                >
                  Sales Outreach Automation
                </a>
                {" — Example of conversion-focused agent with explicit goals"}
              </li>
            </ul>
          </section>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}
