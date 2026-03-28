import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    siteName: "AgentKit",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb navigation */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-3xl mx-auto px-4 pt-8 pb-0"
      >
        <ol className="flex items-center gap-2 text-sm text-muted">
          <li>
            <a href="/" className="hover:text-text transition-colors">
              Home
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-text font-medium">Blog</span>
          </li>
        </ol>
      </nav>

      {children}

      {/* Shared blog footer CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="border border-primary/20 rounded-xl p-8 bg-primary/5 text-center">
          <h3 className="text-2xl font-bold text-text mb-3">
            Try Your First AI Agent — Free
          </h3>
          <p className="text-muted mb-6 max-w-lg mx-auto">
            The Solo Business Operations Agent runs 8 departments of your
            business with one AI agent. System prompt, MCP config, n8n workflow,
            and setup guide included. No credit card required.
          </p>
          <a
            href="/templates/solo-business-operations"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get the Free Template
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
