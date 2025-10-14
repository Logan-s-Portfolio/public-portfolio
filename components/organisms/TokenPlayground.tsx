/**
 * TokenPlayground Organism
 *
 * Interactive playground for foundation tokens:
 * - Shadows (sm, md, lg, xl, 2xl)
 * - Border Radius (xs, sm, md, lg, xl, 2xl, full)
 * - Transitions (fast, base, slow)
 * - Z-index layers (dropdown, modal, tooltip, etc.)
 * - Opacity levels (full, high, medium, low, disabled, subtle, faint)
 * Design System: Material Design 3 shadows, 8-point aligned radius
 * Accessibility: Interactive controls, keyboard navigation
 */

"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

const shadowTokens = [
  { name: "sm", value: "0 1px 2px 0 rgba(46, 45, 42, 0.05)" },
  { name: "md", value: "0 2px 4px -1px rgba(46, 45, 42, 0.06), 0 4px 6px -1px rgba(46, 45, 42, 0.10)" },
  { name: "lg", value: "0 4px 6px -2px rgba(46, 45, 42, 0.05), 0 10px 15px -3px rgba(46, 45, 42, 0.10)" },
  { name: "xl", value: "0 10px 25px -5px rgba(46, 45, 42, 0.10), 0 20px 40px -10px rgba(46, 45, 42, 0.15)" },
  { name: "2xl", value: "0 25px 50px -12px rgba(46, 45, 42, 0.25)" },
];

const radiusTokens = [
  { name: "xs", value: "2px" },
  { name: "sm", value: "4px" },
  { name: "md", value: "8px" },
  { name: "lg", value: "12px" },
  { name: "xl", value: "16px" },
  { name: "2xl", value: "24px" },
  { name: "full", value: "9999px" },
];

const transitionTokens = [
  { name: "fast", value: "150ms", duration: 150 },
  { name: "base", value: "300ms", duration: 300 },
  { name: "slow", value: "500ms", duration: 500 },
];

const zIndexTokens = [
  { name: "base", value: "0", desc: "Default layer" },
  { name: "dropdown", value: "1000", desc: "Dropdown menus" },
  { name: "sticky", value: "1010", desc: "Sticky headers" },
  { name: "fixed", value: "1020", desc: "Fixed elements" },
  { name: "overlay", value: "1030", desc: "Modal overlays" },
  { name: "modal", value: "1040", desc: "Modal dialogs" },
  { name: "popover", value: "1050", desc: "Popovers" },
  { name: "tooltip", value: "1060", desc: "Tooltips" },
  { name: "toast", value: "1070", desc: "Toast notifications" },
];

const opacityTokens = [
  { name: "full", value: "1", percent: "100%" },
  { name: "high", value: "0.9", percent: "90%" },
  { name: "medium", value: "0.75", percent: "75%" },
  { name: "low", value: "0.6", percent: "60%" },
  { name: "disabled", value: "0.5", percent: "50%" },
  { name: "subtle", value: "0.25", percent: "25%" },
  { name: "faint", value: "0.1", percent: "10%" },
];

export interface TokenPlaygroundProps {
  /** Section heading */
  heading?: string;
  /** Section description */
  description?: string;
  /** Additional wrapper class */
  className?: string;
}

export const TokenPlayground = ({
  heading = "Foundation Tokens",
  description = "Interactive playground for shadows, radius, transitions, z-index, and opacity. Based on Material Design 3 and 8-point grid.",
  className,
}: TokenPlaygroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [selectedShadow, setSelectedShadow] = useState("md");
  const [selectedRadius, setSelectedRadius] = useState("lg");
  const [selectedTransition, setSelectedTransition] = useState("base");
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    setIsAnimating(true);
    const duration = transitionTokens.find((t) => t.name === selectedTransition)?.duration || 300;
    setTimeout(() => setIsAnimating(false), duration);
  };

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative bg-white px-4 py-16 md:px-6 md:py-24 lg:px-8",
        className
      )}
      aria-labelledby="token-playground-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
        >
          <Heading as="h2" variant="display-2xl" id="token-playground-heading" className="mb-4">
            {heading}
          </Heading>
          <Text variant="lead" className="mx-auto max-w-3xl text-neutral-600">
            {description}
          </Text>
        </motion.div>

        <div className="space-y-24">
          {/* Shadows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] as const }}
          >
            <Heading as="h3" variant="h3" className="mb-8">
              Shadows (Material Design 3)
            </Heading>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
              {shadowTokens.map((shadow) => (
                <button
                  key={shadow.name}
                  onClick={() => setSelectedShadow(shadow.name)}
                  className={cn(
                    "group relative aspect-square rounded-xl bg-white p-6 transition-all duration-300",
                    "focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2",
                    selectedShadow === shadow.name
                      ? "ring-2 ring-terracotta-500"
                      : ""
                  )}
                  style={{ boxShadow: shadow.value }}
                  aria-label={`Shadow ${shadow.name}`}
                >
                  <div className="flex h-full flex-col items-center justify-center">
                    <Text variant="body" className="font-mono font-bold text-neutral-900">
                      {shadow.name}
                    </Text>
                    <Text variant="small" className="mt-2 text-center text-neutral-600">
                      Elevation {shadowTokens.indexOf(shadow) + 1}
                    </Text>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Border Radius */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] as const }}
          >
            <Heading as="h3" variant="h3" className="mb-8">
              Border Radius (8-Point Grid)
            </Heading>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-7">
              {radiusTokens.map((radius) => (
                <button
                  key={radius.name}
                  onClick={() => setSelectedRadius(radius.name)}
                  className={cn(
                    "group aspect-square bg-sage-500 p-6 transition-all duration-300",
                    "focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2",
                    selectedRadius === radius.name
                      ? "ring-2 ring-terracotta-500 ring-offset-2"
                      : ""
                  )}
                  style={{ borderRadius: radius.value }}
                  aria-label={`Radius ${radius.name}: ${radius.value}`}
                >
                  <div className="flex h-full flex-col items-center justify-center text-white">
                    <Text variant="body" className="font-mono font-bold">
                      {radius.name}
                    </Text>
                    <Text variant="small" className="mt-2">
                      {radius.value}
                    </Text>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Transitions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
          >
            <Heading as="h3" variant="h3" className="mb-8">
              Transitions & Easing
            </Heading>
            <div className="grid gap-6 md:grid-cols-3">
              {transitionTokens.map((transition) => (
                <div
                  key={transition.name}
                  className="rounded-xl border-2 border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="mb-4 flex items-baseline justify-between">
                    <Text variant="body" className="font-mono font-semibold text-neutral-900">
                      {transition.name}
                    </Text>
                    <Text variant="small" className="text-neutral-600">
                      {transition.value}
                    </Text>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedTransition(transition.name);
                      triggerAnimation();
                    }}
                    className="w-full rounded-lg bg-terracotta-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-terracotta-600 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2"
                  >
                    Test Animation
                  </button>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-neutral-200">
                    <motion.div
                      className="h-full bg-gradient-to-r from-terracotta-500 via-sage-500 to-terracotta-500"
                      initial={{ width: 0 }}
                      animate={
                        isAnimating && selectedTransition === transition.name
                          ? { width: "100%" }
                          : { width: 0 }
                      }
                      transition={{
                        duration: transition.duration / 1000,
                        ease: [0.33, 1, 0.68, 1] as const,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Z-Index */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
          >
            <Heading as="h3" variant="h3" className="mb-8">
              Z-Index Layers (1000-Unit Scale)
            </Heading>
            <div className="relative h-96 overflow-hidden rounded-2xl border-2 border-neutral-200 bg-neutral-100">
              {zIndexTokens.map((layer, index) => {
                const offset = index * 8;
                return (
                  <motion.div
                    key={layer.name}
                    className="absolute left-8 top-8 rounded-lg border-2 border-white bg-gradient-to-br from-terracotta-400 to-sage-400 p-4 shadow-lg"
                    style={{
                      zIndex: parseInt(layer.value),
                      transform: `translate(${offset}px, ${offset}px)`,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: 0.8 + index * 0.1,
                      ease: [0.33, 1, 0.68, 1] as const,
                    }}
                  >
                    <Text variant="small" className="font-mono font-bold text-white">
                      z-{layer.name}
                    </Text>
                    <Text variant="small" className="text-white/90">
                      {layer.value}
                    </Text>
                    <Text variant="small" className="text-xs text-white/75">
                      {layer.desc}
                    </Text>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Opacity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.33, 1, 0.68, 1] as const }}
          >
            <Heading as="h3" variant="h3" className="mb-8">
              Opacity Levels (Accessibility-Compliant)
            </Heading>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
              {opacityTokens.map((opacity) => (
                <div
                  key={opacity.name}
                  className="rounded-xl border-2 border-neutral-200 bg-white p-6"
                >
                  <div
                    className="mb-4 aspect-square rounded-lg bg-terracotta-500"
                    style={{ opacity: parseFloat(opacity.value) }}
                  />
                  <Text variant="small" className="font-mono font-semibold text-neutral-900">
                    {opacity.name}
                  </Text>
                  <Text variant="small" className="text-neutral-600">
                    {opacity.percent}
                  </Text>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Combined Demo */}
        <motion.div
          className="mt-24 rounded-2xl border-2 border-sage-200 bg-sage-50 p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.33, 1, 0.68, 1] as const }}
        >
          <Heading as="h3" variant="h3" className="mb-6">
            Token Combination Preview
          </Heading>
          <Text variant="body" className="mb-8 text-neutral-600">
            Selected: Shadow <strong>{selectedShadow}</strong> • Radius{" "}
            <strong>{selectedRadius}</strong> • Transition <strong>{selectedTransition}</strong>
          </Text>
          <motion.div
            className="mx-auto aspect-square max-w-xs bg-gradient-to-br from-white to-sage-50/30 p-8"
            style={{
              boxShadow: shadowTokens.find((s) => s.name === selectedShadow)?.value,
              borderRadius: radiusTokens.find((r) => r.name === selectedRadius)?.value,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: "0 25px 50px -12px rgba(184, 80, 50, 0.25)",
            }}
            transition={{
              duration:
                (transitionTokens.find((t) => t.name === selectedTransition)?.duration || 300) / 1000,
              ease: [0.33, 1, 0.68, 1] as const,
            }}
          >
            <div className="flex h-full flex-col items-center justify-center text-center">
              <Text variant="lead" className="bg-gradient-to-r from-terracotta-600 to-sage-600 bg-clip-text font-fraunces font-bold text-transparent">
                Hover Me
              </Text>
              <Text variant="small" className="mt-2 text-neutral-600">
                Interactive token demo
              </Text>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

TokenPlayground.displayName = "TokenPlayground";
