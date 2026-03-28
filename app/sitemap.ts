import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://agentkit-sandy.vercel.app';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: '2026-03-26',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/bundles`,
      lastModified: '2026-03-26',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Blog pages
  const blogSlugs = [
    'best-ai-agent-templates',
    'build-ai-agent-guide',
    'mcp-servers-explained',
    'n8n-ai-agent-workflows',
    'system-prompts-guide',
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: '2026-03-26',
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Template pages (all 10)
  const templateSlugs = [
    'solo-business-operations',
    'content-repurposing',
    'customer-support-auto-responder',
    'sales-outreach-automation',
    'weekly-bi-report',
    'social-media-manager',
    'invoice-expense-tracker',
    'hiring-pipeline',
    'seo-content-factory',
    'competitive-intelligence',
  ];

  const templatePages: MetadataRoute.Sitemap = templateSlugs.map((slug) => ({
    url: `${baseUrl}/templates/${slug}`,
    lastModified: '2026-03-26',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...templatePages];
}
