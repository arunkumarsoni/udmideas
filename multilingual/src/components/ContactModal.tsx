import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, Mail, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Design & Development (Custom Code)',
    region: 'USA (New York, California, Texas & Nationwide)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setErrorMessage(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://formspree.io/f/mljbrgbp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || 'N/A',
          service: formData.service,
          region: formData.region,
          message: formData.message.trim() || 'N/A'
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        // Clear form fields after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Website Design & Development (Custom Code)',
          region: 'USA (New York, California, Texas & Nationwide)',
          message: ''
        });
      } else {
        const data = await response.json().catch(() => null);
        const errorDetail =
          data?.errors?.map((err: { message?: string }) => err.message).filter(Boolean).join(', ') ||
          'Submission failed. Please try again or reach out directly via WhatsApp (+91-9521186150) or email (info@udmideasusa.com).';
        setErrorMessage(errorDetail);
      }
    } catch {
      setErrorMessage(
        'Unable to connect to the form server. Please try again or contact us directly via WhatsApp (+91-9521186150) or email (info@udmideasusa.com).'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="relative bg-slate-950 border border-slate-800 rounded-2xl sm:rounded-3xl max-w-2xl w-full p-5 sm:p-8 max-h-[92vh] overflow-y-auto shadow-2xl text-left">
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-5 right-4 sm:right-5 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-800"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 sm:py-10 space-y-4 animate-in fade-in">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Thank you! Your consultation request has been sent.
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              We will get back to you within 4 hours.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20just%20submitted%20a%20consultation%20request%20on%20UDMIDEAS."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp (+91-9521186150)</span>
              </a>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                Direct Consultation with Founder Arun
              </div>
              <h3 id="contact-modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Request Free Multilingual Architecture Audit.
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                15+ Years Agency Heritage · Custom Coding Only · Guaranteed 4-Hour Response Time.
              </p>
            </div>

            {/* Quick WhatsApp Bar */}
            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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
                className="w-full sm:w-auto text-center px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-sm transition-all"
              >
                Open WhatsApp
              </a>
            </div>

            {/* Error Notification Alert */}
            {errorMessage && (
              <div className="p-3.5 mb-4 rounded-xl bg-rose-950/70 border border-rose-800/80 text-rose-200 text-xs flex items-start gap-2.5 animate-in fade-in">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="font-semibold text-white">Unable to send request</div>
                  <div className="mt-0.5">{errorMessage}</div>
                </div>
              </div>
            )}

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
                    disabled={isSubmitting}
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm sm:text-xs rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    disabled={isSubmitting}
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm sm:text-xs rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 disabled:opacity-60"
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
                    disabled={isSubmitting}
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm sm:text-xs rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Service of Interest
                  </label>
                  <select
                    disabled={isSubmitting}
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm sm:text-xs rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500 disabled:opacity-60"
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
                  disabled={isSubmitting}
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm sm:text-xs rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500 disabled:opacity-60"
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
                  disabled={isSubmitting}
                  placeholder="Describe your current platform, target languages, and desired timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm sm:text-xs rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 disabled:opacity-60"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-[11px] text-slate-400 text-center sm:text-left">
                  🔒 Direct delivery to <span className="text-emerald-400 font-mono">info@udmideasusa.com</span> · Strict NDA protected.
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 disabled:cursor-not-allowed shadow-md shadow-blue-600/30 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
