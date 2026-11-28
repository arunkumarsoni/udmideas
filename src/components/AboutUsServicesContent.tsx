import React, { useState } from 'react';
import {
  Globe2,
  Code2,
  Search,
  Share2,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  Award,
  Rocket,
  ChevronDown,
  ChevronUp,
  Layers,
  Users,
  Database,
  Quote
} from 'lucide-react';

export const AboutUsServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const principles = [
    {
      title: 'Build for search from the first line of code.',
      desc: 'URL structure, page speed, rendering and schema are decided at the start, not patched in later.'
    },
    {
      title: 'Measure what pays the bills.',
      desc: 'Rankings matter, but leads, sales and revenue are the numbers we report against.'
    },
    {
      title: 'One accountable team.',
      desc: 'You talk to us, not to five vendors who each blame the other.'
    }
  ];

  const sevenServices = [
    {
      service: 'Custom code',
      covers: 'Bespoke features, integrations, APIs and tools that plugins cannot deliver'
    },
    {
      service: 'Website development',
      covers: 'React JS, WordPress, Laravel, CodeIgniter and Magento builds'
    },
    {
      service: 'Ecommerce',
      covers: 'Online stores and catalogs from 100 pages to 100,000 pages'
    },
    {
      service: 'SEO',
      covers: 'Technical audits, on-page work, content, link building, local and international SEO'
    },
    {
      service: 'AEO',
      covers: 'Answer Engine Optimization: becoming the direct answer to a question'
    },
    {
      service: 'GEO',
      covers: 'Generative Engine Optimization: being cited in AI-generated answers'
    },
    {
      service: 'SMM and PPC',
      covers: 'Social media marketing and paid campaigns on search and social platforms'
    }
  ];

  const platforms = [
    {
      platform: 'React JS',
      useCase: 'Fast, interactive web apps and front ends, with server-side rendering where search visibility matters'
    },
    {
      platform: 'WordPress',
      useCase: 'Business sites, blogs, publishers and content-led websites'
    },
    {
      platform: 'Laravel',
      useCase: 'Custom web applications, client portals, dashboards and APIs'
    },
    {
      platform: 'CodeIgniter',
      useCase: 'Lightweight PHP applications, quick builds and upgrades of older systems'
    },
    {
      platform: 'Magento',
      useCase: 'Large-catalog ecommerce with complex pricing, filters and integrations'
    }
  ];

  const scaleArchitecturePoints = [
    'Template and URL logic that generates clean, unique pages at volume',
    'Crawl budget control through sitemaps, internal linking, canonical tags and pagination rules',
    'Caching, indexing and server setup that keep page speed steady under load',
    'Structured data applied by template, so every page carries it',
    'Monitoring that shows which sections of a large site are indexed and which are not'
  ];

  const searchDisciplines = [
    {
      discipline: 'SEO',
      goal: 'Rank in Google, Bing and other search engines',
      whatWeDo:
        'Technical audits, keyword and content strategy, on-page optimization, link building, local SEO, international and multilingual SEO'
    },
    {
      discipline: 'AEO',
      goal: 'Be the direct answer to a question',
      whatWeDo:
        'Featured snippet targeting, FAQ and how-to structure, concise answer content, schema markup, voice search readiness'
    },
    {
      discipline: 'GEO',
      goal: 'Be cited by AI assistants such as ChatGPT, Gemini and Perplexity',
      whatWeDo:
        'Entity and brand clarity, citable source content, authority signals, structured data, tracking of AI mentions'
    }
  ];

  const oneRoofPoints = [
    {
      title: 'Fewer handoffs.',
      desc: 'The developer who builds your site knows the SEO plan, so nothing gets rebuilt later.'
    },
    {
      title: 'Faster decisions.',
      desc: 'One team, one thread, one set of priorities.'
    },
    {
      title: 'Shared data.',
      desc: 'Search, social, ads and site analytics are read together, not in separate reports.'
    },
    {
      title: 'One point of accountability.',
      desc: 'If something is not working, we find the cause and fix it.'
    }
  ];

  const regions = [
    {
      region: 'USA',
      coverage: 'All states and cities, from large metros to small local markets'
    },
    {
      region: 'Europe',
      coverage: 'France, Germany, Spain and the wider European market'
    },
    {
      region: 'Arabic-speaking countries',
      coverage: 'Every Arabic-speaking country, from Iraq, Qatar and the UAE to Oman'
    },
    {
      region: 'Latin America',
      coverage: 'All Latin American countries, in Spanish and English'
    },
    {
      region: 'Worldwide',
      coverage: 'Australia, Israel and any other market where your customers are'
    }
  ];

  const whyChooseUs = [
    '15+ years of SEO experience, led by a founder who stays hands-on',
    'Custom code and five major platforms, from small sites to 100,000-page builds',
    'SEO, AEO and GEO planned together, so you are visible in search and in AI answers',
    'SMM and PPC managed alongside your website, with tracking that connects spend to results',
    'Experience across the USA, Europe, the Arabic-speaking world and Latin America'
  ];

  const faqs = [
    {
      q: 'What does UDMIDEAS do?',
      a: 'We build websites and custom software, and we market them with SEO, AEO, GEO, social media marketing and PPC, all from one team.'
    },
    {
      q: 'Which platforms do you build on?',
      a: 'React JS, WordPress, Laravel, CodeIgniter and Magento, plus custom code when a standard platform is not enough.'
    },
    {
      q: 'Can you handle very large websites?',
      a: 'Yes. We build and optimize sites from 100 pages up to 50,000 and 100,000 pages, with architecture planned for crawling, indexing and speed.'
    },
    {
      q: 'What is the difference between SEO, AEO and GEO?',
      a: 'SEO helps you rank in search engines. AEO helps you become the direct answer to a question. GEO helps AI assistants cite and recommend your business.'
    },
    {
      q: 'Do you work with clients outside India?',
      a: "Yes. We serve clients in the USA, Europe, the Arabic-speaking countries, Latin America and other regions, working remotely and in your market's language."
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* Hero / About UDMIDEAS */}
      <header className="max-w-4xl space-y-5">
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-semibold">
          <Users className="w-3.5 h-3.5 shrink-0" />
          <span>Full-Stack Digital Agency · Led by Founder Arun (15+ Years Hands-On SEO)</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight text-balance">
          UDMIDEAS About Us: Founder Arun and Full-Stack Digital Agency
        </h1>

        <div className="space-y-3 pt-1">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1D4ED8]">
            About UDMIDEAS
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            UDMIDEAS is a full-service digital agency that builds your website, gets it found, and keeps it growing, all from one team. We write custom code, build websites in React JS, WordPress, Laravel, CodeIgniter and Magento, and grow them with SEO, AEO, GEO, SMM and PPC.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Businesses in the USA, Europe, the Arabic-speaking world and Latin America work with us directly, without passing a project between a developer, an SEO vendor and an ads agency. The agency is led by its founder, Arun, who brings 15+ years of hands-on SEO experience to every project.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20discuss%20a%20project%20with%20UDMIDEAS."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm hover:shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Call or WhatsApp: +91-9521186150</span>
          </a>

          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-md hover:shadow-md transition-all"
          >
            <span>Send Project Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Who We Are */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider">
            Our Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Who We Are
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            We are developers, SEO specialists and paid media managers working as one team under the UDMIDEAS name. Most businesses end up juggling a web developer who has never thought about search, an SEO consultant who cannot touch the code, and an ads agency that sends traffic to a slow page. We exist to remove that gap.
          </p>
          <p className="text-sm text-[#475569] leading-relaxed">
            Because our founder comes from an SEO background, every site we build starts with a simple question: how will people find this, and what will they do when they arrive? Three principles guide the work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E2E8F0] space-y-2 hover:border-blue-600/30 transition-all"
            >
              <div className="text-xs font-mono text-emerald-700 font-bold">
                PRINCIPLE 0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-4 h-4" />
            <span>Seven Connected Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            What We Do
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            UDMIDEAS covers the full path from building a website to bringing customers to it, across seven services.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-700">Service</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#1D4ED8]">What it covers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {sevenServices.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0F172A] whitespace-nowrap">
                    {row.service}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#0F172A]">
                    {row.covers}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Custom Code and Website Development */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            <span>Engineering & Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Custom Code and Website Development
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            We write custom code and build websites on the platform that fits the job, whether that is a 100-page business site or a store with 100,000 product and category pages.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-[#1D4ED8]">Platform</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#0F172A]">Where we use it</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {platforms.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0F172A] whitespace-nowrap">
                    {row.platform}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#0F172A]">
                    {row.useCase}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed">
          When a plugin or template cannot do what your business needs, we write the code. That includes custom modules, third-party integrations, booking and quoting tools, and internal systems.
        </div>

        {/* Built to scale from 100 pages to 100,000 */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] space-y-5">
          <div className="space-y-2 max-w-4xl">
            <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs font-bold uppercase tracking-wider">
              <Database className="w-4 h-4" />
              <span>Enterprise Crawl & Speed Engineering</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
              Built to scale from 100 pages to 100,000
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              A site with 50,000 or 100,000 pages fails in ways a small site never does. Search engines may crawl only part of it, thin pages dilute the strong ones, and a slow database turns every filter into a wait. We plan for this at the architecture stage:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {scaleArchitecturePoints.map((pt, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A]"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO, AEO and GEO */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>Triple-Channel Search Visibility</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            SEO, AEO and GEO
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            People now find businesses in three ways: they search, they ask a question and get one answer, and they ask an AI assistant. We optimize for all three, so you are visible wherever your customers look.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-700">Discipline</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#1D4ED8]">The goal</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#0F172A]">What we do</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {searchDisciplines.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0F172A] whitespace-nowrap">
                    {row.discipline}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#1D4ED8] font-medium">
                    {row.goal}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#0F172A]">
                    {row.whatWeDo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed">
          The three share one foundation: a fast, crawlable, well-structured site with content that answers real questions. That is why our developers and SEO specialists work on the same project from day one.
        </div>
      </section>

      {/* Social Media Marketing and PPC + All Solutions Under One Roof */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] space-y-4">
          <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase tracking-wider">
            <Share2 className="w-4 h-4" />
            <span>Demand & Paid Acquisition</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
            Social Media Marketing and PPC
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            SEO builds lasting visibility. Social media and paid ads bring results while that visibility grows.
          </p>
          <ul className="space-y-3 text-xs sm:text-sm text-[#0F172A]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#0F172A]">Social media marketing (SMM):</strong> content planning, community management and campaigns on the platforms where your audience spends time, tied back to your website and your goals.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#0F172A]">PPC:</strong> search, display and social ad campaigns built around your target cost per lead or sale, with landing pages, tracking and conversion setup handled by the same team that builds your site.
              </span>
            </li>
          </ul>
          <p className="text-xs sm:text-sm text-[#475569] pt-2 border-t border-[#E2E8F0] leading-relaxed">
            Because the website, the ads and the analytics are managed together, you can see which channel produced which customer.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white via-white to-blue-50/40 border border-blue-200 space-y-4">
          <div className="flex items-center gap-2 text-[#1D4ED8] font-mono text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Single Accountable Partner</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
            All Solutions Under One Roof
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Using one agency for development, search and paid media saves time and avoids the mistakes that happen between vendors.
          </p>
          <div className="space-y-3">
            {oneRoofPoints.map((pt, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#0F172A]">{pt.title}</strong> {pt.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
            <Globe2 className="w-4 h-4" />
            <span>Global Delivery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Where We Work
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            UDMIDEAS serves clients worldwide, working remotely with teams across time zones and in the language of your market.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-700">Region</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#1D4ED8]">Coverage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {regions.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0F172A] whitespace-nowrap">
                    {row.region}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#0F172A]">
                    {row.coverage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed">
          Our multilingual SEO covers English, Spanish, French, German and Arabic, with content written for how people in each market actually search, not translated word for word.
        </div>
      </section>

      {/* Meet the Founder: Arun */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] space-y-5">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider">
            Founder & Hands-On Leadership
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Meet the Founder: Arun
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Arun, founder of UDMIDEAS, has spent more than 15 years in SEO. He is hands-on: he still audits sites, reads crawl logs and works through technical problems himself, which is why CTOs and technical teams find him easy to talk to.
          </p>
          <p className="text-sm text-[#475569] leading-relaxed">
            Over those years he has watched search change from ten blue links to featured answers and now to AI-generated responses. Rather than treat each change as a threat, he built UDMIDEAS to cover all of it: the code, the content, and the channels that bring people in. Today the agency pairs web development in React JS, WordPress, Laravel, CodeIgniter and Magento with SEO, AEO, GEO, SMM and PPC.
          </p>
        </div>

        <blockquote className="p-5 sm:p-6 rounded-xl bg-[#F8FAFC] border-l-4 border-emerald-500 text-sm sm:text-base text-[#0F172A] italic leading-relaxed flex items-start gap-3">
          <Quote className="w-5 h-5 text-emerald-700 shrink-0 mt-1" />
          <span>
            &ldquo;I treat SEO as a craft, not a checklist. A good ranking comes from a site that is fast, clear and useful, and that is built by people who understand both the code and the search engine. That is the standard I hold every UDMIDEAS project to.&rdquo;
          </span>
        </blockquote>

        <p className="text-sm text-[#475569] leading-relaxed">
          When you work with UDMIDEAS, you work with a team led by someone who has done this work for over 15 years and still does it every day.
        </p>
      </section>

      {/* Why Clients Choose UDMIDEAS */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-2">
          <div className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Why Clients Choose UDMIDEAS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A]"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider mb-1">
            Common Questions
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

      {/* Let's Talk */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50/70 via-white to-emerald-50/40 border border-blue-200 space-y-6 shadow-sm">
        <div className="max-w-4xl space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
            <Rocket className="w-4 h-4" />
            <span>Direct Plan & Next Steps</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Let&apos;s Talk
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Tell us what you are building or what you want to rank for, and Arun&apos;s team will reply with a clear plan and next steps. Call or WhatsApp +91-9521186150, or send your project details through the contact form.
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
              UDMIDEAS – Custom Code, React JS, WordPress, Laravel, CodeIgniter, Magento, SEO, AEO, GEO, SMM & PPC.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20discuss%20my%20website%20and%20digital%20marketing%20goals%20with%20UDMIDEAS."
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
              <span>Send Project Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
