import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AgentKit — Pre-built AI Agent Workflows. Download. Configure. Run.",
  description:
    "10 battle-tested AI agent templates with system prompts, MCP configurations, n8n workflows, and step-by-step setup guides. Deploy an AI agent in under 30 minutes.",
  openGraph: {
    title: "AgentKit — Pre-built AI Agent Workflows",
    description:
      "10 battle-tested AI agent templates. System prompts, MCP configs, n8n workflows, and setup guides included.",
    url: "https://agentkit-ai.vercel.app",
    siteName: "AgentKit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentKit — Pre-built AI Agent Workflows",
    description:
      "10 battle-tested AI agent templates. Download. Configure. Run.",
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
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
