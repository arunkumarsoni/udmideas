/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutUsSection } from './components/AboutUsSection';
import { MultilingualServicesSection } from './components/MultilingualServicesSection';
import { ReviewsSlider } from './components/ReviewsSlider';
import { SmmServicesSection } from './components/SmmServicesSection';
import { EmpoweredBySlider } from './components/EmpoweredBySlider';
import { LatestBlogsSection } from './components/LatestBlogsSection';
import { MapUsaSection } from './components/MapUsaSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BlogPage } from './components/BlogPage';
import { BlogDetailPage } from './components/BlogDetailPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { CaseStudyDetailPage } from './components/CaseStudyDetailPage';
import { StandalonePageView } from './components/StandalonePageView';
import { NotFound } from './components/NotFound';
import { ContactModal } from './components/ContactModal';
import { BLOG_POSTS, CASE_STUDIES } from './data/contentData';
import { isLegacyBloggerPath, isValidStandalonePath } from './data/routesData';

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

  const navigateToServicesSection = () => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/#multilingual-services');
      setCurrentPath('/');
      setTimeout(() => {
        const el = document.getElementById('multilingual-services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      const el = document.getElementById('multilingual-services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Route matching logic
  const isExplicit404Route = currentPath === '/404/' || currentPath === '/404';
  const isLegacyOrExplicit404 = isExplicit404Route || isLegacyBloggerPath(currentPath);

  // Check if currentPath is a blog detail page (never match legacy Blogger URLs)
  const matchedBlog = isLegacyOrExplicit404
    ? undefined
    : BLOG_POSTS.find((b) => {
        const slug = b.slug.toLowerCase();
        const custom = b.customUrl ? b.customUrl.toLowerCase() : '';
        return (
          currentPath === `/blog/${slug}/` ||
          currentPath === `/${slug}/` ||
          (custom && currentPath === custom)
        );
      });

  // Check if currentPath is a case study detail page (never match legacy Blogger URLs)
  const matchedCaseStudy = isLegacyOrExplicit404
    ? undefined
    : CASE_STUDIES.find((cs) => {
        const slug = (cs.slug || cs.id).toLowerCase();
        return (
          currentPath === `/case-study/${slug}/` ||
          currentPath === `/${slug}/`
        );
      });

  const isHome = currentPath === '/';
  const isBlogListing = currentPath === '/blog/';
  const isCaseStudiesListing = currentPath === '/case-studies/';
  const isValidStandalone = !isLegacyOrExplicit404 && isValidStandalonePath(currentPath);

  useEffect(() => {
    if (isHome) {
      const homeTitle =
        'UDMIDEAS Multilingual Website Design, Development & SEO Digital Marketing Agency';
      document.title = homeTitle;
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', homeTitle);
      }

      if (window.location.hash === '#multilingual-services') {
        setTimeout(() => {
          const el = document.getElementById('multilingual-services');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [isHome]);

  return (
    <div className="min-h-screen bg-white text-[#475569] flex flex-col font-sans selection:bg-[#1D4ED8] selection:text-white">
      {/* Universal Top Navigation with Mega/Submenus & New Tab Links */}
      <Navbar currentPath={currentPath} />

      {/* Main View Router */}
      {isExplicit404Route ? (
        /* Explicit /404 route */
        <main className="flex-grow">
          <NotFound
            requestedPath={currentPath}
            onGoHome={() => navigateTo('/')}
            onGoServices={navigateToServicesSection}
            onNavigateTo={(p) => navigateTo(p)}
          />
        </main>
      ) : isCaseStudiesListing ? (
        <main className="flex-grow">
          <CaseStudiesPage
            onBackToHome={() => navigateTo('/')}
            onSelectCaseStudy={(cs) => navigateTo(`/case-study/${cs.slug || cs.id}/`)}
            onOpenContact={() => setIsContactModalOpen(true)}
          />
        </main>
      ) : matchedCaseStudy ? (
        <main className="flex-grow">
          <CaseStudyDetailPage
            caseStudy={matchedCaseStudy}
            onBack={() => navigateTo('/case-studies/')}
            onSelectCaseStudy={(cs) => navigateTo(`/case-study/${cs.slug || cs.id}/`)}
            onOpenContact={() => setIsContactModalOpen(true)}
          />
        </main>
      ) : matchedBlog ? (
        <main className="flex-grow">
          <BlogDetailPage
            blog={matchedBlog}
            onBack={() => navigateTo('/blog/')}
            onSelectBlog={(b) => navigateTo(b.customUrl || `/blog/${b.slug}/`)}
            onOpenContact={() => setIsContactModalOpen(true)}
          />
        </main>
      ) : isBlogListing ? (
        <main className="flex-grow">
          <BlogPage
            onBackToHome={() => navigateTo('/')}
            onOpenContact={() => setIsContactModalOpen(true)}
            onSelectBlog={(b) => navigateTo(b.customUrl || `/blog/${b.slug}/`, true)}
          />
        </main>
      ) : isHome ? (
        <main className="flex-grow">
          {/* 1. Hero Header Section */}
          <HeroSection
            onOpenContact={() => setIsContactModalOpen(true)}
            onExploreServices={() => {
              const el = document.getElementById('multilingual-services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* 2. About Us UDMIDEAS Section */}
          <AboutUsSection
            onOpenTeam={() => navigateTo('/team/', true)}
            onOpenContact={() => setIsContactModalOpen(true)}
          />

          {/* 3. Multilingual UDMIDEAS Services Section (7 Core Services) */}
          <MultilingualServicesSection
            onOpenContact={() => setIsContactModalOpen(true)}
          />

          {/* 4. Reviews Section Slider with 10 reviews moving in 5 seconds */}
          <ReviewsSlider />

          {/* 4. SMM Services Section with all social media marketing services */}
          <SmmServicesSection onOpenContact={() => setIsContactModalOpen(true)} />

          {/* 5. Empowers By Companies Slider */}
          <EmpoweredBySlider />

          {/* 6. Our Latest Blogs Section (4 Blogs in Slider) */}
          <LatestBlogsSection
            onOpenBlogReader={(b) => navigateTo(b.customUrl || `/blog/${b.slug}/`, true)}
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
      ) : isValidStandalone ? (
        /* Standalone Separate Web Page for verified valid URLs */
        <main className="flex-grow">
          <StandalonePageView
            path={currentPath}
            onNavigateHome={() => navigateTo('/')}
            onNavigateTo={(p) => navigateTo(p)}
          />
        </main>
      ) : (
        /* Catch-all 404 route (path="*") for legacy Blogger URLs & unknown paths */
        <main className="flex-grow">
          <NotFound
            requestedPath={currentPath}
            onGoHome={() => navigateTo('/')}
            onGoServices={navigateToServicesSection}
            onNavigateTo={(p) => navigateTo(p)}
          />
        </main>
      )}

      {/* 13. Footer Menu with all required links to separate web pages */}
      <Footer />

      {/* Persistent WhatsApp Button at Bottom Right Corner */}
      <FloatingWhatsApp />

      {/* Contact Modal (Direct Email Notification to info@udmideasusa.com) */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
