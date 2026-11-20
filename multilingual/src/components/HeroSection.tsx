import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Star,
  Send,
  Loader2,
  AlertCircle,
  ShieldCheck,
  Clock
} from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onExploreServices
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Design & Development (Custom Code)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://formspree.io/f/mljbrgbp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || 'N/A',
          service: formData.service,
          region: 'Homepage Hero Quick Consultation',
          message: formData.message.trim() || 'Requested free project audit via homepage hero form.'
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Website Design & Development (Custom Code)',
          message: ''
        });
      } else {
        const data = await response.json().catch(() => null);
        const errorDetail =
          data?.errors?.map((err: { message?: string }) => err.message).filter(Boolean).join(', ') ||
          'Submission failed. Please try again or reach out directly via WhatsApp (+91-9521186150).';
        setErrorMessage(errorDetail);
      }
    } catch {
      setErrorMessage(
        'Unable to reach the form server. Please contact us directly via WhatsApp (+91-9521186150) or info@udmideasusa.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: High-Trust B2B Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Live Pulsing Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold text-[#1D4ED8]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>Booking Projects · Currently Open</span>
              </div>

              {/* Bold Geometric H1 */}
              <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-extrabold text-[#0F172A] leading-[1.15] tracking-[-0.02em] text-balance">
                Custom-Coded Multilingual Websites &amp;{' '}
                <span className="text-[#1D4ED8]">High-ROI Digital Growth.</span>
              </h1>

              {/* Concise Value Proposition */}
              <p className="text-base sm:text-[17px] text-[#475569] leading-[1.65] max-w-2xl">
                Headquartered in <strong className="text-[#0F172A] font-semibold">New York (NYC 10001)</strong> and led by Founder{' '}
                <strong className="text-[#0F172A] font-semibold">Arun</strong> with 15+ years of proven delivery. We engineer bespoke{' '}
                <strong className="text-[#0F172A] font-semibold">React, Laravel, WordPress PHP &amp; Magento</strong> websites strictly from scratch — backed by native-language{' '}
                <strong className="text-[#0F172A] font-semibold">SEO, AEO, GEO, SMM &amp; PPC</strong> across USA, LATAM, Europe, Israel &amp; the Arab World.
              </p>

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

              {/* Dual CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={onOpenContact}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Start Your Project Audit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <button
                  onClick={onExploreServices}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0F172A] bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#1D4ED8]/40 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-[#1D4ED8] group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <a
                  href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20discuss%20a%20custom%20website%20and%20digital%20marketing%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-semibold text-[#0F172A] hover:text-[#1D4ED8] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: +91-9521186150</span>
                </a>
              </div>

              {/* 5-Star Trust Rating Strip */}
              <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                  <span className="ml-1.5 text-sm font-bold text-[#0F172A] tabular-nums">5.0</span>
                </div>
                <span className="text-slate-300" aria-hidden="true">|</span>
                <p className="text-xs sm:text-sm text-[#475569]">
                  Trusted by <strong className="text-[#0F172A] font-semibold">450+ B2B &amp; eCommerce brands</strong> across 50 US states &amp; 28+ global languages
                </p>
              </div>
            </div>

            {/* Right Column: Elevated White Lead-Capture Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-xl p-6 sm:p-7 text-left">
                <div className="pb-4 mb-5 border-b border-[#E2E8F0]">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#1D4ED8] mb-1">
                    – FREE ARCHITECTURE &amp; GROWTH AUDIT
                  </div>
                  <h2 className="text-[20px] sm:text-[22px] font-bold text-[#0F172A] leading-snug">
                    Request a Direct Proposal from Founder Arun
                  </h2>
                  <p className="text-xs text-[#475569] mt-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Guaranteed response within 4 business hours · NDA protected</span>
                  </p>
                </div>

                {isSuccess ? (
                  <div className="py-6 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A]">
                      Consultation Request Received!
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed">
                      Thank you! Your project brief has been sent directly to Arun. We will reply within 4 hours.
                    </p>
                    <div className="pt-2 flex flex-col gap-2">
                      <a
                        href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20just%20submitted%20my%20project%20brief%20on%20UDMIDEAS."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-semibold transition-all"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        <span>Fast-Track on WhatsApp (+91-9521186150)</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setIsSuccess(false)}
                        className="text-xs font-semibold text-[#1D4ED8] hover:underline py-1 cursor-pointer"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit} className="space-y-3.5">
                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="hero-name" className="block text-xs font-semibold text-[#0F172A] mb-1">
                          Full Name *
                        </label>
                        <input
                          id="hero-name"
                          type="text"
                          required
                          disabled={isSubmitting}
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="hero-email" className="block text-xs font-semibold text-[#0F172A] mb-1">
                          Work Email *
                        </label>
                        <input
                          id="hero-email"
                          type="email"
                          required
                          disabled={isSubmitting}
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="hero-phone" className="block text-xs font-semibold text-[#0F172A] mb-1">
                          Phone / WhatsApp
                        </label>
                        <input
                          id="hero-phone"
                          type="text"
                          disabled={isSubmitting}
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="hero-service" className="block text-xs font-semibold text-[#0F172A] mb-1">
                          Primary Service
                        </label>
                        <select
                          id="hero-service"
                          disabled={isSubmitting}
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3 py-2.5 text-sm rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 transition-all"
                        >
                          <option>Website Design &amp; Development (Custom Code)</option>
                          <option>React JS &amp; AI Web Applications</option>
                          <option>Multilingual SEO / AEO / GEO</option>
                          <option>Google &amp; Meta PPC Management</option>
                          <option>Social Media Marketing (SMM)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="hero-message" className="block text-xs font-semibold text-[#0F172A] mb-1">
                        Website URL &amp; Project Goals
                      </label>
                      <textarea
                        id="hero-message"
                        rows={2}
                        disabled={isSubmitting}
                        placeholder="Share your website URL, target countries/languages, or growth goals..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full py-3 px-5 rounded-lg text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] disabled:opacity-60 shadow-sm hover:shadow-md transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Get My Free Consultation &amp; Quote</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-between pt-1 text-[11px] text-[#475569]">
                      <span className="inline-flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#1D4ED8]" />
                        <span>Direct to info@udmideasusa.com</span>
                      </span>
                      <span className="font-medium text-[#0F172A]">Zero obligation</span>
                    </div>
                  </form>
                )}
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
