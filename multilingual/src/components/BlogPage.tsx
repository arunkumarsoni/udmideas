import React, { useState } from 'react';
import {
  BookOpen,
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Tag,
  ArrowRight,
  Sparkles,
  Search,
  CheckCircle2,
  Bookmark,
  MessageCircle
} from 'lucide-react';
import { BLOG_POSTS } from '../data/contentData';
import { BlogPost } from '../types';

interface BlogPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
  onSelectBlog?: (blog: BlogPost) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onBackToHome,
  onOpenContact,
  onSelectBlog
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
    <div className="pt-28 pb-24 min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back button */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-slate-900 text-xs">
          <button
            onClick={() => {
              if (selectedArticle) {
                setSelectedArticle(null);
              } else {
                onBackToHome();
              }
            }}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors py-1.5 px-3 rounded-lg bg-slate-900 border border-slate-800"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{selectedArticle ? 'Back to All Blogs' : 'Back to Home'}</span>
          </button>

          <div className="flex items-center gap-2 text-slate-400">
            <span>UDMIDEAS Insights</span>
            <span aria-hidden="true">/</span>
            <span className="text-blue-400 font-medium">
              {selectedArticle ? selectedArticle.category : 'Knowledge Base'}
            </span>
          </div>
        </div>

        {/* If viewing a single creative blog article */}
        {selectedArticle ? (
          <article className="max-w-4xl mx-auto text-left animate-in fade-in">
            {/* Article Header */}
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="text-blue-400 font-semibold">{selectedArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3 text-slate-500" />
                  {selectedArticle.readTime}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-500" />
                  {selectedArticle.date}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
                {selectedArticle.title}
              </h1>

              <div className="flex items-center justify-between py-4 border-y border-slate-900">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center font-bold text-sm text-blue-300">
                    {selectedArticle.author.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{selectedArticle.author}</div>
                    <div className="text-[11px] text-slate-400">UDMIDEAS Global Architecture Practice</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/919521186150?text=Hello%20UDMIDEAS,%20I%20read%20your%20article%20on%20${encodeURIComponent(selectedArticle.title)}%20and%20want%20to%20discuss.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-xs hover:bg-emerald-900/60 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Discuss via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Creative Article Hero Graphic Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 mb-12 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[90px] pointer-events-none" />
              <div className="relative z-10 max-w-2xl">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">
                  Executive Briefing
                </span>
                <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed italic">
                  "{selectedArticle.excerpt}"
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-slate-950/90 text-slate-300 border border-slate-800 text-xs font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Article Full Prose Content */}
            <div className="space-y-6 text-slate-300 text-base leading-relaxed text-left">
              {selectedArticle.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* In-depth HTML Callout Box */}
              <div className="my-8 p-6 rounded-2xl bg-slate-900/90 border border-slate-800">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Key Strategic Takeaways for Business Leaders:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">1.</span>
                    <span>Avoid monolithic pre-made themes; custom decoupled code delivers superior Core Web Vitals and multi-region speed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">2.</span>
                    <span>Generative AI search engines (ChatGPT, Gemini, Perplexity) ingest semantic entity relationships over keyword counts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">3.</span>
                    <span>Arabic RTL and Hebrew web architectures require native bi-directional layout logic, not simple text translation.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Author Footer & Next Actions */}
            <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-sm font-bold text-white">Need this architecture for your business?</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Arun and our multilingual engineering leads provide free technical consultations.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenContact}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
                >
                  Book Free Consultation
                </button>
                <a
                  href="https://wa.me/919521186150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
                >
                  WhatsApp: +91-9521186150
                </a>
              </div>
            </div>
          </article>
        ) : (
          /* Full Blog Listing: Shows 8 blogs initially + Load More button below it */
          <div>
            {/* Page Header */}
            <div className="max-w-3xl mb-10 text-left">
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                Engineering & Marketing Insights
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight text-balance">
                UDMIDEAS Knowledge Base & Architecture Blog.
              </h1>
              <p className="mt-3 text-base text-slate-300 leading-relaxed">
                In-depth articles written by Arun and our multilingual engineering leads covering custom React, WordPress, Laravel, Magento, international SEO, AEO, and GEO search dynamics.
              </p>
            </div>

            {/* Search & Category Filter Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-900">
              {/* Category pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setVisibleCount(INITIAL_COUNT);
                    }}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative w-full md:w-64">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles & tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Grid of Blogs (Showing 8 initially) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all text-left group"
                >
                  <div>
                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3 pb-2 border-b border-slate-800/80">
                      <span className="font-semibold text-blue-400 text-[11px] truncate max-w-[120px]">
                        {blog.category}
                      </span>
                      <span className="font-mono text-[11px] text-slate-400">
                        {blog.readTime}
                      </span>
                    </div>

                    <h2 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors mb-2 line-clamp-3 leading-snug">
                      {blog.title}
                    </h2>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                      {blog.excerpt}
                    </p>

                    <div className="text-[11px] text-slate-400 mb-4 flex items-center justify-between">
                      <span className="truncate max-w-[120px]">{blog.author}</span>
                      <span className="font-mono text-[10px]">{blog.date}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80">
                    <button
                      onClick={() => {
                        if (onSelectBlog) {
                          onSelectBlog(blog);
                        } else {
                          setSelectedArticle(blog);
                        }
                      }}
                      className="w-full inline-flex items-center justify-between py-2 px-3 rounded-lg text-xs font-semibold text-slate-200 bg-slate-950 hover:bg-blue-950/40 hover:text-white border border-slate-850 transition-all group-hover:border-slate-700"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button (if more blogs exist) */}
            {hasMore && (
              <div className="mt-14 text-center">
                <button
                  onClick={handleLoadMore}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all"
                >
                  <span>Load More Articles ({filteredBlogs.length - visibleCount} Remaining)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
