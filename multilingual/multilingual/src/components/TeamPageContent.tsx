import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Globe2, MessageCircle } from 'lucide-react';
import aidasaadImg from '../assets/images/team_aidasaad_noor_1795123399531.jpg';
import sophieImg from '../assets/images/team_sophie_richard_1795123399702.jpg';
import julietteImg from '../assets/images/team_juliette_celine_1795123399243.jpg';
import jouseImg from '../assets/images/team_jouse_developer_1795123398780.jpg';
import jakeImg from '../assets/images/team_jake_adam_1795123397414.jpg';

type DisciplineFilter = 'all' | 'seo-marketing' | 'web-ai';

interface TeamMemberProfile {
  id: string;
  index: string;
  name: string;
  shortName: string;
  initials: string;
  role: string;
  location: string;
  experience: string;
  disciplines: DisciplineFilter[];
  focusAreas: string[];
  languages: string;
  image: string;
  imageAlt: string;
  isFounder?: boolean;
  paragraphs: string[];
  whatsappText: string;
}

const TEAM_PROFILES: TeamMemberProfile[] = [
  {
    id: 'arun',
    index: '01',
    name: 'Arun',
    shortName: 'Arun',
    initials: 'AR',
    role: 'Founder, UDMIDEAS',
    location: 'Global Leadership',
    experience: '15+ Years Experience',
    disciplines: ['all', 'seo-marketing', 'web-ai'],
    focusAreas: [
      'Multilingual SEO',
      'PHP Web Development',
      'Web Design',
      'Social Media Marketing',
      'PPC'
    ],
    languages: 'French · German · Arabic · Hebrew · Polish · Spanish',
    image: '/assets/aistudio/Arun_Kumar_soni_39359c64.png',
    imageAlt: 'Arun, Founder of UDMIDEAS, multilingual SEO expert and web developer',
    isFounder: true,
    paragraphs: [
      'Arun is the founder of UDMIDEAS and a multilingual SEO expert with more than 15 years of experience. He combines SEO, social media marketing and PPC with hands-on web development, so strategy and execution stay in one place. He is a multilingual website developer and web designer who builds on PHP frameworks, and he delivers websites that rank, load fast and convert.',
      'Arun works across French, German, Arabic, Hebrew, Polish and Spanish. He helps businesses reach customers in their own language and market, instead of relying on literal translation. His approach covers keyword research, on-page and technical SEO, localized content, paid campaigns and social media growth.',
      'As an SEO consultant, Arun works closely with business owners, founders and technical teams. He sets clear goals, tracks measurable results and adjusts quickly when the market changes. Clients value his direct, practical advice and his willingness to work on the technical details himself.',
      'If you want a partner who treats your growth as their own, Arun is the person to talk to. Hire him as your business partner and build a multilingual digital presence that brings in qualified leads, builds trust and grows steadily across borders.'
    ],
    whatsappText:
      'Hello Arun, I read your profile on the UDMIDEAS Team page and would like to discuss partnering on multilingual SEO and web development.'
  },
  {
    id: 'aidasaad-noor',
    index: '02',
    name: 'Aidasaad Noor',
    shortName: 'Aidasaad',
    initials: 'AN',
    role: 'Arabic Digital Marketer',
    location: 'Saudi Arabia',
    experience: '10+ Years Experience',
    disciplines: ['all', 'seo-marketing'],
    focusAreas: [
      'Arabic SEO',
      'Right-to-Left Content Optimization',
      'Social Media Marketing',
      'Search & Social PPC'
    ],
    languages: 'Arabic (Native, Gulf & Middle East) · English',
    image: aidasaadImg,
    imageAlt: 'Aidasaad Noor, Arabic Digital Marketer based in Saudi Arabia at UDMIDEAS',
    paragraphs: [
      'Aidasaad Noor is an Arabic digital marketer based in Saudi Arabia with more than 10 years of experience in SEO, social media marketing and PPC. She helps brands connect with Arabic-speaking audiences across the Gulf and the wider Middle East, in a voice that feels native.',
      'Aidasaad understands that Arabic digital marketing needs more than translation. She builds keyword strategies around how people in the region actually search. She writes content that respects local culture and tone, and she designs campaigns that match regional buying habits. Her work covers Arabic SEO, right-to-left content optimization, social media management and paid advertising on search and social platforms.',
      'At UDMIDEAS, Aidasaad leads Arabic-language campaigns for clients who want visibility, leads and long-term brand authority in Saudi Arabia and neighboring markets. She plans each campaign around clear goals, tests what works and reports results in plain language.',
      'Her experience across SEO, SMM and PPC means she can see the whole customer journey, from the first search to the final conversion. For businesses entering or growing in the Arabic-speaking market, Aidasaad is a trusted digital marketing expert who turns local insight into measurable growth.'
    ],
    whatsappText:
      'Hello Arun, I would like to discuss Arabic SEO, SMM, and PPC campaigns with Aidasaad Noor for the Saudi Arabia and Middle East market.'
  },
  {
    id: 'sophie-richard',
    index: '03',
    name: 'Sophie Richard',
    shortName: 'Sophie',
    initials: 'SR',
    role: 'German SEO Expert',
    location: 'Germany',
    experience: '10+ Years Experience',
    disciplines: ['all', 'seo-marketing'],
    focusAreas: [
      'German Keyword Research',
      'Technical SEO Audits',
      'On-Page Optimization',
      'Content Strategy',
      'Link Building & Local Search'
    ],
    languages: 'German (Native, DACH Region) · English',
    image: sophieImg,
    imageAlt: 'Sophie Richard, German SEO Expert based in Germany at UDMIDEAS',
    paragraphs: [
      'Sophie Richard is a German SEO expert based in Germany with more than 10 years of experience in search engine optimization. She helps businesses win visibility in German-speaking markets, where search behavior, language precision and user expectations demand careful local attention.',
      'Sophie builds SEO strategies on thorough keyword research in German, covering compound terms, regional variations and intent. Her services include technical SEO audits, on-page optimization, content strategy, link building and local search. She writes and edits with an eye for accuracy and clarity, because German-speaking users expect content that is exact and trustworthy.',
      'At UDMIDEAS, Sophie manages German-language SEO projects for clients that want steady, sustainable growth in organic search. She focuses on fundamentals: a sound site structure, fast and crawlable pages, relevant content and authoritative links. She tracks rankings, traffic and conversions, and she explains the data in a way decision-makers can act on.',
      'Her long experience means she knows which tactics last and which only create short-term spikes. For companies that want to reach customers in Germany and other German-speaking regions, Sophie delivers a clear, honest and results-driven SEO approach.'
    ],
    whatsappText:
      'Hello Arun, I would like to discuss German SEO strategy with Sophie Richard for our business.'
  },
  {
    id: 'juliette-celine',
    index: '04',
    name: 'Juliette Celine',
    shortName: 'Juliette',
    initials: 'JC',
    role: 'French SEO Specialist and Web Developer',
    location: 'France',
    experience: '10+ Years Experience',
    disciplines: ['all', 'seo-marketing', 'web-ai'],
    focusAreas: [
      'French Keyword Research',
      'Technical Audits & Local Search',
      'Responsive Web Development',
      'Accessibility & Speed Optimization'
    ],
    languages: 'French (Native, France & Francophone Markets) · English',
    image: julietteImg,
    imageAlt: 'Juliette Celine, French SEO Specialist and Web Developer based in France at UDMIDEAS',
    paragraphs: [
      'Juliette Celine is a French SEO specialist and web developer based in France with more than 10 years of experience. She brings together search optimization and development, which means the sites she builds are made to rank from the first line of code.',
      'On the SEO side, Juliette handles French keyword research, technical audits, on-page optimization, content planning and local search. On the development side, she builds clean, responsive and fast websites with attention to structure, accessibility and performance. This combination lets her fix technical issues directly instead of passing them between teams.',
      'At UDMIDEAS, Juliette supports clients who want to grow in France and other French-speaking markets. She understands French language nuance and search behavior, and she makes sure content reads naturally while still meeting SEO best practices. Her projects range from new website builds to full SEO improvements for existing sites.',
      'Juliette values clear communication, steady progress and measurable outcomes. For businesses that need a website and an organic search strategy that work together, she is a reliable French-speaking expert who delivers quality from design to ranking.'
    ],
    whatsappText:
      'Hello Arun, I would like to discuss French SEO and web development with Juliette Celine for our business.'
  },
  {
    id: 'jouse',
    index: '05',
    name: 'Jouse',
    shortName: 'Jouse',
    initials: 'JO',
    role: 'Website Developer',
    location: 'New York',
    experience: '10+ Years Experience',
    disciplines: ['all', 'web-ai'],
    focusAreas: [
      'Responsive Web Development',
      'Business Sites & Redesigns',
      'Landing Pages',
      'Page Speed & Search-Friendly Code'
    ],
    languages: 'English · US Market Architecture',
    image: jouseImg,
    imageAlt: 'Jouse, Website Developer based in New York at UDMIDEAS',
    paragraphs: [
      'Jouse is a website developer based in New York with more than 10 years of experience building websites for businesses of different sizes. He focuses on creating fast, secure and user-friendly sites that look professional and support real business goals.',
      'Jouse covers the full development process, from planning and layout to coding, testing and launch. He builds responsive websites that work smoothly on desktops, tablets and phones, and he pays close attention to page speed, clean code and search-friendly structure. These details help websites perform better for both visitors and search engines.',
      'At UDMIDEAS, Jouse works with the team’s SEO and marketing specialists, so every website is built with growth in mind. Whether a client needs a new business website, a redesign, a landing page or technical improvements to an existing site, he delivers dependable work on schedule.',
      'His long experience helps him solve problems quickly and recommend practical solutions without unnecessary complexity. He communicates clearly, respects deadlines and treats each project as if it were his own. For businesses that want a strong, reliable website, Jouse is a skilled developer ready to build it.'
    ],
    whatsappText:
      'Hello Arun, I would like to discuss a website build or redesign with Jouse in New York.'
  },
  {
    id: 'jake-adam',
    index: '06',
    name: 'Jake Adam',
    shortName: 'Jake',
    initials: 'JA',
    role: 'AI Engineer',
    location: 'Spain',
    experience: '10+ Years Experience',
    disciplines: ['all', 'web-ai'],
    focusAreas: [
      'AI Automation Workflows',
      'Intelligent Tools & Integrations',
      'AI Search & Answer Engines',
      'Reliable Systems Architecture'
    ],
    languages: 'Spanish · English · Intelligent Systems',
    image: jakeImg,
    imageAlt: 'Jake Adam, AI Engineer based in Spain at UDMIDEAS',
    paragraphs: [
      'Jake Adam is an AI Engineer at UDMIDEAS, based in Spain, with more than 10 years of experience in software engineering and intelligent systems. He helps businesses use artificial intelligence in practical ways that save time, improve decisions and support growth.',
      'Jake designs and builds AI-driven solutions, including automation workflows, intelligent tools and integrations that connect AI with everyday business systems. At UDMIDEAS, his work supports the agency’s AI-driven services and helps clients prepare for how people now search and find information, including through AI assistants and answer engines.',
      'His long background in engineering gives him a strong foundation in clean architecture, reliable systems and sensible problem-solving. He is careful to build solutions that are useful, secure and easy for teams to adopt, instead of chasing trends. He works closely with the marketing and development teams to turn ideas into working products.',
      'For companies that want to explore AI without the confusion, Jake offers clear guidance and hands-on delivery. He explains what is possible, builds what is needed and makes sure the result fits the business. Jake is a dependable partner for any organization ready to put AI to work.'
    ],
    whatsappText:
      'Hello Arun, I would like to discuss AI automation workflows and AI search engineering with Jake Adam.'
  }
];

const FILTER_OPTIONS: { id: DisciplineFilter; label: string; count: number }[] = [
  { id: 'all', label: 'All Specialists', count: 6 },
  { id: 'seo-marketing', label: 'SEO & Digital Marketing', count: 4 },
  { id: 'web-ai', label: 'Web & AI Engineering', count: 4 }
];

export const TeamPageContent: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<DisciplineFilter>('all');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visibleMembers = TEAM_PROFILES.filter((member) =>
    activeFilter === 'all' ? true : member.disciplines.includes(activeFilter)
  );

  const founderProfile = visibleMembers.find((m) => m.isFounder);
  const specialistProfiles = visibleMembers.filter((m) => !m.isFounder);

  const handleJumpToMember = (memberId: string) => {
    if (activeFilter !== 'all') {
      setActiveFilter('all');
    }
    requestAnimationFrame(() => {
      const el = document.getElementById(`team-member-${memberId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  const scrollToInquiryForm = () => {
    const form = document.getElementById('inquiry-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderPortrait = (member: TeamMemberProfile, isFounderCard = false) => {
    const hasFailed = failedImages[member.id];

    return (
      <div
        className={`relative w-full overflow-hidden bg-slate-950 ${
          isFounderCard
            ? 'h-[400px] sm:h-[480px] lg:h-full lg:min-h-[540px]'
            : 'h-[360px] sm:h-[440px] lg:h-full lg:min-h-[480px]'
        }`}
      >
        {!hasFailed ? (
          <img
            src={member.image}
            alt={member.imageAlt}
            referrerPolicy="no-referrer"
            loading={isFounderCard ? 'eager' : 'lazy'}
            onError={() => setFailedImages((prev) => ({ ...prev, [member.id]: true }))}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 text-center">
            <div className="w-20 h-20 rounded-2xl border border-slate-700 bg-slate-900 flex items-center justify-center text-2xl font-bold font-mono text-white mb-4">
              {member.initials}
            </div>
            <div className="text-base font-semibold text-white">{member.name}</div>
            <div className="text-xs text-slate-400 mt-1">{member.role}</div>
          </div>
        )}

        {/* Measured bottom scrim for crisp legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Quiet editorial index & location anchored at bottom of portrait */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-slate-300 tabular-nums">
              {member.index} / 06
            </div>
            <div className="text-sm font-semibold text-white mt-0.5">
              {member.location}
            </div>
          </div>
          <div className="text-xs font-mono text-slate-300 tabular-nums text-right">
            {member.experience}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-14 sm:space-y-16">
      {/* 1. Editorial Collective Summary Strip (4-Column Tabular Hairline Strip) */}
      <section aria-label="Team Overview" className="border-y border-slate-800 py-7">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-6 lg:divide-x lg:divide-slate-800">
          <div className="lg:pr-6">
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono tabular-nums">
              65+ Years
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Combined senior SEO, development &amp; AI experience
            </p>
          </div>

          <div className="lg:px-6">
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono tabular-nums">
              6 Specialists
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Direct senior execution with zero junior handoffs
            </p>
          </div>

          <div className="lg:px-6">
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono tabular-nums">
              5 Global Hubs
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              New York, France, Germany, Spain &amp; Saudi Arabia
            </p>
          </div>

          <div className="lg:pl-6">
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono tabular-nums">
              7 Languages
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              English, French, German, Arabic, Hebrew, Polish &amp; Spanish
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter Controls & Direct Roster Jump Navigation */}
      <section aria-label="Filter and Navigate Team Profiles" className="space-y-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight [text-wrap:balance]">
              UDMIDEAS Team Profiles
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-400 max-w-2xl leading-relaxed">
              Every project is led directly by senior specialists across strategy, native-language search, full-stack web engineering, and applied AI.
            </p>
          </div>

          {/* Functional Segmented Filter Bar */}
          <div
            role="tablist"
            aria-label="Filter team members by specialty"
            className="inline-flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800 overflow-x-auto max-w-full"
          >
            {FILTER_OPTIONS.map((opt) => {
              const isActive = activeFilter === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(opt.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[40px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                  }`}
                >
                  {opt.label}{' '}
                  <span className={`ml-1 font-mono tabular-nums ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                    ({opt.count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Unboxed Quick-Jump Roster Strip */}
        <nav
          aria-label="Jump to team member"
          className="flex items-center gap-x-5 gap-y-2 overflow-x-auto pb-2 border-b border-slate-800/80"
        >
          {TEAM_PROFILES.map((member) => (
            <button
              key={member.id}
              type="button"
              onClick={() => handleJumpToMember(member.id)}
              className="group inline-flex items-center gap-2 py-2 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[40px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              <span className="font-mono text-xs text-blue-400 tabular-nums">{member.index}.</span>
              <span className="font-medium border-b border-transparent group-hover:border-slate-500 pb-0.5">
                {member.name}
              </span>
              <span className="text-slate-600 hidden sm:inline" aria-hidden="true">
                /
              </span>
              <span className="text-xs text-slate-500 hidden sm:inline">
                {member.location === 'Global Leadership' ? 'Founder' : member.location}
              </span>
            </button>
          ))}
        </nav>
      </section>

      {/* 3. Featured Founder Spotlight — 01. Arun */}
      {founderProfile && (
        <article
          id={`team-member-${founderProfile.id}`}
          className="group scroll-mt-24 rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Portrait Column */}
            <div className="lg:col-span-5 xl:col-span-4">
              {renderPortrait(founderProfile, true)}
            </div>

            {/* Editorial Bio Column */}
            <div className="lg:col-span-7 xl:col-span-8 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between gap-8">
              <div className="space-y-6">
                {/* Clean Unboxed Metadata Header */}
                <div className="space-y-2 pb-5 border-b border-slate-800">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-blue-400 font-medium">
                    <span className="font-mono tabular-nums">01.</span>
                    <span>{founderProfile.role}</span>
                    <span className="text-slate-600" aria-hidden="true">·</span>
                    <span className="text-slate-300">{founderProfile.experience}</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
                    {founderProfile.name}: {founderProfile.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-slate-400 pt-1">
                    <span className="text-slate-200 font-medium">Languages:</span>
                    <span>{founderProfile.languages}</span>
                  </div>
                </div>

                {/* Full Verbatim Founder Profile Paragraphs */}
                <div className="space-y-4 text-[15px] sm:text-base leading-7 text-slate-300 tracking-[0.005em]">
                  {founderProfile.paragraphs.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Unboxed Core Specialties Line */}
                <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm text-slate-400">
                  <span className="text-slate-200 font-semibold">Core Focus:</span>
                  {founderProfile.focusAreas.map((area, idx) => (
                    <React.Fragment key={area}>
                      <span>{area}</span>
                      {idx < founderProfile.focusAreas.length - 1 && (
                        <span className="text-slate-600" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Single Primary Action + Secondary Text Link */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`https://wa.me/919521186150?text=${encodeURIComponent(founderProfile.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Partner with Arun</span>
                </a>
                <button
                  type="button"
                  onClick={scrollToInquiryForm}
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  <span>Send Project Brief</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* 4. Senior International Specialists — Alternating Asymmetric Dossiers (02–06) */}
      {specialistProfiles.length > 0 && (
        <section aria-label="Senior Specialists" className="space-y-8 sm:space-y-10">
          {specialistProfiles.map((member, idx) => {
            const portraitOnRight = idx % 2 === 1;

            return (
              <article
                key={member.id}
                id={`team-member-${member.id}`}
                className="group scroll-mt-24 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors duration-200 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Portrait Column — alternates left/right on desktop, always top on mobile */}
                  <div
                    className={`lg:col-span-4 ${
                      portraitOnRight ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {renderPortrait(member, false)}
                  </div>

                  {/* Bio Prose Column */}
                  <div
                    className={`lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-7 ${
                      portraitOnRight ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="space-y-5">
                      {/* Unboxed Metadata + Heading */}
                      <div className="space-y-2 pb-4 border-b border-slate-800/90">
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-slate-400">
                          <span className="font-mono font-semibold text-blue-400 tabular-nums">
                            {member.index}.
                          </span>
                          <span className="text-slate-200 font-medium">{member.role}</span>
                          <span className="text-slate-600" aria-hidden="true">·</span>
                          <span>{member.location}</span>
                          <span className="text-slate-600" aria-hidden="true">·</span>
                          <span className="tabular-nums">{member.experience}</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight [text-wrap:balance]">
                          {member.name}: {member.role}, {member.location}
                        </h3>
                      </div>

                      {/* Exact Verbatim Biography */}
                      <div className="space-y-4 text-[15px] sm:text-base leading-7 text-slate-300 tracking-[0.005em]">
                        {member.paragraphs.map((paragraph, pIdx) => (
                          <p key={pIdx}>{paragraph}</p>
                        ))}
                      </div>
                    </div>

                    {/* Footer Row: Unboxed Specialties + Quiet Direct Action */}
                    <div className="pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        <span className="text-slate-200 font-medium">Focus: </span>
                        {member.focusAreas.join(' · ')}
                      </div>

                      <a
                        href={`https://wa.me/919521186150?text=${encodeURIComponent(member.whatsappText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                      >
                        <span>Work with {member.shortName}</span>
                        <ArrowUpRight className="w-4 h-4 shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      )}

      {/* 5. Cross-Border Collaboration Closing Block */}
      <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-400">
              <Globe2 className="w-4 h-4 shrink-0" />
              <span>One Integrated Multilingual Team</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight [text-wrap:balance]">
              Strategy, native-language marketing, web development and AI engineering under one roof.
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-300 leading-7 max-w-2xl">
              From PHP and responsive web builds in New York and France to Arabic campaigns in Saudi Arabia, German SEO in Germany, and practical AI automation from Spain, our specialists collaborate directly on every client engagement under Founder Arun.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3">
            <button
              type="button"
              onClick={scrollToInquiryForm}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              <span>Schedule Team Consultation</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20connect%20with%20the%20UDMIDEAS%20team%20about%20a%20new%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[40px]"
            >
              <span>WhatsApp Arun (+91-9521186150)</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
