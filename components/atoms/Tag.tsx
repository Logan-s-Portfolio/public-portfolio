/**
 * Tag Component
 *
 * Technology tags using design system colors (terracotta + sage + neutral).
 * 8-point grid spacing: gap-2 (8px), heights 24px/32px. Remove button: design system colors, 300ms transitions.
 * Border radius: sm (4px), md (8px).
 */

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const tagVariants = cva(
  "inline-flex items-center gap-2 font-inter font-medium border",
  {
    variants: {
      variant: {
        default: "bg-neutral-100 border-neutral-200 text-neutral-700",
        terracotta: "bg-terracotta-50 border-terracotta-200 text-terracotta-700",
        sage: "bg-sage-50 border-sage-200 text-sage-700",
      },
      size: {
        sm: "px-2 py-1 text-xs h-6 rounded-sm",
        md: "px-3 py-2 text-sm h-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-3 h-3"
  >
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
);

export interface TagProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onRemove'>,
    VariantProps<typeof tagVariants> {
  /** Show remove button */
  removable?: boolean;
  /** Callback when remove button is clicked */
  onRemove?: () => void;
}

export const Tag = ({
  className,
  variant,
  size,
  removable = false,
  onRemove,
  children,
  ...props
}: TagProps) => {
  return (
    <span
      className={cn(tagVariants({ variant, size }), className)}
      {...props}
    >
      {children}
      {removable && onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className={cn(
            "inline-flex items-center justify-center rounded-full transition-colors duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] p-1 -mr-1",
            variant === "terracotta" && "hover:bg-terracotta-200",
            variant === "sage" && "hover:bg-sage-200",
            variant === "default" && "hover:bg-neutral-200"
          )}
          aria-label={`Remove ${children}`}
        >
          <XIcon />
        </button>
      )}
    </span>
  );
};

Tag.displayName = "Tag";
