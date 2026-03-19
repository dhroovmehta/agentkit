import Link from "next/link";
import type { Template } from "@/content/templates";

const categoryColors: Record<string, string> = {
  Operations: "bg-purple-100 text-purple-700",
  Content: "bg-blue-100 text-blue-700",
  Support: "bg-green-100 text-green-700",
  Sales: "bg-orange-100 text-orange-700",
  Analytics: "bg-cyan-100 text-cyan-700",
  Marketing: "bg-pink-100 text-pink-700",
  Finance: "bg-yellow-100 text-yellow-700",
  HR: "bg-red-100 text-red-700",
};

export default function TemplateCard({ template }: { template: Template }) {
  return (
    <Link
      href={`/templates/${template.slug}`}
      className="group block bg-card border border-gray-200 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-200"
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full ${
            categoryColors[template.category] || "bg-gray-100 text-gray-700"
          }`}
        >
          {template.category}
        </span>
        {template.isFree ? (
          <span className="inline-block px-2.5 py-0.5 text-xs font-bold rounded-full bg-accent/10 text-accent">
            FREE
          </span>
        ) : (
          <span className="text-lg font-bold text-text">${template.price}</span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-text group-hover:text-primary transition-colors mb-2">
        {template.name}
      </h3>

      <p className="text-sm text-muted mb-4 line-clamp-2">
        {template.tagline}
      </p>

      <div className="flex items-center justify-between text-xs text-muted">
        <span className="flex items-center gap-1">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {template.setupTime}
        </span>
        <span className="text-primary font-medium group-hover:underline">
          View details &rarr;
        </span>
      </div>
    </Link>
  );
}
