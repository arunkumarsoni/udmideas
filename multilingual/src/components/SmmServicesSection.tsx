import React from 'react';
import {
  Share2,
  Video,
  MessageSquare,
  Users2,
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp
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
    <section id="smm-services" className="py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
            06. Social Amplification
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Multilingual Social Media Marketing (SMM) Services.
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Cross-cultural brand storytelling, viral short-form video creation, and 24/7 native community moderation across Instagram, TikTok, LinkedIn, YouTube, and X in English, Spanish, French, German, Arabic, and Hebrew.
          </p>
        </div>

        {/* 4 SMM Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SMM_SERVICES.map((smm, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <div
                key={smm.id}
                className="bg-slate-900/70 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900 transition-all text-left group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center mb-4 text-indigo-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {smm.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {smm.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Key Deliverables:
                    </div>
                    {smm.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenContact}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-slate-300 bg-slate-950 hover:bg-indigo-950/60 hover:text-white border border-slate-800 transition-all"
                >
                  <span>Inquire SMM Plan</span>
                  <ArrowRight className="w-3 h-3 text-indigo-400" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
