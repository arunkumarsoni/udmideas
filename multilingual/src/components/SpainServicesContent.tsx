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

export const SpainServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const spainStats = [
    { indicator: "Spain's population (2025)", context: 'Approximately 49.1 million' },
    { indicator: 'Internet penetration', context: 'Around 96%' },
    { indicator: 'Spanish eCommerce B2C turnover (2024)', context: 'Approximately €95 billion' },
    { indicator: 'Spanish eCommerce growth (2024)', context: 'Approximately 13.1%' },
    { indicator: 'Online shopping adoption', context: 'More than 70% of internet users' },
    { indicator: 'Digital business opportunities', context: 'Retail, tourism, services and manufacturing' }
  ];

  const futureDevelopments = [
    {
      title: '1. Spanish-language SEO',
      desc: 'More businesses will compete for Spanish search queries and customer attention.'
    },
    {
      title: '2. eCommerce expansion',
      desc: 'Online retail, mobile shopping, and digital payment options will create opportunities for retailers.'
    },
    {
      title: '3. AI-powered search',
      desc: 'AEO and GEO strategies will become increasingly relevant as consumers use conversational search and answer platforms.'
    },
    {
      title: '4. Local SEO',
      desc: 'Google Business Profiles, location-specific landing pages, and customer reviews will help local companies attract customers.'
    },
    {
      title: '5. Video marketing',
      desc: 'Short videos, product demonstrations, and social media content will support brand awareness.'
    },
    {
      title: '6. International expansion',
      desc: 'Spanish businesses can reach customers in Latin America and other European markets through multilingual websites.'
    },
    {
      title: '7. Mobile-first experiences',
      desc: 'Fast, responsive websites will remain important as consumers research and purchase through smartphones.'
    }
  ];

  const autonomousCommunities = [
    { community: 'Andalusia (Andalucía)', capital: 'Seville', targets: 'Sevilla, Málaga, Granada, Córdoba, Cádiz' },
    { community: 'Aragon (Aragón)', capital: 'Zaragoza', targets: 'Zaragoza, Huesca, Teruel' },
    { community: 'Asturias', capital: 'Oviedo', targets: 'Oviedo, Gijón, Avilés' },
    { community: 'Balearic Islands (Islas Baleares)', capital: 'Palma', targets: 'Palma, Ibiza, Menorca' },
    { community: 'Basque Country (País Vasco)', capital: 'Vitoria-Gasteiz', targets: 'Bilbao, San Sebastián, Vitoria' },
    { community: 'Canary Islands (Islas Canarias)', capital: 'Las Palmas / Santa Cruz', targets: 'Tenerife, Gran Canaria, Lanzarote' },
    { community: 'Cantabria', capital: 'Santander', targets: 'Santander, Torrelavega' },
    { community: 'Castile and León (Castilla y León)', capital: 'Valladolid', targets: 'Valladolid, León, Salamanca, Burgos' },
    { community: 'Castilla-La Mancha', capital: 'Toledo', targets: 'Toledo, Albacete, Ciudad Real' },
    { community: 'Catalonia (Cataluña)', capital: 'Barcelona', targets: 'Barcelona, Girona, Tarragona, Lleida' },
    { community: 'Extremadura', capital: 'Mérida', targets: 'Badajoz, Cáceres, Mérida' },
    { community: 'Galicia', capital: 'Santiago de Compostela', targets: 'A Coruña, Vigo, Lugo, Ourense' },
    { community: 'La Rioja', capital: 'Logroño', targets: 'Logroño, Calahorra' },
    { community: 'Community of Madrid', capital: 'Madrid', targets: 'Madrid, Alcalá de Henares, Getafe' },
    { community: 'Region of Murcia', capital: 'Murcia', targets: 'Murcia, Cartagena, Lorca' },
    { community: 'Navarre (Navarra)', capital: 'Pamplona', targets: 'Pamplona, Tudela' },
    { community: 'Valencian Community (Comunidad Valenciana)', capital: 'Valencia', targets: 'Valencia, Alicante, Castellón' }
  ];

  const autonomousCities = [
    { city: 'Ceuta', target: 'Ceuta' },
    { city: 'Melilla', target: 'Melilla' }
  ];

  const devServices = [
    'Spanish-language corporate websites.',
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

  const spanishSeoActivities = [
    'Spanish keyword research and search intent analysis.',
    'Spanish website content optimization.',
    'SEO titles, meta descriptions, and headings.',
    'Technical SEO audits and improvements.',
    'Website structure and internal linking.',
    'Spanish-language blog content creation.',
    'Local SEO and Google Business Profile optimization.',
    'Quality backlink building.',
    'Schema markup and structured data.',
    'Google Search Console and Analytics monitoring.',
    'AEO and GEO optimization.'
  ];

  const ecommerceSeoServices = [
    'Spanish product keyword research.',
    'Product title and description optimization.',
    'Category page SEO.',
    'Product image optimization.',
    'Technical eCommerce SEO.',
    'Duplicate content management.',
    'Internal linking and navigation improvements.',
    'Product schema and review schema.',
    'Spanish eCommerce blog content.',
    'Conversion-focused landing pages.'
  ];

  const smmItems = [
    'Facebook business page management.',
    'Instagram marketing.',
    'Spanish social media content creation.',
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
      desc: 'Understand your products, services, competitors, and target customers.'
    },
    {
      step: '2. Website development',
      desc: 'Build a professional Spanish-language website.'
    },
    {
      step: '3. SEO optimization',
      desc: 'Improve technical SEO, keywords, content, and search visibility.'
    },
    {
      step: '4. Digital promotion',
      desc: 'Run Spanish SMM and PPC campaigns.'
    },
    {
      step: '5. Performance monitoring',
      desc: 'Track rankings, traffic, enquiries, and conversions.'
    }
  ];

  const benefits = [
    'Spanish-language website development and marketing.',
    'Custom-coded website solutions.',
    'Dedicated Spanish SEO strategies.',
    'eCommerce product and category optimization.',
    'Integrated SEO, SMM, and PPC services.',
    'International SEO opportunities.',
    'Mobile-friendly website development.',
    'Website traffic and conversion monitoring.',
    'Flexible solutions for startups and established companies.',
    'One digital marketing partner for multiple services.'
  ];

  const strengths = [
    '1. International website development experience.',
    '2. Custom-coded website development.',
    '3. Spanish-language SEO and content optimization.',
    '4. eCommerce SEO for different product categories.',
    '5. Technical SEO and website performance optimization.',
    '6. AEO and GEO strategies for changing search environments.',
    '7. Social media marketing and paid advertising.',
    '8. Integrated website development and digital marketing solutions.'
  ];

  const supportedIndustries = [
    { industry: 'Real Estate', services: 'Website development, local SEO, PPC' },
    { industry: 'Tourism & Hospitality', services: 'SEO, SMM, website development' },
    { industry: 'Automotive', services: 'Local SEO, eCommerce SEO, PPC' },
    { industry: 'Healthcare', services: 'Website design, local SEO' },
    { industry: 'Fashion & Clothing', services: 'eCommerce SEO, SMM, PPC' },
    { industry: 'Electronics', services: 'Product SEO, eCommerce marketing' },
    { industry: 'Construction', services: 'Lead generation, local SEO' },
    { industry: 'Education', services: 'Website development, SEO, PPC' },
    { industry: 'Restaurants', services: 'Local SEO, social media marketing' },
    { industry: 'Manufacturing', services: 'Corporate websites, international SEO' },
    { industry: 'Professional Services', services: 'Website development, SEO, PPC' },
    { industry: 'Furniture', services: 'eCommerce SEO and advertising' }
  ];

  const faqs = [
    {
      q: '1. Does UDMIDEAS provide SEO services for Spanish-language websites?',
      a: 'Yes. We provide Spanish SEO, including keyword research, technical SEO, on-page optimization, content marketing, link building, and local SEO.'
    },
    {
      q: '2. Can you develop a complete Spanish-language business website?',
      a: 'Yes. We design and develop custom-coded websites for Spanish businesses, including corporate websites, service websites, and eCommerce stores.'
    },
    {
      q: '3. What is the starting price for website development?',
      a: 'Our introductory website design and development pricing starts at $500. Final pricing depends on website size, pages, functionality, and project requirements.'
    },
    {
      q: '4. Do you provide SEO for Spanish eCommerce websites?',
      a: 'Yes. We optimize Spanish product pages, category pages, product descriptions, website architecture, and technical SEO.'
    },
    {
      q: '5. Can you manage Spanish Facebook and Instagram marketing?',
      a: 'Yes. We provide Spanish-language social media content, page management, promotional campaigns, and paid social advertising.'
    },
    {
      q: '6. Does UDMIDEAS provide Google Ads services in Spain?',
      a: 'Yes. We create and manage Spanish-language Google Ads campaigns for lead generation, product promotion, and online sales.'
    },
    {
      q: '7. Can you work with Spanish startups and small businesses?',
      a: 'Yes. Our services are suitable for startups, small businesses, medium-sized companies, and established organizations.'
    },
    {
      q: '8. How long does Spanish SEO take to show results?',
      a: 'SEO results depend on competition, website quality, industry, and keyword difficulty. Many projects require approximately 4–6 months or longer to demonstrate meaningful improvements. Rankings and sales cannot be guaranteed.'
    },
    {
      q: '9. Can you target all regions and cities of Spain?',
      a: 'Yes. We can develop regional SEO strategies targeting Madrid, Barcelona, Valencia, Seville, Málaga, Alicante, Bilbao, Zaragoza, and other Spanish locations.'
    },
    {
      q: '10. Can UDMIDEAS help Spanish businesses expand into Latin America?',
      a: 'Yes. We can develop Spanish-language international SEO strategies for businesses targeting Mexico, Argentina, Colombia, Chile, Peru, Costa Rica, and other Latin American markets. We also consider regional vocabulary and differences in customer search behaviour.'
    }
  ];

  return (
    <div className="space-y-14 text-left">
      {/* Hero / Page Introduction */}
      <header className="max-w-4xl space-y-4">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>Spain Website Design, Development & Spanish SEO · 15+ Years Experience</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          Spain Website Design, Development & SEO Digital Marketing Company | UDMIDEAS
        </h1>

        <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            Spain is one of Europe's important digital economies, offering significant opportunities for businesses in eCommerce, tourism, real estate, manufacturing, healthcare, education, professional services, and retail. With millions of Spanish-speaking internet users, businesses need professional websites and effective digital marketing strategies to attract customers and compete online.
          </p>
          <p>
            A professionally designed Spanish-language website, combined with SEO, social media marketing, and PPC advertising, can help businesses reach customers across Spain. UDMIDEAS provides website design and development, Spanish-language SEO, eCommerce SEO, Social Media Marketing (SMM), and Pay-Per-Click (PPC) advertising services for businesses targeting Spain.
          </p>
          <p>
            We help Spanish business owners build professional websites, improve Google search visibility, attract qualified visitors, generate enquiries, and increase online sales.
          </p>
          <p className="text-slate-400">
            Our digital solutions combine custom-coded website development with SEO, AEO, GEO, content marketing, social media marketing, and paid advertising.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20Spanish%20website%20design%20and%20SEO%20in%20Spain."
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

      {/* Spain Digital Market: Statistics and Future Opportunities */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Market Intelligence
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Spain Digital Market: Statistics and Future Opportunities
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Spain has a growing digital economy supported by internet adoption, online shopping, mobile usage, and digital business transformation.
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
              {spainStats.map((row, idx) => (
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
          Figures are rounded and drawn from different reporting periods and statistical definitions. Reference sources include INE, Eurostat, CNMC and industry eCommerce reports.
        </p>

        {/* Future of Spanish Digital Business: 2027–2030 */}
        <div className="space-y-4 pt-2">
          <div className="max-w-4xl space-y-1.5">
            <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Strategic Horizon</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Future of Spanish Digital Business: 2027–2030
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              The Spanish digital market offers several opportunities for businesses investing in online growth.
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

      {/* Spain's Autonomous Communities and Regions: SEO Targeting Opportunities */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>17 Autonomous Communities · 2 Autonomous Cities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Spain's Autonomous Communities and Regions: SEO Targeting Opportunities
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Spain has 17 autonomous communities and 2 autonomous cities. Businesses can use regional SEO strategies to reach customers in different parts of the country.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Autonomous community / region</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Capital</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">SEO target location</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {autonomousCommunities.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.community}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200 whitespace-nowrap">
                    {row.capital}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300">
                    {row.targets}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-white">Autonomous cities:</h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl max-w-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3 px-4 sm:px-6">Autonomous city</th>
                  <th className="py-3 px-4 sm:px-6 text-emerald-400">SEO target location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {autonomousCities.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-bold text-white">
                      {row.city}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-emerald-400 font-mono">
                      {row.target}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed">
            Regional targeting can help companies build location-specific service pages, local business listings, and Spanish-language content. In Catalonia, the Basque Country, Galicia, and the Balearic Islands, regional languages can also matter alongside Spanish.
          </p>
        </div>
      </section>

      {/* Spanish Website Design and Development Services */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            <span>Custom Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Spanish Website Design and Development Services
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            A professional Spanish-language website helps customers understand your business, explore your services, and contact your company. UDMIDEAS designs and develops custom-coded websites for businesses targeting Spain.
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
            We work with React JS, PHP, Laravel, CodeIgniter, and WordPress according to project requirements.
          </p>
          <p className="text-slate-400">
            Our objective is to develop websites that combine professional design, technical performance, and search engine visibility.
          </p>
        </div>
      </section>

      {/* Spanish SEO Services for Business Websites */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>Organic Search Visibility</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Spanish SEO Services for Business Websites
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Spanish customers search using different keywords and expressions depending on their industry, location, and purchasing requirements. Our Spanish SEO services focus on improving organic visibility and attracting relevant customers.
          </p>
          <p className="text-sm font-semibold text-white">
            Our Spanish SEO activities include:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {spanishSeoActivities.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed">
          We focus on Spanish search queries rather than simply translating English keywords. Our strategy considers local search behaviour, regional terminology, and customer intent.
        </p>
      </section>

      {/* Spanish eCommerce SEO Solutions */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <ShoppingCart className="w-4 h-4" />
            <span>Online Store Growth</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Spanish eCommerce SEO Solutions
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Spain's growing eCommerce market provides opportunities for online retailers selling products across different industries. UDMIDEAS provides Spanish eCommerce SEO solutions to improve product visibility and generate online sales opportunities.
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
            Whether you sell fashion, electronics, furniture, beauty products, home accessories, automotive products, or industrial equipment, we help optimize your online store for Spanish-speaking customers.
          </p>
        </div>
      </section>

      {/* Spanish SMM and PPC Digital Marketing Services */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            Paid Social & Search Advertising
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Spanish SMM and PPC Digital Marketing Services
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            SEO helps businesses develop long-term organic visibility. Social media marketing and PPC provide additional opportunities to reach potential customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2.5 text-base font-bold text-white">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <Share2 className="w-4 h-4" />
              </div>
              <span>Spanish Social Media Marketing (SMM)</span>
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
              <span>Spanish Pay-Per-Click (PPC) Advertising</span>
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
          We create Spanish-language advertising campaigns targeting relevant customers, products, interests, and locations across Spain.
        </p>
      </section>

      {/* How UDMIDEAS Helps Grow Spanish Businesses */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" />
            <span>5-Stage Connected Strategy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How UDMIDEAS Helps Grow Spanish Businesses
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Our approach connects website development, SEO, and digital marketing into one business growth strategy.
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
          Our objective is to help businesses turn digital visibility into meaningful enquiries, customers, and sales.
        </p>
      </section>

      {/* Benefits of Choosing UDMIDEAS & Why Spanish Business Owners Should Choose UDMIDEAS */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Partner Advantages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Benefits of Choosing UDMIDEAS
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
            Why Spanish Business Owners Should Choose UDMIDEAS
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            UDMIDEAS brings 15+ years of experience in website development and digital marketing. We understand that businesses targeting Spain need professional websites, natural Spanish content, reliable technical performance, and marketing strategies that match local customer expectations.
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
            We work with businesses that want a long-term digital growth partner rather than just a website designer or an advertising provider.
          </p>
        </div>
      </section>

      {/* Spanish Industries We Can Work For */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            <span>Industry Support</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Spanish Industries We Can Work For
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

      {/* Frequently Asked Questions: Spanish Business Owners */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Common Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions: Spanish Business Owners
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

      {/* Grow Your Business in Spain with UDMIDEAS */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 space-y-6 shadow-xl">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Get Started</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Grow Your Business in Spain with UDMIDEAS
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Spain offers significant opportunities for companies investing in professional websites, Spanish SEO, eCommerce optimization, and digital advertising. Whether you operate a local service business, manufacturing company, professional organization, or online store, your digital presence plays an important role in attracting customers and generating sales.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS helps Spanish business owners build professional websites, improve organic search visibility, promote products, generate leads, and develop long-term digital growth strategies.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <div className="font-bold text-white text-base">
              Let's build your website, improve your Spanish search visibility, and grow your business across Spain.
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
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20discuss%20Spanish%20website%20development%20and%20SEO%20for%20Spain."
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
