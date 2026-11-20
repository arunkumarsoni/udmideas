import React from 'react';
import {
  Share2,
  Video,
  MessageSquare,
  Users2,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { SMM_SERVICES } from '../data/contentData';

interface SmmServicesSectionProps {
  onOpenContact: () => void;
}

export const SmmServicesSection: React.FC<SmmServicesSectionProps> = ({
  onOpenContact
}) => {
  const iconMap = [Share2, Video, MessageSquare, Users2];

  return (
    <section id="smm-services" className="py-20 lg:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-[12px] sm:text-[13px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] mb-2">
            – SOCIAL AMPLIFICATION &amp; CONTENT
          </div>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#0F172A] leading-[1.2] tracking-tight text-balance">
            Multilingual Social Media Marketing (SMM) Services.
          </h2>
          <p className="mt-3 text-base text-[#475569] leading-[1.65]">
            Cross-cultural brand storytelling, short-form video creation, and 24/7 native community moderation across Instagram, TikTok, LinkedIn, YouTube, and X in English, Spanish, French, German, Arabic, and Hebrew.
          </p>
        </div>

        {/* 4 SMM Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SMM_SERVICES.map((smm, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <div
                key={smm.id}
                className="bg-[#F8FAFC] hover:bg-white rounded-xl border border-[#E2E8F0] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-600/30 text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#475569] tabular-nums">
                      0{idx + 1} / SMM
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#1D4ED8] transition-colors">
                    {smm.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed mb-5">
                    {smm.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-bold text-[#0F172A] uppercase tracking-[0.08em]">
                      Key Deliverables
                    </div>
                    {smm.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[#475569]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#1D4ED8] mt-0.5 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-[#E2E8F0]">
                  <button
                    onClick={onOpenContact}
                    className="group/btn w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <span>Inquire SMM Plan</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                  <a
                    href="/social-media-marketing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold text-[#1D4ED8] hover:text-[#1E40AF] hover:bg-blue-50 transition-colors"
                    title="Open dedicated Social Media Marketing page in a new tab"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
