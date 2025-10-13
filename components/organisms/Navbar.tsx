/**
 * Navbar Organism
 *
 * Responsive navigation with desktop horizontal layout and mobile slide-out menu.
 * Replaces Header and MobileNav organisms with unified Aceternity-inspired design.
 * Background: bg-white/90 with backdrop-blur, sticky positioning.
 * Design System: Terracotta colors, Inter/Fraunces fonts, 8pt grid spacing.
 * Features: Scroll shadow, smooth transitions, mobile menu with social links.
 */

"use client";

import { useState } from "react";
import {
  Navbar as NavbarContainer,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { SocialLink } from "@/components/molecules/SocialLink";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Design System", link: "/design-system" },
  { name: "Skills", link: "/skills" },
  { name: "Case Studies", link: "/case-studies" },
  { name: "About", link: "/about" },
];

const socialLinks = [
  { platform: "github" as const, href: "https://github.com" },
  { platform: "linkedin" as const, href: "https://linkedin.com" },
  { platform: "twitter" as const, href: "https://twitter.com" },
  { platform: "email" as const, href: "mailto:hello@example.com" },
];

export interface NavbarProps {
  /** Additional wrapper class */
  className?: string;
  /** Current path for active nav state */
  currentPath?: string;
}

export const Navbar = ({ className, currentPath = "/" }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavbarContainer className={className}>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton
            variant="primary"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {/* Mobile Nav Links */}
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 font-inter text-base font-medium text-neutral-900 transition-colors duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] hover:bg-terracotta-50 hover:text-terracotta-700 active:bg-terracotta-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-600 focus-visible:ring-offset-2"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <NavbarButton
            onClick={() => {
              window.location.href = "/contact";
              setIsMobileMenuOpen(false);
            }}
            variant="primary"
            className="w-full"
          >
            Contact
          </NavbarButton>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-6 border-t border-neutral-200">
            {socialLinks.map((social) => (
              <SocialLink
                key={social.platform}
                platform={social.platform}
                href={social.href}
              />
            ))}
          </div>
        </MobileNavMenu>
      </MobileNav>
    </NavbarContainer>
  );
};

Navbar.displayName = "Navbar";
