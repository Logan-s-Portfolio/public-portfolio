/**
 * ContactForm Stories
 *
 * Demonstrates the ContactForm organism with different states and interactions.
 * Shows validation errors, submission states, and success/error feedback.
 */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { ContactForm } from "./ContactForm";

const meta = {
  title: "Organisms/ContactForm",
  component: ContactForm,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Contact form with validation and submission states. Form fields: Name, Email, Project Type, Message. Validation: React Hook Form with error states. States: Idle, Submitting, Success, Error. Max-width: 600px (centered). Used on Contact page.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-neutral-50 p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default form (idle state).
 * Try submitting with empty fields to see validation errors.
 */
export const Default: Story = {
  args: {
    onSubmit: async (data) => {
      console.log("Form submitted:", data);
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
    },
  },
};

/**
 * Form with successful submission.
 * Submits immediately and shows success message.
 */
export const SuccessState: Story = {
  args: {
    onSubmit: async (data) => {
      console.log("Form submitted successfully:", data);
      // Simulate fast API response
      await new Promise((resolve) => setTimeout(resolve, 500));
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Fill out the form and submit to see the success message. The form will reset after submission.",
      },
    },
  },
};

/**
 * Form with error state.
 * Simulates API error to demonstrate error handling.
 */
export const ErrorState: Story = {
  args: {
    onSubmit: async (data) => {
      console.log("Form submission attempted:", data);
      // Simulate API delay then error
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error("Simulated API error");
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Fill out the form and submit to see the error message. This story simulates an API error.",
      },
    },
  },
};

/**
 * Form with slow submission (2.5 seconds).
 * Demonstrates loading state during submission.
 */
export const SlowSubmission: Story = {
  args: {
    onSubmit: async (data) => {
      console.log("Submitting form (slow):", data);
      // Simulate slow API response
      await new Promise((resolve) => setTimeout(resolve, 2500));
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Fill out the form and submit to see the submitting state. Button shows 'Sending...' and all fields are disabled.",
      },
    },
  },
};

/**
 * Form with validation examples.
 * Interactive playground to test all validation rules.
 */
export const ValidationExamples: Story = {
  args: {
    onSubmit: async (data) => {
      console.log("Valid form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
  },
  parameters: {
    docs: {
      description: {
        story: `Validation rules:
- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Project Type**: Required selection
- **Message**: Required, minimum 10 characters, maximum 1000 characters

Try submitting with invalid data to see validation errors.`,
      },
    },
  },
};

/**
 * Form pre-filled with data (for testing).
 */
export const PrefilledForm: Story = {
  render: (args) => (
    <div>
      <p className="mb-6 font-inter text-sm text-neutral-600">
        This story shows a pre-filled form for testing purposes. In production,
        the form starts empty.
      </p>
      <ContactForm {...args} />
    </div>
  ),
  args: {
    onSubmit: async (data) => {
      console.log("Form submitted:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example with form pre-filled. In production, users start with an empty form.",
      },
    },
  },
};

/**
 * Multiple forms on same page (for testing isolation).
 */
export const MultipleForms: Story = {
  render: (args) => (
    <div className="space-y-12">
      <div>
        <h3 className="mb-4 font-fraunces text-2xl font-semibold text-neutral-900">
          Contact Sales
        </h3>
        <ContactForm {...args} />
      </div>
      <div className="border-t-2 border-neutral-200 pt-12">
        <h3 className="mb-4 font-fraunces text-2xl font-semibold text-neutral-900">
          General Inquiry
        </h3>
        <ContactForm {...args} />
      </div>
    </div>
  ),
  args: {
    onSubmit: async (data) => {
      console.log("Form submitted:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Multiple forms on the same page to test form isolation. Each form maintains its own state independently.",
      },
    },
  },
};

/**
 * Accessibility testing.
 * Use keyboard navigation to test accessibility.
 */
export const AccessibilityTest: Story = {
  args: {
    onSubmit: async (data) => {
      console.log("Form submitted:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
  },
  parameters: {
    docs: {
      description: {
        story: `Accessibility features:
- **Keyboard navigation**: Tab through all fields, Enter to submit
- **Form labels**: All fields have associated labels
- **Error messages**: ARIA live regions announce errors
- **Required fields**: Marked with asterisk and aria-required
- **Focus states**: Visible focus indicators on all interactive elements
- **Screen reader support**: Semantic HTML and ARIA attributes

Try navigating the form using only your keyboard (Tab, Shift+Tab, Enter).`,
      },
    },
  },
};
