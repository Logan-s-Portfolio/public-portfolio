/**
 * Home Page (/home)
 *
 * Main portfolio page with navigation and project cards.
 */

"use client";

import Link from "next/link";
import { Navbar } from "@/components/organisms/Navbar";
import { ProjectsGrid } from "@/components/organisms/ProjectsGrid";
import { Footer } from "@/components/organisms/Footer";
import { Heading } from "@/components/atoms/Heading";
import { ServiceOfferingsSection } from "@/components/organisms/ServiceOfferingsSection";
import type { ProjectData } from "@/components/organisms/ProjectsGrid";

export default function HomePage() {
  const services = [
    {
      id: "ideation",
      title: "Ideation & Prototyping",
      tagline: "Transform ideas into testable prototypes",
      description:
        "Rapid prototyping and user testing to validate concepts before full development. I'll help you explore possibilities, identify risks, and build confidence in your direction.",
      icon: "🎨",
      deliverables: [
        "Interactive Figma prototypes",
        "User testing sessions & insights",
        "Design system foundation",
        "Technical feasibility assessment",
      ],
      timeline: "2-4 weeks",
      accent: "terracotta" as const,
    },
    {
      id: "redesign",
      title: "Product Redesign",
      tagline: "Refresh and modernize existing products",
      description:
        "Breathe new life into your product with modern UX patterns, improved accessibility, and systematic design. I'll audit your current state and deliver a clear path forward.",
      icon: "🔄",
      deliverables: [
        "UX/UI audit report",
        "Redesigned screens & flows",
        "Migration roadmap",
        "Component specifications",
      ],
      timeline: "4-8 weeks",
      accent: "sage" as const,
    },
    {
      id: "coaching",
      title: "Team Coaching",
      tagline: "Level up your design & development teams",
      description:
        "Hands-on coaching for teams adopting design systems, improving workflows, or building design culture. Available for 1:1 sessions, team workshops, or ongoing support.",
      icon: "👥",
      deliverables: [
        "Custom workshop sessions",
        "Process documentation",
        "Design system training",
        "Async support & reviews",
      ],
      timeline: "Ongoing",
      accent: "neutral" as const,
    },
    {
      id: "mvp",
      title: "MVP Development",
      tagline: "Ship fast, iterate faster",
      description:
        "Full-stack MVP development with Next.js, TypeScript, and modern tooling. Perfect for validating business ideas or launching internal tools quickly.",
      icon: "🚀",
      deliverables: [
        "Production-ready codebase",
        "Design system setup",
        "Testing & CI/CD pipeline",
        "Documentation & handoff",
      ],
      timeline: "6-12 weeks",
      accent: "terracotta" as const,
    },
    {
      id: "training",
      title: "Tool Training",
      tagline: "Master Figma, design systems, & more",
      description:
        "Structured training on Figma, design systems, Storybook, or frontend development. Available as live workshops, recorded sessions, or custom documentation.",
      icon: "🛠️",
      deliverables: [
        "Live training sessions",
        "Recorded walkthroughs",
        "Custom documentation",
        "Practice exercises",
      ],
      timeline: "1-3 weeks",
      accent: "sage" as const,
    },
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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sage-50/30 via-white to-terracotta-50/20">
      {/* Decorative gradient shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-terracotta-200/20 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-sage-200/20 to-transparent rounded-full blur-3xl -z-10" />

      <Navbar currentPath="/home" />

      {/* Main content area with top padding for floating navbar */}
      <div className="pt-24">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 xl:py-24">
          <Heading as="h1" variant="display-2xl" className="mb-6">
            Product Designer & Entrepreneur
          </Heading>
          <p className="font-inter text-lg md:text-xl text-neutral-700 max-w-3xl leading-relaxed mb-8">
            Explore how I build design systems, mobile apps, and digital products that solve real problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/resume"
              className="inline-flex items-center justify-center gap-2 font-inter font-medium rounded-md transition-colors transition-shadow duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-600 focus-visible:ring-offset-2 bg-terracotta-600 text-white shadow-sm hover:bg-terracotta-700 hover:shadow-md active:bg-terracotta-800 active:shadow-sm h-12 px-6 text-lg"
            >
              View My Resume
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-inter font-medium rounded-md transition-colors transition-shadow duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-600 focus-visible:ring-offset-2 border-2 border-terracotta-600 text-terracotta-600 bg-white shadow-sm hover:bg-terracotta-50 hover:shadow-md active:bg-terracotta-100 active:shadow-sm h-12 px-6 text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </section>

        {/* Service Offerings Section */}
        <ServiceOfferingsSection services={services} />

        {/* Projects Grid - reduced padding, container controls spacing */}
        <section className="px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
          <ProjectsGrid
            projects={projects}
            isVisible={true}
            isFramed={false}
          />
        </section>

        {/* Bottom CTA Section - smaller than hero for hierarchy */}
        <section className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 text-center">
          <Heading as="h2" variant="h2" className="mb-6">
            Let's Build Something Together
          </Heading>
          <p className="font-inter text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new projects and collaborations. Whether you need a design system,
            a mobile app, or strategic product guidance—let's chat.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-inter font-medium rounded-md transition-colors transition-shadow duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-600 focus-visible:ring-offset-2 bg-terracotta-600 text-white shadow-sm hover:bg-terracotta-700 hover:shadow-md active:bg-terracotta-800 active:shadow-sm h-12 px-6 text-lg"
          >
            Get in Touch
          </Link>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
