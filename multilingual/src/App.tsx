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
import { StandalonePageView } from './components/StandalonePageView';
import { ContactModal } from './components/ContactModal';
import { BLOG_POSTS, CASE_STUDIES } from './data/contentData';
import { ALL_PAGES } from './data/routesData';
import { BlogPost, CaseStudy } from './types';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname.toLowerCase();
      // Handle root or normalized trailing slash
      if (!p || p === '/') return '/';
      return p.endsWith('/') ? p : `${p}/`;
    }
    return '/';
  });

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Sync state with browser location on popstate
  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname.toLowerCase();
      const normalized = !p || p === '/' ? '/' : (p.endsWith('/') ? p : `${p}/`);
      setCurrentPath(normalized);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string, newTab: boolean = false) => {
    const cleanPath = path.toLowerCase().replace(/%20/g, '-').replace(/ /g, '-');
    const normalized = cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`;

    if (newTab) {
      window.open(normalized, '_blank');
      return;
    }

    if (window.location.pathname !== normalized) {
      window.history.pushState({}, '', normalized);
    }
    setCurrentPath(normalized);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route matching logic
  // Check if currentPath is a blog detail page
  const matchedBlog = BLOG_POSTS.find((b) => {
    const slug = b.slug.toLowerCase();
    return (
      currentPath === `/blog/${slug}/` ||
      currentPath === `/${slug}/` ||
      currentPath.includes(slug)
    );
  });

  // Check if currentPath is a case study detail page
  const matchedCaseStudy = CASE_STUDIES.find((cs) => {
    const slug = (cs.slug || cs.id).toLowerCase();
    return (
      currentPath === `/case-study/${slug}/` ||
      currentPath === `/${slug}/` ||
      currentPath.includes(slug)
    );
  });

  const isHome = currentPath === '/';
  const isBlogListing = currentPath === '/blog/';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Universal Top Navigation with Mega/Submenus & New Tab Links */}
      <Navbar currentPath={currentPath} />

      {/* Main View Router */}
      {matchedCaseStudy ? (
        <main className="flex-grow">
          <CaseStudyDetailPage
            caseStudy={matchedCaseStudy}
            onBack={() => navigateTo('/')}
            onSelectCaseStudy={(cs) => navigateTo(`/case-study/${cs.slug || cs.id}/`)}
            onOpenContact={() => setIsContactModalOpen(true)}
          />
        </main>
      ) : matchedBlog ? (
        <main className="flex-grow">
          <BlogDetailPage
            blog={matchedBlog}
            onBack={() => navigateTo('/blog/')}
            onSelectBlog={(b) => navigateTo(`/blog/${b.slug}/`)}
            onOpenContact={() => setIsContactModalOpen(true)}
          />
        </main>
      ) : isBlogListing ? (
        <main className="flex-grow">
          <BlogPage
            onBackToHome={() => navigateTo('/')}
            onOpenContact={() => setIsContactModalOpen(true)}
            onSelectBlog={(b) => navigateTo(`/blog/${b.slug}/`, true)}
          />
        </main>
      ) : isHome ? (
        <main className="flex-grow">
          {/* 1. Hero Header Section */}
          <HeroSection
            onOpenContact={() => setIsContactModalOpen(true)}
            onExploreServices={() => {
              const el = document.getElementById('web-development');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* 2. Case Studies Section - 4 Case Studies with New Tab Pages */}
          <CaseStudiesSection
            onSelectCaseStudy={(cs) => navigateTo(`/case-study/${cs.slug || cs.id}/`, true)}
          />

          {/* 3. About Us UDMIDEAS Section */}
          <AboutUsSection
            onOpenTeam={() => navigateTo('/team/', true)}
            onOpenContact={() => setIsContactModalOpen(true)}
          />

          {/* 4. Website Design Development Services Section (2 blocks per row / pair layout) */}
          <WebDevelopmentSection onOpenContact={() => setIsContactModalOpen(true)} />

          {/* 5. Reviews Section Slider with 10 reviews moving in 5 seconds */}
          <ReviewsSlider />

          {/* 6. SEO Services Section with all SEO, AEO, and GEO services */}
          <SeoServicesSection onOpenContact={() => setIsContactModalOpen(true)} />

          {/* 7. SMM Services Section with all social media marketing services */}
          <SmmServicesSection onOpenContact={() => setIsContactModalOpen(true)} />

          {/* 8. Empowers By Companies Slider */}
          <EmpoweredBySlider />

          {/* 9. Our PPC Services Section */}
          <PpcServicesSection onOpenContact={() => setIsContactModalOpen(true)} />

          {/* 10. Recent Work Done and Present Ongoing Work Done (Two Tabs in same section) */}
          <WorkDoneTabsSection onOpenContact={() => setIsContactModalOpen(true)} />

          {/* 11. Our Latest Blogs Section (4 Blogs in Slider) */}
          <LatestBlogsSection
            onOpenBlogReader={(b) => navigateTo(`/blog/${b.slug}/`, true)}
            onOpenBlogPage={() => navigateTo('/blog/', true)}
          />

          {/* 12. Map USA with Location NYC 10001 */}
          <MapUsaSection
            onSelectState={(stateName) => {
              const slug = '/' + stateName.toLowerCase().replace(/\s+/g, '-') + '/';
              navigateTo(slug, true);
            }}
            onOpenContact={() => setIsContactModalOpen(true)}
          />

          {/* Frequently Asked Questions Section (Added before Footer with 20 unique Q&As) */}
          <FaqSection onOpenContact={() => setIsContactModalOpen(true)} />
        </main>
      ) : (
        /* Standalone Separate Web Page for any of the requested URLs */
        <main className="flex-grow">
          <StandalonePageView
            path={currentPath}
            onNavigateHome={() => navigateTo('/')}
            onNavigateTo={(p) => navigateTo(p)}
          />
        </main>
      )}

      {/* 13. Footer Menu with all required links to separate web pages */}
      <Footer />

      {/* Persistent WhatsApp Button at Bottom Right Corner */}
      <FloatingWhatsApp />

      {/* Contact Modal (Direct Email Notification to soni9999arun9999@gmail.com) */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
