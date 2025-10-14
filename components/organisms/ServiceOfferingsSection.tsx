/**
 * ServiceOfferingsSection Organism
 *
 * Interactive service offerings displayed in a Bento-style grid.
 * Features 3D flip cards with mouse-tracking tilt effects.
 * Layout: Asymmetrical Bento grid (2 large, 3 small cards)
 * Design System: Terracotta/Sage accents, elevation shadows
 * Accessibility: Keyboard navigation, reduced motion support
 */

"use client";

import { ServiceFlipCard } from "@/components/molecules/ServiceFlipCard";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";

export interface Service {
  /** Unique identifier */
  id: string;
  /** Service title */
  title: string;
  /** Brief tagline (front of card) */
  tagline: string;
  /** Detailed description (back of card) */
  description: string;
  /** Service icon (emoji or React element) */
  icon?: React.ReactNode;
  /** Key deliverables or features */
  deliverables?: string[];
  /** Estimated timeline */
  timeline?: string;
  /** Accent color */
  accent?: "terracotta" | "sage" | "neutral";
  /** Card size in grid */
  gridSize?: "small" | "medium" | "large";
}

export interface ServiceOfferingsSectionProps {
  /** Section heading */
  heading?: string;
  /** Section subheading */
  subheading?: string;
  /** Array of services */
  services: Service[];
  /** Layout style */
  layout?: "bento" | "grid" | "masonry";
  /** Additional wrapper class */
  className?: string;
}

export const ServiceOfferingsSection = ({
  heading = "What I Can Offer Your Organization",
  subheading = "From rapid prototyping to team coaching—flexible services that adapt to your needs",
  services,
  layout = "bento",
  className,
}: ServiceOfferingsSectionProps) => {
  // Bento grid layout classes (asymmetrical, modern)
  const getBentoGridClasses = (index: number) => {
    // Pattern: large, small, small, large, small
    const patterns = [
      "md:col-span-2 md:row-span-2", // Card 1: Large (2x2)
      "md:col-span-1 md:row-span-1", // Card 2: Small (1x1)
      "md:col-span-1 md:row-span-1", // Card 3: Small (1x1)
      "md:col-span-2 md:row-span-2", // Card 4: Large (2x2)
      "md:col-span-1 md:row-span-1", // Card 5: Small (1x1)
    ];
    return patterns[index % patterns.length];
  };

  // Standard grid layout classes
  const getGridClasses = () => {
    return "md:col-span-1";
  };

  // Masonry layout classes
  const getMasonryClasses = (index: number) => {
    // Varying heights for masonry effect
    const heights = [
      "md:row-span-2",
      "md:row-span-1",
      "md:row-span-2",
      "md:row-span-1",
      "md:row-span-2",
    ];
    return `md:col-span-1 ${heights[index % heights.length]}`;
  };

  // Get card size based on layout
  const getCardSize = (index: number): "small" | "medium" | "large" => {
    if (layout === "bento") {
      // Large cards in bento grid
      return index === 0 || index === 3 ? "large" : "medium";
    }
    return "medium";
  };

  // Get layout-specific classes
  const getCardClasses = (index: number) => {
    switch (layout) {
      case "bento":
        return getBentoGridClasses(index);
      case "masonry":
        return getMasonryClasses(index);
      default:
        return getGridClasses();
    }
  };

  return (
    <section
      className={cn(
        "relative bg-gradient-to-br from-white via-white to-neutral-50/30 px-4 py-12 md:px-6 md:py-16 lg:px-8 lg:py-24",
        className
      )}
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center md:mb-16">
          <Heading as="h2" variant="display-2xl" id="services-heading" className="mb-4">
            {heading}
          </Heading>
          {subheading && (
            <Text variant="lead" className="mx-auto max-w-3xl text-neutral-600">
              {subheading}
            </Text>
          )}
        </div>

        {/* Services Grid */}
        <div
          className={cn(
            "grid gap-6",
            layout === "bento" && "md:grid-cols-3 md:auto-rows-fr",
            layout === "grid" && "md:grid-cols-3",
            layout === "masonry" && "md:grid-cols-3 md:auto-rows-auto"
          )}
        >
          {services.map((service, index) => (
            <div key={service.id} className={getCardClasses(index)}>
              <ServiceFlipCard
                title={service.title}
                tagline={service.tagline}
                description={service.description}
                icon={service.icon}
                deliverables={service.deliverables}
                timeline={service.timeline}
                accent={service.accent}
                size={getCardSize(index)}
                className="h-full"
              />
            </div>
          ))}
        </div>

        {/* Optional CTA or additional info */}
        <div className="mt-12 text-center">
          <Text variant="body" className="text-neutral-600">
            Interested in working together?{" "}
            <a
              href="#contact"
              className="font-semibold text-terracotta-600 underline decoration-terracotta-300 underline-offset-4 transition-colors hover:text-terracotta-700 hover:decoration-terracotta-500"
            >
              Let's talk
            </a>
          </Text>
        </div>
      </div>
    </section>
  );
};

ServiceOfferingsSection.displayName = "ServiceOfferingsSection";
