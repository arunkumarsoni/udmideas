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

export const OhioServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whyChooseItems = [
    {
      title: '15+ years of experience',
      desc: 'Experience in website development and digital marketing across multiple industries and international markets.'
    },
    {
      title: 'Custom-coded websites',
      desc: 'Websites developed from scratch using technologies such as React JS, PHP and Laravel.'
    },
    {
      title: 'Multilingual capabilities',
      desc: 'Website development and SEO in English, Spanish, French, German, Arabic and other languages.'
    },
    {
      title: 'SEO-friendly development',
      desc: 'Responsive design, technical optimisation, website structure and search-friendly content.'
    },
    {
      title: 'Modern search strategies',
      desc: 'SEO, Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO).'
    },
    {
      title: 'Complete marketing services',
      desc: 'SEO, social media marketing, PPC advertising, content writing and video creation.'
    }
  ];

  const webServicesRows = [
    { service: 'Business website design', details: 'Professional websites for local and service-based companies' },
    { service: 'Custom-coded website development', details: 'Websites developed from scratch' },
    { service: 'React JS development', details: 'Modern interfaces and web applications' },
    { service: 'PHP and Laravel development', details: 'Custom business websites and applications' },
    { service: 'WordPress development', details: 'Custom WordPress websites and business platforms' },
    { service: 'eCommerce development', details: 'Online stores, product catalogues and shopping functionality' },
    { service: 'Multilingual website development', details: 'Websites with multiple language versions' },
    { service: 'Website redesign', details: 'Improved layout, usability, speed and structure' },
    { service: 'Landing page development', details: 'Campaign pages for lead generation and advertising' }
  ];

  const pricingPackages = [
    { pkg: 'Business website', price: '$500' },
    { pkg: 'Corporate website', price: 'Custom quotation' },
    { pkg: 'eCommerce website', price: 'Custom quotation' },
    { pkg: 'Multilingual website', price: 'Custom quotation' },
    { pkg: 'Custom web application', price: 'Based on project requirements' }
  ];

  const multilingualPoints = [
    'English website design, development and SEO.',
    'Spanish website development and Spanish-language SEO.',
    'French and German website development.',
    'Arabic website development and search optimisation.',
    'Language-specific keyword research and content creation.',
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
      objective: 'Improve visibility for direct questions and answers',
      activities: 'FAQ content, question-based pages, structured data and clear answers'
    },
    {
      service: 'GEO – Generative Engine Optimisation',
      objective: 'Improve brand and content visibility in generative search',
      activities: 'Entity optimisation, topical authority, factual content and structured information'
    }
  ];

  const smmPpcRows = [
    { service: 'Facebook marketing', activities: 'Business page management, posts and campaigns' },
    { service: 'Instagram marketing', activities: 'Reels, creative content and audience engagement' },
    { service: 'LinkedIn marketing', activities: 'B2B marketing and professional audience targeting' },
    { service: 'Google Ads', activities: 'Search advertising and lead generation' },
    { service: 'Facebook and Instagram Ads', activities: 'Audience targeting, enquiries and remarketing' },
    { service: 'Content marketing', activities: 'Blog writing, website content and promotional material' },
    { service: 'Video creation', activities: 'Business videos and social media promotional videos' }
  ];

  const ohioIndustries = [
    { industry: 'Manufacturing', req: 'Industrial websites, product catalogues and B2B SEO' },
    { industry: 'Healthcare and medical', req: 'Clinic websites, service pages and local SEO' },
    { industry: 'Construction and contractors', req: 'Project galleries, service pages and lead generation' },
    { industry: 'Legal services', req: 'Attorney websites and practice-area SEO' },
    { industry: 'Real estate', req: 'Property websites and location-based marketing' },
    { industry: 'Education', req: 'School, college and training websites' },
    { industry: 'Transportation and logistics', req: 'Commercial websites and B2B marketing' },
    { industry: 'Retail and eCommerce', req: 'Online stores, product SEO and PPC' },
    { industry: 'Technology and IT', req: 'Corporate websites and software service pages' },
    { industry: 'Hospitality and restaurants', req: 'Restaurant websites, menus and local search' },
    { industry: 'Professional services', req: 'Websites for consultants, accountants and agencies' },
    { industry: 'Home services', req: 'Local SEO and websites for repair and maintenance companies' }
  ];

  const ohioRegions = [
    {
      region: 'Central Ohio',
      cities: 'Columbus, Newark, Delaware, Lancaster, Zanesville',
      services: 'Website design, custom development, SEO, AEO, GEO, SMM and PPC'
    },
    {
      region: 'Northeast Ohio',
      cities: 'Cleveland, Akron, Canton, Youngstown, Warren, Ashtabula',
      services: 'Business websites, eCommerce development, technical SEO and digital marketing'
    },
    {
      region: 'Northwest Ohio',
      cities: 'Toledo, Lima, Findlay, Bowling Green, Defiance, Sandusky',
      services: 'Custom websites, local SEO, multilingual marketing and PPC'
    },
    {
      region: 'Southeast Ohio',
      cities: 'Athens, Marietta, Zanesville, Cambridge, Chillicothe, Portsmouth',
      services: 'Website development, local SEO, content marketing and social media'
    },
    {
      region: 'Southwest Ohio',
      cities: 'Cincinnati, Dayton, Hamilton, Springfield, Middletown, Kettering',
      services: 'Custom-coded websites, eCommerce SEO, AEO, GEO and PPC'
    }
  ];

  const ohioStats = [
    { stat: 'Ohio population', figure: '11,900,510', period: 'July 2025 estimate' },
    { stat: 'Hispanic or Latino population', figure: '5.5%', period: 'Census QuickFacts' },
    { stat: 'Foreign-born population', figure: '5.2%', period: '2020–2024' },
    { stat: 'People speaking a language other than English at home', figure: '8.0%', period: '2020–2024' },
    { stat: 'Households with broadband internet', figure: '90.1%', period: '2020–2024' },
    { stat: 'Small businesses', figure: 'Approximately 1.1 million', period: 'SBA 2025 profile' },
    { stat: 'Small business share of Ohio businesses', figure: '99.6%', period: 'SBA 2025 profile' },
    { stat: 'Small business employees', figure: 'Approximately 2.2 million', period: 'SBA 2025 profile' },
    { stat: 'Small business share of state employment', figure: '43.8%', period: 'SBA 2025 profile' }
  ];

  const futureTrends = [
    { trend: 'AI-powered search experiences', opp: 'Improve brand information and content structure for generative discovery' },
    { trend: 'AEO and conversational search', opp: 'Publish clear answers to common customer questions' },
    { trend: 'GEO strategies', opp: 'Build topical authority and consistent business information' },
    { trend: 'Multilingual digital experiences', opp: 'Reach customers who prefer different languages' },
    { trend: 'Local SEO', opp: 'Improve visibility for city, service and regional searches' },
    { trend: 'Video marketing', opp: 'Demonstrate products, services and business expertise' },
    { trend: 'eCommerce optimisation', opp: 'Improve product discovery and online purchasing experiences' },
    { trend: 'Conversion-focused websites', opp: 'Create faster, clearer customer journeys and enquiry processes' }
  ];

  const faqs = [
    {
      q: '1. Does UDMIDEAS provide website development services across Ohio?',
      a: 'Yes. We provide website design and development services throughout Ohio, including Columbus, Cleveland, Cincinnati, Dayton, Toledo, Akron and other locations.'
    },
    {
      q: '2. What is the starting price for a business website?',
      a: 'Our business website development starts at $500. Final pricing depends on the required pages, design, features and functionality.'
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
      q: '5. Do you offer SEO services in Ohio?',
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
      q: '9. Do you serve businesses outside Columbus, Cleveland and Cincinnati?',
      a: 'Yes. Our services are available throughout all five major Ohio regions, including smaller towns and surrounding communities.'
    },
    {
      q: '10. How can an Ohio business start working with UDMIDEAS?',
      a: 'Contact us through our website or email. Share your business requirements, target locations and project goals so we can recommend a suitable website development or digital marketing solution.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* Hero / Introduction */}
      <header className="max-w-4xl space-y-5">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>Ohio Custom Web Design, Multilingual SEO, AEO, GEO, SMM &amp; PPC · 15+ Years</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          Ohio Website Design, Development &amp; Multilingual Digital Marketing – UDMIDEAS
        </h1>

        <div className="space-y-3 pt-1">
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            UDMIDEAS provides custom website development, multilingual SEO, AEO, GEO, social media marketing and PPC advertising services to businesses throughout Ohio. Our regional coverage includes Central, Northeast, Northwest, Southeast and Southwest Ohio, from Columbus and Cleveland to Cincinnati, Toledo, Dayton and smaller communities.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Ohio has a diverse business economy supported by manufacturing, healthcare, technology, construction, education, transportation, logistics, retail, professional services and eCommerce. From the major business centres of Columbus, Cleveland, Cincinnati, Toledo and Dayton to smaller cities and communities, companies need professional websites and effective digital marketing to attract customers and compete online.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            UDMIDEAS provides multilingual website design and development, SEO, AEO, GEO, social media marketing (SMM) and pay-per-click advertising (PPC) services for businesses throughout Ohio.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We build custom-coded websites from scratch and create digital marketing strategies to help companies improve search visibility, reach relevant audiences and generate business enquiries. Whether you operate a local service company, manufacturing business, professional firm or online store, our services can support your digital growth.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20website%20design%20and%20multilingual%20digital%20marketing%20in%20Ohio."
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
            <span>Request Ohio Consultation</span>
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
          Our focus is to create websites that support business objectives, improve customer experience and provide a strong foundation for digital marketing.
        </div>
      </section>

      {/* Website Design and Development Services in Ohio */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            <span>Custom Web Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Website Design and Development Services in Ohio
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            We develop professional websites for businesses that want to establish or improve their online presence.
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

      {/* Website Development Cost in Ohio */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Transparent Investment
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Website Development Cost in Ohio
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
          The final cost depends on the number of pages, design complexity, functionality, integrations, languages and eCommerce requirements. Domain registration, hosting and third-party services may be additional.
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
            Ohio businesses can expand their customer reach by communicating with audiences in different languages. UDMIDEAS develops multilingual websites and language-specific SEO strategies for businesses targeting local, national and international markets.
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
          We focus on creating useful, properly structured language versions rather than simply duplicating content through automatic translation.
        </div>
      </section>

      {/* SEO, AEO and GEO Services in Ohio */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Search &amp; AI Discovery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SEO, AEO and GEO Services in Ohio
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Customers discover businesses through traditional search engines, conversational questions and AI-powered search experiences. UDMIDEAS provides SEO, AEO and GEO strategies to help companies improve their visibility across these discovery channels.
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
            Our objective is to help potential customers discover your business, understand your services and take the next step.
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
            A professional website needs a marketing strategy to attract relevant visitors. UDMIDEAS provides social media marketing and paid advertising services to support business visibility and lead generation.
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
          Campaigns can be planned according to business location, services, target audience and marketing objectives.
        </div>
      </section>

      {/* Ohio Business Industries We Work With */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            <span>Sector Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Ohio Business Industries We Work With
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            We provide website development and digital marketing solutions for a wide range of Ohio industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ohioIndustries.map((item, idx) => (
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

      {/* UDMIDEAS Services Across All Ohio Regions */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>All 5 Ohio Regions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            UDMIDEAS Services Across All Ohio Regions
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Ohio&apos;s official tourism organisation identifies five major tourism regions: Central Ohio, Northeast Ohio, Northwest Ohio, Southeast Ohio and Southwest Ohio. UDMIDEAS offers website design, custom development, multilingual SEO, AEO, GEO, SMM and PPC services throughout all five regions, including their cities, towns and surrounding communities.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Ohio region</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Representative cities and locations</th>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">UDMIDEAS services</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {ohioRegions.map((row, idx) => (
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
          <strong className="text-white">Statewide service coverage:</strong> The locations listed are representative examples, not service boundaries. UDMIDEAS offers its digital services to businesses across Ohio, including smaller towns and surrounding communities in all five regions.
        </div>
      </section>

      {/* Ohio Business and Digital Market Statistics */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4" />
            <span>Market Intelligence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Ohio Business and Digital Market Statistics
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Ohio offers a substantial market for businesses operating in local services, manufacturing, retail, healthcare, technology and other industries.
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
              {ohioStats.map((row, idx) => (
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
          These figures show the scale of Ohio&apos;s population, business community and digital connectivity. For businesses, a professional website and well-planned online marketing can help reach customers in local markets and beyond.
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
            Search technology and online customer behaviour will continue to evolve. Ohio businesses can prepare by developing useful websites, strong content and consistent digital marketing strategies.
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
          Businesses that invest in useful content, strong website foundations and measurable marketing can adapt more effectively as digital discovery changes.
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

      {/* Grow Your Ohio Business with UDMIDEAS */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 space-y-6 shadow-xl">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Contact UDMIDEAS to Discuss Your Ohio Project</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Grow Your Ohio Business with UDMIDEAS
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Your website is an important part of your business growth. Whether you need a custom-coded website, multilingual website development, SEO, AEO, GEO, social media marketing or PPC advertising, UDMIDEAS can help you build a stronger digital presence.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            We work with businesses throughout Ohio to develop websites and digital marketing strategies based on their services, customers and growth objectives.
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
              Contact UDMIDEAS to discuss your Ohio website development and digital marketing project.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20grow%20my%20Ohio%20business%20with%20UDMIDEAS."
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
