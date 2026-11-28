import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Code2,
  CreditCard,
  Film,
  Globe2,
  HelpCircle,
  Layers,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Zap
} from 'lucide-react';

export const LatamServicesContent: React.FC = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const fiveStages = [
    {
      step: '01',
      text: 'We build a fast, mobile-first store on the platform that fits your catalog.'
    },
    {
      step: '02',
      text: 'We localize every page for each country, language and currency.'
    },
    {
      step: '03',
      text: 'We rank your product and category pages with technical and on-page SEO.'
    },
    {
      step: '04',
      text: 'We advertise through Google Shopping, Meta and TikTok campaigns.'
    },
    {
      step: '05',
      text: 'We report on sales, ROAS and search visibility every month.'
    }
  ];

  const storeTypes = [
    'Custom eCommerce stores built around your products and workflow',
    'B2C stores for direct retail sales',
    'B2B stores with account pricing, bulk orders and quote requests',
    'D2C stores that reduce your dependence on Mercado Libre and other marketplaces',
    'Multi-vendor marketplaces with vendor registration, commissions and payouts',
    'Wholesale and retail stores that serve both buyer types from one catalog',
    'Mobile-friendly stores tested on mid-range phones and slow networks',
    'Multilingual stores in Spanish and Portuguese with multi-currency support',
    'Custom shopping carts for unusual pricing or ordering rules',
    'eCommerce redesigns that keep your rankings while improving speed and sales'
  ];

  const platforms = [
    {
      platform: 'Shopify',
      recommendedWhen: 'You want a fast launch and a small or mid-size catalog',
      tradeOff: 'Local payments may need paid apps'
    },
    {
      platform: 'WooCommerce',
      recommendedWhen: 'Content and SEO drive your sales',
      tradeOff: 'Needs good hosting and regular updates'
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
    'Product keyword research by country, language and buying stage.',
    'Product page SEO with unique titles, descriptions, headings and image alt text.',
    'Category page optimization so broad terms rank before brand terms.',
    'Technical SEO covering crawl control, faceted navigation, canonical tags and page speed.',
    'Structured data using Product schema for price, stock and review rich results.',
    'International SEO with hreflang tags so Google shows the right version in each country.',
    'Google Shopping optimization through Google Merchant Center, plus image SEO.'
  ];

  const aeoGeoBullets = [
    'Put short, direct answers at the top of product and category pages',
    'Add FAQ, Product, Organization and Review schema',
    'Build clear entity signals: your business name, address, policies and shipping terms',
    'Earn mentions on trusted local sites that AI systems cite'
  ];

  const paymentMethods = [
    {
      country: 'Brazil',
      href: '/brazil/',
      methods: 'Pix, Boleto, installment credit cards, digital wallets'
    },
    {
      country: 'Mexico',
      href: '/mexico/',
      methods: 'OXXO vouchers, SPEI, cards, Mercado Pago'
    },
    {
      country: 'Argentina',
      href: '/argentina/',
      methods: 'Mercado Pago, local cards, bank transfer'
    },
    {
      country: 'Colombia',
      href: '/colombia/',
      methods: 'PSE, Nequi, cards'
    },
    {
      country: 'Chile',
      href: '/chile/',
      methods: 'Webpay, Mach, cards'
    }
  ];

  const countryServices = [
    {
      country: 'Brazil',
      href: '/brazil/',
      services:
        'eCommerce website development, Brazilian Portuguese SEO, online store marketing and PPC'
    },
    {
      country: 'Mexico',
      href: '/mexico/',
      services:
        'Online store development, eCommerce SEO, social media marketing, Google Shopping'
    },
    {
      country: 'Argentina',
      href: '/argentina/',
      services:
        'Custom eCommerce development, product SEO, PPC and online retail marketing'
    },
    {
      country: 'Colombia',
      href: '/colombia/',
      services:
        'Store design, product marketing and SEO, social media and video advertising'
    },
    {
      country: 'Chile',
      href: '/chile/',
      services:
        'eCommerce development, local and international SEO, PPC and store promotion'
    }
  ];

  const additionalCountries: { name: string; href?: string }[] = [
    { name: 'Peru', href: '/peru/' },
    { name: 'Ecuador', href: '/ecuador/' },
    { name: 'Bolivia' },
    { name: 'Paraguay' },
    { name: 'Uruguay', href: '/uruguay/' },
    { name: 'Costa Rica', href: '/costa-rica/' },
    { name: 'Panama', href: '/panama/' },
    { name: 'Guatemala', href: '/guatemala/' },
    { name: 'Dominican Republic', href: '/dominican-republic/' },
    { name: 'Honduras' },
    { name: 'El Salvador' },
    { name: 'Nicaragua' }
  ];

  const multilingualSolutions = [
    'Spanish and Portuguese store development',
    'Native product descriptions and catalog localization',
    'Country-specific SEO and URL structure',
    'Multi-currency pricing',
    'Localized product marketing',
    'A plan to expand into the next country'
  ];

  const industries = [
    'Fashion and clothing',
    'Beauty and cosmetics',
    'Electronics and gadgets',
    'Furniture and home decor',
    'Food and grocery',
    'Health and wellness',
    'Jewelry and accessories',
    'Automotive parts',
    'Industrial and manufacturing products',
    'Wholesale and B2B',
    'Sports and fitness',
    'Toys and baby products'
  ];

  const whyChoosePoints = [
    '15+ years of website and digital marketing experience',
    'Custom-coded eCommerce solutions, not templates',
    'SEO-optimized online stores with dedicated eCommerce SEO experts',
    'International client experience across several regions',
    'Multilingual store development in Spanish and Portuguese',
    'Complete eCommerce marketing under one team',
    'Maintenance and support after launch'
  ];

  const processSteps = [
    'Research your business and competitors.',
    'Plan the site structure and UI/UX design.',
    'Develop the custom website.',
    'Set up products and categories.',
    'Integrate payments and shipping.',
    'Optimize technical SEO and speed.',
    'Launch PPC and social media campaigns.',
    'Create product videos and content.',
    'Report conversions and performance every month.'
  ];

  const faqs = [
    {
      q: '1. Does UDMIDEAS develop custom eCommerce websites for Latin American businesses?',
      a: 'Yes. UDMIDEAS builds custom B2C, B2B, D2C and marketplace stores for businesses in Brazil, Mexico, Argentina, Colombia, Chile and other LATAM countries.'
    },
    {
      q: '2. Can UDMIDEAS build online stores in Spanish and Portuguese?',
      a: 'Yes. We build stores in Spanish and Brazilian Portuguese, with native product copy, local currency and country-specific URLs.'
    },
    {
      q: '3. Which eCommerce platforms does UDMIDEAS work with?',
      a: 'Specially, we do custom coding. We work with Shopify, WooCommerce, Magento and custom React JS builds, and recommend one after reviewing your needs.'
    },
    {
      q: '4. Does UDMIDEAS provide eCommerce SEO in Brazil and Mexico?',
      a: 'Yes. We run keyword research, technical SEO, product page optimization and link building for each country in its own language.'
    },
    {
      q: '5. Can UDMIDEAS integrate local payment gateways?',
      a: 'Yes. We integrate Pix, Boleto, OXXO, PSE, Mercado Pago, Webpay and international cards, based on the countries you sell in.'
    },
    {
      q: '6. Does UDMIDEAS manage Google Shopping and Facebook Ads?',
      a: 'Yes. We manage Google Shopping, Search, Performance Max, Facebook, Instagram and TikTok ads, including feed optimization and conversion tracking.'
    },
    {
      q: '7. Can UDMIDEAS develop B2B and multi-vendor marketplaces?',
      a: 'Yes. We build wholesale stores and multi-vendor marketplaces with vendor registration, catalog management, commission rules and order tracking.'
    },
    {
      q: '8. Does UDMIDEAS provide product photography and video creation?',
      a: 'Yes. We create product photos, demo videos, reels, TikTok clips and ad videos.'
    },
    {
      q: '9. Can UDMIDEAS manage complete eCommerce digital marketing?',
      a: 'Yes. UDMIDEAS handles SEO, PPC, social media, content and reporting together.'
    },
    {
      q: '10. Does UDMIDEAS provide ongoing website maintenance and SEO?',
      a: 'Yes. We offer monthly maintenance, speed checks, security updates and SEO reporting.'
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 text-left">
      {/* 1. Hero Section */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#475569]">
          <span className="font-semibold text-[#1D4ED8] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/80 uppercase tracking-[0.08em]">
            – LATIN AMERICA (LATAM) ECOMMERCE &amp; SEO
          </span>
          <span aria-hidden="true">·</span>
          <span className="text-[#0F172A] font-semibold">Spanish, Portuguese, French, English &amp; Dutch</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#B45309] font-mono font-semibold">★ 15+ Years Experience</span>
        </div>

        <h1 className="text-[32px] sm:text-[44px] lg:text-[50px] font-extrabold text-[#0F172A] tracking-[-0.02em] leading-[1.15] text-balance">
          LATAM eCommerce Website Development, Multilingual SEO &amp; Digital Marketing.
        </h1>

        <p className="text-base sm:text-lg text-[#475569] leading-[1.65] max-w-4xl">
          UDMIDEAS is a digital marketing and web development agency that builds eCommerce and service-based websites, ranks and grows online stores across Latin American countries, targeting Spanish, Portuguese, French, English, and Dutch businesses with SEO solutions. Our LATAM eCommerce website development team writes custom code, sets up local payments, and ranks your products in Spanish and Portuguese. We have more than 15 years of experience in SEO, PPC and social media, and our founder, <strong className="text-[#0F172A] font-semibold">Arun</strong>, still works on projects himself to promote your business.
        </p>

        {/* Core Problem Callout */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-blue-200/80 shadow-sm max-w-4xl">
          <div className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-[0.08em] mb-2">
            – BUILT TO SOLVE ONE LATAM PROBLEM
          </div>
          <p className="text-sm sm:text-base text-[#0F172A] leading-[1.65]">
            We built our LATAM service around one problem. Most online stores here are a translated copy of a US or European store. They have no Pix, no OXXO, no Boleto, and product words that people in Mexico or Argentina never type into Google. UDMIDEAS fixes that by building the store, the content and the marketing together with SEO strategies.
          </p>
        </div>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="#inquiry-form"
            className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-sm hover:shadow-md transition-all duration-200 w-full sm:w-auto"
          >
            <span>Get Free LATAM eCommerce &amp; SEO Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20a%20free%20LATAM%20eCommerce%20and%20SEO%20audit."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#0F172A] bg-white hover:bg-slate-50 border border-[#E2E8F0] hover:border-[#1D4ED8]/40 shadow-xs transition-all duration-200 w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp: +91-9521186150</span>
          </a>
        </div>
      </header>

      {/* 2. What UDMIDEAS Does for LATAM Online Stores */}
      <section className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-6">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em]">
            – END-TO-END LATAM EXECUTION
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            What UDMIDEAS Does for LATAM Online Stores
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            UDMIDEAS provides LATAM eCommerce website development, SEO and digital marketing as one service. We build your custom online store, localize it in Spanish and Portuguese, connect local payments and shipping, rank it in Google, and run the ads and social campaigns that bring buyers.
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

        <div className="p-4 rounded-xl bg-[#0F172A] text-white text-sm sm:text-base font-medium leading-relaxed">
          You get one team at UDMIDEAS with one plan and monthly report, instead of four vendors who never talk to each other.
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
            UDMIDEAS writes custom code. We do not sell you a template with a logo on it. Our custom eCommerce website development team builds in React JS and on Shopify, WooCommerce and Magento, and we pick the platform after we review your catalog, countries and budget.
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
        </div>

        {/* What You Get With Every UDMIDEAS Store */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-blue-200/80 shadow-xs space-y-3">
          <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#1D4ED8]" />
            <span>What You Get With Every UDMIDEAS Store</span>
          </h3>
          <p className="text-base text-[#475569] leading-[1.65]">
            Every store we deliver includes mobile-first design, Core Web Vitals tuning, clean URLs, product and breadcrumb schema, an XML sitemap and sales tracking. We also connect inventory, order management and customer accounts. UDMIDEAS tunes speed first, because many LATAM shoppers browse on phones with unstable connections, and integrates with <strong className="text-[#0F172A]">GTM, GSC, GA4</strong> for service-based businesses and <strong className="text-[#0F172A]">Google Merchant Center</strong> for eCommerce stores.
          </p>
        </div>
      </section>

      {/* 4. How UDMIDEAS Brings Buyers: SEO, PPC, SMM, Video, AEO & GEO */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em]">
            – INTEGRATED ACQUISITION ENGINE
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            How UDMIDEAS Brings Buyers: eCommerce SEO, PPC, Social Media and Video
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            A store with no traffic earns nothing. UDMIDEAS runs search, paid ads, social media and video from one plan, so your budget works across channels.
          </p>
        </div>

        {/* eCommerce SEO for Latin America */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
              <Search className="w-5 h-5 text-[#1D4ED8]" />
              <span>UDMIDEAS eCommerce SEO for Latin America</span>
            </h3>
            <p className="text-sm sm:text-base text-[#475569] leading-[1.65]">
              Our eCommerce SEO team researches keywords in each country, because a buyer in Mexico, one in Argentina and one in Brazil describe the same product differently. For every store, UDMIDEAS delivers:
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

        {/* PPC + Social Media & Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A]">
                UDMIDEAS PPC Advertising
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-[1.65]">
                UDMIDEAS manages Google Shopping, Search and Performance Max, plus Facebook, Instagram and TikTok ads. We clean your product feed first, then set up conversion tracking, dynamic remarketing and ROAS targets by product group.
              </p>
            </div>
            <div>
              <a
                href="/pay-per-click/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors group"
              >
                <span>See our PPC management services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
                <Film className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A]">
                UDMIDEAS Social Media and Video Marketing
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-[1.65]">
                We run Instagram and Facebook store promotion, TikTok marketing, catalog management, influencer campaigns and retargeting. Our team also produces product videos, demos, explainers, reels and TikTok clips, with photography and editing included.
              </p>
            </div>
            <div>
              <a
                href="/social-media-marketing/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors group"
              >
                <span>Explore Social Media &amp; Video Services</span>
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
              <span>AI SEARCH CITATION AUTHORITY</span>
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
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#E2E8F0]">
            <p className="text-sm text-[#475569]">
              These steps also help normal rankings. Get in touch with us for UDMIDEAS AEO and GEO services to grow your online business in Latin American countries.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="/answer-engine-optimization/"
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#1D4ED8] bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                Explore AEO →
              </a>
              <a
                href="/generative-engine-optimization/"
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#1D4ED8] bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                Explore GEO →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Checkout: Payments, Shipping, Conversion & Store Optimization */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
            <CreditCard className="w-3.5 h-3.5" />
            <span>LOCALIZED CONVERSION INFRASTRUCTURE</span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            What UDMIDEAS Sets Up at Checkout: Payments, Shipping and Conversion
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            Local payment methods decide whether a visitor buys. UDMIDEAS integrates the mix that fits each country, so you do not lose shoppers at the last step.
          </p>
        </div>

        <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[520px]">
              <thead>
                <tr className="bg-[#0F172A] text-white text-xs uppercase tracking-[0.06em]">
                  <th className="py-3.5 px-5 font-semibold w-44">Country</th>
                  <th className="py-3.5 px-5 font-semibold">Payment methods UDMIDEAS integrates</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-sm">
                {paymentMethods.map((row) => (
                  <tr key={row.country} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="py-4 px-5 font-bold text-[#0F172A]">
                      <a
                        href={row.href}
                        className="text-[#1D4ED8] hover:underline"
                      >
                        {row.country}
                      </a>
                    </td>
                    <td className="py-4 px-5 text-[#475569]">{row.methods}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-5 sm:p-6 bg-[#F8FAFC] border-t border-[#E2E8F0] text-sm text-[#475569] leading-relaxed">
            We also connect shipping rates, order tracking, tax and checkout settings, and multi-currency display. Shipping and returns terms appear on every product page and in the cart, so buyers see the full cost before paying.
          </div>
        </div>

        {/* Store Optimization */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2.5">
          <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#1D4ED8]" />
            <span>UDMIDEAS Store Optimization</span>
          </h3>
          <p className="text-base text-[#475569] leading-[1.65]">
            After launch, UDMIDEAS keeps improving the store. We work on shopping cart and checkout flow, product page conversion, website speed, the mobile shopping experience and UI design. We also connect payment gateways, shipping, inventory and customer account tools, and provide website maintenance and technical support after launch.
          </p>
        </div>
      </section>

      {/* 6. Where UDMIDEAS Works Across Latin America */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>REGIONAL COVERAGE</span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            Where UDMIDEAS Works: eCommerce Development and Marketing Across Latin America
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            UDMIDEAS plans each country on its own terms, because search habits, payments and shipping differ.
          </p>
        </div>

        <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[540px]">
              <thead>
                <tr className="bg-[#0F172A] text-white text-xs uppercase tracking-[0.06em]">
                  <th className="py-3.5 px-5 font-semibold w-44">Country</th>
                  <th className="py-3.5 px-5 font-semibold">What UDMIDEAS does there</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-sm">
                {countryServices.map((row) => (
                  <tr key={row.country} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="py-4 px-5 font-bold text-[#0F172A]">
                      <a
                        href={row.href}
                        className="text-[#1D4ED8] hover:underline"
                      >
                        {row.country}
                      </a>
                    </td>
                    <td className="py-4 px-5 text-[#475569]">{row.services}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional LATAM Countries */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-4">
          <p className="text-sm sm:text-base text-[#475569] leading-[1.65]">
            UDMIDEAS also serves <strong className="text-[#0F172A]">Peru, Ecuador, Bolivia, Paraguay, Uruguay, Costa Rica, Panama, Guatemala, the Dominican Republic, Honduras, El Salvador and Nicaragua</strong>. UDMIDEAS is your best SEO company in Latin America.
          </p>
          <div className="flex flex-wrap gap-2">
            {additionalCountries.map((c) =>
              c.href ? (
                <a
                  key={c.name}
                  href={c.href}
                  className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] hover:bg-blue-50 border border-[#E2E8F0] hover:border-[#1D4ED8]/40 text-xs font-semibold text-[#1D4ED8] transition-colors"
                >
                  {c.name} →
                </a>
              ) : (
                <span
                  key={c.name}
                  className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#475569]"
                >
                  {c.name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* 7. Spanish & Portuguese Solutions + Industries */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5" />
              <span>MULTILINGUAL ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl font-bold text-[#0F172A] leading-snug">
              UDMIDEAS Spanish and Portuguese eCommerce Solutions
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-[1.65]">
              A multilingual store is more than translated text. Our multilingual eCommerce solutions include:
            </p>
            <ul className="space-y-2.5">
              {multilingualSolutions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#0F172A]">
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#475569] leading-relaxed">
            If you already sell in the{' '}
            <a href="/usa/" className="text-[#1D4ED8] font-semibold hover:underline">
              USA
            </a>
            , UDMIDEAS can open a Latin American store for you. Definitely, we aim to grow your Spanish business with our SEO, AEO, and GEO services for US businesses.
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
            <Share2 className="w-3.5 h-3.5" />
            <span>SECTOR EXPERTISE</span>
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A] leading-snug">
            Industries UDMIDEAS Serves
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-[1.65]">
            We build and market stores across high-growth retail, D2C, and B2B categories throughout Latin America:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs sm:text-sm font-medium text-[#0F172A]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                <span>{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why Choose UDMIDEAS */}
      <section className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-6">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>FOUNDER-LED DELIVERY</span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            Why Choose UDMIDEAS as Your eCommerce Growth Partner in Latin America
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            UDMIDEAS is led by <strong className="text-[#0F172A]">Arun</strong>, who has worked in SEO for more than 15 years and still works hands-on in code and strategy. You speak with the people who plan and build your project. UDMIDEAS serves clients in the USA, Israel, the Gulf countries, Latin America and Australia, so we know how cross-border stores work.
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

        <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#475569] max-w-2xl leading-relaxed">
            Let&apos;s discuss in an online meeting how UDMIDEAS approaches technical SEO audits and review our SEO case studies so you can make the right decision to grow your business.
          </p>
          <a
            href="/case-studies/"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#1D4ED8] text-xs font-bold transition-colors shrink-0"
          >
            <span>Explore Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* 9. 9-Step Development & Marketing Process */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em]">
            – STEP-BY-STEP EXECUTION ROADMAP
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

      {/* 10. Talk to UDMIDEAS CTA Banner */}
      <section className="p-6 sm:p-10 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-lg text-white space-y-5">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold text-[#F59E0B] uppercase tracking-[0.08em]">
            ★ FREE ECOMMERCE SEO &amp; WEBSITE AUDIT
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            Talk to UDMIDEAS About Your LATAM Store
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Get a free eCommerce SEO and website audit from UDMIDEAS. Send us your store URL and your target countries. We will reply with a clear list of fixes and growth steps. Contact UDMIDEAS or call{' '}
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

      {/* 11. Frequently Asked Questions (10 FAQs) */}
      <section className="space-y-5">
        <div className="space-y-2">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>LATAM ECOMMERCE FAQ</span>
          </div>
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#0F172A] leading-tight">
            Frequently Asked Questions About UDMIDEAS eCommerce Services
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
