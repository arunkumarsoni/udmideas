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

export const MichiganServicesContent: React.FC = () => {
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
      desc: 'Websites built from scratch using technologies such as React JS, PHP and Laravel.'
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
    { service: 'Business website design', details: 'Professional websites for local and service-based businesses' },
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

  const seoIncludes = [
    'Local SEO and Google Business Profile optimisation.',
    'National and international SEO.',
    'Technical SEO audits and website improvements.',
    'On-page and off-page SEO.',
    'eCommerce SEO and product optimisation.',
    'Keyword research and competitor analysis.',
    'Google Search Console and analytics support.',
    'Content strategy and link building.'
  ];

  const smmPpcRows = [
    { service: 'Facebook marketing', activities: 'Business page management, posts and campaigns' },
    { service: 'Instagram marketing', activities: 'Reels, creative content and audience engagement' },
    { service: 'LinkedIn marketing', activities: 'B2B marketing and professional audience targeting' },
    { service: 'Google Ads', activities: 'Search advertising, lead generation and conversion tracking' },
    { service: 'Facebook and Instagram Ads', activities: 'Audience targeting, lead campaigns and remarketing' },
    { service: 'Content marketing', activities: 'Blog writing, website content and promotional material' },
    { service: 'Video creation', activities: 'Business videos and social media promotional videos' }
  ];

  const michiganIndustries = [
    { industry: 'Automotive and mobility', req: 'Manufacturer websites, supplier pages and B2B SEO' },
    { industry: 'Manufacturing and engineering', req: 'Industrial websites, product catalogues and technical SEO' },
    { industry: 'Healthcare and medical', req: 'Clinic websites, medical service pages and local SEO' },
    { industry: 'Construction and contractors', req: 'Project galleries, service pages and lead generation' },
    { industry: 'Technology and IT', req: 'Corporate websites, software pages and B2B marketing' },
    { industry: 'Real estate', req: 'Property websites, landing pages and location-based SEO' },
    { industry: 'Education', req: 'School, college and training websites' },
    { industry: 'Agriculture and food', req: 'Business websites, product pages and content marketing' },
    { industry: 'Tourism and hospitality', req: 'Hotel, restaurant and destination websites' },
    { industry: 'Transportation and logistics', req: 'Commercial websites and B2B lead generation' },
    { industry: 'Retail and eCommerce', req: 'Online stores, product SEO and PPC campaigns' },
    { industry: 'Professional services', req: 'Websites for consultants, accountants and agencies' }
  ];

  const michiganRegions = [
    {
      region: 'Upper Peninsula',
      cities: 'Marquette, Houghton, Iron Mountain, Escanaba, Sault Ste. Marie',
      services: 'Custom websites, SEO, AEO, GEO, SMM and PPC'
    },
    {
      region: 'Traverse City Region',
      cities: 'Traverse City, Petoskey, Cadillac, Charlevoix, Gaylord',
      services: 'Website development, tourism SEO, multilingual marketing and PPC'
    },
    {
      region: 'Northeast Region',
      cities: 'Alpena, Cheboygan, Gaylord, Oscoda, Rogers City',
      services: 'Business websites, local SEO and digital marketing'
    },
    {
      region: 'West Michigan',
      cities: 'Grand Rapids, Holland, Muskegon, Grand Haven, Kalamazoo',
      services: 'Custom-coded websites, eCommerce SEO and lead generation'
    },
    {
      region: 'Mid-Michigan',
      cities: 'Mount Pleasant, Midland, Saginaw, Bay City, Alma',
      services: 'Website design, technical SEO, AEO and GEO'
    },
    {
      region: 'Thumb Region',
      cities: 'Flint, Port Huron, Bad Axe, Lapeer, Sandusky',
      services: 'Business websites, local SEO, SMM and PPC'
    },
    {
      region: 'Lansing Region',
      cities: 'Lansing, East Lansing, Jackson, Howell, Brighton',
      services: 'Custom development, SEO, content marketing and digital advertising'
    },
    {
      region: 'Kalamazoo Region',
      cities: 'Kalamazoo, Battle Creek, Sturgis, Three Rivers, Coldwater',
      services: 'Website development, eCommerce SEO and multilingual marketing'
    },
    {
      region: 'Ann Arbor Region',
      cities: 'Ann Arbor, Ypsilanti, Adrian, Saline, Monroe',
      services: 'Custom-coded websites, technical SEO, AEO and GEO'
    },
    {
      region: 'Detroit Region',
      cities: 'Detroit, Dearborn, Warren, Sterling Heights, Royal Oak',
      services: 'Corporate websites, manufacturing SEO, eCommerce and PPC'
    }
  ];

  const michiganStats = [
    { stat: 'Michigan population', figure: '10,127,884', period: 'July 1, 2025 estimate' },
    { stat: 'Hispanic or Latino population', figure: '6.4%', period: 'Census QuickFacts' },
    { stat: 'Foreign-born population', figure: '7.2%', period: '2020–2024' },
    { stat: 'People speaking a language other than English at home', figure: '10.4%', period: '2020–2024' },
    { stat: 'Households with broadband internet', figure: '90.5%', period: '2020–2024' },
    { stat: 'Small businesses', figure: '983,079', period: 'SBA 2025 profile' },
    { stat: 'Small business share of Michigan businesses', figure: '99.6%', period: 'SBA 2025 profile' },
    { stat: 'Small business employees', figure: 'Approximately 1.9 million', period: 'SBA 2025 profile' },
    { stat: 'Small business share of state employment', figure: '47.7%', period: 'SBA 2025 profile' }
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
      q: '1. Does UDMIDEAS provide website development services throughout Michigan?',
      a: 'Yes. We provide website design and development services throughout Michigan, including Detroit, Grand Rapids, Ann Arbor, Lansing, Traverse City, Kalamazoo and Upper Peninsula locations.'
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
      q: '5. Do you offer SEO services in Michigan?',
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
      q: '9. Do you serve businesses in the Upper Peninsula?',
      a: 'Yes. Our services are available throughout Michigan, including the Upper Peninsula, Traverse City Region, Detroit Region and all other business regions.'
    },
    {
      q: '10. How can a Michigan business start working with UDMIDEAS?',
      a: 'Contact us through our website or email. Share your business requirements, target locations and project goals so we can recommend a suitable website development or digital marketing solution.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* Hero / Introduction */}
      <header className="max-w-4xl space-y-5">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>Michigan Custom Web Design, Multilingual SEO, AEO, GEO, SMM &amp; PPC · 15+ Years</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight text-balance">
          Michigan Website Design, Development &amp; Multilingual Digital Marketing Company – UDMIDEAS
        </h1>

        <div className="space-y-3 pt-1">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1D4ED8]">
            Introduction
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Michigan has a diverse business economy supported by automotive manufacturing, engineering, technology, healthcare, construction, education, logistics, agriculture, tourism, retail and professional services. Detroit is internationally recognised for its automotive industry, while Grand Rapids, Ann Arbor, Lansing, Traverse City, Kalamazoo and other cities support a wide range of growing businesses.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Companies throughout Michigan need professional websites, effective search engine optimisation and digital marketing strategies to attract customers and compete online.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            UDMIDEAS provides multilingual website design and development, SEO, AEO, GEO, social media marketing (SMM) and pay-per-click advertising (PPC) services throughout Michigan.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            We build custom-coded websites from scratch and develop digital marketing strategies to help businesses improve online visibility, reach relevant audiences and generate enquiries. Our services support local businesses, manufacturers, contractors, healthcare providers, professional firms and eCommerce companies targeting customers in Michigan, across the USA and internationally.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20website%20design%20and%20multilingual%20digital%20marketing%20in%20Michigan."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm hover:shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp: +91-9521186150</span>
          </a>

          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-md hover:shadow-md transition-all"
          >
            <span>Request Michigan Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Why Choose UDMIDEAS? */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Agency Advantages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Why Choose UDMIDEAS?
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            UDMIDEAS combines website development and digital marketing to provide businesses with a complete online growth solution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyChooseItems.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2 hover:border-blue-600/30 transition-all"
            >
              <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed">
          Our focus is to build websites that support business objectives, improve customer experience and provide a strong foundation for digital marketing.
        </div>
      </section>

      {/* Website Design and Development Services in Michigan */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            <span>Custom Web Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Website Design and Development Services in Michigan
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            We develop professional websites for businesses that need a stronger online presence, custom functionality, multilingual content or eCommerce capabilities.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-[#0F172A]">Website development service</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#1D4ED8]">What we provide</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {webServicesRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0F172A] whitespace-nowrap">
                    {row.service}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#0F172A]">
                    {row.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Website Development Cost in Michigan */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
            Transparent Investment
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Website Development Cost in Michigan
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            UDMIDEAS business website development starts at $500.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-[#0F172A]">Website package</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-700">Starting price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {pricingPackages.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0F172A] whitespace-nowrap">
                    {row.pkg}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-700 whitespace-nowrap">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed">
          Final pricing depends on page count, design complexity, features, integrations, languages and technical requirements. Domain registration, hosting and third-party services may be additional.
        </div>
      </section>

      {/* Multilingual Website Development and SEO */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>UDMIDEAS Provides</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Multilingual Website Development and SEO
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Michigan businesses can expand their reach by communicating with customers who prefer different languages. Multilingual websites can also help companies enter new markets and connect with international customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {multilingualPoints.map((pt, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A]"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span>{pt}</span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#0F172A] leading-relaxed">
          Our approach focuses on accurate language targeting, useful content and technically correct multilingual implementation. We create language-specific website experiences rather than simply duplicating pages through automatic translation.
        </div>
      </section>

      {/* SEO, AEO and GEO Services in Michigan */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Search &amp; AI Discovery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            SEO, AEO and GEO Services in Michigan
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Customers use traditional search engines, conversational questions and generative search experiences to discover businesses, compare services and make purchasing decisions. UDMIDEAS provides SEO, AEO and GEO strategies to help companies improve their visibility across these discovery channels.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-700">Service</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#1D4ED8]">Main objective</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#0F172A]">Activities</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {searchVisibilityRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0F172A] whitespace-nowrap">
                    {row.service}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-700 font-medium">
                    {row.objective}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#0F172A]">
                    {row.activities}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] space-y-4">
          <div className="text-sm sm:text-base font-bold text-[#0F172A]">
            Our SEO services include:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {seoIncludes.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs sm:text-sm text-[#0F172A]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-[#0F172A] font-semibold pt-2 border-t border-[#E2E8F0]">
            Our objective is to help potential customers discover your business, understand your services and take action.
          </p>
        </div>
      </section>

      {/* Social Media Marketing and PPC Advertising */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wider flex items-center gap-1.5">
            <Megaphone className="w-4 h-4" />
            <span>Social &amp; Paid Acquisition</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Social Media Marketing and PPC Advertising
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            A professional website needs a marketing strategy to attract relevant visitors. UDMIDEAS provides social media marketing and paid advertising services for businesses throughout Michigan.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-purple-700">Service</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#0F172A]">Marketing activities</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {smmPpcRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0F172A] whitespace-nowrap">
                    {row.service}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#0F172A]">
                    {row.activities}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed">
          Campaigns can be planned according to business locations, services, customer interests and measurable marketing objectives.
        </div>
      </section>

      {/* Michigan Business Industries We Work With */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            <span>Sector Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Michigan Business Industries We Work With
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Michigan&apos;s economy offers opportunities across manufacturing, mobility, technology, healthcare, tourism and professional services. UDMIDEAS provides website development and digital marketing solutions for businesses in these industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {michiganIndustries.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-1.5 hover:border-blue-600/30 transition-all"
            >
              <div className="text-sm sm:text-base font-bold text-[#0F172A]">
                {item.industry}
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {item.req}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* UDMIDEAS Services Across All Michigan Regions */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>All 10 Michigan Regions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            UDMIDEAS Services Across All Michigan Regions
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Michigan&apos;s economic development organisation identifies 10 business regions across the state. These include the Upper Peninsula and different parts of the Lower Peninsula. UDMIDEAS offers website design, custom development, multilingual SEO, AEO, GEO, SMM and PPC services throughout all 10 regions.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-700">Michigan business region</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#1D4ED8]">Representative cities and locations</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#0F172A]">UDMIDEAS services</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {michiganRegions.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0F172A] whitespace-nowrap">
                    {row.region}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#0F172A]">
                    {row.cities}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-700 font-medium">
                    {row.services}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed">
          <strong className="text-[#0F172A]">Statewide service coverage:</strong> The cities listed are representative examples, not service boundaries. UDMIDEAS offers its website development and digital marketing services throughout Michigan, including smaller towns and surrounding communities in both the Upper Peninsula and Lower Peninsula.
        </div>
      </section>

      {/* Michigan Business and Digital Market Statistics */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4" />
            <span>Market Intelligence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Michigan Business and Digital Market Statistics
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Michigan has a substantial population, a large small-business community and a well-connected digital market.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-[#0F172A]">Statistic</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-700">Figure</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#1D4ED8]">Reporting period</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {michiganStats.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#0F172A]">
                    {row.stat}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-700 whitespace-nowrap">
                    {row.figure}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#64748B] whitespace-nowrap">
                    {row.period}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed">
          These figures highlight the size of Michigan&apos;s business market and the importance of digital connectivity. Small businesses account for a substantial share of Michigan businesses and employment, making professional websites and effective digital marketing valuable tools for reaching customers.
        </div>
      </section>

      {/* Future Digital Marketing Opportunities: 2027–2030 */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>2027–2030 Strategic Outlook</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Future Digital Marketing Opportunities: 2027–2030
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Search technology and customer behaviour will continue to evolve. Michigan businesses can prepare by investing in strong website foundations, useful content and measurable digital marketing.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-[#1D4ED8]">Digital trend</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#0F172A]">Business opportunity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {futureTrends.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0F172A] whitespace-nowrap">
                    {row.trend}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#0F172A]">
                    {row.opp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed">
          Businesses that invest in useful content, technical website quality and consistent marketing can adapt as digital discovery changes.
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider mb-1">
            Common Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#E2E8F0] bg-white overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-[#0F172A] hover:text-[#1D4ED8] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#64748B] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-[#475569] border-t border-[#E2E8F0] pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Grow Your Michigan Business with UDMIDEAS */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50/70 via-white to-emerald-50/40 border border-blue-200 space-y-6 shadow-sm">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Contact UDMIDEAS to Discuss Your Michigan Project</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Grow Your Michigan Business with UDMIDEAS
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Your website is an important part of your business growth. Whether you need a custom-coded website, multilingual website development, SEO, AEO, GEO, social media marketing or PPC advertising, UDMIDEAS can help you build a stronger digital presence.
          </p>
          <p className="text-sm text-[#475569] leading-relaxed">
            We work with businesses throughout Michigan to develop websites and digital marketing strategies based on their services, customers and growth objectives.
          </p>
          <p className="text-sm font-bold text-[#0F172A]">
            We Build Custom Websites. We Improve Search Visibility. We Grow Businesses.
          </p>
        </div>

        <div className="pt-4 border-t border-[#E2E8F0] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 text-xs sm:text-sm text-[#475569]">
            <div>
              Website:{' '}
              <a
                href="https://udmideasusa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1D4ED8] hover:underline font-mono"
              >
                https://udmideasusa.com/
              </a>{' '}
              · Email:{' '}
              <a
                href="mailto:info@udmideasusa.com"
                className="text-emerald-700 hover:underline font-mono"
              >
                info@udmideasusa.com
              </a>
            </div>
            <div className="text-xs text-[#64748B]">
              Contact UDMIDEAS to discuss your Michigan website development and digital marketing project.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20grow%20my%20Michigan%20business%20with%20UDMIDEAS."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm hover:shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +91-9521186150</span>
            </a>
            <a
              href="#inquiry-form"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-md hover:shadow-md transition-all"
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
