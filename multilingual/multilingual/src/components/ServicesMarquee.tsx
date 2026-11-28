import React from 'react';

const MARQUEE_ITEMS: { label: string; highlight?: 'brand' | 'gold' }[] = [
  { label: 'UDMIDEAS SERVICES', highlight: 'gold' },
  { label: 'Multilingual Website Design' },
  { label: 'Multilingual Website Development' },
  { label: 'Multilingual Search Engine Optimization - SEO' },
  { label: 'Multilingual Answer Engine Optimization - AEO' },
  { label: 'Multilingual Generative Engine Optimization- GEO' },
  { label: 'Multilingual Social Media Marketing - SMM' },
  { label: 'Multilingual Pay-Per-Click - PPC - Advertising' },
  { label: 'Multilingual Video Creation' },
  { label: 'Multilingual Reel Creation' },
  { label: 'High-ROI Digital Growth', highlight: 'brand' }
];

const DiamondSeparator: React.FC = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F59E0B] shrink-0 mx-4 sm:mx-5"
  >
    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
  </svg>
);

export const ServicesMarquee: React.FC = () => {
  const renderTrack = (trackKey: string, ariaHidden?: boolean) => (
    <div
      key={trackKey}
      aria-hidden={ariaHidden}
      className="flex items-center shrink-0"
    >
      {MARQUEE_ITEMS.map((item, idx) => (
        <div key={`${trackKey}-${idx}`} className="flex items-center shrink-0">
          {item.highlight === 'gold' ? (
            <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#F59E0B]/15 border border-[#F59E0B]/40 text-[#F59E0B] font-display text-sm sm:text-base font-extrabold uppercase tracking-[0.08em] whitespace-nowrap">
              {item.label}
            </span>
          ) : item.highlight === 'brand' ? (
            <span className="font-display text-lg sm:text-2xl lg:text-[26px] font-extrabold tracking-[-0.015em] text-[#60A5FA] whitespace-nowrap">
              {item.label}
            </span>
          ) : (
            <span className="font-display text-lg sm:text-2xl lg:text-[26px] font-bold tracking-[-0.015em] text-white whitespace-nowrap">
              {item.label}
            </span>
          )}
          <DiamondSeparator />
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full min-w-0">
      {/* Accessible H1 for Search Engines & Screen Readers */}
      <h1 className="sr-only">
        UDMIDEAS Services: Multilingual Website Design, Website Development, SEO, AEO, GEO, SMM, PPC Advertising, Video Creation, Reel Creation, and High-ROI Digital Growth
      </h1>

      {/* Seamless Infinite Horizontal Scrolling Marquee */}
      <div
        role="region"
        aria-label="UDMIDEAS Services Marquee"
        className="group relative w-full overflow-hidden rounded-2xl bg-[#0F172A] border border-slate-800 shadow-lg py-5 sm:py-6"
      >
        {/* Subtle Top Eyebrow Accent */}
        <div className="px-4 sm:px-6 mb-3 flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#94A3B8]">
          <span className="inline-flex items-center gap-1.5 text-[#F59E0B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
            <span>UDMIDEAS Full-Stack Capabilities</span>
          </span>
          <span className="hidden sm:inline text-slate-400">Hover to pause</span>
        </div>

        {/* Edge Gradient Masks */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-[#0F172A] via-[#0F172A]/80 to-transparent z-10"
        />

        {/* Dual-Track Seamless Loop */}
        <div className="flex w-max items-center animate-[marquee_28s_linear_infinite] sm:animate-[marquee_34s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none will-change-transform">
          {renderTrack('track-a')}
          {renderTrack('track-b', true)}
        </div>
      </div>
    </div>
  );
};
