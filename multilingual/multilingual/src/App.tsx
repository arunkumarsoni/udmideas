/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom';
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
import { findPageMetadata, isLegacyBloggerPath } from './data/routesData';

interface RouteHelpersProps {
  onNavigateTo: (path: string, newTab?: boolean) => void;
  onGoServices: () => void;
  onOpenContact: () => void;
}

function normalizeRoutePath(rawPath: string): string {
  const lower = rawPath.toLowerCase();
  if (!lower || lower === '/') return '/';
  return lower.endsWith('/') ? lower : `${lower}/`;
}

const BlogSlugRoute: React.FC<RouteHelpersProps> = ({
  onNavigateTo,
  onGoServices,
  onOpenContact
}) => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const cleanSlug = (slug || '').toLowerCase();

  const matchedBlog =
    !cleanSlug || isLegacyBloggerPath(`/blog/${cleanSlug}/`)
      ? undefined
      : BLOG_POSTS.find((b) => b.slug.toLowerCase() === cleanSlug);

  if (!matchedBlog) {
    return (
      <NotFound
        requestedPath={location.pathname}
        onGoHome={() => onNavigateTo('/')}
        onGoServices={onGoServices}
        onNavigateTo={(p) => onNavigateTo(p)}
      />
    );
  }

  return (
    <BlogDetailPage
      blog={matchedBlog}
      onBack={() => onNavigateTo('/blog/')}
      onSelectBlog={(b) => onNavigateTo(b.customUrl || `/blog/${b.slug}/`)}
      onOpenContact={onOpenContact}
    />
  );
};

const CaseStudySlugRoute: React.FC<RouteHelpersProps> = ({
  onNavigateTo,
  onGoServices,
  onOpenContact
}) => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const cleanSlug = (slug || '').toLowerCase();

  const matchedCaseStudy =
    !cleanSlug || isLegacyBloggerPath(`/case-study/${cleanSlug}/`)
      ? undefined
      : CASE_STUDIES.find((cs) => (cs.slug || cs.id).toLowerCase() === cleanSlug);

  if (!matchedCaseStudy) {
    return (
      <NotFound
        requestedPath={location.pathname}
        onGoHome={() => onNavigateTo('/')}
        onGoServices={onGoServices}
        onNavigateTo={(p) => onNavigateTo(p)}
      />
    );
  }

  return (
    <CaseStudyDetailPage
      caseStudy={matchedCaseStudy}
      onBack={() => onNavigateTo('/case-studies/')}
      onSelectCaseStudy={(cs) => onNavigateTo(`/case-study/${cs.slug || cs.id}/`)}
      onOpenContact={onOpenContact}
    />
  );
};

const DynamicSlugRoute: React.FC<RouteHelpersProps> = ({
  onNavigateTo,
  onGoServices,
  onOpenContact
}) => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const cleanSlug = (slug || '').toLowerCase().replace(/%20/g, '-').replace(/ /g, '-');
  const normalized = cleanSlug ? `/${cleanSlug}/` : '';

  // Reject empty slugs and legacy Blogger / .html patterns immediately
  if (!cleanSlug || isLegacyBloggerPath(normalized)) {
    return (
      <NotFound
        requestedPath={location.pathname}
        onGoHome={() => onNavigateTo('/')}
        onGoServices={onGoServices}
        onNavigateTo={(p) => onNavigateTo(p)}
      />
    );
  }

  // 1. Strict match against root-level blog slugs or customUrls
  const matchedBlog = BLOG_POSTS.find((b) => {
    const blogSlug = b.slug.toLowerCase();
    const customUrl = b.customUrl ? b.customUrl.toLowerCase() : '';
    return blogSlug === cleanSlug || (customUrl && customUrl === normalized);
  });

  if (matchedBlog) {
    return (
      <BlogDetailPage
        blog={matchedBlog}
        onBack={() => onNavigateTo('/blog/')}
        onSelectBlog={(b) => onNavigateTo(b.customUrl || `/blog/${b.slug}/`)}
        onOpenContact={onOpenContact}
      />
    );
  }

  // 2. Strict match against root-level case study slugs
  const matchedCaseStudy = CASE_STUDIES.find(
    (cs) => (cs.slug || cs.id).toLowerCase() === cleanSlug
  );

  if (matchedCaseStudy) {
    return (
      <CaseStudyDetailPage
        caseStudy={matchedCaseStudy}
        onBack={() => onNavigateTo('/case-studies/')}
        onSelectCaseStudy={(cs) => onNavigateTo(`/case-study/${cs.slug || cs.id}/`)}
        onOpenContact={onOpenContact}
      />
    );
  }

  // 3. Strict match against verified standalone pages (ALL_PAGES or 50 US states)
  const matchedPage = findPageMetadata(normalized);
  if (matchedPage) {
    return (
      <StandalonePageView
        path={matchedPage.path}
        onNavigateHome={() => onNavigateTo('/')}
        onNavigateTo={(p) => onNavigateTo(p)}
      />
    );
  }

  // 4. Any unmatched single-segment slug strictly renders 404 NotFound
  return (
    <NotFound
      requestedPath={location.pathname}
      onGoHome={() => onNavigateTo('/')}
      onGoServices={onGoServices}
      onNavigateTo={(p) => onNavigateTo(p)}
    />
  );
};

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const currentPath = normalizeRoutePath(location.pathname);
  const isHome = currentPath === '/';

  const navigateTo = (path: string, newTab: boolean = false) => {
    if (path === '/#multilingual-services') {
      navigateToServicesSection();
      return;
    }

    const cleanPath = path.toLowerCase().replace(/%20/g, '-').replace(/ /g, '-');
    const normalized =
      !cleanPath || cleanPath === '/'
        ? '/'
        : cleanPath.endsWith('/')
          ? cleanPath
          : `${cleanPath}/`;

    if (newTab) {
      window.open(normalized, '_blank');
      return;
    }

    navigate(normalized);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToServicesSection = () => {
    if (location.pathname !== '/') {
      navigate('/#multilingual-services');
      setTimeout(() => {
        const el = document.getElementById('multilingual-services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      const el = document.getElementById('multilingual-services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isHome) {
      const homeTitle =
        'UDMIDEAS Multilingual Website Design, Development & SEO Digital Marketing Agency';
      document.title = homeTitle;
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', homeTitle);
      }

      if (location.hash === '#multilingual-services') {
        setTimeout(() => {
          const el = document.getElementById('multilingual-services');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [isHome, location.hash]);

  const notFoundElement = (
    <NotFound
      requestedPath={location.pathname}
      onGoHome={() => navigateTo('/')}
      onGoServices={navigateToServicesSection}
      onNavigateTo={(p) => navigateTo(p)}
    />
  );

  const homeElement = (
    <>
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

      {/* 5. SMM Services Section with all social media marketing services */}
      <SmmServicesSection onOpenContact={() => setIsContactModalOpen(true)} />

      {/* 6. Empowers By Companies Slider */}
      <EmpoweredBySlider />

      {/* 7. Our Latest Blogs Section (4 Blogs in Slider) */}
      <LatestBlogsSection
        onOpenBlogReader={(b) => navigateTo(b.customUrl || `/blog/${b.slug}/`, true)}
        onOpenBlogPage={() => navigateTo('/blog/', true)}
      />

      {/* 8. Map USA with Location NYC 10001 */}
      <MapUsaSection
        onSelectState={(stateName) => {
          const slug = '/' + stateName.toLowerCase().replace(/\s+/g, '-') + '/';
          navigateTo(slug, true);
        }}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* 9. Frequently Asked Questions Section */}
      <FaqSection onOpenContact={() => setIsContactModalOpen(true)} />
    </>
  );

  return (
    <div className="min-h-screen bg-white text-[#475569] flex flex-col font-sans selection:bg-[#1D4ED8] selection:text-white">
      {/* Universal Top Navigation with Mega/Submenus & New Tab Links */}
      <Navbar currentPath={currentPath} />

      {/* Strict React Router View */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={homeElement} />
          <Route
            path="/blog"
            element={
              <BlogPage
                onBackToHome={() => navigateTo('/')}
                onOpenContact={() => setIsContactModalOpen(true)}
                onSelectBlog={(b) => navigateTo(b.customUrl || `/blog/${b.slug}/`, true)}
              />
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <BlogSlugRoute
                onNavigateTo={navigateTo}
                onGoServices={navigateToServicesSection}
                onOpenContact={() => setIsContactModalOpen(true)}
              />
            }
          />
          <Route
            path="/case-studies"
            element={
              <CaseStudiesPage
                onBackToHome={() => navigateTo('/')}
                onSelectCaseStudy={(cs) => navigateTo(`/case-study/${cs.slug || cs.id}/`)}
                onOpenContact={() => setIsContactModalOpen(true)}
              />
            }
          />
          <Route
            path="/case-study/:slug"
            element={
              <CaseStudySlugRoute
                onNavigateTo={navigateTo}
                onGoServices={navigateToServicesSection}
                onOpenContact={() => setIsContactModalOpen(true)}
              />
            }
          />
          <Route path="/404" element={notFoundElement} />
          <Route
            path="/:slug"
            element={
              <DynamicSlugRoute
                onNavigateTo={navigateTo}
                onGoServices={navigateToServicesSection}
                onOpenContact={() => setIsContactModalOpen(true)}
              />
            }
          />
          <Route path="*" element={notFoundElement} />
        </Routes>
      </main>

      {/* Footer Menu with all required links to separate web pages */}
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

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
