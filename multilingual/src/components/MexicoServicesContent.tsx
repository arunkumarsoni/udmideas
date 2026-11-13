import React from 'react';
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
  Rocket
} from 'lucide-react';

export const MexicoServicesContent: React.FC = () => {
  const whyWebsiteItems = [
    'Professional and modern website design.',
    'Spanish-language website content.',
    'Mobile-friendly and responsive layouts.',
    'Fast loading speed and secure browsing.',
    'SEO-friendly website structure.',
    'Clear service and product information.',
    'Contact forms and WhatsApp integration.',
    'Online payment and shopping functionality.',
    'Search engine-friendly URLs and metadata.'
  ];

  const mexicoStats = [
    { metric: 'Internet users', figure: '111 million' },
    { metric: 'Internet penetration', figure: '83.6%' },
    { metric: 'Social media user identities', figure: '112 million' },
    { metric: 'Social media penetration', figure: '83.9%' },
    { metric: 'Mobile connections', figure: '135 million' }
  ];

  const devSolutions = [
    'Custom-coded website design and development.',
    'Spanish business website development.',
    'Corporate and company websites.',
    'Professional service websites.',
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
    'Spanish keyword research.',
    'Competitor SEO analysis.',
    'Spanish website content optimization.',
    'SEO title and meta description optimization.',
    'On-page SEO and technical SEO.',
    'Spanish URL structure optimization.',
    'Google Search Console setup and monitoring.',
    'Google Analytics 4 integration.',
    'Internal linking optimization.',
    'Spanish blog and article writing.',
    'Local SEO for Mexican businesses.',
    'Google Business Profile optimization.',
    'International and multilingual SEO.',
    'Website speed and Core Web Vitals optimization.',
    'Schema markup and structured data.',
    'Quality backlink building.',
    'Organic traffic and keyword ranking reports.'
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
    'Spanish ad copywriting.',
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
      step: 'Step 1 – Website Development',
      desc: 'Build a professional Spanish-language website representing your business.'
    },
    {
      step: 'Step 2 – SEO Optimization',
      desc: 'Research Mexican Spanish keywords, optimize website pages, and improve search engine visibility.'
    },
    {
      step: 'Step 3 – eCommerce Growth',
      desc: 'Improve product pages, categories, website navigation, and shopping experiences.'
    },
    {
      step: 'Step 4 – Social Media Marketing',
      desc: 'Promote your business using Spanish-language content and targeted social campaigns.'
    },
    {
      step: 'Step 5 – PPC Advertising',
      desc: 'Run Google Ads and social media advertising campaigns to reach potential customers.'
    },
    {
      step: 'Step 6 – Performance Analysis',
      desc: 'Monitor keyword rankings, organic traffic, enquiries, leads, and conversions to identify growth opportunities.'
    }
  ];

  const benefits = [
    {
      title: '15+ Years of Experience',
      desc: 'Professional experience in website development, SEO, and digital marketing.'
    },
    {
      title: 'Spanish SEO Expertise',
      desc: 'SEO strategies for Spanish-language websites.'
    },
    {
      title: 'Custom-Coded Websites',
      desc: 'Development based on your specific business requirements.'
    },
    {
      title: 'eCommerce Solutions',
      desc: 'Website development and optimization for online stores.'
    },
    {
      title: 'Complete Digital Marketing',
      desc: 'SEO, SMM, PPC, and content marketing services.'
    },
    {
      title: 'International Experience',
      desc: 'Experience working with clients across multiple countries.'
    },
    {
      title: 'Technical Expertise',
      desc: 'Focus on responsive design, website speed, and search engine accessibility.'
    },
    {
      title: 'Customized Strategies',
      desc: 'Digital solutions aligned with your business goals.'
    },
    {
      title: 'Growth-Focused Approach',
      desc: 'Focus on visibility, relevant traffic, leads, and conversions.'
    }
  ];

  return (
    <div className="space-y-14 text-left">
      {/* Hero / Page Introduction */}
      <header className="max-w-4xl space-y-4">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>Mexico Website Design, Development & Spanish SEO · 15+ Years Experience</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          Spanish Website Design, Development & SEO Digital Marketing Company in Mexico – UDMIDEAS
        </h1>

        <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            Are you looking for a professional website design, development, and Spanish SEO digital marketing company in Mexico? UDMIDEAS provides custom-coded website development, Spanish-language SEO, eCommerce SEO, Social Media Marketing (SMM), and Pay-Per-Click (PPC) advertising solutions for businesses looking to grow online.
          </p>
          <p>
            We help Mexican businesses build professional websites, improve Google search rankings, attract potential customers, and develop their online presence through customized digital marketing strategies.
          </p>
          <p className="text-slate-400">
            Whether you operate a local business, startup, professional service company, retail business, or eCommerce store, UDMIDEAS offers complete digital solutions designed to connect your brand with Spanish-speaking customers.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20Spanish%20website%20design%20and%20SEO%20in%20Mexico."
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

      {/* 1. Why Does Your Business in Mexico Need a Professional Website? */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            Section 01 · Digital Foundation
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            1. Why Does Your Business in Mexico Need a Professional Website?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Mexico has a large and growing digital audience. Customers increasingly use Google, social media, and online shopping platforms to discover businesses, compare products, and purchase services.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            A professional Spanish-language website helps your business communicate effectively with local customers. Your website should include:
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
          At UDMIDEAS, we develop custom-coded websites based on your business requirements, target audience, and long-term growth objectives.
        </div>
      </section>

      {/* 2. Mexico Digital Market – Important Statistics */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Section 02 · Market Intelligence
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            2. Mexico Digital Market – Important Statistics
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Mexico offers excellent opportunities for companies investing in website development, SEO, eCommerce, and digital advertising. According to DataReportal's Digital 2027 Mexico report, based on late-2026 data:
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
              {mexicoStats.map((row, idx) => (
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

        <div className="max-w-4xl space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Additional official statistics from Mexico's <strong className="text-white">INEGI 2025 household technology survey</strong> reported that <strong className="text-emerald-400">104.9 million people aged six and above</strong> used the internet in 2025, representing <strong className="text-white">86.1%</strong> of that population.
          </p>
          <p>
            These statistics demonstrate the importance of having a professional digital presence in Mexico. Businesses can use websites, search engines, and social media platforms to reach potential customers.
          </p>
          <p className="text-xs text-slate-400 italic">
            Note: Figures use different reporting methodologies and population reference groups. Social media identities and mobile connections do not necessarily represent unique individuals.
          </p>
        </div>
      </section>

      {/* 3. Our Website Design & Development Services in Mexico */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            <span>Section 03 · Custom Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            3. Our Website Design & Development Services in Mexico
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS designs and develops custom-coded websites for Spanish-speaking businesses across Mexico. We focus on building websites that combine professional appearance, technical performance, user experience, and search engine optimization.
          </p>
          <p className="text-sm font-semibold text-white">
            Our website design and development services include:
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
          We develop responsive websites that work across desktops, tablets, and mobile devices. Our development process also considers website speed, security, navigation, technical SEO, and future scalability.
        </p>
      </section>

      {/* 4. Spanish SEO Services – Improve Your Google Rankings in Mexico */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>Section 04 · Organic Visibility</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            4. Spanish SEO Services – Improve Your Google Rankings in Mexico
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Spanish SEO requires proper keyword research, language optimization, search intent analysis, and relevant content creation. Simply translating English website content into Spanish does not guarantee better rankings. Your website needs Spanish keywords that match how Mexican customers search for products and services.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS provides Spanish SEO services for businesses targeting customers throughout Mexico. Our Spanish SEO services include:
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
          Our objective is to improve your website's organic visibility and attract relevant visitors who are searching for your products and services.
        </p>
      </section>

      {/* 5. Spanish eCommerce SEO & Digital Marketing Solutions */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <ShoppingCart className="w-4 h-4" />
            <span>Section 05 · Online Store Growth</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            5. Spanish eCommerce SEO & Digital Marketing Solutions
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Are you operating an online store in Mexico? Your eCommerce website needs more than attractive product images. It requires a well-organized shopping experience, optimized product pages, relevant keywords, and effective digital advertising. UDMIDEAS provides eCommerce website development, SEO, SMM, and PPC solutions for Spanish-language online stores.
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

      {/* 6. Spanish SMM & PPC Advertising Services */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            Section 06 · Paid Social & Search Advertising
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            6. Spanish SMM & PPC Advertising Services
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Social Media Marketing and paid advertising help businesses connect with targeted audiences, promote products, and generate enquiries. Our team develops Spanish-language marketing campaigns for businesses targeting the Mexican market.
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
          Our focus is to help businesses reach relevant audiences and improve advertising performance through measurable campaigns.
        </p>
      </section>

      {/* 7. UDMIDEAS Services & Pricing */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Section 07 · Starting Packages
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            7. UDMIDEAS Services & Pricing
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            We provide affordable starting packages for businesses looking for Spanish website development and digital marketing services in Mexico.
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
            <strong className="text-white">Pricing note:</strong> $500 is the starting price for selected service packages. Final costs depend on website size, functionality, competition, SEO scope, and campaign requirements. Advertising budgets are charged separately.
          </p>
          <p className="text-blue-400 font-medium">
            Contact UDMIDEAS for a customized project proposal.
          </p>
        </div>
      </section>

      {/* 8. How UDMIDEAS Helps Grow Your Business in Mexico */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" />
            <span>Section 08 · 6-Step Growth Framework</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            8. How UDMIDEAS Helps Grow Your Business in Mexico
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
      </section>

      {/* 9. Benefits & Why Choose UDMIDEAS */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Section 09 · Partner Advantages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            9. Benefits of Choosing UDMIDEAS as Your Spanish Digital Marketing Company
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Working with an experienced website development and digital marketing company can help businesses establish a stronger online presence. Benefits of choosing UDMIDEAS include:
          </p>
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

        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/30 border border-blue-900/30 space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Why UDMIDEAS Fits Mexican Businesses
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            UDMIDEAS brings website development and digital marketing services together to help businesses build and expand their online presence. We understand that Spanish-language websites require more than translated content. They need relevant Mexican Spanish keywords, quality content, effective website architecture, technical SEO, and marketing strategies designed around local customer behaviour.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our services are suitable for Mexican startups, local service providers, corporate businesses, retail companies, eCommerce stores, and B2B and B2C organizations. Whether you need a new Spanish business website, an eCommerce platform, professional Spanish SEO, or complete SMM and PPC management, our team can help you develop a digital growth strategy.
          </p>
        </div>
      </section>

      {/* 10. Grow Your Business in Mexico with UDMIDEAS */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 space-y-6 shadow-xl">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Section 10 · Get Started</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            10. Grow Your Business in Mexico with UDMIDEAS
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Are you planning to launch a new website in Mexico? Do you already have a Spanish-language website but need better Google rankings, more visitors, and additional customer enquiries? UDMIDEAS can help with custom website design and development, Spanish SEO, eCommerce SEO, social media marketing, and PPC advertising.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <div className="font-bold text-white text-base">
              Let's build your digital presence in Mexico!
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
              UDMIDEAS – Spanish Website Design, Development, SEO & Digital Marketing Solutions for Businesses in Mexico.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20discuss%20Spanish%20website%20development%20and%20SEO%20for%20Mexico."
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
