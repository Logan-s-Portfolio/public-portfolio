/**
 * HomeLayout Stories
 *
 * Demonstrates the HomeLayout template with different configurations.
 * Shows hero section, featured projects, skills, and testimonials.
 */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { HomeLayout } from "./HomeLayout";

const meta = {
  title: "Templates/HomeLayout",
  component: HomeLayout,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Hero-focused landing page with full-width sections and scroll animations. Features animated background, Hero, ProjectShowcase, SkillsShowcase, and TestimonialsSection. Each section has scroll-triggered animations (fadeIn, slideUp).",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HomeLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock data
const mockHeroData = {
  eyebrow: "Full-Stack Developer & Designer",
  headline: "Building beautiful digital experiences that make an impact",
  subheadline:
    "I help startups and businesses create exceptional web applications with clean code, thoughtful design, and user-centered experiences.",
  primaryCTA: {
    label: "View My Work",
    href: "/case-studies",
  },
  secondaryCTA: {
    label: "Get In Touch",
    href: "/contact",
  },
};

const mockProjects = [
  {
    id: "ecommerce-platform",
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce platform with seamless checkout experience and real-time inventory management. Built for scale with Next.js and Stripe.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "Next.js", "Stripe", "PostgreSQL"],
    category: "Web Development",
    year: "2024",
  },
  {
    id: "saas-dashboard",
    slug: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "Comprehensive analytics dashboard with real-time data visualization and custom reporting. Helped clients increase engagement by 45%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "D3.js", "Node.js"],
    category: "Web Development",
    year: "2024",
  },
  {
    id: "mobile-fitness-app",
    slug: "mobile-fitness-app",
    title: "Mobile Fitness App",
    description:
      "Cross-platform fitness tracking app with personalized workout plans and progress analytics. 50k+ downloads in first 3 months.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    tags: ["React Native", "TypeScript", "Firebase"],
    category: "Mobile Development",
    year: "2023",
  },
];

const mockSkills = [
  {
    id: "react-nextjs",
    name: "React & Next.js",
    description:
      "Building performant, scalable web applications with modern React patterns and Next.js framework.",
    years: "5+ years",
    icon: "⚛️",
    href: "/skills/react-nextjs",
  },
  {
    id: "typescript",
    name: "TypeScript",
    description:
      "Writing type-safe, maintainable code with advanced TypeScript patterns and strict type checking.",
    years: "4+ years",
    icon: "📘",
    href: "/skills/typescript",
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    description:
      "Creating intuitive, accessible user interfaces with design systems and component libraries.",
    years: "6+ years",
    icon: "🎨",
    href: "/skills/ui-ux-design",
  },
  {
    id: "nodejs-apis",
    name: "Node.js & APIs",
    description:
      "Designing and implementing RESTful and GraphQL APIs with Node.js, Express, and PostgreSQL.",
    years: "5+ years",
    icon: "🚀",
    href: "/skills/nodejs-apis",
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    description:
      "Deploying and maintaining applications on AWS, Vercel, and implementing CI/CD pipelines.",
    years: "3+ years",
    icon: "☁️",
    href: "/skills/cloud-devops",
  },
  {
    id: "testing-quality",
    name: "Testing & Quality",
    description:
      "Ensuring code quality with Jest, React Testing Library, and E2E testing with Playwright.",
    years: "4+ years",
    icon: "✅",
    href: "/skills/testing-quality",
  },
];

const mockTestimonials = [
  {
    id: "testimonial-1",
    quote:
      "Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and the code quality exceeded our expectations. Our conversion rate increased by 35% after launch.",
    authorName: "Sarah Chen",
    authorTitle: "CEO",
    authorCompany: "TechStart Inc.",
    authorImage: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "testimonial-2",
    quote:
      "The attention to detail and user experience design was phenomenal. Our customers love the new interface and we've seen a 50% reduction in support tickets since the redesign.",
    authorName: "Michael Rodriguez",
    authorTitle: "Product Manager",
    authorCompany: "FinanceFlow",
    authorImage: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "testimonial-3",
    quote:
      "Best developer I've worked with. Clear communication, proactive problem-solving, and delivered a robust, scalable solution that handles our growing user base with ease.",
    authorName: "Emily Watson",
    authorTitle: "CTO",
    authorCompany: "HealthTech Solutions",
    authorImage: "https://i.pravatar.cc/150?img=3",
  },
];

/**
 * Default home layout.
 * Full landing page with all sections and scroll animations.
 */
export const Default: Story = {
  args: {
    heroData: mockHeroData,
    featuredProjects: mockProjects,
    skills: mockSkills,
    testimonials: mockTestimonials,
    currentPath: "/",
  },
};

/**
 * With fewer projects.
 * Shows layout with 2 featured projects instead of 3.
 */
export const FewerProjects: Story = {
  args: {
    heroData: mockHeroData,
    featuredProjects: mockProjects.slice(0, 2),
    skills: mockSkills,
    testimonials: mockTestimonials,
    currentPath: "/",
  },
};

/**
 * With single project.
 * Minimal projects showcase with just one featured project.
 */
export const SingleProject: Story = {
  args: {
    heroData: mockHeroData,
    featuredProjects: [mockProjects[0]],
    skills: mockSkills,
    testimonials: mockTestimonials,
    currentPath: "/",
  },
};

/**
 * With fewer skills.
 * Shows layout with 4 skills instead of 6.
 */
export const FewerSkills: Story = {
  args: {
    heroData: mockHeroData,
    featuredProjects: mockProjects,
    skills: mockSkills.slice(0, 4),
    testimonials: mockTestimonials,
    currentPath: "/",
  },
};

/**
 * With fewer testimonials.
 * Shows layout with 2 testimonials instead of 3.
 */
export const FewerTestimonials: Story = {
  args: {
    heroData: mockHeroData,
    featuredProjects: mockProjects,
    skills: mockSkills,
    testimonials: mockTestimonials.slice(0, 2),
    currentPath: "/",
  },
};

/**
 * Alternative hero copy.
 * Different hero messaging for different positioning.
 */
export const AlternativeHero: Story = {
  args: {
    heroData: {
      eyebrow: "Product Designer & Front-End Specialist",
      headline: "Crafting pixel-perfect interfaces that users love",
      subheadline:
        "I specialize in design systems, accessibility, and performance optimization to create delightful user experiences at scale.",
      primaryCTA: {
        label: "See Case Studies",
        href: "/case-studies",
      },
      secondaryCTA: {
        label: "Download Resume",
        href: "/resume.pdf",
      },
    },
    featuredProjects: mockProjects,
    skills: mockSkills,
    testimonials: mockTestimonials,
    currentPath: "/",
  },
};

/**
 * Minimal configuration.
 * Bare minimum data to test layout.
 */
export const Minimal: Story = {
  args: {
    heroData: {
      eyebrow: "Developer",
      headline: "Building great software",
      subheadline: "Quality code, thoughtful design.",
      primaryCTA: {
        label: "View Work",
        href: "/case-studies",
      },
    },
    featuredProjects: [mockProjects[0]],
    skills: mockSkills.slice(0, 3),
    testimonials: [mockTestimonials[0]],
    currentPath: "/",
  },
};

/**
 * Without secondary CTA.
 * Hero with only primary call-to-action.
 */
export const SingleCTA: Story = {
  args: {
    heroData: {
      eyebrow: "Full-Stack Developer & Designer",
      headline: "Building beautiful digital experiences that make an impact",
      subheadline:
        "I help startups and businesses create exceptional web applications with clean code, thoughtful design, and user-centered experiences.",
      primaryCTA: {
        label: "View My Work",
        href: "/case-studies",
      },
    },
    featuredProjects: mockProjects,
    skills: mockSkills,
    testimonials: mockTestimonials,
    currentPath: "/",
  },
};
