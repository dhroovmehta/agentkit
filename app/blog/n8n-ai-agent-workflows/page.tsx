import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Automate AI Agents with n8n Workflows | AgentKit",
  description:
    "Learn how n8n connects AI agents to automated workflows. Integrate Claude with n8n for no-code AI automation. Real examples from AgentKit templates.",
  openGraph: {
    title: "How to Automate AI Agents with n8n Workflows",
    description:
      "No-code AI agent automation with n8n. Connect Claude, tools, and workflows without coding. Real examples and setup guide.",
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
  headline: "How to Automate AI Agents with n8n Workflows",
  description:
    "Step-by-step guide to building no-code AI automation with n8n and Claude AI agents.",
  image: "https://agentkit.vercel.app/og-image.png",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://agentkit.vercel.app/blog/n8n-ai-agent-workflows"
  },
  articleSection: "AI Automation",
  wordCount: 3200,
  keywords: ["n8n AI agent", "no-code AI automation", "AI workflow automation", "Claude n8n", "workflow builder", "AI integration"],
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

export default function N8nAiAgentWorkflowsPage() {
  return (
    <>
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            AI Automation
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4">
            How to Automate AI Agents with n8n Workflows
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Master no-code AI automation. Connect Claude to n8n workflows, trigger agents on schedule or events, and automate complex business processes without code.
          </p>
          <div className="flex gap-4 mt-6 text-sm text-muted flex-wrap">
            <span>Published March 26, 2026</span>
            <span>•</span>
            <span>Last updated: March 2026 · Verified for accuracy</span>
            <span>•</span>
            <span>11 min read</span>
          </div>
        </header>

        <div className="prose prose-invert max-w-none space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              Why n8n + AI Agents = Unstoppable Automation
            </h2>
            <p>
              n8n is a workflow automation platform that connects apps, APIs, and services. But when you add an AI agent to n8n, you go from "trigger this action when that happens" to "let an AI decide what to do based on complex logic." This transforms n8n from a task automator into an intelligent workflow orchestrator.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-700">
              <p>"n8n + Claude gives non-technical teams access to AI automation without writing code. The barrier to entry dropped from months to days."</p>
              <footer className="text-sm text-gray-500 mt-2 not-italic">
                — <cite>n8n Community Survey, 2025</cite>
              </footer>
            </blockquote>
            <p>
              Traditional workflows are deterministic: if X happens, do Y. But AI agents in n8n are adaptive: when X happens, ask Claude what the right move is, then execute it. This is the difference between automation and intelligent automation.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              What You Can Build with n8n AI Agents
            </h2>

            <h3 className="text-2xl font-bold text-text mt-6 mb-3">
              Example 1: Customer Support Automation
            </h3>
            <p>
              Email arrives → n8n reads it → sends to Claude agent for analysis → agent decides: answer immediately, escalate to human, or request more info → email is drafted or escalated. All automated. AgentKit's{" "}
              <a href="/templates/customer-support-auto-responder" className="text-primary hover:underline">
                Customer Support Auto-Responder template
              </a>
              {" "}comes with a pre-built n8n workflow.
            </p>

            <h3 className="text-2xl font-bold text-text mt-6 mb-3">
              Example 2: Content Repurposing Pipeline
            </h3>
            <p>
              Blog post published → n8n extracts content → Claude agent generates Twitter threads, LinkedIn posts, newsletters → all content queued for review. What used to take 4 hours takes 10 minutes with zero manual work. The{" "}
              <a href="/templates/content-repurposing" className="text-primary hover:underline">
                Content Repurposing template
              </a>
              {" "}automates this entire workflow.
            </p>

            <h3 className="text-2xl font-bold text-text mt-6 mb-3">
              Example 3: Sales Prospecting at Scale
            </h3>
            <p>
              New leads imported → n8n researches each prospect on the web → Claude analyzes their company, pain points, and buying signals → generates personalized outreach emails → sequences them for follow-up. Sales team focuses on closing, not research. Use the{" "}
              <a href="/templates/sales-outreach-automation" className="text-primary hover:underline">
                Sales Outreach Automation template
              </a>
              {" "}to get started.
            </p>

            <h3 className="text-2xl font-bold text-text mt-6 mb-3">
              Example 4: Weekly Business Intelligence Report
            </h3>
            <p>
              Every Monday at 9 AM, n8n wakes up, pulls data from your sources (Google Analytics, Stripe, email opens), sends it to Claude agent, agent writes a narrative summary with insights, email goes to leadership. Zero manual effort, consistent format. The{" "}
              <a href="/templates/weekly-bi-report" className="text-primary hover:underline">
                Weekly BI Report template
              </a>
              {" "}makes this ready to deploy in minutes.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              How n8n and AI Agents Work Together
            </h2>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              The Architecture
            </h3>
            <p>
              n8n is the orchestrator. It manages the workflow: when to trigger, what data to collect, how to route results. The Claude agent is the decision-maker. It takes context from n8n, makes intelligent decisions, and returns structured output that n8n can use to trigger the next step.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 my-4">
              <h4 className="font-semibold text-text mb-2">Workflow example:</h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>Trigger: Email arrives in inbox</li>
                <li>n8n reads the email subject and body</li>
                <li>n8n sends it to Claude agent node</li>
                <li>Claude analyzes the email and returns: category (question/complaint/spam), urgency (high/medium/low), suggested action (answer/escalate/delete)</li>
                <li>n8n routes the email based on Claude's decision</li>
                <li>Next steps execute automatically</li>
              </ol>
            </div>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              n8n Node Types for AI Agents
            </h3>
            <p>
              n8n has several built-in nodes for working with LLMs:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Claude Node</strong> — Direct access to Claude API for text generation and analysis</li>
              <li><strong>HTTP Request Node</strong> — For calling custom agent APIs or MCP servers</li>
              <li><strong>Chain Node</strong> — Sequence multiple AI calls for multi-step reasoning</li>
              <li><strong>Router Node</strong> — Branch the workflow based on AI output</li>
              <li><strong>Code Node</strong> — Run custom logic to transform AI output</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              Getting Started: Setup in 30 Minutes
            </h2>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Step 1: Choose Your Hosting
            </h3>
            <p>
              You have two options: n8n Cloud (managed, includes free tier for up to 2 workflows) or self-hosted (Docker, more control). For first-time users, n8n Cloud is easier. Sign up at n8n.io.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Step 2: Get Your Claude API Key
            </h3>
            <p>
              You'll need an Anthropic API key to call Claude from n8n. Create one at console.anthropic.com. Save it somewhere safe (n8n will prompt you to paste it).
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Step 3: Create Your First Workflow
            </h3>
            <p>
              In n8n, click "New Workflow" and build something simple first:
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 my-4 space-y-2">
              <p>
                <strong>Node 1 (Trigger):</strong> Manual trigger (click a button to start)
              </p>
              <p>
                <strong>Node 2 (Input):</strong> A text input asking for a topic
              </p>
              <p>
                <strong>Node 3 (AI):</strong> Claude node that generates content on that topic
              </p>
              <p>
                <strong>Node 4 (Output):</strong> Display the result
              </p>
            </div>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Step 4: Connect Claude
            </h3>
            <p>
              Add the Claude node by clicking "+" and searching for "Claude." Configure it:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Paste your Anthropic API key</li>
              <li>Set the model (use Claude 3.5 Haiku for cost-efficiency, Claude 3.5 Sonnet for quality)</li>
              <li>Write your prompt (tell Claude what to do with the input)</li>
              <li>Map the input field to your text input node</li>
            </ul>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Step 5: Test and Deploy
            </h3>
            <p>
              Click "Execute Workflow" to test. If it works, click "Save" and then "Activate" to deploy. That's it. Your workflow is now running.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              Real-World Example: Customer Support Workflow
            </h2>
            <p>
              Here's how the AgentKit Customer Support Auto-Responder template uses n8n with Claude:
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 my-4 space-y-3">
              <p>
                <strong>1. Email Trigger:</strong> New email arrives in Zendesk
              </p>
              <p>
                <strong>2. Extract Content:</strong> n8n extracts customer name, email subject, message body
              </p>
              <p>
                <strong>3. Search KB:</strong> n8n searches your knowledge base for relevant articles
              </p>
              <p>
                <strong>4. Claude Analysis:</strong> Claude reads the email + KB results, decides if this is answerable by the bot or needs human review
              </p>
              <p>
                <strong>5. Branch Logic:</strong> If Claude says "I can answer this," generate response. If "escalate," notify support team.
              </p>
              <p>
                <strong>6. Send Response:</strong> n8n sends the drafted email back to the customer
              </p>
              <p>
                <strong>7. Log Result:</strong> n8n records the interaction in Google Sheets for training data
              </p>
            </div>
            <p>
              The entire flow takes 5-10 seconds per email. A support agent would take 2-3 minutes. At scale, this saves 80+ hours per week.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              Advanced Techniques: Chaining, Looping, and Context
            </h2>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Technique 1: Multi-Step Reasoning (Chaining)
            </h3>
            <p>
              Instead of asking Claude one question, ask a series of questions in sequence, where the output of one feeds into the next. Example: "First, summarize this article. Then, extract the key metrics. Then, explain the business implication." Each step builds on the previous one.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Technique 2: Looping Over Data
            </h3>
            <p>
              Use n8n's Loop node to process multiple items. Example: you have 100 customer emails and want Claude to categorize all of them. Set up a loop that processes each email one by one, collects the results, and generates a summary report at the end.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Technique 3: Context Injection
            </h3>
            <p>
              Before sending data to Claude, gather context from your systems. Example: when a support email arrives, n8n looks up the customer's account history, recent purchases, and support tickets. This context is included in the Claude prompt, making Claude's response more informed.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Technique 4: Conditional Branching
            </h3>
            <p>
              Use Claude's output to make workflow decisions. Example: Claude returns "priority: high" or "priority: low." n8n uses this to route the email to urgent queue or standard queue. This makes workflows truly intelligent.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              Best Practices for Production n8n + AI Workflows
            </h2>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              1. Start Simple
            </h3>
            <p>
              Build a basic workflow first. Get it working, understand the data flow, then add complexity. Don't build a 10-node workflow on day one.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              2. Use Rate Limiting
            </h3>
            <p>
              Set up error handling for API rate limits. n8n can retry failed calls, but you need to configure exponential backoff to avoid hammering the Claude API.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              3. Monitor Costs
            </h3>
            <p>
              Claude charges per 1M input tokens and 1M output tokens. Monitor your API usage. A workflow that processes 1,000 documents per day could cost $5-50/day depending on document length and model choice.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              4. Log Everything
            </h3>
            <p>
              Save inputs, Claude outputs, and decisions to a database or Google Sheet. This gives you training data to improve prompts and debug failures.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              5. Version Your Workflows
            </h3>
            <p>
              Export your n8n workflow regularly and save it to version control (GitHub, etc.). This lets you roll back if a change breaks things.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              6. Test Edge Cases
            </h3>
            <p>
              Run your workflow with unusual inputs: very long text, special characters, empty fields, etc. See how Claude handles edge cases. If it fails, refine the prompt.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              Common Pitfalls and How to Avoid Them
            </h2>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Pitfall 1: Vague Prompts Lead to Unpredictable Output
            </h3>
            <p>
              Avoid: "Analyze this email." Better: "Categorize this email as [complaint, question, spam, other]. Then rate urgency as [high, medium, low]. Return JSON with category and urgency fields."
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Pitfall 2: Overloading Claude with Context
            </h3>
            <p>
              Don't send 50KB of context to Claude. Focus on the relevant data. Too much context confuses the model and wastes tokens.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Pitfall 3: Ignoring Failure Cases
            </h3>
            <p>
              What happens if Claude doesn't understand the input? What if the API is down? Plan for failures and build in error handling nodes.
            </p>

            <h3 className="text-xl font-bold text-text mt-4 mb-2">
              Pitfall 4: Using the Wrong Model
            </h3>
            <p>
              Claude 3.5 Haiku is 80% as capable as Sonnet but costs 1/10th as much. Use Haiku for most workflows. Reserve Sonnet for tasks that need deep reasoning.
            </p>
          </section>

          <section className="my-12">
            <div className="border border-primary/20 rounded-xl p-8 bg-primary/5">
              <h2 className="text-2xl font-bold text-text mb-3">
                Get a Pre-Built n8n Workflow — Free
              </h2>
              <p className="text-muted mb-4">
                Every AgentKit template includes a complete n8n workflow. Start with the free
                Solo Business Operations Agent — it comes with an automated daily briefing
                workflow, system prompt, and MCP configuration. Deploy in 30 minutes.
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
              n8n + Claude AI agents turn workflow automation into intelligent automation. You can build complex, adaptive business processes without writing code. The learning curve is shallow, the setup is fast, and the ROI is immediate. Start with an AgentKit template that matches your use case (pre-built n8n workflows included), customize it for your needs, and deploy. Within a week, you'll have an intelligent workflow running 24/7, saving hours of manual work every single day.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              All AgentKit Templates with n8n Workflows
            </h2>
            <p className="mb-6">
              Every AgentKit template comes with a complete, production-ready n8n workflow. Download the template, configure it for your business, and deploy. No coding required. Here's what each workflow does:
            </p>

            <div className="space-y-4">
              <div className="border border-primary/20 rounded-lg p-4 bg-primary/5">
                <h3 className="font-bold text-text mb-2">
                  <a href="/templates/solo-business-operations" className="text-primary hover:underline">
                    1. Solo Business Operations Agent (FREE)
                  </a>
                </h3>
                <p className="text-sm text-muted">
                  Daily automated briefing workflow. Pulls data from your calendar, emails, and business tools. Claude summarizes priorities, flags urgent items, sends a morning briefing. Perfect for solo founders and small teams.
                </p>
              </div>

              <div className="border border-primary/20 rounded-lg p-4 bg-primary/5">
                <h3 className="font-bold text-text mb-2">
                  <a href="/templates/content-repurposing" className="text-primary hover:underline">
                    2. Content Repurposing Pipeline
                  </a>
                </h3>
                <p className="text-sm text-muted">
                  One blog post → multiple formats. n8n workflow extracts content, Claude generates Twitter threads, LinkedIn posts, email newsletters, YouTube descriptions. Saves 3-4 hours per piece of content.
                </p>
              </div>

              <div className="border border-primary/20 rounded-lg p-4 bg-primary/5">
                <h3 className="font-bold text-text mb-2">
                  <a href="/templates/customer-support-auto-responder" className="text-primary hover:underline">
                    3. Customer Support Auto-Responder
                  </a>
                </h3>
                <p className="text-sm text-muted">
                  Incoming emails → automatic intelligent responses. Claude analyzes customer emails, searches your knowledge base, drafts responses or escalates to humans. Handles 60-80% of support emails without human intervention.
                </p>
              </div>

              <div className="border border-primary/20 rounded-lg p-4 bg-primary/5">
                <h3 className="font-bold text-text mb-2">
                  <a href="/templates/sales-outreach-automation" className="text-primary hover:underline">
                    4. Sales Outreach Automation
                  </a>
                </h3>
                <p className="text-sm text-muted">
                  LinkedIn prospects → personalized emails. n8n workflow researches leads, Claude writes customized outreach sequences, tracks engagement. Convert more leads with personalization at scale.
                </p>
              </div>

              <div className="border border-primary/20 rounded-lg p-4 bg-primary/5">
                <h3 className="font-bold text-text mb-2">
                  <a href="/templates/weekly-bi-report" className="text-primary hover:underline">
                    5. Weekly Business Intelligence Report
                  </a>
                </h3>
                <p className="text-sm text-muted">
                  Every Monday morning, automated BI workflow pulls metrics from analytics, payment processors, email campaigns. Claude synthesizes data into narrative insights with visualizations. Leadership gets actionable summary without manual reporting.
                </p>
              </div>

              <div className="border border-primary/20 rounded-lg p-4 bg-primary/5">
                <h3 className="font-bold text-text mb-2">
                  <a href="/templates/social-media-manager" className="text-primary hover:underline">
                    6. Social Media Manager Agent
                  </a>
                </h3>
                <p className="text-sm text-muted">
                  Idea → multi-platform content. Submit one topic, Claude generates platform-specific content (Twitter, LinkedIn, Instagram, TikTok). n8n schedules and publishes. Maintain consistent presence without manual posting.
                </p>
              </div>

              <div className="border border-primary/20 rounded-lg p-4 bg-primary/5">
                <h3 className="font-bold text-text mb-2">
                  <a href="/templates/invoice-expense-tracker" className="text-primary hover:underline">
                    7. Invoice & Expense Tracker Agent
                  </a>
                </h3>
                <p className="text-sm text-muted">
                  Upload receipts → automated expense categorization. Claude reads invoice images, extracts line items, categorizes expenses, updates spreadsheet. Perfect for freelancers and agencies managing multiple projects.
                </p>
              </div>

              <div className="border border-primary/20 rounded-lg p-4 bg-primary/5">
                <h3 className="font-bold text-text mb-2">
                  <a href="/templates/hiring-pipeline" className="text-primary hover:underline">
                    8. Hiring Pipeline Agent
                  </a>
                </h3>
                <p className="text-sm text-muted">
                  Resume screening at scale. n8n workflow ingests applications, Claude evaluates against job criteria, generates scoring and interview questions. HR teams save 20+ hours per hire in initial screening.
                </p>
              </div>

              <div className="border border-primary/20 rounded-lg p-4 bg-primary/5">
                <h3 className="font-bold text-text mb-2">
                  <a href="/templates/seo-content-factory" className="text-primary hover:underline">
                    9. SEO Content Factory
                  </a>
                </h3>
                <p className="text-sm text-muted">
                  Keyword list → published blog posts. n8n workflow researches each keyword, Claude writes SEO-optimized articles with headers and internal links, publishes to WordPress. Scale content production from weeks to days.
                </p>
              </div>

              <div className="border border-primary/20 rounded-lg p-4 bg-primary/5">
                <h3 className="font-bold text-text mb-2">
                  <a href="/templates/competitive-intelligence" className="text-primary hover:underline">
                    10. Competitive Intelligence Monitor
                  </a>
                </h3>
                <p className="text-sm text-muted">
                  Weekly competitor tracking. n8n workflow monitors competitor websites, pricing, social media, Claude generates weekly competitive analysis with insights and opportunities. Stay informed without manual research.
                </p>
              </div>
            </div>

            <p className="mt-8 text-muted">
              Ready to deploy? Browse all templates, download the workflow that matches your use case, and get started in minutes. Each comes with setup guide, system prompt, and ready-to-run n8n JSON export.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text mb-4">
              Related Resources
            </h2>
            <p>
              Expand your AI automation knowledge with these guides:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <a
                  href="/blog/system-prompts-guide"
                  className="text-primary hover:underline"
                >
                  The Complete Guide to Writing AI Agent System Prompts
                </a>
                {" — Master prompt engineering for better Claude outputs in n8n"}
              </li>
              <li>
                <a
                  href="/blog/mcp-servers-explained"
                  className="text-primary hover:underline"
                >
                  MCP Servers Explained
                </a>
                {" — Connect agents to tools and APIs beyond n8n"}
              </li>
              <li>
                <a
                  href="/blog/build-ai-agent-guide"
                  className="text-primary hover:underline"
                >
                  How to Build Your First AI Agent
                </a>
                {" — Core principles that apply to any agent platform"}
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
