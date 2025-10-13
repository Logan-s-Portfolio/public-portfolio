/**
 * Next.js + React Skill Page (/skills/nextjs-react)
 *
 * Deep dive into Next.js and React expertise.
 * Shows examples, patterns, and approach.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Code } from "@/components/atoms/Code";
import { Badge } from "@/components/atoms/Badge";
import { Link } from "@/components/atoms/Link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js + React | Skills",
  description:
    "Modern web applications with server-side rendering, App Router, and React patterns",
};

export default function NextJsReactSkillPage() {
  const breadcrumbs = [
    { label: "Skills", href: "/skills" },
    { label: "Next.js + React", href: "/skills/nextjs-react" },
  ];

  return (
    <DocsLayout
      currentPath="/skills/nextjs-react"
      breadcrumbs={breadcrumbs}
      pageTitle="Next.js + React"
    >
      {/* Overview */}
      <section className="mb-12">
        <div className="mb-6 flex items-center gap-4">
          <span className="text-5xl" aria-hidden="true">
            ⚛️
          </span>
          <div>
            <Text variant="lead" className="mb-2">
              Modern web applications with server-side rendering and App Router
            </Text>
            <Badge variant="sage" size="sm">
              4+ years
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
            href="/"
            className="group block overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="aspect-video w-full overflow-hidden bg-neutral-100">
              <img
                src="https://placehold.co/600x400/B85032/FFFFFF?text=Next.js+Portfolio"
                alt="This Portfolio (Next.js 15 + App Router)"
                className="h-full w-full object-cover transition-transform duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <Heading
                as="h3"
                variant="section"
                className="mb-3 font-fraunces text-xl font-semibold text-neutral-900"
              >
                This Portfolio (Next.js 15 + App Router)
              </Heading>
              <Text variant="body" className="mb-4 text-neutral-600">
                Full-stack portfolio built with Next.js 15, App Router,
                Tailwind v4, and TypeScript
              </Text>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" size="sm">
                  Next.js 15
                </Badge>
                <Badge variant="outline" size="sm">
                  App Router
                </Badge>
                <Badge variant="outline" size="sm">
                  TypeScript
                </Badge>
                <Badge variant="outline" size="sm">
                  Tailwind v4
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
            I build performant, SEO-friendly web applications using Next.js with
            modern React patterns and TypeScript.
          </Text>

          <Heading as="h3" variant="section" className="mb-4 mt-8">
            App Router (Next.js 13+)
          </Heading>
          <Text variant="body" className="mb-4">
            I leverage the new App Router for better performance and DX:
          </Text>
          <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
            <li>Server Components by default for better performance</li>
            <li>Client Components only when needed (interactivity)</li>
            <li>Streaming with Suspense for progressive loading</li>
            <li>Route handlers for API endpoints</li>
            <li>Metadata API for SEO optimization</li>
          </ul>

          <Heading as="h3" variant="section" className="mb-4 mt-8">
            React Patterns
          </Heading>
          <Text variant="body" className="mb-4">
            I follow modern React best practices:
          </Text>
          <Code variant="block" className="mb-4">
            {`// Compound components pattern
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
</Card>

// Custom hooks for shared logic
const { data, loading } = useProjects();

// Component composition
<Layout>
  <Sidebar />
  <Content />
</Layout>`}
          </Code>

          <Heading as="h3" variant="section" className="mb-4 mt-8">
            Performance Optimization
          </Heading>
          <Text variant="body" className="mb-4">
            I optimize for Core Web Vitals:
          </Text>
          <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
            <li>Image optimization with next/image</li>
            <li>Code splitting with dynamic imports</li>
            <li>Font optimization with next/font</li>
            <li>Server-side rendering for critical content</li>
            <li>Static generation when possible</li>
          </ul>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-6">
          My Approach
        </Heading>
        <div className="space-y-6">
          <Text variant="body" className="mb-4">
            <strong>Server-First Mindset:</strong> I leverage Server Components
            for better performance, using Client Components only when
            interactivity is needed.
          </Text>
          <Text variant="body" className="mb-4">
            <strong>Type Safety Everywhere:</strong> I use TypeScript strictly,
            with proper interfaces and type inference for maintainability.
          </Text>
          <Text variant="body">
            <strong>Component Architecture:</strong> I build reusable,
            composable components following Atomic Design principles.
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
              href="/skills/claude-code"
              className="font-inter text-base text-terracotta-600 transition-colors hover:text-terracotta-700"
            >
              Claude Code →
            </Link>
          </li>
          <li>
            <Link
              href="/skills/accessibility"
              className="font-inter text-base text-terracotta-600 transition-colors hover:text-terracotta-700"
            >
              Accessibility →
            </Link>
          </li>
        </ul>
      </section>
    </DocsLayout>
  );
}
