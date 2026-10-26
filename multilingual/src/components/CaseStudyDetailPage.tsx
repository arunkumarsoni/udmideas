import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Calendar,
  Layers,
  Sparkles,
  MessageCircle,
  Quote,
  ShieldCheck,
  Cpu,
  TrendingUp,
  Server
} from 'lucide-react';
import { CASE_STUDIES } from '../data/contentData';
import { CaseStudy } from '../types';

interface CaseStudyDetailPageProps {
  caseStudy: CaseStudy;
  onBack: () => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
  onOpenContact: () => void;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({
  caseStudy,
  onBack,
  onSelectCaseStudy,
  onOpenContact
}) => {
  const otherCaseStudies = CASE_STUDIES.filter((cs) => cs.id !== caseStudy.id);

  return (
    <article className="pt-28 pb-24 min-h-screen bg-slate-950 text-slate-100 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-900 text-xs">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors py-1.5 px-3 rounded-lg bg-slate-900 border border-slate-800"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Case Studies</span>
          </button>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Case Study</span>
            <span aria-hidden="true">/</span>
            <span className="text-blue-400 font-medium">{caseStudy.category}</span>
            <span aria-hidden="true">/</span>
            <span className="text-slate-300">{caseStudy.country}</span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="max-w-4xl space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-emerald-400 font-mono bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-900/50">
              Verified Enterprise Impact
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-300">{caseStudy.country}</span>
            <span aria-hidden="true">·</span>
            <span>{caseStudy.timeline}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            {caseStudy.title}
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed">
            {caseStudy.summary}
          </p>

          <div className="text-xs text-slate-400 pt-2 flex items-center gap-2 font-mono">
            <span>Client: <strong className="text-white">{caseStudy.client}</strong></span>
            {caseStudy.clientRole && <span>({caseStudy.clientRole})</span>}
          </div>
        </div>

        {/* Quantified Metrics Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 mb-12 shadow-xl">
          {caseStudy.metrics.map((m, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-850">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
                {m.value}
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Two-Column Case Study Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Challenge, Solution & Results */}
          <div className="lg:col-span-8 space-y-10">
            {/* The International Challenge */}
            <section className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                The Business Challenge
              </div>
              <h2 className="text-xl font-bold text-white">
                Technical Bottlenecks & Multi-Country Expansion Barriers
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {caseStudy.fullChallenge}
              </p>
            </section>

            {/* The Custom Solution */}
            <section className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                UDMIDEAS Architectural Solution
              </div>
              <h2 className="text-xl font-bold text-white">
                Custom-Coded Infrastructure & Linguistic Parity
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {caseStudy.fullSolution}
              </p>
            </section>

            {/* Architecture Details Grid */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Server className="w-4 h-4 text-emerald-400" />
                System Architecture & Engineering Breakdown
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
                    Frontend Layer
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {caseStudy.architectureDetails.frontend}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">
                    Backend & Database Layer
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {caseStudy.architectureDetails.backend}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                    Multilingual & Localization
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {caseStudy.architectureDetails.localization}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                    Speed & Core Web Vitals
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {caseStudy.architectureDetails.performance}
                  </p>
                </div>
              </div>
            </section>

            {/* Results Checklist */}
            <section className="p-7 rounded-2xl bg-emerald-950/20 border border-emerald-900/40 space-y-4">
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                Verified Commercial Outcomes
              </div>
              <h3 className="text-xl font-bold text-white">
                Measurable Impact Delivered in Year One
              </h3>
              <ul className="space-y-3">
                {caseStudy.fullResults.map((res, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Client Testimonial */}
            <section className="p-7 rounded-2xl bg-slate-900 border border-slate-800 relative">
              <Quote className="w-8 h-8 text-blue-500/20 absolute top-5 right-5" />
              <blockquote className="text-base sm:text-lg text-slate-100 italic leading-relaxed mb-4">
                "{caseStudy.clientTestimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center font-bold text-sm text-blue-300 font-mono">
                  {caseStudy.clientTestimonial.author.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    {caseStudy.clientTestimonial.author}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {caseStudy.clientTestimonial.title} · {caseStudy.client}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Project Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tech Stack & Languages Card */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Engineered Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {caseStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Target Languages Supported
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {caseStudy.languages.map((lang) => (
                    <span
                      key={lang}
                      className="text-xs px-2.5 py-1 rounded bg-blue-950/40 text-blue-300 border border-blue-900/50"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Deliverables Package
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {caseStudy.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct Consultation Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/60 to-slate-900 border border-blue-800/40 space-y-4">
              <h4 className="text-base font-bold text-white">
                Ready to build this for your brand?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with Founder Arun and our multilingual senior architects to scope your custom website.
              </p>
              <div className="space-y-2 pt-2">
                <a
                  href={`https://wa.me/919521186150?text=Hello%20Arun,%20I%20reviewed%20the%20${encodeURIComponent(caseStudy.title)}%20case%20study%20and%20would%20like%20to%20discuss%20a%20similar%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: +91-9521186150</span>
                </a>
                <button
                  onClick={onOpenContact}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all"
                >
                  <span>Request Technical Scoping Call</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Other 3 Case Studies */}
        <div className="pt-12 border-t border-slate-900">
          <h3 className="text-xl font-bold text-white mb-6">
            Explore Other Case Studies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherCaseStudies.map((other) => (
              <div
                key={other.id}
                onClick={() => {
                  onSelectCaseStudy(other);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs text-blue-400 font-medium mb-1">
                    {other.category} · {other.country}
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
                    {other.title}
                  </h4>
                  <div className="text-xs font-mono text-emerald-400 mb-4">
                    {other.metrics[0].label}: {other.metrics[0].value}
                  </div>
                </div>
                <div className="text-xs text-slate-400 group-hover:text-white flex items-center gap-1 font-semibold">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
