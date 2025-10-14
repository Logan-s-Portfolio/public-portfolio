/**
 * Duro Case Study (/case-studies/duro)
 *
 * Detailed case study of the Duro fitness marketplace platform.
 * Shows challenge, solution, technical approach, and results.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Text } from "@/components/atoms/Text";
import { Heading } from "@/components/atoms/Heading";
import { Code } from "@/components/atoms/Code";
import { Tag } from "@/components/atoms/Tag";
import { Safari } from "@/components/ui/safari";
import { Iphone } from "@/components/ui/iphone";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duro Case Study",
  description:
    "Building a two-sided marketplace for fitness communities with Stripe Connect and multi-tenancy",
};

export default function DuroCaseStudyPage() {
  const breadcrumbs = [
    {
      label: "Duro Case Study",
      href: "/case-studies/duro",
    },
  ];

  const techStack = [
    { label: "Next.js", variant: "terracotta" as const },
    { label: "Supabase", variant: "sage" as const },
    { label: "Stripe Connect", variant: "terracotta" as const },
    { label: "Multi-Tenancy", variant: "sage" as const },
    { label: "RBAC", variant: "terracotta" as const },
    { label: "Firebase", variant: "sage" as const },
  ];

  return (
    <DocsLayout
      currentPath="/case-studies/duro"
      breadcrumbs={breadcrumbs}
    >
      {/* Hero Section */}
      <div className="space-y-6 max-w-4xl">
        <img
          src="/duro_logo.png"
          alt="Duro Logo"
          className="h-12 w-auto"
        />
        <Heading as="h1" variant="display" className="text-neutral-900">
          Duro: Fitness Community Marketplace
        </Heading>
        <Text variant="lead" className="text-neutral-600">
          Two-sided marketplace connecting fitness communities with members
          through intelligent booking and event management
        </Text>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Tag key={tech.label} variant={tech.variant} size="md">
              {tech.label}
            </Tag>
          ))}
        </div>
      </div>

      {/* Overview */}
      <section className="my-16">
        <Heading as="h2" variant="h2" className="mb-8">
          Overview
        </Heading>
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <Text variant="small" className="mb-2 font-semibold uppercase tracking-wide text-neutral-600">
              Client
            </Text>
            <Text variant="body" className="text-neutral-900">
              Personal Project → Production Platform
            </Text>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <Text variant="small" className="mb-2 font-semibold uppercase tracking-wide text-neutral-600">
              Role
            </Text>
            <Text variant="body" className="text-neutral-900">
              Solo Developer & Designer
            </Text>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <Text variant="small" className="mb-2 font-semibold uppercase tracking-wide text-neutral-600">
              Tech Stack
            </Text>
            <Text variant="body" className="text-neutral-900">
              Next.js, Supabase, Stripe Connect, RRULE, TypeScript
            </Text>
          </div>
        </div>
        <Text variant="body">
          Duro is a two-sided marketplace platform that connects fitness
          community organizers with members. Organizers get powerful tools for
          event management, recurring classes, custom dashboards, and split
          payment processing. Members get seamless discovery, booking, and
          payment for fitness events.
        </Text>
      </section>

      {/* iOS App Showcase */}
      <section className="my-16">
        <Heading as="h2" variant="h2" className="mb-4">
          iOS App Experience
        </Heading>
        <Text variant="body" className="mb-8 text-neutral-600">
          FlutterFlow MVP - Phase 1 mobile app screenshots from the App Store listing
        </Text>

        {/* Horizontal Scroll Container */}
        <div className="relative -mx-4 md:-mx-6 lg:-mx-8">
          <div className="overflow-x-auto pb-8 px-4 md:px-6 lg:px-8 scrollbar-hide">
            <div className="flex gap-6 w-max">
              <div className="w-[280px] flex-shrink-0">
                <Iphone src="/iOS Listing Screenshots/IOS ScreenShots-01.png" />
              </div>
              <div className="w-[280px] flex-shrink-0">
                <Iphone src="/iOS Listing Screenshots/IOS ScreenShots-02.png" />
              </div>
              <div className="w-[280px] flex-shrink-0">
                <Iphone src="/iOS Listing Screenshots/IOS ScreenShots-03.png" />
              </div>
              <div className="w-[280px] flex-shrink-0">
                <Iphone src="/iOS Listing Screenshots/IOS ScreenShots-04.png" />
              </div>
              <div className="w-[280px] flex-shrink-0">
                <Iphone src="/iOS Listing Screenshots/IOS ScreenShots-05.png" />
              </div>
              <div className="w-[280px] flex-shrink-0">
                <Iphone src="/iOS Listing Screenshots/IOS ScreenShots-06.png" />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>

        <Text variant="small" className="mt-4 text-neutral-500 text-center italic">
          Swipe to see more screens →
        </Text>
      </section>

      {/* Next.js Rebuild Screenshots */}
      <section className="my-16">
        <Heading as="h2" variant="h2" className="mb-4">
          Next.js Rebuild - Phase 2
        </Heading>
        <Text variant="body" className="mb-8 text-neutral-600">
          Enterprise platform with multi-tenancy, RBAC, and advanced scheduling features
        </Text>

        <div className="space-y-12">
          {/* Communities View */}
          <div>
            <Heading as="h3" variant="h4" className="mb-4">
              Communities Dashboard
            </Heading>
            <Text variant="body" className="mb-6 text-neutral-600">
              Multi-tenant organizer view with event management and member analytics
            </Text>
            <Safari
              url="app.joinduro.com/communities"
              imageSrc="/communities.png"
            />
          </div>

          {/* Events View */}
          <div>
            <Heading as="h3" variant="h4" className="mb-4">
              Event Management
            </Heading>
            <Text variant="body" className="mb-6 text-neutral-600">
              RRULE recurring events, real-time availability, and Calendly-like booking interface
            </Text>
            <Safari
              url="app.joinduro.com/events"
              imageSrc="/events.png"
            />
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="mb-16">
        <Heading as="h2" variant="h2" className="mb-8">
          The Challenge
        </Heading>
        <Text variant="body" className="mb-4">
          Fitness community organizers were using fragmented tools: Eventbrite
          for ticketing, Google Calendar for scheduling, Stripe for payments,
          and spreadsheets for member management. Each tool charged fees, none
          talked to each other, and the experience was clunky for both
          organizers and attendees.
        </Text>
        <Text variant="body" className="mb-4">
          <strong>Organizer Pain Points:</strong>
        </Text>
        <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            Multiple platforms = multiple fees (Eventbrite 3.5% + $1.79, Stripe
            2.9% + $0.30)
          </li>
          <li>
            No unified dashboard for events, bookings, revenue, and member
            management
          </li>
          <li>Recurring classes required manual event creation every week</li>
          <li>
            Complex payment flows (refunds, no-shows, split payments for
            co-hosted events)
          </li>
          <li>
            Limited customization - organizers wanted branded booking pages
          </li>
        </ul>
        <Text variant="body" className="mb-4">
          <strong>Member Pain Points:</strong>
        </Text>
        <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            Scattered bookings across different platforms and organizers
          </li>
          <li>No centralized place to discover local fitness communities</li>
          <li>Inconsistent booking experiences per organizer</li>
          <li>Difficulty managing recurring class memberships</li>
        </ul>
        <Text variant="body" className="mb-4">
          <strong>Technical Challenges:</strong>
        </Text>
        <ul className="list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            Two-sided marketplace requiring different user roles and permissions
            (RBAC)
          </li>
          <li>
            Multi-tenancy: Each organizer needs isolated data with row-level
            security
          </li>
          <li>
            Stripe Connect marketplace integration (onboarding, split payments,
            platform fees)
          </li>
          <li>
            RRULE implementation for recurring events (like Google Calendar's
            "every Tuesday at 6pm")
          </li>
          <li>
            Calendly-like booking UX with real-time availability and conflict
            detection
          </li>
          <li>
            Notion-like dashboard creator so organizers can customize their
            workspace
          </li>
        </ul>
      </section>

      {/* Solution */}
      <section className="mb-16">
        <Heading as="h2" variant="h2" className="mb-8">
          The Solution
        </Heading>
        <Text variant="body" className="mb-4">
          I built Duro in two phases: Flutterflow MVP for validation, then
          Next.js rebuild for complex marketplace features.
        </Text>

        <Heading as="h3" variant="h3" className="mb-4 mt-8">
          Phase 1: Flutterflow MVP
        </Heading>
        <Text variant="body" className="mb-4">
          Built initial marketplace with Flutterflow + Firebase for speed.
          Validated product-market fit with TruFusion South Austin (10+
          events). Proved organizers wanted unified booking + payments.
        </Text>

        <Heading as="h3" variant="h3" className="mb-4 mt-8">
          Phase 2: Next.js Rebuild
        </Heading>
        <Text variant="body" className="mb-4">
          Hit Flutterflow limitations with RBAC, multi-tenancy, and RRULE.
          Rebuilt from scratch with Next.js + Supabase for complex features:
        </Text>
        <ul className="mb-8 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>Multi-Tenant Architecture:</strong> Supabase Row-Level
            Security (RLS) for data isolation per organizer
          </li>
          <li>
            <strong>RBAC:</strong> Organizers, staff, members, admins with
            granular permissions
          </li>
          <li>
            <strong>Stripe Connect:</strong> Automated onboarding, split
            payments, platform fees
          </li>
          <li>
            <strong>RRULE Events:</strong> Recurring classes with complex
            schedules (every Tuesday + Thursday)
          </li>
          <li>
            <strong>Calendly-like Booking:</strong> Real-time availability,
            conflict detection, waitlists
          </li>
          <li>
            <strong>Dashboard Creator:</strong> Notion-like drag-and-drop
            widgets for organizers
          </li>
        </ul>
      </section>

      {/* Technical Approach */}
      <section className="mb-16">
        <Heading as="h2" variant="h2" className="mb-8">
          Technical Approach
        </Heading>

        <Heading as="h3" variant="h3" className="mb-4">
          Multi-Tenancy with Supabase RLS
        </Heading>
        <Text variant="body" className="mb-4">
          Each organizer is a tenant with isolated data. Used Supabase
          Row-Level Security policies to enforce data boundaries at the database
          level:
        </Text>
        <Code inline={false} className="mb-8">
          {`-- Row-Level Security policy for organizers
CREATE POLICY "Organizers can only see their events"
ON events
FOR SELECT
USING (organizer_id = auth.uid());

-- Members can see events they've booked
CREATE POLICY "Members can see their bookings"
ON bookings
FOR SELECT
USING (user_id = auth.uid());

-- RBAC: Staff members inherit organizer permissions
CREATE POLICY "Staff can manage organizer events"
ON events
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM team_members
    WHERE team_members.user_id = auth.uid()
    AND team_members.organizer_id = events.organizer_id
    AND team_members.role IN ('staff', 'admin')
  )
);`}
        </Code>

        <Heading as="h3" variant="h3" className="mb-4 mt-8">
          Stripe Connect Marketplace Integration
        </Heading>
        <Text variant="body" className="mb-4">
          Implemented Stripe Connect Express for organizer onboarding and split
          payment flows:
        </Text>
        <Code inline={false} className="mb-8">
          {`// Organizer onboarding to Stripe Connect
async function onboardOrganizer(organizerId: string) {
  // Create Stripe Connect account
  const account = await stripe.accounts.create({
    type: 'express',
    country: 'US',
    email: organizerEmail,
    capabilities: {
      card_payments: { requested: true },
      transfers: { requested: true },
    },
  });

  // Generate onboarding link
  const accountLink = await stripe.accountLinks.create({
    account: account.id,
    refresh_url: \`\${baseUrl}/dashboard/stripe/refresh\`,
    return_url: \`\${baseUrl}/dashboard/stripe/success\`,
    type: 'account_onboarding',
  });

  return accountLink.url;
}

// Split payment: Platform fee + Organizer payout
async function processBooking(booking: Booking) {
  const platformFee = booking.price * 0.05; // 5% platform fee
  const organizerPayout = booking.price - platformFee;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: booking.price * 100,
    currency: 'usd',
    customer: booking.customerId,
    application_fee_amount: platformFee * 100,
    transfer_data: {
      destination: booking.organizerStripeAccountId,
    },
  });

  return paymentIntent;
}`}
        </Code>

        <Heading as="h3" variant="h3" className="mb-4 mt-8">
          RRULE Recurring Events
        </Heading>
        <Text variant="body" className="mb-4">
          Implemented RRULE (iCalendar recurrence rules) for complex recurring
          class schedules:
        </Text>
        <Code inline={false} className="mb-8">
          {`import { RRule } from 'rrule';

// Example: Every Tuesday and Thursday at 6pm for 12 weeks
const rule = new RRule({
  freq: RRule.WEEKLY,
  byweekday: [RRule.TU, RRule.TH],
  dtstart: new Date(2024, 0, 1, 18, 0),
  count: 24, // 12 weeks × 2 days
});

// Generate all event instances
const instances = rule.all();
// [
//   2024-01-02T18:00:00 (Tue),
//   2024-01-04T18:00:00 (Thu),
//   2024-01-09T18:00:00 (Tue),
//   ...
// ]

// Store as event series with individual instance overrides
await supabase.from('event_series').insert({
  organizer_id: organizerId,
  rrule: rule.toString(),
  base_event: { name, price, capacity },
});

// Allow canceling individual instances
await supabase.from('event_instance_overrides').insert({
  series_id: seriesId,
  instance_date: '2024-01-09',
  status: 'canceled', // Cancel one occurrence
});`}
        </Code>

        <Heading as="h3" variant="h3" className="mb-4 mt-8">
          Notion-like Dashboard Creator
        </Heading>
        <Text variant="body" className="mb-4">
          Built a drag-and-drop dashboard system where organizers could
          customize their workspace with widgets (revenue charts, upcoming
          events, member lists):
        </Text>
        <Code inline={false} className="mb-6">
          {`// Dashboard schema stored in Supabase
interface DashboardLayout {
  organizer_id: string;
  widgets: Widget[];
}

interface Widget {
  id: string;
  type: 'revenue' | 'events' | 'members' | 'analytics';
  position: { x: number; y: number; w: number; h: number };
  config: Record<string, any>;
}

// React Grid Layout for drag-and-drop
import GridLayout from 'react-grid-layout';

function OrganizerDashboard({ layout }: { layout: DashboardLayout }) {
  return (
    <GridLayout
      layout={layout.widgets.map(w => w.position)}
      onLayoutChange={saveLayout}
    >
      {layout.widgets.map(widget => (
        <div key={widget.id}>
          {renderWidget(widget)}
        </div>
      ))}
    </GridLayout>
  );
}`}
        </Code>
      </section>

      {/* Results */}
      <section className="mb-16">
        <Heading as="h2" variant="h2" className="mb-8">
          Results
        </Heading>
        <Text variant="body" className="mb-4">
          <strong>Platform Impact:</strong>
        </Text>
        <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>TruFusion South Austin partnership</strong> with 10+
            successful events
          </li>
          <li>
            <strong>Multi-organizer marketplace</strong> supporting multiple
            fitness communities
          </li>
          <li>
            <strong>5% platform fee</strong> vs. Eventbrite's 5.3% (lower cost
            for organizers)
          </li>
        </ul>

        <Text variant="body" className="mb-4">
          <strong>Technical Achievements:</strong>
        </Text>
        <ul className="list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            Built MVP with Flutterflow for rapid validation, then rebuilt as complex platform with Next.js
          </li>
          <li>
            Implemented production-grade multi-tenancy with Supabase RLS (data
            isolation at database level)
          </li>
          <li>
            Successfully integrated Stripe Connect marketplace (onboarding,
            split payments, platform fees)
          </li>
          <li>
            RRULE implementation supporting complex recurring class schedules
          </li>
          <li>
            Notion-like dashboard creator with drag-and-drop customization
          </li>
          <li>
            Calendly-like booking UX with real-time availability and conflict
            detection
          </li>
        </ul>
      </section>

      {/* Learnings */}
      <section className="mb-16">
        <Heading as="h2" variant="h2" className="mb-8">
          Key Learnings
        </Heading>
        <Text variant="body" className="mb-4">
          <strong>What Worked Well:</strong>
        </Text>
        <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>Flutterflow for MVP Validation:</strong> Built and launched
            rapidly, validated product-market fit with real partner before
            investing in complex rebuild
          </li>
          <li>
            <strong>Supabase RLS for Multi-Tenancy:</strong> Row-Level Security
            policies enforced data isolation at database level - no application
            logic bugs could leak data
          </li>
          <li>
            <strong>Stripe Connect for Marketplaces:</strong> Stripe's
            marketplace APIs handled all compliance (KYC, tax forms,
            onboarding) - would've been complex to build manually
          </li>
          <li>
            <strong>RRULE Library:</strong> Used battle-tested RFC 5545
            standard for recurring events instead of building custom solution
          </li>
          <li>
            <strong>Partner-First Launch:</strong> TruFusion South Austin
            partnership provided real-world feedback before scaling
          </li>
        </ul>

        <Text variant="body" className="mb-4">
          <strong>What I'd Do Differently:</strong>
        </Text>
        <ul className="list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>Start with Next.js:</strong> While Flutterflow was great
            for MVP, I knew I'd hit limits. Could've avoided the rebuild by
            starting with Next.js + simplified feature set
          </li>
          <li>
            <strong>Earlier Stripe Connect Testing:</strong> Stripe Connect
            onboarding has edge cases (international organizers, tax forms) -
            should've tested earlier in MVP
          </li>
          <li>
            <strong>Simpler Dashboard Initially:</strong> Notion-like dashboard
            creator was over-engineered. Most organizers wanted 2-3 preset
            layouts, not full customization
          </li>
          <li>
            <strong>Better RRULE Exception Handling:</strong> Canceling
            individual recurring event instances created UX complexity - needed
            clearer UI patterns upfront
          </li>
        </ul>
      </section>

    </DocsLayout>
  );
}
