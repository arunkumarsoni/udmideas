import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Code2,
  CreditCard,
  Globe2,
  HelpCircle,
  Layers,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Target,
  Zap
} from 'lucide-react';

export const UsaServicesContent: React.FC = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [stateSearch, setStateSearch] = useState<string>('');

  const fiveStages = [
    {
      step: '01',
      text: 'We build a fast, mobile-first store on the right platform.'
    },
    {
      step: '02',
      text: 'We set up checkout, sales tax, shipping and payments.'
    },
    {
      step: '03',
      text: 'We rank product, category and city pages in Google.'
    },
    {
      step: '04',
      text: 'We advertise through Google Shopping, Meta, TikTok and Pinterest.'
    },
    {
      step: '05',
      text: 'We report on sales, ROAS and search visibility every month.'
    }
  ];

  const storeTypes = [
    'B2C stores for direct retail sales',
    'B2B and wholesale stores with account pricing, tax-exempt buyers and bulk orders',
    'D2C stores that reduce dependence on Amazon and other marketplaces',
    'Multi-vendor marketplaces with vendor onboarding, commissions and payouts',
    'Mobile-friendly stores, custom shopping carts and full redesigns',
    'Platform migrations that protect your current rankings'
  ];

  const platforms = [
    {
      platform: 'Shopify',
      recommendedWhen: 'You want a fast launch and a small or mid-size catalog',
      tradeOff: 'Monthly app costs add up'
    },
    {
      platform: 'WooCommerce',
      recommendedWhen: 'Content and SEO drive your sales',
      tradeOff: 'Needs good hosting and updates'
    },
    {
      platform: 'BigCommerce',
      recommendedWhen: 'Your catalog is growing and you need B2B features',
      tradeOff: 'Plan limits by revenue tier'
    },
    {
      platform: 'Magento',
      recommendedWhen: 'You run a large catalog or complex B2B',
      tradeOff: 'Higher build and maintenance cost'
    },
    {
      platform: 'Custom React JS',
      recommendedWhen: 'You need a marketplace or a unique workflow',
      tradeOff: 'Longer build time'
    }
  ];

  const seoDeliverables = [
    'Keyword research by product, buying stage and location.',
    'Product page SEO with unique titles, descriptions, headings and image alt text.',
    'Category page optimization so broad terms rank before brand terms.',
    'Technical SEO covering crawl control, faceted navigation, canonical tags and page speed.',
    'Structured data using Product schema for price, stock and review rich results.',
    'Google Merchant Center feed optimization for free listings and Shopping ads.',
    'Link building and digital PR from US sites in your industry.'
  ];

  const aeoGeoBullets = [
    'Put short, direct answers at the top of product and category pages',
    'Add FAQ, Product, Organization and Review schema',
    'Build clear entity signals: business name, address, policies and shipping terms',
    'Earn mentions on trusted sites that AI systems cite'
  ];

  const checkoutAreas = [
    {
      area: 'Sales tax',
      implementation:
        'Tax automation through tools such as Shopify Tax, TaxJar or Avalara, and exemption certificates for B2B buyers'
    },
    {
      area: 'Payments',
      implementation:
        'Stripe, PayPal, Apple Pay, Google Pay, Shop Pay and buy now pay later options'
    },
    {
      area: 'Privacy',
      implementation:
        'Privacy pages, consent tools and opt-out links for laws such as CCPA and CPRA'
    },
    {
      area: 'Accessibility',
      implementation:
        'Keyboard navigation, contrast, labels and accessible checkout, following WCAG 2.1 AA practices'
    },
    {
      area: 'Shipping and returns',
      implementation:
        'USPS, UPS and FedEx rates, tracking emails, free shipping thresholds and clear return terms'
    }
  ];

  const majorStatesAndCities: { state: string; cities: string; href?: string }[] = [
    { state: 'California', cities: 'Los Angeles, San Francisco, San Diego, San Jose, Sacramento', href: '/california/' },
    { state: 'Texas', cities: 'Houston, Dallas, Austin, San Antonio, Fort Worth', href: '/texas/' },
    { state: 'Florida', cities: 'Miami, Orlando, Tampa, Jacksonville', href: '/florida/' },
    { state: 'New York', cities: 'New York City, Buffalo, Rochester, Albany', href: '/new-york/' },
    { state: 'Illinois', cities: 'Chicago, Aurora, Naperville', href: '/illinois/' },
    { state: 'Pennsylvania', cities: 'Philadelphia, Pittsburgh', href: '/pennsylvania/' },
    { state: 'Ohio', cities: 'Columbus, Cleveland, Cincinnati', href: '/ohio/' },
    { state: 'Georgia', cities: 'Atlanta, Savannah', href: '/georgia/' },
    { state: 'North Carolina', cities: 'Charlotte, Raleigh', href: '/north-carolina/' },
    { state: 'Michigan', cities: 'Detroit, Grand Rapids', href: '/michigan/' },
    { state: 'New Jersey', cities: 'Newark, Jersey City', href: '/new-jersey/' },
    { state: 'Virginia', cities: 'Virginia Beach, Richmond', href: '/virginia/' },
    { state: 'Washington', cities: 'Seattle, Tacoma, Spokane', href: '/washington/' },
    { state: 'Arizona', cities: 'Phoenix, Scottsdale, Tucson', href: '/arizona/' },
    { state: 'Massachusetts', cities: 'Boston, Worcester', href: '/massachusetts/' },
    { state: 'Tennessee', cities: 'Nashville, Memphis', href: '/tennessee/' },
    { state: 'Colorado', cities: 'Denver, Colorado Springs', href: '/colorado/' },
    { state: 'Nevada', cities: 'Las Vegas, Reno', href: '/nevada/' },
    { state: 'Oregon', cities: 'Portland', href: '/oregon/' },
    { state: 'Minnesota', cities: 'Minneapolis', href: '/minnesota/' },
    { state: 'Utah', cities: 'Salt Lake City', href: '/utah/' },
    { state: 'Maryland', cities: 'Baltimore', href: '/maryland/' },
    { state: 'Missouri', cities: 'Kansas City, St. Louis', href: '/missouri/' },
    { state: 'Indiana', cities: 'Indianapolis', href: '/indiana/' },
    { state: 'District of Columbia', cities: 'Washington, DC' }
  ];

  const otherStateRegions = [
    {
      region: 'South and Southeast',
      states: 'Alabama, Arkansas, Kentucky, Louisiana, Mississippi, Oklahoma, South Carolina, West Virginia'
    },
    {
      region: 'Northeast',
      states: 'Connecticut, Delaware, Maine, New Hampshire, Rhode Island, Vermont'
    },
    {
      region: 'Midwest and Plains',
      states: 'Iowa, Kansas, Nebraska, North Dakota, South Dakota, Wisconsin'
    },
    {
      region: 'West and Mountain',
      states: 'Alaska, Hawaii, Idaho, Montana, New Mexico, Wyoming'
    }
  ];

  const whyChoosePoints = [
    '15+ years of website and digital marketing experience',
    'Custom-coded eCommerce solutions, not templates',
    'SEO-optimized stores with dedicated eCommerce SEO experts',
    'International client experience across several regions',
    'Complete eCommerce marketing under one team',
    'Maintenance and support after launch'
  ];

  const processSteps = [
    'Research your business, products and local competitors.',
    'Plan the site structure and UI/UX design.',
    'Develop the custom store.',
    'Set up products, categories and legal pages.',
    'Integrate payments, sales tax and shipping.',
    'Optimize technical SEO and speed.',
    'Launch PPC and social media campaigns.',
    'Create product videos and content.',
    'Report rankings, sales and ROAS every month.'
  ];

  const faqs = [
    {
      q: '1. Does UDMIDEAS build custom eCommerce websites for US businesses?',
      a: 'Yes. UDMIDEAS builds custom B2C, B2B, D2C and marketplace stores for businesses in every US state.'
    },
    {
      q: '2. Which eCommerce platforms does UDMIDEAS work with?',
      a: 'We work with Shopify, WooCommerce, BigCommerce, Magento and custom React JS builds, and recommend one after reviewing your needs.'
    },
    {
      q: '3. Does UDMIDEAS provide eCommerce SEO for specific cities and states?',
      a: 'Yes. We build unique city and state landing pages where local demand exists, and focus on product and category pages for nationwide stores.'
    },
    {
      q: '4. Can UDMIDEAS set up sales tax in my store?',
      a: 'Yes. We connect tax automation tools and set up exemptions for B2B buyers. Your tax adviser confirms where you must collect tax.'
    },
    {
      q: '5. Does UDMIDEAS help with CCPA and other privacy rules?',
      a: 'We set up privacy pages, consent tools and opt-out links. A lawyer should review your final legal texts.'
    },
    {
      q: '6. Can UDMIDEAS make my store ADA accessible?',
      a: 'We build to WCAG 2.1 AA practices and test keyboard use, contrast and forms. Accessibility needs ongoing checks as content changes.'
    },
    {
      q: '7. Does UDMIDEAS manage Google Shopping and social ads?',
      a: 'Yes. We manage Google Shopping, Search, Performance Max, Meta, TikTok and Pinterest campaigns, with feed optimization and conversion tracking.'
    },
    {
      q: '8. Does UDMIDEAS work on AEO and GEO for online stores?',
      a: 'Yes. We optimize pages, schema and entity signals so AI search tools can understand and cite your store.'
    },
    {
      q: '9. Can UDMIDEAS migrate my store without losing rankings?',
      a: 'Yes. We map old URLs to new ones, keep metadata and test redirects before launch.'
    },
    {
      q: '10. Does UDMIDEAS offer ongoing maintenance and SEO?',
      a: 'Yes. We offer monthly maintenance, speed checks, security updates and SEO reporting.'
    }
  ];

  const filteredStates = majorStatesAndCities.filter((row) => {
    const q = stateSearch.trim().toLowerCase();
    if (!q) return true;
    return (
      row.state.toLowerCase().includes(q) ||
      row.cities.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-12 sm:space-y-16 text-left">
      {/* 1. Hero Section */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#475569]">
          <span className="font-semibold text-[#1D4ED8] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/80 uppercase tracking-[0.08em]">
            – UNITED STATES · ALL 50 STATES &amp; CITIES
          </span>
          <span aria-hidden="true">·</span>
          <span className="text-[#0F172A] font-semibold">USA HQ NYC 10001</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#B45309] font-mono font-semibold">★ 15+ Years SEO Experience</span>
        </div>

        <h1 className="text-[30px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#0F172A] tracking-[-0.02em] leading-[1.15] text-balance">
          UDMIDEAS USA eCommerce Website Development &amp; SEO - Digital Marketing Services in All States and Cities
        </h1>

        <p className="text-base sm:text-lg text-[#475569] leading-[1.65] max-w-4xl">
          UDMIDEAS is a digital marketing and web development agency that builds, ranks and grows online stores across the United States. Our USA eCommerce website development team writes custom code, sets up sales tax and payments, and ranks your products in Google. We have more than 15 years of experience in SEO, PPC and social media, and our founder, <strong className="text-[#0F172A] font-semibold">Arun</strong>, still works on projects himself. We serve online stores in all 50 states, from large cities to small towns.
        </p>

        {/* Core Problem Callout */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-blue-200/80 shadow-sm max-w-4xl">
          <div className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-[0.08em] mb-2">
            – BUILT TO FIX WHY US STORES LOSE SALES
          </div>
          <p className="text-sm sm:text-base text-[#0F172A] leading-[1.65]">
            Most US stores lose sales for simple reasons. The site is slow on mobile. Product pages copy the manufacturer&apos;s text. Ads send traffic to weak pages. UDMIDEAS fixes this by building the store, the content and the marketing as one project.
          </p>
        </div>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="#inquiry-form"
            className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-sm hover:shadow-md transition-all duration-200 w-full sm:w-auto"
          >
            <span>Get Free US eCommerce &amp; SEO Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20a%20free%20USA%20eCommerce%20and%20SEO%20audit."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#0F172A] bg-white hover:bg-slate-50 border border-[#E2E8F0] hover:border-[#1D4ED8]/40 shadow-xs transition-all duration-200 w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp: +91-9521186150</span>
          </a>
        </div>
      </header>

      {/* 2. What UDMIDEAS Does for US eCommerce Online Stores */}
      <section className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-6">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em]">
            – UNIFIED US ECOMMERCE EXECUTION
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            What UDMIDEAS Does for US eCommerce Online Stores
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            UDMIDEAS provides USA eCommerce website development, SEO and digital marketing as one service. We build your custom online store, set up checkout and sales tax, rank your products in Google, and run the ads and social campaigns that bring buyers.
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-bold text-[#0F172A] uppercase tracking-[0.08em]">
            Every UDMIDEAS project follows five stages:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {fiveStages.map((item) => (
              <div
                key={item.step}
                className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col gap-2"
              >
                <span className="text-xs font-mono font-bold text-[#1D4ED8] tabular-nums">
                  Stage {item.step}
                </span>
                <p className="text-sm text-[#0F172A] leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Custom eCommerce Website Development Services */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5" />
            <span>CUSTOM CODE · ZERO TEMPLATES</span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            Custom eCommerce Website Development Services by UDMIDEAS
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            UDMIDEAS writes custom code instead of selling you a template. Our custom eCommerce website development team builds in React JS and on Shopify, WooCommerce, BigCommerce and Magento, and picks the platform after reviewing your catalog and budget.
          </p>
        </div>

        {/* The Stores UDMIDEAS Builds */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
          <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-[#1D4ED8]" />
            <span>The Stores UDMIDEAS Builds</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {storeTypes.map((store, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                <span className="text-sm text-[#0F172A] leading-relaxed">{store}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How UDMIDEAS Chooses the Platform */}
        <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-xs overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-[#E2E8F0]">
            <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#1D4ED8]" />
              <span>How UDMIDEAS Chooses the Platform</span>
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#0F172A] text-white text-xs uppercase tracking-[0.06em]">
                  <th className="py-3.5 px-5 font-semibold">Platform</th>
                  <th className="py-3.5 px-5 font-semibold">UDMIDEAS recommends it when</th>
                  <th className="py-3.5 px-5 font-semibold">Trade-off</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-sm">
                {platforms.map((row) => (
                  <tr key={row.platform} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="py-4 px-5 font-bold text-[#0F172A] whitespace-nowrap">
                      {row.platform}
                    </td>
                    <td className="py-4 px-5 text-[#475569]">{row.recommendedWhen}</td>
                    <td className="py-4 px-5 text-[#475569]">{row.tradeOff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-5 sm:p-6 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-start gap-3">
            <Zap className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
            <p className="text-sm sm:text-[15px] text-[#475569] leading-[1.65]">
              Every store we deliver includes mobile-first design, Core Web Vitals tuning, clean URLs, product and breadcrumb schema, an XML sitemap and sales tracking. UDMIDEAS tunes speed first, because most US shoppers browse on phones and leave slow pages quickly.
            </p>
          </div>
        </div>
      </section>

      {/* 4. How UDMIDEAS Brings Buyers: SEO, Local SEO, PPC, SMM, AEO & GEO */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em]">
            – MULTI-CHANNEL BUYER ACQUISITION
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            How UDMIDEAS Brings Buyers: eCommerce SEO, PPC, Social Media and Video
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            A store with no traffic earns nothing. UDMIDEAS runs search, paid ads, social media and video from one plan, so your budget works across channels.
          </p>
        </div>

        {/* eCommerce SEO for US Stores */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
          <div className="space-y-1.5">
            <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
              <Search className="w-5 h-5 text-[#1D4ED8]" />
              <span>UDMIDEAS eCommerce SEO for US Stores</span>
            </h3>
            <p className="text-sm sm:text-base text-[#475569]">
              Our eCommerce SEO team delivers the following for every store:
            </p>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {seoDeliverables.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]"
              >
                <span className="text-xs font-mono font-bold text-[#1D4ED8] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md tabular-nums shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <span className="text-sm text-[#0F172A] leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Local SEO + PPC & Social Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A]">
                UDMIDEAS Local SEO for eCommerce Brands
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-[1.65]">
                If your store has a warehouse, showroom or pickup point, UDMIDEAS sets up Google Business Profile, city and state landing pages, local schema and review requests, so nearby shoppers find you first. Get in touch today with us for high-quality SEO services, as we are one of the best and most trusted SEO companies in the USA.
              </p>
            </div>
            <div>
              <a
                href="/multilingual-search-engine-optimization/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors group"
              >
                <span>Explore SEO Services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A]">
                UDMIDEAS PPC and Social Media Marketing
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-[1.65]">
                UDMIDEAS manages Google Shopping, Search and Performance Max, plus Meta, TikTok and Pinterest ads. We clean your product feed first, then add conversion tracking, dynamic remarketing and ROAS targets by product group. We also run Instagram, Facebook and TikTok posts, reels, influencer campaigns and retargeting, backed by product photography and video.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/pay-per-click/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors group"
              >
                <span>See our PPC management services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <a
                href="/social-media-marketing/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors group"
              >
                <span>Social Media &amp; Video</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* AEO and GEO */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
          <div className="space-y-2">
            <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI ANSWER ENGINE VISIBILITY</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
              UDMIDEAS AEO and GEO: Be the Answer in AI Search
            </h3>
            <p className="text-sm sm:text-base text-[#475569] leading-[1.65]">
              Shoppers now ask ChatGPT, Gemini, Perplexity and Google AI Overviews which store to buy from. UDMIDEAS prepares your store for these answers through Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO). We:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {aeoGeoBullets.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                <span className="text-sm text-[#0F172A] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E2E8F0]">
            <a
              href="/answer-engine-optimization/"
              className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#1D4ED8] bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              Explore AEO Services →
            </a>
            <a
              href="/generative-engine-optimization/"
              className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#1D4ED8] bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              Explore GEO Services →
            </a>
          </div>
        </div>
      </section>

      {/* 5. Checkout: Sales Tax, Payments, Privacy & Shipping */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
            <CreditCard className="w-3.5 h-3.5" />
            <span>US CHECKOUT &amp; COMPLIANCE SETUP</span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            What UDMIDEAS Sets Up at Checkout: Sales Tax, Payments, Privacy and Shipping
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            The US has no single national sales tax or privacy law, so each store needs a setup that fits where it sells. UDMIDEAS builds the technical side and tells you where a tax adviser or lawyer should review. <em className="text-[#0F172A] not-italic font-medium">This is general information, not legal or tax advice.</em>
          </p>
        </div>

        <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-[#0F172A] text-white text-xs uppercase tracking-[0.06em]">
                  <th className="py-3.5 px-5 font-semibold w-52">Area</th>
                  <th className="py-3.5 px-5 font-semibold">What UDMIDEAS implements</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-sm">
                {checkoutAreas.map((row) => (
                  <tr key={row.area} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="py-4 px-5 font-bold text-[#0F172A] whitespace-nowrap">
                      {row.area}
                    </td>
                    <td className="py-4 px-5 text-[#475569] leading-relaxed">
                      {row.implementation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-5 sm:p-6 bg-[#F8FAFC] border-t border-[#E2E8F0] text-sm text-[#475569] leading-relaxed">
            Sellers who ship into many states should check sales tax rules state by state, since economic nexus rules differ. UDMIDEAS configures the store to match what your tax adviser confirms.
          </div>
        </div>
      </section>

      {/* 6. Where UDMIDEAS Works: Every US State & City */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl space-y-2.5">
            <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>NATIONWIDE 50-STATE COVERAGE</span>
            </div>
            <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
              Where UDMIDEAS Works: eCommerce Development and SEO in Every US State and City
            </h2>
            <p className="text-base text-[#475569] leading-[1.65]">
              UDMIDEAS works with online stores across the country, remotely and in every time zone. Each state and city has its own competitors and search habits, so we research your local market before we write a single page.
            </p>
          </div>

          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter state or city..."
              value={stateSearch}
              onChange={(e) => setStateSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
            />
          </div>
        </div>

        {/* Major States & Cities Table */}
        <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[520px]">
              <thead>
                <tr className="bg-[#0F172A] text-white text-xs uppercase tracking-[0.06em]">
                  <th className="py-3.5 px-5 font-semibold w-56">State</th>
                  <th className="py-3.5 px-5 font-semibold">Cities UDMIDEAS serves</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-sm">
                {filteredStates.length === 0 ? (
                  <tr>
                    <td colSpan={2} className="py-6 px-5 text-center text-[#475569]">
                      No states or cities matched &ldquo;{stateSearch}&rdquo;. Try another US state or city name.
                    </td>
                  </tr>
                ) : (
                  filteredStates.map((row) => (
                    <tr key={row.state} className="hover:bg-[#F8FAFC] transition-colors">
                      <td className="py-3.5 px-5 font-bold text-[#0F172A] whitespace-nowrap">
                        {row.href ? (
                          <a href={row.href} className="text-[#1D4ED8] hover:underline">
                            {row.state}
                          </a>
                        ) : (
                          row.state
                        )}
                      </td>
                      <td className="py-3.5 px-5 text-[#475569]">{row.cities}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Other States UDMIDEAS Serves */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
          <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-[#1D4ED8]" />
            <span>Other States UDMIDEAS Serves</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherStateRegions.map((item) => (
              <div
                key={item.region}
                className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5"
              >
                <div className="text-xs font-bold text-[#1D4ED8] uppercase tracking-[0.06em]">
                  {item.region}
                </div>
                <p className="text-sm text-[#0F172A] leading-relaxed">{item.states}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How UDMIDEAS Handles City-Level Search */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-blue-200/80 shadow-xs space-y-2.5">
          <h3 className="text-xl font-bold text-[#0F172A]">
            How UDMIDEAS Handles City-Level Search
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-[1.65]">
            For stores that want city visibility, UDMIDEAS builds separate landing pages with unique content, such as &ldquo;eCommerce website development in Austin&rdquo; or &ldquo;eCommerce SEO company in Chicago&rdquo;. Each page covers local delivery or pickup, nearby customer questions and local schema. We never copy one page and swap the city name, because Google treats that as thin content. For nationwide stores, we focus on category and product pages, and use state pages only where demand justifies them.
          </p>
        </div>
      </section>

      {/* 7. Why Choose UDMIDEAS */}
      <section className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-6">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>FOUNDER-LED DELIVERY</span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            Why Choose UDMIDEAS as Your US eCommerce Growth Partner
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            UDMIDEAS is led by <strong className="text-[#0F172A]">Arun</strong>, who has worked in SEO for more than 15 years and still works hands-on in code and strategy. You speak with the people who plan and build your project. UDMIDEAS serves clients in the USA, Israel, the Gulf countries, Latin America, Europe and Australia, and we work in multiple languages, which helps US stores that sell to Spanish-speaking customers too.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {whyChoosePoints.map((point, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]"
            >
              <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
              <span className="text-sm text-[#0F172A] font-medium leading-relaxed">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. 9-Step Development & Marketing Process */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em]">
            – STEP-BY-STEP US EXECUTION ROADMAP
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            The UDMIDEAS eCommerce Development and Marketing Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {processSteps.map((stepText, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-start gap-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-600/30"
            >
              <span className="text-xs font-mono font-bold text-white bg-[#1D4ED8] px-2.5 py-1 rounded-lg tabular-nums shrink-0">
                0{idx + 1}
              </span>
              <p className="text-sm font-semibold text-[#0F172A] leading-relaxed">
                {stepText}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Talk to UDMIDEAS CTA Banner */}
      <section className="p-6 sm:p-10 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-lg text-white space-y-5">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold text-[#F59E0B] uppercase tracking-[0.08em]">
            ★ FREE US ECOMMERCE SEO &amp; WEBSITE AUDIT
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            Talk to UDMIDEAS About Your Online Store
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Get a free eCommerce SEO and website audit from UDMIDEAS. Send us your store URL and the states or cities you want to target. We will reply with a clear list of fixes and growth steps. Contact UDMIDEAS or call{' '}
            <a
              href="tel:+919521186150"
              className="text-white font-semibold underline hover:text-[#F59E0B] transition-colors"
            >
              +91-9521186150
            </a>
            .
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="#inquiry-form"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-sm transition-colors w-full sm:w-auto"
          >
            <span>Request Free Audit Below</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+919521186150"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-colors w-full sm:w-auto"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call / WhatsApp +91-9521186150</span>
          </a>
        </div>
      </section>

      {/* 10. Frequently Asked Questions (10 FAQs) */}
      <section className="space-y-5">
        <div className="space-y-2">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>USA ECOMMERCE &amp; SEO FAQ</span>
          </div>
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#0F172A] leading-tight">
            Frequently Asked Questions About UDMIDEAS SEO and eCommerce Services
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-[#E2E8F0] divide-y divide-[#E2E8F0] overflow-hidden shadow-xs">
          {faqs.map((item, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div key={idx}>
                <button
                  type="button"
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#1D4ED8] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-[15px] text-[#475569] leading-[1.65] bg-[#F8FAFC]/60">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
