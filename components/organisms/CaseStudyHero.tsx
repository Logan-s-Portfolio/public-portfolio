/**
 * CaseStudyHero Organism
 *
 * Full-width hero for case study pages with image background and title overlay.
 * Height: 60vh (min 400px, max 600px)
 * Background: Full-width image with terracotta gradient overlay
 * Content: Centered project title, tagline, tags, and breadcrumbs
 * Design System: White text on dark overlay, terracotta gradient, 8pt spacing
 * Accessibility: WCAG AA contrast (4.5:1 minimum), semantic structure
 */

import { Badge } from "@/components/atoms/Badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface CaseStudyHeroProps {
  /** Project title */
  title: string;
  /** Project tagline */
  tagline: string;
  /** Background image source */
  imageSrc: string;
  /** Project tags */
  tags: string[];
  /** Breadcrumb navigation items */
  breadcrumbs: Array<{
    label: string;
    href: string;
  }>;
  /** Additional wrapper class */
  className?: string;
}

export const CaseStudyHero = ({
  title,
  tagline,
  imageSrc,
  tags,
  breadcrumbs,
  className,
}: CaseStudyHeroProps) => {
  return (
    <section
      className={cn(
        "relative flex min-h-[400px] max-h-[600px] h-[60vh] items-center justify-center overflow-hidden",
        className
      )}
      aria-labelledby="case-study-title"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay - Dark scrim for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/70 to-neutral-900/80" />
      <div className="absolute inset-0 bg-terracotta-900/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8"
        >
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center gap-2">
                <a
                  href={crumb.href}
                  className="font-inter text-white/90 transition-colors duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-terracotta-900"
                >
                  {crumb.label}
                </a>
                {index < breadcrumbs.length - 1 && (
                  <svg
                    className="h-4 w-4 text-white/60"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Title and Tagline */}
        <div className="mb-8 max-w-4xl">
          <h1
            id="case-study-title"
            className="mb-4 font-fraunces text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-white drop-shadow-lg md:text-5xl lg:text-6xl"
            style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
            {title}
          </h1>
          <p className="font-inter text-lg leading-[1.6] text-white/90 drop-shadow-md md:text-xl" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}>
            {tagline}
          </p>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full border-2 border-white/30 bg-white/10 px-4 py-2 font-inter text-sm font-medium text-white backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

CaseStudyHero.displayName = "CaseStudyHero";
