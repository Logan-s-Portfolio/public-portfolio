/**
 * AnimatedBackground Stories
 *
 * Demonstrates the AnimatedBackground organism with different variants.
 * Shows animated gradients and floating particles.
 */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { AnimatedBackground } from "./AnimatedBackground";

const meta = {
  title: "Organisms/AnimatedBackground",
  component: AnimatedBackground,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Animated gradient background with moving particles (used behind Hero). Features subtle animated gradient transitioning between terracotta and sage colors with optional floating particles. Fixed positioning, full viewport coverage, behind all content (z-0). Respects prefers-reduced-motion.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="relative min-h-screen">
        <Story />
        {/* Foreground content to show background effect */}
        <div className="relative z-10 flex min-h-screen items-center justify-center">
          <div className="max-w-2xl rounded-xl bg-white p-8 shadow-xl">
            <h1 className="mb-4 font-fraunces text-4xl font-bold text-neutral-900">
              Animated Background Demo
            </h1>
            <p className="font-inter text-lg leading-[1.6] text-neutral-600">
              The animated background is visible behind this content. It features
              a smooth gradient animation and floating particles that create a
              dynamic, subtle effect without overpowering the foreground content.
            </p>
          </div>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof AnimatedBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default background with both gradient and particles.
 * Shows the full effect with 30% opacity.
 */
export const Default: Story = {
  args: {
    variant: "both",
    opacity: 0.3,
  },
};

/**
 * Gradient only (no particles).
 * Clean animated gradient background.
 */
export const GradientOnly: Story = {
  args: {
    variant: "gradient",
    opacity: 0.3,
  },
};

/**
 * Particles only (no gradient).
 * Floating particles on transparent background.
 */
export const ParticlesOnly: Story = {
  args: {
    variant: "particles",
    opacity: 0.3,
  },
};

/**
 * Higher opacity (50%).
 * More prominent background effect.
 */
export const HigherOpacity: Story = {
  args: {
    variant: "both",
    opacity: 0.5,
  },
};

/**
 * Lower opacity (15%).
 * Very subtle background effect.
 */
export const LowerOpacity: Story = {
  args: {
    variant: "both",
    opacity: 0.15,
  },
};

/**
 * Gradient with higher opacity.
 * Strong gradient effect for comparison.
 */
export const StrongGradient: Story = {
  args: {
    variant: "gradient",
    opacity: 0.6,
  },
};

/**
 * Behind hero section mockup.
 * Demonstrates typical usage with hero content.
 */
export const WithHeroContent: Story = {
  args: {
    variant: "both",
    opacity: 0.3,
  },
  decorators: [
    (Story) => (
      <div className="relative min-h-screen">
        <Story />
        {/* Hero mockup */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <p className="mb-6 font-inter text-sm font-medium uppercase tracking-[0.05em] text-terracotta-600">
              Full-Stack Developer & Design Systems Architect
            </p>
            <h1 className="mb-6 font-fraunces text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900 md:text-5xl lg:text-6xl">
              Building Beautiful, Accessible Web Experiences
            </h1>
            <p className="mb-8 font-inter text-lg leading-[1.6] text-neutral-600 md:text-xl">
              Specializing in design systems, React, TypeScript, and modern web
              development. Creating scalable solutions that delight users and
              empower teams.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-terracotta-600 px-6 py-3 font-inter font-medium text-white transition-colors hover:bg-terracotta-700">
                View My Work
              </button>
              <button className="rounded-lg border-2 border-neutral-300 bg-white px-6 py-3 font-inter font-medium text-neutral-900 transition-colors hover:border-neutral-400">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};
