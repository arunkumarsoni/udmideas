import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
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
  const top4Blogs = BLOG_POSTS.slice(0, 4);
  const [sliderIndex, setSliderIndex] = useState(0);

  const handlePrev = () => {
    setSliderIndex((prev) => (prev === 0 ? top4Blogs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSliderIndex((prev) => (prev + 1) % top4Blogs.length);
  };

  return (
    <section id="latest-blogs" className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="text-[12px] sm:text-[13px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] mb-2">
              – KNOWLEDGE &amp; THOUGHT LEADERSHIP
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
              Our Latest Blogs &amp; Multilingual Guides.
            </h2>
            <p className="mt-2 text-base text-[#475569]">
              Technical insights on international SEO, AEO/GEO, bi-directional Arabic RTL code, and cross-border eCommerce scaling.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-4 py-2.5 text-xs font-bold text-[#1D4ED8] hover:text-white bg-white hover:bg-[#1D4ED8] border border-[#E2E8F0] hover:border-[#1D4ED8] rounded-xl transition-all duration-200 inline-flex items-center gap-1.5 shadow-xs"
            >
              <span>Browse All Articles</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] hover:border-[#1D4ED8]/40 transition-colors cursor-pointer"
                aria-label="Previous blog"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] hover:border-[#1D4ED8]/40 transition-colors cursor-pointer"
                aria-label="Next blog"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {top4Blogs.map((blog, idx) => (
            <article
              key={blog.id}
              className={`bg-white rounded-xl border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-600/30 text-left group ${
                sliderIndex === idx
                  ? 'border-[#1D4ED8] shadow-md'
                  : 'border-[#E2E8F0]'
              }`}
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs text-[#475569] mb-3 pb-2.5 border-b border-[#E2E8F0]">
                  <span className="font-bold text-[#1D4ED8] truncate max-w-[130px]">{blog.category}</span>
                  <span className="font-mono text-[11px]">{blog.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors mb-2 line-clamp-3 leading-snug">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-[#475569] leading-relaxed line-clamp-3 mb-4">
                  {blog.excerpt}
                </p>

                {/* Author & Date */}
                <div className="text-[11px] text-[#475569] mb-4 flex items-center justify-between">
                  <span className="font-medium text-[#0F172A]">{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </div>

              {/* Action Button */}
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
      </div>
    </section>
  );
};
