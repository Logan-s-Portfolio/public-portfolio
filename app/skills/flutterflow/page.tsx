/**
 * Flutterflow Skill Page (/skills/flutterflow)
 *
 * Deep dive into Flutterflow expertise.
 * Shows 5-step process with visual components.
 */

"use client";

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Tag } from "@/components/atoms/Tag";
import { FlutterFlowBuilder } from "@/components/organisms/FlutterFlowBuilder";
import { FirebaseSchemaBuilder } from "@/components/organisms/FirebaseSchemaBuilder";
import { Palette, Package, Sparkles } from "lucide-react";

export default function FlutterflowSkillPage() {
  const breadcrumbs = [
    { label: "FlutterFlow", href: "/skills/flutterflow" },
  ];

  const techStack = [
    { label: "FlutterFlow", variant: "terracotta" as const },
    { label: "Firebase", variant: "sage" as const },
    { label: "Custom Code", variant: "terracotta" as const },
    { label: "AI-Driven", variant: "sage" as const },
    { label: "Cross-Platform", variant: "terracotta" as const },
  ];

  return (
    <DocsLayout
      currentPath="/skills/flutterflow"
      breadcrumbs={breadcrumbs}
    >
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="space-y-6 max-w-4xl">
          <Heading as="h1" variant="display" className="text-neutral-900">
            FlutterFlow: 10x Faster Mobile Development
          </Heading>
          <Text variant="lead" className="text-neutral-600">
            Production-ready mobile apps built at unprecedented speed through visual development, database-first architecture, and AI-driven custom code.
          </Text>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Tag key={tech.label} variant={tech.variant} size="md">
                {tech.label}
              </Tag>
            ))}
          </div>
        </div>

        {/* Narrative: My Approach */}
        <div className="max-w-3xl space-y-4">
          <Heading as="h2" variant="h2">
            My Approach: Database-First, Function-Before-Polish
          </Heading>
          <Text variant="body" className="text-neutral-700">
            FlutterFlow is supremely easier with Firebase. I build production mobile apps in weeks, not months, by following a strict 5-step process that prioritizes schema design, full functionality, and only then visual polish.
          </Text>
          <Text variant="body" className="text-neutral-700">
            The key difference: I treat FlutterFlow as a Flutter code generator, not a no-code toy. Custom functions, Cloud Functions, and AI-assisted Dart code fill the gaps where visual builders fall short.
          </Text>
        </div>

        {/* Section: My 5-Step Process */}
        <div className="max-w-4xl space-y-8">
          <Heading as="h2" variant="h2">
            My 5-Step Process
          </Heading>

          {/* Step 1: Firebase Schema */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta-500 font-bold text-white">
                1
              </div>
              <Heading as="h3" variant="h3">
                Database Schema First (Firebase)
              </Heading>
            </div>
            <Text variant="body" className="text-neutral-700">
              FlutterFlow is supremely easier with Firebase. I lay out the entire database schema first: collections, fields, data types, relationships. This foundation drives everything else.
            </Text>

            <FirebaseSchemaBuilder />

            <div className="rounded-lg bg-sage-50 border-2 border-sage-200 p-4">
              <Text variant="body" className="font-semibold text-sage-900 mb-2">
                Why Firebase-First?
              </Text>
              <ul className="space-y-1 font-inter text-base leading-[1.6] text-sage-700">
                <li>• Real-time data sync out of the box</li>
                <li>• Authentication integration is seamless</li>
                <li>• AI Gen Schema for complex data models</li>
                <li>• Subcollections for nested data relationships</li>
              </ul>
            </div>
          </div>

          {/* Step 2: Wireframe/Storyboard */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-500 font-bold text-white">
                2
              </div>
              <Heading as="h3" variant="h3">
                Wireframe & Storyboard the Entire App
              </Heading>
            </div>
            <Text variant="body" className="text-neutral-700">
              I use FlutterFlow's Storyboard feature to map out every page, navigation flow, and user journey before building. This visual planning prevents rework later.
            </Text>

            <FlutterFlowBuilder highlightStep="storyboard" />

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-terracotta-50 border border-terracotta-200 p-3">
                <Text variant="small" className="font-semibold text-terracotta-900">Widget Palette</Text>
                <Text variant="small" className="text-terracotta-700 mt-1">Drag-and-drop UI components</Text>
              </div>
              <div className="rounded-lg bg-sage-50 border border-sage-200 p-3">
                <Text variant="small" className="font-semibold text-sage-900">Storyboard</Text>
                <Text variant="small" className="text-sage-700 mt-1">Visual app flow mapping</Text>
              </div>
            </div>
          </div>

          {/* Step 3: Make Every Page Functional */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta-500 font-bold text-white">
                3
              </div>
              <Heading as="h3" variant="h3">
                Make Every Page Functional
              </Heading>
            </div>
            <Text variant="body" className="text-neutral-700">
              Core functionality comes before polish. I connect API calls, set up Actions (onTap, onChange), wire up Firestore queries, and implement navigation. Everything works—it just doesn't look perfect yet.
            </Text>

            <FlutterFlowBuilder highlightStep="api-calls" />

            <div className="rounded-lg bg-neutral-100 border border-neutral-200 p-4">
              <Text variant="body" className="font-semibold text-neutral-900 mb-3">
                Functional Layer Checklist
              </Text>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <Text variant="small" className="text-neutral-700">API calls configured</Text>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <Text variant="small" className="text-neutral-700">Actions wired (onTap, etc.)</Text>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <Text variant="small" className="text-neutral-700">Firestore queries working</Text>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <Text variant="small" className="text-neutral-700">Navigation flows complete</Text>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Layer on Design System */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-500 font-bold text-white">
                4
              </div>
              <Heading as="h3" variant="h3">
                Layer on Design System & Custom Components
              </Heading>
            </div>
            <Text variant="body" className="text-neutral-700">
              Now I add the polish: Theme Settings for colors and typography, custom components for reusable patterns, animations, and brand-specific UI elements.
            </Text>

            <FlutterFlowBuilder highlightStep="design" />

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-lg bg-terracotta-50 border border-terracotta-200 p-3 text-center">
                <div className="flex justify-center mb-2">
                  <Palette className="h-6 w-6 text-terracotta-600" />
                </div>
                <Text variant="small" className="font-semibold text-terracotta-900">Theme Settings</Text>
                <Text variant="small" className="text-terracotta-700">Brand colors, fonts</Text>
              </div>
              <div className="rounded-lg bg-sage-50 border border-sage-200 p-3 text-center">
                <div className="flex justify-center mb-2">
                  <Package className="h-6 w-6 text-sage-600" />
                </div>
                <Text variant="small" className="font-semibold text-sage-900">Custom Components</Text>
                <Text variant="small" className="text-sage-700">Reusable UI patterns</Text>
              </div>
              <div className="rounded-lg bg-terracotta-50 border border-terracotta-200 p-3 text-center">
                <div className="flex justify-center mb-2">
                  <Sparkles className="h-6 w-6 text-terracotta-600" />
                </div>
                <Text variant="small" className="font-semibold text-terracotta-900">Animations</Text>
                <Text variant="small" className="text-terracotta-700">Smooth transitions</Text>
              </div>
            </div>
          </div>

          {/* Step 5: AI-Driven Custom Code */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta-500 font-bold text-white">
                5
              </div>
              <Heading as="h3" variant="h3">
                AI-Driven Custom Functions & Cloud Functions (GCP)
              </Heading>
            </div>
            <Text variant="body" className="text-neutral-700">
              When FlutterFlow's built-in features aren't enough, I use Claude Code to write Custom Functions (synchronous logic), Custom Actions (async operations), and Cloud Functions (Firebase/GCP backend).
            </Text>

            <FlutterFlowBuilder highlightStep="cloud-functions" />

            <div className="space-y-3">
              <div className="rounded-lg bg-neutral-800 border-2 border-neutral-600 p-4">
                <Text variant="body" className="font-mono text-green-400 mb-2">
                  // Example: Custom Function (sync)
                </Text>
                <Text variant="body" className="font-mono text-neutral-300 text-sm">
                  {`String calculateSubscriptionPrice(String tier) {`}
                </Text>
                <Text variant="body" className="font-mono text-neutral-300 text-sm ml-4">
                  {`if (tier == 'pro') return '\\$29.99';`}
                </Text>
                <Text variant="body" className="font-mono text-neutral-300 text-sm ml-4">
                  {`return '\\$9.99';`}
                </Text>
                <Text variant="body" className="font-mono text-neutral-300 text-sm">
                  {`}`}
                </Text>
              </div>

              <div className="rounded-lg bg-neutral-800 border-2 border-neutral-600 p-4">
                <Text variant="body" className="font-mono text-green-400 mb-2">
                  // Example: Custom Action (async with API call)
                </Text>
                <Text variant="body" className="font-mono text-neutral-300 text-sm">
                  {`Future<void> sendPushNotification(String userId) async {`}
                </Text>
                <Text variant="body" className="font-mono text-neutral-300 text-sm ml-4">
                  {`final response = await http.post(...);`}
                </Text>
                <Text variant="body" className="font-mono text-neutral-300 text-sm ml-4">
                  {`// Handle response`}
                </Text>
                <Text variant="body" className="font-mono text-neutral-300 text-sm">
                  {`}`}
                </Text>
              </div>

              <div className="rounded-lg bg-sage-50 border-2 border-sage-200 p-4">
                <Text variant="body" className="font-semibold text-sage-900 mb-2">
                  My AI Workflow for Custom Code
                </Text>
                <ol className="space-y-1 list-decimal list-inside font-inter text-base leading-[1.6] text-sage-700">
                  <li>Describe the function's purpose and inputs/outputs to Claude</li>
                  <li>Review generated Dart code for FlutterFlow compatibility</li>
                  <li>Test in FlutterFlow's Custom Code editor</li>
                  <li>Iterate based on errors or edge cases</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative: What Makes This Different */}
        <div className="max-w-3xl space-y-4">
          <Heading as="h2" variant="h2">
            What Makes This Different
          </Heading>
          <Text variant="body" className="text-neutral-700">
            Most developers treat FlutterFlow as a no-code tool. I treat it as a <strong>Flutter code generator</strong> that accelerates the 80% while giving me full control over the complex 20% through custom Dart code.
          </Text>
          <Text variant="body" className="text-neutral-700 font-semibold">
            Database-first architecture + AI-assisted custom code = production-ready mobile apps in weeks, not months.
          </Text>
        </div>

        {/* Implementation Pathways */}
        <div className="max-w-4xl space-y-6">
          <Heading as="h2" variant="h2">
            Where I Use This
          </Heading>
          <Text variant="body" className="text-neutral-700">
            FlutterFlow powers my mobile development workflow, complementing my web development stack.
          </Text>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Design Systems Card */}
            <a
              href="/skills/design-systems"
              className="group rounded-xl border-2 border-sage-200 bg-sage-50 p-6 transition-all duration-300 hover:border-sage-400 hover:shadow-lg"
            >
              <Heading as="h3" variant="h3" className="mb-3 text-sage-700">
                Design Systems
              </Heading>
              <Text variant="body" className="mb-4 text-neutral-700">
                Applied in FlutterFlow
              </Text>
              <Text variant="small" className="text-neutral-600">
                Theme Settings, custom components, and reusable design tokens for cross-platform consistency.
              </Text>
              <Text variant="small" className="mt-4 font-semibold text-sage-700 group-hover:underline">
                View Design System →
              </Text>
            </a>

            {/* Claude Code Card */}
            <a
              href="/skills/claude-code"
              className="group rounded-xl border-2 border-terracotta-200 bg-terracotta-50 p-6 transition-all duration-300 hover:border-terracotta-400 hover:shadow-lg"
            >
              <Heading as="h3" variant="h3" className="mb-3 text-terracotta-700">
                Claude Code
              </Heading>
              <Text variant="body" className="mb-4 text-neutral-700">
                AI-Assisted Development
              </Text>
              <Text variant="small" className="text-neutral-600">
                Custom Functions, Custom Actions, and Cloud Functions written with AI assistance for complex logic.
              </Text>
              <Text variant="small" className="mt-4 font-semibold text-terracotta-700 group-hover:underline">
                View Claude Code →
              </Text>
            </a>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
