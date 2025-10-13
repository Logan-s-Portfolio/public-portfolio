/**
 * ProjectShowcase Stories
 *
 * Demonstrates the ProjectShowcase organism with alternating layouts.
 * Shows featured projects section with image/content alternating sides.
 */

import type { Meta, StoryObj } from "@storybook/react";
import { ProjectShowcase } from "./ProjectShowcase";

const meta = {
  title: "Organisms/ProjectShowcase",
  component: ProjectShowcase,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Featured projects section with large cards in alternating layout. Used on homepage to highlight 2-3 key projects. Layout alternates image left/right with content on opposite side.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock showcase projects
const mockShowcaseProjects = [
  {
    id: "1",
    title: "E-Commerce Platform Redesign",
    description:
      "Led the complete redesign of a multi-vendor marketplace serving 100,000+ monthly users. Increased mobile conversion by 45% and improved checkout completion rate by 30% through user research, iterative testing, and accessibility improvements.",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    tags: ["React", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    href: "/case-studies/ecommerce-platform",
  },
  {
    id: "2",
    title: "Healthcare Dashboard",
    description:
      "Designed and built a real-time patient monitoring dashboard processing 50,000+ data points per second. Reduced alert response time by 60% and improved clinician workflow efficiency through intuitive data visualization and customizable views.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    tags: ["Next.js", "D3.js", "Node.js", "PostgreSQL", "Redis"],
    href: "/case-studies/healthcare-dashboard",
  },
  {
    id: "3",
    title: "Design System Implementation",
    description:
      "Built a comprehensive design system from the ground up with 50+ reusable components, complete documentation, and automated testing. Reduced design-to-development handoff time by 70% and ensured brand consistency across 12 product teams.",
    imageSrc: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=800&fit=crop",
    tags: ["React", "Storybook", "TypeScript", "Figma", "Chromatic"],
    href: "/case-studies/design-system",
  },
];

/**
 * Default showcase with 3 featured projects (recommended).
 * Shows alternating image/content layout (image left, right, left).
 */
export const Default: Story = {
  args: {
    heading: "Featured Work",
    projects: mockShowcaseProjects,
    ctaLabel: "View All Projects",
    ctaHref: "/case-studies",
  },
};

/**
 * Showcase with 2 projects (minimum recommended).
 * First project: image left, second project: image right.
 */
export const TwoProjects: Story = {
  args: {
    heading: "Featured Work",
    projects: mockShowcaseProjects.slice(0, 2),
    ctaLabel: "View All Projects",
    ctaHref: "/case-studies",
  },
};

/**
 * Showcase with custom heading.
 */
export const CustomHeading: Story = {
  args: {
    heading: "Recent Projects",
    projects: mockShowcaseProjects,
    ctaLabel: "View All Projects",
    ctaHref: "/case-studies",
  },
};

/**
 * Showcase without CTA button.
 */
export const NoCTA: Story = {
  args: {
    heading: "Featured Work",
    projects: mockShowcaseProjects,
    ctaLabel: undefined,
    ctaHref: undefined,
  },
};

/**
 * Showcase with custom CTA label.
 */
export const CustomCTA: Story = {
  args: {
    heading: "Featured Work",
    projects: mockShowcaseProjects.slice(0, 2),
    ctaLabel: "Explore All Case Studies →",
    ctaHref: "/work",
  },
};

/**
 * Single project (useful for testing single project showcase).
 */
export const SingleProject: Story = {
  args: {
    heading: "Featured Work",
    projects: mockShowcaseProjects.slice(0, 1),
    ctaLabel: "View All Projects",
    ctaHref: "/case-studies",
  },
};
