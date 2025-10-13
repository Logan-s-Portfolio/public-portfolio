/**
 * Accessibility Skill Page (/skills/accessibility)
 *
 * Deep dive into WCAG 2.2 AA accessibility expertise.
 * Shows examples, standards, and approach.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Code } from "@/components/atoms/Code";
import { Badge } from "@/components/atoms/Badge";
import { Link } from "@/components/atoms/Link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility (WCAG 2.2 AA) | Skills",
  description:
    "Ensuring digital products work for everyone with keyboard navigation, ARIA, and motion safety",
};

export default function AccessibilitySkillPage() {
  const breadcrumbs = [
    { label: "Skills", href: "/skills" },
    { label: "Accessibility", href: "/skills/accessibility" },
  ];

  return (
    <DocsLayout
      currentPath="/skills/accessibility"
      breadcrumbs={breadcrumbs}
      pageTitle="Accessibility (WCAG 2.2 AA)"
    >
      {/* Overview */}
      <section className="mb-12">
        <div className="mb-6 flex items-center gap-4">
          <span className="text-5xl" aria-hidden="true">
            ♿
          </span>
          <div>
            <Text variant="lead" className="mb-2">
              WCAG 2.2 AA compliant interfaces with keyboard navigation and ARIA
            </Text>
            <Badge variant="sage" size="sm">
              5+ years
            </Badge>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-8">
          Examples
        </Heading>
        <div className="space-y-8">
          <Link
            href="/skills/design-systems"
            className="group block overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="aspect-video w-full overflow-hidden bg-neutral-100">
              <img
                src="https://placehold.co/600x400/7C9473/FFFFFF?text=Accessible+System"
                alt="This Portfolio's Accessible Design System"
                className="h-full w-full object-cover transition-transform duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <Heading
                as="h3"
                variant="section"
                className="mb-3 font-fraunces text-xl font-semibold text-neutral-900"
              >
                This Portfolio's Accessible Design System
              </Heading>
              <Text variant="body" className="mb-4 text-neutral-600">
                64+ components built with WCAG 2.2 AA compliance, keyboard
                navigation, focus management, and motion safety
              </Text>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" size="sm">
                  WCAG 2.2 AA
                </Badge>
                <Badge variant="outline" size="sm">
                  Keyboard Nav
                </Badge>
                <Badge variant="outline" size="sm">
                  ARIA
                </Badge>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* How I Use It Section */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-6">
          How I Use It
        </Heading>
        <div className="space-y-6">
          <Text variant="body" className="mb-4">
            I build accessibility into every component from day one, following
            WCAG 2.2 AA standards (AAA when possible).
          </Text>

          <Heading as="h3" variant="section" className="mb-4 mt-8">
            Keyboard Navigation
          </Heading>
          <Text variant="body" className="mb-4">
            All interactive elements are keyboard accessible:
          </Text>
          <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
            <li>Tab order follows logical reading flow</li>
            <li>Focus indicators meet WCAG contrast requirements (3:1)</li>
            <li>Skip links for main navigation</li>
            <li>Modal trap focus and restore focus on close</li>
            <li>Arrow key navigation for menus and tabs</li>
          </ul>

          <Heading as="h3" variant="section" className="mb-4 mt-8">
            ARIA Best Practices
          </Heading>
          <Text variant="body" className="mb-4">
            I use ARIA attributes properly:
          </Text>
          <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
            <li>Semantic HTML first, ARIA when needed</li>
            <li>Proper landmark roles (navigation, main, complementary)</li>
            <li>aria-label and aria-labelledby for context</li>
            <li>aria-live regions for dynamic content</li>
            <li>Hidden content properly excluded (aria-hidden)</li>
          </ul>

          <Heading as="h3" variant="section" className="mb-4 mt-8">
            Color Contrast & Visual Design
          </Heading>
          <Text variant="body" className="mb-4">
            All colors meet WCAG AA contrast requirements:
          </Text>
          <Code variant="block" className="mb-4">
            {`// Terracotta-600 on white: 4.52:1 (AA ✅)
// Sage-700 on white: 4.51:1 (AA ✅)
// All text meets minimum 4.5:1 contrast`}
          </Code>

          <Heading as="h3" variant="section" className="mb-4 mt-8">
            Motion Safety
          </Heading>
          <Text variant="body" className="mb-4">
            I respect prefers-reduced-motion for users with vestibular
            disorders:
          </Text>
          <Code variant="block">
            {`@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`}
          </Code>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-6">
          My Approach
        </Heading>
        <div className="space-y-6">
          <Text variant="body" className="mb-4">
            <strong>Accessibility by Default:</strong> I don't add
            accessibility as an afterthought. Every component is built with WCAG
            compliance from the start.
          </Text>
          <Text variant="body" className="mb-4">
            <strong>Testing with Real Users:</strong> I test with screen readers
            (NVDA, JAWS, VoiceOver), keyboard-only navigation, and high contrast
            modes.
          </Text>
          <Text variant="body">
            <strong>Progressive Enhancement:</strong> I ensure core
            functionality works without JavaScript, then enhance with
            interactive features.
          </Text>
        </div>
      </section>

      {/* Related Skills */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-6">
          Related Skills
        </Heading>
        <ul className="space-y-2">
          <li>
            <Link
              href="/skills/design-systems"
              className="font-inter text-base text-terracotta-600 transition-colors hover:text-terracotta-700"
            >
              Design Systems →
            </Link>
          </li>
          <li>
            <Link
              href="/skills/nextjs-react"
              className="font-inter text-base text-terracotta-600 transition-colors hover:text-terracotta-700"
            >
              Next.js + React →
            </Link>
          </li>
        </ul>
      </section>
    </DocsLayout>
  );
}
