/**
 * ScrollAnimationSection Organism
 *
 * Section that animates elements on scroll (parallax, fade-in, slide-in).
 * Triggers animations when elements enter viewport.
 * Animation Types: fadeIn, slideUp, parallax, stagger
 * Design System: 500ms transitions, cubic-bezier(0.33,1,0.68,1) easing
 * Accessibility: Respects prefers-reduced-motion, shows content immediately if reduced
 */

"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ScrollAnimationSectionProps {
  /** Content to animate */
  children: ReactNode;
  /** Type of animation */
  animationType?: "fadeIn" | "slideUp" | "parallax" | "stagger";
  /** Viewport intersection threshold (0-1) */
  threshold?: number;
  /** Additional wrapper class */
  className?: string;
}

export const ScrollAnimationSection = ({
  children,
  animationType = "fadeIn",
  threshold = 0.3,
  className,
}: ScrollAnimationSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, amount: threshold });

  // For parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Animation variants based on type
  const getAnimationVariants = () => {
    if (shouldReduceMotion) {
      return {
        initial: {},
        animate: {},
      };
    }

    switch (animationType) {
      case "fadeIn":
        return {
          initial: { opacity: 0 },
          animate: isInView ? { opacity: 1 } : { opacity: 0 },
        };

      case "slideUp":
        return {
          initial: { opacity: 0, y: 50 },
          animate: isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 50 },
        };

      case "parallax":
        // Parallax doesn't use isInView, uses scroll position
        return {
          initial: {},
          animate: {},
        };

      case "stagger":
        return {
          initial: {},
          animate: isInView
            ? { transition: { staggerChildren: 0.1 } }
            : {},
        };

      default:
        return {
          initial: { opacity: 0 },
          animate: isInView ? { opacity: 1 } : { opacity: 0 },
        };
    }
  };

  const variants = getAnimationVariants();
  const transition = {
    duration: 0.8,
    ease: [0.33, 1, 0.68, 1],
  };

  // For parallax, we use different rendering
  if (animationType === "parallax" && !shouldReduceMotion) {
    return (
      <motion.div
        ref={ref}
        className={cn("relative", className)}
        style={{ y }}
      >
        {children}
      </motion.div>
    );
  }

  // For stagger, we need to wrap children
  if (animationType === "stagger") {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={variants.initial}
        animate={variants.animate}
      >
        {Array.isArray(children)
          ? children.map((child, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={
                  shouldReduceMotion || isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.5,
                  ease: [0.33, 1, 0.68, 1],
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                }}
              >
                {child}
              </motion.div>
            ))
          : children}
      </motion.div>
    );
  }

  // Default rendering for fadeIn and slideUp
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={variants.initial}
      animate={variants.animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

ScrollAnimationSection.displayName = "ScrollAnimationSection";
