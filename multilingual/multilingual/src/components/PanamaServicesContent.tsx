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
  DollarSign,
  BarChart3,
  Users,
  Anchor,
  HelpCircle
} from 'lucide-react';

export const PanamaServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const services = [
    {
      title: 'Multilingual Web Design & Development',
      desc: 'Custom-coded React JS web architectures engineered in Spanish and English from day one. Sub-second load times, clean code, and zero bloated templates.',
      icon: Code2
    },
    {
      title: 'Spanish SEO & Multilingual SEO',
      desc: 'In-depth keyword research, on-page optimization, technical crawl auditing, and authoritative link building tailored to Panamanian Spanish (es-PA).',
      icon: Search
    },
    {
      title: 'PPC Advertising (Google & Meta Ads)',
      desc: 'High-conversion paid search, display, and social ad campaigns managed for qualified leads and sales, with transparent ad spend tracked in USD.',
      icon: MousePointerClick
    },
    {
      title: 'Social Media Marketing (SMM)',
      desc: 'Platform-specific content, active community management, and paid social campaigns across Facebook, Instagram, and LinkedIn.',
      icon: Share2
    },
    {
      title: 'Local SEO & Map Pack Domination',
      desc: 'Google Business Profile optimization, local Panama City directory citations, and geographic ranking signals across the Canal Zone and metro areas.',
      icon: MapPin
    },
    {
      title: 'AEO and GEO (AI Search Visibility)',
      desc: 'Answer engine optimization and generative engine optimization structuring your brand entities so ChatGPT, Gemini, and Google Overviews cite your company.',
      icon: Bot
    }
  ];

  const comparisonTable = [
    {
      factor: 'Typical time to results',
      seo: '3 to 6 months',
      smm: '1 to 3 months',
      ppc: 'Days'
    },
    {
      factor: 'Cost model',
      seo: 'Monthly retainer, no fee per click',
      smm: 'Content plus ad spend',
      ppc: 'Pay per click, stops with budget'
    },
    {
      factor: 'Customer intent',
      seo: 'High, people search to buy',
      smm: 'Low to medium, people browse',
      ppc: 'High, but paid'
    },
    {
      factor: 'Lifespan',
      seo: 'Compounds for years',
      smm: 'Short, needs constant posting',
      ppc: 'Ends when spend ends'
    },
    {
      factor: 'Best for',
      seo: 'Long-term leads, local services, ecommerce',
      smm: 'Brand awareness, community',
      ppc: 'Launches, promotions, fast leads'
    },
    {
      factor: 'What UDMIDEAS delivers',
      seo: 'Spanish SEO, technical SEO, AEO, GEO',
      smm: 'Spanish content, paid social, reporting',
      ppc: 'Spanish ad copy, landing pages, tracking'
    }
  ];

  const whyHireUs = [
    {
      title: '1. Hands-On Expert Leadership',
      desc: 'Founder Arun works directly on your account code, crawl structure, and keyword maps with 15+ years of experience—never handed off to junior interns.',
      icon: ShieldCheck
    },
    {
      title: '2. Spanish First, Bilingual by Design',
      desc: 'Native-sounding Panamanian Spanish copy, reciprocal hreflang tags, and distinct keyword sets for English and Spanish buyers.',
      icon: Globe2
    },
    {
      title: '3. Clean Custom React JS Code',
      desc: 'Engineered without bloated WordPress page builders or vulnerable plugins, achieving 95+ Core Web Vitals and rapid mobile rendering.',
      icon: Code2
    },
    {
      title: '4. Clear Reporting in USD',
      desc: 'Track actual commercial outcomes in US Dollars: organic rankings, incoming phone calls, verified form leads, and revenue.',
      icon: DollarSign
    },
    {
      title: '5. AI Search & Entity Ready',
      desc: 'Every landing page is structured with JSON-LD schema and question-answer formatting so Google AI Overviews, ChatGPT, and Gemini cite your brand.',
      icon: Bot
    }
  ];

  const industries = [
    { name: 'Maritime & Logistics', desc: 'Canal Zone shipping, freight forwarding, port agency, and customs brokerage platforms.' },
    { name: 'Corporate Law & Finance', desc: 'International offshore banking, wealth management, tax consultancy, and legal firm portals.' },
    { name: 'Healthcare & Dental Clinics', desc: 'Medical tourism and local patient scheduling with doctor schema and bilingual intake funnels.' },
    { name: 'Real Estate & Property', desc: 'Panama City skyline towers, beachfront developments, and bilingual investment catalogs.' },
    { name: 'Hospitality & Restaurants', desc: 'Bilingual booking engines and culinary showcases for Casco Viejo and resort destinations.' },
    { name: 'Ecommerce & Retail', desc: 'Fast online shopping storefronts with USD checkout gateways and Google Shopping feeds.' }
  ];

  const faqs = [
    {
      q: 'Why should Panama businesses invest in multilingual web design and SEO?',
      a: 'Panama is an international commercial crossroads where both Spanish and English are used in commerce. While local consumers predominantly search in Panamanian Spanish, multinational corporations, investors, and tourists search in English. Having a properly localized bilingual site with hreflang tags ensures you capture both high-value audiences.'
    },
    {
      q: 'How are campaigns billed for Panama businesses?',
      a: 'Because Panama utilizes the US Dollar (USD), all our service retainers, Google Ads budgets, and performance reporting are structured and billed directly in USD for complete financial transparency.'
    },
    {
      q: 'How long does Spanish SEO take to rank in Panama?',
      a: 'Most businesses begin seeing noticeable keyword movement and traffic improvements within 3 to 6 months. High-competition corporate sectors like real estate and finance may take longer, while local service terms often see earlier traction.'
    },
    {
      q: 'Why choose custom React JS over standard WordPress templates?',
      a: 'Custom React JS websites load in under one second, have zero plugin bloat or security vulnerabilities, and provide flawless multilingual routing. This delivers higher conversion rates and superior Core Web Vitals rankings in Google.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* 1. Header & Market Introduction */}
      <section className="space-y-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-semibold mb-3">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Panama Multilingual Web Design, Development, SEO & Marketing · 15+ Years Track Record</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight text-balance">
            Panama Multilingual Web Design, Development, SEO and Digital Marketing Services
          </h1>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-[#475569] leading-relaxed">
            <p>
              UDMIDEAS provides Panama multilingual web design, development, SEO and digital marketing services for businesses that want to be found in Spanish and English. Panama had <strong className="text-[#0F172A] font-semibold">3.84 million internet users in October 2026</strong>, up <strong className="text-emerald-700 font-semibold">6.7 percent in one year</strong>, and social media identities equal to <strong className="text-[#0F172A] font-semibold">74.9 percent of the population</strong>.
            </p>
            <p className="text-[#475569]">
              Your next customer is searching right now. The only question is whether they find you or a competitor. Contact UDMIDEAS today for a free audit.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20your%20services%20from%20page:%20/panama/"
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
              <span>Submit Project Form (Direct Email)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Quick Market Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
            <div className="text-2xl font-extrabold text-emerald-700 font-mono">3.84M</div>
            <div className="text-[11px] text-[#64748B] mt-1">Internet Users (+6.7% YoY)</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
            <div className="text-2xl font-extrabold text-[#1D4ED8] font-mono">3.48M</div>
            <div className="text-[11px] text-[#64748B] mt-1">Social Identities (74.9% Pop.)</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
            <div className="text-2xl font-extrabold text-purple-700 font-mono">76%</div>
            <div className="text-[11px] text-[#64748B] mt-1">Prefer Buying in Native Language</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
            <div className="text-2xl font-extrabold text-amber-700 font-mono">53%</div>
            <div className="text-[11px] text-[#64748B] mt-1">Organic Search Traffic Share</div>
          </div>
        </div>
      </section>

      {/* 2. Panama Web Design and Digital Marketing Services We Provide */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider mb-1">
            Complete Growth Journey
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Panama Web Design and Digital Marketing Services We Provide
          </h2>
          <p className="mt-2 text-sm text-[#475569] leading-relaxed">
            We are one team for the whole journey, from a fast website to the traffic that fills it:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-3 hover:border-blue-600/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 text-base font-bold text-[#0F172A] mb-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1D4ED8] shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{svc.title}</span>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. SEO vs SMM vs PPC: Which Channel Fits Your Panama Business? */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider mb-1">
            Channel Economics & Intent
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            SEO vs SMM vs PPC: Which Channel Fits Your Panama Business?
          </h2>
          <p className="mt-2 text-sm text-[#475569] leading-relaxed">
            Each channel solves a different problem, so the right mix depends on your goal and budget.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Factor</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-700">SEO</th>
                <th className="py-3.5 px-4 sm:px-6 text-purple-700">SMM</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#1D4ED8]">PPC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {comparisonTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0F172A] whitespace-nowrap">
                    {row.factor}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#0F172A] text-xs">
                    {row.seo}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#475569] text-xs">
                    {row.smm}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#475569] text-xs">
                    {row.ppc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569] space-y-2 leading-relaxed">
          <p>
            <strong className="text-[#0F172A]">The numbers back this up:</strong> BrightEdge research found organic search drove about <strong className="text-emerald-700 font-semibold">53 percent of trackable website traffic</strong>, though that benchmark is older, so we measure your own share in GA4. Panama also had <strong className="text-[#0F172A] font-semibold">3.48 million social media identities in October 2026</strong>, which makes SMM a strong awareness channel.
          </p>
          <p className="text-[#64748B]">
            <strong className="text-[#0F172A] font-semibold">Our advice:</strong> Start with SEO for lasting growth, add PPC for speed, and use SMM to keep customers close.
          </p>
        </div>
      </section>

      {/* 4. Why Panama Business Owners Hire UDMIDEAS */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wider mb-1">
            The Trust & Conversion Factor
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Why Panama Business Owners Hire UDMIDEAS
          </h2>
          <p className="mt-2 text-sm text-[#475569] leading-relaxed">
            Language is the biggest reason. CSA Research surveyed 8,709 consumers in 29 countries and found that <strong className="text-[#0F172A] font-semibold">76 percent prefer to buy products with information in their own language</strong>, while <strong className="text-rose-700 font-semibold">40 percent will not buy from websites in other languages</strong>. An English-only site leaves Panamanian buyers behind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyHireUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-3 hover:border-blue-600/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-base font-bold text-[#0F172A] mb-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Custom Coded React JS Websites for Every Panama Industry */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider mb-1">
            Engineered For Panamanian Commerce
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Custom Coded React JS Websites for Every Panama Industry
          </h2>
          <p className="mt-2 text-sm text-[#475569] leading-relaxed">
            We design and develop websites for law firms, clinics, hotels, logistics companies, real estate agencies, restaurants and online stores. Every site is custom coded in React JS, with pre-rendered pages so search engines read your content, clean URLs, compressed WebP images and Core Web Vitals checks before launch. A built-in language switcher sends visitors to the Spanish or English version.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-[#E2E8F0] hover:border-blue-600/30 transition-all space-y-2"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{ind.name}</span>
              </div>
              <p className="text-xs text-[#64748B] pl-6 leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Multilingual SEO and Spanish SEO in Spanish */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white via-white to-blue-50/40 border border-blue-200 space-y-6 shadow-sm">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Search className="w-4 h-4 text-[#1D4ED8]" />
            Linguistic Precision
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Multilingual SEO and Spanish SEO in Spanish
          </h2>
          <p className="mt-3 text-sm text-[#475569] leading-relaxed">
            <strong className="text-[#0F172A] font-semibold">Translation alone does not rank.</strong> We research how Panamanians actually search, such as <span className="text-emerald-700 font-mono font-semibold">"diseño web Panamá"</span> or <span className="text-emerald-700 font-mono font-semibold">"agencia de marketing digital Panamá"</span>, then write and optimize each page for <span className="text-[#1D4ED8] font-mono">es-PA</span> and English separately. As a multilingual digital marketing company, we also run your ads and social content in the same voice.
          </p>
        </div>

        {/* Spanish Callout Box */}
        <div className="p-5 rounded-xl bg-blue-50 border border-blue-200 text-[#1D4ED8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-sm font-medium">
            ¿Necesita SEO en español para su empresa en Panamá? Escríbanos hoy y mejoramos su posicionamiento en Google.
          </div>
          <a
            href="https://wa.me/919521186150?text=Hola%20Arun,%20necesito%20SEO%20en%20espanol%20para%20mi%20empresa%20en%20Panama."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shrink-0 transition-all shadow-md hover:shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contactar a Arun</span>
          </a>
        </div>
      </section>

      {/* 7. Meet Arun, Your Panamanian Spanish SEO Expert */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-white to-[#F8FAFC] border border-emerald-200 space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            Founder & Principal Specialist
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Meet Arun, Your Panamanian Spanish SEO Expert
          </h2>
          <p className="mt-3 text-sm text-[#475569] leading-relaxed">
            Arun has more than 15 years of SEO experience, including Spanish SEO for Latin American markets. He is as close as a WhatsApp message, and he schedules calls around Panama business hours. Hire Arun and get a plan written specifically for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#475569]">
            <strong className="text-[#0F172A] block mb-1">Direct Technical Leadership:</strong> Arun personally audits code, designs architecture, and oversees ranking campaigns.
          </div>
          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#475569]">
            <strong className="text-[#0F172A] block mb-1">Aligned with Panama Hours:</strong> Video and strategy consultations scheduled to match Panama commercial working hours.
          </div>
          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#475569]">
            <strong className="text-[#0F172A] block mb-1">USD Transparent Invoicing:</strong> Clear retainers and ad budgets managed directly in US Dollars with zero currency confusion.
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider mb-1">
            Common Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Frequently Asked Questions
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

      {/* 9. Final Action Banner */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50/70 via-white to-emerald-50/40 border border-blue-200 text-center space-y-4 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
          Request Your Free Panama SEO & Web Audit Today
        </h2>
        <p className="text-sm text-[#475569] max-w-2xl mx-auto leading-relaxed">
          Ready to rank your business across Panama City, Colón, and international cross-border markets? Call or WhatsApp <strong className="text-emerald-700 font-mono">+91-9521186150</strong> or visit <strong className="text-[#1D4ED8]">udmideasusa.com</strong> to book your free strategy consultation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20interested%20in%20web%20design%20and%20Spanish%20SEO%20for%20Panama."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm hover:shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Arun (+91-9521186150)</span>
          </a>
          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-md hover:shadow-md transition-all"
          >
            <span>Submit Consultation Form</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
};
