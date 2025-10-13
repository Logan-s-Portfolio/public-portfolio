/**
 * TimelineSection Organism
 *
 * Visual timeline of career milestones (used on About page).
 * Vertical timeline with nodes showing date, title, and description.
 * Layout: Alternating left/right nodes (desktop), all right (mobile)
 * Enhanced: Animated SVG line that follows scroll and passes through dots
 * Padding: py-24 px-8
 * Design System: Sage accent colors, 8pt spacing, semantic <ol> list
 * Accessibility: Chronological ordered list, semantic HTML
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/atoms/Badge";
import { cn } from "@/lib/utils";

export interface Milestone {
  /** Unique identifier */
  id: string;
  /** Date or time period */
  date: string;
  /** Milestone title */
  title: string;
  /** Milestone description */
  description: string;
}

export interface TimelineSectionProps {
  /** Section heading */
  heading?: string;
  /** Array of milestones (chronological order) */
  milestones: Milestone[];
  /** Additional wrapper class */
  className?: string;
}

export const TimelineSection = ({
  heading = "My Journey",
  milestones,
  className,
}: TimelineSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLOListElement>(null);
  const [timelineHeight, setTimelineHeight] = useState(0);

  // Calculate timeline height
  useEffect(() => {
    if (timelineRef.current) {
      setTimelineHeight(timelineRef.current.scrollHeight);
    }
  }, [milestones]);

  // Scroll progress for the animated line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [0, timelineHeight]
  );

  return (
    <section
      ref={containerRef}
      className={cn(
        "bg-neutral-50 px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24",
        className
      )}
      aria-labelledby="timeline-heading"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Heading */}
        <h2
          id="timeline-heading"
          className="mb-12 text-center font-fraunces text-3xl font-semibold text-neutral-900 md:mb-16 md:text-4xl lg:text-5xl"
        >
          {heading}
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Static background line */}
          <div
            className="absolute left-2 top-0 w-0.5 bg-sage-200 md:left-1/2 md:-ml-px"
            style={{ height: `${timelineHeight}px` }}
            aria-hidden="true"
          />

          {/* Animated progress line */}
          <motion.div
            className="absolute left-2 top-0 w-0.5 bg-gradient-to-b from-terracotta-500 via-sage-500 to-sage-600 md:left-1/2 md:-ml-px"
            style={{ height: lineHeight }}
            aria-hidden="true"
          />

          <ol
            ref={timelineRef}
            className="relative space-y-10 pl-8 md:pl-0"
          >
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;

              return (
                <li
                  key={milestone.id}
                  className={cn(
                    "relative",
                    // Desktop: alternating layout
                    "md:grid md:grid-cols-2 md:gap-8"
                  )}
                >
                  {/* Timeline Dot */}
                  <div
                    className={cn(
                      "absolute -left-6 top-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-sage-300 bg-white md:left-1/2 md:-ml-2",
                      "z-10"
                    )}
                    aria-hidden="true"
                  >
                    <div className="h-2 w-2 rounded-full bg-sage-500" />
                  </div>

                  {/* Content - left or right depending on alternation */}
                  <div
                    className={cn(
                      isEven ? "md:col-start-1 md:text-right" : "md:col-start-2"
                    )}
                  >
                    {/* Date Badge */}
                    <div className={cn("mb-3", isEven ? "md:flex md:justify-end" : "")}>
                      <Badge variant="info" size="sm">
                        {milestone.date}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 font-fraunces text-xl font-semibold text-neutral-900 md:text-2xl">
                      {milestone.title}
                    </h3>

                    {/* Description */}
                    <p className="font-inter text-base leading-[1.6] text-neutral-600">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div
                    className={cn(
                      "hidden md:block",
                      isEven ? "md:col-start-2" : "md:col-start-1"
                    )}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

TimelineSection.displayName = "TimelineSection";
