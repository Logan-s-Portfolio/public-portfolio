/**
 * SkillsShowcase Stories
 *
 * Demonstrates the SkillsShowcase organism with different numbers of skills.
 * Shows hover effects (lift + shadow) and responsive grid layout.
 */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { SkillsShowcase } from "./SkillsShowcase";

const meta = {
  title: "Organisms/SkillsShowcase",
  component: SkillsShowcase,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Grid of skills with icons and descriptions (used on homepage). Each card displays skill icon, name, years experience badge, description, and link. Layout: 3-column grid (desktop) → 2 columns (tablet) → 1 column (mobile). Cards feature hover lift effect and shadow transition.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SkillsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock skills data
const mockSkills = [
  {
    id: "1",
    name: "React & Next.js",
    description:
      "Expert in building performant, SEO-friendly web applications with React and Next.js. Specializing in server components, ISR, and advanced state management.",
    icon: "⚛️",
    years: "5+ years",
    href: "/skills/react",
  },
  {
    id: "2",
    name: "TypeScript",
    description:
      "Proficient in type-safe development with TypeScript. Strong focus on generic types, utility types, and building robust type systems for large codebases.",
    icon: "📘",
    years: "4+ years",
    href: "/skills/typescript",
  },
  {
    id: "3",
    name: "Design Systems",
    description:
      "Experienced in architecting and implementing comprehensive design systems. Expertise in component libraries, design tokens, and developer documentation.",
    icon: "🎨",
    years: "6+ years",
    href: "/skills/design-systems",
  },
  {
    id: "4",
    name: "Node.js & APIs",
    description:
      "Skilled in building scalable RESTful and GraphQL APIs with Node.js. Experience with Express, Fastify, and serverless architectures on AWS Lambda.",
    icon: "🚀",
    years: "5+ years",
    href: "/skills/nodejs",
  },
  {
    id: "5",
    name: "PostgreSQL & Databases",
    description:
      "Proficient in database design, query optimization, and data modeling. Experience with PostgreSQL, MongoDB, and Redis for high-performance applications.",
    icon: "🗄️",
    years: "4+ years",
    href: "/skills/databases",
  },
  {
    id: "6",
    name: "DevOps & CI/CD",
    description:
      "Experienced with Docker, GitHub Actions, and cloud platforms (AWS, Vercel). Focus on automated testing, continuous deployment, and infrastructure as code.",
    icon: "⚙️",
    years: "3+ years",
    href: "/skills/devops",
  },
  {
    id: "7",
    name: "Accessibility (a11y)",
    description:
      "Committed to building inclusive web experiences. Deep knowledge of WCAG 2.1 AA/AAA standards, screen reader testing, and keyboard navigation patterns.",
    icon: "♿",
    years: "5+ years",
    href: "/skills/accessibility",
  },
  {
    id: "8",
    name: "Performance Optimization",
    description:
      "Expert in web performance optimization. Specializing in Core Web Vitals, code splitting, lazy loading, and bundle size reduction strategies.",
    icon: "⚡",
    years: "4+ years",
    href: "/skills/performance",
  },
];

/**
 * Default showcase with 6 skills (recommended).
 * Shows typical homepage skills section with 3x2 grid on desktop.
 */
export const Default: Story = {
  args: {
    heading: "Skills & Expertise",
    skills: mockSkills.slice(0, 6),
  },
};

/**
 * Showcase with 8 skills (3x3 grid on desktop with 2 in last row).
 */
export const EightSkills: Story = {
  args: {
    heading: "Technical Skills",
    skills: mockSkills,
  },
};

/**
 * Showcase with 3 skills (single row on desktop).
 */
export const ThreeSkills: Story = {
  args: {
    heading: "Core Competencies",
    skills: mockSkills.slice(0, 3),
  },
};

/**
 * Showcase with custom heading.
 */
export const CustomHeading: Story = {
  args: {
    heading: "What I Do Best",
    skills: mockSkills.slice(0, 6),
  },
};

/**
 * Frontend-focused skills.
 */
export const FrontendFocus: Story = {
  args: {
    heading: "Frontend Expertise",
    skills: [
      mockSkills[0], // React
      mockSkills[1], // TypeScript
      mockSkills[2], // Design Systems
      mockSkills[6], // Accessibility
      mockSkills[7], // Performance
      {
        id: "9",
        name: "CSS & Tailwind",
        description:
          "Master of modern CSS including Grid, Flexbox, animations, and utility-first frameworks like Tailwind CSS. Focus on responsive design and design system tokens.",
        icon: "🎯",
        years: "7+ years",
        href: "/skills/css",
      },
    ],
  },
};

/**
 * Backend-focused skills.
 */
export const BackendFocus: Story = {
  args: {
    heading: "Backend Expertise",
    skills: [
      mockSkills[3], // Node.js
      mockSkills[4], // Databases
      mockSkills[5], // DevOps
      {
        id: "10",
        name: "API Design",
        description:
          "Skilled in designing scalable RESTful and GraphQL APIs. Strong focus on API versioning, rate limiting, authentication, and comprehensive documentation.",
        icon: "🔌",
        years: "5+ years",
        href: "/skills/api-design",
      },
      {
        id: "11",
        name: "Testing",
        description:
          "Experienced with unit, integration, and E2E testing. Using Jest, React Testing Library, Playwright, and implementing comprehensive test coverage strategies.",
        icon: "🧪",
        years: "4+ years",
        href: "/skills/testing",
      },
      {
        id: "12",
        name: "Microservices",
        description:
          "Proficient in building distributed systems and microservices architectures. Experience with message queues, service mesh, and event-driven patterns.",
        icon: "📦",
        years: "3+ years",
        href: "/skills/microservices",
      },
    ],
  },
};
