import React from 'react';
import { Target, CheckCircle, ArrowRight } from 'lucide-react';
import { PPC_SERVICES } from '../data/contentData';

interface PpcServicesSectionProps {
  onOpenContact: () => void;
}

export const PpcServicesSection: React.FC<PpcServicesSectionProps> = ({
  onOpenContact
}) => {
  return (
    <section id="ppc-services" className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-[12px] sm:text-[13px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] mb-2">
            – PAID ADVERTISING &amp; ACQUISITION
          </div>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#0F172A] leading-[1.2] tracking-tight text-balance">
            Our Pay-Per-Click (PPC) &amp; Cross-Border Paid Media Services.
          </h2>
          <p className="mt-3 text-base text-[#475569] leading-[1.65]">
            Multi-currency Google Ads, Meta Ads, and LinkedIn B2B funnels designed to deliver predictable client acquisition and 4x+ ROAS across USA, LATAM, European capitals, and Gulf markets.
          </p>
        </div>

        {/* 4 PPC Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PPC_SERVICES.map((ppc, idx) => (
            <div
              key={ppc.id}
              className="bg-white rounded-xl border border-[#E2E8F0] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-600/30 text-left group"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#1D4ED8]" />
                    <span className="text-xs font-mono font-bold text-[#1D4ED8] tabular-nums">
                      0{idx + 1} / Paid Media
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#0F172A] bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200/80">
                    High ROAS Focus
                  </span>
                </div>

                <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors mb-1.5">
                  {ppc.title}
                </h3>
                <p className="text-xs font-semibold text-[#1D4ED8] mb-4">
                  {ppc.tagline}
                </p>

                <p className="text-[15px] text-[#475569] leading-[1.65] mb-6">
                  {ppc.description}
                </p>

                {/* Targeted Channels */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-[11px] font-bold text-[#0F172A] uppercase tracking-[0.08em]">
                    Core Channels &amp; Capabilities
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ppc.channels.map((ch, chIdx) => (
                      <div key={chIdx} className="flex items-center gap-2 text-xs text-[#475569] p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                        <span className="font-medium text-[#0F172A]">{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0]">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={onOpenContact}
                    className="group/btn flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <span>Request PPC Audit</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                  <a
                    href="/pay-per-click/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-[#1D4ED8] hover:text-[#1E40AF] bg-[#F8FAFC] hover:bg-blue-50 border border-[#E2E8F0] transition-all"
                    title="Open dedicated Pay Per Click page in a new tab"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
