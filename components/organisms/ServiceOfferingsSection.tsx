/**
 * ServiceOfferingsSection Organism
 *
 * Simple, clean service offerings in a standard grid.
 * Design System: Light backgrounds, icon-based, subtle hover effects
 */

"use client";

import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";

export interface Service {
  /** Unique identifier */
  id: string;
  /** Service title */
  title: string;
  /** Brief description */
  description: string;
  /** Icon component */
  icon: React.ReactNode;
}

export interface ServiceOfferingsSectionProps {
  /** Section heading */
  heading?: string;
  /** Section subheading */
  subheading?: string;
  /** Array of services */
  services: Service[];
  /** Additional wrapper class */
  className?: string;
  /** Optional CTA component to show at the end */
  cta?: React.ReactNode;
}

export const ServiceOfferingsSection = ({
  heading = "What I Can Offer Your Organization",
  subheading = "From rapid prototyping to team coaching, flexible services that adapt to your needs",
  services,
  className,
  cta,
}: ServiceOfferingsSectionProps) => {
  return (
    <section
      className={cn("px-4 py-12 md:px-6 md:py-16 lg:px-8 lg:py-20", className)}
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <Heading as="h2" variant="h2" id="services-heading" className="mb-4">
            {heading}
          </Heading>
          {subheading && (
            <p className="font-inter text-lg md:text-xl text-neutral-600 mx-auto max-w-3xl leading-relaxed">
              {subheading}
            </p>
          )}
        </div>

        {/* Services Grid - simple 2-3 column layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-xl bg-neutral-50 p-6 transition-all duration-300 hover:bg-white hover:shadow-md"
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-terracotta-100 text-terracotta-600 transition-colors group-hover:bg-terracotta-200">
                {service.icon}
              </div>

              {/* Title */}
              <Heading as="h3" variant="h4" className="mb-2">
                {service.title}
              </Heading>

              {/* Description */}
              <Text variant="body" className="text-neutral-600">
                {service.description}
              </Text>
            </div>
          ))}

          {/* Optional CTA spanning 2 columns */}
          {cta && (
            <div className="sm:col-span-2 lg:col-span-2">
              {cta}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

ServiceOfferingsSection.displayName = "ServiceOfferingsSection";
