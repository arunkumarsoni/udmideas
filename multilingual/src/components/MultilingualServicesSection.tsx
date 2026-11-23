import React from 'react';
import {
  Palette,
  Code2,
  Search,
  MessageSquareText,
  Sparkles,
  Target,
  Film,
  ArrowRight
} from 'lucide-react';

interface MultilingualServicesSectionProps {
  onOpenContact: () => void;
}

interface ServiceCardItem {
  number: string;
  tag: string;
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MULTILINGUAL_SERVICES: ServiceCardItem[] = [
  {
    number: '01',
    tag: 'Design',
    title: 'eCommerce Website Design',
    description:
      'Custom, conversion-focused storefront UI/UX tailored for global audiences.',
    href: '/website-design-development/',
    icon: Palette
  },
  {
    number: '02',
    tag: 'Development',
    title: 'eCommerce Website Development',
    description:
      'High-speed, scalable, and secure online stores built with modern web architectures.',
    href: '/website-design-development/',
    icon: Code2
  },
  {
    number: '03',
    tag: 'Organic Search',
    title: 'SEO Services',
    description:
      'Technical and on-page Search Engine Optimization to dominate organic search rankings.',
    href: '/multilingual-search-engine-optimization/',
    icon: Search
  },
  {
    number: '04',
    tag: 'Direct Answers',
    title: 'AEO (Answer Engine Optimization)',
    description:
      'Structuring content and schema to capture direct answers and voice search results.',
    href: '/answer-engine-optimization/',
    icon: MessageSquareText
  },
  {
    number: '05',
    tag: 'AI Citations',
    title: 'GEO (Generative Engine Optimization)',
    description:
      'Optimizing brand visibility and citations across AI search engines (Claude, ChatGPT, Gemini, Perplexity).',
    href: '/generative-engine-optimization/',
    icon: Sparkles
  },
  {
    number: '06',
    tag: 'Paid Search',
    title: 'PPC - Google Advertising',
    description:
      'High-ROI paid search and shopping campaigns engineered for targeted lead generation.',
    href: '/pay-per-click/',
    icon: Target
  },
  {
    number: '07',
    tag: 'Video & Reels',
    title: 'Video Creation',
    description:
      'Engaging promotional videos and short-form vertical reels for brand storytelling and social growth.',
    href: '/social-media-marketing/',
    icon: Film
  }
];

export const MultilingualServicesSection: React.FC<MultilingualServicesSectionProps> = ({
  onOpenContact
}) => {
  return (
    <section
      id="multilingual-services"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-14 text-left">
          <div className="max-w-2xl">
            <div className="text-[12px] sm:text-[13px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] mb-2">
              – OUR DIGITAL &amp; AI SERVICES
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#0F172A] leading-[1.2] tracking-tight text-balance">
              Multilingual UDMIDEAS Services
            </h2>
            <p className="mt-2.5 text-base sm:text-lg font-medium text-[#475569] leading-[1.65]">
              Complete Digital Marketing Services
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={onOpenContact}
              className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer w-full sm:w-auto"
            >
              <span>Request Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Responsive 7-Card Grid (1 col mobile, 2 cols tablet, 3+3+wide desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {MULTILINGUAL_SERVICES.map((service, idx) => {
            const Icon = service.icon;
            const isSeventhWide = idx === MULTILINGUAL_SERVICES.length - 1;

            return (
              <article
                key={service.number}
                className={`bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-600/30 text-left group ${
                  isSeventhWide
                    ? 'sm:col-span-2 lg:col-span-6 lg:flex-row lg:items-center lg:gap-8'
                    : 'lg:col-span-2'
                }`}
              >
                <div className={isSeventhWide ? 'flex-1' : ''}>
                  {/* Top Row: Icon + Numbered Prefix */}
                  <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors duration-200 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#1D4ED8] tabular-nums">
                        {service.number} / {service.tag}
                      </span>
                    </div>

                    <span className="text-[11px] font-semibold text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] px-2.5 py-0.5 rounded-md">
                      Multilingual
                    </span>
                  </div>

                  {/* Card Title & Description */}
                  <h3 className="text-[20px] sm:text-[21px] font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors leading-snug mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-[15px] sm:text-base text-[#475569] leading-[1.65]">
                    {service.description}
                  </p>
                </div>

                {/* Bottom / Side Action Bar */}
                <div
                  className={`flex flex-wrap items-center justify-between gap-3 ${
                    isSeventhWide
                      ? 'mt-6 pt-4 border-t border-[#E2E8F0] lg:mt-0 lg:pt-0 lg:border-t-0 lg:border-l lg:pl-8 lg:flex-col lg:items-stretch lg:min-w-[220px] shrink-0'
                      : 'mt-6 pt-4 border-t border-[#E2E8F0]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="group/btn inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer"
                  >
                    <span>Get Strategy Call</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>

                  <a
                    href={service.href}
                    className="group/link inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-[#1D4ED8] hover:text-[#1E40AF] hover:bg-blue-50 transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
