import React, { useState } from 'react';
import { EMPOWERS_BY_COMPANIES } from '../data/contentData';

export const EmpoweredBySlider: React.FC = () => {
  const [activePartner, setActivePartner] = useState<string | null>(null);

  // Duplicate for smooth seamless sliding marquee
  const partnersRow = [...EMPOWERS_BY_COMPANIES, ...EMPOWERS_BY_COMPANIES];

  return (
    <section className="py-16 bg-slate-900/50 border-b border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          Empowered By & Technology Partners
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
          Enterprise Frameworks & Certified Advertising Partnerships
        </h3>
      </div>

      {/* Marquee slider track */}
      <div className="relative w-full overflow-hidden">
        {/* Left and right fade gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused] py-2">
          {partnersRow.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              onMouseEnter={() => setActivePartner(partner.name)}
              onMouseLeave={() => setActivePartner(null)}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-950/90 border border-slate-800/90 shadow-sm hover:border-slate-700 transition-all cursor-default shrink-0 group"
            >
              <span className="text-xl select-none" aria-hidden="true">
                {partner.logo}
              </span>
              <div className="text-left">
                <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors whitespace-nowrap">
                  {partner.name}
                </div>
                <div className="text-[10px] text-slate-400 font-mono whitespace-nowrap">
                  {partner.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
