/**
 * Typography Page (/docs/design-system/foundation/typography)
 *
 * Documentation of font pairing, type scale, and typography system.
 * Fraunces (headings) + Inter (body) with optical sizing.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Code } from "@/components/atoms/Code";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Typography | Design System",
  description:
    "Font pairing, type scale, and typography system with Fraunces and Inter",
};

export default function TypographyPage() {
  const breadcrumbs = [
    { label: "Design System", href: "/docs/design-system" },
    { label: "Foundation", href: "/docs/design-system/foundation" },
    { label: "Typography", href: "/docs/design-system/foundation/typography" },
  ];

  return (
    <DocsLayout
      currentPath="/docs/design-system/foundation/typography"
      breadcrumbs={breadcrumbs}
      pageTitle="Typography"
    >
      <section className="space-y-8">
        <Text variant="lead">
          Dual-typeface system pairing Fraunces (serif headings) with Inter
          (sans-serif body). Optical sizing for Fraunces ensures readability at
          all scales.
        </Text>

        <div id="font-pairing">
          <Heading as="h2" variant="title">
            Font Pairing: Fraunces + Inter
          </Heading>
          <Text variant="body" className="mt-4">
            I chose this pairing for contrast and elegance:
          </Text>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <Text variant="body" className="mb-2 font-semibold">
                Fraunces (Headings)
              </Text>
              <Heading as="h3" variant="section" className="mb-2">
                The quick brown fox jumps
              </Heading>
              <Text variant="small" className="text-neutral-600">
                Serif typeface with optical sizing. Elegant, distinctive, and
                warm. Used for all headings (hero, title, section).
              </Text>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <Text variant="body" className="mb-2 font-semibold">
                Inter (Body Text)
              </Text>
              <Text variant="body" className="mb-2">
                The quick brown fox jumps over the lazy dog. Inter is optimized
                for screen reading with excellent legibility at all sizes.
              </Text>
              <Text variant="small" className="text-neutral-600">
                Sans-serif optimized for screen reading. Clean, readable, and
                professional. Used for body text, UI labels, and navigation.
              </Text>
            </div>
          </div>
        </div>

        <div id="type-scale">
          <Heading as="h2" variant="title">
            Type Scale (8-Point Grid Aligned)
          </Heading>
          <Text variant="body" className="mt-4">
            All font sizes align to the 8-point grid for vertical rhythm:
          </Text>
          <Code variant="block" className="mt-4">
            {`// Heading sizes (Fraunces with optical sizing)
hero:    72px / 4.5rem  (opsz: 144) - Large hero headings
title:   48px / 3rem    (opsz: 96)  - Page titles
section: 32px / 2rem    (opsz: 72)  - Section headings

// Body sizes (Inter)
lead:  20px / 1.25rem - Lead paragraphs, important text
body:  16px / 1rem    - Standard body text
small: 14px / 0.875rem - Captions, labels, metadata
tiny:  12px / 0.75rem  - Fine print, footnotes

// Letter spacing
Display sizes (≥48px): -0.02em (tighter for large text)
Body sizes (<48px):     0em (normal spacing)

// Font weight scale
light:    300
normal:   400
medium:   500
semibold: 600
bold:     700`}
          </Code>
        </div>

        <div id="line-height">
          <Heading as="h2" variant="title">
            Line Height System
          </Heading>
          <Text variant="body" className="mt-4">
            Line height optimized for readability:
          </Text>
          <ul className="my-4 list-disc space-y-2 pl-6">
            <li>
              <strong>Headings:</strong> 1.2 (tight, for impact)
            </li>
            <li>
              <strong>Body text:</strong> 1.6 (relaxed, for comfortable reading)
            </li>
            <li>
              <strong>Lead paragraphs:</strong> 1.5 (balanced)
            </li>
            <li>
              <strong>Small text:</strong> 1.4 (compact)
            </li>
          </ul>
          <Code variant="block" className="mt-4">
            {`// Example: Heading component
<Heading as="h1" variant="hero">
  // font-fraunces text-7xl leading-tight (-0.02em tracking)
  Your Heading Text
</Heading>

// Example: Body text
<Text variant="body">
  // font-inter text-base leading-relaxed
  Your paragraph text with comfortable line height for reading.
</Text>`}
          </Code>
        </div>
      </section>
    </DocsLayout>
  );
}
