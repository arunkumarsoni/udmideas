import React, { useState } from 'react';
import {
  Search,
  Globe2,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Sparkles,
  Zap
} from 'lucide-react';
import { SEO_SERVICES } from '../data/contentData';

interface SeoServicesSectionProps {
  onOpenContact: () => void;
}

export const SeoServicesSection: React.FC<SeoServicesSectionProps> = ({
  onOpenContact
}) => {
  const [selectedService, setSelectedService] = useState(SEO_SERVICES[0]);

  return (
    <section id="seo-services" className="py-24 bg-slate-900/30 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            05. Search Dominance
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Multilingual SEO, AEO & Generative Engine Optimization (GEO).
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            From traditional Google rankings across 28+ languages to voice search Position Zero (AEO) and generative AI citations in ChatGPT, Perplexity & Gemini (GEO).
          </p>
        </div>

        {/* 4 Detailed SEO Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SEO_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-slate-950 rounded-2xl border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 hover:shadow-xl hover:shadow-emerald-950/20 transition-all text-left"
            >
              <div>
                {/* Code kicker */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-900">
                  <span className="text-xs font-mono font-semibold text-emerald-400">
                    {service.code}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Multilingual Engine
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-emerald-300 mb-4">
                  {service.tagline}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Target Metrics & CTA */}
              <div className="pt-4 border-t border-slate-900 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Target Benchmark:</span>
                  <span className="text-emerald-400 font-bold font-mono">{service.kpi}</span>
                </div>
                {(() => {
                  const targetUrl =
                    service.id === 'seo-aeo'
                      ? '/answer-engine-optimization/'
                      : service.id === 'seo-geo'
                      ? '/generative-engine-optimization/'
                      : '/multilingual-search-engine-optimization/';
                  return (
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        onClick={onOpenContact}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all cursor-pointer shadow-sm"
                      >
                        <span>Request Strategy Audit</span>
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-200" />
                      </button>
                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-800 transition-all"
                        title={`Open dedicated ${service.title} page in a new tab`}
                      >
                        <span>View Page</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                    </div>
                  );
                })()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
