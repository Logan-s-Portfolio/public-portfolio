/**
 * SkillsShowcase Organism
 *
 * Grid of skills with icons and descriptions (used on homepage).
 * Each card displays skill icon, name, years experience badge, description, and link.
 * Layout: 3-column grid (desktop) → 2 columns (tablet) → 1 column (mobile)
 * Cards: White background with hover lift effect and shadow transition
 * Padding: py-24 px-8
 * Design System: White cards on neutral-50/white background, 8pt spacing, terracotta accents
 * Accessibility: Each card is focusable link with hover/focus states
 */

"use client";

import { Badge } from "@/components/atoms/Badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface Skill {
  /** Unique identifier */
  id: string;
  /** Skill name */
  name: string;
  /** Brief description */
  description: string;
  /** Icon (emoji or icon name) */
  icon: string;
  /** Years of experience */
  years: string;
  /** Link to skill detail page */
  href: string;
}

export interface SkillsShowcaseProps {
  /** Section heading */
  heading?: string;
  /** Array of skills (6-8 recommended) */
  skills: Skill[];
  /** Additional wrapper class */
  className?: string;
}

export const SkillsShowcase = ({
  heading = "Skills & Expertise",
  skills,
  className,
}: SkillsShowcaseProps) => {
  return (
    <section
      className={cn(
        "bg-white px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24",
        className
      )}
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <h2
          id="skills-heading"
          className="mb-12 text-center font-fraunces text-3xl font-semibold text-neutral-900 md:mb-16 md:text-4xl lg:text-5xl"
        >
          {heading}
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <Link
              key={skill.id}
              href={skill.href}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-600 focus-visible:ring-offset-2"
            >
              <div className="h-full rounded-xl bg-white p-6 shadow-md transition-all duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] hover:-translate-y-1 hover:shadow-xl">
                {/* Icon */}
                <div
                  className="mb-4 text-4xl"
                  aria-hidden="true"
                  role="img"
                >
                  {skill.icon}
                </div>

                {/* Name */}
                <h3 className="mb-2 font-fraunces text-xl font-semibold text-neutral-900 md:text-2xl">
                  {skill.name}
                </h3>

                {/* Years Badge */}
                <div className="mb-3">
                  <Badge variant="outline" size="sm">
                    {skill.years}
                  </Badge>
                </div>

                {/* Description */}
                <p className="mb-4 font-inter text-base leading-[1.6] text-neutral-600">
                  {skill.description}
                </p>

                {/* Learn More Link */}
                <span className="inline-flex items-center gap-2 font-inter text-sm font-medium text-terracotta-600 transition-colors duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:text-terracotta-700">
                  Learn More
                  <svg
                    className="h-4 w-4 transition-transform duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

SkillsShowcase.displayName = "SkillsShowcase";
