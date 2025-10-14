/**
 * ServiceOfferingsSection Stories
 *
 * Interactive service offerings with 3D flip cards
 */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { ServiceOfferingsSection } from "./ServiceOfferingsSection";

const meta: Meta<typeof ServiceOfferingsSection> = {
  title: "Organisms/ServiceOfferingsSection",
  component: ServiceOfferingsSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Interactive service offerings section with 3D flip cards. Features Bento-style grid layout, mouse-tracking tilt effects, and smooth flip animations. Cards flip on hover (desktop) or click (mobile) to reveal detailed information.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ServiceOfferingsSection>;

// Sample service data
const sampleServices = [
  {
    id: "ideation",
    title: "Ideation & Prototyping",
    tagline: "Transform ideas into testable prototypes",
    description:
      "Rapid prototyping and user testing to validate concepts before full development. I'll help you explore possibilities, identify risks, and build confidence in your direction.",
    icon: "🎨",
    deliverables: [
      "Interactive Figma prototypes",
      "User testing sessions & insights",
      "Design system foundation",
      "Technical feasibility assessment",
    ],
    timeline: "2-4 weeks",
    accent: "terracotta" as const,
  },
  {
    id: "redesign",
    title: "Product Redesign",
    tagline: "Refresh and modernize existing products",
    description:
      "Breathe new life into your product with modern UX patterns, improved accessibility, and systematic design. I'll audit your current state and deliver a clear path forward.",
    icon: "🔄",
    deliverables: [
      "UX/UI audit report",
      "Redesigned screens & flows",
      "Migration roadmap",
      "Component specifications",
    ],
    timeline: "4-8 weeks",
    accent: "sage" as const,
  },
  {
    id: "coaching",
    title: "Team Coaching",
    tagline: "Level up your design & development teams",
    description:
      "Hands-on coaching for teams adopting design systems, improving workflows, or building design culture. Available for 1:1 sessions, team workshops, or ongoing support.",
    icon: "👥",
    deliverables: [
      "Custom workshop sessions",
      "Process documentation",
      "Design system training",
      "Async support & reviews",
    ],
    timeline: "Ongoing",
    accent: "neutral" as const,
  },
  {
    id: "mvp",
    title: "MVP Development",
    tagline: "Ship fast, iterate faster",
    description:
      "Full-stack MVP development with Next.js, TypeScript, and modern tooling. Perfect for validating business ideas or launching internal tools quickly.",
    icon: "🚀",
    deliverables: [
      "Production-ready codebase",
      "Design system setup",
      "Testing & CI/CD pipeline",
      "Documentation & handoff",
    ],
    timeline: "6-12 weeks",
    accent: "terracotta" as const,
  },
  {
    id: "training",
    title: "Tool Training",
    tagline: "Master Figma, design systems, & more",
    description:
      "Structured training on Figma, design systems, Storybook, or frontend development. Available as live workshops, recorded sessions, or custom documentation.",
    icon: "🛠️",
    deliverables: [
      "Live training sessions",
      "Recorded walkthroughs",
      "Custom documentation",
      "Practice exercises",
    ],
    timeline: "1-3 weeks",
    accent: "sage" as const,
  },
];

// Story 1: Default (Bento Layout)
export const Default: Story = {
  args: {
    services: sampleServices,
  },
};

// Story 2: Grid Layout
export const GridLayout: Story = {
  args: {
    services: sampleServices,
    layout: "grid",
    heading: "Services (Grid Layout)",
    subheading: "Standard 3-column grid with equal-sized cards",
  },
};

// Story 3: Masonry Layout
export const MasonryLayout: Story = {
  args: {
    services: sampleServices,
    layout: "masonry",
    heading: "Services (Masonry Layout)",
    subheading: "Pinterest-style layout with varying card heights",
  },
};

// Story 4: Three Services
export const ThreeServices: Story = {
  args: {
    services: sampleServices.slice(0, 3),
    heading: "Core Services",
    subheading: "The essentials for getting started",
  },
};

// Story 5: Custom Content
export const CustomContent: Story = {
  args: {
    heading: "How I Can Help",
    subheading:
      "Whether you're a startup founder, product manager, or engineering lead—I've got you covered",
    services: [
      {
        id: "strategy",
        title: "Product Strategy",
        tagline: "Define the vision, build the roadmap",
        description:
          "Strategic product planning that aligns user needs with business goals. I'll help you prioritize features, identify opportunities, and create actionable roadmaps.",
        icon: "🎯",
        deliverables: [
          "Product vision & strategy",
          "Feature prioritization matrix",
          "Quarterly roadmap",
          "Success metrics framework",
        ],
        timeline: "2-3 weeks",
        accent: "terracotta",
      },
      {
        id: "accessibility",
        title: "Accessibility Audit",
        tagline: "Make your product inclusive for everyone",
        description:
          "Comprehensive WCAG 2.1 AA/AAA compliance audit with actionable remediation plan. Includes screen reader testing, keyboard navigation, and color contrast review.",
        icon: "♿",
        deliverables: [
          "Detailed audit report",
          "Prioritized issue list",
          "Code examples & fixes",
          "Testing procedures",
        ],
        timeline: "1-2 weeks",
        accent: "sage",
      },
      {
        id: "interim",
        title: "Interim Team Member",
        tagline: "Fill gaps, ship features, level up the team",
        description:
          "Embed with your team as a senior IC contributor. I'll ship features, mentor team members, and help establish best practices—all while fitting seamlessly into your existing workflows.",
        icon: "⚡",
        deliverables: [
          "Sprint delivery & feature work",
          "Code reviews & mentorship",
          "Process improvements",
          "Knowledge transfer",
        ],
        timeline: "3-6 months",
        accent: "neutral",
      },
    ],
  },
};

// Story 6: All Terracotta Accent
export const AllTerracotta: Story = {
  args: {
    services: sampleServices.map((s) => ({ ...s, accent: "terracotta" as const })),
    heading: "Terracotta Theme",
    subheading: "All cards using the primary terracotta accent color",
  },
};

// Story 7: All Sage Accent
export const AllSage: Story = {
  args: {
    services: sampleServices.map((s) => ({ ...s, accent: "sage" as const })),
    heading: "Sage Theme",
    subheading: "All cards using the secondary sage accent color",
  },
};

// Story 8: Minimal Content
export const MinimalContent: Story = {
  args: {
    services: [
      {
        id: "consult",
        title: "Consulting",
        tagline: "Expert guidance when you need it",
        description: "Strategic consulting on design systems, UX, and frontend architecture.",
        icon: "💡",
        accent: "terracotta",
      },
      {
        id: "audit",
        title: "Audit",
        tagline: "Identify issues, unlock potential",
        description: "Comprehensive audits of your design system, codebase, or user experience.",
        icon: "🔍",
        accent: "sage",
      },
    ],
    heading: "Quick Services",
    subheading: "Fast, focused help for specific challenges",
  },
};
