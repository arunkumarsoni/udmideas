import React, { useState } from 'react';
import {
  Share2,
  Users,
  MessageCircle,
  Mail,
  CheckCircle2,
  Globe2,
  Calendar,
  Sparkles,
  Target,
  BarChart3,
  TrendingUp,
  Clock,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Flame,
  Video,
  Layers,
  ArrowRight,
  Eye,
  HeartHandshake,
  Bot
} from 'lucide-react';

export const SmmServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const smmStats = [
    {
      stat: 'Social media users worldwide',
      figure: 'About 5.2 Billion',
      source: 'DataReportal, 2025',
      meaning: 'More than half of the planet is reachable directly on social platforms'
    },
    {
      stat: 'Average daily time on social media',
      figure: 'About 2 hours 20 minutes',
      source: 'Global Web Index',
      meaning: 'Attention is high, so consistent content gets seen repeatedly'
    },
    {
      stat: 'Facebook monthly active users',
      figure: '3 Billion+ (Meta)',
      source: 'Meta Official',
      meaning: 'The widest demographic reach for both local community and global brands'
    },
    {
      stat: 'Instagram monthly active users',
      figure: '2 Billion+ (Meta)',
      source: 'Meta Official',
      meaning: 'Unrivaled visual engagement for clinics, shops, fashion, and lifestyle brands'
    },
    {
      stat: 'LinkedIn registered members',
      figure: '1.2 Billion+',
      source: 'LinkedIn Corp',
      meaning: 'The undisputed premier network for high-ticket B2B leads and executive authority'
    },
    {
      stat: 'YouTube monthly active users',
      figure: 'About 2.5 Billion',
      source: 'Alphabet / YouTube',
      meaning: 'Long and short-form video builds trust and powers Google search indexing'
    },
    {
      stat: 'Buyers preferring content in own language',
      figure: '76%',
      source: 'CSA Research',
      meaning: 'Multilingual SMM services significantly lift brand trust and purchase conversion'
    }
  ];

  const whatWeDoList = [
    {
      title: 'Strategy & Audience Blueprint',
      desc: 'In-depth audience demographic research, competitor content analysis, revenue goals, and platform-by-platform deployment plans.'
    },
    {
      title: 'High-Impact Content Creation',
      desc: 'Engaging carousel decks, vertical reels, short videos, TikToks, stories, and branded visual graphics designed to stop the scroll.'
    },
    {
      title: 'Posting & Rhythm Scheduling',
      desc: 'A complete monthly editorial calendar scheduled at high-engagement peak time slots across your target time zones.'
    },
    {
      title: 'Active Community Management',
      desc: 'Fast, professional replies to comments, incoming direct messages, and reviews that convert viewers into active inquiries.'
    },
    {
      title: 'Paid Social Ad Campaigns',
      desc: 'Precision targeted Meta (Facebook & Instagram), LinkedIn B2B, TikTok, and YouTube video ad funnels tracked against lead costs.'
    },
    {
      title: 'Influencer & Partner Outreach',
      desc: 'Collaborations with authentic regional creators and micro-influencers that naturally fit your brand identity.'
    },
    {
      title: 'Comprehensive Profile Optimization',
      desc: 'Keyword-rich bios, links, featured highlights, and metadata structured so human buyers and search engines easily understand your offer.'
    },
    {
      title: 'Transparent Monthly Reporting',
      desc: 'Clear numbers on organic reach, follower growth, engagement rates, inbound leads, and paid cost-per-acquisition (CPA).'
    }
  ];

  const benefits = [
    {
      num: '01',
      title: 'Broad Brand Awareness',
      desc: 'You reach qualified new prospects before they ever search for your specific services on Google.'
    },
    {
      num: '02',
      title: 'Consistent Inbound Leads',
      desc: 'Educational posts, targeted ads, and frictionless messaging turn casual social attention into qualified customer inquiries.'
    },
    {
      num: '03',
      title: 'Deep Commercial Customer Trust',
      desc: 'Active company profiles, prompt genuine replies, and authentic client reviews prove you are an active, trustworthy business.'
    },
    {
      num: '04',
      title: 'Hyper-Targeted Buyer Reach',
      desc: 'Paid social algorithms let you pinpoint exact location, language, age, interests, industries, and specific executive job titles.'
    },
    {
      num: '05',
      title: 'Lower Cost Per Contact',
      desc: 'Strategic organic posts paired with laser-focused social ads reach prospective buyers at a fraction of traditional media costs.'
    },
    {
      num: '06',
      title: 'Direct Lift for SEO & AI Search',
      desc: 'Brand mentions, active profile backlinks, and high engagement strengthen the entity signals that power AEO and GEO answers.'
    },
    {
      num: '07',
      title: 'First-Hand Customer Insight',
      desc: 'Direct comments and private inquiries highlight exactly what your buyers desire, object to, and value most.'
    },
    {
      num: '08',
      title: 'Seamless Global Multilingual Reach',
      desc: 'One unified agency team speaks to prospective buyers across multiple countries and native languages simultaneously.'
    }
  ];

  const eightStepsProcess = [
    {
      step: '01',
      title: 'Discovery Call',
      desc: 'We learn your business model, core products, target customers, commercial markets, and specific revenue targets.'
    },
    {
      step: '02',
      title: 'Audit & Analysis',
      desc: 'We review your existing profiles, past content performance, audience demographics, and top industry competitors.'
    },
    {
      step: '03',
      title: 'Strategy & Budget Plan',
      desc: 'We select optimal platforms, target languages, core content pillars, posting rhythms, and monthly ad budgets.'
    },
    {
      step: '04',
      title: 'Brand Voice & Design Kits',
      desc: 'We define tone of voice, visual styling, color palettes, and post templates so every creative asset represents your brand.'
    },
    {
      step: '05',
      title: '30-Day Content Calendar',
      desc: 'We plan, write, and design 30 days of posts in advance and share the full calendar for your review and approval.'
    },
    {
      step: '06',
      title: 'Publishing & Engagement',
      desc: 'We publish on schedule and actively reply to comments, messages, and mentions to keep conversations moving.'
    },
    {
      step: '07',
      title: 'Paid Social Campaigns',
      desc: 'We launch and A/B test targeted ad creatives, then systematically shift budget towards the highest-performing audiences.'
    },
    {
      step: '08',
      title: 'Reporting & Optimization',
      desc: 'We deliver clear monthly data reports and use key audience learnings to refine and scale performance the following month.'
    }
  ];

  const multilingualMarkets = [
    {
      lang: 'English',
      markets: 'USA, UK, Canada, Australia, India',
      platforms: 'Facebook, Instagram, LinkedIn, X, YouTube'
    },
    {
      lang: 'Spanish',
      markets: 'Spain, Mexico, Colombia, Argentina, Chile, US Hispanic',
      platforms: 'Instagram, Facebook, TikTok, WhatsApp'
    },
    {
      lang: 'French',
      markets: 'France, Belgium, Switzerland, Canada, North Africa',
      platforms: 'Facebook, Instagram, Snapchat, LinkedIn'
    },
    {
      lang: 'German',
      markets: 'Germany, Austria, Switzerland',
      platforms: 'LinkedIn, Instagram, Facebook, YouTube'
    },
    {
      lang: 'Polish',
      markets: 'Poland, Eastern European diaspora',
      platforms: 'Facebook, YouTube, Instagram'
    },
    {
      lang: 'Arabic',
      markets: 'UAE, Saudi Arabia, Qatar, Kuwait, Egypt',
      platforms: 'Snapchat, Instagram, X, TikTok'
    },
    {
      lang: 'Hebrew',
      markets: 'Israel, Jewish business networks',
      platforms: 'Facebook, Instagram, WhatsApp'
    },
    {
      lang: 'Other Languages',
      markets: 'Portuguese, Hindi, Italian, Turkish and more',
      platforms: 'Chosen per target market after detailed demographic research'
    }
  ];

  const ninetyDayPlan = [
    {
      phase: 'Phase 01',
      timeline: 'Days 1 to 30',
      title: 'Foundation & Profile Setup',
      items: [
        'Discovery call, commercial revenue goals, and brand voice definition',
        'Comprehensive audit of existing profiles, past content, and competitor tactics',
        'Audience and native-language research for each designated geographic market',
        'Strategic platform selection and complete profile bio/link optimization',
        'First 30-day multi-format content calendar submitted for client approval',
        'Tracking infrastructure setup: Meta Pixel, LinkedIn Insight Tag, UTM links, and analytics'
      ]
    },
    {
      phase: 'Phase 02',
      timeline: 'Days 31 to 60',
      title: 'Build & Engagement Rhythm',
      items: [
        'Publish 12 to 20 native posts per platform per month according to plan',
        'Launch vertical reels, short videos, carousels, and visual quote graphics',
        'Initiate targeted paid social ad campaigns with controlled test budgets',
        'Active community management: reply to every comment and message within agreed SLA',
        'Begin authentic micro-influencer, local partner, and industry creator outreach'
      ]
    },
    {
      phase: 'Phase 03',
      timeline: 'Days 61 to 90',
      title: 'Grow, Retarget & Prove ROI',
      items: [
        'Scale top-performing organic post themes and highest-converting ad creatives',
        'Deploy custom retargeting funnels for website visitors and engaged profile followers',
        'Expand into additional regional languages or platforms supported by performance data',
        'Track total impressions, engagement depth, inbound inquiries, and cost per lead',
        'Deliver comprehensive quarterly performance review and roadmap for months 4 through 6'
      ]
    }
  ];

  const whyChooseUdmideas = [
    {
      title: '15+ Years Hands-On Search & Social Leadership',
      desc: 'Arun, our founder, brings over 15 years of digital marketing experience and personally steers client strategy and campaign architecture.'
    },
    {
      title: 'Full In-House Marketing & Tech Expertise',
      desc: 'A multidisciplinary team covering social media, SEO, PPC advertising, content copywriting, and custom React JS web development.'
    },
    {
      title: 'Global Footprint & Clinic Specialization',
      desc: 'We serve clients across the USA, Israel, the Gulf region, Latin America, and Australia, with specialized authority in Texas dental clinics.'
    },
    {
      title: 'Strict White-Hat Trust & Real Engagement',
      desc: 'Clear scope of deliverables, monthly transparent reports, honest commercial targets, and an absolute zero-tolerance policy on fake bot followers.'
    },
    {
      title: 'True Multilingual Native Reach',
      desc: 'Culturally adapted content written by native speakers who understand regional idioms, local celebrations, humor, and hashtags.'
    },
    {
      title: 'One Integrated Growth Engine',
      desc: 'Social media, SEO, AEO, and GEO work together seamlessly so that brand authority gained on social directly feeds search rankings and AI citations.'
    }
  ];

  const industriesServed = [
    {
      industry: 'Dental and Healthcare',
      focus: 'Patient education, treatment before/afters, verified patient reviews, local clinic ads'
    },
    {
      industry: 'Legal and Finance',
      focus: 'LinkedIn thought leadership, attorney authority content, regulatory updates, trust building'
    },
    {
      industry: 'E-commerce Brands',
      focus: 'Product reels, user-generated content, Instagram shop ads, dynamic catalog retargeting'
    },
    {
      industry: 'B2B SaaS and IT Software',
      focus: 'LinkedIn decision-maker lead gen, product feature demos, client case studies, founder webinars'
    },
    {
      industry: 'Real Estate and Home Services',
      focus: 'Walkthrough project videos, neighborhood highlights, local geographic ads, instant lead forms'
    }
  ];

  const faqs = [
    {
      q: 'What are SMM services?',
      a: 'SMM services are social media marketing services. They include audience strategy, content creation, scheduled publishing, community management, paid social advertising, and monthly reporting to grow brand awareness and generate qualified customer leads across social platforms.'
    },
    {
      q: 'Which platforms do you manage?',
      a: 'We manage Facebook, Instagram, LinkedIn, YouTube, TikTok, X (formerly Twitter), Snapchat, and Pinterest. We select the specific platforms based on where your prospective buyers actually spend their time.'
    },
    {
      q: 'Do you offer multilingual SMM services?',
      a: 'Yes. We run English, Spanish, French, German, Polish, Arabic, and Hebrew campaigns with our core team, and cover other regional languages in partnership with vetted native writers.'
    },
    {
      q: 'How long do SMM services take to show results?',
      a: 'Most client accounts see measurable growth in reach and engagement within 60 to 90 days. Inbound lead generation and direct sales velocity depend on your specific commercial offer, ad budget, and target market.'
    },
    {
      q: 'Is social media marketing better than SEO?',
      a: 'They perform different, complementary roles. Social media marketing builds immediate brand awareness, affinity, and community trust, while SEO captures buyers who are actively searching for solutions. At UDMIDEAS, we plan both under one unified strategy.'
    },
    {
      q: 'Do you work with all industries and countries?',
      a: 'Yes. We serve businesses across healthcare, legal, e-commerce, SaaS, real estate, and professional services worldwide, with clients across the USA, Latin America, Europe, the Gulf region, and Australia.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* 1. What Are SMM Services and What Do We Do */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold mb-2">
            <Share2 className="w-3.5 h-3.5" />
            <span>Social Media Marketing Services · 15+ Years Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            What Are SMM Services and What Do We Do?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            SMM services, short for social media marketing services, help your business find, win, and keep customers on platforms such as Facebook, Instagram, LinkedIn, TikTok, YouTube, and X. At UDMIDEAS, we deliver SMM services in many languages for businesses worldwide, backed by 15+ years of digital marketing experience.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Most businesses post when they have time and hope for results. That rarely works. Social media rewards a clear plan, content tailored for each platform, a steady posting rhythm, and paid support where it makes commercial sense. We build and run that entire system for you.
          </p>
        </div>

        {/* What We Do Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whatWeDoList.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pl-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Integration with AEO & GEO note */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/30 border border-blue-500/20 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white">Social media directly powers AI search visibility:</strong> Active, well-described profiles feed authoritative brand signals and real-world entity citations that help your business earn prominent AEO snippet and GEO generative answers across ChatGPT, Gemini, and Google AI Overviews.
        </div>
      </section>

      {/* 2. Social Media Statistics: Why SMM Services Matter */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Global Audience Reach
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Social Media Statistics: Why SMM Services Matter
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Your customers already spend hours every single day on social platforms. The numbers below, drawn from sources such as DataReportal and Meta, show the sheer scale of the commercial opportunity:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Audience Metric</th>
                <th className="py-3.5 px-4 sm:px-6">Figure (Approx.)</th>
                <th className="py-3.5 px-4 sm:px-6">What It Means for You</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {smmStats.map((stat, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-white">
                    {stat.stat}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400 whitespace-nowrap">
                    {stat.figure}
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
          <strong>The message is simple:</strong> Your buyers are on social media right now, and they respond best to brands that speak their native language. Figures are approximate and compiled from public research reports.
        </p>
      </section>

      {/* 3. Benefits of SMM Services */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
            Commercial Advantages
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            8 Tangible Benefits of SMM Services
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            For a dental clinic, a retail shop, or a high-growth SaaS platform, the business outcome is concrete: more of the right people discover you, trust your expertise, and reach out to buy:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b) => (
            <div
              key={b.num}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs font-bold text-purple-400 mb-2">
                  BENEFIT {b.num}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">
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

      {/* 4. How We Do It: Our SMM Services Process in 8 Steps */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Execution Framework
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How We Do It: Our SMM Services Process in 8 Steps
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Every step has an assigned owner on our team, ensuring complete transparency and predictable delivery every month:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {eightStepsProcess.map((step) => (
            <div
              key={step.step}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2 flex flex-col justify-between hover:border-slate-700 transition-all"
            >
              <div>
                <div className="font-mono text-xs font-bold text-blue-400 mb-1">
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

      {/* 5. Multilingual SMM Services: Worldwide, in Any Language */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Global Native Operations
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Multilingual SMM Services: Worldwide, in Any Language
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            A direct literal translation of a social post rarely succeeds. Regional humor, local celebrations, trending hashtags, and even the dominant platform vary dramatically from nation to nation. Our multilingual SMM services deploy native writers who culturally adapt the message, not just the words.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Language</th>
                <th className="py-3.5 px-4 sm:px-6">Main Geographic Markets</th>
                <th className="py-3.5 px-4 sm:px-6">Primary Platforms We Focus On</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {multilingualMarkets.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.lang}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {row.markets}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300 text-xs">
                    {row.platforms}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          We run English, Spanish, French, German, Polish, Arabic, and Hebrew with our core team. For other languages, we partner with verified native writers and review every strategy together so your brand communicates naturally. In addition, our <strong className="text-slate-300">Multilingual SEO services</strong> bring that same international audience to your website through search.
        </p>
      </section>

      {/* 6. Our 90-Day SMM Services Plan */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Proven Timeline
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Our 90-Day SMM Services Plan
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Most social accounts show distinct gains in organic reach and user engagement within 90 days. Lead and sales acceleration depend on your commercial offer, budget, and market, and we set clear, honest targets from day one:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ninetyDayPlan.map((phase, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-900/40">
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
                      <span className="font-mono text-blue-400 font-bold shrink-0 mt-0.5">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Why Choose UDMIDEAS for SMM Services */}
      <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Agency Track Record
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Choose UDMIDEAS for SMM Services
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Under the active leadership of founder Arun (15+ years in digital marketing), we unite social media, SEO, paid ads, and web engineering under one roof:
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
            Sector-Specific Delivery
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Industries We Serve
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            We adapt visual formats, tone of voice, and ad funnels to the specific decision-making journey of your industry:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Industry Sector</th>
                <th className="py-3.5 px-4 sm:px-6">Social Media Strategic Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {industriesServed.map((ind, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {ind.industry}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300 text-xs">
                    {ind.focus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-300 italic">
          <strong>Ethical agency pledge:</strong> We do not buy artificial followers or promise overnight viral illusions. We promise a clear strategy, consistent daily execution, and steady, measured commercial growth.
        </div>
      </section>

      {/* 9. SMM Services FAQ */}
      <section className="space-y-4">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Common Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SMM Services FAQ
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
                    <span className="text-xs font-mono font-bold text-blue-400 shrink-0 mt-0.5">
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

      {/* 10. Conclusion: Turn Followers into Customers */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-950/60 via-slate-900 to-emerald-950/40 border border-blue-500/30 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Clock className="w-3.5 h-3.5" />
          <span>Full-Funnel Organic & Paid Social Campaigns</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
          Conclusion: Turn Followers into Customers
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Social media is where your buyers spend hours every single day, in their own native language. SMM services give you a concrete plan, an authentic brand voice, and a dedicated team to turn that attention into revenue. The brands that show up consistently and speak locally are the ones people remember and choose.
        </p>

        <p className="text-sm font-bold text-white">
          Contact Founder Arun directly: <span className="text-emerald-400 font-mono">+91-9521186150</span> · Email: <span className="text-blue-400 font-mono">info@udmideasusa.com</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20ready%20to%20get%20started%20with%20SMM%20Services%20at%20UDMIDEAS."
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
            <span>Request Custom SMM Plan</span>
          </a>
        </div>
      </section>
    </div>
  );
};
