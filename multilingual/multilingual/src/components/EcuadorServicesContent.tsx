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

export const EcuadorServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const comparisonServices = [
    {
      service: 'Multilingual SEO',
      goal: 'Rank in Spanish and English',
      time: '3 to 6 months',
      cost: 'Monthly retainer',
      bestFor: 'Long-term, low cost per lead'
    },
    {
      service: 'Social media marketing (SMM)',
      goal: 'Build brand and community',
      time: '1 to 3 months',
      cost: 'Monthly plus ad budget',
      bestFor: 'Restaurants, retail, tourism'
    },
    {
      service: 'PPC advertising',
      goal: 'Instant leads and sales',
      time: 'Days',
      cost: 'Pay per click',
      bestFor: 'Launches and offers'
    },
    {
      service: 'React JS web development',
      goal: 'Fast, custom website',
      time: '4 to 10 weeks',
      cost: 'One-time project',
      bestFor: 'Every industry'
    },
    {
      service: 'AEO and GEO',
      goal: 'Appear in AI answers',
      time: '2 to 4 months',
      cost: 'Monthly add-on',
      bestFor: 'Service and local brands'
    }
  ];

  const whyHireUs = [
    {
      title: 'One Accountable Team',
      desc: 'One unified partner for custom web design, React JS engineering, SEO, SMM, and Google Ads PPC under a single senior lead.',
      stat: 'Zero agency finger-pointing',
      icon: ShieldCheck
    },
    {
      title: 'Native-Quality Spanish Content',
      desc: 'Written by experienced bilingual copywriters for Ecuadorian colloquial search habits, never awkward machine translations.',
      stat: '76% prefer products in native language',
      icon: Globe2
    },
    {
      title: 'Transparent Business Reporting',
      desc: 'Monthly reports focused on actual keyword rankings, qualified inquiries, and revenue rather than hollow vanity metrics.',
      stat: '15+ Years Track Record with Founder Arun',
      icon: BarChart3
    },
    {
      title: 'No Long Lock-in Contracts',
      desc: 'Transparent monthly pricing with the freedom to scale services as your company expands across Ecuador and international markets.',
      stat: 'Flexible, results-driven terms',
      icon: CheckCircle2
    }
  ];

  const industries = [
    {
      name: 'Healthcare & Dental Clinics',
      desc: 'Patient acquisition funnels, local Google Business Profile ranking in Quito and Guayaquil, and verified medical schema.'
    },
    {
      name: 'Hotels, Tourism & Restaurants',
      desc: 'Bilingual booking platforms in Spanish and English for Galápagos, Cuenca, and Baños hospitality businesses.'
    },
    {
      name: 'Import, Export & Logistics',
      desc: 'Port and shipping portals for Guayaquil and Manta, international trade RFQ workflows, and B2B search authority.'
    },
    {
      name: 'Real Estate & Construction',
      desc: 'High-speed property showcase portals, interactive development maps, and regional Ecuadorian buyer keyword clusters.'
    },
    {
      name: 'Ecommerce & Retail',
      desc: 'Fast headless commerce catalogs, payment integrations (Datafast, Payphone, Kushki), and Google Shopping optimization.'
    }
  ];

  const trafficShares = [
    { channel: 'Organic search (SEO)', share: '53%', color: 'text-emerald-400', bar: 'w-[53%]' },
    { channel: 'Paid search (PPC)', share: '15%', color: 'text-blue-400', bar: 'w-[15%]' },
    { channel: 'Organic social (SMM)', share: '5%', color: 'text-purple-400', bar: 'w-[5%]' }
  ];

  const regions = [
    { country: 'Ecuador', region: 'Pichincha', city: 'Quito' },
    { country: 'Ecuador', region: 'Guayas', city: 'Guayaquil' },
    { country: 'Ecuador', region: 'Azuay', city: 'Cuenca' },
    { country: 'Ecuador', region: 'Manabí', city: 'Manta and Portoviejo' },
    { country: 'Chile', region: 'Región Metropolitana', city: 'Santiago' },
    { country: 'Chile', region: 'Valparaíso', city: 'Valparaíso and Viña del Mar' },
    { country: 'Chile', region: 'Biobío', city: 'Concepción' },
    { country: 'Chile', region: 'Antofagasta', city: 'Antofagasta' }
  ];

  const faqs = [
    {
      q: 'How long does multilingual SEO take in Ecuador?',
      a: 'Most sites see ranking gains in 3 to 6 months. Competitive keywords and new domains can take longer.'
    },
    {
      q: 'Do you do SEO in Spanish for my website?',
      a: 'Yes. We research Spanish keywords, write native-quality content, and set up hreflang so Google serves the right language.'
    },
    {
      q: 'Do you build websites in React JS?',
      a: 'Yes. Every site is custom coded in React JS, with server-side rendering where SEO requires it.'
    },
    {
      q: 'What is the difference between AEO and GEO?',
      a: 'AEO gets your answers selected by search engines and voice assistants. GEO gets your brand cited inside AI tools such as ChatGPT and Perplexity.'
    },
    {
      q: 'How much do your services cost?',
      a: 'Pricing depends on scope, languages and competition. We quote after a free audit.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* 1. Header & Market Introduction */}
      <section className="space-y-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold mb-3">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Ecuador Web Design, Development, SEO & Digital Marketing · 15+ Years Track Record</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            Ecuador Multilingual Web Design and SEO: Why It Matters Now
          </h1>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              Ecuador multilingual web design development SEO digital marketing services from UDMIDEAS help Ecuadorian businesses rank higher in Spanish and English, then turn those visitors into customers. Whether you run a clinic in Quito, a shipping company in Guayaquil or a hotel in Cuenca, your next customer searches Google first. We design the website, optimize it and promote it, all with one accountable team.
            </p>
            <p className="text-slate-400">
              In this guide you will see what we offer, how SEO, SMM and PPC compare, and how to pick the right mix for your budget.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20your%20services%20from%20page:%20/ecuador/"
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
              <span>Submit Project Form (Direct Email)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-2xl font-extrabold text-emerald-400 font-mono">15.6M</div>
            <div className="text-[11px] text-slate-400 mt-1">Internet Users (84.2% of Pop.)</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-2xl font-extrabold text-blue-400 font-mono">17.2M</div>
            <div className="text-[11px] text-slate-400 mt-1">Social Media User Identities</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-2xl font-extrabold text-purple-400 font-mono">12.4M</div>
            <div className="text-[11px] text-slate-400 mt-1">Facebook Active Users</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-2xl font-extrabold text-amber-400 font-mono">76%</div>
            <div className="text-[11px] text-slate-400 mt-1">Prefer Products in Native Language</div>
          </div>
        </div>
      </section>

      {/* 2. What Is the Difference Between SEO, SMM and PPC? */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Service Matrix & Strategy
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            What Is the Difference Between SEO, SMM and PPC?
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            SEO earns free rankings on Google over time, PPC buys instant visibility, and SMM builds audience and trust on social platforms. Most Ecuadorian businesses need SEO as the foundation, PPC for fast leads and SMM for brand awareness.
          </p>
        </div>

        {/* Detailed Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Service</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Main Goal</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Time to Results</th>
                <th className="py-3.5 px-4 sm:px-6 text-purple-400">Cost Pattern</th>
                <th className="py-3.5 px-4 sm:px-6">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {comparisonServices.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.service}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200 text-xs">
                    {row.goal}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-emerald-400 text-xs whitespace-nowrap">
                    {row.time}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-purple-300 text-xs whitespace-nowrap">
                    {row.cost}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300 text-xs">
                    {row.bestFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Why Ecuador Business Owners Hire a Professional Digital Marketing Company */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Proven Market Leadership
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Ecuador Business Owners Hire a Professional Digital Marketing Company
          </h2>
          <div className="mt-3 space-y-2 text-sm text-slate-300 leading-relaxed">
            <p>
              Ecuador's online market is large enough that guessing no longer works. According to <strong className="text-white font-semibold">DataReportal's Digital 2027 report</strong>, the country had <strong className="text-emerald-400 font-semibold">15.6 million internet users</strong> at the end of 2026, which is <strong className="text-white font-semibold">84.2% of the population</strong>. It also counted <strong className="text-blue-400 font-semibold">17.2 million social media user identities</strong> and <strong className="text-blue-400 font-semibold">12.4 million Facebook users</strong> in late 2026.
            </p>
            <p>
              Language decides who buys. A <strong className="text-white font-semibold">CSA Research survey</strong> of 8,709 consumers in 29 countries found that <strong className="text-emerald-400 font-semibold">76% prefer products with information in their own language</strong>, and <strong className="text-rose-400 font-semibold">40% will not buy from sites in other languages</strong>.
            </p>
          </div>
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

      {/* 4. Custom React JS Website Design and Development for Every Industry */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Engineered For Speed & Conversions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Custom React JS Website Design and Development for Every Industry
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            We design and develop multilingual websites for business industries, custom coded in React JS, with no bloated templates. Each site loads fast, works on mobile and includes hreflang tags, translated metadata and clean URL structures so Google shows the right language to the right visitor. As a multilingual digital marketing company, we also run Spanish website SEO, meaning keyword research, on-page work and link building in Spanish.
          </p>
        </div>

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

      {/* 5. Hire Arun, Spanish SEO Expert with 15+ Years of Experience */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-blue-900/30 shadow-xl space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            Senior SEO Leadership
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Hire Arun, Spanish SEO Expert with 15+ Years of Experience
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            UDMIDEAS is led by Arun, a hands-on SEO specialist with more than 15 years of experience, including Spanish SEO for clients across Latin America, the USA and the Gulf. You work directly with the expert who plans your strategy, not a junior account manager. Ask for the full about UDMIDEAS profile and case studies before you decide.
          </p>
        </div>

        {/* 6 Months Diagnostic */}
        <div className="p-5 rounded-2xl bg-slate-950/70 border border-amber-900/40 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>Example: Six Months of SEO and No Results</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Picture an Ecuadorian business owner who paid an agency for six months. Rankings never moved and leads stayed flat. In audits like this, we usually find five causes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
              <span className="text-rose-400 font-bold">1.</span>
              <span>Keywords targeted in English while customers search in Spanish</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
              <span className="text-rose-400 font-bold">2.</span>
              <span>No hreflang tags, so Google mixes up language versions</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
              <span className="text-rose-400 font-bold">3.</span>
              <span>Thin, translated content with no local intent</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
              <span className="text-rose-400 font-bold">4.</span>
              <span>Slow, template-based pages that fail Core Web Vitals</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2 sm:col-span-2">
              <span className="text-rose-400 font-bold">5.</span>
              <span>No Google Business Profile or local citations across Ecuadorian cities</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 pt-1">
            We fix these in order, then track rankings and leads monthly. If this sounds familiar, contact UDMIDEAS today and we will show you exactly what is holding your site back.
          </p>
        </div>
      </section>

      {/* 6. Improve Your Ranking with AEO and GEO */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
            Next-Generation Search
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Improve Your Ranking with AEO and GEO
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) make your business the source that Google AI Overviews, ChatGPT and Perplexity quote.
          </p>
          <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/40 text-xs text-purple-200 mt-2">
            <strong>Critical Market Insight:</strong> A Pew Research Center study found users clicked a traditional result in <strong className="text-white">8% of searches with an AI summary</strong>, versus <strong className="text-white">15% without one</strong>. If you are not in the AI summary, you lose nearly half your potential clicks.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
            <div className="font-bold text-white text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Direct-Answer Paragraphs</span>
            </div>
            <p className="text-xs text-slate-400 pl-6">
              Structured 40-to-60 word answer blocks placed directly under question-style H2/H3 headings.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
            <div className="font-bold text-white text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Comprehensive JSON-LD Schema</span>
            </div>
            <p className="text-xs text-slate-400 pl-6">
              FAQ, Organization, LocalBusiness, and Person schema connecting your business entities for AI models.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
            <div className="font-bold text-white text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Consistent Multi-Directory NAP</span>
            </div>
            <p className="text-xs text-slate-400 pl-6">
              Identical name, address, phone number, and service data across directories and your Google Business Profile.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
            <div className="font-bold text-white text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Expert Author E-E-A-T Architecture</span>
            </div>
            <p className="text-xs text-slate-400 pl-6">
              Verified author profiles, verifiable credentials, and industry citations that establish domain trust.
            </p>
          </div>
        </div>
      </section>

      {/* 7. How SEO Grows Your Business in 2027 with UDMIDEAS */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Traffic Composition & 2027 Strategy
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How SEO Grows Your Business in 2027 with UDMIDEAS
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Organic search is still the largest traffic channel, so ranking in 2027 means ranking in both Google and AI answers. BrightEdge research shows how trackable website traffic splits by channel:
          </p>
        </div>

        {/* Traffic Channels Breakdown */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <div className="space-y-3">
            {trafficShares.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-semibold text-white">{item.channel}</span>
                  <span className={`font-mono font-bold ${item.color}`}>{item.share}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className={`h-full rounded-full ${idx === 0 ? 'bg-emerald-500' : idx === 1 ? 'bg-blue-500' : 'bg-purple-500'} ${item.bar}`} />
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-300 pt-2 leading-relaxed">
            <strong className="text-white">UDMIDEAS combines Spanish SEO, a fast React JS website and AEO/GEO</strong> so you capture traffic from all three sources: classic rankings, AI answers and local maps. Results depend on your market and competition, so we set realistic targets after a free audit.
          </p>
        </div>
      </section>

      {/* 8. Regions Where Business Owners Can Contact Us: Ecuador and Chile */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Regional Service Coverage
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Regions Where Business Owners Can Contact Us: Ecuador and Chile
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Arun, your Spanish SEO expert, works remotely with owners across Ecuador and Chile, so expert help is always near you. Search for <span className="text-emerald-300 font-mono">"SEO en Quito"</span> or <span className="text-emerald-300 font-mono">"agencia de marketing digital en Guayaquil"</span> and we will build the pages that rank for those phrases.
          </p>
        </div>

        {/* Regions Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Country</th>
                <th className="py-3.5 px-4 sm:px-6">Region</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Main City</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {regions.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.country}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200 text-xs whitespace-nowrap">
                    {row.region}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-emerald-400 text-xs whitespace-nowrap">
                    {row.city}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. Frequently Asked Questions */}
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

      {/* 10. Get Your Free Audit Today (Final CTA) */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 text-center space-y-4 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Get Your Free Audit Today
        </h2>
        <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Stop paying for SEO that does not rank. Contact UDMIDEAS today at <strong className="text-blue-400">udmideasusa.com</strong> or call <strong className="text-emerald-400 font-mono">+91-9521186150</strong>, and let Arun's 15+ years of Spanish SEO experience grow your Ecuador business with multilingual web design, development and SEO digital marketing services.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20interested%20in%20Spanish%20SEO%20and%20web%20design%20for%20Ecuador."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/60 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Arun (+91-9521186150)</span>
          </a>
          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all"
          >
            <span>Book Free Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
};
