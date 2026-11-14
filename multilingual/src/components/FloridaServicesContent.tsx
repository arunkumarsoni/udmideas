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
  Megaphone,
  MapPin
} from 'lucide-react';

export const FloridaServicesContent: React.FC = () => {
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
    'Local, national and international SEO.',
    'Google Ads and social media advertising.',
    'eCommerce website development and optimisation.',
    'Multilingual SMM and PPC campaigns.',
    'Website speed and mobile responsiveness optimisation.',
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
    'Website redesign and performance optimisation.',
    'Custom web applications.'
  ];

  const pricingPackages = [
    { pkg: 'Business Website', cost: '$500', suitable: 'Startups and small businesses' },
    { pkg: 'Corporate Website', cost: 'Custom Quote', suitable: 'Established companies' },
    { pkg: 'Multilingual Website', cost: 'Custom Quote', suitable: 'International businesses' },
    { pkg: 'eCommerce Website', cost: 'Custom Quote', suitable: 'Online retailers' },
    { pkg: 'Custom Web Application', cost: 'Custom Quote', suitable: 'Advanced business requirements' }
  ];

  const multilingualLanguages = [
    { lang: 'English', market: 'Florida, USA and international customers.' },
    { lang: 'Spanish', market: 'Florida Hispanic communities and Latin American markets.' },
    { lang: 'French', market: 'French-speaking international markets.' },
    { lang: 'German', market: 'Germany and other German-speaking markets.' },
    { lang: 'Arabic', market: 'Middle Eastern markets.' },
    { lang: 'Additional Languages', market: 'Additional languages according to business requirements.' }
  ];

  const searchVisibilityRows = [
    {
      service: 'SEO',
      work: 'Technical, on-page, off-page and content optimisation',
      objective: 'Improve organic search visibility'
    },
    {
      service: 'AEO',
      work: 'FAQs, structured answers, schema and question-based content',
      objective: 'Improve answer discovery'
    },
    {
      service: 'GEO',
      work: 'Entity optimisation, authoritative content and brand relevance',
      objective: 'Improve generative search visibility'
    },
    {
      service: 'Local SEO',
      work: 'Google Business Profile and location-based keywords',
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
      objective: 'Reach international customers'
    }
  ];

  const smmPoints = [
    'Facebook and Instagram marketing.',
    'LinkedIn marketing for B2B businesses.',
    'Social media account management.',
    'Reels and short-form video creation.',
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
    'LinkedIn Ads.',
    'Multilingual PPC campaigns.',
    'Conversion tracking and campaign optimisation.'
  ];

  const floridaIndustries = [
    { industry: 'Real Estate', services: 'Property websites, local SEO and PPC' },
    { industry: 'Healthcare & Dental', services: 'Medical websites and local SEO' },
    { industry: 'Law Firms', services: 'Professional websites and legal SEO' },
    { industry: 'Tourism & Travel', services: 'Multilingual websites and international SEO' },
    { industry: 'Hotels & Hospitality', services: 'Booking websites and SMM' },
    { industry: 'Construction', services: 'Contractor websites and lead generation' },
    { industry: 'Technology & IT', services: 'Custom development and B2B SEO' },
    { industry: 'Finance & Accounting', services: 'Corporate websites and digital marketing' },
    { industry: 'eCommerce & Retail', services: 'Online stores and product SEO' },
    { industry: 'Restaurants', services: 'Multilingual websites and social media' },
    { industry: 'Education', services: 'Educational websites and student marketing' },
    { industry: 'Transportation & Logistics', services: 'Business websites and lead generation' },
    { industry: 'Beauty & Wellness', services: 'Booking websites and social media marketing' },
    { industry: 'Marine & Boating', services: 'Custom websites and targeted SEO' }
  ];

  const floridaRegions = [
    {
      region: 'East Central Florida',
      cities: 'Daytona Beach, Melbourne, Palm Bay, Cocoa, Titusville',
      services: 'Website Development, Local SEO, SMM, PPC'
    },
    {
      region: 'Central West Florida',
      cities: 'Tampa, St. Petersburg, Clearwater, Brandon, Largo',
      services: 'Custom Websites, SEO, AEO, GEO, SMM'
    },
    {
      region: 'Southwest Florida',
      cities: 'Naples, Fort Myers, Cape Coral, Sarasota, Bonita Springs',
      services: 'Multilingual Websites, SEO, PPC, SMM'
    },
    {
      region: 'Southeast Florida',
      cities: 'Miami, Fort Lauderdale, Boca Raton, West Palm Beach, Coral Springs',
      services: 'Multilingual Website Development, Spanish SEO, AEO, GEO, PPC'
    },
    {
      region: 'Florida Keys',
      cities: 'Key West, Key Largo, Marathon, Islamorada',
      services: 'Tourism Websites, SEO, SMM, PPC'
    }
  ];

  const floridaStats = [
    { indicator: 'Florida population estimate (July 2025)', value: '23.46 million' },
    { indicator: 'Hispanic or Latino population', value: '29.2%' },
    { indicator: 'Foreign-born population', value: '21.9%' },
    { indicator: 'Residents speaking a language other than English at home', value: '30.6%' },
    { indicator: 'Florida small businesses (2025 SBA profile)', value: 'Approximately 3.5 million' },
    { indicator: 'Small business share of Florida businesses', value: '99.8%' },
    { indicator: 'Small business employees', value: 'Approximately 3.8 million' },
    { indicator: 'Small business share of state employment', value: '39.6%' }
  ];

  const futureTrends = [
    { trend: 'AI-powered search', opp: 'Improve brand discovery across generative platforms' },
    { trend: 'AEO', opp: 'Optimise content for direct answers' },
    { trend: 'GEO', opp: 'Improve brand visibility in generative search' },
    { trend: 'Multilingual SEO', opp: 'Reach English and Spanish-speaking customers' },
    { trend: 'Custom web development', opp: 'Build scalable and performance-focused websites' },
    { trend: 'Video marketing', opp: 'Engage customers through short-form videos' },
    { trend: 'PPC automation', opp: 'Improve campaign management and measurement' },
    { trend: 'Personalised marketing', opp: 'Deliver relevant customer experiences' },
    { trend: 'eCommerce development', opp: 'Expand online sales opportunities' },
    { trend: 'Voice search', opp: 'Optimise conversational search experiences' }
  ];

  const faqs = [
    {
      q: '1. How much does a business website cost with UDMIDEAS?',
      a: 'Our business website development starts at $500. The final cost depends on the number of pages, design, functionality, integrations and technical requirements.'
    },
    {
      q: '2. Do you develop custom-coded websites?',
      a: 'Yes. We build custom-coded websites from scratch using React JS, PHP, Laravel and other modern development technologies.'
    },
    {
      q: '3. Do you provide website development services throughout Florida?',
      a: 'Yes. UDMIDEAS offers website design and development services throughout Florida, including Miami, Orlando, Tampa, Jacksonville, Naples, Fort Lauderdale and other cities.'
    },
    {
      q: '4. Do you provide Spanish website development and SEO?',
      a: 'Yes. We offer Spanish website development, Spanish keyword research, multilingual SEO, content optimisation and international SEO services.'
    },
    {
      q: '5. Can you help my Florida business rank on Google?',
      a: 'Yes. We provide technical SEO, on-page SEO, off-page SEO, local SEO, keyword research and content optimisation. Results depend on competition, website quality and ongoing work.'
    },
    {
      q: '6. What are SEO, AEO and GEO services?',
      a: 'SEO improves organic search visibility. AEO focuses on answer-based discovery, while GEO focuses on improving brand and content discoverability in generative search experiences.'
    },
    {
      q: '7. Do you manage Google Ads and social media advertising?',
      a: 'Yes. We manage Google Search Ads, Display Ads, Facebook Ads, Instagram Ads, LinkedIn Ads and multilingual PPC campaigns.'
    },
    {
      q: '8. Can you develop an eCommerce website for my Florida business?',
      a: 'Yes. We develop eCommerce websites with product pages, categories, shopping functionality, payment integrations and SEO-friendly structures.'
    },
    {
      q: '9. How long does SEO take to produce results?',
      a: 'SEO generally requires several months of consistent work. Competitive keywords may take six months or longer depending on competition, website authority and content quality.'
    },
    {
      q: '10. Can UDMIDEAS help my Florida business expand internationally?',
      a: 'Yes. We provide multilingual website development, international SEO, SMM and PPC services to help Florida companies target customers across the USA, Latin America, Europe, Canada and the Middle East.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* Hero / Introduction */}
      <header className="max-w-4xl space-y-5">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>Florida Custom Web Design, Multilingual SEO, AEO, GEO, SMM &amp; PPC · 15+ Years</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          Florida Website Design, Development &amp; Multilingual Digital Marketing Company
        </h1>

        <div className="space-y-3 pt-1">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-400">
            Introduction: Grow Your Florida Business with UDMIDEAS
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Florida is one of the most attractive business markets in the United States, with opportunities across technology, real estate, healthcare, tourism, hospitality, construction, finance, retail and eCommerce. From Miami and Fort Lauderdale to Orlando, Tampa, Jacksonville and Naples, businesses need a strong online presence to attract customers and compete in an increasingly digital marketplace.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            UDMIDEAS provides professional website design, custom website development, multilingual SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), Social Media Marketing (SMM) and Pay-Per-Click (PPC) advertising services for businesses throughout Florida.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We help startups, small businesses, professional service providers, eCommerce companies and established enterprises build modern websites and reach customers across Florida, the USA and international markets.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            With 15+ years of website development and digital marketing experience, our objective is to help businesses improve online visibility, generate qualified leads and expand into new markets.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20website%20design%20and%20multilingual%20digital%20marketing%20in%20Florida."
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
            <span>Request Florida Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Why Choose UDMIDEAS for Florida Businesses? */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Why work with us?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Choose UDMIDEAS for Florida Businesses?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS combines custom website development with multilingual digital marketing strategies to support businesses at different stages of growth.
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
          We focus on business-specific solutions rather than one-size-fits-all website and marketing packages.
        </div>
      </section>

      {/* Custom Website Design & Development Services in Florida */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            <span>Our Website Development Services Include</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Custom Website Design &amp; Development Services in Florida
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            A professional website is an important business asset. It communicates your services, builds customer trust and helps convert visitors into enquiries and sales. UDMIDEAS builds custom-coded websites from scratch using modern development technologies and frameworks.
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
          We focus on custom layouts, responsive design, website speed, functionality, scalability and SEO-friendly architecture.
        </div>
      </section>

      {/* Website Development Cost for Florida Businesses */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Transparent Investment
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Website Development Cost for Florida Businesses
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-white">Website Package</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Starting Cost</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Suitable For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {pricingPackages.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.pkg}
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
          Business website development starts at $500. Final pricing depends on page count, design complexity, functionality, languages and integrations. Domain, hosting and third-party services may be additional.
        </div>
      </section>

      {/* Multilingual Website Development & SEO Services in Florida */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>Multilingual Reach</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Multilingual Website Development &amp; SEO Services in Florida
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Florida has a diverse population with strong connections to Latin America, the Caribbean and international markets. Spanish-speaking customers represent an important audience for many Florida businesses. A multilingual website allows companies to communicate with customers in their preferred languages and explore additional markets.
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
            We research local search behaviour and customer intent rather than simply translating English keywords.
          </p>
        </div>
      </section>

      {/* SEO, AEO & GEO Services for Florida Companies */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Search &amp; AI Discovery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SEO, AEO &amp; GEO Services for Florida Companies
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Search behaviour is changing. Customers discover companies through traditional search engines, direct answers, conversational search and generative search platforms. UDMIDEAS helps Florida businesses prepare for these changing discovery experiences.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Service</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Our Work</th>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">Business Objective</th>
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
          Our strategies focus on relevant content, technical performance, website authority and useful information that answers customer questions.
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
            Social media and paid advertising help Florida businesses reach targeted customers, promote their services and generate enquiries.
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
          We develop campaigns according to your business objectives, customer locations, language preferences, audience interests and advertising budgets.
        </div>
      </section>

      {/* Florida Business Industries We Work For */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            <span>Sector Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Florida Business Industries We Work For
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS offers website development and digital marketing services for businesses across Florida&apos;s major industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {floridaIndustries.map((item, idx) => (
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

      {/* Florida Regions We Serve */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>Regional Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Florida Regions We Serve
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Florida Region</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Major Cities &amp; Locations</th>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">Our Services</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {floridaRegions.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.region}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {row.cities}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-300 font-medium">
                    {row.services}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          UDMIDEAS serves businesses throughout all these Florida regions. Whether your company operates in a major city or a smaller regional market, we can develop a website and digital marketing strategy according to your target audience and business requirements.
        </div>
      </section>

      {/* Florida Digital Market Statistics */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4" />
            <span>Market Intelligence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Florida Digital Market Statistics
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Florida offers significant opportunities for website development, online advertising and multilingual digital marketing.
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
              {floridaStats.map((row, idx) => (
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

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          These figures demonstrate why professional websites, local SEO, multilingual marketing and online customer acquisition are important opportunities for Florida companies.
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
            Digital marketing is evolving through generative search, automation, personalised customer experiences, video marketing and multilingual communication.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Future Trend</th>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">Opportunity for Florida Businesses</th>
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

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Between 2027 and 2030, businesses should consider combining traditional SEO, AEO, GEO, SMM, PPC, video creation and multilingual website development. These approaches can help companies prepare for changing customer discovery and purchasing behaviour.
          </p>
          <p className="text-slate-400">
            These are strategic opportunities, not guaranteed growth forecasts.
          </p>
        </div>
      </section>

      {/* Frequently Asked Questions: Florida Business Owners */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Common Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions: Florida Business Owners
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

      {/* Grow Your Florida Business with UDMIDEAS */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 space-y-6 shadow-xl">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Contact UDMIDEAS Today – Let&apos;s Grow Your Florida Business Online</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Grow Your Florida Business with UDMIDEAS
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Your website should be more than an online business card. It should support your brand, customer acquisition and long-term business expansion.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS combines custom website development, multilingual SEO, AEO, GEO, social media marketing and PPC advertising to help businesses build stronger digital identities.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Whether you are launching a startup in Miami, managing a company in Orlando, operating a professional service in Tampa or expanding an eCommerce business in Jacksonville, our team can help you develop a digital strategy aligned with your business goals.
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
                href="https://www.udmideasusa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-mono"
              >
                https://www.udmideasusa.com/
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
              UDMIDEAS – Your Website Development &amp; Multilingual Digital Marketing Partner Across Florida, USA.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20grow%20my%20Florida%20business%20with%20UDMIDEAS."
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
