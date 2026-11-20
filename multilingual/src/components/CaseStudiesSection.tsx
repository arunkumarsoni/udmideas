import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Globe2, X } from 'lucide-react';
import { CASE_STUDIES } from '../data/contentData';
import { CaseStudy } from '../types';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

type CaseStudyFilter = 'All' | 'Web & React' | 'SEO & GEO' | 'Paid Ads';

const FILTER_TABS: CaseStudyFilter[] = ['All', 'Web & React', 'SEO & GEO', 'Paid Ads'];

const STUDY_TAGS = ['01 / Featured', '02 / Growth', '03 / Global Scale', '04 / Enterprise'];

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onSelectCaseStudy: _onSelectCaseStudy
}) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState<CaseStudyFilter>('All');

  const matchesFilter = (study: CaseStudy, filter: CaseStudyFilter): boolean => {
    if (filter === 'All') return true;
    const haystack = `${study.category} ${study.title} ${study.summary} ${study.techStack.join(' ')}`.toLowerCase();
    if (filter === 'Web & React') {
      return /react|laravel|magento|wordpress|codeigniter|php|ecommerce|web|rtl|headless/.test(haystack);
    }
    if (filter === 'SEO & GEO') {
      return /seo|geo|aeo|hreflang|organic|search|multilingual/.test(haystack);
    }
    if (filter === 'Paid Ads') {
      return /ppc|ads|paid|roas|meta|linkedin|google ads|acquisition|conversion|revenue/.test(haystack);
    }
    return true;
  };

  const filteredStudies = CASE_STUDIES.filter((s) => matchesFilter(s, activeFilter));

  return (
    <section id="case-studies" className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Filter Pills */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl">
            <div className="text-[12px] sm:text-[13px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] mb-2">
              – PROVEN COMMERCIAL IMPACT
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#0F172A] leading-[1.2] tracking-tight text-balance">
              Multilingual Engineering &amp; Marketing Case Studies.
            </h2>
            <p className="mt-3 text-base text-[#475569] leading-[1.65]">
              Real custom-coded platforms and cross-border growth campaigns delivering measurable ROI for B2B service firms and high-volume eCommerce brands.
            </p>
          </div>

          {/* Interactive Pill-Style Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter case studies by discipline"
            className="flex flex-wrap items-center gap-2 shrink-0"
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
                      ? 'bg-[#0F172A] text-white shadow-sm'
                      : 'bg-white text-[#475569] border border-[#E2E8F0] hover:border-[#1D4ED8]/40 hover:text-[#0F172A]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study, idx) => (
            <article
              key={study.id}
              className="bg-white rounded-xl border border-[#E2E8F0] p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-600/30 group text-left"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between gap-3 text-xs text-[#475569] mb-4 pb-3 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-2">
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

                {/* Title & summary */}
                <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors mb-3 leading-snug">
                  {study.title}
                </h3>
                <p className="text-[15px] text-[#475569] leading-[1.65] mb-6">
                  {study.summary}
                </p>

                {/* Metrics Bar */}
                <div className="grid grid-cols-3 gap-3 py-3.5 px-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] mb-6">
                  {study.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-left">
                      <div className="text-base sm:text-lg font-extrabold text-[#1D4ED8] tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-[#475569] font-medium leading-tight mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
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

              {/* Read More Action */}
              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-3">
                <div className="text-xs text-[#475569] flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                  <span>{study.languages.join(', ')}</span>
                </div>
                <a
                  href={`/case-study/${study.slug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors shrink-0 group/link"
                  aria-label={`Open dedicated case study page for ${study.title}`}
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal (preserved) */}
      {selectedCaseStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/75 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-white border border-[#E2E8F0] rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-5 right-5 text-[#475569] hover:text-[#0F172A] p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs text-[#1D4ED8] font-semibold mb-2 uppercase tracking-[0.08em]">
              {selectedCaseStudy.category} · {selectedCaseStudy.country}
            </div>

            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
              {selectedCaseStudy.title}
            </h3>

            <p className="text-sm text-[#475569] mb-6 font-mono">
              Client: {selectedCaseStudy.client}
            </p>

            <div className="space-y-6 text-left text-sm">
              <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                  The International Challenge
                </h4>
                <p className="text-[#475569] leading-relaxed">
                  {selectedCaseStudy.fullChallenge}
                </p>
              </div>

              <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                  UDMIDEAS Custom-Coded Solution
                </h4>
                <p className="text-[#475569] leading-relaxed">
                  {selectedCaseStudy.fullSolution}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider mb-3">
                  Verified Commercial Results
                </h4>
                <ul className="space-y-2">
                  {selectedCaseStudy.fullResults.map((res, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-[#475569]">
                      <CheckCircle className="w-4 h-4 text-[#1D4ED8] mt-0.5 shrink-0" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-[#475569]">
                  <span className="font-semibold text-[#0F172A]">Languages Engineered: </span>
                  {selectedCaseStudy.languages.join(' · ')}
                </div>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-4 py-2 text-xs font-semibold text-[#0F172A] bg-[#F8FAFC] hover:bg-slate-100 border border-[#E2E8F0] rounded-lg"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
