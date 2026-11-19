import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  Search,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { FAQ_ITEMS } from '../data/contentData';
import { FaqItem } from '../types';

interface FaqSectionProps {
  onOpenContact: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_ITEMS[0].id]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Custom Engineering',
    'Multilingual SEO & GEO',
    'PPC & SMM',
    'Global Markets & Process'
  ];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const handleExpandAll = () => {
    setOpenIds(filteredFaqs.map((f) => f.id));
  };

  const handleCollapseAll = () => {
    setOpenIds([]);
  };

  return (
    <section id="faq" className="py-24 bg-slate-950 border-t border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            11. Knowledge & Clarity
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance">
            Frequently Asked Questions.
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Everything you need to know about our custom engineering methodology, 15+ years of digital marketing, multilingual SEO & GEO, and global cross-border execution.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-900">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Bulk Controls */}
          <div className="flex items-center gap-2">
            <div className="relative w-full md:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search all 20 questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              onClick={handleExpandAll}
              className="text-[11px] font-semibold text-slate-400 hover:text-white px-2 py-1.5 bg-slate-900 border border-slate-800 rounded-lg whitespace-nowrap"
            >
              Expand
            </button>
            <button
              onClick={handleCollapseAll}
              className="text-[11px] font-semibold text-slate-400 hover:text-white px-2 py-1.5 bg-slate-900 border border-slate-800 rounded-lg whitespace-nowrap"
            >
              Collapse
            </button>
          </div>
        </div>

        {/* 20 Accordion Items */}
        <div className="space-y-3 max-w-4xl mx-auto text-left">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm">
              No questions matched your search query. Try searching for "custom", "SEO", "WhatsApp", or "Arun".
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? 'bg-slate-900/90 border-blue-500/60 shadow-lg shadow-blue-950/20'
                      : 'bg-slate-900/40 border-slate-850 hover:border-slate-750'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-4 p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-mono font-bold text-blue-400 shrink-0 mt-0.5">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-400' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 mt-1 animate-in fade-in">
                      <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-2 font-semibold">
                        Category: {faq.category}
                      </div>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer CTA within FAQ */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-emerald-950/30 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h3 className="text-xl font-bold text-white">Have a specific question not listed above?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Ask Founder Arun directly via WhatsApp at <span className="text-emerald-400 font-mono font-semibold">+91-9521186150</span> or request a discovery session.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20have%20a%20question%20about%20UDMIDEAS%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-950/40 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all"
            >
              <span>Schedule Free Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
