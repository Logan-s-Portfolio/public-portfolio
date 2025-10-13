/**
 * ProjectsGrid Organism
 *
 * Scroll-jacked grid of 4 project cards with corner-entry animations.
 * Cards slide in from corners with rotation and spring physics.
 * Design System: 2x2 grid with staggered reveal driven by wheel events.
 * Accessibility: Semantic HTML, reduced motion support
 */

"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { Tag } from "@/components/atoms/Tag";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  badge: string;
  imageSrc: string;
  imageAlt: string;
  tags: Array<{ label: string; variant: "terracotta" | "sage" }>;
  href: string;
  linkText: string;
}

export interface ProjectsGridProps {
  /** Array of 4 project cards */
  projects: [ProjectData, ProjectData, ProjectData, ProjectData];
  /** Whether the grid is visible (triggered after about section) */
  isVisible?: boolean;
  /** Callback when animation completes */
  onAnimationComplete?: () => void;
  /** Whether sidebar is framed */
  isFramed?: boolean;
  /** Additional wrapper class */
  className?: string;
}

export const ProjectsGrid = ({
  projects,
  isVisible = false,
  onAnimationComplete,
  isFramed = false,
  className,
}: ProjectsGridProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const scrollAccumulatorRef = useRef(0);

  // Set complete immediately if reduced motion
  useEffect(() => {
    if (shouldReduceMotion && isVisible) {
      setAnimationProgress(1);
      setIsAnimationComplete(true);
      onAnimationComplete?.();
    }
  }, [shouldReduceMotion, isVisible, onAnimationComplete]);

  // Lock scrolling and drive animation with wheel events
  useEffect(() => {
    if (shouldReduceMotion || !isVisible || isAnimationComplete) return;

    const scrollPerProgress = 1000; // Total wheel delta needed for full animation

    const handleWheel = (e: WheelEvent) => {
      // Prevent all scrolling
      e.preventDefault();

      // Accumulate scroll delta
      scrollAccumulatorRef.current += e.deltaY;

      // Clamp between 0 and scrollPerProgress
      scrollAccumulatorRef.current = Math.max(
        0,
        Math.min(scrollAccumulatorRef.current, scrollPerProgress)
      );

      // Calculate progress (0 to 1)
      const progress = scrollAccumulatorRef.current / scrollPerProgress;
      setAnimationProgress(progress);

      // Check if animation is complete
      if (progress >= 1) {
        setIsAnimationComplete(true);
        onAnimationComplete?.();
      }
    };

    // Prevent scrolling on body
    document.body.style.overflow = "hidden";

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isVisible, isAnimationComplete, onAnimationComplete, shouldReduceMotion]);

  // Unlock scroll when animation completes
  useEffect(() => {
    if (isAnimationComplete) {
      document.body.style.overflow = "";
    }
  }, [isAnimationComplete]);

  // Calculate individual card progress (staggered)
  // Card 1: 0-0.25, Card 2: 0.25-0.5, Card 3: 0.5-0.75, Card 4: 0.75-1.0
  const getCardProgress = (index: number) => {
    const startProgress = index * 0.25;
    const endProgress = startProgress + 0.25;

    if (animationProgress < startProgress) return 0;
    if (animationProgress > endProgress) return 1;

    return (animationProgress - startProgress) / 0.25;
  };

  // Animation variants for each corner
  const cardVariants = [
    // Top-left
    {
      initial: { x: -200, y: -200, rotate: -15, scale: 0.7, opacity: 0 },
      animate: (progress: number) => ({
        x: progress * 200 - 200,
        y: progress * 200 - 200,
        rotate: progress * 15 - 15,
        scale: 0.7 + progress * 0.3,
        opacity: progress,
      }),
    },
    // Top-right
    {
      initial: { x: 200, y: -200, rotate: 15, scale: 0.7, opacity: 0 },
      animate: (progress: number) => ({
        x: 200 - progress * 200,
        y: progress * 200 - 200,
        rotate: 15 - progress * 15,
        scale: 0.7 + progress * 0.3,
        opacity: progress,
      }),
    },
    // Bottom-left
    {
      initial: { x: -200, y: 200, rotate: -15, scale: 0.7, opacity: 0 },
      animate: (progress: number) => ({
        x: progress * 200 - 200,
        y: 200 - progress * 200,
        rotate: progress * 15 - 15,
        scale: 0.7 + progress * 0.3,
        opacity: progress,
      }),
    },
    // Bottom-right
    {
      initial: { x: 200, y: 200, rotate: 15, scale: 0.7, opacity: 0 },
      animate: (progress: number) => ({
        x: 200 - progress * 200,
        y: 200 - progress * 200,
        rotate: 15 - progress * 15,
        scale: 0.7 + progress * 0.3,
        opacity: progress,
      }),
    },
  ];

  if (!isVisible) return null;

  return (
    <section
      className={cn(
        "min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 py-16",
        className
      )}
      style={{
        paddingLeft: isFramed ? "calc(256px + 1rem)" : undefined,
        transition: "padding 0.6s cubic-bezier(0.33, 1, 0.68, 1)",
      }}
    >
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const cardProgress = shouldReduceMotion ? 1 : getCardProgress(index);
            const variant = cardVariants[index];

            return (
              <motion.div
                key={project.id}
                initial={variant.initial}
                animate={variant.animate(cardProgress)}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 120,
                  mass: 1,
                }}
              >
                <ProjectCard layout="grid">
                  <ProjectCard.Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="object-cover"
                  />
                  <ProjectCard.Content>
                    <ProjectCard.Header>
                      <ProjectCard.Badge variant="featured">
                        {project.badge}
                      </ProjectCard.Badge>
                      <ProjectCard.Title>{project.title}</ProjectCard.Title>
                      <ProjectCard.Description>
                        {project.description}
                      </ProjectCard.Description>
                    </ProjectCard.Header>
                    <ProjectCard.Tags>
                      {project.tags.map((tag) => (
                        <Tag key={tag.label} variant={tag.variant} size="sm">
                          {tag.label}
                        </Tag>
                      ))}
                    </ProjectCard.Tags>
                    <ProjectCard.Footer>
                      <ProjectCard.Link href={project.href}>
                        {project.linkText}
                      </ProjectCard.Link>
                    </ProjectCard.Footer>
                  </ProjectCard.Content>
                </ProjectCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

ProjectsGrid.displayName = "ProjectsGrid";
