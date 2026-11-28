import React from 'react';
import { X } from 'lucide-react';
import { ConsultationForm } from './ConsultationForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0F172A]/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={onClose}
    >
      <div
        className="relative bg-white border border-[#E2E8F0] rounded-xl sm:rounded-2xl max-w-2xl w-full p-5 sm:p-8 max-h-[92vh] overflow-y-auto shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-5 right-4 sm:right-5 text-[#475569] hover:text-[#0F172A] p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <ConsultationForm onClose={onClose} titleId="contact-modal-title" headingTag="h3" />
      </div>
    </div>
  );
};
