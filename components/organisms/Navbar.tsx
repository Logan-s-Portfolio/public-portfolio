/**
 * Navbar Organism
 *
 * Responsive navigation bar with design system colors and typography.
 * Desktop: Horizontal layout with logo and nav items
 * Mobile: Hamburger menu with slide-out panel
 * Design System: Terracotta/Sage colors, Fraunces/Inter fonts
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
}

export interface NavbarProps {
  currentPath?: string;
  className?: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/home" },
  { name: "Resume", href: "/resume" },
  { name: "Get in Touch", href: "/contact" },
];

export const Navbar = ({ currentPath, className }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Separate regular nav items from CTA
  const regularNavItems = navItems.filter(item => item.name !== "Get in Touch");
  const ctaItem = navItems.find(item => item.name === "Get in Touch");

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl",
        className
      )}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-neutral-200/50 px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/home"
            className="font-fraunces text-xl font-bold text-neutral-900 hover:text-terracotta-600 transition-colors duration-300"
          >
            Logan Bell
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {regularNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-inter text-base font-medium transition-colors duration-300",
                  currentPath === item.href
                    ? "text-terracotta-600"
                    : "text-neutral-600 hover:text-terracotta-600"
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Button */}
            {ctaItem && (
              <Link
                href={ctaItem.href}
                className="inline-flex items-center justify-center gap-2 font-inter font-medium rounded-lg bg-terracotta-600 text-white px-5 py-2.5 shadow-sm hover:bg-terracotta-700 hover:shadow-md active:bg-terracotta-800 transition-all duration-300"
              >
                {ctaItem.name}
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 8 : 0,
              }}
              className="w-full h-0.5 bg-neutral-900 transition-all"
            />
            <motion.span
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
              className="w-full h-0.5 bg-neutral-900 transition-all"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -8 : 0,
              }}
              className="w-full h-0.5 bg-neutral-900 transition-all"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] as const }}
              className="md:hidden border-t border-neutral-200/50 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {regularNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "font-inter text-base font-medium py-2 transition-colors duration-300",
                      currentPath === item.href
                        ? "text-terracotta-600"
                        : "text-neutral-600 hover:text-terracotta-600"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile CTA Button */}
                {ctaItem && (
                  <Link
                    href={ctaItem.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex items-center justify-center gap-2 font-inter font-medium rounded-lg bg-terracotta-600 text-white px-5 py-2.5 shadow-sm hover:bg-terracotta-700 hover:shadow-md active:bg-terracotta-800 transition-all duration-300 mt-2"
                  >
                    {ctaItem.name}
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

Navbar.displayName = "Navbar";
