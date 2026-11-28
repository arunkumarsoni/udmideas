import React from 'react';
import { X, ShieldCheck, FileText, Cookie } from 'lucide-react';

interface LegalModalProps {
  title: string | null;
  type: 'privacy' | 'terms' | 'cookies' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ title, type, onClose }) => {
  if (!title || !type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-white border border-[#E2E8F0] rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#64748B] hover:text-[#0F172A] p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{title}</h3>
        <p className="text-xs text-[#64748B] font-mono mb-6">
          UDMIDEAS Legal & Compliance Governance · Effective 2026 · USA HQ NYC 10001
        </p>

        <div className="space-y-4 text-sm text-[#475569] leading-relaxed">
          {type === 'privacy' && (
            <>
              <p>
                At UDMIDEAS, led by Founder Arun and operating from New York, NY 10001, we respect and safeguard the privacy of our global clients across the USA, European Union (GDPR), Latin America, Israel, and the Arab World.
              </p>
              <h4 className="text-sm font-bold text-[#0F172A]">1. Data Collection & Processing</h4>
              <p>
                We only collect information voluntarily provided through project inquiry forms, technical consultations, and WhatsApp communications. We never sell, lease, or monetize client data.
              </p>
              <h4 className="text-sm font-bold text-[#0F172A]">2. International Compliance</h4>
              <p>
                All custom web engineering and analytics frameworks built by UDMIDEAS adhere to EU General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and global data security standards.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                These terms govern all custom web design, software development, and international digital marketing services provided by UDMIDEAS.
              </p>
              <h4 className="text-sm font-bold text-[#0F172A]">1. Custom Coding & Intellectual Property</h4>
              <p>
                All bespoke code developed for clients (React, Laravel, WordPress custom themes, CodeIgniter, Magento, PHP) becomes the exclusive intellectual property of the client upon full project settlement.
              </p>
              <h4 className="text-sm font-bold text-[#0F172A]">2. Performance & Service Guarantees</h4>
              <p>
                Our digital marketing and SEO campaigns operate on transparent reporting, verified Google Search Console milestones, and dedicated multilingual campaign stewardship.
              </p>
            </>
          )}

          {type === 'cookies' && (
            <>
              <p>
                UDMIDEAS uses minimal, privacy-first technical cookies strictly necessary to maintain responsive multilingual language state, session continuity, and aggregate performance telemetry.
              </p>
              <p>
                We do not employ cross-site intrusive trackers. Users may disable cookies at any time in browser settings without breaking fundamental navigation.
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors cursor-pointer"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
