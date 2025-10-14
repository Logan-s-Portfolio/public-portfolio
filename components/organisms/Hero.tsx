/**
 * Hero Organism
 *
 * Left-justified hero section with avatar, badges, animated headline, and CTAs.
 * Height: Auto (not full viewport)
 * Padding: py-12 md:py-16
 * Animation: Framer Motion with staggered entrance (respects prefers-reduced-motion)
 * Design System: Terracotta colors, Fraunces/Inter fonts, 8pt spacing
 * Accessibility: Semantic HTML, ARIA labels, keyboard navigation
 */

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/atoms/Button";
import { Avatar } from "@/components/atoms/Avatar";
import { Badge } from "@/components/atoms/Badge";
import { cn } from "@/lib/utils";

export interface HeroProps {
  /** Avatar image */
  avatar?: {
    src: string;
    alt: string;
  };
  /** Badges to display */
  badges?: string[];
  /** Eyebrow text above headline */
  eyebrow?: string;
  /** Main headline */
  headline: string;
  /** Supporting subheadline */
  subheadline: string;
  /** Primary CTA button */
  primaryCTA?: {
    label: string;
    href: string;
  };
  /** Secondary CTA button (optional) */
  secondaryCTA?: {
    label: string;
    href: string;
  };
  /** Additional wrapper class */
  className?: string;
}

export const Hero = ({
  avatar,
  badges,
  eyebrow,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  className,
}: HeroProps) => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: [0.33, 1, 0.68, 1] as const,
      },
    },
  };

  return (
    <section
      className={cn(
        "flex flex-col items-start py-12 md:py-16",
        className
      )}
      aria-labelledby="hero-headline"
    >
      <motion.div
        className="flex w-full flex-col items-start space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar */}
        {avatar && (
          <motion.div variants={itemVariants}>
            <Avatar
              src={avatar.src}
              alt={avatar.alt}
              size="lg"
              className="ring-4 ring-terracotta-100"
            />
          </motion.div>
        )}

        {/* Badges */}
        {badges && badges.length > 0 && (
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <Badge key={badge} variant="default">
                {badge}
              </Badge>
            ))}
          </motion.div>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <motion.p
            variants={itemVariants}
            className="font-inter text-sm font-medium uppercase tracking-[0.05em] text-terracotta-600"
          >
            {eyebrow}
          </motion.p>
        )}

        {/* Headline */}
        <motion.h1
          id="hero-headline"
          variants={itemVariants}
          className="max-w-3xl font-fraunces text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900 md:text-5xl lg:text-6xl"
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl font-inter text-lg leading-[1.6] text-neutral-600 md:text-xl"
        >
          {subheadline}
        </motion.p>

        {/* CTA Buttons */}
        {(primaryCTA || secondaryCTA) && (
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            {primaryCTA && (
              <Button
                variant="primary"
                size="lg"
                onClick={() => (window.location.href = primaryCTA.href)}
              >
                {primaryCTA.label}
              </Button>
            )}
            {secondaryCTA && (
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = secondaryCTA.href)}
              >
                {secondaryCTA.label}
              </Button>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

Hero.displayName = "Hero";
