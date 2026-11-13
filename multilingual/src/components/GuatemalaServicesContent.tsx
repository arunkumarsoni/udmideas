import React, { useState } from 'react';
import {
  Globe2,
  Code2,
  Search,
  Share2,
  MousePointerClick,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  ShoppingCart,
  Award,
  Rocket,
  ChevronDown,
  ChevronUp,
  MapPin
} from 'lucide-react';

export const GuatemalaServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whyWebsiteItems = [
    'Present their products and services professionally.',
    'Reach customers in different departments and cities.',
    'Generate enquiries, calls, and WhatsApp leads.',
    'Sell products through an online store.',
    'Build trust with Spanish-speaking customers.',
    'Promote their brand through Google and social media.',
    'Attract customers from Guatemala and international markets.'
  ];

  const guatemalaStats = [
    { indicator: 'Total population', figure: '19.0 million' },
    { indicator: 'Internet users', figure: '12.1 million' },
    { indicator: 'Internet penetration', figure: '63.7%' },
    { indicator: 'Social media user identities', figure: '14.0 million' },
    { indicator: 'Social media identities as a share of population', figure: '73.5%' },
    { indicator: 'Cellular mobile connections', figure: '21.0 million' },
    { indicator: 'YouTube potential advertising audience', figure: '8.12 million' },
    { indicator: 'Facebook potential advertising audience', figure: '9.50 million' },
    { indicator: 'Instagram potential advertising audience', figure: '4.35 million' },
    { indicator: 'Median mobile internet download speed', figure: '63.38 Mbps' },
    { indicator: 'Median fixed internet download speed', figure: '99.61 Mbps' }
  ];

  const regions = [
    { region: 'I', name: 'Metropolitana', departments: 'Guatemala' },
    { region: 'II', name: 'Norte', departments: 'Alta Verapaz, Baja Verapaz' },
    { region: 'III', name: 'Nororiente', departments: 'Izabal, Zacapa, Chiquimula, El Progreso' },
    { region: 'IV', name: 'Suroriente', departments: 'Santa Rosa, Jalapa, Jutiapa' },
    { region: 'V', name: 'Central', departments: 'Sacatepéquez, Chimaltenango, Escuintla' },
    {
      region: 'VI',
      name: 'Suroccidente',
      departments: 'Sololá, Totonicapán, Quetzaltenango, Suchitepéquez, Retalhuleu, San Marcos'
    },
    { region: 'VII', name: 'Noroccidente', departments: 'Huehuetenango, Quiché' },
    { region: 'VIII', name: 'Petén', departments: 'Petén' }
  ];

  const devServices = [
    'Custom business website design and development.',
    'Corporate and professional service websites.',
    'Spanish-language eCommerce website development.',
    'Online stores, product catalogues, and shopping functionality.',
    'WordPress and custom PHP development.',
    'React JS and modern web application development.',
    'Website redesign and speed optimization.',
    'SEO-friendly website architecture.',
    'Contact forms, WhatsApp integration, and lead generation features.'
  ];

  const seoCapabilities = [
    {
      num: '1. Spanish Keyword Research',
      desc: 'Identify relevant commercial and transactional search terms used by customers in Guatemala.'
    },
    {
      num: '2. On-Page SEO',
      desc: 'Optimize page titles, meta descriptions, headings, URLs, internal links, images, and Spanish-language content.'
    },
    {
      num: '3. Technical SEO',
      desc: 'Improve indexing, crawlability, mobile usability, page speed, XML sitemaps, canonical tags, and structured data.'
    },
    {
      num: '4. Local SEO',
      desc: 'Build location-focused landing pages, optimize Google Business Profile information, and improve local search visibility.'
    },
    {
      num: '5. Off-Page SEO',
      desc: 'Develop relevant backlinks, business citations, digital PR opportunities, and a quality-focused link strategy.'
    },
    {
      num: '6. eCommerce SEO',
      desc: 'Optimize product pages, category pages, product descriptions, internal navigation, and structured product information.'
    }
  ];

  const smmItems = [
    'Facebook and Instagram business promotion.',
    'Spanish-language social media content.',
    'Social media page optimization.',
    'Creative planning and audience engagement.',
    'Brand awareness and lead generation campaigns.'
  ];

  const ppcItems = [
    'Google Search Ads.',
    'Google Display and YouTube campaigns.',
    'Facebook and Instagram paid advertising.',
    'Keyword and audience targeting.',
    'Landing page recommendations.',
    'Campaign monitoring and optimization.'
  ];

  const pricingRows = [
    {
      service: 'Spanish Website Design & Development',
      workIncluded: 'Custom-coded Spanish business website',
      startingPrice: '$500'
    },
    {
      service: 'Spanish SEO',
      workIncluded: 'On-page, technical, and off-page SEO',
      startingPrice: '$500'
    },
    {
      service: 'Spanish SMM & PPC',
      workIncluded: 'Social media marketing and paid campaign management',
      startingPrice: '$500'
    }
  ];

  const whyChooseItems = [
    'Custom-coded website development.',
    'Spanish-language SEO and eCommerce SEO.',
    'SMM and PPC campaign support.',
    'Technical website optimization.',
    'International and multilingual digital marketing.',
    'Websites designed around usability and search visibility.'
  ];

  const faqs = [
    {
      q: '1. Do you provide website development services in Guatemala?',
      a: 'Yes. UDMIDEAS provides custom website design and development for businesses targeting Guatemala.'
    },
    {
      q: '2. Do you develop Spanish-language websites?',
      a: 'Yes. We create Spanish-language business websites and eCommerce stores.'
    },
    {
      q: '3. Do you provide Spanish SEO services?',
      a: 'Yes. Our services include keyword research, on-page SEO, technical SEO, local SEO, and off-page SEO.'
    },
    {
      q: '4. Can you do SEO for Guatemalan eCommerce websites?',
      a: 'Yes. We optimize product pages, categories, technical elements, and Spanish-language shopping content.'
    },
    {
      q: '5. Do you provide social media marketing?',
      a: 'Yes. We provide Facebook and Instagram marketing and other social media campaign support.'
    },
    {
      q: '6. Do you manage Google Ads and PPC campaigns?',
      a: 'Yes. We support Google Ads and paid social media campaigns.'
    },
    {
      q: '7. Can you target Guatemala City and other departments?',
      a: 'Yes. We can develop location-focused SEO strategies for Guatemala City, Quetzaltenango, Escuintla, Sacatepéquez, Petén, and other areas.'
    },
    {
      q: '8. Do you offer custom-coded websites?',
      a: 'Yes. We develop custom-coded websites based on business requirements and project scope.'
    },
    {
      q: '9. What is the starting price for your services?',
      a: 'Our listed starting price is $500 for each service category. Final quotations depend on project requirements.'
    },
    {
      q: '10. Can businesses outside Guatemala work with UDMIDEAS?',
      a: 'Yes. We work with international businesses looking for website development and digital marketing services.'
    }
  ];

  return (
    <div className="space-y-14 text-left">
      {/* Hero / Page Introduction */}
      <header className="max-w-4xl space-y-4">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>Guatemala Website Design, Development & Spanish SEO · 15+ Years Experience</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          Guatemala Spanish Website Design, Development & SEO Digital Marketing Company
        </h1>

        <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            Guatemala offers growing opportunities for businesses in tourism, hospitality, real estate, retail, healthcare, education, manufacturing, and professional services. From Guatemala City and Quetzaltenango to Antigua Guatemala, Escuintla, and Petén, companies can use websites, search engines, eCommerce platforms, and social media to connect with local customers and expand into international markets.
          </p>
          <p>
            UDMIDEAS provides custom-coded Spanish website design and development, Spanish SEO, eCommerce SEO, social media marketing (SMM), and pay-per-click advertising (PPC) for businesses targeting Guatemala.
          </p>
          <p className="text-slate-400">
            Our goal is to help businesses build a strong online presence through professional websites, search engine optimization, and customized digital marketing strategies.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20Spanish%20website%20design%20and%20SEO%20in%20Guatemala."
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

      {/* Why Do Businesses in Guatemala Need a Professional Website? */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            Digital Foundation
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Do Businesses in Guatemala Need a Professional Website?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Customers increasingly use online searches and social media to discover companies, products, hotels, restaurants, and professional services. A well-developed website helps businesses:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {whyWebsiteItems.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs sm:text-sm text-blue-200">
          A modern website should be mobile-friendly, fast-loading, secure, easy to navigate, and optimized for Spanish-language searches.
        </div>
      </section>

      {/* Latest Digital Statistics: Guatemala 2027 */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Market Intelligence
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Latest Digital Statistics: Guatemala 2027
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            DataReportal's Digital 2027 report provides an overview of Guatemala's digital environment using data reported for October 2026.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl max-w-3xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Digital indicator</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Latest reported figure</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {guatemalaStats.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-white">
                    {row.indicator}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400">
                    {row.figure}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 max-w-4xl space-y-2.5">
          <h3 className="text-base font-bold text-white">What do these statistics mean for businesses?</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            With 12.1 million internet users, Guatemala offers a substantial online audience for businesses. Companies can use Spanish SEO to improve their visibility in search engines and social media campaigns to reach relevant audiences.
          </p>
          <p className="text-xs text-slate-400 italic">
            The reported social media identities and advertising audiences are estimates. They do not necessarily represent unique individuals or monthly active users. Mobile connections can also exceed the population because individuals may use multiple connections.
          </p>
        </div>
      </section>

      {/* Guatemala Regions and Departments */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>8 Development Regions · 22 Departments</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Guatemala Regions and Departments
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Guatemala has 22 departments, organized into eight development regions. Businesses can use this regional structure to plan local SEO campaigns and create relevant landing pages for different markets.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl max-w-4xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Region</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Region name</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Departments</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {regions.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-white whitespace-nowrap">
                    {row.region}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-blue-300 whitespace-nowrap">
                    {row.name}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200 text-xs sm:text-sm">
                    {row.departments}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="max-w-4xl space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Important commercial and tourism locations include Guatemala City, Antigua Guatemala, Quetzaltenango, Escuintla, Puerto Barrios, Flores, and Panajachel.
          </p>
          <p className="text-slate-400">
            For example, a hotel business can target searches related to Antigua Guatemala, while a real estate company may create dedicated pages for Guatemala City, Quetzaltenango, and other relevant locations. Local pages should provide original information and useful services for each area rather than simply repeating the same content with different place names.
          </p>
        </div>
      </section>

      {/* Spanish Website Design and Development Services */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            <span>Custom Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Spanish Website Design and Development Services
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS develops custom-coded websites for businesses in Guatemala. Our development approach focuses on business requirements, user experience, performance, mobile responsiveness, and search visibility.
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

        <p className="text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed">
          We develop websites based on each company's goals and requirements, rather than relying only on generic templates.
        </p>
      </section>

      {/* Spanish SEO Services in Guatemala */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>Organic Search Growth</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Spanish SEO Services in Guatemala
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Spanish SEO helps businesses reach customers searching online in Spanish. Our SEO strategy focuses on relevant keywords, website quality, technical performance, useful content, and local search visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {seoCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2 hover:border-slate-700 transition-all"
            >
              <div className="text-xs font-mono text-emerald-400 font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                {cap.num}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Spanish eCommerce SEO and Digital Marketing */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-purple-950/30 border border-purple-900/30 space-y-4">
        <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
          <ShoppingCart className="w-4 h-4" />
          <span>Online Store Growth</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Spanish eCommerce SEO and Digital Marketing
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
          <p>
            Online stores need a strategy that helps customers discover products and complete purchases. UDMIDEAS provides Spanish eCommerce SEO and digital marketing support for online stores targeting Guatemala.
          </p>
          <p>
            Our services include product keyword research, category optimization, technical eCommerce SEO, product schema, shopping experience improvements, conversion-focused content, and campaign landing pages.
          </p>
          <p className="text-slate-200 font-medium">
            We also support businesses in tourism, hotels, restaurants, real estate, retail, education, healthcare, and professional services.
          </p>
        </div>
      </section>

      {/* Spanish SMM and PPC Advertising */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            Paid Social & Search Advertising
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Spanish SMM and PPC Advertising
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Social media and paid advertising can help businesses reach targeted audiences and generate enquiries.
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
              <span>Pay-Per-Click Advertising (PPC)</span>
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

        <p className="text-xs sm:text-sm text-slate-400 italic">
          Advertising budgets are separate from management fees. Results depend on the industry, competition, audience, campaign strategy, and budget.
        </p>
      </section>

      {/* UDMIDEAS Services and Starting Prices */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Transparent Packages
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            UDMIDEAS Services and Starting Prices
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Service</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Work included</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Starting price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {pricingRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.service}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {row.workIncluded}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400 whitespace-nowrap">
                    {row.startingPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          These are starting prices, not fixed quotations for every project. Final costs depend on website size, functionality, SEO competition, campaign requirements, and service duration. Paid advertising spend is additional.
        </div>
      </section>

      {/* Why Choose UDMIDEAS? */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Partner Advantages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Choose UDMIDEAS?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS brings more than 15 years of experience in website development, SEO, and digital marketing. We work with international businesses and understand the importance of language-specific website content and search strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {whyChooseItems.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
          Our objective is to help businesses build a professional online presence, reach relevant Spanish-speaking audiences, and generate more business opportunities.
        </p>
      </section>

      {/* Frequently Asked Questions */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Common Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
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

      {/* Contact UDMIDEAS */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 space-y-6 shadow-xl">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Get Started</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Contact UDMIDEAS
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Are you looking for a Spanish website design, development, SEO, eCommerce SEO, SMM, or PPC company for your business in Guatemala? Build your digital presence with UDMIDEAS.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <div className="font-bold text-white text-base">
              Build your digital presence with UDMIDEAS.
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
              Contact us to discuss your website development and Spanish digital marketing requirements.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20discuss%20Spanish%20website%20development%20and%20SEO%20for%20Guatemala."
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
              <span>Contact UDMIDEAS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
