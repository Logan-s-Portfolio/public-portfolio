/**
 * UserCardGrid Organism
 *
 * Built with: StatDisplay + UserProfileCard × 4
 * Purpose: Grid of user profile cards for team/directory views
 */

import { StatDisplay } from "../molecules/StatDisplay";
import { UserProfileCard } from "./UserProfileCard";
import { Heading } from "@/components/atoms/Heading";
import { cn } from "@/lib/utils";

interface UserCardData {
  id: string;
  avatarSrc?: string;
  name: string;
  title: string;
  status: "online" | "away" | "offline";
  lastSeen?: string;
  followers: number;
  following: number;
  posts: number;
  skills: Array<{
    label: string;
    variant?: "default" | "terracotta" | "sage";
  }>;
}

export interface UserCardGridProps {
  users: UserCardData[];
  totalCount?: number;
  title?: string;
  className?: string;
}

export const UserCardGrid = ({
  users,
  totalCount,
  title = "Team Members",
  className,
}: UserCardGridProps) => {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Header with total count */}
      <div className="flex items-center justify-between">
        <Heading variant="h2">{title}</Heading>
        {totalCount !== undefined && (
          <StatDisplay value={totalCount} label="Total" />
        )}
      </div>

      {/* Grid of profile cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <UserProfileCard
            key={user.id}
            avatarSrc={user.avatarSrc}
            name={user.name}
            title={user.title}
            status={user.status}
            lastSeen={user.lastSeen}
            followers={user.followers}
            following={user.following}
            posts={user.posts}
            skills={user.skills}
            variant="stranger"
          />
        ))}
      </div>
    </div>
  );
};

UserCardGrid.displayName = "UserCardGrid";
