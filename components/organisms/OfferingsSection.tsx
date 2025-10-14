/**
 * OfferingsSection Organism
 *
 * Showcase offerings with animated SVG line passing through cards.
 * Line flows left to right in a downward zigzag motion.
 * Scroll-driven animation reveals the path progressively.
 * Design System: Terracotta/Sage accent colors, card-based layout
 * Accessibility: Semantic HTML, ARIA labels
 */

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";

export interface Offering {
  /** Unique identifier */
  id: string;
  /** Offering title */
  title: string;
  /** Offering description */
  description: string;
  /** Icon or emoji */
  icon?: string;
  /** Accent color */
  accent?: "terracotta" | "sage" | "neutral";
}

export interface OfferingsSectionProps {
  /** Section heading */
  heading?: string;
  /** Section subheading */
  subheading?: string;
  /** Array of offerings */
  offerings: Offering[];
  /** Additional wrapper class */
  className?: string;
}

export const OfferingsSection = ({
  heading,
  subheading,
  offerings,
  className,
}: OfferingsSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  // Scroll progress for the animated line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Helper to get accent colors
  const getAccentColors = (color: Offering["accent"]) => {
    switch (color) {
      case "terracotta":
        return {
          bg: "bg-terracotta-50",
          border: "border-terracotta-200",
          dot: "bg-terracotta-500",
          text: "text-terracotta-700",
        };
      case "sage":
        return {
          bg: "bg-sage-50",
          border: "border-sage-200",
          dot: "bg-sage-500",
          text: "text-sage-700",
        };
      default:
        return {
          bg: "bg-neutral-50",
          border: "border-neutral-200",
          dot: "bg-neutral-500",
          text: "text-neutral-700",
        };
    }
  };

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative bg-white px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16",
        className
      )}
      aria-labelledby="offerings-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        {heading && (
          <div className="mb-12 text-center md:mb-16">
            <Heading as="h2" variant="display-2xl" className="mb-4">
              {heading}
            </Heading>
            {subheading && (
              <Text variant="lead" className="mx-auto max-w-2xl text-neutral-600">
                {subheading}
              </Text>
            )}
          </div>
        )}

        {/* Offerings Grid with SVG Path Overlay */}
        <div className="relative">
          {/* SVG Path - stepped zigzag through offerings */}
          <svg
            className="absolute left-0 top-0 hidden h-full w-full overflow-visible lg:block"
            viewBox="0 0 1000 1600"
            preserveAspectRatio="xMidYMin slice"
            style={{ zIndex: 0 }}
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(210, 102, 82)" />
                <stop offset="50%" stopColor="rgb(134, 150, 119)" />
                <stop offset="100%" stopColor="rgb(134, 150, 119)" />
              </linearGradient>
            </defs>

            {/* Background path - straight lines with elbows */}
            <path
              ref={pathRef}
              d="M 500 0 L 500 150 L 750 150 L 750 450 L 250 450 L 250 750 L 750 750 L 750 1050 L 250 1050 L 250 1350"
              stroke="#e5e7eb"
              strokeWidth="4"
              fill="none"
            />

            {/* Animated progress path */}
            <motion.path
              d="M 500 0 L 500 150 L 750 150 L 750 450 L 250 450 L 250 750 L 750 750 L 750 1050 L 250 1050 L 250 1350"
              stroke="url(#pathGradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="1"
              style={{
                pathLength: scrollYProgress,
              }}
            />
          </svg>

          {/* Offerings List - single column with alternating alignment */}
          <div className="relative z-10 space-y-32">
            {offerings.map((offering, index) => {
              const colors = getAccentColors(offering.accent || "terracotta");
              const isRight = index % 2 === 0;

              return (
                <motion.div
                  key={offering.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.33, 1, 0.68, 1] as const,
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={cn(
                    "group relative mx-auto max-w-md rounded-2xl border-2 p-8 transition-all duration-300 lg:max-w-lg",
                    colors.bg,
                    colors.border,
                    "hover:shadow-lg",
                    // Position cards left or right
                    isRight ? "lg:ml-auto lg:mr-12" : "lg:ml-12 lg:mr-auto"
                  )}
                >
                  {/* Dot indicator - positioned on the elbow of the path */}
                  <div
                    className={cn(
                      "absolute top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white shadow-md lg:flex",
                      colors.dot,
                      isRight ? "-left-3" : "-right-3"
                    )}
                    aria-hidden="true"
                  />

                  {/* Icon/Emoji */}
                  {offering.icon && (
                    <div className="mb-4 text-5xl">{offering.icon}</div>
                  )}

                  {/* Title */}
                  <Heading as="h3" variant="h3" className="mb-3">
                    {offering.title}
                  </Heading>

                  {/* Description */}
                  <Text variant="body" className="text-neutral-600">
                    {offering.description}
                  </Text>

                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent to-neutral-100 opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

OfferingsSection.displayName = "OfferingsSection";
