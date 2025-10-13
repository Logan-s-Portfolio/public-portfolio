import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta = {
  title: 'Organisms/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Unified responsive navigation with desktop horizontal layout and mobile slide-out menu. Replaces Header and MobileNav organisms. Features sticky positioning, scroll shadow, backdrop blur, and smooth transitions.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default navbar state with all navigation items
 */
export const Default: Story = {
  args: {
    currentPath: '/',
  },
};

/**
 * Navbar with Home active
 */
export const HomeActive: Story = {
  args: {
    currentPath: '/',
  },
};

/**
 * Navbar with Design System page active
 */
export const DesignSystemActive: Story = {
  args: {
    currentPath: '/design-system',
  },
};

/**
 * Navbar with Skills page active
 */
export const SkillsActive: Story = {
  args: {
    currentPath: '/skills',
  },
};

/**
 * Navbar with Case Studies page active
 */
export const CaseStudiesActive: Story = {
  args: {
    currentPath: '/case-studies',
  },
};

/**
 * Navbar with About page active
 */
export const AboutActive: Story = {
  args: {
    currentPath: '/about',
  },
};

/**
 * Navbar in full page context with scrollable content
 */
export const InPageContext: Story = {
  args: {
    currentPath: '/',
  },
  render: (args) => (
    <div>
      <Navbar {...args} />
      <div
        style={{
          minHeight: '200vh',
          padding: '4rem 2rem',
          background: 'linear-gradient(to bottom, #FAF7F5, #F5F2EE)',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <div style={{ textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
          <h1
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: '3rem',
              marginBottom: '1rem',
              marginTop: '2rem',
            }}
          >
            Scroll to See Navigation Shadow
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#57534e' }}>
            The navbar is sticky and will remain at the top as you scroll. Notice the subtle
            shadow that appears when you scroll down.
          </p>
          <div
            style={{
              marginTop: '3rem',
              padding: '2rem',
              background: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <h2
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize: '2rem',
                marginBottom: '1rem',
              }}
            >
              Features
            </h2>
            <ul style={{ textAlign: 'left', lineHeight: '1.8', marginLeft: '1.5rem' }}>
              <li>Sticky positioning with scroll shadow effect</li>
              <li>Backdrop blur with semi-transparent background</li>
              <li>Responsive: horizontal desktop layout, slide-out mobile menu</li>
              <li>Smooth transitions (300ms, custom easing)</li>
              <li>Terracotta color scheme from design system</li>
              <li>8-point grid spacing (space-4, space-6)</li>
              <li>Inter font for navigation, Fraunces for logo</li>
              <li>Mobile menu includes social links at bottom</li>
              <li>ESC key and backdrop click to close mobile menu</li>
              <li>Prevents body scroll when mobile menu open</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * Mobile viewport demonstration
 */
export const Mobile: Story = {
  args: {
    currentPath: '/',
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
    currentPath: '/',
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
    currentPath: '/',
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
    currentPath: '/',
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
            id: 'aria-dialog-name',
            enabled: true,
          },
          {
            id: 'button-name',
            enabled: true,
          },
        ],
      },
    },
  },
};

/**
 * Responsive behavior demonstration
 */
export const ResponsiveDemo: Story = {
  args: {
    currentPath: '/',
  },
  render: (args) => (
    <div>
      <Navbar {...args} />
      <div
        style={{
          padding: '2rem',
          background: '#FAF7F5',
          fontFamily: 'Inter, sans-serif',
          minHeight: '100vh',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: '2rem',
              marginBottom: '1rem',
              marginTop: '2rem',
            }}
          >
            Responsive Navigation Demo
          </h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
            Resize your browser window to see the navigation adapt:
          </p>

          <div
            style={{
              padding: '1.5rem',
              background: 'white',
              borderRadius: '0.5rem',
              marginBottom: '1rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600 }}>
              Desktop (≥768px)
            </h3>
            <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Horizontal layout with logo, nav links, and contact button</li>
              <li>Navigation items displayed inline with 24px (space-6) gap</li>
              <li>No hamburger menu visible</li>
              <li>Hover states with terracotta color transitions</li>
            </ul>
          </div>

          <div
            style={{
              padding: '1.5rem',
              background: 'white',
              borderRadius: '0.5rem',
              marginBottom: '1rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600 }}>
              Mobile (&lt;768px)
            </h3>
            <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Compact header with logo and hamburger toggle</li>
              <li>Hamburger menu slides in from right (80% width, max 320px)</li>
              <li>Navigation links stacked vertically with 8px (space-2) gap</li>
              <li>Social links at bottom of mobile menu</li>
              <li>Semi-transparent backdrop (50% black opacity)</li>
              <li>Click backdrop or ESC key to close</li>
            </ul>
          </div>

          <div
            style={{
              padding: '1.5rem',
              background: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600 }}>
              Design System Compliance
            </h3>
            <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
              <li><strong>Colors:</strong> Terracotta-600 primary, Neutral-900 text, Neutral-300 borders</li>
              <li><strong>Typography:</strong> Fraunces for logo (20px/bold), Inter for nav (16px/medium)</li>
              <li><strong>Spacing:</strong> 8-point grid (space-4, space-6, py-4, px-6)</li>
              <li><strong>Transitions:</strong> 300ms duration with cubic-bezier(0.33,1,0.68,1)</li>
              <li><strong>Shadows:</strong> Subtle shadow-sm on scroll</li>
              <li><strong>Accessibility:</strong> Focus rings, ARIA labels, keyboard navigation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * Design system showcase
 */
export const DesignSystemShowcase: Story = {
  args: {
    currentPath: '/design-system',
  },
  render: (args) => (
    <div>
      <Navbar {...args} />
      <div
        style={{
          padding: '4rem 2rem',
          background: '#FAF7F5',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: '3.5rem',
              marginBottom: '1.5rem',
              color: '#2E2D2A',
            }}
          >
            Navbar Component
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              lineHeight: '1.8',
              marginBottom: '2rem',
              color: '#57534e',
            }}
          >
            A unified responsive navigation system that combines desktop and mobile experiences
            into a single organism component.
          </p>

          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 1fr' }}>
            <div
              style={{
                padding: '2rem',
                background: 'white',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              <h2
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: '1.75rem',
                  marginBottom: '1rem',
                }}
              >
                Color Palette
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      background: '#B85032',
                      borderRadius: '0.25rem',
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 600 }}>terracotta-600</div>
                    <div style={{ fontSize: '0.875rem', color: '#71706A' }}>#B85032 - Primary</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      background: '#2E2D2A',
                      borderRadius: '0.25rem',
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 600 }}>neutral-900</div>
                    <div style={{ fontSize: '0.875rem', color: '#71706A' }}>#2E2D2A - Text</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      background: '#D4D3CF',
                      borderRadius: '0.25rem',
                      border: '1px solid #B8B7B1',
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 600 }}>neutral-300</div>
                    <div style={{ fontSize: '0.875rem', color: '#71706A' }}>#D4D3CF - Borders</div>
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
              <h2
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: '1.75rem',
                  marginBottom: '1rem',
                }}
              >
                Typography
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: '20px', fontWeight: 700 }}>
                    Logo Text
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#71706A' }}>
                    Fraunces / 20px / Bold (700)
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500 }}>
                    Navigation Links
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#71706A' }}>
                    Inter / 16px / Medium (500)
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500 }}>
                    Button Text
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#71706A' }}>
                    Inter / 16px / Medium (500)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * With light background for contrast
 */
export const WithLightBackground: Story = {
  args: {
    currentPath: '/',
  },
  render: (args) => (
    <div>
      <Navbar {...args} />
      <div
        style={{
          minHeight: '100vh',
          background: '#FAF7F5',
          padding: '4rem 2rem',
        }}
      >
        <div style={{ textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
          <h2
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: '2.5rem',
              color: '#2E2D2A',
            }}
          >
            Light Background Content
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#57534e', marginTop: '1rem' }}>
            The navbar has a semi-transparent white background (white/90) with backdrop blur
            for a glassmorphism effect.
          </p>
        </div>
      </div>
    </div>
  ),
};

/**
 * With colored background for contrast
 */
export const WithColoredBackground: Story = {
  args: {
    currentPath: '/',
  },
  render: (args) => (
    <div>
      <Navbar {...args} />
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #C46C4D 0%, #9A5A3E 100%)',
          padding: '4rem 2rem',
        }}
      >
        <div style={{ textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
          <h2
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: '2.5rem',
              color: 'white',
            }}
          >
            Terracotta Gradient Background
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', marginTop: '1rem' }}>
            The navbar's backdrop blur creates a subtle glass effect even over colored
            backgrounds.
          </p>
        </div>
      </div>
    </div>
  ),
};
