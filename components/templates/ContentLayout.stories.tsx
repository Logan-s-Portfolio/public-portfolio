/**
 * ContentLayout Stories
 *
 * Demonstrates the ContentLayout template with different configurations.
 * Shows hero section, main content, and optional sidebar.
 */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { ContentLayout } from "./ContentLayout";

const meta = {
  title: "Templates/ContentLayout",
  component: ContentLayout,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Standard content pages (About, Process, Contact) with optional sidebar. Features hero section with gradient background and 2-column layout (desktop) → stacked (mobile). Main content max-width 768px (prose), sidebar 320px sticky.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContentLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock content
const mockContent = (
  <>
    <h2>About This Page</h2>
    <p>
      This is a demo of the ContentLayout template. It's designed for standard
      content pages like About, Process, and Contact pages. The layout includes
      a hero section with a gradient background and a main content area with
      optional sidebar.
    </p>

    <h3>Key Features</h3>
    <ul>
      <li>Responsive 2-column layout (content + sidebar)</li>
      <li>Prose-optimized typography for readability</li>
      <li>Sticky sidebar on desktop</li>
      <li>Gradient hero section</li>
      <li>Design system colors and spacing</li>
    </ul>

    <h3>Typography</h3>
    <p>
      The main content area uses prose styling, which provides optimal
      typography for long-form content. Headings use Fraunces font, and body
      text uses Inter font for readability.
    </p>

    <p>
      Links are styled with terracotta color and underline on hover, matching
      our design system. All spacing follows the 8-point grid system.
    </p>
  </>
);

const mockSidebar = (
  <div className="space-y-6">
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-3 font-fraunces text-lg font-semibold text-neutral-900">
        Quick Links
      </h3>
      <ul className="space-y-2 font-inter text-sm">
        <li>
          <a
            href="#"
            className="text-terracotta-600 transition-colors hover:text-terracotta-700"
          >
            Download Resume
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-terracotta-600 transition-colors hover:text-terracotta-700"
          >
            View LinkedIn
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-terracotta-600 transition-colors hover:text-terracotta-700"
          >
            GitHub Profile
          </a>
        </li>
      </ul>
    </div>

    <div className="rounded-lg bg-neutral-50 p-6">
      <h3 className="mb-3 font-fraunces text-lg font-semibold text-neutral-900">
        Contact Info
      </h3>
      <p className="font-inter text-sm text-neutral-600">
        Email: hello@example.com
      </p>
      <p className="font-inter text-sm text-neutral-600">
        Location: Austin, TX
      </p>
    </div>
  </div>
);

/**
 * Default with title and subtitle.
 * Standard content page with hero and main content.
 */
export const Default: Story = {
  args: {
    title: "About Me",
    subtitle:
      "Full-stack developer passionate about creating beautiful, accessible web experiences",
    currentPath: "/about",
    children: mockContent,
  },
};

/**
 * With sidebar.
 * Content page with sticky sidebar on desktop.
 */
export const WithSidebar: Story = {
  args: {
    title: "About Me",
    subtitle:
      "Full-stack developer passionate about creating beautiful, accessible web experiences",
    currentPath: "/about",
    children: mockContent,
    sidebar: mockSidebar,
  },
};

/**
 * Without subtitle.
 * Minimal hero with just title.
 */
export const WithoutSubtitle: Story = {
  args: {
    title: "Contact",
    currentPath: "/contact",
    children: (
      <>
        <h2>Get In Touch</h2>
        <p>
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>

        <h3>How to Reach Me</h3>
        <p>
          You can contact me via email at hello@example.com or connect with me
          on LinkedIn, GitHub, and Twitter.
        </p>
      </>
    ),
  },
};

/**
 * Long content.
 * Tests scrolling behavior and sidebar stickiness.
 */
export const LongContent: Story = {
  args: {
    title: "Process",
    subtitle: "How I approach projects from discovery to delivery",
    currentPath: "/process",
    children: (
      <>
        <h2>Discovery Phase</h2>
        <p>
          Every project starts with understanding the problem we're trying to
          solve. I work closely with stakeholders to define requirements,
          identify constraints, and establish success criteria.
        </p>
        <p>
          This phase typically includes user research, competitive analysis, and
          technical feasibility assessments. The goal is to ensure we're
          building the right thing before we start building anything.
        </p>

        <h2>Design Phase</h2>
        <p>
          With a clear understanding of the problem, I move into designing
          solutions. This includes wireframing, prototyping, and iterating based
          on feedback.
        </p>
        <p>
          Design isn't just about aesthetics - it's about creating intuitive,
          accessible experiences that solve real user problems. I focus on
          design systems to ensure consistency and scalability.
        </p>

        <h2>Development Phase</h2>
        <p>
          Development is where designs come to life. I write clean, maintainable
          code following best practices and modern patterns.
        </p>
        <p>
          This phase includes setting up development environments, implementing
          features, writing tests, and ensuring code quality through reviews and
          automated checks.
        </p>

        <h2>Testing Phase</h2>
        <p>
          Quality assurance is critical. I conduct thorough testing including
          unit tests, integration tests, and end-to-end tests to catch issues
          before they reach users.
        </p>
        <p>
          Testing also includes accessibility audits, performance optimization,
          and cross-browser compatibility checks.
        </p>

        <h2>Deployment Phase</h2>
        <p>
          Deployment is carefully planned and executed. I set up CI/CD pipelines
          for automated deployments, configure monitoring and logging, and
          ensure smooth rollouts.
        </p>
        <p>
          Post-deployment, I monitor performance, gather user feedback, and make
          iterative improvements based on real-world usage.
        </p>

        <h2>Maintenance Phase</h2>
        <p>
          Software is never truly "done". Ongoing maintenance includes bug
          fixes, security updates, performance optimization, and feature
          enhancements based on user needs.
        </p>
        <p>
          I believe in continuous improvement and regular communication with
          stakeholders to ensure the product continues to meet evolving
          requirements.
        </p>
      </>
    ),
    sidebar: mockSidebar,
  },
};

/**
 * Short content.
 * Minimal content to test layout.
 */
export const ShortContent: Story = {
  args: {
    title: "Privacy Policy",
    currentPath: "/privacy",
    children: (
      <>
        <p>
          This is a short content page to demonstrate how the layout handles
          minimal content.
        </p>
        <p>
          Even with minimal content, the layout maintains proper spacing and
          typography.
        </p>
      </>
    ),
  },
};

/**
 * Contact page example.
 * Real-world example of contact page layout.
 */
export const ContactPage: Story = {
  args: {
    title: "Let's Work Together",
    subtitle: "I'm currently available for freelance projects and consulting",
    currentPath: "/contact",
    children: (
      <>
        <h2>Get In Touch</h2>
        <p>
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach
          out!
        </p>

        <h3>What I'm Looking For</h3>
        <ul>
          <li>Web application development projects</li>
          <li>Design system implementation and consulting</li>
          <li>Technical writing and documentation</li>
          <li>Speaking opportunities at conferences and meetups</li>
        </ul>

        <h3>Response Time</h3>
        <p>
          I typically respond to emails within 24-48 hours during business days.
          For urgent inquiries, please mention "urgent" in the subject line.
        </p>
      </>
    ),
    sidebar: (
      <div className="space-y-6">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 font-fraunces text-lg font-semibold text-neutral-900">
            Contact Details
          </h3>
          <div className="space-y-3 font-inter text-sm text-neutral-600">
            <p>
              <strong>Email:</strong> hello@example.com
            </p>
            <p>
              <strong>Location:</strong> Austin, TX
            </p>
            <p>
              <strong>Timezone:</strong> CST (UTC-6)
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-terracotta-50 p-6">
          <h3 className="mb-3 font-fraunces text-lg font-semibold text-neutral-900">
            Availability
          </h3>
          <p className="font-inter text-sm text-neutral-600">
            Currently booking projects for Q2 2025. Early inquiries welcome!
          </p>
        </div>
      </div>
    ),
  },
};
