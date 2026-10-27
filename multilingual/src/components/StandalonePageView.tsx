import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Globe2,
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  ShieldCheck,
  Send,
  HelpCircle,
  ChevronDown,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PageSEO, getPageMetadata } from '../data/routesData';
import { USA_STATES, LATAM_COUNTRIES, EU_COUNTRIES, ARABIC_COUNTRIES } from '../data/contentData';

interface StandalonePageViewProps {
  path: string;
  onNavigateHome: () => void;
  onNavigateTo: (path: string) => void;
}

export const StandalonePageView: React.FC<StandalonePageViewProps> = ({
  path,
  onNavigateHome,
  onNavigateTo
}) => {
  const page = getPageMetadata(path);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: page.heading.slice(0, 40),
    region: page.kicker,
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Update dynamic SEO meta tags in head for this exact page
  useEffect(() => {
    document.title = page.title;

    // Update or insert meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', page.description);

    // Update OpenGraph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', page.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', page.description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', page.canonicalUrl);

    // Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', page.canonicalUrl);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Construct mailto link specifically to soni9999arun9999@gmail.com
    const subject = encodeURIComponent(`New Consultation Request from UDMIDEAS (${page.heading.slice(0, 30)})`);
    const body = encodeURIComponent(
      `Hello Arun and UDMIDEAS Team,\n\n` +
      `I am submitting an inquiry via the ${page.path} web page.\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone/WhatsApp: ${formData.phone || 'N/A'}\n` +
      `Service: ${formData.service}\n` +
      `Target Region: ${formData.region}\n` +
      `Page URL: ${window.location.href}\n\n` +
      `Project Scope / Message:\n${formData.message}\n\n` +
      `Please reply to: ${formData.email}`
    );

    // Attempt to trigger mailto client to soni9999arun9999@gmail.com
    const mailtoUrl = `mailto:soni9999arun9999@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setIsSubmitted(true);
  };

  // Related internal links for cross-linking
  const relatedLinks = [
    { label: 'Custom Website Design & Development', path: '/website-design-development/' },
    { label: 'Digital Marketing Services', path: '/digital-marketing-services/' },
    { label: 'Multilingual SEO & hreflang', path: '/multilingual-search-engine-optimization/' },
    { label: 'Answer Engine Optimization (AEO)', path: '/answer-engine-optimization/' },
    { label: 'Generative Engine Optimization (GEO)', path: '/generative-engine-optimization/' },
    { label: 'Social Media Marketing (SMM)', path: '/social-media-marketing/' },
    { label: 'Pay Per Click (PPC) Advertising', path: '/pay-per-click/' },
    { label: 'New York HQ (NYC 10001)', path: '/new-york/' },
    { label: 'Israel Tech Strategy', path: '/israel/' },
    { label: 'USA Nationwide Strategy', path: '/usa/' },
    { label: 'Latin America (LATAM)', path: '/latam/' },
    { label: 'European Union (EU)', path: '/eu/' },
    { label: 'Arab World & GCC (RTL)', path: '/arab-world/' },
    { label: 'Meet Arun & Team', path: '/team/' },
    { label: 'About UDMIDEAS', path: '/about-us/' },
    { label: 'Contact Us', path: '/contact-us/' }
  ].filter(l => l.path !== page.path);

  return (
    <article className="pt-28 pb-24 min-h-screen bg-slate-950 text-slate-100 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation with clean internal links */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-between pb-6 mb-8 border-b border-slate-900 text-xs">
          <div className="flex items-center gap-2 text-slate-400 flex-wrap">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
              className="hover:text-white transition-colors"
            >
              Home
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-slate-500 capitalize">{page.category.replace('-', ' ')}</span>
            <span aria-hidden="true">/</span>
            <span className="text-blue-400 font-medium truncate max-w-[200px] sm:max-w-none">
              {page.path}
            </span>
          </div>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </a>
        </nav>

        {/* Hero Section */}
        <header className="max-w-4xl space-y-4 mb-12">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-emerald-400 font-mono bg-emerald-950/50 px-2.5 py-1 rounded border border-emerald-900/50">
              {page.kicker}
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-300">USA HQ NYC 10001</span>
            <span aria-hidden="true">·</span>
            <span className="text-blue-400 font-mono">15+ Years Track Record</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            {page.heading}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {page.subheading}
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20your%20services%20from%20page:%20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/60 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +91-9521186150</span>
            </a>

            <a
              href="#inquiry-form"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all"
            >
              <span>Submit Project Form (Direct Email)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </header>

        {/* Key Highlights Grid */}
        <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-xl">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Key Architecture & Strategy Highlights
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {page.keyHighlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-850">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Feature Blocks */}
        <section className="mb-16 space-y-6">
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
            Detailed Capabilities & Solutions
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {page.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="text-xs font-mono text-blue-400 font-bold mb-2">
                    0{idx + 1}. SPECIFICATION
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages Strip */}
        <div className="mb-16 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <Globe2 className="w-4 h-4 text-blue-400" />
            <span className="font-semibold text-slate-200">Supported Linguistic Formats:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {page.languages.map((lang) => (
              <span key={lang} className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[11px]">
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Dedicated Contact Form Targeting soni9999arun9999@gmail.com */}
        <section id="inquiry-form" className="mb-16 p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Direct Email Notification to soni9999arun9999@gmail.com
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Request Your Free Multilingual Strategy & Architecture Audit.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Submitting this form directly notifies Founder Arun at <strong className="text-emerald-400 font-mono">soni9999arun9999@gmail.com</strong>. We analyze your requirements and reply within 4 business hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-4 animate-in fade-in">
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Inquiry Dispatched to soni9999arun9999@gmail.com!</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your inquiry has been routed to Founder Arun's primary email address (<span className="text-emerald-400 font-mono">soni9999arun9999@gmail.com</span>) for expedited review.
              </p>
              <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919521186150?text=Hello%20Arun,%20I%20just%20submitted%20the%20form%20for%20${encodeURIComponent(page.path)}%20under%20the%20name%20${encodeURIComponent(formData.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Follow Up Instantly via WhatsApp (+91-9521186150)</span>
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Work Email * (Will receive confirmation)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="text"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Selected Service Scope
                  </label>
                  <input
                    type="text"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Project Details, Target Languages & Goals
                </label>
                <textarea
                  rows={4}
                  placeholder={`Describe your technical requirements, desired countries, and timeline for ${page.path}...`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[11px] text-slate-400">
                  🔒 Direct delivery to <span className="text-emerald-400 font-mono">soni9999arun9999@gmail.com</span> · Strict NDA protected.
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all inline-flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry to Arun</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </section>

        {/* Page Specific FAQs */}
        {page.faq && page.faq.length > 0 && (
          <section className="mb-16 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-400" />
              Frequently Asked Questions for {page.heading.split(':')[0]}
            </h3>
            <div className="space-y-3">
              {page.faq.map((item, idx) => (
                <div key={idx} className="rounded-xl border border-slate-850 bg-slate-900/60 p-5">
                  <div className="text-sm font-bold text-white mb-2">{item.q}</div>
                  <div className="text-xs text-slate-300 leading-relaxed">{item.a}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Inter-linked Cross-Linking Section (Open in New Tab) */}
        <section className="pt-12 border-t border-slate-900">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                Internal Links Directory
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                Explore Related Multilingual Web & Digital Marketing Pages
              </h3>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline font-mono">Links open in new tab</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
            {relatedLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/50 border border-slate-850 hover:border-blue-500/50 hover:bg-slate-900 transition-all text-xs text-slate-300 hover:text-white flex items-center justify-between group"
              >
                <span className="truncate">{link.label}</span>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-blue-400 shrink-0 ml-1.5" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};
