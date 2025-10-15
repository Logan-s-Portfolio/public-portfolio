/**
 * Contact Page (/contact)
 *
 * Contact page with Calendly scheduling integration.
 */

"use client";

import { useState } from "react";
import Script from "next/script";
import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Tag } from "@/components/atoms/Tag";
import { Mail, Linkedin, Calendar, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);
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
        strategy="afterInteractive"
        onLoad={() => {
          // Wait a brief moment for Calendly to initialize the widget
          setTimeout(() => {
            setIsCalendlyLoaded(true);
          }, 500);
        }}
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

            <div className="relative overflow-hidden rounded-xl" style={{ minWidth: '320px', height: '750px' }}>
              {/* Skeleton Loader */}
              {!isCalendlyLoaded && (
                <div className="absolute inset-0 border-2 border-neutral-200 bg-gradient-to-br from-terracotta-50 via-white to-sage-50 shadow-lg overflow-hidden z-10">
                  <div className="flex flex-col items-center justify-center h-full space-y-6 p-8">
                    {/* Animated Calendar Icon */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-terracotta-400 rounded-2xl blur-xl opacity-30 animate-pulse" />
                      <div className="relative bg-white rounded-2xl p-6 shadow-xl">
                        <Calendar className="h-16 w-16 text-terracotta-600" />
                      </div>
                    </div>

                    {/* Loading Text */}
                    <div className="text-center space-y-2">
                      <div className="flex items-center gap-2 justify-center">
                        <Loader2 className="h-5 w-5 text-terracotta-600 animate-spin" />
                        <Text variant="body" className="font-semibold text-neutral-900">
                          Loading calendar...
                        </Text>
                      </div>
                      <Text variant="small" className="text-neutral-600">
                        This will only take a moment
                      </Text>
                    </div>

                    {/* Animated Bars (skeleton) */}
                    <div className="w-full max-w-md space-y-3 mt-8">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="h-16 rounded-lg bg-neutral-200 animate-pulse"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Calendly Widget */}
              <div
                className="calendly-inline-widget absolute inset-0"
                data-url="https://calendly.com/meetforcoffee/30min"
                data-resize="true"
                style={{
                  opacity: isCalendlyLoaded ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                }}
              />
            </div>
          </div>

          <style jsx>{`
            .calendly-inline-widget {
              overflow: hidden !important;
            }
            .calendly-inline-widget iframe {
              height: 100% !important;
              min-height: 750px !important;
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
