import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { USA_STATES } from '../data/contentData';

interface MapUsaSectionProps {
  onSelectState: (stateName: string) => void;
  onOpenContact: () => void;
}

export const MapUsaSection: React.FC<MapUsaSectionProps> = ({
  onSelectState,
  onOpenContact
}) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <section id="usa-hub" className="py-20 lg:py-24 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-[12px] sm:text-[13px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] mb-2">
            – UNITED STATES HEADQUARTERS
          </div>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#0F172A] leading-[1.2] tracking-tight text-balance">
            USA Headquarters · New York, NY 10001.
          </h2>
          <p className="mt-3 text-base text-[#475569] leading-[1.65]">
            Centrally anchored in Manhattan, New York (Zip Code 10001). We provide nationwide custom software development, enterprise search optimization, and geo-targeted paid acquisition across all 50 states.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Map Graphic & States Grid */}
          <div className="lg:col-span-7 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              {/* NYC Pin Visual Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-mono text-[#0F172A] font-bold">
                    ACTIVE USA OPERATION // NYC 10001
                  </span>
                </div>
                <span className="text-xs text-[#475569] font-mono">
                  {hoveredState ? hoveredState : 'EST (UTC-5)'}
                </span>
              </div>

              {/* Styled Vector Map of USA / NYC Pin Area (Deep Navy Contrast Canvas) */}
              <div className="relative rounded-xl bg-[#0F172A] border border-slate-800 p-6 mb-6 overflow-hidden min-h-[240px] flex flex-col justify-center items-center shadow-inner">
                <svg
                  viewBox="0 0 800 450"
                  className="w-full h-auto max-h-[220px]"
                  aria-label="Stylized map of United States with New York NY 10001 pin"
                >
                  <defs>
                    <radialGradient id="nycPulse" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  <path
                    d="M 120,90 Q 220,70 340,85 T 560,95 Q 680,85 710,120 Q 720,160 690,195 Q 700,240 680,290 Q 640,360 540,370 Q 420,380 320,360 Q 200,350 150,290 Q 100,240 90,170 Z"
                    fill="#1E293B"
                    stroke="#334155"
                    strokeWidth="2"
                  />

                  <line x1="680" y1="140" x2="160" y2="180" stroke="#475569" strokeDasharray="4 4" strokeWidth="1.2" />
                  <line x1="680" y1="140" x2="380" y2="320" stroke="#475569" strokeDasharray="4 4" strokeWidth="1.2" />
                  <line x1="680" y1="140" x2="620" y2="340" stroke="#475569" strokeDasharray="4 4" strokeWidth="1.2" />
                  <line x1="680" y1="140" x2="480" y2="150" stroke="#475569" strokeDasharray="4 4" strokeWidth="1.2" />

                  <circle cx="160" cy="180" r="4" fill="#94A3B8" />
                  <text x="170" y="184" fill="#CBD5E1" fontSize="11" fontFamily="sans-serif">CA</text>

                  <circle cx="380" cy="320" r="4" fill="#94A3B8" />
                  <text x="390" y="324" fill="#CBD5E1" fontSize="11" fontFamily="sans-serif">TX</text>

                  <circle cx="620" cy="340" r="4" fill="#94A3B8" />
                  <text x="630" y="344" fill="#CBD5E1" fontSize="11" fontFamily="sans-serif">FL</text>

                  <circle cx="480" cy="150" r="4" fill="#94A3B8" />
                  <text x="490" y="154" fill="#CBD5E1" fontSize="11" fontFamily="sans-serif">IL</text>

                  <circle cx="680" cy="140" r="24" fill="url(#nycPulse)" className="animate-pulse" />
                  <circle cx="680" cy="140" r="7" fill="#F59E0B" stroke="#ffffff" strokeWidth="2" />
                  <text x="696" y="145" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                    NYC 10001 (HQ)
                  </text>
                </svg>

                <div className="text-center mt-2">
                  <span className="text-xs text-[#94A3B8] font-medium">
                    Midtown Manhattan · 350 5th Ave, New York, NY 10001
                  </span>
                </div>
              </div>

              {/* 20 Top USA States Quick Navigator */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-[#475569]">
                  <span className="font-bold text-[#0F172A] uppercase tracking-[0.06em]">
                    Explore Our Top 20 USA Service States
                  </span>
                  <span className="text-[11px] text-[#1D4ED8] font-mono font-semibold">20 States Active</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-h-40 overflow-y-auto pr-1">
                  {USA_STATES.map((state) => {
                    const slug = `/${state.toLowerCase().replace(/\s+/g, '-')}/`;
                    return (
                      <a
                        key={state}
                        href={slug}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredState(state)}
                        onMouseLeave={() => setHoveredState(null)}
                        className={`text-left px-2.5 py-1.5 text-xs rounded-lg border transition-all truncate flex items-center justify-between ${
                          state === 'New York'
                            ? 'bg-[#1D4ED8] text-white border-[#1D4ED8] font-semibold'
                            : 'bg-white text-[#475569] border-[#E2E8F0] hover:border-[#1D4ED8]/50 hover:text-[#1D4ED8]'
                        }`}
                      >
                        <span className="truncate">{state}</span>
                        <span className="text-[9px] opacity-60 ml-1">↗</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] mt-6 flex items-center justify-between text-xs text-[#475569]">
              <span>Full compliance with US ADA Title III accessibility &amp; federal privacy standards.</span>
            </div>
          </div>

          {/* Right Column: Office Address, Hours, Founder & Direct WhatsApp */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-6 sm:p-8 flex flex-col justify-between text-left">
            <div className="space-y-6">
              <div className="pb-4 border-b border-[#E2E8F0]">
                <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0F172A] mb-1">
                  UDMIDEAS USA Office
                </h3>
                <p className="text-xs text-[#475569]">
                  Strategic Headquarters &amp; Client Executive Briefing Center
                </p>
              </div>

              {/* Key Location Facts */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#1D4ED8] mt-1 shrink-0" />
                  <div>
                    <div className="font-bold text-[#0F172A]">Physical Address</div>
                    <div className="text-[#475569]">350 5th Avenue, Suite 4100</div>
                    <div className="text-[#475569]">New York, NY 10001, United States</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#1D4ED8] mt-1 shrink-0" />
                  <div>
                    <div className="font-bold text-[#0F172A]">Office Hours</div>
                    <div className="text-[#475569]">Monday – Friday: 8:00 AM – 7:00 PM EST</div>
                    <div className="text-[#475569]">Saturday: By Appointment (Global Clients)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#F59E0B] mt-1 shrink-0" />
                  <div>
                    <div className="font-bold text-[#0F172A]">Direct Line &amp; WhatsApp</div>
                    <div className="text-[#0F172A] font-mono text-sm font-bold">+91-9521186150</div>
                    <div className="text-xs text-[#475569]">Direct Founder &amp; Strategy Hotline</div>
                  </div>
                </div>
              </div>

              {/* Fast Direct Action Links */}
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
                <div className="text-xs font-bold text-[#0F172A]">
                  Instant Communication Channel
                </div>
                <a
                  href="https://wa.me/919521186150?text=Hello%20UDMIDEAS%20NYC,%20I%20would%20like%20to%20schedule%20a%20strategy%20call%20for%20multilingual%20website%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-xs shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Message Arun on WhatsApp (+91-9521186150)</span>
                </a>

                <button
                  onClick={onOpenContact}
                  className="group w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold text-xs shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Book Free Consultation Call</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0] text-xs text-[#475569]">
              Serving Fortune 500 enterprises, high-growth startups, and multi-country eCommerce brands worldwide.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
