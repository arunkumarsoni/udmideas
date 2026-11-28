import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS } from '../data/contentData';

export const ReviewsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Exact 5-second automatic sliding requirement
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
      }, 5000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const currentReview = REVIEWS[currentIndex];

  return (
    <section id="reviews" className="py-20 lg:py-24 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="text-[12px] sm:text-[13px] font-semibold text-[#1D4ED8] uppercase tracking-[0.08em] mb-2">
              ★ TRUSTED BY BUSINESSES
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
              10 Verified Global Client Reviews.
            </h2>
            <p className="mt-2 text-base text-[#475569]">
              Auto-advancing every 5 seconds · Verified endorsements from USA, EU, LATAM, Israel &amp; Middle East.
            </p>
          </div>

          {/* Slider controls & counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#475569] mr-2 tabular-nums">
              <span className="text-[#0F172A] font-bold">{currentIndex + 1}</span> of {REVIEWS.length}
            </span>
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] hover:border-[#1D4ED8]/40 hover:bg-[#F8FAFC] transition-all cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] hover:border-[#1D4ED8]/40 hover:bg-[#F8FAFC] transition-all cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Active Review Spotlight Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-6 sm:p-10 lg:p-12 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-600/30"
        >
          {/* Top Rating & Metric */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-1">
              {[...Array(currentReview.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
              ))}
              <span className="ml-2 text-xs font-bold text-[#0F172A] tabular-nums">5.0 / 5.0 Verified Rating</span>
            </div>

            <span className="text-xs font-mono text-[#0F172A] bg-amber-50 px-3 py-1 rounded-md border border-amber-200/80 font-semibold">
              {currentReview.metrics}
            </span>
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-lg sm:text-2xl font-medium text-[#0F172A] leading-relaxed mb-8 text-left text-balance">
            "{currentReview.reviewText}"
          </blockquote>

          {/* Client Details Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#E2E8F0] text-left">
            <div>
              <div className="text-base font-bold text-[#0F172A] flex items-center gap-2">
                <span>{currentReview.name}</span>
                <span className="text-base">{currentReview.countryFlag}</span>
              </div>
              <div className="text-xs text-[#475569] mt-0.5">
                {currentReview.role} · <span className="text-[#0F172A] font-semibold">{currentReview.company}</span>
              </div>
              <div className="text-xs text-[#1D4ED8] font-medium mt-0.5">
                {currentReview.country}
              </div>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-[11px] text-[#475569] uppercase tracking-[0.08em] font-semibold">
                Delivered Service
              </div>
              <div className="text-xs font-bold text-[#0F172A] mt-0.5">
                {currentReview.serviceReceived}
              </div>
            </div>
          </div>

          {/* Auto-Slide Progress Bar (5s cycle) */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E2E8F0] rounded-b-xl overflow-hidden">
            <div
              key={currentIndex}
              className={`h-full bg-[#1D4ED8] ${isPaused ? '' : 'animate-[progressBar_5s_linear_infinite]'}`}
              style={{
                animationDuration: '5000ms'
              }}
            />
          </div>
        </div>

        {/* 10 Dots Navigation Bar */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {REVIEWS.map((rev, index) => (
            <button
              key={rev.id}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === index
                  ? 'w-8 bg-[#1D4ED8]'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to review ${index + 1} from ${rev.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
