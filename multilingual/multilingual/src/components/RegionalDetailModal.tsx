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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="regional-modal-title"
    >
      <div className="relative bg-slate-950 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-800"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
          <span>{baseMarketInfo.flag}</span>
          <span>{category} Market Strategic Capabilities</span>
        </div>

        <h3 id="regional-modal-title" className="text-2xl font-bold text-white mb-2">
          {regionName} {category === 'USA' ? 'State' : 'Market'} Operations.
        </h3>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          UDMIDEAS provides custom-coded web architectures and localized digital marketing engineered specifically for buyers in <strong className="text-white">{regionName}</strong>.
        </p>

        {/* Regional Strategy Card */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
              Localized Linguistic & Cultural Parity
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Target languages engineered: <span className="text-blue-400 font-medium">{baseMarketInfo.primaryLanguages.join(', ')}</span>. 
              We ensure native tone, regional currency switching, and compliance with local standards.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Primary Deployed Services for {regionName}:
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {baseMarketInfo.topServices.map((svc, sIdx) => (
                <li key={sIdx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{svc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`https://wa.me/919521186150?text=Hello%20Arun,%20I%20am%20interested%20in%20UDMIDEAS%20services%20for%20${encodeURIComponent(regionName)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat via WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
          >
            <span>Request {regionName} Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
