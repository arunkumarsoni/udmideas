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
  MessageCircle,
  Phone,
  Scale,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  Truck,
  Zap
} from 'lucide-react';

export const EuServicesContent: React.FC = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const fiveStages = [
    {
      step: '01',
      text: 'We build a fast, mobile-first store on the right platform.'
    },
    {
      step: '02',
      text: 'We localize every page in the native language of each country.'
    },
    {
      step: '03',
      text: 'We configure GDPR, cookie consent, VAT and consumer protection pages.'
    },
    {
      step: '04',
      text: 'We rank product and category pages in each local Google.'
    },
    {
      step: '05',
      text: 'We advertise and report through Google Shopping, Meta and monthly reports.'
    }
  ];

  const storeTypes = [
    'B2C and D2C stores for direct sales',
    'B2B and wholesale stores with VAT-exempt handling for buyers with a valid VAT ID',
    'Multi-vendor marketplaces with vendor onboarding and commission rules',
    'Multilingual stores with one language switcher and clean country URLs',
    'Store redesigns and migrations that keep your rankings'
  ];

  const platforms = [
    {
      platform: 'Shopify',
      recommendedWhen: 'You want a fast launch and a small or mid-size catalog',
      tradeOff: 'Language and URL limits need careful setup'
    },
    {
      platform: 'WooCommerce',
      recommendedWhen: 'Content and SEO drive your sales',
      tradeOff: 'Needs strong hosting and updates'
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

  const countrySeoTable = [
    {
      country: 'Germany',
      href: '/germany/',
      language: 'German',
      term: 'Onlineshop erstellen lassen',
      work: 'German-language content, Impressum and Widerruf pages, Trusted Shops signals, pay-by-invoice checkout'
    },
    {
      country: 'France',
      href: '/france/',
      language: 'French',
      term: 'création de site e-commerce',
      work: 'French-language content, legal notices, CB card payments, local delivery options'
    },
    {
      country: 'Spain',
      href: '/spain/',
      language: 'Spanish',
      term: 'tienda online',
      work: 'Spanish-language content, Bizum and card payments, regional keyword differences'
    },
    {
      country: 'Italy',
      language: 'Italian',
      term: 'sviluppo e-commerce',
      work: 'Italian-language content, cash on delivery and prepaid card options, local reviews'
    },
    {
      country: 'Netherlands',
      language: 'Dutch',
      term: 'webshop laten maken',
      work: 'Dutch-language content, iDEAL payments, fast delivery promises'
    }
  ];

  const multilingualSeoSteps = [
    'Keyword research per country, not per language alone.',
    'Native copywriting for product pages, categories, blogs and ads.',
    "hreflang setup with correct language and region codes, following Google's localized versions guidelines.",
    'URL structure using subfolders such as /de/, /fr/ and /nl/, or country domains where the budget supports it.',
    "Product schema using Google's product structured data for price, stock and review rich results.",
    'Local link building from sites in each country.'
  ];

  const euComplianceRows = [
    {
      area: 'GDPR',
      implementation:
        'Privacy pages, consent records, data processing setup, data access and deletion routes, EU hosting on request'
    },
    {
      area: 'Cookie consent',
      implementation:
        'A banner with real accept and reject choices, and tag blocking until consent, under ePrivacy rules'
    },
    {
      area: 'VAT',
      implementation:
        'VAT rates by destination country, valid VAT ID checks for B2B, reverse charge handling and invoices ready for the One Stop Shop (OSS)'
    },
    {
      area: 'Consumer protection',
      implementation:
        'Returns and 14-day withdrawal pages, clear total prices with VAT, order confirmation emails, review and discount rules'
    },
    {
      area: 'Accessibility',
      implementation:
        'Keyboard navigation, contrast, labels and accessible forms for the European Accessibility Act'
    },
    {
      area: 'Legal pages',
      implementation:
        'Localized terms, delivery, return and company detail pages in each language'
    }
  ];

  const euLocalPayments = [
    {
      country: 'Germany',
      href: '/germany/',
      methods: 'PayPal, Klarna, SEPA direct debit and pay by invoice'
    },
    {
      country: 'France',
      href: '/france/',
      methods: 'CB cards, PayPal and instalment payments'
    },
    {
      country: 'Spain',
      href: '/spain/',
      methods: 'Cards, Bizum and PayPal'
    },
    {
      country: 'Italy',
      methods: 'Cards, PayPal, PostePay and cash on delivery'
    },
    {
      country: 'Netherlands',
      methods: 'iDEAL, cards and Klarna'
    }
  ];

  const whyChoosePoints = [
    '15+ years of website and digital marketing experience',
    'Multilingual team writing native content in German, French, Spanish, Italian, Dutch and more',
    'Custom-coded eCommerce solutions, not templates',
    'SEO, PPC, AEO and GEO under one team',
    'Clear scope and monthly reporting, with files and accounts that stay yours',
    'Maintenance and support after launch'
  ];

  const processSteps = [
    'Research your business, competitors and target countries.',
    'Plan site structure, UX and language setup.',
    'Develop the custom store.',
    'Localize products, categories and legal pages.',
    'Configure GDPR, cookie consent, VAT, payments and shipping.',
    'Optimize technical SEO and speed.',
    'Launch PPC and social campaigns.',
    'Report rankings, sales and ROAS every month.'
  ];

  const faqs = [
    {
      q: '1. Does UDMIDEAS build eCommerce websites for EU businesses?',
      a: 'Yes. UDMIDEAS builds custom B2C, B2B, D2C and marketplace stores for businesses selling in one or many EU countries.'
    },
    {
      q: '2. Can UDMIDEAS create content in German, French, Spanish, Italian and Dutch?',
      a: 'Yes. Our native writers prepare product pages, categories, blogs, ads and legal pages in each language, and we cover other EU languages on request.'
    },
    {
      q: '3. Does UDMIDEAS make stores GDPR compliant?',
      a: 'We set up consent banners, privacy pages, data handling and EU hosting options. A lawyer should review your final legal texts.'
    },
    {
      q: '4. Can UDMIDEAS set up VAT and OSS in the store?',
      a: 'Yes. We configure VAT rates by country, VAT ID checks for B2B buyers and invoices that support OSS reporting. Your tax adviser confirms the rules for your business.'
    },
    {
      q: '5. Which local payment methods does UDMIDEAS integrate?',
      a: 'We integrate iDEAL, Klarna, PayPal, SEPA, Bizum, cards, pay by invoice and others, depending on the country.'
    },
    {
      q: '6. Does UDMIDEAS provide eCommerce SEO for each EU country?',
      a: 'Yes, we are the best Multilingual SEO Agency for you in the EU. We run separate keyword research, hreflang setup and link building for each country and language.'
    },
    {
      q: '7. Can UDMIDEAS manage Google Shopping and social ads in Europe?',
      a: 'Yes. We manage Google Shopping, Search, Performance Max, Meta and TikTok campaigns by country and language.'
    },
    {
      q: '8. Does UDMIDEAS work on AEO and GEO for European stores?',
      a: 'Yes. We optimize pages, schema and entity signals so AI search tools can understand and cite your store.'
    },
    {
      q: '9. Can UDMIDEAS migrate my current store without losing rankings?',
      a: 'Yes. We map old URLs to new ones, keep metadata and test redirects before launch.'
    },
    {
      q: '10. Does UDMIDEAS offer ongoing maintenance and SEO?',
      a: 'Yes. We offer monthly maintenance, speed checks, compliance updates and SEO reporting.'
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 text-left">
      {/* 1. Hero Section */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#475569]">
          <span className="font-semibold text-[#1D4ED8] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/80 uppercase tracking-[0.08em]">
            – EUROPEAN UNION (EU) ECOMMERCE &amp; MULTILINGUAL SEO
          </span>
          <span aria-hidden="true">·</span>
          <span className="text-[#0F172A] font-semibold">GDPR · VAT / OSS · All EU Languages</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#B45309] font-mono font-semibold">★ 15+ Years SEO Heritage</span>
        </div>

        <h1 className="text-[30px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#0F172A] tracking-[-0.02em] leading-[1.15] text-balance">
          UDMIDEAS European Union eCommerce Website Development &amp; Multilingual SEO - Digital Marketing Services
        </h1>

        <p className="text-base sm:text-lg text-[#475569] leading-[1.65] max-w-4xl">
          UDMIDEAS is a multilingual digital marketing and web development agency. We build service-based and eCommerce business websites, rank and grow online eCommerce stores for businesses that sell in the European Union, and we work in all languages your customers use. Our EU eCommerce website development team has more than 15 years of SEO experience, and our founder, <strong className="text-[#0F172A] font-semibold">Arun</strong>, still works on projects himself — making us one of the best SEO companies for all kinds of European businesses.
        </p>

        {/* EU Multi-Market Callout */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-blue-200/80 shadow-sm max-w-4xl">
          <div className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-[0.08em] mb-2">
            – ENGINEERED FOR MULTI-MARKET EU COMPLIANCE &amp; GROWTH
          </div>
          <p className="text-sm sm:text-base text-[#0F172A] leading-[1.65]">
            Selling in the EU is not one market. It is many markets with different languages, search habits, payment methods and tax details, under shared rules such as GDPR and the Consumer Rights Directive. UDMIDEAS handles the language, the legal setup and the marketing together, so your store and service-based business in the EU is ready to sell in each country from day one.
          </p>
        </div>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="#inquiry-form"
            className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-sm hover:shadow-md transition-all duration-200 w-full sm:w-auto"
          >
            <span>Get Free EU eCommerce &amp; SEO Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20a%20free%20EU%20eCommerce%20and%20Multilingual%20SEO%20audit."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#0F172A] bg-white hover:bg-slate-50 border border-[#E2E8F0] hover:border-[#1D4ED8]/40 shadow-xs transition-all duration-200 w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp: +91-9521186150</span>
          </a>
        </div>
      </header>

      {/* 2. What UDMIDEAS Does for EU Online Stores */}
      <section className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-6">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em]">
            – UNIFIED EU STORE EXECUTION
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            What UDMIDEAS Does for EU Online Stores
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            UDMIDEAS provides EU eCommerce website development, multilingual SEO and digital marketing as one service. We build your custom online store, write native content in each language, set up GDPR, cookie consent and VAT, connect local payments and shipping, and run the campaigns that bring buyers.
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
            <span>BESPOKE ENGINEERING · ZERO TEMPLATES</span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            Custom eCommerce Website Development Services by UDMIDEAS
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            UDMIDEAS writes custom code instead of selling you a template. Our custom eCommerce website development team builds in React JS and on Shopify, WooCommerce and Magento, and picks the platform after reviewing your catalog, countries and budget.
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
                className={`flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] ${
                  idx === storeTypes.length - 1 ? 'md:col-span-2' : ''
                }`}
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
              Every store includes mobile-first design, Core Web Vitals tuning, clean URLs, breadcrumb and product schema, and an XML sitemap per language. On request, UDMIDEAS hosts your data in <strong className="text-[#0F172A]">EU regions</strong>, which supports your GDPR position and speeds up the site for European visitors.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Multilingual eCommerce SEO across EU */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
            <Globe2 className="w-3.5 h-3.5" />
            <span>NATIVE EUROPEAN SEARCH ARCHITECTURE</span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            UDMIDEAS Multilingual eCommerce SEO: German, French, Spanish, Italian and Dutch
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            UDMIDEAS is a multilingual agency, and we work in every language your customers use. We write native content in each one. We do not run one English page through a translation tool. Our multilingual SEO team researches keywords in each country, because a German, a French and a Dutch buyer describe the same product with different words and different intent.
          </p>
        </div>

        {/* Country Language SEO Table */}
        <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#0F172A] text-white text-xs uppercase tracking-[0.06em]">
                  <th className="py-3.5 px-5 font-semibold">Country</th>
                  <th className="py-3.5 px-5 font-semibold">Language UDMIDEAS writes in</th>
                  <th className="py-3.5 px-5 font-semibold">Example local search term</th>
                  <th className="py-3.5 px-5 font-semibold">What UDMIDEAS does there</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-sm">
                {countrySeoTable.map((row) => (
                  <tr key={row.country} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="py-4 px-5 font-bold text-[#0F172A] whitespace-nowrap">
                      {row.href ? (
                        <a href={row.href} className="text-[#1D4ED8] hover:underline">
                          {row.country}
                        </a>
                      ) : (
                        row.country
                      )}
                    </td>
                    <td className="py-4 px-5 font-medium text-[#0F172A] whitespace-nowrap">
                      {row.language}
                    </td>
                    <td className="py-4 px-5">
                      <span className="font-mono text-xs bg-blue-50 text-[#1D4ED8] border border-blue-200/80 px-2.5 py-1 rounded-md inline-block">
                        {row.term}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-[#475569] leading-relaxed">{row.work}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-5 sm:p-6 bg-[#F8FAFC] border-t border-[#E2E8F0] text-sm text-[#475569] leading-relaxed">
            UDMIDEAS also works in{' '}
            <a href="/poland/" className="text-[#1D4ED8] font-semibold hover:underline">
              Polish
            </a>
            , Portuguese, Swedish, Greek and other EU languages. If your customers speak it, we can write and optimize in it — get in touch with us today for{' '}
            <a
              href="/multilingual-search-engine-optimization/"
              className="text-[#1D4ED8] font-semibold hover:underline"
            >
              SEO services
            </a>
            , as we are one of the best SEO agencies to grow your business.
          </div>
        </div>

        {/* How UDMIDEAS Runs Multilingual SEO */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
          <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
            <Search className="w-5 h-5 text-[#1D4ED8]" />
            <span>How UDMIDEAS Runs Multilingual SEO</span>
          </h3>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {multilingualSeoSteps.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]"
              >
                <span className="text-xs font-mono font-bold text-[#1D4ED8] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md tabular-nums shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <span className="text-sm text-[#0F172A] leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <div className="p-4 rounded-xl bg-[#0F172A] text-slate-200 text-sm leading-relaxed">
            A German page that ranks in France, or a French page shown to Dutch buyers, wastes crawl budget and confuses customers. <strong className="text-white">Correct hreflang prevents both.</strong>
          </div>
        </div>
      </section>

      {/* 5. PPC, Social Media, Video + AEO & GEO */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-[#0F172A] leading-snug">
              UDMIDEAS PPC, Social Media and Video
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-[1.65]">
              UDMIDEAS manages Google Shopping, Search and Performance Max, plus Meta, TikTok and Pinterest ads. Campaigns are split by country and language, with local currency, local ad copy and conversion tracking that respects consent choices. We also create social posts, reels and product videos in each language. Contact us today for PPC management services.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2 border-t border-[#E2E8F0]">
            <a
              href="/pay-per-click/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors group"
            >
              <span>PPC Management Services</span>
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

        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-[#0F172A] leading-snug">
              UDMIDEAS AEO and GEO: Be the Answer in AI Search
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-[1.65]">
              European shoppers increasingly ask ChatGPT, Gemini, Perplexity and Google AI Overviews for product advice. UDMIDEAS prepares your store through Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO). We put short, direct answers on product and category pages, add FAQ, Product, Organization and Review schema, build entity signals such as company name, registration and policies, and earn mentions on trusted European sites. Learn more about UDMIDEAS AEO and GEO services — book an appointment with us so we can hold an online meeting.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2 border-t border-[#E2E8F0]">
            <a
              href="/answer-engine-optimization/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors group"
            >
              <span>Explore AEO</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <a
              href="/generative-engine-optimization/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors group"
            >
              <span>Explore GEO</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 6. EU Rules: GDPR, VAT, Consumer Protection, Cookies, Payments & Shipping */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5" />
            <span>EUROPEAN COMPLIANCE &amp; CHECKOUT TRUST</span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            What UDMIDEAS Sets Up for EU Rules: GDPR, VAT, Consumer Protection, Cookies, Payments and Shipping
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            Compliance is part of conversion in Europe. UDMIDEAS builds the technical side into every store and tells you where you need a lawyer or tax adviser. <em className="text-[#0F172A] not-italic font-medium">This section is general information, not legal or tax advice.</em>
          </p>
        </div>

        {/* Compliance Table */}
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
                {euComplianceRows.map((row) => (
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
        </div>

        {/* Local Payment & Shipping Setup */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-6">
          <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-[#1D4ED8]" />
            <span>Local Payment and Shipping Setup by UDMIDEAS</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {euLocalPayments.map((item) => (
              <div
                key={item.country}
                className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5"
              >
                <div className="text-sm font-bold text-[#0F172A]">
                  {item.href ? (
                    <a href={item.href} className="text-[#1D4ED8] hover:underline">
                      {item.country}
                    </a>
                  ) : (
                    item.country
                  )}
                </div>
                <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed">
                  {item.methods}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-3">
            <Truck className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
            <p className="text-sm sm:text-[15px] text-[#475569] leading-[1.65]">
              Card payments need strong customer authentication under <strong className="text-[#0F172A]">PSD2</strong>, which our checkout setup supports. UDMIDEAS connects carriers such as <strong className="text-[#0F172A]">DHL, DPD, PostNL</strong> and local couriers, shows delivery times by country, and displays return costs before payment. Sellers who ship to consumers in other member states should understand the EU-wide distance sales threshold, and your tax adviser confirms the details. UDMIDEAS then configures the store to match.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Why Choose UDMIDEAS */}
      <section className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-6">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>HANDS-ON SENIOR LEADERSHIP</span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            Why Choose UDMIDEAS as Your Multilingual eCommerce Partner in Europe
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            UDMIDEAS is led by <strong className="text-[#0F172A]">Arun — best SEO expert and consultant</strong>, who has worked in SEO for more than 15 years and still works hands-on in code and strategy. You speak with the people who plan and build your project. UDMIDEAS serves clients in the USA, Israel, the Gulf countries, Latin America, Europe and Australia, so cross-border selling is daily work for us.
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

      {/* 8. The UDMIDEAS EU eCommerce Process (8 Steps) */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em]">
            – STEP-BY-STEP EUROPEAN LAUNCH PLAN
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            The UDMIDEAS EU eCommerce Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((stepText, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-600/30"
            >
              <span className="text-xs font-mono font-bold text-white bg-[#1D4ED8] px-2.5 py-1 rounded-lg tabular-nums w-fit">
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
            ★ FREE EU ECOMMERCE SEO &amp; WEBSITE AUDIT
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            Talk to UDMIDEAS About Your EU Store
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Get a free EU eCommerce SEO and website audit from UDMIDEAS. Send us your store URL and target countries. We will reply with a clear list of fixes and growth steps. Contact UDMIDEAS or call{' '}
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
            <span>Request Free EU Audit Below</span>
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
            <span>EU ECOMMERCE &amp; SEO FAQ</span>
          </div>
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#0F172A] leading-tight">
            Frequently Asked Questions About UDMIDEAS SEO and EU eCommerce Services
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
