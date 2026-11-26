import React, { useState, useEffect, useRef } from 'react';
import {
  Globe,
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  ExternalLink,
  Code,
  Search,
  Share2,
  TrendingUp,
  Cpu
} from 'lucide-react';
import {
  USA_STATES,
  LATAM_COUNTRIES,
  EU_COUNTRIES,
  ARABIC_COUNTRIES
} from '../data/contentData';

interface NavbarProps {
  currentPath: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const servicesList = [
    { name: 'Website Design & Development', path: '/website-design-development/', icon: Code, desc: 'React, WordPress, Laravel, Magento custom coding' },
    { name: 'Digital Marketing Services', path: '/digital-marketing-services/', icon: TrendingUp, desc: 'Full-funnel cross-border growth strategies' },
    { name: 'Multilingual SEO (Search Engine Optimization)', path: '/multilingual-search-engine-optimization/', icon: Search, desc: 'Hreflang, multi-country indexation, technical speed' },
    { name: 'Answer Engine Optimization (AEO)', path: '/answer-engine-optimization/', icon: Cpu, desc: 'Voice search & Google Position Zero capture' },
    { name: 'Generative Engine Optimization (GEO)', path: '/generative-engine-optimization/', icon: Globe, desc: 'Citations in ChatGPT, Perplexity & Gemini Search' },
    { name: 'Social Media Marketing (SMM)', path: '/social-media-marketing/', icon: Share2, desc: 'Multilingual content, video creation & community' },
    { name: 'Pay Per Click (PPC)', path: '/pay-per-click/', icon: TrendingUp, desc: 'Google Search & Shopping, Meta Ads, LinkedIn ABM' }
  ];

  const formatSlug = (name: string) => {
    return '/' + name.toLowerCase().trim().replace(/\s+/g, '-') + '/';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F172A]/98 backdrop-blur-md border-b border-slate-800 shadow-lg py-2.5'
          : 'bg-[#0F172A] border-b border-slate-800/80 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo Wordmark with Root Link */}
          <a
            href="/"
            className="flex items-center gap-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded-md shrink-0 group"
            aria-label="UDMIDEAS Home"
          >
            <div className="w-9 h-9 rounded-lg bg-[#1D4ED8] flex items-center justify-center shadow-sm group-hover:bg-[#1E40AF] transition-colors">
              <span className="font-extrabold text-white text-sm tracking-tight font-[Plus_Jakarta_Sans]">
                UDM
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-blue-300 transition-colors font-[Plus_Jakarta_Sans]">
                UDMIDEAS
              </span>
              <span className="text-[10px] text-[#94A3B8] font-semibold tracking-wider uppercase -mt-0.5">
                Custom Web &amp; Marketing
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (with target="_blank" for separate web pages) */}
          <nav
            className="hidden xl:flex items-center gap-1 text-sm font-medium text-[#94A3B8]"
            aria-label="Primary Navigation"
          >
            <a
              href="/"
              className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                currentPath === '/' ? 'text-white bg-white/10 font-semibold' : 'hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </a>

            <a
              href="/about-us/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                currentPath === '/about-us/' ? 'text-white bg-white/10 font-semibold' : 'hover:text-white hover:bg-white/5'
              }`}
            >
              About Us
            </a>

            <a
              href="/team/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                currentPath === '/team/' ? 'text-white bg-white/10 font-semibold' : 'hover:text-white hover:bg-white/5'
              }`}
            >
              Team
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="/services/"
                target="_blank"
                rel="noopener noreferrer"
                aria-expanded={activeDropdown === 'services'}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors whitespace-nowrap"
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 text-[#94A3B8] transition-transform duration-200" />
              </a>

              {activeDropdown === 'services' && (
                <div
                  className="absolute left-0 mt-2 w-84 rounded-xl bg-white border border-[#E2E8F0] p-2 shadow-xl z-50"
                  role="menu"
                >
                  <div className="px-3 py-2 border-b border-[#E2E8F0] mb-1 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#475569] uppercase tracking-[0.08em]">
                      Custom Coding &amp; Growth
                    </span>
                    <a
                      href="/services/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#1D4ED8] hover:text-[#1E40AF] font-semibold inline-flex items-center gap-0.5 group/all"
                    >
                      <span>View All</span>
                      <span className="group-hover/all:translate-x-0.5 transition-transform">→</span>
                    </a>
                  </div>
                  {servicesList.map((svc) => {
                    const IconComponent = svc.icon;
                    return (
                      <a
                        key={svc.path}
                        href={svc.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F8FAFC] transition-colors flex items-start gap-2.5 group"
                        role="menuitem"
                      >
                        <IconComponent className="w-4 h-4 text-[#1D4ED8] mt-0.5 shrink-0" />
                        <div>
                          <div className="text-xs font-semibold text-[#0F172A] group-hover:text-[#1D4ED8] flex items-center gap-1 transition-colors">
                            <span>{svc.name}</span>
                            <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#475569]" />
                          </div>
                          <div className="text-[11px] text-[#475569] line-clamp-1">
                            {svc.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Blog Link */}
            <a
              href="/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                currentPath === '/blog/'
                  ? 'text-white bg-white/10 font-semibold'
                  : 'hover:text-white hover:bg-white/5'
              }`}
            >
              Blog
            </a>

            {/* Contact Us */}
            <a
              href="/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                currentPath === '/contact-us/' ? 'text-white bg-white/10 font-semibold' : 'hover:text-white hover:bg-white/5'
              }`}
            >
              Contact Us
            </a>

            {/* Israel */}
            <a
              href="/israel/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1 text-xs whitespace-nowrap"
              title="Israel Bilingual Tech & eCommerce Strategy"
            >
              <span>🇮🇱</span>
              <span>Israel</span>
            </a>

            {/* USA Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('usa')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="/usa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-expanded={activeDropdown === 'usa'}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors text-xs whitespace-nowrap"
              >
                <span>🇺🇸</span>
                <span>USA</span>
                <ChevronDown className="w-3 h-3 text-[#94A3B8]" />
              </a>

              {activeDropdown === 'usa' && (
                <div
                  className="absolute left-0 mt-2 w-72 rounded-xl bg-white border border-[#E2E8F0] p-3 shadow-xl z-50"
                  role="menu"
                >
                  <div className="flex flex-col gap-1.5 pb-2.5 border-b border-[#E2E8F0] mb-2">
                    <span className="text-[11px] font-semibold text-[#0F172A] uppercase tracking-[0.08em]">
                      Top 20 USA States &amp; NY Hubs
                    </span>
                    <div className="flex items-center gap-1.5 flex-wrap text-[10px]">
                      <a href="/new-york/" target="_blank" rel="noopener noreferrer" className="text-[#1D4ED8] font-semibold hover:underline">NYC</a>
                      <span className="text-slate-300">·</span>
                      <a href="/manhattan/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Manhattan</a>
                      <span className="text-slate-300">·</span>
                      <a href="/empire-state/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Empire State</a>
                      <span className="text-slate-300">·</span>
                      <a href="/central-park/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Central Park</a>
                      <span className="text-slate-300">·</span>
                      <a href="/brooklyn/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Brooklyn</a>
                      <span className="text-slate-300">·</span>
                      <a href="/bronx/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Bronx</a>
                      <span className="text-slate-300">·</span>
                      <a href="/albany/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Albany</a>
                      <span className="text-slate-300">·</span>
                      <a href="/buffalo/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Buffalo</a>
                      <span className="text-slate-300">·</span>
                      <a href="/kingston/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Kingston</a>
                      <span className="text-slate-300">·</span>
                      <a href="/mount-vernon/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Mount Vernon</a>
                      <span className="text-slate-300">·</span>
                      <a href="/new-rochelle/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">New Rochelle</a>
                      <span className="text-slate-300">·</span>
                      <a href="/queens/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Queens</a>
                      <span className="text-slate-300">·</span>
                      <a href="/rochester/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Rochester</a>
                      <span className="text-slate-300">·</span>
                      <a href="/schenectady/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Schenectady</a>
                      <span className="text-slate-300">·</span>
                      <a href="/staten-island/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Staten Island</a>
                      <span className="text-slate-300">·</span>
                      <a href="/statue-of-liberty-area/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Statue of Liberty</a>
                      <span className="text-slate-300">·</span>
                      <a href="/syracuse/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Syracuse</a>
                      <span className="text-slate-300">·</span>
                      <a href="/times-square/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Times Square</a>
                      <span className="text-slate-300">·</span>
                      <a href="/hells-kitchen/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Hell's Kitchen</a>
                      <span className="text-slate-300">·</span>
                      <a href="/troy/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Troy</a>
                      <span className="text-slate-300">·</span>
                      <a href="/utica/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Utica</a>
                      <span className="text-slate-300">·</span>
                      <a href="/watertown/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Watertown</a>
                      <span className="text-slate-300">·</span>
                      <a href="/yonkers/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#1D4ED8] hover:underline">Yonkers</a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-1 max-h-64 overflow-y-auto pr-1">
                    {USA_STATES.map((st) => {
                      const stateSlug = formatSlug(st);
                      return (
                        <a
                          key={st}
                          href={stateSlug}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-left px-2 py-1.5 text-xs rounded-lg transition-colors truncate flex items-center justify-between ${
                            st === 'New York'
                              ? 'text-[#1D4ED8] font-semibold bg-blue-50'
                              : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
                          }`}
                        >
                          <span className="truncate">{st}</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-40 ml-1 shrink-0" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* LATAM Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('latam')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="/latam/"
                target="_blank"
                rel="noopener noreferrer"
                aria-expanded={activeDropdown === 'latam'}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors text-xs whitespace-nowrap"
              >
                <span>🌎</span>
                <span>LATAM</span>
                <ChevronDown className="w-3 h-3 text-[#94A3B8]" />
              </a>

              {activeDropdown === 'latam' && (
                <div
                  className="absolute left-0 mt-2 w-64 rounded-xl bg-white border border-[#E2E8F0] p-3 shadow-xl z-50"
                  role="menu"
                >
                  <div className="pb-2 border-b border-[#E2E8F0] mb-2 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#0F172A] uppercase tracking-[0.08em]">
                      Latin American Markets
                    </span>
                    <a href="/latam/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-[#1D4ED8] font-semibold hover:underline">
                      Overview
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-1 max-h-64 overflow-y-auto">
                    {LATAM_COUNTRIES.map((ct) => (
                      <a
                        key={ct}
                        href={formatSlug(ct)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-left px-2 py-1.5 text-xs rounded-lg hover:bg-[#F8FAFC] text-[#475569] hover:text-[#0F172A] transition-colors truncate flex items-center justify-between"
                      >
                        <span className="truncate">{ct}</span>
                        <ExternalLink className="w-2 h-2 opacity-40 ml-1 shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* EU Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('eu')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="/eu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-expanded={activeDropdown === 'eu'}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors text-xs whitespace-nowrap"
              >
                <span>🇪🇺</span>
                <span>EU</span>
                <ChevronDown className="w-3 h-3 text-[#94A3B8]" />
              </a>

              {activeDropdown === 'eu' && (
                <div
                  className="absolute left-0 mt-2 w-56 rounded-xl bg-white border border-[#E2E8F0] p-3 shadow-xl z-50"
                  role="menu"
                >
                  <div className="pb-2 border-b border-[#E2E8F0] mb-2 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#0F172A] uppercase tracking-[0.08em]">
                      European Union &amp; DACH
                    </span>
                    <a href="/eu/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-[#1D4ED8] font-semibold hover:underline">
                      Overview
                    </a>
                  </div>
                  <div className="space-y-1">
                    {EU_COUNTRIES.map((ct) => (
                      <a
                        key={ct}
                        href={formatSlug(ct)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-left px-2.5 py-1.5 text-xs rounded-lg hover:bg-[#F8FAFC] text-[#475569] hover:text-[#0F172A] transition-colors flex items-center justify-between"
                      >
                        <span className="font-medium">{ct}</span>
                        <span className="text-[10px] text-[#94A3B8] font-mono">Multilingual</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Arabic Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('arabic')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="/arab-world/"
                target="_blank"
                rel="noopener noreferrer"
                aria-expanded={activeDropdown === 'arabic'}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors text-xs whitespace-nowrap"
              >
                <span>🌍</span>
                <span>Arabic</span>
                <ChevronDown className="w-3 h-3 text-[#94A3B8]" />
              </a>

              {activeDropdown === 'arabic' && (
                <div
                  className="absolute right-0 mt-2 w-64 rounded-xl bg-white border border-[#E2E8F0] p-3 shadow-xl z-50"
                  role="menu"
                >
                  <div className="pb-2 border-b border-[#E2E8F0] mb-2 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#0F172A] uppercase tracking-[0.08em]">
                      Arab World &amp; GCC
                    </span>
                    <span className="text-[10px] text-[#F59E0B] font-semibold font-mono">RTL Ready</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 max-h-64 overflow-y-auto">
                    {ARABIC_COUNTRIES.map((ct) => (
                      <a
                        key={ct}
                        href={formatSlug(ct)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-left px-2 py-1.5 text-xs rounded-lg hover:bg-[#F8FAFC] text-[#475569] hover:text-[#0F172A] transition-colors truncate flex items-center justify-between"
                      >
                        <span className="truncate">{ct}</span>
                        <ExternalLink className="w-2 h-2 opacity-40 ml-1 shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Zone */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20UDMIDEAS,%20I%20am%20interested%20in%20multilingual%20website%20design%20and%20digital%20marketing%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white/90 bg-white/10 border border-white/15 rounded-lg hover:bg-white/15 hover:text-white transition-all duration-200"
              title="Chat with Arun & UDMIDEAS team on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <a
              href="/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-all duration-200 hover:shadow-md whitespace-nowrap"
            >
              Get Free Consultation
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#94A3B8] hover:text-white hover:bg-white/10 rounded-lg focus-visible:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0F172A] border-b border-slate-800 max-h-[85vh] overflow-y-auto px-4 py-4 space-y-3 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800 text-sm">
            <a href="/" className="text-left px-3 py-2 rounded-lg bg-white/5 text-white font-medium">Home</a>
            <a href="/about-us/" target="_blank" rel="noopener noreferrer" className="text-left px-3 py-2 rounded-lg bg-white/5 text-white font-medium">About Us</a>
            <a href="/team/" target="_blank" rel="noopener noreferrer" className="text-left px-3 py-2 rounded-lg bg-white/5 text-white font-medium">Our Team</a>
            <a href="/blog/" target="_blank" rel="noopener noreferrer" className="text-left px-3 py-2 rounded-lg bg-[#1D4ED8]/20 text-blue-300 font-semibold">Blog (12+ Articles)</a>
            <a href="/contact-us/" target="_blank" rel="noopener noreferrer" className="text-left px-3 py-2 rounded-lg bg-white/5 text-white font-medium">Contact Us</a>
            <a href="/israel/" target="_blank" rel="noopener noreferrer" className="text-left px-3 py-2 rounded-lg bg-white/5 text-white font-medium flex items-center gap-1.5"><span>🇮🇱</span> Israel</a>
          </div>

          {/* Accordion: Services */}
          <div>
            <button
              onClick={() => setMobileExpandedSection(mobileExpandedSection === 'services' ? null : 'services')}
              className="w-full flex items-center justify-between text-sm font-semibold text-white py-2 px-1"
            >
              <span>Services (Separate Web Pages)</span>
              <ChevronDown className={`w-4 h-4 text-[#94A3B8] transition-transform ${mobileExpandedSection === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpandedSection === 'services' && (
              <div className="pl-2 space-y-1 mt-1 border-l-2 border-[#1D4ED8]">
                {servicesList.map((svc) => (
                  <a
                    key={svc.path}
                    href={svc.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-left py-1.5 px-2 text-xs text-[#94A3B8] hover:text-white flex items-center justify-between"
                  >
                    <span>{svc.name}</span>
                    <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Accordion: USA States */}
          <div>
            <button
              onClick={() => setMobileExpandedSection(mobileExpandedSection === 'usa' ? null : 'usa')}
              className="w-full flex items-center justify-between text-sm font-semibold text-white py-2 px-1"
            >
              <span>🇺🇸 USA (Top 20 States Pages)</span>
              <ChevronDown className={`w-4 h-4 text-[#94A3B8] transition-transform ${mobileExpandedSection === 'usa' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpandedSection === 'usa' && (
              <div className="pl-2 mt-1 border-l-2 border-[#1D4ED8] space-y-2">
                <div className="flex items-center flex-wrap gap-2 pt-1 pb-1 text-xs">
                  <a href="/new-york/" target="_blank" rel="noopener noreferrer" className="text-blue-300 font-semibold hover:underline">NYC 10001</a>
                  <span className="text-slate-600">·</span>
                  <a href="/manhattan/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Manhattan</a>
                  <span className="text-slate-600">·</span>
                  <a href="/empire-state/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Empire State</a>
                  <span className="text-slate-600">·</span>
                  <a href="/central-park/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Central Park</a>
                  <span className="text-slate-600">·</span>
                  <a href="/brooklyn/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Brooklyn</a>
                  <span className="text-slate-600">·</span>
                  <a href="/bronx/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">The Bronx</a>
                  <span className="text-slate-600">·</span>
                  <a href="/albany/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Albany NY</a>
                  <span className="text-slate-600">·</span>
                  <a href="/buffalo/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Buffalo NY</a>
                  <span className="text-slate-600">·</span>
                  <a href="/kingston/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Kingston NY</a>
                  <span className="text-slate-600">·</span>
                  <a href="/mount-vernon/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Mount Vernon NY</a>
                  <span className="text-slate-600">·</span>
                  <a href="/new-rochelle/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">New Rochelle NY</a>
                  <span className="text-slate-600">·</span>
                  <a href="/queens/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Queens NYC</a>
                  <span className="text-slate-600">·</span>
                  <a href="/rochester/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Rochester NY</a>
                  <span className="text-slate-600">·</span>
                  <a href="/schenectady/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Schenectady NY</a>
                  <span className="text-slate-600">·</span>
                  <a href="/staten-island/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Staten Island NYC</a>
                  <span className="text-slate-600">·</span>
                  <a href="/statue-of-liberty-area/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Statue of Liberty</a>
                  <span className="text-slate-600">·</span>
                  <a href="/syracuse/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Syracuse NY</a>
                  <span className="text-slate-600">·</span>
                  <a href="/times-square/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Times Square NYC</a>
                  <span className="text-slate-600">·</span>
                  <a href="/hells-kitchen/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Hell's Kitchen NYC</a>
                  <span className="text-slate-600">·</span>
                  <a href="/troy/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Troy NY</a>
                  <span className="text-slate-600">·</span>
                  <a href="/utica/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Utica NY</a>
                  <span className="text-slate-600">·</span>
                  <a href="/watertown/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Watertown NY</a>
                  <span className="text-slate-600">·</span>
                  <a href="/yonkers/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white hover:underline">Yonkers NY</a>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {USA_STATES.map((st) => (
                    <a
                      key={st}
                      href={formatSlug(st)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-left py-1 px-1.5 text-xs text-[#94A3B8] hover:text-white truncate"
                    >
                      {st}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Accordion: LATAM Countries */}
          <div>
            <button
              onClick={() => setMobileExpandedSection(mobileExpandedSection === 'latam' ? null : 'latam')}
              className="w-full flex items-center justify-between text-sm font-semibold text-white py-2 px-1"
            >
              <span>🌎 LATAM Countries Pages</span>
              <ChevronDown className={`w-4 h-4 text-[#94A3B8] transition-transform ${mobileExpandedSection === 'latam' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpandedSection === 'latam' && (
              <div className="grid grid-cols-2 gap-1 pl-2 mt-1 border-l-2 border-[#1D4ED8]">
                {LATAM_COUNTRIES.map((ct) => (
                  <a
                    key={ct}
                    href={formatSlug(ct)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-left py-1 px-1.5 text-xs text-[#94A3B8] hover:text-white truncate"
                  >
                    {ct}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Accordion: EU */}
          <div>
            <button
              onClick={() => setMobileExpandedSection(mobileExpandedSection === 'eu' ? null : 'eu')}
              className="w-full flex items-center justify-between text-sm font-semibold text-white py-2 px-1"
            >
              <span>🇪🇺 EU (France, Germany, Spain, Swiss, Poland)</span>
              <ChevronDown className={`w-4 h-4 text-[#94A3B8] transition-transform ${mobileExpandedSection === 'eu' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpandedSection === 'eu' && (
              <div className="grid grid-cols-2 gap-1 pl-2 mt-1 border-l-2 border-[#1D4ED8]">
                {EU_COUNTRIES.map((ct) => (
                  <a
                    key={ct}
                    href={formatSlug(ct)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-left py-1 px-1.5 text-xs text-[#94A3B8] hover:text-white"
                  >
                    {ct}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Accordion: Arabic */}
          <div>
            <button
              onClick={() => setMobileExpandedSection(mobileExpandedSection === 'arabic' ? null : 'arabic')}
              className="w-full flex items-center justify-between text-sm font-semibold text-white py-2 px-1"
            >
              <span>🌍 Arab World (GCC &amp; MENA)</span>
              <ChevronDown className={`w-4 h-4 text-[#94A3B8] transition-transform ${mobileExpandedSection === 'arabic' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpandedSection === 'arabic' && (
              <div className="grid grid-cols-2 gap-1 pl-2 mt-1 border-l-2 border-[#1D4ED8]">
                {ARABIC_COUNTRIES.map((ct) => (
                  <a
                    key={ct}
                    href={formatSlug(ct)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-left py-1 px-1.5 text-xs text-[#94A3B8] hover:text-white truncate"
                  >
                    {ct}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* WhatsApp Direct Action in mobile */}
          <div className="pt-2">
            <a
              href="https://wa.me/919521186150?text=Hello%20UDMIDEAS,%20I%20am%20interested%20in%20multilingual%20website%20design%20and%20digital%20marketing%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (+91-9521186150)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
