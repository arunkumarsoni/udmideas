import React from 'react';
import {
  Code,
  Globe,
  Award,
  Users,
  Building2,
  CheckCircle2,
  Compass,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface AboutUsSectionProps {
  onOpenTeam: () => void;
  onOpenContact: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  onOpenTeam,
  onOpenContact
}) => {
  return (
    <section id="about-us" className="py-24 bg-slate-950 border-b border-slate-900 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              02. About UDMIDEAS
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
              15+ Years Pioneering Custom Code & Global Multilingual Growth.
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Founded by <strong className="text-white">Arun</strong> and headquartered in the United States (New York, NY 10001), 
              <strong className="text-white"> UDMIDEAS</strong> is an elite international engineering and digital marketing agency. 
              For more than 15 years, we have rejected fragile pre-built themes, cookie-cutter website builders, and bloated third-party plugins.
            </p>

            <p className="text-base text-slate-300 leading-relaxed">
              We engineer mission-critical websites strictly from scratch using <span className="text-blue-400 font-semibold">React Js, WordPress, CodeIgniter, Laravel, Magento, and custom PHP frameworks</span> — 
              <span className="text-white font-medium"> custom coding only</span>. 
              Our dedicated team of native multilingual SEO specialists, SMM strategists, and PPC performance experts manage cross-border visibility for service businesses and high-growth eCommerce operations across 
              the United States, Latin America, France, Germany, Spain, Switzerland, Poland, Israel, and the Arab World.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-bold text-white">Custom Coding Only</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  No sluggish page builders. Every line of HTML, CSS, JavaScript, and PHP is tailored for maximum execution velocity and ironclad security.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <h3 className="text-sm font-bold text-white">Native Multilingual DNA</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  True bi-directional (RTL/LTR) engineering, accent-safe typography, hreflang indexation, and culturally localized ad copy.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-bold text-white">15+ Years USA Heritage</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Established leadership by Arun with deep enterprise experience spanning New York, Silicon Valley, European capitals, and Gulf commerce hubs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-indigo-400" />
                  <h3 className="text-sm font-bold text-white">Dedicated In-House Team</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Direct collaboration with seasoned multilingual full-stack developers, SEO engineers, AEO/GEO analysts, and senior PPC media buyers.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/team/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all"
              >
                <span>Meet Founder Arun & Team</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
              </a>
              <a
                href="/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
              >
                <span>Schedule Architecture Consultation</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Founder & USA Engineering Hub Showcase */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-7 space-y-6">
              {/* Executive Founder Card */}
              <div className="flex items-start gap-4 pb-6 border-b border-slate-800">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 p-[2px] shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-xl font-bold text-white font-mono">
                    AR
                  </div>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">Arun</h3>
                    <span className="text-[11px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-900/50 font-medium">
                      Founder & USA Lead
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Senior Solutions Architect · 15+ Years Global Digital Experience
                  </p>
                  <p className="text-xs text-slate-300 mt-2 italic">
                    "We don't use shortcuts or template factories. When a client trusts UDMIDEAS, they receive pure, custom-coded software and real multilingual revenue growth."
                  </p>
                </div>
              </div>

              {/* Geographic Reach Matrix */}
              <div className="space-y-3 text-left">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  International Service Footprint
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80">
                    <span className="text-slate-300">🇺🇸 United States of America</span>
                    <span className="text-emerald-400 font-mono">NYC 10001 (HQ) & 50 States</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80">
                    <span className="text-slate-300">🌎 Latin America (LATAM)</span>
                    <span className="text-slate-400 font-mono">Brazil, Mexico, Colombia & more</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80">
                    <span className="text-slate-300">🇪🇺 European Union</span>
                    <span className="text-slate-400 font-mono">France, Germany, Spain, Swiss, Poland</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80">
                    <span className="text-slate-300">🇮🇱 Israel Tech Corridor</span>
                    <span className="text-slate-400 font-mono">Tel Aviv & Jerusalem</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80">
                    <span className="text-slate-300">🌍 Arabic World</span>
                    <span className="text-amber-400 font-mono">UAE, Saudi Arabia, Qatar, Oman & GCC</span>
                  </div>
                </div>
              </div>

              {/* Technical Commitment Badge */}
              <div className="p-3 bg-blue-950/30 rounded-xl border border-blue-900/40 text-left flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div className="text-xs text-blue-200">
                  <span className="font-semibold text-white">Custom Code Commitment:</span> Zero WordPress bloat, zero drag-and-drop page builders, zero synthetic junk.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
