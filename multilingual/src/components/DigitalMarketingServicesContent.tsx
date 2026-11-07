import React from 'react';
import {
  Search,
  Share2,
  DollarSign,
  FileText,
  Video,
  ShieldCheck,
  Code2,
  Globe2,
  CheckCircle2,
  MessageCircle,
  Mail,
  Clock,
  ShoppingBag
} from 'lucide-react';

export const DigitalMarketingServicesContent: React.FC = () => {

  const keyStatistics = [
    {
      stat: 'Digital share of global ad spend, 2026',
      figure: 'About 69%',
      source: 'dentsu, May 2026'
    },
    {
      stat: 'Global ad spend forecast, 2026',
      figure: '$1.06T (dentsu) to $1.34T (WARC)',
      source: 'dentsu, WARC via PPC Land'
    },
    {
      stat: 'Social media share of global ad spend, 2026',
      figure: '29.4%',
      source: 'WARC via PPC Land'
    },
    {
      stat: 'Average return, SEO vs PPC',
      figure: 'About 8x vs 4x',
      source: 'SeoProfy'
    },
    {
      stat: 'Social media users worldwide',
      figure: 'About 5.66 billion',
      source: 'Webtonic'
    },
    {
      stat: 'Visitors who leave a site loading > 3s',
      figure: '40%',
      source: 'WebFX'
    }
  ];

  const services = [
    {
      num: '01',
      title: 'SEO Services (Including AEO & GEO)',
      desc: 'Our SEO services cover technical audits, keyword research, on-page work, link building and local SEO. We also optimise for Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO), so your brand appears in Google AI Overviews, ChatGPT and other AI answers.',
      bullets: [
        'Technical SEO and Core Web Vitals fixes',
        'Content and keyword strategy',
        'Local SEO and Google Business Profile',
        'Link building and digital PR'
      ],
      icon: Search
    },
    {
      num: '02',
      title: 'Social Media Marketing (SMM)',
      desc: 'Our social media marketing services build audiences and sales on Facebook, Instagram, LinkedIn, TikTok and YouTube. We plan the calendar, design the posts, run paid social and report on leads, not just likes.',
      bullets: [
        'Strategic content calendar & creative design',
        'Paid social ad campaigns with target audience segmentation',
        'B2B executive presence on LinkedIn',
        'Direct lead tracking and conversion attribution'
      ],
      icon: Share2
    },
    {
      num: '03',
      title: 'PPC Advertising (Pay-Per-Click)',
      desc: 'Our PPC services run Google Ads, Microsoft Ads and Meta Ads with tight keyword control, landing page testing and clear return on ad spend (ROAS) targets. You see where every dollar goes.',
      bullets: [
        'Google Search, Display & Performance Max campaigns',
        'High-intent commercial keyword bid management',
        'A/B testing on landing pages for peak conversion',
        'Transparent daily tracking and weekly ROAS reviews'
      ],
      icon: DollarSign
    },
    {
      num: '04',
      title: 'High-Converting Content Creation',
      desc: 'We write blogs, service pages, product descriptions, email sequences and ebooks that answer real buyer questions. Every piece follows E-E-A-T principles: first-hand experience, expertise, authority and trust.',
      bullets: [
        'In-depth research based on actual user query intent',
        'E-E-A-T compliant author-led guides and white papers',
        'Localized copywriting across European and LATAM dialects',
        'Lead magnet creation and automated email follow-up flows'
      ],
      icon: FileText
    },
    {
      num: '05',
      title: 'Video Creation & Video Marketing',
      desc: 'Our video marketing services cover scripting, shooting, editing and publishing short reels, explainers, testimonials and product demos. We distribute them on YouTube, Instagram, TikTok and your own site, then measure views, watch time and enquiries.',
      bullets: [
        'High-retention short reels (TikTok, IG Reels, YT Shorts)',
        'B2B software explainers and executive testimonials',
        'Multilingual subtitling and voiceover localization',
        'On-site video optimization for Core Web Vitals and conversions'
      ],
      icon: Video
    },
    {
      num: '06',
      title: 'Online Reputation Management (ORM)',
      desc: 'Online reputation management protects the first impression buyers get. We collect genuine reviews, respond to feedback, fix misleading listings and push positive, accurate content up the search results.',
      bullets: [
        'Automated review generation funnels (Google, Trustpilot)',
        'Proactive review response and customer resolution',
        'Local citation cleanup and NAP consistency audits',
        'Search engine brand entity sentiment defense'
      ],
      icon: ShieldCheck
    },
    {
      num: '07',
      title: 'Custom High-Speed Web Development',
      desc: 'A fast website converts more of the traffic you earn. Our team builds responsive sites in React JS and WordPress, with clean code, structured data and mobile-first design.',
      bullets: [
        '100% custom code (React JS & modern PHP frameworks)',
        'Sub-second page speeds guaranteed (95+ Core Web Vitals)',
        'Built-in AEO/GEO schema and multilingual URL architecture',
        '1 Year Free Hosting & 1 Year Free Maintenance included'
      ],
      icon: Code2
    }
  ];

  const channelComparison = [
    {
      factor: 'Main goal',
      seo: 'Steady organic traffic and leads',
      smm: 'Awareness, engagement, community',
      ppc: 'Immediate clicks and sales'
    },
    {
      factor: 'Time to results',
      seo: '3 to 6 months',
      smm: '1 to 3 months',
      ppc: 'Hours to days'
    },
    {
      factor: 'Cost over time',
      seo: 'Falls as rankings grow',
      smm: 'Moderate, ongoing',
      ppc: 'Rises with competition'
    },
    {
      factor: 'Traffic stops when you stop paying?',
      seo: 'No, gains stay',
      smm: 'Reach drops without posting',
      ppc: 'Yes, clicks stop immediately'
    },
    {
      factor: 'Buyer intent',
      seo: 'High (active search queries)',
      smm: 'Low to medium (passive discovery)',
      ppc: 'High (commercial keywords)'
    },
    {
      factor: 'Best for',
      seo: 'Service firms, clinics, ecommerce',
      smm: 'Consumer brands, lifestyle, events',
      ppc: 'Launches, offers, seasonal sales'
    },
    {
      factor: 'Main risk',
      seo: 'Slow start',
      smm: 'Vanity metrics',
      ppc: 'Wasted spend without testing'
    }
  ];

  const worldwideMarkets = [
    {
      region: 'Latin America',
      markets: 'Mexico, Argentina, Colombia, Chile, Peru',
      languages: 'Spanish',
      focus: 'Local SEO, WhatsApp-led lead generation, Meta Ads'
    },
    {
      region: 'Europe',
      markets: 'France, Germany, Spain, Poland, Austria, Belgium',
      languages: 'French, German, Spanish, Polish',
      focus: 'Multilingual SEO, GDPR-safe tracking, marketplace growth'
    },
    {
      region: 'Arabic Countries',
      markets: 'UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Egypt',
      languages: 'Arabic, English',
      focus: 'Arabic SEO, right-to-left design, Snapchat and Instagram ads'
    },
    {
      region: 'North America & Others',
      markets: 'USA, Israel, Australia',
      languages: 'English, Hebrew',
      focus: 'Local SEO, PPC, AI search visibility'
    }
  ];

  const industries = [
    {
      industry: 'Dentists and clinics',
      goal: 'New patient bookings',
      services: 'Local SEO, Google Business Profile, ORM'
    },
    {
      industry: 'Ecommerce brands',
      goal: 'Online sales and ROAS',
      services: 'Product SEO, Google Shopping, Meta Ads'
    },
    {
      industry: 'Real estate',
      goal: 'Qualified buyer and seller leads',
      services: 'PPC, video tours, local SEO'
    },
    {
      industry: 'Law and finance firms',
      goal: 'High-trust enquiries',
      services: 'Authority content, E-E-A-T pages, SEO'
    },
    {
      industry: 'Contractors and trades',
      goal: 'Quote requests',
      services: 'Local SEO, Google Ads, review management'
    },
    {
      industry: 'Restaurants and hospitality',
      goal: 'Table bookings and footfall',
      services: 'Social media, Maps SEO, video reels'
    },
    {
      industry: 'Education and training',
      goal: 'Student enrolments',
      services: 'Content, PPC, YouTube'
    },
    {
      industry: 'Software and IT services',
      goal: 'Demo requests',
      services: 'Technical content, LinkedIn, AEO and GEO'
    },
    {
      industry: 'Spas, wellness and beauty',
      goal: 'Repeat appointments',
      services: 'Instagram, ORM, local SEO'
    },
    {
      industry: 'Manufacturing and B2B',
      goal: 'Distributor and buyer leads',
      services: 'SEO, LinkedIn, email marketing'
    },
    {
      industry: 'Jewelry and fashion',
      goal: 'Brand sales across regions',
      services: 'Visual SEO, video, multilingual ecommerce SEO'
    },
    {
      industry: 'Travel and tourism',
      goal: 'Direct bookings',
      services: 'Multilingual SEO, video, paid social'
    }
  ];

  const futureTrends = [
    {
      trend: 'Social media ad spend',
      forecast: 'Over $317 billion in 2026, rising to $480 billion by 2030',
      source: 'Statista'
    },
    {
      trend: 'Share of global ad spend taken by social, search & retail media',
      forecast: '66.4% in 2026, rising to 70.0% in 2028',
      source: 'WARC via PPC Land'
    },
    {
      trend: 'Fastest-growing segments',
      forecast: 'Retail media, connected TV, social, digital out-of-home',
      source: 'dentsu'
    },
    {
      trend: 'Marketers naming AI-driven search as their top trend to explore',
      forecast: '41%',
      source: 'Marketful, citing HubSpot'
    }
  ];

  const whyChooseUdmideas = [
    {
      title: '15+ Years of Hands-On SEO Experience',
      desc: 'Arun, the founder, works directly on strategy instead of handing you to a junior account team.'
    },
    {
      title: 'Technical Engineering Depth',
      desc: 'We build in React JS and fix speed, schema, and crawl issues that standard marketing agencies ignore.'
    },
    {
      title: 'Ready for AI Search (AEO & GEO)',
      desc: 'Answer Engine Optimization and Generative Engine Optimization sit inside our core SEO architecture.'
    },
    {
      title: 'True Multilingual Delivery',
      desc: 'French, German, Spanish, Arabic, and Polish campaigns are handled by native writers, not machine translation.'
    },
    {
      title: 'Worldwide Experience',
      desc: 'We serve clients across the USA, Latin America, Europe, the Gulf, Israel, and Australia, including deep specialization in Texas dental clinics.'
    },
    {
      title: 'Clear, Transparent Reporting',
      desc: 'You receive monthly numbers tied directly to leads, calls, and revenue instead of vanity metrics.'
    },
    {
      title: 'Calibrated for Every Business Size',
      desc: 'Small local shops, growing companies, and multi-market brands receive the exact same high standard of work.'
    }
  ];

  return (
    <div className="space-y-16 text-left">
      {/* 1. Key Statistics Table */}
      <section className="space-y-4">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Data-Led Market Reality
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How Digital Marketing Services Grow Businesses: Key Statistics
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Digital channels now take about 69% of global advertising spend, so a business without a digital plan is absent from where most buyers look. These figures show why companies invest in digital marketing services:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Statistic</th>
                <th className="py-3.5 px-4 sm:px-6">Figure</th>
                <th className="py-3.5 px-4 sm:px-6">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {keyStatistics.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-white">
                    {item.stat}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400 whitespace-nowrap">
                    {item.figure}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-400 text-xs">
                    {item.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Three points matter for your budget:
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="font-mono font-bold text-blue-400">1.</span>
              <span><strong>Search is where intent lives:</strong> People who type a query are ready to compare and buy, which is why SEO returns the most over time.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono font-bold text-blue-400">2.</span>
              <span><strong>Social reaches people before they search:</strong> SMM builds the demand that search later captures.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono font-bold text-blue-400">3.</span>
              <span><strong>Speed and trust decide conversions:</strong> A slow or thin website wastes every click you pay for.</span>
            </li>
          </ul>
          <p className="text-xs text-slate-500 italic pt-1">
            Forecasts differ by publisher because each counts channels differently, so treat the numbers as a range and refresh them each quarter.
          </p>
        </div>
      </section>

      {/* 4. Seven Connected Services at UDMIDEAS */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Full-Spectrum Digital Suite
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Our Digital Marketing Services at UDMIDEAS
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            We offer seven connected digital marketing services. You can buy one, or combine them into a single growth plan:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/80 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-900/40">
                      SERVICE {svc.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {svc.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-850">
                    {svc.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-slate-400 italic">
          Every service comes with a monthly report that links activity to enquiries, calls and sales.
        </p>
      </section>

      {/* 5. SEO vs SMM vs PPC Comparison Table */}
      <section className="space-y-4">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
            Strategic Channel Evaluation
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SEO vs SMM vs PPC: Which Digital Marketing Service Is Best?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            SEO is best for long-term, low-cost growth, PPC is best for fast leads, and SMM is best for brand awareness and community. Most businesses get the strongest results by combining all three:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Factor</th>
                <th className="py-3.5 px-4 sm:px-6 text-emerald-400">SEO</th>
                <th className="py-3.5 px-4 sm:px-6 text-blue-400">SMM</th>
                <th className="py-3.5 px-4 sm:px-6 text-purple-400">PPC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {channelComparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {row.factor}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {row.seo}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300">
                    {row.smm}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300">
                    {row.ppc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
          <div className="text-xs font-bold text-white uppercase tracking-wider">
            Which one should you choose?
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span><strong>Choose SEO first</strong> if you want lasting growth and can wait a few months.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 font-bold">•</span>
              <span><strong>Choose PPC first</strong> if you need leads this week or are testing a new offer.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>Choose SMM first</strong> if your product is visual or your audience discovers brands on social platforms.</span>
            </li>
          </ul>
          <p className="text-xs text-slate-400 leading-relaxed pt-1">
            We usually start clients with PPC for quick data while SEO and content build in the background. Social media then keeps the audience warm. After six months, the budget often shifts toward SEO because each organic lead costs less.
          </p>
        </div>
      </section>

      {/* 6. Worldwide Markets Table & Multilingual Focus */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
            Cross-Border Reach
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Worldwide Digital Marketing Services: LATAM, Europe and Arabic Markets
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            We provide digital marketing services to clients worldwide, from our base in Jaipur, India. Our largest growth areas outside the USA are Latin America, Europe and the Arabic-speaking Gulf:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Region</th>
                <th className="py-3.5 px-4 sm:px-6">Example Markets</th>
                <th className="py-3.5 px-4 sm:px-6">Main Languages</th>
                <th className="py-3.5 px-4 sm:px-6">What We Focus On</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {worldwideMarkets.map((m, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {m.region}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-200">
                    {m.markets}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-emerald-400 text-xs">
                    {m.languages}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-300 text-xs">
                    {m.focus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Multilingual Details Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-blue-400" />
            <span>Multilingual digital marketing services</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Translation alone does not rank or sell. Our multilingual digital marketing services start with keyword research in each language, because people search differently in Paris, Munich, Bogota and Riyadh.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 text-xs text-slate-300 leading-relaxed">
              <strong className="text-white">French:</strong> Native copy, French search intent, and GDPR-aware consent banners.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 text-xs text-slate-300 leading-relaxed">
              <strong className="text-white">German:</strong> Precise, trust-focused wording and detailed product information that German buyers expect.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 text-xs text-slate-300 leading-relaxed">
              <strong className="text-white">Spanish:</strong> Separate versions for Spain and each Latin American country, with the right tone (for example, formal "usted" in Colombia).
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 text-xs text-slate-300 leading-relaxed">
              <strong className="text-white">Arabic:</strong> Right-to-left layouts, Modern Standard Arabic for search and local dialect for social posts.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 text-xs text-slate-300 leading-relaxed sm:col-span-2">
              <strong className="text-white">Polish:</strong> Google and Allegro marketplace optimisation with native Polish writers.
            </div>
          </div>
          <p className="text-xs text-slate-400 pt-1">
            We also set up hreflang tags, so Google shows the correct language and country version to each visitor. Native editors review every page before it goes live.
          </p>
        </div>
      </section>

      {/* 7. Industry Breakdown Table & Ecommerce Section */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Industry Expertise
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Digital Marketing Services for Every Industry and Business Size
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            We work with small, medium and large businesses. A local clinic needs calls and bookings. A large brand needs market share. The plan changes, but the method stays the same: research, build, test, report.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Industry</th>
                <th className="py-3.5 px-4 sm:px-6">Typical Goal</th>
                <th className="py-3.5 px-4 sm:px-6">Services We Lead With</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {industries.map((ind, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                    {ind.industry}
                  </td>
                  <td className="py-3 px-4 sm:px-6 text-slate-200">
                    {ind.goal}
                  </td>
                  <td className="py-3 px-4 sm:px-6 text-emerald-400 text-xs font-medium">
                    {ind.services}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ecommerce Focus Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-purple-400" />
            <span>Ecommerce digital marketing services</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Online stores are one of our biggest segments. Our ecommerce digital marketing services connect product pages, ads and email into one revenue plan:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <div className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Product and category page SEO with schema for price, stock and reviews</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Google Shopping and Performance Max feed setup</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Meta and TikTok ads with creative testing</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Cart recovery emails and conversion rate optimisation</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Marketplace support, including Amazon and Allegro</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Multilingual store pages for European and Arabic shoppers</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 italic pt-1">
            We track cost per sale and ROAS weekly, and we cut spend on products that do not pay back.
          </p>
        </div>
      </section>

      {/* 8. Future Trends Table */}
      <section className="space-y-4">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">
            Looking Ahead: 2026 to 2030
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            The Future of Digital Marketing Services: Statistics to Watch
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Social, search and retail media will keep taking a larger share of advertising budgets, and AI search is changing how SEO works:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Trend</th>
                <th className="py-3.5 px-4 sm:px-6">Forecast</th>
                <th className="py-3.5 px-4 sm:px-6">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {futureTrends.map((t, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-white">
                    {t.trend}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-emerald-400 text-xs">
                    {t.forecast}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-400 text-xs">
                    {t.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          <strong>The lesson for 2027 and beyond:</strong> Keep the proven channels, and add AEO and GEO so AI assistants can find and quote your brand.
        </p>
      </section>

      {/* 9. Why UDMIDEAS Is the Best Agency */}
      <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
            Proven Global Advantage
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why UDMIDEAS Is the Best Digital Marketing Agency for Global Growth
          </h2>
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

      {/* 11. Conclusion & Call to Action */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-950/60 via-slate-900 to-emerald-950/40 border border-blue-500/30 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
          <Clock className="w-3.5 h-3.5" />
          <span>Complimentary Comprehensive Digital Marketing Audit</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
          Conclusion: Choose Digital Marketing Services That Fit Your Market
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Digital marketing services work best when SEO, social, paid ads, content, video and reputation work together, in the languages your buyers use. UDMIDEAS brings that mix to small, medium and large businesses in every industry, from dentists to ecommerce brands, in Latin America, Europe, the Arabic-speaking world and beyond.
        </p>

        <p className="text-sm font-bold text-white">
          Ready to grow? Request your free digital marketing audit at <span className="text-blue-400">udmideasusa.com</span> or call <span className="text-emerald-400 font-mono">+91-9521186150</span>.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20ready%20for%20a%20Free%20Digital%20Marketing%20Audit%20with%20UDMIDEAS."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-950/60 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Arun: +91-9521186150</span>
          </a>

          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-950/60 transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Request Free Digital Audit</span>
          </a>
        </div>
      </section>
    </div>
  );
};
