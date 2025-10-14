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
import { Navbar } from "@/components/organisms/Navbar";
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
    <PageLayout currentPath={currentPath} maxWidth="full" showNavbar={false} bgClass={bgClass} offsetFooter={false}>
      {/* Top Navigation */}
      <Navbar currentPath={currentPath} />

      {/* Main Content - offset by floating navbar */}
      <div className="pt-24">
        <div className="px-4 pt-8 pb-8 md:px-6 md:pt-12 md:pb-12 lg:px-8 lg:pt-16 lg:pb-16">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumbs */}
            {breadcrumbs && <Breadcrumb items={breadcrumbs} className="mb-6" />}

            {/* Page Title */}
            {pageTitle && (
              <Heading as="h1" variant="display-2xl" className="mb-8">
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
