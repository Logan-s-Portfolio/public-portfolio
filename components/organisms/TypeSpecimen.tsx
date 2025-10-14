/**
 * TypeSpecimen Organism
 *
 * Displays the typography system with:
 * - Fraunces (display serif) + Inter (body sans) pairing
 * - Complete type scale (xs through 6xl)
 * - Font weights, line heights, letter spacing
 * - Interactive samples
 * - Animated reveals
 * Design System: Full typography showcase
 * Accessibility: Semantic HTML, proper heading hierarchy
 */

"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

const typeSizes = [
  { name: "6xl", size: "5rem", lineHeight: "1.1", example: "Hero Headlines" },
  { name: "5xl", size: "4rem", lineHeight: "1.125", example: "Section Headers" },
  { name: "4xl", size: "3rem", lineHeight: "1.167", example: "Page Titles" },
  { name: "3xl", size: "2.5rem", lineHeight: "1.2", example: "Large Headings" },
  { name: "2xl", size: "2rem", lineHeight: "1.25", example: "Card Headers" },
  { name: "xl", size: "1.5rem", lineHeight: "1.333", example: "Subheadings" },
  { name: "lg", size: "1.25rem", lineHeight: "1.6", example: "Lead Paragraphs" },
  { name: "base", size: "1rem", lineHeight: "1.5", example: "Body Text" },
  { name: "sm", size: "0.875rem", lineHeight: "1.428", example: "Small Text" },
  { name: "xs", size: "0.75rem", lineHeight: "1.5", example: "Captions" },
];

const fontWeights = [
  { name: "Regular", weight: "400", class: "font-normal" },
  { name: "Medium", weight: "500", class: "font-medium" },
  { name: "Semibold", weight: "600", class: "font-semibold" },
  { name: "Bold", weight: "700", class: "font-bold" },
];

const letterSpacings = [
  { name: "Tighter", value: "-0.02em", class: "tracking-tighter" },
  { name: "Tight", value: "-0.01em", class: "tracking-tight" },
  { name: "Normal", value: "0", class: "tracking-normal" },
  { name: "Wide", value: "0.01em", class: "tracking-wide" },
  { name: "Wider", value: "0.05em", class: "tracking-wider" },
];

export interface TypeSpecimenProps {
  /** Section heading */
  heading?: string;
  /** Section description */
  description?: string;
  /** Additional wrapper class */
  className?: string;
}

export const TypeSpecimen = ({
  heading = "Typography System",
  description = "Fraunces + Inter pairing. Only 8% of portfolios use serif + sans combination.",
  className,
}: TypeSpecimenProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [activeFont, setActiveFont] = useState<"fraunces" | "inter">("fraunces");

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative bg-gradient-to-b from-neutral-50 to-white px-4 py-16 md:px-6 md:py-24 lg:px-8",
        className
      )}
      aria-labelledby="type-specimen-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
        >
          <Heading as="h2" variant="display-2xl" id="type-specimen-heading" className="mb-4">
            {heading}
          </Heading>
          <Text variant="lead" className="mx-auto max-w-3xl text-neutral-600">
            {description}
          </Text>
        </motion.div>

        {/* Font Pairing Hero */}
        <motion.div
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] as const }}
        >
          <div className="mb-8 font-fraunces text-6xl font-bold tracking-tight text-neutral-900 md:text-7xl lg:text-8xl">
            Fraunces
          </div>
          <div className="mb-4 text-4xl text-terracotta-600">+</div>
          <div className="font-inter text-5xl font-medium tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
            Inter
          </div>
          <Text variant="body" className="mx-auto mt-8 max-w-2xl text-neutral-600">
            A sophisticated pairing: Fraunces brings warmth and personality to headlines,
            while Inter provides clarity and readability for body text.
          </Text>
        </motion.div>

        {/* Font Toggle */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-flex rounded-xl border-2 border-neutral-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setActiveFont("fraunces")}
              className={cn(
                "rounded-lg px-6 py-3 font-fraunces text-lg font-semibold transition-all duration-300",
                activeFont === "fraunces"
                  ? "bg-terracotta-500 text-white shadow-md"
                  : "text-neutral-600 hover:text-neutral-900"
              )}
            >
              Fraunces
            </button>
            <button
              onClick={() => setActiveFont("inter")}
              className={cn(
                "rounded-lg px-6 py-3 font-inter text-lg font-medium transition-all duration-300",
                activeFont === "inter"
                  ? "bg-sage-500 text-white shadow-md"
                  : "text-neutral-600 hover:text-neutral-900"
              )}
            >
              Inter
            </button>
          </div>
        </motion.div>

        {/* Type Scale */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
        >
          <Heading as="h3" variant="h3" className="mb-8">
            Type Scale
          </Heading>
          <div className="space-y-8">
            {typeSizes.map((type, index) => (
              <motion.div
                key={type.name}
                className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-terracotta-300 hover:shadow-md"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.05,
                  ease: [0.33, 1, 0.68, 1] as const,
                }}
              >
                <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-4">
                  <div>
                    <Text variant="caption" className="uppercase text-neutral-500">
                      Size
                    </Text>
                    <Text variant="small" className="font-mono font-semibold text-neutral-900">
                      {type.name} / {type.size}
                    </Text>
                  </div>
                  <div>
                    <Text variant="caption" className="uppercase text-neutral-500">
                      Line Height
                    </Text>
                    <Text variant="small" className="font-mono font-semibold text-neutral-900">
                      {type.lineHeight}
                    </Text>
                  </div>
                  <div className="md:col-span-2">
                    <Text variant="caption" className="uppercase text-neutral-500">
                      Usage
                    </Text>
                    <Text variant="small" className="font-semibold text-neutral-900">
                      {type.example}
                    </Text>
                  </div>
                </div>
                <div
                  className={cn(
                    "text-neutral-900 transition-all duration-300",
                    activeFont === "fraunces" ? "font-fraunces" : "font-inter"
                  )}
                  style={{
                    fontSize: type.size,
                    lineHeight: type.lineHeight,
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Font Weights */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
        >
          <Heading as="h3" variant="h3" className="mb-8">
            Font Weights
          </Heading>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {fontWeights.map((weight, index) => (
              <motion.div
                key={weight.name}
                className="rounded-xl border border-neutral-200 bg-white p-6 text-center transition-all duration-300 hover:border-sage-300 hover:shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.1,
                  ease: [0.33, 1, 0.68, 1] as const,
                }}
              >
                <Text variant="caption" className="mb-3 uppercase text-neutral-500">
                  {weight.name}
                </Text>
                <div
                  className={cn(
                    "mb-2 text-4xl text-neutral-900",
                    weight.class,
                    activeFont === "fraunces" ? "font-fraunces" : "font-inter"
                  )}
                >
                  Aa
                </div>
                <Text variant="small" className="font-mono text-neutral-600">
                  {weight.weight}
                </Text>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Letter Spacing */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.33, 1, 0.68, 1] as const }}
        >
          <Heading as="h3" variant="h3" className="mb-8">
            Letter Spacing
          </Heading>
          <div className="space-y-4">
            {letterSpacings.map((spacing, index) => (
              <motion.div
                key={spacing.name}
                className="rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-terracotta-300 hover:shadow-md"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{
                  duration: 0.6,
                  delay: 1 + index * 0.1,
                  ease: [0.33, 1, 0.68, 1] as const,
                }}
              >
                <div className="mb-3 flex items-baseline justify-between">
                  <Text variant="small" className="font-semibold uppercase text-neutral-700">
                    {spacing.name}
                  </Text>
                  <Text variant="small" className="font-mono text-neutral-500">
                    {spacing.value}
                  </Text>
                </div>
                <div
                  className={cn(
                    "text-2xl text-neutral-900",
                    spacing.class,
                    activeFont === "fraunces" ? "font-fraunces" : "font-inter"
                  )}
                >
                  The quick brown fox jumps over the lazy dog
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Real-World Example */}
        <motion.div
          className="rounded-2xl border-2 border-sage-200 bg-sage-50 p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.33, 1, 0.68, 1] as const }}
        >
          <Heading as="h3" variant="display-2xl" className="mb-6 font-fraunces">
            Typography in Action
          </Heading>
          <Text variant="lead" className="mb-6 font-inter">
            This pairing creates a sophisticated hierarchy. Fraunces headlines grab
            attention with their distinctive curves and warmth.
          </Text>
          <Text variant="body" className="mb-4 font-inter">
            Inter body text provides excellent readability with its neutral, geometric forms.
            The consistent x-height and open apertures make it ideal for extended reading,
            while maintaining a modern, clean aesthetic.
          </Text>
          <Text variant="body" className="font-inter text-neutral-600">
            Together, they create a balanced, accessible, and visually engaging reading
            experience across all screen sizes and contexts.
          </Text>
        </motion.div>
      </div>
    </section>
  );
};

TypeSpecimen.displayName = "TypeSpecimen";
