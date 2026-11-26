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

export const SaudiArabiaServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const statistics = [
    {
      figure: '35.0M (99.0%)',
      detail: 'Saudi Arabia had 35.0 million internet users at the end of 2026, with 99.0% online penetration.',
      tag: 'Internet Reach'
    },
    {
      figure: '38.6M (111%)',
      detail:
        'The country had 38.6 million social media user identities in October 2025, equal to 111% of the population (many people hold several accounts).',
      tag: 'Social Identities'
    },
    {
      figure: '96.2% / 57.2%',
      detail:
        'In a 2026 survey, 96.2% of internet users aged 15-74 used social networking, and 57.2% used the internet to research goods and services. That research stage is where SEO wins customers.',
      tag: 'Product Research'
    },
    {
      figure: '0.6%',
      detail:
        'Arabic is the content language of only 0.6% of websites whose language is known, so Arabic search competition is low compared with the audience size.',
      tag: 'Search Opportunity'
    },
    {
      figure: 'USD 27.96B / 82.7%',
      detail:
        'The Saudi e-commerce market is estimated at USD 27.96 billion in 2025, and mobile phones generate about 82.7% of web traffic.',
      tag: 'E-commerce & Mobile'
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
      details: 'Social media management, Google and Meta ads in Arabic',
      cost: '$500'
    }
  ];

  const growthSteps = [
    'Audit your site and your Arabic competitors.',
    'Build or fix the website foundation.',
    'Publish Arabic content that matches how Saudis search.',
    'Run paid and social campaigns alongside SEO.',
    'Report on leads and sales every month.'
  ];

  const benefits = [
    'More organic traffic from Arabic searches',
    'Lower competition and lower cost per click in Arabic keywords',
    'A website built for conversions, not just looks',
    'One team for development, SEO, social media and ads',
    'Clear reporting and pricing'
  ];

  const futureTrends = [
    {
      stat: 'USD 49.49B (12.1% CAGR)',
      desc: 'Saudi e-commerce is forecast to grow from USD 27.96 billion in 2025 to USD 49.49 billion by 2030, a 12.1% CAGR.',
      tag: '2025–2030 Outlook'
    },
    {
      stat: 'Broad Upward Forecasts',
      desc: 'Other research firms forecast even faster growth, and all of them point strongly upward.',
      tag: 'Analyst Consensus'
    },
    {
      stat: 'Vision 2030 & NTP',
      desc: 'Vision 2030 reforms and the National Transformation Program make e-commerce a national priority.',
      tag: 'National Priority'
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
      q: '3. Can you do SEO for my Arabic online store?',
      a: 'Yes, including product, category and technical SEO.'
    },
    {
      q: '4. How long until I see SEO results?',
      a: 'Usually 3 to 6 months, depending on competition and your starting point.'
    },
    {
      q: '5. Do you offer bilingual Arabic and English sites?',
      a: 'Yes.'
    },
    {
      q: '6. Do you run Arabic social media and ads?',
      a: 'Yes: SMM and PPC on Snapchat, Instagram, TikTok, X, Facebook and Google.'
    },
    {
      q: '7. Is my content written by native Arabic speakers?',
      a: 'We write for natural, searcher-friendly Arabic, not literal translation.'
    },
    {
      q: '8. Can you target Riyadh, Jeddah or Dammam specifically?',
      a: 'Yes, by city, region and country.'
    },
    {
      q: '9. Will my site work well on mobile?',
      a: 'Yes. Every site is built mobile-first.'
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
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span>Saudi Arabia Arabic RTL Web Design, SEO, SMM & PPC · 15+ Years Experience</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight text-balance">
          Saudi Arabia Website Design, Development and SEO Digital Marketing Company
        </h1>

        <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
          Saudi Arabia is the largest digital market in the Gulf, and its customers search, compare and buy in Arabic. UDMIDEAS (udmideasusa.com) helps Arabic businesses in Saudi Arabia get found on Google and turn visitors into customers. We build custom-coded Arabic websites and run SEO, SMM and PPC for them.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20Arabic%20website%20design%20and%20SEO%20in%20Saudi%20Arabia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm hover:shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp: +91-9521186150</span>
          </a>

          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-md hover:shadow-md transition-all"
          >
            <span>Request Free Arabic Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Why Arabic Digital Marketing Matters in Saudi Arabia: The Statistics */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4" />
            <span>Market Intelligence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Why Arabic Digital Marketing Matters in Saudi Arabia: The Statistics
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {statistics.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2 hover:border-blue-600/30 transition-all"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xl sm:text-2xl font-extrabold font-mono text-emerald-700">
                  {item.figure}
                </span>
                <span className="text-[11px] font-mono text-[#64748B] bg-[#F8FAFC] px-2 py-0.5 rounded border border-[#E2E8F0]">
                  {item.tag}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Services and Pricing */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
            Transparent Packages
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Our Services and Pricing
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Service</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#1D4ED8]">What You Get</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-700">Starting Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {pricingRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0F172A] whitespace-nowrap">
                    {row.service}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#0F172A]">
                    {row.details}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-700 whitespace-nowrap">
                    {row.cost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569]">
          The final price depends on scope. Each package starts at $500.
        </div>
      </section>

      {/* Core Capabilities: SEO, Web Design/Dev, E-commerce/SMM/PPC */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
            <Search className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
            Our SEO Services
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            We do SEO for Arabic-language websites and Arabic e-commerce stores in Saudi Arabia. That covers Arabic keyword research (including Saudi and Gulf search habits and spelling variations), RTL technical audits, schema markup, natural Arabic content and local link building for Riyadh, Jeddah, Dammam and beyond. We also optimise for AI answer engines (AEO and GEO), so your brand appears in AI-generated answers as well as in Google results.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1D4ED8]">
            <Code2 className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
            Our Website Design and Development Services
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            We hand-code websites for Arabic businesses instead of relying on generic templates. Every site has proper right-to-left layouts, Arabic typography, fast loading, secure hosting and clean code that search engines can crawl. Bilingual Arabic and English sites are available.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
            Our E-commerce, SMM and PPC Solutions
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            For online stores we combine Arabic product-page SEO, Snapchat, Instagram, TikTok, X and Facebook campaigns, and Google Shopping and search ads. Every campaign is tracked from ad click to sale, so you can see what produces revenue.
          </p>
        </div>
      </section>

      {/* How We Grow Your Business */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" />
            <span>5-Step Execution</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            How We Grow Your Business
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {growthSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2 hover:border-blue-600/30 transition-all"
            >
              <div className="text-xs font-mono text-emerald-700 font-bold">
                0{idx + 1}
              </div>
              <p className="text-xs sm:text-sm font-medium text-[#0F172A] leading-relaxed">
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits, Why UDMIDEAS & Connection */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Partner Advantages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Benefits of Working With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A]"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span>{b}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-[#0F172A]">
              <ShieldCheck className="w-5 h-5 text-[#1D4ED8] shrink-0" />
              <h3>Why UDMIDEAS</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Our founder has 15+ years of hands-on SEO experience. We are technical specialists who work with clients across the Gulf, the USA, Israel, Latin America and Australia, so we understand how multilingual audiences search and buy.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-white via-white to-blue-50/40 border border-blue-200 space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-[#0F172A]">
              <Share2 className="w-5 h-5 text-emerald-700 shrink-0" />
              <h3>Why Arabic Business Owners Connect With UDMIDEAS</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Arabic business owners tell us they want to be understood, not just serviced. We treat Arabic as a primary language rather than a translation. We talk directly with decision-makers, keep pricing transparent, and report on results in plain language.
            </p>
          </div>
        </div>
      </section>

      {/* The Future: Where the Market Is Heading */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>2025–2030 Horizon</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            The Future: Where the Market Is Heading
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {futureTrends.map((t, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm sm:text-base font-extrabold font-mono text-[#1D4ED8]">
                  {t.stat}
                </span>
                <span className="text-[11px] font-mono text-[#64748B] bg-[#F8FAFC] px-2 py-0.5 rounded border border-[#E2E8F0]">
                  {t.tag}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569]">
          Businesses that build Arabic search visibility now will be hard to displace later.
        </div>
      </section>

      {/* FAQs From Saudi Business Owners */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider mb-1">
            Common Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            FAQs From Saudi Business Owners
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#E2E8F0] bg-white overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-[#0F172A] hover:text-[#1D4ED8] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#64748B] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-[#475569] border-t border-[#E2E8F0] pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Ready to Grow? */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50/70 via-white to-emerald-50/40 border border-blue-200 space-y-6 shadow-sm">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Free Arabic Website Audit</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Ready to Grow?
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Contact UDMIDEAS today for a free audit of your Arabic website and a clear plan to grow your Saudi business.
          </p>
        </div>

        <div className="pt-4 border-t border-[#E2E8F0] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 text-xs sm:text-sm text-[#475569]">
            <div>
              Website:{' '}
              <a
                href="https://udmideasusa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1D4ED8] hover:underline font-mono"
              >
                https://udmideasusa.com/
              </a>{' '}
              · Email:{' '}
              <a
                href="mailto:info@udmideasusa.com"
                className="text-emerald-700 hover:underline font-mono"
              >
                info@udmideasusa.com
              </a>
            </div>
            <div className="text-xs text-[#64748B]">
              UDMIDEAS – Saudi Arabia Arabic RTL Website Design, Development, SEO, SMM & PPC Solutions.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20a%20free%20audit%20of%20my%20Arabic%20website%20in%20Saudi%20Arabia."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm hover:shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +91-9521186150</span>
            </a>
            <a
              href="#inquiry-form"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-md hover:shadow-md transition-all"
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
