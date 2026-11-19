import React from 'react';
import {
  Globe2,
  Code2,
  Search,
  Share2,
  MousePointerClick,
  CheckCircle2,
  MessageCircle,
  Mail,
  Sparkles,
  TrendingUp,
  Layers,
  ShieldCheck,
  ArrowRight,
  ShoppingCart,
  BarChart3,
  Award,
  Rocket,
  Building2
} from 'lucide-react';

export const IsraelServicesContent: React.FC = () => {
  const whyWebsiteItems = [
    'Professional and modern website design.',
    'Hebrew-language content and navigation.',
    'Right-to-left (RTL) website functionality.',
    'Mobile-friendly and responsive layouts.',
    'Fast website loading speed.',
    'SEO-friendly website architecture.',
    'Secure contact forms and enquiry options.',
    'Product catalogues and eCommerce functionality.',
    'Google indexing and search engine optimization.'
  ];

  const israelStats = [
    { metric: 'Internet users (late 2025)', figure: '8.72 million' },
    { metric: 'Internet penetration', figure: '91.3%' },
    { metric: 'Social media user identities', figure: '7.01 million' },
    { metric: 'Social media penetration', figure: '73.4%' },
    { metric: 'Mobile connections', figure: '10.4 million' },
    { metric: 'Population (2025 estimate)', figure: 'Approximately 10.1 million' }
  ];

  const devSolutions = [
    'Custom-coded website design and development.',
    'Hebrew website development with RTL support.',
    'Business and corporate websites.',
    'Professional service websites.',
    'eCommerce website development.',
    'Product catalogue and shopping websites.',
    'WordPress and PHP-based development.',
    'React JS website development.',
    'Laravel and CodeIgniter development.',
    'Custom website functionality and integrations.',
    'Website redesign and migration.',
    'Technical SEO-friendly website architecture.'
  ];

  const hebrewSeoServices = [
    'Hebrew keyword research and competitor analysis.',
    'Hebrew website content optimization.',
    'Hebrew title tags and meta descriptions.',
    'Hebrew URL and website structure optimization.',
    'On-page SEO and technical SEO.',
    'Google Search Console setup and monitoring.',
    'Google Analytics 4 integration.',
    'Internal linking optimization.',
    'Hebrew blog and article optimization.',
    'Local SEO for Israeli businesses.',
    'Google Business Profile optimization.',
    'International SEO and multilingual SEO.',
    'Website speed and Core Web Vitals optimization.',
    'Schema markup and structured data.',
    'Quality backlink acquisition.',
    'Organic traffic and ranking analysis.'
  ];

  const ecommerceSolutions = [
    'Custom eCommerce website development.',
    'Hebrew product and category page optimization.',
    'Product keyword research.',
    'Shopping website technical SEO.',
    'Product schema and structured data.',
    'Product descriptions in Hebrew.',
    'Shopping cart and checkout optimization.',
    'Mobile shopping experience optimization.',
    'Google Ads and PPC campaigns.',
    'Social media advertising.',
    'Facebook and Instagram marketing.',
    'eCommerce conversion optimization.',
    'Remarketing and audience targeting.'
  ];

  const smmItems = [
    'Facebook business page management.',
    'Instagram marketing.',
    'Hebrew social media content creation.',
    'Promotional graphics and creatives.',
    'Social media account management.',
    'Audience engagement strategies.',
    'Brand awareness campaigns.',
    'Lead generation campaigns.'
  ];

  const ppcItems = [
    'Google Search Ads.',
    'Google Display Ads.',
    'Remarketing campaigns.',
    'Hebrew keyword targeting.',
    'Ad copywriting in Hebrew.',
    'Landing page optimization.',
    'Campaign performance monitoring.',
    'Conversion tracking and reporting.'
  ];

  const pricingRows = [
    {
      service: 'Web Design & Development',
      solutions: 'Custom-coded Hebrew websites',
      cost: '$500'
    },
    {
      service: 'Hebrew SEO',
      solutions: 'On-page, technical and off-page SEO',
      cost: '$500'
    },
    {
      service: 'Hebrew SMM & PPC',
      solutions: 'Social media and paid advertising solutions',
      cost: '$500'
    }
  ];

  const growthStages = [
    {
      stage: 'Stage 1 – Website Development',
      desc: 'Build a professional Hebrew website that represents your brand and services.'
    },
    {
      stage: 'Stage 2 – SEO Optimization',
      desc: 'Research Hebrew keywords, optimize website pages, improve technical performance, and build organic search visibility.'
    },
    {
      stage: 'Stage 3 – eCommerce Growth',
      desc: 'Optimize product and category pages to improve product discovery and shopping experiences.'
    },
    {
      stage: 'Stage 4 – Social Media Marketing',
      desc: 'Promote your business through Hebrew-language social media content and campaigns.'
    },
    {
      stage: 'Stage 5 – PPC Advertising',
      desc: 'Launch targeted advertising campaigns to reach potential customers.'
    },
    {
      stage: 'Stage 6 – Performance Analysis',
      desc: 'Monitor traffic, keyword rankings, enquiries, conversions, and campaign performance to identify opportunities for improvement.'
    }
  ];

  const benefits = [
    {
      title: '15+ Years of Experience',
      desc: 'Professional experience in website development, SEO, and digital marketing.'
    },
    {
      title: 'Hebrew SEO Expertise',
      desc: 'Dedicated optimization strategies for Hebrew-language websites.'
    },
    {
      title: 'Custom-Coded Websites',
      desc: 'Website development based on individual business requirements.'
    },
    {
      title: 'eCommerce Solutions',
      desc: 'SEO and marketing support for online stores.'
    },
    {
      title: 'Complete Digital Marketing',
      desc: 'SEO, SMM, PPC, and content marketing services.'
    },
    {
      title: 'International Experience',
      desc: 'Experience working with clients across multiple international markets.'
    },
    {
      title: 'Technical Expertise',
      desc: 'Focus on website performance, responsive design, and search engine accessibility.'
    },
    {
      title: 'Customized Strategies',
      desc: 'Solutions based on your business objectives and target audience.'
    },
    {
      title: 'Growth-Focused Approach',
      desc: 'Focus on organic visibility, qualified traffic, leads, and conversions.'
    }
  ];

  const suitableBusinesses = [
    'Israeli startups and new businesses.',
    'Local service providers.',
    'Corporate and professional companies.',
    'Hebrew eCommerce stores.',
    'Retail and product businesses.',
    'B2B and B2C companies.',
    'Businesses looking for online expansion.'
  ];

  return (
    <div className="space-y-14 text-left">
      {/* Hero / Page Introduction */}
      <header className="max-w-4xl space-y-4">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>Israel Website Design, RTL Development & Hebrew SEO · 15+ Years Experience</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          Israel Website Design, Development & Hebrew SEO Digital Marketing Company – UDMIDEAS
        </h1>

        <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            Are you looking for a professional website design, development, and digital marketing company in Israel? UDMIDEAS provides custom website development, Hebrew SEO, eCommerce SEO, Social Media Marketing (SMM), and Pay-Per-Click (PPC) advertising solutions to help Israeli businesses establish a strong online presence and attract more customers.
          </p>
          <p>
            We specialize in developing websites for Hebrew-language businesses, optimizing Hebrew websites for search engines, and creating digital marketing strategies that help businesses reach their target audiences across Israel.
          </p>
          <p className="text-slate-400">
            Whether you operate a local business, professional service company, online store, or growing enterprise, UDMIDEAS offers customized digital solutions to improve your online visibility, generate qualified leads, and increase business opportunities.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20Hebrew%20website%20design%20and%20SEO%20in%20Israel."
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

      {/* 1. Why Does Your Israeli Business Need a Professional Website? */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            Section 01 · Digital Foundation
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            1. Why Does Your Israeli Business Need a Professional Website?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Israel has a highly connected digital population, making online visibility important for businesses across different industries. Customers increasingly use search engines, websites, and social media platforms to research products, compare services, and find local businesses.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            A professional Hebrew-language website helps your business communicate directly with local customers in their preferred language. Your website should provide:
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
          At UDMIDEAS, we build custom-coded websites designed around your business requirements rather than relying on generic website templates.
        </div>
      </section>

      {/* 2. Israel Digital Market – Important Statistics */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Section 02 · Market Intelligence
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            2. Israel Digital Market – Important Statistics
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Israel offers significant opportunities for businesses investing in website development and digital marketing. According to DataReportal's Digital 2026 Israel report:
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
              {israelStats.map((row, idx) => (
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
          <p className="text-slate-400 font-mono text-xs">
            Source: DataReportal, Digital 2026 Israel.
          </p>
          <p>
            These figures demonstrate the importance of having a strong digital presence. Businesses that invest in Hebrew website development, SEO, and social media marketing can build better opportunities to connect with online audiences.
          </p>
          <p className="text-xs text-slate-400 italic">
            Note: Social media user identities and mobile connections are not necessarily equivalent to unique individual users.
          </p>
        </div>
      </section>

      {/* 3. Our Website Design & Development Services in Israel */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            <span>Section 03 · Custom Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            3. Our Website Design & Development Services in Israel
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS designs and develops custom-coded websites for Hebrew-language businesses, startups, professional service providers, and eCommerce companies. We focus on creating websites that combine professional design, user experience, technical performance, and search engine optimization.
          </p>
          <p className="text-sm font-semibold text-white">
            Our website development solutions include:
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

        <div className="max-w-4xl space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Our development approach focuses on clean coding, responsive layouts, website speed, security, and scalable website structures.
          </p>
          <p className="text-slate-400">
            We also build websites with SEO-friendly URLs, structured headings, metadata, schema markup, and search engine accessibility in mind.
          </p>
        </div>
      </section>

      {/* 4. Hebrew SEO Services – Grow Your Google Rankings in Israel */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>Section 04 · Organic Visibility</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            4. Hebrew SEO Services – Grow Your Google Rankings in Israel
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Hebrew SEO requires a specialized approach because Hebrew has its own writing direction, vocabulary, search behaviour, and keyword variations. Simply translating English website content into Hebrew is not enough. Your website needs proper Hebrew keyword research, native-language content quality, technical optimization, and a targeted SEO strategy.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS provides SEO services for Hebrew-language websites targeting customers across Israel. Our Hebrew SEO services include:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {hebrewSeoServices.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-1.5">
          <p>
            We also provide eCommerce SEO for Hebrew online stores, helping businesses optimize product pages, category pages, product descriptions, and website navigation.
          </p>
          <p className="text-slate-400">
            Our goal is to improve organic search visibility and attract visitors who are actively searching for your products and services.
          </p>
        </div>
      </section>

      {/* 5. Hebrew eCommerce SEO & Digital Marketing Solutions */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <ShoppingCart className="w-4 h-4" />
            <span>Section 05 · Online Retail Growth</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            5. Hebrew eCommerce SEO & Digital Marketing Solutions
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Running an online store in Israel requires more than uploading products to a website. Your store needs an effective SEO strategy, attractive product pages, a user-friendly shopping experience, and targeted advertising. UDMIDEAS helps Hebrew eCommerce businesses develop and promote their online stores.
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
          We focus on connecting your online store with potential buyers through organic search, paid advertising, and social media platforms.
        </p>
      </section>

      {/* 6. Hebrew SMM & PPC Advertising Services */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            Section 06 · Paid Social & Search Advertising
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            6. Hebrew SMM & PPC Advertising Services
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Social media marketing and paid advertising can help Israeli businesses reach targeted audiences and generate enquiries more quickly. Our digital marketing team develops campaigns for businesses that want to promote their services and products using Hebrew-language advertising.
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
          We focus on reaching relevant audiences, improving advertising performance, and generating measurable business opportunities.
        </p>
      </section>

      {/* 7. UDMIDEAS Services & Pricing */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Section 07 · Transparent Packages
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            7. UDMIDEAS Services & Pricing
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            We provide website development and digital marketing solutions for businesses looking to enter or expand in the Israeli market.
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
            <strong className="text-white">Pricing information:</strong> $500 is an introductory starting price for selected service packages. Final pricing depends on website size, project complexity, SEO requirements, advertising scope, and ongoing service requirements. Advertising budgets are separate from management fees.
          </p>
          <p className="text-blue-400 font-medium">
            Contact our team for a customized proposal.
          </p>
        </div>
      </section>

      {/* 8. How UDMIDEAS Helps Grow Your Business in Israel */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" />
            <span>Section 08 · 6-Stage Execution Framework</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            8. How UDMIDEAS Helps Grow Your Business in Israel
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Our digital growth approach combines website development, organic search optimization, and paid marketing. We work on different stages of your digital presence:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {growthStages.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2 hover:border-slate-700 transition-all"
            >
              <div className="text-xs font-mono text-emerald-400 font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                {item.stage}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Benefits of Choosing UDMIDEAS & 10. Why Choose UDMIDEAS */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Section 09 & 10 · Why Partner With UDMIDEAS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            9. Benefits of Choosing UDMIDEAS as Your Israel Digital Marketing Company
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Choosing the right digital marketing and website development company can make a difference to your business's online growth. Here are the advantages of working with UDMIDEAS:
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
            Why UDMIDEAS Works for the Israeli Market
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            UDMIDEAS is focused on helping businesses build, optimize, and promote their digital presence. We understand that Hebrew-language websites require more than standard website development or translated SEO content. They need appropriate RTL implementation, Hebrew keyword research, culturally relevant content, technical SEO, and a marketing strategy designed for the Israeli audience.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our services bring website development and digital marketing together under one service provider. Whether you need a new Hebrew business website, an eCommerce platform, professional Hebrew SEO, or complete SMM and PPC campaign management, our team can help you develop a digital growth strategy. We aim to build long-term business relationships by focusing on quality development, strategic optimization, and measurable marketing activities.
          </p>
        </div>
      </section>

      {/* 11. Grow Your Business in Israel with UDMIDEAS */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 space-y-6 shadow-xl">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Section 10 · Get Started</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            10. Grow Your Business in Israel with UDMIDEAS
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Are you planning to launch a new business website in Israel? Do you already have a Hebrew website but want better Google rankings, more organic traffic, and additional customer enquiries? UDMIDEAS can help you with custom website design and development, Hebrew SEO, eCommerce SEO, social media marketing, and PPC advertising.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-white">
            Our services are suitable for:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
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

        <div className="pt-4 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <div className="font-bold text-white text-base">
              Let's build your digital presence in Israel!
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
              UDMIDEAS – Hebrew Website Development, SEO & Digital Marketing Solutions for Israeli Businesses.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20discuss%20Hebrew%20website%20development%20and%20SEO%20for%20Israel."
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
