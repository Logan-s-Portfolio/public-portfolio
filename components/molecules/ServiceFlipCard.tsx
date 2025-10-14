/**
 * ServiceFlipCard Molecule
 *
 * Interactive 3D flip card for service offerings.
 * Flips on hover (desktop) or click (mobile) to reveal details.
 * Features mouse-tracking tilt effect for enhanced depth.
 * Design System: Terracotta/Sage accents, elevation shadows, smooth transitions
 * Accessibility: Keyboard navigation, reduced motion support
 */

"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Badge } from "@/components/atoms/Badge";
import { cn } from "@/lib/utils";

export interface ServiceFlipCardProps {
  /** Service title */
  title: string;
  /** Brief tagline (front of card) */
  tagline: string;
  /** Detailed description (back of card) */
  description: string;
  /** Service icon (emoji or React element) */
  icon?: React.ReactNode;
  /** Key deliverables or features (back of card) */
  deliverables?: string[];
  /** Estimated timeline (back of card) */
  timeline?: string;
  /** Accent color */
  accent?: "terracotta" | "sage" | "neutral";
  /** Card size variant */
  size?: "small" | "medium" | "large";
  /** Additional wrapper class */
  className?: string;
}

export const ServiceFlipCard = ({
  title,
  tagline,
  description,
  icon,
  deliverables,
  timeline,
  accent = "terracotta",
  size = "medium",
  className,
}: ServiceFlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse tracking for tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animation for smooth tracking
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  // Handle mouse move for tilt effect
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      mouseX.set(x);
      mouseY.set(y);
    },
    [shouldReduceMotion, mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  // Get accent colors
  const getAccentColors = () => {
    switch (accent) {
      case "terracotta":
        return {
          bg: "bg-terracotta-50",
          border: "border-terracotta-200",
          iconBg: "bg-terracotta-100",
          iconText: "text-terracotta-700",
          badgeVariant: "default" as const,
        };
      case "sage":
        return {
          bg: "bg-sage-50",
          border: "border-sage-200",
          iconBg: "bg-sage-100",
          iconText: "text-sage-700",
          badgeVariant: "success" as const,
        };
      default:
        return {
          bg: "bg-neutral-50",
          border: "border-neutral-200",
          iconBg: "bg-neutral-100",
          iconText: "text-neutral-700",
          badgeVariant: "outline" as const,
        };
    }
  };

  // Get size classes
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return {
          container: "h-64",
          padding: "p-6",
          iconSize: "text-3xl",
        };
      case "large":
        return {
          container: "h-96",
          padding: "p-10",
          iconSize: "text-6xl",
        };
      default:
        return {
          container: "h-80",
          padding: "p-8",
          iconSize: "text-5xl",
        };
    }
  };

  const colors = getAccentColors();
  const sizes = getSizeClasses();

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative cursor-pointer", sizes.container, className)}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${title} service card. ${isFlipped ? "Showing details" : "Click to see details"}`}
      whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
      transition={{ duration: 0.15 }}
    >
      {/* Card Inner - handles flip animation */}
      <motion.div
        className="relative h-full w-full"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.6,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {/* Front Face */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl border-2 shadow-md",
            colors.bg,
            colors.border,
            sizes.padding,
            "flex flex-col items-center justify-center text-center",
            "backface-hidden"
          )}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Icon */}
          {icon && (
            <div
              className={cn(
                "mb-6 flex h-20 w-20 items-center justify-center rounded-full",
                colors.iconBg,
                sizes.iconSize
              )}
            >
              {icon}
            </div>
          )}

          {/* Title */}
          <Heading as="h3" variant="h3" className="mb-3">
            {title}
          </Heading>

          {/* Tagline */}
          <Text variant="body" className="text-neutral-600">
            {tagline}
          </Text>

          {/* Flip hint */}
          <Text variant="small" className="mt-6 text-neutral-500">
            Click to learn more →
          </Text>
        </div>

        {/* Back Face */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl border-2 shadow-md",
            colors.bg,
            colors.border,
            sizes.padding,
            "flex flex-col overflow-auto",
            "backface-hidden"
          )}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Back content */}
          <div className="flex-1">
            {/* Title */}
            <Heading as="h3" variant="h4" className="mb-3">
              {title}
            </Heading>

            {/* Timeline badge */}
            {timeline && (
              <Badge variant={colors.badgeVariant} size="sm" className="mb-4">
                {timeline}
              </Badge>
            )}

            {/* Description */}
            <Text variant="body" className="mb-4 text-neutral-700">
              {description}
            </Text>

            {/* Deliverables */}
            {deliverables && deliverables.length > 0 && (
              <div>
                <Text variant="small" className="mb-2 font-semibold text-neutral-900">
                  What you'll get:
                </Text>
                <ul className="space-y-1">
                  {deliverables.map((item, index) => (
                    <li key={index}>
                      <Text variant="small" className="text-neutral-700">
                        • {item}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Flip back hint */}
          <Text variant="small" className="mt-4 text-center text-neutral-500">
            ← Click to flip back
          </Text>
        </div>
      </motion.div>
    </motion.div>
  );
};

ServiceFlipCard.displayName = "ServiceFlipCard";
