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
  Users
} from 'lucide-react';

export const ColombiaServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const services = [
    {
      title: 'Custom React JS Website Development',
      desc: 'Fast, secure sites coded from scratch, never a template. Engineered with sub-second loading, zero plugin bloat, and clean crawlable code.',
      icon: Code2
    },
    {
      title: 'Multilingual SEO',
      desc: 'Spanish, English and Portuguese keyword research, reciprocal hreflang tags, and localized metadata that rank in Google, Bing, and AI search.',
      icon: Globe2
    },
    {
      title: 'Spanish SEO & Spanish Websites',
      desc: 'Pages written natively in Spanish for Colombian search intent, colloquial phrasing, and regional buyer habits across major metro hubs.',
      icon: Search
    },
    {
      title: 'Multilingual Digital Marketing',
      desc: 'High-ROAS Google Ads (PPC), social media marketing (SMM), and content calendars in every language your business sells in.',
      icon: MousePointerClick
    },
    {
      title: 'AEO and GEO (AI Search Optimization)',
      desc: 'Answer-first content, FAQ schema, and entity data that Google AI Overviews, ChatGPT, Gemini, and Perplexity can cite and recommend.',
      icon: Bot
    },
    {
      title: 'Local & Technical SEO',
      desc: 'Flawless Core Web Vitals, JSON-LD schema markup, and optimized Google Business Profile presence for each Colombian city.',
      icon: Layers
    }
  ];

  const comparisonTable = [
    {
      factor: 'Main goal',
      seo: 'Rank on Google and AI answers',
      smm: 'Build audience and trust',
      ppc: 'Get leads immediately'
    },
    {
      factor: 'Time to results',
      seo: '3 to 6 months',
      smm: '1 to 3 months',
      ppc: 'Days'
    },
    {
      factor: 'Cost model',
      seo: 'Monthly retainer, no cost per click',
      smm: 'Retainer plus ad spend',
      ppc: 'Pay for every click'
    },
    {
      factor: 'Longevity',
      seo: 'Compounds for years',
      smm: 'Depends on posting',
      ppc: 'Stops when budget stops'
    },
    {
      factor: 'Search intent',
      seo: 'High, buyers are searching',
      smm: 'Low to medium, browsing',
      ppc: 'High, but paid'
    },
    {
      factor: 'Best for',
      seo: 'Long-term growth, local and multilingual reach',
      smm: 'Brand awareness, retail, food, tourism',
      ppc: 'Launches, offers, urgent leads'
    },
    {
      factor: 'What UDMIDEAS delivers',
      seo: 'Spanish SEO, technical SEO, AEO, GEO',
      smm: 'Content calendars, Instagram, Facebook, TikTok',
      ppc: 'Google Ads, Meta Ads, landing pages in Spanish'
    }
  ];

  const whyHireUs = [
    {
      title: '1. Language-First Strategy',
      desc: 'We plan Spanish, Portuguese and English pages separately, so each ranks for how locals actually search rather than broken automated translations.',
      stat: '630M+ Spanish speakers worldwide (520M native)',
      icon: Globe2
    },
    {
      title: '2. High Customer Retention',
      desc: 'CSA Research found 75% of buyers are more likely to repurchase when customer support and website content are in their language.',
      stat: '76% prefer products in native language',
      icon: Users
    },
    {
      title: '3. One Accountable Team',
      desc: 'Design, development, SEO, and ads sit under one lead. No agency blames another for slow pages, dropped rankings, or low ad conversions.',
      stat: '15+ Years Track Record with Founder Arun',
      icon: ShieldCheck
    },
    {
      title: '4. Mobile Speed Engineering',
      desc: '96.5% of Colombian internet users go online by phone (Byyd, citing DataReportal), so every site we build is strictly mobile-first with sub-second speeds.',
      stat: '44.0M Colombian social media identities',
      icon: Smartphone
    }
  ];

  const industries = [
    {
      name: 'Dental clinics and healthcare practices',
      desc: 'HIPAA & patient-trust medical architectures with local appointment funnels and verified doctor schema.'
    },
    {
      name: 'Real estate and construction companies',
      desc: 'Property development portals, bilingual project showcases, and local Colombian city keyword clusters.'
    },
    {
      name: 'Ecommerce and retail stores',
      desc: 'High-speed custom product catalogs, local payment gateway integrations (PayU, MercadoPago), and Shopping feeds.'
    },
    {
      name: 'Law, finance and consulting firms',
      desc: 'Authoritative B2B corporate platforms with E-E-A-T credentials, case study hubs, and executive lead generation.'
    },
    {
      name: 'Tourism, hotels and restaurants',
      desc: 'Multilingual booking funnels in Spanish, English, and Portuguese capturing international and domestic travelers.'
    },
    {
      name: 'Logistics, manufacturing and B2B services',
      desc: 'Industrial quote calculators, regional supply chain portals, and technical B2B search authority.'
    }
  ];

  const regions = [
    {
      region: 'Cundinamarca',
      city: 'Bogotá',
      businesses: 'Finance, tech, professional services',
      service: 'Multilingual SEO, B2B PPC'
    },
    {
      region: 'Antioquia',
      city: 'Medellín',
      businesses: 'Startups, tech, manufacturing',
      service: 'React JS development, SEO'
    },
    {
      region: 'Valle del Cauca',
      city: 'Cali',
      businesses: 'Healthcare, agribusiness, logistics',
      service: 'Local SEO, Google Business Profile'
    },
    {
      region: 'Atlántico',
      city: 'Barranquilla',
      businesses: 'Ports, trade, logistics',
      service: 'Multilingual SEO, PPC'
    },
    {
      region: 'Bolívar',
      city: 'Cartagena',
      businesses: 'Tourism, hotels, real estate',
      service: 'Multilingual website, SMM'
    },
    {
      region: 'Santander',
      city: 'Bucaramanga',
      businesses: 'Healthcare, education, energy',
      service: 'Local SEO, Spanish website'
    }
  ];

  const faqs = [
    {
      q: 'What does a multilingual SEO company in Colombia do?',
      a: 'It researches keywords in Spanish, English and Portuguese, builds language-specific pages with hreflang tags, and optimizes each for local search intent.'
    },
    {
      q: 'How long does Spanish SEO take to show results?',
      a: 'Most sites see movement in 3 to 6 months, depending on competition, site health and content depth.'
    },
    {
      q: 'Which is better: SEO, SMM or PPC?',
      a: 'SEO gives lasting rankings, PPC gives fast clicks and SMM builds awareness. We usually lead with SEO and add PPC for urgent leads.'
    },
    {
      q: 'Why build a multilingual website in React JS?',
      a: 'React JS gives fast page loads, clean code and flexible language routing, which helps users and search engines.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* 1. Intro Narrative & Core Market Context */}
      <section className="space-y-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold mb-3">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Colombia Web Design, Development, SEO & Marketing · 15+ Years Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Colombia Multilingual Web Design, Development, SEO and Digital Marketing in One Team
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            UDMIDEAS builds custom React JS websites and runs Spanish, multilingual and AI-ready SEO for Colombian businesses, under the direct supervision of Arun, an SEO expert with 15+ years of experience.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Colombia is a mobile-first market: DataReportal counted <strong className="text-white font-semibold">44.0 million social media user identities</strong> in October 2026, equal to <strong className="text-emerald-400 font-semibold">81.4% of the population</strong>. Yet CSA Research found that <strong className="text-white font-semibold">76% of shoppers prefer products with information in their own language</strong>, and <strong className="text-white font-semibold">40% will not buy from sites in another language</strong>.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            If your website, Google ranking and ads are not in Spanish, you are invisible to most of your buyers. This guide shows what we offer, how SEO, SMM and PPC compare, and how to start with UDMIDEAS.
          </p>
        </div>

        {/* Market Stats Quick Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-2xl font-extrabold text-emerald-400 font-mono">44.0M</div>
            <div className="text-[11px] text-slate-400 mt-1">Social Identities (81.4% of Pop.)</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-2xl font-extrabold text-blue-400 font-mono">96.5%</div>
            <div className="text-[11px] text-slate-400 mt-1">Mobile Phone Access in Colombia</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-2xl font-extrabold text-purple-400 font-mono">76%</div>
            <div className="text-[11px] text-slate-400 mt-1">Shoppers Prefer Native Language</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-2xl font-extrabold text-amber-400 font-mono">53%</div>
            <div className="text-[11px] text-slate-400 mt-1">Organic Traffic Share (BrightEdge)</div>
          </div>
        </div>
      </section>

      {/* 2. Multilingual Web Design, SEO and Digital Marketing Services We Provide */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            End-to-End Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Multilingual Web Design, SEO and Digital Marketing Services We Provide
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            We cover six services so your website, rankings and ads work together instead of competing for budget:
          </p>
        </div>

        {/* 6 Services Grid */}
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

        <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs text-blue-200 flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
          <span>
            <strong className="text-white">Every plan starts with an audit</strong> of your current rankings, site speed and language gaps.
          </span>
        </div>
      </section>

      {/* 3. SEO vs SMM vs PPC Comparison */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Channel Matrix & Strategy
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SEO vs SMM vs PPC: Which Digital Marketing Service Fits Your Business?
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            SEO earns lasting Google rankings, PPC buys instant clicks, and SMM builds an audience; most Colombian businesses grow fastest when SEO leads and the other two support it.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            In a widely cited <strong className="text-white font-semibold">BrightEdge study</strong>, organic search drove <strong className="text-emerald-400 font-semibold">53% of trackable website traffic</strong>, paid search <strong className="text-blue-400 font-semibold">15%</strong> and organic social <strong className="text-purple-400 font-semibold">5%</strong>.
          </p>
        </div>

        {/* Detailed Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Factor</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">SEO</th>
                <th className="py-3.5 px-4 sm:px-6 text-purple-400">SMM (Social Media Marketing)</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">PPC (Paid Ads)</th>
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
      </section>

      {/* 4. Why Colombia and Brazil Business Owners Hire a Professional from UDMIDEAS */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
            Proven Competitive Advantage
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Colombia and Brazil Business Owners Hire a Professional from UDMIDEAS
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Latin American owners hire us because the audience is large, mobile and language-sensitive, and generic agencies miss that. DataReportal reports 154 million social media user identities in Brazil in October 2026 (72.0% of the population), and the Instituto Cervantes counts over 630 million Spanish speakers worldwide, including 520 million native speakers.
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

      {/* 5. Custom React JS Website Design and Development for Every Industry */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Modern Engineering Standards
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Custom React JS Website Design and Development for Every Industry
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            We design and develop business websites custom coded in React JS, built for speed, multilingual routing and clean crawlable code. Each site ships with language switching, hreflang tags, schema markup and mobile-first layouts, so Google and AI search engines understand every language version.
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

        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">A custom build also means you own clean code</strong>, with no plugin bloat slowing your Core Web Vitals or breaking during WordPress core updates.
        </div>
      </section>

      {/* 6. Hire Arun, Your Spanish SEO Expert with 15+ Years of Experience */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-blue-900/30 shadow-xl space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            Senior Hands-On Leadership
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Hire Arun, Your Spanish SEO Expert with 15+ Years of Experience
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Arun is the founder of UDMIDEAS and a hands-on SEO specialist with more than 15 years of experience. He works directly on technical audits, React JS builds and ranking strategy, and he has served clients across the USA, Israel, the Gulf countries, Latin America and Australia, including dental clinics in Texas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <div className="font-bold text-white text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Senior Specialist on Your Account</span>
            </div>
            <p className="text-xs text-slate-400 pl-6">
              You collaborate directly with founder Arun, never handed off to a junior intern or sales representative.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <div className="font-bold text-white text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Colombian Spanish Intent</span>
            </div>
            <p className="text-xs text-slate-400 pl-6">
              Spanish keyword research built around Colombian search behavior, local terminology, and regional dialect patterns.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <div className="font-bold text-white text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Clear Monthly Reporting</span>
            </div>
            <p className="text-xs text-slate-400 pl-6">
              Transparent metrics tracking organic keyword rankings, trackable traffic, and qualified inbound leads.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <div className="font-bold text-white text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>AEO & GEO AI Citations</span>
            </div>
            <p className="text-xs text-slate-400 pl-6">
              Direct answer optimization and entity structure so AI tools like ChatGPT, Gemini, and Google Overviews cite your business.
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800">
          <p className="text-xs text-slate-300">
            <strong className="text-white">Looking for a Spanish SEO expert near you?</strong> Colombia is served fully online, with calls scheduled in your local time zone.
          </p>
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20interested%20in%20Spanish%20SEO%20and%20web%20design%20for%20Colombia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shrink-0 shadow-lg shadow-emerald-950/50"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Arun (+91-9521186150)</span>
          </a>
        </div>
      </section>

      {/* 7. Colombia Regions Where Business Owners Can Contact UDMIDEAS */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Regional Coverage
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Colombia Regions Where Business Owners Can Contact UDMIDEAS
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            We serve every Colombian region online, with local keywords and Spanish content tailored to each city's market.
          </p>
        </div>

        {/* Regions Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Region</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Main City</th>
                <th className="py-3.5 px-4 sm:px-6">Typical Businesses</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Best-Fit Service</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {regions.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.region}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-blue-300 whitespace-nowrap">
                    {row.city}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300 text-xs">
                    {row.businesses}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-emerald-400 text-xs whitespace-nowrap">
                    {row.service}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. How SEO Grows Your Business in 2027 with UDMIDEAS */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            2027 Strategic Roadmap
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How SEO Grows Your Business in 2027 with UDMIDEAS
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            In 2027, SEO grows your business by putting your Spanish pages in front of buyers on Google and inside AI answers, before they compare competitors. The director of the Instituto Cervantes said Spanish is now the second most used language on the internet, behind English, and organic search remains the largest source of trackable web traffic at 53% in the BrightEdge data above.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 relative overflow-hidden">
            <div className="text-3xl font-extrabold text-blue-500/20 font-mono absolute top-3 right-4">
              01
            </div>
            <div className="font-bold text-white text-base">1. Fix the Foundation</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              React JS speed, semantic schema markup, reciprocal hreflang tags, and mobile usability that hits 95+ Core Web Vitals.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 relative overflow-hidden">
            <div className="text-3xl font-extrabold text-emerald-500/20 font-mono absolute top-3 right-4">
              02
            </div>
            <div className="font-bold text-white text-base">2. Win the Keywords</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Spanish and local keyword pages tailored to Bogotá, Medellín, Cali, Barranquilla, Cartagena, and Bucaramanga.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 relative overflow-hidden">
            <div className="text-3xl font-extrabold text-purple-500/20 font-mono absolute top-3 right-4">
              03
            </div>
            <div className="font-bold text-white text-base">3. Earn AI Citations</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              FAQ schema, structured tables, and answer-first formatting for AEO and GEO citations in ChatGPT, Gemini, and Google Overviews.
            </p>
          </div>
        </div>
      </section>

      {/* 9. 6 Months of SEO and No Results? We Improve Your Ranking, AEO and GEO */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-950/20 via-slate-900 to-slate-950 border border-amber-800/40 space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            Second-Opinion Diagnostic
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            6 Months of SEO and No Results? We Improve Your Ranking, AEO and GEO
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            <strong className="text-white font-semibold">Example (illustrative scenario):</strong> A Medellín furniture store pays an agency for six months and still sits on page four of Google. The usual causes are fixable, and we check them first:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
            <div className="w-2 h-2 rounded-full bg-rose-400 mt-1.5 shrink-0" />
            <span>The site is English-only or machine-translated, so Colombian buyers never match it</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
            <div className="w-2 h-2 rounded-full bg-rose-400 mt-1.5 shrink-0" />
            <span>Pages target keywords nobody in Colombia searches</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
            <div className="w-2 h-2 rounded-full bg-rose-400 mt-1.5 shrink-0" />
            <span>No schema markup, slow mobile speed and weak internal linking</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
            <div className="w-2 h-2 rounded-full bg-rose-400 mt-1.5 shrink-0" />
            <span>No answer-style content, so AI tools skip the brand</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          We rebuild the keyword map in Spanish, repair the technical issues, and add FAQ and entity content that improves <strong className="text-white">AEO (Answer Engine Optimization)</strong> and <strong className="text-white">GEO (Generative Engine Optimization)</strong>.
        </p>

        <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-xs text-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <strong className="text-white">If your SEO has gone six months without results</strong>, contact UDMIDEAS today for a second-opinion audit.
          </div>
          <a
            href="#inquiry-form"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shrink-0 transition-all"
          >
            <span>Request Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* 10. Frequently Asked Questions */}
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

      {/* 11. Final Contact Banner */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 text-center space-y-4 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Contact UDMIDEAS Today for Colombia Web Design and Spanish SEO
        </h2>
        <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Ready to rank in Spanish and grow across Colombia? Call <strong className="text-emerald-400 font-mono">+91-9521186150</strong> or visit <strong className="text-blue-400">udmideasusa.com</strong> to book a consultation with Arun.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20ready%20to%20rank%20in%20Spanish%20and%20grow%20across%20Colombia."
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
            <span>Book Consultation with Arun</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
};
