import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
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
    <section id="reviews" className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              04. Client Satisfaction & ROI
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              10 Verified Global Reviews.
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Auto-advancing every 5 seconds · Client endorsements from USA, EU, LATAM, Israel & Middle East.
            </p>
          </div>

          {/* Slider controls & counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400 mr-2">
              <span className="text-white font-bold">{currentIndex + 1}</span> of {REVIEWS.length}
            </span>
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-none"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-none"
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
          className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl transition-all duration-300"
        >
          {/* Top quote icon */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-1">
              {[...Array(currentReview.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-bold text-slate-200">5.0 / 5.0 Rating</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-900/40 font-semibold">
                {currentReview.metrics}
              </span>
            </div>
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-lg sm:text-2xl font-normal text-slate-100 leading-relaxed mb-8 text-left text-balance">
            "{currentReview.reviewText}"
          </blockquote>

          {/* Client Details Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800/80 text-left">
            <div>
              <div className="text-base font-bold text-white flex items-center gap-2">
                <span>{currentReview.name}</span>
                <span className="text-base">{currentReview.countryFlag}</span>
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {currentReview.role} · <span className="text-slate-300 font-medium">{currentReview.company}</span>
              </div>
              <div className="text-xs text-blue-400 mt-0.5">
                {currentReview.country}
              </div>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                Delivered Service:
              </div>
              <div className="text-xs font-medium text-slate-200 mt-0.5">
                {currentReview.serviceReceived}
              </div>
            </div>
          </div>

          {/* Auto-Slide Progress Bar (5s cycle) */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800/50 rounded-b-3xl overflow-hidden">
            <div
              key={currentIndex}
              className={`h-full bg-blue-500 ${isPaused ? '' : 'animate-[progressBar_5s_linear_infinite]'}`}
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
              className={`h-2 rounded-full transition-all ${
                currentIndex === index
                  ? 'w-8 bg-blue-500'
                  : 'w-2 bg-slate-800 hover:bg-slate-700'
              }`}
              aria-label={`Go to review ${index + 1} from ${rev.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
