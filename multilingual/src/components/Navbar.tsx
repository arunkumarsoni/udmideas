import React, { useState, useEffect, useRef } from 'react';
import {
  Globe,
  ChevronDown,
  Menu,
  X,
  Phone,
  MessageCircle,
  ExternalLink,
  MapPin,
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
  onNavigate: (sectionId: string) => void;
  onOpenBlogPage: () => void;
  onSelectRegion: (name: string, category: 'USA' | 'LATAM' | 'EU' | 'Arabic' | 'Israel') => void;
  onOpenContact: () => void;
  onOpenTeam: () => void;
  activeView: 'home' | 'blog';
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  onOpenBlogPage,
  onSelectRegion,
  onOpenContact,
  onOpenTeam,
  activeView
}) => {
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
    { name: 'Website Design & Development', id: 'web-development', icon: Code, desc: 'React, WordPress, Laravel, Magento custom coding' },
    { name: 'Digital Marketing Services', id: 'seo-services', icon: TrendingUp, desc: 'Full-funnel cross-border growth strategies' },
    { name: 'SEO (International Multilingual)', id: 'seo-services', icon: Search, desc: 'Hreflang, multi-country indexation, technical speed' },
    { name: 'AEO (Answer Engine Optimization)', id: 'seo-services', icon: Cpu, desc: 'Voice search & Google Position Zero capture' },
    { name: 'GEO (Generative Engine Optimization)', id: 'seo-services', icon: Globe, desc: 'Citations in ChatGPT, Perplexity & Gemini Search' },
    { name: 'Social Media Marketing (SMM)', id: 'smm-services', icon: Share2, desc: 'Multilingual content, video creation & community' },
    { name: 'Pay Per Click (PPC)', id: 'ppc-services', icon: TrendingUp, desc: 'Google Search & Shopping, Meta Ads, LinkedIn ABM' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-2.5'
          : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-900 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo Wordmark */}
          <button
            onClick={() => {
              if (activeView === 'blog') onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md shrink-0 group"
            aria-label="UDMIDEAS Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-500 p-[1.5px] shadow-sm shadow-blue-500/20">
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
                Custom Web & Marketing
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden xl:flex items-center gap-1.5 text-sm font-medium text-slate-300"
            aria-label="Primary Navigation"
          >
            <button
              onClick={() => {
                if (activeView === 'blog') onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-2.5 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition-colors whitespace-nowrap"
            >
              Home
            </button>

            <button
              onClick={() => onNavigate('about-us')}
              className="px-2.5 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition-colors whitespace-nowrap"
            >
              About Us
            </button>

            <button
              onClick={onOpenTeam}
              className="px-2.5 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition-colors whitespace-nowrap"
            >
              Team
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                aria-expanded={activeDropdown === 'services'}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition-colors whitespace-nowrap"
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform duration-200" />
              </button>

              {activeDropdown === 'services' && (
                <div
                  className="absolute left-0 mt-1 w-80 rounded-xl bg-slate-900 border border-slate-800 p-2 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-top-2 duration-150"
                  role="menu"
                >
                  <div className="px-3 py-1.5 border-b border-slate-800/80 mb-1">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Custom Coding & Growth
                    </span>
                  </div>
                  {servicesList.map((svc) => {
                    const IconComponent = svc.icon;
                    return (
                      <button
                        key={svc.name}
                        onClick={() => {
                          onNavigate(svc.id);
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-800/80 transition-colors flex items-start gap-2.5 group"
                        role="menuitem"
                      >
                        <IconComponent className="w-4 h-4 text-blue-400 mt-0.5 shrink-0 group-hover:text-blue-300" />
                        <div>
                          <div className="text-xs font-semibold text-slate-200 group-hover:text-white">
                            {svc.name}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1">
                            {svc.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Blog Link */}
            <button
              onClick={onOpenBlogPage}
              className={`px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                activeView === 'blog'
                  ? 'text-blue-400 bg-blue-950/40 font-semibold'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Blog
            </button>

            {/* Contact Us */}
            <button
              onClick={onOpenContact}
              className="px-2.5 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition-colors whitespace-nowrap"
            >
              Contact Us
            </button>

            {/* Israel (Direct Geo Link) */}
            <button
              onClick={() => onSelectRegion('Israel', 'Israel')}
              className="px-2 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-1 text-xs whitespace-nowrap"
              title="Israel Multilingual Web & Tech Marketing"
            >
              <span>🇮🇱</span>
              <span>Israel</span>
            </button>

            {/* USA Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('usa')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                aria-expanded={activeDropdown === 'usa'}
                className="flex items-center gap-1 px-2 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition-colors text-xs whitespace-nowrap"
              >
                <span>🇺🇸</span>
                <span>USA</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {activeDropdown === 'usa' && (
                <div
                  className="absolute left-0 mt-1 w-72 rounded-xl bg-slate-900 border border-slate-800 p-3 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-top-2 duration-150"
                  role="menu"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2">
                    <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                      Top 20 USA States
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">HQ NYC 10001</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 max-h-64 overflow-y-auto pr-1">
                    {USA_STATES.map((st) => (
                      <button
                        key={st}
                        onClick={() => {
                          onSelectRegion(st, 'USA');
                          setActiveDropdown(null);
                        }}
                        className={`text-left px-2 py-1.5 text-xs rounded hover:bg-slate-800 transition-colors truncate ${
                          st === 'New York' ? 'text-blue-400 font-semibold bg-blue-950/30' : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
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
              <button
                aria-expanded={activeDropdown === 'latam'}
                className="flex items-center gap-1 px-2 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition-colors text-xs whitespace-nowrap"
              >
                <span>🌎</span>
                <span>LATAM</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {activeDropdown === 'latam' && (
                <div
                  className="absolute left-0 mt-1 w-64 rounded-xl bg-slate-900 border border-slate-800 p-3 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-top-2 duration-150"
                  role="menu"
                >
                  <div className="pb-2 border-b border-slate-800 mb-2">
                    <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                      Latin American Markets
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 max-h-64 overflow-y-auto">
                    {LATAM_COUNTRIES.map((ct) => (
                      <button
                        key={ct}
                        onClick={() => {
                          onSelectRegion(ct, 'LATAM');
                          setActiveDropdown(null);
                        }}
                        className="text-left px-2 py-1.5 text-xs rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors truncate"
                      >
                        {ct}
                      </button>
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
              <button
                aria-expanded={activeDropdown === 'eu'}
                className="flex items-center gap-1 px-2 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition-colors text-xs whitespace-nowrap"
              >
                <span>🇪🇺</span>
                <span>EU</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {activeDropdown === 'eu' && (
                <div
                  className="absolute left-0 mt-1 w-56 rounded-xl bg-slate-900 border border-slate-800 p-3 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-top-2 duration-150"
                  role="menu"
                >
                  <div className="pb-2 border-b border-slate-800 mb-2">
                    <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                      European Union & DACH
                    </span>
                  </div>
                  <div className="space-y-1">
                    {EU_COUNTRIES.map((ct) => (
                      <button
                        key={ct}
                        onClick={() => {
                          onSelectRegion(ct, 'EU');
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left px-2.5 py-1.5 text-xs rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center justify-between"
                      >
                        <span>{ct}</span>
                        <span className="text-[10px] text-slate-500 font-mono">Multilingual</span>
                      </button>
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
              <button
                aria-expanded={activeDropdown === 'arabic'}
                className="flex items-center gap-1 px-2 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition-colors text-xs whitespace-nowrap"
              >
                <span>🌍</span>
                <span>Arabic</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {activeDropdown === 'arabic' && (
                <div
                  className="absolute right-0 mt-1 w-64 rounded-xl bg-slate-900 border border-slate-800 p-3 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-top-2 duration-150"
                  role="menu"
                >
                  <div className="pb-2 border-b border-slate-800 mb-2 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                      Middle East & Arabic World
                    </span>
                    <span className="text-[10px] text-amber-400 font-mono">RTL Ready</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 max-h-64 overflow-y-auto">
                    {ARABIC_COUNTRIES.map((ct) => (
                      <button
                        key={ct}
                        onClick={() => {
                          onSelectRegion(ct, 'Arabic');
                          setActiveDropdown(null);
                        }}
                        className="text-left px-2 py-1.5 text-xs rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors truncate"
                      >
                        {ct}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Zone */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* WhatsApp Direct Header Link */}
            <a
              href="https://wa.me/919521186150?text=Hello%20UDMIDEAS,%20I%20am%20interested%20in%20multilingual%20website%20design%20and%20digital%20marketing%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 rounded-lg hover:bg-emerald-900/50 hover:text-emerald-300 transition-colors shadow-sm"
              title="Chat with Arun & UDMIDEAS team on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenContact}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-sm shadow-blue-600/30 whitespace-nowrap"
            >
              Get Free Consultation
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg focus-visible:outline-none"
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
        <div className="xl:hidden bg-slate-950/98 border-b border-slate-800 max-h-[85vh] overflow-y-auto px-4 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800 text-sm">
            <button
              onClick={() => {
                if (activeView === 'blog') onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg bg-slate-900/70 text-slate-200"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate('about-us');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg bg-slate-900/70 text-slate-200"
            >
              About Us
            </button>
            <button
              onClick={() => {
                onOpenTeam();
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg bg-slate-900/70 text-slate-200"
            >
              Our Team
            </button>
            <button
              onClick={() => {
                onOpenBlogPage();
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg bg-slate-900/70 text-blue-400 font-semibold"
            >
              Blog (12+ Articles)
            </button>
            <button
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg bg-slate-900/70 text-slate-200"
            >
              Contact Us
            </button>
            <button
              onClick={() => {
                onSelectRegion('Israel', 'Israel');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg bg-slate-900/70 text-slate-200 flex items-center gap-1.5"
            >
              <span>🇮🇱</span> Israel
            </button>
          </div>

          {/* Accordion: Services */}
          <div>
            <button
              onClick={() => setMobileExpandedSection(mobileExpandedSection === 'services' ? null : 'services')}
              className="w-full flex items-center justify-between text-sm font-semibold text-slate-300 py-2 px-1"
            >
              <span>Services (Custom Code & Marketing)</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpandedSection === 'services' && (
              <div className="pl-2 space-y-1 mt-1 border-l-2 border-slate-800">
                {servicesList.map((svc) => (
                  <button
                    key={svc.name}
                    onClick={() => {
                      onNavigate(svc.id);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left py-1.5 px-2 text-xs text-slate-300 hover:text-white block"
                  >
                    {svc.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Accordion: USA States */}
          <div>
            <button
              onClick={() => setMobileExpandedSection(mobileExpandedSection === 'usa' ? null : 'usa')}
              className="w-full flex items-center justify-between text-sm font-semibold text-slate-300 py-2 px-1"
            >
              <span>🇺🇸 USA (Top 20 States)</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'usa' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpandedSection === 'usa' && (
              <div className="grid grid-cols-2 gap-1 pl-2 mt-1 border-l-2 border-slate-800">
                {USA_STATES.map((st) => (
                  <button
                    key={st}
                    onClick={() => {
                      onSelectRegion(st, 'USA');
                      setMobileMenuOpen(false);
                    }}
                    className="text-left py-1 px-1.5 text-xs text-slate-400 hover:text-white truncate"
                  >
                    {st}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Accordion: LATAM Countries */}
          <div>
            <button
              onClick={() => setMobileExpandedSection(mobileExpandedSection === 'latam' ? null : 'latam')}
              className="w-full flex items-center justify-between text-sm font-semibold text-slate-300 py-2 px-1"
            >
              <span>🌎 LATAM Countries</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'latam' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpandedSection === 'latam' && (
              <div className="grid grid-cols-2 gap-1 pl-2 mt-1 border-l-2 border-slate-800">
                {LATAM_COUNTRIES.map((ct) => (
                  <button
                    key={ct}
                    onClick={() => {
                      onSelectRegion(ct, 'LATAM');
                      setMobileMenuOpen(false);
                    }}
                    className="text-left py-1 px-1.5 text-xs text-slate-400 hover:text-white truncate"
                  >
                    {ct}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Accordion: EU */}
          <div>
            <button
              onClick={() => setMobileExpandedSection(mobileExpandedSection === 'eu' ? null : 'eu')}
              className="w-full flex items-center justify-between text-sm font-semibold text-slate-300 py-2 px-1"
            >
              <span>🇪🇺 EU (France, Germany, Spain, Swiss, Poland)</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'eu' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpandedSection === 'eu' && (
              <div className="grid grid-cols-2 gap-1 pl-2 mt-1 border-l-2 border-slate-800">
                {EU_COUNTRIES.map((ct) => (
                  <button
                    key={ct}
                    onClick={() => {
                      onSelectRegion(ct, 'EU');
                      setMobileMenuOpen(false);
                    }}
                    className="text-left py-1 px-1.5 text-xs text-slate-400 hover:text-white"
                  >
                    {ct}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Accordion: Arabic */}
          <div>
            <button
              onClick={() => setMobileExpandedSection(mobileExpandedSection === 'arabic' ? null : 'arabic')}
              className="w-full flex items-center justify-between text-sm font-semibold text-slate-300 py-2 px-1"
            >
              <span>🌍 Arabic World (GCC & MENA)</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'arabic' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpandedSection === 'arabic' && (
              <div className="grid grid-cols-2 gap-1 pl-2 mt-1 border-l-2 border-slate-800">
                {ARABIC_COUNTRIES.map((ct) => (
                  <button
                    key={ct}
                    onClick={() => {
                      onSelectRegion(ct, 'Arabic');
                      setMobileMenuOpen(false);
                    }}
                    className="text-left py-1 px-1.5 text-xs text-slate-400 hover:text-white truncate"
                  >
                    {ct}
                  </button>
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
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 text-white font-medium text-sm"
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
