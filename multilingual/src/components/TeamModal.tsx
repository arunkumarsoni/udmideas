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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-modal-title"
    >
      <div className="relative bg-white border border-[#E2E8F0] rounded-2xl max-w-4xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#64748B] hover:text-[#0F172A] p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-w-2xl mb-8">
          <div className="text-xs font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] mb-1">
            – Global Leadership & In-House Experts
          </div>
          <h3 id="team-modal-title" className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
            Meet Arun & The UDMIDEAS Dedicated Team.
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
            15+ years of digital marketing history. Dedicated in-house multilingual SEO engineers, full-stack React and PHP architects, SMM directors, and PPC media buyers.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={member.name}
              className={`rounded-2xl border p-5 flex flex-col justify-between transition-all ${
                idx === 0
                  ? 'border-[#1D4ED8]/40 bg-blue-50/40 shadow-sm'
                  : 'border-[#E2E8F0] bg-[#F8FAFC]'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
                      <span>{member.name}</span>
                      {idx === 0 && (
                        <span className="text-[10px] text-emerald-700 font-semibold font-mono bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          Founder · 15+ Yrs
                        </span>
                      )}
                    </h4>
                    <div className="text-xs text-[#1D4ED8] font-semibold">{member.role}</div>
                  </div>
                  <span className="text-[11px] text-[#64748B] font-mono">
                    {member.experience}
                  </span>
                </div>

                <div className="text-xs text-[#64748B] flex items-center gap-1.5 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-[#94A3B8]" />
                  <span>{member.location}</span>
                </div>

                <p className="text-xs text-[#475569] leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] space-y-1.5 text-[11px]">
                <div className="text-[#475569]">
                  <strong className="text-[#0F172A]">Languages:</strong> {member.languages.join(' · ')}
                </div>
                <div className="text-emerald-700 font-mono">
                  <strong className="text-[#0F172A]">Core Specialty:</strong> {member.specialty}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#64748B]">
            Work directly with Founder Arun and our senior team members on your next project.
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20would%20like%20to%20consult%20with%20your%20team."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all hover:shadow-md inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Arun Direct</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-xl transition-all hover:shadow-md cursor-pointer"
            >
              Request Strategy Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
