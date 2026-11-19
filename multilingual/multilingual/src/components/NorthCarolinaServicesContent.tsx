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

export const NorthCarolinaServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whyChooseItems = [
    {
      title: '15+ years of experience',
      desc: 'Website development and digital marketing experience across multiple industries and international markets.'
    },
    {
      title: 'Custom-coded development',
      desc: 'Websites developed from scratch using technologies such as React JS, PHP and Laravel.'
    },
    {
      title: 'Multilingual solutions',
      desc: 'Website development and SEO in English, Spanish, French, German, Arabic and other languages.'
    },
    {
      title: 'SEO-friendly websites',
      desc: 'Responsive design, technical optimisation, website architecture and search-friendly content.'
    },
    {
      title: 'Modern search visibility',
      desc: 'SEO, Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO).'
    },
    {
      title: 'Complete digital marketing',
      desc: 'SEO, SMM, PPC, content creation and video marketing.'
    }
  ];

  const webServicesRows = [
    { service: 'Business website design', details: 'Professional websites for local and service-based companies' },
    { service: 'Custom-coded website development', details: 'Websites built from scratch according to project requirements' },
    { service: 'React JS development', details: 'Modern interfaces and web applications' },
    { service: 'PHP and Laravel development', details: 'Custom websites and business applications' },
    { service: 'WordPress development', details: 'Custom WordPress websites and business platforms' },
    { service: 'eCommerce development', details: 'Online stores, product catalogues and shopping functionality' },
    { service: 'Multilingual websites', details: 'Multiple language versions and localised content' },
    { service: 'Website redesign', details: 'Improved design, usability, structure and performance' },
    { service: 'Landing page development', details: 'Campaign-specific pages for lead generation and advertising' }
  ];

  const pricingPackages = [
    { pkg: 'Business website', price: '$500' },
    { pkg: 'Corporate website', price: 'Custom quotation' },
    { pkg: 'eCommerce website', price: 'Custom quotation' },
    { pkg: 'Multilingual website', price: 'Custom quotation' },
    { pkg: 'Custom web application', price: 'Based on functionality' }
  ];

  const multilingualPoints = [
    'English website development and SEO.',
    'Spanish website development and Spanish-language SEO.',
    'French and German website development.',
    'Arabic website development and search optimisation.',
    'Language-specific keyword research and content writing.',
    'Multilingual website architecture and hreflang implementation.',
    'Localised landing pages for different markets.'
  ];

  const searchVisibilityRows = [
    {
      service: 'SEO – Search Engine Optimisation',
      objective: 'Improve traditional search visibility',
      activities: 'Keyword research, technical SEO, on-page SEO, content optimisation, link building and local SEO'
    },
    {
      service: 'AEO – Answer Engine Optimisation',
      objective: 'Improve answer-based discovery',
      activities: 'FAQ content, question-based pages, structured data and clear answers'
    },
    {
      service: 'GEO – Generative Engine Optimisation',
      objective: 'Improve visibility in generative search experiences',
      activities: 'Entity optimisation, topical authority, factual content and structured brand information'
    }
  ];

  const smmPpcRows = [
    { service: 'Facebook marketing', activities: 'Business page management, posts and campaigns' },
    { service: 'Instagram marketing', activities: 'Reels, creative content and audience engagement' },
    { service: 'LinkedIn marketing', activities: 'B2B marketing and professional audience targeting' },
    { service: 'Google Ads', activities: 'Search advertising and lead generation and conversion tracking' },
    { service: 'Facebook and Instagram Ads', activities: 'Audience targeting, lead campaigns and remarketing' },
    { service: 'Content marketing', activities: 'Blog writing, website content and promotional material' },
    { service: 'Video creation', activities: 'Business videos and social media promotional videos' }
  ];

  const northCarolinaIndustries = [
    { industry: 'Technology and IT', req: 'Corporate websites, software pages and B2B SEO' },
    { industry: 'Banking and financial services', req: 'Professional websites, service pages and content marketing' },
    { industry: 'Healthcare and medical', req: 'Clinic websites, medical service pages and local SEO' },
    { industry: 'Construction and contractors', req: 'Project galleries, service pages and lead generation' },
    { industry: 'Manufacturing', req: 'Industrial websites, product catalogues and international SEO' },
    { industry: 'Real estate', req: 'Property websites, landing pages and location-based marketing' },
    { industry: 'Education', req: 'School, college and training websites' },
    { industry: 'Agriculture and food', req: 'Business websites, product pages and content marketing' },
    { industry: 'Tourism and hospitality', req: 'Hotel, restaurant and destination websites' },
    { industry: 'Transportation and logistics', req: 'Commercial websites and B2B lead generation' },
    { industry: 'Retail and eCommerce', req: 'Online stores, product SEO and PPC campaigns' },
    { industry: 'Professional services', req: 'Websites for consultants, accountants and agencies' }
  ];

  const northCarolinaRegions = [
    {
      region: 'Mountains',
      cities: 'Asheville & the Foothills, High Country, Smoky Mountains & Cherokee; Asheville, Boone, Cherokee, Hendersonville, Waynesville',
      services: 'Custom websites, SEO, AEO, GEO, SMM and PPC'
    },
    {
      region: 'Piedmont – Charlotte Region',
      cities: 'Charlotte, Concord, Gastonia, Huntersville, Mooresville',
      services: 'Website development, eCommerce SEO, local SEO and PPC'
    },
    {
      region: 'Piedmont – Raleigh, Durham & the Triangle',
      cities: 'Raleigh, Durham, Chapel Hill, Cary, Apex',
      services: 'Custom-coded websites, technical SEO, AEO and GEO'
    },
    {
      region: 'Piedmont – Greensboro & Winston-Salem',
      cities: 'Greensboro, Winston-Salem, High Point, Burlington, Kernersville',
      services: 'Business websites, multilingual SEO and digital marketing'
    },
    {
      region: 'Piedmont – Pinehurst & Sandhills',
      cities: 'Pinehurst, Southern Pines, Aberdeen, Fayetteville, Laurinburg',
      services: 'Website design, local SEO, SMM and PPC'
    },
    {
      region: 'Coast – Northeast Sounds & Inner Banks',
      cities: 'Elizabeth City, Edenton, Washington, Greenville, New Bern',
      services: 'Website development, local SEO and content marketing'
    },
    {
      region: 'Coast – Outer Banks & Crystal Coast',
      cities: 'Nags Head, Kill Devil Hills, Morehead City, Beaufort, Atlantic Beach',
      services: 'Tourism websites, hospitality SEO and social media marketing'
    },
    {
      region: 'Coast – Inner Coastal Plain',
      cities: 'Wilson, Goldsboro, Kinston, Rocky Mount, Tarboro',
      services: 'Custom websites, SEO, AEO and GEO'
    },
    {
      region: 'Coast – Southern Beaches',
      cities: 'Wilmington, Carolina Beach, Wrightsville Beach, Southport, Oak Island',
      services: 'Website development, eCommerce SEO, SMM and PPC'
    }
  ];

  const northCarolinaStats = [
    { stat: 'North Carolina population', figure: '11,197,968', period: 'July 1, 2025 estimate' },
    { stat: 'Hispanic or Latino population', figure: '12.6%', period: 'Census QuickFacts' },
    { stat: 'Foreign-born population', figure: '9.1%', period: '2020–2024' },
    { stat: 'People speaking a language other than English at home', figure: '13.5%', period: '2020–2024' },
    { stat: 'Households with broadband internet', figure: '90.1%', period: '2020–2024' },
    { stat: 'Small businesses', figure: 'Approximately 1.1 million', period: 'SBA 2025 profile' },
    { stat: 'Small business share of North Carolina businesses', figure: '99.6%', period: 'SBA 2025 profile' },
    { stat: 'Small business employees', figure: 'Approximately 1.8 million', period: 'SBA 2025 profile' },
    { stat: 'Small business share of state employment', figure: '44.2%', period: 'SBA 2025 profile' }
  ];

  const futureTrends = [
    { trend: 'AI-powered search experiences', opp: 'Improve brand information and content structure for generative discovery' },
    { trend: 'AEO and conversational search', opp: 'Publish useful answers to common customer questions' },
    { trend: 'GEO strategies', opp: 'Build topical authority and consistent business information' },
    { trend: 'Multilingual digital experiences', opp: 'Reach customers who prefer different languages' },
    { trend: 'Local SEO', opp: 'Improve visibility for city, service and regional searches' },
    { trend: 'Video marketing', opp: 'Demonstrate products, services and business expertise' },
    { trend: 'eCommerce optimisation', opp: 'Improve product discovery and online purchasing experiences' },
    { trend: 'Conversion-focused websites', opp: 'Create faster, clearer customer journeys and enquiry processes' }
  ];

  const faqs = [
    {
      q: '1. Does UDMIDEAS provide website development services throughout North Carolina?',
      a: 'Yes. We provide website design and development services throughout North Carolina, including Charlotte, Raleigh, Durham, Greensboro, Asheville, Wilmington and other locations.'
    },
    {
      q: '2. What is the starting price for a business website?',
      a: 'Our business website development starts at $500. Final pricing depends on the required pages, features, design and functionality.'
    },
    {
      q: '3. Do you build custom-coded websites?',
      a: 'Yes. We develop custom-coded websites from scratch using technologies such as React JS, PHP and Laravel, depending on project requirements.'
    },
    {
      q: '4. Does UDMIDEAS provide multilingual website development?',
      a: 'Yes. We develop multilingual websites in English, Spanish, French, German, Arabic and other languages according to business needs.'
    },
    {
      q: '5. Do you offer SEO services in North Carolina?',
      a: 'Yes. Our SEO services include technical SEO, on-page SEO, off-page SEO, local SEO, eCommerce SEO and international SEO.'
    },
    {
      q: '6. What are AEO and GEO services?',
      a: 'AEO focuses on improving content for answer-based discovery. GEO focuses on improving brand and content visibility in generative search experiences.'
    },
    {
      q: '7. Can you manage Google Ads and social media advertising?',
      a: 'Yes. We provide Google Ads, Facebook Ads, Instagram Ads and social media marketing services.'
    },
    {
      q: '8. Do you develop eCommerce websites?',
      a: 'Yes. We develop online stores and provide product SEO, category optimisation, technical SEO and paid advertising support.'
    },
    {
      q: '9. Do you serve businesses outside Charlotte and Raleigh?',
      a: 'Yes. Our services are available throughout North Carolina, including the Mountains, Piedmont and Coast regions and their surrounding communities.'
    },
    {
      q: '10. How can a North Carolina business start working with UDMIDEAS?',
      a: 'Contact us through our website or email. Share your business requirements, target locations and project goals so we can recommend a suitable website development or digital marketing solution.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* Hero / Introduction */}
      <header className="max-w-4xl space-y-5">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>North Carolina Custom Web Design, Multilingual SEO, AEO, GEO, SMM &amp; PPC · 15+ Years</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          North Carolina Website Design, Development &amp; Multilingual Digital Marketing Company – UDMIDEAS
        </h1>

        <div className="space-y-3 pt-1">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-400">
            Introduction
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            North Carolina has a diverse and growing business economy supported by technology, healthcare, finance, manufacturing, construction, education, agriculture, tourism, logistics, retail and professional services. Charlotte is a major financial and commercial centre, while Raleigh, Durham, Greensboro, Winston-Salem, Asheville, Wilmington and other cities support businesses across different industries.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Companies throughout North Carolina need professional websites, search visibility and effective digital marketing to attract customers and compete online.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            UDMIDEAS provides multilingual website design and development, SEO, AEO, GEO, social media marketing (SMM) and pay-per-click advertising (PPC) services throughout North Carolina.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We build custom-coded websites from scratch and develop digital marketing strategies to help businesses improve online visibility, reach relevant audiences and generate enquiries. Our services support local businesses, contractors, healthcare providers, manufacturers, professional firms and eCommerce companies targeting customers in North Carolina, across the USA and internationally.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20website%20design%20and%20multilingual%20digital%20marketing%20in%20North%20Carolina."
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
            <span>Request North Carolina Consultation</span>
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
            UDMIDEAS combines website development and digital marketing to provide businesses with a complete online growth solution.
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
          Our focus is to build websites that support business objectives, improve customer experience and provide a strong foundation for digital marketing.
        </div>
      </section>

      {/* Website Design and Development Services in North Carolina */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            <span>Custom Web Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Website Design and Development Services in North Carolina
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            We develop professional websites for businesses that need a stronger online presence, custom functionality, multilingual content or eCommerce capabilities.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-white">Website development service</th>
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

      {/* Website Development Cost in North Carolina */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Transparent Investment
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Website Development Cost in North Carolina
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS business website development starts at $500.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-white">Website package</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Starting price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {pricingPackages.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.pkg}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400 whitespace-nowrap">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          Final pricing depends on page count, design complexity, features, integrations, languages and technical requirements. Domain registration, hosting and third-party services may be additional.
        </div>
      </section>

      {/* Multilingual Website Development and SEO */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>UDMIDEAS Provides</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Multilingual Website Development and SEO
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            North Carolina businesses can expand their reach by communicating with customers who prefer different languages. Multilingual websites can also help companies enter new markets and serve international customers.
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
          Our approach focuses on accurate language targeting, useful content and technically correct multilingual implementation. We create language-specific website experiences rather than simply duplicating pages through automatic translation.
        </div>
      </section>

      {/* SEO, AEO and GEO Services in North Carolina */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Search &amp; AI Discovery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SEO, AEO and GEO Services in North Carolina
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Customers use traditional search engines, conversational questions and generative search experiences to discover businesses, compare services and make purchasing decisions. UDMIDEAS provides SEO, AEO and GEO strategies to help companies improve their visibility across these discovery channels.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Service</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Main objective</th>
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
                    {row.objective}
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
            Our objective is to help potential customers discover your business, understand your services and take action.
          </p>
        </div>
      </section>

      {/* Social Media Marketing and PPC Advertising */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <Megaphone className="w-4 h-4" />
            <span>Social &amp; Paid Acquisition</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Social Media Marketing and PPC Advertising
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            A professional website needs a marketing strategy to attract relevant visitors. UDMIDEAS provides social media marketing and paid advertising services for businesses throughout North Carolina.
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
          Campaigns can be planned according to business locations, services, customer interests and measurable marketing objectives.
        </div>
      </section>

      {/* North Carolina Business Industries We Work With */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            <span>Sector Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            North Carolina Business Industries We Work With
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            North Carolina has opportunities across technology, finance, healthcare, manufacturing, tourism and other sectors. UDMIDEAS provides website development and digital marketing solutions for businesses in these industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {northCarolinaIndustries.map((item, idx) => (
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

      {/* UDMIDEAS Services Across All North Carolina Regions */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>Mountains, Piedmont &amp; Coast</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            UDMIDEAS Services Across All North Carolina Regions
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            North Carolina is commonly divided into three major geographic and tourism regions: Mountains, Piedmont and Coast. Each includes distinctive subregions, cities and business communities. UDMIDEAS offers website design, custom development, multilingual SEO, AEO, GEO, SMM and PPC services throughout all three regions and their subregions.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">North Carolina region</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Subregions and representative cities</th>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">UDMIDEAS services</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {northCarolinaRegions.map((row, idx) => (
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
          <strong className="text-white">Statewide service coverage:</strong> The locations listed are representative examples, not service boundaries. UDMIDEAS offers its website development and digital marketing services throughout North Carolina, including smaller towns and surrounding communities across the Mountains, Piedmont and Coast.
        </div>
      </section>

      {/* North Carolina Business and Digital Market Statistics */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4" />
            <span>Market Intelligence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            North Carolina Business and Digital Market Statistics
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            North Carolina has a substantial population, a growing business community and a diverse customer market.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">Statistic</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Figure</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Reporting period</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {northCarolinaStats.map((row, idx) => (
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
          These figures demonstrate the scale of North Carolina&apos;s customer and business markets. Its multilingual population and high household broadband adoption also make online communication and digital visibility important considerations for businesses.
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
            Search technology and customer behaviour will continue to evolve. Businesses can prepare by investing in strong website foundations, useful content and measurable digital marketing.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Digital trend</th>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">Business opportunity</th>
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
          Businesses that invest in helpful content, technical website quality and consistent marketing can adapt as digital discovery changes.
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

      {/* Grow Your North Carolina Business with UDMIDEAS */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 space-y-6 shadow-xl">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Contact UDMIDEAS to Discuss Your North Carolina Project</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Grow Your North Carolina Business with UDMIDEAS
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Your website is an important part of your business growth. Whether you need a custom-coded website, multilingual website development, SEO, AEO, GEO, social media marketing or PPC advertising, UDMIDEAS can help you build a stronger digital presence.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            We work with businesses throughout North Carolina to develop websites and digital marketing strategies based on their services, customers and growth objectives.
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
              Contact UDMIDEAS to discuss your North Carolina website development and digital marketing project.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20grow%20my%20North%20Carolina%20business%20with%20UDMIDEAS."
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
