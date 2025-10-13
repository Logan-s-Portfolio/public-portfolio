import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta = {
  title: 'Organisms/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full-viewport hero section with animated headline, description, and CTAs. Features Framer Motion staggered animations, scroll indicator, and respects prefers-reduced-motion accessibility requirement.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default hero with all content
 */
export const Default: Story = {
  args: {
    eyebrow: 'Full-Stack Developer & Design Systems Architect',
    headline: 'Building Systems, Not Just Sites',
    subheadline:
      'Creating accessible, scalable digital products with human-first design',
    primaryCTA: {
      label: 'View Design System',
      href: '/design-system',
    },
    secondaryCTA: {
      label: 'See My Work',
      href: '/case-studies',
    },
  },
};

/**
 * Hero without eyebrow text
 */
export const NoEyebrow: Story = {
  args: {
    eyebrow: undefined,
    headline: 'Building Systems, Not Just Sites',
    subheadline:
      'Creating accessible, scalable digital products with human-first design',
    primaryCTA: {
      label: 'View Design System',
      href: '/design-system',
    },
    secondaryCTA: {
      label: 'See My Work',
      href: '/case-studies',
    },
  },
};

/**
 * Hero with shorter headline
 */
export const ShortHeadline: Story = {
  args: {
    eyebrow: 'Design Systems Architect',
    headline: 'Design at Scale',
    subheadline: 'Building component libraries that teams love to use',
    primaryCTA: {
      label: 'Explore Components',
      href: '/design-system',
    },
    secondaryCTA: {
      label: 'View Projects',
      href: '/case-studies',
    },
  },
};

/**
 * Hero with longer content
 */
export const LongContent: Story = {
  args: {
    eyebrow: 'Full-Stack Developer & Design Systems Architect',
    headline: 'Building Accessible, Scalable Design Systems for Modern Teams',
    subheadline:
      'I create comprehensive component libraries, design tokens, and documentation that empower teams to build consistent, accessible digital products at scale while maintaining brand integrity and developer velocity.',
    primaryCTA: {
      label: 'Explore My Design System',
      href: '/design-system',
    },
    secondaryCTA: {
      label: 'View Case Studies',
      href: '/case-studies',
    },
  },
};

/**
 * Mobile viewport demonstration
 */
export const Mobile: Story = {
  args: {
    eyebrow: 'Full-Stack Developer & Design Systems Architect',
    headline: 'Building Systems, Not Just Sites',
    subheadline:
      'Creating accessible, scalable digital products with human-first design',
    primaryCTA: {
      label: 'View Design System',
      href: '/design-system',
    },
    secondaryCTA: {
      label: 'See My Work',
      href: '/case-studies',
    },
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
    eyebrow: 'Full-Stack Developer & Design Systems Architect',
    headline: 'Building Systems, Not Just Sites',
    subheadline:
      'Creating accessible, scalable digital products with human-first design',
    primaryCTA: {
      label: 'View Design System',
      href: '/design-system',
    },
    secondaryCTA: {
      label: 'See My Work',
      href: '/case-studies',
    },
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
    eyebrow: 'Full-Stack Developer & Design Systems Architect',
    headline: 'Building Systems, Not Just Sites',
    subheadline:
      'Creating accessible, scalable digital products with human-first design',
    primaryCTA: {
      label: 'View Design System',
      href: '/design-system',
    },
    secondaryCTA: {
      label: 'See My Work',
      href: '/case-studies',
    },
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

/**
 * With scroll content to demonstrate scroll indicator
 */
export const WithScrollContent: Story = {
  args: {
    eyebrow: 'Full-Stack Developer & Design Systems Architect',
    headline: 'Building Systems, Not Just Sites',
    subheadline:
      'Creating accessible, scalable digital products with human-first design',
    primaryCTA: {
      label: 'View Design System',
      href: '/design-system',
    },
    secondaryCTA: {
      label: 'See My Work',
      href: '/case-studies',
    },
  },
  render: (args) => (
    <div>
      <Hero {...args} />
      <div
        style={{
          minHeight: '100vh',
          padding: '4rem 2rem',
          background: 'linear-gradient(to bottom, #FAF7F5, #F5F2EE)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
          <h2
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: '2.5rem',
              marginBottom: '1rem',
              color: '#2E2D2A',
            }}
          >
            Next Section
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#57534e' }}>
            Click the scroll indicator on the hero to smoothly scroll to this
            content.
          </p>
        </div>
      </div>
    </div>
  ),
};

/**
 * Accessibility testing story
 */
export const Accessibility: Story = {
  args: {
    eyebrow: 'Full-Stack Developer & Design Systems Architect',
    headline: 'Building Systems, Not Just Sites',
    subheadline:
      'Creating accessible, scalable digital products with human-first design',
    primaryCTA: {
      label: 'View Design System',
      href: '/design-system',
    },
    secondaryCTA: {
      label: 'See My Work',
      href: '/case-studies',
    },
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
            id: 'button-name',
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
    eyebrow: 'Full-Stack Developer & Design Systems Architect',
    headline: 'Building Systems, Not Just Sites',
    subheadline:
      'Creating accessible, scalable digital products with human-first design',
    primaryCTA: {
      label: 'View Design System',
      href: '/design-system',
    },
    secondaryCTA: {
      label: 'See My Work',
      href: '/case-studies',
    },
  },
  render: (args) => (
    <div>
      <Hero {...args} />
      <div
        style={{
          padding: '4rem 2rem',
          background: '#FAF7F5',
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
            Hero Component Design System
          </h2>

          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 1fr' }}>
            <div
              style={{
                padding: '2rem',
                background: 'white',
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
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: '#B85032',
                    }}
                  >
                    EYEBROW TEXT
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#71706A' }}>
                    Inter / 12-16px / Medium (500) / Uppercase / Terracotta-600
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'Fraunces, serif',
                      fontSize: '48px',
                      fontWeight: 700,
                      lineHeight: 1.1,
                    }}
                  >
                    Headline
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#71706A' }}>
                    Fraunces / 48-112px / Bold (700) / -2% tracking
                  </div>
                </div>
                <div>
                  <div
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: 1.6 }}
                  >
                    Subheadline supporting text
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#71706A' }}>
                    Inter / 18-24px / Regular (400) / 1.6 line-height
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                padding: '2rem',
                background: 'white',
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
                Spacing & Layout
              </h3>
              <ul style={{ lineHeight: '1.8', marginLeft: '1.5rem' }}>
                <li>
                  <strong>Height:</strong> 100vh (min-h-screen)
                </li>
                <li>
                  <strong>Padding:</strong> py-24 px-4 md:px-6 lg:px-8
                </li>
                <li>
                  <strong>Max-width:</strong> 1024px (max-w-4xl)
                </li>
                <li>
                  <strong>Content gap:</strong> mb-6 (24px) between elements
                </li>
                <li>
                  <strong>Button gap:</strong> gap-4 (16px)
                </li>
                <li>
                  <strong>Alignment:</strong> Center mobile, left desktop
                </li>
              </ul>
            </div>

            <div
              style={{
                padding: '2rem',
                background: 'white',
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
                Animation
              </h3>
              <ul style={{ lineHeight: '1.8', marginLeft: '1.5rem' }}>
                <li>
                  <strong>Stagger:</strong> 200ms between items
                </li>
                <li>
                  <strong>Duration:</strong> 600ms per item
                </li>
                <li>
                  <strong>Easing:</strong> cubic-bezier(0.33,1,0.68,1)
                </li>
                <li>
                  <strong>Entrance:</strong> Fade in + slide up 20px
                </li>
                <li>
                  <strong>Scroll indicator:</strong> Infinite bounce (2s loop)
                </li>
                <li>
                  <strong>Reduced motion:</strong> Instant transitions
                </li>
              </ul>
            </div>

            <div
              style={{
                padding: '2rem',
                background: 'white',
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
                <li>Semantic <code style={{ background: '#f5f2ee', padding: '2px 6px', borderRadius: '4px' }}>&lt;section&gt;</code> element</li>
                <li>ARIA labelledby for heading association</li>
                <li>Keyboard navigation support</li>
                <li>Focus visible indicators</li>
                <li>Reduced motion support (WCAG 2.1)</li>
                <li>Scroll button with aria-label</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
