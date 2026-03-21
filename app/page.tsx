import TemplateCard from "@/components/TemplateCard";
import PricingTable from "@/components/PricingTable";
import FAQ from "@/components/FAQ";
import TestimonialCard from "@/components/TestimonialCard";
import { templates } from "@/content/templates";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            10 ready-to-deploy templates
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text tracking-tight leading-tight">
            Pre-built AI agent workflows.{" "}
            <span className="text-primary">Download. Configure. Run.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Each template includes a complete system prompt, MCP server
            configuration, n8n automation workflow, and a step-by-step setup
            guide. Deploy an AI agent in under 30 minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
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

      {/* Why AI Agent Templates Matter */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-text text-center mb-6">
            Why pre-built AI agent templates win
          </h2>
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

      {/* Testimonials placeholder */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-text text-center mb-12">
            What people are saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="I set up the Solo Business Operations agent in about 25 minutes. It now sends me a daily briefing that replaced 3 separate tools I was paying for."
              author="Alex M."
              role="Solo SaaS Founder"
            />
            <TestimonialCard
              quote="The content repurposing pipeline saved my team 8 hours per week. We publish one blog post and it automatically generates all our social content."
              author="Sarah K."
              role="Agency Owner"
            />
            <TestimonialCard
              quote="The setup guides are incredibly thorough. I am not technical at all and I had the sales outreach agent running before lunch."
              author="James R."
              role="Freelance Consultant"
            />
          </div>
        </div>
      </section>

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
