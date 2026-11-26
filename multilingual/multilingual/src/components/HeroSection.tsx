import React from 'react';
import {
  CheckCircle2,
  Star
} from 'lucide-react';
import { ConsultationForm } from './ConsultationForm';
import { HeroTypewriter } from './HeroTypewriter';

interface HeroSectionProps {
  onOpenContact?: () => void;
  onExploreServices?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <>
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white overflow-hidden">
        {/* Subtle Architectural Grid Accent */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 35%, transparent 100%)'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-start">
            {/* Left Column: High-Trust B2B Value Proposition */}
            <div className="lg:col-span-6 space-y-6 text-left lg:pt-4">
              {/* Live Pulsing Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold text-[#1D4ED8]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>Booking Projects · Currently Open</span>
              </div>

              {/* Typewriter Hero Headline Animation */}
              <HeroTypewriter />

              {/* Updated Agency Value Proposition */}
              <div className="space-y-3 text-[15px] sm:text-base text-[#475569] leading-[1.65] sm:leading-[1.7] max-w-2xl">
                <p>
                  We at <strong className="text-[#0F172A] font-semibold">UDMIDEAS (Unique Digital Marketing Ideas)</strong>,{' '}
                  <strong className="text-[#0F172A] font-semibold">15+ years Company Heritage</strong> building custom coded Multilingual websites in{' '}
                  <strong className="text-[#0F172A] font-semibold">React, Laravel, WordPress PHP &amp; Magento</strong> for service and eCommerce based Businesses for all Industries serving Cross-Border Countries of{' '}
                  <strong className="text-[#0F172A] font-semibold">LATAM, Europe, Israel &amp; the Arab World</strong>.
                </p>
                <p>
                  We Grow your Business via our Digital marketing Services -{' '}
                  <strong className="text-[#0F172A] font-semibold">SEO, AEO, GEO, SMM, PPC-Google Ads, and Video Creation</strong>. A{' '}
                  <strong className="text-[#0F172A] font-semibold">Multilingual-Cross-Border-WEB-SEO-Company</strong> working on - Arabic, Hebrew, French, German, Spanish, Polish, Chinese, Japanese, Italian, Portuguese, Dutch, Russian, Polish, Swedish, and many more languages to grow your business.
                </p>
              </div>

              {/* Key Trust Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-[#475569]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                  <span>100% Custom Code — Zero Page Builders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                  <span>Native RTL (Arabic/Hebrew) &amp; Hreflang SEO</span>
                </div>
              </div>

              {/* 5-Star Trust Rating Strip */}
              <div className="pt-5 border-t border-[#E2E8F0] flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                  <span className="ml-1.5 text-sm font-bold text-[#0F172A] tabular-nums">5.0</span>
                </div>
                <span className="hidden sm:inline text-slate-300" aria-hidden="true">|</span>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Trusted by <strong className="text-[#0F172A] font-semibold">450+ B2B &amp; eCommerce brands</strong> across 50 US states &amp; 28+ global languages
                </p>
              </div>
            </div>

            {/* Right Column: Standardized Elevated White Consultation Form */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xl p-6 sm:p-7 text-left">
                <ConsultationForm headingTag="h2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Navy Contrast Trust & Metrics Strip */}
      <section aria-label="Agency Authority Metrics" className="bg-[#0F172A] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:divide-x lg:divide-slate-800 text-left">
            <div className="lg:pr-6">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">
                15+ Years
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#94A3B8] mt-1">
                USA &amp; Global Agency Experience
              </div>
            </div>

            <div className="lg:px-6">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                SEO / GEO / AEO
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#94A3B8] mt-1">
                Google, Voice &amp; AI Citation Authority
              </div>
            </div>

            <div className="lg:px-6">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Custom React &amp; AI
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#94A3B8] mt-1">
                Pure Code · React, Laravel, PHP &amp; Magento
              </div>
            </div>

            <div className="lg:pl-6">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F59E0B] tracking-tight tabular-nums">
                28+ Languages
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#94A3B8] mt-1">
                USA, LATAM, EU, Israel &amp; Arabic RTL
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
