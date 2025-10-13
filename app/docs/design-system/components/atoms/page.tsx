/**
 * Atoms Page (/docs/design-system/components/atoms)
 *
 * Documentation of all atomic components - the building blocks.
 * 19 atoms total: buttons, text, inputs, etc.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Code } from "@/components/atoms/Code";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atoms | Design System",
  description:
    "Atomic components - the smallest building blocks of the design system",
};

export default function AtomsPage() {
  const breadcrumbs = [
    { label: "Design System", href: "/docs/design-system" },
    { label: "Components", href: "/docs/design-system/components" },
    { label: "Atoms", href: "/docs/design-system/components/atoms" },
  ];

  const atoms = [
    {
      name: "Button",
      description:
        "Primary interactive element with variants (primary, secondary, outline) and sizes",
      props: "variant, size, disabled, className",
      storybook: "View in Storybook →",
    },
    {
      name: "Link",
      description:
        "Text link with underline animation and external link detection",
      props: "href, variant, external, className",
      storybook: "View in Storybook →",
    },
    {
      name: "Heading",
      description:
        "Semantic heading with Fraunces font and size variants (hero, title, section)",
      props: "as, variant, className",
      storybook: "View in Storybook →",
    },
    {
      name: "Text",
      description:
        "Body text with Inter font and variants (lead, body, small, tiny)",
      props: "variant, className",
      storybook: "View in Storybook →",
    },
    {
      name: "Badge",
      description: "Small label with color variants for status/categories",
      props: "variant, className",
      storybook: "View in Storybook →",
    },
    {
      name: "Tag",
      description: "Interactive tag with hover states, similar to Badge",
      props: "variant, className",
      storybook: "View in Storybook →",
    },
    {
      name: "Avatar",
      description: "User avatar with image fallback and size variants",
      props: "src, alt, size, fallback, className",
      storybook: "View in Storybook →",
    },
    {
      name: "Image",
      description: "Next.js optimized image with loading states",
      props: "src, alt, width, height, className",
      storybook: "View in Storybook →",
    },
    {
      name: "Code",
      description:
        "Inline and block code with syntax highlighting (inline, block variants)",
      props: "variant, className",
      storybook: "View in Storybook →",
    },
    {
      name: "Divider",
      description: "Horizontal rule for section separation",
      props: "className",
      storybook: "View in Storybook →",
    },
    {
      name: "IconButton",
      description: "Button with icon only, accessible with aria-label",
      props: "icon, ariaLabel, variant, size, className",
      storybook: "View in Storybook →",
    },
    {
      name: "Input",
      description: "Text input with validation states and types",
      props: "type, placeholder, error, disabled, className",
      storybook: "View in Storybook →",
    },
    {
      name: "Label",
      description: "Form label with required indicator",
      props: "htmlFor, required, className",
      storybook: "View in Storybook →",
    },
    {
      name: "Checkbox",
      description: "Checkbox input with custom styling",
      props: "checked, disabled, onChange, className",
      storybook: "View in Storybook →",
    },
    {
      name: "Select",
      description: "Dropdown select with custom styling",
      props: "options, value, onChange, disabled, className",
      storybook: "View in Storybook →",
    },
    {
      name: "Spinner",
      description: "Loading spinner with size variants",
      props: "size, className",
      storybook: "View in Storybook →",
    },
    {
      name: "Skeleton",
      description: "Loading skeleton placeholder with animation",
      props: "variant, className",
      storybook: "View in Storybook →",
    },
    {
      name: "ProgressBar",
      description: "Progress indicator with percentage",
      props: "value, max, className",
      storybook: "View in Storybook →",
    },
  ];

  return (
    <DocsLayout
      currentPath="/docs/design-system/components/atoms"
      breadcrumbs={breadcrumbs}
      pageTitle="Atoms"
    >
      <section className="space-y-8">
        <Text variant="lead">
          Atoms are the smallest building blocks - buttons, text, inputs, and
          other basic HTML elements. These cannot be broken down further without
          losing their function.
        </Text>

        <div className="rounded-xl border border-terracotta-200 bg-terracotta-50 p-6">
          <Text variant="body" className="font-semibold">
            📚 19 Atomic Components
          </Text>
          <Text variant="small" className="mt-2 text-neutral-700">
            All atoms are documented in Storybook with interactive examples,
            prop tables, and accessibility notes. Each component is fully
            typed with TypeScript.
          </Text>
        </div>

        <Heading as="h2" variant="title">
          Live Examples
        </Heading>

        <div className="space-y-4">
          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <Heading as="h3" variant="section" className="mb-4">
              Button Component
            </Heading>
            <div className="mb-4 flex flex-wrap gap-4">
              <Button variant="primary" size="md">
                Primary
              </Button>
              <Button variant="secondary" size="md">
                Secondary
              </Button>
              <Button variant="outline" size="md">
                Outline
              </Button>
            </div>
            <Code variant="block">
              {`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>`}
            </Code>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <Heading as="h3" variant="section" className="mb-4">
              Badge Component
            </Heading>
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
            </div>
            <Code variant="block">
              {`<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>`}
            </Code>
          </div>
        </div>

        <Heading as="h2" variant="title">
          Complete Atom List
        </Heading>

        <div className="space-y-3">
          {atoms.map((atom) => (
            <div
              key={atom.name}
              className="rounded-lg border border-neutral-200 bg-white p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <Code variant="inline">{atom.name}</Code>
                <Text variant="small" className="text-terracotta-600">
                  {atom.storybook}
                </Text>
              </div>
              <Text variant="body" className="mb-2">
                {atom.description}
              </Text>
              <Text variant="small" className="text-neutral-600">
                <strong>Props:</strong> {atom.props}
              </Text>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-sage-200 bg-sage-50 p-6">
          <Heading as="h3" variant="section" className="mb-2">
            View in Storybook
          </Heading>
          <Text variant="body">
            All atoms have interactive Storybook stories with controls, prop
            tables, and accessibility validation. Run{" "}
            <Code variant="inline">pnpm run storybook</Code> to explore.
          </Text>
        </div>
      </section>
    </DocsLayout>
  );
}
