/**
 * Organisms Page (/docs/design-system/components/organisms)
 *
 * Documentation of organism components - complex sections combining molecules and atoms.
 * 16 organisms total: navbar, footer, grids, sections.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Code } from "@/components/atoms/Code";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organisms | Design System",
  description:
    "Organism components - complex sections combining molecules and atoms",
};

export default function OrganismsPage() {
  const breadcrumbs = [
    { label: "Design System", href: "/docs/design-system" },
    { label: "Components", href: "/docs/design-system/components" },
    { label: "Organisms", href: "/docs/design-system/components/organisms" },
  ];

  const organisms = [
    {
      name: "Navbar",
      description:
        "Main navigation with logo, nav items, mobile menu, and theme toggle. Sticky with scroll behavior.",
      complexity: "High",
      contains: "Logo + NavItem[] + ThemeToggle + MobileNav",
    },
    {
      name: "MobileNav",
      description:
        "Slide-out mobile navigation with overlay and close button. Manages focus trap.",
      complexity: "High",
      contains: "IconButton + NavItem[] + Overlay",
    },
    {
      name: "Footer",
      description:
        "Site footer with navigation columns, social links, and copyright. Responsive layout.",
      complexity: "Medium",
      contains: "Heading + Link[] + SocialLink[] + Text",
    },
    {
      name: "Hero",
      description:
        "Large hero section with heading, tagline, CTA buttons, and optional background animation.",
      complexity: "Medium",
      contains: "Heading + Text + Button[] + AnimatedBackground (optional)",
    },
    {
      name: "AboutSection",
      description:
        "About section with bio, image, stats cards, and skill highlights.",
      complexity: "Medium",
      contains: "Heading + Text + Image + StatCard[] + SkillBadge[]",
    },
    {
      name: "ProjectGrid",
      description:
        "Responsive grid of project cards with filtering and sorting capabilities.",
      complexity: "Medium",
      contains: "ProjectCard[] + Dropdown (filter) + Button (sort)",
    },
    {
      name: "ProjectShowcase",
      description:
        "Featured project showcase with large image, description, and detailed info.",
      complexity: "Medium",
      contains: "Heading + Text + Image + Badge[] + Button[]",
    },
    {
      name: "CaseStudyHero",
      description:
        "Case study hero with full-width image, title, tagline, tags, and breadcrumbs.",
      complexity: "Medium",
      contains: "Image + Heading + Text + Badge[] + BreadcrumbItem[]",
    },
    {
      name: "CaseStudyContent",
      description:
        "Content sections with headings, text, images, code blocks, and grid layouts.",
      complexity: "High",
      contains: "Heading + Text + Image + Code + various layouts",
    },
    {
      name: "TestimonialsSection",
      description:
        "Section displaying multiple testimonials in a grid or carousel layout.",
      complexity: "Medium",
      contains: "Heading + TestimonialCard[] + navigation controls",
    },
    {
      name: "SkillsShowcase",
      description:
        "Skills display with categorization, proficiency levels, and descriptions.",
      complexity: "Medium",
      contains: "Heading + SkillCard[] + Dropdown (filter)",
    },
    {
      name: "TimelineSection",
      description:
        "Vertical timeline with milestones, dates, titles, and descriptions.",
      complexity: "Medium",
      contains: "Heading + Timeline items (Text + Heading + Date)",
    },
    {
      name: "ContactForm",
      description:
        "Contact form with validation, success/error states, and submission handling.",
      complexity: "High",
      contains:
        "Heading + FormField[] + TextArea + CheckboxField + Button + validation",
    },
    {
      name: "AnimatedBackground",
      description:
        "Animated background with floating particles or gradient animations.",
      complexity: "Low",
      contains: "Canvas or SVG animations",
    },
    {
      name: "FloatingElements",
      description:
        "Decorative floating elements with parallax scrolling effects.",
      complexity: "Low",
      contains: "Positioned divs with CSS animations",
    },
    {
      name: "ScrollAnimationSection",
      description:
        "Section with scroll-triggered animations (fade-in, slide-in, etc.).",
      complexity: "Medium",
      contains: "Any content with IntersectionObserver animations",
    },
  ];

  return (
    <DocsLayout
      currentPath="/docs/design-system/components/organisms"
      breadcrumbs={breadcrumbs}
      pageTitle="Organisms"
    >
      <section className="space-y-8">
        <Text variant="lead">
          Organisms are complex UI components composed of molecules and atoms.
          They form distinct sections of the interface like navigation bars,
          hero sections, and form groups.
        </Text>

        <div className="rounded-xl border border-terracotta-200 bg-terracotta-50 p-6">
          <Text variant="body" className="font-semibold">
            🦠 16 Organism Components
          </Text>
          <Text variant="small" className="mt-2 text-neutral-700">
            Organisms are relatively complex, often managing state and
            interactions. They combine molecules and atoms to form complete
            sections like navigation, hero areas, and content grids.
          </Text>
        </div>

        <Heading as="h2" variant="title">
          Composition Example
        </Heading>
        <Code variant="block" className="mt-4">
          {`// Navbar organism composition
<Navbar>
  <Logo />              // Atom (Image + Link)
  <NavItem[] />         // Molecules (Link + Text + Icon)
  <ThemeToggle />       // Molecule (IconButton + state)
  <MobileNavTrigger />  // Molecule (IconButton)
</Navbar>

// ProjectGrid organism composition
<ProjectGrid projects={projects}>
  <Dropdown />          // Molecule (filter)
  <Button />            // Atom (sort)
  <ProjectCard[] />     // Molecules (rendered for each project)
</ProjectGrid>`}
        </Code>

        <Heading as="h2" variant="title">
          Complete Organism List
        </Heading>

        <div className="space-y-3">
          {organisms.map((organism) => (
            <div
              key={organism.name}
              className="rounded-lg border border-neutral-200 bg-white p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <Code variant="inline">{organism.name}</Code>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    organism.complexity === "High"
                      ? "bg-terracotta-100 text-terracotta-700"
                      : organism.complexity === "Medium"
                        ? "bg-sage-100 text-sage-700"
                        : "bg-neutral-100 text-neutral-700"
                  }`}
                >
                  {organism.complexity} Complexity
                </span>
              </div>
              <Text variant="body" className="mb-2">
                {organism.description}
              </Text>
              <Text variant="small" className="text-neutral-600">
                <strong>Contains:</strong> {organism.contains}
              </Text>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-sage-200 bg-sage-50 p-6">
          <Heading as="h3" variant="section" className="mb-2">
            Organism Characteristics
          </Heading>
          <Text variant="body" className="mb-4">
            Organisms should:
          </Text>
          <ul className="list-disc space-y-1 pl-6 text-sm">
            <li>
              <strong>Form distinct sections:</strong> Navbar, footer, hero,
              content areas
            </li>
            <li>
              <strong>Manage complexity:</strong> Handle interactions, state,
              and data
            </li>
            <li>
              <strong>Be context-aware:</strong> Adapt to their position and
              content
            </li>
            <li>
              <strong>Compose smaller components:</strong> Built from molecules
              and atoms
            </li>
          </ul>
        </div>
      </section>
    </DocsLayout>
  );
}
