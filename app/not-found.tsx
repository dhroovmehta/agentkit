import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        {/* 404 heading */}
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl font-extrabold text-primary mb-2">
            404
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-text">
            Page not found
          </p>
        </div>

        {/* Description */}
        <p className="text-muted mb-8 leading-relaxed">
          The page you're looking for doesn't exist. It may have been moved or
          deleted.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to homepage
          </Link>
          <Link
            href="/#templates"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-text font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Browse templates
          </Link>
        </div>
      </div>
    </div>
  );
}
