/**
 * Atomic Design Page (/docs/design-system/architecture/atomic-design)
 *
 * Documentation of Atomic Design methodology and how it's implemented.
 * Explains Brad Frost's 5-stage approach and component composition.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Code } from "@/components/atoms/Code";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atomic Design | Design System",
  description:
    "How this portfolio implements Brad Frost's Atomic Design methodology",
};

export default function AtomicDesignPage() {
  const breadcrumbs = [
    { label: "Design System", href: "/docs/design-system" },
    { label: "Architecture", href: "/docs/design-system/architecture" },
    { label: "Atomic Design", href: "/docs/design-system/architecture/atomic-design" },
  ];

  return (
    <DocsLayout
      currentPath="/docs/design-system/architecture/atomic-design"
      breadcrumbs={breadcrumbs}
      pageTitle="Atomic Design Methodology"
    >
      <section className="space-y-8">
        <Text variant="lead">
          Atomic Design is a methodology for creating design systems by breaking
          interfaces down into fundamental building blocks. Created by Brad
          Frost, it provides a mental model for thinking about UI composition.
        </Text>

        <div id="what-is">
          <Heading as="h2" variant="title">
            What is Atomic Design?
          </Heading>
          <Text variant="body" className="mt-4">
            Atomic Design is inspired by chemistry. Just as atoms combine into
            molecules, molecules combine into organisms, and organisms form
            complete systems - UI components follow the same pattern.
          </Text>
          <div className="mt-6 rounded-xl border border-terracotta-200 bg-terracotta-50 p-6">
            <Text variant="body" className="font-semibold">
              The Chemistry Metaphor
            </Text>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm">
              <li>
                <strong>Atoms:</strong> Basic building blocks (button, input,
                heading)
              </li>
              <li>
                <strong>Molecules:</strong> Simple groups of atoms (form field =
                label + input + error)
              </li>
              <li>
                <strong>Organisms:</strong> Complex assemblies (navbar = logo +
                nav items + search)
              </li>
              <li>
                <strong>Templates:</strong> Page structures with placeholders
              </li>
              <li>
                <strong>Pages:</strong> Templates filled with real content
              </li>
            </ul>
          </div>
        </div>

        <div id="five-stages">
          <Heading as="h2" variant="title">
            The Five Stages
          </Heading>

          <div className="mt-6 space-y-6">
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <Heading as="h3" variant="section" className="mb-2">
                1. Atoms (19 components)
              </Heading>
              <Text variant="body" className="mb-3">
                Smallest building blocks - cannot be broken down further without
                losing function.
              </Text>
              <Code variant="inline">
                Button, Link, Heading, Text, Input, Badge, etc.
              </Code>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <Heading as="h3" variant="section" className="mb-2">
                2. Molecules (15 components)
              </Heading>
              <Text variant="body" className="mb-3">
                Simple combinations of atoms that work together as a unit.
              </Text>
              <Code variant="block">
                {`// FormField molecule
<FormField>
  <Label />      // Atom
  <Input />      // Atom
  <Text />       // Atom (error message)
</FormField>`}
              </Code>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <Heading as="h3" variant="section" className="mb-2">
                3. Organisms (16 components)
              </Heading>
              <Text variant="body" className="mb-3">
                Complex components built from molecules and atoms. Form distinct
                interface sections.
              </Text>
              <Code variant="block">
                {`// Navbar organism
<Navbar>
  <Logo />              // Atom
  <NavItem[] />         // Molecules
  <ThemeToggle />       // Molecule
  <MobileNavTrigger />  // Molecule
</Navbar>`}
              </Code>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <Heading as="h3" variant="section" className="mb-2">
                4. Templates (6 layouts)
              </Heading>
              <Text variant="body" className="mb-3">
                Page-level layouts that place organisms into structure. Define
                content hierarchy.
              </Text>
              <Code variant="block">
                {`// CaseStudyLayout template
<CaseStudyLayout>
  <CaseStudyHero />      // Organism
  <CaseStudyContent />   // Organism
  <TimelineSection />    // Organism
  <TestimonialCard />    // Molecule
</CaseStudyLayout>`}
              </Code>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <Heading as="h3" variant="section" className="mb-2">
                5. Pages (15 pages)
              </Heading>
              <Text variant="body" className="mb-3">
                Templates filled with real content. What users actually see and
                interact with.
              </Text>
              <Code variant="inline">
                Home, About, Case Studies, Skills, Design System docs, etc.
              </Code>
            </div>
          </div>
        </div>

        <div id="benefits">
          <Heading as="h2" variant="title">
            Benefits of Atomic Design
          </Heading>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              <strong>Consistency:</strong> Reusable components ensure visual and
              functional consistency
            </li>
            <li>
              <strong>Scalability:</strong> Easy to add new pages by composing
              existing components
            </li>
            <li>
              <strong>Maintainability:</strong> Update once, reflect everywhere
            </li>
            <li>
              <strong>Testability:</strong> Test small components in isolation
            </li>
            <li>
              <strong>Shared Language:</strong> Designers and developers speak
              the same language
            </li>
            <li>
              <strong>Predictable:</strong> Clear hierarchy makes it obvious
              where new components belong
            </li>
          </ul>
        </div>

        <div id="implementation">
          <Heading as="h2" variant="title">
            Implementation in This Portfolio
          </Heading>
          <Text variant="body" className="mt-4">
            This portfolio strictly follows Atomic Design:
          </Text>
          <Code variant="block" className="mt-4">
            {`// File structure mirrors Atomic Design
components/
├── atoms/           // 19 basic components
│   ├── Button.tsx
│   ├── Heading.tsx
│   └── ...
├── molecules/       // 15 composite components
│   ├── ProjectCard.tsx
│   ├── FormField.tsx
│   └── ...
├── organisms/       // 16 complex sections
│   ├── Navbar.tsx
│   ├── ProjectGrid.tsx
│   └── ...
└── templates/       // 6 page layouts
    ├── PageLayout.tsx
    ├── CaseStudyLayout.tsx
    └── ...

app/                 // 15 pages (Next.js App Router)
├── page.tsx
├── about/page.tsx
├── case-studies/
└── ...`}
          </Code>

          <Text variant="body" className="mt-6">
            <strong>Composition Example:</strong>
          </Text>
          <Code variant="block" className="mt-4">
            {`// Building a case study page from atoms up
Page: /case-studies/austin-power-alert
└─ CaseStudyLayout (template)
   ├─ CaseStudyHero (organism)
   │  ├─ Image (atom)
   │  ├─ Heading (atom)
   │  ├─ Text (atom)
   │  ├─ Badge[] (atoms)
   │  └─ BreadcrumbItem[] (molecules)
   ├─ CaseStudyContent (organism)
   │  ├─ Heading (atom)
   │  ├─ Text (atom)
   │  ├─ Code (atom)
   │  └─ Image (atom)
   ├─ TimelineSection (organism)
   │  └─ Timeline items (molecules)
   └─ TestimonialCard (molecule)
      ├─ Text (atom)
      ├─ Avatar (atom)
      └─ Heading + Text (atoms)

Result: A complete, consistent, maintainable page`}
          </Code>
        </div>

        <div className="mt-8 rounded-xl border border-sage-200 bg-sage-50 p-6">
          <Heading as="h3" variant="section" className="mb-2">
            Learn More
          </Heading>
          <Text variant="body">
            Read Brad Frost's original book:{" "}
            <a
              href="https://atomicdesign.bradfrost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta-600 underline hover:text-terracotta-700"
            >
              Atomic Design by Brad Frost
            </a>
          </Text>
        </div>
      </section>
    </DocsLayout>
  );
}
