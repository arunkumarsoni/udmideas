import React, { useState } from 'react';
import {
  Globe2,
  TrendingUp,
  BarChart3,
  Search,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  MessageCircle,
  Mail,
  ShieldCheck,
  Code2,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  Cpu,
  Bot,
  Building2,
  MapPin,
  ExternalLink,
  Award
} from 'lucide-react';

export const MultilingualSeoServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const keyStatistics = [
    {
      stat: 'Buyers who prefer product info in their own language',
      figure: '76%',
      source: 'CSA Research',
      meaning: 'A localized, optimized page converts significantly better than an English-only page'
    },
    {
      stat: 'Buyers who never purchase from sites in another language',
      figure: '40%',
      source: 'CSA Research',
      meaning: 'English-only closes the door on almost half of all prospective global buyers'
    },
    {
      stat: 'Website traffic driven by organic search',
      figure: '53%',
      source: 'BrightEdge',
      meaning: 'Organic search remains your single highest-converting inbound traffic source'
    },
    {
      stat: 'Websites that use English as content language',
      figure: 'About 49%',
      source: 'W3Techs',
      meaning: 'Over half the web is non-English, where commercial keyword competition is far lower'
    },
    {
      stat: 'Spanish speakers worldwide',
      figure: '600 Million',
      source: 'Global Demographic Data',
      meaning: 'Massive untapped consumer and commercial demand across LATAM and US Hispanics'
    },
    {
      stat: 'Arabic speakers worldwide',
      figure: '400 Million+',
      source: 'GCC & MENA Census',
      meaning: 'High-purchasing-power Gulf and North African buyers search in Arabic first'
    },
    {
      stat: 'Google share of global search engines',
      figure: 'About 90%',
      source: 'StatCounter',
      meaning: 'One universal algorithm engine across languages, requiring strict technical compliance'
    }
  ];

  const languagesAndMarkets = [
    {
      language: 'French',
      flag: '🇫🇷',
      markets: 'France, Belgium, Switzerland, Canada, North Africa',
      focus: 'Local intent keywords, e-commerce product catalogs, GDPR compliance, and service pages',
      badge: 'European & African Reach'
    },
    {
      language: 'German',
      flag: '🇩🇪',
      markets: 'Germany, Austria, Switzerland (DACH)',
      focus: 'High-intent compound keywords, deep trust signals, Impressum compliance, technical precision',
      badge: 'High Purchasing Power'
    },
    {
      language: 'Spanish',
      flag: '🇪🇸',
      markets: 'Spain, Mexico, Colombia, Argentina, Chile, Peru',
      focus: 'Country-specific vocabulary (es-MX vs es-ES), LATAM link building, and WhatsApp lead funnels',
      badge: '600M Global Audience'
    },
    {
      language: 'Polish',
      flag: '🇵🇱',
      markets: 'Poland and Polish diaspora communities across Europe',
      focus: 'Native content creation, Allegro marketplace synergy, local business directories, Google Maps',
      badge: 'Rapid Central EU Growth'
    },
    {
      language: 'Arabic',
      flag: '🇦🇪',
      markets: 'UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Egypt',
      focus: 'Right-to-left (RTL) code architecture, Modern Standard Arabic SEO, and Gulf-specific local links',
      badge: 'GCC High-Ticket Intent'
    },
    {
      language: 'English',
      flag: '🇺🇸',
      markets: 'USA, UK, Canada, Australia',
      focus: 'High-competition commercial keywords, deep E-E-A-T authority content, and digital PR',
      badge: 'Core Global Benchmark'
    }
  ];

  const commonMistakes = [
    {
      num: '01',
      title: 'Machine translation with no human edit',
      desc: 'Raw automated machine translation creates awkward grammar and unnatural phrasing that instantly destroys visitor trust and flags your pages as low-quality content in Google search algorithms.',
      fix: 'Every sentence is refined by native writers who preserve local commercial tone and dialect nuances.'
    },
    {
      num: '02',
      title: 'Missing or incorrect hreflang tags',
      desc: 'Without exact reciprocal hreflang tags, Google cannot detect which page belongs to which geography, causing duplicate content penalties and showing the wrong language version to searchers.',
      fix: 'We engineer bulletproof, reciprocal hreflang annotations (e.g., es-ES, es-MX, de-DE, de-AT, x-default).'
    },
    {
      num: '03',
      title: 'Translating keyword lists word-for-word',
      desc: 'A direct literal translation of an English keyword rarely matches what native buyers actually type into search bars. Regional idioms, slang, and local product terms get completely missed.',
      fix: 'We run independent native keyword research from scratch in each target market and regional search index.'
    },
    {
      num: '04',
      title: 'Two languages mixed on a single URL',
      desc: 'Mixing English headers with Spanish text or untranslated navigation menus confuses search crawlers, dilutes topical relevance, and triggers browser translation pop-ups that frustrate users.',
      fix: 'Strict 100% monolingual URL hygiene across meta tags, headings, navigation, footers, and schema.'
    },
    {
      num: '05',
      title: 'No local directories, Google Business Profiles or reviews',
      desc: 'A translated website with zero local geographic signals looks like an offshore shadow site. Google local algorithms give preferential visibility to brands with regional citations.',
      fix: 'We build local citations, localized Google Business Profile entries, and native review funnels in each territory.'
    },
    {
      num: '06',
      title: 'Acquiring links in the wrong language or from irrelevant sites',
      desc: 'Pointing generic English links to your French or German pages passes very little linguistic topical authority and looks suspicious to search engine spam algorithms.',
      fix: 'Manual outreach acquiring authoritative country-code top-level domain (.fr, .de, .es, .pl, .ae) backlinks.'
    }
  ];

  const fullStackDeliverables = [
    {
      category: 'On-Page Multilingual SEO',
      icon: Code2,
      color: 'blue',
      bullets: [
        'Keyword research and search intent mapping tailored to each individual language and dialect',
        'Title tags, meta descriptions, and clean H1-to-H3 structure crafted in the target language',
        'hreflang and canonical tags configured strictly according to Google localized versions guidelines',
        'Clean language-specific URL folder hierarchy (e.g., /fr/, /de/, /es/, /ar/, /pl/)',
        'Image alt text, media file names, and image compression optimized for localized search',
        'Schema.org structured data markup (inLanguage annotations), internal linking silos, and Core Web Vitals fixes',
        'Rigorous native human editorial review — zero raw machine translation'
      ]
    },
    {
      category: 'Off-Page Multilingual SEO',
      icon: Globe2,
      color: 'emerald',
      bullets: [
        'Google Business Profile and localized citation building across each target country',
        'Brand mentions and targeted digital PR placements in reputable local and regional media',
        'Country-specific directory listings and regional business chamber registrations',
        'Localized review and reputation management strategies in French, German, Spanish, Polish, and Arabic'
      ]
    },
    {
      category: 'Native Link Building Suite',
      icon: TrendingUp,
      color: 'purple',
      bullets: [
        'Contextual guest articles published on reputable websites within your exact industry and language',
        'Niche edits, contextual editorial insertions, and authoritative resource page links',
        'Targeted country-domain backlinks (.fr, .de, .es, .pl, .ae, .com.mx, .com.co)',
        '100% white-hat manual email outreach — zero link farms, PBNs, or automated spam networks'
      ]
    }
  ];

  const strategyPhases = [
    {
      phase: 'Phase 01',
      timeline: 'Days 1 to 30',
      title: 'Foundation & Technical Architecture',
      tagline: 'Audit, Architecture, Setup & Research',
      color: 'blue',
      items: [
        'Comprehensive technical SEO audit and multi-lingual site crawl to uncover crawl blocks',
        'Market, competitor, and commercial search gap research for each language target',
        'Keyword mapping matrix with commercial search intent for every priority service/product page',
        'hreflang code, XML sitemaps, language subfolder URLs, and canonical tag implementation',
        'Google Search Console multi-property, Google Analytics 4, and multi-country rank tracking setup'
      ]
    },
    {
      phase: 'Phase 02',
      timeline: 'Days 31 to 60',
      title: 'Build & Content Execution',
      tagline: 'Page Optimization, Native Writing & Outreach Launch',
      color: 'emerald',
      items: [
        'Complete on-page optimization of the top 10 priority landing pages in each target language',
        'Publishing native, author-led blog posts, guides, and localized service content',
        'Adding nested schema markup, structured FAQ sections, and contextual internal linking silos',
        'Initiating local citation distribution and Google Business Profile geographic optimizations',
        'Launching personalized, manual white-hat link building outreach across country domains'
      ]
    },
    {
      phase: 'Phase 03',
      timeline: 'Days 61 to 90',
      title: 'Scale & Growth Acceleration',
      tagline: 'Authority Expansion, AI Citations & ROI Reporting',
      color: 'purple',
      items: [
        'Scaling content creation to high-converting long-tail and conversational question keywords',
        'Securing high-authority editorial backlinks and media citations in each target language',
        'Optimizing click-through rates (CTR) on pages generating impressions but sub-optimal clicks',
        'Monitoring keyword ranking gains, organic lead submissions, and generative AI search mentions',
        'Delivering a transparent performance review and establishing the growth roadmap for months 4 to 6'
      ]
    }
  ];

  const seoVsPpcData = [
    {
      factor: 'Cost per click',
      seo: 'Free once you rank — unlimited traffic with zero per-click charges',
      ppc: 'Paid on every click — costs rise continually as rivals bid higher'
    },
    {
      factor: 'Speed to results',
      seo: '3 to 6 months for deep organic ranking positions',
      ppc: 'Immediate — ads show within hours of launch'
    },
    {
      factor: 'Long-term value',
      seo: 'Rankings compound and keep delivering leads month after month',
      ppc: 'Traffic drops to absolute zero the instant ad budget stops'
    },
    {
      factor: 'Buyer trust',
      seo: 'Organic listings earn far greater trust (70%+ of users skip ads)',
      ppc: 'Users recognize sponsored tags and compare cautiously'
    },
    {
      factor: 'Multilingual cost',
      seo: 'Content assets compound in value across languages without extra click fees',
      ppc: 'Every single language requires its own separate daily ad budget'
    },
    {
      factor: 'Monthly cost with UDMIDEAS',
      seo: 'Starting from $500 / month flat transparent retainer',
      ppc: 'High direct ad spend budget PLUS agency management fees'
    },
    {
      factor: 'Best suited for',
      seo: 'Durable, long-term business equity and compounding ROI',
      ppc: 'Short-term promotional campaigns, immediate tests, seasonal sales'
    }
  ];

  const faqs = [
    {
      q: 'What are multilingual SEO services?',
      a: 'Multilingual SEO services optimize your website to rank in several languages through native keyword research, culturally localized content, technical hreflang tags, clean URL structures, and local backlinks. This ensures search engines show the exact right language and country version to each international buyer.'
    },
    {
      q: 'How much do multilingual SEO services cost?',
      a: 'UDMIDEAS multilingual SEO plans start at a flat $500 per month. Final pricing depends on the number of languages, target countries, and page scope, which we confirm transparently after running a free initial audit of your website.'
    },
    {
      q: 'Which languages do you support?',
      a: 'We provide specialized multilingual SEO services across French, German, Spanish, Polish, Arabic, and English. Every campaign is executed by native language specialists with deep knowledge of local search behavior and search engine guidelines.'
    },
    {
      q: 'How long does multilingual SEO take?',
      a: 'Most websites see measurable ranking improvements, indexing corrections, and impression growth within 60 to 90 days. Highly competitive commercial keywords typically establish dominant page-one authority within 4 to 6 months of steady optimization.'
    },
    {
      q: 'Is SEO better than PPC for multilingual growth?',
      a: 'Yes, for long-term growth and sustainable cost per lead. Organic search drives about 53% of all trackable web traffic (versus ~15% for paid ads). With multilingual PPC, you must pay for every single click in every country; with SEO, a ranking French or Arabic page delivers compounding customer inquiries for years.'
    },
    {
      q: 'Do you work with all industries?',
      a: 'Yes. We deliver multilingual SEO for all business industries, including dental clinics, e-commerce stores, real estate agencies, manufacturing and export businesses, legal and financial firms, healthcare practices, education providers, travel operators, and B2B SaaS companies.'
    }
  ];

  const whyChooseUdmideas = [
    {
      title: '15+ Years Hands-On Experience',
      desc: 'Arun, our founder, personally architects strategy, reviews crawl data, and monitors deliverables instead of passing you to junior account reps.'
    },
    {
      title: 'Full-Stack Technical Depth',
      desc: 'Our in-house team combines technical engineers, native writers, developers, and link builders under one roof, fixing code and publishing simultaneously.'
    },
    {
      title: 'Proven Global Authority',
      desc: 'We have built dominant rankings for clients across the USA, Israel, the Gulf region, Latin America, Europe, and Australia.'
    },
    {
      title: 'Strict White-Hat Trust',
      desc: 'Transparent $500/mo pricing, detailed monthly lead and rank reports, and 100% manual outreach with zero spam networks or link schemes.'
    },
    {
      title: 'Universal Industry Expertise',
      desc: 'From Texas dental clinics and luxury jewelers to international SaaS platforms and industrial manufacturers, we adapt to every commercial model.'
    },
    {
      title: 'Engineered for AI Search (AEO & GEO)',
      desc: 'Every page is structured so Google AI Overviews, ChatGPT, Gemini, and Perplexity quote your brand as the authoritative answer in every language.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* 1. Introductory Value & Statistics Section */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>International Search Dominance · 15+ Years Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Multilingual SEO Services Matter: Key Market Statistics
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Language is a trust factor in every sale. When an international prospect searches for your service, staying English-only forfeits massive commercial demand. Competition in French, German, Polish, and Arabic results is often significantly thinner than in English, allowing optimized pages to reach page one faster.
          </p>
        </div>

        {/* Statistics Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Market Metric</th>
                <th className="py-3.5 px-4 sm:px-6">Figure (Approx.)</th>
                <th className="py-3.5 px-4 sm:px-6">Authority Source</th>
                <th className="py-3.5 px-4 sm:px-6">What It Means for Your Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {keyStatistics.map((stat, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-white">
                    {stat.stat}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400 whitespace-nowrap">
                    {stat.figure}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-400 text-xs whitespace-nowrap">
                    {stat.source}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300 text-xs">
                    {stat.meaning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. What Are Multilingual SEO Services? */}
      <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Core Definition & Operating Reality
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            What Are Multilingual SEO Services?
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
            <p>
              Multilingual SEO services optimize a website for search engines in several languages. They encompass native keyword research, culturally localized copywriting, precise hreflang tags, language-specific URL hierarchies, regional link acquisition, and Core Web Vitals technical fixes so that each global audience sees the correct page in search results.
            </p>
            <p>
              <strong className="text-white">Translation alone is not SEO.</strong> A Spanish phrase that ranks in Mexico may be completely unused in Spain or Colombia. Arabic requires right-to-left layout engineering and Gulf dialect awareness. German buyers search with long, precise compound nouns. At UDMIDEAS, we research every market on its own terms rather than relying on automatic plugins that fail algorithmic checks.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Languages and Markets We Cover */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Global Linguistic Coverage
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Languages and Markets We Cover
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            If you run a business and speak one of these languages, you can connect directly with Arun and our engineering team. We deliver custom multilingual SEO for all business industries:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Language</th>
                <th className="py-3.5 px-4 sm:px-6">Main Target Markets</th>
                <th className="py-3.5 px-4 sm:px-6">UDMIDEAS Strategic Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {languagesAndMarkets.map((lang, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    <span className="mr-2">{lang.flag}</span>
                    <span>{lang.language}</span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {lang.markets}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-xs text-slate-300">
                    {lang.focus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Universal Industry Coverage Banner */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
              Universal Cross-Industry Expertise
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We execute multilingual SEO for dental clinics, e-commerce stores, real estate agencies, manufacturing exporters, law firms, healthcare facilities, education providers, tourism brands, and B2B SaaS platforms.
            </p>
          </div>
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20Multilingual%20SEO%20Services."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shrink-0 inline-flex items-center gap-2 shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* 4. Common Multilingual SEO Mistakes We Fix */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4" />
            Critical Technical Pitfalls
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Common Multilingual SEO Mistakes We Fix
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Most businesses lose international organic traffic not because of a bad product, but because of technical and linguistic indexing errors. Fixing these 6 mistakes alone often drives an immediate lift in visibility:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {commonMistakes.map((mistake) => (
            <div
              key={mistake.num}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-rose-400 bg-rose-950/60 px-2.5 py-0.5 rounded border border-rose-900/40">
                  MISTAKE #{mistake.num}
                </span>
                <XCircle className="w-4 h-4 text-rose-400" />
              </div>
              <h3 className="text-base font-bold text-white">
                {mistake.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {mistake.desc}
              </p>
              <div className="pt-2 border-t border-slate-800/80 flex items-start gap-2 text-xs text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="text-slate-300"><strong>UDMIDEAS Solution:</strong> {mistake.fix}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. On-Page, Off-Page and Link Building Deliverables */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Complete Execution Suite
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            On-Page, Off-Page and Link Building: What You Get
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Our multilingual SEO services cover the full stack. Arun and our senior team handle every layer so nothing falls between separate vendors:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fullStackDeliverables.map((col, idx) => {
            const Icon = col.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">
                    {col.category}
                  </h3>
                  <div className="space-y-3">
                    {col.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-slate-400 italic">
          Every single backlink is manually checked for organic traffic, domain trust, and language match before placement. No private blog networks (PBNs) or spam directories.
        </p>
      </section>

      {/* 6. Our 90-Day Multilingual SEO Strategy */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Systematic Roadmap
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Our 90-Day Multilingual SEO Strategy
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            We follow a structured 3-month roadmap that eliminates technical bottlenecks first, builds out native content second, and accelerates link authority third:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strategyPhases.map((phase, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-900/40">
                    {phase.timeline}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">
                    {phase.phase}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {phase.title}
                </h3>
                <div className="text-xs text-blue-400 font-mono mb-4">
                  {phase.tagline}
                </div>
                <div className="space-y-2.5 pt-3 border-t border-slate-850">
                  {phase.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="font-mono text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SEO vs PPC: Why SEO Is the Better Investment */}
      <section className="space-y-4">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
            Capital Allocation & ROI
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SEO vs PPC: Why SEO Is the Better Long-Term Investment
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            PPC buys visits. SEO builds a permanent equity asset. Both can work together, but for multilingual global expansion, SEO delivers dramatically more traffic per dollar over time:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Strategic Factor</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Multilingual SEO (UDMIDEAS)</th>
                <th className="py-3.5 px-4 sm:px-6 text-purple-400">Pay-Per-Click Advertising (PPC)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {seoVsPpcData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.factor}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {row.seo}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300">
                    {row.ppc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            <strong>The economic reality:</strong> Organic search drives approximately <strong className="text-white">53% of all trackable website traffic</strong>, while paid search accounts for roughly 15%. One thoroughly optimized article in Polish or Arabic continues to bring qualified buyers for years without extra media spend. A paid click is gone forever the moment you pause your campaign.
          </p>
          <p className="text-slate-400 text-xs">
            We treat SEO as your primary growth engine, and PPC as an optional high-speed test bed when you want to validate a new international offer quickly.
          </p>
        </div>
      </section>

      {/* 8. The Future of Multilingual SEO: AEO, GEO and AI Search */}
      <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800 space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Bot className="w-4 h-4" />
            AI Search Evolution
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            The Future of Multilingual SEO: AEO, GEO and AI Search
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Search is rapidly expanding from traditional blue links to direct synthesis answers. ChatGPT, Google Gemini, Perplexity, and Google AI Overviews answer queries natively across languages by pulling facts from verified, well-structured, authoritative websites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-2">
            <div className="text-xs font-mono font-bold text-emerald-400">01. AEO (Answer Engine Optimization)</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We structure concise, 40-to-60 word direct answers under explicit question headings in each language so voice devices and AI assistants quote your site.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-2">
            <div className="text-xs font-mono font-bold text-blue-400">02. GEO (Generative Engine Optimization)</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We build entity citations, brand co-occurrences, and industry PR mentions so large language models name your company as an authority.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-2">
            <div className="text-xs font-mono font-bold text-purple-400">03. Cross-Language Entity Consistency</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We keep your brand identity, business address, founder credentials, and service definitions synchronized across all languages in Google Knowledge Graph.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-2">
            <div className="text-xs font-mono font-bold text-amber-400">04. Deep Schema.org Markup</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We implement comprehensive inLanguage Organization, Service, and FAQPage JSON-LD schemas that make machine comprehension effortless.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-2">
            <div className="text-xs font-mono font-bold text-teal-400">05. E-E-A-T Real-World Proof</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Verified author profiles, genuine client case studies, and verified reviews protect your site against automated AI content penalties.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-2">
            <div className="text-xs font-mono font-bold text-rose-400">06. Mobile Voice & Local Search</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Arabic and Spanish voice search queries are expanding rapidly on mobile devices. We capture conversational voice intent in every market.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Multilingual SEO Pricing: $500 Per Month & Regional Connect */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Transparent Retainer
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Multilingual SEO Pricing: $500 Per Month
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Our multilingual SEO plans start at a clear, flat rate of $500 per month. You get senior hands-on leadership from Arun, monthly reporting, and execution across on-page, off-page, and link building without hidden upsells.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Deliverables Card */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 md:col-span-1">
            <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
              What A Typical Month Includes
            </div>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Native keyword research & page metadata optimization</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Localized content creation for priority landing pages</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Manual link building outreach on country-level domains</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Technical Core Web Vitals, hreflang, & crawl fixes</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Comprehensive monthly performance & revenue report</span>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-800">
              <div className="text-2xl font-black text-white">$500 <span className="text-xs font-normal text-slate-400">/ month</span></div>
              <div className="text-[11px] text-slate-500 mt-0.5">Scope tailored to number of languages and target countries</div>
            </div>
          </div>

          {/* LATAM & US Spanish Regional Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 md:col-span-1 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[11px] mb-2">
                <span>🌎 LATAM & US Hispanic</span>
              </div>
              <h3 className="text-base font-bold text-white">
                LATAM Businesses: Connect With Us
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mt-2">
                We work directly with companies in Mexico, Argentina, Colombia, Chile, Peru, and across Central & South America, as well as US businesses wanting to capture 65 million Spanish-speaking domestic buyers. We write in both neutral and country-specific Spanish and acquire local backlinks from regional publishers.
              </p>
            </div>
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20Spanish%20and%20LATAM%20SEO%20Services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold text-center transition-colors block"
            >
              Consult for LATAM Markets →
            </a>
          </div>

          {/* Arabic & GCC Regional Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 md:col-span-1 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 font-mono text-[11px] mb-2">
                <span>🕌 Arabic & Gulf GCC</span>
              </div>
              <h3 className="text-base font-bold text-white">
                Arabic Businesses: Connect With Us
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mt-2">
                Arabic-speaking business owners in the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Egypt can contact us directly. We engineer proper right-to-left (RTL) code layouts, Arabic keyword research, and Gulf-focused local SEO that commands high purchasing intent.
              </p>
            </div>
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20Arabic%20and%20GCC%20SEO%20Services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold text-center transition-colors block"
            >
              Consult for Arabic Markets →
            </a>
          </div>
        </div>
      </section>

      {/* 10. Why Choose UDMIDEAS for Multilingual SEO Services */}
      <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Proven Competitive Edge
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Choose UDMIDEAS for Multilingual SEO Services
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our team includes senior technical specialists, native copywriters, front-end developers, and link builders working side by side. That cohesion allows us to audit and repair technical crawl issues while simultaneously drafting native content, cutting months off the timeline to rank:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whyChooseUdmideas.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-1">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{item.title}</span>
              </h4>
              <p className="text-xs text-slate-300 pl-6 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ Accordion Section */}
      <section className="space-y-4">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Direct Answers
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Multilingual SEO Services FAQ
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-850/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-blue-400 shrink-0 mt-0.5">
                      Q{String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <div className="text-slate-400 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pt-1 sm:px-5 sm:pb-6 border-t border-slate-850/60 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p className="pl-7">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 12. Contact UDMIDEAS Today (Final CTA) */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-950/60 via-slate-900 to-emerald-950/40 border border-blue-500/30 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Clock className="w-3.5 h-3.5" />
          <span>Plans Starting at $500 / Month</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
          Contact UDMIDEAS Today: Rank in Your Customers' Language
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Ready to expand your digital footprint across France, Germany, Latin America, Poland, the Gulf, and North America? Partner with Arun and the senior UDMIDEAS team for multilingual SEO services from $500 per month.
        </p>

        <p className="text-sm font-bold text-white">
          Direct Line & WhatsApp: <span className="text-emerald-400 font-mono">+91-9521186150</span> · Email: <span className="text-blue-400 font-mono">soni9999arun9999@gmail.com</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20ready%20to%20start%20Multilingual%20SEO%20Services%20with%20UDMIDEAS."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-950/60 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Arun Now (+91-9521186150)</span>
          </a>

          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-950/60 transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Request Multilingual SEO Audit</span>
          </a>
        </div>
      </section>
    </div>
  );
};
