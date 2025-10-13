/**
 * Case Studies Hub Page (/case-studies)
 *
 * Portfolio of projects with featured case studies.
 * Shows grid of project cards with links to detailed case studies.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { ProjectGrid } from "@/components/organisms/ProjectGrid";
import { Text } from "@/components/atoms/Text";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Logan [LastName]",
  description: "Projects that demonstrate systems thinking and craft",
};

export default function CaseStudiesHubPage() {
  const breadcrumbs = [
    { label: "Case Studies", href: "/case-studies" },
  ];

  const projects = [
    {
      id: "austin-power-alert",
      title: "Austin Power Alert",
      description:
        "Real-time electricity pricing app built with Flutterflow, Stripe, and Austin Energy API. Helps users save money with smart notifications when electricity is cheap.",
      imageSrc:
        "https://placehold.co/600x400/B85032/FFFFFF?text=Austin+Power+Alert",
      tags: ["Flutterflow", "Stripe", "API Integration", "Mobile App"],
      href: "/case-studies/austin-power-alert",
    },
    {
      id: "building-this-portfolio",
      title: "Building This Portfolio",
      description:
        "A meta case study on building a design system from scratch using Atomic Design, research-driven decisions, and 64+ components. The portfolio itself is the main project.",
      imageSrc:
        "https://placehold.co/600x400/7C9473/FFFFFF?text=Design+System",
      tags: ["Design System", "Atomic Design", "Accessibility", "Next.js"],
      href: "/case-studies/building-this-portfolio",
    },
  ];

  return (
    <DocsLayout
      currentPath="/case-studies"
      breadcrumbs={breadcrumbs}
      pageTitle="Case Studies"
    >
      <section className="mb-8">
        <Text variant="lead" className="mb-4">
          Projects that demonstrate systems thinking and craft
        </Text>
        <Text variant="body" className="mb-4">
          Each case study demonstrates not just what I built, but how and why. I
          focus on process, decision-making, and the systematic thinking behind
          every project.
        </Text>
      </section>

      <ProjectGrid projects={projects} />
    </DocsLayout>
  );
}
