/**
 * TeamDirectoryTemplate
 *
 * Built with: StatDisplay + ActionButtonGroup + UserCardGrid
 * Purpose: Browse multiple user profiles in directory/team view
 */

import { UserCardGrid } from "../organisms/UserCardGrid";
import { ActionButtonGroup } from "../molecules/ActionButtonGroup";
import { Divider } from "@/components/atoms/Divider";
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

export interface TeamDirectoryTemplateProps {
  users: UserCardData[];
  totalCount: number;
  title?: string;
  onInvite?: () => void;
  onFilter?: () => void;
  className?: string;
}

export const TeamDirectoryTemplate = ({
  users,
  totalCount,
  title = "Team Directory",
  onInvite,
  onFilter,
  className,
}: TeamDirectoryTemplateProps) => {
  return (
    <div className={cn("max-w-7xl mx-auto p-6 space-y-6", className)}>
      {/* Header Actions */}
      <div className="flex items-center justify-end">
        <ActionButtonGroup
          primaryLabel="Invite Member"
          primaryAction={onInvite}
          onMore={onFilter}
        />
      </div>

      <Divider />

      {/* User Grid */}
      <UserCardGrid users={users} totalCount={totalCount} title={title} />
    </div>
  );
};

TeamDirectoryTemplate.displayName = "TeamDirectoryTemplate";
