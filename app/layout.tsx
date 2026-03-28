import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "AgentKit — Pre-built AI Agent Workflows. Download. Configure. Run.",
  description:
    "10 battle-tested AI agent templates with system prompts, MCP configurations, n8n workflows, and step-by-step setup guides. Deploy an AI agent in under 30 minutes.",
  openGraph: {
    title: "AgentKit — Pre-built AI Agent Workflows",
    description:
      "10 battle-tested AI agent templates. System prompts, MCP configs, n8n workflows, and setup guides included.",
    url: "https://agentkit-sandy.vercel.app",
    siteName: "AgentKit",
    type: "website",
    images: [
      {
        url: "https://agentkit-sandy.vercel.app/og/homepage.png",
        width: 1200,
        height: 630,
        alt: "AgentKit — Pre-built AI Agent Workflows. Download. Configure. Run.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentKit — Pre-built AI Agent Workflows",
    description:
      "10 battle-tested AI agent templates. Download. Configure. Run.",
    images: ["https://agentkit-sandy.vercel.app/og/homepage.png"],
  },
  verification: {
    google: "wLbd6xY9C9Au3kOPz2sR6J_dDdh5E4dvUDesuqo9lIA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AgentKit",
              "description": "Pre-built AI agent workflow templates. Download. Configure. Run.",
              "url": "https://agentkit-sandy.vercel.app",
              "applicationCategory": "DeveloperApplication",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "USD",
                "lowPrice": "0",
                "highPrice": "199",
                "offerCount": "13",
                "offers": [
                  { "@type": "Offer", "name": "Solo Business Operations Agent", "price": "0", "priceCurrency": "USD" },
                  { "@type": "Offer", "name": "Content Repurposing Pipeline", "price": "49", "priceCurrency": "USD" },
                  { "@type": "Offer", "name": "Customer Support Auto-Responder", "price": "49", "priceCurrency": "USD" },
                  { "@type": "Offer", "name": "Sales Outreach Automation", "price": "79", "priceCurrency": "USD" },
                  { "@type": "Offer", "name": "Weekly Business Intelligence Report", "price": "49", "priceCurrency": "USD" },
                  { "@type": "Offer", "name": "Social Media Manager Agent", "price": "49", "priceCurrency": "USD" },
                  { "@type": "Offer", "name": "Invoice & Expense Tracker Agent", "price": "29", "priceCurrency": "USD" },
                  { "@type": "Offer", "name": "Hiring Pipeline Agent", "price": "59", "priceCurrency": "USD" },
                  { "@type": "Offer", "name": "SEO Content Factory", "price": "79", "priceCurrency": "USD" },
                  { "@type": "Offer", "name": "Competitive Intelligence Monitor", "price": "49", "priceCurrency": "USD" },
                  { "@type": "Offer", "name": "Solo Founder Bundle", "price": "149", "priceCurrency": "USD" },
                  { "@type": "Offer", "name": "Agency Bundle", "price": "199", "priceCurrency": "USD" },
                  { "@type": "Offer", "name": "All-Access Pass", "price": "29", "priceCurrency": "USD" }
                ]
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What exactly do I get when I buy a template?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Each template is a ZIP file containing 5 files: a complete system prompt (2,000-5,000 words), an MCP server configuration file for Claude Desktop or Cursor, an n8n importable workflow JSON, a 10-15 page setup guide with screenshots, and a quick-start README. Everything you need to get an AI agent running in under 30 minutes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to know how to code?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. The setup guides are written for non-technical users with step-by-step instructions and screenshots. You will need to install a few free tools (Claude Desktop, n8n) but we walk you through every step."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is MCP?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MCP (Model Context Protocol) is how AI models like Claude connect to external tools — your file system, email, calendar, web search, etc. Our MCP config files tell Claude which tools to use and how to connect them. You just drop the config file in and it works."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is n8n?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "n8n is a free, open-source workflow automation tool (like Zapier, but free and more powerful). Our workflow files are ready to import into n8n — they handle the automated parts like scheduled reports, email sends, and data processing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I customize the templates?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Every file is fully editable. The system prompts are plain text, the MCP configs are JSON, and the n8n workflows can be modified in the visual editor. We encourage customization — the templates are a starting point, not a straitjacket."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the All-Access Pass?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For $29/month, you get every template in the catalog — all 10 current templates plus every new template we add (we release 1-2 new templates per month). You also get priority email support. Cancel anytime."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer refunds?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. 30-day money-back guarantee on all purchases, no questions asked. If a template does not work for you, reach out through our Lemon Squeezy store page and we will process your refund immediately."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which AI model do the templates work with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The system prompts and MCP configs are designed for Claude (Anthropic) but can be adapted for other models. The n8n workflows are model-agnostic — they handle automation, not AI inference. The setup guides include notes on adapting for other providers."
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
