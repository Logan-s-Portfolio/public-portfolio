/**
 * ProjectShowcase Organism
 *
 * Featured projects section with large cards in alternating layout.
 * Used on homepage to highlight 2-3 key projects.
 * Layout: Alternates image left/right with content on opposite side
 * Padding: py-16 md:py-20 lg:py-24, px-4 md:px-6 lg:px-8
 * Background: bg-white (contrasts with neutral-50 page background)
 * Design System: ProjectCard molecules, 8pt spacing, responsive
 * Accessibility: Semantic structure with heading association
 */

"use client";

import { ProjectCard } from "@/components/molecules/ProjectCard";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { cn } from "@/lib/utils";

export interface ShowcaseProject {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  href: string;
}

export interface ProjectShowcaseProps {
  /** Section heading */
  heading?: string;
  /** Array of featured projects (2-3 recommended) */
  projects: ShowcaseProject[];
  /** CTA button label */
  ctaLabel?: string;
  /** CTA button href */
  ctaHref?: string;
  /** Additional wrapper class */
  className?: string;
}

export const ProjectShowcase = ({
  heading = "Featured Work",
  projects,
  ctaLabel = "View All Projects",
  ctaHref = "/case-studies",
  className,
}: ProjectShowcaseProps) => {
  return (
    <section
      className={cn(
        "bg-white px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24",
        className
      )}
      aria-labelledby="showcase-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <h2
          id="showcase-heading"
          className="mb-12 font-fraunces text-3xl font-semibold text-neutral-900 md:mb-16 md:text-4xl lg:text-5xl"
        >
          {heading}
        </h2>

        {/* Featured Projects - Alternating Layout */}
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isReversed = !isEven;

            return (
              <div
                key={project.id}
                className={cn(
                  "flex flex-col gap-8 lg:flex-row lg:gap-12",
                  isReversed && "lg:flex-row-reverse"
                )}
              >
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-100 shadow-md lg:w-1/2">
                  <img
                    src={project.imageSrc}
                    alt={`${project.title} project screenshot`}
                    className="h-full w-full object-cover transition-transform duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex w-full flex-col justify-center gap-6 lg:w-1/2">
                  <div>
                    <h3 className="mb-4 font-fraunces text-2xl font-semibold text-neutral-900 md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="font-inter text-base leading-[1.6] text-neutral-600 md:text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          size="sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Link */}
                  <div>
                    <a
                      href={project.href}
                      className="inline-flex items-center gap-2 font-inter text-sm font-medium text-terracotta-600 transition-colors duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] hover:text-terracotta-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-600 focus-visible:ring-offset-2"
                    >
                      View Case Study
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        {ctaLabel && ctaHref && (
          <div className="mt-16 flex justify-center md:mt-20">
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = ctaHref)}
            >
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

ProjectShowcase.displayName = "ProjectShowcase";
