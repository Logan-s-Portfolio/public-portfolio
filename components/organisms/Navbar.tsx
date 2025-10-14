/**
 * Navbar Organism
 *
 * Responsive navigation bar with design system colors and typography.
 * Desktop: Horizontal layout with logo and nav items
 * Mobile: Hamburger menu with slide-out panel
 * Design System: Terracotta/Sage colors, Fraunces/Inter fonts
 */

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedLogo } from "@/components/molecules/AnimatedLogo";

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
  const [isVisible, setIsVisible] = useState(true);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  // Separate regular nav items from CTA
  const regularNavItems = navItems.filter(item => item.name !== "Get in Touch");
  const ctaItem = navItems.find(item => item.name === "Get in Touch");

  // Hide navbar during scroll/swipe, show when stopped
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let touchStartY = 0;

    const handleScroll = () => {
      setIsVisible(false);

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Show navbar 150ms after scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 150);

      lastScrollY = window.scrollY;
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = () => {
      setIsVisible(false);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };

    const handleTouchEnd = () => {
      // Show navbar after touch ends
      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className={cn(
        "fixed top-4 left-0 right-0 z-50 px-4 md:px-6 lg:px-8",
        className
      )}
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1]
      }}
    >
      {/* Container aligned with content (max-w-5xl) */}
      <div className="max-w-5xl mx-auto">
        {/* Mobile: Unified Navbar */}
        <div className="md:hidden bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-neutral-200/50 px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/home" className="flex items-center">
              <AnimatedLogo height={40} />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col gap-1.5 w-6 h-6 justify-center"
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
                className="border-t border-neutral-200/50 overflow-hidden"
              >
                <div className="py-4 flex flex-col gap-4">
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

        {/* Desktop: Separated Navbar */}
        <div
          className="hidden md:flex items-center justify-between"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          {/* Logo - Left */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-neutral-200/50 px-4 py-2">
            <Link href="/home" className="flex items-center">
              <AnimatedLogo height={40} isHovered={isLogoHovered} />
            </Link>
          </div>

          {/* Navigation - Right */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-neutral-200/50 px-8">
            <div className="flex items-center gap-6 h-16">
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
          </div>
        </div>
      </div>
    </motion.div>
  );
};

Navbar.displayName = "Navbar";
