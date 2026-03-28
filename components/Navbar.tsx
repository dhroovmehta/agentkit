"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-secondary">
              AgentKit <span className="text-primary">&#9889;</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#templates"
              className="text-sm font-medium text-muted hover:text-text transition-colors"
            >
              Templates
            </Link>
            <Link
              href="/bundles"
              className="text-sm font-medium text-muted hover:text-text transition-colors"
            >
              Bundles
            </Link>
            <Link
              href="/#pricing"
              className="text-sm font-medium text-muted hover:text-text transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium text-muted hover:text-text transition-colors"
            >
              FAQ
            </Link>
            <a
              href="/templates/solo-business-operations"
              className="inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Free Template
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/#templates"
              className="block px-3 py-2 text-sm font-medium text-muted hover:text-text"
              onClick={() => setMobileOpen(false)}
            >
              Templates
            </Link>
            <Link
              href="/bundles"
              className="block px-3 py-2 text-sm font-medium text-muted hover:text-text"
              onClick={() => setMobileOpen(false)}
            >
              Bundles
            </Link>
            <Link
              href="/#pricing"
              className="block px-3 py-2 text-sm font-medium text-muted hover:text-text"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/#faq"
              className="block px-3 py-2 text-sm font-medium text-muted hover:text-text"
              onClick={() => setMobileOpen(false)}
            >
              FAQ
            </Link>
            <a
              href="/templates/solo-business-operations"
              className="block mx-3 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg text-center"
            >
              Get Free Template
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
