/**
 * CaseStudyContent Stories
 *
 * Demonstrates the CaseStudyContent organism with different content block types.
 * Shows structured sections with text, images, code, and quick facts.
 */

import type { Meta, StoryObj } from "@storybook/react";
import { CaseStudyContent } from "./CaseStudyContent";

const meta = {
  title: "Organisms/CaseStudyContent",
  component: CaseStudyContent,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Structured content sections for case study pages (Overview, Challenge, Solution, Results). Container: max-width 768px (prose) centered. Supports text, image, code, and quick facts blocks.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CaseStudyContent>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Complete case study with all section types (Overview, Challenge, Solution, Results).
 * Demonstrates text blocks, images with captions, code blocks, and quick facts.
 */
export const Complete: Story = {
  args: {
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "The client, a multi-vendor e-commerce marketplace serving 100,000+ monthly users, needed a complete platform redesign to address declining mobile conversion rates and accessibility concerns.",
              "Our team conducted extensive user research, competitive analysis, and accessibility audits to inform a comprehensive redesign strategy that would improve user experience while maintaining business objectives.",
            ],
          },
          {
            type: "quickFacts",
            facts: [
              { label: "Timeline", value: "6 months" },
              { label: "Team Size", value: "4 designers, 6 engineers" },
              { label: "Platform", value: "Web & Mobile" },
              { label: "Users", value: "100,000+ monthly" },
            ],
          },
        ],
      },
      {
        heading: "The Challenge",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "The existing platform suffered from several critical issues that were impacting business metrics and user satisfaction:",
              "Mobile conversion rates were 45% lower than desktop, checkout abandonment was at 68%, and the platform failed WCAG 2.1 AA accessibility standards in multiple areas. Additionally, the fragmented design system made it difficult for vendors to maintain brand consistency.",
            ],
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop",
            alt: "Before redesign - old interface showing navigation issues",
            caption: "Original platform interface highlighting navigation and accessibility issues",
          },
        ],
      },
      {
        heading: "The Solution",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "We implemented a mobile-first redesign with focus on three key areas: streamlined checkout flow, accessibility improvements, and a unified design system.",
              "The new checkout process reduced steps from 6 to 3, implemented persistent cart state, and added multiple payment options including Apple Pay and Google Pay.",
            ],
          },
          {
            type: "code",
            language: "typescript",
            code: `// Simplified checkout state management
interface CheckoutState {
  step: 'shipping' | 'payment' | 'review';
  cart: CartItem[];
  shipping: ShippingInfo;
  payment: PaymentMethod;
}

const useCheckout = () => {
  const [state, setState] = useState<CheckoutState>();

  // Persist cart state to localStorage
  useEffect(() => {
    localStorage.setItem('checkout', JSON.stringify(state));
  }, [state]);

  return { state, updateCheckout: setState };
};`,
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop",
            alt: "After redesign - new streamlined interface",
            caption: "Redesigned interface with simplified navigation and improved accessibility",
          },
        ],
      },
      {
        heading: "Results",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "The redesign exceeded our initial success metrics across all key performance indicators. Mobile conversion increased by 45%, checkout completion improved by 30%, and the platform achieved WCAG 2.1 AA compliance.",
            ],
          },
          {
            type: "quickFacts",
            facts: [
              { label: "Mobile Conversion", value: "+45%" },
              { label: "Checkout Completion", value: "+30%" },
              { label: "Page Load Time", value: "-60%" },
              { label: "Accessibility Score", value: "AAA" },
              { label: "Customer Satisfaction", value: "4.8/5" },
              { label: "Revenue Impact", value: "+$2.1M annually" },
            ],
          },
          {
            type: "text",
            paragraphs: [
              "Post-launch user feedback was overwhelmingly positive, with vendors reporting easier onboarding and customers praising the improved mobile experience. The unified design system reduced design-to-development time by 40%.",
            ],
          },
        ],
      },
    ],
  },
};

/**
 * Simple case study with text-only sections.
 */
export const TextOnly: Story = {
  args: {
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "This project focused on building a real-time patient monitoring dashboard for a major healthcare provider.",
              "The system needed to process and visualize 50,000+ data points per second while maintaining sub-second response times and 99.99% uptime.",
            ],
          },
        ],
      },
      {
        heading: "Approach",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "We implemented a microservices architecture with Redis for caching, PostgreSQL for persistence, and WebSockets for real-time updates.",
              "The frontend used React with D3.js for data visualization, optimized to handle large datasets without performance degradation.",
            ],
          },
        ],
      },
    ],
  },
};

/**
 * Case study with multiple images (image gallery showcase).
 */
export const ImageGallery: Story = {
  args: {
    sections: [
      {
        heading: "Design Process",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Our design process began with extensive user research and wireframing.",
            ],
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1600&h=900&fit=crop",
            alt: "Initial wireframes and user flows",
            caption: "Early wireframes exploring different navigation patterns",
            aspectRatio: "video",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=1600&fit=crop",
            alt: "High-fidelity mockups",
            caption: "High-fidelity mockups with final visual design",
            aspectRatio: "square",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=1600&fit=crop",
            alt: "Mobile prototype",
            caption: "Interactive mobile prototype used for user testing",
            aspectRatio: "portrait",
          },
        ],
      },
    ],
  },
};

/**
 * Code-focused case study with technical implementation details.
 */
export const TechnicalImplementation: Story = {
  args: {
    sections: [
      {
        heading: "Architecture",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "The platform uses a modern microservices architecture with event-driven communication.",
            ],
          },
          {
            type: "code",
            language: "typescript",
            code: `// Event bus implementation
class EventBus {
  private listeners = new Map<string, Set<Function>>();

  on(event: string, callback: Function) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)?.add(callback);
  }

  emit(event: string, data: any) {
    this.listeners.get(event)?.forEach(cb => cb(data));
  }
}`,
          },
        ],
      },
      {
        heading: "Performance Optimization",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "We implemented several caching strategies to achieve sub-100ms response times.",
            ],
          },
          {
            type: "code",
            language: "javascript",
            code: `// Redis caching layer
const cache = redis.createClient();

async function getCachedData(key) {
  const cached = await cache.get(key);
  if (cached) return JSON.parse(cached);

  const data = await fetchFromDatabase(key);
  await cache.setex(key, 3600, JSON.stringify(data));
  return data;
}`,
          },
        ],
      },
    ],
  },
};

/**
 * Metrics-focused case study emphasizing quick facts and results.
 */
export const MetricsFocused: Story = {
  args: {
    sections: [
      {
        heading: "Project Scope",
        blocks: [
          {
            type: "quickFacts",
            facts: [
              { label: "Duration", value: "3 months" },
              { label: "Budget", value: "$250,000" },
              { label: "Team", value: "8 people" },
              { label: "Platform", value: "iOS & Android" },
            ],
          },
        ],
      },
      {
        heading: "Key Results",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "The project delivered exceptional results across all key performance indicators.",
            ],
          },
          {
            type: "quickFacts",
            facts: [
              { label: "User Growth", value: "+150%" },
              { label: "Engagement", value: "+80%" },
              { label: "App Store Rating", value: "4.9/5" },
              { label: "Crash Rate", value: "<0.1%" },
              { label: "Load Time", value: "1.2s" },
              { label: "Monthly Active Users", value: "500K+" },
            ],
          },
        ],
      },
    ],
  },
};

/**
 * Single section (useful for testing minimal content).
 */
export const SingleSection: Story = {
  args: {
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "A brief overview of the project and its main objectives.",
            ],
          },
        ],
      },
    ],
  },
};
