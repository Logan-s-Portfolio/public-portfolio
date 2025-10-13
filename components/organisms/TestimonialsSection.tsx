/**
 * TestimonialsSection Organism
 *
 * Display client/colleague testimonials with photos in a responsive grid.
 * Background: Subtle sage-50 background for visual variation
 * Layout: 3-column grid (desktop) → 2 columns (tablet) → horizontal scroll (mobile)
 * Padding: py-24 px-8
 * Design System: Sage accent background, 8pt spacing, responsive grid
 * Accessibility: Semantic structure, ARIA labels, keyboard navigation
 */

import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import { cn } from "@/lib/utils";

export interface Testimonial {
  /** Unique identifier */
  id: string;
  /** Testimonial quote text */
  quote: string;
  /** Author's full name */
  authorName: string;
  /** Author's job title */
  authorTitle: string;
  /** Author's photo URL */
  authorImage: string;
  /** Author's company (optional) */
  authorCompany?: string;
}

export interface TestimonialsSectionProps {
  /** Section heading */
  heading?: string;
  /** Array of testimonials (2-3 recommended) */
  testimonials: Testimonial[];
  /** Additional wrapper class */
  className?: string;
}

export const TestimonialsSection = ({
  heading = "What Others Say",
  testimonials,
  className,
}: TestimonialsSectionProps) => {
  return (
    <section
      className={cn(
        "bg-sage-50 px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24",
        className
      )}
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <h2
          id="testimonials-heading"
          className="mb-12 text-center font-fraunces text-3xl font-semibold text-neutral-900 md:mb-16 md:text-4xl lg:text-5xl"
        >
          {heading}
        </h2>

        {/* Testimonials Grid */}
        {/* Mobile: horizontal scroll, Tablet+: responsive grid */}
        <div className="overflow-x-auto md:overflow-visible">
          <div className="flex gap-6 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-[280px] flex-shrink-0 md:min-w-0"
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.authorName}
                  role={testimonial.authorTitle}
                  company={testimonial.authorCompany}
                  avatar={testimonial.authorImage}
                  layout="vertical"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

TestimonialsSection.displayName = "TestimonialsSection";
