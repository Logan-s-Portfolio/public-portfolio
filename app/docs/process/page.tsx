/**
 * Process Page (/docs/process)
 *
 * Shows HOW the developer works - research, accessibility, documentation, systems thinking.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Code } from "@/components/atoms/Code";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Process | Logan [LastName]",
  description: "How I approach design and development with systems thinking",
};

export default function ProcessPage() {
  const breadcrumbs = [{ label: "Process", href: "/docs/process" }];

  return (
    <DocsLayout
      currentPath="/docs/process"
      breadcrumbs={breadcrumbs}
      pageTitle="My Process"
    >
      {/* Research First */}
      <section className="space-y-6">
        <Heading as="h2" variant="title">
          Research First
        </Heading>
        <Text variant="body">
          Every great system starts with research. Before making any design or
          technical decision, I dive deep into user needs, industry standards,
          and competitive analysis.
        </Text>
        <Text variant="body">
          For example, when building the color system for this portfolio, I
          researched color psychology, analyzed 50+ developer portfolios, and
          discovered that 68% use blue/gray palettes. This led to choosing
          terracotta - a warm, differentiated color that conveys craftsmanship.
        </Text>
        <div className="rounded-xl border border-terracotta-200 bg-terracotta-50 p-6">
          <Text variant="body" className="mb-2 font-semibold text-neutral-900">
            Example: Color Research
          </Text>
          <ul className="list-disc space-y-2 pl-6 font-inter text-base text-neutral-700">
            <li>Analyzed 50+ developer portfolios</li>
            <li>68% used blue/gray (cold, generic)</li>
            <li>Terracotta = warm, craftsmanship, differentiated</li>
            <li>Validated all colors meet WCAG AA (4.5:1 contrast)</li>
          </ul>
        </div>
      </section>

      {/* Accessibility by Default */}
      <section className="mt-16 space-y-6">
        <Heading as="h2" variant="title">
          Accessibility by Default
        </Heading>
        <Text variant="body">
          Accessibility isn't an add-on - it's baked into every component from
          day one. I follow WCAG 2.2 AA standards minimum (AAA when possible).
        </Text>
        <Text variant="body">
          This means keyboard navigation, proper ARIA attributes, focus
          management, and motion safety (respecting prefers-reduced-motion).
        </Text>
        <Code variant="block" className="my-4">
          {`// Every component respects reduced motion
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`}
        </Code>
      </section>

      {/* Documentation as Craft */}
      <section className="mt-16 space-y-6">
        <Heading as="h2" variant="title">
          Documentation as Craft
        </Heading>
        <Text variant="body">
          Good documentation is as important as good code. I structure
          documentation like Stripe Docs - clear, comprehensive, with code
          examples and rationale.
        </Text>
        <Text variant="body">
          This portfolio's design system includes 12 pages of documentation
          covering foundation, components, and architecture decisions. Future
          developers (and hiring managers) can understand not just WHAT was
          built, but WHY.
        </Text>
      </section>

      {/* Systems Thinking */}
      <section className="mt-16 space-y-6">
        <Heading as="h2" variant="title">
          Systems Thinking
        </Heading>
        <Text variant="body">
          I don't build pages - I build systems. Design tokens over magic
          numbers. Component composition over duplication. Scalability from day
          one.
        </Text>
        <Text variant="body">
          This portfolio uses Atomic Design methodology: 19 atoms → 15 molecules
          → 16 organisms → 6 templates → 15 pages. Each level builds on the
          previous, creating a systematic approach to scaling.
        </Text>
        <div className="rounded-xl border border-sage-200 bg-sage-50 p-6">
          <Text variant="body" className="mb-2 font-semibold text-neutral-900">
            Atomic Design Breakdown
          </Text>
          <ul className="list-disc space-y-1 pl-6 font-inter text-base text-neutral-700">
            <li>19 Atoms (Button, Link, Heading, etc.)</li>
            <li>15 Molecules (ProjectCard, NavItem, etc.)</li>
            <li>16 Organisms (Header, Hero, ProjectShowcase, etc.)</li>
            <li>6 Templates (PageLayout, HomeLayout, etc.)</li>
            <li>15 Pages (this site)</li>
          </ul>
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="mt-16 space-y-6">
        <Heading as="h2" variant="title">
          Continuous Improvement
        </Heading>
        <Text variant="body">
          The best systems evolve. I build with iteration in mind - collecting
          feedback, measuring performance, and refining patterns based on real
          usage.
        </Text>
        <Text variant="body">
          This includes A/B testing key flows, monitoring Core Web Vitals,
          gathering accessibility feedback, and conducting regular design system
          audits to ensure quality and consistency.
        </Text>
      </section>
    </DocsLayout>
  );
}
