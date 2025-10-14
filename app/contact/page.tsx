/**
 * Contact Page (/contact)
 *
 * Contact page with Calendly scheduling integration.
 */

"use client";

import Script from "next/script";
import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Tag } from "@/components/atoms/Tag";
import { Mail, Linkedin } from "lucide-react";

export default function ContactPage() {
  const breadcrumbs = [
    { label: "Contact", href: "/contact" },
  ];

  const meetingTypes = [
    { label: "30min Chat", variant: "terracotta" as const },
    { label: "Coffee Meeting", variant: "sage" as const },
    { label: "Portfolio Review", variant: "terracotta" as const },
  ];

  return (
    <>
      {/* Calendly widget script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <DocsLayout
        currentPath="/contact"
        breadcrumbs={breadcrumbs}
      >
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="space-y-6 max-w-4xl">
            <Heading as="h1" variant="display" className="text-neutral-900">
              Let's Connect
            </Heading>
            <Text variant="lead" className="text-neutral-600">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Schedule a meeting or reach out directly.
            </Text>
            <div className="flex flex-wrap gap-2">
              {meetingTypes.map((type) => (
                <Tag key={type.label} variant={type.variant} size="md">
                  {type.label}
                </Tag>
              ))}
            </div>
          </div>

          {/* Narrative: My Approach to Meetings */}
          <div className="max-w-3xl space-y-3">
            <Heading as="h2" variant="h2">
              What to Expect
            </Heading>
            <Text variant="body" className="text-neutral-700">
              I treat every conversation as a collaboration. Whether you're looking to discuss a project, explore a partnership, or just want to chat about design systems and AI-assisted development, I bring the same energy: curiosity, clarity, and a focus on finding the right solution.
            </Text>
            <Text variant="body" className="text-neutral-700">
              Book a 30-minute slot below, and we'll dive into your needs, explore possibilities, and determine if we're a good fit to work together.
            </Text>
          </div>

          {/* Calendly Embed Section */}
          <div className="max-w-4xl space-y-4">
            <Heading as="h2" variant="h2">
              Schedule a Meeting
            </Heading>

            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/meetforcoffee/30min"
              data-resize="true"
              style={{ minWidth: '320px', height: '750px' }}
            />
          </div>

          <style jsx>{`
            .calendly-inline-widget {
              overflow-y: hidden !important;
            }
          `}</style>

          {/* Alternative Contact Methods */}
          <div className="max-w-4xl space-y-4">
            <Heading as="h2" variant="h2">
              Other Ways to Reach Me
            </Heading>
            <Text variant="body" className="text-neutral-700">
              Prefer a different communication channel? Connect with me directly.
            </Text>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Email Card */}
              <div className="rounded-xl border-2 border-sage-200 bg-sage-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-600">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <Heading as="h3" variant="h3" className="text-sage-700">
                    Email
                  </Heading>
                </div>
                <Text variant="body" className="mb-4 text-neutral-700">
                  For detailed inquiries or project proposals
                </Text>
                <a
                  href="mailto:bellconner@gmail.com"
                  className="text-sage-700 font-semibold hover:underline"
                >
                  bellconner@gmail.com →
                </a>
              </div>

              {/* LinkedIn Card */}
              <div className="rounded-xl border-2 border-terracotta-200 bg-terracotta-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta-600">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <Heading as="h3" variant="h3" className="text-terracotta-700">
                    LinkedIn
                  </Heading>
                </div>
                <Text variant="body" className="mb-4 text-neutral-700">
                  Connect professionally and see my network
                </Text>
                <a
                  href="https://www.linkedin.com/in/connerloganbell/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta-700 font-semibold hover:underline"
                >
                  View Profile →
                </a>
              </div>
            </div>
          </div>
        </div>
      </DocsLayout>
    </>
  );
}
