import React from 'react';
import { EMPOWERS_BY_COMPANIES } from '../data/contentData';

export const EmpoweredBySlider: React.FC = () => {
  const partnersRow = [...EMPOWERS_BY_COMPANIES, ...EMPOWERS_BY_COMPANIES];

  return (
    <section className="py-16 bg-[#0F172A] border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="text-[12px] sm:text-[13px] font-semibold text-[#F59E0B] uppercase tracking-[0.08em]">
          ★ EMPOWERED BY &amp; TECHNOLOGY PARTNERS
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mt-1.5">
          Enterprise Frameworks &amp; Certified Advertising Partnerships
        </h3>
      </div>

      {/* Marquee slider track */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused] py-2">
          {partnersRow.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-slate-800 hover:border-[#1D4ED8]/60 hover:bg-white/10 transition-all cursor-default shrink-0 group"
            >
              <span className="text-xl select-none" aria-hidden="true">
                {partner.logo}
              </span>
              <div className="text-left">
                <div className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors whitespace-nowrap">
                  {partner.name}
                </div>
                <div className="text-[10px] text-[#94A3B8] font-mono whitespace-nowrap">
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
