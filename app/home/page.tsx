/**
 * Home Page (/home)
 *
 * Main portfolio page with navigation and project cards.
 */

"use client";

import { SideNav } from "@/components/organisms/SideNav";
import { ProjectsGrid } from "@/components/organisms/ProjectsGrid";
import type { ProjectData } from "@/components/organisms/ProjectsGrid";

const navigationItems = [
  {
    id: "home",
    label: "Home",
    href: "/home",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    id: "resume",
    label: "Resume",
    href: "/resume",
  },
  {
    id: "design-systems",
    label: "Design Systems",
    href: "/skills/design-systems",
  },
  {
    id: "claude-code",
    label: "Claude Code",
    href: "/skills/claude-code",
  },
  {
    id: "flutterflow",
    label: "Flutterflow",
    href: "/skills/flutterflow",
  },
  {
    id: "duro-case-study",
    label: "Duro Case Study",
    href: "/case-studies/duro",
  },
];

export default function HomePage() {
  const projects: [ProjectData, ProjectData, ProjectData, ProjectData] = [
    {
      id: "design-systems",
      title: "Building Design Systems from Scratch",
      description: "See how I architect comprehensive design systems using atomic design principles. Every color, spacing value, and component is intentional—from foundational tokens to complex organisms, all documented in Storybook.",
      badge: "Design Systems",
      imageSrc: "/designsystemshot.png",
      imageAlt: "Design System Preview",
      tags: [
        { label: "React", variant: "terracotta" },
        { label: "TypeScript", variant: "sage" },
        { label: "Storybook", variant: "terracotta" },
        { label: "Tailwind CSS", variant: "sage" },
      ],
      href: "/skills/design-systems",
      linkText: "View Complete System",
    },
    {
      id: "claude-code",
      title: "AI-Assisted Development with Claude Code",
      description: "My architecture-first approach to AI-assisted development. Using Claude Code as an intelligent pair programmer, I build from types → data → state → UI, with rigorous testing at every layer.",
      badge: "AI Development",
      imageSrc: "/claudev3.png",
      imageAlt: "Claude Code AI Development Preview",
      tags: [
        { label: "Claude Code", variant: "sage" },
        { label: "Next.js", variant: "terracotta" },
        { label: "TypeScript", variant: "sage" },
        { label: "Test-Driven", variant: "terracotta" },
      ],
      href: "/skills/claude-code",
      linkText: "View Development Process",
    },
    {
      id: "duro-case-study",
      title: "Duro: Event Management Platform",
      description: "From concept to execution—designing a comprehensive event management platform with recurring events, real-time availability, and seamless booking workflows. See how I tackled complex scheduling logic with intuitive UX.",
      badge: "Case Study",
      imageSrc: "/duro-case-study.png",
      imageAlt: "Duro Event Management Platform Preview",
      tags: [
        { label: "Product Design", variant: "terracotta" },
        { label: "UX Research", variant: "sage" },
        { label: "Event Management", variant: "terracotta" },
        { label: "Scheduling", variant: "sage" },
      ],
      href: "/case-studies/duro",
      linkText: "View Case Study",
    },
    {
      id: "flutterflow",
      title: "FlutterFlow: 10x Faster Mobile Apps",
      description: "Production-ready mobile apps in weeks, not months. My database-first approach with Firebase, visual development in FlutterFlow, and AI-assisted custom Dart code delivers cross-platform apps at unprecedented speed.",
      badge: "Mobile Development",
      imageSrc: "/flutterflow.png",
      imageAlt: "FlutterFlow Mobile Development Preview",
      tags: [
        { label: "FlutterFlow", variant: "sage" },
        { label: "Firebase", variant: "terracotta" },
        { label: "Dart", variant: "sage" },
        { label: "Cross-Platform", variant: "terracotta" },
      ],
      href: "/skills/flutterflow",
      linkText: "View Process",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-white to-sage-50/30">
      {/* Sidebar - always visible */}
      <div className="fixed left-0 top-0 z-40 h-screen">
        <SideNav items={navigationItems} currentPath="/home" />
      </div>

      {/* Main content area with left padding for nav */}
      <div className="pl-64">
        <ProjectsGrid
          projects={projects}
          isVisible={true}
          isFramed={true}
        />
      </div>
    </div>
  );
}
