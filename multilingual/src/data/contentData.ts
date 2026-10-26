import {
  CaseStudy,
  Review,
  WebServiceBlock,
  MarketingService,
  ProjectWork,
  BlogPost,
  TeamMember,
  RegionInfo,
  FaqItem
} from '../types';

export const USA_STATES = [
  'New York', 'California', 'Texas', 'Florida', 'Illinois',
  'Pennsylvania', 'Ohio', 'Georgia', 'North Carolina', 'Michigan',
  'New Jersey', 'Virginia', 'Washington', 'Arizona', 'Massachusetts',
  'Tennessee', 'Indiana', 'Missouri', 'Maryland', 'Colorado'
];

export const LATAM_COUNTRIES = [
  'Brazil', 'Mexico', 'Colombia', 'Argentina', 'Chile',
  'Peru', 'Ecuador', 'Costa Rica', 'Panama', 'Uruguay',
  'Guatemala', 'Dominican Republic'
];

export const EU_COUNTRIES = [
  'France', 'Germany', 'Spain', 'Switzerland', 'Poland'
];

export const ARABIC_COUNTRIES = [
  'UAE', 'Saudi Arabia', 'Oman', 'Qatar', 'Iran',
  'Iraq', 'Bahrain', 'Morocco', 'Yemen', 'Egypt'
];

export const ISRAEL_REGIONS = [
  'Tel Aviv Tech Hub', 'Jerusalem District', 'Haifa Industrial', 'Central Region'
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    slug: 'cross-border-b2b-medical-supplies-portal',
    title: 'Cross-Border B2B Medical Supplies Portal',
    client: 'MedTech Global Direct',
    clientRole: 'VP of Global Operations',
    country: 'USA & Germany',
    category: 'eCommerce',
    techStack: ['Laravel 11', 'React Js', 'Custom PHP', 'PostgreSQL', 'Redis'],
    metrics: [
      { label: 'Organic Inbound Revenue', value: '+340%' },
      { label: 'Markets Launched', value: '4 Countries' },
      { label: 'Sub-second Load Time', value: '0.62s' }
    ],
    timeline: '14 Weeks from Architecture to Multi-Country Launch',
    deliverables: [
      'Custom decoupled Laravel multi-tenant database architecture',
      'High-performance React headless frontend catalog',
      'Automated ISO/CE compliance certification viewer per country',
      'Dynamic multi-currency B2B pricing engine (USD, EUR, CHF)'
    ],
    summary: 'Custom-coded multilingual catalog and B2B pricing portal serving hospitals across USA, Germany, and Switzerland with automated VAT & regulatory compliance.',
    fullChallenge: 'The client was locked in a sluggish off-the-shelf platform unable to handle dual-currency tier pricing, multi-language regulatory disclosures, or strict German B2B data compliance.',
    fullSolution: 'UDMIDEAS architected a custom decoupled Laravel backend with a high-performance React frontend. We built hreflang localization, dynamic currency switching, and country-specific checkout flows.',
    fullResults: [
      'Increased international checkout conversion by 215% within 90 days',
      'Ranked #1 for 48 commercial medical keywords across US and DACH search engines',
      'Automated multi-currency billing across USD, EUR, and CHF'
    ],
    languages: ['English', 'German', 'French'],
    clientTestimonial: {
      quote: 'UDMIDEAS eliminated all the architectural bottlenecks that three prior agencies failed to resolve. Their custom Laravel and React engineering allowed us to enter Germany and Switzerland with zero friction.',
      author: 'Marcus Lindemann',
      title: 'Director of Digital Supply Chains'
    },
    architectureDetails: {
      frontend: 'React 19 SPA with SSR hydration, atomic state caching, and tailored medical catalog filtration.',
      backend: 'Laravel 11 custom REST endpoints, PostgreSQL partitioning by region, and Redis distributed caching.',
      localization: 'Automated XML hreflang sitemaps, country-specific VAT calculation, and localized FDA/CE disclosures.',
      performance: '0.62s average LCP across North America and Frankfurt edge points, 99/100 Core Web Vitals.'
    }
  },
  {
    id: 'cs-2',
    slug: 'luxury-real-estate-investment-advisory',
    title: 'Luxury Real Estate & Investment Advisory',
    client: 'Al-Rayyan International Realty',
    clientRole: 'Managing Director & Partner',
    country: 'UAE & France',
    category: 'Service Business',
    techStack: ['WordPress Custom Theme', 'PHP 8.3 Custom REST', 'React Frontend', 'Bi-directional CSS'],
    metrics: [
      { label: 'High-Net-Worth Inquiries', value: '+420%' },
      { label: 'RTL/LTR Switch Time', value: 'Instant' },
      { label: 'Lead Quality Score', value: '94/100' }
    ],
    timeline: '10 Weeks Bespoke Engineering',
    deliverables: [
      'Handcrafted bi-directional WordPress theme with zero bloated plugins',
      'High-resolution interactive virtual tour viewer for prime French Riviera villas',
      'VIP WhatsApp concierge automation routed to regional advisors',
      'Geo-targeted Generative Engine Optimization (GEO) footprint'
    ],
    summary: 'Ultra-fast multilingual property portal connecting private investors from Dubai, Riyadh, Paris, and Miami with native RTL Arabic, French, and English layouts.',
    fullChallenge: 'Standard translation plugins produced broken right-to-left layout alignment, ruining luxury credibility for Middle Eastern investors searching for prime French & American properties.',
    fullSolution: 'Custom-engineered WordPress architecture with handcrafted CSS logical properties for true bi-directional (LTR & RTL) rendering. Integrated GeoIP routing and WhatsApp VIP inquiry pipeline.',
    fullResults: [
      'Closed $18.4M in international property transactions attributed to multilingual organic search',
      'Dominates Google and generative AI search (GEO) for prime French Riviera luxury estates',
      'Zero layout shift across Arabic, French, and English viewports'
    ],
    languages: ['Arabic (RTL)', 'French', 'English'],
    clientTestimonial: {
      quote: 'The Arabic RTL implementation is completely authentic, not an awkward mirrored hack. Our high-net-worth investors from Dubai and Riyadh immediately feel at home on the platform.',
      author: 'Sheikh Omar Al-Rayyan',
      title: 'Chairman & Principal Investor'
    },
    architectureDetails: {
      frontend: 'CSS Logical Properties (margin-inline-start, dir="rtl"), custom smooth gallery carousels without heavy UI kits.',
      backend: 'Hardened WordPress Core with custom post types and custom PHP REST endpoints bypassing admin-ajax bloat.',
      localization: 'Native Arabic calligraphy rendering, currency toggling (AED, EUR, USD), and localized VIP WhatsApp hooks.',
      performance: 'Sub-second paint across Gulf mobile networks and Parisian enterprise fiber, 0.00 CLS score.'
    }
  },
  {
    id: 'cs-3',
    slug: 'multi-country-fashion-apparel-retailer',
    title: 'Multi-Country Fashion & Apparel Retailer',
    client: 'Solara Lifestyle Brands',
    clientRole: 'Chief Commercial Officer',
    country: 'Mexico, Brazil & USA',
    category: 'eCommerce',
    techStack: ['Magento 2 Enterprise', 'Custom PHP Extensions', 'React Micro-frontends', 'Elasticsearch'],
    metrics: [
      { label: 'LATAM Mobile Orders', value: '+280%' },
      { label: 'Cross-Border Return Rate', value: '-38%' },
      { label: 'Page Speed Index', value: '98/100' }
    ],
    timeline: '16 Weeks Enterprise Decoupled Migration',
    deliverables: [
      'Headless Magento storefront engineered with React micro-frontends',
      'Direct integration with MercadoPago, Pix (Brazil), and Oxxo Pay (Mexico)',
      'Automated shoe & apparel size conversion table per country standards',
      'Multi-currency Google Shopping and dynamic Meta Catalog ad feed setup'
    ],
    summary: 'Tailored Magento commerce engine supporting Portuguese, Spanish, and English catalogs with localized payment gateways (MercadoPago, Pix, Stripe).',
    fullChallenge: 'Fragmented customer journeys across Latin America due to slow mobile performance on 4G networks and lack of localized payment checkout trust.',
    fullSolution: 'UDMIDEAS custom-coded a headless Magento storefront with optimized asset pipelines, localized regional sizing tables, and automated hreflang XML sitemaps for Google and regional search.',
    fullResults: [
      'Grew active monthly shoppers across Mexico, Colombia, and Brazil to 180,000+',
      'Reduced average checkout abandonment by 42% through localized payment integrations',
      'Top 3 organic SERP rankings for apparel categories in Spanish and Portuguese'
    ],
    languages: ['Spanish', 'Portuguese', 'English'],
    clientTestimonial: {
      quote: 'Integrating Brazilian Pix and Mexican local payment channels with our American fulfillment center was a logistical challenge until Arun and UDMIDEAS took over our development.',
      author: 'Sofia Carvajal',
      title: 'Head of Latin America Commerce'
    },
    architectureDetails: {
      frontend: 'React micro-frontends with instant product facet filtering and predictive search.',
      backend: 'Magento 2 Commerce with custom PHP modules; core code untouched for flawless security updates.',
      localization: 'Localized Spanish (Mexican vs Colombian nuances) and Brazilian Portuguese copy and size charts.',
      performance: 'Mobile-first asset delivery with WebP image compression, Varnish edge caching, and 98 PageSpeed index.'
    }
  },
  {
    id: 'cs-4',
    slug: 'fintech-cross-border-compliance-advisory',
    title: 'Fintech & Cross-Border Compliance Advisory',
    client: 'CyberSentry Israel & US',
    clientRole: 'Chief Information Security Officer',
    country: 'Israel & USA',
    category: 'Service Business',
    techStack: ['CodeIgniter 4', 'React JS', 'Tailwind', 'Custom REST APIs', 'PostgreSQL'],
    metrics: [
      { label: 'Enterprise Demos Booked', value: '+310%' },
      { label: 'Search Visibility (AEO/GEO)', value: 'Top AI Citation' },
      { label: 'B2B Sales Pipeline', value: '$6.2M' }
    ],
    timeline: '12 Weeks High-Security Engineering & Content Seeding',
    deliverables: [
      'Custom CodeIgniter 4 backend with zero dependencies and military-grade security headers',
      'Bilingual Hebrew and English executive portal with right-to-left Hebrew typography',
      'Interactive compliance readiness audit tool generating customized PDF reports',
      'AEO and GEO optimization ensuring citations in ChatGPT, Perplexity, and Gemini'
    ],
    summary: 'Bilingual Hebrew and English lead-generation engine designed for enterprise cybersecurity and compliance consulting firms operating between Tel Aviv and New York.',
    fullChallenge: 'Technical buyers were finding competitors in Google and AI summary engines (Perplexity, ChatGPT Search) because technical content was not optimized for generative engine answers.',
    fullSolution: 'Built a custom CodeIgniter and React web presence with deep Answer Engine Optimization (AEO), Schema graph clustering, and targeted B2B LinkedIn and Google Ads campaigns.',
    fullResults: [
      'Secured citations in 82% of relevant generative AI search summaries',
      'Generated 140+ verified Fortune 500 security audit consultations in year one',
      'Bilingual content localization tailored specifically to US and Israeli enterprise vocabulary'
    ],
    languages: ['Hebrew', 'English'],
    clientTestimonial: {
      quote: 'UDMIDEAS understood our dual market dynamics immediately. They gave us the high-security engineering Israeli tech demands, combined with the conversion polish expected by New York enterprise clients.',
      author: 'Eran Kofman',
      title: 'Co-Founder & VP Security'
    },
    architectureDetails: {
      frontend: 'React with bilingual typography pairing (Heebo/Assistant for Hebrew and Plus Jakarta Sans for English).',
      backend: 'Lightweight CodeIgniter 4 MVC framework delivering 40ms server response times with zero third-party vulnerabilities.',
      localization: 'Entity knowledge graphs, Speakable schemas, and JSON-LD clustering for AI answer engine citation.',
      performance: 'A+ on SSL Labs security testing, 0.45s TTFB across New York and Tel Aviv clusters.'
    }
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'David Steinberg',
    role: 'Chief Executive Officer',
    company: 'Apex Logistics North America',
    country: 'USA (New York, NY)',
    countryFlag: '🇺🇸',
    rating: 5,
    reviewText: 'Arun and the UDMIDEAS team delivered a masterclass in custom engineering. They rebuilt our entire freight quoting portal in Laravel and React with zero bloated plugins. Inbound organic leads in New York and nationwide grew 3x within four months.',
    serviceReceived: 'Custom Laravel/React Development & USA B2B SEO',
    metrics: '+310% Inbound Leads'
  },
  {
    id: 'rev-2',
    name: 'Tariq Al-Mansoor',
    role: 'Managing Partner',
    company: 'Emirates Capital Partners',
    country: 'UAE (Dubai)',
    countryFlag: '🇦🇪',
    rating: 5,
    reviewText: 'Most agencies make a mess of Arabic RTL websites. UDMIDEAS built our corporate website with impeccable Arabic and English typography from scratch. Their multilingual PPC campaign across the GCC generated qualified investor inquiries immediately.',
    serviceReceived: 'Bilingual Web Engineering & GCC PPC Campaign',
    metrics: '+240% GCC Qualified Inquiries'
  },
  {
    id: 'rev-3',
    name: 'Claire Dupont',
    role: 'Digital Director',
    company: 'Atelier de Paris Cosmetics',
    country: 'France (Paris)',
    countryFlag: '🇫🇷',
    rating: 5,
    reviewText: 'Our multilingual eCommerce expansion into Germany and the United States required flawless hreflang setup and custom Magento coding. UDMIDEAS has been our strategic growth partner for over 3 years. Truly 15+ years of digital marketing expertise at work.',
    serviceReceived: 'Magento Custom Architecture & EU Multilingual SEO',
    metrics: '+185% EU Cross-Border Sales'
  },
  {
    id: 'rev-4',
    name: 'Mateo Hernandez',
    role: 'Founder & CMO',
    company: 'Financiera Andina',
    country: 'Colombia (Bogotá) & Mexico',
    countryFlag: '🇨🇴',
    rating: 5,
    reviewText: 'Finding a USA-based agency that understands Latin American nuances, Spanish localization, and custom PHP backend architecture was a game changer. UDMIDEAS handled both our web development and paid advertising with outstanding rigor.',
    serviceReceived: 'CodeIgniter Web App & LATAM Meta/Google Ads',
    metrics: '4.8x Return on Ad Spend'
  },
  {
    id: 'rev-5',
    name: 'Dr. Stefan Wagner',
    role: 'Head of Operations',
    company: 'Klinik Precision Diagnostics',
    country: 'Germany (Munich)',
    countryFlag: '🇩🇪',
    rating: 5,
    reviewText: 'The code quality is exceptionally clean. Zero third-party bloat, blazing fast Core Web Vitals, and compliant with EU GDPR regulations. Our patient appointment bookings increased across Germany, Austria, and Switzerland.',
    serviceReceived: 'Custom PHP Web Engineering & DACH SEO',
    metrics: '99/100 Core Web Vitals'
  },
  {
    id: 'rev-6',
    name: 'Noam Ben-David',
    role: 'VP Product',
    company: 'Tel Aviv CyberShield Ltd',
    country: 'Israel (Tel Aviv)',
    countryFlag: '🇮🇱',
    rating: 5,
    reviewText: 'UDMIDEAS excels in both technical custom programming and modern search optimization. Their AEO and GEO strategies positioned our SaaS brand at the top of AI search answers in the US enterprise market.',
    serviceReceived: 'React Custom Portal, AEO & GEO Search Strategy',
    metrics: '#1 AI Search Citations'
  },
  {
    id: 'rev-7',
    name: 'Sarah Jenkins',
    role: 'VP Marketing',
    company: 'Pacific Horizon Resorts',
    country: 'USA (California)',
    countryFlag: '🇺🇸',
    rating: 5,
    reviewText: 'Arun personally guided our multi-state luxury hospitality campaign. We needed localized landing pages across California, Texas, Florida, and New York. The conversion rates outpaced every previous agency we had hired.',
    serviceReceived: 'Multi-State PPC & Custom WordPress Architecture',
    metrics: '+265% Direct Bookings'
  },
  {
    id: 'rev-8',
    name: 'Khalid Al-Sabah',
    role: 'Commercial Director',
    company: 'Q-Trade International',
    country: 'Qatar & Saudi Arabia',
    countryFlag: '🇶🇦',
    rating: 5,
    reviewText: 'Their multilingual SMM and video content creation team captured the exact cultural tone required for Saudi Arabia and Qatar. Engagement skyrocketed on LinkedIn and Instagram, leading to major distributor contracts.',
    serviceReceived: 'Multilingual SMM, Video Production & Arabic Content',
    metrics: '+380% Social Engagement'
  },
  {
    id: 'rev-9',
    name: 'Isabella Rossi',
    role: 'Founder',
    company: 'Vanguard Medical Devices',
    country: 'Spain & Switzerland',
    countryFlag: '🇪🇸',
    rating: 5,
    reviewText: 'The custom coding approach gave us the exact custom checkout workflows and regulatory documents needed in Spain and Switzerland. 100% recommended for businesses needing custom multilingual solutions.',
    serviceReceived: 'Custom Laravel Development & Multilingual SEO',
    metrics: '+190% European Inbound Traffic'
  },
  {
    id: 'rev-10',
    name: 'Piotr Kowalski',
    role: 'Managing Director',
    company: 'Nordic TransLogistics',
    country: 'Poland (Warsaw)',
    countryFlag: '🇵🇱',
    rating: 5,
    reviewText: 'UDMIDEAS built our logistics portal using custom PHP frameworks. The performance is lightning fast and our multilingual SEO rankings in Central Europe and Germany jumped to page 1 within weeks.',
    serviceReceived: 'Custom PHP Architecture & Central European SEO',
    metrics: '+220% Search Visibility'
  }
];

export const WEB_SERVICES_BLOCKS: WebServiceBlock[] = [
  {
    id: 'react-headless',
    title: 'Custom React JS & Headless Web Applications',
    tagline: 'Modern, dynamic, and lightning-fast web engineering built from scratch',
    technologies: ['React JS', 'TypeScript', 'Next-gen Tooling', 'Tailwind CSS'],
    description: 'We build reactive, component-driven web applications and interactive client portals. Zero page reloads, sub-second transitions, and modular frontend architectures built for heavy enterprise traffic.',
    capabilities: [
      'Interactive service business dashboards & booking engines',
      'Headless commerce frontends connected to custom APIs',
      'Dynamic multi-currency & multilingual state management',
      'Optimized DOM rendering compliant with Google Core Web Vitals'
    ],
    idealFor: 'SaaS companies, high-volume service portals, and custom web applications requiring instant UX.'
  },
  {
    id: 'wordpress-custom',
    title: 'Custom WordPress & WooCommerce Engineering',
    tagline: '100% bespoke theme & plugin coding — zero pre-made bloated templates',
    technologies: ['WordPress Core', 'WooCommerce', 'PHP 8.3', 'Custom REST API'],
    description: 'We code custom WordPress themes and high-load WooCommerce stores strictly through custom PHP, CSS, and clean SQL queries. We strip out unnecessary plugins to guarantee rock-solid security and speed.',
    capabilities: [
      'Handcrafted lightweight WordPress themes with custom block schemas',
      'High-performance WooCommerce multi-currency eCommerce stores',
      'Custom plugin development for proprietary business logic & CRM sync',
      'Native WPML / Polylang deep multilingual database integration'
    ],
    idealFor: 'Content-heavy enterprises, eCommerce shops, and service brands wanting an intuitive CMS with custom speed.'
  },
  {
    id: 'laravel-codeigniter',
    title: 'Laravel & CodeIgniter Custom Frameworks',
    tagline: 'Robust enterprise backend architecture and mission-critical business logic',
    technologies: ['Laravel 11', 'CodeIgniter 4', 'MySQL / PostgreSQL', 'Redis Caching'],
    description: 'When off-the-shelf platforms fall short, our senior PHP architects build bespoke web applications using Laravel and CodeIgniter. We handle complex multi-tenant databases, API gateways, and custom workflows.',
    capabilities: [
      'Custom ERP, CRM, and billing systems with automated invoicing',
      'Secure RESTful and GraphQL API backends for web and mobile clients',
      'High-throughput queue workers, automated webhooks, and Redis caching',
      'Bank-grade authentication, role-based access control (RBAC), and audit logs'
    ],
    idealFor: 'Financial services, B2B wholesale portals, logistics, and healthcare platforms.'
  },
  {
    id: 'magento-ecommerce',
    title: 'Scalable Magento eCommerce Development',
    tagline: 'Enterprise-grade multi-storefront architecture for high-volume catalogs',
    technologies: ['Magento 2 Open Source', 'Adobe Commerce', 'Elasticsearch', 'Varnish Cache'],
    description: 'We develop and optimize Magento multi-language, multi-currency stores handling tens of thousands of SKUs. Our custom modules resolve checkout bottlenecks and integrate regional payment gateways.',
    capabilities: [
      'Multi-website and multi-store view setup for USA, EU, LATAM, and Middle East',
      'Custom module programming without touching Magento core code',
      'Sub-second search indexing with Elasticsearch and GraphQL endpoints',
      'Custom ERP/WMS inventory synchronization and automated tax engines'
    ],
    idealFor: 'Global retailers, manufacturers, and multi-country B2B/B2C catalog businesses.'
  },
  {
    id: 'custom-php',
    title: 'Custom PHP Frameworks & Microservices',
    tagline: 'Pure, custom-coded server architectures tailored to your exact business rules',
    technologies: ['Modern PHP 8+', 'OOP Architecture', 'Custom MVC', 'Dockerized Stacks'],
    description: 'No bloated dependencies. We write lean, object-oriented PHP code designed for maximum execution speed, zero vendor lock-in, and full architectural freedom for specialized business workflows.',
    capabilities: [
      'Proprietary calculation engines, price configurators, and quote estimators',
      'Legacy PHP migration and modern code refactoring with zero downtime',
      'Microservices architecture communicating via low-latency REST/JSON',
      'Ultra-strict memory footprints ensuring high concurrent visitor handling'
    ],
    idealFor: 'Unique business models, specialized algorithms, and legacy system modernization.'
  },
  {
    id: 'multilingual-rtl',
    title: 'Multilingual Localization & Bi-Directional (RTL) Engineering',
    tagline: 'Native Arabic RTL, European character encoding, and Hebrew UX precision',
    technologies: ['Bi-directional CSS', 'Unicode UTF-8mb4', 'hreflang Automation', 'GeoIP Routing'],
    description: 'Multilingual is in our DNA. We engineer complete linguistic parity: right-to-left layout inversion for Arabic and Hebrew, accent-safe typography for French and Spanish, and smart regional number/date formatting.',
    capabilities: [
      'Seamless RTL/LTR layout transitions with zero visual glitch or breakage',
      'Automated hreflang tagging and regional XML sitemap orchestration',
      'Dynamic geo-detection with manual user country & language override',
      'Culturally adapted checkout fields, phone masks, and address formats'
    ],
    idealFor: 'Any business selling across the USA, Latin America, Europe, Israel, and the Arab World.'
  }
];

export const SEO_SERVICES: MarketingService[] = [
  {
    id: 'seo-international',
    title: 'International Multilingual SEO & hreflang Architecture',
    code: '01. INT-SEO',
    tagline: 'Dominate Google rankings across multiple countries and languages simultaneously',
    description: 'We structure global domain architectures (ccTLDs, subdirectories, or subdomains), implement bulletproof hreflang tags, and optimize content for local search intent in 28+ languages.',
    features: [
      'Multi-region hreflang mapping with self-referencing cross-tagging',
      'Country-specific keyword research (e.g., Castilian Spanish vs Mexican Spanish)',
      'Server-side geo-targeting signals and Google Search Console multi-property setup',
      'Crawl budget optimization for large-scale multilingual eCommerce catalogs'
    ],
    languagesSupported: ['English', 'Spanish', 'French', 'German', 'Arabic', 'Hebrew', 'Portuguese'],
    kpi: '300%+ increase in international organic search visibility'
  },
  {
    id: 'seo-aeo',
    title: 'AEO (Answer Engine Optimization)',
    code: '02. AEO-PRO',
    tagline: 'Optimize your brand to be the direct, definitive answer in voice and AI search',
    description: 'Voice search and Google featured snippets prioritize direct answers. We reverse-engineer question intent and structure clear factual schemas so search engines select your business as the source.',
    features: [
      'Zero-click position and Google Featured Snippet conquest strategy',
      'FAQPage, HowTo, and Speakable structured data markup',
      'Conversational query mapping for Siri, Google Assistant, and voice devices',
      'Concise direct-answer content blocks engineered into landing pages'
    ],
    languagesSupported: ['Global coverage in target country languages'],
    kpi: 'Top-tier snippet capture and voice search dominance'
  },
  {
    id: 'seo-geo',
    title: 'GEO (Generative Engine Optimization)',
    code: '03. GEO-AI',
    tagline: 'Ensure your business is cited and recommended by AI search engines',
    description: 'Search is evolving to ChatGPT Search, Google Gemini Overviews, Perplexity, and Claude. We optimize your website authority, entity graph, and factual citations so generative models recommend your brand.',
    features: [
      'Knowledge Graph and entity semantic relationship clustering',
      'Brand citation footprint expansion across authoritative industry directories',
      'Statistical proof and factual consensus optimization for LLM ingest',
      'Continuous tracking of AI search citations and synthetic engine recommendations'
    ],
    languagesSupported: ['All target markets (USA, EU, LATAM, Middle East, Israel)'],
    kpi: 'Ranked in top AI summaries for commercial intent queries'
  },
  {
    id: 'seo-technical',
    title: 'Technical On-Page & Core Web Vitals Optimization',
    code: '04. TECH-SEO',
    tagline: 'Flawless site architecture, sub-second load times, and perfect crawlability',
    description: 'We audit and resolve technical debt: JavaScript rendering bottlenecks, render-blocking resources, mobile layout shifts, XML sitemaps, canonical tags, and internal link equity distribution.',
    features: [
      '95+ Google PageSpeed and Core Web Vitals (LCP, INP, CLS) scores',
      'Clean semantic HTML5 structure with strict heading hierarchies',
      'Mobile-first responsive accessibility audited against WCAG standards',
      'Custom robots.txt and sitemap index routing for multilingual assets'
    ],
    languagesSupported: ['Universal standard code optimization'],
    kpi: 'Sub-second page speeds and zero crawl errors'
  }
];

export const SMM_SERVICES = [
  {
    id: 'smm-cross-cultural',
    title: 'Multilingual Social Media Strategy',
    description: 'We craft localized social strategies tailored to the digital culture of each region — from LinkedIn B2B in the USA and Germany to WhatsApp & Instagram in LATAM, and TikTok & X in the GCC.',
    deliverables: ['Custom monthly content calendars', 'Cultural sensitivity reviews', 'Region-specific hashtags & trends']
  },
  {
    id: 'smm-video',
    title: 'Short-Form Video & Creative Production',
    description: 'Our creative studio produces high-converting Reels, TikToks, YouTube Shorts, and promo videos with native multilingual voiceovers, subtitles, and motion graphics.',
    deliverables: ['4K vertical video assets', 'Multilingual subtitle tracks', 'Hook-tested scripts in 6+ languages']
  },
  {
    id: 'smm-community',
    title: 'Native Community & Engagement Management',
    description: 'Our native-speaking community managers respond to comments, direct messages, and brand mentions in real-time in Spanish, French, German, Arabic, Hebrew, and English.',
    deliverables: ['24/7 localized inbox triage', 'Sentiment monitoring', 'Direct WhatsApp & CRM lead handoff']
  },
  {
    id: 'smm-influencer',
    title: 'Regional Influencer & Creator Partnerships',
    description: 'We vet, negotiate, and coordinate authentic creator partnerships in target countries to build trusted third-party validation and direct customer acquisition.',
    deliverables: ['Vetted regional creator roaster', 'Contract & compliance management', 'Trackable affiliate ROI links']
  }
];

export const PPC_SERVICES = [
  {
    id: 'ppc-google',
    title: 'Google Ads Multi-Region Search & Shopping',
    tagline: 'High-intent search capture across USA, Europe, Latin America, and Middle East',
    description: 'Target buyers at the exact moment of commercial search. We run granular, single-theme ad groups with native-language copy, negative keyword filters, and localized landing pages.',
    channels: ['Google Search', 'Performance Max (PMax)', 'Google Shopping', 'Display Remarketing']
  },
  {
    id: 'ppc-meta',
    title: 'Meta Ads (Facebook & Instagram) Global Funnels',
    tagline: 'Visual storytelling and hyper-targeted lead funnels for eCommerce & services',
    description: 'Full-funnel paid social campaigns using custom audience segmentation, lookalikes based on high-LTV customers, and dynamic multi-language catalog ads.',
    channels: ['Instagram Feed & Stories', 'Facebook Marketplace', 'WhatsApp Click-to-Chat Ads']
  },
  {
    id: 'ppc-linkedin',
    title: 'LinkedIn B2B Account-Based Marketing (ABM)',
    tagline: 'Direct pipeline generation targeting C-suite executives in USA, DACH, and Israel',
    description: 'Reach high-value decision-makers by job title, company size, and industry. Ideal for technology providers, medical equipment manufacturers, and corporate consultancies.',
    channels: ['Sponsored Content', 'Lead Gen Forms', 'InMail Sequences', 'Company Targeting']
  },
  {
    id: 'ppc-cro',
    title: 'Multilingual Landing Page CRO & Conversion Tracking',
    tagline: 'Turn international clicks into revenue with culturally calibrated landing pages',
    description: 'Traffic without conversion is wasted capital. We design, A/B test, and optimize custom multilingual landing pages with local trust badges, currencies, and payment methods.',
    channels: ['Google Tag Manager', 'Server-Side GA4', 'Heatmap Audits', 'A/B Split Testing']
  }
];

export const EMPOWERS_BY_COMPANIES = [
  { name: 'React JS', category: 'Frontend', logo: '⚛️' },
  { name: 'WordPress', category: 'CMS Engine', logo: '🌐' },
  { name: 'Laravel', category: 'Backend PHP', logo: '🔴' },
  { name: 'CodeIgniter', category: 'High-speed PHP', logo: '🔥' },
  { name: 'Magento', category: 'eCommerce', logo: '🟧' },
  { name: 'PHP 8.3', category: 'Core Language', logo: '🐘' },
  { name: 'Google Premier Partner', category: 'PPC & Search', logo: '🎯' },
  { name: 'Meta Business Partner', category: 'Paid Social', logo: '♾️' },
  { name: 'SEMrush Certified', category: 'SEO Intelligence', logo: '📊' },
  { name: 'Ahrefs Enterprise', category: 'Backlink Authority', logo: '📈' },
  { name: 'Cloudflare Enterprise', category: 'Global CDN & Security', logo: '🛡️' },
  { name: 'AWS Cloud Services', category: 'Infrastructure', logo: '☁️' }
];

export const RECENT_WORK_DONE: ProjectWork[] = [
  {
    id: 'work-1',
    title: 'Global MedTech B2B Direct Commerce',
    client: 'MedTech Global Direct',
    sector: 'eCommerce',
    country: 'USA / Germany / Switzerland',
    status: 'Completed',
    techStack: ['Laravel 11', 'React JS', 'PostgreSQL', 'Tailwind'],
    keyOutcome: '+340% organic inbound revenue, 0.62s sub-second global page loads',
    details: 'Custom multilingual B2B procurement platform with tiered volume pricing, country-specific VAT calculation, and multilingual documentation downloads.',
    liveUrlOrScope: 'Enterprise Catalog & Multi-Currency Engine'
  },
  {
    id: 'work-2',
    title: 'Al-Rayyan Luxury Real Estate & Private Office',
    client: 'Al-Rayyan International Realty',
    sector: 'Service',
    country: 'UAE / France / USA',
    status: 'Completed',
    techStack: ['WordPress Custom Theme', 'PHP 8.3', 'Bi-directional CSS', 'WhatsApp API'],
    keyOutcome: '$18.4M in international property inquiries generated',
    details: 'Bi-directional Arabic RTL and French/English luxury portal with instant currency conversion, high-res interactive virtual tours, and VIP WhatsApp concierge integration.',
    liveUrlOrScope: 'High-Net-Worth Advisory & Property Showcase'
  },
  {
    id: 'work-3',
    title: 'Solara Multilingual Apparel Retail Platform',
    client: 'Solara Lifestyle Brands',
    sector: 'eCommerce',
    country: 'Mexico / Brazil / USA',
    status: 'Completed',
    techStack: ['Magento 2', 'Custom PHP Extensions', 'Elasticsearch', 'MercadoPago'],
    keyOutcome: '+280% mobile orders across LATAM, 42% decrease in cart dropoff',
    details: 'High-performance Magento 2 multi-storefront with Portuguese and Spanish language views, localized payment gateways (Pix, Oxxo, Credit Card), and automated sizing converters.',
    liveUrlOrScope: 'Tri-Lingual Cross-Border Fashion Store'
  },
  {
    id: 'work-4',
    title: 'CyberSentry Security & Compliance Portal',
    client: 'CyberSentry Israel & US',
    sector: 'Service',
    country: 'Israel / USA (NYC)',
    status: 'Completed',
    techStack: ['CodeIgniter 4', 'React JS', 'Custom REST APIs', 'Tailwind'],
    keyOutcome: 'Ranked #1 for AI search citations and generated 140+ Fortune 500 audits',
    details: 'Bilingual Hebrew and English corporate portal with interactive compliance self-assessments, whitepaper gates, and targeted US enterprise lead generation.',
    liveUrlOrScope: 'Enterprise Cybersecurity Lead Engine'
  },
  {
    id: 'work-5',
    title: 'Alpine TransLogistics Fleet Management',
    client: 'Nordic TransLogistics',
    sector: 'Service',
    country: 'Poland / Germany / France',
    status: 'Completed',
    techStack: ['Custom PHP MVC', 'React Dashboard', 'PostgreSQL', 'Redis'],
    keyOutcome: '+220% search visibility in Central Europe, 12,000+ monthly route calculations',
    details: 'Custom-coded freight management portal with dynamic tariff calculations in EUR and PLN, multilingual customer portal, and automated invoice delivery.',
    liveUrlOrScope: 'European Freight Platform'
  }
];

export const PRESENT_WORK_DONE: ProjectWork[] = [
  {
    id: 'ongoing-1',
    title: 'Iberia Renewable Energy B2B Marketplace',
    client: 'Solaris Energy Group',
    sector: 'eCommerce',
    country: 'Spain / France / Portugal',
    status: 'Ongoing',
    techStack: ['Laravel 11', 'React JS', 'Stripe Multi-Currency', 'Elasticsearch'],
    keyOutcome: 'Beta phase: 120 wholesale renewable component distributors onboarding',
    details: 'Developing a multi-vendor solar & renewable energy parts marketplace supporting EUR, multi-tax calculations, and multilingual technical spec sheets.',
    liveUrlOrScope: 'Under Active Engineering — Sprint 7'
  },
  {
    id: 'ongoing-2',
    title: 'Gulf Healthcare Telemedicine & Clinic Network',
    client: 'Noor Health Systems',
    sector: 'Service',
    country: 'Saudi Arabia / UAE / Oman',
    status: 'Ongoing',
    techStack: ['WordPress Custom Architecture', 'PHP REST', 'RTL React UI', 'Twilio'],
    keyOutcome: 'Arabic/English bi-directional patient booking system ready for Q2 launch',
    details: 'Custom patient consultation booking platform with localized Arabic calendar pickers, SMS/WhatsApp confirmation automations, and HIPAA/MOH compliant storage.',
    liveUrlOrScope: 'Under Active Engineering — Sprint 5'
  },
  {
    id: 'ongoing-3',
    title: 'Andean Artisan Handcrafted Luxury Exports',
    client: 'Tejidos del Sol',
    sector: 'eCommerce',
    country: 'Peru / Colombia / USA',
    status: 'Ongoing',
    techStack: ['WooCommerce Custom Code', 'PHP 8.3', 'Next.js Frontend', 'DHL Express API'],
    keyOutcome: 'Live test phase: 99 PageSpeed index, direct shipping to USA & EU',
    details: 'Handcrafted luxury apparel and home decor eCommerce storefront connecting indigenous artisans directly with high-end buyers in New York and California.',
    liveUrlOrScope: 'Under Active Testing & SEO Seeding'
  },
  {
    id: 'ongoing-4',
    title: 'Tel Aviv BioTech Scientific Research Exchange',
    client: 'GenomeLink Tech',
    sector: 'Service',
    country: 'Israel / USA',
    status: 'Ongoing',
    techStack: ['React JS', 'Laravel API Gateway', 'PostgreSQL', 'Python Backend'],
    keyOutcome: 'Securing generative search (GEO) dominance for genomics keywords',
    details: 'Designing an interactive research portal for molecular biology laboratories with bilingual documentation, dataset downloads, and international patent showcases.',
    liveUrlOrScope: 'Under Active Development — Sprint 9'
  },
  {
    id: 'ongoing-5',
    title: 'New York Metro Premier Home Services Platform',
    client: 'Empire Pro Guild',
    sector: 'Service',
    country: 'USA (New York / New Jersey / Connecticut)',
    status: 'Ongoing',
    techStack: ['Custom PHP MVC', 'React Instant Booking', 'Twilio API', 'Google Local Maps'],
    keyOutcome: 'Geo-targeted hyper-local SEO covering 65 NY/NJ postal districts',
    details: 'Custom dispatch and real-time contractor booking system engineered for high-density metropolitan residential property managers and private homeowners.',
    liveUrlOrScope: 'Under Active Deployment'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Why Custom PHP and Laravel Beat Off-The-Shelf Plugins for Multilingual Web Speed',
    slug: 'custom-php-laravel-vs-plugins-multilingual-speed',
    excerpt: 'How excessive translation plugins bloat database queries, introduce layout shift, and kill Google Core Web Vitals — and how custom code guarantees sub-second page loads.',
    category: 'Custom Development',
    readTime: '6 min read',
    date: 'March 18, 2026',
    author: 'Arun, Founder of UDMIDEAS',
    tags: ['Custom Code', 'Laravel', 'Page Speed', 'Core Web Vitals'],
    content: [
      'In today’s global digital marketplace, speed is not merely a technical vanity metric; it is your primary conversion filter. When service and eCommerce businesses expand across the USA, Europe, Latin America, and the Middle East, their first impulse is often to install third-party translation plugins. Unfortunately, this creates massive performance bottlenecks.',
      'Most automated translation plugins duplicate posts, run unindexed database joins on every page request, and inject heavy JavaScript bundles that destroy Google Core Web Vitals (LCP and INP). When a prospective client in Paris, Frankfurt, or Dubai visits your site, they experience a jarring 3-to-4-second lag accompanied by broken layout shifts.',
      'At UDMIDEAS, our philosophy for 15+ years has been uncompromising: custom coding only. By engineering custom React, WordPress, Laravel, CodeIgniter, and Magento solutions, we separate linguistic strings from core database logic, utilize native database caching, and deliver pure, pre-rendered markup.',
      'The result? Sub-second loading times worldwide, zero cumulative layout shift (CLS), and seamless cross-border checkout experiences that convert international visitors into paying clients.'
    ]
  },
  {
    id: 'blog-2',
    title: 'Mastering Generative Engine Optimization (GEO): Ranking in ChatGPT, Perplexity & Gemini Search',
    slug: 'mastering-generative-engine-optimization-geo',
    excerpt: 'Traditional keyword stuffing is dead. Discover the exact semantic and entity graph frameworks needed to ensure generative AI search engines cite and recommend your business.',
    category: 'AEO & GEO',
    readTime: '8 min read',
    date: 'March 10, 2026',
    author: 'Multilingual SEO Team',
    tags: ['GEO', 'AI Search', 'Knowledge Graph', 'Entity SEO'],
    content: [
      'The search landscape is undergoing its most radical transformation in two decades. While traditional Google 10-blue-links still matter, millions of high-intent buyers now consult generative engines like ChatGPT Search, Google Gemini Overviews, and Perplexity to identify B2B service providers and eCommerce vendors.',
      'Generative Engine Optimization (GEO) does not rely on density of repetitive keywords. Instead, LLM search agents ingest authoritative facts, consensus citations, and structured schema graphs to construct concise recommendations.',
      'To earn citations in AI answer engines, your website must maintain verified Organization and LocalBusiness schema, explicit quantified performance claims (with timelines and outcomes), and clean semantic markup free of obfuscated scripts.',
      'UDMIDEAS structures your multilingual web architecture so AI crawlers parse your core value proposition effortlessly across English, Spanish, German, French, Arabic, and Hebrew.'
    ]
  },
  {
    id: 'blog-3',
    title: 'Bi-Directional Arabic (RTL) Web Design: Technical Rules for High-Conversion Middle Eastern Websites',
    slug: 'arabic-rtl-web-design-technical-rules',
    excerpt: 'Why mirrored graphics, inverted typography grids, and localized trust signals are critical when engineering digital platforms for the UAE, Saudi Arabia, Qatar, and Egypt.',
    category: 'Custom Development',
    readTime: '7 min read',
    date: 'February 26, 2026',
    author: 'Arun, Founder of UDMIDEAS',
    tags: ['Arabic RTL', 'GCC Marketing', 'Web Engineering', 'Bi-directional UI'],
    content: [
      'The Arab World represents one of the fastest-growing digital commerce and B2B service economies in the world, led by dynamic markets in the UAE, Saudi Arabia, and Qatar. Yet, over 80% of Western businesses fail to connect because they treat Arabic as a mere text translation.',
      'True Arabic web design requires bi-directional engineering: reversing the entire visual visual scan path from right to left (RTL). Breadcrumbs, pagination, iconography directions (such as forward and back arrows), form input fields, and pricing tables must mirror naturally to reflect native reading behavior.',
      'Furthermore, Arabic calligraphy and modern digital typography demand specialized line-height and letter-spacing considerations to avoid cramped, illegible characters.',
      'At UDMIDEAS, we code with modern CSS logical properties (`margin-inline-start`, `inset-inline-start`), guaranteeing flawless layout switches between English, Arabic, and French without a single layout bug.'
    ]
  },
  {
    id: 'blog-4',
    title: 'The Ultimate hreflang Playbook: Eliminating Duplicate Content Penalties Across Multi-Country SERPs',
    slug: 'ultimate-hreflang-playbook-multi-country-seo',
    excerpt: 'Step-by-step architecture for mapping regional English (US, UK, CA), regional Spanish (Mexico, Colombia, Spain), and European language variations without cannibalization.',
    category: 'Multilingual SEO',
    readTime: '9 min read',
    date: 'February 15, 2026',
    author: 'Multilingual SEO Team',
    tags: ['hreflang', 'International SEO', 'Technical Audits', 'Google SERP'],
    content: [
      'If your company operates across the United States, Latin America, and Europe, you may offer identical products or services tailored to different regional currencies and local terms. Without accurate hreflang implementation, search engines will flag your pages as duplicate content and suppress them.',
      'Common pitfalls include missing return tags, mismatched ISO country/language codes (e.g., using `en-UK` instead of `en-GB`), and serving localized content behind client-side JavaScript redirect walls that search bots cannot crawl.',
      'We outline how UDMIDEAS builds automated XML hreflang sitemaps directly into your custom backend, ensuring Google correctly serves the New York page to American visitors and the Madrid page to Spanish buyers.'
    ]
  },
  {
    id: 'blog-5',
    title: 'Scaling Cross-Border eCommerce: Combining Custom Magento and High-ROI Google Shopping',
    slug: 'scaling-cross-border-ecommerce-magento-google-shopping',
    excerpt: 'How high-volume retailers manage multi-currency feeds, automated currency conversions, and geo-targeted PPC campaigns that consistently deliver 4x+ ROAS.',
    category: 'eCommerce Architecture',
    readTime: '8 min read',
    date: 'January 28, 2026',
    author: 'eCommerce & PPC Strategy Team',
    tags: ['Magento', 'Google Shopping', 'Cross-Border', 'ROAS'],
    content: [
      'Selling across international borders is more than translating product descriptions. You must solve currency volatility, localized taxes, international shipping transparency, and country-specific payment methods like Pix in Brazil, iDEAL in the Netherlands, and Apple Pay in the US.',
      'By pairing a custom-tuned Magento 2 backend with granular Google Shopping product feeds, our clients eliminate checkout drop-offs and achieve sustained commercial growth across USA, LATAM, and EU territories.'
    ]
  },
  {
    id: 'blog-6',
    title: 'Answer Engine Optimization (AEO): How to Capture Position Zero and Voice Search Queries',
    slug: 'answer-engine-optimization-position-zero',
    excerpt: 'Structuring FAQ schema, speakable snippets, and direct informational hierarchies to dominate Siri, Alexa, and Google Assistant search prompts.',
    category: 'AEO & GEO',
    readTime: '5 min read',
    date: 'January 14, 2026',
    author: 'Multilingual SEO Team',
    tags: ['AEO', 'Voice Search', 'Schema Markup', 'Position Zero'],
    content: [
      'Voice queries are fundamentally conversational. When a business owner in Miami or Frankfurt asks, "What is the best custom web development agency for multilingual eCommerce?", the voice engine reads only one answer.',
      'We reveal the 3-step framework UDMIDEAS uses to capture Google Position Zero: concise 45-word answers, bulleted procedure schemas, and nested JSON-LD structured data.'
    ]
  },
  {
    id: 'blog-7',
    title: '15 Years of Digital Marketing Evolution: What Works in 2026 for B2B Lead Generation',
    slug: '15-years-digital-marketing-evolution-b2b-leads',
    excerpt: 'Founder Arun reflects on 15+ years of digital marketing history — from early Google AdWords to generative AI engines, and what remains true about human conversion psychology.',
    category: 'PPC & Growth',
    readTime: '7 min read',
    date: 'January 05, 2026',
    author: 'Arun, Founder of UDMIDEAS',
    tags: ['Founder Insights', 'B2B Marketing', 'Lead Generation', 'Conversion Strategy'],
    content: [
      'When I founded UDMIDEAS over 15 years ago in the USA, digital marketing was simpler: buy a few targeted AdWords keywords, publish basic pages, and the phone would ring.',
      'Today, B2B buyers in New York, London, Tel Aviv, and Dubai conduct 80% of their vendor research before ever speaking to a sales representative. They read case studies, verify code speed, test mobile responsiveness, and consult AI summary tools.',
      'What has not changed in 15 years is the supreme value of authentic craftsmanship. When a business invests in bespoke, clean-coded infrastructure and honest, culturally resonant marketing, it consistently beats competitors who cut corners with generic templates.'
    ]
  },
  {
    id: 'blog-8',
    title: 'International SMM: Why Translating English Social Posts Fails in European & LATAM Markets',
    slug: 'international-smm-cultural-localization-vs-translation',
    excerpt: 'Humor, visual aesthetics, and purchasing urgency differ widely across France, Germany, Mexico, and Brazil. How native creators drive 300% more engagement.',
    category: 'PPC & Growth',
    readTime: '6 min read',
    date: 'December 20, 2025',
    author: 'Creative SMM Team',
    tags: ['SMM', 'Social Media', 'LATAM', 'European Marketing'],
    content: [
      'Direct machine translation of American marketing slogans often creates confusion or embarrassment in European and Latin American markets. What works on TikTok in California may fail completely on LinkedIn in Germany or Instagram in Colombia.',
      'Our dedicated team of native multilingual SMM strategists builds custom content calendars that embrace local holidays, cultural idioms, and native visual aesthetics.'
    ]
  },
  {
    id: 'blog-9',
    title: 'Custom CodeIgniter & Laravel for High-Concurrency B2B Portals',
    slug: 'custom-codeigniter-laravel-high-concurrency-b2b',
    excerpt: 'Managing millions of database queries with lightweight PHP frameworks without paying exorbitant cloud server infrastructure bills.',
    category: 'Custom Development',
    readTime: '7 min read',
    date: 'December 08, 2025',
    author: 'Engineering Architecture Team',
    tags: ['CodeIgniter', 'Laravel', 'Database Optimization', 'High Traffic'],
    content: [
      'When thousands of wholesale buyers submit bulk quotes simultaneously, typical heavy CMS platforms buckle under the database load. Learn how UDMIDEAS uses custom CodeIgniter and Laravel architectures to deliver 50ms database responses and effortless scaling.'
    ]
  },
  {
    id: 'blog-10',
    title: 'The High-Value Israeli Tech Ecosystem: Building Cross-Border Web Solutions with Tel Aviv',
    slug: 'israeli-tech-cross-border-web-solutions-tel-aviv',
    excerpt: 'Bridging Silicon Valley and Start-Up Nation: Technical considerations for bilingual Hebrew/English platforms, cybersecurity standards, and rapid MVP iterations.',
    category: 'Custom Development',
    readTime: '6 min read',
    date: 'November 22, 2025',
    author: 'Arun, Founder of UDMIDEAS',
    tags: ['Israel Tech', 'Bilingual Platforms', 'Cybersecurity', 'Tel Aviv'],
    content: [
      'Israel’s technology sector demands lightning speed, flawless security, and sharp bilingual Hebrew and English execution. We examine how UDMIDEAS helps tech firms in Tel Aviv, Jerusalem, and Haifa scale their digital footprint into North American and European markets.'
    ]
  },
  {
    id: 'blog-11',
    title: 'Google Ads Multi-Region Budget Allocation: Maximizing Global ROAS Across 5 Currencies',
    slug: 'google-ads-multi-region-budget-allocation',
    excerpt: 'How to structure international Google Ads campaigns, avoid automated currency conversion dilution, and leverage geo-fenced bid adjustments.',
    category: 'PPC & Growth',
    readTime: '8 min read',
    date: 'November 10, 2025',
    author: 'International PPC Strategist',
    tags: ['Google Ads', 'PPC', 'Budget Allocation', 'Global ROAS'],
    content: [
      'Splitting your ad spend evenly across different countries is a guaranteed recipe for poor ROI. Purchasing power, CPCs, and customer lifetime value vary dramatically between New York, Paris, Bogotá, and Riyadh. We share our mathematical budget pacing framework.'
    ]
  },
  {
    id: 'blog-12',
    title: 'Video Creation for Global Audiences: Hook Rates and Retention in Multilingual Campaigns',
    slug: 'video-creation-global-audiences-hook-rates',
    excerpt: 'Crafting 3-second visual hooks, multilingual dynamic captions, and cultural pacing that stop the scroll in 12 different countries.',
    category: 'PPC & Growth',
    readTime: '5 min read',
    date: 'October 29, 2025',
    author: 'Creative Video Director',
    tags: ['Video Creation', 'Short Form Video', 'Creative Strategy', 'Reels & TikTok'],
    content: [
      'Over 75% of social media video is consumed with the sound muted. In cross-border advertising, high-contrast multilingual kinetic captions, culturally resonant color grading, and rapid pacing are essential to lower your cost-per-acquisition (CPA).'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Arun',
    role: 'Founder & Principal Architect',
    location: 'United States (Headquarters)',
    experience: '15+ Years Industry Leadership',
    bio: 'Pioneering custom multilingual web engineering and data-driven international digital marketing since 2010. Arun spearheads technical architecture, enterprise client consulting, and global execution across USA, Europe, Latin America, Israel, and the Arab World.',
    languages: ['English', 'Hindi', 'Strategic Multilingual Architecture'],
    specialty: 'Enterprise Architecture, Custom PHP/Laravel/React, Global SEO & CRO'
  },
  {
    name: 'Elena Rostova',
    role: 'Head of Multilingual SEO & AEO/GEO',
    location: 'Global Hub (Europe & Americas)',
    experience: '11+ Years Experience',
    bio: 'Specialist in international hreflang architectures, multi-country indexation, and cutting-edge Generative Engine Optimization (GEO) ensuring top citations in AI search models.',
    languages: ['English', 'German', 'Russian', 'French'],
    specialty: 'International SERP Dominance, Schema Clustering, AI Search Engine Optimization'
  },
  {
    name: 'Carlos Mendez',
    role: 'Lead Full-Stack React & PHP Architect',
    location: 'Americas Hub',
    experience: '12+ Years Experience',
    bio: 'Custom programming maestro mastering React JS, CodeIgniter, Laravel, and Magento. Believes in zero bloat, hand-crafted code, and sub-second page performance.',
    languages: ['Spanish', 'English', 'Portuguese'],
    specialty: 'React JS, Headless Commerce, Custom Frameworks & High-Throughput APIs'
  },
  {
    name: 'Nadia El-Husseini',
    role: 'Director of Middle East & Arabic Localization',
    location: 'MENA Hub (Dubai & Riyadh)',
    experience: '9+ Years Experience',
    bio: 'Directs Arabic right-to-left (RTL) UX design, culturally calibrated SMM, and regional PPC execution across the UAE, Saudi Arabia, Qatar, and Gulf region.',
    languages: ['Arabic (Native)', 'English', 'French'],
    specialty: 'RTL Bi-directional Engineering, GCC Paid Search, Cross-Cultural Branding'
  },
  {
    name: 'Marcus Vance',
    role: 'Senior International PPC & Growth Director',
    location: 'USA Hub (New York)',
    experience: '10+ Years Experience',
    bio: 'Manages multi-million dollar ad spend across Google Search, Performance Max, Meta Ads, and LinkedIn B2B funnels with obsessive focus on bottom-line ROAS.',
    languages: ['English', 'Conversational Spanish'],
    specialty: 'High-ROAS Google & Meta Ads, B2B Account-Based Marketing, Global CRO'
  },
  {
    name: 'Amir Sharon',
    role: 'Lead Technical Consultant - Israel & EMEA',
    location: 'Tel Aviv Hub',
    experience: '8+ Years Experience',
    bio: 'Connects high-growth Israeli tech startups and cybersecurity firms with North American enterprise buyers through custom web platforms and targeted demand generation.',
    languages: ['Hebrew (Native)', 'English'],
    specialty: 'Enterprise SaaS Web Engineering, Bilingual Systems, Technical B2B Content'
  }
];

export const REGIONAL_MARKETS: Record<string, RegionInfo> = {
  'USA': {
    name: 'United States of America',
    category: 'USA',
    flag: '🇺🇸',
    primaryLanguages: ['English', 'Spanish'],
    marketHighlights: 'Headquartered in New York, NY 10001. We deliver high-performance custom website design, local & national SEO, AEO, and multi-state PPC campaigns across all 50 states.',
    topServices: ['Custom React & Laravel Development', 'USA National & Local SEO', 'Google Ads & LinkedIn B2B ABM', 'Generative Engine Optimization (GEO)'],
    sampleClientsCount: 450
  },
  'LATAM': {
    name: 'Latin American Countries (LATAM)',
    category: 'LATAM',
    flag: '🌎',
    primaryLanguages: ['Spanish', 'Portuguese'],
    marketHighlights: 'Empowering service and eCommerce businesses across Brazil, Mexico, Colombia, Argentina, Chile, and Central America with localized payment gateways, mobile-first speed, and WhatsApp commerce.',
    topServices: ['Multilingual Spanish/Portuguese eCommerce', 'MercadoPago & Pix Integrations', 'Meta Ads & WhatsApp Funnels', 'LATAM Regional SEO'],
    sampleClientsCount: 280
  },
  'EU': {
    name: 'European Union (France, Germany, Spain, Switzerland, Poland)',
    category: 'EU',
    flag: '🇪🇺',
    primaryLanguages: ['French', 'German', 'Spanish', 'Polish', 'English'],
    marketHighlights: 'Engineering fully GDPR-compliant, high-speed multilingual websites and search campaigns tailored to strict European privacy and regional search habits in DACH, France, Spain, and Poland.',
    topServices: ['GDPR-Compliant Custom Web Design', 'Multi-country hreflang SEO', 'DACH & French Market B2B SEO', 'Multi-Currency WooCommerce/Magento'],
    sampleClientsCount: 320
  },
  'Arabic': {
    name: 'Arabic World & GCC (UAE, Saudi Arabia, Qatar, Oman, Egypt, etc.)',
    category: 'Arabic',
    flag: '🌍',
    primaryLanguages: ['Arabic (RTL)', 'English'],
    marketHighlights: 'Mastery of true bi-directional Right-to-Left (RTL) web engineering, native Arabic typography, and culturally resonant digital marketing across Dubai, Riyadh, Doha, and the greater MENA region.',
    topServices: ['Bi-directional (RTL) Custom Web Engineering', 'Arabic GCC PPC & Google Ads', 'Multilingual Video & SMM Production', 'Middle East Luxury Portal Development'],
    sampleClientsCount: 210
  },
  'Israel': {
    name: 'Israel (Tel Aviv, Jerusalem, Haifa)',
    category: 'Israel',
    flag: '🇮🇱',
    primaryLanguages: ['Hebrew', 'English'],
    marketHighlights: 'Bilingual Hebrew and English web solutions engineered for Israel’s dynamic high-tech, cybersecurity, and medical innovations looking to scale into North America and global markets.',
    topServices: ['Bilingual Hebrew/English React Portals', 'Cross-Border Tech Lead Generation', 'AEO & Generative Engine Optimization', 'High-Security Web Architectures'],
    sampleClientsCount: 95
  }
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Custom Engineering',
    question: 'Why does UDMIDEAS strictly build websites using custom coding rather than WordPress templates or drag-and-drop page builders?',
    answer: 'Pre-made commercial templates and visual page builders (such as Elementor, Divi, or generic themes) suffer from severe DOM bloat, redundant JavaScript libraries, render-blocking CSS, and persistent database overhead. When expanding into multilingual environments across USA, Europe, LATAM, and the Middle East, these templates break down under bi-directional RTL logic and fail Google Core Web Vitals (LCP, INP, and CLS). At UDMIDEAS, our 15+ year philosophy is custom coding only: every layout, query, and interaction is handcrafted in clean React, WordPress PHP, Laravel, CodeIgniter, or Magento, guaranteeing sub-second load times, military-grade security, and 100% architectural independence.'
  },
  {
    id: 'faq-2',
    category: 'Custom Engineering',
    question: 'Which specific frameworks and programming stacks do you specialize in?',
    answer: 'We architect bespoke solutions across six core engineering stacks: (1) React JS for ultra-responsive headless web applications and interactive client portals; (2) Custom WordPress & WooCommerce coded strictly via custom PHP and clean block schemas without third-party page builders; (3) Laravel 11 for high-throughput enterprise backends, custom APIs, and multi-tenant architectures; (4) CodeIgniter 4 for ultra-lightweight, 40ms microsecond execution environments; (5) Magento 2 Open Source & Adobe Commerce for high-volume, multi-currency eCommerce catalogs; and (6) Custom OOP PHP frameworks designed for proprietary computational workflows.'
  },
  {
    id: 'faq-3',
    category: 'Global Markets & Process',
    question: 'Who is Arun, and what is his role in client engagements at UDMIDEAS?',
    answer: 'Arun is the Founder and Principal Solutions Architect of UDMIDEAS. With more than 15 years of hands-on experience in global software engineering, international SEO, and multi-million dollar performance marketing, Arun personally conducts discovery audits, reviews architectural blueprints, and oversees cross-border deployments for our service-based and eCommerce enterprise clients from our USA headquarters.'
  },
  {
    id: 'faq-4',
    category: 'Global Markets & Process',
    question: 'Where is UDMIDEAS located, and do you serve all states across the USA?',
    answer: 'UDMIDEAS is headquartered in the United States in Midtown Manhattan, New York, NY 10001 (located at 350 5th Avenue). While anchored in New York, we actively engineer custom websites, local SEO footprints, and targeted PPC acquisition funnels across all 50 US states, with marquee clientele in New York, California, Texas, Florida, Illinois, Pennsylvania, Ohio, Georgia, North Carolina, and Washington.'
  },
  {
    id: 'faq-5',
    category: 'Multilingual SEO & GEO',
    question: 'How do you engineer multilingual SEO and hreflang architecture to prevent duplicate content penalties?',
    answer: 'We design complete international URL taxonomies (subdirectories like /es/, /de/, /fr/, /ar/ or distinct ccTLDs) paired with automated, bidirectional hreflang XML sitemaps and HTTP header tags. We map regional linguistic variations—such as distinguishing Castilian Spanish (es-ES) from Mexican Spanish (es-MX), or Swiss German (de-CH) from German (de-DE). By pre-rendering clean server-side HTML and eliminating client-side JavaScript redirect walls, search engine crawlers index every localized regional page seamlessly.'
  },
  {
    id: 'faq-6',
    category: 'Multilingual SEO & GEO',
    question: 'What is AEO (Answer Engine Optimization), and how does it help service businesses capture voice search queries?',
    answer: 'Answer Engine Optimization (AEO) structures your content so that search algorithms and voice assistants (Google Assistant, Siri, Alexa) cite your business as the definitive, single-source answer. We reverse-engineer question intent, craft 40-to-50 word direct-answer summaries, embed Speakable and FAQPage schema graphs, and format procedural lists that consistently win Google Featured Snippets (Position Zero) across competitive metropolitan areas.'
  },
  {
    id: 'faq-7',
    category: 'Multilingual SEO & GEO',
    question: 'What is Generative Engine Optimization (GEO), and how do you optimize brands for ChatGPT, Perplexity, and Google Gemini Search?',
    answer: 'Generative Engine Optimization (GEO) is the modern discipline of structuring web content so that large language models (LLMs) and synthetic search engines like ChatGPT Search, Perplexity AI, Claude, and Google Gemini cite and recommend your company. Rather than relying on repetitive keyword density, GEO focuses on establishing deep Knowledge Graph entities, publishing verified statistical claims with explicit outcomes, earning citations in authoritative industry databases, and using nested JSON-LD schema graphs that AI crawlers effortlessly ingest.'
  },
  {
    id: 'faq-8',
    category: 'Custom Engineering',
    question: 'How do you implement Right-to-Left (RTL) bi-directional web engineering for Arabic and Hebrew markets?',
    answer: 'Unlike amateur agencies that simply mirror text or rely on automated translation widgets, UDMIDEAS engineers true bi-directional layouts using modern CSS logical properties (such as margin-inline-start, padding-inline-end, and inset-inline). We mirror the entire visual scanning path: navigation bars, form inputs, pagination, breadcrumbs, and directional iconography are adapted so that native Arabic and Hebrew readers experience intuitive, natural layout flow with zero horizontal layout shift or broken UI components.'
  },
  {
    id: 'faq-9',
    category: 'Global Markets & Process',
    question: 'Which specific Latin American (LATAM) countries do you support, and how do you handle local payment gateways?',
    answer: 'We provide specialized multilingual web development and digital marketing throughout Latin America, including Brazil, Mexico, Colombia, Argentina, Chile, Peru, Ecuador, Costa Rica, Panama, Uruguay, Guatemala, and the Dominican Republic. Crucially for eCommerce clients, we build native custom integrations with regional payment favorites including Pix and Boleto in Brazil, Oxxo Pay in Mexico, MercadoPago across South America, and localized multi-currency checkouts via Stripe and PayU.'
  },
  {
    id: 'faq-10',
    category: 'Global Markets & Process',
    question: 'How does UDMIDEAS ensure European websites comply with GDPR and local data privacy laws in France, Germany, and Spain?',
    answer: 'We engineer zero-cookie-leak architecture compliant with the European Union General Data Protection Regulation (GDPR), the French CNIL guidelines, and the German Telecommunications-Telemedia Data Protection Act (TTDSG). We build custom, lightweight consent management interfaces that prevent third-party tracking scripts (Google Analytics 4, Meta Pixel) from executing until explicit user opt-in is granted, coupled with self-hosted fonts and server-side anonymization.'
  },
  {
    id: 'faq-11',
    category: 'Custom Engineering',
    question: 'What specialized services do you provide for high-tech, cybersecurity, and medical firms in Israel?',
    answer: 'For companies in Tel Aviv, Jerusalem, and Haifa, we develop bilingual Hebrew and English platforms engineered to bridge the Israeli tech corridor with North American and European enterprise buyers. We construct high-security CodeIgniter and React web architectures, technical B2B whitepaper lead gates, and run targeted AEO/GEO campaigns that position Israeli cybersecurity, fintech, and biotech innovations in front of Fortune 500 decision-makers.'
  },
  {
    id: 'faq-12',
    category: 'PPC & SMM',
    question: 'What channels are included in your multilingual Pay-Per-Click (PPC) and paid media management services?',
    answer: 'Our PPC practice manages full-funnel acquisition across Google Search, Performance Max (PMax), Google Shopping, YouTube Video Ads, Meta Ads (Facebook & Instagram), and LinkedIn B2B Account-Based Marketing (ABM). Every campaign features culturally translated ad copy written by native speakers, geo-fenced negative keyword lists, local currency bidding, and custom-coded multilingual landing pages optimized for high conversion rates (CRO).'
  },
  {
    id: 'faq-13',
    category: 'PPC & SMM',
    question: 'How does your multilingual Social Media Marketing (SMM) and video creation process work?',
    answer: 'We operate an in-house creative production studio that writes, produces, and edits high-engagement 4K vertical video assets (Reels, TikToks, Shorts) with native multilingual voiceovers and kinetic on-screen captions. Our dedicated native community managers provide 24/7 engagement moderation across English, Spanish, French, German, Arabic, and Hebrew, ensuring brand inquiries are answered in real time and warm leads are routed directly to your sales pipeline.'
  },
  {
    id: 'faq-14',
    category: 'Custom Engineering',
    question: 'Can you handle high-traffic, high-SKU enterprise eCommerce catalogs on Magento and WooCommerce?',
    answer: 'Yes. We routinely engineer Magento 2 and WooCommerce stores supporting 50,000+ SKUs with sub-second catalog search powered by Elasticsearch. By using decoupled headless frontends in React, Redis object caching, and database query profiling, we eliminate sluggish page loads during peak Black Friday, Cyber Monday, and Ramadan shopping seasons.'
  },
  {
    id: 'faq-15',
    category: 'Custom Engineering',
    question: 'How do you guarantee sub-second page load times and 95+ Core Web Vitals scores?',
    answer: 'We achieve industry-leading Core Web Vitals (Largest Contentful Paint < 1.0s, Interaction to Next Paint < 100ms, Cumulative Layout Shift 0.00) through zero-bloat custom coding: modular asset bundling, modern WebP/AVIF image compression, server-side caching, critical CSS inlining, font subsetting for Latin, Arabic, and Hebrew glyphs, and global edge delivery via Cloudflare Enterprise CDN.'
  },
  {
    id: 'faq-16',
    category: 'Global Markets & Process',
    question: 'How can I connect with Founder Arun or the team on WhatsApp, and what is your direct number?',
    answer: 'You can connect directly with Founder Arun and our senior multilingual architects via WhatsApp at +91-9521186150. You can also click any of the green WhatsApp buttons across our website or use the persistent floating button in the bottom-right corner for immediate project inquiries, technical scoping, and preliminary audits.'
  },
  {
    id: 'faq-17',
    category: 'Global Markets & Process',
    question: 'Do you work with both service-based businesses and eCommerce businesses?',
    answer: 'Yes. For service businesses (healthcare practices, luxury real estate, legal advisories, logistics providers, and B2B SaaS), we build high-converting lead generation engines, automated booking calendars, and multilingual quote calculators. For eCommerce brands (fashion, medical supplies, electronics, specialty retail), we construct multi-currency storefronts, localized payment checkouts, and international Google Shopping feeds.'
  },
  {
    id: 'faq-18',
    category: 'Global Markets & Process',
    question: 'What is the typical project timeline and development process for a custom multilingual website?',
    answer: 'A standard bespoke multilingual web project spans 8 to 14 weeks from initial architecture to global launch: Phase 1 (Weeks 1–2): Discovery, technical specifications, and international SEO keyword blueprint. Phase 2 (Weeks 3–6): Custom backend engineering (Laravel, CodeIgniter, WordPress, or Magento) and multilingual database schema. Phase 3 (Weeks 7–10): Responsive frontend development in React/Tailwind with LTR/RTL verification. Phase 4 (Weeks 11–12): Technical QA, Core Web Vitals optimization, hreflang validation, and multi-country deployment.'
  },
  {
    id: 'faq-19',
    category: 'Global Markets & Process',
    question: 'Does the client own 100% of the custom source code and marketing ad accounts upon completion?',
    answer: 'Yes, absolutely. UDMIDEAS guarantees 100% full intellectual property ownership. All custom source code, Git repositories, database schemas, graphics, and video assets are transferred entirely to you with zero ongoing license fees or vendor lock-in. Furthermore, all Google Ads, Meta Ads, and analytics accounts are established directly under your ownership with full administrative access.'
  },
  {
    id: 'faq-20',
    category: 'Global Markets & Process',
    question: 'How do I get started with a free multilingual strategy audit or discovery consultation with UDMIDEAS?',
    answer: 'Getting started is effortless. Click the "Request Multilingual Audit" button in our hero section, fill out our quick consultation form, or message Founder Arun directly on WhatsApp at +91-9521186150. Our technical team will review your existing website, assess your international competitor landscape in your target countries, and prepare a customized architectural and growth roadmap within 24 hours.'
  }
];
