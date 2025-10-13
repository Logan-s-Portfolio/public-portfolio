/**
 * Stripe Skill Page (/skills/stripe-marketplaces)
 *
 * Deep dive into Stripe payment integration expertise.
 * Shows examples, payment flows, and approach.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Badge } from "@/components/atoms/Badge";
import { Link } from "@/components/atoms/Link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stripe (Marketplaces & Subscriptions) | Skills",
  description:
    "Payment processing, subscriptions, and marketplace integrations",
};

export default function StripeSkillPage() {
  const breadcrumbs = [
    { label: "Skills", href: "/skills" },
    { label: "Stripe", href: "/skills/stripe-marketplaces" },
  ];

  return (
    <DocsLayout
      currentPath="/skills/stripe-marketplaces"
      breadcrumbs={breadcrumbs}
      pageTitle="Stripe (Marketplaces & Subscriptions)"
    >
      {/* Overview */}
      <section className="mb-12">
        <div className="mb-6 flex items-center gap-4">
          <span className="text-5xl" aria-hidden="true">
            💳
          </span>
          <div>
            <Text variant="lead" className="mb-2">
              Payment processing, subscriptions, and marketplace integrations
            </Text>
            <Badge variant="sage" size="sm">
              3+ years
            </Badge>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-8">
          Examples
        </Heading>
        <div className="space-y-8">
          <Link
            href="/case-studies/austin-power-alert"
            className="group block overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="aspect-video w-full overflow-hidden bg-neutral-100">
              <img
                src="https://placehold.co/600x400/B85032/FFFFFF?text=Stripe+Subscriptions"
                alt="Austin Power Alert Subscriptions"
                className="h-full w-full object-cover transition-transform duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <Heading
                as="h3"
                variant="section"
                className="mb-3 font-fraunces text-xl font-semibold text-neutral-900"
              >
                Austin Power Alert Subscriptions
              </Heading>
              <Text variant="body" className="mb-4 text-neutral-600">
                Implemented Stripe subscription management with monthly and
                annual plans, trial periods, and automatic renewals
              </Text>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" size="sm">
                  Subscriptions
                </Badge>
                <Badge variant="outline" size="sm">
                  Stripe API
                </Badge>
                <Badge variant="outline" size="sm">
                  Billing
                </Badge>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* How I Use It Section */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-6">
          How I Use It
        </Heading>
        <div className="space-y-6">
          <Text variant="body" className="mb-4">
            I integrate Stripe for subscription management, one-time payments,
            and marketplace transactions using modern payment flows.
          </Text>

          <Heading as="h3" variant="section" className="mb-4 mt-8">
            Subscription Management
          </Heading>
          <Text variant="body" className="mb-4">
            I build complete subscription workflows including:
          </Text>
          <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
            <li>Recurring billing (monthly, annual, custom intervals)</li>
            <li>Trial periods and promotional pricing</li>
            <li>Subscription upgrades and downgrades</li>
            <li>Payment method management</li>
            <li>Failed payment handling and dunning</li>
          </ul>

          <Heading as="h3" variant="section" className="mb-4 mt-8">
            Payment Flow Best Practices
          </Heading>
          <Text variant="body" className="mb-4">
            I follow Stripe's best practices for secure, conversion-optimized
            payment flows:
          </Text>
          <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
            <li>Stripe Elements for PCI compliance</li>
            <li>Strong Customer Authentication (SCA) / 3D Secure</li>
            <li>Webhook handling for async events</li>
            <li>Error handling and retry logic</li>
          </ul>

          <Heading as="h3" variant="section" className="mb-4 mt-8">
            Marketplace Integrations
          </Heading>
          <Text variant="body" className="mb-4">
            I've built marketplace payment flows with Stripe Connect, handling
            multi-party payments and platform fees.
          </Text>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-6">
          My Approach
        </Heading>
        <div className="space-y-6">
          <Text variant="body" className="mb-4">
            <strong>Security First:</strong> I follow PCI DSS compliance and
            Stripe's security best practices, never storing card details
            directly.
          </Text>
          <Text variant="body" className="mb-4">
            <strong>User Experience Focus:</strong> I optimize checkout flows
            for conversion, with clear error messages, loading states, and
            success confirmations.
          </Text>
          <Text variant="body">
            <strong>Robust Error Handling:</strong> I implement comprehensive
            error handling for edge cases like failed payments, expired cards,
            and webhook failures.
          </Text>
        </div>
      </section>

      {/* Related Skills */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-6">
          Related Skills
        </Heading>
        <ul className="space-y-2">
          <li>
            <Link
              href="/skills/flutterflow"
              className="font-inter text-base text-terracotta-600 transition-colors hover:text-terracotta-700"
            >
              Flutterflow →
            </Link>
          </li>
          <li>
            <Link
              href="/skills/nextjs-react"
              className="font-inter text-base text-terracotta-600 transition-colors hover:text-terracotta-700"
            >
              Next.js + React →
            </Link>
          </li>
        </ul>
      </section>
    </DocsLayout>
  );
}
