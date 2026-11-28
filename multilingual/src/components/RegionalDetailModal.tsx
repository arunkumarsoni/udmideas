import React from 'react';
import { X, Globe2, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { REGIONAL_MARKETS } from '../data/contentData';

interface RegionalDetailModalProps {
  regionName: string | null;
  category: 'USA' | 'LATAM' | 'EU' | 'Arabic' | 'Israel' | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const RegionalDetailModal: React.FC<RegionalDetailModalProps> = ({
  regionName,
  category,
  onClose,
  onOpenContact
}) => {
  if (!regionName || !category) return null;

  const baseMarketInfo = REGIONAL_MARKETS[category] || REGIONAL_MARKETS['USA'];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="regional-modal-title"
    >
      <div className="relative bg-white border border-[#E2E8F0] rounded-2xl max-w-xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#64748B] hover:text-[#0F172A] p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] mb-2">
          <span>{baseMarketInfo.flag}</span>
          <span>{category} Market Strategic Capabilities</span>
        </div>

        <h3 id="regional-modal-title" className="text-2xl font-bold text-[#0F172A] mb-2">
          {regionName} {category === 'USA' ? 'State' : 'Market'} Operations.
        </h3>

        <p className="text-sm text-[#475569] leading-relaxed mb-6">
          UDMIDEAS provides custom-coded web architectures and localized digital marketing engineered specifically for buyers in <strong className="text-[#0F172A]">{regionName}</strong>.
        </p>

        {/* Regional Strategy Card */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
              Localized Linguistic & Cultural Parity
            </h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Target languages engineered: <span className="text-[#1D4ED8] font-semibold">{baseMarketInfo.primaryLanguages.join(', ')}</span>. 
              We ensure native tone, regional currency switching, and compliance with local standards.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
              Primary Deployed Services for {regionName}:
            </h4>
            <ul className="space-y-1.5 text-xs text-[#475569]">
              {baseMarketInfo.topServices.map((svc, sIdx) => (
                <li key={sIdx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{svc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20interested%20in%20UDMIDEAS%20services%20for%20${encodeURIComponent(regionName)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-all hover:shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat via WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] transition-all hover:shadow-md cursor-pointer"
          >
            <span>Request {regionName} Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
