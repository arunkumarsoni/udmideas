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

export const NewYorkServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whyChoosePoints = [
    '15+ years of website development and digital marketing experience.',
    'Custom-coded website development from scratch.',
    'Multilingual website design and development.',
    'English, Spanish, French, German, Arabic and other language SEO.',
    'Technical SEO, On-Page SEO and Off-Page SEO.',
    'AEO and GEO strategies for emerging search platforms.',
    'Google Ads and social media advertising campaigns.',
    'eCommerce website development and optimisation.',
    'Local, national and international SEO campaigns.',
    'Website speed, mobile responsiveness and user experience optimisation.',
    'Dedicated website development and digital marketing support.'
  ];

  const webDevServices = [
    'Custom React JS website development.',
    'Custom PHP and Laravel development.',
    'WordPress website development.',
    'eCommerce website development.',
    'Business and corporate websites.',
    'Service-based business websites.',
    'Multilingual website development.',
    'Landing pages and lead-generation websites.',
    'Website redesign and performance optimisation.'
  ];

  const pricingPackages = [
    { pkg: 'Business Website', cost: '$500', suitable: 'Small businesses and startups' },
    { pkg: 'Professional Website', cost: 'Custom Quote', suitable: 'Growing companies' },
    { pkg: 'Multilingual Website', cost: 'Custom Quote', suitable: 'International businesses' },
    { pkg: 'eCommerce Website', cost: 'Custom Quote', suitable: 'Online stores' },
    { pkg: 'Custom Web Application', cost: 'Custom Quote', suitable: 'Advanced business requirements' }
  ];

  const multilingualSeoPoints = [
    'English SEO for New York and the USA.',
    'Spanish SEO for Hispanic and Latin American audiences.',
    'French and German SEO for international markets.',
    'Arabic SEO for Middle Eastern audiences.',
    'International keyword research.',
    'Multilingual on-page and technical SEO.',
    'Hreflang implementation.',
    'Language-specific URL optimisation.',
    'International link-building strategies.',
    'Google Search Console and GA4 monitoring.',
    'Local SEO and Google Business Profile optimisation.'
  ];

  const searchVisibilityRows = [
    {
      service: 'SEO',
      whatWeDo: 'Technical SEO, keywords, content, backlinks and website optimisation',
      benefit: 'Improve organic search visibility'
    },
    {
      service: 'AEO',
      whatWeDo: 'Question-based content, FAQs, structured data and answer optimisation',
      benefit: 'Improve opportunities to appear in direct answers'
    },
    {
      service: 'GEO',
      whatWeDo: 'Entity optimisation, authoritative content, brand mentions and contextual relevance',
      benefit: 'Improve discoverability in generative search experiences'
    },
    {
      service: 'Local SEO',
      whatWeDo: 'Local keywords, business profiles, location pages and citations',
      benefit: 'Reach customers in NYC'
    },
    {
      service: 'eCommerce SEO',
      whatWeDo: 'Product, category, technical and content optimisation',
      benefit: 'Increase qualified shopping traffic'
    }
  ];

  const smmPoints = [
    'Facebook and Instagram marketing.',
    'LinkedIn marketing for B2B companies.',
    'Social media content creation.',
    'Reels and short-form video content.',
    'Social media page management.',
    'Multilingual social media campaigns.',
    'Brand awareness and lead-generation campaigns.'
  ];

  const ppcPoints = [
    'Google Search Ads.',
    'Google Display Ads.',
    'Google Shopping campaigns.',
    'YouTube advertising.',
    'Facebook and Instagram Ads.',
    'LinkedIn Ads.',
    'Multilingual PPC campaigns.',
    'Conversion tracking and campaign optimisation.'
  ];

  const nycIndustries = [
    { industry: 'Real Estate', services: 'Property websites, local SEO and PPC' },
    { industry: 'Healthcare & Dental', services: 'Medical websites, local SEO and lead generation' },
    { industry: 'Law Firms', services: 'Professional websites and legal SEO' },
    { industry: 'Restaurants & Hospitality', services: 'Multilingual websites and social media marketing' },
    { industry: 'Finance & Accounting', services: 'Corporate websites and B2B SEO' },
    { industry: 'Retail & eCommerce', services: 'Online stores and product SEO' },
    { industry: 'Construction', services: 'Contractor websites and local SEO' },
    { industry: 'Education', services: 'Educational websites and student lead generation' },
    { industry: 'Technology & IT', services: 'Custom development and international SEO' },
    { industry: 'Beauty & Wellness', services: 'Booking websites and social media campaigns' },
    { industry: 'Travel & Tourism', services: 'Multilingual websites and international SEO' },
    { industry: 'Professional Services', services: 'Lead-generation websites and PPC' }
  ];

  const benefits = [
    {
      title: 'Reach More Customers',
      desc: 'Target customers across New York, the USA and international markets.'
    },
    {
      title: 'Multilingual Expansion',
      desc: 'Communicate with customers in their preferred languages.'
    },
    {
      title: 'Custom Website Development',
      desc: 'Get a website designed around your actual business requirements.'
    },
    {
      title: 'Improved Search Visibility',
      desc: 'Build organic visibility through SEO, AEO and GEO.'
    },
    {
      title: 'More Qualified Leads',
      desc: 'Attract relevant customers through SEO and paid advertising.'
    },
    {
      title: 'Better Brand Presentation',
      desc: 'Establish a professional and consistent digital identity.'
    },
    {
      title: 'Long-Term Growth',
      desc: 'Develop a digital foundation that supports future expansion.'
    }
  ];

  const nycMarketStats = [
    { indicator: 'NYC population estimate (2025)', value: '8.58 million' },
    { indicator: 'Foreign-born population', value: '36.6%' },
    { indicator: 'Residents speaking a language other than English at home', value: '47.7%' },
    { indicator: 'Hispanic or Latino population', value: '28.5%' },
    { indicator: 'Households with broadband internet', value: '90.5%' },
    { indicator: 'NYC small businesses (2025)', value: 'More than 183,000' },
    { indicator: 'New York State small businesses (2025)', value: 'Approximately 2.4 million' }
  ];

  const futureTrends = [
    { trend: 'AI-powered search', opp: 'Optimise business information for generative search platforms' },
    { trend: 'Voice search', opp: 'Create conversational and question-based content' },
    { trend: 'Multilingual SEO', opp: 'Reach customers across different language communities' },
    { trend: 'AEO', opp: 'Structure information for answer-based search' },
    { trend: 'GEO', opp: 'Improve brand visibility in generative search experiences' },
    { trend: 'Custom web development', opp: 'Build faster, scalable and business-specific platforms' },
    { trend: 'Video marketing', opp: 'Reach audiences through short-form and educational videos' },
    { trend: 'PPC automation', opp: 'Improve campaign management and conversion measurement' },
    { trend: 'Personalised marketing', opp: 'Deliver relevant content to different customer segments' },
    { trend: 'eCommerce growth', opp: 'Expand online sales and international customer reach' }
  ];

  const faqs = [
    {
      q: '1. How much does a business website cost with UDMIDEAS?',
      a: 'Our business website development starts at $500. The final price depends on the number of pages, design, functionality, languages and technical requirements.'
    },
    {
      q: '2. Do you develop custom-coded websites?',
      a: 'Yes. We build custom-coded websites from scratch using React JS, PHP, Laravel and other modern development technologies. We focus on performance, scalability, user experience and search optimisation.'
    },
    {
      q: '3. Do you provide multilingual website development in New York?',
      a: 'Yes. We develop websites in English, Spanish, French, German, Arabic and other languages according to your business requirements and target markets.'
    },
    {
      q: '4. Can you help my NYC business rank on Google?',
      a: 'Yes. We provide technical SEO, on-page SEO, off-page SEO, local SEO, keyword research, content optimisation and website performance improvements. Results depend on competition, website condition and ongoing work.'
    },
    {
      q: '5. What is the difference between SEO, AEO and GEO?',
      a: 'SEO focuses on organic search engine visibility. AEO focuses on optimising content to provide useful answers to questions. GEO focuses on improving brand and content discoverability in generative AI-powered search experiences.'
    },
    {
      q: '6. Do you provide SEO services for Spanish-speaking customers?',
      a: 'Yes. We offer Spanish SEO, multilingual keyword research, Spanish website content optimisation and international SEO strategies for Hispanic audiences and Latin American markets.'
    },
    {
      q: '7. Do you manage Google Ads and Facebook Ads?',
      a: 'Yes. We provide Google PPC, Facebook Ads, Instagram Ads, LinkedIn advertising and other paid campaign management services. Advertising budgets are separate from management fees.'
    },
    {
      q: '8. Can you redesign my existing business website?',
      a: 'Yes. We can redesign existing websites, improve their technical structure, enhance mobile responsiveness, improve user experience and implement SEO-friendly development practices.'
    },
    {
      q: '9. How long does SEO take to produce results?',
      a: 'SEO is a long-term process. Initial improvements may appear within a few months, while competitive keywords can require six months or longer. Results depend on competition, website quality, content, authority and consistency.'
    },
    {
      q: '10. Can UDMIDEAS help my business expand outside New York?',
      a: 'Yes. We provide international website development and multilingual digital marketing services to help NYC businesses target customers across the USA, Canada, Europe, Latin America, the Middle East and other international markets.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* Hero / Introduction */}
      <header className="max-w-4xl space-y-5">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>New York City Multilingual Web Design, SEO, AEO, GEO, SMM & PPC · 15+ Years</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          New York Website Design, Development &amp; Multilingual Digital Marketing Company
        </h1>

        <div className="space-y-3 pt-1">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-400">
            Introduction: Helping New York Businesses Grow Online
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            New York City is one of the world&apos;s most competitive business markets, with opportunities across technology, finance, healthcare, real estate, hospitality, retail, education, professional services and eCommerce. Businesses need more than an attractive website to succeed in this competitive environment. They need a strong digital presence, search visibility, effective marketing and websites that convert visitors into customers.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            UDMIDEAS provides multilingual website design and development, multilingual SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), Social Media Marketing (SMM) and Pay-Per-Click (PPC) advertising services for businesses in New York City.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We build custom-coded websites from scratch using modern development technologies and frameworks. Our objective is to help NYC businesses reach local, national and international customers through professional websites and multilingual digital marketing strategies.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Whether you operate a small business in Manhattan, a professional service in Brooklyn, a retail company in Queens or an expanding enterprise in the Bronx, UDMIDEAS helps you grow your business online.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20website%20design%20and%20multilingual%20digital%20marketing%20in%20New%20York."
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
            <span>Request NYC Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Why Choose UDMIDEAS for New York Businesses? */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Why Work With Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Choose UDMIDEAS for New York Businesses?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS combines website development with international digital marketing experience. We understand that different industries, audiences and languages require different website structures and marketing strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {whyChoosePoints.map((pt, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{pt}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Multilingual Website Design & Development Services in NYC */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            <span>Custom Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Multilingual Website Design &amp; Development Services in NYC
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            New York is a multicultural city with customers from different countries, cultures and language backgrounds. A multilingual website helps businesses communicate with more customers and explore new markets.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS develops multilingual websites with language-specific content, navigation, URLs and SEO structures. Our website development services include:
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
          We develop websites from scratch instead of depending entirely on pre-designed templates. Each website is planned around your business objectives, target audience, services and future expansion requirements.
        </div>
      </section>

      {/* Website Development Cost for NYC Businesses */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Transparent Investment
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Website Development Cost for NYC Businesses
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
          Business website development starts at $500. The final cost depends on the number of pages, design complexity, functionality, integrations, languages and technical requirements. Domain, hosting and third-party services may be additional.
        </div>
      </section>

      {/* Multilingual SEO Services in New York */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>Organic Multilingual Growth</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Multilingual SEO Services in New York
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Search Engine Optimization helps businesses attract customers through organic search results. However, reaching multilingual audiences requires more than translating website content. UDMIDEAS provides multilingual SEO services to help New York companies reach customers searching in different languages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {multilingualSeoPoints.map((pt, idx) => (
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
          We research search behaviour, keywords and customer intent for each target language and market.
        </div>
      </section>

      {/* SEO, AEO & GEO Services: The Future of Search Visibility */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Search &amp; AI Discovery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SEO, AEO &amp; GEO Services: The Future of Search Visibility
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Online search is evolving. Businesses must prepare for traditional search engines, conversational answers and AI-powered discovery platforms.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Service</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">What We Do</th>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">Business Benefits</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {searchVisibilityRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.service}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {row.whatWeDo}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-300 font-medium">
                    {row.benefit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          Our objective is to help businesses build sustainable visibility across traditional and emerging search experiences. Rankings, AI citations and customer acquisition depend on competition, website quality and search platform algorithms; they cannot be guaranteed.
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
            A successful digital marketing strategy combines organic visibility with targeted paid advertising and social media engagement.
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
          We plan advertising campaigns around business goals, customer locations, language preferences, search intent and available budgets. Advertising spend is separate from management fees.
        </div>
      </section>

      {/* NYC Business Industries We Work For */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            <span>Sector Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            NYC Business Industries We Work For
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            New York has businesses across almost every major economic sector. UDMIDEAS develops industry-specific websites and marketing strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nycIndustries.map((item, idx) => (
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

      {/* Benefits of Working with UDMIDEAS */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>Business Impact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Benefits of Working with UDMIDEAS
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Choosing the right website development and digital marketing company can help your business establish a stronger online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-1.5"
            >
              <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <h3>{b.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NYC Business Digital Marketing: Statistics & Future Opportunities */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4" />
            <span>Important New York Market Statistics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            NYC Business Digital Marketing: Statistics &amp; Future Opportunities
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            New York City&apos;s digital economy provides opportunities for companies that invest in websites, online visibility and customer acquisition. NYC is home to hundreds of thousands of businesses, creating a substantial market for digital services.
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
              {nycMarketStats.map((row, idx) => (
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
      </section>

      {/* The Future of Website Development & Digital Marketing (2027–2030) */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>2027–2030 Strategic Outlook</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            The Future of Website Development &amp; Digital Marketing (2027–2030)
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Digital marketing is moving towards more personalised, multilingual and search-intent-driven customer experiences.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Future Trend</th>
                <th className="py-3.5 px-4 sm:px-6 text-slate-200">Opportunity for Businesses</th>
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

        <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Between 2027 and 2030, businesses should prepare for changes in how people discover companies, compare services and make purchasing decisions. Rather than relying exclusively on traditional Google rankings, NYC businesses should invest in a combination of SEO, AEO, GEO, social media, video marketing, PPC and multilingual website experiences.
          </p>
          <p className="text-slate-400 italic">
            These are strategic growth opportunities, not guaranteed market-growth percentages or fixed forecasts.
          </p>
        </div>
      </section>

      {/* Frequently Asked Questions: NYC Business Owners */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Common Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions: NYC Business Owners
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

      {/* Let's Grow Your New York Business with UDMIDEAS */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 space-y-6 shadow-xl">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Get Started Today – Build Your Digital Future with UDMIDEAS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Let&apos;s Grow Your New York Business with UDMIDEAS
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Your website should be more than an online business card. It should become an important part of your customer acquisition, brand development and business expansion strategy.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            At UDMIDEAS, we combine custom website development, multilingual SEO, AEO, GEO, SMM and PPC services to help businesses establish a stronger digital presence. Whether you are launching a startup, managing an established company, expanding an eCommerce store or entering international markets, our team can help you plan and develop the right digital strategy.
          </p>
          <p className="text-sm font-bold text-white">
            We Build Websites. We Improve Search Visibility. We Grow Businesses.
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
              UDMIDEAS – Your Website Development &amp; Multilingual Digital Marketing Partner for New York Businesses.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20grow%20my%20New%20York%20business%20with%20UDMIDEAS."
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
              <span>Get Started Today</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
