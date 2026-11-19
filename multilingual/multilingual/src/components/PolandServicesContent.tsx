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
  Sparkles,
  MapPin
} from 'lucide-react';

export const PolandServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const polandStats = [
    { indicator: "Poland's population (2025)", context: 'Approximately 37.5 million' },
    { indicator: 'Internet adoption', context: 'More than 85%' },
    { indicator: 'Polish eCommerce market', context: 'Growing multi-billion euro market' },
    { indicator: 'Online shopping adoption', context: 'More than 70% of internet users' },
    { indicator: 'Major digital sectors', context: 'Retail, finance, technology, manufacturing and services' },
    { indicator: 'Main online language', context: 'Polish' }
  ];

  const futureDevelopments = [
    {
      title: '1. Polish-language SEO',
      desc: 'Businesses will continue competing for Polish search queries and local customer attention.'
    },
    {
      title: '2. eCommerce expansion',
      desc: 'Online shopping, mobile commerce, and digital payments will create opportunities for online retailers.'
    },
    {
      title: '3. AI-powered search',
      desc: 'AEO and GEO strategies will become increasingly relevant as customers discover companies through conversational search and answer platforms.'
    },
    {
      title: '4. Local SEO',
      desc: 'Google Business Profiles, location-specific landing pages, and customer reviews will help local businesses attract customers.'
    },
    {
      title: '5. Video marketing',
      desc: 'Product demonstrations, educational videos, and short-form social content can increase brand awareness.'
    },
    {
      title: '6. International expansion',
      desc: 'Polish companies can reach customers in Germany, Czechia, Slovakia, France, and other European markets through multilingual websites.'
    },
    {
      title: '7. Mobile-first development',
      desc: 'Fast and responsive websites will remain important for attracting and converting online customers.'
    }
  ];

  const voivodeships = [
    { voivodeship: 'Greater Poland (Wielkopolskie)', capital: 'Poznań', cities: 'Poznań, Kalisz, Konin, Gniezno' },
    { voivodeship: 'Kuyavian-Pomeranian (Kujawsko-Pomorskie)', capital: 'Bydgoszcz / Toruń', cities: 'Bydgoszcz, Toruń, Włocławek' },
    { voivodeship: 'Lesser Poland (Małopolskie)', capital: 'Kraków', cities: 'Kraków, Tarnów, Nowy Sącz' },
    { voivodeship: 'Łódź (Łódzkie)', capital: 'Łódź', cities: 'Łódź, Piotrków Trybunalski, Pabianice' },
    { voivodeship: 'Lower Silesian (Dolnośląskie)', capital: 'Wrocław', cities: 'Wrocław, Legnica, Wałbrzych' },
    { voivodeship: 'Lublin (Lubelskie)', capital: 'Lublin', cities: 'Lublin, Zamość, Chełm' },
    { voivodeship: 'Lubusz (Lubuskie)', capital: 'Gorzów Wielkopolski / Zielona Góra', cities: 'Gorzów, Zielona Góra, Żary' },
    { voivodeship: 'Masovian (Mazowieckie)', capital: 'Warsaw', cities: 'Warsaw, Radom, Płock, Siedlce' },
    { voivodeship: 'Opole (Opolskie)', capital: 'Opole', cities: 'Opole, Kędzierzyn-Koźle, Nysa' },
    { voivodeship: 'Podlaskie', capital: 'Białystok', cities: 'Białystok, Łomża, Suwałki' },
    { voivodeship: 'Pomeranian (Pomorskie)', capital: 'Gdańsk', cities: 'Gdańsk, Gdynia, Sopot, Słupsk' },
    { voivodeship: 'Silesian (Śląskie)', capital: 'Katowice', cities: 'Katowice, Gliwice, Sosnowiec, Częstochowa' },
    { voivodeship: 'Subcarpathian (Podkarpackie)', capital: 'Rzeszów', cities: 'Rzeszów, Przemyśl, Krosno' },
    { voivodeship: 'Świętokrzyskie', capital: 'Kielce', cities: 'Kielce, Ostrowiec Świętokrzyski' },
    { voivodeship: 'Warmian-Masurian (Warmińsko-Mazurskie)', capital: 'Olsztyn', cities: 'Olsztyn, Elbląg, Ełk' },
    { voivodeship: 'West Pomeranian (Zachodniopomorskie)', capital: 'Szczecin', cities: 'Szczecin, Koszalin, Świnoujście' }
  ];

  const servicesPricingRows = [
    {
      service: 'Polish Website Design',
      provides: 'Professional Polish business websites',
      pricing: 'From $500'
    },
    {
      service: 'Custom Website Development',
      provides: 'Custom-coded websites for Polish businesses',
      pricing: 'From $500'
    },
    {
      service: 'Polish SEO Services',
      provides: 'On-page, technical, off-page and local SEO',
      pricing: 'Custom quotation'
    },
    {
      service: 'Polish eCommerce SEO',
      provides: 'Product, category and online store optimization',
      pricing: 'Custom quotation'
    },
    {
      service: 'Polish SMM',
      provides: 'Facebook, Instagram and social media marketing',
      pricing: 'Custom quotation'
    },
    {
      service: 'Polish PPC Advertising',
      provides: 'Google Ads and paid campaigns',
      pricing: 'Custom quotation'
    },
    {
      service: 'eCommerce SMM & PPC',
      provides: 'Product promotion, sales and retargeting',
      pricing: 'Custom quotation'
    }
  ];

  const devServices = [
    'Polish-language corporate websites.',
    'Business and professional service websites.',
    'Custom website design and development.',
    'Responsive mobile-friendly websites.',
    'Custom landing pages for lead generation.',
    'eCommerce website development.',
    'Website speed and performance optimization.',
    'SEO-friendly website architecture.',
    'Contact forms and enquiry systems.',
    'Website maintenance and technical support.'
  ];

  const polishSeoActivities = [
    'Polish keyword research and search intent analysis.',
    'Polish website content optimization.',
    'SEO titles, meta descriptions, and headings.',
    'Technical SEO audits and improvements.',
    'Website structure and internal linking.',
    'Polish-language blog content creation.',
    'Local SEO and Google Business Profile optimization.',
    'Quality backlink building.',
    'Schema markup and structured data.',
    'Google Search Console and Analytics monitoring.',
    'AEO and GEO optimization.'
  ];

  const ecommerceSeoServices = [
    'Polish product keyword research.',
    'Product title and description optimization.',
    'Category page SEO.',
    'Product image optimization.',
    'Technical eCommerce SEO.',
    'Duplicate content management.',
    'Internal linking and navigation improvements.',
    'Product schema and review schema.',
    'Polish eCommerce blog content.',
    'Conversion-focused landing pages.'
  ];

  const smmItems = [
    'Facebook business page management.',
    'Instagram marketing.',
    'Polish-language social media content.',
    'Promotional graphics and video creation.',
    'Brand awareness campaigns.',
    'Audience engagement strategies.',
    'Social media advertising.'
  ];

  const ppcItems = [
    'Google Search Ads.',
    'Google Display Ads.',
    'Google Shopping campaigns.',
    'Lead generation campaigns.',
    'eCommerce sales campaigns.',
    'Remarketing and retargeting.',
    'Conversion tracking and campaign optimization.'
  ];

  const growthSteps = [
    {
      step: '1. Business research',
      desc: 'Understand your products, services, competitors, and target customers in Poland.'
    },
    {
      step: '2. Website development',
      desc: 'Build a professional Polish-language website with a user-friendly experience.'
    },
    {
      step: '3. SEO optimization',
      desc: 'Improve technical SEO, Polish keywords, content, and search visibility.'
    },
    {
      step: '4. Digital promotion',
      desc: 'Run Polish SMM and PPC campaigns to reach potential customers.'
    },
    {
      step: '5. Performance monitoring',
      desc: 'Track website rankings, organic traffic, enquiries, and conversions.'
    }
  ];

  const benefits = [
    'Polish-language website development and marketing.',
    'Custom-coded website solutions.',
    'Dedicated Polish SEO strategies.',
    'eCommerce product and category optimization.',
    'Integrated SEO, SMM, and PPC services.',
    'International SEO opportunities across Europe.',
    'Mobile-friendly and performance-focused development.',
    'Website traffic and conversion monitoring.',
    'Flexible solutions for startups and established companies.',
    'One digital marketing partner for multiple services.'
  ];

  const strengths = [
    '1. International website development experience.',
    '2. Custom-coded website development.',
    '3. Polish-language SEO and content optimization.',
    '4. eCommerce SEO for different product categories.',
    '5. Technical SEO and website performance optimization.',
    '6. AEO and GEO strategies for changing search environments.',
    '7. Social media marketing and paid advertising.',
    '8. Integrated website development and digital marketing solutions.'
  ];

  const supportedIndustries = [
    { industry: 'Manufacturing', services: 'Corporate websites, international SEO' },
    { industry: 'Automotive', services: 'eCommerce SEO, local SEO, PPC' },
    { industry: 'Real Estate', services: 'Website development, local SEO' },
    { industry: 'Healthcare', services: 'Website design, local SEO' },
    { industry: 'Fashion & Clothing', services: 'eCommerce SEO, SMM, PPC' },
    { industry: 'Electronics', services: 'Product SEO, Google Shopping' },
    { industry: 'Construction', services: 'Lead generation, local SEO' },
    { industry: 'Education', services: 'Website development, SEO, PPC' },
    { industry: 'Furniture', services: 'eCommerce SEO and advertising' },
    { industry: 'Tourism & Hospitality', services: 'Website development, SEO, SMM' },
    { industry: 'Logistics', services: 'Corporate websites, B2B SEO' },
    { industry: 'Professional Services', services: 'Website development, SEO, PPC' }
  ];

  const faqs = [
    {
      q: '1. Does UDMIDEAS provide SEO services for Polish-language websites?',
      a: 'Yes. We provide Polish SEO, including keyword research, technical SEO, on-page optimization, content marketing, link building, and local SEO.'
    },
    {
      q: '2. Can you develop a complete Polish-language business website?',
      a: 'Yes. We design and develop custom-coded websites for Polish businesses, including corporate websites, professional service websites, and eCommerce stores.'
    },
    {
      q: '3. What is the starting price for website development?',
      a: 'Our introductory website design and development pricing starts at $500. Final pricing depends on website size, number of pages, functionality, and project requirements.'
    },
    {
      q: '4. Do you provide SEO for Polish eCommerce websites?',
      a: 'Yes. We optimize Polish product pages, category pages, product descriptions, website architecture, and technical SEO.'
    },
    {
      q: '5. Can you manage Polish Facebook and Instagram marketing?',
      a: 'Yes. We provide Polish-language social media content, page management, promotional campaigns, and paid social advertising.'
    },
    {
      q: '6. Does UDMIDEAS provide Google Ads services in Poland?',
      a: 'Yes. We create and manage Polish-language Google Ads campaigns for lead generation, product promotion, and online sales.'
    },
    {
      q: '7. Can you work with Polish startups and small businesses?',
      a: 'Yes. Our services are suitable for startups, small businesses, medium-sized companies, and established organizations.'
    },
    {
      q: '8. How long does Polish SEO take to show results?',
      a: 'SEO results depend on competition, website quality, industry, and keyword difficulty. Many projects require approximately 4–6 months or longer to demonstrate meaningful improvements. Rankings and sales cannot be guaranteed.'
    },
    {
      q: '9. Can you target all 16 regions of Poland?',
      a: 'Yes. We can develop regional SEO strategies targeting all 16 voivodeships, including Warsaw, Kraków, Wrocław, Poznań, Gdańsk, Łódź, Katowice, and Szczecin.'
    },
    {
      q: '10. Can UDMIDEAS help Polish businesses expand into other European countries?',
      a: 'Yes. We can develop multilingual website and international SEO strategies targeting Germany, France, Spain, Switzerland, Austria, Czechia, and other European markets.'
    }
  ];

  const ctaOutcomes = [
    'Build professional Polish-language websites.',
    'Improve Google search visibility.',
    'Optimize eCommerce websites and product pages.',
    'Promote products through social media.',
    'Generate leads through Google Ads.',
    'Expand into international markets.'
  ];

  return (
    <div className="space-y-14 text-left">
      {/* Hero / Page Introduction */}
      <header className="max-w-4xl space-y-4">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>Target Market: Poland | Polish-Speaking Businesses | Polish eCommerce Websites</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          Poland Website Design, Development & SEO Digital Marketing Company | UDMIDEAS
        </h1>

        <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            Poland is one of Central Europe's important digital economies, offering growing opportunities for businesses in eCommerce, manufacturing, technology, real estate, healthcare, construction, education, and professional services.
          </p>
          <p>
            As more Polish consumers use search engines, online stores, and social media to discover products and services, businesses need professional websites and effective digital marketing strategies to remain competitive. A professionally designed Polish-language website, combined with SEO, social media marketing, and PPC advertising, can help businesses reach customers across Poland.
          </p>
          <p>
            UDMIDEAS provides website design and development, Polish-language SEO, eCommerce SEO, Social Media Marketing (SMM), and Pay-Per-Click (PPC) advertising services for businesses targeting Poland. We help Polish business owners build professional websites, improve Google search visibility, attract qualified visitors, generate enquiries, and increase online sales.
          </p>
          <p className="text-slate-400">
            Our digital solutions combine custom-coded website development with SEO, AEO, GEO, content marketing, social media marketing, and paid advertising.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20Polish%20website%20design%20and%20SEO%20in%20Poland."
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

      {/* Poland Digital Market: Statistics and Future Opportunities */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Market Intelligence
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Poland Digital Market: Statistics and Future Opportunities
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Poland has a developing digital economy supported by widespread internet access, online shopping, mobile commerce, and digital business transformation.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl max-w-3xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Digital market indicator</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Statistics / market context</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {polandStats.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-white">
                    {row.indicator}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400">
                    {row.context}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-400 italic max-w-4xl">
          Figures are rounded market indicators from different reporting periods. Population, internet adoption, and online shopping statistics should be checked against the latest GUS, Eurostat, and industry publications before publication.
        </p>

        {/* Future of Polish Digital Business: 2027–2030 */}
        <div className="space-y-4 pt-2">
          <div className="max-w-4xl space-y-1.5">
            <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Strategic Horizon</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Future of Polish Digital Business: 2027–2030
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Several developments are creating opportunities for Polish businesses investing in digital growth:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {futureDevelopments.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2 hover:border-slate-700 transition-all"
              >
                <div className="text-xs font-mono text-emerald-400 font-bold">
                  0{idx + 1}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 italic">
            These are strategic opportunities, not guaranteed numerical forecasts.
          </p>
        </div>
      </section>

      {/* Poland's Regions and Voivodeships: SEO Targeting Opportunities */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>16 Administrative Voivodeships (Województwa)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Poland's Regions and Voivodeships: SEO Targeting Opportunities
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Poland is divided into 16 administrative regions known as voivodeships (województwa). Each region provides opportunities for location-based SEO, regional landing pages, and digital marketing.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Voivodeship / Region</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Capital</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">SEO target cities</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {voivodeships.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.voivodeship}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200 whitespace-nowrap">
                    {row.capital}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300">
                    {row.cities}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed">
          Regional SEO can help businesses target customers searching for products and services in specific Polish cities rather than relying exclusively on nationwide keywords.
        </p>
      </section>

      {/* 1. Our Website Design and Digital Marketing Services in Poland */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Integrated Solutions & Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            1. Our Website Design and Digital Marketing Services in Poland
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS offers integrated digital solutions for Polish-speaking businesses looking to establish or expand their online presence.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Our services</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">What we provide</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Pricing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {servicesPricingRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.service}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {row.provides}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400 whitespace-nowrap">
                    {row.pricing}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          The $500 starting price applies to qualifying website projects. Final costs depend on website size, pages, functionality, and project requirements. SEO, SMM, PPC management, and advertising budgets are quoted separately.
        </div>
      </section>

      {/* 2. Polish Website Design and Development Services */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            <span>Custom Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            2. Polish Website Design and Development Services
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            A professional Polish-language website helps customers understand your business, explore your services, and purchase your products. UDMIDEAS designs and develops custom-coded websites for businesses targeting Poland.
          </p>
          <p className="text-sm font-semibold text-white">
            Our website development services include:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {devServices.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed">
          <p>
            We work with React JS, PHP, Laravel, CodeIgniter, WordPress, and other suitable development technologies.
          </p>
          <p className="text-slate-400">
            Our objective is to create websites that combine professional design, technical performance, and search engine visibility.
          </p>
        </div>
      </section>

      {/* 3. Polish SEO Services for Business Websites */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>Organic Search Visibility</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            3. Polish SEO Services for Business Websites
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Polish customers frequently search using Polish-language keywords and industry-specific expressions. Directly translating English keywords is not enough to develop an effective SEO strategy. Our Polish SEO services focus on improving organic search visibility and attracting relevant customers.
          </p>
          <p className="text-sm font-semibold text-white">
            Our Polish SEO activities include:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {polishSeoActivities.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed">
          <p>
            We research how Polish customers actually search for products and services, considering local terminology, buying intent, and industry competition.
          </p>
          <p className="text-slate-400">
            Our goal is to improve relevant organic traffic, qualified enquiries, and business opportunities.
          </p>
        </div>
      </section>

      {/* 4. Polish eCommerce SEO Solutions */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <ShoppingCart className="w-4 h-4" />
            <span>Online Store Growth</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            4. Polish eCommerce SEO Solutions
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Poland has an established online retail market with opportunities for businesses selling products across different industries. UDMIDEAS provides Polish eCommerce SEO solutions to improve product visibility and online sales opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ecommerceSeoServices.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed">
          <p>
            We can work with WooCommerce, Magento, Shopify, and custom eCommerce development platforms.
          </p>
          <p className="text-slate-400">
            Whether you sell fashion, electronics, furniture, cosmetics, automotive accessories, home appliances, or industrial products, our objective is to help customers discover your online store through relevant Polish search queries.
          </p>
        </div>
      </section>

      {/* 5. Polish SMM and PPC Digital Marketing Services */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            Paid Social & Search Advertising
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            5. Polish SMM and PPC Digital Marketing Services
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            SEO supports long-term organic visibility. Social media marketing and paid advertising provide additional opportunities to reach potential customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2.5 text-base font-bold text-white">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <Share2 className="w-4 h-4" />
              </div>
              <span>Polish Social Media Marketing (SMM)</span>
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
              <span>Polish Pay-Per-Click (PPC) Advertising</span>
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
          We create Polish-language advertising campaigns targeting relevant search terms, customer interests, locations, and business objectives.
        </p>
      </section>

      {/* 6. How UDMIDEAS Helps Grow Polish Businesses */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" />
            <span>5-Stage Connected Strategy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            6. How UDMIDEAS Helps Grow Polish Businesses
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Our approach connects website development, Polish SEO, and digital marketing into one business growth strategy.
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
          Our focus is not just website traffic. We aim to help businesses turn online visibility into qualified enquiries, customers, and sales.
        </p>
      </section>

      {/* 7. Benefits & 8. Why Polish Business Owners Should Choose UDMIDEAS */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Partner Advantages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            7. Benefits of Choosing UDMIDEAS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{b}</span>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/30 border border-blue-900/30 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            8. Why Polish Business Owners Should Choose UDMIDEAS
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            UDMIDEAS brings 15+ years of experience in website development and digital marketing, working with international clients across multiple countries. We understand that businesses targeting Poland need professional websites, natural Polish content, reliable technical performance, and marketing strategies aligned with local customer expectations.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-white">
            Our strengths include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {strengths.map((reason, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2 text-xs text-slate-200"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We work with businesses that want a long-term digital growth partner rather than just a website designer or advertising provider.
          </p>
        </div>
      </section>

      {/* 9. Polish Industries We Can Support */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            <span>Industry Support</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            9. Polish Industries We Can Support
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl max-w-3xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Industry</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Recommended digital services</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {supportedIndustries.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.industry}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {row.services}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 10. Frequently Asked Questions: Polish Business Owners */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Common Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            10. Frequently Asked Questions: Polish Business Owners
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

      {/* 11. Grow Your Business in Poland with UDMIDEAS */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 space-y-6 shadow-xl">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Get Started</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            11. Grow Your Business in Poland with UDMIDEAS
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Poland offers strong opportunities for companies investing in professional websites, Polish SEO, eCommerce optimization, and digital advertising. Whether you operate a manufacturing company, local service business, professional organization, or online store, your digital presence plays an important role in attracting customers and generating sales.
          </p>
        </div>

        <div className="space-y-2.5">
          <p className="text-xs sm:text-sm font-semibold text-white">
            UDMIDEAS helps Polish business owners:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {ctaOutcomes.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2 text-xs text-slate-200"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <div className="font-bold text-white text-base">
              Let's build your website, improve your Polish search visibility, and grow your business across Poland.
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
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20discuss%20Polish%20website%20development%20and%20SEO%20for%20Poland."
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
              <span>Connect with UDMIDEAS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
