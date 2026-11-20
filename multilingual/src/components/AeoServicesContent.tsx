import React, { useState } from 'react';
import {
  Cpu,
  Bot,
  Search,
  CheckCircle2,
  Sparkles,
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
  HelpCircle,
  Zap,
  Target,
  BarChart3,
  TrendingUp,
  PhoneCall,
  FileText
} from 'lucide-react';

export const AeoServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const aeoStats = [
    {
      stat: 'US Google searches ending without a click to open web',
      figure: 'About 58%',
      source: 'SparkToro & Datalogue, 2024',
      meaning: 'Visibility inside the direct answer matters as much as traditional ranking'
    },
    {
      stat: 'Monthly active users of Google AI Overviews',
      figure: '1.5 Billion+',
      source: 'Google Official, 2025',
      meaning: 'AI answers now sit permanently above classic organic search listings'
    },
    {
      stat: 'Weekly active users of ChatGPT Search',
      figure: 'About 800 Million',
      source: 'OpenAI, 2025',
      meaning: 'A massive second search channel is growing exponentially'
    },
    {
      stat: 'Traditional search volume expected to fall by 2026',
      figure: '25%',
      source: 'Gartner Forecast',
      meaning: 'Conversational chatbots are taking a permanent share of search demand'
    },
    {
      stat: 'Website traffic coming from organic search',
      figure: '53%',
      source: 'BrightEdge',
      meaning: 'SEO remains the essential underlying foundation that AEO is built on'
    }
  ];

  const whereAeoShowsUp = [
    {
      title: 'Google Featured Snippets & People Also Ask',
      desc: 'Position Zero paragraph boxes, tables, and bulleted lists placed above standard page-one search results.'
    },
    {
      title: 'Google AI Overviews & AI Search Mode',
      desc: 'Synthesized multi-source answer snapshots presented directly to users on desktop and mobile browsers.'
    },
    {
      title: 'ChatGPT, Gemini, Perplexity & Copilot Answers',
      desc: 'Direct conversational citations and brand recommendations when users query generative AI assistants.'
    },
    {
      title: 'Voice Assistants (Siri, Alexa, Google Assistant)',
      desc: 'Single spoken audio responses delivered when drivers and mobile users perform hands-free voice searches.'
    },
    {
      title: 'Local Google Maps & Business Profiles',
      desc: 'Algorithmic conversational answers in local map packs identifying top-rated regional providers.'
    }
  ];

  const howEnginesChooseSource = [
    {
      num: '01',
      title: 'Direct 40-to-60 Word Answers in Opening Lines',
      desc: 'The page answers the exact user query in plain, unambiguous language immediately below the heading.'
    },
    {
      num: '02',
      title: 'Authoritative E-E-A-T Content by Real Experts',
      desc: 'Content is verified, specific, data-backed, and authored by verified practitioners rather than spun copy.'
    },
    {
      num: '03',
      title: 'Machine-Readable Schema.org Markup',
      desc: 'FAQPage, Service, and LocalBusiness JSON-LD markup tells crawlers exactly what each data block represents.'
    },
    {
      num: '04',
      title: 'Recognized Entity Authority Across the Web',
      desc: 'Consistent brand co-occurrences, third-party directory citations, and reputable press mentions validate trust.'
    },
    {
      num: '05',
      title: 'Sub-Second Speeds & Clean Crawlability',
      desc: 'Fast Core Web Vitals, clean DOM tree, and responsive mobile architecture make instant parsing effortless.'
    }
  ];

  const benefits = [
    {
      num: '01',
      title: 'Exponential Organic Visibility',
      desc: 'Your brand appears in featured snippets, Google AI Overviews, and conversational chatbot answers — not just buried in a list of ten blue links.'
    },
    {
      num: '02',
      title: 'Instant Trust & Entity Authority',
      desc: 'Being cited as the definitive answer establishes undisputed commercial authority in the prospect’s mind before they even land on your website.'
    },
    {
      num: '03',
      title: 'Superior Inbound Lead Quality',
      desc: 'Users asking specific, complex commercial questions who read your direct solution arrive at your contact form already pre-sold and ready to buy.'
    },
    {
      num: '04',
      title: 'Hands-Free Voice & Mobile Reach',
      desc: 'When mobile and smart-device users ask voice questions, assistants speak only one single answer aloud — and AEO ensures that answer is yours.'
    },
    {
      num: '05',
      title: 'Reinforces Traditional Organic SEO',
      desc: 'The clean structure, semantic schema, and sub-second page performance required for AEO directly elevate your classic keyword rankings.'
    },
    {
      num: '06',
      title: 'Compounding Lower Cost Over Time',
      desc: 'Unlike paid ads that stop the moment funding pauses, a well-engineered answer page serves prospects and AI crawlers for years at zero per-click cost.'
    },
    {
      num: '07',
      title: 'Decisive Early-Mover Advantage',
      desc: 'Most competitors have not yet optimized for answer engines. Early movers secure foundational entity citations that become harder to displace.'
    }
  ];

  const eightStepsProcess = [
    {
      step: '01',
      title: 'AEO & Technical Crawl Audit',
      desc: 'We examine your site speed, indexing, Core Web Vitals, existing schema markup, and current snippet and AI visibility footprint.'
    },
    {
      step: '02',
      title: 'Real-World Question Research',
      desc: 'We mine over 100+ actual buyer questions asked across Google People Also Ask, AnswerThePublic, customer forums, and generative AI tools.'
    },
    {
      step: '03',
      title: 'Search Intent & Funnel Mapping',
      desc: 'Every question is categorized by commercial intent, mapped to a dedicated target page, and aligned with a specific customer decision stage.'
    },
    {
      step: '04',
      title: 'Precision Direct-Answer Writing',
      desc: 'We open every target section with an airtight 40-to-60 word definitive answer, supported by technical depth, proof, and real examples.'
    },
    {
      step: '05',
      title: 'Semantic Content Architecture',
      desc: 'We format content into clean H2/H3 hierarchies, bulleted checklists, comparison tables, and FAQ accordions that machines extract cleanly.'
    },
    {
      step: '06',
      title: 'Advanced Schema.org Markup',
      desc: 'We inject nested JSON-LD structured data (FAQPage, Service, Organization, LocalBusiness, Article) following strict Google guidelines.'
    },
    {
      step: '07',
      title: 'Entity & Authority Link Building',
      desc: 'We harmonize your business entity across Google Knowledge Graph and acquire authoritative backlinks and brand mentions.'
    },
    {
      step: '08',
      title: 'Continuous Tracking & Content Refresh',
      desc: 'We monitor snippet share, AI citations, and lead attribution every month, updating answers quarterly to prevent content decay.'
    }
  ];

  const ninetyDayPlan = [
    {
      phase: 'Phase 01',
      timeline: 'Days 1 to 30',
      title: 'Foundation & Baseline Audit',
      color: 'blue',
      items: [
        'Comprehensive technical audit: crawlability, indexing, mobile speed, and Core Web Vitals',
        'Baseline benchmark report of current featured snippets, People Also Ask, and AI citations',
        'In-depth question research mapping 100+ commercial buyer questions and search intent',
        'Competitor answer gap analysis across target geographic markets',
        'Entity cleanup: brand name, business address, NAP consistency, and Google Business Profile',
        'Prioritized page roadmap assigning exactly one target question cluster per URL'
      ]
    },
    {
      phase: 'Phase 02',
      timeline: 'Days 31 to 60',
      title: 'Build & Schema Implementation',
      color: 'emerald',
      items: [
        'Rewrite or craft the top 10 to 15 high-priority direct answer landing pages',
        'Integrate concise 40-60 word opening answer blocks, structured tables, and FAQs',
        'Deploy custom JSON-LD schema (FAQPage, Service, Organization, LocalBusiness)',
        'Optimize internal link silos so high-authority answer pages support commercial service pages',
        'Initiate digital PR, local citations, and targeted white-hat backlink acquisition'
      ]
    },
    {
      phase: 'Phase 03',
      timeline: 'Days 61 to 90',
      title: 'Grow, Measure & Prove ROI',
      color: 'purple',
      items: [
        'Expand optimization to long-tail and commercial comparison ("vs") questions',
        'A/B test headings and answer phrasing on pages generating impressions without snippets',
        'Embed proprietary data points, media, and tables that generative AI algorithms favor',
        'Track snippet capture, AI engine citations, phone calls, form inquiries, and revenue',
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
      seo: 'Rank pages in standard organic search listings',
      aeo: 'Be the direct featured answer to user questions',
      geo: 'Be cited and recommended by AI language models'
    },
    {
      factor: 'Where it wins',
      seo: 'Google and Bing traditional search results',
      aeo: 'Google Snippets, AI Overviews, voice assistants',
      geo: 'ChatGPT, Google Gemini, Perplexity, Copilot'
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
      geo: 'AI mention frequency and generative citation share'
    }
  ];

  const whyChooseUdmideas = [
    {
      title: '15+ Years Hands-On Search Experience',
      desc: 'Arun, our founder, personally leads strategy, crawl audits, and answer formatting rather than handing your site to junior account managers.'
    },
    {
      title: 'Full-Stack Technical Depth',
      desc: 'Our in-house team combines technical SEO engineers, schema programmers, React JS developers, and PR outreach specialists under one roof.'
    },
    {
      title: 'Global Track Record & Texas Clinics',
      desc: 'We serve clients across the USA, Israel, the Gulf region, Latin America, and Australia, with deep specialized authority in Texas dental practices.'
    },
    {
      title: 'Strict White-Hat Transparency',
      desc: 'Clear project scopes, monthly citation tracking reports, and 100% white-hat manual execution with zero artificial spam links or fake metrics.'
    },
    {
      title: 'Native Multilingual Delivery',
      desc: 'We execute AEO across English, Spanish, French, German, Polish, and Arabic, ensuring right-to-left code formatting and native dialect precision.'
    },
    {
      title: 'Integrated SEO, AEO & GEO Architecture',
      desc: 'We engineer classic SEO, snippet AEO, and generative GEO into one unified system so your content wins across every search modality.'
    }
  ];

  const industriesServed = [
    {
      industry: 'Dental & Healthcare Clinics',
      question: '"Who is the best dentist near me?" / "How much do dental implants cost?"',
      solution: 'Local map pack AEO, procedure pricing tables, and dentist credential schemas'
    },
    {
      industry: 'Legal & Financial Firms',
      question: '"How much does a corporate business lawyer cost?" / "Do I need a trust?"',
      solution: 'Authoritative E-E-A-T legal definitions, statutory citations, and direct answers'
    },
    {
      industry: 'E-Commerce Brands',
      question: '"Which product is best for X?" / "How to choose between Model A and Model B?"',
      solution: 'Product schema, comparison feature tables, and buyer guide answer snippets'
    },
    {
      industry: 'B2B SaaS & IT Software',
      question: '"What is the best CRM software for small business?" / "How does API X work?"',
      solution: 'Technical documentation AEO, software feature matrices, and software application schema'
    },
    {
      industry: 'Real Estate & Home Contractors',
      question: '"Who is a trusted licensed contractor in my city?" / "Roof replacement cost"',
      solution: 'City-specific citation networks, service cost breakdowns, and local trade proof'
    }
  ];

  const faqs = [
    {
      q: 'What are AEO services?',
      a: 'AEO (Answer Engine Optimization) services optimize your website content, schema markup, and entity signals so Google, ChatGPT, Gemini, Perplexity, and voice assistants extract and display your page as the direct, authoritative answer to a user\'s question.'
    },
    {
      q: 'How is AEO different from SEO?',
      a: 'Traditional SEO focuses on ranking web pages in lists of ten blue links. AEO shapes the specific content on those pages — using concise 40-to-60 word summaries, structured tables, and schema — so the single best answer gets quoted in snippets, AI Overviews, and conversational chatbots.'
    },
    {
      q: 'How long do AEO services take to work?',
      a: 'Most websites see early featured snippet captures and AI citations within 60 to 90 days as schema and opening answer blocks are indexed. Highly competitive commercial queries typically take 4 to 6 months of steady authority building.'
    },
    {
      q: 'Do AEO services replace SEO?',
      a: 'No. AEO sits directly on top of SEO. Without technical site health, fast Core Web Vitals, authoritative backlinks, and quality long-form content, answer engines have no trustworthy foundation to cite.'
    },
    {
      q: 'Which businesses need AEO services?',
      a: 'Any business whose customers ask questions before buying benefits from AEO. This includes dental practices, healthcare clinics, law firms, contractors, e-commerce stores, B2B SaaS companies, and local service providers.'
    },
    {
      q: 'Can you guarantee that ChatGPT will name my brand?',
      a: 'No honest agency can make that guarantee because AI models use probabilistic neural weights. However, we maximize the exact signals AI tools parse — factual entity consistency, structured schema, expert authorship, third-party press mentions, and clean direct answers — and track your citation growth every month.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* 1. What Are AEO Services & Where It Shows Up */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1D4ED8] font-mono text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Next-Generation Search Visibility · 15+ Years Search Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            What Are AEO Services?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
            AEO services, or answer engine optimization services, prepare your website and brand entity so search engines and AI tools can extract a clear, correct answer from your content and display it directly to users. The objective is to be <strong className="text-[#0F172A]">the answer</strong>, not merely an unclicked link.
          </p>
        </div>

        {/* 2-Column Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Where AEO Shows Up */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Where AEO Appears Across Modern Search</span>
            </div>
            <div className="space-y-3">
              {whereAeoShowsUp.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#475569]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A]">{item.title}:</strong>{' '}
                    <span className="text-[#64748B]">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: How Answer Engines Choose a Source */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
              <Bot className="w-4 h-4" />
              <span>How Answer Engines Select Your Business</span>
            </div>
            <div className="space-y-3">
              {howEnginesChooseSource.map((item) => (
                <div key={item.num} className="flex items-start gap-2.5 text-xs text-[#475569]">
                  <span className="font-mono text-emerald-700 font-bold shrink-0 mt-0.5">
                    {item.num}.
                  </span>
                  <div>
                    <strong className="text-[#0F172A]">{item.title}:</strong>{' '}
                    <span className="text-[#64748B]">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed">
          <strong className="text-[#0F172A]">Traditional SEO ranks pages. AEO makes sure the right sentence from your page is the one that gets quoted.</strong> We treat the two as one connected system, which is why our AEO services sit directly on top of robust technical SEO, schema architecture, and high-authority link building.
        </div>
      </section>

      {/* 2. AEO Statistics: Why Answers Matter in 2026 */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider mb-1">
            Data-Led Market Reality
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            AEO Statistics: Why Answers Matter in 2026
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
            The fundamental shift from scrolling links to reading answers is already evident in global search analytics. These figures explain why AEO is now mandatory for high-converting search visibility:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Market Metric</th>
                <th className="py-3.5 px-4 sm:px-6">Figure (Approx.)</th>
                <th className="py-3.5 px-4 sm:px-6">Authority Source</th>
                <th className="py-3.5 px-4 sm:px-6">What It Means for Your Brand</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {aeoStats.map((stat, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#0F172A]">
                    {stat.stat}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-700 whitespace-nowrap">
                    {stat.figure}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#64748B] text-xs whitespace-nowrap">
                    {stat.source}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#475569] text-xs">
                    {stat.meaning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-[#64748B] italic">
          <strong>The core takeaway:</strong> Search is not dying, but the click is moving. Brands that supply the definitive answer capture buyer trust, even before the visitor ever clicks through to a page.
        </p>
      </section>

      {/* 3. Benefits of AEO Services */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider mb-1">
            Proven Commercial Impact
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Benefits of AEO Services for Modern Businesses
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
            For service businesses like dental practices, legal firms, and home contractors, the ROI is direct. When someone searches <em>"who is the best dentist near me"</em> and an AI assistant names your clinic, the phone call comes to you:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div
              key={b.num}
              className="p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-blue-600/30 transition-all space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 w-fit mb-3">
                  BENEFIT {b.num}
                </div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2">
                  {b.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Our AEO Services Process: 8 Steps */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider mb-1">
            Systematic Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Our AEO Services Process: 8 Systematic Steps
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
            This 8-step framework functions across every industry and language we support, transforming standard content into authoritative direct-answer assets:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {eightStepsProcess.map((step) => (
            <div
              key={step.step}
              className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2 flex flex-col justify-between hover:border-blue-600/30 transition-all"
            >
              <div>
                <div className="font-mono text-xs font-bold text-[#1D4ED8] mb-1">
                  STEP {step.step}
                </div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Our 90-Day AEO Services Plan */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wider mb-1">
            Execution Timeline
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Our 90-Day AEO Services Plan
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Most websites show early snippet captures and AI citations within 90 days. We establish a clear, predictable quarterly timeline from audit to measurable revenue:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ninetyDayPlan.map((phase, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col justify-between hover:border-blue-600/30 transition-all relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    {phase.timeline}
                  </span>
                  <span className="text-xs font-mono text-[#64748B] font-bold">
                    {phase.phase}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                  {phase.title}
                </h3>
                <div className="space-y-2.5 pt-3 border-t border-[#E2E8F0]">
                  {phase.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2 text-xs text-[#475569]">
                      <span className="font-mono text-emerald-700 font-bold shrink-0 mt-0.5">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. AEO vs SEO vs GEO: What Is the Difference? */}
      <section className="space-y-4">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider mb-1">
            Channel Comparison & Synergy
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            AEO vs SEO vs GEO: What Is the Difference?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
            The three disciplines overlap, and an elite search strategy integrates all three. SEO is the foundation, AEO formats the answers, and GEO establishes the brand authority:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Strategic Factor</th>
                <th className="py-3.5 px-4 sm:px-6 text-[#1D4ED8]">SEO</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-700">AEO</th>
                <th className="py-3.5 px-4 sm:px-6 text-purple-700">GEO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0F172A] whitespace-nowrap">
                    {row.factor}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#0F172A]">
                    {row.seo}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-700">
                    {row.aeo}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-purple-700">
                    {row.geo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] space-y-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
          <p>
            <strong>AEO is never a one-time project:</strong> Answers go stale over time, and generative AI models strongly favor fresh, updated sources. At UDMIDEAS, we audit and update your priority answer pages every quarter to protect your citations.
          </p>
        </div>
      </section>

      {/* 7. Why Choose UDMIDEAS for AEO Services */}
      <section className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2E8F0] space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider mb-1">
            Proven Agency Leadership
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Why Choose UDMIDEAS for AEO Services
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
            Led by founder Arun with more than 15 years of technical search engine dominance, we combine engineering rigor, semantic schema, and high-authority link outreach under one roof:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whyChooseUdmideas.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
              <h4 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{item.title}</span>
              </h4>
              <p className="text-xs text-[#475569] pl-6 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Industries We Serve */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-wider mb-1">
            Tailored Industry Frameworks
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Industries We Serve with AEO Solutions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
            We adapt question research and schema models to your industry's specific commercial buying questions:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Industry Sector</th>
                <th className="py-3.5 px-4 sm:px-6">Typical Question We Target</th>
                <th className="py-3.5 px-4 sm:px-6">AEO Solution Architecture</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
              {industriesServed.map((ind, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0F172A] whitespace-nowrap">
                    {ind.industry}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#0F172A]">
                    {ind.question}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-xs text-[#475569]">
                    {ind.solution}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-[#64748B] italic">
          <strong>Honesty pledge:</strong> We do not make false promises to control what an AI algorithm outputs. No legitimate agency can. We promise a proven, rigorous process, superior content, and steady, measured progress.
        </p>
      </section>

      {/* 9. AEO Services FAQ */}
      <section className="space-y-4">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider mb-1">
            Questions & Answers
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            AEO Services FAQ
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-[#1D4ED8] shrink-0 mt-0.5">
                      Q{String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#0F172A] leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <div className="text-[#64748B] shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pt-1 sm:px-5 sm:pb-6 border-t border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed">
                    <p className="pl-7">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. Conclusion: Be the Answer Your Customers Hear */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-50/70 via-white to-emerald-50/40 border border-blue-200 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-semibold">
          <Clock className="w-3.5 h-3.5" />
          <span>Full-Spectrum AEO & GEO Architecture</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight max-w-2xl mx-auto">
          Conclusion: Be the Answer Your Customers Hear
        </h2>

        <p className="text-xs sm:text-sm text-[#475569] max-w-xl mx-auto leading-relaxed">
          Search is turning into conversation. The brand that provides the clear, trusted answer wins the customer, often without a single click. AEO services are how you earn that place while competitors are still chasing outdated keyword tricks.
        </p>

        <p className="text-sm font-bold text-[#0F172A]">
          Contact Founder Arun directly: <span className="text-emerald-700 font-mono">+91-9521186150</span> · Email: <span className="text-[#1D4ED8] font-mono">info@udmideasusa.com</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20ready%20to%20get%20started%20with%20AEO%20Services%20at%20UDMIDEAS."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Arun (+91-9521186150)</span>
          </a>

          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Request Custom AEO Audit</span>
          </a>
        </div>
      </section>
    </div>
  );
};
