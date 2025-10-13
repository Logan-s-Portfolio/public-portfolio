/**
 * SpacingVisualizer Organism
 *
 * Interactive visualization of the 8-point grid spacing system.
 * Shows all spacing tokens with visual representations, pixel values,
 * and real-world component examples.
 * Design System: 8-point grid (Airbnb-inspired)
 * Accessibility: Semantic HTML, keyboard navigation
 */

"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

const spacingTokens = [
  { name: "space-0", value: "0px", rem: "0rem", scale: 0 },
  { name: "space-1", value: "4px", rem: "0.25rem", scale: 1 },
  { name: "space-2", value: "8px", rem: "0.5rem", scale: 2 },
  { name: "space-3", value: "12px", rem: "0.75rem", scale: 3 },
  { name: "space-4", value: "16px", rem: "1rem", scale: 4 },
  { name: "space-5", value: "20px", rem: "1.25rem", scale: 5 },
  { name: "space-6", value: "24px", rem: "1.5rem", scale: 6 },
  { name: "space-8", value: "32px", rem: "2rem", scale: 8 },
  { name: "space-10", value: "40px", rem: "2.5rem", scale: 10 },
  { name: "space-12", value: "48px", rem: "3rem", scale: 12 },
  { name: "space-16", value: "64px", rem: "4rem", scale: 16 },
  { name: "space-20", value: "80px", rem: "5rem", scale: 20 },
  { name: "space-24", value: "96px", rem: "6rem", scale: 24 },
  { name: "space-32", value: "128px", rem: "8rem", scale: 32 },
];

export interface SpacingVisualizerProps {
  /** Section heading */
  heading?: string;
  /** Section description */
  description?: string;
  /** Additional wrapper class */
  className?: string;
}

export const SpacingVisualizer = ({
  heading = "8-Point Grid System",
  description = "Consistent spacing scale based on multiples of 8px. Inspired by Airbnb's design system.",
  className,
}: SpacingVisualizerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [showGrid, setShowGrid] = useState(true);
  const [selectedToken, setSelectedToken] = useState<string | null>(null);

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative bg-white px-4 py-16 md:px-6 md:py-24 lg:px-8",
        className
      )}
      aria-labelledby="spacing-visualizer-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
          <Heading as="h2" variant="hero" id="spacing-visualizer-heading" className="mb-4">
            {heading}
          </Heading>
          <Text variant="lead" className="mx-auto max-w-3xl text-neutral-600">
            {description}
          </Text>
        </motion.div>

        {/* Grid Toggle */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button
            onClick={() => setShowGrid(!showGrid)}
            className={cn(
              "rounded-xl border-2 px-6 py-3 font-inter text-sm font-medium transition-all duration-300",
              showGrid
                ? "border-terracotta-500 bg-terracotta-500 text-white shadow-md hover:bg-terracotta-600"
                : "border-neutral-300 bg-white text-neutral-700 hover:border-terracotta-300"
            )}
          >
            {showGrid ? "Hide" : "Show"} 8px Grid
          </button>
        </motion.div>

        {/* Spacing Tokens Grid */}
        <motion.div
          className="relative mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
        >
          {/* Background 8px Grid */}
          {showGrid && (
            <motion.div
              className="pointer-events-none absolute inset-0 -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgb(210, 102, 82, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgb(210, 102, 82, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "8px 8px",
              }}
            />
          )}

          <div className="space-y-6">
            {spacingTokens.map((token, index) => {
              const isSelected = selectedToken === token.name;
              return (
                <motion.button
                  key={token.name}
                  onClick={() =>
                    setSelectedToken(isSelected ? null : token.name)
                  }
                  className={cn(
                    "group w-full rounded-xl border-2 p-6 text-left transition-all duration-300",
                    "focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2",
                    isSelected
                      ? "border-terracotta-500 bg-terracotta-50 shadow-lg"
                      : "border-neutral-200 bg-white hover:border-sage-300 hover:shadow-md"
                  )}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.05,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  aria-label={`${token.name}: ${token.value}`}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    {/* Token Info */}
                    <div className="flex-1">
                      <div className="mb-2 flex items-baseline gap-4">
                        <Text
                          variant="body"
                          className="font-mono font-semibold text-neutral-900"
                        >
                          {token.name}
                        </Text>
                        <Text variant="small" className="text-neutral-600">
                          {token.value} / {token.rem}
                        </Text>
                      </div>
                      <Text variant="caption" className="text-neutral-500">
                        {token.scale}× base unit (8px)
                      </Text>
                    </div>

                    {/* Visual Representation */}
                    <div className="flex items-center gap-4">
                      {/* Ruler */}
                      <div className="flex h-12 items-center">
                        <motion.div
                          className="rounded bg-terracotta-500 transition-all duration-300"
                          style={{
                            width: token.value,
                            height: "8px",
                          }}
                          animate={
                            isSelected
                              ? { height: "16px" }
                              : { height: "8px" }
                          }
                        />
                      </div>

                      {/* Pixel Value Badge */}
                      <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1 font-mono text-xs font-semibold text-neutral-700">
                        {token.value}
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Real-World Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
        >
          <Heading as="h3" variant="title" className="mb-8">
            Spacing in Practice
          </Heading>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Example: Card Component */}
            <motion.div
              className="rounded-xl border-2 border-neutral-200 bg-white p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
              }
              transition={{
                duration: 0.6,
                delay: 0.8,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              <div className="mb-4 rounded-lg bg-sage-100 p-4">
                <div className="mb-3 h-4 w-3/4 rounded bg-sage-300" />
                <div className="mb-2 h-3 w-full rounded bg-sage-200" />
                <div className="h-3 w-5/6 rounded bg-sage-200" />
              </div>
              <Text variant="caption" className="text-neutral-600">
                <strong>Card padding:</strong> space-6 (24px)<br />
                <strong>Content spacing:</strong> space-3 (12px) & space-2 (8px)
              </Text>
            </motion.div>

            {/* Example: Button Spacing */}
            <motion.div
              className="rounded-xl border-2 border-neutral-200 bg-white p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
              }
              transition={{
                duration: 0.6,
                delay: 0.9,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              <div className="flex gap-4">
                <div className="rounded-lg bg-terracotta-500 px-6 py-3 text-sm font-medium text-white">
                  Primary
                </div>
                <div className="rounded-lg border-2 border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700">
                  Secondary
                </div>
              </div>
              <Text variant="caption" className="mt-4 text-neutral-600">
                <strong>Padding:</strong> X: space-6 (24px), Y: space-3 (12px)<br />
                <strong>Gap:</strong> space-4 (16px)
              </Text>
            </motion.div>

            {/* Example: Typography Spacing */}
            <motion.div
              className="rounded-xl border-2 border-neutral-200 bg-white p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
              }
              transition={{
                duration: 0.6,
                delay: 1,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              <div className="space-y-4">
                <div className="h-6 w-2/3 rounded bg-neutral-800" />
                <div className="space-y-2">
                  <div className="h-3 w-full rounded bg-neutral-300" />
                  <div className="h-3 w-full rounded bg-neutral-300" />
                  <div className="h-3 w-4/5 rounded bg-neutral-300" />
                </div>
              </div>
              <Text variant="caption" className="mt-4 text-neutral-600">
                <strong>Heading margin:</strong> space-4 (16px)<br />
                <strong>Paragraph spacing:</strong> space-2 (8px)
              </Text>
            </motion.div>

            {/* Example: Section Spacing */}
            <motion.div
              className="rounded-xl border-2 border-neutral-200 bg-white p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
              }
              transition={{
                duration: 0.6,
                delay: 1.1,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              <div className="space-y-8">
                <div className="h-12 rounded bg-terracotta-200" />
                <div className="h-12 rounded bg-sage-200" />
              </div>
              <Text variant="caption" className="mt-4 text-neutral-600">
                <strong>Section spacing:</strong> space-16 (64px)<br />
                <strong>Component spacing:</strong> space-8 (32px)
              </Text>
            </motion.div>
          </div>
        </motion.div>

        {/* Benefits Callout */}
        <motion.div
          className="mt-16 rounded-2xl border-2 border-sage-200 bg-sage-50 p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.33, 1, 0.68, 1] }}
        >
          <Heading as="h3" variant="section" className="mb-4">
            Why 8-Point Grid?
          </Heading>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <Text variant="body" className="mb-2 font-semibold text-sage-800">
                Visual Consistency
              </Text>
              <Text variant="small" className="text-neutral-700">
                All spacing aligns to the same 8px grid, creating harmonious layouts.
              </Text>
            </div>
            <div>
              <Text variant="body" className="mb-2 font-semibold text-sage-800">
                Design-Dev Handoff
              </Text>
              <Text variant="small" className="text-neutral-700">
                Designers and developers speak the same language with standardized tokens.
              </Text>
            </div>
            <div>
              <Text variant="body" className="mb-2 font-semibold text-sage-800">
                Scalability
              </Text>
              <Text variant="small" className="text-neutral-700">
                Works across all screen sizes with predictable, proportional scaling.
              </Text>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

SpacingVisualizer.displayName = "SpacingVisualizer";
