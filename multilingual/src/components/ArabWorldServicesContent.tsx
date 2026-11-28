import React, { useState } from 'react';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Code2,
  CreditCard,
  Film,
  Globe2,
  HelpCircle,
  Layers,
  Lock,
  MapPin,
  MessageCircle,
  Phone,
  Receipt,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  Truck,
  Zap
} from 'lucide-react';

export const ArabWorldServicesContent: React.FC = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const fiveStages = [
    {
      step: '01',
      text: 'We build a fast, mobile-first store with true right-to-left layout.'
    },
    {
      step: '02',
      text: 'We write native Arabic content for each country and dialect.'
    },
    {
      step: '03',
      text: 'We connect local payments, cash on delivery and regional couriers.'
    },
    {
      step: '04',
      text: 'We rank product and category pages in Arabic and English search.'
    },
    {
      step: '05',
      text: 'We advertise and report through Google, Snapchat, TikTok and Meta, with monthly reports.'
    }
  ];

  const realRtlItems = [
    'Navigation, menus, sliders, forms and icons mirrored correctly',
    'Arabic fonts chosen for readability on small phone screens',
    "Prices, dates and currency shown in each country's format",
    'Search, filters and checkout tested in Arabic by Arabic speakers',
    'Separate URLs for Arabic and English, with a language switcher that keeps shoppers on the same product'
  ];

  const storeTypes = [
    'B2C and D2C stores for retail and brand sales',
    'B2B and wholesale stores with account pricing and bulk orders',
    'Multi-vendor marketplaces with vendor onboarding and commission rules',
    'Bilingual Arabic and English stores with multi-currency pricing',
    'Redesigns and migrations that protect your rankings'
  ];

  const platforms = [
    {
      platform: 'Shopify',
      recommendedWhen: 'You want a fast launch and a small or mid-size catalog',
      tradeOff: 'Arabic RTL themes need checking and adjustment'
    },
    {
      platform: 'Salla and Zid',
      recommendedWhen: 'You focus on Saudi Arabia',
      tradeOff: 'Less design and SEO freedom'
    },
    {
      platform: 'WooCommerce',
      recommendedWhen: 'Content and SEO drive your sales',
      tradeOff: 'Needs good hosting and updates'
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

  const arabicSeoDeliverables = [
    'Arabic keyword research by country, dialect and buying stage.',
    'Native copywriting for product pages, categories, blogs and ads.',
    'Product and category page optimization with unique titles, descriptions and alt text.',
    'Technical SEO covering crawl control, faceted navigation, canonical tags and page speed.',
    "hreflang setup with codes such as ar-SA, ar-AE and ar-EG, following Google's localized versions guidelines.",
    'Structured data using Product schema for price, stock and review rich results.',
    'Google Merchant Center feed optimization and link building from Arabic news sites and directories.'
  ];

  const aeoGeoBullets = [
    'Put short, direct Arabic answers at the top of product and category pages',
    'Add FAQ, Product, Organization and Review schema',
    'Build clear entity signals: business name, address, policies and shipping terms',
    'Earn mentions on trusted regional sites that AI systems cite'
  ];

  const paymentMethods: { region: string; methods: string; href?: string }[] = [
    {
      region: 'Saudi Arabia',
      href: '/saudi-arabia/',
      methods: 'mada, Apple Pay, STC Pay, Visa and Mastercard, Tabby, Tamara, cash on delivery'
    },
    {
      region: 'United Arab Emirates',
      href: '/uae/',
      methods: 'Cards, Apple Pay, Tabby, Tamara, cash on delivery'
    },
    {
      region: 'Kuwait',
      methods: 'KNET, cards, cash on delivery'
    },
    {
      region: 'Bahrain',
      href: '/bahrain/',
      methods: 'Benefit, cards, cash on delivery'
    },
    {
      region: 'Egypt',
      href: '/egypt/',
      methods: 'Cards, Fawry, mobile wallets, cash on delivery'
    },
    {
      region: 'Morocco',
      href: '/morocco/',
      methods: 'Cards, cash on delivery, local bank options'
    }
  ];

  const arabRegionsTable = [
    {
      region: 'Gulf (GCC)',
      countries: 'Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman',
      cities: 'Riyadh, Jeddah, Dammam, Dubai, Abu Dhabi, Doha, Kuwait City, Manama, Muscat',
      work: 'Gulf Arabic content, premium brand stores, Snapchat and TikTok ads, mada and buy now pay later'
    },
    {
      region: 'Levant',
      countries: 'Jordan, Lebanon, Palestine, Syria',
      cities: 'Amman, Beirut, Ramallah, Damascus',
      work: 'Levantine Arabic content, multi-currency pricing, regional shipping'
    },
    {
      region: 'Nile Valley',
      countries: 'Egypt, Sudan',
      cities: 'Cairo, Alexandria, Giza, Khartoum',
      work: 'Egyptian Arabic content, cash on delivery, wallet payments, high-volume mobile traffic'
    },
    {
      region: 'North Africa (Maghreb)',
      countries: 'Morocco, Algeria, Tunisia, Libya, Mauritania',
      cities: 'Casablanca, Rabat, Algiers, Tunis, Tripoli, Nouakchott',
      work: 'Arabic and French bilingual content, local couriers, cash on delivery'
    },
    {
      region: 'Iraq and Yemen',
      countries: 'Iraq, Yemen',
      cities: 'Baghdad, Erbil, Basra, Sanaa, Aden',
      work: 'Mobile-first stores, local delivery planning, social commerce'
    },
    {
      region: 'Horn of Africa and Islands',
      countries: 'Somalia, Djibouti, Comoros',
      cities: 'Mogadishu, Djibouti City, Moroni',
      work: 'Lightweight fast stores, mobile money and diaspora sales'
    }
  ];

  const arabCountryQuickLinks = [
    { name: 'UAE', href: '/uae/' },
    { name: 'Saudi Arabia', href: '/saudi-arabia/' },
    { name: 'Qatar', href: '/qatar/' },
    { name: 'Oman', href: '/oman/' },
    { name: 'Bahrain', href: '/bahrain/' },
    { name: 'Egypt', href: '/egypt/' },
    { name: 'Morocco', href: '/morocco/' },
    { name: 'Iraq', href: '/iraq/' },
    { name: 'Yemen', href: '/yemen/' }
  ];

  const whyChoosePoints = [
    '15+ years of website and digital marketing experience',
    'Arabic content, RTL design and ad copy produced by our own team',
    'Custom-coded eCommerce solutions, not templates',
    'SEO, PPC, AEO and GEO under one team',
    'Clear scope and monthly reporting, with files and accounts that stay yours',
    'Maintenance and support after launch'
  ];

  const processSteps = [
    'Research your business, competitors and target countries.',
    'Plan site structure, RTL design and language setup.',
    'Develop the custom store.',
    'Write Arabic product and category content.',
    'Integrate local payments, cash on delivery and shipping.',
    'Optimize technical SEO and speed.',
    'Launch PPC, Snapchat, TikTok and Meta campaigns.',
    'Create product videos and content.',
    'Report rankings, sales and ROAS every month.'
  ];

  const faqs = [
    {
      q: '1. Does UDMIDEAS build Arabic eCommerce websites?',
      a: 'Yes. UDMIDEAS builds custom B2C, B2B, D2C and marketplace stores with full right-to-left design and native Arabic content — we are a trusted Arabic website design and development company.'
    },
    {
      q: '2. Does UDMIDEAS work in all Arabic-speaking regions?',
      a: 'Yes. We work in the Gulf, Levant, Nile Valley, North Africa and other Arab regions, with content adapted to each.'
    },
    {
      q: '3. Can UDMIDEAS write in Arabic dialects as well as Modern Standard Arabic?',
      a: 'Yes. We use Modern Standard Arabic for formal content and add regional dialect touches in ads, social posts and product copy where it helps.'
    },
    {
      q: '4. Which platforms does UDMIDEAS use?',
      a: 'We do custom-coded work, and we also work on Shopify, WooCommerce, Magento, Salla, Zid and custom React JS builds, recommending the best platform after reviewing your needs.'
    },
    {
      q: '5. Which local payment methods can UDMIDEAS integrate?',
      a: 'We integrate mada, KNET, Benefit, Fawry, Apple Pay, Tabby, Tamara, cards and cash on delivery, depending on the country.'
    },
    {
      q: '6. Does UDMIDEAS offer Arabic SEO?',
      a: 'Yes. We run Arabic keyword research, native content, hreflang setup, technical SEO and link building for each country. We are an Arabic SEO company specializing in SEO for Arabic-language websites.'
    },
    {
      q: '7. Can UDMIDEAS manage Snapchat, TikTok and Google ads in Arabic?',
      a: 'Yes. We manage Google Shopping, Search, Performance Max, Snapchat, TikTok and Meta campaigns with Arabic copy and local offers.'
    },
    {
      q: '8. Does UDMIDEAS work on AEO and GEO in Arabic?',
      a: 'Yes. We optimize Arabic pages, schema and entity signals so AI search tools can understand and cite your store.'
    },
    {
      q: '9. Can UDMIDEAS create bilingual Arabic and English stores?',
      a: 'Yes. We build bilingual stores with separate URLs, correct hreflang and a language switcher that keeps shoppers on the same product.'
    },
    {
      q: '10. Does UDMIDEAS offer ongoing maintenance and SEO?',
      a: 'Yes. We offer monthly maintenance, speed checks, security updates and SEO reporting.'
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 text-left">
      {/* 1. Hero Section */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#475569]">
          <span className="font-semibold text-[#1D4ED8] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/80 uppercase tracking-[0.08em]">
            – ARAB WORLD · RTL ECOMMERCE &amp; ARABIC SEO
          </span>
          <span aria-hidden="true">·</span>
          <span className="text-[#0F172A] font-semibold">GCC · Levant · Nile Valley · Maghreb</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#B45309] font-mono font-semibold">★ 15+ Years SEO Experience</span>
        </div>

        <h1 className="text-[30px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#0F172A] tracking-[-0.02em] leading-[1.15] text-balance">
          UDMIDEAS Arab World eCommerce Website Development &amp; SEO - Arabic Digital Marketing Services
        </h1>

        <p className="text-base sm:text-lg text-[#475569] leading-[1.65] max-w-4xl">
          UDMIDEAS is a digital marketing and web development agency that works in Arabic across all regions of the Arab world. Our Arab World eCommerce website development team builds right-to-left online stores, writes native Arabic content, connects local payments, and ranks your products in Arabic and English search. We have more than 15 years of SEO experience, and our founder, <strong className="text-[#0F172A] font-semibold">Arun</strong>, still works on projects himself.
        </p>

        {/* Regional Reality Callout */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-blue-200/80 shadow-sm max-w-4xl">
          <div className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-[0.08em] mb-2">
            – PLANNED FOR EVERY ARAB REGION ON ITS OWN TERMS
          </div>
          <p className="text-sm sm:text-base text-[#0F172A] leading-[1.65]">
            The Arab world is not one market. A buyer in Riyadh, one in Cairo and one in Casablanca use different words, payment habits and delivery rules. UDMIDEAS plans each region on its own terms, so your store earns trust and repeat orders instead of treating everyone as one audience.
          </p>
        </div>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="#inquiry-form"
            className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-sm hover:shadow-md transition-all duration-200 w-full sm:w-auto"
          >
            <span>Get Free Arabic eCommerce &amp; SEO Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20a%20free%20Arabic%20eCommerce%20and%20SEO%20audit."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#0F172A] bg-white hover:bg-slate-50 border border-[#E2E8F0] hover:border-[#1D4ED8]/40 shadow-xs transition-all duration-200 w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp: +91-9521186150</span>
          </a>
        </div>
      </header>

      {/* 2. What UDMIDEAS Does for Arabic Online Stores */}
      <section className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-6">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em]">
            – UNIFIED ARABIC STORE EXECUTION
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            What UDMIDEAS Does for Arabic Online Stores
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            UDMIDEAS provides Arab World eCommerce website development, Arabic SEO and digital marketing as one service. We build your right-to-left online store, write native Arabic content for each country, connect local payments and couriers, rank your products, and run the campaigns that bring buyers.
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
          UDMIDEAS writes and edits Arabic with its own team. This page is in English so you can review the plan, and every deliverable can be produced in Arabic, English or both.
        </div>
      </section>

      {/* 3. Arabic eCommerce Website Development Services */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5" />
            <span>TRUE RIGHT-TO-LEFT (RTL) ARCHITECTURE</span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            Arabic eCommerce Website Development Services by UDMIDEAS
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            UDMIDEAS designs right to left from the first sketch. We do not flip an English layout at the end. Our custom eCommerce website development team builds in React JS and on Shopify, WooCommerce, Magento, Salla and Zid, and picks the platform after reviewing your catalog, markets and budget.
          </p>
        </div>

        {/* Real RTL Design + The Stores UDMIDEAS Builds */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
            <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-[#1D4ED8]" />
              <span>What Real RTL Design Means at UDMIDEAS</span>
            </h3>
            <ul className="space-y-3">
              {realRtlItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#0F172A] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
            <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-[#1D4ED8]" />
              <span>The Stores UDMIDEAS Builds</span>
            </h3>
            <ul className="space-y-3">
              {storeTypes.map((store, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#0F172A] leading-relaxed">{store}</span>
                </li>
              ))}
            </ul>
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
              Every store includes Core Web Vitals tuning, clean URLs, product and breadcrumb schema, separate sitemaps per language and sales tracking. UDMIDEAS tests on mobile first, because most shoppers in the region buy on phones.
            </p>
          </div>
        </div>
      </section>

      {/* 4. How UDMIDEAS Brings Buyers: Arabic SEO, PPC, Social Media, Video, AEO & GEO */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em]">
            – MULTI-CHANNEL ARABIC ACQUISITION
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            How UDMIDEAS Brings Buyers: Arabic SEO, PPC, Social Media and Video
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            UDMIDEAS runs Arabic search, paid ads, social media and video from one plan, so your budget works across channels.
          </p>
        </div>

        {/* Arabic eCommerce SEO */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
              <Search className="w-5 h-5 text-[#1D4ED8]" />
              <span>UDMIDEAS Arabic eCommerce SEO</span>
            </h3>
            <p className="text-sm sm:text-base text-[#475569] leading-[1.65]">
              Our Arabic eCommerce SEO team starts with keyword research done in Arabic, not translated from English. Shoppers search in Modern Standard Arabic, in local dialects, and often in a mix of Arabic and English. Spelling varies, so one product can have five search forms. UDMIDEAS maps each real search to one page. For every store, we deliver:
            </p>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {arabicSeoDeliverables.map((item, idx) => (
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

        {/* PPC/Snapchat/TikTok + Product Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A]">
                UDMIDEAS PPC, Snapchat, TikTok and Social Media
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-[1.65]">
                UDMIDEAS manages Google Search, Shopping and Performance Max, plus Snapchat, TikTok, Instagram, Facebook and YouTube campaigns. Snapchat and TikTok matter especially in the Gulf, so we plan creative for them from the start. Ad copy is written in Arabic for each country, with local currency and local offers.
              </p>
            </div>
            <div>
              <a
                href="/pay-per-click/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors group"
              >
                <span>Explore PPC Advertising Services</span>
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
                UDMIDEAS Product Video and Influencer Content
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-[1.65]">
                We produce Arabic voice-over and subtitled product videos, reels, product photography and promotional clips, and run creator partnerships that build trust.
              </p>
            </div>
            <div>
              <a
                href="/social-media-marketing/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors group"
              >
                <span>Explore Social Media &amp; Video Production</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Arabic AEO & GEO */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
          <div className="space-y-2">
            <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ARABIC AI SEARCH AUTHORITY</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
              UDMIDEAS AEO and GEO: Be the Answer in Arabic AI Search
            </h3>
            <p className="text-sm sm:text-base text-[#475569] leading-[1.65]">
              Shoppers now ask ChatGPT, Gemini, Perplexity and Google AI Overviews in Arabic. UDMIDEAS prepares your store through Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO). We:
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

      {/* 5. Payments, Delivery, VAT & Data Rules */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
            <CreditCard className="w-3.5 h-3.5" />
            <span>LOCAL PAYMENTS, COURIERS &amp; REGIONAL COMPLIANCE</span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            What UDMIDEAS Sets Up: Payments, Delivery, VAT and Data Rules in Arab Markets
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            Each country sets its own rules and shopper habits. UDMIDEAS builds the technical side and tells you where an accountant or lawyer should review. <em className="text-[#0F172A] not-italic font-medium">This is general information, not legal or tax advice.</em>
          </p>
        </div>

        {/* Payment Methods Table */}
        <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[540px]">
              <thead>
                <tr className="bg-[#0F172A] text-white text-xs uppercase tracking-[0.06em]">
                  <th className="py-3.5 px-5 font-semibold w-52">Region</th>
                  <th className="py-3.5 px-5 font-semibold">Payment methods UDMIDEAS integrates</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-sm">
                {paymentMethods.map((row) => (
                  <tr key={row.region} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="py-4 px-5 font-bold text-[#0F172A] whitespace-nowrap">
                      {row.href ? (
                        <a href={row.href} className="text-[#1D4ED8] hover:underline">
                          {row.region}
                        </a>
                      ) : (
                        row.region
                      )}
                    </td>
                    <td className="py-4 px-5 text-[#475569]">{row.methods}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-5 sm:p-6 bg-[#F8FAFC] border-t border-[#E2E8F0] text-sm text-[#475569] leading-relaxed">
            We work with regional gateways such as <strong className="text-[#0F172A]">HyperPay, Moyasar, PayTabs, Telr, Paymob and Checkout.com</strong>, and choose them by country coverage, fees and settlement terms.
          </div>
        </div>

        {/* Delivery, VAT, Data Protection, Seasons Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A]">
              <Truck className="w-4 h-4 text-[#1D4ED8]" />
              <span>Delivery</span>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              UDMIDEAS connects Aramex, SMSA, Naqel, DHL and local couriers, matches address forms to each country, and sets up cash on delivery confirmation messages to cut failed deliveries.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A]">
              <Receipt className="w-4 h-4 text-[#1D4ED8]" />
              <span>VAT</span>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              Rates and rules differ by country and change over time. We configure tax display to match what your accountant confirms.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A]">
              <Lock className="w-4 h-4 text-[#1D4ED8]" />
              <span>Data protection</span>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              We add privacy pages, consent tools and secure data handling, and your lawyer reviews final legal texts.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A]">
              <Calendar className="w-4 h-4 text-[#1D4ED8]" />
              <span>Seasons</span>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              UDMIDEAS plans Ramadan, Eid and White Friday campaigns, feeds and ad budgets 6 to 8 weeks ahead.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Where UDMIDEAS Works: Every Arab Region */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>PAN-ARAB REGIONAL COVERAGE</span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            Where UDMIDEAS Works: Every Arab Region
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            UDMIDEAS works in Arabic for all regions of the Arab world. Each region has its own dialect, search habits and buying patterns, so we plan content and ads for each one separately.
          </p>
        </div>

        {/* 6 Arab Regions Table */}
        <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[740px]">
              <thead>
                <tr className="bg-[#0F172A] text-white text-xs uppercase tracking-[0.06em]">
                  <th className="py-3.5 px-5 font-semibold">Region</th>
                  <th className="py-3.5 px-5 font-semibold">Countries</th>
                  <th className="py-3.5 px-5 font-semibold">Main cities</th>
                  <th className="py-3.5 px-5 font-semibold">What UDMIDEAS does there</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-sm">
                {arabRegionsTable.map((row) => (
                  <tr key={row.region} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="py-4 px-5 font-bold text-[#0F172A] whitespace-nowrap">
                      {row.region}
                    </td>
                    <td className="py-4 px-5 text-[#0F172A] font-medium">{row.countries}</td>
                    <td className="py-4 px-5 text-[#475569]">{row.cities}</td>
                    <td className="py-4 px-5 text-[#475569] leading-relaxed">{row.work}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-5 bg-[#F8FAFC] border-t border-[#E2E8F0] flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#0F172A] mr-1">Dedicated Country Pages:</span>
            {arabCountryQuickLinks.map((c) => (
              <a
                key={c.name}
                href={c.href}
                className="px-3 py-1 rounded-lg bg-white hover:bg-blue-50 border border-[#E2E8F0] hover:border-[#1D4ED8]/40 text-xs font-semibold text-[#1D4ED8] transition-colors"
              >
                {c.name} →
              </a>
            ))}
          </div>
        </div>

        {/* Dialect + International Sellers Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#0F172A]">
              Why UDMIDEAS Writes by Dialect
            </h3>
            <p className="text-sm sm:text-base text-[#475569] leading-[1.65]">
              Modern Standard Arabic works for formal pages and legal text. Product descriptions, ads and social posts convert better when they sound like the buyer. UDMIDEAS uses light local touches for each region without losing clarity, and avoids slang that confuses readers in other countries. For Maghreb markets, we also write in French where shoppers search in both languages.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-blue-200/80 shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#0F172A]">
              UDMIDEAS for Sellers Outside the Region
            </h3>
            <p className="text-sm sm:text-base text-[#475569] leading-[1.65]">
              If you are a US, European or Asian brand entering Arabic markets, UDMIDEAS sets up the Arabic store, local payments, regional shipping and ads for you. See our guide on{' '}
              <a
                href="/multilingual-search-engine-optimization/"
                className="text-[#1D4ED8] font-semibold hover:underline"
              >
                Arabic SEO for international brands
              </a>
              . If you are an Arab seller entering{' '}
              <a href="/eu/" className="text-[#1D4ED8] font-semibold hover:underline">
                Europe
              </a>{' '}
              or the{' '}
              <a href="/usa/" className="text-[#1D4ED8] font-semibold hover:underline">
                USA
              </a>
              , our multilingual eCommerce solutions cover that too.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Why Choose UDMIDEAS */}
      <section className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-6">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>FOUNDER-LED ARABIC EXECUTION</span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            Why Choose UDMIDEAS as Your Arabic eCommerce Partner
          </h2>
          <p className="text-base text-[#475569] leading-[1.65]">
            UDMIDEAS is led by <strong className="text-[#0F172A]">Arun</strong>, who has worked in SEO for more than 15 years and still works hands-on in code and strategy. You speak with the people who plan and build your project. UDMIDEAS serves clients in the Gulf countries, the USA, Israel, Latin America, Europe and Australia, and our Arabic work covers every region of the Arab world.
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

      {/* 8. 9-Step Arabic eCommerce Process */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em]">
            – STEP-BY-STEP ARABIC LAUNCH PROCESS
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
            The UDMIDEAS Arabic eCommerce Process
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
            ★ FREE ARABIC ECOMMERCE SEO &amp; WEBSITE AUDIT
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            Talk to UDMIDEAS About Your Arabic Store
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Get a free Arabic eCommerce SEO and website audit from UDMIDEAS. Send us your store URL and target countries. We will reply with a clear list of fixes and growth steps. Contact UDMIDEAS or call{' '}
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
            <span>Request Free Arabic Audit Below</span>
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
            <span>ARAB WORLD ECOMMERCE FAQ</span>
          </div>
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#0F172A] leading-tight">
            Frequently Asked Questions About UDMIDEAS Arab World eCommerce Services
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
