import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-xl font-bold text-white">
              AgentKit <span className="text-primary">&#9889;</span>
            </span>
            <p className="mt-3 text-sm text-gray-400 max-w-md">
              Pre-built AI agent workflows. Download. Configure. Run. Each
              template includes a system prompt, MCP configuration, n8n
              workflow, and step-by-step setup guide.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#templates"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/bundles"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Bundles
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@agentkit.ai"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  hello@agentkit.ai
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Gumroad Store
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} AgentKit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
