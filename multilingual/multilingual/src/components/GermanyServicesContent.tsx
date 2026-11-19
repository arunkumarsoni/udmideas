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
  Sparkles,
  MapPin
} from 'lucide-react';

export const GermanyServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const germanyStats = [
    { indicator: "Germany's population (2025)", context: 'Approximately 83.6 million' },
    { indicator: 'Internet usage', context: 'More than 90% of the population' },
    { indicator: 'German eCommerce B2C revenue (2024)', context: 'Approximately €88.8 billion' },
    { indicator: 'German eCommerce growth (2024)', context: 'Approximately 3.8%' },
    { indicator: 'Online shopping adoption', context: 'More than 80% of internet users shop online' },
    { indicator: "Germany's position", context: "One of Europe's largest eCommerce markets" }
  ];

  const futureDevelopments = [
    {
      title: '1. German-language SEO',
      desc: 'Search visibility for German keywords will remain important for attracting local customers.'
    },
    {
      title: '2. eCommerce expansion',
      desc: 'Online shopping and mobile commerce will create opportunities for retailers and product-based businesses.'
    },
    {
      title: '3. AI-powered search',
      desc: 'AEO and GEO strategies can help businesses organize useful information for search engines and answer platforms.'
    },
    {
      title: '4. Local SEO',
      desc: 'Google Business Profiles, location pages, and customer reviews will remain important for local businesses.'
    },
    {
      title: '5. Video marketing',
      desc: 'Product demonstrations, educational videos, and short-form content can strengthen customer engagement.'
    },
    {
      title: '6. International expansion',
      desc: 'German businesses can reach customers in Austria, Switzerland, and other European markets through multilingual websites.'
    }
  ];

  const updatedStats = [
    { indicator: 'German eCommerce goods revenue (2025)', figure: '€83.1 billion' },
    { indicator: 'eCommerce goods growth (2025)', figure: '3.2%' },
    { indicator: 'Digital services revenue (2025)', figure: '€14.4 billion' },
    { indicator: 'Digital services growth (2025)', figure: '7.3%' },
    { indicator: 'German internet users purchasing online (2025)', figure: '85%' },
    { indicator: 'EU average online purchasing (2025)', figure: '78%' },
    { indicator: 'German eCommerce growth forecast (2026)', figure: '3.8%' }
  ];

  const servicesPricingRows = [
    {
      service: 'German Website Design',
      provides: 'Professional German business website',
      pricing: 'From $500'
    },
    {
      service: 'Custom Website Development',
      provides: 'Custom-coded websites',
      pricing: 'From $500'
    },
    {
      service: 'German SEO Services',
      provides: 'On-page, technical, off-page and local SEO',
      pricing: 'Custom quotation'
    },
    {
      service: 'German eCommerce SEO',
      provides: 'Product, category and store optimization',
      pricing: 'Custom quotation'
    },
    {
      service: 'German SMM',
      provides: 'Facebook, Instagram and social media marketing',
      pricing: 'Custom quotation'
    },
    {
      service: 'German PPC Advertising',
      provides: 'Google Ads and paid campaigns',
      pricing: 'Custom quotation'
    },
    {
      service: 'eCommerce SMM & PPC',
      provides: 'Product promotion and sales campaigns',
      pricing: 'Custom quotation'
    }
  ];

  const devServices = [
    'German-language corporate websites.',
    'Business and professional service websites.',
    'Custom website design and development.',
    'Responsive mobile-friendly websites.',
    'Custom landing pages for lead generation.',
    'eCommerce website development.',
    'Website speed and performance optimization.',
    'SEO-friendly website architecture.',
    'Contact forms and enquiry systems.',
    'Website maintenance and technical support.'
  ];

  const germanSeoServices = [
    'German keyword research.',
    'German search intent analysis.',
    'SEO titles, meta descriptions, and headings.',
    'German website content optimization.',
    'Technical SEO audits.',
    'Website structure and internal linking.',
    'German blog content creation.',
    'Local SEO and Google Business Profile optimization.',
    'Quality backlink building.',
    'Schema markup and structured data.',
    'Google Search Console and Analytics monitoring.',
    'AEO and GEO optimization.'
  ];

  const ecommerceSeoServices = [
    'German product keyword research.',
    'Product title and description optimization.',
    'Category page SEO.',
    'Product image optimization.',
    'Technical eCommerce SEO.',
    'Duplicate content management.',
    'Internal linking and navigation improvements.',
    'Product structured data.',
    'Customer review optimization.',
    'German eCommerce blog content.',
    'Conversion-focused landing pages.'
  ];

  const smmItems = [
    'Facebook business page management.',
    'Instagram marketing.',
    'German-language social media content.',
    'Promotional graphics and video creation.',
    'Brand awareness campaigns.',
    'Audience engagement.',
    'Social media advertising.'
  ];

  const ppcItems = [
    'Google Search Ads.',
    'Google Display Ads.',
    'Google Shopping campaigns.',
    'Lead generation campaigns.',
    'eCommerce sales campaigns.',
    'Remarketing and retargeting.',
    'Conversion tracking and optimization.'
  ];

  const growthSteps = [
    {
      step: '1. Business research',
      desc: 'Understand your products, services, competitors, and target customers.'
    },
    {
      step: '2. Website development',
      desc: 'Build a professional German-language website.'
    },
    {
      step: '3. SEO optimization',
      desc: 'Improve technical SEO, content, keywords, and search visibility.'
    },
    {
      step: '4. Digital promotion',
      desc: 'Run German SMM and PPC campaigns to reach potential customers.'
    },
    {
      step: '5. Performance improvement',
      desc: 'Monitor rankings, website traffic, enquiries, and conversions.'
    }
  ];

  const benefits = [
    'German-language website development and marketing.',
    'Custom-coded website solutions.',
    'Dedicated German SEO strategies.',
    'eCommerce product and category optimization.',
    'Integrated SEO, SMM, and PPC services.',
    'International SEO opportunities.',
    'Mobile-friendly and performance-focused development.',
    'Website traffic and conversion monitoring.',
    'Flexible solutions for startups and established businesses.',
    'One digital marketing partner for multiple services.'
  ];

  const strengths = [
    '1. International website development experience.',
    '2. Custom-coded website development.',
    '3. German-language SEO and content optimization.',
    '4. eCommerce SEO for different product categories.',
    '5. Technical SEO and website performance optimization.',
    '6. AEO and GEO strategies for changing search environments.',
    '7. Social media marketing and paid advertising.',
    '8. Integrated website and digital marketing solutions.'
  ];

  const supportedIndustries = [
    { industry: 'Automotive', services: 'Website development, SEO, PPC' },
    { industry: 'Manufacturing', services: 'Corporate websites, international SEO' },
    { industry: 'Real Estate', services: 'Local SEO, website development' },
    { industry: 'Healthcare', services: 'Website design, local SEO' },
    { industry: 'Fashion & Clothing', services: 'eCommerce SEO, SMM, PPC' },
    { industry: 'Electronics', services: 'eCommerce development, product SEO' },
    { industry: 'Construction', services: 'Lead generation, local SEO' },
    { industry: 'Education', services: 'Website development, SEO, PPC' },
    { industry: 'Furniture', services: 'eCommerce SEO and advertising' },
    { industry: 'Professional Services', services: 'Website development, SEO, PPC' }
  ];

  const targetCities = [
    'Berlin',
    'Hamburg',
    'Munich (München)',
    'Frankfurt',
    'Cologne (Köln)',
    'Stuttgart',
    'Düsseldorf',
    'Leipzig',
    'Dortmund',
    'Bremen',
    'Hannover',
    'Dresden',
    'Nuremberg (Nürnberg)'
  ];

  const faqs = [
    {
      q: '1. Does UDMIDEAS provide SEO services for German-language websites?',
      a: 'Yes. We provide German SEO, including keyword research, technical SEO, on-page optimization, content marketing, link building, and local SEO.'
    },
    {
      q: '2. Can you develop a complete German-language business website?',
      a: 'Yes. We design and develop custom-coded websites for German businesses, including corporate websites, service websites, and eCommerce stores.'
    },
    {
      q: '3. What is the starting price for website development?',
      a: 'Our introductory website design and development pricing starts at $500. Final pricing depends on the project size, number of pages, and required functionality.'
    },
    {
      q: '4. Do you provide SEO for German eCommerce websites?',
      a: 'Yes. We optimize German product pages, category pages, product descriptions, website architecture, and technical SEO.'
    },
    {
      q: '5. Can you manage German Facebook and Instagram marketing?',
      a: 'Yes. We provide German-language social media content, page management, promotional campaigns, and paid social advertising.'
    },
    {
      q: '6. Does UDMIDEAS provide Google Ads services in Germany?',
      a: 'Yes. We create and manage German-language Google Ads campaigns for lead generation, product promotion, and online sales.'
    },
    {
      q: '7. Can you work with German startups and small businesses?',
      a: 'Yes. Our website development and marketing solutions are suitable for startups, small businesses, medium-sized companies, and established organizations.'
    },
    {
      q: '8. How long does German SEO take to show results?',
      a: 'SEO results depend on competition, website quality, industry, and keyword difficulty. Many projects need approximately 4–6 months or longer to show meaningful improvements. Rankings and sales cannot be guaranteed.'
    },
    {
      q: '9. Can you target Austria and Switzerland through German SEO?',
      a: 'Yes. We can develop separate SEO strategies for Germany, Austria, and German-speaking Switzerland, taking regional vocabulary, search behaviour, and customer requirements into account.'
    },
    {
      q: '10. Why should German businesses connect with UDMIDEAS?',
      a: 'UDMIDEAS combines custom website development, German SEO, eCommerce SEO, SMM, and PPC services. Businesses can coordinate their website and marketing requirements through one digital service provider.'
    }
  ];

  return (
    <div className="space-y-14 text-left">
      {/* Hero / Page Introduction */}
      <header className="max-w-4xl space-y-4">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>Germany Website Design, Development & German SEO · 15+ Years Experience</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          Germany Website Design, Development & SEO Digital Marketing Company | UDMIDEAS
        </h1>

        <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            Germany is one of Europe's largest economies and an important market for digital business, eCommerce, manufacturing, technology, automotive, healthcare, and professional services. Businesses operating in Germany need a strong online presence to attract customers, compete in search results, and generate consistent business opportunities.
          </p>
          <p>
            A professional German-language website, effective SEO strategy, and targeted digital marketing campaigns can help businesses reach customers across Germany. UDMIDEAS provides website design and development, German-language SEO, eCommerce SEO, Social Media Marketing (SMM), and Pay-Per-Click (PPC) advertising services for German businesses.
          </p>
          <p>
            We help German business owners develop professional websites, improve Google visibility, attract qualified visitors, generate enquiries, and grow online sales.
          </p>
          <p className="text-slate-400">
            Our services combine custom-coded website development with SEO, AEO, GEO, content marketing, social media marketing, and paid advertising strategies.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20German%20website%20design%20and%20SEO%20in%20Germany."
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

      {/* Germany Digital Market: Statistics and Future Opportunities */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Market Intelligence
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Germany Digital Market: Statistics and Future Opportunities
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Germany has one of Europe's most developed digital economies. Consumers increasingly use online platforms to research companies, compare products, purchase goods, and access professional services. Some important market indicators include:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl max-w-3xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Digital market indicator</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Statistics / market context</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {germanyStats.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-white">
                    {row.indicator}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400">
                    {row.context}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Future of German Digital Business: 2027–2030 */}
        <div className="space-y-4 pt-2">
          <div className="max-w-4xl space-y-1.5">
            <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Strategic Horizon</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Future of German Digital Business: 2027–2030
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Several developments are creating opportunities for German businesses:
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

          <p className="text-xs text-slate-400 italic">
            These are growth opportunities rather than guaranteed market forecasts.
          </p>
        </div>

        {/* Updated German Digital Market Statistics */}
        <div className="space-y-4 pt-4">
          <div className="max-w-4xl space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Updated German Digital Market Statistics
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              The latest published figures provide a stronger picture of Germany's online market:
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl max-w-3xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Market indicator</th>
                  <th className="py-3.5 px-4 sm:px-6 text-blue-400">Latest reported figure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {updatedStats.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-white">
                      {row.indicator}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-blue-400">
                      {row.figure}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed">
            The BEVH forecast indicates that German online retail could continue expanding in 2026. This creates opportunities for businesses investing in German eCommerce websites, product SEO, and digital advertising.
          </p>
        </div>
      </section>

      {/* Our Website Design and Digital Marketing Services in Germany */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Integrated Solutions & Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Our Website Design and Digital Marketing Services in Germany
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS offers integrated digital solutions for German-speaking businesses.
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
          The $500 starting price applies to qualifying website projects. Final pricing depends on pages, features, content, and project scope. Monthly SEO and advertising management are quoted separately. Advertising spend is additional.
        </div>
      </section>

      {/* German Website Design and Development Services */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            <span>Custom Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            German Website Design and Development Services
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            A professional German-language website helps customers understand your business, explore your services, and contact your company. UDMIDEAS designs and develops custom-coded websites for businesses targeting Germany.
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
            We work with React JS, PHP, Laravel, CodeIgniter, and WordPress according to project requirements.
          </p>
          <p className="text-slate-400">
            Our objective is to create websites that combine professional design, technical performance, and search engine visibility.
          </p>
        </div>
      </section>

      {/* German SEO Services for Business Websites */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>Organic Search Visibility</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            German SEO Services for Business Websites
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            German customers often search using specific German industry terms and local expressions. Directly translating English keywords is not enough to build a successful German SEO strategy.
          </p>
          <p className="text-sm font-semibold text-white">
            Our German SEO services include:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {germanSeoServices.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed">
          We target relevant German search phrases and customer questions to help businesses improve organic visibility and attract qualified visitors.
        </p>
      </section>

      {/* German eCommerce SEO Solutions */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <ShoppingCart className="w-4 h-4" />
            <span>Online Store Growth</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            German eCommerce SEO Solutions
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Germany has a large online retail market, creating opportunities for online stores across different industries. UDMIDEAS provides German eCommerce SEO solutions to improve product discovery and organic sales opportunities.
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
            We can work with WooCommerce, Magento, Shopify, and custom eCommerce development platforms.
          </p>
          <p className="text-slate-400">
            Industries include fashion, electronics, furniture, automotive accessories, beauty products, industrial equipment, and home appliances.
          </p>
        </div>
      </section>

      {/* German SMM and PPC Digital Marketing Services */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            Paid Social & Search Advertising
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            German SMM and PPC Digital Marketing Services
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            SEO helps businesses build long-term organic visibility. SMM and PPC provide additional ways to reach potential customers and promote products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2.5 text-base font-bold text-white">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <Share2 className="w-4 h-4" />
              </div>
              <span>German Social Media Marketing (SMM)</span>
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
              <span>German Pay-Per-Click (PPC)</span>
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

        <p className="text-xs sm:text-sm text-slate-300">
          Our campaigns focus on German-language advertising, relevant search terms, customer interests, and target locations.
        </p>
      </section>

      {/* How UDMIDEAS Helps Grow German Businesses */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" />
            <span>5-Stage Connected Strategy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How UDMIDEAS Helps Grow German Businesses
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Our approach connects website development, SEO, and digital marketing into one growth strategy.
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
          Our focus is to help businesses convert online visibility into meaningful enquiries, customers, and sales.
        </p>
      </section>

      {/* Benefits of Choosing UDMIDEAS & Why German Business Owners Should Choose UDMIDEAS */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Partner Advantages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Benefits of Choosing UDMIDEAS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{b}</span>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/30 border border-blue-900/30 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Why German Business Owners Should Choose UDMIDEAS
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            UDMIDEAS brings 15+ years of experience in website development and digital marketing. We understand that German businesses require professional websites, relevant German content, reliable technical performance, and marketing strategies that match local customer expectations.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-white">
            Our strengths include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {strengths.map((reason, idx) => (
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
            We focus on understanding your business before recommending a digital marketing strategy.
          </p>
        </div>
      </section>

      {/* German Industries & Target Cities */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            <span>Industries & German Cities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            German Industries We Can Support
          </h2>
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

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span>We can also develop location-focused SEO strategies for businesses targeting:</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {targetCities.map((city) => (
              <span
                key={city}
                className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200 font-medium"
              >
                {city}
              </span>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-slate-300">
            These locations provide opportunities for local SEO, city-specific landing pages, and regional customer acquisition.
          </p>
        </div>
      </section>

      {/* Frequently Asked Questions: German Business Owners */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Common Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions: German Business Owners
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

      {/* Grow Your Business in Germany with UDMIDEAS */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 space-y-6 shadow-xl">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Get Started</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Grow Your Business in Germany with UDMIDEAS
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Germany offers significant opportunities for businesses that want to improve their digital presence, attract online customers, and expand their operations. Whether you operate a manufacturing company, professional service business, local company, or eCommerce store, your website and digital marketing strategy play important roles in customer acquisition.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS helps German business owners build professional websites, improve organic search visibility, promote products, generate leads, and develop long-term digital growth strategies.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <div className="font-bold text-white text-base">
              Let's build your website, improve your German search visibility, and grow your business in Germany.
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
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20discuss%20German%20website%20development%20and%20SEO%20for%20Germany."
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
