import React, { useState } from 'react';
import {
  ChevronDown,
  Search,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { FAQ_ITEMS } from '../data/contentData';

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
    <section id="faq" className="py-20 lg:py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="text-[12px] sm:text-[13px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] mb-2">
            – KNOWLEDGE &amp; CLARITY
          </div>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#0F172A] leading-[1.2] tracking-tight text-balance">
            Frequently Asked Questions.
          </h2>
          <p className="mt-3 text-base text-[#475569] leading-[1.65]">
            Everything you need to know about our custom engineering methodology, 15+ years of digital marketing, multilingual SEO &amp; GEO, and global cross-border execution.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E2E8F0]">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'bg-white text-[#475569] border border-[#E2E8F0] hover:border-[#1D4ED8]/40 hover:text-[#0F172A]'
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
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
              />
            </div>
            <button
              onClick={handleExpandAll}
              className="text-[11px] font-semibold text-[#475569] hover:text-[#0F172A] px-2.5 py-2 bg-white border border-[#E2E8F0] rounded-lg whitespace-nowrap cursor-pointer"
            >
              Expand
            </button>
            <button
              onClick={handleCollapseAll}
              className="text-[11px] font-semibold text-[#475569] hover:text-[#0F172A] px-2.5 py-2 bg-white border border-[#E2E8F0] rounded-lg whitespace-nowrap cursor-pointer"
            >
              Collapse
            </button>
          </div>
        </div>

        {/* Clean Accordion List with #E2E8F0 Dividers */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl border border-[#E2E8F0] divide-y divide-[#E2E8F0] shadow-xs text-left overflow-hidden">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-[#475569] text-sm">
              No questions matched your search query. Try searching for "custom", "SEO", "WhatsApp", or "Arun".
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`transition-colors duration-200 ${isOpen ? 'bg-blue-50/30' : 'bg-white hover:bg-[#F8FAFC]'}`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-mono font-bold text-[#1D4ED8] shrink-0 mt-1 tabular-nums">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`p-1.5 rounded-lg border shrink-0 transition-all duration-200 ${
                        isOpen
                          ? 'rotate-180 bg-[#1D4ED8] border-[#1D4ED8] text-white'
                          : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#475569]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-6 pt-1 pl-12 sm:pl-14 text-sm text-[#475569] leading-[1.65]">
                        <div className="text-[11px] font-mono text-[#1D4ED8] uppercase tracking-[0.08em] mb-1.5 font-semibold">
                          {faq.category}
                        </div>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Deep Navy Contrast CTA Banner within FAQ */}
        <div className="mt-14 p-8 sm:p-10 rounded-xl bg-[#0F172A] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-lg">
          <div>
            <div className="text-[12px] font-semibold text-[#F59E0B] uppercase tracking-[0.08em] mb-1">
              ★ DIRECT FOUNDER ACCESS
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Have a specific question not listed above?
            </h3>
            <p className="text-sm text-[#94A3B8] mt-1.5">
              Ask Founder Arun directly via WhatsApp at <span className="text-white font-mono font-semibold">+91-9521186150</span> or request a free discovery session.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20have%20a%20question%20about%20UDMIDEAS%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Ask on WhatsApp</span>
            </a>
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <span>Schedule Free Call</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
