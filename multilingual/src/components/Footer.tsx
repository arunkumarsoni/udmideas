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
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs text-left">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Logo & Company Narrative */}
          <div className="lg:col-span-2 space-y-4">
            <a href="/" className="flex items-center gap-2.5 inline-flex group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-500 p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 to-emerald-400 text-sm tracking-tight">
                    UDM
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  UDMIDEAS
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase -mt-1">
                  Multilingual Web & Digital Marketing
                </span>
              </div>
            </a>

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
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:soni9999arun9999@gmail.com" className="hover:text-white transition-colors">
                  soni9999arun9999@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="tel:+919521186150" className="hover:text-white transition-colors">
                  +91-9521186150 (Direct & WhatsApp)
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (with target="_blank" separate web pages) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider pb-1 border-b border-slate-900">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>About Us</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="/team/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Our Dedicated Team</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Contact Us (Direct Form)</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-blue-400"
                >
                  <span>Blog & Articles</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Privacy Policy</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Terms and Conditions</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="/cookies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Cookies Policy</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                </a>
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
            </ul>
          </div>

          {/* Column 3: Services (Separate Web Pages with target="_blank") */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider pb-1 border-b border-slate-900">
              Web & Marketing Pages
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Services Overview</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="/website-design-development/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Web Design & Development</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="/digital-marketing-services/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Digital Marketing Services</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="/multilingual-search-engine-optimization/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Multilingual SEO Services</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="/answer-engine-optimization/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>AEO (Answer Engine Opt)</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="/generative-engine-optimization/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>GEO (Generative AI SEO)</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="/social-media-marketing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Social Media Marketing</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="/pay-per-click/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Pay Per Click (PPC)</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Key Regional & Country Web Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider pb-1 border-b border-slate-900">
              Regional Pages
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-[11px]">
              <a href="/usa/" target="_blank" rel="noopener noreferrer" className="hover:text-white truncate">🇺🇸 USA</a>
              <a href="/new-york/" target="_blank" rel="noopener noreferrer" className="hover:text-white text-blue-400 font-semibold truncate">🗽 New York</a>
              <a href="/california/" target="_blank" rel="noopener noreferrer" className="hover:text-white truncate">🌴 California</a>
              <a href="/texas/" target="_blank" rel="noopener noreferrer" className="hover:text-white truncate">🤠 Texas</a>
              <a href="/florida/" target="_blank" rel="noopener noreferrer" className="hover:text-white truncate">☀️ Florida</a>
              <a href="/illinois/" target="_blank" rel="noopener noreferrer" className="hover:text-white truncate">🏙️ Illinois</a>
              <a href="/israel/" target="_blank" rel="noopener noreferrer" className="hover:text-white text-blue-400 font-semibold truncate">🇮🇱 Israel</a>
              <a href="/france/" target="_blank" rel="noopener noreferrer" className="hover:text-white truncate">🇫🇷 France</a>
              <a href="/germany/" target="_blank" rel="noopener noreferrer" className="hover:text-white truncate">🇩🇪 Germany</a>
              <a href="/spain/" target="_blank" rel="noopener noreferrer" className="hover:text-white truncate">🇪🇸 Spain</a>
              <a href="/switzerland/" target="_blank" rel="noopener noreferrer" className="hover:text-white truncate">🇨🇭 Swiss</a>
              <a href="/poland/" target="_blank" rel="noopener noreferrer" className="hover:text-white truncate">🇵🇱 Poland</a>
              <a href="/uae/" target="_blank" rel="noopener noreferrer" className="hover:text-white truncate">🇦🇪 UAE</a>
              <a href="/saudi-arabia/" target="_blank" rel="noopener noreferrer" className="hover:text-white truncate">🇸🇦 Saudi</a>
              <a href="/qatar/" target="_blank" rel="noopener noreferrer" className="hover:text-white truncate">🇶🇦 Qatar</a>
              <a href="/egypt/" target="_blank" rel="noopener noreferrer" className="hover:text-white truncate">🇪🇬 Egypt</a>
              <a href="/latam/" target="_blank" rel="noopener noreferrer" className="hover:text-white truncate">🌎 LATAM</a>
              <a href="/arab-world/" target="_blank" rel="noopener noreferrer" className="hover:text-white truncate">🌍 Arab World</a>
            </div>

            {/* Social Media Channels */}
            <div className="pt-4 border-t border-slate-900">
              <div className="text-[11px] font-semibold text-white mb-2.5">
                Connect on Social Channels:
              </div>
              <div className="flex flex-wrap items-center gap-2">
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

        {/* Bottom Legal, Accessibility & Direct Email statement */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center md:text-left">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300">UDMIDEAS</strong>. All rights reserved. 
            All client inquiries forwarded directly to <span className="text-emerald-400 font-mono">soni9999arun9999@gmail.com</span>.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <span>WCAG 2.1 AA Screen Reader Compliant</span>
            <span aria-hidden="true">·</span>
            <span>NYC 10001, USA</span>
            <span aria-hidden="true">·</span>
            <a
              href="https://wa.me/919521186150"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              <span>WhatsApp: +91-9521186150</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
