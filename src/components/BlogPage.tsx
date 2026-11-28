import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';
import { BLOG_POSTS } from '../data/contentData';
import { BlogPost } from '../types';
import { ConsultationForm } from './ConsultationForm';

interface BlogPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
  onSelectBlog?: (blog: BlogPost) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onBackToHome,
  onOpenContact
}) => {
  const INITIAL_COUNT = 8;
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_COUNT);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const categories = [
    'All',
    'Custom Development',
    'Multilingual SEO',
    'AEO & GEO',
    'PPC & Growth',
    'eCommerce Architecture'
  ];

  const filteredBlogs = BLOG_POSTS.filter((post) => {
    const matchesCat =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const displayedBlogs = filteredBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < filteredBlogs.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#F8FAFC] text-[#475569]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back button */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E2E8F0] text-xs">
          <button
            onClick={() => {
              if (selectedArticle) {
                setSelectedArticle(null);
              } else {
                onBackToHome();
              }
            }}
            className="inline-flex items-center gap-2 text-[#475569] hover:text-[#0F172A] transition-colors py-2 px-3.5 rounded-lg bg-white border border-[#E2E8F0] font-semibold shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{selectedArticle ? 'Back to All Blogs' : 'Back to Home'}</span>
          </button>

          <div className="flex items-center gap-2 text-[#475569]">
            <span>UDMIDEAS Insights</span>
            <span aria-hidden="true">/</span>
            <span className="text-[#1D4ED8] font-semibold">
              {selectedArticle ? selectedArticle.category : 'Knowledge Base'}
            </span>
          </div>
        </div>

        {selectedArticle ? (
          <article className="max-w-4xl mx-auto text-left">
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#475569]">
                <span className="text-[#1D4ED8] font-bold">{selectedArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3 text-slate-400" />
                  {selectedArticle.readTime}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  {selectedArticle.date}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15] text-balance">
                {selectedArticle.title}
              </h1>

              <div className="flex items-center justify-between py-4 border-y border-[#E2E8F0]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center font-bold text-sm text-[#1D4ED8]">
                    {selectedArticle.author.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F172A]">{selectedArticle.author}</div>
                    <div className="text-[11px] text-[#475569]">UDMIDEAS Global Architecture Practice</div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/919521186150?text=Hello%20UDMIDEAS,%20I%20read%20your%20article%20on%20${encodeURIComponent(selectedArticle.title)}%20and%20want%20to%20discuss.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0F172A] text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Discuss via WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="rounded-xl bg-white border border-[#E2E8F0] p-8 sm:p-10 mb-10 shadow-sm">
              <span className="text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-[0.08em] block mb-2">
                – EXECUTIVE BRIEFING
              </span>
              <p className="text-lg sm:text-xl text-[#0F172A] font-medium leading-relaxed italic">
                "{selectedArticle.excerpt}"
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {selectedArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] text-xs font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6 text-[#475569] text-base leading-[1.65] text-left">
              {selectedArticle.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}

              <div className="my-8 p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-xs">
                <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
                  Key Strategic Takeaways for Business Leaders
                </h4>
                <ul className="space-y-2 text-sm text-[#475569]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1D4ED8] font-bold">1.</span>
                    <span>Avoid monolithic pre-made themes; custom decoupled code delivers superior Core Web Vitals and multi-region speed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1D4ED8] font-bold">2.</span>
                    <span>Generative AI search engines (ChatGPT, Gemini, Perplexity) ingest semantic entity relationships over keyword counts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1D4ED8] font-bold">3.</span>
                    <span>Arabic RTL and Hebrew web architectures require native bi-directional layout logic, not simple text translation.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-sm font-bold text-[#0F172A]">Need this architecture for your business?</h4>
                <p className="text-xs text-[#475569] mt-0.5">
                  Arun and our multilingual engineering leads provide free technical consultations.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenContact}
                  className="px-5 py-2.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold text-xs transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  Book Free Consultation
                </button>
                <a
                  href="https://wa.me/919521186150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
                >
                  WhatsApp: +91-9521186150
                </a>
              </div>
            </div>
          </article>
        ) : (
          <div>
            {/* Page Header */}
            <div className="max-w-3xl mb-10 text-left">
              <div className="text-[12px] sm:text-[13px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] mb-2">
                – ENGINEERING &amp; MARKETING INSIGHTS
              </div>
              <h1 className="text-[32px] sm:text-[44px] font-extrabold text-[#0F172A] leading-[1.15] tracking-[-0.02em] text-balance">
                UDMIDEAS Knowledge Base &amp; Architecture Blog.
              </h1>
              <p className="mt-3 text-base text-[#475569] leading-[1.65]">
                In-depth articles written by Arun and our multilingual engineering leads covering custom React, WordPress, Laravel, Magento, international SEO, AEO, and GEO search dynamics.
              </p>
            </div>

            {/* Search & Category Filter Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E2E8F0]">
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setVisibleCount(INITIAL_COUNT);
                    }}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#0F172A] text-white shadow-xs'
                        : 'bg-white text-[#475569] border border-[#E2E8F0] hover:border-[#1D4ED8]/40 hover:text-[#0F172A]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-64">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles & tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
                />
              </div>
            </div>

            {/* Grid of Blogs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-white rounded-xl border border-[#E2E8F0] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-600/30 text-left group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#475569] mb-3 pb-2.5 border-b border-[#E2E8F0]">
                      <span className="font-bold text-[#1D4ED8] text-[11px] truncate max-w-[125px]">
                        {blog.category}
                      </span>
                      <span className="font-mono text-[11px] text-[#475569]">
                        {blog.readTime}
                      </span>
                    </div>

                    <h2 className="text-base font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors mb-2 line-clamp-3 leading-snug">
                      {blog.title}
                    </h2>

                    <p className="text-sm text-[#475569] leading-relaxed line-clamp-3 mb-4">
                      {blog.excerpt}
                    </p>

                    <div className="text-[11px] text-[#475569] mb-4 flex items-center justify-between">
                      <span className="truncate max-w-[120px] font-medium text-[#0F172A]">{blog.author}</span>
                      <span className="font-mono text-[10px]">{blog.date}</span>
                    </div>
                  </div>

                  <div className="pt-3.5 border-t border-[#E2E8F0]">
                    <a
                      href={blog.customUrl || `/blog/${blog.slug}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link w-full inline-flex items-center justify-between py-2 px-3 rounded-lg text-xs font-bold text-[#1D4ED8] bg-[#F8FAFC] hover:bg-[#1D4ED8] hover:text-white border border-[#E2E8F0] hover:border-[#1D4ED8] transition-all duration-200"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {hasMore && (
              <div className="mt-14 text-center">
                <button
                  onClick={handleLoadMore}
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Load More Articles ({filteredBlogs.length - visibleCount} Remaining)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Standardized Consultation Form */}
        <section id="inquiry-form" className="mt-16 p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xl max-w-3xl mx-auto">
          <ConsultationForm headingTag="h2" />
        </section>
      </div>
    </div>
  );
};
