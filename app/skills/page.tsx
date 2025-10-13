/**
 * Skills Hub Page (/skills)
 *
 * Overview of all skills with links to detail pages.
 * Skills organized by category with visual cards.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Badge } from "@/components/atoms/Badge";
import { Link } from "@/components/atoms/Link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Expertise | Logan [LastName]",
  description:
    "My technical skills documented like API services - Design Systems, Flutterflow, Stripe, Claude Code, and more",
};

export default function SkillsHubPage() {
  const breadcrumbs = [{ label: "Skills", href: "/skills" }];

  const skillCategories = {
    "Design & Systems": [
      {
        id: "design-systems",
        name: "Design Systems Architecture",
        description:
          "Building scalable, accessible component systems from atoms to pages",
        icon: "🎨",
        years: "5+ years",
        href: "/skills/design-systems",
      },
      {
        id: "accessibility",
        name: "Accessibility (WCAG 2.2 AA)",
        description: "Ensuring digital products work for everyone",
        icon: "♿",
        years: "5+ years",
        href: "/skills/accessibility",
      },
    ],
    Development: [
      {
        id: "nextjs-react",
        name: "Next.js + React",
        description: "Modern web applications with server-side rendering",
        icon: "⚛️",
        years: "4+ years",
        href: "/skills/nextjs-react",
      },
      {
        id: "flutterflow",
        name: "Flutterflow",
        description: "Rapid app development with custom integrations",
        icon: "⚡",
        years: "2+ years",
        href: "/skills/flutterflow",
      },
    ],
    "AI & Automation": [
      {
        id: "claude-code",
        name: "Claude Code",
        description: "AI-assisted development workflow",
        icon: "🤖",
        years: "1+ year",
        href: "/skills/claude-code",
      },
    ],
    "Business Tools": [
      {
        id: "stripe",
        name: "Stripe (Marketplaces & Subscriptions)",
        description: "Payment processing and complex integrations",
        icon: "💳",
        years: "3+ years",
        href: "/skills/stripe-marketplaces",
      },
    ],
  };

  return (
    <DocsLayout
      currentPath="/skills"
      breadcrumbs={breadcrumbs}
      pageTitle="Skills & Expertise"
    >
      <Text variant="lead" className="mb-12">
        Documented like API services - because systems thinking matters
      </Text>

      {Object.entries(skillCategories).map(([category, skills]) => (
        <section key={category} className="mb-16">
          <Heading as="h2" variant="title" className="mb-8">
            {category}
          </Heading>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {skills.map((skill) => (
              <Link
                key={skill.id}
                href={skill.href}
                className="group block rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-4xl" aria-hidden="true">
                    {skill.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="mb-2 flex items-center gap-3">
                      <Heading
                        as="h3"
                        variant="section"
                        className="font-fraunces text-xl font-semibold text-neutral-900"
                      >
                        {skill.name}
                      </Heading>
                      <Badge variant="sage" size="sm">
                        {skill.years}
                      </Badge>
                    </div>
                    <Text variant="body" className="mb-4 text-neutral-600">
                      {skill.description}
                    </Text>
                    <Text
                      variant="small"
                      className="text-terracotta-700 group-hover:underline"
                    >
                      Learn more →
                    </Text>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </DocsLayout>
  );
}
