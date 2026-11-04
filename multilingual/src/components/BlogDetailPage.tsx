import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Tag,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Copy,
  Check,
  Bookmark,
  Sparkles,
  BookOpen,
  Send,
  Mail,
  ShieldCheck,
  Search,
  ExternalLink,
  Zap,
  Globe2,
  Globe,
  MapPin
} from 'lucide-react';
import { BLOG_POSTS, NEW_YORK_REGIONS, LATAM_EXPANSION_REGIONS } from '../data/contentData';
import { BlogPost } from '../types';

interface BlogDetailPageProps {
  blog: BlogPost;
  onBack: () => void;
  onSelectBlog: (post: BlogPost) => void;
  onOpenContact: () => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  blog,
  onBack,
  onSelectBlog,
  onOpenContact
}) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: `Inquiry regarding ${blog.title}`
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [regionSearch, setRegionSearch] = useState('');

  const canonicalUrl = `https://www.udmideasusa.com${blog.customUrl || `/blog/${blog.slug}/`}`;

  // Update dynamic SEO & AEO/GEO meta tags in head for this exact article
  useEffect(() => {
    document.title = `${blog.title} | UDMIDEAS NYC Digital Marketing Agency`;

    // Update or insert meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', blog.excerpt);

    // Update OpenGraph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', blog.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', blog.excerpt);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', canonicalUrl);

    // Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Inject BlogPosting JSON-LD Schema
    const scriptId = 'blog-jsonld-schema';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaData: any = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting',
          '@id': `${canonicalUrl}#article`,
          'headline': blog.title,
          'description': blog.excerpt,
          'datePublished': '2026-11-02T10:05:44+00:00',
          'dateModified': '2026-11-02T10:05:44+00:00',
          'mainEntityOfPage': canonicalUrl,
          'author': {
            '@type': 'Person',
            'name': 'Arun',
            'jobTitle': 'Founder & Principal Solutions Architect',
            'worksFor': {
              '@type': 'Organization',
              'name': 'UDMIDEAS NYC'
            }
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'UDMIDEAS NYC Digital Marketing Agency',
            'logo': {
              '@type': 'ImageObject',
              'url': 'https://www.udmideasusa.com/logo.png'
            }
          },
          'keywords': blog.tags.join(', ')
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://www.udmideasusa.com/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Blog',
              'item': 'https://www.udmideasusa.com/blog/'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': blog.title,
              'item': canonicalUrl
            }
          ]
        },
        {
          '@type': 'ProfessionalService',
          '@id': 'https://www.udmideasusa.com/#organization',
          'name': 'UDMIDEAS NYC Digital Marketing Agency',
          'url': 'https://www.udmideasusa.com/',
          'telephone': '+91-9521186150',
          'founder': {
            '@type': 'Person',
            'name': 'Arun'
          },
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': '350 5th Ave',
            'addressLocality': 'New York',
            'addressRegion': 'NY',
            'postalCode': '10001',
            'addressCountry': 'US'
          },
          'areaServed': ['Albany, NY', 'New York State', 'United States', 'International']
        }
      ]
    };

    if (blog.faqs && blog.faqs.length > 0) {
      schemaData['@graph'].push({
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        'mainEntity': blog.faqs.map((f) => ({
          '@type': 'Question',
          'name': f.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.answer
          }
        }))
      });
    }

    scriptTag.text = JSON.stringify(schemaData);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      // Cleanup script if needed
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [blog, canonicalUrl]);

  const relatedBlogs = BLOG_POSTS.filter((p) => p.id !== blog.id).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(canonicalUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const subject = encodeURIComponent(`Organic SEO Quote Request from ${formData.name} (${blog.title})`);
    const body = encodeURIComponent(
      `Hello Arun and UDMIDEAS NYC Team,\n\n` +
      `I am requesting an Organic SEO Consultation & Audit after reading: ${blog.title}\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone/WhatsApp: ${formData.phone || 'N/A'}\n` +
      `Website: ${formData.website || 'N/A'}\n` +
      `Message:\n${formData.message}\n\n` +
      `Please reply to: ${formData.email}`
    );

    // Dispatch mailto to soni9999arun9999@gmail.com
    window.location.href = `mailto:soni9999arun9999@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  // Internal Links Directory for this blog article
  const internalLinks = [
    { label: 'USA to LATAM: Spanish SEO', href: '/usa-to-latam-spanish-seo-and-market-expansion/' },
    { label: 'Cross-Market SEO: Israel & Arab World', href: '/cross-market-seo-israel-and-the-arab-world/' },
    { label: 'From Website Creation to Digital Authority', href: '/from-website-creation-to-digital-authority/' },
    { label: 'The Architecture of Multilingual Digital Visibility', href: '/the-architecture-of-multilingual-digital-visibility/' },
    { label: 'How Arun Handle SEO, AEO and GEO', href: '/how-arun-handle-seo-aeo-and-geo/' },
    { label: 'Why Arun Is the Best Multilingual SEO Expert', href: '/why-arun-is-the-best-multilingual-seo-expert/' },
    { label: 'Yonkers Remote SEO Expert', href: '/yonkers/' },
    { label: "Hell's Kitchen Manhattan SEO Agency", href: '/hells-kitchen/' },
    { label: 'Watertown North Country Ecommerce SEO', href: '/watertown/' },
    { label: 'Utica Mohawk Valley Ecommerce SEO', href: '/utica/' },
    { label: 'Troy Capital Region Ecommerce SEO', href: '/troy/' },
    { label: 'Times Square Tour & Travel SEO', href: '/times-square/' },
    { label: 'Syracuse Remote SEO Consultant', href: '/syracuse/' },
    { label: 'Statue of Liberty Area Tour SEO', href: '/statue-of-liberty-area/' },
    { label: 'Staten Island Remote SEO Consultant', href: '/staten-island/' },
    { label: 'Schenectady Remote SEO Consultant', href: '/schenectady/' },
    { label: 'Rochester Remote SEO Consultant', href: '/rochester/' },
    { label: 'Queens Remote SEO Consultant', href: '/queens/' },
    { label: 'New Rochelle Remote SEO Consultant', href: '/new-rochelle/' },
    { label: 'Mount Vernon Remote SEO Consultant', href: '/mount-vernon/' },
    { label: 'Manhattan Businesses SEO Consultant', href: '/manhattan/' },
    { label: 'Kingston Hudson Valley Remote SEO', href: '/kingston/' },
    { label: 'Empire State Tour & B2B SEO', href: '/empire-state/' },
    { label: 'Central Park Tour & Travel SEO', href: '/central-park/' },
    { label: 'Buffalo Remote SEO Consultant', href: '/buffalo/' },
    { label: 'Brooklyn Businesses SEO Consultant', href: '/brooklyn/' },
    { label: 'SEO Consultant for The Bronx', href: '/bronx/' },
    { label: 'Albany Remote SEO Consultant', href: '/albany/' },
    { label: 'New York HQ & USA Strategy', href: '/new-york/' },
    { label: 'All Services Overview', href: '/services/' },
    { label: 'Multilingual SEO Services', href: '/multilingual-search-engine-optimization/' },
    { label: 'Answer Engine Optimization (AEO)', href: '/answer-engine-optimization/' },
    { label: 'Generative Engine Optimization (GEO)', href: '/generative-engine-optimization/' },
    { label: 'Website Design & Development', href: '/website-design-development/' },
    { label: 'Social Media Marketing (SMM)', href: '/social-media-marketing/' },
    { label: 'Pay Per Click (PPC) Advertising', href: '/pay-per-click/' },
    { label: 'About UDMIDEAS (15+ Years)', href: '/about-us/' },
    { label: 'Meet Founder Arun & Team', href: '/team/' },
    { label: 'Contact UDMIDEAS NYC', href: '/contact-us/' }
  ];

  return (
    <article className="pt-28 pb-24 min-h-screen bg-slate-950 text-slate-100 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-between pb-6 mb-8 border-b border-slate-900 text-xs">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors py-1.5 px-3 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Blogs</span>
          </button>

          <div className="flex items-center gap-2 text-slate-400 flex-wrap">
            <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Blog</a>
            <span aria-hidden="true">/</span>
            <span className="text-blue-400 font-medium truncate max-w-[200px]">{blog.category}</span>
          </div>
        </nav>

        {/* Article Header */}
        <header className="mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="text-blue-400 font-semibold bg-blue-950/40 px-2.5 py-1 rounded border border-blue-900/50">
              {blog.category}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 font-mono">
              <Clock className="w-3 h-3 text-slate-500" />
              {blog.readTime}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-500" />
              {blog.date}
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400 font-mono text-[11px] bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/40">
              100% White Hat Organic SEO
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            {blog.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-slate-900">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center font-bold text-xs text-blue-300 font-mono">
                  {blog.author.slice(0, 2).toUpperCase()}
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-white">{blog.author}</div>
                <div className="text-[11px] text-slate-400">
                  UDMIDEAS NYC Digital Marketing Agency · 350 5th Ave, New York, NY 10001
                </div>
              </div>
            </div>

            {/* Sharing Bar */}
            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20reading%20your%20article%20on%20${encodeURIComponent(blog.title)}%20and%20would%20like%20to%20discuss%20Organic%20SEO.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/50 border border-emerald-800/60 text-emerald-300 text-xs hover:bg-emerald-900/50 transition-colors"
                title="Discuss this blog with Arun on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Discuss on WhatsApp (+91-9521186150)</span>
              </a>

              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs hover:text-white hover:bg-slate-850 transition-colors cursor-pointer"
                title="Copy article link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied URL!' : 'Share'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Creative Article Lead Box / Hero Graphic Section */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-10 mb-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest block">
              Executive Summary & Strategy Statement
            </span>
            <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed italic">
              "{blog.excerpt}"
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {blog.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800 text-xs font-mono"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Prose Article Content with Semantic HTML & Headings */}
        <div className="space-y-6 text-slate-300 text-base leading-relaxed">
          {blog.content.map((paragraph, pIdx) => {
            // Check if paragraph is an H2 heading
            if (paragraph.startsWith('## ')) {
              const headingText = paragraph.replace('## ', '');
              const isStep = headingText.toLowerCase().startsWith('step ');
              return (
                <div key={pIdx} className="pt-8 pb-2 border-b border-slate-900">
                  {isStep && (
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-900/40 mb-2 inline-block">
                      Structured Framework
                    </span>
                  )}
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span className="text-blue-400">#</span>
                    <span>{headingText}</span>
                  </h2>
                </div>
              );
            }

            // Check if paragraph is a 9-step bulletproof process
            if (paragraph.includes('Look UDMIDEAS Digital Marketing Agency New York bulletproof process to win on Organic SEO:')) {
              const steps = [
                '1. Website SEO Audit',
                '2. Keyword research',
                '3. On-page optimization',
                '4. Meta Tags creation',
                '5. Making Website to Follow all the Google rules which are more than 500',
                '6. Optimizing Website Content, making it unique and plagiarism free',
                '7. Making web content to include AI',
                '8. Link Building',
                '9. Lead generation'
              ];
              return (
                <div key={pIdx} className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-4">
                  <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    Our 9-Step Bulletproof Organic SEO Process
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Look UDMIDEAS Digital Marketing Agency New York bulletproof process to win on Organic SEO:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {steps.map((st, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950 border border-slate-850">
                        <span className="w-6 h-6 rounded-md bg-blue-600/20 text-blue-400 text-xs font-bold font-mono flex items-center justify-center shrink-0 border border-blue-500/30">
                          {sIdx + 1}
                        </span>
                        <span className="text-xs text-slate-200 font-medium">{st.replace(/^\d+\.\s*/, '')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            // Check if paragraph is a table placeholder
            if (paragraph.startsWith('[TABLE:')) {
              const tableName = paragraph.replace('[TABLE:', '').replace(']', '').trim();
              const matchedTable = blog.tables?.find((t) => t.title.toLowerCase() === tableName.toLowerCase()) || blog.tables?.[0];
              if (matchedTable) {
                return (
                  <div key={pIdx} className="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl">
                    <div className="px-6 py-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                        <h3 className="text-sm sm:text-base font-bold text-white font-mono tracking-tight">
                          {matchedTable.title}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/40 px-2 py-0.5 rounded">
                        Transparent Pricing & Data
                      </span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-950/60 border-b border-slate-800 text-slate-400 font-mono uppercase text-[11px] tracking-wider">
                            {matchedTable.headers.map((h, hIdx) => (
                              <th key={hIdx} className="py-3.5 px-5 font-semibold">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-850">
                          {matchedTable.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-850/50 transition-colors">
                              {row.map((cell, cIdx) => {
                                const isPrice = cell.includes('$') || cell.toLowerCase().includes('quoted');
                                const isGrowth = cell.includes('%') || cell.includes('x') || cell.includes('+');
                                return (
                                  <td key={cIdx} className="py-3.5 px-5 text-slate-200">
                                    {isPrice ? (
                                      <span className="font-mono font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2.5 py-1 rounded-md text-xs">
                                        {cell}
                                      </span>
                                    ) : isGrowth ? (
                                      <span className="font-mono font-bold text-blue-400 bg-blue-950/50 border border-blue-800/40 px-2.5 py-1 rounded-md text-xs">
                                        {cell}
                                      </span>
                                    ) : (
                                      <span>{cell}</span>
                                    )}
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              }
            }

            // Check if paragraph is an FAQ placeholder
            if (paragraph.startsWith('[FAQS:')) {
              if (blog.faqs && blog.faqs.length > 0) {
                return (
                  <div key={pIdx} className="my-8 space-y-4">
                    <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs text-blue-300 font-mono flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-400" />
                      AEO Direct-Answer Knowledge Hub · {blog.title.split('|')[0].trim()}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {blog.faqs.map((faq, fIdx) => (
                        <div key={fIdx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
                          <h4 className="text-base font-bold text-white flex items-start gap-2.5">
                            <span className="text-emerald-400 font-mono text-sm font-bold bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-900/40 shrink-0">
                              Q{fIdx + 1}
                            </span>
                            <span>{faq.question}</span>
                          </h4>
                          <p className="text-sm text-slate-300 pl-8 leading-relaxed border-l-2 border-emerald-500/40 ml-2">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
            }

            // Check if paragraph is NY_REGIONS_BLOCKS
            if (paragraph === '[NY_REGIONS_BLOCKS]') {
              const allRegions = blog.regionBlocks || NEW_YORK_REGIONS;
              const filteredRegions = regionSearch.trim()
                ? allRegions.filter(r => r.toLowerCase().includes(regionSearch.toLowerCase()))
                : allRegions;

              // Check if region has an active dedicated url
              const getRegionLink = (name: string): { href: string; isLive: boolean } => {
                const lower = name.toLowerCase();
                if (lower === 'empire state building' || lower === 'empire state') return { href: '/empire-state/', isLive: true };
                if (lower === 'statue of liberty' || lower === 'statue of liberty area') return { href: '/statue-of-liberty-area/', isLive: true };
                if (lower === 'central park') return { href: '/central-park/', isLive: true };
                if (lower === 'times square') return { href: '/times-square/', isLive: true };
                if (lower === "hell's kitchen" || lower === 'hells kitchen' || lower === 'clinton') return { href: '/hells-kitchen/', isLive: true };
                if (lower === 'manhattan') return { href: '/manhattan/', isLive: true };
                if (lower === 'new york' || lower === 'nyc') return { href: '/new-york/', isLive: true };
                if (lower === 'brooklyn') return { href: '/brooklyn/', isLive: true };
                if (lower === 'the bronx') return { href: '/bronx/', isLive: true };
                if (lower === 'albany') return { href: '/albany/', isLive: true };
                if (lower === 'buffalo') return { href: '/buffalo/', isLive: true };
                if (lower === 'kingston') return { href: '/kingston/', isLive: true };
                if (lower === 'mount vernon') return { href: '/mount-vernon/', isLive: true };
                if (lower === 'new rochelle') return { href: '/new-rochelle/', isLive: true };
                if (lower === 'queens') return { href: '/queens/', isLive: true };
                if (lower === 'rochester') return { href: '/rochester/', isLive: true };
                if (lower === 'schenectady') return { href: '/schenectady/', isLive: true };
                if (lower === 'staten island') return { href: '/staten-island/', isLive: true };
                if (lower === 'syracuse') return { href: '/syracuse/', isLive: true };
                if (lower === 'troy') return { href: '/troy/', isLive: true };
                if (lower === 'utica') return { href: '/utica/', isLive: true };
                if (lower === 'watertown') return { href: '/watertown/', isLive: true };
                if (lower === 'yonkers') return { href: '/yonkers/', isLive: true };
                return {
                  href: `https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20remote%20SEO%20consulting%20for%20my%20business%20in%20${encodeURIComponent(name)},%20New%20York.`,
                  isLive: false
                };
              };

              return (
                <div key={pIdx} className="my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-2xl space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                    <div>
                      <div className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-teal-400" />
                        <span>Statewide New York Regional Coverage · {allRegions.length} Regions</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                        Arun Is Available to Work for These New York Regions Remotely
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                        From Central Park and Midtown Manhattan across Long Island, Hudson Valley, Capital Region, and Western New York—Arun delivers 100% white hat remote SEO, AEO, and GEO consulting.
                      </p>
                    </div>

                    {/* Quick Search */}
                    <div className="relative min-w-[220px]">
                      <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search 90 NY regions..."
                        value={regionSearch}
                        onChange={(e) => setRegionSearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 font-mono"
                      />
                    </div>
                  </div>

                  {/* Regions Interactive Blocks Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 max-h-[500px] overflow-y-auto pr-1">
                    {filteredRegions.map((region, rIdx) => {
                      const { href, isLive } = getRegionLink(region);
                      return (
                        <a
                          key={rIdx}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-xl border text-xs transition-all flex flex-col justify-between group ${
                            isLive
                              ? 'bg-gradient-to-br from-teal-950/60 to-slate-900 border-teal-600/50 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-950/50'
                              : 'bg-slate-950/70 border-slate-850 hover:border-slate-700 hover:bg-slate-900'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1 mb-1.5">
                            <span className="flex items-center gap-1 font-semibold text-slate-200 group-hover:text-white truncate">
                              <MapPin className={`w-3 h-3 shrink-0 ${isLive ? 'text-teal-400' : 'text-slate-500 group-hover:text-teal-400'}`} />
                              <span className="truncate">{region}</span>
                            </span>
                            {isLive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shrink-0"></span>
                            )}
                          </div>
                          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-900">
                            <span className={isLive ? 'text-teal-300 font-medium' : 'text-slate-400'}>
                              {isLive ? 'Dedicated Page' : 'Remote SEO'}
                            </span>
                            <ExternalLink className="w-2.5 h-2.5 opacity-50 group-hover:opacity-100 group-hover:text-teal-400" />
                          </div>
                        </a>
                      );
                    })}
                  </div>

                  {filteredRegions.length === 0 && (
                    <div className="text-center py-6 text-xs text-slate-500 font-mono">
                      No New York region matched "{regionSearch}". Clear filter to see all 90 regions.
                    </div>
                  )}

                  {/* Consultation Footnote */}
                  <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span>Arun works with clients across every NY county and borough directly.</span>
                    </div>
                    <a
                      href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20discuss%20remote%20SEO%20services%20for%20my%20business%20in%20New%20York."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline font-semibold font-mono inline-flex items-center gap-1"
                    >
                      <span>Inquire on WhatsApp (+91-9521186150)</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            }

            // Check if paragraph is LATAM_REGIONS_BLOCKS
            if (paragraph === '[LATAM_REGIONS_BLOCKS]') {
              const allRegions = blog.regionBlocks || LATAM_EXPANSION_REGIONS;
              const filteredRegions = regionSearch.trim()
                ? allRegions.filter(r => r.toLowerCase().includes(regionSearch.toLowerCase()))
                : allRegions;

              const getLatamLink = (name: string): { href: string; isLive: boolean } => {
                const lower = name.toLowerCase();
                if (lower === 'latam' || lower === 'latin america') return { href: '/latam/', isLive: true };
                return {
                  href: `https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20inquiring%20about%20Spanish%20SEO%20and%20market%20expansion%20for%20my%20business%20in%20${encodeURIComponent(name)}.`,
                  isLive: false
                };
              };

              return (
                <div key={pIdx} className="my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-2xl space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                    <div>
                      <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                        <Globe className="w-4 h-4 text-amber-400" />
                        <span>Latin America & Spanish-Speaking Coverage · {allRegions.length} Markets</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                        Arun Is Available for These Latin American & Spanish-Speaking Regions
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                        From Mexico, Colombia, and Argentina to Chile, Costa Rica, Panama, and the US Spanish-speaking market—Arun builds localized multilingual SEO, AEO, and GEO authority.
                      </p>
                    </div>

                    {/* Quick Search */}
                    <div className="relative min-w-[220px]">
                      <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search LATAM regions..."
                        value={regionSearch}
                        onChange={(e) => setRegionSearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 font-mono"
                      />
                    </div>
                  </div>

                  {/* Regions Interactive Blocks Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 max-h-[500px] overflow-y-auto pr-1">
                    {filteredRegions.map((region, rIdx) => {
                      const { href, isLive } = getLatamLink(region);
                      return (
                        <a
                          key={rIdx}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-xl border text-xs transition-all flex flex-col justify-between group ${
                            isLive
                              ? 'bg-gradient-to-br from-amber-950/60 to-slate-900 border-amber-600/50 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-950/50'
                              : 'bg-slate-950/70 border-slate-850 hover:border-slate-700 hover:bg-slate-900'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1 mb-1.5">
                            <span className="flex items-center gap-1 font-semibold text-slate-200 group-hover:text-white truncate">
                              <Globe className={`w-3 h-3 shrink-0 ${isLive ? 'text-amber-400' : 'text-slate-500 group-hover:text-amber-400'}`} />
                              <span className="truncate">{region}</span>
                            </span>
                            {isLive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
                            )}
                          </div>
                          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-900">
                            <span className={isLive ? 'text-amber-300 font-medium' : 'text-slate-400'}>
                              {isLive ? 'Dedicated Hub' : 'Spanish SEO'}
                            </span>
                            <ExternalLink className="w-2.5 h-2.5 opacity-50 group-hover:opacity-100 group-hover:text-amber-400" />
                          </div>
                        </a>
                      );
                    })}
                  </div>

                  {filteredRegions.length === 0 && (
                    <div className="text-center py-6 text-xs text-slate-500 font-mono">
                      No region matched "{regionSearch}". Clear filter to see all {allRegions.length} markets.
                    </div>
                  )}

                  {/* Consultation Footnote */}
                  <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      <span>Arun works with US businesses scaling across every Spanish-speaking market directly.</span>
                    </div>
                    <a
                      href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20discuss%20Spanish%20SEO%20and%20LATAM%20market%20expansion%20for%20my%20business."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:underline font-semibold font-mono inline-flex items-center gap-1"
                    >
                      <span>Inquire on WhatsApp (+91-9521186150)</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            }

            // Check if paragraph is a bullet list item
            if (paragraph.startsWith('• ')) {
              const raw = paragraph.replace('• ', '');
              const colonIdx = raw.indexOf(':');
              const titlePart = colonIdx > -1 ? raw.slice(0, colonIdx) : '';
              const descPart = colonIdx > -1 ? raw.slice(colonIdx + 1).trim() : raw;

              return (
                <div key={pIdx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition-colors">
                  <div className="w-6 h-6 rounded-md bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30 font-mono text-xs font-bold mt-0.5">
                    ✓
                  </div>
                  <div>
                    {titlePart ? (
                      <>
                        <strong className="text-white text-sm font-semibold">{titlePart}:</strong>{' '}
                        <span className="text-slate-300 text-sm leading-relaxed">{descPart}</span>
                      </>
                    ) : (
                      <span className="text-slate-300 text-sm leading-relaxed">{descPart}</span>
                    )}
                  </div>
                </div>
              );
            }

            // Check if paragraph is a numbered review or list item
            if (/^\d+\.\s+/.test(paragraph)) {
              return (
                <div key={pIdx} className="my-2.5 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-200 flex items-start gap-3 hover:border-slate-700 transition-colors">
                  <span className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30 font-mono text-xs font-bold mt-0.5">
                    ★
                  </span>
                  <div className="leading-relaxed text-slate-300">
                    {paragraph}
                  </div>
                </div>
              );
            }

            return (
              <p key={pIdx} className="leading-relaxed text-slate-300">
                {paragraph}
              </p>
            );
          })}

          {/* AEO (Answer Engine Optimization) & GEO (Generative Engine Optimization) Highlight Box */}
          <div className="my-10 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              AEO & GEO Compliance Signals (Answer & Generative Engine Rules)
            </div>
            <h3 className="text-lg font-bold text-white">
              Why UDMIDEAS Organic White Hat SEO Wins Across Google & Generative AI:
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 font-bold font-mono">01.</span>
                <span>
                  <strong>Algorithm-Proof Longevity:</strong> By following all 500+ Google rules and regulations strictly through White Hat SEO, algorithm updates (Core, Helpful Content, Spam) actually boost your rankings rather than penalize you.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 font-bold font-mono">02.</span>
                <span>
                  <strong>AEO Voice Search Position Zero:</strong> We optimize conversational answer blocks, schema graphs, and direct definitions so voice assistants (Siri, Google Assistant) pick your brand as the definitive source.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 font-bold font-mono">03.</span>
                <span>
                  <strong>GEO (Generative Engine Optimization):</strong> Entity knowledge graphs, citations in authoritative directories, and verified factual claims ensure that ChatGPT, Perplexity, and Gemini cite UDMIDEAS and your business in AI search summaries.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 font-bold font-mono">04.</span>
                <span>
                  <strong>Tangible Inbound Leads:</strong> Link building through active forums, local listings, and high-relevance guest posts brings direct human referral traffic and verified prospective buyers.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Dedicated Organic SEO Quote & Consultation Form Targeting soni9999arun9999@gmail.com */}
        <section id="quote-form" className="mt-14 mb-16 p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Direct Email Delivery to soni9999arun9999@gmail.com
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Request a Quote for Organic SEO Services.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              We at UDMIDEAS NYC Digital Marketing Agency take your business to the next level. Fill out this form to connect with Founder Arun at <strong className="text-emerald-400 font-mono">soni9999arun9999@gmail.com</strong> or call/text directly at <strong className="text-emerald-400 font-mono">+91-9521186150</strong>.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-4 animate-in fade-in">
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Inquiry Dispatched to soni9999arun9999@gmail.com!</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your Organic SEO audit request has been sent to Founder Arun's primary inbox. We will review your website and reply within 4 business hours.
              </p>
              <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919521186150?text=Hello%20Arun,%20I%20just%20submitted%20an%20Organic%20SEO%20quote%20request%20under%20the%20name%20${encodeURIComponent(formData.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Follow Up on WhatsApp (+91-9521186150)</span>
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 text-xs cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Business Email *
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
                    Website URL to Audit
                  </label>
                  <input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Target Keywords, Industry & Organic Goals
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your industry, current rankings, and target keywords for Organic SEO..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[11px] text-slate-400">
                  🔒 Direct routing to <span className="text-emerald-400 font-mono">soni9999arun9999@gmail.com</span> · Strict NDA protected.
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Organic SEO Quote</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </section>

        {/* Author Bio Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 p-[2px] shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-xl font-bold text-white font-mono">
              AR
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h4 className="text-base font-bold text-white">Written by {blog.author}</h4>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/40">
                15+ Yrs Industry Lead
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Arun leads UDMIDEAS NYC Digital Marketing Agency from New York, NY 10001 (350 5th Ave). With 15+ years of digital marketing and custom engineering experience, Arun specializes in White Hat Organic SEO, AEO, GEO, and high-performance international acquisition.
            </p>
          </div>
        </div>

        {/* Strategic Internal Links Directory (Opening in New Tab) */}
        <section className="mt-14 pt-10 border-t border-slate-900">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                Internal Links Directory
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                Explore Related Web Design & Digital Marketing Solutions
              </h3>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline font-mono">Opens in new tab</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
            {internalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
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

        {/* Related Articles Carousel / Grid */}
        <div className="mt-14 pt-10 border-t border-slate-900">
          <h3 className="text-xl font-bold text-white mb-6">
            Continue Reading Knowledge Base
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedBlogs.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  onSelectBlog(rel);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] text-blue-400 font-medium mb-1">
                    {rel.category} · {rel.readTime}
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="text-xs text-slate-400 group-hover:text-white flex items-center gap-1 font-semibold">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
