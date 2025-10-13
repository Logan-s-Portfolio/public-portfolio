/**
 * ScrollAnimationSection Stories
 *
 * Demonstrates the ScrollAnimationSection organism with different animation types.
 * Shows scroll-based animations: fadeIn, slideUp, parallax, stagger.
 */

import type { Meta, StoryObj } from "@storybook/react";
import { ScrollAnimationSection } from "./ScrollAnimationSection";

const meta = {
  title: "Organisms/ScrollAnimationSection",
  component: ScrollAnimationSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Section that animates elements on scroll (parallax, fade-in, slide-in). Triggers animations when elements enter viewport. Animation types: fadeIn (opacity), slideUp (opacity + y), parallax (background slower than foreground), stagger (children animate sequentially). Uses 500ms transitions with design system easing. Respects prefers-reduced-motion.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-neutral-50">
        {/* Spacer to allow scrolling */}
        <div className="flex min-h-screen items-center justify-center bg-white">
          <div className="max-w-2xl p-8 text-center">
            <h1 className="mb-4 font-fraunces text-4xl font-bold text-neutral-900">
              Scroll Animation Demo
            </h1>
            <p className="font-inter text-lg leading-[1.6] text-neutral-600">
              Scroll down to see the animation effect. Elements will animate
              into view as they enter the viewport.
            </p>
            <div className="mt-8">
              <svg
                className="mx-auto h-8 w-8 animate-bounce text-neutral-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Story content */}
        <Story />

        {/* Bottom spacer */}
        <div className="h-screen bg-white" />
      </div>
    ),
  ],
} satisfies Meta<typeof ScrollAnimationSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Fade in animation (default).
 * Elements fade in when scrolled into view.
 */
export const FadeIn: Story = {
  args: {
    animationType: "fadeIn",
    threshold: 0.3,
    children: (
      <div className="mx-auto max-w-4xl p-8">
        <div className="rounded-xl bg-white p-8 shadow-xl">
          <h2 className="mb-4 font-fraunces text-3xl font-semibold text-neutral-900">
            Fade In Animation
          </h2>
          <p className="font-inter text-base leading-[1.6] text-neutral-600">
            This content fades in when it enters the viewport. The opacity
            transitions from 0 to 1 with a smooth easing curve. Scroll back up
            and down to see the effect again (it only triggers once).
          </p>
        </div>
      </div>
    ),
  },
};

/**
 * Slide up animation.
 * Elements slide up and fade in simultaneously.
 */
export const SlideUp: Story = {
  args: {
    animationType: "slideUp",
    threshold: 0.3,
    children: (
      <div className="mx-auto max-w-4xl p-8">
        <div className="rounded-xl bg-white p-8 shadow-xl">
          <h2 className="mb-4 font-fraunces text-3xl font-semibold text-neutral-900">
            Slide Up Animation
          </h2>
          <p className="font-inter text-base leading-[1.6] text-neutral-600">
            This content slides up from below while fading in. The element
            starts 50px below its final position and moves up with the opacity
            transition. This creates a more dynamic entrance than fade alone.
          </p>
        </div>
      </div>
    ),
  },
};

/**
 * Parallax animation.
 * Background moves slower than scroll speed.
 */
export const Parallax: Story = {
  args: {
    animationType: "parallax",
    children: (
      <div className="mx-auto max-w-4xl p-8">
        <div className="rounded-xl bg-terracotta-50 p-8 shadow-xl">
          <h2 className="mb-4 font-fraunces text-3xl font-semibold text-neutral-900">
            Parallax Animation
          </h2>
          <p className="font-inter text-base leading-[1.6] text-neutral-600">
            This content has a parallax effect - it moves at a different speed
            than the scroll. Notice how it moves slower than the page scroll,
            creating a depth effect. Scroll up and down to see the parallax
            movement.
          </p>
        </div>
      </div>
    ),
  },
};

/**
 * Stagger animation.
 * Child elements animate in sequence.
 */
export const Stagger: Story = {
  args: {
    animationType: "stagger",
    threshold: 0.2,
    children: [
      <div
        key="1"
        className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md"
      >
        <h3 className="mb-2 font-fraunces text-2xl font-semibold text-neutral-900">
          First Item
        </h3>
        <p className="font-inter text-base leading-[1.6] text-neutral-600">
          This is the first item in the stagger sequence. It animates in first.
        </p>
      </div>,
      <div
        key="2"
        className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md"
      >
        <h3 className="mb-2 font-fraunces text-2xl font-semibold text-neutral-900">
          Second Item
        </h3>
        <p className="font-inter text-base leading-[1.6] text-neutral-600">
          This is the second item. It animates 100ms after the first item.
        </p>
      </div>,
      <div
        key="3"
        className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md"
      >
        <h3 className="mb-2 font-fraunces text-2xl font-semibold text-neutral-900">
          Third Item
        </h3>
        <p className="font-inter text-base leading-[1.6] text-neutral-600">
          This is the third item. It animates 200ms after the first item.
        </p>
      </div>,
    ],
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-neutral-50">
        <div className="flex min-h-screen items-center justify-center bg-white">
          <div className="max-w-2xl p-8 text-center">
            <h1 className="mb-4 font-fraunces text-4xl font-bold text-neutral-900">
              Stagger Animation Demo
            </h1>
            <p className="font-inter text-lg leading-[1.6] text-neutral-600">
              Scroll down to see items animate in sequence.
            </p>
          </div>
        </div>
        <div className="space-y-6 p-8">
          <Story />
        </div>
        <div className="h-screen bg-white" />
      </div>
    ),
  ],
};

/**
 * Multiple sections with different animations.
 * Demonstrates mixed usage on a single page.
 */
export const MixedAnimations: Story = {
  render: () => (
    <div className="min-h-screen space-y-20 bg-neutral-50 py-20">
      <ScrollAnimationSection animationType="fadeIn">
        <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-4 font-fraunces text-3xl font-semibold text-neutral-900">
            Section 1: Fade In
          </h2>
          <p className="font-inter text-base leading-[1.6] text-neutral-600">
            This section uses fade in animation.
          </p>
        </div>
      </ScrollAnimationSection>

      <ScrollAnimationSection animationType="slideUp">
        <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-4 font-fraunces text-3xl font-semibold text-neutral-900">
            Section 2: Slide Up
          </h2>
          <p className="font-inter text-base leading-[1.6] text-neutral-600">
            This section uses slide up animation.
          </p>
        </div>
      </ScrollAnimationSection>

      <ScrollAnimationSection animationType="parallax">
        <div className="mx-auto max-w-4xl rounded-xl bg-terracotta-50 p-8 shadow-md">
          <h2 className="mb-4 font-fraunces text-3xl font-semibold text-neutral-900">
            Section 3: Parallax
          </h2>
          <p className="font-inter text-base leading-[1.6] text-neutral-600">
            This section uses parallax animation.
          </p>
        </div>
      </ScrollAnimationSection>
    </div>
  ),
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-neutral-50">
        <div className="flex min-h-screen items-center justify-center bg-white">
          <div className="max-w-2xl p-8 text-center">
            <h1 className="mb-4 font-fraunces text-4xl font-bold text-neutral-900">
              Mixed Animations Demo
            </h1>
            <p className="font-inter text-lg leading-[1.6] text-neutral-600">
              Scroll down to see different animation types.
            </p>
          </div>
        </div>
        <Story />
        <div className="h-screen bg-white" />
      </div>
    ),
  ],
};

/**
 * Custom threshold testing.
 * Shows how threshold affects when animation triggers.
 */
export const CustomThreshold: Story = {
  args: {
    animationType: "slideUp",
    threshold: 0.8,
    children: (
      <div className="mx-auto max-w-4xl p-8">
        <div className="rounded-xl bg-white p-8 shadow-xl">
          <h2 className="mb-4 font-fraunces text-3xl font-semibold text-neutral-900">
            High Threshold (0.8)
          </h2>
          <p className="font-inter text-base leading-[1.6] text-neutral-600">
            This content requires 80% of the element to be visible before
            animating. This means the animation triggers later as you scroll.
            Lower thresholds trigger earlier (e.g., 0.2 = 20% visible).
          </p>
        </div>
      </div>
    ),
  },
};
