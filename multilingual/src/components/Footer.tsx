import React from 'react';
import {
  MessageCircle,
  Globe,
  Mail,
  MapPin,
  Phone,
  Shield,
  FileText,
  Cookie,
  ArrowRight
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBlogPage: () => void;
  onOpenContact: () => void;
  onOpenLegalModal: (title: string, type: 'privacy' | 'terms' | 'cookies') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBlogPage,
  onOpenContact,
  onOpenLegalModal
}) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left">
          {/* Column 1: Logo & Short Company Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-500 p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 to-emerald-400 text-sm tracking-tight">
                    UDM
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  UDMIDEAS
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase -mt-1">
                  Multilingual Web & Digital Marketing
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Founded by <strong className="text-white">Arun</strong> with 15+ years of digital marketing dominance. 
              Headquartered in New York, NY 10001. We build bespoke websites strictly from scratch using 
              React Js, WordPress, CodeIgniter, Laravel, Magento, and PHP frameworks — custom coding only. 
              Dedicated multilingual SEO, AEO, GEO, SMM, and PPC experts serving USA, LATAM, EU, Israel, and the Arab World.
            </p>

            <div className="space-y-1.5 pt-2 text-slate-300 font-mono text-[11px]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>350 5th Ave, New York, NY 10001, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>+91-9521186150 (Direct & WhatsApp)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider pb-1 border-b border-slate-900">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('Privacy Policy', 'privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('Terms and Conditions', 'terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('Cookie Policy', 'cookies')}
                  className="hover:text-white transition-colors text-left"
                >
                  Cookies Policy
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/919521186150?text=Hello%20UDMIDEAS,%20I%20am%20contacting%20you%20from%20the%20website%20footer."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: +91-9521186150</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBlogPage}
                  className="hover:text-white transition-colors text-left text-blue-400"
                >
                  Blog & Knowledge Base
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (Web Design & Growth) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider pb-1 border-b border-slate-900">
              Engineering Services
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('web-development')}
                  className="hover:text-white transition-colors text-left"
                >
                  Web Design & Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('web-development')}
                  className="hover:text-white transition-colors text-left"
                >
                  React Js & Headless Web
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('web-development')}
                  className="hover:text-white transition-colors text-left"
                >
                  WordPress & WooCommerce Custom
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('web-development')}
                  className="hover:text-white transition-colors text-left"
                >
                  Laravel & CodeIgniter Frameworks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('web-development')}
                  className="hover:text-white transition-colors text-left"
                >
                  Magento Multi-Store eCommerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('web-development')}
                  className="hover:text-white transition-colors text-left"
                >
                  Bi-Directional RTL Engineering
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Marketing Services & Social Media Icons */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider pb-1 border-b border-slate-900">
              Digital Marketing
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('seo-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Multilingual SEO & hreflang
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('seo-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  AEO (Answer Engine Optimization)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('seo-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  GEO (Generative Engine Optimization)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('smm-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Social Media Marketing (SMM)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ppc-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Pay Per Click (PPC) Advertising
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('smm-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Short-Form Video Creation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('smm-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Multilingual Content Creation
                </button>
              </li>
            </ul>

            {/* All Social Media Icons Required: FB, Insta, IG, Pinterest, LinkedIn, YouTube */}
            <div className="pt-4 border-t border-slate-900">
              <div className="text-[11px] font-semibold text-white mb-2.5">
                Connect on Social Channels:
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white border border-slate-800 flex items-center justify-center transition-colors text-slate-300"
                  aria-label="UDMIDEAS on Facebook"
                  title="Facebook"
                >
                  <span className="font-bold text-xs">fb</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-pink-600 hover:text-white border border-slate-800 flex items-center justify-center transition-colors text-slate-300"
                  aria-label="UDMIDEAS on Instagram"
                  title="Instagram"
                >
                  <span className="font-bold text-xs">ig</span>
                </a>

                {/* Pinterest */}
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-red-600 hover:text-white border border-slate-800 flex items-center justify-center transition-colors text-slate-300"
                  aria-label="UDMIDEAS on Pinterest"
                  title="Pinterest"
                >
                  <span className="font-bold text-xs">pin</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-blue-700 hover:text-white border border-slate-800 flex items-center justify-center transition-colors text-slate-300"
                  aria-label="UDMIDEAS on LinkedIn"
                  title="LinkedIn"
                >
                  <span className="font-bold text-xs">in</span>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-red-600 hover:text-white border border-slate-800 flex items-center justify-center transition-colors text-slate-300"
                  aria-label="UDMIDEAS on YouTube"
                  title="YouTube"
                >
                  <span className="font-bold text-xs">yt</span>
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-700 hover:text-white border border-slate-800 flex items-center justify-center transition-colors text-slate-300"
                  aria-label="UDMIDEAS on X"
                  title="X (Twitter)"
                >
                  <span className="font-bold text-xs">𝕏</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Accessibility & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center md:text-left">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300">UDMIDEAS</strong>. All rights reserved. 
            Custom coded architecture · Zero bloated templates · 15+ Years Legacy.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>WCAG 2.1 AA Screen Reader Compliant</span>
            <span aria-hidden="true">·</span>
            <span>NYC 10001, USA</span>
            <span aria-hidden="true">·</span>
            <a
              href="https://wa.me/919521186150"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
