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

export const TexasServicesContent: React.FC = () => {
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
    'PHP and Laravel development.',
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
    { lang: 'English', market: 'Texas, USA and international customers.' },
    { lang: 'Spanish', market: 'Hispanic communities and Latin American markets.' },
    { lang: 'French', market: 'French-speaking international markets.' },
    { lang: 'German', market: 'Germany and German-speaking markets.' },
    { lang: 'Arabic', market: 'Middle Eastern markets.' },
    { lang: 'Additional Languages', market: 'Additional languages based on business requirements.' }
  ];

  const searchVisibilityRows = [
    {
      service: 'SEO',
      work: 'Technical, on-page, off-page and content optimisation',
      objective: 'Improve organic rankings'
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
      objective: 'Attract nearby customers'
    },
    {
      service: 'eCommerce SEO',
      work: 'Product, category and technical optimisation',
      objective: 'Improve product discovery'
    },
    {
      service: 'International SEO',
      work: 'Multilingual content and hreflang',
      objective: 'Reach global customers'
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

  const texasIndustries = [
    { industry: 'Technology & IT', services: 'Custom websites, SEO and B2B marketing' },
    { industry: 'Oil, Gas & Energy', services: 'Industrial websites and international SEO' },
    { industry: 'Real Estate', services: 'Property websites, local SEO and PPC' },
    { industry: 'Healthcare & Dental', services: 'Medical websites and local SEO' },
    { industry: 'Law Firms', services: 'Professional websites and legal SEO' },
    { industry: 'Construction', services: 'Contractor websites and lead generation' },
    { industry: 'Manufacturing', services: 'Industrial websites and international marketing' },
    { industry: 'eCommerce & Retail', services: 'Online stores and product SEO' },
    { industry: 'Restaurants & Hospitality', services: 'Multilingual websites and SMM' },
    { industry: 'Education', services: 'Educational websites and student marketing' },
    { industry: 'Finance & Accounting', services: 'Corporate websites and B2B SEO' },
    { industry: 'Transportation & Logistics', services: 'Business websites and lead generation' },
    { industry: 'Agriculture', services: 'Agricultural websites and digital marketing' },
    { industry: 'Beauty & Wellness', services: 'Booking websites and social media marketing' }
  ];

  const texasRegions = [
    {
      region: 'North Texas',
      cities: 'Dallas, Fort Worth, Plano, Frisco, Denton, McKinney',
      opportunities: 'Technology, finance, real estate, construction and professional services'
    },
    {
      region: 'Central Texas',
      cities: 'Austin, Round Rock, Georgetown, Temple, Killeen',
      opportunities: 'Technology, startups, education, healthcare and manufacturing'
    },
    {
      region: 'Gulf Coast',
      cities: 'Houston, Galveston, Pasadena, Sugar Land, Pearland, Baytown',
      opportunities: 'Oil and gas, shipping, healthcare, energy and manufacturing'
    },
    {
      region: 'South Texas',
      cities: 'San Antonio, Laredo, McAllen, Brownsville, Corpus Christi',
      opportunities: 'Healthcare, logistics, tourism, retail and international trade'
    },
    {
      region: 'East Texas',
      cities: 'Tyler, Longview, Beaumont, Nacogdoches, Lufkin',
      opportunities: 'Manufacturing, healthcare, agriculture and energy'
    },
    {
      region: 'West Texas',
      cities: 'El Paso, Midland, Odessa, Abilene, San Angelo',
      opportunities: 'Oil and gas, logistics, agriculture and industrial services'
    },
    {
      region: 'Texas Panhandle',
      cities: 'Amarillo, Lubbock, Wichita Falls, Plainview',
      opportunities: 'Agriculture, education, healthcare and transportation'
    },
    {
      region: 'Texas Hill Country',
      cities: 'Fredericksburg, Kerrville, New Braunfels, San Marcos, Boerne',
      opportunities: 'Tourism, hospitality, real estate and local services'
    }
  ];

  const texasStats = [
    { indicator: 'Texas population estimate (July 2025)', value: '31.71 million' },
    { indicator: 'Hispanic or Latino population', value: '40.9%' },
    { indicator: 'Foreign-born population', value: '17.6%' },
    { indicator: 'Residents speaking a language other than English at home', value: '35.1%' },
    { indicator: 'Total employer establishments (2023)', value: '670,878' },
    { indicator: 'Total nonemployer establishments (2023)', value: '3.09 million' },
    { indicator: 'All employer firms (2023 reference year)', value: '470,732' },
    { indicator: 'Small businesses (2025 SBA profile)', value: 'Approximately 3.5 million' }
  ];

  const futureTrends = [
    { trend: 'AI-powered search', opp: 'Improve brand discovery across generative platforms' },
    { trend: 'AEO', opp: 'Optimise content for direct answers' },
    { trend: 'GEO', opp: 'Improve brand visibility in generative search' },
    { trend: 'Multilingual SEO', opp: 'Reach English and Spanish-speaking customers' },
    { trend: 'Custom web development', opp: 'Build scalable and performance-focused websites' },
    { trend: 'Video marketing', opp: 'Engage audiences through short-form videos' },
    { trend: 'PPC automation', opp: 'Improve campaign management and measurement' },
    { trend: 'Personalised marketing', opp: 'Deliver relevant customer experiences' },
    { trend: 'eCommerce development', opp: 'Expand online sales opportunities' },
    { trend: 'Voice search', opp: 'Optimise conversational search experiences' }
  ];

  const faqs = [
    {
      q: '1. How much does a business website cost with UDMIDEAS?',
      a: 'Our business website development starts at $500. The final cost depends on pages, design, functionality, languages and technical requirements.'
    },
    {
      q: '2. Do you develop custom-coded websites?',
      a: 'Yes. We build websites from scratch using React JS, PHP, Laravel and other modern development technologies.'
    },
    {
      q: '3. Do you provide website development services throughout Texas?',
      a: 'Yes. We serve businesses in Dallas, Houston, Austin, San Antonio, Fort Worth, El Paso and other Texas locations.'
    },
    {
      q: '4. Do you provide Spanish website development and SEO?',
      a: 'Yes. We develop Spanish-language websites and provide Spanish keyword research, multilingual SEO, content optimisation and international SEO services.'
    },
    {
      q: '5. Can you help my business rank on Google in Texas?',
      a: 'Yes. We provide technical SEO, on-page SEO, off-page SEO, local SEO, keyword research and content optimisation. Rankings depend on competition, website quality and ongoing work.'
    },
    {
      q: '6. What is the difference between SEO, AEO and GEO?',
      a: 'SEO improves organic search visibility. AEO focuses on answer-based discovery, while GEO focuses on improving brand and content discoverability in generative search experiences.'
    },
    {
      q: '7. Do you provide Google Ads and Facebook Ads management?',
      a: 'Yes. We manage Google Search Ads, Display Ads, Facebook Ads, Instagram Ads, LinkedIn Ads and other paid advertising campaigns.'
    },
    {
      q: '8. Can you develop an eCommerce website for my Texas business?',
      a: 'Yes. We develop eCommerce websites with product pages, categories, shopping functionality, payment integrations and SEO-friendly structures.'
    },
    {
      q: '9. How long does SEO take to produce results?',
      a: 'SEO is a long-term process. Initial improvements may take several months, while competitive search terms can require six months or longer.'
    },
    {
      q: '10. Can UDMIDEAS help my Texas company expand into international markets?',
      a: 'Yes. We provide multilingual website development, international SEO, SMM and PPC services to help Texas businesses target customers in the USA, Canada, Europe, Latin America and the Middle East.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* Hero / Introduction */}
      <header className="max-w-4xl space-y-5">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>Texas Custom Web Design, Multilingual SEO, AEO, GEO, SMM &amp; PPC · 15+ Years</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          Texas Website Design, Development &amp; Multilingual Digital Marketing Company
        </h1>

        <div className="space-y-3 pt-1">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-400">
            Introduction: Grow Your Texas Business with UDMIDEAS
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Texas is one of the largest and fastest-growing business markets in the United States. From technology companies in Austin and Dallas to energy businesses in Houston, healthcare providers in San Antonio and construction companies across Fort Worth, businesses need a strong online presence to compete in the digital marketplace.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            UDMIDEAS provides professional website design, custom website development, multilingual SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), Social Media Marketing (SMM) and Pay-Per-Click (PPC) advertising services for Texas businesses.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We help startups, small businesses, eCommerce companies, professional service providers and established enterprises build modern websites and reach customers throughout Texas, the USA and international markets.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Our objective is to combine custom-coded website development with multilingual digital marketing strategies to improve online visibility, attract qualified visitors and generate business opportunities.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20website%20design%20and%20multilingual%20digital%20marketing%20in%20Texas."
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
            <span>Request Texas Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Why Choose UDMIDEAS for Texas Businesses? */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Why work with UDMIDEAS?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Choose UDMIDEAS for Texas Businesses?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS brings 15+ years of website development and digital marketing experience to businesses looking for professional online solutions.
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
          We focus on developing websites and marketing strategies according to each company&apos;s business objectives, target audience and future expansion plans.
        </div>
      </section>

      {/* Custom Website Design & Development Services in Texas */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            <span>Our Website Development Services Include</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Custom Website Design &amp; Development Services in Texas
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            A professional website is an essential business asset. It introduces your company, explains your services, builds customer trust and creates opportunities to generate enquiries. UDMIDEAS develops custom-coded websites from scratch using modern development technologies and frameworks.
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
          We do not depend entirely on ready-made templates. Our development approach focuses on custom design, functionality, scalability, responsive layouts and SEO-friendly website architecture.
        </div>
      </section>

      {/* Website Development Cost for Texas Businesses */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Transparent Investment
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Website Development Cost for Texas Businesses
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
          Business website development starts at $500. Final pricing depends on the number of pages, design complexity, functionality, languages and integrations. Domain, hosting and third-party services may be additional.
        </div>
      </section>

      {/* Multilingual Website Development & SEO Services in Texas */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>Multilingual Reach</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Multilingual Website Development &amp; SEO Services in Texas
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Texas has a diverse population and a substantial Spanish-speaking community. Businesses can explore new customer segments by offering websites and marketing content in multiple languages.
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
            Our multilingual SEO services include international keyword research, language-specific content optimisation, technical SEO, hreflang implementation, multilingual URL structures, link building and international search visibility strategies.
          </p>
          <p className="text-slate-200 font-medium">
            We research local search behaviour and customer intent instead of simply translating English keywords.
          </p>
        </div>
      </section>

      {/* SEO, AEO & GEO Services for Texas Companies */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Search &amp; AI Discovery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SEO, AEO &amp; GEO Services for Texas Companies
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Search behaviour is changing. Customers discover businesses through Google, Bing, conversational search, direct answers and generative search platforms. UDMIDEAS helps Texas companies build visibility across traditional and emerging search experiences.
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
            Social media and paid advertising help businesses connect with potential customers, promote their services and generate enquiries.
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
          We develop campaigns according to business objectives, customer locations, audience interests, languages and advertising budgets.
        </div>
      </section>

      {/* Texas Business Industries We Work For */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            <span>Sector Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Texas Business Industries We Work For
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Texas has a diverse economy covering technology, energy, manufacturing, healthcare, construction, real estate, retail and professional services. UDMIDEAS provides industry-specific website development and digital marketing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {texasIndustries.map((item, idx) => (
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

      {/* Texas Regions We Serve */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>Statewide Regional Reach</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Texas Regions We Serve
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Texas is geographically diverse, with different business opportunities across its major regions. UDMIDEAS offers website development and digital marketing services for companies throughout the state. The following regional grouping is based on commonly recognised Texas geographic and tourism regions.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Texas Region</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Major Cities &amp; Locations</th>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">Business Opportunities</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {texasRegions.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.region}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {row.cities}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300">
                    {row.opportunities}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          We can develop dedicated location pages and targeted SEO strategies for businesses operating in these regions.
        </div>
      </section>

      {/* Texas Digital Market Statistics */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4" />
            <span>Market Intelligence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Texas Digital Market Statistics
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Texas offers a substantial market for website development, digital marketing and multilingual business services.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">Market Indicator</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Latest Available Statistics</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {texasStats.map((row, idx) => (
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
          These statistics demonstrate the potential for businesses to invest in professional websites, multilingual customer experiences and digital marketing.
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
            The digital marketplace is moving towards personalised customer experiences, generative search, automation, video marketing and multilingual online communication.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Future Trend</th>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">Business Opportunity</th>
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
            Between 2027 and 2030, Texas businesses should consider combining SEO, AEO, GEO, SMM, PPC, video creation and multilingual website development. Businesses that build a strong digital foundation can prepare for changing customer discovery and purchasing behaviour.
          </p>
          <p className="text-slate-400">
            These are strategic opportunities, not guaranteed growth forecasts.
          </p>
        </div>
      </section>

      {/* Frequently Asked Questions: Texas Business Owners */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Common Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions: Texas Business Owners
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

      {/* Grow Your Texas Business with UDMIDEAS */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 space-y-6 shadow-xl">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Contact UDMIDEAS Today – Let&apos;s Grow Your Texas Business Online</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Grow Your Texas Business with UDMIDEAS
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Your website should be more than an online business card. It should support your brand, customer acquisition and long-term business expansion.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS combines custom website development, multilingual SEO, AEO, GEO, social media marketing and PPC advertising to help businesses build stronger digital identities.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Whether you are launching a startup in Austin, managing a company in Dallas, operating an industrial business in Houston or expanding an eCommerce brand across Texas, we can help you develop the right digital strategy.
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
              UDMIDEAS – Your Website Development &amp; Multilingual Digital Marketing Partner in Texas, USA.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20grow%20my%20Texas%20business%20with%20UDMIDEAS."
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
