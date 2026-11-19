import React, { useState } from 'react';
import {
  FolderCheck,
  Clock,
  ExternalLink,
  Globe2,
  CheckCircle2,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';
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
    <section id="work-portfolio" className="py-24 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              08. Portfolio & Pipeline
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Recent Work Done & Present Ongoing Projects.
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Explore completed enterprise platforms and live client systems currently under active custom engineering.
            </p>
          </div>

          {/* Interactive 2-Tab Controller */}
          <div className="inline-flex p-1.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
            <button
              onClick={() => setActiveTab('recent')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'recent'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
              aria-label="View recent work done"
            >
              <FolderCheck className="w-3.5 h-3.5" />
              <span>Recent Work Done ({RECENT_WORK_DONE.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('ongoing')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'ongoing'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-400 hover:text-white'
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
          {currentList.map((project) => (
            <div
              key={project.id}
              className="bg-slate-950 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all text-left group"
            >
              <div>
                {/* Status & Sector */}
                <div className="flex items-center justify-between text-xs mb-3 pb-2 border-b border-slate-900">
                  <span className="text-slate-400 font-medium">{project.sector} Business</span>
                  <span
                    className={`font-mono text-[11px] px-2 py-0.5 rounded border ${
                      project.status === 'Completed'
                        ? 'text-blue-400 bg-blue-950/40 border-blue-900/40'
                        : 'text-emerald-400 bg-emerald-950/40 border-emerald-900/40'
                    }`}
                  >
                    {project.status === 'Completed' ? 'Deployed & Verified' : 'In Engineering Sprint'}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                  {project.title}
                </h3>
                <div className="text-xs text-slate-400 mb-3">
                  Client: <span className="text-slate-300 font-medium">{project.client}</span> · {project.country}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {project.details}
                </p>

                {/* Key Outcome / Scope */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-850 mb-4">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mb-1">
                    {activeTab === 'recent' ? 'Measured Result:' : 'Current Milestone:'}
                  </div>
                  <div className="text-xs font-semibold text-emerald-300 font-mono">
                    {project.keyOutcome}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Scope */}
              <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-xs">
                <span className="text-slate-400 truncate max-w-[200px]">
                  {project.liveUrlOrScope}
                </span>
                <button
                  onClick={onOpenContact}
                  className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 shrink-0"
                >
                  <span>Build Similar</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
