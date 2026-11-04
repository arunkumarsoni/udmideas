import React, { useState } from 'react';
import {
  Code2,
  CheckCircle2,
  Layers,
  Sparkles,
  ArrowRight,
  Globe2,
  Cpu,
  ShoppingBag,
  Zap,
  Server,
  ShieldCheck,
  Clock,
  DollarSign,
  Star,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Mail,
  Smartphone,
  Search,
  Bot,
  Compass,
  FileCheck,
  TrendingUp,
  Award,
  Users,
  Database
} from 'lucide-react';

export const WebsiteDesignServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const steps = [
    {
      step: '01',
      title: 'Discovery Call & Business Strategy',
      desc: 'We start with a thorough consultation to uncover your target audience, commercial revenue model, industry competitors, and specific conversion goals. We define what success looks like before writing a single line of code.'
    },
    {
      step: '02',
      title: 'In-Depth Market & Search Research',
      desc: 'We analyze the exact commercial search intent, competitor technical gaps, and regional buyer habits across your target geographies (USA, LATAM, Europe, Israel, GCC).'
    },
    {
      step: '03',
      title: 'Information Architecture & Wireframing',
      desc: 'We map out a structured URL architecture, topic siloing, and conversion funnel pathways designed to guide visitors effortlessly from initial landing to final inquiry or purchase.'
    },
    {
      step: '04',
      title: 'Custom UI/UX Design',
      desc: 'We craft high-fidelity, distraction-free user interfaces tailored exclusively to your brand identity. Zero cookie-cutter themes, zero visual cliches, and zero generic builder bloat.'
    },
    {
      step: '05',
      title: 'Clean-Code Development',
      desc: 'We engineer the entire codebase from scratch using React JS, modern PHP frameworks (Laravel, CodeIgniter), or custom headless WordPress. Handcrafted code ensures sub-second execution.'
    },
    {
      step: '06',
      title: 'Conversion-Focused Copywriting',
      desc: 'We write clear, authoritative copy that speaks directly to human decision-makers while embedding the semantic entities and schema markers search engines require.'
    },
    {
      step: '07',
      title: 'SEO, AEO & GEO Architecture',
      desc: 'We bake structured JSON-LD schema (Organization, Service, FAQ, Breadcrumbs), XML sitemaps, OpenGraph metadata, and generative engine answer formulations directly into the code.'
    },
    {
      step: '08',
      title: 'Rigorous Testing & Core Web Vitals Audit',
      desc: 'We benchmark the site across real mobile devices and browsers, enforcing sub-second Largest Contentful Paint (LCP < 1.2s), zero layout shift (CLS 0.00), and instant responsiveness.'
    },
    {
      step: '09',
      title: 'Launch, 1-Year Free Hosting & Free Maintenance',
      desc: 'We manage DNS cutover, SSL certificate deployment, and provide 1 full year of blazing-fast hosting and hands-on maintenance support at no extra charge.'
    }
  ];

  const internetHistory = [
    {
      era: '1976–1989',
      milestone: 'ARPANET to TCP/IP & Pre-Web Foundations',
      tech: 'Command-line terminals, early packet switching, FTP, USENET bulletin boards',
      businessImpact: 'Academic research and defense data sharing; no public commercial web existed.'
    },
    {
      era: '1990–1995',
      milestone: 'World Wide Web Inception & HTML 1.0',
      tech: 'Tim Berners-Lee HTML, CERN web server, Mosaic browser, static text pages',
      businessImpact: 'First corporate brochure sites; informational presence for early tech pioneers.'
    },
    {
      era: '1996–2000',
      milestone: 'Dot-Com Boom & Commercial Internet',
      tech: 'JavaScript introduction, CSS 1, table-based layouts, Netscape, Yahoo, early Google',
      businessImpact: 'Businesses rush online; first e-commerce transactions and digital storefronts emerge.'
    },
    {
      era: '2001–2006',
      milestone: 'Web 2.0 & Dynamic Database Architecture',
      tech: 'PHP, MySQL, LAMP stack, AJAX, early WordPress, blog engines, Google PageRank',
      businessImpact: 'Websites become interactive applications with user comments, forums, and dynamic content.'
    },
    {
      era: '2007–2014',
      milestone: 'Mobile Revolution & Responsive Grids',
      tech: 'iPhone launch, HTML5, CSS3 media queries, responsive frameworks, mobile-first indexing',
      businessImpact: 'Desktop-only sites penalized; businesses forced to build mobile-friendly interfaces.'
    },
    {
      era: '2015–2020',
      milestone: 'Modern JavaScript & Component SPAs',
      tech: 'React JS, Vue, Node.js microservices, HTTPS mandatory, Google Core Web Vitals rollout',
      businessImpact: 'Page speed and user experience become primary organic search ranking factors.'
    },
    {
      era: '2021–2024',
      milestone: 'Edge Computing, Headless & Internationalization',
      tech: 'Vite, Next.js, Jamstack, headless CMS, global Edge CDNs, multi-language hreflang standards',
      businessImpact: 'Global cross-border commerce; brands require localized, sub-second international sites.'
    },
    {
      era: '2025–2027+',
      milestone: 'AI Answer Engines & Generative Search (AEO / GEO)',
      tech: 'ChatGPT, Perplexity, Google AI Overviews, deep JSON-LD semantic graphs, AI crawler protocols',
      businessImpact: 'Websites must provide authoritative, structured data so AI models cite them as primary sources.'
    }
  ];

  const websiteBenefits = [
    {
      category: 'Open 24/7/365 Non-Stop',
      importance: 'Your business operates globally across all time zones without paying overtime staff.',
      udmideasAdvantage: 'High-availability infrastructure with automated WhatsApp and direct inquiry workflows.'
    },
    {
      category: 'Instant Trust & Professional Authority',
      importance: 'Over 84% of modern consumers research a brand online before contacting or buying.',
      udmideasAdvantage: 'Bespoke custom UI/UX design that looks corporate-grade and authoritative, not like a cheap template.'
    },
    {
      category: 'Sub-Second Loading Speed',
      importance: '53% of mobile users abandon sites that take more than 3 seconds to load.',
      udmideasAdvantage: 'Zero page builders or heavy plugins; 95+ Google PageSpeed and sub-1.2s LCP guaranteed.'
    },
    {
      category: '100% Asset Ownership & Zero Vendor Lock-in',
      importance: 'Social media platforms can ban accounts or slash organic algorithmic reach overnight.',
      udmideasAdvantage: 'You own 100% of your source code, domain name, databases, and customer records forever.'
    },
    {
      category: 'Predictable Inbound Lead Pipeline',
      importance: 'Converts cold searchers and visitors into booked calls, quotes, and paying contracts.',
      udmideasAdvantage: 'Frictionless forms dispatching immediately to email and WhatsApp with instant notification.'
    },
    {
      category: 'Frictionless Global Scalability',
      importance: 'Enter high-value international markets without the overhead of physical offices abroad.',
      udmideasAdvantage: 'Native multilingual URLs (/es/, /fr/, /ar/) and true RTL mirroring built directly into the foundation.'
    }
  ];

  const packages = [
    {
      name: 'Starter Website Package',
      price: '$500',
      badge: 'Best for Small Businesses & Startups',
      idealFor: 'Local contractors, solo practitioners, dental clinics, and new startups.',
      features: [
        'Up to 5 Handcrafted Custom Pages',
        'Custom React JS or Lightweight PHP Build',
        '100% Mobile Responsive & Cross-Browser Tested',
        '1 Year Free High-Speed Cloud Hosting',
        '1 Year Free Maintenance & Security Updates',
        'Technical On-Page SEO & Core Web Vitals Tuning',
        'Direct Email Form + Click-to-WhatsApp Integration',
        'Basic Schema Markup (Organization & WebSite)',
        'Zero Monthly Maintenance Fees for 12 Months'
      ]
    },
    {
      name: 'Business Growth Package',
      price: '$1,500',
      badge: 'Most Popular for Established Companies',
      popular: true,
      idealFor: 'Growing service businesses, multi-location dental practices, and corporate firms.',
      features: [
        '10 to 15 Bespoke Custom Coded Pages',
        'Full React JS or Custom WordPress Architecture',
        'Sub-1.2s Loading Speed Guarantee (95+ Score)',
        '1 Year Free Premium Hosting & Dedicated Support',
        '1 Year Free Maintenance, Backups & Content Tweaks',
        'Comprehensive On-Page SEO, AEO & GEO Setup',
        'Deep JSON-LD Schema (Service, FAQ, Breadcrumbs)',
        'Custom Blog Engine / Case Studies Portfolio',
        'Google Analytics 4 & GTM Event Tracking Setup'
      ]
    },
    {
      name: 'Multilingual Global Package',
      price: '$3,000',
      badge: 'Engineered for International Expansion',
      idealFor: 'Companies targeting multiple countries, language regions, or bilingual markets.',
      features: [
        'Everything in Business Growth Package',
        'Separate Dedicated URL Structure (/es/, /fr/, /de/, /ar/)',
        'Native Bi-Directional RTL Engine (Arabic & Hebrew)',
        'Strict Hreflang Tagging & Multi-Language XML Sitemaps',
        'Dialect-Specific Semantic Keyword Mapping',
        'Global Cloudflare CDN Integration with Edge Caching',
        '1 Year Free Global Hosting & Maintenance Support',
        'Multilingual Schema Graphs for International Crawlers'
      ]
    },
    {
      name: 'Custom eCommerce Package',
      price: '$4,000',
      badge: 'High-Converting Online Retail Stores',
      idealFor: 'Brands selling physical or digital goods, apparel, B2B wholesale, or subscriptions.',
      features: [
        'Custom WooCommerce, Laravel, or React Commerce',
        'Product Catalog Setup (up to 1,000 SKUs included)',
        'Frictionless One-Page Checkout Flow',
        'Stripe, PayPal, Apple Pay, Google Pay & Local Gateways',
        'Automated Inventory, Shipping & Tax Calculations',
        'Advanced Product & Review Schema for Google Shopping',
        '1 Year Free High-Throughput Hosting & Maintenance',
        'Speed-Tuned Image Optimization & Fast Filtering'
      ]
    },
    {
      name: 'Enterprise Custom Solution',
      price: '$10,000 – $50,000',
      badge: 'Complex Portals & Scalable Web Applications',
      idealFor: 'Large enterprises, SaaS platforms, multi-tenant portals, and high-concurrency systems.',
      features: [
        'Decoupled Architecture (React Frontend + Laravel Backend)',
        'Custom RESTful APIs & Third-Party System Integrations',
        'Role-Based Access Control (RBAC) & Secure Portals',
        'High-Concurrency Database Optimization (PostgreSQL / MySQL)',
        'Multi-Region Cloud Infrastructure & Automated CI/CD',
        'Full Digital Authority Architecture (SEO, AEO, GEO, PPC)',
        'Dedicated SLA & 24/7 Priority Emergency Monitoring',
        'Custom Security Hardening & Penetration Testing'
      ]
    }
  ];

  const reviews = [
    {
      quote: "I have started a long term business relationship with Arun, for SEO optimization and web architecture. This is his first month on the job and I will continue assessing his achievements over the coming months. Outstanding professionalism.",
      author: "Anis",
      business: "eCommerce Clothing Store",
      location: "Saudi Arabia"
    },
    {
      quote: "Arun did a great job of improving our SEO and building our custom web assets on this project. We'll definitely be working with him on the next one.",
      author: "Ray",
      business: "Wireless Products",
      location: "USA"
    },
    {
      quote: "Very good developer and writer! Delivered clean, fast-loading code that exceeded our expectations.",
      author: "Kivi",
      business: "IT Industry",
      location: "France"
    },
    {
      quote: "Great work! Though the work required lot of time to be completed, Arun didn't gave up and completed the work even though the money he'll receive was very less! Awesome person and developer! Recommend to anyone!",
      author: "Abhishek",
      business: "Branding & Creative Services",
      location: "Brazil"
    },
    {
      quote: "Mr Arun is an honest and professional person. Clean code, punctual delivery, and zero hidden fees. We will work together again.",
      author: "Hanz",
      business: "eCommerce Fashion Shop",
      location: "Ireland"
    },
    {
      quote: "Expert with an eye for detail. Built our dental practice site with speed and precision. I strongly recommend him for all your web design and SEO needs.",
      author: "Kamlesh",
      business: "Dental Practice",
      location: "Poland"
    }
  ];

  const faqs = [
    {
      q: 'How much does a custom website cost with UDMIDEAS?',
      a: 'Our custom website projects start at $500 for a 5-page custom-coded website. Business growth packages are $1,500, multilingual international websites are $3,000, custom eCommerce stores start at $4,000, and large-scale enterprise custom web applications range from $10,000 to $50,000 depending on complexity.'
    },
    {
      q: 'Is web hosting really free for the first year?',
      a: 'Yes, 100%. Every website we build includes 1 full year of blazing-fast cloud hosting at zero extra charge. After the first year, you can choose to renew hosting with us at competitive rates or migrate to any host of your choice with zero penalty.'
    },
    {
      q: 'What is included in the 1-year free maintenance support?',
      a: 'Our 1-year free maintenance covers technical bug fixes, security patch updates, daily/weekly automated backups, minor text/image updates, SSL certificate renewals, and server performance monitoring to ensure 99.9% uptime.'
    },
    {
      q: 'What do I need to purchase myself?',
      a: 'The only thing you need to buy yourself is your domain name (e.g., from Namecheap or GoDaddy). You retain 100% ownership and administrative control over your domain at all times.'
    },
    {
      q: 'Why do you avoid pre-made templates and page builders like Elementor or Divi?',
      a: 'Pre-made commercial templates and page builders bundle thousands of lines of unused JavaScript, heavy CSS files, and bloated database queries. They cause poor Core Web Vitals scores, slow load times, security vulnerabilities, and code bloat that hurts organic Google rankings. We code by hand to guarantee sub-second speeds.'
    },
    {
      q: 'What technology stack do you use?',
      a: 'Our primary frontend stack is React JS for lightning-fast, reactive user experiences. For backend systems, we use modern PHP frameworks like Laravel and CodeIgniter, as well as lightweight, bespoke WordPress setups engineered without page builders.'
    },
    {
      q: 'How long does it take to design and build a website?',
      a: 'A standard 5-to-10 page custom website typically takes 2 to 3 weeks from discovery to launch. Larger multilingual sites and custom eCommerce platforms take 3 to 5 weeks, while enterprise web applications require 6 to 12 weeks depending on feature scope.'
    },
    {
      q: 'Will my website be mobile-friendly and responsive?',
      a: 'Yes. Over 60% of web traffic comes from mobile devices. Every website we build is engineered mobile-first and tested rigorously across iOS and Android smartphones, tablets, laptops, and ultra-wide desktop monitors.'
    },
    {
      q: 'Do you guarantee 90+ scores on Google Core Web Vitals?',
      a: 'Yes. Because our code is handcrafted without bloated dependencies, our sites routinely score 95+ on Google PageSpeed Insights with Largest Contentful Paint (LCP) under 1.2 seconds and Cumulative Layout Shift (CLS) of 0.00.'
    },
    {
      q: 'Is SEO included in the website design and development?',
      a: 'Yes. We are an SEO-first agency. Every site includes semantic HTML markup, clean URL architecture, optimized header tags, meta titles, meta descriptions, image alt tags, XML sitemaps, robots.txt, and complete JSON-LD schema markup.'
    },
    {
      q: 'What are AEO and GEO, and why are they built into your websites?',
      a: 'AEO (Answer Engine Optimization) structures content so Google AI Overviews and voice search cite your website. GEO (Generative Engine Optimization) formats your brand data and entities so AI models like ChatGPT, Perplexity, Claude, and Gemini recommend your business.'
    },
    {
      q: 'Can you build multilingual websites with separate languages?',
      a: 'Yes. We engineer genuine multilingual architectures with dedicated language paths (/es/, /fr/, /de/, /ar/, /he/) rather than inaccurate Google Translate widgets. Each language has localized keywords, metadata, and automated hreflang tags.'
    },
    {
      q: 'Do you support Right-to-Left (RTL) languages like Arabic and Hebrew?',
      a: 'Yes. We build native RTL bi-directional layouts for Middle Eastern markets (UAE, Saudi Arabia, Qatar, Israel). Layouts, navigation drawers, carousels, and typography are properly mirrored.'
    },
    {
      q: 'Do I own 100% of the website source code?',
      a: 'Yes, absolutely. Once final payment is made, you own 100% of all code, graphics, content, and databases. We provide full repository access with zero vendor lock-in.'
    },
    {
      q: 'Can I update content myself after the website is launched?',
      a: 'Yes. We can provide an intuitive, lightweight administrative dashboard or headless CMS where you can easily publish blog posts, update services, edit text, and change images without writing code.'
    },
    {
      q: 'Will the website have a contact form and WhatsApp button?',
      a: 'Yes. Every site includes custom inquiry forms that send instant email notifications directly to your inbox, along with a persistent, click-to-chat WhatsApp button for immediate lead capture.'
    },
    {
      q: 'How do you handle website security and SSL certificates?',
      a: 'We implement free automatic SSL certificates (HTTPS), security headers, CSRF protection, SQL injection prevention, rate limiting on contact forms, and firewall protection via Cloudflare.'
    },
    {
      q: 'Can you migrate my existing website without losing Google rankings?',
      a: 'Yes. We perform a complete URL inventory and implement 301 redirect mappings for every legacy page, ensuring all existing backlink equity and organic rankings are fully preserved.'
    },
    {
      q: 'Can you build eCommerce websites with payment processing?',
      a: 'Yes. We develop high-converting custom eCommerce stores on WooCommerce, Laravel, or custom React setups integrated with Stripe, PayPal, Apple Pay, Google Pay, and regional payment gateways.'
    },
    {
      q: 'Do you offer ongoing marketing services after launch?',
      a: 'Yes. Because UDMIDEAS is a full-service agency, we offer international SEO retainers, AEO/GEO optimization, Google Ads (PPC), Meta Ads, content marketing, and Social Media Marketing (SMM) under one roof.'
    },
    {
      q: 'Who will I be working with during the project?',
      a: 'You will work directly with Arun, founder of UDMIDEAS, who has 15+ years of hands-on experience in web development and technical SEO. You will not be passed off to junior account managers.'
    },
    {
      q: 'What industries have you built websites for?',
      a: 'We have built sites for dental clinics, healthcare providers, construction contractors, tour and travel operators, eCommerce brands, freight and logistics companies, software/SaaS companies, and law firms across 5 continents.'
    },
    {
      q: 'Do you provide copywriting and image assets?',
      a: 'Yes. We craft tailored, conversion-focused copywriting that communicates your value proposition clearly and source high-quality licensed imagery and icons.'
    },
    {
      q: 'How do you handle backups?',
      a: 'We set up automated daily and weekly off-site backups so your website and database can be restored with a single click in any emergency.'
    },
    {
      q: 'Can you connect my website to our CRM or email marketing software?',
      a: 'Yes. We build custom API integrations to connect your forms directly with HubSpot, Salesforce, Mailchimp, ActiveCampaign, Klaviyo, or custom webhook endpoints.'
    },
    {
      q: 'What happens if something breaks after launch?',
      a: 'With our 1-year free maintenance guarantee, if any technical issue or bug arises, we fix it promptly at zero cost to you.'
    },
    {
      q: 'Can you redesign my existing slow or outdated website?',
      a: 'Yes. We audit your existing site, salvage your best performing content, modernize the visual design, and rebuild the code from scratch for maximum speed and conversion.'
    },
    {
      q: 'Do you provide training on how to use the website?',
      a: 'Yes. After launch, we provide a personalized walkthrough and step-by-step video tutorials demonstrating how to add new pages, update content, and manage inquiries.'
    },
    {
      q: 'What payment methods do you accept for website projects?',
      a: 'We accept bank wire transfers, Stripe, PayPal, and international corporate payments. We typically work with a standard milestone structure (deposit to start, balance upon completion and launch).'
    },
    {
      q: 'How do I get started with UDMIDEAS today?',
      a: 'Simply call or message us on WhatsApp at +91-9521186150 or send an email to soni9999arun9999@gmail.com. We will discuss your goals, recommend the right package, and provide a clear proposal within 24 hours.'
    }
  ];

  return (
    <div className="mt-12 space-y-16 text-left">
      {/* 1. What UDMIDEAS Does (Narrative Section) */}
      <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full-Stack Digital Engineering Under One Roof</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
            Website Design and Development Services by UDMIDEAS
          </h2>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-400" />
              What UDMIDEAS Does
            </h3>
            <p>
              UDMIDEAS designs and builds custom websites for businesses that want a site that earns its place. For more than 15 years our team has worked in SEO first and web development second, so every site we deliver is built to be found, read and acted on from day one. We design the interface, write the code from scratch, set up the search structure, and then, if you want it, market the site after launch. Design, development, SEO, AEO, GEO, PPC and social media sit under one roof, so you talk to one team instead of four vendors who point at each other when traffic is flat.
            </p>
            <p>
              Our main stack is <strong className="text-white">React JS</strong>. We also build with <strong className="text-white">PHP frameworks</strong> when a project calls for them. Websites start at <span className="text-emerald-400 font-bold">$500</span>, include <span className="text-emerald-400 font-bold">one year of hosting and one year of maintenance support at no extra cost</span>, and the only thing you buy yourself is the domain name.
            </p>
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="text-xs sm:text-sm text-slate-300">
                Ready to talk directly with Founder Arun? <span className="text-emerald-400 font-bold">Call or WhatsApp: +91-9521186150</span>
              </div>
              <a
                href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20Website%20Design%20and%20Development%20Services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Arun Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 9-Step Build Process */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-2">
            Systematic Engineering Workflow
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How We Build: From First Call to a Site That Converts
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            A website only succeeds when rigorous discovery, custom clean code, and search engine architecture work in unison. Here is our exact 9-step delivery blueprint:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/80 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-900/50 px-2.5 py-0.5 rounded">
                    STEP {s.step}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Tech Stack & Engineering Philosophy */}
      <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Engineered For Speed & Durability
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Our Main Tech Stack: React JS & Modern PHP Frameworks
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            We deliberately reject bloated visual site builders that generate nested `div` soups and hundreds of unused CSS files. Instead, we architect every view with production-grade engineering:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-850 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">React JS Frontend</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Modular component-driven architecture, instant client-side routing, zero layout reflows, and lightning state transitions. Provides the seamless feel of a native mobile app on any web browser.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-850 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">PHP Frameworks (Laravel & CodeIgniter)</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              When dynamic databases, custom user authentication, and high-throughput APIs are required, we engineer bulletproof PHP backends with strict MVC patterns and high-efficiency SQL queries.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-850 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Handcrafted Custom WordPress</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              When clients require an easy CMS, we code bespoke WordPress themes from scratch. Zero Elementor, zero Divi, and zero plugin overload — delivering 95+ PageSpeed scores reliably.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Built to Rank: SEO, AEO & GEO Engineered From Day One */}
      <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Triple-Engine Optimization
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Built to Rank: SEO, AEO & GEO From the Very First Commit
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Most web development shops build a pretty website and tell you to "hire an SEO person later." We do the exact opposite. Because Arun has specialized in SEO for 15+ years, the entire architecture is engineered to rank from day one:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-3">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
              <Search className="w-4 h-4" />
              <span>1. Technical Core SEO</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Semantic HTML5 outlines, automated XML sitemaps, clean canonical tags, descriptive image metadata, and strict Core Web Vitals guarantees (<span className="text-emerald-400 font-mono">LCP &lt; 1.2s</span>, <span className="text-emerald-400 font-mono">CLS 0.00</span>).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-3">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
              <Bot className="w-4 h-4" />
              <span>2. Answer Engine Optimization (AEO)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Structured Q&A patterns, definition summaries, and FAQ schema designed specifically to capture Google Featured Snippets and voice search answers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>3. Generative Engine Optimization (GEO)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Deep JSON-LD knowledge graphs connecting your brand, credentials, and offerings so AI models (ChatGPT, Perplexity, Claude, Gemini) cite you as the authoritative source.
            </p>
          </div>
        </div>
      </section>

      {/* 5. 50-Year Internet History Table (1976 to 2027+) */}
      <section className="space-y-4">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Historical Evolution & Technological Trajectory
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            50-Year Internet History (1976 to 2027+): The Evolution of Web Architecture
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Understanding the five-decade evolution of the internet reveals why modern custom coding and AI generative readiness are critical for business longevity:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Era</th>
                <th className="py-3.5 px-4 sm:px-6">Milestone & Paradigm</th>
                <th className="py-3.5 px-4 sm:px-6">Dominant Technology</th>
                <th className="py-3.5 px-4 sm:px-6">Commercial Business Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {internetHistory.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400 whitespace-nowrap">
                    {item.era}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-white">
                    {item.milestone}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300 text-xs">
                    {item.tech}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-400 text-xs leading-relaxed">
                    {item.businessImpact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Benefits of Having a Custom Website Table */}
      <section className="space-y-4">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Commercial Advantages
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Key Benefits of Having a High-Performance Custom Website
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Why investing in a custom-coded web asset outperforms rented social media channels and off-the-shelf templates every single time:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Benefit Category</th>
                <th className="py-3.5 px-4 sm:px-6">Why It Matters For Business Growth</th>
                <th className="py-3.5 px-4 sm:px-6">UDMIDEAS Custom Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {websiteBenefits.map((b, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{b.category}</span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300 text-xs leading-relaxed">
                    {b.importance}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-400 text-xs font-medium leading-relaxed">
                    {b.udmideasAdvantage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. Website Packages & Transparent Pricing Table ($500 to $50,000) */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Transparent Investment Tiers
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Website Packages & Pricing ($500 to $50,000)
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Every package includes <span className="text-emerald-400 font-bold">1 Year of Free Cloud Hosting</span> and <span className="text-emerald-400 font-bold">1 Year of Maintenance Support</span>. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl flex flex-col justify-between transition-all ${
                pkg.popular
                  ? 'bg-slate-900 border-2 border-blue-500 shadow-2xl shadow-blue-500/10'
                  : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-slate-800 text-blue-300 border border-slate-700">
                    {pkg.badge}
                  </span>
                  {pkg.popular && (
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-blue-600 text-white">
                      POPULAR
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-extrabold text-white mb-2">{pkg.name}</h3>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono mb-3">
                  {pkg.price}
                </div>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  <strong className="text-slate-300">Target Fit:</strong> {pkg.idealFor}
                </p>

                <div className="space-y-2.5 mb-8">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Included Features:
                  </div>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <a
                  href={`https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20(${pkg.price}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Choose {pkg.name.split(' ')[0]} Package</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. eCommerce Websites & eCommerce SEO */}
      <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
            Online Store Engineering
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            High-Performance eCommerce Websites & eCommerce SEO
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Building an online store requires more than displaying product cards. We engineer custom eCommerce platforms that convert casual browsers into repeat buyers, backed by technical product schema that wins Google Shopping organic placements:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-2">
            <ShoppingBag className="w-6 h-6 text-purple-400" />
            <h3 className="text-sm font-bold text-white">One-Page Frictionless Checkout</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Eliminate cart abandonment with streamlined, single-screen checkouts supporting Stripe, PayPal, Apple Pay, and local gateways.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-2">
            <TrendingUp className="w-6 h-6 text-emerald-400" />
            <h3 className="text-sm font-bold text-white">Product Schema Markup</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every SKU automatically renders JSON-LD product data with price, stock status, ratings, and variants for Google search snippets.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-2">
            <Database className="w-6 h-6 text-blue-400" />
            <h3 className="text-sm font-bold text-white">Instant Faceted Filtering</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Filter thousands of products by size, color, brand, and price without page reloads or lagging server roundtrips.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-2">
            <Globe2 className="w-6 h-6 text-emerald-400" />
            <h3 className="text-sm font-bold text-white">Multi-Currency & Regional Tax</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Accept USD, EUR, GBP, AED, and local currencies with automated geo-location detection and compliant sales tax logic.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Post-Launch Marketing Under One Roof */}
      <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Complete Digital Synergy
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Post-Launch Marketing Under One Roof: SEO, AEO, GEO, PPC & SMM
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            The biggest mistake companies make is hiring a web agency to build the site, an SEO freelancer to audit it, a Google Ads agency to run PPC, and a social media agency to post content. When traffic drops, each vendor points fingers at the other.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
            At UDMIDEAS, the team that writes your code also manages your search rankings, answer engine citations, paid search campaigns, and brand storytelling. Everything connects, analytics are tracked server-side, and results are measured in revenue rather than vanity metrics.
          </p>
        </div>
      </section>

      {/* 10. Real Client Reviews (6 Verified Testimonials) */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Verified Global Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Client Reviews: Real Feedback From Businesses Worldwide
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            See what founders and business leaders across the USA, Middle East, Europe, and Latin America say about working directly with Arun:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all text-left"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-4">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <div className="text-xs font-bold text-white">{rev.author}</div>
                <div className="text-[11px] text-blue-400">{rev.business}</div>
                <div className="text-[11px] text-slate-500 font-mono">{rev.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. 30 Frequently Asked Questions (Accordion) */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Exhaustive Technical & Commercial Clarity
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            30 Frequently Asked Questions About Our Web Design & Development Services
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Clear, transparent answers to every question about pricing, hosting, maintenance, tech stack, timelines, and post-launch support:
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-850/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-blue-400 shrink-0 mt-0.5">
                      Q{String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <div className="text-slate-400 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pt-1 sm:px-5 sm:pb-6 border-t border-slate-850/60 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p className="pl-7">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 12. Final Call to Action */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-950/60 via-slate-900 to-emerald-950/40 border border-blue-500/30 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Clock className="w-3.5 h-3.5" />
          <span>Quick 24-Hour Turnaround On Proposals</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
          Start Your Custom Website Project with UDMIDEAS Today
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Get a handcrafted, sub-second custom website starting at just <strong className="text-emerald-400">$500</strong> with <strong className="text-white">1 Year of Free Hosting</strong> and <strong className="text-white">1 Year of Free Maintenance</strong> included. Speak directly with Founder Arun.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20want%20to%20start%20a%20website%20project%20with%20UDMIDEAS."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-950/60 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp: +91-9521186150</span>
          </a>

          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-950/60 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Submit Email Inquiry to Arun</span>
          </a>
        </div>
      </section>
    </div>
  );
};
