import React, { useState } from 'react';
import {
  Globe2,
  Code2,
  Search,
  Share2,
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
  Sparkles,
  BarChart3,
  Bot,
  Cpu
} from 'lucide-react';

export const EgyptServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const statistics = [
    {
      figure: '99.0M (81.8%)',
      detail: 'Egypt had 99.0 million internet users in October 2026, and penetration was about 81.8% in mid-2025.',
      tag: 'Internet Reach'
    },
    {
      figure: '51.6M (43.4%)',
      detail: 'There were 51.6 million active social media user identities in October 2025, equal to 43.4% of the population.',
      tag: 'Social Audience'
    },
    {
      figure: '+7.9M Mobile',
      detail: 'Egypt added 7.9 million mobile internet users in 2025, so mobile-first design is essential.',
      tag: 'Mobile Growth'
    },
    {
      figure: '0.6%',
      detail:
        'Arabic is the content language of only 0.6% of websites whose language is known. Competition for Arabic search terms is low compared with the size of the audience.',
      tag: 'Search Opportunity'
    },
    {
      figure: 'USD 10.24B (72%)',
      detail: "Egypt's e-commerce market was valued at USD 10.24 billion in 2025, and mobile transactions accounted for 72% of sales in 2024.",
      tag: 'Mobile E-commerce'
    }
  ];

  const pricingRows = [
    {
      service: 'Web Design & Development',
      details: 'Custom-coded Arabic (RTL) website, mobile-first, fast',
      cost: '$500'
    },
    {
      service: 'Arabic SEO',
      details: 'Keyword research, on-page and technical SEO, link building',
      cost: '$500'
    },
    {
      service: 'Answer Engine Optimization (AEO)',
      details: 'Content structured to be quoted by search and AI answers',
      cost: '$500'
    },
    {
      service: 'Generative Engine Optimization (GEO)',
      details: 'Brand visibility inside AI-generated answers',
      cost: '$500'
    },
    {
      service: 'SMM & PPC (Arabic)',
      details: 'Social media management, Google and Meta ads in Arabic',
      cost: '$500'
    }
  ];

  const growthSteps = [
    'Audit your site and your Arabic competitors.',
    'Build or fix the website foundation.',
    'Publish Arabic content for search, answer engines and AI tools.',
    'Run paid and social campaigns alongside SEO.',
    'Report on leads and sales every month.'
  ];

  const benefits = [
    'More organic traffic from Arabic searches',
    'Visibility in AI answers as well as search results',
    'Low competition and lower cost per click in Arabic keywords',
    'A website built for conversions, not just looks',
    'One team for development, SEO, AEO, GEO, social media and ads'
  ];

  const futureTrends = [
    {
      stat: 'USD 19.28B (13.49% CAGR)',
      desc: "Egypt's e-commerce market is forecast to nearly double to USD 19.28 billion by 2030, a 13.49% CAGR from 2025.",
      tag: '2025–2030 Forecast'
    },
    {
      stat: 'Millions New Mobile Users',
      desc: 'Mobile adoption keeps rising, with millions of new mobile internet users each year.',
      tag: 'Mobile Surge'
    },
    {
      stat: 'AI Front Door',
      desc: 'AI assistants are becoming a new front door to information, which is why AEO and GEO matter for early movers.',
      tag: 'AEO & GEO'
    }
  ];

  const faqs = [
    {
      q: '1. How much does Arabic SEO cost?',
      a: 'Packages start at $500.'
    },
    {
      q: '2. What is AEO?',
      a: 'Answer Engine Optimization makes your content the source that search and AI answers quote.'
    },
    {
      q: '3. What is GEO?',
      a: 'Generative Engine Optimization improves how AI tools describe and recommend your brand.'
    },
    {
      q: '4. Do you build Arabic websites with RTL support?',
      a: 'Yes, custom-coded and fully right-to-left.'
    },
    {
      q: '5. Can you do SEO for my online store?',
      a: 'Yes, including product, category and technical SEO.'
    },
    {
      q: '6. How long until I see results?',
      a: 'SEO usually takes 3 to 6 months, depending on competition and your starting point.'
    },
    {
      q: '7. Do you offer bilingual Arabic and English sites?',
      a: 'Yes.'
    },
    {
      q: '8. Do you run social media and ads?',
      a: 'Yes: SMM and PPC on Facebook, Instagram, TikTok, YouTube and Google.'
    },
    {
      q: '9. Can you target Cairo, Alexandria or Giza specifically?',
      a: 'Yes, by city and governorate.'
    },
    {
      q: '10. How do I get started?',
      a: 'Contact us at udmideasusa.com for a free audit.'
    }
  ];

  return (
    <div className="space-y-14 text-left">
      {/* Hero / Page Introduction */}
      <header className="max-w-4xl space-y-4">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>Egypt Arabic RTL Web Design, SEO, AEO, GEO, SMM & PPC · 15+ Years Experience</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          Egypt Website Design, Development and SEO Digital Marketing Company
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Egypt is the largest Arabic-speaking market in the world, and its customers search, shop and decide in Arabic. UDMIDEAS (udmideasusa.com) helps Arabic businesses in Egypt get found on Google, in AI answer engines and in generative AI tools, then turns that visibility into customers. We build custom-coded Arabic websites and run SEO, AEO, GEO, SMM and PPC for them.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20Arabic%20website%20design,%20SEO,%20AEO%20and%20GEO%20in%20Egypt."
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
            <span>Request Free Arabic Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Why Arabic Digital Marketing Matters in Egypt: The Statistics */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4" />
            <span>Market Intelligence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Arabic Digital Marketing Matters in Egypt: The Statistics
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {statistics.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xl sm:text-2xl font-extrabold font-mono text-emerald-400">
                  {item.figure}
                </span>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  {item.tag}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Services and Pricing */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Transparent Packages
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Our Services and Pricing
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Service</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">What You Get</th>
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
                    {row.details}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400 whitespace-nowrap">
                    {row.cost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
          The final price depends on scope. Each package starts at $500.
        </div>
      </section>

      {/* Core Capabilities: SEO, AEO, GEO, Web Design/Dev, E-commerce/SMM/PPC */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Search className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white">
            Our SEO Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We do SEO for Arabic-language websites and Arabic e-commerce stores in Egypt. That covers Arabic keyword research (including Egyptian dialect and Modern Standard Arabic variants), RTL technical audits, schema markup, natural Arabic content and local link building for Cairo, Giza, Alexandria and beyond.
          </p>
        </div>

        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Bot className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white">
            Our Answer Engine Optimization (AEO) Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            More people now get answers directly from search features and AI assistants without clicking a link. AEO makes your business the source those answers use. We write clear question-and-answer content in Arabic, add FAQ and structured-data markup, strengthen your Google Business Profile, and organise pages so answer engines can quote them accurately.
          </p>
        </div>

        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Cpu className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white">
            Our Generative Engine Optimization (GEO) Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            GEO focuses on how generative AI tools describe and recommend brands. We make your brand name, services and expertise consistent across your site, directories and reputable mentions, publish authoritative Arabic content that AI models can draw on, and monitor how AI assistants talk about you so we can improve it.
          </p>
        </div>

        <div className="lg:col-span-3 p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <Code2 className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white">
            Our Website Design and Development Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We hand-code websites instead of relying on generic templates. Every site has proper right-to-left layouts, Arabic typography, fast loading, secure hosting and clean code that search engines and AI crawlers can read. Bilingual Arabic and English sites are available.
          </p>
        </div>

        <div className="lg:col-span-3 p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white">
            Our E-commerce, SMM and PPC Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            For online stores we combine Arabic product-page SEO, Facebook, Instagram, TikTok and YouTube campaigns, and Google Shopping and search ads. Every campaign is tracked from ad click to sale, so you can see what produces revenue.
          </p>
        </div>
      </section>

      {/* How We Grow Your Business */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" />
            <span>5-Step Execution</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How We Grow Your Business
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {growthSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2 hover:border-slate-700 transition-all"
            >
              <div className="text-xs font-mono text-emerald-400 font-bold">
                0{idx + 1}
              </div>
              <p className="text-xs sm:text-sm font-medium text-white leading-relaxed">
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits, Why UDMIDEAS & Connection */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Partner Advantages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Benefits of Working With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{b}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-white">
              <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
              <h3>Why UDMIDEAS</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our founder has 15+ years of hands-on SEO experience. We are technical specialists who work with clients across the Gulf, the USA, Israel, Latin America and Australia, so we understand how multilingual audiences search and buy.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/30 border border-blue-900/30 space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-white">
              <Share2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <h3>Why Arabic Business Owners Connect With UDMIDEAS</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Arabic business owners tell us they want to be understood, not just serviced. We treat Arabic as a primary language rather than a translation. We talk directly with decision-makers, keep pricing transparent, and report on results in plain language.
            </p>
          </div>
        </div>
      </section>

      {/* The Future: Where the Market Is Heading */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>2025–2030 Horizon</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            The Future: Where the Market Is Heading
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {futureTrends.map((t, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm sm:text-base font-extrabold font-mono text-blue-400">
                  {t.stat}
                </span>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  {t.tag}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs From Egyptian Business Owners */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Common Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            FAQs From Egyptian Business Owners
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

      {/* Ready to Grow? */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950/50 border border-blue-800/40 space-y-6 shadow-xl">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Free Arabic Website & AI Audit</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Ready to Grow?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Contact UDMIDEAS today for a free audit of your Arabic website and a clear plan to grow your Egypt business, in search and in AI answers.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
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
              UDMIDEAS – Egypt Arabic RTL Website Design, Development, SEO, AEO, GEO, SMM & PPC Solutions.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20a%20free%20audit%20of%20my%20Arabic%20website%20in%20Egypt."
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
              <span>Request Free Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
