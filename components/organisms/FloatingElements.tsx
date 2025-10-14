/**
 * FloatingElements Organism
 *
 * Floating geometric shapes for decorative visual interest.
 * 3-5 shapes with gentle floating animation.
 * Position: Absolute, scattered across page, behind main content
 * Colors: Terracotta-200, Sage-200, Neutral-200 from design system
 * Design System: Low opacity (0.1-0.2), 8-12s animations, cubic-bezier easing
 * Accessibility: Respects prefers-reduced-motion, aria-hidden
 */

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FloatingElementsProps {
  /** Number of floating shapes */
  count?: number;
  /** Additional wrapper class */
  className?: string;
}

type ShapeType = "circle" | "square" | "blob";
type ColorVariant = "terracotta" | "sage" | "neutral";

interface Shape {
  id: number;
  type: ShapeType;
  size: number;
  x: number;
  y: number;
  color: ColorVariant;
  duration: number;
  delay: number;
  rotation: number;
}

const colorClasses: Record<ColorVariant, string> = {
  terracotta: "bg-terracotta-200",
  sage: "bg-sage-200",
  neutral: "bg-neutral-200",
};

export const FloatingElements = ({
  count = 5,
  className,
}: FloatingElementsProps) => {
  const shouldReduceMotion = useReducedMotion();

  // Generate random shapes with seeded randomness for consistency
  const shapes: Shape[] = Array.from({ length: count }, (_, i) => {
    // Use index as seed for consistent positioning
    const seed = i * 137.508; // Golden angle for better distribution
    const random = (offset: number) =>
      (Math.sin(seed + offset) * 10000) % 1;

    const types: ShapeType[] = ["circle", "square", "blob"];
    const colors: ColorVariant[] = ["terracotta", "sage", "neutral"];

    return {
      id: i,
      type: types[Math.floor(Math.abs(random(1)) * types.length)],
      size: Math.abs(random(2)) * 200 + 100, // 100-300px
      x: Math.abs(random(3)) * 90 + 5, // 5-95%
      y: Math.abs(random(4)) * 90 + 5, // 5-95%
      color: colors[Math.floor(Math.abs(random(5)) * colors.length)],
      duration: Math.abs(random(6)) * 4 + 8, // 8-12s
      delay: Math.abs(random(7)) * 2, // 0-2s
      rotation: Math.abs(random(8)) * 30 - 15, // -15 to 15deg
    };
  });

  // Floating animation variants
  const floatingVariants = (duration: number, delay: number, rotation: number) =>
    shouldReduceMotion
      ? {}
      : {
          animate: {
            y: [0, -20, 0],
            rotate: [rotation, rotation + 15, rotation],
          },
          transition: {
            duration,
            delay,
            repeat: Infinity,
            ease: [0.33, 1, 0.68, 1] as const,
          },
        };

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={cn(
            "absolute opacity-10",
            colorClasses[shape.color],
            shape.type === "circle" && "rounded-full",
            shape.type === "square" && "rounded-lg",
            shape.type === "blob" && "rounded-[40%_60%_70%_30%/60%_40%_60%_40%]"
          )}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
          }}
          {...floatingVariants(shape.duration, shape.delay, shape.rotation)}
        />
      ))}
    </div>
  );
};

FloatingElements.displayName = "FloatingElements";
