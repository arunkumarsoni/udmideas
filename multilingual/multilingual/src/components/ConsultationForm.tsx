import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

interface ConsultationFormProps {
  onClose?: () => void;
  titleId?: string;
  headingTag?: 'h2' | 'h3';
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  onClose,
  titleId,
  headingTag = 'h3'
}) => {
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

  const HeadingTag = headingTag;

  if (isSuccess) {
    return (
      <div className="text-center py-8 sm:py-10 space-y-4">
        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
          Thank you! Your consultation request has been sent.
        </h3>
        <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
          We will get back to you within 4 hours.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/919521186150?text=Hello%20Arun,%20I%20just%20submitted%20a%20consultation%20request%20on%20UDMIDEAS."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm hover:shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp (+91-9521186150)</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              if (onClose) onClose();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-[#0F172A] bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {onClose ? 'Close' : 'Submit Another Request'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-left">
      <div className={`mb-6 ${onClose ? 'pr-8' : ''}`}>
        <div className="text-[12px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] mb-1">
          – DIRECT CONSULTATION WITH FOUNDER ARUN
        </div>
        <HeadingTag id={titleId} className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
          Request Free Consultation to Grow Business 2027-2028
        </HeadingTag>
        <p className="text-xs text-[#475569] mt-1.5 leading-relaxed">
          15+ Years Agency Heritage · Custom Coding Only · Guaranteed 4-Hour Response Time - Website Design Development Services - SEO Services - AEO - GEO - SMM - PPC - Video Creation - Digital marketing Solutions
        </p>
      </div>

      {/* Quick WhatsApp Bar */}
      <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
          <div className="text-xs">
            <div className="font-semibold text-[#0F172A]">Need an immediate answer?</div>
            <div className="text-[#475569]">
              WhatsApp Hotline: <span className="font-semibold text-[#0F172A]">+91-9521186150</span>
            </div>
          </div>
        </div>
        <a
          href="https://wa.me/919521186150?text=Hello%20UDMIDEAS,%20I%20want%20to%20discuss%20a%20website%20and%20marketing%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-center px-4 py-2 rounded-lg bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-xs shadow-sm transition-all shrink-0"
        >
          Open WhatsApp
        </a>
      </div>

      {/* Error Notification Alert */}
      {errorMessage && (
        <div className="p-3.5 mb-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <div className="font-semibold text-red-900">Unable to send request</div>
            <div className="mt-0.5">{errorMessage}</div>
          </div>
        </div>
      )}

      {/* Standardized Consultation Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#0F172A] mb-1">
              Your Full Name *
            </label>
            <input
              type="text"
              required
              disabled={isSubmitting}
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 disabled:opacity-60"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0F172A] mb-1">
              Work Email *
            </label>
            <input
              type="email"
              required
              disabled={isSubmitting}
              placeholder="name@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 disabled:opacity-60"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#0F172A] mb-1">
              Phone / WhatsApp Number
            </label>
            <input
              type="text"
              disabled={isSubmitting}
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 disabled:opacity-60"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0F172A] mb-1">
              Service of Interest
            </label>
            <select
              disabled={isSubmitting}
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 disabled:opacity-60"
            >
              <option>Website Design &amp; Development (Custom Code)</option>
              <option>React Js &amp; Headless Web Applications</option>
              <option>Custom WordPress &amp; WooCommerce</option>
              <option>Laravel &amp; CodeIgniter Frameworks</option>
              <option>Scalable Magento eCommerce</option>
              <option>International Multilingual SEO</option>
              <option>AEO (Answer Engine Optimization)</option>
              <option>GEO (Generative Engine Optimization)</option>
              <option>Social Media Marketing &amp; Video Creation</option>
              <option>Pay Per Click (PPC) &amp; Google Ads</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#0F172A] mb-1">
            Target Geographic Region
          </label>
          <select
            disabled={isSubmitting}
            value={formData.region}
            onChange={(e) => setFormData({ ...formData, region: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 disabled:opacity-60"
          >
            <option>USA (New York, California, Texas &amp; Nationwide)</option>
            <option>Latin America (Brazil, Mexico, Colombia &amp; LATAM)</option>
            <option>European Union (France, Germany, Spain, Switzerland, Poland)</option>
            <option>Israel (Tel Aviv, Jerusalem)</option>
            <option>Arabic World (UAE, Saudi Arabia, Qatar &amp; GCC)</option>
            <option>Global Cross-Border Multi-Region</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#0F172A] mb-1">
            Project Details &amp; Goals
          </label>
          <textarea
            rows={3}
            disabled={isSubmitting}
            placeholder="Describe your current platform, target languages, and desired timeline..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 disabled:opacity-60"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-[#475569] text-center sm:text-left">
            🔒 Direct delivery to <span className="text-[#0F172A] font-semibold font-mono">info@udmideasusa.com</span> · Strict NDA protected.
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] disabled:opacity-60 disabled:cursor-not-allowed shadow-sm hover:shadow-md transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer shrink-0"
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
  );
};
