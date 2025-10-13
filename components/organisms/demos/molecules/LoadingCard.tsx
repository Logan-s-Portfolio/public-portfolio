/**
 * LoadingCard Molecule
 *
 * Built with: Skeleton × 3
 * Purpose: Loading placeholder mimicking UserInfoCard layout
 */

import { Skeleton } from "@/components/atoms/Skeleton";
import { cn } from "@/lib/utils";

export interface LoadingCardProps {
  className?: string;
}

export const LoadingCard = ({ className }: LoadingCardProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Avatar skeleton */}
      <Skeleton variant="circle" width={48} height={48} />

      {/* Text skeletons */}
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" lines={2} />
      </div>
    </div>
  );
};

LoadingCard.displayName = "LoadingCard";
