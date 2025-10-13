/**
 * AnimatedBackground Organism
 *
 * Animated gradient background with moving particles (used behind Hero).
 * Features subtle animated gradient and optional floating particles.
 * Position: Fixed, full viewport, behind all content (z-0)
 * Colors: Terracotta → Sage gradient from design system
 * Design System: Terracotta-500/600, Sage-500, 8pt spacing, 500ms transitions
 * Accessibility: Respects prefers-reduced-motion, aria-hidden
 */

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedBackgroundProps {
  /** Animation variant */
  variant?: "gradient" | "particles" | "both";
  /** Background opacity (0-1) */
  opacity?: number;
  /** Additional wrapper class */
  className?: string;
}

export const AnimatedBackground = ({
  variant = "both",
  opacity = 0.3,
  className,
}: AnimatedBackgroundProps) => {
  const shouldReduceMotion = useReducedMotion();

  // Particle configuration
  const particleCount = 20;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 4, // 4-12px
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15, // 15-25s
  }));

  // Gradient animation variants
  const gradientVariants = shouldReduceMotion
    ? {}
    : {
        animate: {
          background: [
            "radial-gradient(circle at 20% 50%, rgba(184, 80, 50, 0.4) 0%, rgba(124, 148, 115, 0.3) 50%, rgba(184, 80, 50, 0.2) 100%)",
            "radial-gradient(circle at 80% 50%, rgba(124, 148, 115, 0.4) 0%, rgba(184, 80, 50, 0.3) 50%, rgba(124, 148, 115, 0.2) 100%)",
            "radial-gradient(circle at 20% 50%, rgba(184, 80, 50, 0.4) 0%, rgba(124, 148, 115, 0.3) 50%, rgba(184, 80, 50, 0.2) 100%)",
          ],
        },
        transition: {
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

  // Particle animation variants
  const particleVariants = (delay: number, duration: number) =>
    shouldReduceMotion
      ? {}
      : {
          animate: {
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3],
          },
          transition: {
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };

  const showGradient = variant === "gradient" || variant === "both";
  const showParticles = variant === "particles" || variant === "both";

  return (
    <div
      className={cn("pointer-events-none fixed inset-0 -z-10", className)}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Animated Gradient */}
      {showGradient && (
        <motion.div
          className="absolute inset-0"
          {...gradientVariants}
          style={{
            background: shouldReduceMotion
              ? "radial-gradient(circle at 50% 50%, rgba(184, 80, 50, 0.3) 0%, rgba(124, 148, 115, 0.2) 100%)"
              : undefined,
          }}
        />
      )}

      {/* Floating Particles */}
      {showParticles && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-terracotta-400"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
              {...particleVariants(particle.delay, particle.duration)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

AnimatedBackground.displayName = "AnimatedBackground";
