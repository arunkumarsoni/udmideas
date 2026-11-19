import React, { useState } from 'react';
import {
  Sparkles,
  Bot,
  Search,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Mail,
  ShieldCheck,
  Code2,
  Globe2,
  Clock,
  Layers,
  ChevronDown,
  ChevronUp,
  Cpu,
  Zap,
  Target,
  BarChart3,
  TrendingUp,
  Building2,
  Share2,
  Award
} from 'lucide-react';

export const GeoServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const geoStats = [
    {
      stat: 'Weekly active users of ChatGPT Search',
      figure: 'About 800 Million',
      source: 'OpenAI, 2025',
      meaning: 'A massive global audience asks AI models for direct vendor and service recommendations'
    },
    {
      stat: 'Monthly active users of Google AI Overviews',
      figure: '1.5 Billion+',
      source: 'Google Official, 2025',
      meaning: 'AI answers sit prominently above classic page-one organic search listings'
    },
    {
      stat: 'Traditional search volume expected to fall by 2026',
      figure: '25%',
      source: 'Gartner Forecast',
      meaning: 'Significant search demand is permanently transferring into conversational chatbots'
    },
    {
      stat: 'US Google searches ending without a click to open web',
      figure: 'About 58%',
      source: 'SparkToro & Datalogue, 2024',
      meaning: 'Brand exposure and entity recommendation inside AI answers matters more than clicks'
    },
    {
      stat: 'Website traffic coming from organic search',
      figure: '53%',
      source: 'BrightEdge',
      meaning: 'SEO remains the indispensable crawlable foundation that GEO builds upon'
    }
  ];

  const howEnginesPickBrands = [
    {
      num: '01',
      title: 'Clear, Factual & Easy-to-Quote Pages',
      desc: 'AI language models draw heavily on pages with structured data, definitive answer statements, and verifiable statistics.'
    },
    {
      num: '02',
      title: 'Consistent Co-Occurrence on Reliable Sites',
      desc: 'LLMs trust brands that appear repeatedly with positive sentiment across industry directories, publications, and review hubs.'
    },
    {
      num: '03',
      title: 'Machine-Readable Structured Entity Data',
      desc: 'Clean JSON-LD schemas (Organization, Service, Person, FAQPage) make brand identity unmistakable to AI crawlers.'
    },
    {
      num: '04',
      title: 'Fresh Content with Named Expert Authors',
      desc: 'AI tools strongly favor recent, timestamped content authored by recognized practitioners with verifiable real-world E-E-A-T.'
    },
    {
      num: '05',
      title: 'Live Web Search Retrieval Feeds',
      desc: 'ChatGPT, Perplexity, and Gemini perform real-time web retrieval, meaning strong traditional rankings directly feed AI answers.'
    }
  ];

  const whereGeoResultsAppear = [
    {
      title: 'ChatGPT, Gemini, Claude, Copilot & Perplexity Answers',
      desc: 'Conversational brand shortlists and citations when buyers ask complex comparison prompts.'
    },
    {
      title: 'Google AI Overviews & Gemini AI Mode',
      desc: 'Multi-source synthesized answer snapshots displayed directly above Google organic search results.'
    },
    {
      title: 'AI Shopping & Local Recommendation Lists',
      desc: 'Algorithmic buyer guides suggesting top clinics, service providers, and software tools by budget and use case.'
    },
    {
      title: 'Voice Assistants & In-App Conversational Search',
      desc: 'Natural language spoken answers delivered on mobile devices, automotive systems, and smart home speakers.'
    }
  ];

  const benefits = [
    {
      num: '01',
      title: 'Untapped High-Intent Visibility Channel',
      desc: 'Your brand appears in conversational AI answers at the exact moment prospects research vendor shortlists.'
    },
    {
      num: '02',
      title: 'Pre-Click Commercial Confidence',
      desc: 'Being recommended by an objective AI model builds instant trust before the prospect ever lands on your website.'
    },
    {
      num: '03',
      title: 'Significantly Warmer Inbound Inquiries',
      desc: 'Buyers arriving via an AI recommendation already understand your value proposition and are closer to purchasing.'
    },
    {
      num: '04',
      title: 'Authoritative Brand Entity Footprint',
      desc: 'Harmonized data across the web helps both AI language models and Google’s Knowledge Graph recognize your company.'
    },
    {
      num: '05',
      title: 'Directly Elevates Traditional SEO Rankings',
      desc: 'The domain authority, schema markup, and high-quality factual content required for GEO lift classic keyword positions.'
    },
    {
      num: '06',
      title: 'Uncontested Early-Mover Market Space',
      desc: 'Most competitors have not yet adopted GEO strategies, leaving high-value AI recommendation slots wide open.'
    },
    {
      num: '07',
      title: 'Compounding Long-Term Asset Value',
      desc: 'Unlike paid advertising that ceases when budget stops, verified entity citations and authoritative content work for years.'
    }
  ];

  const eightStepsProcess = [
    {
      step: '01',
      title: 'AI Visibility & Citation Audit',
      desc: 'We benchmark your brand across ChatGPT, Gemini, Perplexity, and AI Overviews to see which competitors currently get recommended.'
    },
    {
      step: '02',
      title: 'Commercial Prompt & Query Research',
      desc: 'We compile over 100+ real-world prompts, comparison queries, and "best X for Y" questions your buyers ask AI engines.'
    },
    {
      step: '03',
      title: 'Competitor Citation Gap Analysis',
      desc: 'We identify the specific digital publications, industry directories, and websites AI tools cite instead of your business.'
    },
    {
      step: '04',
      title: 'Entity & Knowledge Graph Harmonization',
      desc: 'We synchronize brand name, business address, founder credentials, Wikipedia-style factual claims, and Google Business Profiles.'
    },
    {
      step: '05',
      title: 'Citable & Data-Backed Content Creation',
      desc: 'We produce clear, authoritative pages with original data, pricing benchmarks, and concise answers that LLMs extract effortlessly.'
    },
    {
      step: '06',
      title: 'Advanced Schema & Technical Optimization',
      desc: 'We implement nested Organization, Service, FAQPage, and Person JSON-LD schemas and eliminate Core Web Vitals crawl friction.'
    },
    {
      step: '07',
      title: 'Digital PR & Trusted Authority Mentions',
      desc: 'We earn unlinked brand mentions, verified client reviews, and editorial backlinks on authoritative domains that AI models trust.'
    },
    {
      step: '08',
      title: 'Monthly Citation Tracking & Quarterly Refresh',
      desc: 'We measure brand recommendation frequency every month and refresh key pages quarterly to prevent content decay.'
    }
  ];

  const ninetyDayPlan = [
    {
      phase: 'Phase 01',
      timeline: 'Days 1 to 30',
      title: 'Foundation & Baseline Audit',
      color: 'blue',
      items: [
        'AI visibility baseline audit across ChatGPT, Gemini, Perplexity, and Google AI Overviews',
        'Commercial research mapping 100+ buyer prompts, vendor comparison queries, and intent stages',
        'Competitor citation gap analysis identifying trusted sources currently quoted by LLMs',
        'Entity audit: brand name, business address, executive profiles, reviews, and directory listings',
        'Technical SEO audit: crawlability, indexing speed, Core Web Vitals, and DOM tree health',
        'Prioritized content roadmap assigning one commercial prompt cluster per target page'
      ]
    },
    {
      phase: 'Phase 02',
      timeline: 'Days 31 to 60',
      title: 'Build & Schema Implementation',
      color: 'purple',
      items: [
        'Draft or rewrite top 10 to 15 citable direct-answer and comparison landing pages',
        'Incorporate proprietary research, pricing tables, expert quotes, and structured FAQs',
        'Deploy custom JSON-LD schema (Organization, Service, FAQPage, and Person markup)',
        'Structure internal link silos so topical authority flows directly to high-converting service pages',
        'Launch targeted digital PR, review generation funnels, and high-authority brand outreach'
      ]
    },
    {
      phase: 'Phase 03',
      timeline: 'Days 61 to 90',
      title: 'Scale, Measure & Prove ROI',
      color: 'emerald',
      items: [
        'Expand optimization to long-tail prompts and specific "best X for Y" industry comparison queries',
        'Reinforce under-represented entity signals with new professional profiles and verified citations',
        'Embed case studies, visual data graphics, and client outcome statistics that AI tools favor citing',
        'Track synthetic search citations, brand mentions, inbound leads, phone calls, and revenue',
        'Deliver a full quarterly performance review and strategic roadmap for months 4 through 6'
      ]
    }
  ];

  const comparisonData = [
    {
      factor: 'Full name',
      seo: 'Search Engine Optimization',
      aeo: 'Answer Engine Optimization',
      geo: 'Generative Engine Optimization'
    },
    {
      factor: 'Main objective',
      seo: 'Rank web pages in standard search engine results',
      aeo: 'Be the direct featured answer to user questions',
      geo: 'Be named, recommended, and cited by AI tools'
    },
    {
      factor: 'Where it wins',
      seo: 'Google and Bing traditional search results',
      aeo: 'Position Zero snippets, AI Overviews, voice assistants',
      geo: 'ChatGPT, Google Gemini, Perplexity, Copilot, Claude'
    },
    {
      factor: 'Key tactics',
      seo: 'Keyword density, backlinks, technical crawl fixes',
      aeo: 'Short 45-word answers, schema markup, FAQs',
      geo: 'Entity knowledge graphs, brand citations, digital PR'
    },
    {
      factor: 'Success metric',
      seo: 'Keyword rankings, organic clicks, and site traffic',
      aeo: 'Position Zero snippet share and voice answers',
      geo: 'AI mention frequency and generative recommendation share'
    }
  ];

  const whyChooseUdmideas = [
    {
      title: '15+ Years Hands-On Search Leadership',
      desc: 'Arun, our founder, personally architects your GEO strategy, monitors crawl logs, and verifies entity alignment instead of outsourcing to juniors.'
    },
    {
      title: 'Full-Stack Technical Depth',
      desc: 'Our in-house team combines technical SEO engineers, schema programmers, React JS developers, and digital PR specialists under one roof.'
    },
    {
      title: 'Global Authority & Dental Specialization',
      desc: 'We serve clients across the USA, Israel, the Gulf region, Latin America, and Australia, with specialized authority in Texas dental practices.'
    },
    {
      title: 'Strict White-Hat Transparency',
      desc: 'Clear deliverables, monthly citation tracking reports, and 100% white-hat manual execution with zero artificial spam networks.'
    },
    {
      title: 'Native Multilingual Delivery',
      desc: 'We execute GEO across English, Spanish, French, German, Polish, and Arabic, ensuring native dialect precision and regional citations.'
    },
    {
      title: 'Unified SEO, AEO & GEO System',
      desc: 'We engineer classic SEO, snippet AEO, and generative GEO into one unified architecture so your content wins across every search modality.'
    }
  ];

  const industriesServed = [
    {
      industry: 'Dental & Healthcare Clinics',
      prompt: '"Best dentist near me" / "Who specializes in cosmetic dentistry in [City]?"',
      solution: 'Local entity knowledge graph, procedure cost guides, and clinician credentials'
    },
    {
      industry: 'Legal & Financial Firms',
      prompt: '"Best business lawyer in my city" / "Top wealth management firm for tech executives"',
      solution: 'Authoritative E-E-A-T attorney bios, statutory breakdown tables, and bar association proof'
    },
    {
      industry: 'E-Commerce Brands',
      prompt: '"Best product for X under $Y" / "Top sustainable clothing brands 2026"',
      solution: 'Structured product schema, independent specification tables, and buyer comparison guides'
    },
    {
      industry: 'B2B SaaS & IT Software',
      prompt: '"Best tool for Y" / "Top enterprise CRM software compared"',
      solution: 'Feature matrix tables, technical documentation citations, and verified software reviews'
    },
    {
      industry: 'Real Estate & Home Services',
      prompt: '"Trusted contractor in my area" / "Best commercial real estate broker in [City]"',
      solution: 'City-level citation networks, verified licensing proof, and local review aggregation'
    }
  ];

  const faqs = [
    {
      q: 'What are GEO services?',
      a: 'GEO (Generative Engine Optimization) services improve the probability that AI tools such as ChatGPT, Gemini, Claude, and Perplexity mention, cite, and recommend your brand when users ask conversational questions. They work by strengthening your content quality, schema markup, entity data, and authoritative third-party mentions.'
    },
    {
      q: 'How is GEO different from SEO?',
      a: 'SEO focuses on ranking web pages in lists of search engine results based on keywords and backlinks. GEO builds the citable content, entity consensus, and brand authority signals that cause AI tools to name your business inside the synthesized answers they generate.'
    },
    {
      q: 'How long do GEO services take to work?',
      a: 'Many websites see initial citation gains, model mentions, and brand recommendations within 60 to 90 days as structured entity data and PR citations get crawled. Highly competitive commercial niches typically require 4 to 6 months of steady authority building.'
    },
    {
      q: 'Do GEO services replace SEO?',
      a: 'No. GEO builds directly on SEO. AI engines rely on real-time web retrieval and trusted domains, which means strong technical crawlability, organic rankings, and quality backlinks remain essential prerequisites for AI recommendation.'
    },
    {
      q: 'Which businesses need GEO services?',
      a: 'Any business whose buyers compare options, research alternatives, or ask questions before purchasing. This includes dental clinics, healthcare practices, law firms, contractors, e-commerce stores, SaaS companies, and local service providers.'
    },
    {
      q: 'Can you guarantee that ChatGPT will recommend my brand?',
      a: 'No legitimate agency can guarantee that because large language models generate text based on probabilistic neural weights. However, we maximize the exact signals AI tools parse — factual entity consistency, structured schema, author expertise, third-party press mentions, and clean direct answers — and track your citations every month.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* 1. What Are GEO Services & How Generative Engines Pick Brands */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Search Engine Optimization · 15+ Years Search Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            What Are GEO Services?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            GEO services, or generative engine optimization services, improve the chance that AI tools mention, recommend, and cite your brand when they generate answers. They work by strengthening your content, entity data, third-party mentions, and technical signals that large language models rely on.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Buyers now ask an AI tool for a shortlist before they ever open Google: <em>"Which agency should I hire?"</em> and <em>"Which clinic is best near me?"</em> get one synthesized answer with a few select names in it. If your brand is not in that answer, you are not in the race.
          </p>
        </div>

        {/* 2-Column Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: How Generative Engines Pick Brands */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
              <Bot className="w-4 h-4" />
              <span>How Generative Engines Pick Brands</span>
            </div>
            <div className="space-y-3">
              {howEnginesPickBrands.map((item) => (
                <div key={item.num} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="font-mono text-purple-400 font-bold shrink-0 mt-0.5">
                    {item.num}.
                  </span>
                  <div>
                    <strong className="text-white">{item.title}:</strong>{' '}
                    <span className="text-slate-400">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Where GEO Results Appear */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Where GEO Results Appear</span>
            </div>
            <div className="space-y-3">
              {whereGeoResultsAppear.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">{item.title}:</strong>{' '}
                    <span className="text-slate-400">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-850 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white">GEO does not replace SEO. It extends it.</strong> Our GEO services sit directly on a foundation of technical SEO, high-authority content, and white-hat link building, because generative AI tools lean on the exact same trusted web ecosystem that search engines crawl.
        </div>
      </section>

      {/* 2. GEO Statistics: Why AI Visibility Matters in 2026 */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Data-Led Market Reality
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            GEO Statistics: Why AI Visibility Matters in 2026
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            AI search is no longer an experiment. These figures show why generative engine optimization now belongs in every serious commercial growth plan:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Market Metric</th>
                <th className="py-3.5 px-4 sm:px-6">Figure (Approx.)</th>
                <th className="py-3.5 px-4 sm:px-6">Authority Source</th>
                <th className="py-3.5 px-4 sm:px-6">What It Means for Your Brand</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {geoStats.map((stat, idx) => (
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

        <p className="text-xs text-slate-400 italic">
          <strong>The pattern is clear:</strong> Users get answers where they ask, and the brands named in those answers earn commercial trust first.
        </p>
      </section>

      {/* 3. Benefits of GEO Services */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
            Proven Commercial Impact
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Benefits of GEO Services for Modern Businesses
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            For dental clinics, law firms, e-commerce stores, and SaaS platforms, the benefit is direct. When a prospective buyer asks an AI tool for the best option in your city or industry, your brand wins the first impression:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div
              key={b.num}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs font-bold text-purple-400 bg-purple-950/60 px-2.5 py-0.5 rounded border border-purple-900/40 w-fit mb-3">
                  BENEFIT {b.num}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {b.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Our GEO Services Process: 8 Steps */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Systematic Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Our GEO Services Process: 8 Systematic Steps
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            This proven framework operates across every industry and language we support, turning your website into an indisputable AI authority:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {eightStepsProcess.map((step) => (
            <div
              key={step.step}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2 flex flex-col justify-between hover:border-slate-700 transition-all"
            >
              <div>
                <div className="font-mono text-xs font-bold text-purple-400 mb-1">
                  STEP {step.step}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Our 90-Day GEO Services Plan */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Execution Timeline
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Our 90-Day GEO Services Plan
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Early citation gains often appear within 90 days. Because AI algorithms evolve rapidly, we measure citations monthly and calibrate strategy continuously:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ninetyDayPlan.map((phase, idx) => (
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
                <h3 className="text-lg font-bold text-white mb-3">
                  {phase.title}
                </h3>
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

      {/* 6. GEO vs SEO vs AEO: What Is the Difference? */}
      <section className="space-y-4">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
            Channel Comparison & Synergy
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            GEO vs SEO vs AEO: What Is the Difference?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            The three disciplines overlap, and the most profitable search strategies deploy all three. SEO builds the foundation, AEO shapes the content to be quoted, and GEO builds the brand authority that makes AI tools trust and recommend you:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Strategic Factor</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">SEO</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">AEO</th>
                <th className="py-3.5 px-4 sm:px-6 text-purple-400">GEO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.factor}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {row.seo}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-300">
                    {row.aeo}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-purple-300">
                    {row.geo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            <strong>GEO is never finished:</strong> AI tools strongly favor fresh, updated sources. At UDMIDEAS, we audit and update your key citable pages on a quarterly cycle so your content remains accurate and continuously ingested.
          </p>
        </div>
      </section>

      {/* 7. Why Choose UDMIDEAS for GEO Services */}
      <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Proven Agency Leadership
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Choose UDMIDEAS for GEO Services
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Led by founder Arun with 15+ years of hands-on SEO dominance, we combine technical schema engineering, digital PR, and content architecture under one roof:
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

      {/* 8. Industries We Serve */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
            Tailored Industry Frameworks
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Industries We Serve with GEO Solutions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            We adapt prompt research and entity modeling to your industry's specific commercial buying questions:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Industry Sector</th>
                <th className="py-3.5 px-4 sm:px-6">Typical Prompt We Target</th>
                <th className="py-3.5 px-4 sm:px-6">GEO Solution Architecture</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {industriesServed.map((ind, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {ind.industry}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {ind.prompt}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-xs text-slate-300">
                    {ind.solution}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-400 italic">
          <strong>Honesty pledge:</strong> We do not make false promises to control what an AI algorithm outputs. No legitimate agency can. We promise a proven, rigorous process, superior content, and steady, measured progress.
        </p>
      </section>

      {/* 9. GEO Services FAQ */}
      <section className="space-y-4">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Questions & Answers
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            GEO Services FAQ
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
                    <span className="text-xs font-mono font-bold text-purple-400 shrink-0 mt-0.5">
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

      {/* 10. Conclusion: Be the Brand AI Recommends */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-purple-950/60 via-slate-900 to-emerald-950/40 border border-purple-500/30 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Clock className="w-3.5 h-3.5" />
          <span>Full-Spectrum GEO & AEO Architecture</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
          Conclusion: Be the Brand AI Recommends
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Buyers are asking AI tools who to trust, and those tools name only a few brands. GEO services are how you earn a place on that short list. The businesses that start now will build the authority that competitors will struggle to catch later.
        </p>

        <p className="text-sm font-bold text-white">
          Contact Founder Arun directly: <span className="text-emerald-400 font-mono">+91-9521186150</span> · Email: <span className="text-purple-400 font-mono">info@udmideasusa.com</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20ready%20to%20get%20started%20with%20GEO%20Services%20at%20UDMIDEAS."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-950/60 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Arun (+91-9521186150)</span>
          </a>

          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-xl shadow-purple-950/60 transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Request Custom GEO Audit</span>
          </a>
        </div>
      </section>
    </div>
  );
};
