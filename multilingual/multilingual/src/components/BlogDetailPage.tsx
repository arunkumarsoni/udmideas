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
  MapPin,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { BLOG_POSTS, NEW_YORK_REGIONS, LATAM_EXPANSION_REGIONS } from '../data/contentData';
import { BlogPost } from '../types';
import { ConsultationForm } from './ConsultationForm';

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
  const [regionSearch, setRegionSearch] = useState('');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

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

  const DISCUSSION_IMAGES = [
    {
      id: 1,
      src: '/assets/aistudio/1_b21cfd16.jpg',
      part: 'Part 01',
      title: 'Adrian Alexa Post & Initial Discussion on Comment Spam',
      desc: 'Adrian shares automated comment spam screenshots. Arun responds: "Well it is the worst manual work, but there are professionals who provide excellent blog comments..."'
    },
    {
      id: 2,
      src: '/assets/aistudio/2_62a84de5.jpg',
      part: 'Part 02',
      title: 'Evaluating Metrics: DA, PA, Alexa Rank & Relevancy',
      desc: 'Arun outlines the technical factors analyzed before placing a manual blog comment: DA, PA, Alexa Rank, Relevancy, Unique informative content, and link count.'
    },
    {
      id: 3,
      src: '/assets/aistudio/3_632f904e.jpg',
      part: 'Part 03',
      title: 'Small Business Budgets ($100/mo) vs $200 Editorial Links',
      desc: 'Arun defends small business owners with $100 monthly budgets who cannot afford $200+ per post for high-end publications like Huffington Post.'
    },
    {
      id: 4,
      src: '/assets/aistudio/4_472dee0b.jpg',
      part: 'Part 04',
      title: 'Old Is Gold — Manual Quality Commenting Is Evergreen',
      desc: 'Arun emphasizes: "OLD is GOLD My dear. Blog Comment is Not a SPAM If Done in Quality Manner" and connects with webmasters seeking genuine engagement.'
    },
    {
      id: 5,
      src: '/assets/aistudio/5_eb1a0e75.jpg',
      part: 'Part 05',
      title: 'The Debate on Long-Term Strategy & Natural Links',
      desc: 'Adrian argues blog comments are useless for high-level SEO. Arun stands firm on client satisfaction, natural link profiles, and high manual diligence.'
    },
    {
      id: 6,
      src: '/assets/aistudio/6_fcffc901.jpg',
      part: 'Part 06',
      title: 'Digital Marketing Scope & White Hat Strategy',
      desc: 'Arun explains: "Digital Marketing is very Broad... Every SEO professional always goes with complete White Hat SEO Organic Strategy. We are in a new age of SEO."'
    },
    {
      id: 7,
      src: '/assets/aistudio/7_a4d0e296.jpg',
      part: 'Part 07',
      title: 'Unsolicited Spam vs Real Human Conversation',
      desc: 'Adrian defines spam as anything unsolicited. Arun clarifies that genuine knowledge-sharing, relevant insights, and natural participation are valuable contributions.'
    },
    {
      id: 8,
      src: '/assets/aistudio/8_21195f56.jpg',
      part: 'Part 08',
      title: 'Global Marketplace Demand on Upwork for .EDU & .GOV',
      desc: 'Arun highlights real-world demand: "Look at Upwork website where hundreds of business professionals look for edu blog comments and GOV blog comments..."'
    },
    {
      id: 9,
      src: '/assets/aistudio/9_4cada4a3.jpg',
      part: 'Part 09',
      title: 'The Verdict: "Will Blog Commenting Die in 2 Years?" / "Is SEO Dead?"',
      desc: 'Adrian predicts clients will vanish in 2 years. Arun counters: "There are so many professionals who always post SEO is DEAD... Blog commenting is part of SEO strategy and it is TRUE."'
    }
  ];

  const renderFormattedText = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: (string | React.ReactNode)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      const label = match[1];
      const href = match[2];
      parts.push(
        <a
          key={match.index}
          href={href}
          className="text-[#1D4ED8] hover:text-[#1E40AF] underline font-medium transition-colors"
        >
          {label}
        </a>
      );
      lastIndex = linkRegex.lastIndex;
    }
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  return (
    <article className="pt-28 pb-24 min-h-screen bg-[#F8FAFC] text-[#475569] text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-between gap-3 pb-6 mb-8 border-b border-[#E2E8F0] text-xs">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[#475569] hover:text-[#0F172A] hover:border-[#1D4ED8]/40 transition-all py-1.5 px-3 rounded-lg bg-white border border-[#E2E8F0] shadow-xs cursor-pointer font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Blogs</span>
          </button>

          <div className="flex items-center gap-2 text-[#64748B] flex-wrap">
            <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1D4ED8] transition-colors">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1D4ED8] transition-colors">Blog</a>
            <span aria-hidden="true">/</span>
            <span className="text-[#1D4ED8] font-semibold truncate max-w-[200px]">{blog.category}</span>
          </div>
        </nav>

        {/* Article Header */}
        <header className="mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B]">
            <span className="text-[#1D4ED8] font-semibold bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
              {blog.category}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 font-mono">
              <Clock className="w-3 h-3 text-[#64748B]" />
              {blog.readTime}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#64748B]" />
              {blog.date}
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-700 font-mono text-[11px] font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              100% White Hat Organic SEO
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-[-0.02em] leading-[1.15] text-balance">
            {blog.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-[#E2E8F0]">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#0F172A] flex items-center justify-center font-bold text-xs text-white font-mono border border-[#E2E8F0] shrink-0">
                {blog.author.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="text-xs font-bold text-[#0F172A]">{blog.author}</div>
                <div className="text-[11px] text-[#64748B]">
                  UDMIDEAS NYC Digital Marketing Agency · 350 5th Ave, New York, NY 10001
                </div>
              </div>
            </div>

            {/* Sharing Bar */}
            <div className="flex items-center gap-2 flex-wrap">
              <a
                href={`https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20reading%20your%20article%20on%20${encodeURIComponent(blog.title)}%20and%20would%20like%20to%20discuss%20Organic%20SEO.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold text-xs hover:bg-emerald-100 transition-colors"
                title="Discuss this blog with Arun on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Discuss on WhatsApp (+91-9521186150)</span>
              </a>

              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] text-[#475569] text-xs font-medium hover:text-[#0F172A] hover:border-[#1D4ED8]/40 transition-colors cursor-pointer"
                title="Copy article link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied URL!' : 'Share'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Executive Summary Contrast Banner */}
        <div className="relative rounded-2xl bg-[#0F172A] border border-slate-800 p-8 sm:p-10 mb-12 shadow-lg overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-mono font-semibold text-[#F59E0B] uppercase tracking-[0.08em] block">
              – Executive Summary & Strategy Statement
            </span>
            <p className="text-lg sm:text-xl text-white font-medium leading-relaxed italic">
              "{blog.excerpt}"
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {blog.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-200 border border-slate-700 text-xs font-mono"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Prose Article Content with Semantic HTML & Headings */}
        <div className="space-y-6 text-[#475569] text-base leading-[1.7]">
          {blog.content.map((paragraph, pIdx) => {
            // Check if paragraph is an H2 heading
            if (paragraph.startsWith('## ')) {
              const headingText = paragraph.replace('## ', '');
              const isStep = headingText.toLowerCase().startsWith('step ');
              return (
                <div key={pIdx} className="pt-8 pb-2 border-b border-[#E2E8F0]">
                  {isStep && (
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.08em] text-[#1D4ED8] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 mb-2 inline-block">
                      Structured Framework
                    </span>
                  )}
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight flex items-center gap-2.5">
                    <span className="text-[#1D4ED8] font-extrabold">#</span>
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
                <div key={pIdx} className="my-8 p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-4">
                  <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#1D4ED8]" />
                    Our 9-Step Bulletproof Organic SEO Process
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A]">
                    Look UDMIDEAS Digital Marketing Agency New York bulletproof process to win on Organic SEO:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {steps.map((st, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                        <span className="w-6 h-6 rounded-md bg-blue-50 text-[#1D4ED8] text-xs font-bold font-mono flex items-center justify-center shrink-0 border border-blue-200">
                          {sIdx + 1}
                        </span>
                        <span className="text-xs text-[#0F172A] font-medium leading-relaxed">{st.replace(/^\d+\.\s*/, '')}</span>
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
                  <div key={pIdx} className="my-8 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
                    <div className="px-6 py-4 bg-[#0F172A] border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span>
                        <h3 className="text-sm sm:text-base font-bold text-white font-mono tracking-tight">
                          {matchedTable.title}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-amber-300 bg-amber-500/15 border border-amber-400/30 px-2.5 py-0.5 rounded-md">
                        Transparent Pricing & Data
                      </span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#0F172A] font-mono uppercase text-[11px] tracking-wider">
                            {matchedTable.headers.map((h, hIdx) => (
                              <th key={hIdx} className="py-3.5 px-5 font-semibold">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E2E8F0]">
                          {matchedTable.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-[#F8FAFC] transition-colors">
                              {row.map((cell, cIdx) => {
                                const isPrice = cell.includes('$') || cell.toLowerCase().includes('quoted');
                                const isGrowth = cell.includes('%') || cell.includes('x') || cell.includes('+');
                                return (
                                  <td key={cIdx} className="py-3.5 px-5 text-[#475569]">
                                    {isPrice ? (
                                      <span className="font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md text-xs">
                                        {cell}
                                      </span>
                                    ) : isGrowth ? (
                                      <span className="font-mono font-bold text-[#1D4ED8] bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md text-xs">
                                        {cell}
                                      </span>
                                    ) : (
                                      <span className={cIdx === 0 ? 'font-semibold text-[#0F172A]' : ''}>{cell}</span>
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
                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-[#1D4ED8] font-mono font-semibold flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                      <span>AEO Direct-Answer Knowledge Hub · {blog.title.split('|')[0].trim()}</span>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {blog.faqs.map((faq, fIdx) => (
                        <div key={fIdx} className="p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-blue-600/30 hover:shadow-md transition-all space-y-3">
                          <h4 className="text-base font-bold text-[#0F172A] flex items-start gap-2.5">
                            <span className="text-[#1D4ED8] font-mono text-xs font-bold bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200 shrink-0 mt-0.5">
                              Q{fIdx + 1}
                            </span>
                            <span>{faq.question}</span>
                          </h4>
                          <p className="text-sm text-[#475569] pl-6 leading-relaxed border-l-2 border-[#1D4ED8]/30 ml-2">
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
                <div key={pIdx} className="my-10 p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
                    <div>
                      <div className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-[0.08em] flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#1D4ED8]" />
                        <span>Statewide New York Regional Coverage · {allRegions.length} Regions</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mt-1">
                        Arun Is Available to Work for These New York Regions Remotely
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] mt-1 max-w-2xl leading-relaxed">
                        From Central Park and Midtown Manhattan across Long Island, Hudson Valley, Capital Region, and Western New York—Arun delivers 100% white hat remote SEO, AEO, and GEO consulting.
                      </p>
                    </div>

                    {/* Quick Search */}
                    <div className="relative min-w-[220px]">
                      <Search className="w-3.5 h-3.5 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search 90 NY regions..."
                        value={regionSearch}
                        onChange={(e) => setRegionSearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#1D4ED8] font-mono"
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
                              ? 'bg-blue-50/70 border-blue-200 hover:border-[#1D4ED8] hover:shadow-md'
                              : 'bg-[#F8FAFC] border-[#E2E8F0] hover:border-blue-600/30 hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1 mb-1.5">
                            <span className="flex items-center gap-1 font-semibold text-[#0F172A] group-hover:text-[#1D4ED8] truncate">
                              <MapPin className={`w-3 h-3 shrink-0 ${isLive ? 'text-[#1D4ED8]' : 'text-[#64748B] group-hover:text-[#1D4ED8]'}`} />
                              <span className="truncate">{region}</span>
                            </span>
                            {isLive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] animate-pulse shrink-0"></span>
                            )}
                          </div>
                          <div className="flex items-center justify-between text-[10px] text-[#64748B] pt-1 border-t border-[#E2E8F0]">
                            <span className={isLive ? 'text-[#1D4ED8] font-semibold' : 'text-[#64748B]'}>
                              {isLive ? 'Dedicated Page' : 'Remote SEO'}
                            </span>
                            <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 group-hover:text-[#1D4ED8]" />
                          </div>
                        </a>
                      );
                    })}
                  </div>

                  {filteredRegions.length === 0 && (
                    <div className="text-center py-6 text-xs text-[#64748B] font-mono">
                      No New York region matched "{regionSearch}". Clear filter to see all 90 regions.
                    </div>
                  )}

                  {/* Consultation Footnote */}
                  <div className="pt-3 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#475569]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Arun works with clients across every NY county and borough directly.</span>
                    </div>
                    <a
                      href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20discuss%20remote%20SEO%20services%20for%20my%20business%20in%20New%20York."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:underline font-semibold font-mono inline-flex items-center gap-1"
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
                <div key={pIdx} className="my-10 p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
                    <div>
                      <div className="text-xs font-mono font-bold text-amber-700 uppercase tracking-[0.08em] flex items-center gap-2">
                        <Globe className="w-4 h-4 text-[#F59E0B]" />
                        <span>Latin America & Spanish-Speaking Coverage · {allRegions.length} Markets</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mt-1">
                        Arun Is Available for These Latin American & Spanish-Speaking Regions
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] mt-1 max-w-2xl leading-relaxed">
                        From Mexico, Colombia, and Argentina to Chile, Costa Rica, Panama, and the US Spanish-speaking market—Arun builds localized multilingual SEO, AEO, and GEO authority.
                      </p>
                    </div>

                    {/* Quick Search */}
                    <div className="relative min-w-[220px]">
                      <Search className="w-3.5 h-3.5 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search LATAM regions..."
                        value={regionSearch}
                        onChange={(e) => setRegionSearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#1D4ED8] font-mono"
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
                              ? 'bg-amber-50 border-amber-200 hover:border-amber-400 hover:shadow-md'
                              : 'bg-[#F8FAFC] border-[#E2E8F0] hover:border-blue-600/30 hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1 mb-1.5">
                            <span className="flex items-center gap-1 font-semibold text-[#0F172A] group-hover:text-[#1D4ED8] truncate">
                              <Globe className={`w-3 h-3 shrink-0 ${isLive ? 'text-amber-600' : 'text-[#64748B] group-hover:text-[#1D4ED8]'}`} />
                              <span className="truncate">{region}</span>
                            </span>
                            {isLive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
                            )}
                          </div>
                          <div className="flex items-center justify-between text-[10px] text-[#64748B] pt-1 border-t border-[#E2E8F0]">
                            <span className={isLive ? 'text-amber-700 font-semibold' : 'text-[#64748B]'}>
                              {isLive ? 'Dedicated Hub' : 'Spanish SEO'}
                            </span>
                            <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 group-hover:text-[#1D4ED8]" />
                          </div>
                        </a>
                      );
                    })}
                  </div>

                  {filteredRegions.length === 0 && (
                    <div className="text-center py-6 text-xs text-[#64748B] font-mono">
                      No region matched "{regionSearch}". Clear filter to see all {allRegions.length} markets.
                    </div>
                  )}

                  {/* Consultation Footnote */}
                  <div className="pt-3 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#475569]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
                      <span>Arun works with US businesses scaling across every Spanish-speaking market directly.</span>
                    </div>
                    <a
                      href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20discuss%20Spanish%20SEO%20and%20LATAM%20market%20expansion%20for%20my%20business."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1D4ED8] hover:underline font-semibold font-mono inline-flex items-center gap-1"
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
                <div key={pIdx} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E2E8F0] hover:border-blue-600/30 transition-colors">
                  <div className="w-6 h-6 rounded-md bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 border border-blue-200 font-mono text-xs font-bold mt-0.5">
                    ✓
                  </div>
                  <div>
                    {titlePart ? (
                      <>
                        <strong className="text-[#0F172A] text-sm font-semibold">{titlePart}:</strong>{' '}
                        <span className="text-[#475569] text-sm leading-relaxed">{renderFormattedText(descPart)}</span>
                      </>
                    ) : (
                      <span className="text-[#475569] text-sm leading-relaxed">{renderFormattedText(descPart)}</span>
                    )}
                  </div>
                </div>
              );
            }

            // Check if paragraph is a numbered review or list item
            if (/^\d+\.\s+/.test(paragraph)) {
              return (
                <div key={pIdx} className="my-2.5 p-4 rounded-xl bg-white border border-[#E2E8F0] text-sm text-[#475569] flex items-start gap-3 hover:border-blue-600/30 transition-colors">
                  <span className="w-6 h-6 rounded-md bg-amber-50 text-[#F59E0B] flex items-center justify-center shrink-0 border border-amber-200 font-mono text-xs font-bold mt-0.5">
                    ★
                  </span>
                  <div className="leading-relaxed text-[#475569]">
                    {renderFormattedText(paragraph)}
                  </div>
                </div>
              );
            }

            // Check if paragraph is the discussion images archive
            if (
              paragraph.startsWith('BLOG COMMENT LATEST UPDATE - WHAT DO YOU SAY?') ||
              paragraph === '[DISCUSSION_IMAGES_ARCHIVE]'
            ) {
              return (
                <div key={pIdx} className="my-10 p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-6">
                  <div className="pb-4 border-b border-[#E2E8F0]">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-semibold mb-3">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Historic Debate Archive · Adrian Alexa vs. Arun Kumar Soni (UDMIDEAS)</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                      BLOG COMMENT LATEST UPDATE - WHAT DO YOU SAY? -- Here is the complete discussion - read the images - discussion...
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                      Original unedited screenshots from the public discussion between SEO practitioner Adrian Alexa and Arun Kumar Soni (Founder, UDMIDEAS) debating whether blog commenting is spam, how small businesses utilize link building, and whether SEO is dead. Click any screenshot below to inspect and read full size:
                    </p>
                  </div>

                  {/* 9 Screenshots Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
                    {DISCUSSION_IMAGES.map((img, idx) => (
                      <div
                        key={img.id}
                        onClick={() => setActiveImageIndex(idx)}
                        className="group relative cursor-pointer rounded-2xl bg-white border border-[#E2E8F0] hover:border-blue-600/40 hover:-translate-y-1 hover:shadow-lg overflow-hidden transition-all duration-300 flex flex-col justify-between"
                      >
                        <div className="p-3 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between text-xs">
                          <span className="font-mono font-bold text-[#1D4ED8] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 text-[11px]">
                            {img.part}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px] text-[#64748B] group-hover:text-[#1D4ED8] transition-colors font-medium">
                            <ZoomIn className="w-3.5 h-3.5" />
                            <span>Click to Zoom</span>
                          </span>
                        </div>

                        <div className="relative aspect-[3/4] bg-[#F8FAFC] overflow-hidden">
                          <img
                            src={img.src}
                            alt={`${img.part}: ${img.title}`}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>

                        <div className="p-3.5 bg-white border-t border-[#E2E8F0] space-y-1">
                          <div className="text-xs font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors leading-snug">
                            {img.title}
                          </div>
                          <p className="text-[11px] text-[#64748B] leading-relaxed line-clamp-2">
                            {img.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs text-[#475569]">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>9 Original Debate Screenshots Documented & Preserved</span>
                    </span>
                    <span className="font-mono font-semibold text-[#1D4ED8] text-[11px]">UDMIDEAS Archive</span>
                  </div>
                </div>
              );
            }

            return (
              <p key={pIdx} className="leading-[1.7] text-[#475569]">
                {renderFormattedText(paragraph)}
              </p>
            );
          })}

          {/* AEO (Answer Engine Optimization) & GEO (Generative Engine Optimization) Highlight Box */}
          <div className="my-10 p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-[0.08em]">
              <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
              AEO & GEO Compliance Signals (Answer & Generative Engine Rules)
            </div>
            <h3 className="text-lg font-bold text-[#0F172A]">
              Why UDMIDEAS Organic White Hat SEO Wins Across Google & Generative AI:
            </h3>
            <ul className="space-y-3 text-sm text-[#475569]">
              <li className="flex items-start gap-2.5">
                <span className="text-[#1D4ED8] font-bold font-mono">01.</span>
                <span>
                  <strong className="text-[#0F172A]">Algorithm-Proof Longevity:</strong> By following all 500+ Google rules and regulations strictly through White Hat SEO, algorithm updates (Core, Helpful Content, Spam) actually boost your rankings rather than penalize you.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#1D4ED8] font-bold font-mono">02.</span>
                <span>
                  <strong className="text-[#0F172A]">AEO Voice Search Position Zero:</strong> We optimize conversational answer blocks, schema graphs, and direct definitions so voice assistants (Siri, Google Assistant) pick your brand as the definitive source.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#1D4ED8] font-bold font-mono">03.</span>
                <span>
                  <strong className="text-[#0F172A]">GEO (Generative Engine Optimization):</strong> Entity knowledge graphs, citations in authoritative directories, and verified factual claims ensure that ChatGPT, Perplexity, and Gemini cite UDMIDEAS and your business in AI search summaries.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#1D4ED8] font-bold font-mono">04.</span>
                <span>
                  <strong className="text-[#0F172A]">Tangible Inbound Leads:</strong> Link building through active forums, local listings, and high-relevance guest posts brings direct human referral traffic and verified prospective buyers.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Standardized Consultation Form */}
        <section id="quote-form" className="mt-14 mb-16 p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xl max-w-3xl mx-auto">
          <ConsultationForm headingTag="h2" />
        </section>

        {/* Author Bio Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col sm:flex-row items-center gap-5">
          <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#E2E8F0] shrink-0 bg-[#F8FAFC]">
            <img
              src="/assets/aistudio/Arun_Kumar_soni_39359c64.png"
              alt="Arun — Founder, UDMIDEAS"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="text-base font-bold text-[#0F172A]">Written by {blog.author}</h4>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                15+ Yrs Industry Lead
              </span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Arun leads UDMIDEAS NYC Digital Marketing Agency from New York, NY 10001 (350 5th Ave). With 15+ years of digital marketing and custom engineering experience, Arun specializes in White Hat Organic SEO, AEO, GEO, and high-performance international acquisition.
            </p>
          </div>
        </div>

        {/* Related Articles Carousel / Grid */}
        <div className="mt-14 pt-10 border-t border-[#E2E8F0]">
          <h3 className="text-xl font-bold text-[#0F172A] mb-6">
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
                className="p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-blue-600/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] text-[#1D4ED8] font-semibold mb-1.5">
                    {rel.category} · {rel.readTime}
                  </div>
                  <h4 className="text-sm font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors mb-2 line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#475569] line-clamp-2 mb-4 leading-relaxed">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="text-xs text-[#1D4ED8] flex items-center gap-1 font-semibold">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Discussion Screenshots */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#0F172A]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImageIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] bg-white border border-[#E2E8F0] rounded-2xl p-4 sm:p-6 flex flex-col items-center shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-[#E2E8F0] text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-[#1D4ED8] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  {DISCUSSION_IMAGES[activeImageIndex].part} of 09
                </span>
                <span className="text-[#0F172A] font-bold truncate max-w-[200px] sm:max-w-md">
                  {DISCUSSION_IMAGES[activeImageIndex].title}
                </span>
              </div>
              <button
                onClick={() => setActiveImageIndex(null)}
                className="p-1.5 rounded-lg bg-[#F8FAFC] hover:bg-slate-200 text-[#475569] hover:text-[#0F172A] border border-[#E2E8F0] transition-colors cursor-pointer"
                title="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body with Zoomable Image */}
            <div className="relative w-full flex-1 overflow-auto flex items-center justify-center bg-[#F8FAFC] rounded-xl p-2 sm:p-4 border border-[#E2E8F0]">
              <img
                src={DISCUSSION_IMAGES[activeImageIndex].src}
                alt={DISCUSSION_IMAGES[activeImageIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-sm"
              />
            </div>

            {/* Modal Footer Controls */}
            <div className="w-full flex items-center justify-between pt-3 mt-3 border-t border-[#E2E8F0] text-xs text-[#475569]">
              <button
                disabled={activeImageIndex === 0}
                onClick={() => setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8FAFC] hover:bg-slate-200 border border-[#E2E8F0] text-[#0F172A] font-medium disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="text-[11px] font-mono text-[#64748B] text-center hidden sm:block">
                Click outside or press Close to return to article
              </div>

              <button
                disabled={activeImageIndex === DISCUSSION_IMAGES.length - 1}
                onClick={() => setActiveImageIndex((prev) => (prev !== null && prev < DISCUSSION_IMAGES.length - 1 ? prev + 1 : prev))}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-medium disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};
