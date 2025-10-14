import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'AI-Assisted Development with Claude Code',
  description: "AI-assisted development workflow for faster, higher-quality builds using iterative testing and architectural thinking. Building with Claude Code, Next.js, TypeScript, and Supabase.",
  keywords: ['Claude Code', 'AI Development', 'AI-Assisted Development', 'Next.js', 'TypeScript', 'Supabase', 'Test-Driven Development'],
  openGraph: {
    title: 'Claude Code | Logan Bell',
    description: "AI-powered development workflow for faster, higher-quality builds using iterative testing.",
    url: 'https://loganbell.design/skills/claude-code',
  },
};

export default function ClaudeCodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
