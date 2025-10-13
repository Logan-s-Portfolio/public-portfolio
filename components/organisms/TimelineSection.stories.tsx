/**
 * TimelineSection Stories
 *
 * Demonstrates the TimelineSection organism with different numbers of milestones.
 * Shows alternating left/right layout on desktop and vertical layout on mobile.
 */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { TimelineSection } from "./TimelineSection";

const meta = {
  title: "Organisms/TimelineSection",
  component: TimelineSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Visual timeline of career milestones (used on About page). Vertical timeline with nodes showing date, title, and description. Layout: Alternating left/right nodes (desktop), all right (mobile). Uses semantic <ol> ordered list for chronological data.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TimelineSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock milestone data
const mockMilestones = [
  {
    id: "1",
    date: "2023 - Present",
    title: "Senior Full-Stack Engineer at TechCorp",
    description:
      "Leading the development of a SaaS platform serving 50,000+ users. Architected and implemented a design system adopted across 5 product teams. Mentoring junior engineers and conducting technical interviews.",
  },
  {
    id: "2",
    date: "2021 - 2023",
    title: "Full-Stack Developer at StartupLabs",
    description:
      "Built and launched 3 production web applications using React, Node.js, and PostgreSQL. Reduced page load times by 60% through performance optimization. Implemented comprehensive testing strategy achieving 90% code coverage.",
  },
  {
    id: "3",
    date: "2020 - 2021",
    title: "Frontend Engineer at DesignStudio",
    description:
      "Specialized in React development and component architecture. Collaborated with designers to implement pixel-perfect, accessible interfaces. Led the migration from JavaScript to TypeScript across the codebase.",
  },
  {
    id: "4",
    date: "2019 - 2020",
    title: "Junior Developer at WebAgency",
    description:
      "Developed responsive websites and web applications for diverse clients. Gained experience in HTML, CSS, JavaScript, and modern frameworks. Participated in code reviews and agile development processes.",
  },
  {
    id: "5",
    date: "2018 - 2019",
    title: "Computer Science Degree - State University",
    description:
      "Completed Bachelor of Science in Computer Science with honors. Focused on web technologies, data structures, algorithms, and software engineering principles. Built multiple full-stack projects including a social media platform.",
  },
  {
    id: "6",
    date: "2017",
    title: "First Website Launch",
    description:
      "Built and deployed my first website using HTML, CSS, and JavaScript. Discovered my passion for web development and user experience design. Started learning React and modern web development practices.",
  },
];

/**
 * Default timeline with 5 milestones (recommended).
 * Shows typical career journey on About page.
 */
export const Default: Story = {
  args: {
    heading: "My Journey",
    milestones: mockMilestones.slice(0, 5),
  },
};

/**
 * Timeline with all 6 milestones (complete career history).
 */
export const CompleteHistory: Story = {
  args: {
    heading: "Career Timeline",
    milestones: mockMilestones,
  },
};

/**
 * Timeline with 4 milestones (shorter journey).
 */
export const FourMilestones: Story = {
  args: {
    heading: "Professional Experience",
    milestones: mockMilestones.slice(0, 4),
  },
};

/**
 * Timeline with 3 milestones (minimum recommended).
 */
export const ThreeMilestones: Story = {
  args: {
    heading: "Key Milestones",
    milestones: mockMilestones.slice(0, 3),
  },
};

/**
 * Timeline with custom heading.
 */
export const CustomHeading: Story = {
  args: {
    heading: "How I Got Here",
    milestones: mockMilestones.slice(0, 5),
  },
};

/**
 * Education-focused timeline.
 */
export const EducationFocus: Story = {
  args: {
    heading: "Education & Certifications",
    milestones: [
      {
        id: "1",
        date: "2024",
        title: "AWS Solutions Architect Certification",
        description:
          "Achieved AWS Certified Solutions Architect - Professional certification. Deep dive into cloud architecture, security, and cost optimization.",
      },
      {
        id: "2",
        date: "2022",
        title: "Advanced React Patterns Course",
        description:
          "Completed comprehensive course on advanced React patterns including compound components, render props, and custom hooks. Applied learnings to production codebases.",
      },
      {
        id: "3",
        date: "2018 - 2019",
        title: "Computer Science Degree - State University",
        description:
          "Completed Bachelor of Science in Computer Science with honors. Focused on web technologies, data structures, algorithms, and software engineering principles.",
      },
      {
        id: "4",
        date: "2017",
        title: "Coding Bootcamp - WebDev Academy",
        description:
          "Intensive 12-week full-stack web development bootcamp. Built 5 full-stack applications and learned industry best practices for modern web development.",
      },
    ],
  },
};

/**
 * Project timeline (non-career milestones).
 */
export const ProjectTimeline: Story = {
  args: {
    heading: "Project Milestones",
    milestones: [
      {
        id: "1",
        date: "Q4 2023",
        title: "E-Commerce Platform Launch",
        description:
          "Successfully launched multi-vendor marketplace with 1,000+ products. Achieved 99.9% uptime in first month and processed $100K in transactions.",
      },
      {
        id: "2",
        date: "Q2 2023",
        title: "Design System v2.0 Release",
        description:
          "Released major version of design system with 50+ new components. Reduced development time by 40% and improved consistency across all products.",
      },
      {
        id: "3",
        date: "Q1 2023",
        title: "Mobile App Beta Launch",
        description:
          "Launched React Native mobile app for iOS and Android. Achieved 4.8/5 star rating with 500+ beta testers providing feedback.",
      },
      {
        id: "4",
        date: "Q4 2022",
        title: "Performance Optimization Initiative",
        description:
          "Led company-wide performance optimization project. Improved Core Web Vitals scores by 60% and reduced bounce rate by 25%.",
      },
    ],
  },
};
