import React, { useEffect } from 'react';
import {
  ArrowRight,
  Compass,
  FileWarning,
  Home,
  Layers,
  MessageCircle,
  SearchX
} from 'lucide-react';

interface NotFoundProps {
  requestedPath?: string;
  onGoHome: () => void;
  onGoServices: () => void;
  onNavigateTo: (path: string) => void;
}

export const NotFound: React.FC<NotFoundProps> = ({
  requestedPath,
  onGoHome,
  onGoServices,
  onNavigateTo
}) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = '404 - Page Not Found | UDMIDEAS';

    // Set noindex, follow to prevent soft-404 indexing in Google Search Console
    let robotsMeta = document.querySelector('meta[name="robots"]');
    const hadRobots = Boolean(robotsMeta);
    const prevRobots = robotsMeta?.getAttribute('content') || '';

    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', 'noindex, follow');

    window.scrollTo({ top: 0, behavior: 'auto' });

    return () => {
      document.title = prevTitle;
      if (hadRobots && robotsMeta) {
        robotsMeta.setAttribute('content', prevRobots);
      } else if (robotsMeta) {
        robotsMeta.remove();
      }
    };
  }, []);

  const displayPath =
    requestedPath && requestedPath !== '/404' && requestedPath !== '/404/'
      ? requestedPath
      : typeof window !== 'undefined'
        ? window.location.pathname
        : '/404';

  const quickDestinations = [
    { label: 'Services Overview', href: '/services/', desc: 'Custom web, SEO, AEO, GEO & PPC' },
    { label: 'Case Studies', href: '/case-studies/', desc: 'Verified multilingual client ROI' },
    { label: 'Blog & Guides', href: '/blog/', desc: 'International engineering & SEO insights' },
    { label: 'Contact UDMIDEAS', href: '/contact-us/', desc: 'Request a free architecture audit' }
  ];

  return (
    <section
      aria-labelledby="not-found-heading"
      className="relative min-h-[82vh] bg-[#0D0E12] text-slate-200 pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden"
    >
      {/* Pure Tailwind Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[560px] h-[320px] rounded-full bg-[#1D4ED8]/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 w-[380px] h-[220px] rounded-full bg-amber-500/10 blur-[120px]"
      />

      <div className="relative z-10 max-w-3xl w-full mx-auto text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono font-semibold text-[#F59E0B] tracking-[0.08em] uppercase mb-6">
          <FileWarning className="w-3.5 h-3.5" />
          <span>HTTP 404 · Page Not Found</span>
        </div>

        {/* Display 404 Numeral */}
        <div className="text-[76px] sm:text-[112px] lg:text-[132px] font-extrabold leading-none tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 font-[Plus_Jakarta_Sans] tabular-nums select-none mb-4">
          404
        </div>

        {/* Headline */}
        <h1
          id="not-found-heading"
          className="text-[28px] sm:text-[38px] lg:text-[42px] font-extrabold text-white tracking-[-0.02em] leading-[1.15] text-balance mb-4"
        >
          This Page Has Moved or No Longer Exists.
        </h1>

        {/* Clear Explanation */}
        <p className="text-base sm:text-lg text-slate-400 leading-[1.65] max-w-2xl mx-auto mb-6">
          The URL you followed may be mistyped, deleted, or part of an older archive removed when we upgraded the UDMIDEAS platform. Let&apos;s get you back to the right place.
        </p>

        {/* Requested Path Display */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-400 mb-9 max-w-full overflow-hidden">
          <SearchX className="w-3.5 h-3.5 text-slate-500 shrink-0" />
          <span className="truncate">{displayPath}</span>
        </div>

        {/* Prominent Primary & Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onGoHome();
            }}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold text-sm shadow-lg shadow-blue-900/30 transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home Page</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          <a
            href="/#multilingual-services"
            onClick={(e) => {
              e.preventDefault();
              onGoServices();
            }}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.11] text-white border border-white/15 hover:border-[#1D4ED8]/60 font-semibold text-sm transition-all duration-200"
          >
            <Layers className="w-4 h-4 text-blue-400" />
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

        {/* Quick Recovery Links Grid */}
        <div className="border-t border-white/10 pt-8 text-left">
          <div className="flex items-center justify-center sm:justify-between flex-wrap gap-2 mb-5">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-[0.08em] inline-flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span>Popular UDMIDEAS Destinations</span>
            </span>
            <a
              href="https://wa.me/919521186150?text=Hello%20UDMIDEAS,%20I%20landed%20on%20a%20404%20page%20and%20need%20help%20finding%20a%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Support: +91-9521186150</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {quickDestinations.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateTo(item.href);
                }}
                className="group p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#1D4ED8]/50 transition-all duration-200 flex flex-col justify-between gap-1.5"
              >
                <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors flex items-center justify-between gap-2">
                  <span>{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
