/**
 * Building This Portfolio Case Study (/case-studies/building-this-portfolio)
 *
 * Meta case study about the design system creation process.
 * Shows design system architecture, research, and implementation approach.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Text } from "@/components/atoms/Text";
import { Heading } from "@/components/atoms/Heading";
import { Code } from "@/components/atoms/Code";
import { Badge } from "@/components/atoms/Badge";
import { Link } from "@/components/atoms/Link";
import { TimelineSection } from "@/components/organisms/TimelineSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building This Portfolio Case Study",
  description:
    "How I built a complete design system from scratch using research-driven decisions and Atomic Design",
};

export default function BuildingThisPortfolioCaseStudyPage() {
  const breadcrumbs = [
    { label: "Case Studies", href: "/case-studies" },
    {
      label: "Building This Portfolio",
      href: "/case-studies/building-this-portfolio",
    },
  ];

  const timeline = [
    {
      id: "1",
      date: "Week 1",
      title: "Color Research & Brand Foundation",
      description:
        "Researched 15+ color palettes, tested accessibility, landed on Terracotta + Sage. Defined typography (Fraunces + Inter) and 8-point grid system.",
    },
    {
      id: "2",
      date: "Week 2",
      title: "Atomic Design Planning",
      description:
        "Mapped out all 64+ components by Atomic Design level. Created component inventory and dependency graph. Set up Next.js 15 + Tailwind v4 + Storybook.",
    },
    {
      id: "3",
      date: "Week 3",
      title: "Atoms & Molecules",
      description:
        "Built 13 atoms (Button, Link, Text, etc.) and 18 molecules (Card, SkillCard, etc.). Implemented CVA pattern for type-safe variants. Documented all in Storybook.",
    },
    {
      id: "4",
      date: "Week 4",
      title: "Organisms & Templates",
      description:
        "Built 18 organisms (Navbar, Footer, ProjectGrid, etc.) and 5 templates (PageLayout, CaseStudyLayout, etc.). Ensured WCAG 2.2 AA compliance.",
    },
    {
      id: "5",
      date: "Week 5",
      title: "Core Pages",
      description:
        "Built 4 core pages (Home, About, Contact, Resume) and 7 skill pages. Implemented navigation, metadata, and accessibility features.",
    },
    {
      id: "6",
      date: "Week 6",
      title: "Case Studies & Design System Docs",
      description:
        "Built 3 case study pages with detailed sections and timelines. Created 12 design system documentation pages. Final polish and testing.",
    },
    {
      id: "7",
      date: "Week 7",
      title: "Launch & Iteration",
      description:
        "Deployed to production, gathered feedback, iterated on design details. Continued adding components and refining documentation.",
    },
  ];

  return (
    <DocsLayout
      currentPath="/case-studies/building-this-portfolio"
      breadcrumbs={breadcrumbs}
      pageTitle="Building This Portfolio"
    >
      {/* Hero Section */}
      <div className="mb-12">
        <Text variant="lead" className="mb-6">
          A meta case study on building a design system from scratch with
          research-driven decisions
        </Text>
        <div className="mb-6 flex flex-wrap gap-2">
          <Badge variant="terracotta" size="md">
            Design System
          </Badge>
          <Badge variant="terracotta" size="md">
            Atomic Design
          </Badge>
          <Badge variant="terracotta" size="md">
            Next.js 15
          </Badge>
          <Badge variant="terracotta" size="md">
            Tailwind v4
          </Badge>
          <Badge variant="terracotta" size="md">
            Accessibility
          </Badge>
        </div>
        <div className="aspect-video w-full overflow-hidden rounded-xl bg-neutral-100">
          <img
            src="https://placehold.co/1200x600/7C9473/FFFFFF?text=Design+System+Hero"
            alt="Design System Hero"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Overview */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-8">
          Overview
        </Heading>
        <div className="mb-8 grid grid-cols-1 gap-6 rounded-xl bg-neutral-50 p-6 md:grid-cols-2">
          <div>
            <div className="mb-2 font-inter text-sm font-semibold uppercase tracking-wide text-neutral-600">
              Project Type
            </div>
            <div className="font-inter text-base text-neutral-900">
              Personal Portfolio & Design System
            </div>
          </div>
          <div>
            <div className="mb-2 font-inter text-sm font-semibold uppercase tracking-wide text-neutral-600">
              Timeline
            </div>
            <div className="font-inter text-base text-neutral-900">
              6 weeks (2025)
            </div>
          </div>
          <div>
            <div className="mb-2 font-inter text-sm font-semibold uppercase tracking-wide text-neutral-600">
              Role
            </div>
            <div className="font-inter text-base text-neutral-900">
              Solo Developer, Designer & Researcher
            </div>
          </div>
          <div>
            <div className="mb-2 font-inter text-sm font-semibold uppercase tracking-wide text-neutral-600">
              Tech Stack
            </div>
            <div className="font-inter text-base text-neutral-900">
              Next.js 15, Tailwind v4, TypeScript, Storybook, CVA
            </div>
          </div>
        </div>
        <Text variant="body">
          This portfolio itself is the main project. Rather than just building
          pages, I created a complete design system from scratch with 64+
          components, comprehensive documentation, and accessibility built-in.
          The portfolio demonstrates systems thinking and craft through every
          decision.
        </Text>
      </section>

      {/* Challenge */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-8">
          The Challenge
        </Heading>
        <Text variant="body" className="mb-4">
          Most developer portfolios look the same: generic templates, stock
          gradients, and surface-level project descriptions. I wanted to
          differentiate through substance - showing not just what I built, but
          how and why.
        </Text>
        <Text variant="body" className="mb-4">
          <strong>Design Goals:</strong>
        </Text>
        <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            Create a unique visual identity that stands out without being loud
          </li>
          <li>
            Demonstrate systems thinking through design system architecture
          </li>
          <li>Make every design decision evidence-based and documented</li>
          <li>Build 64+ reusable components following Atomic Design</li>
          <li>
            Ensure WCAG 2.2 AA accessibility compliance across all components
          </li>
        </ul>
        <Text variant="body" className="mb-4">
          <strong>Technical Challenges:</strong>
        </Text>
        <ul className="list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>Build with bleeding-edge tech (Next.js 15, Tailwind v4 beta)</li>
          <li>
            Create a scalable component architecture using Atomic Design
          </li>
          <li>
            Document every component with Storybook for discoverability
          </li>
          <li>Balance visual uniqueness with accessibility requirements</li>
        </ul>
      </section>

      {/* Color Research */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-8">
          Design Process: Color System
        </Heading>
        <Text variant="body" className="mb-4">
          I started with extensive color research to find colors that were
          unique, accessible, and meaningful. I explored 15+ palettes before
          landing on Terracotta and Sage.
        </Text>
        <Text variant="body" className="mb-4">
          <strong>Why Terracotta + Sage?</strong>
        </Text>
        <ul className="mb-8 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>Differentiation:</strong> 99% of developer portfolios use
            blue, purple, or neon gradients. Earthy terracotta stands out.
          </li>
          <li>
            <strong>Accessibility:</strong> Terracotta-600 (#B85032) has
            4.52:1 contrast on white (WCAG AA ✅), Sage-700 has 4.51:1.
          </li>
          <li>
            <strong>Warmth + Calm:</strong> Terracotta conveys warmth and
            approachability, Sage provides balance and professionalism.
          </li>
          <li>
            <strong>Versatility:</strong> Both colors work well for interactive
            elements, backgrounds, and text.
          </li>
        </ul>
        <figure className="my-8">
          <div className="overflow-hidden rounded-xl bg-neutral-100">
            <img
              src="https://placehold.co/800x400/B85032/FFFFFF?text=Color+Palette+Research"
              alt="Color palette showing Terracotta and Sage scales with WCAG contrast ratios"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 text-center font-inter text-sm text-neutral-600">
            Final color palette with all contrast ratios documented
          </figcaption>
        </figure>
      </section>

      {/* Typography */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-8">
          Typography & Foundation
        </Heading>
        <Text variant="body" className="mb-4">
          I chose a dual-typeface system that balances elegance with
          readability:
        </Text>
        <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>Fraunces (Headings):</strong> A serif typeface with optical
            sizing for elegant, distinctive headings
          </li>
          <li>
            <strong>Inter (Body):</strong> Clean, readable sans-serif optimized
            for screen reading
          </li>
        </ul>
        <Text variant="body" className="mb-4">
          <strong>8-Point Grid System:</strong>
        </Text>
        <Text variant="body" className="mb-4">
          All spacing follows an 8-point grid (8px, 16px, 24px, 32px, etc.) for
          visual consistency and predictable layout rhythms.
        </Text>
        <Code variant="block" className="mb-4">
          {`// Typography scale with Fraunces optical sizing
const typography = {
  headings: {
    font: 'Fraunces',
    sizes: {
      hero: '72px',    // opsz: 144
      title: '48px',   // opsz: 96
      section: '32px', // opsz: 72
    }
  },
  body: {
    font: 'Inter',
    sizes: {
      large: '18px',
      base: '16px',
      small: '14px',
    }
  }
};`}
        </Code>
      </section>

      {/* Atomic Design */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-8">
          Atomic Design Architecture
        </Heading>
        <Text variant="body" className="mb-4">
          I organized all 64+ components using Atomic Design principles:
        </Text>
        <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>Atoms (13):</strong> Button, Link, Text, Heading, Badge,
            Input, Checkbox, etc.
          </li>
          <li>
            <strong>Molecules (18):</strong> Card, SkillCard, TestimonialCard,
            ProjectCard, FormField, etc.
          </li>
          <li>
            <strong>Organisms (18):</strong> Navbar, Footer, ProjectGrid,
            SkillsGrid, CaseStudyHero, etc.
          </li>
          <li>
            <strong>Templates (5):</strong> PageLayout, ContentLayout,
            CaseStudyLayout, SkillLayout, DesignSystemLayout
          </li>
          <li>
            <strong>Pages (15):</strong> Home, About, Case Studies, Skills,
            Design System docs
          </li>
        </ul>
        <Text variant="body" className="mb-4">
          This architecture ensures components are:
        </Text>
        <ul className="mb-8 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>Reusable:</strong> Built once, used everywhere
          </li>
          <li>
            <strong>Composable:</strong> Smaller components combine into larger
            ones
          </li>
          <li>
            <strong>Maintainable:</strong> Clear hierarchy makes updates
            predictable
          </li>
          <li>
            <strong>Discoverable:</strong> Documented in Storybook with all
            variants
          </li>
        </ul>
        <figure className="my-8">
          <div className="overflow-hidden rounded-xl bg-neutral-100">
            <img
              src="https://placehold.co/800x500/7C9473/FFFFFF?text=Atomic+Design+Hierarchy"
              alt="Diagram showing Atomic Design component hierarchy from atoms to pages"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 text-center font-inter text-sm text-neutral-600">
            Component architecture: 64+ components organized by Atomic Design
          </figcaption>
        </figure>
      </section>

      {/* Technical Implementation */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-8">
          Technical Implementation
        </Heading>

        <Heading as="h3" variant="section" className="mb-4">
          Tailwind v4 + CVA Pattern
        </Heading>
        <Text variant="body" className="mb-4">
          I used Tailwind v4 (beta) with class-variance-authority (CVA) for
          type-safe, variant-driven components:
        </Text>
        <Code variant="block" className="mb-8">
          {`// CVA pattern for type-safe variants
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-terracotta-600 text-white hover:bg-terracotta-700",
        secondary: "bg-sage-600 text-white hover:bg-sage-700",
        outline: "border-2 border-terracotta-600 text-terracotta-600",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);`}
        </Code>

        <Heading as="h3" variant="section" className="mb-4 mt-8">
          Next.js 15 App Router
        </Heading>
        <Text variant="body" className="mb-4">
          I built with Next.js 15's App Router for:
        </Text>
        <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>Server Components by default (better performance)</li>
          <li>File-based routing with nested layouts</li>
          <li>Metadata API for SEO optimization</li>
          <li>TypeScript strict mode for type safety</li>
        </ul>

        <Heading as="h3" variant="section" className="mb-4 mt-8">
          Storybook Documentation
        </Heading>
        <Text variant="body" className="mb-4">
          Every component is documented in Storybook with:
        </Text>
        <ul className="list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>All variants and states demonstrated</li>
          <li>Props documented with TypeScript types</li>
          <li>Accessibility notes and WCAG compliance</li>
          <li>Usage examples and best practices</li>
        </ul>
      </section>

      {/* Results */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-8">
          Results
        </Heading>
        <Text variant="body" className="mb-4">
          <strong>Design System Deliverables:</strong>
        </Text>
        <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>64+ Components:</strong> 13 atoms, 18 molecules, 18
            organisms, 5 templates, 15 pages
          </li>
          <li>
            <strong>Full Documentation:</strong> Every component documented in
            Storybook with variants
          </li>
          <li>
            <strong>WCAG 2.2 AA Compliant:</strong> All color contrasts meet
            accessibility standards
          </li>
          <li>
            <strong>Type-Safe:</strong> TypeScript strict mode with
            comprehensive interfaces
          </li>
          <li>
            <strong>Maintainable:</strong> Clear Atomic Design hierarchy for
            predictable updates
          </li>
        </ul>

        <Text variant="body" className="mb-4">
          <strong>Technical Achievements:</strong>
        </Text>
        <ul className="list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>Built with bleeding-edge tech (Next.js 15, Tailwind v4)</li>
          <li>Implemented CVA pattern for type-safe component variants</li>
          <li>100% TypeScript coverage with strict mode enabled</li>
          <li>
            Research-driven design decisions (color, typography, spacing)
          </li>
          <li>Complete design system documentation in Storybook</li>
        </ul>
      </section>

      {/* Learnings */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-8">
          Key Learnings
        </Heading>
        <Text variant="body" className="mb-4">
          <strong>What Worked Well:</strong>
        </Text>
        <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>Research-Driven Design:</strong> Spending time on color
            research (15+ palettes) led to a truly differentiated visual
            identity
          </li>
          <li>
            <strong>Atomic Design Structure:</strong> Clear component hierarchy
            made building pages incredibly fast and predictable
          </li>
          <li>
            <strong>CVA Pattern:</strong> Type-safe variants caught bugs early
            and improved developer experience
          </li>
          <li>
            <strong>Accessibility First:</strong> Building WCAG compliance from
            the start prevented costly retrofitting
          </li>
          <li>
            <strong>Documentation as I Go:</strong> Writing Storybook stories
            alongside components kept docs fresh and accurate
          </li>
        </ul>

        <Text variant="body" className="mb-4">
          <strong>Challenges Overcome:</strong>
        </Text>
        <ul className="list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>Tailwind v4 Beta:</strong> Bleeding-edge tech meant limited
            docs - had to read source code and experiment
          </li>
          <li>
            <strong>Color Accessibility:</strong> Finding colors that were both
            unique and WCAG AA compliant required 15+ iterations
          </li>
          <li>
            <strong>Component Scope Creep:</strong> Initially built too many
            variants - learned to start simple and add as needed
          </li>
          <li>
            <strong>Balancing Beauty + Function:</strong> Every design flourish
            had to justify itself through user value or accessibility
          </li>
        </ul>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-8">
          Project Timeline
        </Heading>
        <TimelineSection milestones={timeline} />
      </section>

      {/* Navigation */}
      <nav
        className="mt-16 flex items-center justify-between border-t border-neutral-200 pt-8"
        aria-label="Case study navigation"
      >
        <Link
          href="/case-studies/austin-power-alert"
          className="group flex items-center gap-2 font-inter text-base font-medium text-terracotta-600 transition-colors hover:text-terracotta-700"
        >
          <svg
            className="h-5 w-5 transition-transform group-hover:-translate-x-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>Austin Power Alert</span>
        </Link>
        <div />
      </nav>
    </DocsLayout>
  );
}
