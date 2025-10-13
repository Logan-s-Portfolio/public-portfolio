/**
 * Design Systems Showcase Page (/skills/design-systems)
 *
 * Complete design system showcase with foundation and atomic design.
 */

"use client";

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Tag } from "@/components/atoms/Tag";
import { FoundationPlayground } from "@/components/organisms/FoundationPlayground";
import { AtomicShowcase } from "@/components/organisms/AtomicShowcase";

export default function DesignSystemsV2Page() {
  const breadcrumbs = [
    { label: "Design Systems", href: "/skills/design-systems" },
  ];

  const techStack = [
    { label: "React", variant: "terracotta" as const },
    { label: "TypeScript", variant: "sage" as const },
    { label: "Tailwind v4", variant: "terracotta" as const },
    { label: "Framer Motion", variant: "sage" as const },
    { label: "Storybook", variant: "terracotta" as const },
    { label: "Vitest", variant: "sage" as const },
  ];

  return (
    <DocsLayout
      currentPath="/skills/design-systems"
      breadcrumbs={breadcrumbs}
    >
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="space-y-6 max-w-4xl">
          <Heading as="h1" variant="display" className="text-neutral-900">
            Design Systems: Foundation to Implementation
          </Heading>
          <Text variant="lead" className="text-neutral-600">
            A systematic approach to building scalable, accessible component libraries—from color theory to production code.
          </Text>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Tag key={tech.label} variant={tech.variant} size="md">
                {tech.label}
              </Tag>
            ))}
          </div>
        </div>

        {/* Narrative: Why From Scratch */}
        <div className="max-w-3xl space-y-4">
          <Heading as="h2" variant="h2">
            Why Build From Scratch?
          </Heading>
          <Text variant="body" className="text-neutral-700">
            Libraries like Material UI and Chakra are excellent—but they solve for generic use cases. Building from scratch meant every color, every spacing value, every component variant was intentional. No unused styles bloating the bundle. No fighting framework opinions.
          </Text>
          <Text variant="body" className="text-neutral-700">
            The secret? AI acceleration. What traditionally takes months of meticulous token creation, component scaffolding, and Storybook documentation became a two-week sprint. But make no mistake: this is human-directed work. I made every design decision. AI just helped me execute 10x faster.
          </Text>
        </div>

        <FoundationPlayground />

        {/* Narrative: Foundation & AI Collaboration */}
        <div className="max-w-3xl space-y-4">
          <Heading as="h2" variant="h2">
            Where AI Shines: Systematic Foundations
          </Heading>
          <Text variant="body" className="text-neutral-700">
            Generating color scales, typography systems, and spacing tokens is perfect for AI. I chose terracotta and sage for warmth. I decided on an 8-point grid for mathematical harmony. I selected Fraunces + Inter for personality plus readability. Claude Code generated 33 perfectly-scaled color shades in seconds—all WCAG tested.
          </Text>
          <Text variant="body" className="text-neutral-700">
            But accessibility isn't automated. Every contrast ratio was human-verified. Every component supports keyboard navigation because I specified it. Every animation respects prefers-reduced-motion because I care about vestibular disorders. AI accelerates—humans ensure quality.
          </Text>
        </div>

        <AtomicShowcase />

        {/* Narrative: Results & Reflection */}
        <div className="max-w-3xl space-y-4">
          <Heading as="h2" variant="h2">
            The Result: Speed Meets Quality
          </Heading>
          <Text variant="body" className="text-neutral-700">
            64 documented components. 10 design token files. 7 comprehensive docs. Full TypeScript coverage. WCAG AAA compliance. All in two weeks. Traditional design systems take 2-3 months minimum.
          </Text>
          <Text variant="body" className="text-neutral-700">
            This portfolio proves the point: AI doesn't replace designers and developers—it amplifies them. I still architected the atomic design hierarchy. I still made every aesthetic choice. I still wrote the accessibility requirements. But I did it with a 10x multiplier.
          </Text>
          <Text variant="body" className="text-neutral-700 font-semibold">
            The future of development isn't human OR AI. It's human AND AI—and this design system is proof.
          </Text>
        </div>

        {/* Implementation Pathways */}
        <div className="max-w-4xl space-y-6">
          <Heading as="h2" variant="h2">
            How I Implement These Systems
          </Heading>
          <Text variant="body" className="text-neutral-700">
            Design systems are only valuable when implemented. Here's how I bring these foundations to life across different platforms:
          </Text>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Web Development Card */}
            <a
              href="/skills/claude-code"
              className="group rounded-xl border-2 border-terracotta-200 bg-terracotta-50 p-6 transition-all duration-300 hover:border-terracotta-400 hover:shadow-lg"
            >
              <Heading as="h3" variant="h3" className="mb-3 text-terracotta-700">
                Web Development
              </Heading>
              <Text variant="body" className="mb-4 text-neutral-700">
                Claude Code + Supabase
              </Text>
              <Text variant="small" className="text-neutral-600">
                AI-assisted TypeScript/React development with real-time databases, authentication, and serverless functions.
              </Text>
              <Text variant="small" className="mt-4 font-semibold text-terracotta-700 group-hover:underline">
                View Web Process →
              </Text>
            </a>

            {/* Mobile Development Card */}
            <a
              href="/skills/flutterflow"
              className="group rounded-xl border-2 border-sage-200 bg-sage-50 p-6 transition-all duration-300 hover:border-sage-400 hover:shadow-lg"
            >
              <Heading as="h3" variant="h3" className="mb-3 text-sage-700">
                Mobile Development
              </Heading>
              <Text variant="body" className="mb-4 text-neutral-700">
                FlutterFlow + Firebase
              </Text>
              <Text variant="small" className="text-neutral-600">
                Visual development platform for cross-platform mobile apps with Firebase backend integration.
              </Text>
              <Text variant="small" className="mt-4 font-semibold text-sage-700 group-hover:underline">
                View Mobile Process →
              </Text>
            </a>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
