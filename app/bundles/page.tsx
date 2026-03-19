import { bundles, allAccessPlan, templates } from "@/content/templates";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bundles — AgentKit",
  description:
    "Save up to 46% with AgentKit template bundles. Solo Founder Bundle, Agency Bundle, or All-Access Pass.",
};

export default function BundlesPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Template Bundles
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Save up to 46% by purchasing templates in bundles. Or get everything
            with the All-Access Pass.
          </p>
        </div>

        <div className="space-y-12">
          {/* Bundles */}
          {bundles.map((bundle) => {
            const bundleTemplates = templates.filter((t) =>
              bundle.templateIds.includes(t.id)
            );
            return (
              <div
                key={bundle.id}
                className="bg-card border border-gray-200 rounded-xl overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-text">
                        {bundle.name}
                      </h2>
                      <p className="text-muted mt-1">{bundle.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-3xl font-bold text-text">
                        ${bundle.price}
                      </span>
                      <span className="text-sm text-muted line-through ml-2">
                        ${bundle.originalPrice}
                      </span>
                      <span className="ml-2 inline-block px-2 py-0.5 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        Save {bundle.savings}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {bundleTemplates.map((t) => (
                      <Link
                        key={t.id}
                        href={`/templates/${t.slug}`}
                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex-1">
                          <p className="text-sm font-medium text-text">
                            {t.name}
                          </p>
                          <p className="text-xs text-muted">{t.tagline}</p>
                        </div>
                        <span className="text-sm text-muted">
                          {t.isFree ? "Free" : `$${t.price}`}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <a
                    href={bundle.gumroadUrl}
                    className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
                  >
                    Get {bundle.name} — ${bundle.price}
                  </a>
                </div>
              </div>
            );
          })}

          {/* All-Access */}
          <div className="bg-card border-2 border-primary rounded-xl overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="inline-block px-3 py-0.5 bg-primary text-white text-xs font-bold rounded-full mb-2">
                    BEST VALUE
                  </div>
                  <h2 className="text-2xl font-bold text-text">
                    {allAccessPlan.name}
                  </h2>
                  <p className="text-muted mt-1">
                    {allAccessPlan.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-3xl font-bold text-text">
                    ${allAccessPlan.price}
                  </span>
                  <span className="text-sm text-muted">
                    /{allAccessPlan.period}
                  </span>
                </div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {allAccessPlan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <svg
                      className="w-4 h-4 text-primary flex-shrink-0"
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
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={allAccessPlan.gumroadUrl}
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Subscribe — ${allAccessPlan.price}/month
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
