/**
 * Foundation Tokens Page (/docs/design-system/foundation/tokens)
 *
 * Documentation of design tokens: shadows, border radius, transitions, z-index, opacity.
 * Low-level tokens that power the design system.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Code } from "@/components/atoms/Code";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foundation Tokens | Design System",
  description:
    "Design tokens for shadows, border radius, transitions, z-index, and opacity",
};

export default function TokensPage() {
  const breadcrumbs = [
    { label: "Design System", href: "/docs/design-system" },
    { label: "Foundation", href: "/docs/design-system/foundation" },
    { label: "Tokens", href: "/docs/design-system/foundation/tokens" },
  ];

  return (
    <DocsLayout
      currentPath="/docs/design-system/foundation/tokens"
      breadcrumbs={breadcrumbs}
      pageTitle="Foundation Tokens"
    >
      <section className="space-y-8">
        <Text variant="lead">
          Low-level design tokens that define shadows, border radius,
          transitions, z-index, and opacity values. These tokens ensure
          consistency across all components.
        </Text>

        <div id="shadows">
          <Heading as="h2" variant="title">
            Shadows (Material Design 3 Style)
          </Heading>
          <Text variant="body" className="mt-4">
            I use Material Design 3 elevation system with warm neutral-900
            (#2E2D2A) instead of cold black. This creates softer, more
            approachable shadows.
          </Text>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <Text variant="body" className="mb-2 font-semibold">
                shadow-sm (Level 1)
              </Text>
              <Code variant="inline">
                0 1px 2px 0 rgb(46 45 42 / 0.05)
              </Code>
              <Text variant="small" className="mt-2 text-neutral-600">
                Cards, inputs - subtle elevation
              </Text>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-md">
              <Text variant="body" className="mb-2 font-semibold">
                shadow-md (Level 2)
              </Text>
              <Code variant="inline">
                0 4px 6px -1px rgb(46 45 42 / 0.1)
              </Code>
              <Text variant="small" className="mt-2 text-neutral-600">
                Buttons, dropdowns - moderate elevation
              </Text>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-lg">
              <Text variant="body" className="mb-2 font-semibold">
                shadow-lg (Level 3)
              </Text>
              <Code variant="inline">
                0 10px 15px -3px rgb(46 45 42 / 0.1)
              </Code>
              <Text variant="small" className="mt-2 text-neutral-600">
                Modals, popovers - strong elevation
              </Text>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-xl">
              <Text variant="body" className="mb-2 font-semibold">
                shadow-xl (Level 4)
              </Text>
              <Code variant="inline">
                0 20px 25px -5px rgb(46 45 42 / 0.1)
              </Code>
              <Text variant="small" className="mt-2 text-neutral-600">
                Dialogs, overlays - maximum elevation
              </Text>
            </div>
          </div>
        </div>

        <div id="border-radius">
          <Heading as="h2" variant="title">
            Border Radius (8px Default)
          </Heading>
          <Text variant="body" className="mt-4">
            8px border radius provides professional warmth. Not too sharp
            (corporate), not too round (playful).
          </Text>
          <Code variant="block" className="mt-4">
            {`// Border radius scale
rounded-sm:   4px  (subtle roundness for small elements)
rounded-md:   8px  (default - cards, buttons)
rounded-lg:  12px  (larger cards, modals)
rounded-xl:  16px  (hero sections, featured cards)
rounded-2xl: 24px  (major sections)
rounded-full: 9999px (avatars, pills)

// Example usage
<Button className="rounded-md">   // 8px default
<Card className="rounded-xl">     // 16px for emphasis
<Avatar className="rounded-full"> // Perfect circle`}
          </Code>
        </div>

        <div id="transitions">
          <Heading as="h2" variant="title">
            Transitions & Animation
          </Heading>
          <Text variant="body" className="mt-4">
            Custom easing curves for natural, responsive interactions:
          </Text>
          <Code variant="block" className="mt-4">
            {`// Transition durations
duration-75:   75ms  (instant feedback - hover states)
duration-150: 150ms  (default - buttons, links)
duration-300: 300ms  (moderate - dropdowns, modals)
duration-500: 500ms  (slow - page transitions)

// Easing curves
ease-in:     cubic-bezier(0.4, 0, 1, 1)      // Accelerate
ease-out:    cubic-bezier(0, 0, 0.2, 1)      // Decelerate (default)
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)    // Smooth both ends

// Example
<Button className="transition-colors duration-150 ease-out">
  Hover Me
</Button>

// Motion safety (respects prefers-reduced-motion)
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`}
          </Code>
        </div>

        <div id="z-index">
          <Heading as="h2" variant="title">
            Z-Index Scale
          </Heading>
          <Text variant="body" className="mt-4">
            Predictable z-index scale prevents stacking conflicts:
          </Text>
          <Code variant="block" className="mt-4">
            {`// Z-index scale (powers of 10)
z-0:     0    (base layer)
z-10:   10    (dropdowns, tooltips)
z-20:   20    (sticky headers)
z-30:   30    (modals, dialogs)
z-40:   40    (notifications, toasts)
z-50:   50    (overlays)

// Example
<Navbar className="sticky top-0 z-20">      // Above content
<Modal className="fixed inset-0 z-30">      // Above navbar
<Toast className="fixed bottom-4 right-4 z-40"> // Above modal`}
          </Code>
        </div>

        <div className="mt-8">
          <Heading as="h2" variant="title">
            Opacity Levels
          </Heading>
          <Text variant="body" className="mt-4">
            Standardized opacity for overlays and disabled states:
          </Text>
          <Code variant="block" className="mt-4">
            {`// Opacity scale
opacity-0:   0%   (hidden)
opacity-10: 10%   (very subtle overlays)
opacity-25: 25%   (subtle overlays)
opacity-50: 50%   (modal overlays)
opacity-75: 75%   (disabled states)
opacity-100: 100% (fully opaque)

// Example: Modal overlay
<div className="fixed inset-0 bg-neutral-900 opacity-50" />

// Example: Disabled button
<Button disabled className="opacity-50 cursor-not-allowed">`}
          </Code>
        </div>
      </section>
    </DocsLayout>
  );
}
