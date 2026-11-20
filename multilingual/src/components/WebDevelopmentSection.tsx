import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { WEB_SERVICES_BLOCKS } from '../data/contentData';

interface WebDevelopmentSectionProps {
  onOpenContact: () => void;
}

const SERVICE_PREFIXES = [
  '01 / Featured',
  '02 / Growth',
  '03 / Custom Frameworks',
  '04 / Enterprise Commerce'
];

export const WebDevelopmentSection: React.FC<WebDevelopmentSectionProps> = ({
  onOpenContact
}) => {
  return (
    <section id="web-development" className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-[12px] sm:text-[13px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] mb-2">
            – OUR DIGITAL &amp; AI SERVICES
          </div>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#0F172A] leading-[1.2] tracking-tight text-balance">
            Website Design &amp; Development Services.
          </h2>
          <p className="mt-3 text-base text-[#475569] leading-[1.65]">
            We code every website from scratch —{' '}
            <span className="text-[#0F172A] font-semibold">React Js, WordPress, CodeIgniter, Laravel, Magento, and PHP frameworks</span>.
            Strictly custom coding only, engineered for sub-second speeds, bi-directional multilingual layouts, and infinite business scalability.
          </p>
        </div>

        {/* Blocks (2 blocks per row / pair layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WEB_SERVICES_BLOCKS.map((block, idx) => (
            <div
              key={block.id}
              className="bg-white rounded-xl border border-[#E2E8F0] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-600/30 group text-left"
            >
              <div>
                {/* Numbered Prefix & Badge */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E2E8F0]">
                  <span className="text-xs font-mono text-[#1D4ED8] font-bold tabular-nums">
                    {SERVICE_PREFIXES[idx] || `${String(idx + 1).padStart(2, '0')} / Engineering`}
                  </span>
                  <span className="text-[11px] text-[#0F172A] bg-[#F8FAFC] px-2.5 py-0.5 rounded-md border border-[#E2E8F0] font-semibold">
                    Zero Templates
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors mb-1.5">
                  {block.title}
                </h3>
                <p className="text-xs text-[#1D4ED8] font-semibold mb-4">
                  {block.tagline}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {block.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-[15px] text-[#475569] leading-[1.65] mb-6">
                  {block.description}
                </p>

                {/* Capabilities list */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-bold text-[#0F172A] uppercase tracking-[0.08em] mb-2">
                    Key Custom Architecture Highlights
                  </div>
                  {block.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2.5 text-sm text-[#475569]">
                      <CheckCircle className="w-4 h-4 text-[#1D4ED8] mt-0.5 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer / Ideal For */}
              <div className="pt-4 border-t border-[#E2E8F0] space-y-4">
                <div className="text-xs text-[#475569]">
                  <span className="font-semibold text-[#0F172A]">Target Fit: </span>
                  {block.idealFor}
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    onClick={onOpenContact}
                    className="group/btn flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <span>Consult With Arun</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                  <a
                    href="/website-design-development/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-[#1D4ED8] hover:text-[#1E40AF] bg-[#F8FAFC] hover:bg-blue-50 border border-[#E2E8F0] transition-all"
                    title="Open dedicated Website Design & Development page in a new tab"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
