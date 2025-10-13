/**
 * Claude Code Skill Page (/skills/claude-code)
 *
 * AI-assisted development workflow showcase.
 */

"use client";

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Tag } from "@/components/atoms/Tag";
import { ClaudeCLI } from "@/components/organisms/ClaudeCLI";

export default function ClaudeCodeSkillPage() {
  const breadcrumbs = [
    { label: "Claude Code", href: "/skills/claude-code" },
  ];

  const techStack = [
    { label: "Claude Code", variant: "terracotta" as const },
    { label: "Next.js", variant: "sage" as const },
    { label: "TypeScript", variant: "terracotta" as const },
    { label: "Supabase", variant: "sage" as const },
    { label: "Test-Driven", variant: "terracotta" as const },
  ];

  return (
    <DocsLayout
      currentPath="/skills/claude-code"
      breadcrumbs={breadcrumbs}
    >
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="space-y-6 max-w-4xl">
          <Heading as="h1" variant="display" className="text-neutral-900">
            Claude Code: AI-Powered Development
          </Heading>
          <Text variant="lead" className="text-neutral-600">
            AI-assisted development workflow for faster, higher-quality builds using iterative testing and architectural thinking.
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
            My Approach: Architecture-First, Test-Driven
          </Heading>
          <Text variant="body" className="text-neutral-700">
            I use Claude Code as an intelligent pair programmer, but not as a replacement for thinking. I follow a highly iterative, architecture-first approach that emphasizes quick feedback loops, clean slate testing, and persistent debugging until true resolution.
          </Text>
          <Text variant="body" className="text-neutral-700">
            The key difference: I debug from <strong>data → state → UI</strong>, which mirrors how I build. When integration fails (race conditions, stale state), I go back to architectural fixes rather than quick hacks.
          </Text>
        </div>

        {/* Section: My Architecture */}
        <div className="max-w-4xl space-y-8">
          <Heading as="h2" variant="h2">
            My 6-Layer Architecture
          </Heading>

          {/* Layer 1 */}
          <div className="space-y-4">
            <Heading as="h3" variant="h3">
              1. Types & Contracts First (Foundation Layer)
            </Heading>
            <Text variant="body" className="text-neutral-700">
              Types drive everything. ICPRefinerData, ICPModelType, PrimaryICP - all defined upfront. Strict TypeScript boundaries everywhere. Database schema matches the types (JSONB fields aligned with TS interfaces).
            </Text>
            <ClaudeCLI
              messages={[
                { type: "user", content: "before we build anything, let's define the types for the ICP refiner" },
                { type: "claude", content: "Creating type definitions in @/types/icp.ts..." },
                { type: "system", content: "export interface ICPRefinerData {\n  modelType: ICPModelType;\n  primaryIcp: PrimaryICP;\n  alternatives: AlternativeICP[];\n}" },
                { type: "user", content: "perfect. now match the database schema to these types" },
                { type: "claude", content: "Creating migration with JSONB columns aligned to TypeScript interfaces..." },
                { type: "success", content: "Types and schema in sync. Foundation ready." },
              ]}
            />
          </div>

          {/* Layer 2 */}
          <div className="space-y-4">
            <Heading as="h3" variant="h3">
              2. Database Schema & API Layer (Data Layer)
            </Heading>
            <Text variant="body" className="text-neutral-700">
              Supabase tables (folder_progress, research_journeys), API routes built next. Data persistence is first-class, not an afterthought. I test by checking the database directly.
            </Text>
            <ClaudeCLI
              messages={[
                { type: "user", content: "can you see what's in the database?" },
                { type: "claude", content: "Checking Supabase tables..." },
                { type: "system", content: "SELECT * FROM folder_progress WHERE user_id = '...'" },
                { type: "claude", content: "I see 3 folders. One has status 'generating', but created_at is 2 hours ago. Looks like a stale state from a failed generation." },
                { type: "user", content: "yeah clean that up and add a timeout check" },
              ]}
            />
          </div>

          {/* Layer 3 */}
          <div className="space-y-4">
            <Heading as="h3" variant="h3">
              3. State Management Architecture (Integration Layer)
            </Heading>
            <Text variant="body" className="text-neutral-700">
              Parent containers manage DB sync. Child components manage local workflow. Props down, callbacks up. When this doesn't work seamlessly, I know something is architecturally wrong.
            </Text>
            <ClaudeCLI
              messages={[
                { type: "user", content: "the accordion is showing stale data after I accept the primary ICP" },
                { type: "claude", content: "Let me check the data flow... Parent (IcpRefinerFolder) syncs with DB, child (PrimaryICPAccordion) manages local state. The callback isn't triggering the parent's refetch." },
                { type: "user", content: "fix the architecture. callbacks should flow up to trigger DB sync" },
                { type: "claude", content: "Refactoring: onAccept callback now triggers parent's mutate() to refetch. One-way data flow restored." },
                { type: "user", content: "testing" },
                { type: "success", content: "Data flows correctly now." },
              ]}
            />
          </div>

          {/* Layer 4 */}
          <div className="space-y-4">
            <Heading as="h3" variant="h3">
              4. Component Hierarchy (UI Layer)
            </Heading>
            <Text variant="body" className="text-neutral-700">
              Folder → Accordion → Molecules pattern. Atomic design throughout. Components receive data as props, trigger actions via callbacks. UI layer is the last layer built.
            </Text>
            <ClaudeCLI
              messages={[
                { type: "system", content: "components/\n  atoms/        # Button, Input, Badge\n  molecules/    # ICPCard, GenerateButton\n  organisms/    # PrimaryICPAccordion\n  templates/    # IcpRefinerFolder" },
                { type: "user", content: "build the UI layer now that data and state are solid" },
                { type: "claude", content: "Building component hierarchy following atomic design..." },
              ]}
            />
          </div>

          {/* Layer 5 */}
          <div className="space-y-4">
            <Heading as="h3" variant="h3">
              5. Testing = End-to-End Integration
            </Heading>
            <Text variant="body" className="text-neutral-700">
              I don't test components in isolation. I test full user flows: "Select B2B → generate → accept → hard refresh → should still show B2B". Database resets for clean slate. This catches race conditions, state mismatches, data loss.
            </Text>
            <ClaudeCLI
              messages={[
                { type: "user", content: "reset icp data again" },
                { type: "system", content: "supabase db reset --linked" },
                { type: "user", content: "testing full flow: select B2B → generate → accept → hard refresh" },
                { type: "error", content: "After refresh: showing 'No model selected' instead of B2B" },
                { type: "user", content: "data loss on refresh. check the database" },
                { type: "claude", content: "Database shows modelType: 'b2b' but UI isn't hydrating. Race condition in initial load." },
              ]}
            />
          </div>

          {/* Layer 6 */}
          <div className="space-y-4">
            <Heading as="h3" variant="h3">
              6. Polish Last (Enhancement Layer)
            </Heading>
            <Text variant="body" className="text-neutral-700">
              Animations, onboarding tours, mobile responsiveness - these come after core functionality is proven. But polish shouldn't break core functionality.
            </Text>
            <ClaudeCLI
              messages={[
                { type: "user", content: "ok core features work. now add the onboarding tour and accordion animations" },
                { type: "claude", content: "Adding Framer Motion animations and intro.js tour..." },
                { type: "user", content: "the animation is breaking the accordion collapse" },
                { type: "claude", content: "Animation lifecycle interfering with state updates. Let me add layout='preserve' and adjust timing..." },
                { type: "user", content: "better. make sure it still works after hard refresh" },
                { type: "success", content: "Tested 5 times with refresh - animations work, core functionality intact." },
              ]}
            />
          </div>
        </div>

        {/* Narrative: What Makes This Different */}
        <div className="max-w-3xl space-y-4">
          <Heading as="h2" variant="h2">
            What Makes This Different
          </Heading>
          <Text variant="body" className="text-neutral-700">
            Most developers use AI for code generation. I use it for <strong>architectural thinking</strong>. My debugging style reveals the process: "Check the database" (data layer), "What's in console for State check" (state layer), "Runtime TypeError at line X" (UI layer).
          </Text>
          <Text variant="body" className="text-neutral-700 font-semibold">
            I debug from data → state → UI, which mirrors how I build. When integration fails, I go back to architectural fixes.
          </Text>
        </div>

        {/* Implementation Pathways */}
        <div className="max-w-4xl space-y-6">
          <Heading as="h2" variant="h2">
            Where I Use This
          </Heading>
          <Text variant="body" className="text-neutral-700">
            This AI-assisted workflow powers both my web and mobile development processes.
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
                Built with Claude Code
              </Text>
              <Text variant="small" className="text-neutral-600">
                Complete design system with 64+ components, built in two weeks using AI-assisted development.
              </Text>
              <Text variant="small" className="mt-4 font-semibold text-sage-700 group-hover:underline">
                View Design System →
              </Text>
            </a>

            {/* Duro Case Study Card */}
            <a
              href="/case-studies/duro"
              className="group rounded-xl border-2 border-terracotta-200 bg-terracotta-50 p-6 transition-all duration-300 hover:border-terracotta-400 hover:shadow-lg"
            >
              <Heading as="h3" variant="h3" className="mb-3 text-terracotta-700">
                Duro Case Study
              </Heading>
              <Text variant="body" className="mb-4 text-neutral-700">
                Next.js + Supabase + Claude Code
              </Text>
              <Text variant="small" className="text-neutral-600">
                Two-sided marketplace with multi-tenancy, RBAC, Stripe Connect, and RRULE recurring events.
              </Text>
              <Text variant="small" className="mt-4 font-semibold text-terracotta-700 group-hover:underline">
                View Case Study →
              </Text>
            </a>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
