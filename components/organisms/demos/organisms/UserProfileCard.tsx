/**
 * UserProfileCard Organism
 *
 * Built with: UserInfoCard + StatusIndicator + StatDisplay × 3 + SkillTagGroup + ActionButtonGroup + Divider
 * Purpose: Complete user profile card showing all user information
 */

import { UserInfoCard } from "../molecules/UserInfoCard";
import { StatusIndicator } from "../molecules/StatusIndicator";
import { StatDisplay } from "../molecules/StatDisplay";
import { SkillTagGroup } from "../molecules/SkillTagGroup";
import { ActionButtonGroup } from "../molecules/ActionButtonGroup";
import { Divider } from "@/components/atoms/Divider";
import { cn } from "@/lib/utils";

export interface UserProfileCardProps {
  // User info
  avatarSrc?: string;
  name: string;
  title: string;

  // Status
  status: "online" | "away" | "offline";
  lastSeen?: string;

  // Stats
  followers: number;
  following: number;
  posts: number;

  // Skills
  skills: Array<{
    label: string;
    variant?: "default" | "terracotta" | "sage";
  }>;

  // Actions
  primaryAction?: () => void;
  primaryLabel?: string;
  onLike?: () => void;
  onMore?: () => void;
  isLiked?: boolean;

  // Variants
  variant?: "connected" | "stranger";
  className?: string;
}

export const UserProfileCard = ({
  avatarSrc,
  name,
  title,
  status,
  lastSeen,
  followers,
  following,
  posts,
  skills,
  primaryAction,
  primaryLabel = "Follow",
  onLike,
  onMore,
  isLiked = false,
  variant = "stranger",
  className,
}: UserProfileCardProps) => {
  return (
    <div
      className={cn(
        "border-2 border-neutral-200 rounded-lg bg-white p-6 space-y-4",
        className
      )}
    >
      {/* Header: User Info + Status */}
      <div className="space-y-2">
        <UserInfoCard
          avatarSrc={avatarSrc}
          name={name}
          title={title}
          size="default"
        />
        <StatusIndicator status={status} lastSeen={lastSeen} />
      </div>

      <Divider />

      {/* Stats Section */}
      <div className="flex justify-around py-2">
        <StatDisplay value={followers.toLocaleString()} label="Followers" />
        <StatDisplay value={following.toLocaleString()} label="Following" />
        <StatDisplay value={posts.toLocaleString()} label="Posts" />
      </div>

      <Divider />

      {/* Skills Section */}
      <SkillTagGroup skills={skills} />

      <Divider />

      {/* Actions */}
      <ActionButtonGroup
        primaryLabel={variant === "connected" ? "Message" : primaryLabel}
        primaryAction={primaryAction}
        onLike={onLike}
        onMore={onMore}
        isLiked={isLiked}
      />
    </div>
  );
};

UserProfileCard.displayName = "UserProfileCard";
