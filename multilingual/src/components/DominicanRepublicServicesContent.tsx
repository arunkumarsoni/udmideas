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

export const DominicanRepublicServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whyWebsiteItems = [
    'Present their services and products professionally.',
    'Reach customers across different provinces and cities.',
    'Generate enquiries, phone calls, and WhatsApp leads.',
    'Sell products through an online store.',
    'Build trust with local and international customers.',
    'Promote their business through Google and social media.',
    'Compete with other businesses in the digital marketplace.'
  ];

  const drStats = [
    { indicator: 'Total population', figure: '11.6 million' },
    { indicator: 'Internet users', figure: '10.6 million' },
    { indicator: 'Internet penetration', figure: '91.0%' },
    { indicator: 'Social media user identities', figure: '8.78 million' },
    { indicator: 'Social media identities as a share of population', figure: '75.5%' },
    { indicator: 'Cellular mobile connections', figure: '11.0 million' },
    { indicator: 'YouTube potential advertising audience', figure: '7.88 million' },
    { indicator: 'Facebook potential advertising audience', figure: '5.85 million' },
    { indicator: 'Instagram potential advertising audience', figure: '5.00 million' }
  ];

  const regions = [
    { region: 'Cibao Norte', provinces: 'Santiago, Puerto Plata, Espaillat' },
    { region: 'Cibao Sur', provinces: 'La Vega, Monseñor Nouel, Sánchez Ramírez' },
    { region: 'Cibao Nordeste', provinces: 'Duarte, Hermanas Mirabal, María Trinidad Sánchez, Samaná' },
    { region: 'Cibao Noroeste', provinces: 'Valverde, Monte Cristi, Dajabón, Santiago Rodríguez' },
    { region: 'Valdesia', provinces: 'San Cristóbal, Azua, Peravia, San José de Ocoa' },
    { region: 'Enriquillo', provinces: 'Barahona, Bahoruco, Pedernales, Independencia' },
    { region: 'El Valle', provinces: 'San Juan, Elías Piña' },
    { region: 'Yuma', provinces: 'La Romana, La Altagracia, El Seibo' },
    { region: 'Higuamo', provinces: 'San Pedro de Macorís, Hato Mayor, Monte Plata' },
    { region: 'Ozama or Metropolitan', provinces: 'Distrito Nacional, Santo Domingo' }
  ];

  const devServices = [
    'Custom business website design and development.',
    'Corporate and service-based websites.',
    'Spanish-language eCommerce website development.',
    'Product catalogue and online shopping functionality.',
    'WordPress and custom PHP development.',
    'React JS and modern web application development.',
    'Website redesign and speed optimization.',
    'Technical SEO-friendly website architecture.',
    'Contact forms, WhatsApp integration, and lead generation features.'
  ];

  const seoCapabilities = [
    {
      num: '1. Spanish Keyword Research',
      desc: 'Identify search terms used by customers in the Dominican Republic, including commercial, transactional, and location-based keywords.'
    },
    {
      num: '2. On-Page SEO',
      desc: 'Optimize page titles, meta descriptions, headings, URLs, internal links, images, and Spanish website content.'
    },
    {
      num: '3. Technical SEO',
      desc: 'Improve website indexing, crawlability, mobile usability, page speed, XML sitemaps, canonical tags, and structured data.'
    },
    {
      num: '4. Local SEO',
      desc: 'Improve local search visibility with location-focused landing pages, Google Business Profile optimization, business information consistency, and local content.'
    },
    {
      num: '5. Off-Page SEO',
      desc: 'Develop a relevant backlink strategy, digital PR opportunities, and quality business citations.'
    },
    {
      num: '6. eCommerce SEO',
      desc: 'Optimize product pages, categories, product descriptions, internal navigation, and structured product information.'
    }
  ];

  const smmItems = [
    'Facebook and Instagram business promotion.',
    'Spanish-language post and campaign content.',
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
    'Campaign monitoring and performance optimization.'
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
    'Website development focused on usability and search visibility.'
  ];

  const faqs = [
    {
      q: '1. Do you provide website development services in the Dominican Republic?',
      a: 'Yes. UDMIDEAS provides custom website design and development for businesses targeting the Dominican Republic.'
    },
    {
      q: '2. Do you develop Spanish-language websites?',
      a: 'Yes. We create Spanish-language business websites and online stores.'
    },
    {
      q: '3. Do you provide Spanish SEO services?',
      a: 'Yes. Our services include keyword research, on-page SEO, technical SEO, local SEO, and link-building strategies.'
    },
    {
      q: '4. Can you do SEO for Dominican Republic eCommerce websites?',
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
      q: '7. Can you target Santo Domingo and other provinces?',
      a: 'Yes. We can develop location-focused SEO strategies for Santo Domingo, Santiago, La Altagracia, La Romana, Puerto Plata, and other provinces.'
    },
    {
      q: '8. Do you offer custom-coded websites?',
      a: 'Yes. We develop custom-coded websites based on business requirements and project scope.'
    },
    {
      q: '9. What is the starting price for your services?',
      a: 'Our listed starting price is $500 for each service category. The final quotation depends on project requirements.'
    },
    {
      q: '10. Can businesses outside the Dominican Republic work with UDMIDEAS?',
      a: 'Yes. We work with international businesses looking for website development and digital marketing services.'
    }
  ];

  return (
    <div className="space-y-14 text-left">
      {/* Hero / Page Introduction */}
      <header className="max-w-4xl space-y-4">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>Dominican Republic Website Design, Development & Spanish SEO · 15+ Years Experience</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          Dominican Republic Spanish Website Design, Development & SEO Digital Marketing Company
        </h1>

        <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            The Dominican Republic is an important Spanish-speaking market in the Caribbean, offering business opportunities in tourism, hospitality, real estate, retail, healthcare, education, professional services, and eCommerce. As more customers research products and services online, businesses need a strong digital presence to attract local and international customers.
          </p>
          <p>
            UDMIDEAS provides Spanish website design and development, Spanish SEO, eCommerce SEO, social media marketing (SMM), and PPC advertising services for businesses across the Dominican Republic.
          </p>
          <p className="text-slate-400">
            Our focus is on building custom-coded, search-engine-friendly websites and helping businesses improve their visibility in Spanish-language search results.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20Spanish%20website%20design%20and%20SEO%20in%20the%20Dominican%20Republic."
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

      {/* Why Do Dominican Republic Businesses Need a Professional Website? */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            Digital Foundation
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Do Dominican Republic Businesses Need a Professional Website?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Customers often search online before contacting a company, booking a hotel, purchasing a product, or choosing a service provider. A professional Spanish website helps businesses:
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
          A website should be mobile-friendly, fast-loading, secure, easy to navigate, and designed around the needs of Spanish-speaking customers.
        </div>
      </section>

      {/* Latest Digital Statistics: Dominican Republic 2027 */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Market Intelligence
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Latest Digital Statistics: Dominican Republic 2027
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            The DataReportal Digital 2027 report provides a useful view of the country's digital audience, using figures reported for late 2026.
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
              {drStats.map((row, idx) => (
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
          <h3 className="text-base font-bold text-white">What do these figures mean for businesses?</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            With 10.6 million internet users and a large social media audience, Dominican Republic businesses have significant opportunities to promote products and services online. Spanish SEO can help customers discover a business through search engines, while Facebook, Instagram, YouTube, and other platforms can support brand awareness and paid campaigns.
          </p>
          <p className="text-xs text-slate-400 italic">
            These figures are reported digital estimates, not guaranteed customer counts. Social media identities and advertising reach may not represent unique active individuals.
          </p>
        </div>
      </section>

      {/* Dominican Republic Regions and Provinces for Local SEO */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>10 Administrative Regions · 31 Provinces & National District</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Dominican Republic Regions and Provinces for Local SEO
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            The Dominican Republic has 31 provinces and one National District, grouped into ten administrative development regions. Businesses can use province- and city-focused landing pages to target relevant local searches.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl max-w-4xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Administrative region</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Provinces and district</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {regions.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.region}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200 text-xs sm:text-sm">
                    {row.provinces}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="max-w-4xl space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            For example, a hotel can target searches related to Punta Cana and La Altagracia, while a professional service company may create dedicated pages for Santo Domingo, Santiago, La Romana, and San Pedro de Macorís.
          </p>
          <p className="text-slate-400">
            Local SEO pages should contain useful, original information for each location rather than repeating identical content with only the city name changed.
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
            UDMIDEAS develops custom-coded websites for Dominican Republic businesses. We focus on business requirements, user experience, performance, mobile responsiveness, and search visibility.
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
          We develop websites around the client's business goals instead of relying only on generic pre-designed templates.
        </p>
      </section>

      {/* Spanish SEO Services in the Dominican Republic */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>Organic Search Growth</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Spanish SEO Services in the Dominican Republic
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Spanish SEO helps businesses reach people searching for their products and services in Spanish. Our SEO strategy focuses on relevant keywords, technical website performance, useful content, and local search visibility.
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
            Online stores need a strategy that helps customers discover products and complete purchases. UDMIDEAS provides eCommerce SEO and digital marketing services for Spanish-language online stores.
          </p>
          <p>
            Our services include product keyword research, category page optimization, technical eCommerce SEO, product schema, shopping experience improvements, conversion-focused content, and campaign landing pages.
          </p>
          <p className="text-slate-200 font-medium">
            We also support digital marketing campaigns for tourism, hotels, restaurants, real estate, retail, education, healthcare, and other industries.
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
            Social media and paid advertising can help businesses reach targeted audiences and generate enquiries more quickly.
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
          Advertising budgets are separate from management fees. Campaign results depend on the industry, competition, audience, offer, and budget.
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
            UDMIDEAS brings more than 15 years of experience in website development, SEO, and digital marketing. We work with businesses targeting international markets and understand the importance of language-specific website content and search strategies.
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
            Are you looking for a Spanish website design, development, SEO, eCommerce SEO, SMM, or PPC company for your business in the Dominican Republic? Build your digital presence with UDMIDEAS.
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
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20discuss%20Spanish%20website%20development%20and%20SEO%20for%20the%20Dominican%20Republic."
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
