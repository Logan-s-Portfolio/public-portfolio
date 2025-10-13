/**
 * DocsLayout Template
 *
 * Documentation layout with side navigation, breadcrumbs, and content area.
 * Used for all /docs/* pages with consistent navigation and breadcrumb experience.
 */

"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { PageLayout } from "./PageLayout";
import { SideNav, type NavItem } from "@/components/organisms/SideNav";
import { Breadcrumb } from "@/components/molecules/Breadcrumb";
import { Heading } from "@/components/atoms/Heading";

export interface Breadcrumb {
  label: string;
  href: string;
}

export interface DocsLayoutProps {
  children: ReactNode;
  currentPath: string;
  breadcrumbs?: Breadcrumb[];
  pageTitle?: string;
  /** Whether to show navbar (passed to PageLayout) */
  showNavbar?: boolean;
  /** Whether to show sidebar (animates in from left when true) */
  showSidebar?: boolean;
  /** Background class for PageLayout - defaults to bg-neutral-50 */
  bgClass?: string;
  /** Override footer offset - defaults to showSidebar value */
  offsetFooter?: boolean;
}

// Complete navigation structure for the entire docs site
const navigationItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    id: "resume",
    label: "Resume",
    href: "/resume",
  },
  {
    id: "design-systems",
    label: "Design Systems",
    href: "/skills/design-systems",
  },
  {
    id: "claude-code",
    label: "Claude Code",
    href: "/skills/claude-code",
  },
  {
    id: "flutterflow",
    label: "Flutterflow",
    href: "/skills/flutterflow",
  },
  {
    id: "duro-case-study",
    label: "Duro Case Study",
    href: "/case-studies/duro",
  },
];

export const DocsLayout = ({
  children,
  currentPath,
  breadcrumbs,
  pageTitle,
  showNavbar = false,
  showSidebar = true,
  bgClass,
  offsetFooter,
}: DocsLayoutProps) => {
  return (
    <PageLayout currentPath={currentPath} maxWidth="full" showNavbar={showNavbar} bgClass={bgClass} offsetFooter={offsetFooter !== undefined ? offsetFooter : showSidebar}>
      {/* Side Navigation - fixed positioned overlay */}
      {showSidebar && (
        <div className="fixed left-0 top-0 z-40 h-screen">
          <SideNav
            items={navigationItems}
            currentPath={currentPath}
          />
        </div>
      )}

      {/* Main Content - offset by sidebar width */}
      <div style={{ paddingLeft: showSidebar ? "256px" : 0 }}>
        <div className="px-4 pt-8 pb-8 md:px-6 md:pt-12 md:pb-12 lg:px-8 lg:pt-16 lg:pb-16">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumbs */}
            {breadcrumbs && <Breadcrumb items={breadcrumbs} className="mb-6" />}

            {/* Page Title */}
            {pageTitle && (
              <Heading as="h1" variant="hero" className="mb-8">
                {pageTitle}
              </Heading>
            )}

            {/* Content */}
            {children}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

DocsLayout.displayName = "DocsLayout";
