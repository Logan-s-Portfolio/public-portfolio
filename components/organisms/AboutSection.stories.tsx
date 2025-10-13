import type { Meta, StoryObj } from '@storybook/nextjs';
import { AboutSection } from './AboutSection';

const meta = {
  title: 'Organisms/AboutSection',
  component: AboutSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '"About Me" section with photo, bio, and stats. Features 2-column responsive layout (desktop) that stacks on mobile, StatCard molecules for metrics, and optional CTA button.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AboutSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// Placeholder icon components for stats
const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ComponentIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/**
 * Default about section with all content
 */
export const Default: Story = {
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    imageAlt: 'Profile photo of Logan',
    name: 'Logan [LastName]',
    location: 'San Francisco, CA',
    bioParagraphs: [
      "I'm a full-stack developer and design systems architect with over 5 years of experience building scalable, accessible digital products. I specialize in creating component libraries, design tokens, and comprehensive documentation that empower teams to move fast while maintaining quality.",
      'My approach combines technical precision with human-first design principles. I believe the best design systems are invisible to users but invaluable to developers — reducing complexity while expanding creative possibilities.',
      'When I\'m not building systems, you\'ll find me contributing to open-source projects, writing about design patterns, or exploring the latest innovations in web accessibility and performance optimization.',
    ],
    stats: [
      {
        icon: <ClockIcon />,
        value: '5+',
        label: 'Years Experience',
      },
      {
        icon: <ComponentIcon />,
        value: '64+',
        label: 'Components Built',
      },
      {
        icon: <CheckIcon />,
        value: '100%',
        label: 'Accessible',
      },
    ],
    ctaLabel: 'Read Full Story',
    ctaHref: '/about',
  },
};

/**
 * About section with shorter bio
 */
export const ShortBio: Story = {
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    imageAlt: 'Profile photo of Logan',
    name: 'Logan [LastName]',
    location: 'San Francisco, CA',
    bioParagraphs: [
      'I build design systems that help teams ship faster without sacrificing quality. 5+ years creating accessible, scalable component libraries.',
      'My work combines technical depth with user-centered thinking — systems should empower teams, not constrain them.',
    ],
    stats: [
      {
        icon: <ClockIcon />,
        value: '5+',
        label: 'Years Experience',
      },
      {
        icon: <ComponentIcon />,
        value: '64+',
        label: 'Components Built',
      },
      {
        icon: <CheckIcon />,
        value: '100%',
        label: 'Accessible',
      },
    ],
    ctaLabel: 'View Portfolio',
    ctaHref: '/case-studies',
  },
};

/**
 * About section without CTA button
 */
export const NoCTA: Story = {
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    imageAlt: 'Profile photo of Logan',
    name: 'Logan [LastName]',
    location: 'San Francisco, CA',
    bioParagraphs: [
      "I'm a full-stack developer and design systems architect with over 5 years of experience building scalable, accessible digital products. I specialize in creating component libraries, design tokens, and comprehensive documentation that empower teams to move fast while maintaining quality.",
      'My approach combines technical precision with human-first design principles. I believe the best design systems are invisible to users but invaluable to developers — reducing complexity while expanding creative possibilities.',
    ],
    stats: [
      {
        icon: <ClockIcon />,
        value: '5+',
        label: 'Years Experience',
      },
      {
        icon: <ComponentIcon />,
        value: '64+',
        label: 'Components Built',
      },
      {
        icon: <CheckIcon />,
        value: '100%',
        label: 'Accessible',
      },
    ],
    ctaLabel: undefined,
    ctaHref: undefined,
  },
};

/**
 * Mobile viewport demonstration
 */
export const Mobile: Story = {
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    imageAlt: 'Profile photo of Logan',
    name: 'Logan [LastName]',
    location: 'San Francisco, CA',
    bioParagraphs: [
      "I'm a full-stack developer and design systems architect with over 5 years of experience building scalable, accessible digital products.",
      'My approach combines technical precision with human-first design principles.',
    ],
    stats: [
      {
        icon: <ClockIcon />,
        value: '5+',
        label: 'Years Experience',
      },
      {
        icon: <ComponentIcon />,
        value: '64+',
        label: 'Components Built',
      },
      {
        icon: <CheckIcon />,
        value: '100%',
        label: 'Accessible',
      },
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

/**
 * Tablet viewport demonstration
 */
export const Tablet: Story = {
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    imageAlt: 'Profile photo of Logan',
    name: 'Logan [LastName]',
    location: 'San Francisco, CA',
    bioParagraphs: [
      "I'm a full-stack developer and design systems architect with over 5 years of experience building scalable, accessible digital products.",
      'My approach combines technical precision with human-first design principles.',
    ],
    stats: [
      {
        icon: <ClockIcon />,
        value: '5+',
        label: 'Years Experience',
      },
      {
        icon: <ComponentIcon />,
        value: '64+',
        label: 'Components Built',
      },
      {
        icon: <CheckIcon />,
        value: '100%',
        label: 'Accessible',
      },
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

/**
 * Desktop viewport demonstration
 */
export const Desktop: Story = {
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    imageAlt: 'Profile photo of Logan',
    name: 'Logan [LastName]',
    location: 'San Francisco, CA',
    bioParagraphs: [
      "I'm a full-stack developer and design systems architect with over 5 years of experience building scalable, accessible digital products. I specialize in creating component libraries, design tokens, and comprehensive documentation that empower teams to move fast while maintaining quality.",
      'My approach combines technical precision with human-first design principles. I believe the best design systems are invisible to users but invaluable to developers — reducing complexity while expanding creative possibilities.',
    ],
    stats: [
      {
        icon: <ClockIcon />,
        value: '5+',
        label: 'Years Experience',
      },
      {
        icon: <ComponentIcon />,
        value: '64+',
        label: 'Components Built',
      },
      {
        icon: <CheckIcon />,
        value: '100%',
        label: 'Accessible',
      },
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

/**
 * Accessibility testing story
 */
export const Accessibility: Story = {
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    imageAlt: 'Profile photo of Logan wearing a blue shirt and glasses, smiling at the camera',
    name: 'Logan [LastName]',
    location: 'San Francisco, CA',
    bioParagraphs: [
      "I'm a full-stack developer and design systems architect with over 5 years of experience building scalable, accessible digital products.",
      'My approach combines technical precision with human-first design principles.',
    ],
    stats: [
      {
        icon: <ClockIcon />,
        value: '5+',
        label: 'Years Experience',
      },
      {
        icon: <ComponentIcon />,
        value: '64+',
        label: 'Components Built',
      },
      {
        icon: <CheckIcon />,
        value: '100%',
        label: 'Accessible',
      },
    ],
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'image-alt',
            enabled: true,
          },
          {
            id: 'heading-order',
            enabled: true,
          },
        ],
      },
    },
  },
};

/**
 * Design system showcase
 */
export const DesignSystemShowcase: Story = {
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    imageAlt: 'Profile photo of Logan',
    name: 'Logan [LastName]',
    location: 'San Francisco, CA',
    bioParagraphs: [
      "I'm a full-stack developer and design systems architect with over 5 years of experience building scalable, accessible digital products. I specialize in creating component libraries, design tokens, and comprehensive documentation that empower teams to move fast while maintaining quality.",
      'My approach combines technical precision with human-first design principles. I believe the best design systems are invisible to users but invaluable to developers — reducing complexity while expanding creative possibilities.',
    ],
    stats: [
      {
        icon: <ClockIcon />,
        value: '5+',
        label: 'Years Experience',
      },
      {
        icon: <ComponentIcon />,
        value: '64+',
        label: 'Components Built',
      },
      {
        icon: <CheckIcon />,
        value: '100%',
        label: 'Accessible',
      },
    ],
  },
  render: (args) => (
    <div>
      <AboutSection {...args} />
      <div
        style={{
          padding: '4rem 2rem',
          background: 'white',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: '2.5rem',
              marginBottom: '1.5rem',
              color: '#2E2D2A',
            }}
          >
            AboutSection Component Design System
          </h2>

          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 1fr' }}>
            <div
              style={{
                padding: '2rem',
                background: '#FAF7F5',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: '1.75rem',
                  marginBottom: '1rem',
                }}
              >
                Layout
              </h3>
              <ul style={{ lineHeight: '1.8', marginLeft: '1.5rem' }}>
                <li>
                  <strong>Grid:</strong> 2-column (lg+), stacked (mobile)
                </li>
                <li>
                  <strong>Gap:</strong> gap-12 (48px) md, gap-16 (64px) lg
                </li>
                <li>
                  <strong>Padding:</strong> py-16 md:py-20 lg:py-32
                </li>
                <li>
                  <strong>Container:</strong> max-w-7xl (1280px)
                </li>
                <li>
                  <strong>Image:</strong> 288px → 384px responsive
                </li>
                <li>
                  <strong>Stats:</strong> 1 column → 3 columns grid
                </li>
              </ul>
            </div>

            <div
              style={{
                padding: '2rem',
                background: '#FAF7F5',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: '1.75rem',
                  marginBottom: '1rem',
                }}
              >
                Typography
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <div
                    style={{
                      fontFamily: 'Fraunces, serif',
                      fontSize: '32px',
                      fontWeight: 600,
                    }}
                  >
                    Section Heading
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#71706A' }}>
                    Fraunces / 32-48px / Semibold (600)
                  </div>
                </div>
                <div>
                  <div
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: 1.6 }}
                  >
                    Body paragraph text
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#71706A' }}>
                    Inter / 16-18px / Regular (400) / 1.6 line-height
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 500,
                    }}
                  >
                    Name
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#71706A' }}>
                    Inter / 16px / Medium (500)
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                padding: '2rem',
                background: '#FAF7F5',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: '1.75rem',
                  marginBottom: '1rem',
                }}
              >
                Components
              </h3>
              <ul style={{ lineHeight: '1.8', marginLeft: '1.5rem' }}>
                <li>
                  <strong>Image:</strong> Next.js Image with fill + object-cover
                </li>
                <li>
                  <strong>Stats:</strong> StatCard molecule (3 instances)
                </li>
                <li>
                  <strong>Button:</strong> Button atom (outline variant)
                </li>
                <li>
                  <strong>Border radius:</strong> rounded-xl for image
                </li>
                <li>
                  <strong>Shadow:</strong> shadow-md on image
                </li>
              </ul>
            </div>

            <div
              style={{
                padding: '2rem',
                background: '#FAF7F5',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: '1.75rem',
                  marginBottom: '1rem',
                }}
              >
                Accessibility
              </h3>
              <ul style={{ lineHeight: '1.8', marginLeft: '1.5rem' }}>
                <li>Semantic <code style={{ background: 'white', padding: '2px 6px', borderRadius: '4px' }}>&lt;section&gt;</code> element</li>
                <li>ARIA labelledby for heading association</li>
                <li>Descriptive image alt text</li>
                <li>StatCard molecules are accessible</li>
                <li>Keyboard navigation support</li>
                <li>Focus visible indicators on button</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * In full page context
 */
export const InPageContext: Story = {
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    imageAlt: 'Profile photo of Logan',
    name: 'Logan [LastName]',
    location: 'San Francisco, CA',
    bioParagraphs: [
      "I'm a full-stack developer and design systems architect with over 5 years of experience building scalable, accessible digital products. I specialize in creating component libraries, design tokens, and comprehensive documentation that empower teams to move fast while maintaining quality.",
      'My approach combines technical precision with human-first design principles. I believe the best design systems are invisible to users but invaluable to developers — reducing complexity while expanding creative possibilities.',
    ],
    stats: [
      {
        icon: <ClockIcon />,
        value: '5+',
        label: 'Years Experience',
      },
      {
        icon: <ComponentIcon />,
        value: '64+',
        label: 'Components Built',
      },
      {
        icon: <CheckIcon />,
        value: '100%',
        label: 'Accessible',
      },
    ],
  },
  render: (args) => (
    <div>
      {/* Hero section above */}
      <div
        style={{
          minHeight: '40vh',
          padding: '4rem 2rem',
          background: 'linear-gradient(135deg, #C46C4D 0%, #9A5A3E 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: '3rem', marginBottom: '1rem' }}>
            Previous Section
          </h1>
          <p style={{ fontSize: '1.125rem' }}>
            Scroll down to see the AboutSection component
          </p>
        </div>
      </div>

      {/* AboutSection */}
      <AboutSection {...args} />

      {/* Content below */}
      <div
        style={{
          minHeight: '40vh',
          padding: '4rem 2rem',
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '2.5rem', marginBottom: '1rem' }}>
            Next Section
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#57534e' }}>
            Additional page content continues here
          </p>
        </div>
      </div>
    </div>
  ),
};
