/**
 * StatDisplay Molecule
 *
 * Built with: Heading + Text
 * Purpose: Display metric with label (followers, posts, etc.)
 */

import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";

export interface StatDisplayProps {
  value: string | number;
  label: string;
  className?: string;
}

export const StatDisplay = ({ value, label, className }: StatDisplayProps) => {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <Heading variant="h4" className="text-neutral-900">
        {value}
      </Heading>
      <Text variant="caption" className="text-neutral-600">
        {label}
      </Text>
    </div>
  );
};

StatDisplay.displayName = "StatDisplay";
