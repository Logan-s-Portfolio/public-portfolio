/**
 * Component API Design Page (/docs/design-system/architecture/api-design)
 *
 * Documentation of component API patterns and TypeScript best practices.
 * CVA for variants, prop patterns, compound components.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Code } from "@/components/atoms/Code";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Component API Design | Design System",
  description:
    "Type-safe component APIs with CVA, prop patterns, and TypeScript best practices",
};

export default function APIDesignPage() {
  const breadcrumbs = [
    { label: "Design System", href: "/docs/design-system" },
    { label: "Architecture", href: "/docs/design-system/architecture" },
    { label: "API Design", href: "/docs/design-system/architecture/api-design" },
  ];

  return (
    <DocsLayout
      currentPath="/docs/design-system/architecture/api-design"
      breadcrumbs={breadcrumbs}
      pageTitle="Component API Design"
    >
      <section className="space-y-8">
        <Text variant="lead">
          Well-designed component APIs make components predictable, type-safe,
          and delightful to use. This design system uses CVA for variants,
          strict TypeScript, and thoughtful prop patterns.
        </Text>

        <div className="rounded-xl border border-terracotta-200 bg-terracotta-50 p-6">
          <Text variant="body" className="font-semibold">
            🛠️ Type-Safe Component APIs
          </Text>
          <Text variant="small" className="mt-2 text-neutral-700">
            Every component is fully typed with TypeScript strict mode. Variants
            are type-safe with class-variance-authority (CVA), ensuring you
            can't pass invalid props.
          </Text>
        </div>

        <div id="cva">
          <Heading as="h2" variant="title">
            CVA Pattern (class-variance-authority)
          </Heading>
          <Text variant="body" className="mt-4">
            CVA provides type-safe variants for components. Define variants
            once, get autocomplete and type safety everywhere:
          </Text>
          <Code variant="block" className="mt-4">
            {`import { cva, type VariantProps } from "class-variance-authority";

// Define button variants with CVA
const buttonVariants = cva(
  // Base styles (always applied)
  "inline-flex items-center justify-center rounded-md font-medium transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-terracotta-600 text-white hover:bg-terracotta-700",
        secondary: "bg-sage-600 text-white hover:bg-sage-700",
        outline: "border-2 border-terracotta-600 text-terracotta-600 hover:bg-terracotta-50",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-10 px-6 text-base",
        lg: "h-12 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

// Extract variant types for TypeScript
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

// Component implementation
export const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
};

// Usage - fully type-safe!
<Button variant="primary" size="md">Click Me</Button>
<Button variant="outline" size="lg">Click Me</Button>
// <Button variant="invalid"> // ❌ TypeScript error!`}
          </Code>

          <Text variant="body" className="mt-6">
            <strong>Benefits of CVA:</strong>
          </Text>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>
              <strong>Type safety:</strong> Autocomplete for valid variants
            </li>
            <li>
              <strong>Consistency:</strong> Variants defined in one place
            </li>
            <li>
              <strong>Composability:</strong> Combine variants easily
            </li>
            <li>
              <strong>Performance:</strong> No runtime overhead
            </li>
          </ul>
        </div>

        <div id="props">
          <Heading as="h2" variant="title">
            Prop Patterns
          </Heading>

          <div className="mt-6 space-y-6">
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <Heading as="h3" variant="section" className="mb-2">
                1. Variant Props (Common Pattern)
              </Heading>
              <Text variant="body" className="mb-3">
                Most components accept <Code variant="inline">variant</Code> and{" "}
                <Code variant="inline">size</Code> props:
              </Text>
              <Code variant="block">
                {`// Standard variant pattern
<Button variant="primary" size="md" />
<Badge variant="success" />
<Heading variant="hero" />
<Text variant="body" />`}
              </Code>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <Heading as="h3" variant="section" className="mb-2">
                2. Polymorphic "as" Prop
              </Heading>
              <Text variant="body" className="mb-3">
                Heading and Text components accept <Code variant="inline">as</Code>{" "}
                for semantic HTML:
              </Text>
              <Code variant="block">
                {`// Polymorphic heading
<Heading as="h1" variant="hero">Page Title</Heading>
<Heading as="h2" variant="title">Section</Heading>
<Heading as="h3" variant="section">Subsection</Heading>

// Polymorphic text
<Text as="p" variant="body">Paragraph</Text>
<Text as="span" variant="small">Inline text</Text>`}
              </Code>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <Heading as="h3" variant="section" className="mb-2">
                3. Boolean Flags
              </Heading>
              <Text variant="body" className="mb-3">
                Use boolean props for simple toggles:
              </Text>
              <Code variant="block">
                {`<Button disabled>Disabled Button</Button>
<Input error="Required field" />
<Link external href="...">External Link</Link>`}
              </Code>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <Heading as="h3" variant="section" className="mb-2">
                4. Children Pattern
              </Heading>
              <Text variant="body" className="mb-3">
                Most components accept children for flexibility:
              </Text>
              <Code variant="block">
                {`// Children pattern
<Card>
  <Heading>Title</Heading>
  <Text>Body content</Text>
</Card>

// Named slots (compound components)
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Actions</Card.Footer>
</Card>`}
              </Code>
            </div>
          </div>
        </div>

        <div id="typescript">
          <Heading as="h2" variant="title">
            TypeScript Best Practices
          </Heading>
          <Text variant="body" className="mt-4">
            All components follow strict TypeScript patterns:
          </Text>
          <Code variant="block" className="mt-4">
            {`// 1. Extend native HTML props
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

// 2. Use discriminated unions for complex props
export type ContentBlock =
  | { type: "text"; content: React.ReactNode }
  | { type: "code"; content: string }
  | { type: "image"; content: { src: string; alt: string } };

// 3. Make children explicit
export interface CardProps {
  children: React.ReactNode; // Required
  className?: string;         // Optional
}

// 4. Use proper generics for polymorphic components
export interface HeadingProps<T extends React.ElementType = "h2"> {
  as?: T;
  variant?: "hero" | "title" | "section";
  children: React.ReactNode;
}

export const Heading = <T extends React.ElementType = "h2">({
  as,
  variant,
  children,
  ...props
}: HeadingProps<T>) => {
  const Component = as || "h2";
  return <Component {...props}>{children}</Component>;
};

// 5. Export prop types for composition
export type { ButtonProps, HeadingProps, CardProps };`}
          </Code>
        </div>

        <div id="composition">
          <Heading as="h2" variant="title">
            Component Composition Patterns
          </Heading>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <Heading as="h3" variant="section" className="mb-2">
                Simple Composition
              </Heading>
              <Text variant="body" className="mb-3">
                Pass components as children:
              </Text>
              <Code variant="block">
                {`<Card>
  <Heading>Title</Heading>
  <Text>Body</Text>
  <Button>Action</Button>
</Card>`}
              </Code>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <Heading as="h3" variant="section" className="mb-2">
                Compound Components
              </Heading>
              <Text variant="body" className="mb-3">
                Named sub-components for complex patterns:
              </Text>
              <Code variant="block">
                {`// Card.tsx
export const Card = ({ children }) => <div>{children}</div>;
Card.Header = ({ children }) => <header>{children}</header>;
Card.Body = ({ children }) => <div>{children}</div>;
Card.Footer = ({ children }) => <footer>{children}</footer>;

// Usage
<Card>
  <Card.Header>Header</Card.Header>
  <Card.Body>Body</Card.Body>
  <Card.Footer>Footer</Card.Footer>
</Card>`}
              </Code>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <Heading as="h3" variant="section" className="mb-2">
                Render Props
              </Heading>
              <Text variant="body" className="mb-3">
                Pass render functions for dynamic content:
              </Text>
              <Code variant="block">
                {`<ProjectGrid
  projects={projects}
  renderProject={(project) => (
    <ProjectCard key={project.id} {...project} />
  )}
/>`}
              </Code>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-sage-200 bg-sage-50 p-6">
          <Heading as="h3" variant="section" className="mb-2">
            API Design Principles
          </Heading>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-sm">
            <li>
              <strong>Predictable:</strong> Similar components have similar APIs
            </li>
            <li>
              <strong>Type-safe:</strong> TypeScript catches errors at compile
              time
            </li>
            <li>
              <strong>Composable:</strong> Components work together naturally
            </li>
            <li>
              <strong>Documented:</strong> Props explained with JSDoc comments
            </li>
            <li>
              <strong>Minimal:</strong> Only expose props that are truly needed
            </li>
          </ul>
        </div>
      </section>
    </DocsLayout>
  );
}
