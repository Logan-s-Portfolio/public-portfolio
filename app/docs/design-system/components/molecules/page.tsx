/**
 * Molecules Page (/docs/design-system/components/molecules)
 *
 * Documentation of molecular components - combinations of atoms.
 * 15 molecules total: cards, form fields, etc.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Code } from "@/components/atoms/Code";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Molecules | Design System",
  description:
    "Molecular components - combinations of atoms that form functional units",
};

export default function MoleculesPage() {
  const breadcrumbs = [
    { label: "Design System", href: "/docs/design-system" },
    { label: "Components", href: "/docs/design-system/components" },
    { label: "Molecules", href: "/docs/design-system/components/molecules" },
  ];

  const molecules = [
    {
      name: "ProjectCard",
      description:
        "Card displaying project with image, title, description, tags, and link",
      composition: "Image + Heading + Text + Badge[] + Link",
      usage: "Project grids, case study listings",
    },
    {
      name: "SkillCard",
      description:
        "Card for skill display with icon, name, proficiency level, and description",
      composition: "Icon + Heading + Text + Badge",
      usage: "Skills showcase, about page",
    },
    {
      name: "TestimonialCard",
      description:
        "Testimonial with quote, author name, role, and avatar. Supports vertical/horizontal layouts",
      composition: "Text + Avatar + Heading + Text",
      usage: "Client testimonials, case study feedback",
    },
    {
      name: "NavItem",
      description:
        "Navigation item with active state, hover effects, and icon support",
      composition: "Link + Text + Icon (optional)",
      usage: "Navbar, sidebar navigation",
    },
    {
      name: "SocialLink",
      description:
        "Social media link with icon and hover animation",
      composition: "IconButton + Link",
      usage: "Footer, contact section",
    },
    {
      name: "BreadcrumbItem",
      description: "Single breadcrumb with separator and link",
      composition: "Link + Text + Divider",
      usage: "Page navigation, case studies",
    },
    {
      name: "FormField",
      description:
        "Complete form field with label, input, error message, and help text",
      composition: "Label + Input + Text (error) + Text (help)",
      usage: "Contact forms, login forms",
    },
    {
      name: "TextArea",
      description: "Multi-line text input with label and character count",
      composition: "Label + textarea + Text (count)",
      usage: "Contact forms, feedback forms",
    },
    {
      name: "CheckboxField",
      description: "Checkbox with label and description",
      composition: "Checkbox + Label + Text",
      usage: "Settings, consent forms",
    },
    {
      name: "StatCard",
      description:
        "Statistic display with number, label, and optional trend indicator",
      composition: "Heading + Text + Badge (optional)",
      usage: "Dashboard, metrics display",
    },
    {
      name: "Tooltip",
      description:
        "Hover tooltip with arrow pointer and configurable placement",
      composition: "IconButton (trigger) + Text (content)",
      usage: "Help text, additional info",
    },
    {
      name: "Dropdown",
      description: "Dropdown menu with items and click-outside behavior",
      composition: "Button (trigger) + List of Links",
      usage: "Navigation menus, action menus",
    },
    {
      name: "ImageWithCaption",
      description: "Image with optional caption and loading states",
      composition: "Image + Text (caption)",
      usage: "Case studies, blog posts",
    },
    {
      name: "VideoEmbed",
      description: "Responsive video embed with play button and thumbnail",
      composition: "Image (thumbnail) + Button (play) + iframe",
      usage: "Case studies, presentations",
    },
    {
      name: "ThemeToggle",
      description:
        "Toggle button for light/dark theme with smooth transition",
      composition: "IconButton + Icon",
      usage: "Navbar, settings",
    },
  ];

  return (
    <DocsLayout
      currentPath="/docs/design-system/components/molecules"
      breadcrumbs={breadcrumbs}
      pageTitle="Molecules"
    >
      <section className="space-y-8">
        <Text variant="lead">
          Molecules are combinations of atoms that form functional units. A
          button (atom) + icon (atom) = IconButton (molecule). They're still
          relatively simple but serve a specific purpose.
        </Text>

        <div className="rounded-xl border border-terracotta-200 bg-terracotta-50 p-6">
          <Text variant="body" className="font-semibold">
            🧬 15 Molecular Components
          </Text>
          <Text variant="small" className="mt-2 text-neutral-700">
            Molecules combine atoms into reusable, functional units. Each
            molecule is composed of 2-5 atoms working together to accomplish a
            specific task.
          </Text>
        </div>

        <Heading as="h2" variant="title">
          Composition Pattern
        </Heading>
        <Text variant="body">
          Molecules follow a clear composition pattern:
        </Text>
        <Code variant="block" className="mt-4">
          {`// Example: ProjectCard molecule
<ProjectCard>
  <Image />        // Atom
  <Heading />      // Atom
  <Text />         // Atom
  <Badge[] />      // Atoms (multiple)
  <Link />         // Atom
</ProjectCard>

// Result: A functional card that displays project info
// Can be reused across project grids, listings, etc.`}
        </Code>

        <Heading as="h2" variant="title">
          Complete Molecule List
        </Heading>

        <div className="space-y-3">
          {molecules.map((molecule) => (
            <div
              key={molecule.name}
              className="rounded-lg border border-neutral-200 bg-white p-4"
            >
              <Code variant="inline" className="mb-2">
                {molecule.name}
              </Code>
              <Text variant="body" className="mb-2 mt-2">
                {molecule.description}
              </Text>
              <div className="space-y-1">
                <Text variant="small" className="text-neutral-600">
                  <strong>Composition:</strong> {molecule.composition}
                </Text>
                <Text variant="small" className="text-neutral-600">
                  <strong>Usage:</strong> {molecule.usage}
                </Text>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-sage-200 bg-sage-50 p-6">
          <Heading as="h3" variant="section" className="mb-2">
            Design Philosophy
          </Heading>
          <Text variant="body" className="mb-4">
            Molecules should be:
          </Text>
          <ul className="list-disc space-y-1 pl-6 text-sm">
            <li>
              <strong>Single-purpose:</strong> Each molecule solves one specific
              problem
            </li>
            <li>
              <strong>Reusable:</strong> Used in multiple contexts across the
              site
            </li>
            <li>
              <strong>Composable:</strong> Can be combined into larger organisms
            </li>
            <li>
              <strong>Self-contained:</strong> Manages its own state and styling
            </li>
          </ul>
        </div>
      </section>
    </DocsLayout>
  );
}
