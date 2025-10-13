/**
 * Claude Code CLI Showcase - Screenshot Page
 *
 * Temporary page for taking Claude Code CLI component screenshot
 */

"use client";

import { ClaudeCLI } from "@/components/organisms/ClaudeCLI";

export default function ClaudeCodeShowcasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-sage-50 relative">
      {/* ClaudeCLI Component - positioned naturally */}
      <div className="absolute top-0 left-0 pt-12 pl-12">
        <ClaudeCLI
          messages={[
            { type: "user", content: "the accordion is showing stale data after I accept the primary ICP" },
            { type: "claude", content: "Let me check the data flow... Parent (IcpRefinerFolder) syncs with DB, child (PrimaryICPAccordion) manages local state. The callback isn't triggering the parent's refetch." },
            { type: "user", content: "fix the architecture. callbacks should flow up to trigger DB sync" },
            { type: "claude", content: "Refactoring: onAccept callback now triggers parent's mutate() to refetch. One-way data flow restored." },
            { type: "user", content: "testing" },
            { type: "success", content: "Data flows correctly now." },
            { type: "user", content: "perfect. now let's test with a hard refresh to ensure persistence" },
            { type: "claude", content: "Testing database persistence after browser refresh..." },
            { type: "success", content: "Data persists correctly. ICP state maintained across sessions." },
            { type: "user", content: "now let's add optimistic updates for better UX" },
            { type: "claude", content: "Adding optimistic UI updates with SWR mutate..." },
            { type: "user", content: "and add loading states for all async operations" },
            { type: "claude", content: "Implementing loading states with Suspense boundaries and skeleton components..." },
            { type: "user", content: "great. now add error handling for network failures" },
            { type: "claude", content: "Adding comprehensive error boundaries and retry logic with exponential backoff..." },
            { type: "system", content: "Error: Network request failed after 3 retries" },
            { type: "user", content: "show user-friendly error messages" },
            { type: "claude", content: "Implementing toast notifications for error states with retry actions..." },
            { type: "success", content: "Error handling complete. Network resilience improved." },
            { type: "user", content: "add analytics tracking for key user actions" },
            { type: "claude", content: "Integrating analytics events for ICP generation, acceptance, and model switches..." },
            { type: "user", content: "make sure we're not tracking PII" },
            { type: "claude", content: "Sanitizing analytics payloads. Only tracking anonymous usage metrics..." },
            { type: "success", content: "Analytics implementation complete and privacy-compliant." },
            { type: "user", content: "let's add keyboard shortcuts for power users" },
            { type: "claude", content: "Adding keyboard navigation: Cmd+G to generate, Cmd+Enter to accept, Tab to navigate..." },
          ]}
        />
      </div>

      {/* Square Screenshot Target Zone - overlaid on top */}
      <div className="absolute top-0 left-0 pointer-events-none" style={{ width: '800px', height: '800px' }}>
        {/* Corner Markers - Top Left */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-terracotta-500" />

        {/* Corner Markers - Top Right */}
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-terracotta-500" />

        {/* Corner Markers - Bottom Left */}
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-terracotta-500" />

        {/* Corner Markers - Bottom Right */}
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-terracotta-500" />
      </div>

      {/* Helper text */}
      <div className="absolute top-[820px] left-0 p-4">
        <p className="text-sm font-mono text-neutral-600">
          📸 Screenshot the square area within the corner markers (800x800px)
        </p>
      </div>
    </div>
  );
}
