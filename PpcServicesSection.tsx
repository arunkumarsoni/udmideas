import React from 'react';
import {
  TrendingUp,
  Target,
  BarChart3,
  MousePointerClick,
  CheckCircle,
  ArrowRight,
  DollarSign
} from 'lucide-react';
import { PPC_SERVICES } from '../data/contentData';

interface PpcServicesSectionProps {
  onOpenContact: () => void;
}

export const PpcServicesSection: React.FC<PpcServicesSectionProps> = ({
  onOpenContact
}) => {
  return (
    <section id="ppc-services" className="py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            07. Paid Advertising & Acquisition
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Our Pay-Per-Click (PPC) & Cross-Border Paid Media Services.
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Multi-currency Google Ads, Meta Ads, and LinkedIn B2B funnels designed to deliver predictable client acquisition and 4x+ ROAS across USA, LATAM, European capitals, and Gulf markets.
          </p>
        </div>

        {/* 4 PPC Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PPC_SERVICES.map((ppc, idx) => (
            <div
              key={ppc.id}
              className="bg-slate-900/60 rounded-2xl border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 hover:shadow-xl hover:shadow-blue-950/20 transition-all text-left group"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-mono font-semibold text-slate-300">
                      PAID MEDIA // STREAM 0{idx + 1}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/40">
                    High ROAS Focus
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                  {ppc.title}
                </h3>
                <p className="text-xs font-medium text-blue-300 mb-4">
                  {ppc.tagline}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {ppc.description}
                </p>

                {/* Targeted Channels */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Core Channels & Capabilities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ppc.channels.map((ch, chIdx) => (
                      <div key={chIdx} className="flex items-center gap-2 text-xs text-slate-300 p-2 rounded-lg bg-slate-950 border border-slate-850">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={onOpenContact}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/20 transition-all"
                >
                  <span>Request PPC Performance Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
