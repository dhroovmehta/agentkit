export interface Template {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: string;
  tagline: string;
  description: string;
  includes: string[];
  promptExcerpt: string;
  features: string[];
  useCases: string[];
  setupTime: string;
  gumroadUrl: string;
  isFree: boolean;
}

export interface Bundle {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  savings: string;
  description: string;
  templateIds: number[];
  gumroadUrl: string;
}

export const templates: Template[] = [
  {
    id: 1,
    slug: "solo-business-operations",
    name: "Solo Business Operations Agent",
    price: 0,
    category: "Operations",
    tagline: "Run 8 departments of your solo business with one AI agent",
    description:
      "A comprehensive AI agent that handles sales, marketing, support, finance, HR, ops, product, and analytics for solo founders. Includes a complete system prompt covering all 8 departments, MCP configuration for 6 servers, and an n8n workflow that delivers a daily briefing to your inbox.",
    includes: [
      "System prompt for 8 departments (4,000+ words)",
      "MCP config for 6 servers (filesystem, web search, email, calendar, spreadsheet, slack)",
      "n8n workflow for automated daily briefing",
      "10-page setup guide with screenshots",
      "Quick-start README",
    ],
    promptExcerpt:
      'You are an AI operations agent managing 8 departments of a solo business. Your role is to act as a virtual COO, proactively identifying tasks, surfacing insights, and executing workflows across Sales, Marketing, Customer Support, Finance, HR, Operations, Product, and Analytics...',
    features: [
      "8-department coverage in a single agent",
      "Daily automated briefing via email",
      "MCP integration for file access, web search, and communications",
      "Prioritization engine that surfaces what matters most",
      "Weekly summary with KPI tracking",
    ],
    useCases: [
      "Solo SaaS founders managing everything themselves",
      "Freelancers scaling beyond 1:1 client work",
      "Side project operators who need structure",
      "Small agency owners wearing too many hats",
    ],
    setupTime: "25-30 minutes",
    gumroadUrl: "#",
    isFree: true,
  },
  {
    id: 2,
    slug: "content-repurposing",
    name: "Content Repurposing Pipeline",
    price: 49,
    category: "Content",
    tagline: "Turn one blog post into 10 pieces of content automatically",
    description:
      "Stop creating content from scratch every time. This agent takes a single blog post and transforms it into LinkedIn posts, Twitter/X threads, newsletter sections, and social media captions. Includes extraction prompts optimized for each platform and an n8n workflow that automates the entire pipeline.",
    includes: [
      "Platform-specific extraction prompts (LinkedIn, Twitter/X, Newsletter, Social)",
      "MCP config for content management tools",
      "n8n workflow for automated content distribution",
      "Setup guide with platform-specific tips",
      "Quick-start README",
    ],
    promptExcerpt:
      "You are a content repurposing specialist. Given a long-form blog post, your job is to extract and transform the core ideas into platform-optimized content pieces. Each piece must feel native to its platform, not like a copy-paste...",
    features: [
      "One input, 10+ content pieces output",
      "Platform-native formatting for LinkedIn, X, newsletters",
      "Tone and length adaptation per platform",
      "Hashtag and hook generation",
      "Scheduling-ready output format",
    ],
    useCases: [
      "Content marketers publishing across multiple channels",
      "Founders who write weekly blogs",
      "Agency teams managing client content",
      "Newsletter writers wanting more distribution",
    ],
    setupTime: "15-20 minutes",
    gumroadUrl: "#",
    isFree: false,
  },
  {
    id: 3,
    slug: "customer-support-auto-responder",
    name: "Customer Support Auto-Responder",
    price: 49,
    category: "Support",
    tagline: "Classify, respond, and escalate support tickets automatically",
    description:
      "An AI agent that reads incoming support emails, classifies them by urgency and type, drafts contextual responses, and escalates complex issues to a human. Integrates with your email system via MCP and uses n8n to manage the ticket workflow.",
    includes: [
      "Classification prompt (bug, feature request, billing, general inquiry)",
      "Response generation prompt with tone matching",
      "MCP config for email and knowledge base access",
      "n8n workflow for classify-respond-escalate pipeline",
      "Setup guide with escalation rules configuration",
    ],
    promptExcerpt:
      "You are a customer support agent. When a new support email arrives, you classify it into one of these categories: Bug Report, Feature Request, Billing Question, General Inquiry, Urgent/Outage. For each category, you follow a specific response template while personalizing based on the customer's message...",
    features: [
      "Automatic ticket classification (5 categories)",
      "Context-aware response drafting",
      "Smart escalation rules (never auto-send for billing or urgent)",
      "Response tone matching to customer sentiment",
      "Daily support digest email",
    ],
    useCases: [
      "SaaS companies with growing support volume",
      "E-commerce stores handling product inquiries",
      "Service businesses managing client communications",
      "Solo founders drowning in support emails",
    ],
    setupTime: "20-25 minutes",
    gumroadUrl: "#",
    isFree: false,
  },
  {
    id: 4,
    slug: "sales-outreach-automation",
    name: "Sales Outreach Automation",
    price: 79,
    category: "Sales",
    tagline: "Research leads, personalize emails, and run follow-up sequences",
    description:
      "A complete sales outreach pipeline. The agent researches leads using web search, crafts personalized first-touch emails, and manages a 3-email follow-up sequence. Includes n8n workflows for automated scheduling and send-time optimization.",
    includes: [
      "Lead research prompt with company analysis framework",
      "Email personalization prompt (first-touch + 3 follow-ups)",
      "MCP config for web search, email, and CRM access",
      "n8n workflow for automated follow-up scheduling",
      "Setup guide with cold email best practices",
    ],
    promptExcerpt:
      "You are a B2B sales research and outreach specialist. Given a target company and contact, your job is to: 1) Research the company (recent news, product updates, hiring patterns, tech stack) 2) Identify a relevant pain point 3) Craft a personalized email that connects their situation to our solution...",
    features: [
      "Automated lead research from public sources",
      "Hyper-personalized first-touch emails",
      "3-email follow-up sequence with varied angles",
      "Send-time optimization based on timezone",
      "Response detection and sequence pausing",
    ],
    useCases: [
      "B2B founders doing their own outreach",
      "Sales teams wanting to scale personalization",
      "Agencies prospecting for new clients",
      "Consultants building a pipeline",
    ],
    setupTime: "25-30 minutes",
    gumroadUrl: "#",
    isFree: false,
  },
  {
    id: 5,
    slug: "weekly-bi-report",
    name: "Weekly Business Intelligence Report",
    price: 49,
    category: "Analytics",
    tagline: "Automated competitor and market intelligence delivered weekly",
    description:
      "An AI agent that scrapes competitor websites, aggregates industry news, and generates a concise weekly intelligence report delivered to your inbox every Monday morning. Never miss a competitor product launch, pricing change, or market shift again.",
    includes: [
      "Competitor analysis prompt with structured output",
      "News aggregation and summarization prompt",
      "MCP config for web scraping and email delivery",
      "n8n workflow for weekly automated report generation",
      "Setup guide with competitor list configuration",
    ],
    promptExcerpt:
      "You are a business intelligence analyst. Every week, you compile a comprehensive report covering: 1) Competitor Updates: product changes, pricing updates, new features, blog posts 2) Industry News: relevant articles, funding rounds, M&A activity 3) Market Signals: hiring trends, technology adoption, regulatory changes...",
    features: [
      "Automated weekly competitor monitoring",
      "Industry news aggregation and summarization",
      "Trend detection across multiple sources",
      "Executive summary with action items",
      "Configurable competitor list and focus areas",
    ],
    useCases: [
      "Founders tracking competitive landscape",
      "Product managers monitoring market shifts",
      "Strategy teams needing regular intel",
      "Investors tracking portfolio company markets",
    ],
    setupTime: "15-20 minutes",
    gumroadUrl: "#",
    isFree: false,
  },
  {
    id: 6,
    slug: "social-media-manager",
    name: "Social Media Manager Agent",
    price: 49,
    category: "Marketing",
    tagline: "Content calendar, posting schedule, and engagement monitoring",
    description:
      "A complete social media management agent that generates weekly content calendars, creates platform-optimized posts, suggests optimal posting times, and monitors engagement metrics. Covers LinkedIn, Twitter/X, and Instagram.",
    includes: [
      "Content calendar generation prompt (weekly themes + daily posts)",
      "Platform-specific post creation prompts",
      "MCP config for social media APIs and scheduling tools",
      "n8n workflow for content calendar automation",
      "Setup guide with platform strategy tips",
    ],
    promptExcerpt:
      "You are a social media manager for a B2B brand. Your job is to create a weekly content calendar with posts for LinkedIn, Twitter/X, and Instagram. Each post must: 1) Align with the weekly theme 2) Be optimized for the specific platform 3) Include relevant hashtags 4) Have a clear call-to-action...",
    features: [
      "Weekly content calendar generation",
      "Platform-native post creation (LinkedIn, X, Instagram)",
      "Optimal posting time suggestions",
      "Engagement monitoring and reporting",
      "Content theme rotation to prevent repetition",
    ],
    useCases: [
      "Solo founders managing their own social presence",
      "Small marketing teams without a dedicated social manager",
      "Agencies handling multiple client accounts",
      "Personal brand builders",
    ],
    setupTime: "20-25 minutes",
    gumroadUrl: "#",
    isFree: false,
  },
  {
    id: 7,
    slug: "invoice-expense-tracker",
    name: "Invoice & Expense Tracker Agent",
    price: 29,
    category: "Finance",
    tagline: "Scan receipts, categorize expenses, and generate monthly reports",
    description:
      "An AI agent that processes receipts and invoices, automatically categorizes expenses, updates your tracking spreadsheet, and generates monthly financial summaries. Perfect for solo operators and small businesses who hate bookkeeping.",
    includes: [
      "Receipt scanning and data extraction prompt",
      "Expense categorization prompt (IRS categories)",
      "MCP config for file system and spreadsheet access",
      "n8n workflow for automated receipt processing",
      "Setup guide with category customization",
    ],
    promptExcerpt:
      "You are a bookkeeping assistant. When given a receipt or invoice image/text, extract: 1) Vendor name 2) Date 3) Total amount 4) Tax amount (if shown) 5) Category (from predefined list) 6) Payment method. Then update the expense tracking spreadsheet and flag any unusual amounts...",
    features: [
      "Automatic receipt data extraction",
      "IRS-aligned expense categorization",
      "Monthly financial summary generation",
      "Anomaly detection for unusual expenses",
      "Tax-ready category reporting",
    ],
    useCases: [
      "Freelancers tracking deductible expenses",
      "Solo founders who avoid bookkeeping",
      "Small businesses without a dedicated accountant",
      "Contractors managing project expenses",
    ],
    setupTime: "15-20 minutes",
    gumroadUrl: "#",
    isFree: false,
  },
  {
    id: 8,
    slug: "hiring-pipeline",
    name: "Hiring Pipeline Agent",
    price: 59,
    category: "HR",
    tagline: "Screen resumes, schedule interviews, and draft responses",
    description:
      "An AI agent that manages your hiring pipeline from resume screening to interview scheduling. It scores candidates against your criteria, drafts personalized responses, and manages interview scheduling through calendar integration.",
    includes: [
      "Resume screening prompt with scoring rubric",
      "Interview scheduling prompt with calendar integration",
      "Rejection/acceptance email drafts prompt",
      "MCP config for email, calendar, and file access",
      "n8n workflow for end-to-end hiring pipeline",
    ],
    promptExcerpt:
      "You are a hiring manager assistant. For each resume received, score the candidate on: 1) Relevant Experience (0-10) 2) Skills Match (0-10) 3) Education Fit (0-5) 4) Culture Indicators (0-5). Total score out of 30. Auto-advance candidates scoring 20+ to interview stage. Draft a personalized email for each outcome...",
    features: [
      "Automated resume scoring (30-point rubric)",
      "Candidate ranking and shortlisting",
      "Personalized email drafts for all outcomes",
      "Interview scheduling via calendar integration",
      "Weekly hiring pipeline summary",
    ],
    useCases: [
      "Startups hiring without a recruiter",
      "Small businesses receiving high application volume",
      "Hiring managers wanting consistent screening",
      "Agency owners scaling their team",
    ],
    setupTime: "20-25 minutes",
    gumroadUrl: "#",
    isFree: false,
  },
  {
    id: 9,
    slug: "seo-content-factory",
    name: "SEO Content Factory",
    price: 79,
    category: "Marketing",
    tagline: "Keyword research to published article in one automated pipeline",
    description:
      "A complete SEO content pipeline that starts with keyword research, generates optimized outlines, creates full draft articles, and runs an SEO optimization checklist before publishing. Includes n8n workflow for automated content production at scale.",
    includes: [
      "Keyword research and clustering prompt",
      "Content outline generation prompt (SEO-optimized structure)",
      "Full article draft prompt with on-page SEO",
      "SEO optimization checklist prompt",
      "MCP config for web search and content management",
      "n8n workflow for automated content pipeline",
    ],
    promptExcerpt:
      "You are an SEO content strategist. Given a seed keyword, your job is to: 1) Research related keywords and search intent 2) Analyze top 5 ranking pages for content gaps 3) Generate a detailed outline with H2/H3 structure 4) Write a comprehensive 2,000+ word article optimized for the target keyword...",
    features: [
      "Automated keyword research and clustering",
      "Competitor content gap analysis",
      "SEO-optimized outline generation",
      "Full article drafting with on-page SEO",
      "Pre-publish optimization checklist",
    ],
    useCases: [
      "Content teams scaling organic traffic",
      "SEO agencies managing multiple client blogs",
      "Founders building content-driven acquisition",
      "Marketing teams without dedicated SEO writers",
    ],
    setupTime: "20-25 minutes",
    gumroadUrl: "#",
    isFree: false,
  },
  {
    id: 10,
    slug: "competitive-intelligence",
    name: "Competitive Intelligence Monitor",
    price: 49,
    category: "Analytics",
    tagline: "Track competitor changes and get weekly alerts",
    description:
      "An AI agent that continuously monitors your competitors' websites, social media, and public activity. Detects product launches, pricing changes, new hires, and content strategies. Delivers a structured report with change detection highlighting what's new since last week.",
    includes: [
      "Competitor website scraping and change detection prompt",
      "Social media monitoring prompt",
      "Structured report generation prompt",
      "MCP config for web scraping and email delivery",
      "n8n workflow for automated weekly monitoring",
    ],
    promptExcerpt:
      "You are a competitive intelligence analyst. For each competitor on the watch list, monitor: 1) Website changes (new pages, pricing updates, feature announcements) 2) Social media activity (new posts, engagement patterns, messaging shifts) 3) Job postings (indicates strategic direction) 4) Press/blog (product launches, partnerships)...",
    features: [
      "Automated weekly competitor website monitoring",
      "Change detection with diff highlighting",
      "Social media activity tracking",
      "Job posting analysis for strategic signals",
      "Structured weekly report with executive summary",
    ],
    useCases: [
      "Product teams tracking competitive features",
      "Sales teams needing competitive battlecards",
      "Founders in competitive markets",
      "Investors monitoring portfolio company landscapes",
    ],
    setupTime: "15-20 minutes",
    gumroadUrl: "#",
    isFree: false,
  },
];

export const bundles: Bundle[] = [
  {
    id: "solo-founder",
    name: "Solo Founder Bundle",
    price: 149,
    originalPrice: 276,
    savings: "46%",
    description:
      "Everything a solo founder needs to automate their business. Covers operations, content, sales, and social media management.",
    templateIds: [1, 2, 4, 6],
    gumroadUrl: "#",
  },
  {
    id: "agency",
    name: "Agency Bundle",
    price: 199,
    originalPrice: 275,
    savings: "28%",
    description:
      "Built for agency owners managing multiple clients. Covers content production, outreach, social media, SEO, and competitive monitoring.",
    templateIds: [2, 4, 6, 9, 10],
    gumroadUrl: "#",
  },
];

export const allAccessPlan = {
  name: "All-Access Pass",
  price: 29,
  period: "month",
  description:
    "Every template in the catalog. All future templates included. Cancel anytime.",
  features: [
    "All 10 current templates",
    "Every new template added monthly",
    "Priority support via email",
    "Template update notifications",
    "Community access (coming soon)",
  ],
  gumroadUrl: "#",
};

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug);
}

export function getTemplatesByIds(ids: number[]): Template[] {
  return templates.filter((t) => ids.includes(t.id));
}
