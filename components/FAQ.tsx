"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What exactly do I get when I buy a template?",
    a: "Each template is a ZIP file containing 5 files: a complete system prompt (2,000-5,000 words), an MCP server configuration file for Claude Desktop or Cursor, an n8n importable workflow JSON, a 10-15 page setup guide with screenshots, and a quick-start README. Everything you need to get an AI agent running in under 30 minutes.",
  },
  {
    q: "Do I need to know how to code?",
    a: "No. The setup guides are written for non-technical users with step-by-step instructions and screenshots. You will need to install a few free tools (Claude Desktop, n8n) but we walk you through every step.",
  },
  {
    q: "What is MCP?",
    a: "MCP (Model Context Protocol) is how AI models like Claude connect to external tools — your file system, email, calendar, web search, etc. Our MCP config files tell Claude which tools to use and how to connect them. You just drop the config file in and it works.",
  },
  {
    q: "What is n8n?",
    a: "n8n is a free, open-source workflow automation tool (like Zapier, but free and more powerful). Our workflow files are ready to import into n8n — they handle the automated parts like scheduled reports, email sends, and data processing.",
  },
  {
    q: "Can I customize the templates?",
    a: "Absolutely. Every file is fully editable. The system prompts are plain text, the MCP configs are JSON, and the n8n workflows can be modified in the visual editor. We encourage customization — the templates are a starting point, not a straitjacket.",
  },
  {
    q: "What is the All-Access Pass?",
    a: "For $29/month, you get every template in the catalog — all 10 current templates plus every new template we add (we release 1-2 new templates per month). You also get priority email support. Cancel anytime.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. 30-day money-back guarantee on all purchases, no questions asked. If a template does not work for you, email hello@agentkit.ai and we will process your refund immediately.",
  },
  {
    q: "Which AI model do the templates work with?",
    a: "The system prompts and MCP configs are designed for Claude (Anthropic) but can be adapted for other models. The n8n workflows are model-agnostic — they handle automation, not AI inference. The setup guides include notes on adapting for other providers.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-gray-200">
      {faqs.map((faq, i) => (
        <div key={i} className="py-4">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex items-center justify-between w-full text-left"
          >
            <span className="text-base font-medium text-text pr-4">
              {faq.q}
            </span>
            <svg
              className={`w-5 h-5 text-muted flex-shrink-0 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === i && (
            <p className="mt-3 text-sm text-muted leading-relaxed">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
