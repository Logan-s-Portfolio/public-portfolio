/**
 * Fund Frolic Case Study (/case-studies/fund-frolic)
 *
 * Detailed case study of the Fund Frolic AI-powered grant finding platform.
 * Shows challenge, solution, technical approach, and results.
 */

import { DocsLayout } from "@/components/templates/DocsLayout";
import { Text } from "@/components/atoms/Text";
import { Heading } from "@/components/atoms/Heading";
import { Code } from "@/components/atoms/Code";
import { Tag } from "@/components/atoms/Tag";
import { Safari } from "@/components/ui/safari";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fund Frolic Case Study",
  description:
    "Building an AI-powered grant finding platform that helps startups and nonprofits secure funding without giving up equity",
};

export default function FundFrolicCaseStudyPage() {
  const breadcrumbs = [
    {
      label: "Fund Frolic Case Study",
      href: "/case-studies/fund-frolic",
    },
  ];

  const techStack = [
    { label: "React", variant: "terracotta" as const },
    { label: "OpenAI API", variant: "sage" as const },
    { label: "TypeScript", variant: "terracotta" as const },
    { label: "Custom Design System", variant: "sage" as const },
    { label: "Brand Design", variant: "terracotta" as const },
  ];

  return (
    <DocsLayout
      currentPath="/case-studies/fund-frolic"
      breadcrumbs={breadcrumbs}
    >
      {/* Hero Section */}
      <div className="space-y-6 max-w-4xl">
        <img
          src="/fund-frolic-logo.png"
          alt="Fund Frolic Logo"
          className="h-12 w-auto"
        />
        <Heading as="h1" variant="display" className="text-neutral-900">
          Fund Frolic: AI-Powered Grant Discovery
        </Heading>
        <Text variant="lead" className="text-neutral-600">
          AI-powered platform connecting startups and nonprofits with grant
          opportunities - helping founders secure funding without giving up
          equity
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
              Co-Founded with Guenevere Blanchard
            </Text>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <Text variant="small" className="mb-2 font-semibold uppercase tracking-wide text-neutral-600">
              Role
            </Text>
            <Text variant="body" className="text-neutral-900">
              Founding Developer & Designer
            </Text>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <Text variant="small" className="mb-2 font-semibold uppercase tracking-wide text-neutral-600">
              Tech Stack
            </Text>
            <Text variant="body" className="text-neutral-900">
              React, OpenAI API, TypeScript, Custom Design System
            </Text>
          </div>
        </div>
        <Text variant="body">
          Fund Frolic is an AI-powered grant finding platform that helps
          startups and nonprofits discover funding opportunities without giving
          up equity. I built the entire platform from the ground up - from the
          React application and OpenAI integration to the complete design
          system and brand identity. The platform has helped 500+ founders find
          relevant grants in under a minute.
        </Text>
      </section>

      {/* Platform Screenshots */}
      <section className="my-16">
        <Heading as="h2" variant="h2" className="mb-4">
          Platform Experience
        </Heading>
        <Text variant="body" className="mb-8 text-neutral-600">
          AI-powered grant matching with instant results and personalized recommendations
        </Text>

        <div className="space-y-12">
          {/* Grant Finder Interface */}
          <div>
            <Heading as="h3" variant="h4" className="mb-4">
              AI Grant Finder
            </Heading>
            <Text variant="body" className="mb-6 text-neutral-600">
              Instant grant matching based on revenue status, organization type, and project description
            </Text>
            <Safari
              url="fundfrolic.com/grant-finder"
              imageSrc="/fund-frolic-main.png"
            />
          </div>

          {/* Results Dashboard */}
          <div>
            <Heading as="h3" variant="h4" className="mb-4">
              Personalized Grant Recommendations
            </Heading>
            <Text variant="body" className="mb-6 text-neutral-600">
              Custom funding blueprint with curated grant opportunities and application guidance
            </Text>
            <Safari
              url="fundfrolic.com/results"
              imageSrc="/fund-frolic-results.png"
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
          Founders and nonprofit leaders face a critical dilemma: they need
          funding to grow, but traditional VC funding means giving up equity
          and control. Meanwhile, billions in grant funding goes unclaimed
          every year because the discovery process is fragmented, time-consuming,
          and overwhelming.
        </Text>
        <Text variant="body" className="mb-4">
          <strong>Founder Pain Points:</strong>
        </Text>
        <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            Grant databases are scattered across federal, state, local, and
            private sources
          </li>
          <li>
            Searching for relevant grants takes days or weeks of manual research
          </li>
          <li>
            Eligibility requirements are complex and difficult to parse
          </li>
          <li>
            No way to know which grants are the best fit for their specific
            situation
          </li>
          <li>
            Grant writing is intimidating without professional expertise
          </li>
        </ul>
        <Text variant="body" className="mb-4">
          <strong>Existing Solutions Were Inadequate:</strong>
        </Text>
        <ul className="mb-6 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>Grants.gov:</strong> Comprehensive but overwhelming -
            thousands of grants with no intelligent filtering
          </li>
          <li>
            <strong>Grant Writing Firms:</strong> Expensive ($5K-$50K per
            application) and slow turnaround
          </li>
          <li>
            <strong>Generic Search Engines:</strong> Miss grant-specific
            eligibility nuances and context
          </li>
          <li>
            <strong>Manual Research:</strong> Founders spend weeks researching
            instead of building their companies
          </li>
        </ul>
        <Text variant="body" className="mb-4">
          <strong>Technical Challenges:</strong>
        </Text>
        <ul className="list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            Building an intelligent AI system that understands grant eligibility
            requirements and matches them with founder profiles
          </li>
          <li>
            Integrating OpenAI API for natural language processing of grant
            descriptions and project proposals
          </li>
          <li>
            Creating a seamless, non-intimidating user experience that guides
            founders through the process
          </li>
          <li>
            Designing a complete brand identity and design system from scratch
          </li>
          <li>
            Building a scalable React application that delivers instant results
          </li>
        </ul>
      </section>

      {/* Solution */}
      <section className="mb-16">
        <Heading as="h2" variant="h2" className="mb-8">
          The Solution
        </Heading>
        <Text variant="body" className="mb-4">
          I built Fund Frolic as a complete end-to-end solution - from the
          technical architecture to the visual identity. The platform uses AI
          to instantly match founders with relevant grants, eliminating weeks of
          manual research.
        </Text>

        <Heading as="h3" variant="h3" className="mb-4 mt-8">
          Complete End-to-End Development
        </Heading>
        <Text variant="body" className="mb-4">
          As the sole technical founder and designer, I was responsible for
          every aspect of the platform:
        </Text>
        <ul className="mb-8 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>React Application:</strong> Built a responsive, performant
            web application from scratch with TypeScript
          </li>
          <li>
            <strong>OpenAI Integration:</strong> Designed and implemented AI
            wrapper for intelligent grant matching and natural language processing
          </li>
          <li>
            <strong>Custom Design System:</strong> Created a complete design
            system with reusable components, typography, colors, and spacing
          </li>
          <li>
            <strong>Brand Identity:</strong> Designed the entire brand from
            logo to color palette to voice and tone
          </li>
          <li>
            <strong>User Experience:</strong> Crafted an intuitive flow that
            gets founders from question to grant matches in under 60 seconds
          </li>
        </ul>

        <Heading as="h3" variant="h3" className="mb-4 mt-8">
          Core Platform Features
        </Heading>
        <ul className="mb-8 list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>AI Grant Finder:</strong> Instant matching based on revenue
            status, organization type, and project description
          </li>
          <li>
            <strong>Custom Funding Blueprint:</strong> Personalized grant
            recommendations with eligibility analysis
          </li>
          <li>
            <strong>Full-Service Grant Writing:</strong> Professional research,
            writing, and submission support
          </li>
          <li>
            <strong>Ongoing Grant Tracking:</strong> Monitors new opportunities
            and maintains eligibility status
          </li>
          <li>
            <strong>One-Minute Results:</strong> Founders get actionable grant
            matches in under 60 seconds
          </li>
        </ul>
      </section>

      {/* Technical Approach */}
      <section className="mb-16">
        <Heading as="h2" variant="h2" className="mb-8">
          Technical Approach
        </Heading>

        <Heading as="h3" variant="h3" className="mb-4">
          OpenAI Wrapper Architecture
        </Heading>
        <Text variant="body" className="mb-4">
          Built a sophisticated AI wrapper around OpenAI's API to handle grant
          matching, eligibility analysis, and natural language processing:
        </Text>
        <Code inline={false} className="mb-8">
          {`// Grant matching with OpenAI
async function matchGrants(profile: FounderProfile) {
  const prompt = buildGrantMatchingPrompt(profile);

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are a grant expert that matches startups with relevant grant opportunities based on eligibility criteria, organization type, revenue status, and project description."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    temperature: 0.3, // Lower temperature for more consistent matching
    max_tokens: 2000,
  });

  const matches = parseGrantMatches(completion.choices[0].message.content);
  return rankByRelevance(matches, profile);
}

// Eligibility analysis
async function analyzeEligibility(grant: Grant, profile: FounderProfile) {
  const analysis = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "Analyze grant eligibility requirements and determine if the applicant qualifies. Provide specific reasons for qualification or disqualification."
      },
      {
        role: "user",
        content: \`Grant: \${JSON.stringify(grant)}\\n\\nApplicant: \${JSON.stringify(profile)}\`
      }
    ],
  });

  return {
    isEligible: determineEligibility(analysis),
    reasoning: analysis.choices[0].message.content,
    confidence: calculateConfidenceScore(analysis),
  };
}`}
        </Code>

        <Heading as="h3" variant="h3" className="mb-4 mt-8">
          Custom Design System
        </Heading>
        <Text variant="body" className="mb-4">
          Built a comprehensive design system with reusable components,
          consistent theming, and accessible patterns:
        </Text>
        <Code inline={false} className="mb-8">
          {`// Design system theme configuration
export const theme = {
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
    },
    accent: {
      50: '#fdf4ff',
      500: '#d946ef',
      600: '#c026d3',
    },
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      500: '#737373',
      900: '#171717',
    }
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      display: ['Clash Display', 'Inter', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '4xl': '2.25rem',
      '6xl': '3.75rem',
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  }
};

// Reusable component with design system
export function Button({
  variant = 'primary',
  size = 'md',
  children
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all';

  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200',
    accent: 'bg-accent-600 text-white hover:bg-accent-700',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={\`\${baseStyles} \${variantStyles[variant]} \${sizeStyles[size]}\`}
    >
      {children}
    </button>
  );
}`}
        </Code>

        <Heading as="h3" variant="h3" className="mb-4 mt-8">
          Instant Grant Matching Flow
        </Heading>
        <Text variant="body" className="mb-4">
          Designed a streamlined user experience that collects just enough
          information to deliver accurate matches in under 60 seconds:
        </Text>
        <Code inline={false} className="mb-6">
          {`// Multi-step form with progressive disclosure
function GrantFinder() {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<FounderProfile>({});
  const [matches, setMatches] = useState<Grant[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);

    // Call AI matching engine
    const results = await matchGrants(profile);

    // Analyze eligibility for each match
    const analyzed = await Promise.all(
      results.map(grant => analyzeEligibility(grant, profile))
    );

    setMatches(analyzed);
    setLoading(false);
  }

  return (
    <div className="max-w-2xl mx-auto">
      {step === 1 && (
        <StepOne
          data={profile}
          onChange={setProfile}
          onNext={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <StepTwo
          data={profile}
          onChange={setProfile}
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
        />
      )}

      {step === 3 && (
        <StepThree
          data={profile}
          onChange={setProfile}
          onSubmit={handleSubmit}
          onBack={() => setStep(2)}
        />
      )}

      {loading && <LoadingSpinner />}

      {matches.length > 0 && (
        <GrantResults matches={matches} profile={profile} />
      )}
    </div>
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
            <strong>500+ founders</strong> have used the platform to find
            relevant grants in under a minute
          </li>
          <li>
            <strong>Instant results</strong> vs. days or weeks of manual
            research
          </li>
          <li>
            <strong>AI-powered matching</strong> delivers personalized grant
            recommendations with eligibility analysis
          </li>
          <li>
            <strong>Full-service support</strong> available for grant writing
            and submission
          </li>
          <li>
            <strong>Alternative to VC funding</strong> - helping founders
            secure capital without giving up equity
          </li>
        </ul>

        <Text variant="body" className="mb-4">
          <strong>Technical Achievements:</strong>
        </Text>
        <ul className="list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            Built entire platform solo - React application, OpenAI integration,
            design system, and brand
          </li>
          <li>
            Created sophisticated AI wrapper for intelligent grant matching and
            eligibility analysis
          </li>
          <li>
            Designed and implemented complete design system with reusable
            components and consistent theming
          </li>
          <li>
            Crafted brand identity from scratch including logo, color palette,
            typography, and voice
          </li>
          <li>
            Delivered seamless user experience with 60-second grant matching
            flow
          </li>
          <li>
            Integrated OpenAI API for natural language processing and
            intelligent recommendations
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
            <strong>Building Everything In-House:</strong> Having complete
            control over the tech stack, design system, and brand allowed for
            rapid iteration and cohesive experience
          </li>
          <li>
            <strong>OpenAI for Complex Matching:</strong> Using GPT-4's natural
            language understanding made grant eligibility analysis far more
            accurate than rule-based systems
          </li>
          <li>
            <strong>Design System First:</strong> Building the design system
            early accelerated feature development and ensured visual consistency
          </li>
          <li>
            <strong>Progressive Disclosure UX:</strong> Multi-step form
            prevented overwhelming users while collecting enough data for
            accurate matching
          </li>
          <li>
            <strong>Co-Founder with Domain Expertise:</strong> Partnering with
            a grant strategist (Guenevere) ensured the AI matching logic was
            grounded in real-world grant expertise
          </li>
        </ul>

        <Text variant="body" className="mb-4">
          <strong>What I'd Do Differently:</strong>
        </Text>
        <ul className="list-disc space-y-2 pl-6 font-inter text-base leading-[1.6] text-neutral-700">
          <li>
            <strong>Earlier User Testing:</strong> Could have validated the
            grant matching accuracy with more founders before launch
          </li>
          <li>
            <strong>Grant Database Integration:</strong> Building direct
            integrations with Grants.gov API would reduce manual grant data
            entry
          </li>
          <li>
            <strong>More Granular Tracking:</strong> Adding analytics earlier
            would have shown which grant types and founder profiles convert best
          </li>
          <li>
            <strong>Prompt Engineering Documentation:</strong> Should have
            documented prompt templates and tuning decisions for future
            iteration
          </li>
          <li>
            <strong>A/B Testing Infrastructure:</strong> Would have helped
            optimize the matching algorithm and UX flow faster
          </li>
        </ul>
      </section>

    </DocsLayout>
  );
}
