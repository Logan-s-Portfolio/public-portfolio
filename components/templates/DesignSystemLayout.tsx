/**
 * DesignSystemLayout Template
 *
 * Stripe Docs-style layout for design system documentation.
 * Features left sidebar TOC, main content area, and optional right mini-TOC.
 */

import { ReactNode } from "react";
import { PageLayout } from "./PageLayout";
import { Link } from "@/components/atoms/Link";
import { Heading } from "@/components/atoms/Heading";
import { cn } from "@/lib/utils";

export interface TOCItem {
  id: string;
  label: string;
  href: string;
  level: 1 | 2;
  children?: TOCItem[];
}

export interface Breadcrumb {
  label: string;
  href: string;
}

export interface DesignSystemLayoutProps {
  children: ReactNode;
  currentPath: string;
  breadcrumbs: Breadcrumb[];
  pageTitle: string;
  tableOfContents: TOCItem[];
  miniTOC?: Array<{ id: string; label: string; href: string }>;
}

export const DesignSystemLayout = ({
  children,
  currentPath,
  breadcrumbs,
  pageTitle,
  tableOfContents,
  miniTOC,
}: DesignSystemLayoutProps) => {
  return (
    <PageLayout currentPath={currentPath} maxWidth="full">
      <div className="mx-auto max-w-[1800px] px-4 md:px-6 lg:px-8">
        <div className="flex gap-8 py-8">
          {/* Left Sidebar - Table of Contents */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <nav
              className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto"
              aria-label="Design system navigation"
            >
              <div className="space-y-1">
                {tableOfContents.map((item) => {
                  const isActive = currentPath === item.href;
                  const hasActiveChild =
                    item.children?.some((child) => currentPath === child.href) ||
                    false;

                  return (
                    <div key={item.id}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                          isActive || hasActiveChild
                            ? "bg-terracotta-50 text-terracotta-700"
                            : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                        )}
                      >
                        {item.label}
                      </Link>

                      {/* Level 2 children */}
                      {item.children && item.children.length > 0 && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.children.map((child) => {
                            const isChildActive = currentPath === child.href;

                            return (
                              <Link
                                key={child.id}
                                href={child.href}
                                className={cn(
                                  "block px-4 py-1.5 rounded-lg text-sm transition-colors",
                                  isChildActive
                                    ? "bg-terracotta-50 text-terracotta-700 font-medium"
                                    : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-800"
                                )}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-grow min-w-0">
            {/* Breadcrumbs */}
            <nav
              className="mb-6 flex items-center gap-2 text-sm"
              aria-label="Breadcrumb"
            >
              {breadcrumbs.map((crumb, index) => (
                <div key={crumb.href} className="flex items-center gap-2">
                  {index > 0 && (
                    <span className="text-neutral-400" aria-hidden="true">
                      /
                    </span>
                  )}
                  <Link
                    href={crumb.href}
                    className={cn(
                      "transition-colors",
                      index === breadcrumbs.length - 1
                        ? "text-neutral-900 font-medium"
                        : "text-neutral-600 hover:text-neutral-900"
                    )}
                  >
                    {crumb.label}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Page Title */}
            <Heading as="h1" variant="display-2xl" className="mb-8">
              {pageTitle}
            </Heading>

            {/* Content */}
            <div className="prose prose-lg max-w-none">{children}</div>
          </main>

          {/* Right Sidebar - Mini TOC (Optional) */}
          {miniTOC && miniTOC.length > 0 && (
            <aside className="hidden xl:block w-56 flex-shrink-0">
              <nav
                className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto"
                aria-label="On this page"
              >
                <div className="mb-4 font-inter text-xs font-semibold uppercase tracking-wide text-neutral-600">
                  On This Page
                </div>
                <div className="space-y-2">
                  {miniTOC.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="block text-sm text-neutral-600 hover:text-terracotta-700 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </aside>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

DesignSystemLayout.displayName = "DesignSystemLayout";
