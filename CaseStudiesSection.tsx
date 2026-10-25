import React, { useState } from 'react';
import { ArrowRight, CheckCircle, ExternalLink, Globe2, Sparkles, X } from 'lucide-react';
import { CASE_STUDIES } from '../data/contentData';
import { CaseStudy } from '../types';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onSelectCaseStudy
}) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-24 bg-slate-900/60 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            01. Proven Commercial Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Multilingual Engineering & Marketing Case Studies.
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Real custom-coded solutions and cross-border digital growth campaigns delivering measurable ROI for service businesses and high-volume eCommerce brands.
          </p>
        </div>

        {/* 4 Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <article
              key={study.id}
              className="bg-slate-950 rounded-2xl border border-slate-800 p-7 flex flex-col justify-between hover:border-slate-700 hover:shadow-xl hover:shadow-blue-950/20 transition-all group"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between gap-3 text-xs text-slate-400 mb-4 pb-3 border-b border-slate-900">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-300">{study.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{study.country}</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px] bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/50">
                    Verified ROI
                  </span>
                </div>

                {/* Title & summary */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3 leading-snug">
                  {study.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {study.summary}
                </p>

                {/* Metrics Bar */}
                <div className="grid grid-cols-3 gap-2 py-3 px-4 bg-slate-900/80 rounded-xl border border-slate-800/80 mb-6">
                  {study.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-left">
                      <div className="text-base sm:text-lg font-bold text-emerald-400 font-mono tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-slate-400 leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack & Languages */}
                <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-400">
                  <span className="text-slate-500 font-medium mr-1">Stack:</span>
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800 text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read More Action */}
              <div className="pt-4 border-t border-slate-900 flex items-center justify-between">
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>{study.languages.join(', ')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectCaseStudy(study)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/40 text-xs font-semibold transition-all group/btn"
                    aria-label={`Open dedicated case study page for ${study.title}`}
                  >
                    <span>Read Case Study Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedCaseStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-slate-950 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-800"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs text-blue-400 font-semibold mb-2 uppercase tracking-wider">
              {selectedCaseStudy.category} · {selectedCaseStudy.country}
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedCaseStudy.title}
            </h3>

            <p className="text-sm text-slate-400 mb-6 font-mono">
              Client: {selectedCaseStudy.client}
            </p>

            <div className="space-y-6 text-left text-sm">
              <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  The International Challenge
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {selectedCaseStudy.fullChallenge}
                </p>
              </div>

              <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  UDMIDEAS Custom-Coded Solution
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {selectedCaseStudy.fullSolution}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
                  Verified Commercial Results
                </h4>
                <ul className="space-y-2">
                  {selectedCaseStudy.fullResults.map((res, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Languages Engineered: </span>
                  {selectedCaseStudy.languages.join(' · ')}
                </div>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg"
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
