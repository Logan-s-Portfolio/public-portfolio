/**
 * SkillTagGroup Molecule
 *
 * Built with: Text + Tag × N
 * Purpose: Display multiple skill tags with heading
 */

import { Text } from "@/components/atoms/Text";
import { Tag } from "@/components/atoms/Tag";
import { cn } from "@/lib/utils";

export interface SkillTagGroupProps {
  skills: Array<{
    label: string;
    variant?: "default" | "terracotta" | "sage";
  }>;
  heading?: string;
  className?: string;
}

export const SkillTagGroup = ({
  skills,
  heading = "Skills",
  className,
}: SkillTagGroupProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      <Text variant="caption" className="font-semibold text-neutral-700">
        {heading}
      </Text>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Tag
            key={index}
            variant={skill.variant || "default"}
            size="sm"
          >
            {skill.label}
          </Tag>
        ))}
      </div>
    </div>
  );
};

SkillTagGroup.displayName = "SkillTagGroup";
