/**
 * TestimonialsSection Stories
 *
 * Demonstrates the TestimonialsSection organism with different numbers of testimonials.
 * Shows responsive grid layout and horizontal scroll on mobile.
 */

import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialsSection } from "./TestimonialsSection";

const meta = {
  title: "Organisms/TestimonialsSection",
  component: TestimonialsSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Display client/colleague testimonials with photos in a responsive grid. Background: Subtle sage-50. Layout: 3-column grid (desktop) → 2 columns (tablet) → horizontal scroll (mobile). Used on homepage and about page.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TestimonialsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock testimonial data
const mockTestimonials = [
  {
    id: "1",
    quote:
      "Logan's expertise in design systems transformed our product. The component library they built reduced our development time by 60% and ensured consistency across all our applications.",
    authorName: "Sarah Chen",
    authorTitle: "VP of Product",
    authorImage: "https://i.pravatar.cc/150?img=5",
    authorCompany: "TechStart Inc",
  },
  {
    id: "2",
    quote:
      "Working with Logan was an absolute pleasure. Their attention to accessibility and performance optimization resulted in a 40% improvement in our Core Web Vitals scores.",
    authorName: "Michael Rodriguez",
    authorTitle: "Engineering Manager",
    authorImage: "https://i.pravatar.cc/150?img=12",
    authorCompany: "DataFlow Systems",
  },
  {
    id: "3",
    quote:
      "Logan's full-stack capabilities are impressive. They seamlessly handled everything from database architecture to React components, delivering a production-ready SaaS platform ahead of schedule.",
    authorName: "Emily Thompson",
    authorTitle: "CTO",
    authorImage: "https://i.pravatar.cc/150?img=9",
    authorCompany: "CloudMetrics",
  },
  {
    id: "4",
    quote:
      "The design system Logan created has become the foundation of our entire product suite. Their documentation and Storybook setup made onboarding new developers incredibly smooth.",
    authorName: "David Park",
    authorTitle: "Senior Designer",
    authorImage: "https://i.pravatar.cc/150?img=15",
    authorCompany: "DesignCo",
  },
  {
    id: "5",
    quote:
      "Logan's problem-solving skills and architectural decisions saved us from major technical debt. They have a rare combination of strategic thinking and hands-on implementation expertise.",
    authorName: "Jennifer Wu",
    authorTitle: "Product Director",
    authorImage: "https://i.pravatar.cc/150?img=20",
    authorCompany: "InnovateLabs",
  },
];

/**
 * Default section with 3 testimonials (recommended).
 * Shows typical homepage testimonials section layout.
 */
export const Default: Story = {
  args: {
    heading: "What Others Say",
    testimonials: mockTestimonials.slice(0, 3),
  },
};

/**
 * Section with 2 testimonials (minimum recommended).
 */
export const TwoTestimonials: Story = {
  args: {
    heading: "Client Testimonials",
    testimonials: mockTestimonials.slice(0, 2),
  },
};

/**
 * Section with 4 testimonials (shows responsive wrapping).
 */
export const FourTestimonials: Story = {
  args: {
    heading: "What People Are Saying",
    testimonials: mockTestimonials.slice(0, 4),
  },
};

/**
 * Section with 5+ testimonials (demonstrates horizontal scroll on mobile).
 */
export const ManyTestimonials: Story = {
  args: {
    heading: "Testimonials",
    testimonials: mockTestimonials,
  },
};

/**
 * Section with custom heading.
 */
export const CustomHeading: Story = {
  args: {
    heading: "Kind Words from Colleagues & Clients",
    testimonials: mockTestimonials.slice(0, 3),
  },
};

/**
 * Single testimonial (useful for testing single-column mobile view).
 */
export const SingleTestimonial: Story = {
  args: {
    heading: "Featured Testimonial",
    testimonials: mockTestimonials.slice(0, 1),
  },
};

/**
 * Testimonials without company names.
 */
export const WithoutCompany: Story = {
  args: {
    heading: "What Others Say",
    testimonials: mockTestimonials.slice(0, 3).map((t) => ({
      ...t,
      authorCompany: undefined,
    })),
  },
};
