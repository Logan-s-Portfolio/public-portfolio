/**
 * Spacing & Layout Page (/docs/design-system/foundation/spacing)
 *
 * Documentation of 8-point grid system and spacing scale.
 * Consistent spacing throughout all components.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Code } from "@/components/atoms/Code";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spacing & Layout | Design System",
  description:
    "8-point grid system and spacing scale for consistent layouts",
};

export default function SpacingPage() {
  const breadcrumbs = [
    { label: "Design System", href: "/docs/design-system" },
    { label: "Foundation", href: "/docs/design-system/foundation" },
    { label: "Spacing", href: "/docs/design-system/foundation/spacing" },
  ];

  const spacingScale = [
    { token: "0", value: "0px", use: "No spacing" },
    { token: "1", value: "4px", use: "Tight spacing (icon gaps)" },
    { token: "2", value: "8px", use: "Base unit (border radius)" },
    { token: "3", value: "12px", use: "Small spacing" },
    { token: "4", value: "16px", use: "Standard spacing (button padding)" },
    { token: "6", value: "24px", use: "Medium spacing (card padding)" },
    { token: "8", value: "32px", use: "Section spacing" },
    { token: "12", value: "48px", use: "Large section spacing" },
    { token: "16", value: "64px", use: "Extra large spacing" },
    { token: "24", value: "96px", use: "Hero section spacing" },
    { token: "32", value: "128px", use: "Major section dividers" },
  ];

  return (
    <DocsLayout
      currentPath="/docs/design-system/foundation/spacing"
      breadcrumbs={breadcrumbs}
      pageTitle="Spacing & Layout"
    >
      <section className="space-y-8">
        <Text variant="lead">
          All spacing follows an 8-point grid system for visual consistency and
          predictable layout rhythms. Every margin, padding, and gap is a
          multiple of 4px or 8px.
        </Text>

        <div id="8-point-grid">
          <Heading as="h2" variant="title">
            Why 8-Point Grid?
          </Heading>
          <Text variant="body" className="mt-4">
            The 8-point grid system provides several benefits:
          </Text>
          <ul className="my-4 list-disc space-y-2 pl-6">
            <li>
              <strong>Visual Consistency:</strong> All components feel aligned
              and harmonious
            </li>
            <li>
              <strong>Faster Design Decisions:</strong> No debate about 13px vs
              15px spacing
            </li>
            <li>
              <strong>Developer-Designer Alignment:</strong> Shared language for
              spacing (1 = 4px, 2 = 8px)
            </li>
            <li>
              <strong>Responsive Scaling:</strong> Easy to scale up/down by
              factors of 2
            </li>
          </ul>
          <Code variant="block" className="mt-4">
            {`// Always use spacing tokens
<div className="p-4">  // 16px padding ✅
<div className="p-6">  // 24px padding ✅
<div className="p-8">  // 32px padding ✅

// Avoid magic numbers
<div className="p-[13px]">  // ❌ Not aligned to grid
<div className="p-[27px]">  // ❌ Not aligned to grid`}
          </Code>
        </div>

        <div id="spacing-scale">
          <Heading as="h2" variant="title">
            Spacing Scale (Tailwind Units)
          </Heading>
          <div className="mt-6 space-y-2">
            {spacingScale.map((item) => (
              <div
                key={item.token}
                className="flex items-center gap-4 rounded-lg border border-neutral-200 bg-white p-4"
              >
                <div className="flex w-24 items-center gap-2">
                  <Code variant="inline">{item.token}</Code>
                  <div
                    className="h-4 bg-terracotta-600"
                    style={{ width: item.value }}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-grow">
                  <Text variant="body" className="font-semibold">
                    {item.value}
                  </Text>
                  <Text variant="small" className="text-neutral-600">
                    {item.use}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="layout-patterns">
          <Heading as="h2" variant="title">
            Common Layout Patterns
          </Heading>
          <Text variant="body" className="mt-4">
            Examples of how spacing is applied:
          </Text>
          <Code variant="block" className="mt-4">
            {`// Card component
<div className="p-6 space-y-4">  // 24px padding, 16px gaps
  <Heading>Title</Heading>
  <Text>Body content</Text>
</div>

// Section spacing
<section className="py-16 md:py-20 lg:py-24">  // 64px → 80px → 96px
  <div className="space-y-8">  // 32px gaps between elements
    <Heading>Section Title</Heading>
    <Text>Content...</Text>
  </div>
</section>

// Button padding
<Button className="px-4 py-2">  // 16px horizontal, 8px vertical
  Click Me
</Button>

// Grid gaps
<div className="grid grid-cols-3 gap-6">  // 24px gaps
  <Card />
  <Card />
  <Card />
</div>`}
          </Code>
        </div>
      </section>
    </DocsLayout>
  );
}
