/**
 * ContentLayout Template
 *
 * Standard content pages (About, Process, Contact) with optional sidebar.
 * Features hero section and 2-column layout (desktop) → stacked (mobile).
 * Layout: Hero (gradient bg) → Content + Sidebar (grid)
 * Design System: Terracotta gradient, max-w-3xl prose, sticky sidebar, 8pt spacing
 * Accessibility: Semantic HTML, hero section, aside for sidebar
 */

import { ReactNode } from "react";
import { PageLayout } from "./PageLayout";
import { cn } from "@/lib/utils";

export interface ContentLayoutProps {
  /** Page title */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Main content */
  children: ReactNode;
  /** Optional sidebar content */
  sidebar?: ReactNode;
  /** Current path for active nav state */
  currentPath?: string;
  /** Additional wrapper class */
  className?: string;
}

export const ContentLayout = ({
  title,
  subtitle,
  children,
  sidebar,
  currentPath,
  className,
}: ContentLayoutProps) => {
  return (
    <PageLayout currentPath={currentPath} maxWidth="full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-terracotta-50 to-transparent px-4 py-16 text-center md:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 font-fraunces text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900 md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="font-inter text-lg leading-[1.6] text-neutral-600 md:text-xl lg:text-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Content + Sidebar */}
      <div className={cn("px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24", className)}>
        <div
          className={cn(
            "mx-auto",
            sidebar
              ? "grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16"
              : "max-w-3xl"
          )}
        >
          {/* Main Content */}
          <div className="prose prose-lg font-inter text-neutral-700 prose-headings:font-fraunces prose-headings:text-neutral-900 prose-a:text-terracotta-600 prose-a:no-underline hover:prose-a:underline">
            {children}
          </div>

          {/* Sidebar (if provided) */}
          {sidebar && (
            <aside className="lg:sticky lg:top-24 h-fit">
              {sidebar}
            </aside>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

ContentLayout.displayName = "ContentLayout";
