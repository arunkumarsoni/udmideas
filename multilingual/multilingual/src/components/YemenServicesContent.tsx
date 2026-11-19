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
  BarChart3
} from 'lucide-react';

export const YemenServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const statistics = [
    {
      figure: '7.65M (17.7%)',
      detail:
        'Yemen had 7.65 million internet users in October 2026, up from 7.29 million at the start of 2025. Online penetration was 17.7% at the end of 2026, so the audience is small and still expanding.',
      tag: 'Internet Growth'
    },
    {
      figure: '6.67M Social',
      detail:
        'There were 6.67 million active social media user identities in October 2025, so social platforms are the main way to reach buyers.',
      tag: 'Social Buyers'
    },
    {
      figure: '25.1M Mobile',
      detail:
        'Yemen had 25.1 million cellular mobile connections at the end of 2026. Mobile is the main route online, so your site must be light and fast.',
      tag: 'Mobile First'
    },
    {
      figure: '0.6%',
      detail:
        'Arabic is the content language of only 0.6% of websites whose language is known, so competition for Arabic search terms is low.',
      tag: 'Low Competition'
    },
    {
      figure: 'Wallets & COD',
      detail:
        'Mobile wallets now outnumber bank accounts among Yemeni consumers, according to one local e-commerce founder. Online bank payments have largely stalled since the conflict, so wallets and cash on delivery matter.',
      tag: 'Local Payments'
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
      service: 'SMM & PPC (Arabic)',
      details: 'Social media management, Facebook and Instagram ads in Arabic',
      cost: '$500'
    }
  ];

  const growthSteps = [
    'Audit your site, social pages and Arabic competitors.',
    'Build or fix the website foundation.',
    'Publish Arabic content that matches how Yemenis search.',
    'Run social and paid campaigns alongside SEO.',
    'Report on leads and orders every month.'
  ];

  const benefits = [
    'More organic traffic from Arabic searches',
    'Low competition in Arabic keywords',
    'Lightweight sites built for mobile and slower connections',
    'One team for development, SEO, social media and ads',
    'Clear reporting and pricing'
  ];

  const futureTrends = [
    {
      stat: '82% Still Offline',
      desc: 'The number of internet users is rising, and 82% of the population is still offline, so the room to grow is large.',
      tag: 'Untapped Reach'
    },
    {
      stat: 'ONE Cash & Jawali',
      desc: 'Local mobile wallets such as ONE Cash and Jawali are making digital payments possible without bank accounts.',
      tag: 'Digital Wallets'
    },
    {
      stat: "Sana'a Center Outlook",
      desc: "A Sana'a Center study sees real potential for e-commerce, especially for women and rural communities, if connectivity and payment systems improve.",
      tag: 'E-commerce Inclusion'
    }
  ];

  const faqs = [
    {
      q: '1. How much does Arabic SEO cost?',
      a: 'Packages start at $500.'
    },
    {
      q: '2. Do you build Arabic websites with RTL support?',
      a: 'Yes, custom-coded and fully right-to-left.'
    },
    {
      q: '3. Will my site load on slow mobile connections?',
      a: 'Yes. We build lightweight, mobile-first pages.'
    },
    {
      q: '4. Can customers order through WhatsApp?',
      a: 'Yes, we can add WhatsApp ordering and cash-on-delivery options.'
    },
    {
      q: '5. How long until I see SEO results?',
      a: 'Usually 3 to 6 months, depending on competition and your starting point.'
    },
    {
      q: '6. Do you offer bilingual Arabic and English sites?',
      a: 'Yes.'
    },
    {
      q: '7. Do you run social media and ads?',
      a: 'Yes, on the platforms your customers use, such as Facebook and Instagram.'
    },
    {
      q: "8. Can you target Sana'a, Aden or Taiz specifically?",
      a: 'Yes, by city and region, and also Yemenis living abroad.'
    },
    {
      q: '9. Is my content written by native Arabic speakers?',
      a: 'We write for natural, searcher-friendly Arabic, not literal translation.'
    },
    {
      q: '10. How do I get started?',
      a: 'Contact us at udmideasusa.com for a free audit. Payment methods and legal compliance are confirmed before any project starts.'
    }
  ];

  return (
    <div className="space-y-14 text-left">
      {/* Hero / Page Introduction */}
      <header className="max-w-4xl space-y-4">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>Yemen Arabic RTL Web Design, SEO, SMM & PPC · 15+ Years Experience</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          Yemen Website Design, Development and SEO Digital Marketing Company
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Yemen&apos;s online audience is smaller than its Gulf neighbours&apos;, but it is young, mobile-first and growing, and it searches in Arabic. Yemeni businesses, and businesses serving Yemenis abroad, can gain a real advantage by being easy to find. UDMIDEAS (udmideasusa.com) builds custom-coded Arabic websites and runs SEO, SMM and PPC for Arabic businesses.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20Arabic%20website%20design%20and%20SEO%20in%20Yemen."
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

      {/* Why Arabic Digital Marketing Matters in Yemen: The Statistics */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4" />
            <span>Market Intelligence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Arabic Digital Marketing Matters in Yemen: The Statistics
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

      {/* Core Capabilities: SEO, Web Design/Dev, E-commerce/SMM/PPC */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Search className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white">
            Our SEO Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We do SEO for Arabic-language websites and Arabic online stores. That covers Arabic keyword research (including Yemeni dialect and spelling variations), RTL technical audits, schema markup, natural Arabic content and link building. We also optimise for AI answer engines (AEO and GEO), so your brand appears in AI-generated answers as well as in search results.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <Code2 className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white">
            Our Website Design and Development Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We hand-code websites instead of relying on generic templates. Every site has proper right-to-left layouts, Arabic typography, clean code that search engines can crawl, and lightweight pages that load on slower mobile connections. We can add WhatsApp ordering and cash-on-delivery flows, so customers can order the way they already do. Bilingual Arabic and English sites are available.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white">
            Our E-commerce, SMM and PPC Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Many Yemeni retailers already sell through WhatsApp and Facebook. We help turn that into a proper store with a catalogue, product pages and order tracking, then drive traffic with Facebook and Instagram campaigns. We can also target Yemeni diaspora audiences abroad, who often send money and shop for family back home.
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
            <span>Market Horizon</span>
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

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
          Businesses that build Arabic search visibility now will be hard to displace later.
        </div>
      </section>

      {/* FAQs From Yemeni Business Owners */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Common Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            FAQs From Yemeni Business Owners
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
            <span>Free Arabic Website Audit</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Ready to Grow?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Contact UDMIDEAS today for a free audit of your Arabic website and a clear plan to grow your Yemen business.
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
              UDMIDEAS – Yemen Arabic RTL Website Design, Development, SEO, SMM & PPC Solutions.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20a%20free%20audit%20of%20my%20Arabic%20website%20in%20Yemen."
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
