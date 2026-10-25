/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { AboutUsSection } from './components/AboutUsSection';
import { WebDevelopmentSection } from './components/WebDevelopmentSection';
import { ReviewsSlider } from './components/ReviewsSlider';
import { SeoServicesSection } from './components/SeoServicesSection';
import { SmmServicesSection } from './components/SmmServicesSection';
import { EmpoweredBySlider } from './components/EmpoweredBySlider';
import { PpcServicesSection } from './components/PpcServicesSection';
import { WorkDoneTabsSection } from './components/WorkDoneTabsSection';
import { LatestBlogsSection } from './components/LatestBlogsSection';
import { MapUsaSection } from './components/MapUsaSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BlogPage } from './components/BlogPage';
import { BlogDetailPage } from './components/BlogDetailPage';
import { CaseStudyDetailPage } from './components/CaseStudyDetailPage';
import { RegionalDetailModal } from './components/RegionalDetailModal';
import { TeamModal } from './components/TeamModal';
import { ContactModal } from './components/ContactModal';
import { LegalModal } from './components/LegalModal';
import { BlogPost, CaseStudy } from './types';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'blog' | 'case-study-detail' | 'blog-detail'>('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const [selectedRegion, setSelectedRegion] = useState<{
    name: string;
    category: 'USA' | 'LATAM' | 'EU' | 'Arabic' | 'Israel';
  } | null>(null);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{
    title: string;
    type: 'privacy' | 'terms' | 'cookies';
  } | null>(null);

  // Dynamic document title update according to active page view
  useEffect(() => {
    if (activeView === 'blog') {
      document.title = 'UDMIDEAS Blog - Multilingual SEO, AEO, GEO & Custom Web Engineering';
    } else if (activeView === 'blog-detail' && selectedBlog) {
      document.title = `${selectedBlog.title} | UDMIDEAS Insights`;
    } else if (activeView === 'case-study-detail' && selectedCaseStudy) {
      document.title = `${selectedCaseStudy.title} (${selectedCaseStudy.country}) | UDMIDEAS Case Study`;
    } else {
      document.title = 'UDMIDEAS - Multilingual Website Design, Development & Digital Marketing Agency';
    }
  }, [activeView, selectedBlog, selectedCaseStudy]);

  const handleNavigate = (sectionId: string) => {
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectRegion = (
    name: string,
    category: 'USA' | 'LATAM' | 'EU' | 'Arabic' | 'Israel'
  ) => {
    setSelectedRegion({ name, category });
  };

  const handleOpenBlogReader = (blog: BlogPost) => {
    setSelectedBlog(blog);
    setActiveView('blog-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCaseStudy = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
    setActiveView('case-study-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Universal Top Navigation with Mega/Submenus */}
      <Navbar
        onNavigate={handleNavigate}
        onOpenBlogPage={() => {
          setActiveView('blog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectRegion={handleSelectRegion}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenTeam={() => setIsTeamOpen(true)}
        activeView={activeView === 'blog' || activeView === 'blog-detail' ? 'blog' : 'home'}
      />

      {/* Main View Router */}
      {activeView === 'case-study-detail' && selectedCaseStudy ? (
        <main className="flex-grow">
          <CaseStudyDetailPage
            caseStudy={selectedCaseStudy}
            onBack={() => {
              setActiveView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectCaseStudy={handleOpenCaseStudy}
            onOpenContact={() => setIsContactOpen(true)}
          />
        </main>
      ) : activeView === 'blog-detail' && selectedBlog ? (
        <main className="flex-grow">
          <BlogDetailPage
            blog={selectedBlog}
            onBack={() => {
              setActiveView('blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectBlog={handleOpenBlogReader}
            onOpenContact={() => setIsContactOpen(true)}
          />
        </main>
      ) : activeView === 'blog' ? (
        <main className="flex-grow">
          <BlogPage
            onBackToHome={() => {
              setActiveView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenContact={() => setIsContactOpen(true)}
            onSelectBlog={handleOpenBlogReader}
          />
        </main>
      ) : (
        <main className="flex-grow">
          {/* 1. Hero Header Section */}
          <HeroSection
            onOpenContact={() => setIsContactOpen(true)}
            onExploreServices={() => handleNavigate('web-development')}
          />

          {/* 2. Case Studies Section - 4 Case Studies with dedicated page view & modal */}
          <CaseStudiesSection onSelectCaseStudy={handleOpenCaseStudy} />

          {/* 3. About Us UDMIDEAS Section */}
          <AboutUsSection
            onOpenTeam={() => setIsTeamOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
          />

          {/* 4. Website Design Development Services Section (2 blocks per row / pair layout) */}
          <WebDevelopmentSection onOpenContact={() => setIsContactOpen(true)} />

          {/* 5. Reviews Section Slider with 10 reviews moving in 5 seconds */}
          <ReviewsSlider />

          {/* 6. SEO Services Section with all SEO, AEO, and GEO services */}
          <SeoServicesSection onOpenContact={() => setIsContactOpen(true)} />

          {/* 7. SMM Services Section with all social media marketing services */}
          <SmmServicesSection onOpenContact={() => setIsContactOpen(true)} />

          {/* 8. Empowers By Companies Slider */}
          <EmpoweredBySlider />

          {/* 9. Our PPC Services Section */}
          <PpcServicesSection onOpenContact={() => setIsContactOpen(true)} />

          {/* 10. Recent Work Done and Present Ongoing Work Done (Two Tabs in same section) */}
          <WorkDoneTabsSection onOpenContact={() => setIsContactOpen(true)} />

          {/* 11. Our Latest Blogs Section (4 Blogs in Slider) */}
          <LatestBlogsSection
            onOpenBlogReader={handleOpenBlogReader}
            onOpenBlogPage={() => {
              setActiveView('blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          {/* 12. Map USA with Location NYC 10001 */}
          <MapUsaSection
            onSelectState={(stateName) => handleSelectRegion(stateName, 'USA')}
            onOpenContact={() => setIsContactOpen(true)}
          />

          {/* Frequently Asked Questions Section (Added before Footer with 20 unique Q&As) */}
          <FaqSection onOpenContact={() => setIsContactOpen(true)} />
        </main>
      )}

      {/* 13. Footer Menu */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBlogPage={() => {
          setActiveView('blog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenLegalModal={(title, type) => setLegalModal({ title, type })}
      />

      {/* Persistent WhatsApp Button at Bottom Right Corner */}
      <FloatingWhatsApp />

      {/* Modals */}
      <RegionalDetailModal
        regionName={selectedRegion ? selectedRegion.name : null}
        category={selectedRegion ? selectedRegion.category : null}
        onClose={() => setSelectedRegion(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <TeamModal
        isOpen={isTeamOpen}
        onClose={() => setIsTeamOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <LegalModal
        title={legalModal ? legalModal.title : null}
        type={legalModal ? legalModal.type : null}
        onClose={() => setLegalModal(null)}
      />
    </div>
  );
}
