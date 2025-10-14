import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Design Systems',
  description: "A systematic approach to building scalable, accessible component libraries from color theory to production code. Built with React, TypeScript, Tailwind v4, and Storybook.",
  keywords: ['Design Systems', 'React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Component Library', 'Atomic Design', 'Design Tokens'],
  openGraph: {
    title: 'Design Systems | Logan Bell',
    description: "A systematic approach to building scalable, accessible component libraries. From color theory to production code.",
    url: 'https://loganbell.design/skills/design-systems',
  },
};

export default function DesignSystemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
