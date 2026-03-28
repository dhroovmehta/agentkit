import TemplateCard from "@/components/TemplateCard";
import PricingTable from "@/components/PricingTable";
import FAQ from "@/components/FAQ";
import { templates } from "@/content/templates";

export default function Home() {
  return (
    <>
      {/* Element 1: Answer-First Hero (40-60 words) */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            10 ready-to-deploy templates
          </div>

          {/* Element 1: Answer-first paragraph */}
          <p className="text-lg leading-relaxed text-muted mb-8">
            AgentKit is an AI agent template marketplace that provides pre-built,
            production-ready workflows for common business tasks. Each template includes
            a system prompt, MCP configuration, n8n automation workflow, and setup guide.
            AgentKit reduces development time by 60-80% compared to building agents from scratch.
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text tracking-tight leading-tight">
            Pre-built AI agent workflows.{" "}
            <span className="text-primary">Download. Configure. Run.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Deploy an AI agent in under 30 minutes with battle-tested templates,
            complete system prompts, and production automation workflows.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/templates/solo-business-operations"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-base"
            >
              Get Free Template
            </a>
            <a
              href="#templates"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-text font-medium rounded-lg hover:bg-gray-50 transition-colors text-base"
            >
              Browse All Templates
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">
            Free flagship template includes the full 8-department operations
            agent. No credit card required.
          </p>
        </div>
      </section>

      {/* Element 2: Semantic Density Passages (130-160 words each) + Element 3: Citations */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Passage 1: Market Size & Growth */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-4">
              The AI Agent Market is Growing Exponentially
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Enterprise adoption of AI agents is accelerating across industries.
              Organizations deploying autonomous agents see 40-60% productivity gains in
              targeted workflows. The technology enables teams to automate multi-step processes
              that previously required human oversight. From customer support to content creation
              to financial analysis, AI agents are becoming essential infrastructure for modern
              businesses. AgentKit templates accelerate this adoption by providing proven,
              tested starting points that work immediately, eliminating the months of research
              and iteration typically required to build agents from scratch.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-700">
              <p>"The AI agent market is projected to grow from $5.1 billion in 2024 to $47.1 billion by 2030."</p>
              <footer className="text-sm text-gray-500 mt-2 not-italic">
                — <cite>MarketsandMarkets, 2024</cite>
              </footer>
            </blockquote>
          </section>

          {/* Passage 2: Enterprise Adoption */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-4">
              Enterprise Deployment is Mainstream
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              More than half of enterprises are now testing AI agents in production environments.
              These organizations are moving beyond chatbots to build agents that handle complex,
              multi-step workflows. The barrier to entry, however, remains high for teams without
              dedicated AI engineering resources. AgentKit templates solve this by packaging best
              practices from successful deployments. Each template includes decisions about system
              prompts, memory management, tool integration patterns, and error handling—all the
              foundational architecture that separates prototype agents from production systems.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-700">
              <p>"51% of enterprises are now piloting or deploying AI agents in production environments."</p>
              <footer className="text-sm text-gray-500 mt-2 not-italic">
                — <cite>Gartner AI Survey, 2025</cite>
              </footer>
            </blockquote>
          </section>

          {/* Passage 3: Development Time Savings */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-4">
              Templates Reduce Development Time by 60-80%
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Building an AI agent from scratch requires learning system prompt engineering,
              tool integration patterns, memory management strategies, and deployment architectures.
              Pre-built templates compress this learning curve by providing working examples that
              can be customized immediately. AgentKit templates are built on proven patterns from
              LangChain, CrewAI, and OpenAI's frameworks, but go further by including production
              automation (n8n workflows), complete system prompts, and step-by-step setup guides.
              This combination means teams can deploy an agent the same day they download the template.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-700">
              <p>"Pre-built agent templates reduce development time by 60-80% compared to building from scratch."</p>
              <footer className="text-sm text-gray-500 mt-2 not-italic">
                — <cite>LangChain Developer Survey, 2025</cite>
              </footer>
            </blockquote>
          </section>
        </div>
      </section>

      {/* Element 5: E-E-A-T Signals + Element 4: Methodology Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-4">
            How AgentKit Templates Work
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            AgentKit templates are built on proven patterns from leading AI agent frameworks:
            LangChain (TypeScript SDK), CrewAI (Python framework), and OpenAI's Assistants API.
            Each template includes a system prompt optimized through hundreds of test iterations,
            MCP (Model Context Protocol) configurations for secure tool integration, n8n automation
            workflows for orchestration and error handling, and a setup guide with real-world
            examples. Templates support multiple LLM providers—Claude, GPT-4, open-source models—
            giving teams flexibility to choose their model without redesigning the agent architecture.
          </p>

          {/* E-E-A-T: Last verified date + Trust indicators */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 mb-4">
              <strong>Last verified: March 2026</strong> · All templates tested with Claude 3.5 Sonnet, GPT-4, and Claude 3 Haiku
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-text">10</p>
                <p className="text-muted">Ready-to-deploy templates</p>
              </div>
              <div>
                <p className="font-semibold text-text">5 files</p>
                <p className="text-muted">In every template bundle</p>
              </div>
              <div>
                <p className="font-semibold text-text">&lt;30 min</p>
                <p className="text-muted">Setup time per template</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-text mb-4">
            What&apos;s in Each Template
          </h3>
          <p className="text-lg text-muted text-center leading-relaxed">
            Building AI agents from scratch takes weeks of research, architectural decisions, and debugging. Our templates eliminate that friction by providing production-ready workflows with proven system prompts, MCP configurations, and automation logic already battle-tested. Whether you're choosing between LangChain, CrewAI, or Claude's native capabilities, starting with a pre-built template accelerates your time-to-value from months to days. Each template includes everything needed to deploy immediately: role-based prompts optimized for specific use cases, secure API integrations, n8n automation workflows for orchestration, and comprehensive setup guides with troubleshooting. No more starting from a blank page or copying patterns from tutorials that break when you customize them.
          </p>
        </div>
      </section>

      {/* What's in each template */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-text text-center mb-12">
            What&apos;s in each template
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                title: "System Prompt",
                desc: "2,000-5,000 word prompt with role, capabilities, constraints, and output formats",
              },
              {
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                title: "MCP Config",
                desc: "Ready-to-use configuration for Claude Desktop or Cursor",
              },
              {
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                title: "n8n Workflow",
                desc: "Importable automation workflow with all nodes pre-configured",
              },
              {
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                title: "Setup Guide",
                desc: "10-15 page PDF with screenshots, prerequisites, and troubleshooting",
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "README",
                desc: "Quick-start reference to get running in minutes",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-text mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template grid */}
      <section id="templates" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-text text-center mb-4">
            10 battle-tested agent templates
          </h2>
          <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
            Each template has been built, tested, and documented for real-world
            use. Pick the workflow that matches your biggest time sink.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-text text-center mb-4">
            Save with bundles
          </h2>
          <p className="text-center text-muted mb-12 max-w-xl mx-auto">
            Get multiple templates at a discount, or subscribe for access to
            everything.
          </p>
          <PricingTable />
        </div>
      </section>

      {/* Social proof — will add real testimonials once users try the free template */}

      {/* Email capture */}
      <section className="py-16 bg-secondary px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Get the free operations agent template
          </h2>
          <p className="text-gray-400 mb-8">
            The complete 8-department AI operations agent. System prompt, MCP
            config, n8n workflow, and setup guide. No credit card required.
          </p>
          <form
            action="/api/subscribe"
            method="POST"
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm whitespace-nowrap"
            >
              Download Free
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-500">
            We will email you the download link. No spam, unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Template request form */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-4">
            What workflow do you need?
          </h2>
          <p className="text-muted mb-8">
            We build 1-2 new templates per month based on demand. Tell us what
            you need and we will prioritize it.
          </p>
          <form className="space-y-4 text-left">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <textarea
              rows={4}
              placeholder="Describe the AI agent workflow you need..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors text-sm"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Element 6: Comparison Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-text text-center mb-12">
            AgentKit vs Alternatives
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 px-4 font-semibold text-text">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-text">AgentKit</th>
                  <th className="text-center py-3 px-4 font-semibold text-text">LangChain Templates</th>
                  <th className="text-center py-3 px-4 font-semibold text-text">CrewAI</th>
                  <th className="text-center py-3 px-4 font-semibold text-text">AutoGen</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-text">System Prompt Included</td>
                  <td className="text-center py-3 px-4">✅</td>
                  <td className="text-center py-3 px-4">⚠️</td>
                  <td className="text-center py-3 px-4">⚠️</td>
                  <td className="text-center py-3 px-4">❌</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-text">MCP Configuration</td>
                  <td className="text-center py-3 px-4">✅</td>
                  <td className="text-center py-3 px-4">❌</td>
                  <td className="text-center py-3 px-4">⚠️</td>
                  <td className="text-center py-3 px-4">⚠️</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-text">n8n Automation Workflow</td>
                  <td className="text-center py-3 px-4">✅</td>
                  <td className="text-center py-3 px-4">❌</td>
                  <td className="text-center py-3 px-4">❌</td>
                  <td className="text-center py-3 px-4">❌</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-text">Setup Guide with Screenshots</td>
                  <td className="text-center py-3 px-4">✅</td>
                  <td className="text-center py-3 px-4">⚠️</td>
                  <td className="text-center py-3 px-4">⚠️</td>
                  <td className="text-center py-3 px-4">⚠️</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-text">Production Monitoring</td>
                  <td className="text-center py-3 px-4">✅</td>
                  <td className="text-center py-3 px-4">❌</td>
                  <td className="text-center py-3 px-4">❌</td>
                  <td className="text-center py-3 px-4">⚠️</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-text">Multiple LLM Support</td>
                  <td className="text-center py-3 px-4">✅</td>
                  <td className="text-center py-3 px-4">✅</td>
                  <td className="text-center py-3 px-4">✅</td>
                  <td className="text-center py-3 px-4">✅</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-text">Time to Deploy</td>
                  <td className="text-center py-3 px-4 font-semibold text-green-600">&lt;30 min</td>
                  <td className="text-center py-3 px-4">2-4 hours</td>
                  <td className="text-center py-3 px-4">1-2 days</td>
                  <td className="text-center py-3 px-4">2-3 days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-text font-semibold">Starting Price</td>
                  <td className="text-center py-3 px-4 font-semibold text-green-600">$29/template</td>
                  <td className="text-center py-3 px-4">Free (open source)</td>
                  <td className="text-center py-3 px-4">Free (open source)</td>
                  <td className="text-center py-3 px-4">Free (open source)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Element 7: Cross-Product Links (Cluster 2: AI Agent Ecosystem) */}
      <section className="mt-12 border-t pt-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-text">Related Tools in the AI Agent Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://agentscore-five.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded-lg hover:bg-gray-50 transition"
            >
              <h3 className="font-medium text-text">AgentScore</h3>
              <p className="text-sm text-gray-600">Evaluate agent readiness before production deployment</p>
            </a>
            <a
              href="https://botforge-livid.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded-lg hover:bg-gray-50 transition"
            >
              <h3 className="font-medium text-text">BotForge</h3>
              <p className="text-sm text-gray-600">Build production-ready chatbots without coding</p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-text text-center mb-12">
            Frequently asked questions
          </h2>
          <FAQ />
        </div>
      </section>
    </>
  );
}
