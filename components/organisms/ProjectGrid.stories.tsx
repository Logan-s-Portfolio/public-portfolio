/**
 * ProjectGrid Stories
 *
 * Demonstrates the ProjectGrid organism with various project counts and configurations.
 * Shows responsive grid layout (3→2→1 columns) and load more functionality.
 */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { ProjectGrid } from "./ProjectGrid";

const meta = {
  title: "Organisms/ProjectGrid",
  component: ProjectGrid,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Responsive grid of project cards for case studies hub page. Grid adapts from 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile) with 32px gaps.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock project data
const mockProjects = [
  {
    id: "1",
    title: "E-Commerce Platform Redesign",
    description:
      "Complete redesign of a multi-vendor marketplace with focus on mobile conversion and accessibility.",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
    href: "/case-studies/ecommerce-platform",
    featured: true,
  },
  {
    id: "2",
    title: "Healthcare Dashboard",
    description:
      "Data visualization dashboard for patient monitoring with real-time updates and advanced filtering.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Next.js", "D3.js", "PostgreSQL"],
    href: "/case-studies/healthcare-dashboard",
  },
  {
    id: "3",
    title: "Design System Implementation",
    description:
      "Built a comprehensive design system with 50+ components, documentation, and automated testing.",
    imageSrc: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop",
    tags: ["React", "Storybook", "TypeScript", "Figma"],
    href: "/case-studies/design-system",
    featured: true,
  },
  {
    id: "4",
    title: "Mobile Banking App",
    description:
      "Cross-platform mobile banking app with biometric authentication and offline support.",
    imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    tags: ["React Native", "Node.js", "MongoDB"],
    href: "/case-studies/mobile-banking",
  },
  {
    id: "5",
    title: "SaaS Analytics Platform",
    description:
      "Real-time analytics platform processing 10M+ events daily with customizable dashboards.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Vue.js", "GraphQL", "Redis", "AWS"],
    href: "/case-studies/analytics-platform",
  },
  {
    id: "6",
    title: "AI Content Generator",
    description:
      "Content generation platform using GPT-4 with custom fine-tuning and brand voice controls.",
    imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    href: "/case-studies/ai-content",
  },
];

/**
 * Default grid with 6 projects showing typical case studies hub layout.
 */
export const Default: Story = {
  args: {
    projects: mockProjects,
    showLoadMore: false,
  },
};

/**
 * Grid with 3 featured projects (minimum recommended).
 */
export const ThreeProjects: Story = {
  args: {
    projects: mockProjects.slice(0, 3),
    showLoadMore: false,
  },
};

/**
 * Grid with 9 projects (3x3 grid on desktop).
 */
export const NineProjects: Story = {
  args: {
    projects: [...mockProjects, ...mockProjects.slice(0, 3)],
    showLoadMore: false,
  },
};

/**
 * Grid with Load More button for pagination.
 */
export const WithLoadMore: Story = {
  args: {
    projects: mockProjects,
    showLoadMore: true,
    onLoadMore: () => alert("Load more projects clicked!"),
    loadMoreLabel: "Load More Projects",
  },
};

/**
 * Grid with custom Load More label.
 */
export const CustomLoadMoreLabel: Story = {
  args: {
    projects: mockProjects.slice(0, 3),
    showLoadMore: true,
    onLoadMore: () => alert("View all clicked!"),
    loadMoreLabel: "View All Case Studies →",
  },
};

/**
 * Empty state (no projects).
 */
export const Empty: Story = {
  args: {
    projects: [],
    showLoadMore: false,
  },
};

/**
 * Single project (useful for testing single-column mobile view).
 */
export const SingleProject: Story = {
  args: {
    projects: mockProjects.slice(0, 1),
    showLoadMore: false,
  },
};
