import React, { useState } from 'react';
import {
  MousePointerClick,
  TrendingUp,
  Target,
  BarChart3,
  DollarSign,
  ShoppingCart,
  Search,
  Video,
  Layers,
  Globe2,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Mail,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Store,
  Smartphone,
  Eye,
  FileCheck,
  AlertTriangle,
  Award
} from 'lucide-react';

export const PpcServicesContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const ppcStats = [
    {
      stat: 'Google searches performed annually',
      figure: 'About 5 Trillion',
      source: 'Google Official, 2025',
      meaning: 'Massive, continuous commercial search intent ready to be captured'
    },
    {
      stat: 'Average revenue returned per $1 spent',
      figure: 'About $2 (2x ROAS)',
      source: 'Google Economic Impact',
      meaning: 'Professionally engineered PPC campaigns reliably pay for themselves'
    },
    {
      stat: 'Average click-through rate, Search ads',
      figure: 'About 3%',
      source: 'WordStream Benchmarks',
      meaning: 'High-intent searchers actively click when ads closely match their problem'
    },
    {
      stat: 'Average click-through rate, Display ads',
      figure: 'Under 1%',
      source: 'WordStream Benchmarks',
      meaning: 'Display ads require a distinct remarketing and brand-recall objective'
    },
    {
      stat: 'Clicks on high-intent queries that go to ads',
      figure: 'About 65%',
      source: 'WordStream Research',
      meaning: 'Buyers with active purchasing intent choose top-ranking sponsored ads'
    },
    {
      stat: 'Buyers who prefer ads in own language',
      figure: '76%',
      source: 'CSA Research',
      meaning: 'Multilingual ad copy significantly lifts conversion rates and trust'
    }
  ];

  const whatWeDoList = [
    {
      title: 'Account Audit & Growth Strategy',
      desc: 'Deep audit of past account spend, commercial margins, competitor ad copy, and high-intent keyword mapping.'
    },
    {
      title: 'Full-Funnel Campaign Setup',
      desc: 'Expert launch across Google Search, Performance Max, Demand Gen, YouTube Video, Display remarketing, and Shopping.'
    },
    {
      title: 'Conversion-Focused Ad Creation',
      desc: 'Writing high-CTR headlines, descriptions, callout assets, structured snippets, image banners, and responsive video scripts.'
    },
    {
      title: 'Precision Conversion Tracking',
      desc: 'Server-side Google Tag Manager, GA4 event modeling, Google Ads enhanced conversions, and dynamic call tracking.'
    },
    {
      title: 'Google Merchant Center & Feeds',
      desc: 'Merchant Center setup, GTIN/barcode mapping, supplemental feeds, and custom labels for profitable eCommerce catalog sales.'
    },
    {
      title: 'Landing Page & Message Match',
      desc: 'Technical advice on page speed, headline message match, form friction, mobile UI, and localized trust signals.'
    },
    {
      title: 'Relentless Weekly Optimization',
      desc: 'Bidding strategy tuning, search term mining, negative keyword exclusions, placement filtering, and budget re-allocation.'
    },
    {
      title: 'Transparent ROI Reporting',
      desc: 'Clear monthly dashboards detailing actual ad spend, cost per lead (CPL), revenue, and return on ad spend (ROAS).'
    }
  ];

  const benefits = [
    {
      num: '01',
      title: 'Immediate Market Results',
      desc: 'Unlike organic channels that build over months, paid ads can go live and drive qualified traffic within days.'
    },
    {
      num: '02',
      title: 'Pay for Clicks, Not Guesses',
      desc: 'You maintain absolute daily budget control and pay Google only when a prospective buyer actively clicks your ad.'
    },
    {
      num: '03',
      title: 'High Commercial Intent',
      desc: 'You intercept buyers at the exact second they are searching for the specific services or products you sell.'
    },
    {
      num: '04',
      title: 'Micro-Precise Targeting',
      desc: 'Filter traffic by geographic radius, ZIP code, native language, device, in-market audiences, and time of day.'
    },
    {
      num: '05',
      title: 'Fully Measurable Return',
      desc: 'Every single click, phone call, form inquiry, and eCommerce purchase is tracked against ad spend down to the cent.'
    },
    {
      num: '06',
      title: 'Effortlessly Scalable',
      desc: 'Quickly raise ad budgets on profitable campaigns with positive ROAS and pause underperforming segments instantly.'
    },
    {
      num: '07',
      title: 'Synergy with SEO Services',
      desc: 'PPC provides immediate keyword conversion data, allowing our SEO team to build lasting organic rankings for proven winners.'
    }
  ];

  const campaignObjectives = [
    {
      objective: 'Sales',
      types: 'Shopping, Performance Max, Search',
      example: 'Online jewelry store selling diamond rings',
      tracking: 'Total revenue, Return on Ad Spend (ROAS)'
    },
    {
      objective: 'Leads',
      types: 'Search, Performance Max, Demand Gen',
      example: 'Texas dental clinic booking implant consultations',
      tracking: 'Cost per lead (CPL), phone calls, booking forms'
    },
    {
      objective: 'Website Traffic',
      types: 'Search, Display, Demand Gen',
      example: 'Niche blog or news publication expanding readership',
      tracking: 'Clicks, Cost Per Click (CPC), engaged sessions'
    },
    {
      objective: 'App Promotion',
      types: 'App campaigns, YouTube',
      example: 'Fitness tracking mobile application',
      tracking: 'App installs, cost per install, in-app registrations'
    },
    {
      objective: 'YouTube Views & Engagement',
      types: 'Video campaigns',
      example: 'Consumer brand launching a flagship product video',
      tracking: 'Video views, view rate, cost per view (CPV)'
    },
    {
      objective: 'Local Store Visits',
      types: 'Performance Max with store goals, Local Search',
      example: 'Multi-location dental clinic, restaurant, or retail store',
      tracking: 'Store visits, phone calls, map direction requests'
    }
  ];

  const campaignTypesComparison = [
    {
      type: 'Search',
      where: 'Google search results top & bottom text ads',
      bestFor: 'High-intent lead generation & immediate sales',
      who: 'Clinics, lawyers, contractors, B2B, and high-intent local services'
    },
    {
      type: 'Performance Max',
      where: 'Search, YouTube, Display, Maps, Gmail, and Discover',
      bestFor: 'Multichannel sales, qualified leads, and store visits at scale',
      who: 'Accounts with proven conversion history and high-quality creative assets'
    },
    {
      type: 'Demand Gen',
      where: 'YouTube Shorts, Discover feed, and Gmail inboxes',
      bestFor: 'Stimulating consumer demand with visual ads & remarketing',
      who: 'Brands launching innovative products with rich lifestyle photography/video'
    },
    {
      type: 'Video',
      where: 'YouTube in-stream, in-feed, and Shorts',
      bestFor: 'Brand awareness, founder credibility, and app downloads',
      who: 'Healthcare authorities, software demos, and direct-to-consumer brands'
    },
    {
      type: 'Display',
      where: 'Over 3 million partner websites and mobile apps',
      bestFor: 'Top-of-funnel reach and low-cost visitor remarketing',
      who: 'Any business wanting to stay top-of-mind with past website visitors'
    },
    {
      type: 'Shopping',
      where: 'Product listings in Google search results & Shopping tab',
      bestFor: 'Direct physical product eCommerce sales',
      who: 'eCommerce stores with an active Google Merchant Center product feed'
    }
  ];

  const formatComparison = [
    {
      format: 'Text (Google Search)',
      strength: 'Highest commercial purchase intent; easiest to track and attribute',
      weakness: 'Requires existing search volume; competitive CPCs in crowded niches',
      role: 'Primary lead generation & direct sales revenue engine'
    },
    {
      format: 'Video (YouTube Ads)',
      strength: 'Builds deep emotional trust, authority, and high brand recall at low CPV',
      weakness: 'Longer path to direct immediate checkout sales',
      role: 'Brand awareness, procedure education, and product launches'
    },
    {
      format: 'Display Banners',
      strength: 'Massive global reach at very low cost per thousand impressions (CPM)',
      weakness: 'Lower direct click-through rate and commercial intent',
      role: 'Strategic remarketing to re-engage past website visitors'
    }
  ];

  const tenStepsProcess = [
    { step: '01', title: 'Discovery & Business Margins', desc: 'We analyze your average order value, customer lifetime value, commercial margins, and target locations.' },
    { step: '02', title: 'Account & Competitor Audit', desc: 'We uncover wasted ad spend in existing accounts and benchmark competitor bidding strategies and ad copy.' },
    { step: '03', title: 'Tracking First Architecture', desc: 'We install Google Tag Manager, GA4, offline conversion tracking, and call recording before spending a single dollar.' },
    { step: '04', title: 'Objective & Campaign Choice', desc: 'We match your specific commercial goals to the correct campaign format (Search, Shopping, PMax, or Video).' },
    { step: '05', title: 'Keyword & Audience Clustering', desc: 'We organize keywords by commercial intent and load extensive negative keyword lists to prevent wasted clicks.' },
    { step: '06', title: 'High-Converting Ad & Asset Creation', desc: 'We draft compelling headlines, descriptions, callouts, sitelinks, and rich visual image extensions.' },
    { step: '07', title: 'Landing Page Conversion Audit', desc: 'We verify headline alignment, mobile loading speed, trust badges, and friction-free inquiry forms.' },
    { step: '08', title: 'Smart Budget & Bidding Setup', desc: 'We establish daily budget caps and begin with data-appropriate bidding strategies (e.g. Maximize Conversions with tCPA).' },
    { step: '09', title: 'Weekly Search Term Pruning', desc: 'We review actual search queries weekly, adding negative keywords, testing ad copy, and optimizing placements.' },
    { step: '10', title: 'Monthly Executive ROI Report', desc: 'We deliver clear monthly data on total ad spend, cost per lead, ROAS, and strategic recommendations for next month.' }
  ];

  const shoppingFeedRules = [
    { attr: 'id', rule: 'Must be unique per product and never modified over time', example: 'SKU-1021' },
    { attr: 'title', rule: 'Brand name + product type + key feature + color + size', example: "Women's Brown Leather Crossbody Bag, Adjustable Strap, 10 inch" },
    { attr: 'description', rule: 'Factual, accurate description without promotional hype or ALL CAPS', example: 'Full-grain leather crossbody bag with two inner zip pockets and brass hardware' },
    { attr: 'link', rule: 'Direct URL to the exact canonical product page', example: '/bags/brown-crossbody' },
    { attr: 'image_link', rule: 'High-resolution photo on clean plain background (minimum 800x800 px)', example: 'brown-crossbody-front.webp' },
    { attr: 'price & availability', rule: 'Must match the product page and checkout cart currency exactly', example: '49.00 USD, in stock' },
    { attr: 'gtin, brand, category', rule: 'Legitimate UPC/EAN barcode, manufacturer brand, and official Google taxonomy', example: 'Handbags and Wallets (Category ID: 3032)' }
  ];

  const caseStudyMetrics = [
    { metric: 'Monthly Ad Spend', m1: '$3,000', m3: '$3,000', note: 'Strict budget discipline maintained' },
    { metric: 'Qualified Leads (Calls & Forms)', m1: '38 leads', m3: '74 leads', note: '+94.7% increase in patient inquiries' },
    { metric: 'Average Cost Per Lead (CPL)', m1: '$79 / lead', m3: '$41 / lead', note: '-48.1% reduction in patient acquisition cost' }
  ];

  const clientReviews = [
    {
      client: 'Dr. M. Vance, DDS',
      location: 'Dallas, Texas, USA',
      service: 'Dental Implant Search & Call Only Ads',
      quote: 'UDMIDEAS restructured our Google Ads completely. Within 60 days our cost per implant consultation dropped from $82 down to $39, and the phone calls coming in are actually pre-qualified patients ready to start treatment.'
    },
    {
      client: 'Camila Rodriguez',
      location: 'Bogotá, Colombia',
      service: 'Google Shopping & Performance Max',
      quote: 'Arun and his team overhauled our Merchant Center feed, fixed our product schema, and launched Performance Max across Colombia and Mexico. Our eCommerce ROAS increased from 1.8x to over 4.2x in three months.'
    },
    {
      client: 'Julian Harris',
      location: 'Sydney, Australia',
      service: 'B2B SaaS Lead Generation',
      quote: 'They built clean single-theme ad groups with exact negative matching that eliminated all the junk clicks we used to pay for. UDMIDEAS treats our ad spend as if it were their own money.'
    }
  ];

  const ninetyDayPlan = [
    {
      phase: 'Phase 01',
      timeline: 'Days 1 to 30',
      title: 'Foundation & Tracking Setup',
      items: [
        'Complete account audit, commercial margin analysis, and target CPA/ROAS modeling',
        'Deploy Google Tag Manager, GA4 enhanced conversions, and dynamic call tracking',
        'Conduct granular commercial intent keyword research and build negative keyword lists',
        'Configure Google Merchant Center and optimize product data feed for eCommerce stores',
        'Perform landing page conversion rate audit (message match, speed, and trust elements)',
        'Launch initial Search or Shopping campaigns with conservative learning-phase bids'
      ]
    },
    {
      phase: 'Phase 02',
      timeline: 'Days 31 to 60',
      title: 'Optimize & Eliminate Waste',
      items: [
        'Review actual search query logs weekly and add negative keywords aggressively',
        'A/B test responsive search ad headlines, descriptions, and visual image extensions',
        'Calibrate device, demographic, and geographic bid adjustments based on real data',
        'Launch Performance Max or Demand Gen campaigns backed by validated creative assets',
        'Deploy strategic remarketing lists for past site visitors on YouTube and Display'
      ]
    },
    {
      phase: 'Phase 03',
      timeline: 'Days 61 to 90',
      title: 'Scale & Maximize ROAS',
      items: [
        'Gradually increase budget on winning campaigns that consistently meet target CPA/ROAS',
        'Expand geographic targeting to neighboring metros, states, or international markets',
        'Introduce YouTube video campaigns for high-ticket service education and brand authority',
        'Benchmark overall cost per lead and revenue against initial baseline commercial goals',
        'Deliver a full quarterly performance review and strategic roadmap for months 4 through 6'
      ]
    }
  ];

  const geographicMarkets = [
    {
      region: 'United States',
      examples: 'Texas, California, Florida, New York, Illinois and nationwide',
      languages: 'English, Spanish',
      campaigns: 'Local Search, Dental Call Ads, Shopping, Performance Max'
    },
    {
      region: 'Latin America',
      examples: 'Mexico, Colombia, Argentina, Chile, Peru, Brazil',
      languages: 'Spanish, Portuguese',
      campaigns: 'Google Shopping, High-Intent Search, YouTube Funnels'
    },
    {
      region: 'Gulf & Middle East',
      examples: 'UAE (Dubai/Abu Dhabi), Saudi Arabia, Qatar, Kuwait, Israel',
      languages: 'Arabic, Hebrew, English',
      campaigns: 'Search Lead Gen, Display Remarketing, Video Views'
    },
    {
      region: 'Europe',
      examples: 'France, Germany, Poland, Spain, UK',
      languages: 'French, German, Polish, Spanish, English',
      campaigns: 'International Search, Shopping Feeds, Demand Gen'
    },
    {
      region: 'Australia & APAC',
      examples: 'Sydney, Melbourne, Brisbane, Perth',
      languages: 'English',
      campaigns: 'Local Search, Service Business Leads, Performance Max'
    }
  ];

  const whyChooseUdmideas = [
    {
      title: '15+ Years Hands-On Search & PPC Mastery',
      desc: 'Arun, our founder, brings over 15 years of search marketing experience and personally architects your campaign structure, bidding, and negative keywords.'
    },
    {
      title: 'Multidisciplinary In-House Engineering',
      desc: 'Our team combines certified Google Ads managers, SEO strategists, conversion copywriters, and React JS web developers under one roof.'
    },
    {
      title: 'Deep Texas Dental & Medical Specialization',
      desc: 'We have managed high-volume patient acquisition campaigns for clinics in Dallas, Houston, Austin, and San Antonio with proven CPL reductions.'
    },
    {
      title: '100% Account Ownership & Transparency',
      desc: 'You maintain direct administrative ownership of your Google Ads account. You see every single click, search term, and dollar spent in real time.'
    },
    {
      title: 'Native Multilingual Campaign Copy',
      desc: 'We craft localized ads in English, Spanish, French, German, Polish, Arabic, and Hebrew so your message resonates naturally with regional buyers.'
    },
    {
      title: 'Specialized eCommerce Feed Engineering',
      desc: 'We handle complex Google Merchant Center approvals, GTIN barcode validation, supplemental feeds, and custom label profit segmentation.'
    },
    {
      title: 'Unified PPC, SEO, AEO & GEO Strategy',
      desc: 'We plan paid search alongside organic search and AI engine optimization so your brand dominates both paid sponsored slots and generative answers.'
    }
  ];

  const faqs = [
    {
      q: 'What are pay per click services?',
      a: 'Pay per click services plan, launch, and optimize paid advertising campaigns on Google Ads, YouTube, and partner networks, where you pay only when an interested user actively clicks on your advertisement.'
    },
    {
      q: 'Which Google Ads campaign type is best for my business?',
      a: 'It depends on your commercial objective. Google Search is best for direct leads and professional services, Google Shopping is best for physical product sales, YouTube Video is best for authority and education, and Performance Max scales across all Google channels once conversion tracking is mature.'
    },
    {
      q: 'Is display, video or text advertising better?',
      a: 'Text ads on Google Search are usually best for immediate sales and leads because the user is already searching for your service. YouTube video builds trust and brand recall, while Display banner ads excel at low-cost remarketing to past site visitors.'
    },
    {
      q: 'What do I need to launch Google Shopping ads?',
      a: 'You need an active Google Merchant Center account, a clean and compliant product data feed, a verified website domain, and product landing pages where prices and stock availability match your feed data exactly.'
    },
    {
      q: 'How long do PPC services take to work?',
      a: 'Ads can be created and go live within days. Most accounts require 60 to 90 days of consistent search term pruning, bid adjustments, and A/B testing to achieve a stable, profitable cost per lead or target return on ad spend.'
    },
    {
      q: 'Do you offer PPC management for all countries and languages?',
      a: 'Yes. We run international campaigns across the USA, Latin America, Europe, the Gulf region, and Australia, delivering native ad copy in English, Spanish, French, German, Polish, Arabic, Hebrew, and other languages.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* 1. What Are Pay Per Click Services and What Do We Do */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold mb-2">
            <MousePointerClick className="w-3.5 h-3.5" />
            <span>Google Ads & PPC Management · 15+ Years Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Pay Per Click Services by UDMIDEAS: Google Ads Campaigns That Bring Sales, Leads and Traffic
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Pay per click services put your business in front of buyers at the exact moment they search, watch, or shop, and you pay only when someone clicks. At UDMIDEAS, we deliver pay per click services on Google Ads and YouTube for businesses in the USA, Latin America, and worldwide, backed by 15+ years of digital marketing experience.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Good PPC is not about spending more. It is about matching the right goal to the right campaign type, sending the click to a page that converts, and measuring every single dollar. Poor setup wastes budget fast, and most accounts we audit have the same problems: wrong objective, weak product data, and landing pages that do not match the ad.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Arun, our founder, leads a team that joins PPC with SEO services, content, and web development. This comprehensive guide explains what we do in PPC, how we do it, which campaign type fits which business, how Shopping ads work, our 90-day plan, and why businesses choose UDMIDEAS.
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
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pl-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. PPC Statistics: Why Pay Per Click Services Work */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Data-Led Commercial Power
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            PPC Statistics: Why Pay Per Click Services Work
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Paid search puts your business in front of people who are ready to act. These verified figures explain why pay per click services remain an indispensable growth engine:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Market Metric</th>
                <th className="py-3.5 px-4 sm:px-6">Figure (Approx.)</th>
                <th className="py-3.5 px-4 sm:px-6">Authority Source</th>
                <th className="py-3.5 px-4 sm:px-6">What It Means for Your Business</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {ppcStats.map((stat, idx) => (
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
          <strong>The lesson:</strong> PPC rewards precision. Commercial intent, message match, and landing page quality decide the financial outcome, not budget size alone. Figures are approximate and compiled from public industry benchmarks.
        </p>
      </section>

      {/* 3. Benefits of Pay Per Click Services */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Predictable ROI
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            7 Proven Benefits of Pay Per Click Services
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            For a Texas dental clinic, a Mexican online store, or a US SaaS company, the commercial return is concrete: qualified buyers, measured acquisition cost, and transparent numbers:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <div
              key={b.num}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs font-bold text-emerald-400 mb-2">
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

      {/* 4. PPC Campaign Objectives: Which Goal Fits Your Business? */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
            Strategic Alignment
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            PPC Campaign Objectives: Which Goal Fits Your Business?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Every profitable campaign starts with one crystal-clear objective. We select your objective first, then configure campaign types and smart bidding algorithms to match:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Campaign Objective</th>
                <th className="py-3.5 px-4 sm:px-6">Best Campaign Types</th>
                <th className="py-3.5 px-4 sm:px-6">Real-World Example</th>
                <th className="py-3.5 px-4 sm:px-6">What We Track & Optimize</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {campaignObjectives.map((obj, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {obj.objective}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-400 font-medium">
                    {obj.types}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200 text-xs">
                    {obj.example}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300 text-xs">
                    {obj.tracking}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-xs sm:text-sm text-amber-200 leading-relaxed flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">A common industry mistake to avoid:</strong> Choosing a "Website Traffic" campaign objective when the actual commercial goal is lead generation or sales. Traffic campaigns optimize for the cheapest possible clicks, not buyers. At UDMIDEAS, we install conversion tracking first so Google's AI learns exclusively from the actions that generate revenue.
          </div>
        </div>
      </section>

      {/* 5. Google Ads Campaign Types: Which Is Better for Whom? */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Platform Selection
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Google Ads Campaign Types: Which Is Better for Whom?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            No single campaign type is universally best for every business. This breakdown shows exactly where each format fits:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Campaign Type</th>
                <th className="py-3.5 px-4 sm:px-6">Where Ads Appear</th>
                <th className="py-3.5 px-4 sm:px-6">Best For</th>
                <th className="py-3.5 px-4 sm:px-6">Who Should Use It</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {campaignTypesComparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.type}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200 text-xs">
                    {row.where}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-400 text-xs font-medium">
                    {row.bestFor}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300 text-xs">
                    {row.who}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
            <strong className="text-white block mb-1">Local Healthcare Example:</strong> A dental clinic in Dallas starts with Google Search ads targeting high-urgency keywords like "emergency dentist near me".
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
            <strong className="text-white block mb-1">eCommerce Fashion Example:</strong> A Colombian leather bag store scales with Google Shopping and Performance Max campaigns across LATAM and the USA.
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
            <strong className="text-white block mb-1">Mobile Software Example:</strong> A fitness tracking app drives low-cost customer downloads through Google App Campaigns and YouTube Shorts video ads.
          </div>
        </div>
      </section>

      {/* 6. Display vs Video vs Text Ads: Which Is Best? */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Format Analysis
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Display vs Video vs Text Ads: Which Is Best?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            For direct customer inquiries and sales, text ads on Google Search are almost always best because the buyer is actively searching for your service. Video and display ads excel at building authority and remarketing:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Ad Format</th>
                <th className="py-3.5 px-4 sm:px-6">Core Strength</th>
                <th className="py-3.5 px-4 sm:px-6">Weakness</th>
                <th className="py-3.5 px-4 sm:px-6">Best Strategic Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {formatComparison.map((fmt, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {fmt.format}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200 text-xs">
                    {fmt.strength}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-400 text-xs">
                    {fmt.weakness}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-400 text-xs font-semibold">
                    {fmt.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-850 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">
          <p>
            <strong className="text-white">Why this multi-format sequence works:</strong> A text ad solves an immediate commercial need today. A video explains complex services and builds trust. A display banner reminds past visitors. A customer might first watch your video, see a display banner on a news site, and finally click your Search ad when ready to buy.
          </p>
          <p className="text-slate-400 font-medium">
            <strong className="text-emerald-400">Our agency rule:</strong> Always start with Search or Shopping to generate immediate revenue. Introduce Video and Display once tracking is mature and you have an audience pool to remarket to.
          </p>
        </div>
      </section>

      {/* 7. How We Set Up PPC Campaigns: Our 10-Step Process */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Systematic Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How We Set Up PPC Campaigns: Our 10-Step Process
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Every dollar of ad spend is engineered for maximum return through this rigorous 10-step protocol:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {tenStepsProcess.map((step) => (
            <div
              key={step.step}
              className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2 flex flex-col justify-between hover:border-slate-700 transition-all"
            >
              <div>
                <div className="font-mono text-xs font-bold text-emerald-400 mb-1">
                  STEP {step.step}
                </div>
                <h3 className="text-xs font-bold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-300 leading-relaxed">
          <strong className="text-white">Healthcare Campaign Application:</strong> For a Texas dental clinic, we install dynamic phone call and booking form tracking, launch Search ads for high-intent keywords like "dental implants Houston", add negative keywords like "free" and "jobs", and direct traffic to a dedicated landing page featuring transparent pricing, reviews, and direct booking forms.
        </div>
      </section>

      {/* 8. Google Shopping Ads: How We Plan, Set Up and Optimize */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            eCommerce Catalog Mastery
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Google Shopping Ads: How We Plan, Set Up and Optimize
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Google Shopping ads display your product photography, title, price, and store name directly in Google search results. Because Shopping ads are built from your product data feed rather than manually typed keywords, the accuracy of your feed decides the profitability of your ads.
          </p>
        </div>

        {/* 5-Step Shopping Workflow */}
        <div className="space-y-4">
          {/* Step 1: Plan */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/40">Step 1</span>
              <span>Strategic Product Planning</span>
            </h3>
            <ul className="text-xs text-slate-300 space-y-1.5 pl-4 list-disc marker:text-emerald-400">
              <li>Prioritize best sellers, high-inventory items, and top-margin products first.</li>
              <li>Benchmark shipping speed, return policies, and pricing directly against top market competitors.</li>
              <li>Establish realistic target return on ad spend (ROAS) or target cost per acquisition (tCPA).</li>
              <li>Segment catalog inventory by profit margin, product category, and seasonal demand.</li>
            </ul>
          </div>

          {/* Step 2: Set Up Google Merchant Center */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/40">Step 2</span>
              <span>Set Up & Configure Google Merchant Center</span>
            </h3>
            <ol className="text-xs text-slate-300 space-y-1.5 pl-4 list-decimal marker:text-emerald-400">
              <li>Create your Merchant Center account, verify site ownership, and claim your canonical web domain.</li>
              <li>Input verified business details, tax configurations, and comprehensive shipping and return policies.</li>
              <li>Link Google Merchant Center seamlessly to your Google Ads account and GA4 property.</li>
              <li>Connect your product feed via Shopify, WooCommerce, BigCommerce apps, Google Sheets, or scheduled XML/FTP feeds.</li>
              <li>Access the Diagnostics dashboard and systematically resolve every disapproved product or missing attribute.</li>
            </ol>
          </div>

          {/* Step 3: Build a Strong Product Feed (Table) */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/40">Step 3</span>
              <span>Build a Bulletproof Product Feed</span>
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="py-3 px-4 sm:px-6">Attribute</th>
                    <th className="py-3 px-4 sm:px-6">Feed Rule & Requirement</th>
                    <th className="py-3 px-4 sm:px-6">High-Performing Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-slate-300">
                  {shoppingFeedRules.map((rule, idx) => (
                    <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-mono font-bold text-emerald-400 whitespace-nowrap">
                        {rule.attr}
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-300 text-xs">
                        {rule.rule}
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-200 text-xs">
                        {rule.example}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Step 4: Fix Website On-Page & Schema */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/40">Step 4</span>
              <span>Verify On-Page Website Compliance</span>
            </h3>
            <p className="text-xs text-slate-400">
              Google rigorously crawls your site to cross-check feed attributes. A price mismatch or hidden return policy can trigger account suspension. We verify:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Product pages display visible price, stock availability, images, and clear checkout buttons</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Structured Product schema includes accurate price, currency, availability, and review ratings</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Mobile loading speed is optimized with HTTPS security across all catalog pages</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Contact, shipping, refunds/returns, and privacy policy links are prominently accessible in footers</span>
              </div>
            </div>
          </div>

          {/* Step 5: Optimize Every Week */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2 text-xs text-slate-300 leading-relaxed">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/40">Step 5</span>
              <span>Weekly Feed & Campaign Optimization</span>
            </h3>
            <p>
              We segment catalogs with custom labels (e.g. Top Sellers, High Margin, Clearance), add negative keywords for low-intent terms like "free" or "repair", rewrite search titles, replace unappealing photos, pause wasteful items, and A/B test Standard Shopping against Performance Max.
            </p>
            <p className="text-slate-400 italic">
              <strong>Real-World Feed Example:</strong> A leather bag brand in Mexico upgraded an unoptimized title from "Bag 101" to "Women's Brown Leather Crossbody Bag, Adjustable Strap, 10 inch". The product immediately started matching search queries like "brown leather crossbody bag", driving a 180% surge in qualified buyer clicks.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Case Study Example and Client Reviews */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
            Verified Proof & Results
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Case Study: Texas Dental Clinic & Client Feedback
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            <strong>Goal:</strong> Generate high-value dental implant consultations while cutting cost per lead in half.
          </p>
        </div>

        {/* Case Study Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Campaign Performance Metric</th>
                <th className="py-3.5 px-4 sm:px-6 text-slate-400">Month 1 Baseline</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">Month 3 Optimized</th>
                <th className="py-3.5 px-4 sm:px-6">Outcome Analysis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {caseStudyMetrics.map((m, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white">
                    {m.metric}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-400 font-mono">
                    {m.m1}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-400 font-mono font-bold text-sm">
                    {m.m3}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300 text-xs">
                    {m.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Client Reviews Cards */}
        <div className="space-y-3 pt-2">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Verified Client Reviews</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {clientReviews.map((rev, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{rev.client}</span>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/40">
                      {rev.location}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    {rev.service}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "{rev.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Our 90-Day Pay Per Click Services Plan */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            PPC Roadmap
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Our 90-Day Pay Per Click Services Plan
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Google's machine learning requires real conversion data to optimize bidding. The first 30 days build the foundation, months two and three systematically drive down acquisition costs:
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

      {/* 11. PPC Services Worldwide: USA, LATAM and Multilingual */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Global Geographic Coverage
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            PPC Services Worldwide: USA, LATAM and Multilingual Campaigns
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            We deliver pay per click services for business owners across every continent. Precise geographic radius and native-language calibration are built into every account:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Target Global Region</th>
                <th className="py-3.5 px-4 sm:px-6">Representative Markets</th>
                <th className="py-3.5 px-4 sm:px-6">Languages Delivered</th>
                <th className="py-3.5 px-4 sm:px-6">Typical Campaign Architecture</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {geographicMarkets.map((geo, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {geo.region}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200 text-xs">
                    {geo.examples}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-400 text-xs font-medium">
                    {geo.languages}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300 text-xs">
                    {geo.campaigns}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-850 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">
          <p>
            <strong className="text-white">Multilingual PPC Precision:</strong> We write ads, callout extensions, and landing page advice natively in English, Spanish, French, German, Polish, Arabic, and Hebrew. Native phrasing matters—direct literal translations always lower click-through rates and degrade trust. Pair your campaigns with our <strong>Multilingual SEO services</strong> to win both paid and organic positions simultaneously.
          </p>
          <p>
            <strong className="text-white">Local PPC for Physical Store Visits:</strong> We integrate Google Business Profile links, location assets, and local radius geofencing so clinics, law offices, and retailers drive calls, walk-in visits, and turn-by-turn driving directions from nearby searchers.
          </p>
        </div>
      </section>

      {/* 12. Why Choose UDMIDEAS for Pay Per Click Services */}
      <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Proven Agency Excellence
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Choose UDMIDEAS for Pay Per Click Services
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Led personally by founder Arun with over 15 years in search marketing, we treat your advertising capital with total fiscal discipline:
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

        <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-300">
          <strong className="text-white">Absolute transparency guarantee:</strong> We never promise fictional overnight millions or hide hidden agency markups. You retain full administrative access to your ad accounts and see exactly where every single dollar goes.
        </div>
      </section>

      {/* 13. Pay Per Click Services FAQ */}
      <section className="space-y-4">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            PPC Questions & Answers
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Pay Per Click Services FAQ
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

      {/* 14. Conclusion: Pay Only for Clicks That Grow Your Business */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-950/60 via-slate-900 to-blue-950/40 border border-emerald-500/30 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Clock className="w-3.5 h-3.5" />
          <span>High-ROAS Google Ads Management</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
          Conclusion: Pay Only for Clicks That Grow Your Business
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          PPC works when the objective, campaign type, product feed, and landing page all point in the same direction. Search wins qualified leads, Shopping wins direct product sales, Video builds enduring trust, and Display brings past visitors back. The right strategy, measured and pruned every single week, turns ad spend into predictable revenue growth.
        </p>

        <p className="text-sm font-bold text-white">
          Contact Founder Arun directly: <span className="text-emerald-400 font-mono">+91-9521186150</span> · Email: <span className="text-blue-400 font-mono">info@udmideasusa.com</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20ready%20to%20get%20started%20with%20Pay%20Per%20Click%20Services%20at%20UDMIDEAS."
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
            <span>Request Free PPC Audit</span>
          </a>
        </div>
      </section>
    </div>
  );
};
