import React from 'react';
import {
  Code,
  Globe,
  Award,
  Users,
  CheckCircle2,
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
    <section id="about-us" className="py-20 lg:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="text-[12px] sm:text-[13px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em]">
              – ABOUT UDMIDEAS
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#0F172A] leading-[1.2] tracking-tight text-balance">
              15+ Years Pioneering Custom Code &amp; Global Multilingual Growth.
            </h2>

            <p className="text-base text-[#475569] leading-[1.65]">
              Founded by <strong className="text-[#0F172A] font-semibold">Arun</strong> and headquartered in the United States (New York, NY 10001),{' '}
              <strong className="text-[#0F172A] font-semibold">UDMIDEAS</strong> is an international engineering and digital marketing agency.
              For more than 15 years, we have rejected fragile pre-built themes, cookie-cutter website builders, and bloated third-party plugins.
            </p>

            <p className="text-base text-[#475569] leading-[1.65]">
              We engineer mission-critical websites strictly from scratch using{' '}
              <span className="text-[#1D4ED8] font-semibold">React Js, WordPress, CodeIgniter, Laravel, Magento, and custom PHP frameworks</span> —{' '}
              <span className="text-[#0F172A] font-semibold">custom coding only</span>.
              Our dedicated team of native multilingual SEO specialists, SMM strategists, and PPC performance experts manage cross-border visibility for service businesses and high-growth eCommerce operations across
              the United States, Latin America, France, Germany, Spain, Switzerland, Poland, Israel, and the Arab World.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-600/30">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
                    <Code className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A]">Custom Coding Only</h3>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed">
                  No sluggish page builders. Every line of HTML, CSS, JavaScript, and PHP is tailored for maximum execution velocity and security.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-600/30">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A]">Native Multilingual DNA</h3>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed">
                  True bi-directional (RTL/LTR) engineering, accent-safe typography, hreflang indexation, and culturally localized ad copy.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-600/30">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/70 flex items-center justify-center text-[#F59E0B]">
                    <Award className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A]">15+ Years USA Heritage</h3>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Established leadership by Arun with deep enterprise experience spanning New York, Silicon Valley, European capitals, and Gulf commerce hubs.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-600/30">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A]">Dedicated In-House Team</h3>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Direct collaboration with seasoned multilingual full-stack developers, SEO engineers, AEO/GEO analysts, and senior PPC media buyers.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/team/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>Meet Founder Arun &amp; Team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <button
                type="button"
                onClick={onOpenContact}
                className="group text-sm font-semibold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Schedule Architecture Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Right Column: Founder & USA Engineering Hub Showcase */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-white border border-[#E2E8F0] shadow-lg p-7 space-y-6">
              {/* Executive Founder Card */}
              <div className="flex items-start gap-4 pb-6 border-b border-[#E2E8F0]">
                <img
                  src="/assets/aistudio/Arun_Kumar_soni_39359c64.png"
                  alt="Arun, Founder of UDMIDEAS"
                  className="w-16 h-16 rounded-xl object-cover object-top border border-[#E2E8F0] shadow-sm shrink-0"
                />
                <div className="text-left">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-[#0F172A]">Arun</h3>
                    <span className="text-[11px] text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200/80 font-semibold">
                      Founder &amp; USA Lead
                    </span>
                  </div>
                  <p className="text-xs text-[#475569] mt-1 font-medium">
                    Senior Solutions Architect · 15+ Years Global Digital Experience
                  </p>
                  <p className="text-xs text-[#475569] mt-2 italic leading-relaxed">
                    "We don't use shortcuts or template factories. When a client trusts UDMIDEAS, they receive pure, custom-coded software and real multilingual revenue growth."
                  </p>
                </div>
              </div>

              {/* Geographic Reach Matrix */}
              <div className="space-y-3 text-left">
                <div className="text-[12px] font-semibold text-[#0F172A] uppercase tracking-[0.08em]">
                  International Service Footprint
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#0F172A] font-medium">🇺🇸 United States of America</span>
                    <span className="text-[#1D4ED8] font-mono font-semibold">NYC 10001 (HQ) &amp; 50 States</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#0F172A] font-medium">🌎 Latin America (LATAM)</span>
                    <span className="text-[#475569] font-mono">Brazil, Mexico, Colombia &amp; more</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#0F172A] font-medium">🇪🇺 European Union</span>
                    <span className="text-[#475569] font-mono">France, Germany, Spain, Swiss, Poland</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#0F172A] font-medium">🇮🇱 Israel Tech Corridor</span>
                    <span className="text-[#475569] font-mono">Tel Aviv &amp; Jerusalem</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#0F172A] font-medium">🌍 Arabic World</span>
                    <span className="text-[#B45309] font-mono font-semibold">UAE, Saudi Arabia, Qatar &amp; GCC</span>
                  </div>
                </div>
              </div>

              {/* Technical Commitment Badge */}
              <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-200/70 text-left flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] mt-0.5 shrink-0" />
                <div className="text-xs text-[#475569] leading-relaxed">
                  <span className="font-bold text-[#0F172A]">Custom Code Commitment:</span> Zero WordPress bloat, zero drag-and-drop page builders, zero synthetic junk.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
