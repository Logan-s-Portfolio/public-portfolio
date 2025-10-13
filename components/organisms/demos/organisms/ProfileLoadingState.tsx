/**
 * ProfileLoadingState Organism
 *
 * Built with: LoadingCard + Skeleton × N
 * Purpose: Complete loading state for user profile
 */

import { LoadingCard } from "../molecules/LoadingCard";
import { Skeleton } from "@/components/atoms/Skeleton";
import { Divider } from "@/components/atoms/Divider";
import { cn } from "@/lib/utils";

export interface ProfileLoadingStateProps {
  className?: string;
}

export const ProfileLoadingState = ({ className }: ProfileLoadingStateProps) => {
  return (
    <div
      className={cn(
        "border-2 border-neutral-200 rounded-lg bg-white p-6 space-y-4",
        className
      )}
    >
      {/* Header: User Info + Status */}
      <div className="space-y-2">
        <LoadingCard />
        <Skeleton variant="rectangle" width={120} height={24} />
      </div>

      <Divider />

      {/* Stats Section */}
      <div className="flex justify-around py-2">
        <div className="flex flex-col items-center gap-2">
          <Skeleton variant="rectangle" width={48} height={28} />
          <Skeleton variant="rectangle" width={60} height={16} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Skeleton variant="rectangle" width={48} height={28} />
          <Skeleton variant="rectangle" width={60} height={16} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Skeleton variant="rectangle" width={48} height={28} />
          <Skeleton variant="rectangle" width={60} height={16} />
        </div>
      </div>

      <Divider />

      {/* Skills Section */}
      <div className="space-y-2">
        <Skeleton variant="rectangle" width={60} height={16} />
        <div className="flex flex-wrap gap-2">
          <Skeleton variant="rectangle" width={80} height={24} />
          <Skeleton variant="rectangle" width={100} height={24} />
          <Skeleton variant="rectangle" width={90} height={24} />
          <Skeleton variant="rectangle" width={110} height={24} />
          <Skeleton variant="rectangle" width={85} height={24} />
        </div>
      </div>

      <Divider />

      {/* Actions */}
      <div className="flex items-center gap-2">
        <Skeleton variant="rectangle" width="100%" height={40} />
        <Skeleton variant="circle" width={40} height={40} />
        <Skeleton variant="circle" width={40} height={40} />
      </div>
    </div>
  );
};

ProfileLoadingState.displayName = "ProfileLoadingState";
