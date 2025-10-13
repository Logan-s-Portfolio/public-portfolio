/**
 * PageLayout Stories
 *
 * Demonstrates the PageLayout template with different configurations.
 * Shows Navbar, Footer, content area, and optional AnimatedBackground.
 */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { PageLayout } from "./PageLayout";

const meta = {
  title: "Templates/PageLayout",
  component: PageLayout,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Foundation template used by ALL pages - ensures consistent Navbar/Footer. Provides optional AnimatedBackground and flexible content width (full viewport or 1440px container). Layout: Navbar (sticky) → Main (flex-grow) → Footer (bottom).",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default layout with container max-width.
 * Standard page layout with content constrained to 1440px.
 */
export const Default: Story = {
  args: {
    currentPath: "/",
    maxWidth: "container",
    showAnimatedBg: false,
    children: (
      <div className="py-20">
        <div className="rounded-xl bg-white p-12 shadow-md">
          <h1 className="mb-6 font-fraunces text-4xl font-bold text-neutral-900">
            Page Layout Demo
          </h1>
          <p className="mb-4 font-inter text-lg leading-[1.6] text-neutral-600">
            This is a demo of the PageLayout template with container max-width
            (1440px). The content is centered and has padding on the sides.
          </p>
          <p className="font-inter text-lg leading-[1.6] text-neutral-600">
            Notice the Navbar at the top (sticky) and Footer at the bottom. This
            layout is used by all pages to ensure consistency.
          </p>
        </div>
      </div>
    ),
  },
};

/**
 * Full width layout.
 * Content spans the entire viewport width.
 */
export const FullWidth: Story = {
  args: {
    currentPath: "/",
    maxWidth: "full",
    showAnimatedBg: false,
    children: (
      <div className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-8">
          <h1 className="mb-6 font-fraunces text-4xl font-bold text-neutral-900">
            Full Width Layout
          </h1>
          <p className="mb-4 font-inter text-lg leading-[1.6] text-neutral-600">
            This layout uses maxWidth="full", allowing content to span the
            entire viewport. Useful for full-width sections and landing pages.
          </p>
          <p className="font-inter text-lg leading-[1.6] text-neutral-600">
            The Navbar and Footer still appear, but the main content area has no
            max-width constraint.
          </p>
        </div>
      </div>
    ),
  },
};

/**
 * With animated background.
 * Shows subtle animated gradient and particles.
 */
export const WithAnimatedBackground: Story = {
  args: {
    currentPath: "/",
    maxWidth: "container",
    showAnimatedBg: true,
    children: (
      <div className="py-20">
        <div className="rounded-xl bg-white/95 p-12 shadow-xl backdrop-blur-sm">
          <h1 className="mb-6 font-fraunces text-4xl font-bold text-neutral-900">
            Animated Background
          </h1>
          <p className="mb-4 font-inter text-lg leading-[1.6] text-neutral-600">
            This layout includes an animated background with a terracotta-sage
            gradient and floating particles. The background is subtle (30%
            opacity) and doesn't overpower the content.
          </p>
          <p className="font-inter text-lg leading-[1.6] text-neutral-600">
            This is typically used for the homepage and landing pages to add
            visual interest.
          </p>
        </div>
      </div>
    ),
  },
};

/**
 * With multiple content sections.
 * Demonstrates scrollable page with multiple sections.
 */
export const MultipleSection: Story = {
  args: {
    currentPath: "/about",
    maxWidth: "container",
    showAnimatedBg: false,
    children: (
      <div className="space-y-12 py-20">
        <div className="rounded-xl bg-white p-12 shadow-md">
          <h2 className="mb-4 font-fraunces text-3xl font-semibold text-neutral-900">
            Section 1
          </h2>
          <p className="font-inter text-lg leading-[1.6] text-neutral-600">
            First content section with some text content.
          </p>
        </div>

        <div className="rounded-xl bg-white p-12 shadow-md">
          <h2 className="mb-4 font-fraunces text-3xl font-semibold text-neutral-900">
            Section 2
          </h2>
          <p className="font-inter text-lg leading-[1.6] text-neutral-600">
            Second content section with more text content.
          </p>
        </div>

        <div className="rounded-xl bg-white p-12 shadow-md">
          <h2 className="mb-4 font-fraunces text-3xl font-semibold text-neutral-900">
            Section 3
          </h2>
          <p className="font-inter text-lg leading-[1.6] text-neutral-600">
            Third content section. The Footer will appear at the bottom.
          </p>
        </div>
      </div>
    ),
  },
};

/**
 * Active navigation state.
 * Shows current page highlighted in navigation.
 */
export const ActiveNavigation: Story = {
  args: {
    currentPath: "/case-studies",
    maxWidth: "container",
    showAnimatedBg: false,
    children: (
      <div className="py-20">
        <div className="rounded-xl bg-white p-12 shadow-md">
          <h1 className="mb-6 font-fraunces text-4xl font-bold text-neutral-900">
            Case Studies Page
          </h1>
          <p className="font-inter text-lg leading-[1.6] text-neutral-600">
            Notice the "Case Studies" link in the navigation is highlighted
            because currentPath="/case-studies".
          </p>
        </div>
      </div>
    ),
  },
};

/**
 * Minimal content (Footer at bottom).
 * Shows Footer pushed to bottom even with minimal content.
 */
export const MinimalContent: Story = {
  args: {
    currentPath: "/",
    maxWidth: "container",
    showAnimatedBg: false,
    children: (
      <div className="py-20">
        <div className="rounded-xl bg-white p-12 shadow-md">
          <h1 className="mb-6 font-fraunces text-4xl font-bold text-neutral-900">
            Minimal Content
          </h1>
          <p className="font-inter text-lg leading-[1.6] text-neutral-600">
            Even with minimal content, the Footer stays at the bottom thanks to
            flex-grow on the main element.
          </p>
        </div>
      </div>
    ),
  },
};
