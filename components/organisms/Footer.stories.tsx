import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Site footer with branding, navigation links, social links, and copyright. Features a dark background with warm terracotta accent colors for links.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default footer state
 */
export const Default: Story = {
  args: {},
};

/**
 * Footer in full page context
 */
export const InPageContext: Story = {
  render: () => (
    <div>
      <div
        style={{
          minHeight: '60vh',
          padding: '4rem 2rem',
          background: 'linear-gradient(to bottom, #f5f5f4, #e7e5e4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
          <h1
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: '3rem',
              marginBottom: '1rem',
            }}
          >
            Page Content
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#57534e' }}>
            Scroll down to see the footer at the bottom of the page.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  ),
};

/**
 * Mobile viewport demonstration
 */
export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

/**
 * Tablet viewport demonstration (2-column layout)
 */
export const Tablet: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

/**
 * Desktop viewport demonstration (3-column layout)
 */
export const Desktop: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

/**
 * Footer with documentation
 */
export const WithDocumentation: Story = {
  render: () => (
    <div>
      <div
        style={{
          padding: '4rem 2rem',
          background: 'white',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: '2.5rem',
              marginBottom: '1.5rem',
            }}
          >
            Footer Component
          </h1>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            The footer organism provides a comprehensive site footer with three main sections:
            branding, navigation, and social links.
          </p>

          <h2
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: '1.75rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            }}
          >
            Features
          </h2>
          <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <li>Dark background (bg-neutral-900) for visual hierarchy</li>
            <li>3-column layout on desktop (lg+)</li>
            <li>2-column layout on tablet (md)</li>
            <li>Stacked vertical layout on mobile</li>
            <li>Branding section with logo and tagline</li>
            <li>Quick links for site navigation</li>
            <li>Social media links with hover states</li>
            <li>Copyright notice with dynamic year</li>
            <li>View Source link to GitHub repository</li>
            <li>Warm terracotta accent colors for links</li>
            <li>Proper focus states for accessibility</li>
          </ul>

          <h2
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: '1.75rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            }}
          >
            Design System Compliance
          </h2>
          <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
            <li>Uses neutral-900 for dark background</li>
            <li>Uses terracotta-400/500 for link hover states</li>
            <li>Follows 8-point spacing grid (py-24 = 96px, gap-12 = 48px)</li>
            <li>Custom easing curves: cubic-bezier(0.33,1,0.68,1)</li>
            <li>300ms transition duration for interactions</li>
            <li>Fraunces for logo, Inter for body text</li>
            <li>Semantic HTML with proper ARIA labels</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  ),
};

/**
 * Footer showing responsive breakpoints
 */
export const ResponsiveDemo: Story = {
  render: () => (
    <div>
      <div
        style={{
          padding: '2rem',
          background: 'white',
          fontFamily: 'Inter, sans-serif',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: '2rem',
            marginBottom: '1rem',
          }}
        >
          Responsive Footer Demo
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          Resize your browser to see the footer adapt from 3 columns → 2 columns → stacked layout.
        </p>
        <div
          style={{
            display: 'inline-flex',
            gap: '1rem',
            padding: '1rem',
            background: '#f5f5f4',
            borderRadius: '0.5rem',
          }}
        >
          <div>
            <strong>Desktop (lg+):</strong> 3 columns
          </div>
          <div>
            <strong>Tablet (md):</strong> 2 columns
          </div>
          <div>
            <strong>Mobile (&lt;md):</strong> Stacked
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ),
};

/**
 * Accessibility testing story
 */
export const Accessibility: Story = {
  args: {},
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'link-name',
            enabled: true,
          },
        ],
      },
    },
  },
};

/**
 * Footer with light background above for contrast
 */
export const WithLightBackground: Story = {
  render: () => (
    <div>
      <div
        style={{
          minHeight: '50vh',
          padding: '4rem 2rem',
          background: '#fafaf9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.125rem',
            color: '#57534e',
          }}
        >
          Light background content area
        </p>
      </div>
      <Footer />
    </div>
  ),
};

/**
 * Footer with colored background above for contrast
 */
export const WithColoredBackground: Story = {
  render: () => (
    <div>
      <div
        style={{
          minHeight: '50vh',
          padding: '4rem 2rem',
          background: 'linear-gradient(135deg, #C46C4D 0%, #9A5A3E 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.125rem',
            color: 'white',
          }}
        >
          Terracotta gradient background content area
        </p>
      </div>
      <Footer />
    </div>
  ),
};
