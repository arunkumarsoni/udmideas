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
import { WebsiteDesignServicesContent } from './WebsiteDesignServicesContent';
import { DigitalMarketingServicesContent } from './DigitalMarketingServicesContent';
import { MultilingualSeoServicesContent } from './MultilingualSeoServicesContent';
import { AeoServicesContent } from './AeoServicesContent';
import { GeoServicesContent } from './GeoServicesContent';
import { SmmServicesContent } from './SmmServicesContent';
import { PpcServicesContent } from './PpcServicesContent';
import { BrazilServicesContent } from './BrazilServicesContent';
import { ColombiaServicesContent } from './ColombiaServicesContent';
import { ChileServicesContent } from './ChileServicesContent';
import { EcuadorServicesContent } from './EcuadorServicesContent';
import { PanamaServicesContent } from './PanamaServicesContent';
import { IsraelServicesContent } from './IsraelServicesContent';
import { MexicoServicesContent } from './MexicoServicesContent';
import { ArgentinaServicesContent } from './ArgentinaServicesContent';
import { PeruServicesContent } from './PeruServicesContent';
import { CostaRicaServicesContent } from './CostaRicaServicesContent';
import { UruguayServicesContent } from './UruguayServicesContent';
import { DominicanRepublicServicesContent } from './DominicanRepublicServicesContent';
import { GuatemalaServicesContent } from './GuatemalaServicesContent';
import { FranceServicesContent } from './FranceServicesContent';
import { GermanyServicesContent } from './GermanyServicesContent';
import { SpainServicesContent } from './SpainServicesContent';
import { SwitzerlandServicesContent } from './SwitzerlandServicesContent';
import { PolandServicesContent } from './PolandServicesContent';
import { UaeServicesContent } from './UaeServicesContent';
import { OmanServicesContent } from './OmanServicesContent';
import { IranServicesContent } from './IranServicesContent';
import { BahrainServicesContent } from './BahrainServicesContent';
import { YemenServicesContent } from './YemenServicesContent';
import { SaudiArabiaServicesContent } from './SaudiArabiaServicesContent';
import { QatarServicesContent } from './QatarServicesContent';
import { MoroccoServicesContent } from './MoroccoServicesContent';
import { EgyptServicesContent } from './EgyptServicesContent';
import { IraqServicesContent } from './IraqServicesContent';
import { AboutUsServicesContent } from './AboutUsServicesContent';
import { NewYorkServicesContent } from './NewYorkServicesContent';
import { CaliforniaServicesContent } from './CaliforniaServicesContent';
import { TexasServicesContent } from './TexasServicesContent';
import { FloridaServicesContent } from './FloridaServicesContent';
import { IllinoisServicesContent } from './IllinoisServicesContent';
import { PennsylvaniaServicesContent } from './PennsylvaniaServicesContent';
import { OhioServicesContent } from './OhioServicesContent';
import { GeorgiaServicesContent } from './GeorgiaServicesContent';
import { NorthCarolinaServicesContent } from './NorthCarolinaServicesContent';
import { MichiganServicesContent } from './MichiganServicesContent';
import { TeamPageContent } from './TeamPageContent';

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
  const isCustomServicePage =
    page.path === '/digital-marketing-services/' ||
    page.path === '/website-design-development/' ||
    page.path === '/multilingual-search-engine-optimization/' ||
    page.path === '/answer-engine-optimization/' ||
    page.path === '/generative-engine-optimization/' ||
    page.path === '/social-media-marketing/' ||
    page.path === '/pay-per-click/' ||
    page.path === '/brazil/' ||
    page.path === '/colombia/' ||
    page.path === '/chile/' ||
    page.path === '/ecuador/' ||
    page.path === '/panama/' ||
    page.path === '/israel/' ||
    page.path === '/mexico/' ||
    page.path === '/argentina/' ||
    page.path === '/peru/' ||
    page.path === '/costa-rica/' ||
    page.path === '/uruguay/' ||
    page.path === '/dominican-republic/' ||
    page.path === '/guatemala/' ||
    page.path === '/france/' ||
    page.path === '/germany/' ||
    page.path === '/spain/' ||
    page.path === '/switzerland/' ||
    page.path === '/poland/' ||
    page.path === '/uae/' ||
    page.path === '/oman/' ||
    page.path === '/iran/' ||
    page.path === '/bahrain/' ||
    page.path === '/yemen/' ||
    page.path === '/saudi-arabia/' ||
    page.path === '/qatar/' ||
    page.path === '/morocco/' ||
    page.path === '/egypt/' ||
    page.path === '/iraq/' ||
    page.path === '/about-us/' ||
    page.path === '/new-york/' ||
    page.path === '/california/' ||
    page.path === '/texas/' ||
    page.path === '/florida/' ||
    page.path === '/illinois/' ||
    page.path === '/pennsylvania/' ||
    page.path === '/ohio/' ||
    page.path === '/georgia/' ||
    page.path === '/north-carolina/' ||
    page.path === '/michigan/' ||
    page.path === '/team/';

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

    // Construct mailto link specifically to info@udmideasusa.com
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

    // Attempt to trigger mailto client to info@udmideasusa.com
    const mailtoUrl = `mailto:info@udmideasusa.com?subject=${subject}&body=${body}`;
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
    { label: 'Manhattan Businesses SEO Consultant', path: '/manhattan/' },
    { label: 'Mount Vernon Remote SEO Consultant', path: '/mount-vernon/' },
    { label: 'New Rochelle Remote SEO Consultant', path: '/new-rochelle/' },
    { label: 'Queens Remote SEO Consultant', path: '/queens/' },
    { label: 'Rochester Remote SEO Consultant', path: '/rochester/' },
    { label: 'Schenectady Remote SEO Consultant', path: '/schenectady/' },
    { label: 'Staten Island Remote SEO Consultant', path: '/staten-island/' },
    { label: 'Statue of Liberty Area Tour SEO', path: '/statue-of-liberty-area/' },
    { label: 'Syracuse Remote SEO Consultant', path: '/syracuse/' },
    { label: 'Times Square Tour & Travel SEO', path: '/times-square/' },
    { label: "Hell's Kitchen Manhattan SEO Agency", path: '/hells-kitchen/' },
    { label: 'Troy Capital Region Ecommerce SEO', path: '/troy/' },
    { label: 'Utica Mohawk Valley Ecommerce SEO', path: '/utica/' },
    { label: 'Watertown North Country Ecommerce SEO', path: '/watertown/' },
    { label: 'Yonkers Remote SEO Expert', path: '/yonkers/' },
    { label: 'Why Arun Is the Best Multilingual SEO Expert', path: '/why-arun-is-the-best-multilingual-seo-expert/' },
    { label: 'How Arun Handle SEO, AEO and GEO', path: '/how-arun-handle-seo-aeo-and-geo/' },
    { label: 'The Architecture of Multilingual Digital Visibility', path: '/the-architecture-of-multilingual-digital-visibility/' },
    { label: 'From Website Creation to Digital Authority', path: '/from-website-creation-to-digital-authority/' },
    { label: 'Cross-Market SEO: Israel & Arab World', path: '/cross-market-seo-israel-and-the-arab-world/' },
    { label: 'USA to LATAM: Spanish SEO', path: '/usa-to-latam-spanish-seo-and-market-expansion/' },
    { label: 'Empire State Tour & B2B SEO', path: '/empire-state/' },
    { label: 'Central Park Tour & Travel SEO', path: '/central-park/' },
    { label: 'Brooklyn Businesses SEO Consultant', path: '/brooklyn/' },
    { label: 'The Bronx SEO Consultant', path: '/bronx/' },
    { label: 'Albany Remote SEO Consultant', path: '/albany/' },
    { label: 'Buffalo Remote SEO Consultant', path: '/buffalo/' },
    { label: 'Kingston Hudson Valley SEO', path: '/kingston/' },
    { label: 'NYC Organic SEO Agency', path: '/organic-seo-agency-in-new-york-usa/' },
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
    <article className="pt-28 pb-24 min-h-screen bg-[#F8FAFC] text-[#475569] text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation with clean internal links */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-between pb-6 mb-8 border-b border-[#E2E8F0] text-xs">
          <div className="flex items-center gap-2 text-[#475569] flex-wrap">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
              className="hover:text-[#0F172A] font-medium transition-colors"
            >
              Home
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-slate-500 capitalize">{page.category.replace('-', ' ')}</span>
            <span aria-hidden="true">/</span>
            <span className="text-[#1D4ED8] font-semibold truncate max-w-[200px] sm:max-w-none">
              {page.path}
            </span>
          </div>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] hover:border-[#1D4ED8]/40 font-semibold shadow-xs transition-all text-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </a>
        </nav>

        {/* Hero Section (omitted on dedicated custom country pages that render their own hero section) */}
        {page.path !== '/ecuador/' && page.path !== '/israel/' && page.path !== '/mexico/' && page.path !== '/argentina/' && page.path !== '/peru/' && page.path !== '/costa-rica/' && page.path !== '/uruguay/' && page.path !== '/dominican-republic/' && page.path !== '/guatemala/' && page.path !== '/france/' && page.path !== '/germany/' && page.path !== '/spain/' && page.path !== '/switzerland/' && page.path !== '/poland/' && page.path !== '/uae/' && page.path !== '/oman/' && page.path !== '/iran/' && page.path !== '/bahrain/' && page.path !== '/yemen/' && page.path !== '/saudi-arabia/' && page.path !== '/qatar/' && page.path !== '/morocco/' && page.path !== '/egypt/' && page.path !== '/iraq/' && page.path !== '/about-us/' && page.path !== '/new-york/' && page.path !== '/california/' && page.path !== '/texas/' && page.path !== '/florida/' && page.path !== '/illinois/' && page.path !== '/pennsylvania/' && page.path !== '/ohio/' && page.path !== '/georgia/' && page.path !== '/north-carolina/' && page.path !== '/michigan/' && (
          <header className="max-w-4xl space-y-4 mb-12">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#475569]">
              <span className="font-semibold text-[#1D4ED8] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/80 uppercase tracking-[0.06em]">
                {page.kicker}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-[#0F172A] font-semibold">USA HQ NYC 10001</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#B45309] font-mono font-semibold">★ 15+ Years Track Record</span>
            </div>

            <h1 className="text-[32px] sm:text-[44px] font-extrabold text-[#0F172A] tracking-[-0.02em] leading-[1.15] text-balance">
              {page.heading}
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-[1.65] max-w-3xl">
              {page.subheading}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#inquiry-form"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>Submit Project Form (Direct Email)</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a
                href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20your%20services%20from%20page:%20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-[#0F172A] bg-white hover:bg-slate-50 border border-[#E2E8F0] hover:border-[#1D4ED8]/40 shadow-xs transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: +91-9521186150</span>
              </a>
            </div>
          </header>
        )}

        {/* Website Design & Development Comprehensive Content */}
        {page.path === '/website-design-development/' && (
          <div className="mb-16">
            <WebsiteDesignServicesContent />
          </div>
        )}

        {/* Digital Marketing Services Comprehensive Content */}
        {page.path === '/digital-marketing-services/' && (
          <div className="mb-16">
            <DigitalMarketingServicesContent />
          </div>
        )}

        {/* Multilingual SEO Services Comprehensive Content */}
        {page.path === '/multilingual-search-engine-optimization/' && (
          <div className="mb-16">
            <MultilingualSeoServicesContent />
          </div>
        )}

        {/* Answer Engine Optimization (AEO) Comprehensive Content */}
        {page.path === '/answer-engine-optimization/' && (
          <div className="mb-16">
            <AeoServicesContent />
          </div>
        )}

        {/* Generative Engine Optimization (GEO) Comprehensive Content */}
        {page.path === '/generative-engine-optimization/' && (
          <div className="mb-16">
            <GeoServicesContent />
          </div>
        )}

        {/* Social Media Marketing (SMM) Comprehensive Content */}
        {page.path === '/social-media-marketing/' && (
          <div className="mb-16">
            <SmmServicesContent />
          </div>
        )}

        {/* Pay Per Click (PPC) Comprehensive Content */}
        {page.path === '/pay-per-click/' && (
          <div className="mb-16">
            <PpcServicesContent />
          </div>
        )}

        {/* Brazil Web Design, Development, SEO & Digital Marketing Content */}
        {page.path === '/brazil/' && (
          <div className="mb-16">
            <BrazilServicesContent />
          </div>
        )}

        {/* Colombia Web Design, Development, SEO & Digital Marketing Content */}
        {page.path === '/colombia/' && (
          <div className="mb-16">
            <ColombiaServicesContent />
          </div>
        )}

        {/* Chile Web Design, Development, SEO & Digital Marketing Content */}
        {page.path === '/chile/' && (
          <div className="mb-16">
            <ChileServicesContent />
          </div>
        )}

        {/* Ecuador Web Design, Development, SEO & Digital Marketing Content */}
        {page.path === '/ecuador/' && (
          <div className="mb-16">
            <EcuadorServicesContent />
          </div>
        )}

        {/* Panama Web Design, Development, SEO & Digital Marketing Content */}
        {page.path === '/panama/' && (
          <div className="mb-16">
            <PanamaServicesContent />
          </div>
        )}

        {/* Israel Website Design, Development & Hebrew SEO Content */}
        {page.path === '/israel/' && (
          <div className="mb-16">
            <IsraelServicesContent />
          </div>
        )}

        {/* Mexico Website Design, Development & Spanish SEO Content */}
        {page.path === '/mexico/' && (
          <div className="mb-16">
            <MexicoServicesContent />
          </div>
        )}

        {/* Argentina Website Design, Development & Spanish SEO Content */}
        {page.path === '/argentina/' && (
          <div className="mb-16">
            <ArgentinaServicesContent />
          </div>
        )}

        {/* Peru Website Design, Development & Spanish SEO Content */}
        {page.path === '/peru/' && (
          <div className="mb-16">
            <PeruServicesContent />
          </div>
        )}

        {/* Costa Rica Website Design, Development & Spanish SEO Content */}
        {page.path === '/costa-rica/' && (
          <div className="mb-16">
            <CostaRicaServicesContent />
          </div>
        )}

        {/* Uruguay Website Design, Development & Spanish SEO Content */}
        {page.path === '/uruguay/' && (
          <div className="mb-16">
            <UruguayServicesContent />
          </div>
        )}

        {/* Dominican Republic Website Design, Development & Spanish SEO Content */}
        {page.path === '/dominican-republic/' && (
          <div className="mb-16">
            <DominicanRepublicServicesContent />
          </div>
        )}

        {/* Guatemala Website Design, Development & Spanish SEO Content */}
        {page.path === '/guatemala/' && (
          <div className="mb-16">
            <GuatemalaServicesContent />
          </div>
        )}

        {/* France Website Design, Development & French SEO Content */}
        {page.path === '/france/' && (
          <div className="mb-16">
            <FranceServicesContent />
          </div>
        )}

        {/* Germany Website Design, Development & German SEO Content */}
        {page.path === '/germany/' && (
          <div className="mb-16">
            <GermanyServicesContent />
          </div>
        )}

        {/* Spain Website Design, Development & Spanish SEO Content */}
        {page.path === '/spain/' && (
          <div className="mb-16">
            <SpainServicesContent />
          </div>
        )}

        {/* Switzerland Website Design, Development & Multilingual SEO Content */}
        {page.path === '/switzerland/' && (
          <div className="mb-16">
            <SwitzerlandServicesContent />
          </div>
        )}

        {/* Poland Website Design, Development & Polish SEO Content */}
        {page.path === '/poland/' && (
          <div className="mb-16">
            <PolandServicesContent />
          </div>
        )}

        {/* UAE Website Design, Development & Arabic SEO Content */}
        {page.path === '/uae/' && (
          <div className="mb-16">
            <UaeServicesContent />
          </div>
        )}

        {/* Oman Website Design, Development & Arabic SEO Content */}
        {page.path === '/oman/' && (
          <div className="mb-16">
            <OmanServicesContent />
          </div>
        )}

        {/* Iran Website Design, Development & Persian SEO Content */}
        {page.path === '/iran/' && (
          <div className="mb-16">
            <IranServicesContent />
          </div>
        )}

        {/* Bahrain Website Design, Development & Arabic SEO Content */}
        {page.path === '/bahrain/' && (
          <div className="mb-16">
            <BahrainServicesContent />
          </div>
        )}

        {/* Yemen Website Design, Development & Arabic SEO Content */}
        {page.path === '/yemen/' && (
          <div className="mb-16">
            <YemenServicesContent />
          </div>
        )}

        {/* Saudi Arabia Website Design, Development & Arabic SEO Content */}
        {page.path === '/saudi-arabia/' && (
          <div className="mb-16">
            <SaudiArabiaServicesContent />
          </div>
        )}

        {/* Qatar Website Design, Development & Arabic SEO Content */}
        {page.path === '/qatar/' && (
          <div className="mb-16">
            <QatarServicesContent />
          </div>
        )}

        {/* Morocco Website Design, Development & Arabic SEO Content */}
        {page.path === '/morocco/' && (
          <div className="mb-16">
            <MoroccoServicesContent />
          </div>
        )}

        {/* Egypt Website Design, Development & Arabic SEO Content */}
        {page.path === '/egypt/' && (
          <div className="mb-16">
            <EgyptServicesContent />
          </div>
        )}

        {/* Iraq Website Design, Development & Arabic SEO Content */}
        {page.path === '/iraq/' && (
          <div className="mb-16">
            <IraqServicesContent />
          </div>
        )}

        {/* About Us Page Content */}
        {page.path === '/about-us/' && (
          <div className="mb-16">
            <AboutUsServicesContent />
          </div>
        )}

        {/* New York Page Content */}
        {page.path === '/new-york/' && (
          <div className="mb-16">
            <NewYorkServicesContent />
          </div>
        )}

        {/* California Page Content */}
        {page.path === '/california/' && (
          <div className="mb-16">
            <CaliforniaServicesContent />
          </div>
        )}

        {/* Texas Page Content */}
        {page.path === '/texas/' && (
          <div className="mb-16">
            <TexasServicesContent />
          </div>
        )}

        {/* Florida Page Content */}
        {page.path === '/florida/' && (
          <div className="mb-16">
            <FloridaServicesContent />
          </div>
        )}

        {/* Illinois Page Content */}
        {page.path === '/illinois/' && (
          <div className="mb-16">
            <IllinoisServicesContent />
          </div>
        )}

        {/* Pennsylvania Page Content */}
        {page.path === '/pennsylvania/' && (
          <div className="mb-16">
            <PennsylvaniaServicesContent />
          </div>
        )}

        {/* Ohio Page Content */}
        {page.path === '/ohio/' && (
          <div className="mb-16">
            <OhioServicesContent />
          </div>
        )}

        {/* Georgia Page Content */}
        {page.path === '/georgia/' && (
          <div className="mb-16">
            <GeorgiaServicesContent />
          </div>
        )}

        {/* North Carolina Page Content */}
        {page.path === '/north-carolina/' && (
          <div className="mb-16">
            <NorthCarolinaServicesContent />
          </div>
        )}

        {/* Michigan Page Content */}
        {page.path === '/michigan/' && (
          <div className="mb-16">
            <MichiganServicesContent />
          </div>
        )}

        {/* Team Page Content */}
        {page.path === '/team/' && (
          <div className="mb-16">
            <TeamPageContent />
          </div>
        )}

        {/* Key Highlights Grid (for standard pages) */}
        {!isCustomServicePage && (
          <section className="mb-14 p-6 sm:p-8 rounded-xl bg-white border border-[#E2E8F0] shadow-sm">
            <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#1D4ED8]" />
              Key Architecture &amp; Strategy Highlights
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {page.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#0F172A] leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Detailed Feature Blocks (for standard pages) */}
        {!isCustomServicePage && (
          <section className="mb-16 space-y-6">
            <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em]">
              – DETAILED CAPABILITIES &amp; SOLUTIONS
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {page.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border border-[#E2E8F0] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-600/30"
                >
                  <div>
                    <div className="text-xs font-mono text-[#1D4ED8] font-bold mb-2 tabular-nums">
                      0{idx + 1} / Specification
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">{feat.title}</h3>
                    <p className="text-sm text-[#475569] leading-[1.65]">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Languages Strip (for standard pages) */}
        {!isCustomServicePage && (
          <div className="mb-16 p-5 rounded-xl bg-white border border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3 text-xs shadow-xs">
            <div className="flex items-center gap-2 text-[#475569]">
              <Globe2 className="w-4 h-4 text-[#1D4ED8]" />
              <span className="font-bold text-[#0F172A]">Supported Linguistic Formats:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {page.languages.map((lang) => (
                <span key={lang} className="px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] font-mono text-[11px] font-medium">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Dedicated Contact Form Targeting info@udmideasusa.com */}
        <section id="inquiry-form" className="mb-16 p-7 sm:p-10 rounded-xl bg-white border border-[#E2E8F0] shadow-xl">
          <div className="max-w-2xl mb-8">
            <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] mb-1.5 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Direct Email Notification to info@udmideasusa.com
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight leading-[1.2]">
              Request Your Free Multilingual Strategy &amp; Architecture Audit.
            </h2>
            <p className="text-sm text-[#475569] mt-2 leading-[1.65]">
              Submitting this form directly notifies Founder Arun at <strong className="text-[#0F172A] font-mono">info@udmideasusa.com</strong>. We analyze your requirements and reply within 4 business hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A]">Inquiry Dispatched to info@udmideasusa.com!</h3>
              <p className="text-sm text-[#475569] max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-[#0F172A]">{formData.name}</strong>. Your inquiry has been routed to Founder Arun's official address (<span className="text-[#1D4ED8] font-mono font-semibold">info@udmideasusa.com</span>) for expedited review.
              </p>
              <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919521186150?text=Hello%20Arun,%20I%20just%20submitted%20the%20form%20for%20${encodeURIComponent(page.path)}%20under%20the%20name%20${encodeURIComponent(formData.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-xs inline-flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Follow Up Instantly via WhatsApp (+91-9521186150)</span>
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC] text-xs font-semibold cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                    Work Email * (Will receive confirmation)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="text"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                    Selected Service Scope
                  </label>
                  <input
                    type="text"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                  Project Details, Target Languages &amp; Goals
                </label>
                <textarea
                  rows={4}
                  placeholder={`Describe your technical requirements, desired countries, and timeline for ${page.path}...`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#475569]">
                  🔒 Direct delivery to <span className="text-[#0F172A] font-semibold font-mono">info@udmideasusa.com</span> · Strict NDA protected.
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-xl text-xs font-bold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-sm hover:shadow-md transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Inquiry to Arun</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </section>

        {/* Page Specific FAQs */}
        {!isCustomServicePage && page.faq && page.faq.length > 0 && (
          <section className="mb-16 space-y-4">
            <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#1D4ED8]" />
              Frequently Asked Questions for {page.heading.split(':')[0]}
            </h3>
            <div className="bg-white rounded-xl border border-[#E2E8F0] divide-y divide-[#E2E8F0] overflow-hidden shadow-xs">
              {page.faq.map((item, idx) => (
                <div key={idx} className="p-5 sm:p-6">
                  <div className="text-sm sm:text-base font-bold text-[#0F172A] mb-1.5">{item.q}</div>
                  <div className="text-sm text-[#475569] leading-[1.65]">{item.a}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Inter-linked Cross-Linking Section */}
        <section className="pt-12 border-t border-[#E2E8F0]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em]">
                – INTERNAL LINKS DIRECTORY
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mt-1">
                Explore Related Multilingual Web &amp; Digital Marketing Pages
              </h3>
            </div>
            <span className="text-xs text-[#475569] hidden sm:inline font-mono">Links open in new tab</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
            {relatedLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#1D4ED8]/50 hover:shadow-sm transition-all text-xs font-medium text-[#475569] hover:text-[#1D4ED8] flex items-center justify-between group"
              >
                <span className="truncate">{link.label}</span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1D4ED8] shrink-0 ml-1.5" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};
