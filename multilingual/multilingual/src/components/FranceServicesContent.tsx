import React, { useState } from 'react';
import {
  Globe2,
  Code2,
  Search,
  Share2,
  MousePointerClick,
  CheckCircle2,
  MessageCircle,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  ShoppingCart,
  Award,
  Rocket,
  ChevronDown,
  ChevronUp,
  Building2,
  Sparkles
} from 'lucide-react';

export const FranceServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const franceStats = [
    { indicator: 'French eCommerce revenue (2025)', stat: '€196.4 billion' },
    { indicator: 'Annual eCommerce growth (2025)', stat: '7%' },
    { indicator: 'Online transactions (2025)', stat: '3.2 billion' },
    { indicator: 'French online shoppers', stat: '42.2 million' },
    { indicator: 'Online retail share', stat: 'Approximately 12%' },
    { indicator: 'Active French merchant websites', stat: '158,000+' },
    { indicator: 'French eCommerce employment', stat: '234,000 jobs' }
  ];

  const futureDevelopments = [
    {
      title: '1. French-language search',
      desc: 'Businesses will continue investing in French content to reach customers searching in their native language.'
    },
    {
      title: '2. eCommerce expansion',
      desc: 'Online shopping, mobile commerce, and digital payment solutions will remain important sales channels.'
    },
    {
      title: '3. AI-powered search',
      desc: 'Search engines and answer engines are changing how consumers discover companies, products, and services.'
    },
    {
      title: '4. Local SEO',
      desc: 'Businesses will need stronger Google Business Profiles, location-specific landing pages, and customer reviews.'
    },
    {
      title: '5. Video marketing',
      desc: 'Short videos, product demonstrations, and social media content will become increasingly important.'
    },
    {
      title: '6. International expansion',
      desc: 'French businesses will have opportunities to sell across Europe and other French-speaking markets.'
    }
  ];

  const servicesPricingRows = [
    {
      service: 'French Website Design',
      provides: 'Professional business website design',
      pricing: 'From $500'
    },
    {
      service: 'Custom Website Development',
      provides: 'Custom-coded websites for French businesses',
      pricing: 'From $500'
    },
    {
      service: 'French SEO Services',
      provides: 'On-page, technical, off-page and local SEO',
      pricing: 'Custom quotation'
    },
    {
      service: 'French eCommerce SEO',
      provides: 'Product, category and store optimization',
      pricing: 'Custom quotation'
    },
    {
      service: 'French SMM',
      provides: 'Facebook, Instagram and social media marketing',
      pricing: 'Custom quotation'
    },
    {
      service: 'French PPC Advertising',
      provides: 'Google Ads and paid advertising campaigns',
      pricing: 'Custom quotation'
    },
    {
      service: 'eCommerce SMM & PPC',
      provides: 'Product promotion, sales campaigns and retargeting',
      pricing: 'Custom quotation'
    }
  ];

  const devServices = [
    'Custom website design and development.',
    'French-language business websites.',
    'Corporate and professional service websites.',
    'Responsive mobile-friendly website development.',
    'Custom landing pages for lead generation.',
    'eCommerce website development.',
    'Website speed and performance optimization.',
    'SEO-friendly website architecture.',
    'Contact forms and enquiry systems.',
    'Website maintenance and technical support.'
  ];

  const frenchSeoActivities = [
    'French keyword research and search intent analysis.',
    'French website content optimization.',
    'SEO titles, meta descriptions, and headings.',
    'Technical SEO audits and improvements.',
    'Website structure and internal linking.',
    'French-language blog content creation.',
    'Local SEO and Google Business Profile optimization.',
    'Quality backlink building.',
    'Schema markup and structured data.',
    'Google Search Console and Analytics monitoring.',
    'AEO and GEO optimization.'
  ];

  const ecommerceSeoServices = [
    'French product keyword research.',
    'Product title and description optimization.',
    'Category page SEO.',
    'Product image optimization.',
    'Technical eCommerce SEO.',
    'Duplicate content management.',
    'Internal linking and navigation improvements.',
    'Product schema and review schema implementation.',
    'French shopping-related blog content.',
    'Conversion-focused landing pages.'
  ];

  const smmItems = [
    'Facebook business page management.',
    'Instagram marketing.',
    'French social media content creation.',
    'Promotional graphics and video content.',
    'Brand awareness campaigns.',
    'Audience engagement strategies.',
    'Social media advertising.'
  ];

  const ppcItems = [
    'Google Search Ads.',
    'Google Display Ads.',
    'Shopping campaign management.',
    'Lead generation campaigns.',
    'eCommerce sales campaigns.',
    'Remarketing and retargeting.',
    'Conversion tracking and campaign optimization.'
  ];

  const growthSteps = [
    {
      step: '1. Understand your business',
      desc: 'We study your services, products, target audience, competitors, and business objectives.'
    },
    {
      step: '2. Build your website',
      desc: 'We develop a professional French-language website with a clear structure and user-friendly experience.'
    },
    {
      step: '3. Improve search visibility',
      desc: 'We implement French SEO, technical optimization, content strategies, and relevant keyword targeting.'
    },
    {
      step: '4. Promote your business',
      desc: 'We use social media marketing and PPC campaigns to reach potential customers.'
    },
    {
      step: '5. Monitor and improve',
      desc: 'We analyze traffic, rankings, enquiries, conversions, and campaign performance to improve results.'
    }
  ];

  const benefits = [
    {
      title: 'French-language expertise',
      desc: 'SEO and website content focused on French-speaking customers.'
    },
    {
      title: 'Custom development',
      desc: 'Websites developed around your business requirements.'
    },
    {
      title: 'One digital partner',
      desc: 'Website development, SEO, SMM, and PPC services together.'
    },
    {
      title: 'eCommerce growth',
      desc: 'Better product visibility and opportunities to increase online sales.'
    },
    {
      title: 'International targeting',
      desc: 'Opportunities to reach customers in France and other French-speaking markets.'
    },
    {
      title: 'SEO-focused development',
      desc: 'Website architecture designed with search visibility in mind.'
    },
    {
      title: 'Performance monitoring',
      desc: 'Track website traffic, leads, rankings, and advertising results.'
    },
    {
      title: 'Flexible solutions',
      desc: 'Services for startups, small businesses, established companies, and online retailers.'
    }
  ];

  const whyConnectReasons = [
    '1. Experience in international website development and digital marketing projects.',
    '2. Custom-coded website development rather than relying entirely on ready-made templates.',
    '3. Dedicated SEO strategies for French-language websites.',
    '4. eCommerce SEO experience across different product categories.',
    '5. Integrated SEO, SMM, and PPC solutions.',
    '6. Focus on business enquiries, customer acquisition, and online sales.',
    '7. Flexible project solutions for different business sizes.',
    '8. Long-term digital marketing support and optimization.'
  ];

  const supportedIndustries = [
    { industry: 'Real Estate', services: 'Website development, local SEO, PPC' },
    { industry: 'Healthcare', services: 'Website design, local SEO, content' },
    { industry: 'Manufacturing', services: 'Corporate websites, international SEO' },
    { industry: 'Fashion & Clothing', services: 'eCommerce SEO, SMM, PPC' },
    { industry: 'Beauty & Cosmetics', services: 'eCommerce development, social media' },
    { industry: 'Restaurants', services: 'Local SEO, website development' },
    { industry: 'Construction', services: 'Lead generation, local SEO' },
    { industry: 'Education', services: 'Website development, SEO, PPC' },
    { industry: 'Automotive', services: 'Local SEO, eCommerce marketing' },
    { industry: 'Professional Services', services: 'Website development, SEO, PPC' }
  ];

  const faqs = [
    {
      q: '1. Does UDMIDEAS provide SEO services for French-language websites?',
      a: 'Yes. We provide French-language SEO services, including keyword research, technical SEO, content optimization, link building, and local SEO.'
    },
    {
      q: '2. Can you develop a complete French-language business website?',
      a: 'Yes. We design and develop custom-coded websites for French businesses, including corporate websites, service websites, and eCommerce platforms.'
    },
    {
      q: '3. What is the starting cost of website design and development?',
      a: 'Our introductory website design and development pricing starts at $500. Final pricing depends on the number of pages, functionality, design requirements, and technology.'
    },
    {
      q: '4. Do you provide SEO for French eCommerce websites?',
      a: 'Yes. We optimize French product pages, category pages, product descriptions, website structure, and technical SEO to improve organic visibility.'
    },
    {
      q: '5. Can you manage Facebook and Instagram marketing in French?',
      a: 'Yes. We provide French-language social media marketing, including content creation, promotional campaigns, page management, and advertising.'
    },
    {
      q: '6. Does UDMIDEAS provide Google Ads PPC services for France?',
      a: 'Yes. We can create and manage French-language Google Ads campaigns targeting relevant keywords, locations, products, and potential customers.'
    },
    {
      q: '7. Can you work with small businesses and startups in France?',
      a: 'Yes. Our services are suitable for startups, small businesses, professional service providers, and established companies.'
    },
    {
      q: '8. How long does French SEO take to show results?',
      a: 'SEO timelines depend on competition, website condition, industry, and keyword difficulty. Many projects require approximately 4–6 months or longer to demonstrate meaningful ranking improvements. Results are not guaranteed.'
    },
    {
      q: '9. Can you promote my French business outside France?',
      a: 'Yes. We can develop multilingual and international SEO strategies for businesses targeting other European countries and French-speaking markets.'
    },
    {
      q: '10. Why should I choose UDMIDEAS instead of hiring separate companies for website development and SEO?',
      a: 'UDMIDEAS combines custom website development, French SEO, eCommerce optimization, SMM, and PPC under one service provider. This helps maintain consistency between website structure, content, and marketing activities.'
    }
  ];

  return (
    <div className="space-y-14 text-left">
      {/* Hero / Page Introduction */}
      <header className="max-w-4xl space-y-4">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>France Website Design, Development & French SEO · 15+ Years Experience</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          France Website Design, Development & SEO Digital Marketing Company UDMIDEAS
        </h1>

        <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            France is one of Europe's most attractive markets for businesses looking to expand their online presence, reach French-speaking customers, and increase digital sales. Whether you operate a local business, professional service company, manufacturing business, or eCommerce store, having a professionally designed French-language website and a strong digital marketing strategy can help you reach more customers.
          </p>
          <p>
            UDMIDEAS provides website design and development, French-language SEO, eCommerce SEO, Social Media Marketing (SMM), and Pay-Per-Click (PPC) advertising solutions for businesses targeting France.
          </p>
          <p>
            We help French business owners build professional websites, improve search engine visibility, attract qualified visitors, generate enquiries, and grow online sales.
          </p>
          <p className="text-slate-400">
            Our approach combines custom-coded website development with SEO, AEO, GEO, content marketing, and digital advertising strategies designed around your business goals.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20French%20website%20design%20and%20SEO%20in%20France."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/60 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp: +91-9521186150</span>
          </a>

          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all"
          >
            <span>Request Proposal (Direct Email)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* France Digital Market: Statistics and Future Opportunities */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Market Intelligence
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            France Digital Market: Statistics and Future Opportunities
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            France has a strong digital economy, with millions of consumers purchasing products and services online. Businesses that invest in websites, SEO, and digital advertising can compete for both local and international customers.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Here are some important market statistics:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl max-w-3xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Digital market indicator</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Latest available statistics</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {franceStats.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-white">
                    {row.indicator}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400">
                    {row.stat}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-400 italic">
          Sources: FEVAD 2026, reporting 2025 market results. (fevad.com+1)
        </p>

        {/* Future of French Digital Business: 2027–2030 */}
        <div className="space-y-4 pt-2">
          <div className="max-w-4xl space-y-1.5">
            <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Strategic Horizon</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Future of French Digital Business: 2027–2030
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              The future of digital business in France will be influenced by several important developments:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {futureDevelopments.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2 hover:border-slate-700 transition-all"
              >
                <div className="text-xs font-mono text-emerald-400 font-bold">
                  0{idx + 1}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 italic max-w-4xl">
            These are strategic growth opportunities, not guaranteed numerical forecasts. The direction of investment will depend on industry, consumer demand, and technology adoption.
          </p>
        </div>
      </section>

      {/* Our Website Design and Digital Marketing Services in France */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Integrated Solutions & Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Our Website Design and Digital Marketing Services in France
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS offers integrated digital solutions for French-speaking businesses. We focus on developing professional websites and promoting them through search engines, social media, and paid advertising.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Our services</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">What we provide</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Pricing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {servicesPricingRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.service}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {row.provides}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400 whitespace-nowrap">
                    {row.pricing}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          The $500 starting price is an introductory project price, not a promise that every service or a complete marketing campaign is included. Final pricing depends on website size, functionality, content, advertising requirements, and project scope. Advertising budgets are separate.
        </div>
      </section>

      {/* French Website Design and Development Services */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            <span>Custom Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            French Website Design and Development Services
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Your website is your digital business identity. French customers should be able to understand your services, explore your products, and contact your company without language barriers. UDMIDEAS designs and develops custom-coded websites for French-language businesses.
          </p>
          <p className="text-sm font-semibold text-white">
            Our website development services include:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {devServices.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed">
          <p>
            We work with technologies including React JS, PHP, Laravel, CodeIgniter, and WordPress, depending on project requirements.
          </p>
          <p className="text-slate-400">
            Our objective is to develop websites that look professional, perform efficiently, and support long-term business growth.
          </p>
        </div>
      </section>

      {/* French SEO Services for Business Websites */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>Organic Search Visibility</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            French SEO Services for Business Websites
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Having a French-language website is only the first step. Your potential customers must also be able to find it through Google and other search platforms. Our French SEO services help businesses improve their organic search visibility and attract relevant visitors.
          </p>
          <p className="text-sm font-semibold text-white">
            Our French SEO activities include:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {frenchSeoActivities.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed">
          <p>
            We focus on French search queries rather than simply translating English keywords. French customers may use different expressions, terminology, and buying-intent phrases depending on their industry and location.
          </p>
          <p className="text-slate-400">
            Our goal is to increase relevant organic traffic, qualified enquiries, and business opportunities.
          </p>
        </div>
      </section>

      {/* French eCommerce SEO Solutions */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <ShoppingCart className="w-4 h-4" />
            <span>Online Store Growth</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            French eCommerce SEO Solutions
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            France offers significant opportunities for online stores. However, eCommerce businesses need more than attractive product pages to compete successfully. UDMIDEAS provides French eCommerce SEO solutions for businesses selling products online.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ecommerceSeoServices.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed">
          <p>
            We can support online stores built using WooCommerce, Magento, Shopify, and custom development platforms.
          </p>
          <p className="text-slate-400">
            Whether you sell fashion, electronics, furniture, beauty products, home accessories, or industrial products, our strategy focuses on helping customers discover your products through relevant French search queries.
          </p>
        </div>
      </section>

      {/* French SMM and PPC Digital Marketing Services */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            Paid Social & Search Advertising
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            French SMM and PPC Digital Marketing Services
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Organic SEO takes time to build. Social media marketing and paid advertising can help businesses reach potential customers through additional digital channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2.5 text-base font-bold text-white">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <Share2 className="w-4 h-4" />
              </div>
              <span>Social Media Marketing (SMM)</span>
            </div>
            <ul className="space-y-2">
              {smmItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2.5 text-base font-bold text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <MousePointerClick className="w-4 h-4" />
              </div>
              <span>Pay-Per-Click (PPC) Advertising</span>
            </div>
            <ul className="space-y-2">
              {ppcItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-1.5 text-xs sm:text-sm text-slate-300">
          <p>
            We create campaigns around French-language keywords, customer interests, product categories, and business locations.
          </p>
          <p className="text-slate-400">
            Our objective is to help businesses generate relevant leads, increase enquiries, and improve advertising efficiency.
          </p>
        </div>
      </section>

      {/* How UDMIDEAS Helps Grow French Businesses */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" />
            <span>5-Step Connected Growth Model</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How UDMIDEAS Helps Grow French Businesses
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Our approach connects website development, SEO, and digital marketing instead of treating them as separate activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {growthSteps.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2 hover:border-slate-700 transition-all"
            >
              <div className="text-xs font-mono text-emerald-400 font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                {item.step}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-slate-300">
          Our focus is not simply website traffic. We want to help businesses turn digital visibility into meaningful business opportunities.
        </p>
      </section>

      {/* Benefits of Choosing UDMIDEAS & Why Connect With Us */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Partner Advantages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Benefits of Choosing UDMIDEAS
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Working with an integrated website development and digital marketing company can help French businesses manage their online growth more effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5"
            >
              <div className="flex items-center gap-2 font-bold text-sm text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{b.title}</span>
              </div>
              <p className="text-xs text-slate-300 pl-6 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/30 border border-blue-900/30 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Why French Business Owners Should Choose UDMIDEAS
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            UDMIDEAS works with businesses that want to establish, improve, or expand their online presence. With 15+ years of experience in website development and digital marketing, our founder-led business understands the importance of combining technical development with practical marketing strategies.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-white">
            Why connect with us?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {whyConnectReasons.map((reason, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2 text-xs text-slate-200"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We understand that every business has different objectives. A local French service company may need local SEO and lead generation, while an eCommerce business may require product optimization, shopping campaigns, and conversion improvements. We develop strategies according to those requirements.
          </p>
        </div>
      </section>

      {/* French Businesses and Industries We Can Support */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            <span>Industry & City Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            French Businesses and Industries We Can Support
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Our services are suitable for different industries across France.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl max-w-3xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Industry</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Recommended digital services</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {supportedIndustries.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.industry}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {row.services}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed">
          We can also create location-focused SEO strategies for businesses targeting Paris, Lyon, Marseille, Toulouse, Nice, Bordeaux, Lille, Nantes, Strasbourg, and other French cities.
        </p>
      </section>

      {/* Frequently Asked Questions: French Business Owners */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Common Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions: French Business Owners
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-white hover:text-blue-400 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-blue-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Grow Your French Business with UDMIDEAS */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 space-y-6 shadow-xl">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Get Started</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Grow Your French Business with UDMIDEAS
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            The digital marketplace in France continues to evolve. Businesses that invest in professional websites, French-language SEO, eCommerce optimization, and targeted digital advertising can create stronger opportunities to attract customers.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Whether you are launching a new business, redesigning an existing website, expanding your eCommerce store, or trying to improve your Google rankings, UDMIDEAS can help you develop a digital growth strategy. We work with businesses looking for professional website design, custom development, French SEO, eCommerce SEO, social media marketing, and PPC advertising.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <div className="font-bold text-white text-base">
              Let's build your digital presence in France.
            </div>
            <div>
              Website:{' '}
              <a
                href="https://udmideasusa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-mono"
              >
                https://udmideasusa.com/
              </a>{' '}
              · Email:{' '}
              <a
                href="mailto:info@udmideasusa.com"
                className="text-emerald-400 hover:underline font-mono"
              >
                info@udmideasusa.com
              </a>
            </div>
            <div className="text-xs text-slate-400">
              Connect with UDMIDEAS for custom French website development and digital marketing.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20discuss%20French%20website%20development%20and%20SEO%20for%20France."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/60 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +91-9521186150</span>
            </a>
            <a
              href="#inquiry-form"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all"
            >
              <span>Connect with UDMIDEAS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
