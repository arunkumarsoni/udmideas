import React, { useState } from 'react';
import {
  Globe2,
  Code2,
  Search,
  Share2,
  CheckCircle2,
  MessageCircle,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Award,
  Rocket,
  ChevronDown,
  ChevronUp,
  Sparkles,
  BarChart3,
  Building2,
  Megaphone
} from 'lucide-react';

export const CaliforniaServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const advantages = [
    '15+ years of website development and digital marketing experience.',
    'Custom-coded websites developed from scratch.',
    'Multilingual website design and development.',
    'English, Spanish, French, German, Arabic and other languages.',
    'Technical SEO, On-Page SEO and Off-Page SEO.',
    'AEO and GEO optimisation strategies.',
    'Local SEO and Google Business Profile optimisation.',
    'Google Ads, Facebook Ads and Instagram advertising.',
    'eCommerce website development and SEO.',
    'International SEO and multilingual marketing.',
    'Website speed, mobile responsiveness and performance optimisation.',
    'Dedicated website development and digital marketing support.'
  ];

  const webDevServices = [
    'React JS website development.',
    'PHP and Laravel website development.',
    'WordPress website development.',
    'Custom business and corporate websites.',
    'eCommerce website development.',
    'Multilingual website development.',
    'Professional service websites.',
    'Landing pages and lead-generation websites.',
    'Website redesign and development.',
    'Custom web applications.'
  ];

  const pricingTypes = [
    { type: 'Business Website', cost: '$500', suitable: 'Startups and small businesses' },
    { type: 'Corporate Website', cost: 'Custom Quote', suitable: 'Established companies' },
    { type: 'Multilingual Website', cost: 'Custom Quote', suitable: 'International businesses' },
    { type: 'eCommerce Website', cost: 'Custom Quote', suitable: 'Online retailers' },
    { type: 'Custom Web Application', cost: 'Custom Quote', suitable: 'Advanced business requirements' }
  ];

  const multilingualLanguages = [
    { lang: 'English', market: 'USA and international customers.' },
    { lang: 'Spanish', market: 'California Hispanic communities and Latin America.' },
    { lang: 'French', market: 'French-speaking international markets.' },
    { lang: 'German', market: 'Germany, Switzerland and other German-speaking markets.' },
    { lang: 'Arabic', market: 'Middle Eastern markets.' },
    { lang: 'Additional Languages', market: 'Additional languages based on business requirements.' }
  ];

  const searchVisibilityRows = [
    {
      service: 'SEO',
      work: 'Technical, on-page, off-page and content optimisation',
      objective: 'Organic search visibility'
    },
    {
      service: 'AEO',
      work: 'FAQs, structured answers, schema and question-based content',
      objective: 'Improve answer discovery'
    },
    {
      service: 'GEO',
      work: 'Brand entities, authoritative content and contextual relevance',
      objective: 'Improve generative search visibility'
    },
    {
      service: 'Local SEO',
      work: 'Google Business Profile, local keywords and location pages',
      objective: 'Reach nearby customers'
    },
    {
      service: 'eCommerce SEO',
      work: 'Product, category and technical optimisation',
      objective: 'Improve product discovery'
    },
    {
      service: 'International SEO',
      work: 'Multilingual content and hreflang',
      objective: 'Reach international markets'
    }
  ];

  const smmPoints = [
    'Facebook and Instagram marketing.',
    'LinkedIn marketing for B2B businesses.',
    'Social media account management.',
    'Reels and video content creation.',
    'Multilingual social media campaigns.',
    'Content planning and publishing.',
    'Brand awareness and lead-generation campaigns.'
  ];

  const ppcPoints = [
    'Google Search Ads.',
    'Google Display Ads.',
    'Google Shopping Ads.',
    'YouTube advertising.',
    'Facebook and Instagram Ads.',
    'LinkedIn advertising.',
    'Multilingual PPC campaigns.',
    'Conversion tracking and optimisation.'
  ];

  const californiaIndustries = [
    { industry: 'Technology & IT', services: 'Custom websites, SEO and B2B marketing' },
    { industry: 'Real Estate', services: 'Property websites, local SEO and PPC' },
    { industry: 'Healthcare & Dental', services: 'Medical websites and local SEO' },
    { industry: 'Law Firms', services: 'Professional websites and legal SEO' },
    { industry: 'Construction', services: 'Contractor websites and lead generation' },
    { industry: 'eCommerce & Retail', services: 'Online stores and product SEO' },
    { industry: 'Restaurants & Hospitality', services: 'Multilingual websites and SMM' },
    { industry: 'Education', services: 'Educational websites and student marketing' },
    { industry: 'Finance & Accounting', services: 'Corporate websites and B2B SEO' },
    { industry: 'Manufacturing', services: 'Industrial websites and international SEO' },
    { industry: 'Beauty & Wellness', services: 'Booking websites and social media' },
    { industry: 'Travel & Tourism', services: 'Multilingual websites and PPC' }
  ];

  const californiaStats = [
    { indicator: 'California population estimate (July 2025)', value: '39.35 million' },
    { indicator: 'Hispanic or Latino population', value: '41.2%' },
    { indicator: 'Foreign-born population', value: '27.0%' },
    { indicator: 'Residents speaking a language other than English at home', value: '44.4%' },
    { indicator: 'Households with broadband internet', value: '93.5%' },
    { indicator: 'Small businesses (SBA 2025 profile)', value: 'Approximately 4.3 million' },
    { indicator: 'Small business employees', value: 'Approximately 7.6 million' },
    { indicator: 'Small business share of California businesses', value: '99.8%' }
  ];

  const futureTrends = [
    { trend: 'AI-powered search', opp: 'Improve brand discovery across generative platforms' },
    { trend: 'AEO', opp: 'Provide structured answers to customer questions' },
    { trend: 'GEO', opp: 'Strengthen brand presence in generative search' },
    { trend: 'Multilingual SEO', opp: 'Reach English and Spanish-speaking audiences' },
    { trend: 'Custom development', opp: 'Build scalable and performance-focused websites' },
    { trend: 'Video marketing', opp: 'Connect with audiences through short-form videos' },
    { trend: 'PPC automation', opp: 'Improve campaign management and measurement' },
    { trend: 'Personalised marketing', opp: 'Deliver relevant customer experiences' },
    { trend: 'eCommerce development', opp: 'Expand online sales opportunities' },
    { trend: 'Voice search', opp: 'Optimise conversational search experiences' }
  ];

  const faqs = [
    {
      q: '1. How much does a business website cost?',
      a: 'UDMIDEAS offers business website development starting at $500. Final pricing depends on design, pages, functionality and technical requirements.'
    },
    {
      q: '2. Do you develop custom-coded websites?',
      a: 'Yes. We build websites from scratch using React JS, PHP, Laravel and other modern development technologies.'
    },
    {
      q: '3. Do you provide multilingual website development?',
      a: 'Yes. We develop multilingual websites in English, Spanish, French, German, Arabic and other languages according to business requirements.'
    },
    {
      q: '4. Can you provide SEO services throughout California?',
      a: 'Yes. We provide local, national and international SEO services for businesses targeting Los Angeles, San Francisco, San Diego, San Jose, Sacramento and other California locations.'
    },
    {
      q: '5. Do you provide Spanish SEO services?',
      a: 'Yes. We provide Spanish keyword research, Spanish content optimisation, multilingual technical SEO and international SEO for businesses targeting Spanish-speaking audiences.'
    },
    {
      q: '6. What are AEO and GEO services?',
      a: 'AEO focuses on improving the structure and usefulness of content for answer-based discovery. GEO focuses on improving brand and content discoverability in generative search experiences.'
    },
    {
      q: '7. Do you manage Google Ads and social media advertising?',
      a: 'Yes. We manage Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads and other paid advertising campaigns.'
    },
    {
      q: '8. Can you redesign my existing website?',
      a: 'Yes. We redesign websites, improve mobile responsiveness, enhance user experience and implement technical SEO improvements.'
    },
    {
      q: '9. How long does SEO take to show results?',
      a: 'SEO generally requires consistent work over several months. Competitive markets may require six months or longer, depending on website authority, competition and content quality.'
    },
    {
      q: '10. Can you help my California business expand internationally?',
      a: 'Yes. We provide multilingual website development, international SEO, SMM and PPC services to help California companies reach customers in the USA, Europe, Latin America, the Middle East and other international markets.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* Hero / Introduction */}
      <header className="max-w-4xl space-y-5">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>California Custom Web Design, Multilingual SEO, AEO, GEO, SMM & PPC · 15+ Years</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          California Website Design, Development &amp; Multilingual Digital Marketing Company
        </h1>

        <div className="space-y-3 pt-1">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-400">
            Introduction: Grow Your California Business with UDMIDEAS
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            California is one of the largest business and technology markets in the United States. From technology startups in Silicon Valley to real estate companies in Los Angeles, healthcare providers in San Diego and eCommerce businesses in San Francisco, companies need a strong digital presence to compete and grow.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            UDMIDEAS provides professional website design, custom website development, multilingual SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), Social Media Marketing (SMM) and Pay-Per-Click (PPC) advertising services for California businesses.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We help startups, small businesses, professional service providers and established companies build modern websites and reach customers across California, the USA and international markets.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Our approach combines custom-coded website development with multilingual digital marketing strategies to help businesses improve online visibility, attract relevant visitors and generate qualified leads.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20website%20design%20and%20multilingual%20digital%20marketing%20in%20California."
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
            <span>Request California Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Why Choose UDMIDEAS for California Businesses? */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Our Key Advantages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Choose UDMIDEAS for California Businesses?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            With 15+ years of website development and digital marketing experience, UDMIDEAS focuses on building digital solutions around business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {advantages.map((pt, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{pt}</span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          We work with businesses looking for long-term digital growth rather than just a website launch or one-time advertising campaign.
        </div>
      </section>

      {/* Custom Website Design & Development Services in California */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            <span>Custom Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Custom Website Design &amp; Development Services in California
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Your website represents your business online. A professionally developed website can improve customer trust, communicate your services and generate business enquiries. UDMIDEAS builds custom-coded websites from scratch using modern technologies and frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {webDevServices.map((srv, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{srv}</span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          We develop websites according to your business model, design requirements, target audience and future expansion plans.
        </div>
      </section>

      {/* Website Development Pricing for California Businesses */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Transparent Investment
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Website Development Pricing for California Businesses
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-white">Website Type</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Starting Cost</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Suitable For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {pricingTypes.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.type}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400 whitespace-nowrap">
                    {row.cost}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {row.suitable}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          Business website development starts at $500. Final pricing depends on the number of pages, design, features, integrations, languages and development complexity. Domain, hosting and third-party services may cost extra.
        </div>
      </section>

      {/* Multilingual Website Development & SEO Services */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>Multilingual Reach</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Multilingual Website Development &amp; SEO Services
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            California has a diverse population, creating opportunities for businesses that communicate with customers in multiple languages. A multilingual website can help companies connect with Spanish-speaking communities, international customers and different language markets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {multilingualLanguages.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-1.5 hover:border-slate-700 transition-all"
            >
              <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono">
                {item.lang}
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {item.market}
              </p>
            </div>
          ))}
        </div>

        <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Our multilingual SEO services include international keyword research, language-specific content optimisation, hreflang implementation, multilingual URL structures, technical SEO, link building and international search visibility strategies.
          </p>
          <p className="text-slate-200 font-medium">
            We do not simply translate keywords. We research local search intent, audience behaviour and market-specific terminology.
          </p>
        </div>
      </section>

      {/* SEO, AEO & GEO Services for California Companies */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Search &amp; AI Discovery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SEO, AEO &amp; GEO Services for California Companies
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Search is evolving. Customers discover businesses through traditional search engines, direct answers, conversational search and generative platforms. UDMIDEAS helps California businesses prepare for these changing discovery experiences.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Service</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Our Work</th>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">Main Objective</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {searchVisibilityRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.service}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {row.work}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-300 font-medium whitespace-nowrap">
                    {row.objective}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          Our strategies focus on building website authority, relevant content, technical performance and clear business information.
        </div>
      </section>

      {/* Multilingual SMM & PPC Advertising Services */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <Megaphone className="w-4 h-4" />
            <span>Paid &amp; Social Acquisition</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Multilingual SMM &amp; PPC Advertising Services
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Social media and paid advertising help California companies reach targeted audiences and generate customer enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 font-bold text-lg text-white">
              <Share2 className="w-5 h-5 text-purple-400 shrink-0" />
              <h3>Social Media Marketing (SMM)</h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
              {smmPoints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/30 border border-blue-900/30 space-y-4">
            <div className="flex items-center gap-2 font-bold text-lg text-white">
              <TrendingUp className="w-5 h-5 text-blue-400 shrink-0" />
              <h3>Pay-Per-Click (PPC) Advertising</h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
              {ppcPoints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          We develop advertising strategies based on customer locations, industry, search intent, audience demographics and campaign objectives.
        </div>
      </section>

      {/* California Business Industries We Work For */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            <span>Sector Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            California Business Industries We Work For
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS provides website development and digital marketing services for businesses across California.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {californiaIndustries.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-1.5 hover:border-slate-700 transition-all"
            >
              <div className="text-sm sm:text-base font-bold text-white">
                {item.industry}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.services}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* California Digital Market Statistics */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4" />
            <span>Market Intelligence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            California Digital Market Statistics
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            California offers significant opportunities for website development and digital marketing companies.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">Market Indicator</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Statistics</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {californiaStats.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-white">
                    {row.indicator}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400 whitespace-nowrap">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div className="text-xs font-mono text-slate-400">
            Sources: U.S. Census Bureau QuickFacts (2020–2025 data) and U.S. Small Business Administration 2025 California Small Business Profile.
          </div>
          <p>
            These figures demonstrate the importance of multilingual digital experiences, online business visibility and professional website development in California.
          </p>
        </div>
      </section>

      {/* Future of Website Development & Digital Marketing (2027–2030) */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>2027–2030 Strategic Outlook</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Future of Website Development &amp; Digital Marketing (2027–2030)
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            The future of digital marketing will involve changing customer behaviour, personalised experiences, generative search, automation and multilingual communication.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Future Trend</th>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">Opportunity for California Businesses</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {futureTrends.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.trend}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {row.opp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          Between 2027 and 2030, businesses should consider combining SEO, AEO, GEO, SMM, PPC, video marketing and multilingual website development rather than depending on a single marketing channel. These trends represent strategic opportunities, not guaranteed growth forecasts.
        </div>
      </section>

      {/* Frequently Asked Questions: California Business Owners */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Common Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions: California Business Owners
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

      {/* Grow Your California Business with UDMIDEAS */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 space-y-6 shadow-xl">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Contact UDMIDEAS Today – Let&apos;s Grow Your Business Online</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Grow Your California Business with UDMIDEAS
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Your business deserves a professional digital presence that supports long-term growth. UDMIDEAS combines custom website development, multilingual SEO, AEO, GEO, social media marketing and PPC advertising to help California businesses build stronger brands and reach more customers.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Whether you are launching a startup, operating an established company, expanding an eCommerce business or entering international markets, we can help you develop a digital strategy aligned with your business goals.
          </p>
          <p className="text-sm font-bold text-white">
            We Build Custom Websites. We Improve Search Visibility. We Grow Businesses.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
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
              UDMIDEAS – Your Website Development &amp; Multilingual Digital Marketing Partner in California, USA.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20grow%20my%20California%20business%20with%20UDMIDEAS."
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
              <span>Let&apos;s Grow Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
