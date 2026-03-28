import { notFound } from "next/navigation";
import Link from "next/link";
import { templates, getTemplateBySlug } from "@/content/templates";
import TemplatePreview from "@/components/TemplatePreview";

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) return {};
  const ogImageUrl = `https://agentkit-sandy.vercel.app/og/${template.slug}.png`;
  return {
    title: `${template.name} — AgentKit`,
    description: template.description,
    openGraph: {
      title: `${template.name} — AgentKit`,
      description: template.tagline,
      url: `https://agentkit-sandy.vercel.app/templates/${template.slug}`,
      siteName: "AgentKit",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${template.name} — ${template.tagline}`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${template.name} — AgentKit`,
      description: template.tagline,
      images: [ogImageUrl],
    },
  };
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) notFound();

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-text transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/#templates"
            className="hover:text-text transition-colors"
          >
            Templates
          </Link>
          <span>/</span>
          <span className="text-text">{template.name}</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3">
              {template.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-text">
              {template.name}
            </h1>
            <p className="mt-2 text-lg text-muted">{template.tagline}</p>
          </div>
          <div className="flex-shrink-0 text-right">
            {template.isFree ? (
              <div>
                <span className="text-3xl font-bold text-accent">FREE</span>
                <p className="text-xs text-muted mt-1">
                  Requires email signup
                </p>
              </div>
            ) : (
              <span className="text-3xl font-bold text-text">
                ${template.price}
              </span>
            )}
          </div>
        </div>

        {/* CTA */}
        <a
          href={template.checkoutUrl}
          className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors mb-12"
        >
          {template.isFree ? "Download Free" : `Buy Now — $${template.price}`}
        </a>

        {/* Description */}
        <div className="prose prose-gray max-w-none mb-12">
          <p className="text-text leading-relaxed">{template.description}</p>
        </div>

        {/* What's included */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-text mb-4">
            What&apos;s included
          </h2>
          <ul className="space-y-3">
            {template.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-text mb-4">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {template.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-gray-50 rounded-lg p-3"
              >
                <span className="text-primary font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-text">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Use cases */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-text mb-4">
            Who this is for
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {template.useCases.map((useCase, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                <span className="text-sm text-muted">{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System prompt preview */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-text mb-4">
            System prompt preview
          </h2>
          <TemplatePreview template={template} />
        </div>

        {/* Setup time */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-12">
          <div className="flex items-center gap-3">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <p className="text-sm font-semibold text-text">
                Setup time: {template.setupTime}
              </p>
              <p className="text-xs text-muted">
                Follow the step-by-step setup guide. No coding required.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a
            href={template.checkoutUrl}
            className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-lg"
          >
            {template.isFree
              ? "Download Free Template"
              : `Buy Now — $${template.price}`}
          </a>
          <p className="mt-3 text-sm text-muted">
            30-day money-back guarantee. Instant delivery via email.
          </p>
        </div>
      </div>
    </div>
  );
}
