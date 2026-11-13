import React, { useState } from 'react';
import {
  Globe2,
  Code2,
  Search,
  Share2,
  MousePointerClick,
  CheckCircle2,
  MessageCircle,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  ShoppingCart,
  Award,
  Rocket,
  ChevronDown,
  ChevronUp,
  Building2,
  MapPin
} from 'lucide-react';

export const CostaRicaServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whyWebsiteItems = [
    'Professional and modern website design.',
    'Spanish-language content adapted to Costa Rican customers.',
    'Mobile-friendly and responsive layouts.',
    'Fast loading speed and secure browsing.',
    'SEO-friendly website architecture.',
    'Contact forms and WhatsApp integration.',
    'Online payment and eCommerce functionality.',
    'Search engine-friendly URLs and metadata.',
    'Clear service and product information.'
  ];

  const costaRicaStats = [
    { metric: 'Total population', figure: '5.18 million' },
    { metric: 'Internet users', figure: '4.78 million' },
    { metric: 'Internet penetration', figure: '92.3%' },
    { metric: 'Social media user identities', figure: '4.45 million' },
    { metric: 'Social media penetration', figure: '85.9%' },
    { metric: 'Mobile connections', figure: '6.96 million' },
    { metric: 'Median fixed internet download speed', figure: '147.14 Mbps' }
  ];

  const provinces = [
    {
      province: 'San José',
      cities: 'San José, Escazú, Desamparados, Santa Ana, Pérez Zeledón',
      opportunities: 'Corporate businesses, professional services, retail, technology'
    },
    {
      province: 'Alajuela',
      cities: 'Alajuela, San Ramón, Grecia, Atenas, Ciudad Quesada',
      opportunities: 'Manufacturing, agriculture, tourism, local services'
    },
    {
      province: 'Cartago',
      cities: 'Cartago, Paraíso, Turrialba, La Unión, Tres Ríos',
      opportunities: 'Education, manufacturing, retail, professional services'
    },
    {
      province: 'Heredia',
      cities: 'Heredia, Belén, Santo Domingo, San Rafael, Barva',
      opportunities: 'Technology, corporate offices, healthcare, professional services'
    },
    {
      province: 'Guanacaste',
      cities: 'Liberia, Tamarindo, Nicoya, Santa Cruz, Playas del Coco',
      opportunities: 'Hotels, tourism, restaurants, real estate'
    },
    {
      province: 'Puntarenas',
      cities: 'Puntarenas, Quepos, Jacó, Golfito, Esparza',
      opportunities: 'Tourism, hospitality, retail, local businesses'
    },
    {
      province: 'Limón',
      cities: 'Limón, Guápiles, Puerto Viejo, Siquirres, Talamanca',
      opportunities: 'Logistics, tourism, agriculture, retail'
    }
  ];

  const regionalSeoApproach = [
    'Location-specific Spanish keyword research.',
    'Province and city landing pages.',
    'Local business SEO.',
    'Google Business Profile optimization.',
    'Local service page development.',
    'Regional content creation.',
    'Location-based PPC campaigns.'
  ];

  const devSolutions = [
    'Custom-coded website design and development.',
    'Spanish business and corporate websites.',
    'Professional service websites.',
    'Tourism and hotel websites.',
    'Real estate websites.',
    'Spanish eCommerce website development.',
    'Online shopping and product catalogue websites.',
    'React JS website development.',
    'WordPress and PHP-based development.',
    'Laravel and CodeIgniter development.',
    'Custom website functionality and integrations.',
    'Website redesign and migration.',
    'SEO-friendly website architecture.'
  ];

  const spanishSeoServices = [
    'Costa Rican Spanish keyword research.',
    'Competitor SEO analysis.',
    'Spanish website content optimization.',
    'SEO titles and meta descriptions.',
    'On-page and technical SEO.',
    'URL structure optimization.',
    'Google Search Console setup.',
    'Google Analytics 4 integration.',
    'Internal linking optimization.',
    'Spanish blog and article writing.',
    'Local SEO for Costa Rican businesses.',
    'Google Business Profile optimization.',
    'International and multilingual SEO.',
    'Website speed optimization.',
    'Schema markup and structured data.',
    'Quality backlink building.',
    'Organic traffic and ranking reports.'
  ];

  const ecommerceSolutions = [
    'Custom eCommerce website development.',
    'Spanish product and category page optimization.',
    'Product keyword research.',
    'Spanish product descriptions.',
    'eCommerce technical SEO.',
    'Product schema and structured data.',
    'Shopping cart and checkout optimization.',
    'Mobile shopping experience optimization.',
    'Google Ads campaigns.',
    'Facebook and Instagram advertising.',
    'Social media content creation.',
    'Remarketing campaigns.',
    'Conversion tracking and optimization.'
  ];

  const smmItems = [
    'Facebook business page management.',
    'Instagram marketing.',
    'Spanish social media content creation.',
    'Promotional graphics and creatives.',
    'Social media account management.',
    'Audience engagement strategies.',
    'Brand awareness campaigns.',
    'Lead generation campaigns.'
  ];

  const ppcItems = [
    'Google Search Ads.',
    'Google Display Ads.',
    'Spanish keyword targeting.',
    'Spanish advertising copywriting.',
    'Landing page optimization.',
    'Remarketing campaigns.',
    'Conversion tracking.',
    'Campaign monitoring and reporting.'
  ];

  const pricingRows = [
    {
      service: 'Web Design & Development',
      solutions: 'Custom-coded Spanish websites',
      cost: '$500'
    },
    {
      service: 'Spanish SEO',
      solutions: 'On-page, technical and off-page SEO',
      cost: '$500'
    },
    {
      service: 'Spanish SMM & PPC',
      solutions: 'Social media and paid advertising',
      cost: '$500'
    }
  ];

  const growthSteps = [
    {
      step: '1. Website Development',
      desc: 'Build a professional Spanish-language website.'
    },
    {
      step: '2. SEO Optimization',
      desc: 'Research Costa Rican Spanish keywords and improve Google visibility.'
    },
    {
      step: '3. eCommerce Growth',
      desc: 'Optimize product pages, categories, and shopping experiences.'
    },
    {
      step: '4. Social Media Marketing',
      desc: 'Promote your business through Spanish-language campaigns.'
    },
    {
      step: '5. PPC Advertising',
      desc: 'Launch targeted Google Ads and social media campaigns.'
    },
    {
      step: '6. Performance Analysis',
      desc: 'Monitor rankings, organic traffic, enquiries, and conversions.'
    }
  ];

  const benefits = [
    {
      title: '15+ Years of Experience',
      desc: 'Professional experience in website development, SEO, and digital marketing.'
    },
    {
      title: 'Spanish SEO Expertise',
      desc: 'Optimization strategies for Spanish-language websites.'
    },
    {
      title: 'Custom-Coded Websites',
      desc: 'Development according to your business requirements.'
    },
    {
      title: 'eCommerce Solutions',
      desc: 'Website development and SEO for online stores.'
    },
    {
      title: 'Complete Digital Marketing',
      desc: 'SEO, SMM, PPC, and content marketing.'
    },
    {
      title: 'International Experience',
      desc: 'Experience working with clients across multiple countries.'
    },
    {
      title: 'Technical Expertise',
      desc: 'Responsive design, website speed, and search engine accessibility.'
    },
    {
      title: 'Customized Strategies',
      desc: 'Solutions aligned with your business objectives.'
    },
    {
      title: 'Growth-Focused Approach',
      desc: 'Focus on visibility, relevant traffic, leads, and conversions.'
    }
  ];

  const suitableBusinesses = [
    'Costa Rican startups and new businesses.',
    'Local service providers.',
    'Corporate and professional companies.',
    'Hotels and tourism businesses.',
    'Restaurants and hospitality companies.',
    'Real estate businesses.',
    'Retail and eCommerce stores.',
    'B2B and B2C organizations.',
    'Companies expanding into international markets.'
  ];

  const faqs = [
    {
      q: 'Q1. Does UDMIDEAS provide website development services in Costa Rica?',
      a: 'Yes. We develop custom-coded Spanish-language websites for startups, local businesses, professional companies, hotels, and eCommerce stores targeting Costa Rica.'
    },
    {
      q: 'Q2. Do you provide Spanish SEO services for Costa Rican businesses?',
      a: 'Yes. We provide keyword research, on-page SEO, technical SEO, content optimization, link building, and local SEO for Spanish-language websites.'
    },
    {
      q: 'Q3. Can you optimize my existing website for Google Costa Rica?',
      a: 'Yes. We analyze your website, identify technical and content issues, research local keywords, and develop an SEO improvement strategy.'
    },
    {
      q: 'Q4. Do you provide eCommerce SEO for Spanish online stores?',
      a: 'Yes. We optimize product pages, category pages, product descriptions, website structure, and technical SEO for Spanish eCommerce websites.'
    },
    {
      q: 'Q5. Can you develop a custom-coded eCommerce website?',
      a: 'Yes. We develop custom websites using technologies such as React JS, PHP, Laravel, and other suitable development frameworks.'
    },
    {
      q: 'Q6. Do you provide Facebook and Instagram marketing in Spanish?',
      a: 'Yes. We offer Spanish-language social media management, content creation, promotional campaigns, and audience targeting.'
    },
    {
      q: 'Q7. Do you offer Google Ads and PPC management in Costa Rica?',
      a: 'Yes. Our PPC services include Google Ads setup, keyword targeting, advertising copywriting, campaign management, conversion tracking, and performance optimization.'
    },
    {
      q: 'Q8. How much does website development or SEO cost?',
      a: 'Our selected website development, Spanish SEO, and SMM/PPC packages start at $500. Final pricing depends on project requirements and service scope.'
    },
    {
      q: 'Q9. Can UDMIDEAS help my Costa Rican business attract international customers?',
      a: 'Yes. We provide international and multilingual SEO strategies to help businesses attract customers from the USA, Canada, Europe, and other Latin American countries.'
    },
    {
      q: 'Q10. How long does SEO take to improve website rankings?',
      a: 'SEO timelines depend on competition, website condition, keywords, and industry. Meaningful improvements often require several months of consistent optimization. Rankings and business results cannot be guaranteed.'
    }
  ];

  return (
    <div className="space-y-14 text-left">
      {/* Hero / Page Introduction */}
      <header className="max-w-4xl space-y-4">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>Costa Rica Website Design, Development & Spanish SEO · 15+ Years Experience</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          Spanish Website Design, Development & SEO Digital Marketing Company in Costa Rica – UDMIDEAS
        </h1>

        <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            Are you looking for a professional Spanish website design, development, and SEO digital marketing company in Costa Rica? UDMIDEAS provides custom-coded website development, Spanish-language SEO, eCommerce SEO, Social Media Marketing (SMM), and Pay-Per-Click (PPC) advertising solutions for businesses looking to grow online.
          </p>
          <p>
            We help Costa Rican businesses build professional websites, improve Google search rankings, attract potential customers, and expand their digital presence through customized digital marketing strategies.
          </p>
          <p className="text-slate-400">
            Whether you operate a startup, local business, professional service company, retail brand, tourism business, or eCommerce store, UDMIDEAS offers complete digital solutions to connect your brand with Spanish-speaking customers across Costa Rica.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20Spanish%20website%20design%20and%20SEO%20in%20Costa%20Rica."
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

      {/* Why Does Your Business in Costa Rica Need a Professional Website? */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            Digital Foundation
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Does Your Business in Costa Rica Need a Professional Website?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Costa Rica has a highly connected digital population. Customers increasingly use Google, websites, and social media to discover businesses, compare services, research tourism destinations, and purchase products.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            A professional Spanish-language website helps your business establish credibility and communicate with local customers. Your website should include:
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
          At UDMIDEAS, we develop custom-coded websites according to your business requirements, target audience, and long-term growth objectives.
        </div>
      </section>

      {/* Costa Rica Digital Market – Important Statistics */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Market Intelligence
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Costa Rica Digital Market – Important Statistics
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Costa Rica offers significant opportunities for businesses investing in website development, SEO, eCommerce, and digital advertising. According to DataReportal's Digital 2027 Costa Rica report, based on October 2026 data:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl max-w-3xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Digital Market Statistics</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Figures</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {costaRicaStats.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-white">
                    {row.metric}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400">
                    {row.figure}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="max-w-4xl space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            These figures demonstrate the importance of having a strong digital presence. Businesses can use websites, search engines, and social media platforms to reach potential customers across Costa Rica.
          </p>
          <p className="text-xs text-slate-400 italic">
            Note: Mobile connections can exceed the population because individuals may have multiple connections. Social media identities do not necessarily represent unique individuals. (DataReportal – Global Digital Insights)
          </p>
        </div>
      </section>

      {/* Costa Rica Regions – Our Website Development & SEO Target Locations */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>National Provincial Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Costa Rica Regions – Our Website Development & SEO Target Locations
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS can develop digital marketing strategies for businesses targeting different provinces, cities, and commercial areas across Costa Rica. Costa Rica has seven administrative provinces. We can create location-specific SEO pages and digital marketing campaigns for businesses targeting these regions.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Province / Region</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Important Cities & Locations</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Business Opportunities</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {provinces.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.province}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200 text-xs">
                    {row.cities}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300 text-xs">
                    {row.opportunities}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-white">Our regional SEO approach includes:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {regionalSeoApproach.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-slate-300 pt-1">
            We help businesses reach customers in San José, Alajuela, Heredia, Cartago, Guanacaste, Puntarenas, and Limón.
          </p>
        </div>
      </section>

      {/* Our Website Design & Development Services in Costa Rica */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            <span>Custom Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Our Website Design & Development Services in Costa Rica
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS designs and develops custom-coded websites for Spanish-speaking businesses across Costa Rica.
          </p>
          <p className="text-sm font-semibold text-white">
            Our website development services include:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {devSolutions.map((item, idx) => (
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
          We develop responsive websites for desktops, tablets, and mobile devices, focusing on speed, security, user experience, and scalability.
        </p>
      </section>

      {/* Spanish SEO Services – Improve Your Google Rankings in Costa Rica */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>Organic Visibility</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Spanish SEO Services – Improve Your Google Rankings in Costa Rica
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Spanish SEO requires relevant keyword research, quality content, technical improvements, and an understanding of local search behaviour. Businesses targeting Costa Rica should use natural Costa Rican Spanish and relevant local search terms rather than simply translating English content or copying content from other Spanish-speaking countries.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS provides Spanish SEO services for businesses targeting customers across Costa Rica. Our Spanish SEO services include:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {spanishSeoServices.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-slate-300">
          Our objective is to improve organic search visibility and attract relevant visitors searching for your products and services.
        </p>
      </section>

      {/* Spanish eCommerce SEO & Digital Marketing Solutions */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <ShoppingCart className="w-4 h-4" />
            <span>Online Store Growth</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Spanish eCommerce SEO & Digital Marketing Solutions
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Are you operating an online store in Costa Rica? Your eCommerce website needs an effective combination of website development, SEO, social media promotion, and paid advertising. UDMIDEAS provides complete digital solutions for Spanish-language eCommerce businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ecommerceSolutions.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-slate-300">
          We help online stores improve product visibility, attract potential buyers, and create better shopping experiences.
        </p>
      </section>

      {/* Spanish SMM & PPC Advertising Services */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            Paid Social & Search Advertising
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Spanish SMM & PPC Advertising Services
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Social Media Marketing and PPC advertising help Costa Rican businesses reach potential customers, promote their products, and generate enquiries.
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
              <span>Pay-Per-Click (PPC)</span>
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

        <p className="text-xs sm:text-sm text-slate-300">
          Our focus is to reach relevant audiences, generate enquiries, and improve advertising performance through measurable campaigns.
        </p>
      </section>

      {/* UDMIDEAS Services & Pricing */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Starting Packages
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            UDMIDEAS Services & Pricing
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            We offer starting packages for businesses looking for Spanish website development and digital marketing services in Costa Rica.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Our Services</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Solutions</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Starting Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {pricingRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.service}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {row.solutions}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400 whitespace-nowrap">
                    {row.cost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-1.5 leading-relaxed">
          <p>
            <strong className="text-white">Pricing note:</strong> $500 is the starting price for selected service packages. Final costs depend on website size, functionality, competition, SEO requirements, and campaign scope. Advertising budgets are separate.
          </p>
          <p className="text-blue-400 font-medium">
            Contact UDMIDEAS for a customized project proposal.
          </p>
        </div>
      </section>

      {/* How UDMIDEAS Helps Grow Your Business in Costa Rica */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" />
            <span>6-Stage Growth Approach</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How UDMIDEAS Helps Grow Your Business in Costa Rica
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Our digital growth strategy combines website development, organic search optimization, and online advertising.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {growthSteps.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2 hover:border-slate-700 transition-all"
            >
              <div className="text-xs font-mono text-emerald-400 font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                {item.step}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-slate-300">
          We focus on building a strong digital foundation and identifying opportunities for sustainable business growth.
        </p>
      </section>

      {/* Benefits of Choosing UDMIDEAS & Suitable Industries */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Partner Advantages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Benefits of Choosing UDMIDEAS as Your Costa Rica Digital Marketing Company
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5"
            >
              <div className="flex items-center gap-2 font-bold text-sm text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{b.title}</span>
              </div>
              <p className="text-xs text-slate-300 pl-6 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/30 border border-blue-900/30 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Why Costa Rican Businesses Partner With UDMIDEAS
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            UDMIDEAS brings website development and digital marketing services together under one service provider. We understand that Spanish websites targeting Costa Rica need more than translated English content. They require locally relevant keywords, Costa Rican Spanish terminology, quality content, proper website architecture, technical SEO, and effective marketing campaigns.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-white">
            Our services are suitable for:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {suitableBusinesses.map((biz, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-2 text-xs text-slate-200"
              >
                <Building2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{biz}</span>
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Whether you need a new website, an online shopping platform, professional Spanish SEO, or complete SMM and PPC management, our team can help develop your digital growth strategy.
          </p>
        </div>
      </section>

      {/* Frequently Asked Questions – Costa Rica Business Owners */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Common Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions – Costa Rica Business Owners
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

      {/* Grow Your Business in Costa Rica with UDMIDEAS */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 space-y-6 shadow-xl">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Get Started</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Grow Your Business in Costa Rica with UDMIDEAS
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Are you planning to launch a new Spanish website in Costa Rica? Do you already have a website but need better Google rankings, more organic visitors, and additional customer enquiries? UDMIDEAS can help with custom website design and development, Spanish SEO, eCommerce SEO, social media marketing, and PPC advertising.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <div className="font-bold text-white text-base">
              Let's build your digital presence in Costa Rica!
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
              UDMIDEAS – Spanish Website Design, Development, SEO & Digital Marketing Solutions for Businesses in Costa Rica.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20discuss%20Spanish%20website%20development%20and%20SEO%20for%20Costa%20Rica."
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
