/**
 * About Page (/about)
 *
 * About page with professional bio, experience, and approach.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Logan [LastName]",
  description: "Systems-thinking product engineer specializing in design systems and no-code development",
};

export default function AboutPage() {
  const breadcrumbs = [{ label: "About", href: "/about" }];

  return (
    <DocsLayout
      currentPath="/about"
      breadcrumbs={breadcrumbs}
      pageTitle="About Me"
    >
      <section className="space-y-6">
        <Text variant="lead">
          I'm a systems-thinking product engineer who builds design systems,
          no-code solutions, and accessible interfaces. I care deeply about
          craft, documentation, and making complex systems understandable.
        </Text>

        <Heading as="h2" variant="title" className="mt-12">
          What I Do
        </Heading>

        <div className="space-y-4">
          <div>
            <Heading as="h3" variant="section">
              Design Systems Architecture
            </Heading>
            <Text variant="body">
              I build scalable design systems from the ground up using Atomic
              Design methodology. This portfolio itself is a complete design
              system with 64+ components, demonstrating systematic thinking from
              foundation tokens to complete pages.
            </Text>
          </div>

          <div>
            <Heading as="h3" variant="section">
              No-Code Development
            </Heading>
            <Text variant="body">
              I specialize in Flutterflow, Supabase, and Stripe integrations to
              ship production-ready mobile apps 10x faster than traditional
              development. See my Austin Power Alert case study for a real-world
              example.
            </Text>
          </div>

          <div>
            <Heading as="h3" variant="section">
              Accessibility-First Development
            </Heading>
            <Text variant="body">
              Every component I build meets WCAG 2.2 AA standards minimum, with
              keyboard navigation, proper ARIA attributes, and focus management
              built-in from day one. Accessibility isn't an afterthought - it's
              the foundation.
            </Text>
          </div>
        </div>

        <Heading as="h2" variant="title" className="mt-12">
          My Approach
        </Heading>

        <Text variant="body" className="mb-4">
          I believe great engineering is about systems thinking:
        </Text>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Document everything:</strong> Code without documentation is
            half-finished work
          </li>
          <li>
            <strong>Design for scale:</strong> Build systems that grow with your
            needs
          </li>
          <li>
            <strong>Accessible by default:</strong> Inclusivity isn't optional
          </li>
          <li>
            <strong>Measure twice, build once:</strong> Research-driven decisions
            over gut feelings
          </li>
        </ul>

        <Heading as="h2" variant="title" className="mt-12">
          Experience Highlights
        </Heading>

        <div className="space-y-4">
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <Heading as="h3" variant="section" className="mb-2">
              5+ Years in Product Engineering
            </Heading>
            <Text variant="body">
              Shipped design systems, no-code apps, and accessible interfaces for
              startups and personal projects.
            </Text>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <Heading as="h3" variant="section" className="mb-2">
              64+ Components Built
            </Heading>
            <Text variant="body">
              Complete design system with atoms, molecules, organisms, templates,
              and pages - all documented in Storybook.
            </Text>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <Heading as="h3" variant="section" className="mb-2">
              100% WCAG 2.2 AA Compliant
            </Heading>
            <Text variant="body">
              Every project meets accessibility standards with keyboard
              navigation, proper ARIA, and motion safety.
            </Text>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
