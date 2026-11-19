import React from 'react';
import {
  Code2,
  CheckCircle,
  Layers,
  Sparkles,
  ArrowRight,
  Database,
  Cpu,
  ShoppingBag,
  Globe2,
  Terminal
} from 'lucide-react';
import { WEB_SERVICES_BLOCKS } from '../data/contentData';

interface WebDevelopmentSectionProps {
  onOpenContact: () => void;
}

export const WebDevelopmentSection: React.FC<WebDevelopmentSectionProps> = ({
  onOpenContact
}) => {
  return (
    <section id="web-development" className="py-24 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            03. Engineering Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Website Design & Development Services.
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            We code every website from scratch — <span className="text-white font-medium">React Js, WordPress, CodeIgniter, Laravel, Magento, and PHP frameworks</span>. 
            Strictly custom coding only, engineered for sub-second speeds, bi-directional multilingual layouts, and infinite business scalability.
          </p>
        </div>

        {/* Blocks (2 blocks per row / pair layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WEB_SERVICES_BLOCKS.map((block, idx) => (
            <div
              key={block.id}
              className="bg-slate-950 rounded-2xl border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-950/20 transition-all group text-left"
            >
              <div>
                {/* Block Index & Tag */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-900">
                  <span className="text-xs font-mono text-blue-400 font-semibold">
                    BLOCK {String(idx + 1).padStart(2, '0')} // CUSTOM CODE
                  </span>
                  <span className="text-[11px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/40 font-mono">
                    Zero Templates
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                  {block.title}
                </h3>
                <p className="text-xs text-blue-300/80 font-medium mb-4">
                  {block.tagline}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {block.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {block.description}
                </p>

                {/* Capabilities list */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Key Custom Architecture Highlights:
                  </div>
                  {block.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer / Ideal For */}
              <div className="pt-4 border-t border-slate-900 space-y-3">
                <div className="text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Target Fit: </span>
                  {block.idealFor}
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={onOpenContact}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all cursor-pointer shadow-sm"
                  >
                    <span>Consult With Arun</span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-200 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <a
                    href="/website-design-development/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-800 transition-all"
                    title="Open dedicated Website Design & Development page in a new tab"
                  >
                    <span>View Page</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
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
