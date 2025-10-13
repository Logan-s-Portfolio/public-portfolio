/**
 * AboutSection Organism
 *
 * "About Me" section with photo, bio, and stats.
 * Layout: 2-column (desktop) → stacked (mobile)
 * Padding: py-32 px-8 (128px vertical)
 * Background: bg-neutral-50 or bg-neutral-100
 * Grid: lg:grid-cols-2 gap-16
 * Design System: Terracotta colors, Fraunces/Inter fonts, 8pt spacing
 * Accessibility: Semantic HTML, ARIA labels, descriptive alt text
 */

import { StatCard } from "@/components/molecules/StatCard";
import { Button } from "@/components/atoms/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface AboutSectionProps {
  /** Profile image source */
  imageSrc: string;
  /** Image alt text */
  imageAlt: string;
  /** Person's name */
  name: string;
  /** Location */
  location: string;
  /** Bio paragraphs */
  bioParagraphs: string[];
  /** Stats to display */
  stats: Array<{
    icon: React.ReactNode;
    value: string;
    label: string;
  }>;
  /** CTA button label */
  ctaLabel?: string;
  /** CTA button href */
  ctaHref?: string;
  /** Additional wrapper class */
  className?: string;
}

export const AboutSection = ({
  imageSrc,
  imageAlt,
  name,
  location,
  bioParagraphs,
  stats,
  ctaLabel = "Read Full Story",
  ctaHref = "/about",
  className,
}: AboutSectionProps) => {
  return (
    <section
      className={cn(
        "bg-neutral-50 px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-32",
        className
      )}
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* 2-column layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column: Image */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative mb-4 h-72 w-72 overflow-hidden rounded-xl shadow-md lg:h-96 lg:w-96">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 384px, 288px"
                priority
              />
            </div>
            <p className="font-inter text-base font-medium text-neutral-900">
              {name}
            </p>
            <p className="font-inter text-sm text-neutral-600">{location}</p>
          </div>

          {/* Right column: Content */}
          <div className="flex flex-col">
            <h2
              id="about-heading"
              className="mb-6 font-fraunces text-3xl font-semibold text-neutral-900 md:text-4xl lg:text-5xl"
            >
              About Me
            </h2>

            {/* Bio paragraphs */}
            <div className="mb-8 space-y-4">
              {bioParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="font-inter text-base leading-relaxed text-neutral-600 md:text-lg"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Stats grid */}
            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {stats.map((stat, i) => (
                <StatCard
                  key={i}
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>

            {/* CTA Button */}
            {ctaLabel && ctaHref && (
              <div>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => (window.location.href = ctaHref)}
                >
                  {ctaLabel}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

AboutSection.displayName = "AboutSection";
