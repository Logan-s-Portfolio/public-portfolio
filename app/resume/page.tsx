/**
 * Resume Page (/resume)
 *
 * Professional resume showcasing experience, education, and achievements
 * Enhanced with design system components for visual interest
 */

"use client";

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Badge } from "@/components/atoms/Badge";
import { Tag } from "@/components/atoms/Tag";
import { Divider } from "@/components/atoms/Divider";
import { Mail, Phone, Linkedin, Award, TrendingUp, Users, Code } from "lucide-react";

export default function ResumePage() {
  const breadcrumbs = [{ label: "Resume", href: "/resume" }];

  const timelineMilestones = [
    {
      id: "duro",
      date: "2022 - Present",
      title: "Founder & CEO - Duro",
      description: "Phase 1: Built fitness marketplace MVP on FlutterFlow/Firebase achieving $10K+ GMV, 500+ users, 4 LA gym partnerships, and brand sponsorships. Phase 2: Architected enterprise-grade platform using Claude Code - 261-table PostgreSQL database, 1,108 stored functions, 1,200+ React components, 92 microservices. Implemented RFC 5545 RRULE scheduling, real-time collaboration, Stripe Connect marketplace, and AI-powered systems.",
      badgeVariant: "terracotta" as const,
    },
    {
      id: "realm",
      date: "2023",
      title: "Director of Partnerships - Realm",
      description: "Led partnership strategy for higher education platform, closing deals with Cal State Long Beach and Marymount University. Identified and onboarded service provider partners, growing platform adoption through university networks. Developed go-to-market strategies bridging B2B sales with end-user experience.",
      badgeVariant: "sage" as const,
    },
    {
      id: "brewbike",
      date: "2021 - 2022",
      title: "Head of Growth - Brewbike",
      description: "Closed 17 university contracts contributing $4M+ in projected revenue. Created scalable GTM playbook and onboarding process adopted across new campus expansions. Managed full B2B sales cycle from lead generation through operational launch.",
      badgeVariant: "terracotta" as const,
    },
    {
      id: "felo",
      date: "2020 - 2021",
      title: "Founder - Felo Coffee",
      description: "Launched luxury cold brew brand with end-to-end product development and go-to-market execution. Designed brand positioning, executed crowdfunding campaign, managed supply chain and vendor relationships.",
      badgeVariant: "sage" as const,
    },
    {
      id: "wework",
      date: "2017",
      title: "Sales Lead - WeWork",
      description: "Maintained 95% building occupancy, increasing monthly revenue by $40K. Designed occupancy-based sales system scaled to all 275 global WeWork locations. Optimized member experience and retention through data-driven space utilization strategies.",
      badgeVariant: "terracotta" as const,
    },
    {
      id: "bartending",
      date: "2015 - 2019",
      title: "Founder - She Plus Him Bartending",
      description: "Scaled $500 investment into $150K+/year service business with 10+ contractors. Built operational systems for scheduling, quality control, and vendor partnerships. Established partnerships with major wedding platforms (The Knot, WeddingWire).",
      badgeVariant: "sage" as const,
    },
    {
      id: "education",
      date: "2011 - 2016",
      title: "Bachelor of Science - Texas State University",
      description: "Major: Nutrition and Foods | Minor: Business Administration",
      badgeVariant: "default" as const,
    },
  ];

  return (
    <DocsLayout currentPath="/resume" breadcrumbs={breadcrumbs}>
      <div className="space-y-16">
        {/* Header */}
        <section className="-mt-4 rounded-xl bg-gradient-to-br from-terracotta-50 to-sage-50 p-6 md:p-8 lg:p-10 shadow-sm border-2 border-neutral-200">
          <Heading as="h1" variant="display" className="mb-3">
            Logan Bell
          </Heading>
          <Text variant="lead" className="mb-6 text-neutral-700">
            AI-Driven Full-Stack Engineer & SaaS Founder
          </Text>
          <div className="flex items-center gap-2 mb-8">
            <span className="text-neutral-500">📍</span>
            <Text variant="body" className="text-neutral-600">Austin, TX</Text>
          </div>

          {/* Contact Info - Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <a href="mailto:bellconner@gmail.com" className="flex items-center gap-3 p-4 rounded-lg bg-white border border-neutral-200 hover:border-terracotta-400 hover:shadow-md transition-all duration-300 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-terracotta-100 flex items-center justify-center group-hover:bg-terracotta-200 transition-colors">
                <Mail className="h-5 w-5 text-terracotta-700" />
              </div>
              <div className="flex-1 min-w-0">
                <Text variant="caption" className="text-neutral-500 uppercase tracking-wide">Email</Text>
                <Text variant="small" className="text-neutral-900 truncate">bellconner@gmail.com</Text>
              </div>
            </a>
            <a href="tel:310-913-1024" className="flex items-center gap-3 p-4 rounded-lg bg-white border border-neutral-200 hover:border-sage-400 hover:shadow-md transition-all duration-300 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center group-hover:bg-sage-200 transition-colors">
                <Phone className="h-5 w-5 text-sage-700" />
              </div>
              <div className="flex-1 min-w-0">
                <Text variant="caption" className="text-neutral-500 uppercase tracking-wide">Phone</Text>
                <Text variant="small" className="text-neutral-900">310-913-1024</Text>
              </div>
            </a>
            <a href="https://linkedin.com/in/connerloganbell/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-lg bg-white border border-neutral-200 hover:border-terracotta-400 hover:shadow-md transition-all duration-300 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-terracotta-100 flex items-center justify-center group-hover:bg-terracotta-200 transition-colors">
                <Linkedin className="h-5 w-5 text-terracotta-700" />
              </div>
              <div className="flex-1 min-w-0">
                <Text variant="caption" className="text-neutral-500 uppercase tracking-wide">LinkedIn</Text>
                <Text variant="small" className="text-neutral-900 truncate">connerloganbell</Text>
              </div>
            </a>
          </div>
        </section>

        {/* Summary */}
        <section className="rounded-xl bg-white p-6 md:p-8 border-2 border-neutral-200 shadow-sm">
          <Heading as="h2" variant="h2" className="mb-4">
            Summary
          </Heading>
          <Text variant="body" className="text-neutral-700 leading-relaxed">
            Technical founder who evolved from no-code MVP to architecting enterprise-grade SaaS platform using AI-driven development. Built production system with 261-table PostgreSQL database, 1,100+ stored procedures, and 1,200+ React components via Claude Code. Combines 4+ years of marketplace expertise with newfound full-stack engineering capabilities, proving ability to rapidly master complex technical domains.
          </Text>
        </section>

        {/* Technical Skills */}
        <section>
          <Heading as="h2" variant="h2" className="mb-6">
            Technical Skills
          </Heading>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Languages & Frameworks */}
            <div className="rounded-xl bg-white p-6 border-2 border-terracotta-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-terracotta-100 flex items-center justify-center">
                  <Code className="h-5 w-5 text-terracotta-700" />
                </div>
                <Heading as="h3" variant="h3" className="text-terracotta-700">
                  Languages & Frameworks
                </Heading>
              </div>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "JavaScript ES6+", "SQL", "HTML5", "CSS3", "React 18", "Next.js 14", "Node.js", "PostgreSQL", "Tailwind CSS", "Radix UI", "Framer Motion"].map((skill) => (
                  <Tag key={skill} variant="terracotta" size="sm">
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>

            {/* Database & Backend */}
            <div className="rounded-xl bg-white p-6 border-2 border-sage-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-sage-700" />
                </div>
                <Heading as="h3" variant="h3" className="text-sage-700">
                  Database & Backend
                </Heading>
              </div>
              <ul className="space-y-2 font-inter text-sm leading-[1.6] text-neutral-700">
                <li>• PostgreSQL (advanced): stored procedures, triggers, views, CTEs, window functions</li>
                <li>• Supabase: RLS policies, Edge Functions, Realtime subscriptions</li>
                <li>• Database design: multi-tenant architecture, normalized schemas, performance optimization</li>
                <li>• API design: REST, webhooks, real-time events</li>
              </ul>
            </div>

            {/* AI & Automation */}
            <div className="rounded-xl bg-white p-6 border-2 border-terracotta-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-terracotta-100 flex items-center justify-center">
                  <Award className="h-5 w-5 text-terracotta-700" />
                </div>
                <Heading as="h3" variant="h3" className="text-terracotta-700">
                  AI & Automation
                </Heading>
              </div>
              <ul className="space-y-2 font-inter text-sm leading-[1.6] text-neutral-700">
                <li>• Prompt engineering for code generation (Claude, GPT-4)</li>
                <li>• AI-driven development workflows</li>
                <li>• LLM integration for content generation and analysis</li>
                <li>• Automated testing and deployment pipelines</li>
              </ul>
            </div>

            {/* Product & Architecture */}
            <div className="rounded-xl bg-white p-6 border-2 border-sage-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center">
                  <Code className="h-5 w-5 text-sage-700" />
                </div>
                <Heading as="h3" variant="h3" className="text-sage-700">
                  Product & Architecture
                </Heading>
              </div>
              <ul className="space-y-2 font-inter text-sm leading-[1.6] text-neutral-700">
                <li>• Multi-tenant SaaS architecture</li>
                <li>• Event-driven microservices (92 services)</li>
                <li>• Real-time collaboration systems (Yjs)</li>
                <li>• Complex scheduling (RRULE/RFC 5545)</li>
                <li>• Payment infrastructure (Stripe Connect)</li>
              </ul>
            </div>

            {/* Business & Growth */}
            <div className="rounded-xl bg-white p-6 border-2 border-terracotta-200 shadow-sm hover:shadow-md transition-shadow duration-300 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-terracotta-100 flex items-center justify-center">
                  <Users className="h-5 w-5 text-terracotta-700" />
                </div>
                <Heading as="h3" variant="h3" className="text-terracotta-700">
                  Business & Growth
                </Heading>
              </div>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 font-inter text-sm leading-[1.6] text-neutral-700">
                <li>• B2B enterprise sales</li>
                <li>• Product-led growth strategies</li>
                <li>• Community building & marketplace dynamics</li>
                <li>• Data-driven decision making</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="rounded-xl bg-gradient-to-br from-terracotta-50 to-sage-50 p-6 md:p-8 border-2 border-neutral-200 shadow-sm">
          <Heading as="h2" variant="h2" className="mb-6">
            Key Achievements
          </Heading>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex gap-4 p-4 rounded-lg bg-white border-l-4 border-terracotta-500 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-terracotta-100 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <Text variant="body" weight="semibold" className="mb-1 text-neutral-900">
                  Self-taught full-stack development
                </Text>
                <Text variant="small" className="text-neutral-600">
                  Through AI pair programming in 6 months
                </Text>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-lg bg-white border-l-4 border-sage-500 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center">
                <span className="text-2xl">💪</span>
              </div>
              <div>
                <Text variant="body" weight="semibold" className="mb-1 text-neutral-900">
                  Built production system
                </Text>
                <Text variant="small" className="text-neutral-600">
                  Handling 261 database tables with zero major incidents
                </Text>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-lg bg-white border-l-4 border-terracotta-500 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-terracotta-100 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <Text variant="body" weight="semibold" className="mb-1 text-neutral-900">
                  Reduced development time by 10x
                </Text>
                <Text variant="small" className="text-neutral-600">
                  Using AI-driven methodologies
                </Text>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-lg bg-white border-l-4 border-sage-500 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <Text variant="body" weight="semibold" className="mb-1 text-neutral-900">
                  Maintained business operations
                </Text>
                <Text variant="small" className="text-neutral-600">
                  While completing technical transformation
                </Text>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section>
          <Heading as="h2" variant="h2" className="mb-8">
            Experience
          </Heading>
          <div className="relative space-y-8">
            {/* Vertical Timeline Line */}
            <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-terracotta-300 via-sage-300 to-terracotta-300" />

            {timelineMilestones.map((milestone, index) => (
              <div key={milestone.id} className="relative flex gap-6 group">
                {/* Timeline Dot */}
                <div className="relative flex-shrink-0 z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    milestone.badgeVariant === 'terracotta'
                      ? 'bg-terracotta-100 border-2 border-terracotta-500'
                      : milestone.badgeVariant === 'sage'
                      ? 'bg-sage-100 border-2 border-sage-500'
                      : 'bg-neutral-100 border-2 border-neutral-500'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-3 h-3 rounded-full ${
                      milestone.badgeVariant === 'terracotta'
                        ? 'bg-terracotta-600'
                        : milestone.badgeVariant === 'sage'
                        ? 'bg-sage-600'
                        : 'bg-neutral-600'
                    }`} />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 pb-8">
                  <div className="rounded-xl bg-white p-6 border-2 border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300">
                    <Badge
                      variant={
                        milestone.badgeVariant === 'terracotta'
                          ? 'warning'
                          : milestone.badgeVariant === 'sage'
                          ? 'success'
                          : 'default'
                      }
                      size="sm"
                      className="mb-3"
                    >
                      {milestone.date}
                    </Badge>
                    <Heading as="h3" variant="h4" className="mb-3">
                      {milestone.title}
                    </Heading>
                    <Text variant="body" className="text-neutral-700 leading-relaxed">
                      {milestone.description}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
