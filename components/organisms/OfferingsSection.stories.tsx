import type { Meta, StoryObj } from "@storybook/react";
import { OfferingsSection } from "./OfferingsSection";

const meta = {
  title: "Organisms/OfferingsSection",
  component: OfferingsSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof OfferingsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOfferings = [
  {
    id: "product-design",
    title: "Freelance Product Designer",
    description:
      "End-to-end product design services from concept to launch. I craft intuitive, beautiful interfaces that users love and businesses need.",
    icon: "🎨",
    accent: "terracotta" as const,
  },
  {
    id: "design-systems",
    title: "Design System Architect",
    description:
      "Build scalable, maintainable design systems with atomic design principles. Complete component libraries, style guides, and documentation.",
    icon: "🏗️",
    accent: "sage" as const,
  },
  {
    id: "mvp-ideation",
    title: "MVP Ideation & Strategy",
    description:
      "Turn your idea into reality. Market research, business model validation, ICP definition, and rapid prototyping to test your concept.",
    icon: "💡",
    accent: "terracotta" as const,
  },
  {
    id: "coaching",
    title: "Web Design Coaching",
    description:
      "Learn to build modern web experiences with Claude Code, Flutterflow, and no-code tools. Perfect for founders and aspiring designers.",
    icon: "🎓",
    accent: "sage" as const,
  },
];

export const Default: Story = {
  args: {
    heading: "What I Offer",
    subheading:
      "Comprehensive design and development services tailored to your needs",
    offerings: defaultOfferings,
  },
};

export const CustomHeading: Story = {
  args: {
    heading: "How I Can Help",
    subheading: "Let's bring your vision to life with expert design services",
    offerings: defaultOfferings,
  },
};

export const ThreeOfferings: Story = {
  args: {
    heading: "Core Services",
    offerings: defaultOfferings.slice(0, 3),
  },
};

export const NoHeading: Story = {
  args: {
    offerings: defaultOfferings,
  },
};
