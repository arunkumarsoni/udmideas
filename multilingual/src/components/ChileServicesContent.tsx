import React, { useState } from 'react';
import {
  Globe2,
  Code2,
  Search,
  Share2,
  MousePointerClick,
  Bot,
  MapPin,
  CheckCircle2,
  Smartphone,
  MessageCircle,
  Mail,
  Clock,
  Sparkles,
  TrendingUp,
  Layers,
  Building2,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  AlertTriangle,
  FileCheck,
  Cpu,
  BarChart3,
  Users,
  Compass,
  CalendarCheck
} from 'lucide-react';

export const ChileServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const services = [
    {
      title: 'Multilingual Web Design & Development',
      desc: 'Fast, mobile-first sites custom coded in React JS in Spanish, English, and more. Clean code, sub-second load times, and zero template bloat.',
      icon: Code2
    },
    {
      title: 'Multilingual SEO',
      desc: 'Deep keyword research, reciprocal hreflang tags setup, and localized content in each language so global buyers find you in their search language.',
      icon: Globe2
    },
    {
      title: 'Spanish SEO (SEO en Español)',
      desc: 'High-intent posicionamiento web tuned for Chilean search queries, colloquial phrasing, and regional commercial intent across Santiago and beyond.',
      icon: Search
    },
    {
      title: 'PPC and SMM (Paid Ads & Social Media)',
      desc: 'High-ROAS Google Ads, Meta Ads (Instagram/Facebook), and full social media community management with localized Spanish messaging.',
      icon: MousePointerClick
    },
    {
      title: 'AEO and GEO (AI Search Engine Optimization)',
      desc: 'Entity structuring and direct-answer formatting so your brand is quoted and recommended by Google AI Overviews, ChatGPT, Gemini, and Perplexity.',
      icon: Bot
    }
  ];

  const comparisonTable = [
    {
      factor: 'Main goal',
      seo: 'Long-term organic rankings',
      smm: 'Brand reach and engagement',
      ppc: 'Instant paid visits'
    },
    {
      factor: 'Time to results',
      seo: '3 to 6 months',
      smm: '1 to 3 months',
      ppc: 'Days'
    },
    {
      factor: 'Cost per click',
      seo: 'Free once ranked',
      smm: 'Low to medium',
      ppc: 'Paid every click'
    },
    {
      factor: 'Lasting value',
      seo: 'High, compounds',
      smm: 'Medium',
      ppc: 'Stops when budget stops'
    },
    {
      factor: 'Best for',
      seo: 'Steady lead generation',
      smm: 'Awareness and community',
      ppc: 'Launches and offers'
    }
  ];

  const whyHireUs = [
    {
      title: '1. Proven Expertise',
      desc: 'Arun brings 15+ years of hands-on international SEO experience directing technical crawl structures, code audits, and ranking growth.',
      stat: '15+ Years Track Record with Founder Arun',
      icon: ShieldCheck
    },
    {
      title: '2. One Accountable Partner',
      desc: 'Website design, React JS development, SEO, PPC, and SMM are handled by one unified team under one lead without agency finger-pointing.',
      stat: 'Full-Stack Web & Search Architecture',
      icon: Layers
    },
    {
      title: '3. Mobile-First Engineering',
      desc: '95.3% of Chilean internet users go online by mobile, so every site we engineer is built for phones first with sub-second Core Web Vitals.',
      stat: '95.3% Mobile Internet Penetration',
      icon: Smartphone
    },
    {
      title: '4. Transparent Reporting',
      desc: 'You see real rankings, organic traffic, and qualified leads in clear monthly dashboards, not vanity metrics or vague promises.',
      stat: 'US$10B+ Chilean eCommerce Market',
      icon: BarChart3
    }
  ];

  const industries = [
    {
      name: 'Dental Clinics & Healthcare',
      desc: 'Local Chilean patient appointment funnels, medical doctor schema, and localized treatment searches.'
    },
    {
      name: 'Mining Suppliers & Industrial',
      desc: 'Heavy machinery and supplier B2B portals for Antofagasta, Calama, and northern Chilean industrial hubs.'
    },
    {
      name: 'Retail & eCommerce Brands',
      desc: 'High-speed online shopping catalogs with local payment gateways (Webpay, Transbank, MercadoPago) and Google Shopping feeds.'
    },
    {
      name: 'Tourism, Hotels & Hospitality',
      desc: 'Multilingual reservation engines capturing international travelers heading to Patagonia, Atacama, and Viña del Mar.'
    },
    {
      name: 'Wineries & Vineyard Exports',
      desc: 'Prestigious bilingual brand portfolios and export catalogs reaching distributors across North America, Europe, and Asia.'
    },
    {
      name: 'Startups & Professional Services',
      desc: 'High-converting SaaS, legal, and financial platforms in Santiago with clean enterprise credibility.'
    }
  ];

  const roadmap = [
    {
      period: 'Months 1 to 2',
      focus: 'Audit, Spanish keyword research, React JS site fixes',
      outcome: 'Clean technical base'
    },
    {
      period: 'Months 3 to 4',
      focus: 'Content, local SEO, AEO and GEO setup',
      outcome: 'Rankings begin to rise'
    },
    {
      period: 'Months 5 to 6',
      focus: 'Link building, conversion tuning',
      outcome: 'More qualified leads'
    },
    {
      period: '2027',
      focus: 'Scale to new languages and regions',
      outcome: 'Compounding organic growth'
    }
  ];

  const regions = [
    {
      region: 'Región Metropolitana',
      city: 'Santiago',
      industries: 'Retail, services, clinics, startups'
    },
    {
      region: 'Valparaíso',
      city: 'Valparaíso, Viña del Mar',
      industries: 'Tourism, ports, hospitality'
    },
    {
      region: 'Biobío',
      city: 'Concepción',
      industries: 'Manufacturing, education, forestry'
    },
    {
      region: 'Antofagasta',
      city: 'Antofagasta, Calama',
      industries: 'Mining suppliers, logistics'
    },
    {
      region: 'La Araucanía',
      city: 'Temuco',
      industries: 'Agriculture, tourism, retail'
    },
    {
      region: 'Coquimbo',
      city: 'La Serena',
      industries: 'Tourism, agriculture, real estate'
    },
    {
      region: 'Los Lagos',
      city: 'Puerto Montt',
      industries: 'Aquaculture, tourism, exports'
    },
    {
      region: 'Magallanes',
      city: 'Punta Arenas',
      industries: 'Tourism, energy, services'
    }
  ];

  const faqs = [
    {
      q: 'How long does SEO take to work in Chile?',
      a: 'Most Chile websites see ranking movement in 3 to 6 months, depending on competition, content and technical health.'
    },
    {
      q: 'What is multilingual SEO?',
      a: 'Multilingual SEO optimizes a website for several languages using separate keyword research, translated content and hreflang tags, so each audience finds the right version.'
    },
    {
      q: 'Do you build websites in React JS?',
      a: 'Yes. We custom code fast, SEO-friendly React JS websites for every business industry.'
    },
    {
      q: 'Can you do Spanish SEO for my business?',
      a: 'Yes. We research Chilean Spanish keywords, write local content and optimize your Google Business Profile.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* 1. Header & Market Introduction */}
      <section className="space-y-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold mb-3">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Chile Web Design, Development, Spanish SEO & Marketing · 15+ Years Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Chile Multilingual Web Design, Development, Spanish SEO & Digital Marketing Services
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              Chile multilingual web design, development, SEO and digital marketing services help your business win customers who search in Spanish, English and other languages. UDMIDEAS delivers all of them under one roof, led by Arun, an SEO specialist with 15+ years of experience.
            </p>
            <p>
              The opportunity is large. Chile has <strong className="text-white font-semibold">18.8 million internet users</strong>, representing a <strong className="text-emerald-400 font-semibold">94.5% penetration rate</strong> (DataReportal, October 2025), and <strong className="text-white font-semibold">91.9% of them use search engines every month</strong> (Statista, Q2 2025). If your site does not rank in Spanish, those buyers never see you.
            </p>
            <p className="text-slate-400">
              This guide shows what we provide, how SEO, SMM and PPC differ, and how to start getting results.
            </p>
          </div>
        </div>

        {/* Quick Chile Market Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-2xl font-extrabold text-emerald-400 font-mono">18.8M</div>
            <div className="text-[11px] text-slate-400 mt-1">Internet Users (94.5% Penetration)</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-2xl font-extrabold text-blue-400 font-mono">91.9%</div>
            <div className="text-[11px] text-slate-400 mt-1">Monthly Search Engine Usage</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-2xl font-extrabold text-purple-400 font-mono">95.3%</div>
            <div className="text-[11px] text-slate-400 mt-1">Mobile Internet Connections</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-2xl font-extrabold text-amber-400 font-mono">US$10B+</div>
            <div className="text-[11px] text-slate-400 mt-1">Chilean eCommerce Volume</div>
          </div>
        </div>
      </section>

      {/* 2. Services We Provide for Chile Businesses */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            End-to-End Growth Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Services We Provide for Chile Businesses
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            We are a multilingual digital marketing company covering the full growth path, from website to ranking to leads:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 text-base font-bold text-white mb-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{svc.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. SEO vs SMM vs PPC Comparison */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Channel Strategy & Economics
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SEO vs SMM vs PPC: Which Service Fits Your Chile Business?
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            SEO builds lasting organic traffic, SMM builds audience and trust, and PPC buys immediate clicks. BrightEdge research found <strong className="text-emerald-400 font-semibold">organic search drives 53% of trackable website traffic</strong>, paid search <strong className="text-blue-400 font-semibold">15%</strong> and organic social <strong className="text-purple-400 font-semibold">5%</strong>.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Factor</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">SEO</th>
                <th className="py-3.5 px-4 sm:px-6 text-purple-400">SMM</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">PPC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {comparisonTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.factor}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200 text-xs">
                    {row.seo}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300 text-xs">
                    {row.smm}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300 text-xs">
                    {row.ppc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Most Chile businesses get the best return</strong> by combining SEO as the solid base with PPC for quick wins and SMM for brand community and social trust.
        </div>
      </section>

      {/* 4. Why Chile Business Owners Hire UDMIDEAS */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
            Proven Competitive Edge
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Chile Business Owners Hire UDMIDEAS
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Chile's online market is growing fast, and language decides who wins it. Chilean e-commerce passed <strong className="text-white font-semibold">US$10 billion in 2025</strong>, and online sales grew <strong className="text-emerald-400 font-semibold">12.3% in the first half of 2026</strong>. Meanwhile, CSA Research found that <strong className="text-white font-semibold">76% of shoppers prefer product information in their own language</strong> and <strong className="text-white font-semibold">40% will not buy from sites in other languages</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whyHireUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 text-base font-bold text-white mb-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/60 text-[11px] font-mono text-emerald-400 font-semibold">
                  ✓ {item.stat}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Custom React JS Websites for Every Business Industry */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Custom Web Engineering
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Custom React JS Websites for Every Business Industry
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            We design and develop websites for every industry, from dental clinics and mining suppliers to retail, tourism and wineries. Each site is custom coded in React JS, so it loads fast, scales easily and avoids heavy template plugins. We add server-side rendering, clean URLs, structured data and hreflang tags so Google can crawl every language version.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-2"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{ind.name}</span>
              </div>
              <p className="text-xs text-slate-400 pl-6 leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Spanish Website SEO (SEO en Español) */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-blue-900/40 space-y-6 shadow-xl">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Search className="w-4 h-4 text-blue-400" />
            Native Linguistic Strategy
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Spanish Website SEO (SEO en Español)
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            <strong className="text-white font-semibold">A translated website is not a ranking website.</strong> Our Spanish SEO covers the complete linguistic and technical spectrum:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
            <div className="text-xs font-mono text-emerald-400 font-semibold uppercase">Keyword Mapping</div>
            <div className="font-bold text-white text-sm">Chilean Search Terms</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Researching genuine high-intent queries like <span className="text-emerald-300 font-mono">"diseño web Santiago"</span> and <span className="text-emerald-300 font-mono">"agencia de marketing digital Chile"</span>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
            <div className="text-xs font-mono text-blue-400 font-semibold uppercase">Editorial Standards</div>
            <div className="font-bold text-white text-sm">Native Spanish Copy</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Native-quality Spanish titles, meta descriptions, localized FAQs, and persuasive commercial conversion copy.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
            <div className="text-xs font-mono text-purple-400 font-semibold uppercase">Geographic Trust</div>
            <div className="font-bold text-white text-sm">Local Chilean SEO</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Google Business Profile optimization, local citations, and regional landing pages across Santiago, Valparaíso, and Biobío.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-blue-950/50 border border-blue-800/60 text-xs text-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span>
            <strong className="text-white">Want your Spanish website to rank?</strong> Contact UDMIDEAS today for a free SEO audit.
          </span>
          <a
            href="#inquiry-form"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shrink-0 transition-all shadow-sm"
          >
            <span>Request Free Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* 7. Six Months of SEO and No Results? */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-950/20 via-slate-900 to-slate-950 border border-amber-800/40 space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            Performance Recovery Diagnostic
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Six Months of SEO and No Results? We Improve Your Ranking
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            <strong className="text-white font-semibold">Example:</strong> A Santiago business pays an agency for six months. The site gets a few blog posts, but rankings stay flat and no leads arrive. Typical causes are a missing Spanish keyword strategy, weak technical SEO, thin content and no AEO or GEO work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
            <div className="w-2 h-2 rounded-full bg-rose-400 mt-1.5 shrink-0" />
            <span>Missing Spanish and Chilean colloquial search intent strategy</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
            <div className="w-2 h-2 rounded-full bg-rose-400 mt-1.5 shrink-0" />
            <span>Weak technical SEO, broken hreflang tags, and slow mobile LCP</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
            <div className="w-2 h-2 rounded-full bg-rose-400 mt-1.5 shrink-0" />
            <span>Thin, automated blog posts with zero buyer conversion value</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
            <div className="w-2 h-2 rounded-full bg-rose-400 mt-1.5 shrink-0" />
            <span>No AEO or GEO entity work, causing AI tools to bypass your company</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          We start with a full audit, fix the technical issues, rebuild the content around real search intent and track every ranking change. If your SEO has stalled, contact UDMIDEAS today.
        </p>
      </section>

      {/* 8. What Are AEO and GEO? */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Artificial Intelligence Search
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            What Are AEO and GEO?
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            <strong className="text-white">AEO (Answer Engine Optimization)</strong> structures your content so search engines can quote it as a direct answer. <strong className="text-white">GEO (Generative Engine Optimization)</strong> makes your brand easier for AI tools such as ChatGPT, Gemini and Perplexity to cite.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            We improve both with FAQ schema, clear definitions, entity-rich copy and consistent business details across the web.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
              <Bot className="w-4 h-4" />
              <span>AEO (Answer Engine Optimization)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Optimizes direct 40–60 word snippet answers, People Also Ask triggers, and featured voice answers for Chilean queries.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>GEO (Generative Engine Optimization)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Establishes authoritative brand citations and entity relations in large language models (LLMs) such as ChatGPT, Gemini, and Perplexity.
            </p>
          </div>
        </div>
      </section>

      {/* 9. How SEO Grows Your Business in 2027 with UDMIDEAS */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Strategic Growth Roadmap
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How SEO Grows Your Business in 2027 with UDMIDEAS
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Demand is still rising. The Santiago Chamber of Commerce expects online sales to approach <strong className="text-white font-semibold">US$10.5 billion by the end of 2026</strong>, and organic search remains the largest traffic channel at 53% of trackable visits. Businesses that start SEO now can hold strong rankings when 2027 demand arrives.
          </p>
          <p className="text-xs text-slate-400 italic">
            Here is the typical roadmap we follow (a planning guide, not a guaranteed result):
          </p>
        </div>

        {/* Roadmap Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Period</th>
                <th className="py-3.5 px-4 sm:px-6">Focus</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Expected Outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {roadmap.map((step, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold font-mono text-white whitespace-nowrap">
                    {step.period}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200 text-xs">
                    {step.focus}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-emerald-400 text-xs whitespace-nowrap">
                    {step.outcome}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 10. Chile Regions Where Business Owners Can Contact Us */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Nationwide Coverage
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Chile Regions Where Business Owners Can Contact Us
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            We work with businesses across Chile, fully online, so distance never slows your project.
          </p>
        </div>

        {/* Regions Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Region</th>
                <th className="py-3.5 px-4 sm:px-6">Key Cities</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Industries We Often Support</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {regions.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.region}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200 text-xs whitespace-nowrap">
                    {row.city}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300 text-xs">
                    {row.industries}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 11. Hire Arun, Your Spanish SEO Expert Near You */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-blue-900/30 shadow-xl space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            Senior Hands-On Search Specialist
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Hire Arun, Your Spanish SEO Expert Near You
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Arun is the founder of UDMIDEAS and has 15+ years of hands-on SEO experience across the USA, Israel, the Gulf, Latin America and Australia. He works remotely with Chilean businesses, so your Spanish SEO expert is one message away, wherever you are.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
            <strong className="text-white block mb-1">Direct Senior Involvement:</strong> No junior account hand-offs; Arun personally audits your site and oversees ranking strategy.
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
            <strong className="text-white block mb-1">Chilean Linguistic Nuances:</strong> Authentic Chilean Spanish keyword research and content tuned for local conversion habits.
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
            <strong className="text-white block mb-1">Convenient Online Meetings:</strong> Consultations scheduled smoothly according to Chile Standard Time (CLT).
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800">
          <p className="text-xs text-slate-300">
            <strong className="text-white">Ready to rank in Chile?</strong> Call or WhatsApp <span className="text-emerald-400 font-mono">+91-9521186150</span>, or visit <span className="text-blue-400">udmideasusa.com</span> to book your free multilingual SEO audit today.
          </p>
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20interested%20in%20Spanish%20SEO%20and%20web%20development%20for%20Chile."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shrink-0 shadow-lg shadow-emerald-950/50"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Arun (+91-9521186150)</span>
          </a>
        </div>
      </section>

      {/* 12. Frequently Asked Questions */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Common Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
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

      {/* 13. Final Contact Action Banner */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 text-center space-y-4 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Book Your Free Multilingual SEO Audit for Chile
        </h2>
        <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Ready to rank in Spanish and grow across Santiago, Valparaíso, and all of Chile? Call <strong className="text-emerald-400 font-mono">+91-9521186150</strong> or send your project inquiry to <strong className="text-blue-400">info@udmideasusa.com</strong>.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20ready%20to%20rank%20in%20Spanish%20and%20grow%20across%20Chile."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/60 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp: +91-9521186150</span>
          </a>
          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all"
          >
            <span>Submit Consultation Form</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
};
