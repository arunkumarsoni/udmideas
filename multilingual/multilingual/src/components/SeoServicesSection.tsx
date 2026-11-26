import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEO_SERVICES } from '../data/contentData';

interface SeoServicesSectionProps {
  onOpenContact: () => void;
}

const SEO_PREFIXES = [
  '01 / Global SEO',
  '02 / Answer Engine',
  '03 / Generative AI',
  '04 / Technical Core'
];

export const SeoServicesSection: React.FC<SeoServicesSectionProps> = ({
  onOpenContact
}) => {
  return (
    <section id="seo-services" className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-[12px] sm:text-[13px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] mb-2">
            – ORGANIC SEARCH &amp; AI VISIBILITY
          </div>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#0F172A] leading-[1.2] tracking-tight text-balance">
            Multilingual SEO, AEO &amp; Generative Engine Optimization (GEO).
          </h2>
          <p className="mt-3 text-base text-[#475569] leading-[1.65]">
            From traditional Google rankings across 28+ languages to voice search Position Zero (AEO) and generative AI citations in ChatGPT, Perplexity &amp; Gemini (GEO).
          </p>
        </div>

        {/* 4 Detailed SEO Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SEO_SERVICES.map((service, idx) => {
            const targetUrl =
              service.id === 'seo-aeo'
                ? '/answer-engine-optimization/'
                : service.id === 'seo-geo'
                ? '/generative-engine-optimization/'
                : '/multilingual-search-engine-optimization/';

            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-[#E2E8F0] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-600/30 group text-left"
              >
                <div>
                  {/* Numbered Prefix & Badge */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E2E8F0]">
                    <span className="text-xs font-mono font-bold text-[#1D4ED8] tabular-nums">
                      {SEO_PREFIXES[idx] || service.code}
                    </span>
                    <span className="text-[11px] font-semibold text-[#475569] bg-[#F8FAFC] px-2.5 py-0.5 rounded-md border border-[#E2E8F0]">
                      {service.code}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#1D4ED8] mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-[15px] text-[#475569] leading-[1.65] mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-sm text-[#475569]">
                        <CheckCircle className="w-4 h-4 text-[#1D4ED8] mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Target Metrics & CTA */}
                <div className="pt-4 border-t border-[#E2E8F0] space-y-4">
                  <div className="flex items-center justify-between text-xs bg-[#F8FAFC] px-3.5 py-2.5 rounded-lg border border-[#E2E8F0]">
                    <span className="text-[#475569] font-medium">Target Benchmark:</span>
                    <span className="text-[#0F172A] font-bold font-mono tabular-nums">{service.kpi}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={onOpenContact}
                      className="group/btn flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                      <span>Request Strategy Audit</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-[#1D4ED8] hover:text-[#1E40AF] bg-[#F8FAFC] hover:bg-blue-50 border border-[#E2E8F0] transition-all"
                      title={`Open dedicated ${service.title} page in a new tab`}
                    >
                      <span>View Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
