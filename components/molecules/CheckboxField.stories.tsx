/**
 * CheckboxField Molecule Stories
 *
 * Checkbox with label and description.
 */

import type { Meta, StoryObj } from '@storybook/nextjs';
import { CheckboxField } from './CheckboxField';
import { useState } from 'react';

const meta = {
  title: 'Molecules/CheckboxField',
  component: CheckboxField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Checkbox with label and description. Layout: Horizontal (checkbox left, label/description right). Checkbox: 20px (w-5 h-5), aligned to top of text. Label: font-inter text-base font-medium text-neutral-900. Description: text-neutral-600 text-sm mt-0.5. Spacing: gap-3 (12px). Large click area: Entire label clickable. Accessibility: Label association via id/htmlFor, aria-describedby for description.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text',
    },
    description: {
      control: 'text',
      description: 'Optional description below label',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
} satisfies Meta<typeof CheckboxField>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story 1: Basic (No Description)
export const Basic: Story = {
  args: {
    label: 'Subscribe to newsletter',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic checkbox field with label only. No description text.',
      },
    },
  },
};

// Story 2: With Description
export const WithDescription: Story = {
  args: {
    label: 'Subscribe to newsletter',
    description: 'Get the latest articles and updates delivered to your inbox weekly.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox field with description. Description text in neutral-600, text-sm.',
      },
    },
  },
};

// Story 3: Checked State
export const CheckedState: Story = {
  args: {
    label: 'I agree to the terms and conditions',
    description: 'By checking this box, you agree to our Terms of Service and Privacy Policy.',
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox in checked state. Terracotta-600 background with white checkmark.',
      },
    },
  },
};

// Story 4: Disabled State
export const DisabledState: Story = {
  args: {
    label: 'This option is disabled',
    description: 'This checkbox cannot be interacted with.',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled checkbox with reduced opacity. Label and description also have opacity-50.',
      },
    },
  },
};

// Story 5: Newsletter Signup
export const NewsletterSignup: Story = {
  render: () => {
    const [subscribed, setSubscribed] = useState(false);

    return (
      <div className="w-full max-w-md p-8 bg-white border border-neutral-200 rounded-lg">
        <h3 className="font-fraunces text-xl font-semibold text-neutral-900 mb-6">
          Stay Updated
        </h3>

        <CheckboxField
          label="Subscribe to newsletter"
          description="Get the latest articles, case studies, and design tips delivered to your inbox every week."
          checked={subscribed}
          onChange={(e) => setSubscribed(e.target.checked)}
        />

        <button
          type="submit"
          className="w-full mt-6 px-4 py-3 bg-terracotta-600 text-white font-inter font-medium text-base rounded-md hover:bg-terracotta-700 transition-colors duration-150 ease-out"
        >
          {subscribed ? 'Subscribe' : 'Sign Up Without Newsletter'}
        </button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Newsletter opt-in with checkbox. Button text changes based on checkbox state.',
      },
    },
  },
};

// Story 6: Terms Acceptance
export const TermsAcceptance: Story = {
  render: () => {
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [marketingAccepted, setMarketingAccepted] = useState(false);

    return (
      <div className="w-full max-w-md p-8 bg-white border border-neutral-200 rounded-lg">
        <h3 className="font-fraunces text-xl font-semibold text-neutral-900 mb-2">
          Create Account
        </h3>
        <p className="text-base text-neutral-700 mb-6">
          Please review and accept the following terms
        </p>

        <div className="space-y-4">
          <CheckboxField
            label="I agree to the Terms and Conditions"
            description="You must accept the terms to create an account."
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />

          <CheckboxField
            label="I agree to receive marketing emails"
            description="Optional: Get product updates, special offers, and company news."
            checked={marketingAccepted}
            onChange={(e) => setMarketingAccepted(e.target.checked)}
          />
        </div>

        <button
          type="submit"
          disabled={!termsAccepted}
          className={cn(
            "w-full mt-6 px-4 py-3 font-inter font-medium text-base rounded-md transition-colors duration-150 ease-out",
            termsAccepted
              ? "bg-terracotta-600 text-white hover:bg-terracotta-700"
              : "bg-neutral-200 text-neutral-500 cursor-not-allowed"
          )}
        >
          Create Account
        </button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Terms acceptance form. Submit button disabled until required terms accepted.',
      },
    },
  },
};

// Story 7: Contact Form Opt-ins
export const ContactFormOptins: Story = {
  render: () => {
    const [newsletter, setNewsletter] = useState(true);
    const [updates, setUpdates] = useState(false);

    return (
      <div className="w-full max-w-md p-8 bg-white">
        <h3 className="font-fraunces text-xl font-semibold text-neutral-900 mb-6">
          Contact Preferences
        </h3>

        <div className="space-y-4">
          <CheckboxField
            label="Newsletter subscription"
            description="Receive weekly newsletters with articles, tutorials, and case studies."
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
          />

          <CheckboxField
            label="Product updates"
            description="Get notified when we launch new features or major updates."
            checked={updates}
            onChange={(e) => setUpdates(e.target.checked)}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Contact form opt-in checkboxes. Each with descriptive text explaining what user subscribes to.',
      },
    },
  },
};

// Story 8: Settings Panel
export const SettingsPanel: Story = {
  render: () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [analytics, setAnalytics] = useState(true);

    return (
      <div className="w-full max-w-2xl p-8 bg-white">
        <h2 className="font-fraunces text-2xl font-semibold text-neutral-900 mb-6">
          Settings
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-fraunces text-lg font-semibold text-neutral-900 mb-4">
              Notifications
            </h3>
            <div className="space-y-4">
              <CheckboxField
                label="Email notifications"
                description="Receive email updates when someone comments on your posts or mentions you."
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
              />

              <CheckboxField
                label="Push notifications"
                description="Get real-time push notifications on your device for important updates."
                checked={pushNotifications}
                onChange={(e) => setPushNotifications(e.target.checked)}
              />
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-6">
            <h3 className="font-fraunces text-lg font-semibold text-neutral-900 mb-4">
              Preferences
            </h3>
            <div className="space-y-4">
              <CheckboxField
                label="Dark mode"
                description="Use dark theme for better viewing in low-light environments."
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
              />

              <CheckboxField
                label="Share anonymous analytics"
                description="Help us improve by sharing anonymous usage data and crash reports."
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <button
            type="button"
            className="px-4 py-2 text-neutral-700 font-inter font-medium text-base hover:bg-neutral-100 rounded-md transition-colors duration-150 ease-out"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-terracotta-600 text-white font-inter font-medium text-base rounded-md hover:bg-terracotta-700 transition-colors duration-150 ease-out"
          >
            Save Changes
          </button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Settings panel with multiple checkbox fields grouped by category.',
      },
    },
  },
};

// Story 9: Multi-line Label
export const MultilineLabel: Story = {
  render: () => (
    <div className="w-full max-w-md p-8 bg-white">
      <CheckboxField
        label="I agree to the Terms of Service, Privacy Policy, and Cookie Policy, and understand that my data will be processed according to these agreements"
        description="This is a very long agreement with multiple clauses. The checkbox stays aligned to the top of the text."
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multi-line label text. Checkbox aligned to top (items-start) so it stays with first line.',
      },
    },
  },
};

// Story 10: Multiple Checkboxes Stacked
export const MultipleStacked: Story = {
  render: () => {
    const [interests, setInterests] = useState({
      design: true,
      development: true,
      marketing: false,
      writing: false,
    });

    return (
      <div className="w-full max-w-md p-8 bg-white">
        <h3 className="font-fraunces text-xl font-semibold text-neutral-900 mb-2">
          Select Your Interests
        </h3>
        <p className="text-base text-neutral-700 mb-6">
          Choose topics you'd like to receive content about
        </p>

        <div className="space-y-3">
          <CheckboxField
            label="Design"
            description="UI/UX design, design systems, and visual design"
            checked={interests.design}
            onChange={(e) => setInterests({ ...interests, design: e.target.checked })}
          />

          <CheckboxField
            label="Development"
            description="Frontend, backend, and full-stack development"
            checked={interests.development}
            onChange={(e) => setInterests({ ...interests, development: e.target.checked })}
          />

          <CheckboxField
            label="Marketing"
            description="Content marketing, SEO, and growth strategies"
            checked={interests.marketing}
            onChange={(e) => setInterests({ ...interests, marketing: e.target.checked })}
          />

          <CheckboxField
            label="Writing"
            description="Technical writing, blogging, and documentation"
            checked={interests.writing}
            onChange={(e) => setInterests({ ...interests, writing: e.target.checked })}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple checkbox fields stacked vertically with space-y-3 (12px) spacing.',
      },
    },
  },
};

// Story 11: Without Description
export const WithoutDescription: Story = {
  render: () => (
    <div className="w-full max-w-md p-8 bg-white">
      <h4 className="text-base font-semibold text-neutral-900 mb-4">
        Select Features
      </h4>

      <div className="space-y-3">
        <CheckboxField label="Real-time sync" />
        <CheckboxField label="Offline mode" />
        <CheckboxField label="End-to-end encryption" />
        <CheckboxField label="Two-factor authentication" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checkbox fields without descriptions. Compact layout for simple lists.',
      },
    },
  },
};

// Story 12: Disabled States
export const DisabledStates: Story = {
  render: () => (
    <div className="w-full max-w-md p-8 bg-white space-y-4">
      <div>
        <h4 className="text-base font-semibold text-neutral-900 mb-3">
          Disabled (Unchecked)
        </h4>
        <CheckboxField
          label="This option is not available"
          description="Contact support to enable this feature."
          disabled
        />
      </div>

      <div>
        <h4 className="text-base font-semibold text-neutral-900 mb-3">
          Disabled (Checked)
        </h4>
        <CheckboxField
          label="This feature is always enabled"
          description="This is a required feature and cannot be disabled."
          checked
          disabled
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled checkbox fields in both checked and unchecked states.',
      },
    },
  },
};

// Story 13: Click Area Demo
export const ClickAreaDemo: Story = {
  render: () => {
    const [clicked, setClicked] = useState(false);

    return (
      <div className="w-full max-w-md p-8 bg-white">
        <div className="bg-neutral-100 p-6 rounded-md mb-6">
          <p className="text-sm text-neutral-700">
            Click anywhere on the label or description text to toggle the checkbox.
            The entire text area is clickable for better usability.
          </p>
        </div>

        <CheckboxField
          label="Large clickable area"
          description="You can click anywhere on this text (label or description) to toggle the checkbox. This improves usability, especially on mobile devices."
          checked={clicked}
          onChange={(e) => setClicked(e.target.checked)}
        />

        {clicked && (
          <div className="mt-4 p-3 bg-sage-100 border border-sage-300 rounded-md text-sm text-sage-900">
            ✓ Checkbox toggled! The entire label area is interactive.
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of large click area. Click label or description to toggle checkbox.',
      },
    },
  },
};

// Story 14: Accessibility Demo
export const AccessibilityDemo: Story = {
  render: () => (
    <div className="max-w-2xl p-8 space-y-8">
      <div className="bg-neutral-100 p-6 rounded-md">
        <h4 className="text-base font-semibold text-neutral-900 mb-4">Accessibility Features</h4>
        <ul className="text-sm text-neutral-700 space-y-2">
          <li>✅ <strong>Label association</strong> - Label linked to checkbox via htmlFor and auto-generated ID</li>
          <li>✅ <strong>aria-describedby</strong> - Description text associated with checkbox for screen readers</li>
          <li>✅ <strong>Large click target</strong> - Entire label area clickable (not just checkbox)</li>
          <li>✅ <strong>Keyboard navigation</strong> - Tab to focus, Space to toggle</li>
          <li>✅ <strong>Focus ring</strong> - terracotta-600 ring with 2px offset on focus</li>
          <li>✅ <strong>Disabled state</strong> - opacity-50 on label, description, and checkbox when disabled</li>
          <li>✅ <strong>Top alignment</strong> - Checkbox aligned to top for multi-line labels</li>
          <li>✅ <strong>Screen reader text</strong> - Label and description both announced</li>
        </ul>
      </div>

      <div className="bg-white border border-neutral-200 p-6 rounded-md">
        <h4 className="text-base font-semibold text-neutral-900 mb-4">
          Try It Yourself
        </h4>
        <p className="text-sm text-neutral-700 mb-4">
          Use Tab to navigate to the checkbox, then press Space to toggle.
          Screen readers will announce the label and description.
        </p>

        <CheckboxField
          label="Subscribe to newsletter"
          description="Get weekly updates delivered to your inbox. Screen readers announce this description."
        />
      </div>

      <div className="bg-terracotta-50 border border-terracotta-200 p-6 rounded-md">
        <h4 className="text-base font-semibold text-terracotta-900 mb-3">
          Design System Compliance
        </h4>
        <p className="text-sm text-terracotta-800">
          <strong>Layout:</strong> Horizontal flex with gap-3 (12px, 8-point grid)<br />
          <strong>Alignment:</strong> items-start (checkbox top-aligned)<br />
          <strong>Checkbox:</strong> w-5 h-5 (20px), mt-0.5 (2px top adjustment)<br />
          <strong>Label:</strong> Inter text-base font-medium, text-neutral-900<br />
          <strong>Description:</strong> Inter text-sm, text-neutral-600, mt-0.5<br />
          <strong>Checkbox checked:</strong> bg-terracotta-600, border-terracotta-600<br />
          <strong>Checkbox unchecked:</strong> bg-white, border-neutral-300<br />
          <strong>Focus ring:</strong> terracotta-600 with 2px offset<br />
          <strong>Disabled:</strong> opacity-50 on all elements<br />
          <strong>Transition:</strong> 150ms ease-out (duration-fast)
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features and design system compliance details.',
      },
    },
  },
};

// Story 15: Interactive (Playground)
export const Interactive: Story = {
  args: {
    label: 'Subscribe to newsletter',
    description: 'Get the latest updates delivered to your inbox.',
    checked: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground - use controls to test different props.',
      },
    },
  },
};

// Helper for conditional className (imported from utils in actual use)
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
