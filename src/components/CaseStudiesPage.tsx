import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Globe2,
  Search,
  Sparkles,
  Quote
} from 'lucide-react';
import { CASE_STUDIES } from '../data/contentData';
import { CaseStudy } from '../types';
import { ConsultationForm } from './ConsultationForm';

interface CaseStudiesPageProps {
  onBackToHome: () => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
  onOpenContact: () => void;
}

type CaseStudyFilter = 'All' | 'eCommerce' | 'Service Business' | 'Web & React' | 'SEO & GEO';

const FILTER_TABS: CaseStudyFilter[] = [
  'All',
  'eCommerce',
  'Service Business',
  'Web & React',
  'SEO & GEO'
];

const STUDY_TAGS = [
  '01 / Featured',
  '02 / Growth',
  '03 / Global Scale',
  '04 / Enterprise'
];

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  onBackToHome,
  onSelectCaseStudy
}) => {
  const [activeFilter, setActiveFilter] = useState<CaseStudyFilter>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const pageTitle = 'Case Studies | UDMIDEAS Multilingual Web & Digital Marketing Agency';
    const pageDescription =
      'Explore UDMIDEAS verified multilingual web development, eCommerce, SEO, AEO, GEO, SMM, and PPC case studies across USA, Europe, LATAM, Israel, and the Arab World.';

    document.title = pageTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', pageDescription);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', pageTitle);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', pageDescription);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.udmideasusa.com/case-studies/');

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const matchesFilter = (study: CaseStudy, filter: CaseStudyFilter): boolean => {
    if (filter === 'All') return true;
    if (filter === 'eCommerce') return study.category === 'eCommerce';
    if (filter === 'Service Business') return study.category === 'Service Business';

    const haystack = `${study.category} ${study.title} ${study.summary} ${study.techStack.join(' ')} ${study.deliverables.join(' ')}`.toLowerCase();
    if (filter === 'Web & React') {
      return /react|laravel|magento|wordpress|codeigniter|php|headless|rtl/.test(haystack);
    }
    if (filter === 'SEO & GEO') {
      return /seo|geo|aeo|hreflang|organic|search|multilingual/.test(haystack);
    }
    return true;
  };

  const filteredStudies = CASE_STUDIES.filter((study) => {
    const matchesCat = matchesFilter(study, activeFilter);
    const q = searchQuery.trim().toLowerCase();
    if (!q) return matchesCat;

    const searchHaystack = [
      study.title,
      study.client,
      study.country,
      study.category,
      study.summary,
      ...study.techStack,
      ...study.languages
    ]
      .join(' ')
      .toLowerCase();

    return matchesCat && searchHaystack.includes(q);
  });

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#F8FAFC] text-[#475569]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb & Back Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E2E8F0] text-xs">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-[#475569] hover:text-[#0F172A] transition-colors py-2 px-3.5 rounded-lg bg-white border border-[#E2E8F0] font-semibold shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[#475569]">
            <a href="/" className="hover:text-[#0F172A] transition-colors">
              Home
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-[#1D4ED8] font-semibold">Case Studies</span>
          </nav>
        </div>

        {/* Hero Header */}
        <header className="max-w-4xl mb-10 text-left">
          <div className="text-[12px] sm:text-[13px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] mb-2">
            – PROVEN COMMERCIAL IMPACT
          </div>
          <h1 className="text-[32px] sm:text-[44px] lg:text-[50px] font-extrabold text-[#0F172A] leading-[1.15] tracking-[-0.02em] text-balance">
            Multilingual Engineering &amp; Digital Marketing Case Studies.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-[1.65]">
            Explore how UDMIDEAS builds custom-coded React, Laravel, WordPress PHP, Magento, and CodeIgniter platforms backed by native-language SEO, AEO, GEO, SMM, and PPC across USA, LATAM, Europe, Israel, and the Arab World.
          </p>
        </header>

        {/* Deep Navy Authority Metrics Strip */}
        <section
          aria-label="Case study portfolio highlights"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-[#0F172A] border border-slate-800 mb-12 shadow-lg text-left"
        >
          <div className="p-4 rounded-xl bg-white/5 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#F59E0B] font-mono tabular-nums">
              {CASE_STUDIES.length}
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1">
              Featured Enterprise Case Studies
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              +340%
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1">
              Peak Organic Inbound Revenue Lift
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              10+
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1">
              Countries &amp; RTL/LTR Markets Scaled
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#F59E0B] font-mono tabular-nums">
              0.62s
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1">
              Sub-Second Custom-Coded Load Speed
            </div>
          </div>
        </section>

        {/* Category Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E2E8F0]">
          <div
            role="tablist"
            aria-label="Filter case studies"
            className="flex flex-wrap items-center gap-2"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0F172A] text-white shadow-xs'
                      : 'bg-white text-[#475569] border border-[#E2E8F0] hover:border-[#1D4ED8]/40 hover:text-[#0F172A]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search industry, tech, or country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
            />
          </div>
        </div>

        {/* All Case Studies Grid */}
        {filteredStudies.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-12 text-center">
            <Sparkles className="w-8 h-8 text-[#1D4ED8] mx-auto mb-3" />
            <h2 className="text-lg font-bold text-[#0F172A] mb-1">
              No matching case studies found
            </h2>
            <p className="text-sm text-[#475569] mb-5">
              Try clearing your search filter to view all verified UDMIDEAS client case studies.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveFilter('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Show All Case Studies
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStudies.map((study, idx) => (
              <article
                key={study.id}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-600/30 group text-left"
              >
                <div>
                  {/* Meta Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#475569] mb-4 pb-3 border-b border-[#E2E8F0]">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-[#1D4ED8] font-mono tabular-nums">
                        {STUDY_TAGS[idx % STUDY_TAGS.length]}
                      </span>
                      <span className="text-slate-300" aria-hidden="true">·</span>
                      <span className="font-semibold text-[#0F172A]">{study.category}</span>
                      <span className="text-slate-300" aria-hidden="true">·</span>
                      <span>{study.country}</span>
                    </div>
                    <span className="text-[#0F172A] bg-amber-50 border border-amber-200/80 font-semibold text-[11px] px-2.5 py-0.5 rounded-md shrink-0">
                      ★ Verified ROI
                    </span>
                  </div>

                  {/* Title & Client */}
                  <h2 className="text-[20px] sm:text-[24px] font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors mb-2 leading-snug">
                    <a
                      href={`/case-study/${study.slug}/`}
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectCaseStudy(study);
                      }}
                      className="focus:outline-none focus:underline"
                    >
                      {study.title}
                    </a>
                  </h2>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#475569] mb-4 font-mono">
                    <span>
                      Client: <strong className="text-[#0F172A]">{study.client}</strong>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {study.timeline}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-[15px] text-[#475569] leading-[1.65] mb-6">
                    {study.summary}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3 py-3.5 px-3.5 sm:px-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] mb-6">
                    {study.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-left">
                        <div className="text-sm sm:text-lg font-extrabold text-[#1D4ED8] tabular-nums leading-tight">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-[#475569] font-medium leading-tight mt-1">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key Commercial Outcomes */}
                  <div className="mb-6">
                    <div className="text-[11px] font-bold text-[#0F172A] uppercase tracking-[0.08em] mb-2.5">
                      Verified Outcomes Delivered
                    </div>
                    <ul className="space-y-2">
                      {study.fullResults.map((result, rIdx) => (
                        <li
                          key={rIdx}
                          className="flex items-start gap-2 text-xs sm:text-[13px] text-[#475569] leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Client Quote Snippet */}
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mb-6 relative">
                    <Quote className="w-5 h-5 text-blue-200 absolute top-3.5 right-3.5" />
                    <p className="text-xs sm:text-[13px] text-[#0F172A] italic leading-relaxed pr-6">
                      "{study.clientTestimonial.quote}"
                    </p>
                    <div className="mt-2 text-[11px] font-semibold text-[#475569]">
                      — {study.clientTestimonial.author}, {study.clientTestimonial.title}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-[#475569]">
                    <span className="text-[#0F172A] font-semibold mr-1">Stack:</span>
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#F8FAFC] text-[#475569] px-2.5 py-0.5 rounded-md border border-[#E2E8F0] text-[11px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-[#475569] flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                    <span>{study.languages.join(' · ')}</span>
                  </div>
                  <a
                    href={`/case-study/${study.slug}/`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectCaseStudy(study);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-xs hover:shadow-sm transition-all duration-200 group/link"
                    aria-label={`Read full case study: ${study.title}`}
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Standardized Consultation Form */}
        <section
          id="inquiry-form"
          className="mt-16 p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xl max-w-3xl mx-auto"
        >
          <ConsultationForm headingTag="h2" />
        </section>
      </div>
    </div>
  );
};
