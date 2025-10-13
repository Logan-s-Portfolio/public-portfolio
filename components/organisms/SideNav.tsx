/**
 * SideNav Organism
 *
 * Collapsible side navigation with nested accordions for documentation.
 * Features hamburger menu on mobile and active state highlighting.
 */

"use client";

import { useState, useEffect } from "react";
import { Link } from "@/components/atoms/Link";
import { IconButton } from "@/components/atoms/IconButton";
import { cn } from "@/lib/utils";

export interface NavItem {
  id: string;
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SideNavProps {
  items: NavItem[];
  currentPath: string;
  className?: string;
}

export const SideNav = ({ items, currentPath, className }: SideNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  // Auto-expand sections based on current path
  useEffect(() => {
    const newOpenSections: Record<string, boolean> = {};

    const checkAndExpandPath = (items: NavItem[], parentId?: string) => {
      items.forEach((item) => {
        if (currentPath.startsWith(item.href)) {
          newOpenSections[item.id] = true;
          if (parentId) {
            newOpenSections[parentId] = true;
          }
        }
        if (item.children) {
          checkAndExpandPath(item.children, item.id);
        }
      });
    };

    checkAndExpandPath(items);
    setOpenSections(newOpenSections);
  }, [currentPath, items]);

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isActive = currentPath === item.href;
    const isExpanded = openSections[item.id];

    return (
      <div key={item.id} className={cn("w-full", level > 0 && "ml-4")}>
        {hasChildren ? (
          <>
            <button
              onClick={() => toggleSection(item.id)}
              className={cn(
                "flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors",
                isActive
                  ? "bg-terracotta-50 text-terracotta-700"
                  : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
              )}
            >
              <span>{item.label}</span>
              <svg
                className={cn(
                  "h-4 w-4 transition-transform",
                  isExpanded && "rotate-180"
                )}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isExpanded && item.children && (
              <div className="mt-1 space-y-1">
                {item.children.map((child) => renderNavItem(child, level + 1))}
              </div>
            )}
          </>
        ) : (
          <Link
            href={item.href}
            className={cn(
              "block rounded-lg px-4 py-2 text-sm transition-colors",
              isActive
                ? "bg-terracotta-50 font-medium text-terracotta-700"
                : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
            )}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 rounded-lg bg-white p-2 shadow-md lg:hidden"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
      >
        <svg
          className="h-6 w-6 text-neutral-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-neutral-900 opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Navigation */}
      <nav
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 transform bg-white shadow-lg transition-transform duration-300 lg:relative lg:translate-x-0 lg:shadow-none",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
        aria-label="Documentation navigation"
      >
        <div className="p-6">
          {/* Logo */}
          <Link
            href="/"
            className="mb-8 block"
            onClick={() => setIsOpen(false)}
          >
            <h1 className="font-fraunces text-3xl font-bold text-neutral-900 hover:text-terracotta-600 transition-colors">
              Logan
            </h1>
          </Link>

          <div className="mb-6 flex items-center justify-between lg:hidden">
            <span className="font-fraunces text-lg font-semibold text-neutral-900">
              Navigation
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 hover:bg-neutral-100"
              aria-label="Close navigation"
            >
              <svg
                className="h-5 w-5 text-neutral-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="space-y-1">
            {items.map((item) => renderNavItem(item))}
          </div>

          {/* Contact Button */}
          <div className="mt-8 pt-6 border-t border-neutral-200">
            <Link
              href="/contact"
              className="block w-full rounded-lg bg-terracotta-600 px-4 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-terracotta-700 hover:shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

SideNav.displayName = "SideNav";
