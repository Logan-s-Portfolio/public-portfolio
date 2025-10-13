/**
 * CaseStudyHero Stories
 *
 * Demonstrates the CaseStudyHero organism with different images and overlay effects.
 * Shows full-width hero for case study pages with breadcrumbs, title, tagline, and tags.
 */

import type { Meta, StoryObj } from "@storybook/react";
import { CaseStudyHero } from "./CaseStudyHero";

const meta = {
  title: "Organisms/CaseStudyHero",
  component: CaseStudyHero,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Full-width hero for case study pages with image background and title overlay. Height: 60vh (min 400px, max 600px). Background: Full-width image with terracotta gradient overlay. Content: Centered project title, tagline, tags, and breadcrumbs.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CaseStudyHero>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default hero for E-Commerce Platform case study.
 * Shows terracotta overlay with white text for WCAG AA contrast.
 */
export const Default: Story = {
  args: {
    title: "E-Commerce Platform Redesign",
    tagline:
      "Increasing mobile conversion by 45% through user-centered design and accessibility improvements",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
    tags: ["React", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "E-Commerce Platform", href: "/case-studies/ecommerce-platform" },
    ],
  },
};

/**
 * Hero for Healthcare Dashboard case study.
 * Different image with same overlay treatment.
 */
export const HealthcareDashboard: Story = {
  args: {
    title: "Healthcare Dashboard",
    tagline:
      "Real-time patient monitoring processing 50,000+ data points per second",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop",
    tags: ["Next.js", "D3.js", "Node.js", "PostgreSQL", "Redis"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Healthcare Dashboard", href: "/case-studies/healthcare-dashboard" },
    ],
  },
};

/**
 * Hero for Design System case study.
 * Shows hero with design-focused background image.
 */
export const DesignSystem: Story = {
  args: {
    title: "Design System Implementation",
    tagline:
      "Building a comprehensive design system with 50+ components and complete documentation",
    imageSrc: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1920&h=1080&fit=crop",
    tags: ["React", "Storybook", "TypeScript", "Figma", "Chromatic"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Design System", href: "/case-studies/design-system" },
    ],
  },
};

/**
 * Hero with minimal tags (2 tags).
 */
export const MinimalTags: Story = {
  args: {
    title: "Mobile Banking App",
    tagline:
      "Cross-platform mobile banking with biometric authentication and offline support",
    imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&h=1080&fit=crop",
    tags: ["React Native", "Node.js"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Mobile Banking", href: "/case-studies/mobile-banking" },
    ],
  },
};

/**
 * Hero with many tags (6+ tags for testing overflow).
 */
export const ManyTags: Story = {
  args: {
    title: "SaaS Analytics Platform",
    tagline:
      "Enterprise analytics platform processing 10M+ events daily with customizable dashboards",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop",
    tags: [
      "Vue.js",
      "GraphQL",
      "Redis",
      "AWS",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "TypeScript",
    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Analytics Platform", href: "/case-studies/analytics-platform" },
    ],
  },
};

/**
 * Hero with short breadcrumbs (2 levels).
 */
export const ShortBreadcrumbs: Story = {
  args: {
    title: "AI Content Generator",
    tagline:
      "Content generation platform using GPT-4 with custom fine-tuning",
    imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    breadcrumbs: [
      { label: "Work", href: "/work" },
      { label: "AI Content", href: "/case-studies/ai-content" },
    ],
  },
};

/**
 * Hero with long title (testing text wrap).
 */
export const LongTitle: Story = {
  args: {
    title:
      "Enterprise Resource Planning System Modernization and Migration to Cloud Infrastructure",
    tagline:
      "Migrating legacy ERP system to modern cloud architecture with zero downtime",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
    tags: ["AWS", "Kubernetes", "Microservices", "GraphQL"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "ERP Modernization", href: "/case-studies/erp-modernization" },
    ],
  },
};
