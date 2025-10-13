/**
 * Resizable Navbar Component
 *
 * A responsive navigation system with desktop and mobile variants.
 * Applies design system: terracotta colors, Inter/Fraunces typography, 8pt grid spacing.
 * Features: sticky positioning, smooth transitions, mobile slide-out menu.
 */

"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// ==================== Main Navbar Container ====================

export interface NavbarProps {
  children: ReactNode;
  className?: string;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-neutral-300 bg-white/90 backdrop-blur-md transition-shadow duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)]",
        hasScrolled && "shadow-sm",
        className
      )}
    >
      {children}
    </header>
  );
};

// ==================== Desktop Navigation Body ====================

export interface NavBodyProps {
  children: ReactNode;
  className?: string;
}

export const NavBody = ({ children, className }: NavBodyProps) => {
  return (
    <div
      className={cn(
        "mx-auto hidden w-full max-w-[1440px] items-center justify-between px-6 py-4 md:flex",
        className
      )}
    >
      {children}
    </div>
  );
};

// ==================== Nav Items (Desktop Links) ====================

export interface NavItem {
  name: string;
  link: string;
}

export interface NavItemsProps {
  items: NavItem[];
  className?: string;
}

export const NavItems = ({ items, className }: NavItemsProps) => {
  return (
    <nav className={cn("flex items-center gap-6", className)}>
      {items.map((item, idx) => (
        <a
          key={`nav-${idx}`}
          href={item.link}
          className="font-inter text-base font-medium text-neutral-900 transition-colors duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] hover:text-terracotta-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-600 focus-visible:ring-offset-2"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

// ==================== Navbar Logo ====================

export interface NavbarLogoProps {
  children?: ReactNode;
  className?: string;
}

export const NavbarLogo = ({ children, className }: NavbarLogoProps) => {
  return (
    <a
      href="/"
      className={cn(
        "font-fraunces text-xl font-bold tracking-[-0.02em] text-neutral-900 transition-colors duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] hover:text-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-600 focus-visible:ring-offset-2",
        className
      )}
    >
      {children || "Logan [LastName]"}
    </a>
  );
};

// ==================== Navbar Button ====================

export interface NavbarButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
}

export const NavbarButton = ({
  variant = "primary",
  children,
  className,
  ...props
}: NavbarButtonProps) => {
  const variants = {
    primary:
      "bg-terracotta-600 text-white shadow-sm hover:bg-terracotta-700 hover:shadow-md active:bg-terracotta-800 active:shadow-sm",
    secondary:
      "bg-transparent border-2 border-neutral-300 text-neutral-700 hover:border-terracotta-600 hover:bg-terracotta-50 hover:text-terracotta-700 active:border-terracotta-700 active:bg-terracotta-100",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-6 py-3 font-inter text-base font-medium transition-all duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// ==================== Mobile Navigation ====================

export interface MobileNavProps {
  children: ReactNode;
  className?: string;
}

export const MobileNav = ({ children, className }: MobileNavProps) => {
  return (
    <div className={cn("flex md:hidden px-4 py-4", className)}>{children}</div>
  );
};

// ==================== Mobile Nav Header ====================

export interface MobileNavHeaderProps {
  children: ReactNode;
  className?: string;
}

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div className={cn("flex w-full items-center justify-between", className)}>
      {children}
    </div>
  );
};

// ==================== Mobile Nav Toggle (Hamburger) ====================

export interface MobileNavToggleProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const MobileNavToggle = ({
  isOpen,
  onClick,
  className,
}: MobileNavToggleProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-colors duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] hover:bg-neutral-100 hover:text-neutral-900 active:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-600 focus-visible:ring-offset-2",
        className
      )}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("transition-transform duration-[300ms]", isOpen && "rotate-90")}
      >
        {isOpen ? (
          <>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </>
        ) : (
          <>
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </>
        )}
      </svg>
    </button>
  );
};

// ==================== Mobile Nav Menu (Slide-out Panel) ====================

export interface MobileNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  portalContainer?: HTMLElement;
}

export const MobileNavMenu = ({
  isOpen,
  onClose,
  children,
  className,
  portalContainer,
}: MobileNavMenuProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      if (!portalContainer || portalContainer === document.body) {
        const scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      if (!portalContainer || portalContainer === document.body) {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
    }

    return () => {
      if (!portalContainer || portalContainer === document.body) {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
    };
  }, [isOpen, portalContainer]);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="fixed inset-0 z-[1000] bg-black"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-out Panel */}
          <motion.div
            ref={panelRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className={cn(
              "fixed top-0 right-0 bottom-0 z-[1040] w-[80%] max-w-[320px] bg-white shadow-2xl overflow-y-auto",
              className
            )}
            role="dialog"
            aria-label="Mobile navigation menu"
            aria-modal="true"
          >
            <div className="flex flex-col h-full p-6 space-y-6">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

Navbar.displayName = "Navbar";
NavBody.displayName = "NavBody";
NavItems.displayName = "NavItems";
NavbarLogo.displayName = "NavbarLogo";
NavbarButton.displayName = "NavbarButton";
MobileNav.displayName = "MobileNav";
MobileNavHeader.displayName = "MobileNavHeader";
MobileNavToggle.displayName = "MobileNavToggle";
MobileNavMenu.displayName = "MobileNavMenu";
