/**
 * Home Page (/)
 *
 * Documentation hub landing page with hero and quick links to all sections.
 * Uses DocsLayout for consistent navigation experience.
 */

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ViewportHero } from "@/components/organisms/ViewportHero";
import { SideNav } from "@/components/organisms/SideNav";
import { ProjectsGrid } from "@/components/organisms/ProjectsGrid";
import type { ProjectData } from "@/components/organisms/ProjectsGrid";

const navigationItems = [
  {
    id: "home",
    label: "Home",
    href: "/",
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
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isAboutComplete, setIsAboutComplete] = useState(false);

  const bioParagraphs = [
    "I'm a product designer and entrepreneur based in Austin, TX. With over 10 years of experience, I specialize in creating intuitive, beautiful interfaces that users love and businesses need.",
    "My approach combines deep user research, rapid prototyping, and systematic thinking to deliver products that solve real problems. I'm passionate about design systems, accessibility, and building tools that empower teams.",
    "When I'm not designing, you'll find me exploring Austin's coffee scene, contributing to open-source projects, or mentoring aspiring designers.",
  ];

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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-white to-sage-50/30">
      {/* Sidebar slides in from left - fixed positioned overlay */}
      <motion.div
        initial={{ x: -256 }}
        animate={{ x: isTypingComplete ? 0 : -256 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="fixed left-0 top-0 z-40 h-screen"
      >
        <SideNav items={navigationItems} currentPath="/" />
      </motion.div>

      {/* Hero - resizes when sidebar slides in */}
      <div
        className="relative"
        style={{
          paddingLeft: isTypingComplete ? "256px" : 0,
          transition: "padding 0.6s cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      >
        <div className="relative">
          <ViewportHero
            name="Logan Bell"
            greeting="Hi, I'm"
            typingPhrases={[
              "Product Designer",
              "Entrepreneur",
              "Crafting memorable user experiences",
            ]}
            photoUrl="/logan-bell.jpg"
            aboutPhotoUrl="/BrittanyGilbertPhotography-2840.JPG.jpeg"
            photoAlt="Logan Bell - Product Designer & Entrepreneur"
            location="Austin, TX"
            bioParagraphs={bioParagraphs}
            ctaLabel="Read Full Story"
            ctaHref="/about"
            onTypingComplete={() => setIsTypingComplete(true)}
            onAboutTransitionComplete={() => setIsAboutComplete(true)}
            isFramed={isTypingComplete}
          />

          {/* Projects Grid - overlaid on top of hero viewport */}
          <div className="absolute inset-0 pointer-events-none">
            <ProjectsGrid
              projects={projects}
              isVisible={isAboutComplete}
              isFramed={isTypingComplete}
              onAnimationComplete={() => {
                // Scroll is unlocked inside ProjectsGrid
              }}
            />
          </div>
        </div>
      </div>

    </div>
  );
}
