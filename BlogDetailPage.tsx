import React, { useState } from 'react';
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
  BookOpen
} from 'lucide-react';
import { BLOG_POSTS } from '../data/contentData';
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

  const relatedBlogs = BLOG_POSTS.filter((p) => p.id !== blog.id).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="pt-28 pb-24 min-h-screen bg-slate-950 text-slate-100 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-900 text-xs">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors py-1.5 px-3 rounded-lg bg-slate-900 border border-slate-800"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Blogs</span>
          </button>

          <div className="flex items-center gap-2 text-slate-400">
            <span>UDMIDEAS Insights</span>
            <span aria-hidden="true">/</span>
            <span className="text-blue-400 font-medium">{blog.category}</span>
          </div>
        </div>

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
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            {blog.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-slate-900">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center font-bold text-xs text-blue-300 font-mono">
                  {blog.author.slice(0, 2).toUpperCase()}
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-white">{blog.author}</div>
                <div className="text-[11px] text-slate-400">
                  UDMIDEAS Global Architecture Practice · USA NYC 10001
                </div>
              </div>
            </div>

            {/* Sharing Bar */}
            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20reading%20your%20blog:%20${encodeURIComponent(blog.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/50 border border-emerald-800/60 text-emerald-300 text-xs hover:bg-emerald-900/50 transition-colors"
                title="Discuss this blog with Arun on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Discuss on WhatsApp</span>
              </a>

              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs hover:text-white hover:bg-slate-850 transition-colors"
                title="Copy article link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Creative Article Lead Box / Hero Graphic Section */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-10 mb-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest block">
              Architectural Abstract & Core Hypothesis
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

        {/* Prose Article Content */}
        <div className="space-y-6 text-slate-300 text-base leading-relaxed">
          {blog.content.map((paragraph, pIdx) => (
            <p key={pIdx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Strategic HTML Feature Highlight Box */}
          <div className="my-10 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              UDMIDEAS Technical Recommendations
            </div>
            <h3 className="text-lg font-bold text-white">
              What This Means For Your Next Web Architecture:
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 font-bold font-mono">01.</span>
                <span>Prioritize custom code over translation plugins to maintain sub-second Core Web Vitals across overseas edge locations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 font-bold font-mono">02.</span>
                <span>Incorporate JSON-LD Schema graphs and factual consensus data to secure generative citations in ChatGPT and Perplexity.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 font-bold font-mono">03.</span>
                <span>Validate bi-directional logical properties for Arabic RTL and Hebrew markets to prevent layout shift.</span>
              </li>
            </ul>
          </div>
        </div>

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
              Arun leads UDMIDEAS from New York, NY 10001, specializing in bespoke custom-coded React, Laravel, WordPress, and Magento platforms alongside cross-border multilingual SEO, AEO, GEO, and PPC campaigns.
            </p>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-950/60 to-emerald-950/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white">
              Want to implement this strategy for your business?
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Connect directly with Founder Arun for a free architectural consultation.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/919521186150?text=Hello%20Arun,%20I%20read%20your%20article%20on%20${encodeURIComponent(blog.title)}%20and%20would%20like%20to%20consult.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: +91-9521186150</span>
            </a>
            <button
              onClick={onOpenContact}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors"
            >
              Request Free Call
            </button>
          </div>
        </div>

        {/* Related Articles Carousel / Grid */}
        <div className="mt-16 pt-10 border-t border-slate-900">
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
