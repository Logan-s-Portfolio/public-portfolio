/**
 * StorybookShowcase Organism
 *
 * Embeds actual Storybook stories to showcase the complete design system.
 * Organizes components by atomic design levels using embedded iframes.
 * Design System: Terracotta/Sage accents, 8-point grid
 */

"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

type AtomicLevel = "atoms" | "molecules" | "organisms" | "templates";

interface StoryEmbed {
  id: string;
  title: string;
  storyId: string; // e.g., "atoms-button--default"
  height?: number;
}

export interface StorybookShowcaseProps {
  className?: string;
  storybookUrl?: string; // Default: http://localhost:6006
}

const stories: Record<AtomicLevel, StoryEmbed[]> = {
  atoms: [
    { id: "button", title: "Button", storyId: "atoms-button--all-variants", height: 400 },
    { id: "heading", title: "Heading", storyId: "atoms-heading--font-switching", height: 600 },
    { id: "text", title: "Text", storyId: "atoms-text--all-variants", height: 400 },
    { id: "badge", title: "Badge", storyId: "atoms-badge--all-variants", height: 200 },
    { id: "avatar", title: "Avatar", storyId: "atoms-avatar--all-sizes", height: 200 },
    { id: "input", title: "Input", storyId: "atoms-input--all-sizes", height: 500 },
    { id: "link", title: "Link", storyId: "atoms-link--all-variants", height: 200 },
    { id: "spinner", title: "Spinner", storyId: "atoms-spinner--all-sizes", height: 200 },
    { id: "divider", title: "Divider", storyId: "atoms-divider--variants", height: 300 },
    { id: "progressbar", title: "Progress Bar", storyId: "atoms-progress-bar--all-sizes", height: 250 },
    { id: "skeleton", title: "Skeleton", storyId: "atoms-skeleton--all-variants", height: 400 },
    { id: "code", title: "Code", storyId: "atoms-code--block", height: 300 },
    { id: "iconbutton", title: "Icon Button", storyId: "atoms-icon-button--all-variants", height: 200 },
    { id: "checkbox", title: "Checkbox", storyId: "atoms-checkbox--all-sizes", height: 200 },
    { id: "label", title: "Label", storyId: "atoms-label--all-variants", height: 300 },
    { id: "tag", title: "Tag", storyId: "atoms-tag--all-variants", height: 200 },
    { id: "image", title: "Image", storyId: "atoms-image--all-aspect-ratios", height: 400 },
  ],
  molecules: [
    { id: "projectcard", title: "Project Card", storyId: "molecules-project-card--grid-layout", height: 450 },
    { id: "testimonialcard", title: "Testimonial Card", storyId: "molecules-testimonial-card--default", height: 350 },
    { id: "statcard", title: "Stat Card", storyId: "molecules-stat-card--default", height: 250 },
    { id: "formfield", title: "Form Field", storyId: "molecules-form-field--default", height: 200 },
    { id: "breadcrumb", title: "Breadcrumb", storyId: "molecules-breadcrumb--default", height: 150 },
    { id: "navitem", title: "Nav Item", storyId: "molecules-nav-item--default", height: 150 },
    { id: "skillbadge", title: "Skill Badge", storyId: "molecules-skill-badge--default", height: 200 },
    { id: "imagewithcaption", title: "Image with Caption", storyId: "molecules-image-with-caption--default", height: 400 },
    { id: "videoembed", title: "Video Embed", storyId: "molecules-video-embed--default", height: 400 },
    { id: "dropdown", title: "Dropdown", storyId: "molecules-dropdown--default", height: 300 },
    { id: "textarea", title: "Text Area", storyId: "molecules-text-area--default", height: 300 },
    { id: "checkboxfield", title: "Checkbox Field", storyId: "molecules-checkbox-field--default", height: 200 },
    { id: "customselect", title: "Custom Select", storyId: "molecules-custom-select--default", height: 300 },
    { id: "themetoggle", title: "Theme Toggle", storyId: "molecules-theme-toggle--default", height: 150 },
    { id: "sociallink", title: "Social Link", storyId: "molecules-social-link--default", height: 150 },
  ],
  organisms: [
    { id: "hero", title: "Hero", storyId: "organisms-hero--default", height: 600 },
    { id: "navbar", title: "Navbar", storyId: "organisms-navbar--default", height: 200 },
    { id: "footer", title: "Footer", storyId: "organisms-footer--default", height: 400 },
    { id: "contactform", title: "Contact Form", storyId: "organisms-contact-form--default", height: 600 },
    { id: "projectgrid", title: "Project Grid", storyId: "organisms-project-grid--default", height: 700 },
    { id: "projectshowcase", title: "Project Showcase", storyId: "organisms-project-showcase--default", height: 700 },
    { id: "timelinesection", title: "Timeline Section", storyId: "organisms-timeline-section--default", height: 600 },
    { id: "skillsshowcase", title: "Skills Showcase", storyId: "organisms-skills-showcase--default", height: 500 },
    { id: "testimonialssection", title: "Testimonials Section", storyId: "organisms-testimonials-section--default", height: 600 },
    { id: "aboutsection", title: "About Section", storyId: "organisms-about-section--default", height: 500 },
    { id: "casestudyhero", title: "Case Study Hero", storyId: "organisms-case-study-hero--default", height: 500 },
    { id: "casestudycontent", title: "Case Study Content", storyId: "organisms-case-study-content--default", height: 700 },
    { id: "animatedbackground", title: "Animated Background", storyId: "organisms-animated-background--default", height: 400 },
    { id: "floatingelements", title: "Floating Elements", storyId: "organisms-floating-elements--default", height: 400 },
    { id: "scrollanimation", title: "Scroll Animation Section", storyId: "organisms-scroll-animation-section--default", height: 500 },
    { id: "offeringssection", title: "Offerings Section", storyId: "organisms-offerings-section--default", height: 600 },
  ],
  templates: [
    { id: "pagelayout", title: "Page Layout", storyId: "templates-page-layout--default", height: 800 },
    { id: "contentlayout", title: "Content Layout", storyId: "templates-content-layout--default", height: 800 },
    { id: "homelayout", title: "Home Layout", storyId: "templates-home-layout--default", height: 800 },
  ],
};

export const StorybookShowcase = ({
  className,
  storybookUrl = "http://localhost:6006",
}: StorybookShowcaseProps) => {
  const [activeLevel, setActiveLevel] = useState<AtomicLevel>("atoms");

  const currentStories = stories[activeLevel];

  return (
    <div className={cn("space-y-8", className)}>
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <Heading as="h2" variant="h3" className="mb-4">
          Component Library
        </Heading>
      </div>

      {/* Atomic Level Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveLevel("atoms")}
          className={cn(
            "rounded-lg px-6 py-3 font-inter text-sm font-semibold transition-all",
            activeLevel === "atoms"
              ? "bg-terracotta-600 text-white shadow-md"
              : "bg-white border-2 border-neutral-200 text-neutral-700 hover:border-neutral-300"
          )}
        >
          Atoms ({stories.atoms.length})
        </button>
        <button
          onClick={() => setActiveLevel("molecules")}
          className={cn(
            "rounded-lg px-6 py-3 font-inter text-sm font-semibold transition-all",
            activeLevel === "molecules"
              ? "bg-sage-600 text-white shadow-md"
              : "bg-white border-2 border-neutral-200 text-neutral-700 hover:border-neutral-300"
          )}
        >
          Molecules ({stories.molecules.length})
        </button>
        <button
          onClick={() => setActiveLevel("organisms")}
          className={cn(
            "rounded-lg px-6 py-3 font-inter text-sm font-semibold transition-all",
            activeLevel === "organisms"
              ? "bg-terracotta-600 text-white shadow-md"
              : "bg-white border-2 border-neutral-200 text-neutral-700 hover:border-neutral-300"
          )}
        >
          Organisms ({stories.organisms.length})
        </button>
        <button
          onClick={() => setActiveLevel("templates")}
          className={cn(
            "rounded-lg px-6 py-3 font-inter text-sm font-semibold transition-all",
            activeLevel === "templates"
              ? "bg-sage-600 text-white shadow-md"
              : "bg-white border-2 border-neutral-200 text-neutral-700 hover:border-neutral-300"
          )}
        >
          Templates ({stories.templates.length})
        </button>
      </div>

      {/* Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {currentStories.map((story) => (
          <div
            key={story.id}
            className="rounded-lg border-2 border-neutral-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Story Title */}
            <div className="px-4 py-3 border-b-2 border-neutral-200 bg-neutral-50">
              <Heading as="h3" variant="h3" className="text-neutral-900">
                {story.title}
              </Heading>
            </div>

            {/* Embedded Storybook Iframe */}
            <iframe
              src={`${storybookUrl}/iframe.html?id=${story.storyId}&viewMode=story`}
              style={{
                width: "100%",
                height: `${story.height || 400}px`,
                border: "none",
              }}
              title={`${story.title} - Storybook`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center pt-4">
        <Text variant="small" className="text-neutral-600">
          All components are built with accessibility, responsiveness, and design system tokens.
        </Text>
      </div>
    </div>
  );
};

StorybookShowcase.displayName = "StorybookShowcase";
