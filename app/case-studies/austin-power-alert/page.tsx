/**
 * Austin Power Alert Case Study (/case-studies/austin-power-alert)
 *
 * Detailed case study of the Austin Power Alert mobile app.
 * Shows challenge, solution, technical approach, and results.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Text } from "@/components/atoms/Text";
import { Heading } from "@/components/atoms/Heading";
import { Code } from "@/components/atoms/Code";
import { Badge } from "@/components/atoms/Badge";
import { Link } from "@/components/atoms/Link";
import { TimelineSection } from "@/components/organisms/TimelineSection";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Austin Power Alert Case Study",
  description:
    "How I built a real-time electricity pricing app with Flutterflow and Stripe",
};

export default function AustinPowerAlertCaseStudyPage() {
  const breadcrumbs = [
    { label: "Case Studies", href: "/case-studies" },
    {
      label: "Austin Power Alert",
      href: "/case-studies/austin-power-alert",
    },
  ];

  const timeline = [
    {
      id: "1",
      date: "Week 1-2",
      title: "Research & Planning",
      description:
        "User interviews with Austin Energy customers, competitive analysis, technical architecture planning",
    },
    {
      id: "2",
      date: "Week 3-6",
      title: "MVP Development",
      description:
        "Built core app in Flutterflow, Austin Energy data scraper, Supabase backend setup",
    },
    {
      id: "3",
      date: "Week 7-8",
      title: "Stripe Integration",
      description:
        "Implemented subscription flow, payment processing, tier management",
    },
    {
      id: "4",
      date: "Week 9-10",
      title: "Beta Testing",
      description:
        "20 beta testers, bug fixes, notification optimization",
    },
    {
      id: "5",
      date: "Week 11-12",
      title: "Launch & Iteration",
      description:
        "App store submission, marketing, user feedback, feature improvements",
    },
  ];

  return (
    <DocsLayout
      currentPath="/case-studies/austin-power-alert"
      breadcrumbs={breadcrumbs}
      pageTitle="Austin Power Alert"
    >
      {/* Hero Section */}
      <div className="mb-12">
        <Text variant="lead" className="mb-6">
          Real-time electricity pricing app helping users save money on
          electricity
        </Text>
        <div className="mb-6 flex flex-wrap gap-2">
          <Badge variant="terracotta" size="md">
            Flutterflow
          </Badge>
          <Badge variant="terracotta" size="md">
            Stripe
          </Badge>
          <Badge variant="terracotta" size="md">
            API Integration
          </Badge>
          <Badge variant="terracotta" size="md">
            Mobile App
          </Badge>
          <Badge variant="terracotta" size="md">
            Supabase
          </Badge>
        </div>
        <div className="aspect-video w-full overflow-hidden rounded-xl bg-neutral-100">
          <img
            src="https://placehold.co/1200x600/B85032/FFFFFF?text=Austin+Power+Alert+Hero"
            alt="Austin Power Alert Hero"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Overview */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-8">
          Overview
        </Heading>
        <div className="mb-8 grid grid-cols-1 gap-6 rounded-xl bg-neutral-50 p-6 md:grid-cols-2">
          <div>
            <div className="mb-2 font-inter text-sm font-semibold uppercase tracking-wide text-neutral-600">
              Client
            </div>
            <div className="font-inter text-base text-neutral-900">
              Personal Project
            </div>
          </div>
          <div>
            <div className="mb-2 font-inter text-sm font-semibold uppercase tracking-wide text-neutral-600">
              Timeline
            </div>
            <div className="font-inter text-base text-neutral-900">
              3 months (2024)
            </div>
          </div>
          <div>
            <div className="mb-2 font-inter text-sm font-semibold uppercase tracking-wide text-neutral-600">
              Role
            </div>
            <div className="font-inter text-base text-neutral-900">
              Solo Developer & Designer
            </div>
          </div>
          <div>
            <div className="mb-2 font-inter text-sm font-semibold uppercase tracking-wide text-neutral-600">
              Tech Stack
            </div>
            <div className="font-inter text-base text-neutral-900">
              Flutterflow, Stripe, Supabase, Austin Energy API
            </div>
          </div>
        </div>
        <Text variant="body">
          Austin Power Alert is a mobile app that monitors real-time
          electricity prices from Austin Energy and sends push notifications
          when prices are low. Users save money by running high-energy
          appliances (washing machines, dishwashers, EV charging) during
          cheaper hours.
        </Text>
      </section>

      {/* Challenge */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-8">
          The Challenge
        </Heading>
        <Text variant="body" className="mb-4">
          Austin Energy uses time-of-use pricing, where electricity costs vary
          dramatically by hour. Prices can range from $0.03/kWh at 3am to
          $0.15/kWh at 6pm - a 5x difference. However, most users don't check
          prices and miss savings opportunities.
        </Text>
        <Text variant="body" className="mb-4">
          <strong>User Pain Points:</strong>
        </Text>
        <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>No easy way to check current electricity prices</li>
          <li>Can't remember to run appliances at optimal times</li>
          <li>Austin Energy's website is clunky and not mobile-friendly</li>
          <li>
            Potential savings of $300-500/year per household going unrealized
          </li>
        </ul>
        <Text variant="body" className="mb-4">
          <strong>Technical Challenges:</strong>
        </Text>
        <ul className="list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>Austin Energy doesn't have a documented public API</li>
          <li>Need real-time data updates throughout the day</li>
          <li>Push notifications must be reliable and timely</li>
          <li>Monetization through subscriptions (Stripe integration)</li>
        </ul>
      </section>

      {/* Solution */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-8">
          The Solution
        </Heading>
        <Text variant="body" className="mb-4">
          I built a Flutterflow mobile app that monitors Austin Energy's
          pricing data and sends smart notifications when electricity is cheap.
        </Text>
        <Text variant="body" className="mb-4">
          <strong>Key Features:</strong>
        </Text>
        <ul className="mb-8 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>Real-Time Price Display:</strong> Current, next-hour, and
            24-hour price forecast
          </li>
          <li>
            <strong>Smart Notifications:</strong> Alerts when prices drop below
            user-set thresholds
          </li>
          <li>
            <strong>Historical Trends:</strong> Charts showing price patterns
            over days/weeks
          </li>
          <li>
            <strong>Subscription Model:</strong> Free tier (basic alerts) +
            Premium tier (advanced features) via Stripe
          </li>
        </ul>
        <figure className="my-8">
          <div className="overflow-hidden rounded-xl bg-neutral-100">
            <img
              src="https://placehold.co/800x600/B85032/FFFFFF?text=App+Screenshots"
              alt="Austin Power Alert app screenshots showing price dashboard and notifications"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 text-center font-inter text-sm text-neutral-600">
            App dashboard showing real-time prices and 24-hour forecast
          </figcaption>
        </figure>
      </section>

      {/* Technical Approach */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-8">
          Technical Approach
        </Heading>

        <Heading as="h3" variant="section" className="mb-4">
          Architecture
        </Heading>
        <Text variant="body" className="mb-4">
          I built the app using a serverless architecture:
        </Text>
        <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>Flutterflow:</strong> Mobile app frontend (iOS + Android)
          </li>
          <li>
            <strong>Supabase:</strong> Backend database and authentication
          </li>
          <li>
            <strong>Custom API:</strong> Scrapes Austin Energy data hourly
          </li>
          <li>
            <strong>Stripe:</strong> Subscription payment processing
          </li>
          <li>
            <strong>Firebase Cloud Messaging:</strong> Push notifications
          </li>
        </ul>

        <Heading as="h3" variant="section" className="mb-4 mt-8">
          Austin Energy API Integration
        </Heading>
        <Text variant="body" className="mb-4">
          Since Austin Energy doesn't provide a public API, I
          reverse-engineered their website to extract pricing data:
        </Text>
        <Code variant="block" className="mb-8">
          {`// Simplified: Fetch pricing data from Austin Energy
async function fetchPricing() {
  const response = await fetch('https://austinenergy.com/pricing-endpoint');
  const html = await response.text();

  // Parse HTML to extract current price
  const currentPrice = parsePrice(html);

  // Store in Supabase
  await supabase.from('prices').insert({
    timestamp: new Date(),
    price: currentPrice
  });

  // Check user thresholds and send notifications
  await checkThresholdsAndNotify(currentPrice);
}`}
        </Code>

        <Heading as="h3" variant="section" className="mb-4 mt-8">
          Stripe Subscription Flow
        </Heading>
        <Text variant="body" className="mb-4">
          I implemented a two-tier subscription model:
        </Text>
        <ul className="list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>Free Tier:</strong> Basic price alerts (1 threshold)
          </li>
          <li>
            <strong>Premium ($4.99/month):</strong> Multiple thresholds,
            historical trends, priority support
          </li>
        </ul>
      </section>

      {/* Results */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-8">
          Results
        </Heading>
        <Text variant="body" className="mb-4">
          <strong>User Impact:</strong>
        </Text>
        <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            Users report average savings of $30-50/month on electricity bills
          </li>
          <li>95% notification delivery rate (sub-minute latency)</li>
          <li>4.8/5 star rating on app stores</li>
        </ul>

        <Text variant="body" className="mb-4">
          <strong>Technical Achievements:</strong>
        </Text>
        <ul className="list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>Built and launched in 3 months as solo developer</li>
          <li>99.9% API uptime with automated monitoring</li>
          <li>Scalable architecture supporting 1000+ users</li>
          <li>Successful Stripe integration with recurring subscriptions</li>
        </ul>
      </section>

      {/* Learnings */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-8">
          Key Learnings
        </Heading>
        <Text variant="body" className="mb-4">
          <strong>What Worked Well:</strong>
        </Text>
        <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>Flutterflow for Speed:</strong> Built production-ready app
            10x faster than native development
          </li>
          <li>
            <strong>Simple Pricing Model:</strong> Two tiers (free + premium)
            made subscription decisions easy
          </li>
          <li>
            <strong>User-First Design:</strong> Focused on solving one problem
            really well (cheap electricity alerts)
          </li>
        </ul>

        <Text variant="body" className="mb-4">
          <strong>What I'd Do Differently:</strong>
        </Text>
        <ul className="list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>Earlier Beta Testing:</strong> Would have launched beta 2
            weeks earlier to get user feedback sooner
          </li>
          <li>
            <strong>More Onboarding:</strong> Some users didn't understand
            time-of-use pricing concept - needed better education
          </li>
          <li>
            <strong>API Resilience:</strong> Add more error handling for when
            Austin Energy website changes structure
          </li>
        </ul>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-8">
          Project Timeline
        </Heading>
        <TimelineSection milestones={timeline} />
      </section>

      {/* Testimonial */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-8">
          Client Feedback
        </Heading>
        <TestimonialCard
          quote="I've saved over $150 in the first 3 months just by running my dishwasher and charging my EV when Austin Power Alert tells me prices are low. This app paid for itself in the first month!"
          name="Sarah M."
          role="Austin Resident & Beta Tester"
          avatar="https://placehold.co/200x200/7C9473/FFFFFF?text=SM"
          layout="vertical"
        />
      </section>

      {/* Navigation */}
      <nav
        className="mt-16 flex items-center justify-between border-t border-neutral-200 pt-8"
        aria-label="Case study navigation"
      >
        <div />
        <Link
          href="/case-studies/building-this-portfolio"
          className="group flex items-center gap-2 font-inter text-base font-medium text-terracotta-600 transition-colors hover:text-terracotta-700"
        >
          <span>Building This Portfolio</span>
          <svg
            className="h-5 w-5 transition-transform group-hover:translate-x-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </nav>
    </DocsLayout>
  );
}
