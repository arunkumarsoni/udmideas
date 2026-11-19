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
  ArrowRight
} from 'lucide-react';

export const BrazilServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const brazilServices = [
    {
      title: 'Custom Web Design & Development in React JS',
      desc: 'High-speed, custom-coded web architectures built from scratch with zero bloated template builders. Built for sub-second load times and flawless mobile responsiveness.'
    },
    {
      title: 'SEO & Local SEO for Major Brazilian Metro Hubs',
      desc: 'Targeted ranking dominance across São Paulo, Rio de Janeiro, Belo Horizonte, Brasília, Curitiba, and Porto Alegre.'
    },
    {
      title: 'Multilingual SEO (pt-BR, English & Spanish)',
      desc: 'Precision optimization in Brazilian Portuguese with dedicated cross-border pages and correct hreflang tags for English and Spanish buyers.'
    },
    {
      title: 'Google Ads & PPC Management',
      desc: 'High-ROAS paid search, Shopping campaigns, and Performance Max tuned for Brazilian commercial search habits.'
    },
    {
      title: 'Social Media Marketing (SMM)',
      desc: 'Strategic brand storytelling, reels, carousels, and community engagement across Instagram, YouTube, and TikTok.'
    },
    {
      title: 'AEO & GEO (AI Search Optimization)',
      desc: 'Optimizing structured entity data and brand citations so ChatGPT, Gemini, and Google AI Overviews cite and recommend your brand.'
    }
  ];

  const comparisonTable = [
    {
      service: 'Web design and development (React JS)',
      bestFor: 'A fast, custom site that turns visitors into leads',
      time: '4 to 8 weeks to launch',
      fact: '185 million internet users, 86.5% of the population (Oct 2026)'
    },
    {
      service: 'SEO',
      bestFor: 'Steady, low-cost leads from Google',
      time: '3 to 6 months',
      fact: 'Google holds 88.41% of Brazil searches (Sept 2026)'
    },
    {
      service: 'Multilingual SEO',
      bestFor: 'Selling in Portuguese, English and Spanish',
      time: '3 to 6 months',
      fact: 'Brazilian Portuguese differs from European Portuguese, so each needs its own pages and hreflang'
    },
    {
      service: 'PPC',
      bestFor: 'Fast leads and new launches',
      time: 'Days',
      fact: 'Bing holds 9.63% of searches, so Microsoft Ads is a useful second channel'
    },
    {
      service: 'SMM',
      bestFor: 'Brand awareness and repeat visits',
      time: '1 to 3 months',
      fact: '154 million social media user identities, 72.0% of the population (Oct 2026)'
    }
  ];

  const whyHireUs = [
    {
      title: 'Mobile First Architecture',
      desc: 'Brazil has 218 million cellular mobile connections, equal to 102% of the population. We engineer every layout for phones first with sub-second mobile rendering.',
      icon: Smartphone
    },
    {
      title: 'WhatsApp Ready Integration',
      desc: '94.3% of Brazilian internet users aged 16 and over use WhatsApp monthly. We integrate frictionless click-to-chat WhatsApp hooks directly on key conversion pages.',
      icon: MessageCircle
    },
    {
      title: 'Authentic Brazilian Portuguese (pt-BR)',
      desc: 'We research keywords natively in Brazilian Portuguese instead of literal English translations, capturing real colloquial search intent.',
      icon: Globe2
    },
    {
      title: 'One Integrated Agency Team',
      desc: 'Website development, SEO, PPC, and social media sit under one unified strategy and single senior point of contact with zero finger-pointing.',
      icon: Layers
    },
    {
      title: 'Direct Senior Leadership by Arun',
      desc: 'Arun personally architects your strategy, crawl structure, schema, and analytics tracking with 15+ years of international hands-on search experience.',
      icon: ShieldCheck
    }
  ];

  const industries = [
    'eCommerce & Retail',
    'Real Estate & Property',
    'Healthcare & Dental Clinics',
    'Education & EdTech',
    'Hospitality & Tourism',
    'Logistics & Supply Chain',
    'Manufacturing & Industrial',
    'Law & Corporate Finance',
    'B2B SaaS & Technology'
  ];

  const targetCities = [
    { city: 'São Paulo', state: 'SP', role: 'Financial & Corporate Center' },
    { city: 'Rio de Janeiro', state: 'RJ', role: 'Energy, Tourism & Media' },
    { city: 'Belo Horizonte', state: 'MG', role: 'Tech Startups & Mining' },
    { city: 'Brasília', state: 'DF', role: 'Federal Governance & Legal' },
    { city: 'Curitiba', state: 'PR', role: 'Urban Innovation & Agribusiness' },
    { city: 'Porto Alegre', state: 'RS', role: 'Southern Commerce & Health' }
  ];

  const faqs = [
    {
      q: 'What services does UDMIDEAS offer Brazil businesses?',
      a: 'UDMIDEAS offers web design and development in React JS, SEO, multilingual SEO, PPC, social media marketing, AEO and GEO for Brazil businesses. All services run under one plan led by Arun.'
    },
    {
      q: 'What is the difference between SEO, SMM and PPC?',
      a: 'SEO earns organic Google rankings over time. SMM builds audience and trust on social platforms. PPC buys paid clicks that start fast and stop when the budget ends.'
    },
    {
      q: 'Do you do multilingual SEO for Brazil?',
      a: 'Yes. We optimize in Brazilian Portuguese (pt-BR), English and Spanish, and set up hreflang tags so each visitor sees the right language version.'
    },
    {
      q: 'How long does SEO take to show results in Brazil?',
      a: 'SEO usually takes 3 to 6 months to show steady gains. PPC can bring leads within days, so many clients run both while SEO builds.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* 1. Intro Narrative & Core Market Context */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold mb-2">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Brazil Web Design, Development, SEO & Marketing · 15+ Years Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Brazil Web Design, Development, SEO and Digital Marketing Services
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Brazil has about 185 million internet users, and Google handles about 88% of searches there. If your business wants those customers, you need a fast website and a search plan in Brazilian Portuguese. UDMIDEAS provides Brazil web design, development, SEO, and digital marketing services for business owners.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            We build custom-coded React JS websites, run multilingual SEO, and manage PPC and social media. Arun, our founder with 15+ years of SEO experience, leads every project. Below we compare SEO, SMM, and PPC, share Brazil market statistics, and explain why business owners hire us. We write and optimize in Brazilian Portuguese and English.
          </p>
        </div>

        {/* 6 Key Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {brazilServices.map((svc, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{svc.title}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-6">
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. SEO vs SMM vs PPC: What Is the Difference? */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Channel Comparison & Strategy
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SEO vs SMM vs PPC: What Is the Difference?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            SEO earns free Google rankings over months, PPC buys instant clicks that stop when the budget stops, and SMM builds audience and trust on platforms like Instagram, YouTube, and TikTok. Most Brazil businesses do best by combining all three, with SEO as the base.
          </p>
        </div>

        {/* Services Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Service</th>
                <th className="py-3.5 px-4 sm:px-6">Best For</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Typical Time to Results</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">Brazil Market Fact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {comparisonTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.service}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200 text-xs">
                    {row.bestFor}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-emerald-400 text-xs whitespace-nowrap">
                    {row.time}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300 text-xs">
                    {row.fact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-400 italic">
          * Time ranges are typical estimates for this kind of work; confirm them against your own project specifications before publishing.
        </p>
      </section>

      {/* 3. Why Brazil Business Owners Hire UDMIDEAS */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Proven Competitive Edge
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Brazil Business Owners Hire UDMIDEAS
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            We adapt every technical and creative touchpoint to the distinct realities of the Brazilian digital marketplace:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyHireUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Major Metropolitan Hubs in Brazil We Optimize For */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-5">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Local Geographic Targeting
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Local SEO for Brazil’s Economic Powerhouses
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            We deploy targeted local search optimization and Google Business Profile management across Brazil’s primary business capitals:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {targetCities.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-1 text-center"
            >
              <div className="text-xs font-bold text-white">{item.city}</div>
              <div className="text-[10px] font-mono text-emerald-400">{item.state}</div>
              <div className="text-[10px] text-slate-400 leading-tight">{item.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Custom Coded React JS Websites for Every Industry */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
            Zero Template Bloat
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Custom Coded React JS Websites for Every Industry
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            We design and develop websites for business industries, custom coded in React JS with no page builder templates. Each site is built for speed, small screens, and crawlability, so Google can read every page effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-medium">{ind}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Multilingual SEO and Digital Marketing Company */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-blue-950/30 border border-emerald-500/20 space-y-3">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Globe2 className="w-5 h-5 text-emerald-400" />
          <span>Multilingual SEO & Digital Marketing Company</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          We are a multilingual digital marketing company. For Brazil, we write in Brazilian Portuguese (pt-BR), add English and Spanish versions where you sell across borders, and configure correct hreflang tags so Google serves the appropriate linguistic page to the right visitor. We apply the same proven methodology across French, German, Arabic, and Polish global markets.
        </p>
      </section>

      {/* 7. Hire Arun, SEO Expert with 15+ Years of Experience */}
      <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Founder & Technical Leadership
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Hire Arun, SEO Expert with 15+ Years of Experience
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Arun founded UDMIDEAS and has worked in search engine optimization for more than 15 years. He is a hands-on technical lead, not an account manager, and works with clients across the USA, Israel, the Gulf region, Latin America, and Australia.
          </p>
          <p className="mt-2 text-xs sm:text-sm font-semibold text-white">
            Ready to grow your Brazil business? Request a free SEO audit or call/WhatsApp <span className="text-emerald-400 font-mono">+91-9521186150</span>.
          </p>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="space-y-4">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Brazil Market FAQ
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
                className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-850/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-emerald-400 shrink-0 mt-0.5">
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

      {/* 9. Direct Contact & Consultation CTA */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-950/60 via-slate-900 to-blue-950/40 border border-emerald-500/30 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Clock className="w-3.5 h-3.5" />
          <span>Brazil Web & Search Growth Plan</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
          Ready to Grow Your Brazil Business?
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Reach Brazil’s 185 million internet users with a custom-coded React JS website and a high-converting search strategy in Brazilian Portuguese.
        </p>

        <p className="text-sm font-bold text-white">
          Contact Founder Arun directly: <span className="text-emerald-400 font-mono">+91-9521186150</span> · Email: <span className="text-blue-400 font-mono">info@udmideasusa.com</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20interested%20in%20Web%20Design,%20SEO%20and%20Digital%20Marketing%20for%20Brazil."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-950/60 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Arun (+91-9521186150)</span>
          </a>

          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-950/60 transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Request Free Brazil SEO Audit</span>
          </a>
        </div>
      </section>
    </div>
  );
};
