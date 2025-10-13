/**
 * ActionButtonGroup Molecule
 *
 * Built with: Button + IconButton × 2
 * Purpose: Primary action with supporting icon actions
 */

import { Button } from "@/components/atoms/Button";
import { IconButton } from "@/components/atoms/IconButton";
import { cn } from "@/lib/utils";
import { Heart, MoreHorizontal } from "lucide-react";

export interface ActionButtonGroupProps {
  primaryLabel: string;
  primaryAction?: () => void;
  onLike?: () => void;
  onMore?: () => void;
  isLiked?: boolean;
  className?: string;
}

export const ActionButtonGroup = ({
  primaryLabel,
  primaryAction,
  onLike,
  onMore,
  isLiked = false,
  className,
}: ActionButtonGroupProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        variant="primary"
        size="md"
        onClick={primaryAction}
      >
        {primaryLabel}
      </Button>
      <IconButton
        variant={isLiked ? "default" : "ghost"}
        size="md"
        icon={<Heart className={isLiked ? "fill-current" : ""} />}
        aria-label="Like"
        onClick={onLike}
      />
      <IconButton
        variant="ghost"
        size="md"
        icon={<MoreHorizontal />}
        aria-label="More options"
        onClick={onMore}
      />
    </div>
  );
};

ActionButtonGroup.displayName = "ActionButtonGroup";
