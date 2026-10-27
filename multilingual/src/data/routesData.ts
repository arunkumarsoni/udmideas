export interface PageSEO {
  path: string;
  title: string;
  description: string;
  kicker: string;
  heading: string;
  subheading: string;
  category: 'core' | 'service' | 'usa-state' | 'eu-country' | 'arabic-country' | 'region' | 'legal' | 'blog' | 'case-study';
  canonicalUrl: string;
  schemaType: string;
  keyHighlights: string[];
  features: { title: string; desc: string }[];
  languages: string[];
  faq: { q: string; a: string }[];
}

export const CANONICAL_BASE = 'https://udmideas.com';

export const ALL_PAGES: Record<string, PageSEO> = {
  '/about-us/': {
    path: '/about-us/',
    title: 'About Us | UDMIDEAS - 15+ Years Custom Web & Multilingual Growth',
    description: 'Learn about UDMIDEAS, founded by Arun with USA headquarters in New York NY 10001. 15+ years engineering custom React, WordPress, Laravel, and Magento solutions with multilingual SEO.',
    kicker: 'Heritage & Vision',
    heading: 'About UDMIDEAS: 15+ Years of Custom Code & Global Growth.',
    subheading: 'Headquartered in New York, NY 10001, UDMIDEAS is an elite digital engineering agency founded by Arun. We reject bloated templates and off-the-shelf page builders in favor of handcrafted code and cross-border digital dominance.',
    category: 'core',
    canonicalUrl: `${CANONICAL_BASE}/about-us/`,
    schemaType: 'AboutPage',
    keyHighlights: [
      '15+ Years of Proven Agency Track Record across North America, Europe, LATAM, and Middle East',
      'Founder-Led Engineering by Arun with Headquarters in Midtown Manhattan, New York, NY 10001',
      '100% Custom Coding Only: React JS, WordPress, CodeIgniter, Laravel, Magento, PHP',
      'Dedicated In-House Teams for Multilingual SEO, AEO, GEO, SMM, and Cross-Border PPC'
    ],
    features: [
      { title: 'Custom Coding Philosophy', desc: 'Zero page builders or bloated third-party plugins. Every layout and database query is crafted for maximum speed and security.' },
      { title: 'Multilingual Native DNA', desc: 'Deep bi-directional RTL support for Arabic and Hebrew, plus native fluency across European and Latin American regional dialects.' },
      { title: 'USA Headquarters (NYC 10001)', desc: 'Client executive briefing center located at 350 5th Ave, New York, serving clients in all 50 states and international hubs.' },
      { title: 'Direct Founder Access', desc: 'Arun personally scopes enterprise architectures and guarantees 4-hour communication turnarounds via WhatsApp and direct hotline.' }
    ],
    languages: ['English', 'Spanish', 'French', 'German', 'Arabic', 'Hebrew'],
    faq: [
      { q: 'Who is Arun?', a: 'Arun is the Founder and Principal Solutions Architect of UDMIDEAS with over 15 years of industry leadership.' },
      { q: 'Where are you based?', a: 'We are based in Midtown Manhattan, New York, NY 10001, United States.' }
    ]
  },
  '/team/': {
    path: '/team/',
    title: 'Our Dedicated Team | Arun & Multilingual Experts | UDMIDEAS',
    description: 'Meet the executive team at UDMIDEAS led by Founder Arun. Dedicated full-stack developers, multilingual SEO masters, AEO/GEO analysts, and senior PPC media buyers.',
    kicker: 'Our People',
    heading: 'Meet Founder Arun & The UDMIDEAS Multilingual Team.',
    subheading: 'A dedicated group of senior software architects, native-speaking SEO strategists, and performance media buyers managing cross-border digital expansion.',
    category: 'core',
    canonicalUrl: `${CANONICAL_BASE}/team/`,
    schemaType: 'AboutPage',
    keyHighlights: [
      'Founder Arun: 15+ years directing enterprise web architecture and global acquisition',
      'Dedicated Multilingual SEO & AEO/GEO Engineers for international search dominance',
      'Full-Stack React, Laravel, and Magento engineers delivering sub-second experiences',
      'Cross-Cultural SMM and Video Production teams operating across 28+ languages'
    ],
    features: [
      { title: 'Executive Architecture Lead', desc: 'Direct strategy consulting with Founder Arun for high-value enterprise and eCommerce solutions.' },
      { title: 'Native Linguistic Specialists', desc: 'In-house content strategists and community managers fluent in Arabic, Hebrew, German, French, and Spanish.' },
      { title: 'Certified Ad Strategists', desc: 'Google Premier and Meta certified media buyers managing multi-million dollar international budgets.' },
      { title: '24/7 Global Delivery', desc: 'Synchronized operational hubs in the USA, Europe, and the Middle East ensuring zero timezone lag.' }
    ],
    languages: ['English', 'Spanish', 'French', 'German', 'Arabic', 'Hebrew', 'Portuguese'],
    faq: [
      { q: 'Can I speak directly with Arun?', a: 'Yes! Arun connects directly with all prospective enterprise and eCommerce clients via WhatsApp (+91-9521186150) and scheduled video calls.' }
    ]
  },
  '/services/': {
    path: '/services/',
    title: 'Custom Web Design & Multilingual Marketing Services | UDMIDEAS',
    description: 'Explore comprehensive web design, custom development (React, WordPress, Laravel, Magento), and digital marketing (SEO, AEO, GEO, SMM, PPC) services by UDMIDEAS.',
    kicker: 'Full-Service Suite',
    heading: 'Custom Web Engineering & Multilingual Digital Marketing.',
    subheading: 'From custom-coded web architectures that achieve sub-second speeds to full-funnel digital marketing driving international qualified leads.',
    category: 'core',
    canonicalUrl: `${CANONICAL_BASE}/services/`,
    schemaType: 'Service',
    keyHighlights: [
      'Bespoke Web Development: React, WordPress, CodeIgniter, Laravel, Magento, PHP',
      'International Multilingual SEO & hreflang multi-region indexing',
      'AEO (Answer Engine Optimization) & GEO (Generative AI search optimization)',
      'High-ROAS Google Search, Shopping, Meta Ads, and LinkedIn B2B funnels'
    ],
    features: [
      { title: 'Website Design & Development', desc: '100% custom coding tailored to your business logic with zero bloated templates.' },
      { title: 'Digital Marketing & Growth', desc: 'Data-backed search optimization, social campaigns, and performance advertising.' },
      { title: 'AEO & Generative Engine SEO', desc: 'Ensuring your business is cited by ChatGPT, Perplexity, and voice assistants.' },
      { title: 'Bi-Directional RTL Engineering', desc: 'Authentic Arabic and Hebrew layouts built with CSS logical properties.' }
    ],
    languages: ['All 28+ supported languages'],
    faq: [
      { q: 'Do you offer combined development and marketing packages?', a: 'Yes. Most of our enterprise clients leverage our unified custom code architecture paired with dedicated multilingual SEO and PPC retainers.' }
    ]
  },
  '/blog/': {
    path: '/blog/',
    title: 'UDMIDEAS Blog | Multilingual Web Engineering & SEO Insights',
    description: 'Technical articles and guides by Arun and the UDMIDEAS team covering custom React, Laravel, international SEO, AEO, GEO, and cross-border eCommerce scaling.',
    kicker: 'Knowledge Base',
    heading: 'UDMIDEAS Engineering & Multilingual Growth Articles.',
    subheading: 'Read in-depth case analyses, code architectures, and strategic playbooks on dominating international search engines, AI search engines, and multi-currency commerce.',
    category: 'core',
    canonicalUrl: `${CANONICAL_BASE}/blog/`,
    schemaType: 'Blog',
    keyHighlights: [
      '12+ Technical Articles authored by Founder Arun and senior engineering leads',
      'Deep dives into Custom Code vs Plugins, hreflang orchestration, and AEO/GEO',
      'Real-world blueprints for Arabic RTL, LATAM payment checkouts, and EU GDPR speed'
    ],
    features: [
      { title: 'Engineering Deep Dives', desc: 'Detailed code examples and architectural analysis for modern enterprise web stacks.' },
      { title: 'SEO & AI Search Playbooks', desc: 'Actionable steps to capture Google Position Zero and generative AI citations.' },
      { title: 'Cross-Border eCommerce', desc: 'Strategies for managing multi-currency feeds and international customer trust.' }
    ],
    languages: ['English', 'Multilingual Guides'],
    faq: [
      { q: 'How often do you publish new technical guides?', a: 'We publish weekly engineering and digital marketing insights derived from active client projects.' }
    ]
  },
  '/contact-us/': {
    path: '/contact-us/',
    title: 'Contact Us | UDMIDEAS NYC 10001 | Free Multilingual Strategy Audit',
    description: 'Contact Founder Arun and the UDMIDEAS team in New York, NY 10001. Message on WhatsApp (+91-9521186150) or submit our inquiry form for guaranteed 4-hour response.',
    kicker: 'Direct Consultation',
    heading: 'Start Your Cross-Border Web & Marketing Journey.',
    subheading: 'Connect directly with Founder Arun and our senior architectural leads. Headquartered at 350 5th Ave, New York, NY 10001, with direct WhatsApp support.',
    category: 'core',
    canonicalUrl: `${CANONICAL_BASE}/contact-us/`,
    schemaType: 'ContactPage',
    keyHighlights: [
      'Direct WhatsApp Hotline: +91-9521186150 (Instant response from Arun)',
      'Headquarters: 350 5th Avenue, New York, NY 10001, United States',
      'Direct Email Routing: Inquiries routed straight to soni9999arun9999@gmail.com',
      'Guaranteed 4-hour business turnaround on all technical audits and quote requests'
    ],
    features: [
      { title: 'WhatsApp Instant Chat', desc: 'Click to start a conversation directly with Arun on WhatsApp at +91-9521186150.' },
      { title: 'Free Multilingual Audit', desc: 'Comprehensive analysis of your current website speed, international SEO, and market potential.' },
      { title: 'Strict NDA Protection', desc: 'All project inquiries, trade secrets, and proprietary concepts are protected under mutual NDA.' }
    ],
    languages: ['English', 'Spanish', 'French', 'German', 'Arabic', 'Hebrew'],
    faq: [
      { q: 'What is the fastest way to reach Arun?', a: 'Message Arun directly on WhatsApp at +91-9521186150 for an immediate response.' }
    ]
  },
  '/israel/': {
    path: '/israel/',
    title: 'Israel Web Design & Multilingual Marketing Services | UDMIDEAS',
    description: 'Custom bilingual Hebrew and English website design and digital marketing for Israeli tech, cybersecurity, and eCommerce firms in Tel Aviv, Jerusalem, and Haifa.',
    kicker: 'Regional Focus',
    heading: 'Web Design & Digital Marketing for the Israeli Tech Corridor.',
    subheading: 'Bridging Silicon Valley and Start-Up Nation: We build high-security, custom-coded bilingual Hebrew/English platforms that position Israeli startups and enterprises in front of North American and European buyers.',
    category: 'region',
    canonicalUrl: `${CANONICAL_BASE}/israel/`,
    schemaType: 'Place',
    keyHighlights: [
      'Bilingual Hebrew and English web applications with native Right-to-Left (RTL) typography',
      'High-Security CodeIgniter and React architectures tailored for cybersecurity and fintech',
      'AEO and GEO optimization ensuring Israeli innovations rank in AI search summaries',
      'Cross-border B2B lead generation targeting Fortune 500 decision-makers in New York and California'
    ],
    features: [
      { title: 'Tel Aviv & Jerusalem Tech Hubs', desc: 'Direct experience engineering portals for venture-backed Israeli SaaS and cybersecurity firms.' },
      { title: 'Bilingual Typography Pairing', desc: 'Flawless visual balance pairing Hebrew display fonts (Heebo, Assistant) with Latin typefaces.' },
      { title: 'North American Market Penetration', desc: 'Executing high-converting US Google Ads and LinkedIn ABM campaigns from our New York headquarters.' }
    ],
    languages: ['Hebrew (Native RTL)', 'English'],
    faq: [
      { q: 'How do you handle Hebrew bi-directional design?', a: 'We use CSS logical properties to dynamically invert layout directions while preserving number and code formats.' }
    ]
  },
  '/usa/': {
    path: '/usa/',
    title: 'USA Web Design & National SEO Services | NYC 10001 | UDMIDEAS',
    description: 'UDMIDEAS USA headquarters in New York, NY 10001. Providing custom web development, nationwide SEO, AEO, and multi-state PPC across all 50 states.',
    kicker: 'USA Headquarters',
    heading: 'United States Custom Web Engineering & Growth Marketing.',
    subheading: 'Headquartered in Midtown Manhattan (NYC 10001), UDMIDEAS delivers high-performance website engineering and data-driven marketing across all 50 US states.',
    category: 'region',
    canonicalUrl: `${CANONICAL_BASE}/usa/`,
    schemaType: 'Place',
    keyHighlights: [
      'Central Headquarters located at 350 5th Avenue, New York, NY 10001',
      'Serving all 50 US states with localized and nationwide commercial campaigns',
      'Custom React, WordPress, Laravel, and Magento architectures built for US speed standards',
      'Full compliance with US ADA Title III accessibility and federal data standards'
    ],
    features: [
      { title: 'Top 20 State Optimization', desc: 'Dedicated landing pages, local citation footprints, and geo-targeted paid search across the 20 largest US state economies.' },
      { title: 'Sub-Second US CDN Edge', desc: 'Low-latency server infrastructure ensuring sub-second page loads from New York to California.' },
      { title: 'Founder Arun in NYC', desc: 'Strategic counsel and direct partnership anchored in the heart of New York City.' }
    ],
    languages: ['English', 'Spanish'],
    faq: [
      { q: 'Can you handle multi-state marketing campaigns in the USA?', a: 'Yes, we manage geo-fenced Google Ads and organic SEO across major metropolitan hubs and all 50 states.' }
    ]
  },
  '/latam/': {
    path: '/latam/',
    title: 'LATAM Multilingual Web Design & Marketing Services | UDMIDEAS',
    description: 'Custom website development and digital marketing for Latin America: Brazil, Mexico, Colombia, Argentina, Chile, Peru. Native Spanish & Portuguese checkout integrations.',
    kicker: 'Regional Focus',
    heading: 'Latin America (LATAM) Custom Web & eCommerce Solutions.',
    subheading: 'Empowering service-based and eCommerce businesses across Latin America with localized payment checkouts (Pix, MercadoPago, Oxxo), lightweight mobile performance, and WhatsApp commerce.',
    category: 'region',
    canonicalUrl: `${CANONICAL_BASE}/latam/`,
    schemaType: 'Place',
    keyHighlights: [
      'Comprehensive coverage: Brazil, Mexico, Colombia, Argentina, Chile, Peru, Ecuador, Costa Rica, Panama, Uruguay',
      'Native Spanish & Brazilian Portuguese linguistic and cultural localization',
      'Seamless integration with Pix, Boleto, MercadoPago, Oxxo, and Stripe multi-currency',
      'Optimized for mobile 4G connectivity with sub-second page loads and zero layout shift'
    ],
    features: [
      { title: 'MercadoPago & Pix Integrations', desc: 'Build instant checkout trust with the preferred regional payment methods in Brazil, Mexico, and South America.' },
      { title: 'WhatsApp Commerce Funnels', desc: 'Capture high-converting mobile shoppers through automated WhatsApp inquiry and checkout hooks.' },
      { title: 'Spanish & Portuguese SEO', desc: 'Differentiating regional keyword nuances between Mexican Spanish, Colombian Spanish, and Brazilian Portuguese.' }
    ],
    languages: ['Spanish (Regional Dialects)', 'Portuguese (Brazil)', 'English'],
    faq: [
      { q: 'Do you support Brazilian Pix payments?', a: 'Yes! We custom-code automated Pix QR code generators and instant webhook payment confirmations directly into WooCommerce and Magento.' }
    ]
  },
  '/eu/': {
    path: '/eu/',
    title: 'European Union Web Design & Multilingual SEO | UDMIDEAS',
    description: 'GDPR-compliant custom web engineering and international SEO for France, Germany, Spain, Switzerland, and Poland. Sub-second Core Web Vitals across Europe.',
    kicker: 'Regional Focus',
    heading: 'European Union (EU) Custom Web Engineering & SEO.',
    subheading: 'Engineering strictly GDPR-compliant, high-speed multilingual websites and search campaigns calibrated to French, German, Spanish, Swiss, and Polish commercial habits.',
    category: 'region',
    canonicalUrl: `${CANONICAL_BASE}/eu/`,
    schemaType: 'Place',
    keyHighlights: [
      'Strict GDPR, CNIL, and German TTDSG data privacy architecture with zero cookie leaks',
      'Deep localization in French, German, Spanish, Polish, and Swiss multilingual variants',
      'Multi-currency and multi-tax support for EUR, CHF, and PLN with automated VAT compliance',
      '95+ Google PageSpeed index on European mobile networks and enterprise connections'
    ],
    features: [
      { title: 'DACH Market Dominance', desc: 'Precision engineering and B2B technical search strategies for Germany, Austria, and Switzerland.' },
      { title: 'French & Spanish Luxury Standards', desc: 'Refined visual polish and cultural localization for high-end retail and corporate service brands.' },
      { title: 'Central European Logistics & Tech', desc: 'High-throughput logistics and B2B web applications tailored for Poland and neighboring European economies.' }
    ],
    languages: ['French', 'German', 'Spanish', 'Polish', 'English'],
    faq: [
      { q: 'How do you guarantee EU GDPR compliance?', a: 'We build privacy-first architectures that self-host fonts, anonymize IPs server-side, and block tracking cookies until explicit opt-in.' }
    ]
  },
  '/arab-world/': {
    path: '/arab-world/',
    title: 'Arabic World & GCC Web Design & Digital Marketing | UDMIDEAS',
    description: 'Expert bi-directional Arabic (RTL) website design, custom software development, and digital marketing across UAE, Saudi Arabia, Qatar, Oman, Kuwait, Egypt.',
    kicker: 'Regional Focus',
    heading: 'Arabic World & GCC Bi-Directional Web Engineering.',
    subheading: 'Mastery of true Right-to-Left (RTL) layouts, native Arabic typography, and culturally calibrated digital marketing across Dubai, Riyadh, Doha, and the MENA region.',
    category: 'region',
    canonicalUrl: `${CANONICAL_BASE}/arab-world/`,
    schemaType: 'Place',
    keyHighlights: [
      'Serving UAE, Saudi Arabia, Qatar, Oman, Iran, Iraq, Bahrain, Morocco, Yemen, Egypt',
      'Native Bi-Directional Right-to-Left (RTL) CSS architecture with zero layout breakage',
      'Culturally resonant visual storytelling and short-form video production in native Arabic',
      'High-net-worth acquisition funnels for GCC real estate, private offices, and eCommerce'
    ],
    features: [
      { title: 'True RTL Bi-Directional Logic', desc: 'Complete inversion of visual scanning paths, form fields, and navigation for native Arabic readers.' },
      { title: 'GCC Paid Search Dominance', desc: 'Google Search, Snapchat, TikTok, and Instagram campaigns calibrated for UAE, Saudi, and Qatar audiences.' },
      { title: 'VIP WhatsApp Concierge', desc: 'Automated high-converting inquiry workflows built directly into your web presence.' }
    ],
    languages: ['Arabic (Native RTL)', 'English'],
    faq: [
      { q: 'Why do typical Arabic translation plugins fail?', a: 'They only translate text strings without mirroring layout elements, resulting in disjointed buttons, broken navigation, and high bounce rates.' }
    ]
  },
  '/website-design-development/': {
    path: '/website-design-development/',
    title: 'Custom Website Design & Development Services | UDMIDEAS',
    description: 'Custom-coded website design and engineering using React, WordPress, CodeIgniter, Laravel, Magento, and PHP frameworks. 100% custom coding only.',
    kicker: 'Engineering Pillar',
    heading: 'Custom Website Design & Development Solutions.',
    subheading: 'We engineer websites from scratch using React Js, WordPress, CodeIgniter, Laravel, Magento, and custom PHP frameworks. Zero pre-made templates, zero bloated page builders.',
    category: 'service',
    canonicalUrl: `${CANONICAL_BASE}/website-design-development/`,
    schemaType: 'Service',
    keyHighlights: [
      '100% Custom Coding Only — Zero Elementor, Divi, or pre-made commercial theme bloat',
      'Sub-second page loading speeds and 95+ Core Web Vitals guarantees',
      'Bespoke decoupled backends in Laravel, CodeIgniter, and PHP with React frontends',
      'Native bi-directional (LTR/RTL) engineering for global multilingual parity'
    ],
    features: [
      { title: 'Custom React JS Applications', desc: 'Reactive, modular frontend experiences with instant transitions and dynamic state management.' },
      { title: 'Handcrafted WordPress & WooCommerce', desc: 'Lightweight bespoke themes and custom plugin code engineered without drag-and-drop builders.' },
      { title: 'Enterprise Laravel & CodeIgniter', desc: 'High-throughput database architectures, custom REST APIs, and role-based access control.' },
      { title: 'Scalable Magento eCommerce', desc: 'Multi-store, multi-currency catalogs supporting 50,000+ SKUs with Elasticsearch.' }
    ],
    languages: ['English', 'Spanish', 'French', 'German', 'Arabic', 'Hebrew'],
    faq: [
      { q: 'Do I own the source code upon project completion?', a: 'Yes, 100%. All custom code, repositories, and assets belong entirely to you with zero vendor lock-in.' }
    ]
  },
  '/digital-marketing-services/': {
    path: '/digital-marketing-services/',
    title: 'Multilingual Digital Marketing Services | 15+ Yrs | UDMIDEAS',
    description: 'International digital marketing services: SEO, AEO, GEO, SMM, PPC, content creation, and video creation. 15+ years experience driving global revenue.',
    kicker: 'Marketing Pillar',
    heading: 'Full-Funnel Multilingual Digital Marketing Services.',
    subheading: 'Backed by 15+ years of digital marketing dominance, UDMIDEAS delivers international SEO, AI answer engine capture, creative social storytelling, and high-ROAS paid media across five continents.',
    category: 'service',
    canonicalUrl: `${CANONICAL_BASE}/digital-marketing-services/`,
    schemaType: 'Service',
    keyHighlights: [
      '15+ Years Track Record led by Founder Arun from New York, NY 10001',
      'Full-Funnel Strategy: International SEO, AEO, GEO, SMM, PPC, Content & Video',
      'Dedicated multilingual teams fluent in European, Latin American, and Middle Eastern markets',
      'Data-driven ROI reporting tied to actual revenue, booked demos, and eCommerce checkouts'
    ],
    features: [
      { title: 'Multi-Country Search Dominance', desc: 'Rank on top of Google across 28+ languages without duplicate content penalties.' },
      { title: 'Answer & Generative Engine Capture', desc: 'Win featured snippets in voice search and secure citations in ChatGPT and Perplexity.' },
      { title: 'Cross-Border Paid Advertising', desc: 'High-ROAS Google Ads, Meta Ads, and LinkedIn B2B campaigns in local currencies.' }
    ],
    languages: ['All supported languages'],
    faq: [
      { q: 'How do you measure marketing ROI?', a: 'We implement server-side tracking, GTM, and GA4 to trace every dollar spent directly to customer acquisitions and revenue.' }
    ]
  },
  '/multilingual-search-engine-optimization/': {
    path: '/multilingual-search-engine-optimization/',
    title: 'International Multilingual SEO & hreflang Strategy | UDMIDEAS',
    description: 'Dominate global Google search results with custom multilingual SEO, bulletproof hreflang architecture, and localized keyword targeting in 28+ languages.',
    kicker: 'SEO Pillar',
    heading: 'Multilingual Search Engine Optimization (SEO).',
    subheading: 'Dominate organic search rankings across the USA, Europe, Latin America, Israel, and the Arab World. We architect clean international site structures, hreflang tags, and culturally tuned keyword clusters.',
    category: 'service',
    canonicalUrl: `${CANONICAL_BASE}/multilingual-search-engine-optimization/`,
    schemaType: 'Service',
    keyHighlights: [
      'Bulletproof hreflang tagging and automated multi-country XML sitemaps',
      'Distinguishing regional dialects (e.g. Mexican Spanish vs Castilian Spanish, Swiss German vs High German)',
      'Server-side geo-targeting signals and Google Search Console multi-property architecture',
      'High-authority international backlink acquisition from country-specific domains'
    ],
    features: [
      { title: 'hreflang Architecture', desc: 'Prevent duplicate content cannibalization across multi-country English, Spanish, and European pages.' },
      { title: 'Technical Core Web Vitals', desc: 'Sub-second server response times that give your site an algorithmic ranking advantage globally.' },
      { title: 'Localized Search Intent', desc: 'Mapping the precise commercial terminology used by local buyers in each target country.' }
    ],
    languages: ['English', 'Spanish', 'French', 'German', 'Arabic', 'Hebrew', 'Portuguese'],
    faq: [
      { q: 'What is the most common mistake in international SEO?', a: 'Relying on automatic client-side translation plugins that create unindexable URLs and cause duplicate content penalties.' }
    ]
  },
  '/answer-engine-optimization/': {
    path: '/answer-engine-optimization/',
    title: 'Answer Engine Optimization (AEO) | Position Zero | UDMIDEAS',
    description: 'Capture Google Position Zero and voice search queries with Answer Engine Optimization (AEO). Structured schema graphs and direct answer architectures.',
    kicker: 'AEO Pillar',
    heading: 'Answer Engine Optimization (AEO) for Voice & Search.',
    subheading: 'Voice assistants and Google featured snippets prioritize direct answers. We reverse-engineer question intent and structure clear factual schemas so search engines select your business as the single definitive answer.',
    category: 'service',
    canonicalUrl: `${CANONICAL_BASE}/answer-engine-optimization/`,
    schemaType: 'Service',
    keyHighlights: [
      'Conquering Google Position Zero featured snippets across high-intent commercial keywords',
      'Speakable and FAQPage JSON-LD structured data markup for voice devices (Siri, Google Assistant)',
      'Conversational query mapping answering who, what, where, and how in 45-word concise formats',
      'Significantly higher click-through rates and brand authority in local and national search'
    ],
    features: [
      { title: 'Position Zero Capture', desc: 'Engineering content blocks specifically formatted for Google snippet selection.' },
      { title: 'Voice Search Ready', desc: 'Optimizing for natural language conversational queries on smartphones and smart speakers.' },
      { title: 'Nested Schema Graphs', desc: 'Rich Schema.org markups that make your data unmistakable to search engine crawlers.' }
    ],
    languages: ['Universal language support'],
    faq: [
      { q: 'How quickly can a page win Google Position Zero?', a: 'With clean custom code and precise answer formatting, existing ranking pages often capture snippets within 3 to 6 weeks.' }
    ]
  },
  '/generative-engine-optimization/': {
    path: '/generative-engine-optimization/',
    title: 'Generative Engine Optimization (GEO) | AI Search SEO | UDMIDEAS',
    description: 'Optimize your business to be cited and recommended by AI search engines: ChatGPT Search, Perplexity AI, Claude, and Google Gemini Overviews.',
    kicker: 'GEO Pillar',
    heading: 'Generative Engine Optimization (GEO) for AI Search.',
    subheading: 'Search has fundamentally shifted to generative models. We optimize your website authority, entity knowledge graph, and factual citations so generative AI engines recommend your business.',
    category: 'service',
    canonicalUrl: `${CANONICAL_BASE}/generative-engine-optimization/`,
    schemaType: 'Service',
    keyHighlights: [
      'Optimizing for ChatGPT Search, Perplexity AI, Claude, and Google Gemini Overviews',
      'Entity relationship clustering and Knowledge Graph footprint expansion',
      'Publishing verifiable statistical proof, timelines, and quantitative outcomes for LLM ingestion',
      'Continuous monitoring of synthetic search citations and brand recommendation share'
    ],
    features: [
      { title: 'Knowledge Graph Clustering', desc: 'Positioning your brand as an indisputable entity authority in your industry.' },
      { title: 'Factual Proof Optimization', desc: 'Structuring data so AI crawlers extract and quote your exact achievements.' },
      { title: 'Multi-Engine Monitoring', desc: 'Tracking citations across Perplexity, ChatGPT, and Gemini Overviews.' }
    ],
    languages: ['Universal language support'],
    faq: [
      { q: 'How does GEO differ from traditional SEO?', a: 'Traditional SEO counts backlinks and keyword density; GEO builds factual consensus, entity relationships, and verified claims for LLM models.' }
    ]
  },
  '/social-media-marketing/': {
    path: '/social-media-marketing/',
    title: 'Multilingual Social Media Marketing (SMM) & Video | UDMIDEAS',
    description: 'Cross-cultural social media marketing, short-form video creation, and 24/7 native community moderation across Instagram, TikTok, LinkedIn, YouTube, X.',
    kicker: 'SMM Pillar',
    heading: 'Multilingual Social Media Marketing (SMM) & Video.',
    subheading: 'Cross-cultural brand storytelling, viral short-form video creation, and 24/7 native community moderation across Instagram, TikTok, LinkedIn, YouTube, and X in six languages.',
    category: 'service',
    canonicalUrl: `${CANONICAL_BASE}/social-media-marketing/`,
    schemaType: 'Service',
    keyHighlights: [
      'Tailored content calendars reflecting regional holidays, humor, and cultural norms',
      'In-house creative production of 4K vertical Reels, TikToks, and YouTube Shorts',
      '24/7 native community managers responding in English, Spanish, French, German, Arabic, and Hebrew',
      'Direct CRM and WhatsApp lead routing converting viral views into active sales pipelines'
    ],
    features: [
      { title: 'Cross-Cultural Strategy', desc: 'Calibrated social campaigns that resonate with local buyers in Europe, the USA, LATAM, and the GCC.' },
      { title: 'Short-Form Video Production', desc: 'Hook-tested scripts, dynamic multilingual captions, and high-impact visual editing.' },
      { title: '24/7 Triage & Moderation', desc: 'Instant response to DMs, comments, and brand inquiries in the native tongue of the buyer.' }
    ],
    languages: ['English', 'Spanish', 'French', 'German', 'Arabic', 'Hebrew'],
    faq: [
      { q: 'Why does translating American social posts fail internationally?', a: 'Cultural idioms, purchasing psychology, and humor differ radically between New York, Paris, Bogotá, and Riyadh.' }
    ]
  },
  '/pay-per-click/': {
    path: '/pay-per-click/',
    title: 'Multilingual Pay-Per-Click (PPC) Advertising | UDMIDEAS',
    description: 'High-ROAS international PPC campaigns: Google Search, Performance Max, Shopping, Meta Ads, and LinkedIn B2B ABM across USA, LATAM, EU, and Gulf markets.',
    kicker: 'PPC Pillar',
    heading: 'Multilingual Pay-Per-Click (PPC) & Paid Acquisition.',
    subheading: 'High-intent search capture, visual paid social funnels, and B2B Account-Based Marketing in local currencies delivering predictable pipeline and 4x+ ROAS.',
    category: 'service',
    canonicalUrl: `${CANONICAL_BASE}/pay-per-click/`,
    schemaType: 'Service',
    keyHighlights: [
      'Granular single-theme ad groups with native-language ad copy and negative keyword filters',
      'Multi-currency Google Shopping and dynamic Meta Catalog ads for cross-border retailers',
      'LinkedIn B2B Account-Based Marketing targeting C-suite executives in USA, DACH, and Israel',
      'Custom-coded multilingual landing pages with local trust badges and localized checkouts'
    ],
    features: [
      { title: 'Google Ads & PMax', desc: 'Dominating commercial search intent across USA, Europe, LATAM, and the Middle East.' },
      { title: 'Meta Ads Global Funnels', desc: 'Hyper-targeted Instagram and Facebook campaigns with click-to-WhatsApp capabilities.' },
      { title: 'LinkedIn B2B ABM', desc: 'Reaching decision-makers by company revenue, job title, and technological stack.' }
    ],
    languages: ['All target markets'],
    faq: [
      { q: 'How do you handle multi-currency ad budgets?', a: 'We pace budgets dynamically based on purchasing power parity, regional CPCs, and verified customer lifetime value.' }
    ]
  },
  '/new-york/': {
    path: '/new-york/',
    title: 'New York Web Design & SEO Agency | NYC 10001 | UDMIDEAS',
    description: 'Premier custom website design, React/Laravel engineering, and enterprise SEO in New York, NY 10001. Headquartered at 350 5th Avenue, NYC.',
    kicker: 'New York Hub',
    heading: 'New York Custom Web Design & Enterprise SEO.',
    subheading: 'Headquartered in Midtown Manhattan (Zip Code 10001). We build custom-coded websites and high-yield digital marketing for New York service leaders, luxury brands, and eCommerce retailers.',
    category: 'usa-state',
    canonicalUrl: `${CANONICAL_BASE}/new-york/`,
    schemaType: 'LocalBusiness',
    keyHighlights: [
      'Physical Office: 350 5th Avenue, Suite 4100, New York, NY 10001',
      'Founder Arun leads executive architecture consultations directly from NYC',
      'Custom React, WordPress, Laravel, and Magento solutions for New York enterprises',
      'Hyper-local and national SEO covering Manhattan, Brooklyn, Queens, Long Island, and upstate NY'
    ],
    features: [
      { title: 'Midtown Manhattan Headquarters', desc: 'Convenient executive briefing location serving Fortune 500 firms and high-growth startups.' },
      { title: 'Sub-Second NYC CDN Performance', desc: 'Ultra-fast page loads hosted on local New York edge nodes for instantaneous response.' },
      { title: 'Local & National SERP Dominance', desc: 'Proven search optimization capturing competitive commercial queries in the Tri-State area.' }
    ],
    languages: ['English', 'Spanish'],
    faq: [
      { q: 'Where in New York is UDMIDEAS located?', a: 'Our office is located at 350 5th Avenue, New York, NY 10001.' }
    ]
  },
  '/privacy-policy/': {
    path: '/privacy-policy/',
    title: 'Privacy Policy | UDMIDEAS NYC 10001',
    description: 'Official privacy policy for UDMIDEAS. GDPR, CCPA, and international data compliance standards for our global web engineering and digital marketing clients.',
    kicker: 'Legal & Compliance',
    heading: 'UDMIDEAS Privacy Policy.',
    subheading: 'Effective 2026. Governed from our USA headquarters in New York, NY 10001, adhering to GDPR, CCPA, and international privacy standards.',
    category: 'legal',
    canonicalUrl: `${CANONICAL_BASE}/privacy-policy/`,
    schemaType: 'WebPage',
    keyHighlights: [
      'Zero unauthorized tracking: We never sell, lease, or monetize client or visitor data',
      'Full compliance with the European Union GDPR, French CNIL, and German TTDSG standards',
      'California Consumer Privacy Act (CCPA) compliant data handling and deletion rights',
      'Encrypted inquiry transmission directly to soni9999arun9999@gmail.com with mutual NDA protection'
    ],
    features: [
      { title: 'Information Collected', desc: 'We only store data voluntarily provided via contact forms, consultations, and authorized project accounts.' },
      { title: 'Data Rights', desc: 'You have full rights to request an export, modification, or immediate permanent deletion of your data.' },
      { title: 'Third-Party Shield', desc: 'No intrusive tracking pixels are loaded on your devices without explicit prior consent.' }
    ],
    languages: ['English'],
    faq: [
      { q: 'How can I exercise my privacy rights?', a: 'Email us directly at soni9999arun9999@gmail.com with your request.' }
    ]
  },
  '/terms-and-conditions/': {
    path: '/terms-and-conditions/',
    title: 'Terms and Conditions | UDMIDEAS NYC 10001',
    description: 'Standard terms of service and client engineering contract guidelines for UDMIDEAS custom website design and digital marketing services.',
    kicker: 'Legal & Compliance',
    heading: 'UDMIDEAS Terms and Conditions.',
    subheading: 'Clear, transparent commercial terms governing all custom web engineering, software development, and international digital marketing contracts.',
    category: 'legal',
    canonicalUrl: `${CANONICAL_BASE}/terms-and-conditions/`,
    schemaType: 'WebPage',
    keyHighlights: [
      '100% Client Ownership: All custom source code, Git repos, and assets belong to you upon final settlement',
      'Clear milestone deliverables with transparent weekly reporting and staging server access',
      'Zero vendor lock-in or hidden licensing fees on custom React, WordPress, Laravel, and Magento work',
      'Mutual non-disclosure agreements protecting all proprietary client software and business models'
    ],
    features: [
      { title: 'Code Ownership', desc: 'You receive complete ownership of all custom-coded repositories and intellectual property.' },
      { title: 'Service Warranties', desc: 'We provide post-deployment bug fix warranties and performance guarantees on custom code.' },
      { title: 'Ad Account Control', desc: 'All advertising accounts (Google, Meta, LinkedIn) remain 100% under your business ownership.' }
    ],
    languages: ['English'],
    faq: [
      { q: 'Do you charge ongoing code license fees?', a: 'No. Our custom coding is built bespoke for you. You own the code forever.' }
    ]
  },
  '/cookies/': {
    path: '/cookies/',
    title: 'Cookie Policy | UDMIDEAS NYC 10001',
    description: 'Cookie policy for UDMIDEAS website. Privacy-first, zero-leak technical cookies strictly necessary for responsive multilingual navigation.',
    kicker: 'Legal & Compliance',
    heading: 'UDMIDEAS Cookie Policy.',
    subheading: 'We respect your digital sovereignty. Learn how UDMIDEAS uses privacy-first, minimal session cookies strictly to provide responsive multilingual navigation.',
    category: 'legal',
    canonicalUrl: `${CANONICAL_BASE}/cookies/`,
    schemaType: 'WebPage',
    keyHighlights: [
      'Minimal technical cookies strictly required for language persistence and bi-directional layout state',
      'No cross-site behavioral tracking or selling of browsing habits to data brokers',
      'Full compliance with the EU ePrivacy Directive and GDPR cookie consent standards',
      'Users can browse and disable cookies at any time without degrading essential functionality'
    ],
    features: [
      { title: 'Strictly Necessary Cookies', desc: 'Used exclusively to remember your selected locale (e.g. English, Arabic, Spanish) and viewport state.' },
      { title: 'Zero Third-Party Spying', desc: 'We do not inject third-party ad retargeting pixels on general informational visits.' },
      { title: 'Browser Control', desc: 'You can easily clear or block cookies in your browser settings at any moment.' }
    ],
    languages: ['English'],
    faq: [
      { q: 'Can I disable cookies?', a: 'Yes. You can disable cookies in your browser settings and our site will continue to function smoothly.' }
    ]
  }
};

// Helper function to generate generic state/country/blog pages dynamically if not listed
export function getPageMetadata(path: string): PageSEO {
  // Normalize path
  const cleanPath = path.toLowerCase().replace(/%20/g, '-').replace(/ /g, '-');
  const normalized = cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`;

  if (ALL_PAGES[normalized]) {
    return ALL_PAGES[normalized];
  }

  // Check if it matches a USA state
  const stateMatch = normalized.match(/^\/([a-z-]+)\/$/);
  if (stateMatch) {
    const slug = stateMatch[1];
    const formattedName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return {
      path: normalized,
      title: `${formattedName} Web Design & Multilingual Marketing | UDMIDEAS`,
      description: `Custom website design, React/Laravel engineering, and localized SEO services for businesses in ${formattedName}. Headquartered in NYC 10001, serving all 50 states.`,
      kicker: 'USA State Strategy',
      heading: `${formattedName} Custom Web Design & Digital Marketing.`,
      subheading: `Accelerating service-based and eCommerce companies in ${formattedName} with custom-coded React, WordPress, Laravel, and Magento architectures paired with targeted Google Ads and SEO.`,
      category: 'usa-state',
      canonicalUrl: `${CANONICAL_BASE}${normalized}`,
      schemaType: 'Place',
      keyHighlights: [
        `Targeted web design and digital marketing engineered for commercial clients in ${formattedName}`,
        '100% custom-coded architecture delivering sub-second load times and 95+ Core Web Vitals',
        'Headquartered at 350 5th Ave, New York, NY 10001, providing nationwide support',
        'Direct consultation with Founder Arun via WhatsApp (+91-9521186150) and scheduled video calls'
      ],
      features: [
        { title: `Local & National Reach in ${formattedName}`, desc: `Capturing high-intent buyers in metropolitan centers and throughout ${formattedName}.` },
        { title: 'Custom Coding Only', desc: 'Zero bloated WordPress themes or third-party page builders that slow down user conversions.' },
        { title: 'Full-Funnel Acquisition', desc: 'Combining organic search dominance with high-ROAS paid media across Google and Meta.' }
      ],
      languages: ['English', 'Spanish'],
      faq: [
        { q: `Do you provide in-person or remote consultations for ${formattedName}?`, a: `We provide direct video and WhatsApp consultations with Founder Arun, as well as on-site executive briefings from our New York headquarters.` }
      ]
    };
  }

  // Fallback
  return {
    path: normalized,
    title: 'UDMIDEAS | Multilingual Web Design & Digital Marketing Agency',
    description: 'UDMIDEAS builds custom-coded multilingual websites and delivers international digital marketing for service & eCommerce businesses.',
    kicker: 'Global Agency',
    heading: 'Custom Web Design & Multilingual Growth.',
    subheading: '15+ years of digital marketing dominance and custom software engineering.',
    category: 'core',
    canonicalUrl: `${CANONICAL_BASE}${normalized}`,
    schemaType: 'WebPage',
    keyHighlights: ['15+ Years Track Record', '100% Custom Coding Only', 'NYC 10001 Headquarters'],
    features: [{ title: 'Custom Coding', desc: 'React, WordPress, Laravel, Magento.' }],
    languages: ['English', 'Spanish', 'French', 'German', 'Arabic', 'Hebrew'],
    faq: [{ q: 'How to contact?', a: 'WhatsApp Arun at +91-9521186150.' }]
  };
}
