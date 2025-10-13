/**
 * StatusIndicator Molecule
 *
 * Built with: Badge + Text
 * Purpose: Display online/away/offline status with timestamp
 */

import { Badge } from "@/components/atoms/Badge";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";

export interface StatusIndicatorProps {
  status: "online" | "away" | "offline";
  lastSeen?: string;
  className?: string;
}

export const StatusIndicator = ({
  status,
  lastSeen,
  className,
}: StatusIndicatorProps) => {
  const statusConfig = {
    online: {
      variant: "success" as const,
      label: "Online",
    },
    away: {
      variant: "warning" as const,
      label: "Away",
    },
    offline: {
      variant: "default" as const,
      label: "Offline",
    },
  }[status];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Badge variant={statusConfig.variant} dot size="sm">
        {statusConfig.label}
      </Badge>
      {lastSeen && (
        <Text variant="small" className="text-neutral-500">
          {lastSeen}
        </Text>
      )}
    </div>
  );
};

StatusIndicator.displayName = "StatusIndicator";
