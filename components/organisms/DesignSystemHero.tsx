/**
 * DesignSystemHero Organism
 *
 * Built with: Heading + Text + Tag × 6
 * Purpose: Hero section for design systems showcase page
 * Demonstrates: Atomic composition (atoms → organism)
 */

import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Tag } from "@/components/atoms/Tag";
import { cn } from "@/lib/utils";

export interface DesignSystemHeroProps {
  className?: string;
}

export const DesignSystemHero = ({ className }: DesignSystemHeroProps) => {
  const techStack = [
    { label: "React", variant: "terracotta" as const },
    { label: "TypeScript", variant: "sage" as const },
    { label: "Tailwind v4", variant: "terracotta" as const },
    { label: "Framer Motion", variant: "sage" as const },
    { label: "Storybook", variant: "terracotta" as const },
    { label: "Vitest", variant: "sage" as const },
  ];

  return (
    <div className={cn("space-y-6 max-w-4xl", className)}>
      {/* Heading Atom */}
      <Heading as="h1" variant="display" className="text-neutral-900">
        Design Systems: Foundation to Implementation
      </Heading>

      {/* Text Atom */}
      <Text variant="lead" className="text-neutral-600">
        A systematic approach to building scalable, accessible component libraries—from color theory to production code.
      </Text>

      {/* Tag Atoms × 6 */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <Tag key={tech.label} variant={tech.variant} size="md">
            {tech.label}
          </Tag>
        ))}
      </div>
    </div>
  );
};

DesignSystemHero.displayName = "DesignSystemHero";
