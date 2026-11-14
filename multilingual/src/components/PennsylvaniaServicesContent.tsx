import React, { useState } from 'react';
import {
  Globe2,
  Code2,
  Search,
  CheckCircle2,
  MessageCircle,
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

export const PennsylvaniaServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whyChooseItems = [
    {
      title: '15+ years of experience',
      desc: 'Website development and digital marketing experience across different industries and international markets.'
    },
    {
      title: 'Custom-coded development',
      desc: 'Websites built from scratch using technologies such as React JS, PHP and Laravel, along with suitable CMS platforms.'
    },
    {
      title: 'Multilingual solutions',
      desc: 'Websites and marketing campaigns in English, Spanish, French, German, Arabic and other languages according to business requirements.'
    },
    {
      title: 'SEO-focused development',
      desc: 'Search-friendly architecture, mobile responsiveness, technical optimisation and structured content.'
    },
    {
      title: 'Modern search visibility',
      desc: 'SEO, Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO).'
    },
    {
      title: 'Complete digital marketing',
      desc: 'SEO, SMM, PPC, content creation and video marketing services.'
    }
  ];

  const webServicesRows = [
    { service: 'Business website development', details: 'Professional websites for service-based businesses' },
    { service: 'Custom-coded websites', details: 'Development from scratch using modern frameworks' },
    { service: 'eCommerce website development', details: 'Online stores, product catalogues and shopping functionality' },
    { service: 'WordPress development', details: 'Custom WordPress websites and business websites' },
    { service: 'React JS development', details: 'Modern, responsive web applications and interfaces' },
    { service: 'PHP and Laravel development', details: 'Custom business systems and web applications' },
    { service: 'Multilingual websites', details: 'Multiple languages, translated content and language-specific pages' },
    { service: 'Website redesign', details: 'Updated design, structure, performance and user experience' },
    { service: 'Landing page development', details: 'Campaign-specific pages for lead generation and advertising' }
  ];

  const pricingPackages = [
    { pkg: 'Business website', cost: '$500' },
    { pkg: 'Corporate website', cost: 'Custom quotation' },
    { pkg: 'eCommerce website', cost: 'Custom quotation' },
    { pkg: 'Multilingual website', cost: 'Custom quotation' },
    { pkg: 'Custom web application', cost: 'Based on functionality' }
  ];

  const multilingualPoints = [
    'English website design, development and SEO.',
    'Spanish website content and Spanish-language SEO.',
    'French and German website development and marketing.',
    'Arabic website development and search optimisation.',
    'Language-specific keyword research and content planning.',
    'Multilingual website architecture and hreflang implementation.',
    'Localised landing pages for different markets.'
  ];

  const searchVisibilityRows = [
    {
      service: 'SEO – Search Engine Optimisation',
      focus: 'Traditional search visibility',
      activities: 'Keyword research, technical SEO, on-page SEO, content optimisation, link building and local SEO'
    },
    {
      service: 'AEO – Answer Engine Optimisation',
      focus: 'Answer-based search',
      activities: 'Question-focused content, FAQs, clear answers, structured data and helpful information'
    },
    {
      service: 'GEO – Generative Engine Optimisation',
      focus: 'Visibility in generative search experiences',
      activities: 'Entity optimisation, topical authority, factual content, brand information and structured website content'
    }
  ];

  const smmPpcRows = [
    { service: 'Facebook marketing', activities: 'Business page management, content and campaigns' },
    { service: 'Instagram marketing', activities: 'Reels, posts, creative content and audience engagement' },
    { service: 'LinkedIn marketing', activities: 'B2B marketing and professional audience targeting' },
    { service: 'Google Ads', activities: 'Search campaigns, lead generation and conversion tracking' },
    { service: 'Facebook and Instagram Ads', activities: 'Audience targeting, lead campaigns and remarketing' },
    { service: 'Content marketing', activities: 'Blog writing, website content and promotional material' },
    { service: 'Video creation', activities: 'Business videos, promotional videos and social media content' }
  ];

  const pennsylvaniaIndustries = [
    { industry: 'Healthcare and medical', req: 'Clinic websites, service pages and local SEO' },
    { industry: 'Legal services', req: 'Attorney websites, practice-area pages and lead generation' },
    { industry: 'Construction and contractors', req: 'Service websites, project galleries and local SEO' },
    { industry: 'Manufacturing', req: 'Industrial websites, product catalogues and B2B SEO' },
    { industry: 'Real estate', req: 'Property websites, landing pages and location-based marketing' },
    { industry: 'Education', req: 'School, college, training and course websites' },
    { industry: 'Hospitality and restaurants', req: 'Restaurant websites, menus and local search visibility' },
    { industry: 'Retail and eCommerce', req: 'Online stores, product SEO and PPC campaigns' },
    { industry: 'Technology and IT', req: 'Corporate websites, software pages and B2B marketing' },
    { industry: 'Transportation and logistics', req: 'Service websites and commercial lead generation' },
    { industry: 'Professional services', req: 'Websites for consultants, accountants and agencies' },
    { industry: 'Home services', req: 'Websites and local campaigns for repair and maintenance businesses' }
  ];

  const pennsylvaniaRegions = [
    {
      region: 'Philadelphia and the Countryside',
      cities: 'Philadelphia, Chester, West Chester, King of Prussia',
      services: 'Website development, SEO, AEO, GEO, SMM and PPC'
    },
    {
      region: 'Pittsburgh & Its Countryside',
      cities: 'Pittsburgh, Greensburg, Washington, Butler',
      services: 'Custom websites, local SEO, eCommerce SEO and PPC'
    },
    {
      region: 'The Alleghenies',
      cities: 'Johnstown, Altoona, Bedford, Huntingdon',
      services: 'Website design, development and digital marketing'
    },
    {
      region: 'Laurel Highlands',
      cities: 'Uniontown, Somerset, Ligonier, Indiana',
      services: 'Business websites, SEO, SMM and PPC'
    },
    {
      region: 'Dutch Country Roads',
      cities: 'Lancaster, York, Reading, Lebanon',
      services: 'Multilingual websites, local SEO and eCommerce marketing'
    },
    {
      region: 'Lehigh Valley',
      cities: 'Allentown, Bethlehem, Easton',
      services: 'Website development, technical SEO and lead generation'
    },
    {
      region: 'Pocono Mountains',
      cities: 'Stroudsburg, Mount Pocono, East Stroudsburg, Milford',
      services: 'Hospitality websites, local SEO, SMM and PPC'
    },
    {
      region: 'Pennsylvania Wilds',
      cities: 'Williamsport, Wellsboro, DuBois, Lock Haven',
      services: 'Website development, SEO and content marketing'
    },
    {
      region: 'Great Lakes Region',
      cities: 'Erie, Meadville, Corry, Edinboro',
      services: 'Business websites, eCommerce and digital marketing'
    },
    {
      region: 'Upstate PA',
      cities: 'Scranton, Wilkes-Barre, Hazleton, Tunkhannock',
      services: 'Custom development, local SEO, AEO and GEO'
    },
    {
      region: 'Valleys of the Susquehanna',
      cities: 'Harrisburg, Lewisburg, Sunbury, Bloomsburg',
      services: 'Website design, SEO, SMM and PPC'
    }
  ];

  const pennsylvaniaStats = [
    { stat: 'Pennsylvania population', figure: '13,059,432', period: 'July 2025 estimate' },
    { stat: 'Hispanic or Latino population', figure: '9.9%', period: 'Census QuickFacts' },
    { stat: 'Foreign-born population', figure: '7.7%', period: '2020–2024' },
    { stat: 'People speaking a language other than English at home', figure: '12.4%', period: '2020–2024' },
    { stat: 'Households with broadband internet', figure: '89.7%', period: '2020–2024' },
    { stat: 'Small businesses', figure: 'Approximately 1.2 million', period: 'SBA 2025 profile' },
    { stat: 'Small business employees', figure: 'Approximately 2.5 million', period: 'SBA 2025 profile' },
    { stat: 'Small business share of Pennsylvania businesses', figure: '99.6%', period: 'SBA 2025 profile' }
  ];

  const futureTrends = [
    { trend: 'AI-powered search experiences', opp: 'Improve content structure and brand information for generative search discovery' },
    { trend: 'AEO and conversational search', opp: 'Publish useful answers to customer questions' },
    { trend: 'GEO strategies', opp: 'Build topical authority and clear business entities' },
    { trend: 'Multilingual digital experiences', opp: 'Reach customers who prefer different languages' },
    { trend: 'Local search optimisation', opp: 'Improve visibility for city, service and regional searches' },
    { trend: 'Video-first marketing', opp: 'Use short videos to demonstrate products and services' },
    { trend: 'eCommerce personalisation', opp: 'Improve product discovery and customer experience' },
    { trend: 'Conversion-focused websites', opp: 'Create faster, clearer and more effective enquiry journeys' }
  ];

  const faqs = [
    {
      q: '1. Does UDMIDEAS provide website design and development services across Pennsylvania?',
      a: 'Yes. We offer website design and development services throughout Pennsylvania, including Philadelphia, Pittsburgh, Harrisburg, Allentown, Erie, Lancaster and other locations.'
    },
    {
      q: '2. What is the starting price for a business website?',
      a: 'Our business website development starts at $500. The final cost depends on the required pages, features, design and functionality.'
    },
    {
      q: '3. Do you build custom-coded websites?',
      a: 'Yes. We develop custom-coded websites from scratch using technologies such as React JS, PHP and Laravel, based on project requirements.'
    },
    {
      q: '4. Does UDMIDEAS provide multilingual website development?',
      a: 'Yes. We develop multilingual websites in English, Spanish, French, German, Arabic and other languages according to business needs.'
    },
    {
      q: '5. Do you offer SEO services in Pennsylvania?',
      a: 'Yes. Our SEO services include technical SEO, on-page SEO, off-page SEO, local SEO, eCommerce SEO and international SEO.'
    },
    {
      q: '6. What are AEO and GEO services?',
      a: 'AEO focuses on improving content for answer-based discovery, while GEO focuses on improving brand and content visibility in generative search experiences.'
    },
    {
      q: '7. Can you manage Google Ads and social media advertising?',
      a: 'Yes. We provide Google Ads, Facebook Ads, Instagram Ads and social media marketing services.'
    },
    {
      q: '8. Do you provide eCommerce website development and SEO?',
      a: 'Yes. We develop eCommerce websites and provide product optimisation, category SEO, technical SEO and paid advertising support.'
    },
    {
      q: '9. Can you work with businesses outside major Pennsylvania cities?',
      a: 'Yes. Our services are available throughout Pennsylvania, including smaller towns and communities in all 11 recognised tourism regions.'
    },
    {
      q: '10. How can a Pennsylvania business start working with UDMIDEAS?',
      a: 'Contact our team through our website or email. Share your business requirements, target locations and project goals so we can recommend a suitable website or digital marketing solution.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* Hero / Introduction */}
      <header className="max-w-4xl space-y-5">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>Pennsylvania Custom Web Design, Multilingual SEO, AEO, GEO, SMM &amp; PPC · 15+ Years</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          Pennsylvania Website Design, Development &amp; Multilingual Digital Marketing Company – UDMIDEAS
        </h1>

        <div className="space-y-3 pt-1">
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Pennsylvania is home to a diverse business economy, including technology companies, healthcare providers, manufacturers, construction contractors, professional service firms, retailers, restaurants, educational institutions and eCommerce brands. Businesses across Philadelphia, Pittsburgh, Harrisburg, Allentown, Erie, Lancaster and other communities need strong websites and effective digital marketing to reach customers and compete online.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            UDMIDEAS provides multilingual website design and development, SEO, AEO, GEO, social media marketing (SMM) and pay-per-click advertising (PPC) services for businesses throughout Pennsylvania. We build custom-coded websites from scratch and develop digital marketing strategies to help businesses improve their online visibility, reach relevant audiences and generate enquiries.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Our services support local businesses, growing companies, professional firms, manufacturers and eCommerce brands looking to reach customers in Pennsylvania, across the United States and internationally.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20website%20design%20and%20multilingual%20digital%20marketing%20in%20Pennsylvania."
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
            <span>Request Pennsylvania Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Why Choose UDMIDEAS? */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Agency Advantages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Choose UDMIDEAS?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS combines website development and digital marketing to help businesses build a stronger online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyChooseItems.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          Our objective is to build websites that support business goals—not simply create attractive online pages.
        </div>
      </section>

      {/* Website Design and Development Services in Pennsylvania */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            <span>Custom Web Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Website Design and Development Services in Pennsylvania
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            We develop websites for businesses that need professional design, custom functionality, multilingual content or eCommerce capabilities.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-white">Website service</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">What we provide</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {webServicesRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.service}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {row.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Website Development Cost */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Transparent Investment
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Website Development Cost
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS website development packages start at $500.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-white">Website package</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Starting cost</th>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          The final price depends on page count, design complexity, languages, integrations, eCommerce features and technical requirements. Domain registration, hosting and third-party services may be additional.
        </div>
      </section>

      {/* Multilingual Website Development and SEO */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>Our Multilingual Services Include</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Multilingual Website Development and SEO
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Pennsylvania businesses can reach customers beyond their immediate service areas by offering content in multiple languages. UDMIDEAS develops multilingual websites and language-specific SEO strategies to help companies communicate with different audiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {multilingualPoints.map((pt, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{pt}</span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed">
          We focus on accurate language targeting, useful content and technically correct multilingual implementation rather than simply duplicating pages through automatic translation.
        </div>
      </section>

      {/* SEO, AEO and GEO Services in Pennsylvania */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Search &amp; AI Discovery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SEO, AEO and GEO Services in Pennsylvania
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Search behaviour is changing. Customers use traditional search engines, conversational questions and AI-powered discovery platforms to find businesses, compare services and make purchasing decisions. UDMIDEAS provides strategies that address these different discovery methods.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Service</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Main focus</th>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">Activities</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {searchVisibilityRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.service}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-300 font-medium">
                    {row.focus}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {row.activities}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Our SEO services include local SEO, national SEO, international SEO, eCommerce SEO, technical audits, Google Search Console analysis, analytics setup, content optimisation and Google Business Profile support.
          </p>
          <p className="text-white font-semibold">
            The goal: Help relevant customers discover your business, understand your services and take action.
          </p>
        </div>
      </section>

      {/* SMM and PPC Advertising */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <Megaphone className="w-4 h-4" />
            <span>Social &amp; Paid Acquisition</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SMM and PPC Advertising
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            A website needs targeted visitors to create business opportunities. UDMIDEAS provides social media marketing and paid advertising services to help Pennsylvania businesses reach potential customers.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-purple-400">Service</th>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">Marketing activities</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {smmPpcRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.service}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {row.activities}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          Campaigns can be planned around business locations, services, customer interests and measurable objectives.
        </div>
      </section>

      {/* Pennsylvania Business Industries We Work With */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            <span>Sector Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Pennsylvania Business Industries We Work With
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            We provide website development and digital marketing solutions for a wide range of industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pennsylvaniaIndustries.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-1.5 hover:border-slate-700 transition-all"
            >
              <div className="text-sm sm:text-base font-bold text-white">
                {item.industry}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.req}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* UDMIDEAS Services Across All Pennsylvania Regions */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>All 11 Pennsylvania Regions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            UDMIDEAS Services Across All Pennsylvania Regions
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Pennsylvania&apos;s tourism organisation recognises 11 distinct regions. UDMIDEAS offers website design, custom development, multilingual SEO, AEO, GEO, SMM and PPC services throughout all these regions, including their cities, towns and surrounding communities.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Pennsylvania region</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Representative cities and locations</th>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">UDMIDEAS services</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {pennsylvaniaRegions.map((row, idx) => (
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
          <strong className="text-white">Statewide service coverage:</strong> The cities listed are representative locations, not service boundaries. UDMIDEAS offers its digital services to businesses across Pennsylvania, including smaller towns and surrounding communities.
        </div>
      </section>

      {/* Pennsylvania Business and Digital Market Statistics */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4" />
            <span>Market Intelligence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Pennsylvania Business and Digital Market Statistics
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            The following figures provide useful context for businesses planning their online growth.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">Statistic</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Latest available figure</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Reporting period</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {pennsylvaniaStats.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-white">
                    {row.stat}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400 whitespace-nowrap">
                    {row.figure}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-400 whitespace-nowrap">
                    {row.period}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          These statistics highlight the scale of Pennsylvania&apos;s business market and the importance of accessible websites, online discovery and digital customer acquisition. The language figures also demonstrate why multilingual communication can be useful for businesses serving diverse audiences.
        </div>
      </section>

      {/* Future Digital Marketing Opportunities: 2027–2030 */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>2027–2030 Strategic Outlook</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Future Digital Marketing Opportunities: 2027–2030
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Digital marketing will continue to evolve as search platforms, customer expectations and online purchasing behaviour change.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Trend</th>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">Potential business opportunity</th>
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
          Businesses that invest in useful content, strong websites, accurate business information and measurable marketing strategies can prepare for changing digital discovery methods.
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Common Questions
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

      {/* Grow Your Pennsylvania Business with UDMIDEAS */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 space-y-6 shadow-xl">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Contact UDMIDEAS to Discuss Your Pennsylvania Project</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Grow Your Pennsylvania Business with UDMIDEAS
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Your website is an important part of your business growth. Whether you need a new custom-coded website, multilingual website development, SEO, AEO, GEO, social media marketing or PPC advertising, UDMIDEAS can help you build a stronger digital presence.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            We work with businesses across Pennsylvania to develop websites and digital marketing strategies designed around their services, customers and growth objectives.
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
              Contact UDMIDEAS to discuss your Pennsylvania website development and digital marketing project.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20grow%20my%20Pennsylvania%20business%20with%20UDMIDEAS."
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
