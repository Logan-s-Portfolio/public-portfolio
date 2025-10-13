/**
 * ScrollCards Organism
 *
 * Scroll-triggered card transitions showing different services/specialties.
 * As user scrolls, cards fade in/out with smooth animations.
 * Full viewport cards with large typography - minimal, editorial style.
 * Accessibility: Semantic HTML, respects prefers-reduced-motion
 */

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ScrollCard {
  /** Large title/number (e.g., "01" or icon) */
  number: string;
  /** Main title */
  title: string;
  /** Description */
  description: string;
  /** Optional accent color (terracotta, sage, neutral) */
  accentColor?: "terracotta" | "sage" | "neutral";
}

export interface ScrollCardsProps {
  /** Array of cards to display */
  cards: ScrollCard[];
  /** Additional wrapper class */
  className?: string;
}

export const ScrollCards = ({ cards, className }: ScrollCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate how much scroll progress each card gets
  const cardScrollProgress = 1 / cards.length;

  // Helper to get accent colors
  const getAccentColors = (color: ScrollCard["accentColor"]) => {
    switch (color) {
      case "terracotta":
        return {
          text: "text-terracotta-700",
          bg: "bg-terracotta-100",
          border: "border-terracotta-200",
        };
      case "sage":
        return {
          text: "text-sage-700",
          bg: "bg-sage-100",
          border: "border-sage-200",
        };
      default:
        return {
          text: "text-neutral-700",
          bg: "bg-neutral-100",
          border: "border-neutral-200",
        };
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{
        height: `${cards.length * 100}vh`,
      }}
    >
      {/* Sticky container that holds all cards */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {cards.map((card, index) => {
          // Calculate opacity based on scroll progress
          const start = index * cardScrollProgress;
          const end = (index + 1) * cardScrollProgress;

          const opacity = shouldReduceMotion
            ? 1
            : useTransform(
                scrollYProgress,
                [
                  Math.max(0, start - 0.1),
                  start,
                  start + cardScrollProgress / 2,
                  end,
                  Math.min(1, end + 0.1),
                ],
                [0, 1, 1, 1, 0]
              );

          const scale = shouldReduceMotion
            ? 1
            : useTransform(
                scrollYProgress,
                [start, start + cardScrollProgress / 2, end],
                [0.95, 1, 0.95]
              );

          const colors = getAccentColors(card.accentColor || "terracotta");

          return (
            <motion.div
              key={index}
              style={{
                opacity: shouldReduceMotion ? undefined : opacity,
                scale: shouldReduceMotion ? undefined : scale,
              }}
              className="absolute inset-0 flex items-center justify-center bg-white"
            >
              <div className="container mx-auto px-6 md:px-8 lg:px-12">
                <div className="mx-auto max-w-4xl text-center">
                  {/* Number/Index */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <span
                      className={cn(
                        "inline-flex items-center justify-center rounded-full border-4 font-fraunces text-6xl font-bold md:text-7xl lg:text-8xl",
                        colors.text,
                        colors.border,
                        colors.bg,
                        "h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48"
                      )}
                    >
                      {card.number}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    viewport={{ once: true }}
                    className="mb-6 font-fraunces text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900 md:text-5xl lg:text-6xl"
                  >
                    {card.title}
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    viewport={{ once: true }}
                    className="font-inter text-lg leading-[1.6] text-neutral-600 md:text-xl lg:text-2xl"
                  >
                    {card.description}
                  </motion.p>

                  {/* Progress indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    viewport={{ once: true }}
                    className="mt-12 flex items-center justify-center gap-2"
                  >
                    {cards.map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "h-1.5 w-12 rounded-full transition-colors duration-300",
                          i === index
                            ? `${colors.bg} border-2 ${colors.border}`
                            : "bg-neutral-200"
                        )}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

ScrollCards.displayName = "ScrollCards";
