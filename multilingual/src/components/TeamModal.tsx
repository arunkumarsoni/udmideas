import React from 'react';
import { X, Award, MapPin, Globe, Sparkles, MessageCircle } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/contentData';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const TeamModal: React.FC<TeamModalProps> = ({
  isOpen,
  onClose,
  onOpenContact
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-modal-title"
    >
      <div className="relative bg-slate-950 border border-slate-800 rounded-3xl max-w-4xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-800"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-w-2xl mb-8">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
            Global Leadership & In-House Experts
          </div>
          <h3 id="team-modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Meet Arun & The UDMIDEAS Dedicated Team.
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            15+ years of digital marketing history. Dedicated in-house multilingual SEO engineers, full-stack React and PHP architects, SMM directors, and PPC media buyers.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={member.name}
              className={`rounded-2xl border p-5 bg-slate-900/60 flex flex-col justify-between ${
                idx === 0
                  ? 'border-blue-500/80 bg-slate-900/90 shadow-lg shadow-blue-950/30'
                  : 'border-slate-800'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>{member.name}</span>
                      {idx === 0 && (
                        <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/40">
                          Founder · 15+ Yrs
                        </span>
                      )}
                    </h4>
                    <div className="text-xs text-blue-400 font-medium">{member.role}</div>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {member.experience}
                  </span>
                </div>

                <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{member.location}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 space-y-1.5 text-[11px]">
                <div className="text-slate-400">
                  <strong className="text-slate-300">Languages:</strong> {member.languages.join(' · ')}
                </div>
                <div className="text-emerald-400/90 font-mono">
                  <strong className="text-slate-300">Core Specialty:</strong> {member.specialty}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Work directly with Founder Arun and our senior team members on your next project.
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20consult%20with%20your%20team."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Arun Direct</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors"
            >
              Request Strategy Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
