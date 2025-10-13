/**
 * FloatingElements Stories
 *
 * Demonstrates the FloatingElements organism with different configurations.
 * Shows floating geometric shapes with various counts.
 */

import type { Meta, StoryObj } from "@storybook/react";
import { FloatingElements } from "./FloatingElements";

const meta = {
  title: "Organisms/FloatingElements",
  component: FloatingElements,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Floating geometric shapes for decorative visual interest. 3-5 shapes with gentle floating animation (up/down, rotation). Uses design system colors (terracotta-200, sage-200, neutral-200) with low opacity (0.1-0.2). Position: Absolute, scattered across page, behind main content. Respects prefers-reduced-motion.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="relative min-h-screen bg-neutral-50">
        <Story />
        {/* Foreground content to show floating elements effect */}
        <div className="relative z-10 flex min-h-screen items-center justify-center p-8">
          <div className="max-w-2xl rounded-xl bg-white p-8 shadow-xl">
            <h1 className="mb-4 font-fraunces text-4xl font-bold text-neutral-900">
              Floating Elements Demo
            </h1>
            <p className="mb-6 font-inter text-lg leading-[1.6] text-neutral-600">
              Floating geometric shapes are visible behind this content. They
              include circles, squares, and organic blob shapes in terracotta,
              sage, and neutral colors. Each shape floats with its own unique
              timing and movement pattern.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full bg-terracotta-200" />
                <span className="font-inter text-sm text-neutral-600">
                  Terracotta shapes
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full bg-sage-200" />
                <span className="font-inter text-sm text-neutral-600">
                  Sage shapes
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full bg-neutral-200" />
                <span className="font-inter text-sm text-neutral-600">
                  Neutral shapes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof FloatingElements>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default with 5 floating elements.
 * Recommended count for balanced visual interest.
 */
export const Default: Story = {
  args: {
    count: 5,
  },
};

/**
 * 3 floating elements (minimal).
 * Subtle decoration for cleaner designs.
 */
export const Minimal: Story = {
  args: {
    count: 3,
  },
};

/**
 * 8 floating elements (busy).
 * More prominent decoration for dynamic pages.
 */
export const Busy: Story = {
  args: {
    count: 8,
  },
};

/**
 * 10 floating elements (maximum).
 * Very active background decoration.
 */
export const Maximum: Story = {
  args: {
    count: 10,
  },
};

/**
 * Single floating element.
 * For testing individual shape behavior.
 */
export const Single: Story = {
  args: {
    count: 1,
  },
};

/**
 * With page content mockup.
 * Demonstrates typical usage with full page layout.
 */
export const WithPageContent: Story = {
  args: {
    count: 5,
  },
  decorators: [
    (Story) => (
      <div className="relative min-h-screen bg-neutral-50">
        <Story />
        {/* Page content mockup */}
        <div className="relative z-10 space-y-12 px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
          {/* Section 1 */}
          <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md">
            <h2 className="mb-4 font-fraunces text-3xl font-semibold text-neutral-900">
              About Me
            </h2>
            <p className="font-inter text-base leading-[1.6] text-neutral-600">
              I'm a full-stack developer with a passion for creating beautiful,
              accessible web experiences. The floating shapes in the background
              add subtle visual interest without distracting from the content.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md">
            <h2 className="mb-4 font-fraunces text-3xl font-semibold text-neutral-900">
              My Work
            </h2>
            <p className="font-inter text-base leading-[1.6] text-neutral-600">
              I specialize in design systems, React, TypeScript, and modern web
              development. The organic shapes create a dynamic background that
              complements the structured content.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md">
            <h2 className="mb-4 font-fraunces text-3xl font-semibold text-neutral-900">
              Get In Touch
            </h2>
            <p className="font-inter text-base leading-[1.6] text-neutral-600">
              Interested in working together? The floating elements create a
              cohesive visual language across the entire page experience.
            </p>
          </div>
        </div>
      </div>
    ),
  ],
};
