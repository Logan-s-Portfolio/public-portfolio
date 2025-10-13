/**
 * Badge Component
 *
 * Status indicators using design system colors (terracotta + sage + neutral).
 * Success/info use sage (accent), warning/error use terracotta (primary).
 * 8-point grid aligned spacing, pill-shaped with pastel backgrounds for professional warmth.
 */

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  "inline-flex items-center gap-2 font-inter font-medium",
  {
    variants: {
      variant: {
        default: "bg-neutral-100 text-neutral-700",
        outline: "border border-neutral-300 bg-transparent text-neutral-700",
        success: "bg-sage-100 text-sage-800",
        warning: "bg-terracotta-100 text-terracotta-700",
        error: "bg-terracotta-200 text-terracotta-900",
        info: "bg-sage-50 text-sage-700",
      },
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-1 text-base",
      },
      shape: {
        pill: "rounded-full",
        rounded: "rounded-md",
        square: "rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      shape: "pill",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Show colored dot indicator */
  dot?: boolean;
}

export const Badge = ({
  className,
  variant,
  size,
  shape,
  dot = false,
  children,
  ...props
}: BadgeProps) => {
  // Dot color matches variant (8px for 8-point grid)
  const dotColorClass = {
    default: 'bg-neutral-500',
    outline: 'bg-neutral-500',
    success: 'bg-sage-600',
    warning: 'bg-terracotta-500',
    error: 'bg-terracotta-700',
    info: 'bg-sage-500',
  }[variant || 'default'];

  return (
    <span
      className={cn(badgeVariants({ variant, size, shape }), className)}
      {...props}
    >
      {dot && (
        <span
          className={cn('w-2 h-2 rounded-full', dotColorClass)}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};

Badge.displayName = "Badge";
