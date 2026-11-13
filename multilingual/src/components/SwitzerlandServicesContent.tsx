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

export const SwitzerlandServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const swissLanguages = [
    { label: 'German', native: 'Deutsch' },
    { label: 'French', native: 'Français' },
    { label: 'Italian', native: 'Italiano' },
    { label: 'Romansh', native: 'Rumantsch' }
  ];

  const swissStats = [
    { indicator: "Switzerland's population (2025)", stat: 'Approximately 9.1 million' },
    { indicator: 'National languages', stat: '4' },
    { indicator: 'Cantons', stat: '26' },
    { indicator: 'Internet adoption', stat: 'More than 95%' },
    { indicator: 'eCommerce market', stat: 'Multi-billion CHF annual market' },
    { indicator: 'Major digital markets', stat: 'Retail, finance, tourism, healthcare and services' }
  ];

  const fourLangOpp = [
    {
      language: 'German',
      regions: 'Zurich, Bern, Basel, Lucerne, St. Gallen',
      opportunity: 'German-language SEO and eCommerce'
    },
    {
      language: 'French',
      regions: 'Geneva, Vaud, Neuchâtel, Jura',
      opportunity: 'French SEO and digital marketing'
    },
    {
      language: 'Italian',
      regions: 'Ticino and southern Graubünden',
      opportunity: 'Italian-language websites and SEO'
    },
    {
      language: 'Romansh',
      regions: 'Graubünden',
      opportunity: 'Regional content and local SEO'
    }
  ];

  const futureDevelopments = [
    {
      title: '1. Multilingual SEO',
      desc: 'Businesses will need search strategies for German, French, Italian, and Romansh-speaking audiences.'
    },
    {
      title: '2. eCommerce expansion',
      desc: 'Online shopping and cross-border retail will create opportunities for Swiss online stores.'
    },
    {
      title: '3. AI-powered search',
      desc: 'AEO and GEO will become increasingly relevant as customers discover businesses through conversational search and answer platforms.'
    },
    {
      title: '4. Local SEO',
      desc: 'Location-based search, Google Business Profiles, and customer reviews will remain important.'
    },
    {
      title: '5. Video marketing',
      desc: 'Multilingual promotional videos and product demonstrations can help businesses connect with different audiences.'
    },
    {
      title: '6. International expansion',
      desc: 'Swiss companies can reach customers in Germany, France, Italy, Austria, and other European markets.'
    },
    {
      title: '7. Mobile-first development',
      desc: 'Fast, responsive multilingual websites will remain important for online customer acquisition.'
    }
  ];

  const cantons = [
    { canton: 'Zurich (Zürich)', capital: 'Zurich', lang: 'German' },
    { canton: 'Bern (Bern)', capital: 'Bern', lang: 'German / French' },
    { canton: 'Lucerne (Luzern)', capital: 'Lucerne', lang: 'German' },
    { canton: 'Uri', capital: 'Altdorf', lang: 'German' },
    { canton: 'Schwyz', capital: 'Schwyz', lang: 'German' },
    { canton: 'Obwalden', capital: 'Sarnen', lang: 'German' },
    { canton: 'Nidwalden', capital: 'Stans', lang: 'German' },
    { canton: 'Glarus', capital: 'Glarus', lang: 'German' },
    { canton: 'Zug', capital: 'Zug', lang: 'German' },
    { canton: 'Fribourg (Freiburg)', capital: 'Fribourg', lang: 'French / German' },
    { canton: 'Solothurn', capital: 'Solothurn', lang: 'German' },
    { canton: 'Basel-Stadt', capital: 'Basel', lang: 'German' },
    { canton: 'Basel-Landschaft', capital: 'Liestal', lang: 'German' },
    { canton: 'Schaffhausen', capital: 'Schaffhausen', lang: 'German' },
    { canton: 'Appenzell Ausserrhoden', capital: 'Herisau', lang: 'German' },
    { canton: 'Appenzell Innerrhoden', capital: 'Appenzell', lang: 'German' },
    { canton: 'St. Gallen', capital: 'St. Gallen', lang: 'German' },
    { canton: 'Graubünden (Grisons)', capital: 'Chur', lang: 'German / Romansh / Italian' },
    { canton: 'Aargau', capital: 'Aarau', lang: 'German' },
    { canton: 'Thurgau', capital: 'Frauenfeld', lang: 'German' },
    { canton: 'Ticino (Tessin)', capital: 'Bellinzona', lang: 'Italian' },
    { canton: 'Vaud (Waadt)', capital: 'Lausanne', lang: 'French' },
    { canton: 'Valais (Wallis)', capital: 'Sion', lang: 'French / German' },
    { canton: 'Neuchâtel', capital: 'Neuchâtel', lang: 'French' },
    { canton: 'Geneva (Genève)', capital: 'Geneva', lang: 'French' },
    { canton: 'Jura', capital: 'Delémont', lang: 'French' }
  ];

  const servicesPricingRows = [
    {
      service: 'Multilingual Website Design',
      provides: 'German, French, Italian and Romansh websites',
      pricing: 'From $500'
    },
    {
      service: 'Custom Website Development',
      provides: 'Custom-coded multilingual websites',
      pricing: 'From $500'
    },
    {
      service: 'German SEO',
      provides: 'German-language keyword and website optimization',
      pricing: 'Custom quotation'
    },
    {
      service: 'French SEO',
      provides: 'French-language keyword and website optimization',
      pricing: 'Custom quotation'
    },
    {
      service: 'Italian SEO',
      provides: 'Italian-language keyword and website optimization',
      pricing: 'Custom quotation'
    },
    {
      service: 'Romansh SEO',
      provides: 'Romansh regional content and SEO',
      pricing: 'Custom quotation'
    },
    {
      service: 'Multilingual eCommerce SEO',
      provides: 'Product and category optimization in four languages',
      pricing: 'Custom quotation'
    },
    {
      service: 'Multilingual SMM',
      provides: 'Social media content and campaign management',
      pricing: 'Custom quotation'
    },
    {
      service: 'Multilingual PPC',
      provides: 'Google Ads and paid advertising campaigns',
      pricing: 'Custom quotation'
    }
  ];

  const devServices = [
    'German-language business websites.',
    'French-language corporate websites.',
    'Italian-language service websites.',
    'Romansh-language regional websites.',
    'Multilingual website architecture.',
    'Custom-coded website development.',
    'Responsive mobile-friendly design.',
    'Custom landing pages.',
    'eCommerce website development.',
    'Website speed optimization.',
    'SEO-friendly website structure.',
    'Contact forms and enquiry systems.',
    'Website maintenance and technical support.'
  ];

  const multilingualSeoServices = [
    'German keyword research and optimization.',
    'French keyword research and optimization.',
    'Italian keyword research and optimization.',
    'Romansh keyword research where relevant.',
    'Language-specific website content.',
    'Technical SEO and multilingual architecture.',
    'Hreflang implementation.',
    'SEO titles and meta descriptions.',
    'Internal linking and website structure.',
    'Local SEO and Google Business Profile.',
    'Multilingual blog content.',
    'Quality backlink building.',
    'Schema markup and structured data.',
    'Google Search Console monitoring.',
    'AEO and GEO optimization.'
  ];

  const urlStructure = [
    { lang: 'German', url: 'example.com/de/' },
    { lang: 'French', url: 'example.com/fr/' },
    { lang: 'Italian', url: 'example.com/it/' },
    { lang: 'Romansh', url: 'example.com/rm/' }
  ];

  const ecommerceSeoServices = [
    'German product descriptions and keyword optimization.',
    'French product descriptions and keyword optimization.',
    'Italian product descriptions and keyword optimization.',
    'Romansh product content for relevant local markets.',
    'Product and category page optimization.',
    'Technical eCommerce SEO.',
    'Product image optimization.',
    'Duplicate content management.',
    'Product schema and review schema.',
    'Multilingual internal linking.',
    'Shopping-related blog content.',
    'Conversion-focused landing pages.'
  ];

  const smmItems = [
    'German Facebook and Instagram marketing.',
    'French social media marketing.',
    'Italian social media marketing.',
    'Romansh regional social media content.',
    'Multilingual graphics and video creation.',
    'Brand awareness campaigns.',
    'Social media page management.',
    'Audience engagement and promotion.'
  ];

  const ppcItems = [
    'German Google Ads campaigns.',
    'French Google Ads campaigns.',
    'Italian Google Ads campaigns.',
    'Romansh campaigns where suitable audiences and demand exist.',
    'Google Shopping campaigns.',
    'Lead generation campaigns.',
    'eCommerce sales campaigns.',
    'Remarketing and retargeting.',
    'Conversion tracking and optimization.'
  ];

  const growthSteps = [
    {
      step: '1. Business research',
      desc: 'Understand your industry, products, services, competitors, and target language regions.'
    },
    {
      step: '2. Multilingual website development',
      desc: 'Create German, French, Italian, and Romansh website versions.'
    },
    {
      step: '3. SEO optimization',
      desc: 'Target relevant keywords and customer searches in each language.'
    },
    {
      step: '4. Digital promotion',
      desc: 'Run language-specific SMM and PPC campaigns.'
    },
    {
      step: '5. Performance monitoring',
      desc: 'Track rankings, traffic, leads, conversions, and sales.'
    }
  ];

  const benefits = [
    'All four Swiss national languages supported.',
    'Custom-coded website development.',
    'German, French, Italian, and Romansh SEO.',
    'Multilingual eCommerce optimization.',
    'Language-specific social media campaigns.',
    'Google Ads and PPC management.',
    'International SEO opportunities.',
    'Mobile-friendly website development.',
    'Technical SEO and website performance optimization.',
    'One digital marketing partner for multiple services.'
  ];

  const strengths = [
    '1. Experience in international website development.',
    '2. Custom-coded website solutions.',
    '3. Four-language SEO capabilities.',
    '4. Multilingual eCommerce SEO.',
    '5. Technical SEO and website optimization.',
    '6. AEO and GEO strategies.',
    '7. Multilingual SMM and PPC.',
    '8. Integrated website development and marketing services.'
  ];

  const supportedIndustries = [
    { industry: 'Banking & Financial Services', services: 'Website development, SEO' },
    { industry: 'Real Estate', services: 'Multilingual local SEO, PPC' },
    { industry: 'Tourism & Hospitality', services: 'Multilingual websites, SMM' },
    { industry: 'Healthcare', services: 'Website design, local SEO' },
    { industry: 'Manufacturing', services: 'Corporate websites, international SEO' },
    { industry: 'Automotive', services: 'eCommerce SEO, PPC' },
    { industry: 'Fashion & Clothing', services: 'eCommerce SEO, SMM' },
    { industry: 'Electronics', services: 'Product SEO, Google Shopping' },
    { industry: 'Construction', services: 'Local SEO, lead generation' },
    { industry: 'Education', services: 'Website development, SEO' },
    { industry: 'Restaurants', services: 'Local SEO, social media' },
    { industry: 'Professional Services', services: 'Multilingual SEO, PPC' }
  ];

  const faqs = [
    {
      q: '1. Does UDMIDEAS provide website development in all four Swiss languages?',
      a: 'Yes. We provide website design and development supporting German, French, Italian, and Romansh. We can build multilingual websites with separate language sections.'
    },
    {
      q: '2. Can you provide German SEO services for Switzerland?',
      a: 'Yes. We provide German-language SEO targeting Zurich, Bern, Basel, Lucerne, St. Gallen, and other German-speaking areas.'
    },
    {
      q: '3. Do you provide French SEO for Geneva and Lausanne?',
      a: 'Yes. We provide French-language SEO for Geneva, Lausanne, Neuchâtel, Jura, and other French-speaking regions.'
    },
    {
      q: '4. Can you provide Italian SEO for Ticino?',
      a: 'Yes. We offer Italian-language website optimization, keyword research, content marketing, and eCommerce SEO for businesses targeting Ticino.'
    },
    {
      q: '5. Do you support Romansh websites and SEO?',
      a: 'Yes. We can support Romansh website content, regional landing pages, and SEO for businesses targeting Romansh-speaking communities, particularly in Graubünden. Keyword demand and available search data need to be assessed before planning campaigns.'
    },
    {
      q: '6. What is the starting price for a multilingual website?',
      a: 'Our website design and development pricing starts at $500 for qualifying projects. A complete four-language website may require a higher budget depending on the number of pages, content, and functionality.'
    },
    {
      q: '7. Do you provide SEO for multilingual eCommerce websites?',
      a: 'Yes. We optimize product pages, category pages, website architecture, technical SEO, and multilingual content across all four languages.'
    },
    {
      q: '8. Can you manage Facebook, Instagram, and Google Ads in multiple languages?',
      a: "Yes. We provide German, French, Italian, and Romansh marketing solutions according to the campaign's audience and requirements."
    },
    {
      q: '9. Can you target all 26 cantons of Switzerland?',
      a: 'Yes. We can develop canton-specific and city-specific SEO strategies, including multilingual targeting for regions such as Bern, Fribourg, Valais, and Graubünden.'
    },
    {
      q: '10. Why should Swiss businesses choose UDMIDEAS?',
      a: 'UDMIDEAS combines custom website development, multilingual SEO, eCommerce SEO, SMM, and PPC services. Our objective is to help businesses reach customers across different language regions through one coordinated digital marketing strategy.'
    }
  ];

  const ctaProvideItems = [
    'German Website Design & Development.',
    'French Website Design & Development.',
    'Italian Website Design & Development.',
    'Romansh Website Design & Development.',
    'Multilingual SEO and eCommerce SEO.',
    'German, French, Italian and Romansh SMM.',
    'Multilingual Google Ads and PPC.',
    'AEO and GEO optimization.'
  ];

  return (
    <div className="space-y-14 text-left">
      {/* Hero / Page Introduction */}
      <header className="max-w-4xl space-y-4">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>Switzerland 4-Language Web Design, Development & SEO · 15+ Years Experience</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          Switzerland Website Design, Development & SEO Digital Marketing Company | UDMIDEAS
        </h1>

        <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            Switzerland is one of Europe's most attractive markets for businesses looking to establish a professional digital presence, reach international customers, and expand their online sales. With four national languages—German, French, Italian, and Romansh—businesses need multilingual websites and digital marketing strategies to connect with customers across different regions.
          </p>
          <p>
            A website available in the right language can help businesses build customer trust, improve user experience, and reach more potential customers. UDMIDEAS provides multilingual website design and development, SEO, eCommerce SEO, Social Media Marketing (SMM), and Pay-Per-Click (PPC) advertising services for businesses targeting Switzerland.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
          {swissLanguages.map((l) => (
            <div
              key={l.label}
              className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs"
            >
              <div className="font-bold text-white">{l.label}</div>
              <div className="text-emerald-400 font-mono">{l.native}</div>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-sm text-slate-300 leading-relaxed">
          <p>
            Our objective is to help Swiss business owners build professional multilingual websites, improve search engine visibility, attract qualified visitors, generate enquiries, and grow online sales.
          </p>
          <p className="text-slate-400">
            We combine custom-coded website development with multilingual SEO, AEO, GEO, content marketing, social media marketing, and paid advertising.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20multilingual%20website%20design%20and%20SEO%20in%20Switzerland."
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

      {/* Switzerland Digital Market: Statistics and Future Opportunities */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Market Intelligence
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Switzerland Digital Market: Statistics and Future Opportunities
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Switzerland has a highly developed economy, strong internet adoption, and an established online shopping market. Businesses across manufacturing, financial services, tourism, healthcare, retail, and professional services can benefit from a strong digital presence.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl max-w-3xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Digital market indicator</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Market statistics</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {swissStats.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-white">
                    {row.indicator}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400">
                    {row.stat}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed">
          Switzerland's multilingual population creates an opportunity for businesses to reach different language communities through dedicated website experiences.
        </p>

        {/* Four-Language Digital Marketing Opportunity */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xl font-bold text-white">
            Four-Language Digital Marketing Opportunity
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Language</th>
                  <th className="py-3.5 px-4 sm:px-6 text-blue-400">Main target regions</th>
                  <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Business opportunity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {fourLangOpp.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                      {row.language}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                      {row.regions}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-emerald-300">
                      {row.opportunity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Future of Swiss Digital Business: 2027–2030 */}
        <div className="space-y-4 pt-2">
          <div className="max-w-4xl space-y-1.5">
            <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Strategic Horizon</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Future of Swiss Digital Business: 2027–2030
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Several developments are creating opportunities for Swiss companies:
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
            These are strategic opportunities rather than guaranteed numerical forecasts.
          </p>
        </div>
      </section>

      {/* Switzerland Regions and Cantons: SEO Targeting Opportunities */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>26 Cantons · Four National Languages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Switzerland Regions and Cantons: SEO Targeting Opportunities
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Switzerland has 26 cantons. Each canton provides potential opportunities for local SEO, multilingual website development, and regional digital marketing. The following table identifies the cantons, their capitals, and their main language associations. Language use can vary within individual cantons.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Canton / Region</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Capital</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Main language</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {cantons.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.canton}
                  </td>
                  <td className="py-3 px-4 sm:px-6 text-slate-200 whitespace-nowrap">
                    {row.capital}
                  </td>
                  <td className="py-3 px-4 sm:px-6 font-mono text-xs text-emerald-300 whitespace-nowrap">
                    {row.lang}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs sm:text-sm text-blue-200 leading-relaxed">
          <strong>Important:</strong> Romansh is primarily spoken in parts of Graubünden. Switzerland's language boundaries are not identical to canton boundaries. Bern, Fribourg, Valais, and Graubünden have multilingual areas.
        </div>
      </section>

      {/* Our Website Design and Digital Marketing Services in Switzerland */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Integrated Solutions & Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Our Website Design and Digital Marketing Services in Switzerland
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            UDMIDEAS offers multilingual digital solutions for Swiss businesses that want to reach customers in different language regions.
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
          Website development starts at $500 for qualifying projects. Final costs depend on languages, pages, functionality, and project scope. SEO, SMM, PPC management and advertising budgets are quoted separately.
        </div>
      </section>

      {/* German, French, Italian and Romansh Website Design and Development */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            <span>Custom Multilingual Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            German, French, Italian and Romansh Website Design and Development
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            A multilingual website allows Swiss businesses to communicate with customers in their preferred language. UDMIDEAS designs and develops websites supporting all four Swiss national languages.
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
            Our goal is to create websites where visitors can easily switch languages and access relevant information without confusion.
          </p>
        </div>
      </section>

      {/* Multilingual SEO Services for Switzerland */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>Organic Multilingual Search</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Multilingual SEO Services for Switzerland
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            SEO in Switzerland requires a different approach from SEO in countries that primarily use one language. A business targeting Zurich may need German SEO, while a company targeting Geneva may need French SEO. Businesses operating across Switzerland may benefit from separate language-specific website sections.
          </p>
          <p className="text-sm font-semibold text-white">
            Our multilingual SEO services include:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {multilingualSeoServices.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3 max-w-xl pt-2">
          <h3 className="text-sm font-bold text-white">We recommend separate language URLs, such as:</h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3 px-4 sm:px-6">Language</th>
                  <th className="py-3 px-4 sm:px-6 text-emerald-400">Example URL structure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {urlStructure.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-bold text-white">{row.lang}</td>
                    <td className="py-3 px-4 sm:px-6 font-mono text-emerald-400">{row.url}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            This structure helps organize multilingual content and supports search engines in understanding the language and intended audience of each page.
          </p>
        </div>
      </section>

      {/* Multilingual eCommerce SEO Solutions */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <ShoppingCart className="w-4 h-4" />
            <span>Online Store Growth</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Multilingual eCommerce SEO Solutions
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Switzerland's online retail market offers opportunities for businesses selling products across different language regions. UDMIDEAS provides multilingual eCommerce SEO solutions for online stores.
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
            We support WooCommerce, Magento, Shopify, and custom eCommerce development platforms.
          </p>
          <p className="text-slate-400">
            Whether you sell electronics, fashion, furniture, cosmetics, automotive products, home accessories, or industrial equipment, our objective is to improve product visibility and generate more sales opportunities.
          </p>
        </div>
      </section>

      {/* German, French, Italian and Romansh SMM and PPC Services */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            Paid Social & Search Advertising
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            German, French, Italian and Romansh SMM and PPC Services
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Businesses can reach different Swiss language communities through targeted social media and paid advertising campaigns.
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
              <span>Pay-Per-Click (PPC) Advertising</span>
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
          Our advertising strategies consider language, location, customer interests, search intent, and business objectives.
        </p>
      </section>

      {/* How UDMIDEAS Helps Grow Swiss Businesses */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" />
            <span>5-Stage Connected Strategy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How UDMIDEAS Helps Grow Swiss Businesses
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            We connect website development, multilingual SEO, and digital advertising into one digital growth strategy.
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
          Our focus is to help businesses attract customers across Switzerland rather than limiting their online presence to one language community.
        </p>
      </section>

      {/* Benefits of Choosing UDMIDEAS & Why Swiss Business Owners Should Choose UDMIDEAS */}
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
            Why Swiss Business Owners Should Choose UDMIDEAS
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            UDMIDEAS brings 15+ years of experience in website development and digital marketing, working with international clients across different countries. We understand that Switzerland requires a multilingual digital strategy. Simply translating one website into four languages is not enough. Each language version needs relevant keywords, appropriate content, regional targeting, and a consistent user experience.
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
            We aim to provide a coordinated digital solution for companies that want to reach customers across different Swiss regions.
          </p>
        </div>
      </section>

      {/* Swiss Industries We Can Work For */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            <span>Industry Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Swiss Industries We Can Work For
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

      {/* Frequently Asked Questions: Swiss Business Owners */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Common Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions: Swiss Business Owners
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

      {/* Grow Your Business Across Switzerland with UDMIDEAS */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 space-y-6 shadow-xl">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Get Started</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Grow Your Business Across Switzerland with UDMIDEAS
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Switzerland offers an important opportunity for companies that want to expand their digital presence across multiple language communities. A business targeting only German-speaking customers may miss opportunities in French-speaking Geneva, Italian-speaking Ticino, and Romansh-speaking communities in Graubünden. With a multilingual website and a well-planned digital marketing strategy, businesses can reach a wider audience and create more opportunities for customer acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {ctaProvideItems.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2 text-xs text-slate-200"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-slate-300">
          Whether you are a startup, local service provider, manufacturing company, professional organization, or eCommerce business, we can help develop your digital growth strategy.
        </p>

        <div className="pt-4 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <div className="font-bold text-white text-base">
              Let's build your multilingual website, improve your search visibility, and grow your business across Switzerland.
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
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20discuss%20multilingual%20website%20development%20and%20SEO%20for%20Switzerland."
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
