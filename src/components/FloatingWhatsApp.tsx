import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <aside
      className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-auto"
      aria-label="WhatsApp live chat support"
    >
      {/* Floating Tooltip Bubble */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2.5 bg-white border border-[#E2E8F0] text-[#0F172A] text-xs px-4 py-2.5 rounded-xl shadow-xl">
          <div>
            <div className="font-bold text-[#0F172A]">Chat with Arun &amp; Team</div>
            <div className="text-[11px] text-[#475569]">Direct WhatsApp: +91-9521186150</div>
          </div>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-slate-400 hover:text-[#0F172A] p-1 ml-1 cursor-pointer"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button with Pulse Effect */}
      <a
        href="https://wa.me/919521186150?text=Hello%20Arun%20and%20UDMIDEAS,%20I%20would%20like%20to%20discuss%20a%20multilingual%20website%20design%20and%20digital%20marketing%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:scale-105 active:scale-95 transition-all group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/40"
        aria-label="Start WhatsApp conversation at +91-9521186150"
        title="WhatsApp: +91-9521186150"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-35 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white text-white group-hover:scale-110 transition-transform" />
      </a>
    </aside>
  );
};
