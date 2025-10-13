/**
 * Docs Hub Page (/docs)
 *
 * Landing page for all documentation with quick links to main sections.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Link } from "@/components/atoms/Link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | Logan [LastName]",
  description:
    "Complete documentation for skills, case studies, and design system",
};

export default function DocsHubPage() {
  const breadcrumbs = [{ label: "Documentation", href: "/docs" }];

  const sections = [
    {
      title: "About & Process",
      description: "Learn about my background and development approach",
      links: [
        { label: "About Me", href: "/docs/about" },
        { label: "My Process", href: "/docs/process" },
        { label: "Contact", href: "/docs/contact" },
      ],
    },
    {
      title: "Skills",
      description: "Deep dives into my technical expertise and tools",
      links: [
        { label: "Next.js + React", href: "/docs/skills/nextjs-react" },
        { label: "Design Systems", href: "/docs/skills/design-systems" },
        { label: "Accessibility", href: "/docs/skills/accessibility" },
        { label: "Claude Code", href: "/docs/skills/claude-code" },
        { label: "Flutterflow", href: "/docs/skills/flutterflow" },
        { label: "Stripe", href: "/docs/skills/stripe-marketplaces" },
        { label: "View All Skills", href: "/docs/skills" },
      ],
    },
    {
      title: "Case Studies",
      description: "Detailed project breakdowns with process and results",
      links: [
        {
          label: "Austin Power Alert",
          href: "/docs/case-studies/austin-power-alert",
        },
        {
          label: "Building This Portfolio",
          href: "/docs/case-studies/building-this-portfolio",
        },
        { label: "View All Case Studies", href: "/docs/case-studies" },
      ],
    },
    {
      title: "Design System",
      description: "Complete design system documentation with 64+ components",
      links: [
        { label: "Overview", href: "/docs/design-system" },
        { label: "Color System", href: "/docs/design-system/foundation/colors" },
        { label: "Typography", href: "/docs/design-system/foundation/typography" },
        { label: "Components", href: "/docs/design-system/components/atoms" },
        {
          label: "Atomic Design",
          href: "/docs/design-system/architecture/atomic-design",
        },
      ],
    },
  ];

  return (
    <DocsLayout
      currentPath="/docs"
      breadcrumbs={breadcrumbs}
      pageTitle="Documentation Hub"
    >
      <section className="space-y-8">
        <Text variant="lead">
          Welcome to the documentation. Explore skills, case studies, and the
          complete design system built with Atomic Design methodology.
        </Text>

        <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-terracotta-200 bg-terracotta-50 p-6">
            <Heading as="h3" variant="section" className="mb-2">
              25 Pages
            </Heading>
            <Text variant="body">
              Complete documentation covering skills, projects, and system
              architecture
            </Text>
          </div>
          <div className="rounded-xl border border-sage-200 bg-sage-50 p-6">
            <Heading as="h3" variant="section" className="mb-2">
              64+ Components
            </Heading>
            <Text variant="body">
              Atoms, molecules, organisms, templates, and pages documented
            </Text>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-neutral-100 p-6">
            <Heading as="h3" variant="section" className="mb-2">
              100% Accessible
            </Heading>
            <Text variant="body">
              WCAG 2.2 AA compliant with keyboard nav and ARIA
            </Text>
          </div>
        </div>

        <Heading as="h2" variant="title" className="mt-12">
          Quick Navigation
        </Heading>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <Heading as="h3" variant="section" className="mb-2">
                {section.title}
              </Heading>
              <Text variant="body" className="mb-4 text-neutral-600">
                {section.description}
              </Text>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-terracotta-600 hover:text-terracotta-700 hover:underline"
                    >
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-sage-200 bg-sage-50 p-6">
          <Heading as="h3" variant="section" className="mb-2">
            📚 How to Navigate
          </Heading>
          <Text variant="body" className="mb-4">
            Use the collapsible sidebar on the left to explore all sections.
            Click on any accordion to expand and see nested pages. Breadcrumbs
            at the top help you track your location.
          </Text>
          <ul className="list-disc space-y-1 pl-6 text-sm">
            <li>
              <strong>Desktop:</strong> Sidebar is always visible with nested
              accordions
            </li>
            <li>
              <strong>Mobile:</strong> Tap the hamburger menu (☰) to open the
              sidebar
            </li>
            <li>
              <strong>Keyboard:</strong> Tab through navigation, Enter to
              expand/collapse
            </li>
          </ul>
        </div>
      </section>
    </DocsLayout>
  );
}
