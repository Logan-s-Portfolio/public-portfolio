/**
 * Templates Page (/docs/design-system/components/templates)
 *
 * Documentation of template components - page layouts combining organisms.
 * 6 templates total: page layouts for different content types.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Code } from "@/components/atoms/Code";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Templates | Design System",
  description:
    "Template components - page layouts combining organisms for specific content types",
};

export default function TemplatesPage() {
  const breadcrumbs = [
    { label: "Design System", href: "/docs/design-system" },
    { label: "Components", href: "/docs/design-system/components" },
    { label: "Templates", href: "/docs/design-system/components/templates" },
  ];

  const templates = [
    {
      name: "PageLayout",
      description:
        "Base layout wrapper with Navbar, Footer, and main content area. Used by all pages.",
      structure: "Navbar + <children> + Footer",
      props: "children, currentPath, maxWidth",
      usedBy: "All pages (universal wrapper)",
    },
    {
      name: "HomeLayout",
      description:
        "Homepage template with hero, about section, featured projects, and CTA.",
      structure: "Hero + AboutSection + ProjectShowcase + CTA",
      props: "heroData, aboutData, projects",
      usedBy: "/ (homepage)",
    },
    {
      name: "ContentLayout",
      description:
        "Simple content layout with page title, subtitle, breadcrumbs, and prose-width content.",
      structure: "Breadcrumbs + Heading + Text + <children>",
      props: "title, subtitle, breadcrumbs, children",
      usedBy: "About, Contact, Skills Hub, Case Studies Hub",
    },
    {
      name: "CaseStudyLayout",
      description:
        "Case study template with hero, content sections, timeline, testimonial, and navigation.",
      structure:
        "CaseStudyHero + CaseStudyContent + TimelineSection + TestimonialCard + nav",
      props: "caseStudyData, navigation",
      usedBy: "All case study pages (/case-studies/*)",
    },
    {
      name: "SkillLayout",
      description:
        "Skill detail template with skill info, examples, approach, and related skills.",
      structure: "Heading + SkillCard + examples + approach + related",
      props: "skillData",
      usedBy: "All skill pages (/skills/*)",
    },
    {
      name: "DesignSystemLayout",
      description:
        "Stripe Docs-style layout with left sidebar TOC, main content, and optional right mini-TOC.",
      structure: "Sidebar (TOC) + Breadcrumbs + Heading + <children> + MiniTOC",
      props: "breadcrumbs, pageTitle, tableOfContents, miniTOC, children",
      usedBy: "All design system pages (/design-system/*)",
    },
  ];

  return (
    <DocsLayout
      currentPath="/docs/design-system/components/templates"
      breadcrumbs={breadcrumbs}
      pageTitle="Templates"
    >
      <section className="space-y-8">
        <Text variant="lead">
          Templates are page-level objects that place organisms and molecules
          into a layout structure. They define content hierarchy and layout
          patterns for specific page types.
        </Text>

        <div className="rounded-xl border border-terracotta-200 bg-terracotta-50 p-6">
          <Text variant="body" className="font-semibold">
            📄 6 Template Layouts
          </Text>
          <Text variant="small" className="mt-2 text-neutral-700">
            Templates define the page structure and content flow. They combine
            organisms into cohesive layouts optimized for specific content
            types (homepage, case study, skill detail, etc.).
          </Text>
        </div>

        <Heading as="h2" variant="title">
          Template Hierarchy
        </Heading>
        <Text variant="body">
          All pages follow this composition pattern:
        </Text>
        <Code variant="block" className="mt-4">
          {`// All pages use PageLayout as the base
<PageLayout>
  <Navbar />           // Universal (all pages)
  <main>
    <Template>         // Specific template for page type
      <Organisms />    // Content sections
    </Template>
  </main>
  <Footer />           // Universal (all pages)
</PageLayout>

// Example: Case study page
<PageLayout currentPath="/case-studies/example">
  <Navbar />
  <main>
    <CaseStudyLayout caseStudyData={data}>
      <CaseStudyHero />
      <CaseStudyContent />
      <TimelineSection />
      <TestimonialCard />
    </CaseStudyLayout>
  </main>
  <Footer />
</PageLayout>`}
        </Code>

        <Heading as="h2" variant="title">
          Complete Template List
        </Heading>

        <div className="space-y-3">
          {templates.map((template) => (
            <div
              key={template.name}
              className="rounded-lg border border-neutral-200 bg-white p-4"
            >
              <Code variant="inline" className="mb-2">
                {template.name}
              </Code>
              <Text variant="body" className="mb-3 mt-2">
                {template.description}
              </Text>
              <div className="space-y-2">
                <div className="rounded-md bg-neutral-50 p-3">
                  <Text variant="small" className="font-semibold text-neutral-700">
                    Structure
                  </Text>
                  <Code variant="inline" className="mt-1 text-xs">
                    {template.structure}
                  </Code>
                </div>
                <Text variant="small" className="text-neutral-600">
                  <strong>Props:</strong> {template.props}
                </Text>
                <Text variant="small" className="text-neutral-600">
                  <strong>Used by:</strong> {template.usedBy}
                </Text>
              </div>
            </div>
          ))}
        </div>

        <Heading as="h2" variant="title">
          Template Best Practices
        </Heading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Content-specific:</strong> Each template is optimized for a
            specific content type
          </li>
          <li>
            <strong>Reusable structure:</strong> Same template used across
            similar pages
          </li>
          <li>
            <strong>Props over hardcoding:</strong> Accept data as props rather
            than hardcoding content
          </li>
          <li>
            <strong>Composition:</strong> Templates compose organisms, not
            atoms/molecules directly
          </li>
          <li>
            <strong>Responsive:</strong> All templates adapt to mobile, tablet,
            desktop viewports
          </li>
        </ul>

        <div className="mt-8 rounded-xl border border-sage-200 bg-sage-50 p-6">
          <Heading as="h3" variant="section" className="mb-2">
            Creating New Templates
          </Heading>
          <Text variant="body" className="mb-4">
            When creating a new template, consider:
          </Text>
          <ul className="list-disc space-y-1 pl-6 text-sm">
            <li>Is this content type distinct enough to warrant a new template?</li>
            <li>Can I reuse an existing template with different props?</li>
            <li>What organisms does this page type require?</li>
            <li>How should content flow on mobile vs desktop?</li>
          </ul>
        </div>
      </section>
    </DocsLayout>
  );
}
