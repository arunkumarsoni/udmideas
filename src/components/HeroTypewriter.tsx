import React, { useEffect, useState } from 'react';

const TYPEWRITER_PHRASES: readonly string[] = [
  'eCommerce Website Design',
  'eCommerce Website Development',
  'eCommerce Search Engine Optimization - SEO',
  'eCommerce Answer Engine Optimization - AEO',
  'eCommerce Generative Engine Optimization- GEO',
  'eCommerce Social Media Marketing - SMM',
  'eCommerce Pay-Per-Click - PPC - Advertising'
];

const LONGEST_PHRASE = TYPEWRITER_PHRASES.reduce(
  (longest, current) => (current.length > longest.length ? current : longest),
  TYPEWRITER_PHRASES[0]
);

const TYPING_SPEED_MS = 55;
const DELETING_SPEED_MS = 32;
const PAUSE_AFTER_TYPE_MS = 1800;
const PAUSE_AFTER_DELETE_MS = 350;

export const HeroTypewriter: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
  const isAtFullPhrase = !isDeleting && displayedText === currentPhrase;
  const isAtEmpty = isDeleting && displayedText === '';

  useEffect(() => {
    let timeoutId: number;

    if (!isDeleting && displayedText.length < currentPhrase.length) {
      timeoutId = window.setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
      }, TYPING_SPEED_MS);
    } else if (!isDeleting && displayedText.length === currentPhrase.length) {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_AFTER_TYPE_MS);
    } else if (isDeleting && displayedText.length > 0) {
      timeoutId = window.setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
      }, DELETING_SPEED_MS);
    } else if (isDeleting && displayedText.length === 0) {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
      }, PAUSE_AFTER_DELETE_MS);
    }

    return () => window.clearTimeout(timeoutId);
  }, [displayedText, isDeleting, currentPhrase]);

  return (
    <div className="text-left">
      <h1 className="font-extrabold tracking-[-0.02em] leading-[1.15]">
        {/* Static Prefix */}
        <span className="block text-[28px] sm:text-[38px] lg:text-[42px] xl:text-[46px] text-[#0F172A] text-balance">
          We Accelerate Your Growth with{' '}
          <span className="relative inline-block text-[#0F172A]">
            <span className="relative z-10">Multilingual</span>
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 bottom-0.5 sm:bottom-1 h-2.5 sm:h-3 bg-[#F59E0B]/25 rounded-xs -z-0"
            />
          </span>
          ...
        </span>

        {/* Dynamic Typewriter Stage (Grid overlay reserves exact wrapped height on mobile & desktop — zero layout jump) */}
        <span className="mt-2 sm:mt-2.5 grid grid-cols-1 items-start text-[22px] sm:text-[30px] lg:text-[34px] xl:text-[38px] leading-[1.2] text-[#1D4ED8]">
          {/* Invisible height-reservation layer */}
          <span
            aria-hidden="true"
            className="col-start-1 row-start-1 invisible select-none pointer-events-none"
          >
            {LONGEST_PHRASE}
            <span className="inline-block w-[3px] ml-1">&nbsp;</span>
          </span>

          {/* Accessible complete phrase for screen readers */}
          <span className="sr-only" aria-live="polite" aria-atomic="true">
            {currentPhrase}
          </span>

          {/* Visible live typing & deleting text + blinking caret */}
          <span
            aria-hidden="true"
            className="col-start-1 row-start-1 block break-words"
          >
            {displayedText}
            <span
              className="inline-block w-[3px] h-[0.9em] bg-[#1D4ED8] ml-1 align-middle rounded-full translate-y-[-0.05em]"
              style={{
                animation:
                  isAtFullPhrase || isAtEmpty
                    ? 'caretBlink 0.9s step-end infinite'
                    : 'none'
              }}
            />
          </span>
        </span>
      </h1>
    </div>
  );
};
