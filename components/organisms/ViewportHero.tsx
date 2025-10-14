/**
 * ViewportHero Organism
 *
 * Full-viewport hero with scroll-triggered typing animation.
 * Initially shows "Hi, I'm Logan Bell" with blinking cursor.
 * As user scrolls, reveals additional typed text letter by letter.
 * Design: Text-focused, breaking the grid while maintaining design system.
 * Accessibility: Semantic HTML, ARIA labels, reduced motion support
 */

"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { StatCard } from "@/components/molecules/StatCard";
import { Button } from "@/components/atoms/Button";

export interface ViewportHeroProps {
  /** Name to display (e.g., "Logan Bell") */
  name: string;
  /** Greeting text (e.g., "Hi, I'm") */
  greeting?: string;
  /** Typing phrases to reveal on scroll */
  typingPhrases?: string[];
  /** Profile photo URL */
  photoUrl?: string;
  /** About photo URL (shown after typing completes) */
  aboutPhotoUrl?: string;
  /** Alt text for photo */
  photoAlt?: string;
  /** Location (e.g., "Austin, TX") */
  location?: string;
  /** Bio paragraphs for about section */
  bioParagraphs?: string[];
  /** Stats to display */
  stats?: Array<{
    icon: React.ReactNode;
    value: string;
    label: string;
  }>;
  /** CTA button label */
  ctaLabel?: string;
  /** CTA button href */
  ctaHref?: string;
  /** Additional wrapper class */
  className?: string;
}

export const ViewportHero = ({
  name,
  greeting = "Hi, I'm",
  typingPhrases = [
    "Product Designer",
    "Entrepreneur",
    "Crafting memorable user experiences"
  ],
  photoUrl = "https://i.pravatar.cc/600?img=12",
  aboutPhotoUrl,
  photoAlt = "Profile photo",
  location,
  bioParagraphs = [],
  stats = [],
  ctaLabel,
  ctaHref,
  className,
}: ViewportHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [visibleCharCount, setVisibleCharCount] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  // Combine all typing phrases into one string with line breaks
  const fullText = typingPhrases.join("\n");
  const totalChars = fullText.length;

  // Set typing complete immediately if reduced motion
  useEffect(() => {
    if (shouldReduceMotion) {
      setVisibleCharCount(totalChars);
      setIsTypingComplete(true);
    }
  }, [shouldReduceMotion, totalChars]);

  // Lock scrolling and drive typing with wheel/touch events
  useEffect(() => {
    if (shouldReduceMotion || isTypingComplete) return;

    let scrollAccumulator = 0;
    const scrollPerChar = 6; // How much wheel delta needed per character (higher = slower)
    let touchStartY = 0;

    const handleWheel = (e: WheelEvent) => {
      if (isTypingComplete) return;

      // Prevent all scrolling
      e.preventDefault();

      // Accumulate scroll delta
      scrollAccumulator += Math.abs(e.deltaY);

      // Calculate new character count based on accumulated scroll
      const newCharCount = Math.min(
        Math.floor(scrollAccumulator / scrollPerChar),
        totalChars
      );

      setVisibleCharCount(newCharCount);

      // Check if typing is complete
      if (newCharCount >= totalChars) {
        setIsTypingComplete(true);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (isTypingComplete) return;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isTypingComplete) return;

      // Prevent all scrolling
      e.preventDefault();

      const touchY = e.touches[0].clientY;
      const deltaY = Math.abs(touchStartY - touchY);

      // Accumulate touch distance
      scrollAccumulator += deltaY;
      touchStartY = touchY;

      // Calculate new character count based on accumulated scroll
      const newCharCount = Math.min(
        Math.floor(scrollAccumulator / scrollPerChar),
        totalChars
      );

      setVisibleCharCount(newCharCount);

      // Check if typing is complete
      if (newCharCount >= totalChars) {
        setIsTypingComplete(true);
      }
    };

    // Prevent scrolling on body
    document.body.style.overflow = 'hidden';

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      // Don't unlock scroll here - let the next useEffect handle it
    };
  }, [isTypingComplete, totalChars, shouldReduceMotion]);

  // Auto-fade about section after typing completes
  useEffect(() => {
    if (!isTypingComplete) return;

    // Unlock scroll immediately
    document.body.style.overflow = '';

    if (shouldReduceMotion) {
      // Show about immediately if reduced motion
      setShowAbout(true);
      return;
    }

    // Wait 500ms, then fade in about content
    const aboutTimer = setTimeout(() => {
      setShowAbout(true);
    }, 500);

    return () => {
      clearTimeout(aboutTimer);
    };
  }, [isTypingComplete, shouldReduceMotion]);


  // Get the visible text based on character count
  const visibleText = fullText.substring(0, visibleCharCount);

  return (
    <motion.section
      id="viewport-hero"
      ref={containerRef}
      className={cn(
        "flex flex-col min-h-[100svh] overflow-hidden",
        className
      )}
      aria-labelledby="viewport-hero-heading"
    >
      {/* Subtle decorative elements - terracotta and sage */}
      <div
        className="absolute left-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-terracotta-300 opacity-5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-sage-300 opacity-5 blur-3xl"
        aria-hidden="true"
      />

      {/* Content container - centered during hero, flows naturally during about */}
      <div className={cn(
        "flex min-h-[100svh] w-full shrink-0 px-6 md:px-8",
        showAbout ? "items-start pt-24 pb-20 md:items-center md:pt-0 md:pb-0" : "items-center justify-center"
      )}>
        <div className="relative w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Profile photo column - 4 cols, transforms to show name/location below on scroll */}
            {photoUrl && (
              <div className="lg:col-span-4">
                <div className="relative w-[45%] lg:w-full lg:max-w-none">
                  {/* Terracotta glow effect */}
                  <div
                    className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-terracotta-400/20 to-terracotta-300/10 blur-2xl"
                    aria-hidden="true"
                  />

                  {/* Photo container - 4:5 portrait aspect ratio */}
                  <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-2xl aspect-[4/5]">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={isTypingComplete && aboutPhotoUrl ? "about-photo" : "initial-photo"}
                        src={isTypingComplete && aboutPhotoUrl ? aboutPhotoUrl : photoUrl}
                        alt={photoAlt}
                        className="h-full w-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                    </AnimatePresence>
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 to-transparent" />
                  </div>
                </div>

                {/* Name and location - fade in with about section (desktop only) */}
                <motion.div
                  className="mt-4 text-center hidden lg:block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showAbout ? 1 : 0 }}
                  transition={{ duration: 1 }}
                >
                  <p className="font-inter text-base font-medium text-neutral-900">
                    {name}
                  </p>
                  {location && (
                    <p className="font-inter text-sm text-neutral-600">
                      {location}
                    </p>
                  )}
                </motion.div>
              </div>
            )}

            {/* Right column - 8 cols, transforms from hero text to about content */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                {!showAbout ? (
                  <motion.div
                    key="hero-text"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                  >
                    {/* Main heading */}
                    <h1
                      id="viewport-hero-heading"
                      className="mb-8 font-fraunces text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                    >
                      {greeting && (
                        <span className="block font-inter text-xl font-medium tracking-wide text-neutral-600 sm:text-2xl md:text-3xl lg:text-4xl">
                          {greeting}
                        </span>
                      )}
                      {name}
                      {/* Show cursor after name only when no typing has started */}
                      {visibleCharCount === 0 && (
                        <motion.span
                          className="inline-block w-1 bg-terracotta-600 ml-2"
                          style={{
                            height: "0.9em",
                            verticalAlign: "baseline",
                          }}
                          animate={shouldReduceMotion ? {} : {
                            opacity: [1, 0, 1],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      )}
                    </h1>

                    {/* Scroll-triggered typing text with cursor - terracotta color */}
                    <div className="font-inter text-lg leading-relaxed text-terracotta-600 sm:text-xl md:text-2xl lg:text-3xl">
                      <span className="whitespace-pre-wrap">
                        {shouldReduceMotion ? fullText : visibleText}
                      </span>
                      {/* Cursor that follows the typing - show during typing, hide when complete */}
                      {visibleCharCount > 0 && !isTypingComplete && (
                        <motion.span
                          className="inline-block w-1 bg-terracotta-600 ml-1"
                          style={{
                            height: "1em",
                            verticalAlign: "text-bottom",
                          }}
                          animate={shouldReduceMotion ? {} : {
                            opacity: [1, 0, 1],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="about-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                  >
                    {/* Name and location on mobile - show in about section */}
                    <div className="mb-6 lg:hidden">
                      <p className="font-inter text-xl font-semibold text-neutral-900">
                        {name}
                      </p>
                      {location && (
                        <p className="font-inter text-base text-neutral-600">
                          {location}
                        </p>
                      )}
                    </div>

                    <h2 className="mb-6 font-fraunces text-3xl font-semibold text-neutral-900 md:text-4xl lg:text-5xl">
                      About Me
                    </h2>

                    {/* Bio paragraphs */}
                    <div className="space-y-4">
                      {bioParagraphs.map((para, i) => (
                        <p
                          key={i}
                          className="font-inter text-base leading-relaxed text-neutral-600 md:text-lg"
                        >
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Stats grid */}
                    {stats.length > 0 && (
                      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                        {stats.map((stat, i) => (
                          <StatCard
                            key={i}
                            icon={stat.icon}
                            value={stat.value}
                            label={stat.label}
                          />
                        ))}
                      </div>
                    )}

                    {/* CTA Button */}
                    {ctaLabel && ctaHref && (
                      <div className="mt-8">
                        <Link
                          href={ctaHref}
                          className="inline-flex items-center justify-center gap-2 font-inter font-medium rounded-md transition-colors transition-shadow duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-600 focus-visible:ring-offset-2 bg-terracotta-600 text-white shadow-sm hover:bg-terracotta-700 hover:shadow-md active:bg-terracotta-800 active:shadow-sm h-12 px-6 text-lg"
                        >
                          {ctaLabel}
                        </Link>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hide when typing is complete */}
      {!isTypingComplete && (
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-inter text-xs uppercase tracking-widest text-neutral-400">
              Scroll to type
            </span>
            <motion.div
              className="h-12 w-0.5 bg-neutral-300"
              animate={shouldReduceMotion ? {} : {
                scaleY: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

ViewportHero.displayName = "ViewportHero";
