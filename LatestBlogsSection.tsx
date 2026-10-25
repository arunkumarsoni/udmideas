import React, { useState } from 'react';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Sparkles
} from 'lucide-react';
import { BLOG_POSTS } from '../data/contentData';
import { BlogPost } from '../types';

interface LatestBlogsSectionProps {
  onOpenBlogReader: (blog: BlogPost) => void;
  onOpenBlogPage: () => void;
}

export const LatestBlogsSection: React.FC<LatestBlogsSectionProps> = ({
  onOpenBlogReader,
  onOpenBlogPage
}) => {
  // Take top 4 blogs for the slider section
  const top4Blogs = BLOG_POSTS.slice(0, 4);
  const [sliderIndex, setSliderIndex] = useState(0);

  const handlePrev = () => {
    setSliderIndex((prev) => (prev === 0 ? top4Blogs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSliderIndex((prev) => (prev + 1) % top4Blogs.length);
  };

  return (
    <section id="latest-blogs" className="py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              09. Knowledge & Thought Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Our Latest Blogs & Multilingual Guides.
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Technical insights on international SEO, AEO/GEO, bi-directional Arabic RTL code, and cross-border eCommerce scaling.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBlogPage}
              className="px-4 py-2 text-xs font-semibold text-blue-400 hover:text-blue-300 bg-slate-900 border border-slate-800 rounded-xl transition-colors"
            >
              Browse All 12+ Articles →
            </button>
            <div className="flex items-center gap-1.5 ml-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="Previous blog"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="Next blog"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Blogs Slider / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {top4Blogs.map((blog, idx) => (
            <article
              key={blog.id}
              className={`bg-slate-900/60 rounded-2xl border p-6 flex flex-col justify-between transition-all text-left group ${
                sliderIndex === idx
                  ? 'border-blue-500/80 shadow-lg shadow-blue-950/40'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 pb-2 border-b border-slate-800/80">
                  <span className="font-semibold text-blue-400">{blog.category}</span>
                  <span className="font-mono text-[11px]">{blog.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors mb-2 line-clamp-3 leading-snug">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                  {blog.excerpt}
                </p>

                {/* Author & Date */}
                <div className="text-[11px] text-slate-400 mb-4 flex items-center justify-between">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-800/80">
                <button
                  onClick={() => onOpenBlogReader(blog)}
                  className="w-full inline-flex items-center justify-between py-2 px-3 rounded-lg text-xs font-semibold text-slate-200 bg-slate-950 hover:bg-blue-950/40 hover:text-white border border-slate-850 transition-all group-hover:border-slate-700"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
