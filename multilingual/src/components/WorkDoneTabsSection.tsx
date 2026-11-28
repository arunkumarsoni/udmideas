import React, { useState } from 'react';
import { FolderCheck, Clock, ArrowRight } from 'lucide-react';
import { RECENT_WORK_DONE, PRESENT_WORK_DONE } from '../data/contentData';
import { ProjectWork } from '../types';

interface WorkDoneTabsSectionProps {
  onOpenContact: () => void;
}

export const WorkDoneTabsSection: React.FC<WorkDoneTabsSectionProps> = ({
  onOpenContact
}) => {
  const [activeTab, setActiveTab] = useState<'recent' | 'ongoing'>('recent');

  const currentList: ProjectWork[] =
    activeTab === 'recent' ? RECENT_WORK_DONE : PRESENT_WORK_DONE;

  return (
    <section id="work-portfolio" className="py-20 lg:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="text-[12px] sm:text-[13px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] mb-2">
              – PORTFOLIO &amp; ACTIVE PIPELINE
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
              Recent Work Done &amp; Present Ongoing Projects.
            </h2>
            <p className="mt-2 text-base text-[#475569]">
              Explore completed enterprise platforms and live client systems currently under active custom engineering.
            </p>
          </div>

          {/* Interactive Pill-Style 2-Tab Controller */}
          <div className="inline-flex p-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] shrink-0">
            <button
              onClick={() => setActiveTab('recent')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'recent'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-[#475569] hover:text-[#0F172A]'
              }`}
              aria-label="View recent work done"
            >
              <FolderCheck className="w-3.5 h-3.5" />
              <span>Recent Work Done ({RECENT_WORK_DONE.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('ongoing')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'ongoing'
                  ? 'bg-[#1D4ED8] text-white shadow-sm'
                  : 'text-[#475569] hover:text-[#0F172A]'
              }`}
              aria-label="View ongoing projects"
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Present Work Done ({PRESENT_WORK_DONE.length})</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentList.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-600/30 text-left group"
            >
              <div>
                {/* Status & Sector */}
                <div className="flex items-center justify-between text-xs mb-3 pb-3 border-b border-[#E2E8F0]">
                  <span className="text-[#475569] font-semibold">
                    <span className="font-mono text-[#1D4ED8] mr-1.5 tabular-nums">0{idx + 1} /</span>
                    {project.sector}
                  </span>
                  <span
                    className={`font-semibold text-[11px] px-2.5 py-0.5 rounded-md border ${
                      project.status === 'Completed'
                        ? 'text-[#1D4ED8] bg-blue-50 border-blue-200/80'
                        : 'text-emerald-700 bg-emerald-50 border-emerald-200/80'
                    }`}
                  >
                    {project.status === 'Completed' ? 'Deployed' : 'In Sprint'}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors mb-1">
                  {project.title}
                </h3>
                <div className="text-xs text-[#475569] mb-3">
                  Client: <span className="text-[#0F172A] font-semibold">{project.client}</span> · {project.country}
                </div>

                <p className="text-sm text-[#475569] leading-relaxed mb-4">
                  {project.details}
                </p>

                {/* Key Outcome / Scope */}
                <div className="p-3.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] mb-4">
                  <div className="text-[10px] text-[#475569] uppercase tracking-[0.08em] font-bold mb-1">
                    {activeTab === 'recent' ? 'Measured Result' : 'Current Milestone'}
                  </div>
                  <div className="text-xs font-bold text-[#1D4ED8] font-mono">
                    {project.keyOutcome}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Scope */}
              <div className="pt-3.5 border-t border-[#E2E8F0] flex items-center justify-between text-xs gap-2">
                <span className="text-[#475569] truncate max-w-[180px]">
                  {project.liveUrlOrScope}
                </span>
                <button
                  onClick={onOpenContact}
                  className="group/btn text-[#1D4ED8] hover:text-[#1E40AF] font-bold inline-flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  <span>Build Similar</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
