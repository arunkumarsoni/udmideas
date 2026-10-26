import React, { useState } from 'react';
import { X, Send, MessageCircle, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Design & Development',
    region: 'USA',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="relative bg-slate-950 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[92vh] overflow-y-auto shadow-2xl text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-800"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Thank You, {formData.name}!</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Arun and the UDMIDEAS multilingual strategy team have received your inquiry. We will analyze your target market ({formData.region}) and reach out within 4 business hours.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`https://wa.me/919521186150?text=Hello%20Arun,%20I%20just%20submitted%20a%20project%20inquiry%20under%20the%20name%20${encodeURIComponent(formData.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Follow up immediately on WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                Direct Consultation with Founder Arun
              </div>
              <h3 id="contact-modal-title" className="text-2xl font-bold text-white tracking-tight">
                Request Free Multilingual Architecture Audit.
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                15+ Years Agency Heritage · Custom Coding Only · Guaranteed 4-Hour Response Time.
              </p>
            </div>

            {/* Quick WhatsApp Bar */}
            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 mb-6 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-white">Need an immediate answer?</div>
                  <div className="text-emerald-300">WhatsApp Hotline: +91-9521186150</div>
                </div>
              </div>
              <a
                href="https://wa.me/919521186150?text=Hello%20UDMIDEAS,%20I%20want%20to%20discuss%20a%20website%20and%20marketing%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs whitespace-nowrap shadow-sm"
              >
                Open WhatsApp
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="text"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option>Website Design & Development (Custom Code)</option>
                    <option>React Js & Headless Web Applications</option>
                    <option>Custom WordPress & WooCommerce</option>
                    <option>Laravel & CodeIgniter Frameworks</option>
                    <option>Scalable Magento eCommerce</option>
                    <option>International Multilingual SEO</option>
                    <option>AEO (Answer Engine Optimization)</option>
                    <option>GEO (Generative Engine Optimization)</option>
                    <option>Social Media Marketing & Video Creation</option>
                    <option>Pay Per Click (PPC) & Google Ads</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Target Geographic Region
                </label>
                <select
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                >
                  <option>USA (New York, California, Texas & Nationwide)</option>
                  <option>Latin America (Brazil, Mexico, Colombia & LATAM)</option>
                  <option>European Union (France, Germany, Spain, Switzerland, Poland)</option>
                  <option>Israel (Tel Aviv, Jerusalem)</option>
                  <option>Arabic World (UAE, Saudi Arabia, Qatar & GCC)</option>
                  <option>Global Cross-Border Multi-Region</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Project Details & Goals
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your current platform, target languages, and desired timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="text-[11px] text-slate-500">
                  🔒 Strict NDA protected. No spam.
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all inline-flex items-center gap-2"
                >
                  <span>Submit Consultation Request</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
