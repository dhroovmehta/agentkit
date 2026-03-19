import { bundles, allAccessPlan, templates } from "@/content/templates";

export default function PricingTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Solo Founder Bundle */}
      <div className="bg-card border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text">{bundles[0].name}</h3>
        <p className="text-sm text-muted mt-1 mb-4">{bundles[0].description}</p>
        <div className="mb-4">
          <span className="text-3xl font-bold text-text">
            ${bundles[0].price}
          </span>
          <span className="text-sm text-muted line-through ml-2">
            ${bundles[0].originalPrice}
          </span>
          <span className="ml-2 text-sm font-medium text-accent">
            Save {bundles[0].savings}
          </span>
        </div>
        <ul className="space-y-2 mb-6">
          {bundles[0].templateIds.map((id) => {
            const t = templates.find((tpl) => tpl.id === id);
            return (
              <li key={id} className="flex items-center gap-2 text-sm text-muted">
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
                {t?.name}
              </li>
            );
          })}
        </ul>
        <a
          href={bundles[0].gumroadUrl}
          className="block w-full text-center px-4 py-2.5 bg-secondary text-white text-sm font-medium rounded-lg hover:bg-secondary/90 transition-colors"
        >
          Get Bundle
        </a>
      </div>

      {/* All-Access — featured */}
      <div className="bg-card border-2 border-primary rounded-xl p-6 relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-white text-xs font-bold rounded-full">
          BEST VALUE
        </div>
        <h3 className="text-lg font-semibold text-text">
          {allAccessPlan.name}
        </h3>
        <p className="text-sm text-muted mt-1 mb-4">
          {allAccessPlan.description}
        </p>
        <div className="mb-4">
          <span className="text-3xl font-bold text-text">
            ${allAccessPlan.price}
          </span>
          <span className="text-sm text-muted">/{allAccessPlan.period}</span>
        </div>
        <ul className="space-y-2 mb-6">
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
          className="block w-full text-center px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
        >
          Subscribe Now
        </a>
      </div>

      {/* Agency Bundle */}
      <div className="bg-card border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text">{bundles[1].name}</h3>
        <p className="text-sm text-muted mt-1 mb-4">{bundles[1].description}</p>
        <div className="mb-4">
          <span className="text-3xl font-bold text-text">
            ${bundles[1].price}
          </span>
          <span className="text-sm text-muted line-through ml-2">
            ${bundles[1].originalPrice}
          </span>
          <span className="ml-2 text-sm font-medium text-accent">
            Save {bundles[1].savings}
          </span>
        </div>
        <ul className="space-y-2 mb-6">
          {bundles[1].templateIds.map((id) => {
            const t = templates.find((tpl) => tpl.id === id);
            return (
              <li key={id} className="flex items-center gap-2 text-sm text-muted">
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
                {t?.name}
              </li>
            );
          })}
        </ul>
        <a
          href={bundles[1].gumroadUrl}
          className="block w-full text-center px-4 py-2.5 bg-secondary text-white text-sm font-medium rounded-lg hover:bg-secondary/90 transition-colors"
        >
          Get Bundle
        </a>
      </div>
    </div>
  );
}
