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

export const IllinoisServicesContent: React.FC = () => {
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
    { lang: 'English', market: 'Illinois, USA and international customers.' },
    { lang: 'Spanish', market: 'Hispanic communities and Latin American markets.' },
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
    'LinkedIn marketing for B2B companies.',
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

  const illinoisIndustries = [
    { industry: 'Technology & IT', services: 'Custom websites, SEO and B2B marketing' },
    { industry: 'Manufacturing', services: 'Industrial websites and international SEO' },
    { industry: 'Healthcare & Dental', services: 'Medical websites and local SEO' },
    { industry: 'Real Estate', services: 'Property websites, local SEO and PPC' },
    { industry: 'Law Firms', services: 'Professional websites and legal SEO' },
    { industry: 'Construction', services: 'Contractor websites and lead generation' },
    { industry: 'Transportation & Logistics', services: 'Business websites and B2B SEO' },
    { industry: 'Finance & Accounting', services: 'Corporate websites and digital marketing' },
    { industry: 'eCommerce & Retail', services: 'Online stores and product SEO' },
    { industry: 'Restaurants & Hospitality', services: 'Multilingual websites and SMM' },
    { industry: 'Education', services: 'Educational websites and student marketing' },
    { industry: 'Agriculture', services: 'Agricultural websites and digital marketing' },
    { industry: 'Professional Services', services: 'Lead-generation websites and PPC' },
    { industry: 'Beauty & Wellness', services: 'Booking websites and social media marketing' }
  ];

  const illinoisRegions = [
    {
      region: 'Northern Stateline Region',
      cities: 'Rockford, Freeport, Belvidere, Galena, Sterling',
      services: 'Website Development, SEO, SMM, PPC'
    },
    {
      region: 'Northwest Region',
      cities: 'Moline, Rock Island, Dixon, Sterling, Morrison',
      services: 'Custom Websites, Local SEO, AEO, GEO'
    },
    {
      region: 'Northeast Region',
      cities: 'Chicago, Evanston, Naperville, Aurora, Joliet, Waukegan, Elgin',
      services: 'Multilingual Websites, SEO, AEO, GEO, PPC'
    },
    {
      region: 'North Central Region',
      cities: 'Peoria, Bloomington, Normal, Galesburg, Pontiac',
      services: 'Website Development, eCommerce SEO, SMM'
    },
    {
      region: 'West Central Region',
      cities: 'Quincy, Macomb, Jacksonville, Pittsfield, Mount Sterling',
      services: 'Custom Websites, Local SEO, PPC'
    },
    {
      region: 'Central Region',
      cities: 'Springfield, Decatur, Lincoln, Taylorville, Jacksonville',
      services: 'Business Websites, SEO, AEO, GEO'
    },
    {
      region: 'East Central Region',
      cities: 'Champaign, Urbana, Danville, Mattoon, Charleston',
      services: 'Website Development, Education SEO, SMM, PPC'
    },
    {
      region: 'Southwest Region',
      cities: 'East St. Louis, Belleville, Alton, Edwardsville, Collinsville',
      services: 'Local SEO, Custom Websites, Lead Generation'
    },
    {
      region: 'Southeast Region',
      cities: 'Effingham, Olney, Robinson, Lawrenceville, Mount Carmel',
      services: 'Website Development, SEO, SMM, PPC'
    },
    {
      region: 'Southern Region',
      cities: 'Carbondale, Marion, Harrisburg, Mount Vernon, Cairo',
      services: 'Multilingual Websites, Local SEO, Digital Marketing'
    }
  ];

  const illinoisStats = [
    { indicator: 'Illinois population estimate (July 2025)', value: '12.72 million' },
    { indicator: 'Hispanic or Latino population', value: '19.9%' },
    { indicator: 'Foreign-born population', value: '14.7%' },
    { indicator: 'Residents speaking a language other than English at home', value: '24.0%' },
    { indicator: 'Households with broadband internet', value: '90.8%' },
    { indicator: 'Small businesses (2025 SBA profile)', value: 'Approximately 1.4 million' },
    { indicator: 'Small business share of Illinois businesses', value: '99.6%' },
    { indicator: 'Small business employees', value: 'Approximately 2.4 million' },
    { indicator: 'Small business share of state employment', value: '43.7%' }
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
      a: 'Our business website development starts at $500. Final pricing depends on the number of pages, design, functionality, integrations and technical requirements.'
    },
    {
      q: '2. Do you develop custom-coded websites?',
      a: 'Yes. We build custom-coded websites from scratch using React JS, PHP, Laravel and other modern development technologies.'
    },
    {
      q: '3. Do you provide website development services throughout Illinois?',
      a: 'Yes. We serve businesses across Illinois, including Chicago, Naperville, Aurora, Rockford, Springfield, Peoria, Champaign, Joliet and other locations.'
    },
    {
      q: '4. Do you provide Spanish website development and SEO?',
      a: 'Yes. We offer Spanish website development, Spanish keyword research, multilingual SEO, content optimisation and international SEO services.'
    },
    {
      q: '5. Can you help my Illinois business rank on Google?',
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
      q: '8. Can you develop an eCommerce website for my Illinois business?',
      a: 'Yes. We develop eCommerce websites with product pages, categories, shopping functionality, payment integrations and SEO-friendly structures.'
    },
    {
      q: '9. How long does SEO take to produce results?',
      a: 'SEO generally requires several months of consistent work. Competitive keywords may take six months or longer, depending on competition, website authority and content quality.'
    },
    {
      q: '10. Can UDMIDEAS help my Illinois business expand internationally?',
      a: 'Yes. We provide multilingual website development, international SEO, SMM and PPC services to help Illinois companies target customers across the USA, Canada, Europe, Latin America and the Middle East.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* Hero / Introduction */}
      <header className="max-w-4xl space-y-5">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>Illinois Custom Web Design, Multilingual SEO, AEO, GEO, SMM &amp; PPC · 15+ Years</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight text-balance">
          Illinois Website Design, Development &amp; Multilingual Digital Marketing Company
        </h1>

        <div className="space-y-3 pt-1">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1D4ED8]">
            Introduction: Grow Your Illinois Business with UDMIDEAS
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Illinois is an important business and commercial centre in the United States, offering opportunities across technology, finance, healthcare, manufacturing, construction, real estate, transportation, retail and professional services. From corporate businesses in Chicago to manufacturing companies in Rockford, technology firms in Naperville and professional service providers in Springfield, businesses need a strong digital presence to compete and attract customers.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            UDMIDEAS provides professional website design, custom website development, multilingual SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), Social Media Marketing (SMM) and Pay-Per-Click (PPC) advertising services for businesses throughout Illinois.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            We help startups, small businesses, eCommerce companies, professional service providers and established enterprises develop modern websites and reach customers across Illinois, the USA and international markets.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            With 15+ years of website development and digital marketing experience, our objective is to help companies improve search visibility, generate qualified leads and build long-term digital growth.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20website%20design%20and%20multilingual%20digital%20marketing%20in%20Illinois."
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
            <span>Request Illinois Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Why Choose UDMIDEAS for Illinois Businesses? */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Why work with us?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Why Choose UDMIDEAS for Illinois Businesses?
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            UDMIDEAS combines custom website development with multilingual digital marketing strategies to support businesses across different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {advantages.map((pt, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A]"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span>{pt}</span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed">
          We focus on creating digital solutions according to your business model, customer requirements, target market and future expansion plans.
        </div>
      </section>

      {/* Custom Website Design & Development Services in Illinois */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            <span>Our Website Development Services Include</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Custom Website Design &amp; Development Services in Illinois
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            A professional website is an important business asset. It helps customers understand your services, builds trust and generates enquiries and sales. UDMIDEAS builds custom-coded websites from scratch using modern development technologies and frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {webDevServices.map((srv, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A]"
            >
              <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
              <span>{srv}</span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed">
          We focus on custom layouts, responsive design, functionality, scalability, website speed and SEO-friendly architecture.
        </div>
      </section>

      {/* Website Development Cost for Illinois Businesses */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
            Transparent Investment
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Website Development Cost for Illinois Businesses
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-[#0F172A]">Website Package</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-700">Starting Cost</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#1D4ED8]">Suitable For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {pricingPackages.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0F172A] whitespace-nowrap">
                    {row.pkg}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-700 whitespace-nowrap">
                    {row.cost}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#0F172A]">
                    {row.suitable}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed">
          Business website development starts at $500. Final pricing depends on page count, design complexity, functionality, integrations and languages. Domain, hosting and third-party services may be additional.
        </div>
      </section>

      {/* Multilingual Website Development & SEO Services in Illinois */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>Multilingual Reach</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Multilingual Website Development &amp; SEO Services in Illinois
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Illinois has a diverse population, including significant Spanish-speaking and other multilingual communities. Businesses can expand their customer reach by providing website content and marketing campaigns in different languages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {multilingualLanguages.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-1.5 hover:border-blue-600/30 transition-all"
            >
              <div className="text-sm sm:text-base font-bold text-emerald-700 font-mono">
                {item.lang}
              </div>
              <p className="text-xs sm:text-sm text-[#0F172A] leading-relaxed">
                {item.market}
              </p>
            </div>
          ))}
        </div>

        <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] space-y-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
          <p>
            Our multilingual SEO services include international keyword research, language-specific content optimisation, hreflang implementation, multilingual URL structures, technical SEO, link building and international search visibility strategies.
          </p>
          <p className="text-[#0F172A] font-medium">
            We research local search behaviour and customer intent instead of simply translating English keywords.
          </p>
        </div>
      </section>

      {/* SEO, AEO & GEO Services for Illinois Companies */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Search &amp; AI Discovery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            SEO, AEO &amp; GEO Services for Illinois Companies
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Search behaviour is evolving. Customers discover businesses through traditional search engines, conversational search, direct answers and generative search platforms. UDMIDEAS helps Illinois companies prepare for these changing search experiences.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-700">Service</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#1D4ED8]">Our Work</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#0F172A]">Business Objective</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {searchVisibilityRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0F172A] whitespace-nowrap">
                    {row.service}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#0F172A]">
                    {row.work}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-700 font-medium whitespace-nowrap">
                    {row.objective}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed">
          Our strategies focus on relevant content, technical performance, website authority and useful information that answers customer questions.
        </div>
      </section>

      {/* Multilingual SMM & PPC Advertising Services */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wider flex items-center gap-1.5">
            <Megaphone className="w-4 h-4" />
            <span>Paid &amp; Social Acquisition</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Multilingual SMM &amp; PPC Advertising Services
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Social media and paid advertising help Illinois businesses reach potential customers, promote their services and generate enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] space-y-4">
            <div className="flex items-center gap-2 font-bold text-lg text-[#0F172A]">
              <Share2 className="w-5 h-5 text-purple-700 shrink-0" />
              <h3>Social Media Marketing (SMM)</h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#0F172A]">
              {smmPoints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white via-white to-blue-50/40 border border-blue-200 space-y-4">
            <div className="flex items-center gap-2 font-bold text-lg text-[#0F172A]">
              <TrendingUp className="w-5 h-5 text-[#1D4ED8] shrink-0" />
              <h3>Pay-Per-Click (PPC) Advertising</h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#0F172A]">
              {ppcPoints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed">
          We develop campaigns according to your business goals, customer locations, audience interests, languages and advertising budgets.
        </div>
      </section>

      {/* Illinois Business Industries We Work For */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            <span>Sector Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Illinois Business Industries We Work For
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            UDMIDEAS provides website development and digital marketing services for businesses across Illinois.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {illinoisIndustries.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-1.5 hover:border-blue-600/30 transition-all"
            >
              <div className="text-sm sm:text-base font-bold text-[#0F172A]">
                {item.industry}
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {item.services}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Illinois Regions We Serve */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>All 10 Economic Development Regions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Illinois Regions We Serve – Website Development &amp; Digital Marketing Across the State
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            UDMIDEAS offers custom website development, multilingual SEO, AEO, GEO, SMM and PPC advertising services throughout Illinois. We work with businesses in all major geographic and economic development regions, including metropolitan cities, industrial centres, commercial districts and smaller communities. Illinois has 10 recognised economic development regions. Our service coverage includes all 10 regions.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-700">Illinois Region</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#1D4ED8]">Major Cities &amp; Locations</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#0F172A]">UDMIDEAS Services</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {illinoisRegions.map((row, idx) => (
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

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
          <p>
            UDMIDEAS offers services across all Illinois regions. Whether your business is located in Chicago, Springfield, Peoria, Rockford, Champaign or a smaller Illinois community, we can develop a website and digital marketing strategy according to your business requirements.
          </p>
          <p className="text-xs text-[#64748B]">
            Regional groupings follow Illinois economic development regional divisions. City examples are illustrative service locations, not an exhaustive list.
          </p>
        </div>
      </section>

      {/* Illinois Digital Market Statistics */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4" />
            <span>Market Intelligence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Illinois Digital Market Statistics
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Illinois has a substantial business market, with opportunities for website development, online advertising, eCommerce and multilingual digital marketing.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-[#0F172A]">Market Indicator</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-700">Statistics</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {illinoisStats.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#0F172A]">
                    {row.indicator}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-700 whitespace-nowrap">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed">
          These statistics demonstrate the importance of professional websites, local search visibility, multilingual customer experiences and digital marketing for Illinois companies.
        </div>
      </section>

      {/* Future of Website Development & Digital Marketing (2027–2030) */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>2027–2030 Strategic Outlook</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Future of Website Development &amp; Digital Marketing (2027–2030)
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            The digital marketplace is evolving through generative search, automation, personalised customer experiences, video marketing and multilingual communication.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-[#1D4ED8]">Future Trend</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#0F172A]">Opportunity for Illinois Businesses</th>
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

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
          <p>
            Between 2027 and 2030, Illinois businesses should consider combining SEO, AEO, GEO, SMM, PPC, video creation and multilingual website development. These strategies can help companies prepare for changing customer discovery and purchasing behaviour.
          </p>
          <p className="text-[#64748B]">
            These are strategic opportunities, not guaranteed growth forecasts.
          </p>
        </div>
      </section>

      {/* Frequently Asked Questions: Illinois Business Owners */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider mb-1">
            Common Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Frequently Asked Questions: Illinois Business Owners
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

      {/* Grow Your Illinois Business with UDMIDEAS */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50/70 via-white to-emerald-50/40 border border-blue-200 space-y-6 shadow-sm">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Contact UDMIDEAS Today – Let&apos;s Grow Your Illinois Business Online</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Grow Your Illinois Business with UDMIDEAS
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Your website should be more than an online business card. It should support your brand, customer acquisition and long-term business expansion.
          </p>
          <p className="text-sm text-[#475569] leading-relaxed">
            UDMIDEAS combines custom website development, multilingual SEO, AEO, GEO, social media marketing and PPC advertising to help businesses build stronger digital identities.
          </p>
          <p className="text-sm text-[#475569] leading-relaxed">
            Whether you are launching a startup in Chicago, managing a manufacturing company in Rockford, operating a professional service in Springfield or expanding an eCommerce business in Naperville, our team can help you develop a digital strategy aligned with your business goals.
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
                href="https://www.udmideasusa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1D4ED8] hover:underline font-mono"
              >
                https://www.udmideasusa.com/
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
              UDMIDEAS – Your Website Development &amp; Multilingual Digital Marketing Partner Across Illinois, USA.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20grow%20my%20Illinois%20business%20with%20UDMIDEAS."
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
