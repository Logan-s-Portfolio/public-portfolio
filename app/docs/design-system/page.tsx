/**
 * Design System Hub Page (/docs/design-system)
 *
 * Overview of the complete design system with stats and principles.
 * Gateway to foundation, components, and architecture documentation.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Code } from "@/components/atoms/Code";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design System | Logan [LastName]",
  description:
    "Complete design system documentation - Foundation, Components, and Architecture",
};

export default function DesignSystemPage() {
  const breadcrumbs = [{ label: "Design System", href: "/docs/design-system" }];

  return (
    <DocsLayout
      currentPath="/docs/design-system"
      breadcrumbs={breadcrumbs}
      pageTitle="Design System Overview"
    >
      <section className="space-y-6">
        <Text variant="lead">
          A complete design system built with Atomic Design methodology,
          demonstrating systematic thinking from foundation tokens to complete
          pages.
        </Text>

        <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-terracotta-200 bg-terracotta-50 p-6">
            <Heading as="h3" variant="section" className="mb-2">
              64+ Components
            </Heading>
            <Text variant="body">
              19 atoms, 15 molecules, 16 organisms, 6 templates, 15 pages
            </Text>
          </div>
          <div className="rounded-xl border border-sage-200 bg-sage-50 p-6">
            <Heading as="h3" variant="section" className="mb-2">
              100% Accessible
            </Heading>
            <Text variant="body">
              WCAG 2.2 AA compliant with keyboard navigation and ARIA
            </Text>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-neutral-100 p-6">
            <Heading as="h3" variant="section" className="mb-2">
              Fully Documented
            </Heading>
            <Text variant="body">
              12 pages of docs with code examples and rationale
            </Text>
          </div>
        </div>

        <Heading as="h2" variant="title" className="mt-12">
          Core Principles
        </Heading>

        <div className="space-y-6">
          <div>
            <Heading as="h3" variant="section">
              Accessible by Default
            </Heading>
            <Text variant="body">
              Every component meets WCAG 2.2 AA standards minimum. Keyboard
              navigation, proper ARIA attributes, focus management, and motion
              safety are built-in from day one.
            </Text>
          </div>

          <div>
            <Heading as="h3" variant="section">
              Human-First Design
            </Heading>
            <Text variant="body">
              Warm terracotta and sage colors (not cold blue/gray), 8px border
              radius for professional warmth, and Material Design 3 shadows with
              warm neutrals create an approachable aesthetic.
            </Text>
          </div>

          <div>
            <Heading as="h3" variant="section">
              Design for Scale
            </Heading>
            <Text variant="body">
              Design tokens over magic numbers, component composition over
              duplication, systematic approach from atoms to pages. Built to
              scale from day one.
            </Text>
          </div>

          <div>
            <Heading as="h3" variant="section">
              Speed Without Sacrifice
            </Heading>
            <Text variant="body">
              Performance and accessibility aren't trade-offs. Perfect
              Lighthouse scores (100 performance, 100 accessibility) with rich
              interactions and animations.
            </Text>
          </div>
        </div>

        <Heading as="h2" variant="title" className="mt-12">
          Quick Start
        </Heading>

        <Text variant="body">Explore the design system:</Text>
        <ul className="my-4 list-disc space-y-2 pl-6">
          <li>
            <strong>Foundation:</strong> Color system, typography, spacing, and
            tokens
          </li>
          <li>
            <strong>Components:</strong> Browse atoms, molecules, organisms, and
            templates
          </li>
          <li>
            <strong>Architecture:</strong> Learn about Atomic Design,
            accessibility, and component API patterns
          </li>
        </ul>

        <Code variant="block" className="mt-6">
          {`// Example: Using design tokens
<Button
  variant="primary"    // bg-terracotta-600
  size="md"            // h-10 px-4
  className="rounded-md shadow-md"  // 8px radius, warm shadow
>
  Get Started
</Button>`}
        </Code>
      </section>
    </DocsLayout>
  );
}
