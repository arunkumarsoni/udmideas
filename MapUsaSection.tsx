import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  Clock,
  Phone,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Building,
  CheckCircle2
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
    <section id="usa-hub" className="py-24 bg-slate-900/50 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            10. United States Headquarters
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            USA Headquarters · New York, NY 10001.
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Centrally anchored in Manhattan, New York (Zip Code 10001). We provide nationwide custom software development, enterprise search optimization, and geo-targeted paid acquisition across all 50 states.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Map Graphic & States Grid */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              {/* NYC Pin Visual Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-900 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    ACTIVE USA OPERATION // NYC 10001
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">EST (UTC-5)</span>
              </div>

              {/* Styled Vector Map of USA / NYC Pin Area */}
              <div className="relative rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-850 p-6 mb-6 overflow-hidden min-h-[240px] flex flex-col justify-center items-center">
                {/* SVG Stylized US Continental Grid & NYC Marker */}
                <svg
                  viewBox="0 0 800 450"
                  className="w-full h-auto opacity-75 max-h-[220px]"
                  aria-label="Stylized map of United States with New York NY 10001 pin"
                >
                  <defs>
                    <radialGradient id="nycPulse" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Abstract US landmass outline silhouette */}
                  <path
                    d="M 120,90 Q 220,70 340,85 T 560,95 Q 680,85 710,120 Q 720,160 690,195 Q 700,240 680,290 Q 640,360 540,370 Q 420,380 320,360 Q 200,350 150,290 Q 100,240 90,170 Z"
                    fill="#0f172a"
                    stroke="#1e293b"
                    strokeWidth="2"
                  />

                  {/* Regional connection lines back to NYC */}
                  <line x1="680" y1="140" x2="160" y2="180" stroke="#334155" strokeDasharray="4 4" strokeWidth="1" />
                  <line x1="680" y1="140" x2="380" y2="320" stroke="#334155" strokeDasharray="4 4" strokeWidth="1" />
                  <line x1="680" y1="140" x2="620" y2="340" stroke="#334155" strokeDasharray="4 4" strokeWidth="1" />
                  <line x1="680" y1="140" x2="480" y2="150" stroke="#334155" strokeDasharray="4 4" strokeWidth="1" />

                  {/* Major State Hub Points */}
                  <circle cx="160" cy="180" r="4" fill="#64748b" /> {/* California */}
                  <text x="170" y="184" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">CA</text>

                  <circle cx="380" cy="320" r="4" fill="#64748b" /> {/* Texas */}
                  <text x="390" y="324" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">TX</text>

                  <circle cx="620" cy="340" r="4" fill="#64748b" /> {/* Florida */}
                  <text x="630" y="344" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">FL</text>

                  <circle cx="480" cy="150" r="4" fill="#64748b" /> {/* Illinois */}
                  <text x="490" y="154" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">IL</text>

                  {/* NEW YORK NY 10001 Focal Pin */}
                  <circle cx="680" cy="140" r="22" fill="url(#nycPulse)" className="animate-pulse" />
                  <circle cx="680" cy="140" r="7" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
                  <text x="696" y="145" fill="#38bdf8" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                    NYC 10001 (HQ)
                  </text>
                </svg>

                {/* Subtext overlay */}
                <div className="text-center mt-2">
                  <span className="text-xs text-slate-300 font-medium">
                    Midtown Manhattan · 350 5th Ave, New York, NY 10001
                  </span>
                </div>
              </div>

              {/* 20 Top USA States Quick Navigator */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-300 uppercase tracking-wider">
                    Click to Inspect Any of Our Top 20 USA Service States:
                  </span>
                  <span className="text-[11px] text-blue-400 font-mono">20 States Active</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 max-h-40 overflow-y-auto pr-1">
                  {USA_STATES.map((state) => (
                    <button
                      key={state}
                      onClick={() => onSelectState(state)}
                      onMouseEnter={() => setHoveredState(state)}
                      onMouseLeave={() => setHoveredState(null)}
                      className={`text-left px-2 py-1 text-xs rounded transition-colors truncate ${
                        state === 'New York'
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {state}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-900 mt-6 flex items-center justify-between text-xs text-slate-400">
              <span>Full compliance with US ADA Title III accessibility & federal privacy standards.</span>
            </div>
          </div>

          {/* Right Column: Office Address, Hours, Founder & Direct WhatsApp */}
          <div className="lg:col-span-5 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between text-left">
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-900">
                <h3 className="text-xl font-bold text-white mb-1">
                  UDMIDEAS USA Office
                </h3>
                <p className="text-xs text-slate-400">
                  Strategic Headquarters & Client Executive Briefing Center
                </p>
              </div>

              {/* Key Location Facts */}
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold text-white">Physical Address</div>
                    <div className="text-slate-300">350 5th Avenue, Suite 4100</div>
                    <div className="text-slate-400">New York, NY 10001, United States</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold text-white">Office Hours</div>
                    <div className="text-slate-300">Monday – Friday: 8:00 AM – 7:00 PM EST</div>
                    <div className="text-slate-400">Saturday: By Appointment (Global Clients)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold text-white">Direct Line & WhatsApp</div>
                    <div className="text-slate-300 font-mono text-sm font-semibold">+91-9521186150</div>
                    <div className="text-slate-400">Direct Founder & Strategy Hotline</div>
                  </div>
                </div>
              </div>

              {/* Fast Direct Action Links */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="text-xs font-semibold text-slate-200">
                  Instant Communication Channel:
                </div>
                <a
                  href="https://wa.me/919521186150?text=Hello%20UDMIDEAS%20NYC,%20I%20would%20like%20to%20schedule%20a%20strategy%20call%20for%20multilingual%20website%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Message Arun on WhatsApp (+91-9521186150)</span>
                </a>

                <button
                  onClick={onOpenContact}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md transition-all"
                >
                  <span>Book Free Consultation Call</span>
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-900 text-xs text-slate-400">
              Serving Fortune 500 enterprises, high-growth startups, and multi-country eCommerce brands worldwide.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
