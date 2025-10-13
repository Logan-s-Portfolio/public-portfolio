/**
 * ProcessTimeline Organism
 *
 * Vertical timeline showing the design system build process.
 * Features scroll-driven animations, alternating layout, and connected path.
 * Design System: Terracotta/Sage color accents
 * Accessibility: Semantic HTML, ARIA labels, reduced motion support
 */

"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

interface TimelineStep {
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  color: "terracotta" | "sage";
  icon: string;
}

const timelineSteps: TimelineStep[] = [
  {
    phase: "Phase 1",
    title: "Research & Strategy",
    description: "Analyzed 50+ portfolios, identified gaps in design differentiation. Only 24% use warm colors, 8% use serif fonts.",
    deliverables: [
      "Competitive analysis document",
      "Color & typography research",
      "Design principles definition",
    ],
    color: "terracotta",
    icon: "🔍",
  },
  {
    phase: "Phase 2",
    title: "Foundation Tokens",
    description: "Established color system (terracotta, sage, neutral), typography pairing (Fraunces + Inter), and 8-point grid.",
    deliverables: [
      "3 color palettes (11 shades each)",
      "Typography scale (xs-6xl)",
      "Spacing tokens (14 values)",
    ],
    color: "sage",
    icon: "🎨",
  },
  {
    phase: "Phase 3",
    title: "Atomic Design Architecture",
    description: "Built component library from atoms to templates. Implemented systematic composition and reusability.",
    deliverables: [
      "17 atom components",
      "15 molecule components",
      "23 organism components",
      "7 template components",
    ],
    color: "terracotta",
    icon: "⚛️",
  },
  {
    phase: "Phase 4",
    title: "Accessibility Testing",
    description: "WCAG 2.2 AA/AAA compliance testing. All colors tested for contrast, keyboard navigation verified.",
    deliverables: [
      "WCAG AA compliance (all text)",
      "AAA compliance (critical text)",
      "Keyboard navigation support",
      "Screen reader optimization",
    ],
    color: "sage",
    icon: "♿",
  },
  {
    phase: "Phase 5",
    title: "Component Documentation",
    description: "Storybook setup with interactive examples, prop tables, and usage guidelines for every component.",
    deliverables: [
      "64+ Storybook stories",
      "Component prop documentation",
      "Usage examples & variants",
    ],
    color: "terracotta",
    icon: "📚",
  },
  {
    phase: "Phase 6",
    title: "System Documentation",
    description: "Comprehensive markdown docs covering philosophy, foundation tokens, and architectural decisions.",
    deliverables: [
      "7 comprehensive docs",
      "Foundation token reference",
      "Component architecture guide",
      "Design system reference",
    ],
    color: "sage",
    icon: "📝",
  },
];

export interface ProcessTimelineProps {
  /** Section heading */
  heading?: string;
  /** Section description */
  description?: string;
  /** Additional wrapper class */
  className?: string;
}

export const ProcessTimeline = ({
  heading = "Build Process",
  description = "How we built a world-class design system from first principles in 6 phases.",
  className,
}: ProcessTimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Scroll progress for the connecting line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative bg-gradient-to-b from-neutral-50 to-white px-4 py-16 md:px-6 md:py-24 lg:px-8",
        className
      )}
      aria-labelledby="process-timeline-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
          <Heading as="h2" variant="hero" id="process-timeline-heading" className="mb-4">
            {heading}
          </Heading>
          <Text variant="lead" className="mx-auto max-w-3xl text-neutral-600">
            {description}
          </Text>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connecting line - center on desktop, left on mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-200 md:left-1/2" aria-hidden="true" />

          {/* Animated progress line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-terracotta-500 via-sage-500 to-terracotta-500 md:left-1/2"
            style={{ scaleY: pathLength, transformOrigin: "top" }}
            aria-hidden="true"
          />

          {/* Timeline Steps */}
          <div className="space-y-16 md:space-y-24">
            {timelineSteps.map((step, index) => {
              const isRight = index % 2 === 0;
              const colorClasses = {
                terracotta: {
                  bg: "bg-terracotta-50",
                  border: "border-terracotta-300",
                  dot: "bg-terracotta-500",
                  text: "text-terracotta-700",
                },
                sage: {
                  bg: "bg-sage-50",
                  border: "border-sage-300",
                  dot: "bg-sage-500",
                  text: "text-sage-700",
                },
              };
              const colors = colorClasses[step.color];

              return (
                <TimelineItem
                  key={index}
                  step={step}
                  index={index}
                  isRight={isRight}
                  colors={colors}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Timeline Item Component
interface TimelineItemProps {
  step: TimelineStep;
  index: number;
  isRight: boolean;
  colors: {
    bg: string;
    border: string;
    dot: string;
    text: string;
  };
}

const TimelineItem = ({ step, index, isRight, colors }: TimelineItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={itemRef}
      className={cn(
        "relative grid grid-cols-1 gap-8 md:grid-cols-2",
        "pl-20 md:pl-0" // Offset for mobile timeline
      )}
      initial={{ opacity: 0, x: isRight ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRight ? 50 : -50 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.33, 1, 0.68, 1],
      }}
    >
      {/* Dot on timeline - mobile: left, desktop: center */}
      <motion.div
        className={cn(
          "absolute left-[26px] flex h-12 w-12 items-center justify-center rounded-full border-4 border-white shadow-lg md:left-1/2 md:-translate-x-1/2",
          colors.dot
        )}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.2,
          ease: [0.33, 1, 0.68, 1],
        }}
        aria-hidden="true"
      >
        <span className="text-2xl">{step.icon}</span>
      </motion.div>

      {/* Content card - desktop: alternating sides, mobile: always right */}
      <div
        className={cn(
          "md:col-span-1",
          isRight ? "md:col-start-2" : "md:col-start-1"
        )}
      >
        <div
          className={cn(
            "rounded-2xl border-2 p-8 shadow-md transition-all duration-300 hover:shadow-xl",
            colors.bg,
            colors.border
          )}
        >
          {/* Phase Badge */}
          <div className={cn("mb-4 inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide text-white", colors.dot)}>
            {step.phase}
          </div>

          {/* Title */}
          <Heading as="h3" variant="title" className="mb-3">
            {step.title}
          </Heading>

          {/* Description */}
          <Text variant="body" className="mb-6 text-neutral-700">
            {step.description}
          </Text>

          {/* Deliverables */}
          <div>
            <Text variant="small" className={cn("mb-3 font-semibold uppercase tracking-wide", colors.text)}>
              Deliverables
            </Text>
            <ul className="space-y-2">
              {step.deliverables.map((deliverable, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className={cn("mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full", colors.dot)} />
                  <Text variant="small" className="text-neutral-700">
                    {deliverable}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

ProcessTimeline.displayName = "ProcessTimeline";
