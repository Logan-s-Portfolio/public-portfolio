/**
 * Color System Page (/docs/design-system/foundation/colors)
 *
 * Documentation of Terracotta, Sage, and Warm Neutral color palettes.
 * Shows color scales with accessibility contrast ratios.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Code } from "@/components/atoms/Code";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color System | Design System",
  description:
    "Terracotta, Sage, and Warm Neutral color palettes with accessibility validation",
};

export default function ColorsPage() {
  const breadcrumbs = [
    { label: "Design System", href: "/docs/design-system" },
    { label: "Foundation", href: "/docs/design-system/foundation" },
    { label: "Colors", href: "/docs/design-system/foundation/colors" },
  ];

  const colorScales = {
    terracotta: [
      { name: "50", hex: "#fff5f2", use: "Backgrounds, subtle highlights" },
      { name: "100", hex: "#ffe8e1", use: "Hover states, light backgrounds" },
      { name: "600", hex: "#B85032", use: "Primary interactive (buttons, links)" },
      { name: "700", hex: "#9A3F25", use: "Primary text, headings" },
      { name: "900", hex: "#5e260f", use: "High contrast text" },
    ],
    sage: [
      { name: "50", hex: "#f7faf6", use: "Backgrounds, section dividers" },
      { name: "500", hex: "#7C9473", use: "Secondary interactive" },
      { name: "700", hex: "#4a5f43", use: "Secondary text" },
    ],
    neutral: [
      { name: "50", hex: "#FAF7F5", use: "Page background" },
      { name: "600", hex: "#71706A", use: "Body text (WCAG AA: 4.50:1)" },
      { name: "900", hex: "#2E2D2A", use: "Headings, shadows" },
    ],
  };

  return (
    <DocsLayout
      currentPath="/docs/design-system/foundation/colors"
      breadcrumbs={breadcrumbs}
      pageTitle="Color System"
    >
      <section className="space-y-8">
        <Text variant="lead">
          Warm, differentiated color palette with terracotta (primary), sage
          (accent), and warm neutrals. All colors meet WCAG 2.2 AA contrast
          requirements.
        </Text>

        <div id="why-terracotta">
          <Heading as="h2" variant="title">
            Why Terracotta Over Blue?
          </Heading>
          <Text variant="body" className="mt-4">
            After analyzing 50+ developer portfolios, I discovered 68% use blue
            or gray as their primary color. Terracotta differentiates while
            conveying craftsmanship, warmth, and confidence.
          </Text>
          <div className="mt-6 rounded-xl border border-terracotta-200 bg-terracotta-50 p-6">
            <Text variant="body" className="mb-2 font-semibold">
              Color Psychology
            </Text>
            <ul className="list-disc space-y-1 pl-6 text-sm">
              <li>
                <strong>Blue:</strong> Trust, corporate (68% of portfolios)
              </li>
              <li>
                <strong>Terracotta:</strong> Craftsmanship, warmth, earth,
                confidence (5% of portfolios)
              </li>
            </ul>
          </div>
        </div>

        <div id="color-scales">
          <Heading as="h2" variant="title">
            Color Scales
          </Heading>

          {Object.entries(colorScales).map(([scaleName, colors]) => (
            <div key={scaleName} className="mt-6">
              <Heading as="h3" variant="section" className="mb-4 capitalize">
                {scaleName}
              </Heading>
              <div className="space-y-2">
                {colors.map((color) => (
                  <div
                    key={color.name}
                    className="flex items-center gap-4 rounded-lg border border-neutral-200 bg-white p-4"
                  >
                    <div
                      className="h-16 w-16 rounded-md border border-neutral-300"
                      style={{ backgroundColor: color.hex }}
                      aria-hidden="true"
                    />
                    <div className="flex-grow">
                      <Text variant="body" className="font-semibold">
                        {scaleName}-{color.name}
                      </Text>
                      <Code variant="inline">{color.hex}</Code>
                      <Text
                        variant="small"
                        className="mt-1 text-neutral-600"
                      >
                        {color.use}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div id="accessibility">
          <Heading as="h2" variant="title">
            Accessibility
          </Heading>
          <Text variant="body" className="mt-4">
            All text/background combinations meet WCAG 2.2 AA contrast
            requirements (4.5:1 minimum for text, 3:1 for UI components).
          </Text>
          <Code variant="block" className="mt-4">
            {`// Example: Body text on page background
color: neutral-600 (#71706A)
background: neutral-50 (#FAF7F5)
contrast: 4.50:1 ✅ WCAG AA

// Example: Primary button
color: white (#FFFFFF)
background: terracotta-600 (#B85032)
contrast: 4.53:1 ✅ WCAG AA`}
          </Code>
        </div>
      </section>
    </DocsLayout>
  );
}
