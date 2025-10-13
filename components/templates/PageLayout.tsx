/**
 * PageLayout Template
 *
 * Foundation template used by ALL pages - ensures consistent Navbar/Footer.
 * Provides optional AnimatedBackground and flexible content width.
 * Layout: Navbar (sticky) → Main (flex-grow) → Footer (bottom)
 * Design System: Neutral-50 background, max-width 1440px container, 8pt spacing
 * Accessibility: Semantic HTML, keyboard navigation through Navbar/Footer
 */

"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { AnimatedBackground } from "@/components/organisms/AnimatedBackground";
import { cn } from "@/lib/utils";

export interface PageLayoutProps {
  /** Page content */
  children: ReactNode;
  /** Show animated background */
  showAnimatedBg?: boolean;
  /** Content max-width constraint */
  maxWidth?: "full" | "container";
  /** Current path for active nav state */
  currentPath?: string;
  /** Whether to show navbar (animates in from top when true) */
  showNavbar?: boolean;
  /** Background class - defaults to bg-neutral-50, pass empty string to inherit */
  bgClass?: string;
  /** Whether to offset footer for sidebar (256px left padding) */
  offsetFooter?: boolean;
  /** Additional wrapper class */
  className?: string;
}

export const PageLayout = ({
  children,
  showAnimatedBg = false,
  maxWidth = "container",
  currentPath,
  showNavbar = true,
  bgClass = "bg-neutral-50",
  offsetFooter = false,
  className,
}: PageLayoutProps) => {
  return (
    <div className={cn("relative flex flex-col min-h-screen", bgClass, className)}>
      {/* Animated Background (optional) */}
      {showAnimatedBg && <AnimatedBackground variant="both" opacity={0.3} />}

      {/* Navbar (sticky) - slides in from top */}
      {showNavbar && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="sticky top-0 z-50"
        >
          <Navbar currentPath={currentPath} />
        </motion.div>
      )}

      {/* Main Content */}
      <main
        className={cn(
          "flex-grow",
          maxWidth === "container" && "mx-auto w-full max-w-[1440px] px-4 md:px-8"
        )}
      >
        {children}
      </main>

      {/* Footer - offset when sidebar is visible */}
      <div style={{ paddingLeft: offsetFooter ? "256px" : 0 }}>
        <Footer />
      </div>
    </div>
  );
};

PageLayout.displayName = "PageLayout";
