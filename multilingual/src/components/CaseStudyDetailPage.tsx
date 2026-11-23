import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Quote,
  Cpu,
  TrendingUp,
  Server
} from 'lucide-react';
import { CASE_STUDIES } from '../data/contentData';
import { CaseStudy } from '../types';
import { ConsultationForm } from './ConsultationForm';

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
    <article className="pt-28 pb-24 min-h-screen bg-[#F8FAFC] text-[#475569] text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E2E8F0] text-xs">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[#475569] hover:text-[#0F172A] transition-colors py-2 px-3.5 rounded-lg bg-white border border-[#E2E8F0] font-semibold shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Case Studies</span>
          </button>

          <div className="flex items-center gap-2 text-[#475569]">
            <span>Case Study</span>
            <span aria-hidden="true">/</span>
            <span className="text-[#1D4ED8] font-semibold">{caseStudy.category}</span>
            <span aria-hidden="true">/</span>
            <span className="text-[#0F172A] font-medium">{caseStudy.country}</span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="max-w-4xl space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#475569]">
            <span className="font-semibold text-[#0F172A] bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200/80">
              ★ Verified Enterprise Impact
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-[#0F172A] font-semibold">{caseStudy.country}</span>
            <span aria-hidden="true">·</span>
            <span>{caseStudy.timeline}</span>
          </div>

          <h1 className="text-[32px] sm:text-[44px] font-extrabold text-[#0F172A] tracking-[-0.02em] leading-[1.15] text-balance">
            {caseStudy.title}
          </h1>

          <p className="text-lg text-[#475569] leading-[1.65]">
            {caseStudy.summary}
          </p>

          <div className="text-xs text-[#475569] pt-1 flex items-center gap-2 font-mono">
            <span>Client: <strong className="text-[#0F172A]">{caseStudy.client}</strong></span>
            {caseStudy.clientRole && <span>({caseStudy.clientRole})</span>}
          </div>
        </div>

        {/* Quantified Metrics Showcase (Deep Navy Contrast Strip) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-xl bg-[#0F172A] border border-slate-800 mb-12 shadow-lg">
          {caseStudy.metrics.map((m, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white/5 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F59E0B] font-mono tabular-nums">
                {m.value}
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Two-Column Case Study Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Challenge, Solution & Results */}
          <div className="lg:col-span-8 space-y-8">
            <section className="p-7 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
              <div className="text-[12px] font-semibold text-red-600 uppercase tracking-[0.08em] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                The Business Challenge
              </div>
              <h2 className="text-xl font-bold text-[#0F172A]">
                Technical Bottlenecks &amp; Multi-Country Expansion Barriers
              </h2>
              <p className="text-base text-[#475569] leading-[1.65]">
                {caseStudy.fullChallenge}
              </p>
            </section>

            <section className="p-7 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
              <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                UDMIDEAS Architectural Solution
              </div>
              <h2 className="text-xl font-bold text-[#0F172A]">
                Custom-Coded Infrastructure &amp; Linguistic Parity
              </h2>
              <p className="text-base text-[#475569] leading-[1.65]">
                {caseStudy.fullSolution}
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
                <Server className="w-4 h-4 text-[#1D4ED8]" />
                System Architecture &amp; Engineering Breakdown
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white border border-[#E2E8F0]">
                  <h4 className="text-xs font-bold text-[#1D4ED8] uppercase tracking-[0.08em] mb-1.5">
                    01 / Frontend Layer
                  </h4>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {caseStudy.architectureDetails.frontend}
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-[#E2E8F0]">
                  <h4 className="text-xs font-bold text-[#1D4ED8] uppercase tracking-[0.08em] mb-1.5">
                    02 / Backend &amp; Database Layer
                  </h4>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {caseStudy.architectureDetails.backend}
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-[#E2E8F0]">
                  <h4 className="text-xs font-bold text-[#1D4ED8] uppercase tracking-[0.08em] mb-1.5">
                    03 / Multilingual &amp; Localization
                  </h4>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {caseStudy.architectureDetails.localization}
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-[#E2E8F0]">
                  <h4 className="text-xs font-bold text-[#1D4ED8] uppercase tracking-[0.08em] mb-1.5">
                    04 / Speed &amp; Core Web Vitals
                  </h4>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {caseStudy.architectureDetails.performance}
                  </p>
                </div>
              </div>
            </section>

            <section className="p-7 rounded-xl bg-white border border-blue-200/80 shadow-xs space-y-4">
              <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                Verified Commercial Outcomes
              </div>
              <h3 className="text-xl font-bold text-[#0F172A]">
                Measurable Impact Delivered in Year One
              </h3>
              <ul className="space-y-3">
                {caseStudy.fullResults.map((res, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-3 text-sm text-[#475569]">
                    <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="p-7 rounded-xl bg-white border border-[#E2E8F0] shadow-xs relative">
              <Quote className="w-8 h-8 text-blue-100 absolute top-5 right-5" />
              <blockquote className="text-base sm:text-lg text-[#0F172A] italic font-medium leading-relaxed mb-4">
                "{caseStudy.clientTestimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center font-bold text-sm text-[#1D4ED8] font-mono">
                  {caseStudy.clientTestimonial.author.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">
                    {caseStudy.clientTestimonial.author}
                  </div>
                  <div className="text-[11px] text-[#475569]">
                    {caseStudy.clientTestimonial.title} · {caseStudy.client}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Project Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
              <div>
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-[0.08em] mb-2.5">
                  Engineered Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {caseStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-[0.08em] mb-2.5">
                  Target Languages Supported
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {caseStudy.languages.map((lang) => (
                    <span
                      key={lang}
                      className="text-xs px-2.5 py-1 rounded-md bg-blue-50 text-[#1D4ED8] border border-blue-200/80 font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-[0.08em] mb-2.5">
                  Deliverables Package
                </h4>
                <ul className="space-y-2 text-xs text-[#475569]">
                  {caseStudy.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="text-[#1D4ED8] font-bold">✓</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct Consultation Box (Deep Navy Contrast Card) */}
            <div className="p-6 rounded-xl bg-[#0F172A] border border-slate-800 space-y-4 shadow-lg">
              <h4 className="text-base font-bold text-white">
                Ready to build this for your brand?
              </h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Connect directly with Founder Arun and our multilingual senior architects to scope your custom website.
              </p>
              <div className="space-y-2.5 pt-1">
                <a
                  href={`https://wa.me/919521186150?text=Hello%20Arun,%20I%20reviewed%20the%20${encodeURIComponent(caseStudy.title)}%20case%20study%20and%20would%20like%20to%20discuss%20a%20similar%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp: +91-9521186150</span>
                </a>
                <button
                  onClick={onOpenContact}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Request Technical Scoping Call</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Standardized Consultation Form */}
        <section id="inquiry-form" className="mb-14 p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xl max-w-3xl mx-auto">
          <ConsultationForm headingTag="h2" />
        </section>

        {/* Explore Other 3 Case Studies */}
        <div className="pt-12 border-t border-[#E2E8F0]">
          <h3 className="text-xl font-bold text-[#0F172A] mb-6">
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
                className="p-6 rounded-xl bg-white border border-[#E2E8F0] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-600/30 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs text-[#1D4ED8] font-semibold mb-1.5">
                    {other.category} · {other.country}
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors mb-2 line-clamp-2">
                    {other.title}
                  </h4>
                  <div className="text-xs font-mono font-bold text-[#0F172A] mb-4">
                    {other.metrics[0].label}: <span className="text-[#1D4ED8]">{other.metrics[0].value}</span>
                  </div>
                </div>
                <div className="text-xs text-[#1D4ED8] flex items-center gap-1 font-bold">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
