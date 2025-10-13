/**
 * UserInfoCard Molecule
 *
 * Built with: Avatar + Heading + Text
 * Purpose: Display user identity with photo, name, and title
 */

import { Avatar } from "@/components/atoms/Avatar";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";

export interface UserInfoCardProps {
  avatarSrc?: string;
  name: string;
  title: string;
  size?: "compact" | "default" | "expanded";
  className?: string;
}

export const UserInfoCard = ({
  avatarSrc,
  name,
  title,
  size = "default",
  className,
}: UserInfoCardProps) => {
  const avatarSize = {
    compact: "sm" as const,
    default: "lg" as const,
    expanded: "xl" as const,
  }[size];

  const headingVariant = {
    compact: "h4" as const,
    default: "h3" as const,
    expanded: "h2" as const,
  }[size];

  const gapClass = {
    compact: "gap-2",
    default: "gap-3",
    expanded: "gap-4",
  }[size];

  return (
    <div className={cn("flex items-center", gapClass, className)}>
      <Avatar
        src={avatarSrc}
        alt={name}
        size={avatarSize}
        fallback={name.substring(0, 2).toUpperCase()}
      />
      <div>
        <Heading variant={headingVariant}>{name}</Heading>
        <Text variant="caption" className="text-neutral-600">
          {title}
        </Text>
      </div>
    </div>
  );
};

UserInfoCard.displayName = "UserInfoCard";
