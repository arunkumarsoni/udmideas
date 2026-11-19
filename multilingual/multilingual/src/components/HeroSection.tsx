import React, { useState } from 'react';
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Terminal,
  Zap,
  Code2,
  Layers,
  Sparkles
} from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onExploreServices
}) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'react' | 'laravel' | 'rtl' | 'seo'>('react');

  const codeSnippets = {
    react: `// Custom Multilingual React Architecture (Zero Bloat)
import { useTranslation, useCurrency } from '@udm/core';

export function GlobalStorefront({ countryCode, locale }) {
  const { formatPrice } = useCurrency(countryCode);
  const { t, isRTL } = useTranslation(locale);

  return (
    <main dir={isRTL ? 'rtl' : 'ltr'} className="font-modern">
      <GlobalHeader title={t('brand.mission')} />
      <ProductMatrix currency={formatPrice(tier.price)} />
      <DynamicCheckout localizedGateway={getGateways(countryCode)} />
    </main>
  );
}`,
    laravel: `// Custom Decoupled Enterprise Backend - Laravel 11
namespace App\\Services\\Multilingual;

class HreflangOrchestrator {
    public function generateRegionalGraph(string $sku): array {
        return [
            'en-US' => route('catalog.show', ['locale' => 'us', 'sku' => $sku]),
            'de-DE' => route('catalog.show', ['locale' => 'de', 'sku' => $sku]),
            'fr-FR' => route('catalog.show', ['locale' => 'fr', 'sku' => $sku]),
            'ar-AE' => route('catalog.show', ['locale' => 'ae', 'sku' => $sku]),
            'es-MX' => route('catalog.show', ['locale' => 'mx', 'sku' => $sku]),
        ];
    }
}`,
    rtl: `/* Bi-Directional RTL Engine (Arabic & Hebrew Parity) */
.udm-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-inline-start: auto;
  padding-inline-end: 2rem;
  /* Automatic inversion for Arabic & Hebrew viewports */
  writing-mode: horizontal-tb;
  direction: var(--lang-dir, ltr);
}

.udm-action-arrow {
  transform: scaleX(var(--direction-factor, 1));
}`,
    seo: `<!-- Schema.org JSON-LD Structured Graph for AEO & GEO -->
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "UDMIDEAS",
  "founder": "Arun",
  "address": { "postalCode": "10001", "addressLocality": "New York" },
  "areaServed": ["USA", "LATAM", "EU", "Israel", "Arabic World"],
  "hasOfferCatalog": {
    "name": "Multilingual Custom Web & Digital Marketing"
  }
}`
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950">
      {/* Background radial gradient mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-emerald-500/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Unique Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <span className="text-emerald-400 font-semibold">15+ Years Track Record</span>
              <span aria-hidden="true">·</span>
              <span>Founder: Arun (USA)</span>
              <span aria-hidden="true">·</span>
              <span>NYC 10001 Hub</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Multilingual Website Design, Custom Engineering & High-Yield Digital Marketing.
            </h1>

            {/* Sub-headline / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              We build high-performance websites from scratch using <span className="text-white font-semibold">React Js, WordPress, CodeIgniter, Laravel, Magento, and PHP frameworks</span> — 
              <span className="text-emerald-400 font-medium"> custom coding only, zero bloated templates</span>.
              Backed by 15+ years of dedicated multilingual SEO, AEO, GEO, SMM, and PPC mastery for service and eCommerce businesses in the USA, Latin America, Europe, Israel, and the Arab World.
            </p>

            {/* Core Action Buttons: WhatsApp Button + Audit CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Mandatory WhatsApp click button with number +91-9521186150 */}
              <a
                href="https://wa.me/919521186150?text=Hello%20Arun%20and%20UDMIDEAS%20Team,%20I%20would%20like%20to%20discuss%20a%20multilingual%20website%20design%20and%20digital%20marketing%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/60 hover:shadow-emerald-900/40 transition-all group"
                aria-label="Contact UDMIDEAS via WhatsApp +91-9521186150"
              >
                <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span>WhatsApp: +91-9521186150</span>
              </a>

              {/* Consultation / Strategy Audit CTA */}
              <a
                href="/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-100 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 shadow-sm transition-all"
              >
                <span>Request Multilingual Audit</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-4 border-t border-slate-900/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums">15+</div>
                <div className="text-xs text-slate-400">Years Agency Heritage</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400 font-mono tabular-nums">100%</div>
                <div className="text-xs text-slate-400">Custom Code Only</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 font-mono tabular-nums">28+</div>
                <div className="text-xs text-slate-400">Global Languages</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums">NYC</div>
                <div className="text-xs text-slate-400">10001 USA HQ</div>
              </div>
            </div>
          </div>

          {/* Right Column: Code & Architecture Terminal Window */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-sm">
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">udmideas-engine.ts</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-900/40">
                  Custom Code Only
                </span>
              </div>

              {/* Code Selector Tabs */}
              <div className="flex items-center gap-1 px-3 pt-2 bg-slate-950/50 border-b border-slate-800/60 overflow-x-auto text-xs">
                <button
                  onClick={() => setActiveCodeTab('react')}
                  className={`px-3 py-1.5 rounded-t-md font-mono transition-colors whitespace-nowrap ${
                    activeCodeTab === 'react'
                      ? 'bg-slate-900 text-blue-400 border-t border-x border-slate-800 font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  React JS
                </button>
                <button
                  onClick={() => setActiveCodeTab('laravel')}
                  className={`px-3 py-1.5 rounded-t-md font-mono transition-colors whitespace-nowrap ${
                    activeCodeTab === 'laravel'
                      ? 'bg-slate-900 text-blue-400 border-t border-x border-slate-800 font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Laravel / PHP
                </button>
                <button
                  onClick={() => setActiveCodeTab('rtl')}
                  className={`px-3 py-1.5 rounded-t-md font-mono transition-colors whitespace-nowrap ${
                    activeCodeTab === 'rtl'
                      ? 'bg-slate-900 text-blue-400 border-t border-x border-slate-800 font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Arabic / Hebrew RTL
                </button>
                <button
                  onClick={() => setActiveCodeTab('seo')}
                  className={`px-3 py-1.5 rounded-t-md font-mono transition-colors whitespace-nowrap ${
                    activeCodeTab === 'seo'
                      ? 'bg-slate-900 text-blue-400 border-t border-x border-slate-800 font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  AEO / GEO Schema
                </button>
              </div>

              {/* Code Output Screen */}
              <div className="p-4 bg-slate-950 text-slate-300 font-mono text-[12px] leading-relaxed overflow-x-auto max-h-[290px]">
                <pre className="text-slate-300">
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>
              </div>

              {/* Live Status Bar */}
              <div className="px-4 py-3 bg-slate-900/80 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-slate-300 font-semibold">Active Hubs:</span>
                  <span className="text-slate-400">NYC · Paris · Dubai · São Paulo · Tel Aviv</span>
                </div>
                <span className="text-emerald-400 font-mono">0.6s Global LCP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
