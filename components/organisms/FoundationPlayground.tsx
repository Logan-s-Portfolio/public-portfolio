/**
 * FoundationPlayground Organism
 *
 * Interactive playground for exploring design system foundations with:
 * - Bottom tab navigation (Overview, Colors, Typography, Spacing, Layout, Tokens)
 * - Fixed-height scrollable content area
 * - Tab-specific content panels
 * Design System: Terracotta/Sage accents, Fraunces display + Inter body, 8-point grid
 * Accessibility: Keyboard navigation, ARIA labels, reduced motion support
 */

"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ColorPaletteShowcase } from "./ColorPaletteShowcase";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Divider } from "@/components/atoms/Divider";

type Tab = "colors" | "typography" | "spacing" | "layout" | "tokens";

const tabs: Array<{ id: Tab; label: string }> = [
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "spacing", label: "Spacing" },
  { id: "layout", label: "Layout" },
  { id: "tokens", label: "Tokens" },
];

export interface FoundationPlaygroundProps {
  /** Additional wrapper class */
  className?: string;
}

export const FoundationPlayground = ({ className }: FoundationPlaygroundProps) => {
  const [activeTab, setActiveTab] = useState<Tab>("colors");
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative rounded-xl border-2 border-neutral-200 bg-white shadow-md",
        className
      )}
      style={{ display: 'grid', gridTemplateRows: 'auto 1fr', maxHeight: '600px' }}
    >
      {/* Top Tab Bar */}
      <div className="border-b border-neutral-200 bg-neutral-100 px-4 py-3 rounded-t-xl shadow-sm">
        <nav
          className="flex items-center gap-2 md:gap-4"
          role="tablist"
          aria-label="Foundation playground tabs"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`${tab.id}-panel`}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative px-3 py-2 font-inter text-sm font-medium transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2 rounded-lg",
                  isActive
                    ? "text-terracotta-700 bg-terracotta-50"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                )}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className="absolute inset-x-0 -bottom-3 h-1 bg-terracotta-600 rounded-full"
                    layoutId="activeTab"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.3, ease: [0.33, 1, 0.68, 1] as const }
                    }
                  />
                )}
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Scrollable Content Area */}
      <div className="overflow-y-auto px-6 py-8 md:px-8 md:py-12" style={{ minHeight: 0 }}>
        {activeTab === "colors" && <ColorsContent />}
        {activeTab === "typography" && <TypographyContent />}
        {activeTab === "spacing" && <SpacingContent />}
        {activeTab === "layout" && <LayoutContent />}
        {activeTab === "tokens" && <TokensContent />}
      </div>
    </div>
  );
};

// Tab Content Components

const ColorsContent = () => {
  return (
    <div role="tabpanel" id="colors-panel" aria-labelledby="colors-tab" className="space-y-8">
      {/* Tab Description */}
      <div className="space-y-3 max-w-4xl mx-auto">
        <Heading as="h2" variant="h2" className="text-neutral-900">
          Color Systems
        </Heading>
        <Text variant="lead" className="text-neutral-600">
          Effective color palettes balance brand expression with functional hierarchy. Every shade must be tested for WCAG contrast ratios, systematic scaling, and semantic meaning—ensuring accessibility isn't an afterthought but a foundation.
        </Text>
      </div>

      <Divider className="max-w-4xl mx-auto" />

      <div className="-mx-6 md:-mx-8">
        <ColorPaletteShowcase className="bg-transparent px-0 py-0" />
      </div>
    </div>
  );
};

const TypographyContent = () => {
  const [activeFont, setActiveFont] = useState<"fraunces" | "inter">("fraunces");

  const typeSizes = [
    { name: "xs", size: "0.75rem", lineHeight: "1.5", example: "Captions" },
    { name: "sm", size: "0.875rem", lineHeight: "1.428", example: "Small Text" },
    { name: "base", size: "1rem", lineHeight: "1.5", example: "Body Text" },
    { name: "lg", size: "1.25rem", lineHeight: "1.6", example: "Lead Paragraphs" },
    { name: "xl", size: "1.5rem", lineHeight: "1.333", example: "Subheadings" },
    { name: "2xl", size: "2rem", lineHeight: "1.25", example: "Card Headers" },
    { name: "3xl", size: "2.5rem", lineHeight: "1.2", example: "Large Headings" },
    { name: "4xl", size: "3rem", lineHeight: "1.167", example: "Page Titles" },
    { name: "5xl", size: "4rem", lineHeight: "1.125", example: "Section Headers" },
    { name: "6xl", size: "5rem", lineHeight: "1.1", example: "Hero Headlines" },
  ];

  const fontWeights = [
    { name: "Regular", weight: "400", class: "font-normal" },
    { name: "Medium", weight: "500", class: "font-medium" },
    { name: "Semibold", weight: "600", class: "font-semibold" },
    { name: "Bold", weight: "700", class: "font-bold" },
  ];

  return (
    <div role="tabpanel" id="typography-panel" aria-labelledby="typography-tab" className="space-y-8">
      {/* Tab Description */}
      <div className="space-y-3 max-w-4xl mx-auto">
        <Heading as="h2" variant="h2" className="text-neutral-900">
          Typography Systems
        </Heading>
        <Text variant="lead" className="text-neutral-600">
          Type pairings define personality and hierarchy. Successful systems balance display fonts for impact with text fonts for readability, establishing a modular scale that works across all screen sizes and content contexts.
        </Text>
      </div>

      <Divider className="max-w-4xl mx-auto" />

      {/* Font Pairing with Toggle */}
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
          {/* Font Pairing */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="font-fraunces text-5xl font-bold tracking-tight text-neutral-900 md:text-6xl">
              Fraunces
            </div>
            <div className="text-3xl text-terracotta-600">+</div>
            <div className="font-inter text-4xl font-medium tracking-tight text-neutral-900 md:text-5xl">
              Inter
            </div>
          </div>

          {/* Font Toggle */}
          <div className="inline-flex rounded-xl border-2 border-neutral-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setActiveFont("fraunces")}
              className={cn(
                "rounded-lg px-6 py-3 font-fraunces text-lg font-semibold transition-all duration-300",
                activeFont === "fraunces"
                  ? "bg-terracotta-500 text-white shadow-md"
                  : "text-neutral-600 hover:text-neutral-900"
              )}
            >
              Fraunces
            </button>
            <button
              onClick={() => setActiveFont("inter")}
              className={cn(
                "rounded-lg px-6 py-3 font-inter text-lg font-medium transition-all duration-300",
                activeFont === "inter"
                  ? "bg-sage-500 text-white shadow-md"
                  : "text-neutral-600 hover:text-neutral-900"
              )}
            >
              Inter
            </button>
          </div>
        </div>
        <Text variant="body" className="text-neutral-600">
          Successful type pairings balance contrast with harmony. Serif display fonts establish authority and personality for headlines, while geometric sans-serifs provide clarity for sustained reading. This combination creates visual hierarchy without sacrificing legibility—each typeface optimized for its specific role in the information architecture.
        </Text>
      </div>

      {/* Type Scale */}
      <div>
        <Heading as="h3" variant="h3" className="mb-6">
          Type Scale
        </Heading>
        <div className="space-y-6">
          {typeSizes.map((type) => (
            <div
              key={type.name}
              className="rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-terracotta-300 hover:shadow-md"
            >
              <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-4">
                <div>
                  <Text variant="caption" className="uppercase text-neutral-500">
                    Size
                  </Text>
                  <Text variant="small" className="font-mono font-semibold text-neutral-900">
                    {type.name} / {type.size}
                  </Text>
                </div>
                <div>
                  <Text variant="caption" className="uppercase text-neutral-500">
                    Line Height
                  </Text>
                  <Text variant="small" className="font-mono font-semibold text-neutral-900">
                    {type.lineHeight}
                  </Text>
                </div>
                <div className="md:col-span-2">
                  <Text variant="caption" className="uppercase text-neutral-500">
                    Usage
                  </Text>
                  <Text variant="small" className="font-semibold text-neutral-900">
                    {type.example}
                  </Text>
                </div>
              </div>
              <div
                className={cn(
                  "text-neutral-900 transition-all duration-300",
                  activeFont === "fraunces" ? "font-fraunces" : "font-inter"
                )}
                style={{
                  fontSize: type.size,
                  lineHeight: type.lineHeight,
                }}
              >
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Font Weights */}
      <div>
        <Heading as="h3" variant="h3" className="mb-6">
          Font Weights (4-Weight System)
        </Heading>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {fontWeights.map((weight) => (
            <div
              key={weight.name}
              className="rounded-xl border border-neutral-200 bg-white p-6 text-center transition-all duration-300 hover:border-sage-300 hover:shadow-md"
            >
              <Text variant="caption" className="mb-3 uppercase text-neutral-500">
                {weight.name}
              </Text>
              <div
                className={cn(
                  "mb-2 text-4xl text-neutral-900",
                  weight.class,
                  activeFont === "fraunces" ? "font-fraunces" : "font-inter"
                )}
              >
                Aa
              </div>
              <Text variant="small" className="font-mono text-neutral-600">
                {weight.weight}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SpacingContent = () => {
  const spacingValues = [
    { token: "space-0", rem: "0", px: "0px", use: "No space, flush elements" },
    { token: "space-1", rem: "0.25rem", px: "4px", use: "Half-step: Icon gaps" },
    { token: "space-2", rem: "0.5rem", px: "8px", use: "Base unit: Tight gaps" },
    { token: "space-3", rem: "0.75rem", px: "12px", use: "Button padding" },
    { token: "space-4", rem: "1rem", px: "16px", use: "Standard spacing" },
    { token: "space-6", rem: "1.5rem", px: "24px", use: "Card padding" },
    { token: "space-8", rem: "2rem", px: "32px", use: "Component padding" },
    { token: "space-12", rem: "3rem", px: "48px", use: "Section spacing" },
    { token: "space-16", rem: "4rem", px: "64px", use: "Major sections" },
    { token: "space-24", rem: "6rem", px: "96px", use: "Hero sections" },
  ];

  return (
    <div role="tabpanel" id="spacing-panel" aria-labelledby="spacing-tab" className="space-y-8 max-w-4xl mx-auto">
      {/* Tab Description */}
      <div className="space-y-3">
        <Heading as="h2" variant="h2" className="text-neutral-900">
          Spacing Systems
        </Heading>
        <Text variant="lead" className="text-neutral-600">
          Systematic spacing eliminates guesswork. Grid-based systems like 4pt/8pt create mathematical harmony, ensuring consistent rhythm and alignment. They're not arbitrary—they're designed to scale perfectly across devices and density levels.
        </Text>
      </div>

      <Divider />

      {/* Spacing Scale */}
      <div>
        <Heading as="h3" variant="h3" className="mb-6">
          Spacing Scale
        </Heading>
        <div className="space-y-4">
          {spacingValues.map((space) => (
            <div
              key={space.token}
              className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4 transition-all duration-300 hover:border-terracotta-300 hover:shadow-md"
            >
              {/* Visual Bar */}
              <div className="flex-shrink-0" style={{ width: '120px' }}>
                <div
                  className="h-8 rounded bg-terracotta-500"
                  style={{ width: space.px }}
                />
              </div>

              {/* Token Info */}
              <div className="flex-1 grid grid-cols-1 gap-2 md:grid-cols-3">
                <div>
                  <Text variant="caption" className="uppercase text-neutral-500">
                    Token
                  </Text>
                  <Text variant="small" className="font-mono font-semibold text-neutral-900">
                    {space.token}
                  </Text>
                </div>
                <div>
                  <Text variant="caption" className="uppercase text-neutral-500">
                    Value
                  </Text>
                  <Text variant="small" className="font-mono font-semibold text-neutral-900">
                    {space.rem} / {space.px}
                  </Text>
                </div>
                <div>
                  <Text variant="caption" className="uppercase text-neutral-500">
                    Use Case
                  </Text>
                  <Text variant="small" className="text-neutral-700">
                    {space.use}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LayoutContent = () => {
  const breakpoints = [
    { name: "Base", value: "< 640px", devices: "Phones (portrait)", share: "~55%", cols: "1 column" },
    { name: "sm", value: "640px+", devices: "Large phones", share: "~40%", cols: "2 columns" },
    { name: "md", value: "768px+", devices: "Tablets", share: "~15%", cols: "3 columns" },
    { name: "lg", value: "1024px+", devices: "Laptops", share: "~20%", cols: "4 columns" },
    { name: "xl", value: "1280px+", devices: "Desktops", share: "~10%", cols: "Max width" },
    { name: "2xl", value: "1440px+", devices: "Large monitors", share: "~10%", cols: "Ultra-wide" },
  ];

  const containers = [
    { name: "sm", maxWidth: "640px", use: "Forms, narrow content" },
    { name: "md", maxWidth: "768px", use: "Articles, blog posts" },
    { name: "lg", maxWidth: "1024px", use: "Standard pages" },
    { name: "xl", maxWidth: "1280px", use: "Wide layouts" },
    { name: "full", maxWidth: "100%", use: "Full bleed sections" },
  ];

  return (
    <div role="tabpanel" id="layout-panel" aria-labelledby="layout-tab" className="space-y-8 max-w-4xl mx-auto">
      {/* Tab Description */}
      <div className="space-y-3">
        <Heading as="h2" variant="h2" className="text-neutral-900">
          Layout Systems
        </Heading>
        <Text variant="lead" className="text-neutral-600">
          Mobile-first responsive design prioritizes the majority user experience. Breakpoint systems should reflect actual device usage patterns and scale intentionally—progressive enhancement, not graceful degradation.
        </Text>
      </div>

      <Divider />

      {/* Intro */}
      <div>
        <Heading as="h3" variant="h3" className="mb-4">
          Responsive Layout System
        </Heading>
        <Text variant="body" className="text-neutral-600">
          Mobile-first breakpoints and containers. Start small, scale intentionally—70%+ mobile
          traffic gets optimized experience, desktops get enhanced features.
        </Text>
      </div>

      {/* Breakpoints */}
      <div>
        <Heading as="h3" variant="h3" className="mb-6">
          Breakpoints (Mobile-First)
        </Heading>
        <div className="space-y-3">
          {breakpoints.map((bp, index) => (
            <div
              key={bp.name}
              className={cn(
                "rounded-xl border-2 p-4 transition-all duration-300 hover:shadow-md",
                index % 2 === 0
                  ? "border-terracotta-200 bg-terracotta-50"
                  : "border-sage-200 bg-sage-50"
              )}
            >
              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                <div>
                  <Text variant="caption" className="uppercase text-neutral-500">
                    Breakpoint
                  </Text>
                  <Text variant="body" className="font-mono font-bold text-neutral-900">
                    {bp.name}
                  </Text>
                </div>
                <div>
                  <Text variant="caption" className="uppercase text-neutral-500">
                    Value
                  </Text>
                  <Text variant="small" className="font-mono text-neutral-700">
                    {bp.value}
                  </Text>
                </div>
                <div>
                  <Text variant="caption" className="uppercase text-neutral-500">
                    Devices
                  </Text>
                  <Text variant="small" className="text-neutral-700">
                    {bp.devices}
                  </Text>
                </div>
                <div>
                  <Text variant="caption" className="uppercase text-neutral-500">
                    Market
                  </Text>
                  <Text variant="small" className="font-semibold text-neutral-900">
                    {bp.share}
                  </Text>
                </div>
                <div>
                  <Text variant="caption" className="uppercase text-neutral-500">
                    Layout
                  </Text>
                  <Text variant="small" className="text-neutral-700">
                    {bp.cols}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Containers */}
      <div>
        <Heading as="h3" variant="h3" className="mb-6">
          Container Widths
        </Heading>
        <div className="space-y-3">
          {containers.map((container) => (
            <div
              key={container.name}
              className="rounded-xl border border-neutral-200 bg-white p-4 transition-all duration-300 hover:border-terracotta-300 hover:shadow-md"
            >
              <div className="mb-2 flex items-baseline justify-between">
                <Text variant="body" className="font-mono font-bold text-neutral-900">
                  max-w-{container.name}
                </Text>
                <Text variant="small" className="font-mono text-neutral-600">
                  {container.maxWidth}
                </Text>
              </div>
              <div
                className="mb-2 h-6 rounded bg-gradient-to-r from-terracotta-500 to-sage-500"
                style={{
                  width: container.name === "full" ? "100%" :
                    container.name === "sm" ? "50%" :
                    container.name === "md" ? "60%" :
                    container.name === "lg" ? "75%" : "90%"
                }}
              />
              <Text variant="small" className="text-neutral-600">
                {container.use}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TokensContent = () => {
  const shadows = [
    { name: "sm", value: "0 1px 2px rgba(0,0,0,0.05)", use: "Subtle cards" },
    { name: "md", value: "0 4px 6px rgba(0,0,0,0.1)", use: "Standard elevation" },
    { name: "lg", value: "0 10px 15px rgba(0,0,0,0.1)", use: "Floating elements" },
    { name: "xl", value: "0 20px 40px rgba(0,0,0,0.15)", use: "Modals, popovers" },
    { name: "2xl", value: "0 25px 50px rgba(0,0,0,0.25)", use: "Maximum depth" },
  ];

  const radii = [
    { name: "xs", value: "2px", use: "Minimal rounding" },
    { name: "sm", value: "4px", use: "Buttons, inputs" },
    { name: "md", value: "8px", use: "Cards (professional warmth)" },
    { name: "lg", value: "12px", use: "Featured content" },
    { name: "xl", value: "16px", use: "Large cards" },
    { name: "2xl", value: "24px", use: "Hero sections" },
    { name: "full", value: "9999px", use: "Pills, avatars" },
  ];

  const transitions = [
    { name: "fast", duration: "150ms", use: "Micro-interactions" },
    { name: "base", duration: "300ms", use: "Standard animations" },
    { name: "slow", duration: "500ms", use: "Complex transitions" },
  ];

  const zIndexLayers = [
    { name: "base", value: "0", use: "Default layer" },
    { name: "dropdown", value: "1000", use: "Dropdown menus" },
    { name: "sticky", value: "1010", use: "Sticky headers" },
    { name: "modal", value: "1040", use: "Modal dialogs" },
    { name: "tooltip", value: "1060", use: "Tooltips" },
  ];

  const opacityLevels = [
    { name: "full", value: "1", percent: "100%", use: "Solid" },
    { name: "high", value: "0.9", percent: "90%", use: "Slight transparency" },
    { name: "medium", value: "0.75", percent: "75%", use: "Overlays" },
    { name: "disabled", value: "0.5", percent: "50%", use: "Disabled states" },
    { name: "subtle", value: "0.25", percent: "25%", use: "Hover effects" },
  ];

  return (
    <div role="tabpanel" id="tokens-panel" aria-labelledby="tokens-tab" className="space-y-8 max-w-4xl mx-auto">
      {/* Tab Description */}
      <div className="space-y-3">
        <Heading as="h2" variant="h2" className="text-neutral-900">
          Design Tokens
        </Heading>
        <Text variant="lead" className="text-neutral-600">
          Design tokens centralize design decisions into reusable values. They enable theme consistency, multi-platform scaling, and systematic maintenance—transforming subjective design into engineered systems.
        </Text>
      </div>

      <Divider />

      {/* Intro */}
      <div>
        <Heading as="h3" variant="h3" className="mb-4">
          Foundation Tokens
        </Heading>
        <Text variant="body" className="text-neutral-600">
          Material Design 3 shadows, 8-point aligned radii, optimized transitions, systematic
          z-index, and accessibility-compliant opacity levels.
        </Text>
      </div>

      {/* Shadows */}
      <div>
        <Heading as="h3" variant="h3" className="mb-6">
          Shadows (Material Design 3)
        </Heading>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {shadows.map((shadow) => (
            <div
              key={shadow.name}
              className="rounded-xl border border-neutral-200 bg-white p-6 text-center"
              style={{ boxShadow: shadow.value }}
            >
              <Text variant="body" className="mb-2 font-mono font-bold text-neutral-900">
                shadow-{shadow.name}
              </Text>
              <div className="mb-3 h-16 w-16 mx-auto rounded-lg bg-terracotta-500" />
              <Text variant="small" className="text-neutral-600">
                {shadow.use}
              </Text>
            </div>
          ))}
        </div>
      </div>

      {/* Border Radius */}
      <div>
        <Heading as="h3" variant="h3" className="mb-6">
          Border Radius (8-Point Aligned)
        </Heading>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          {radii.map((radius) => (
            <div
              key={radius.name}
              className="flex flex-col items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4"
            >
              <div
                className="h-16 w-16 bg-sage-500"
                style={{ borderRadius: radius.value }}
              />
              <div className="text-center">
                <Text variant="small" className="font-mono font-bold text-neutral-900">
                  {radius.name}
                </Text>
                <Text variant="small" className="text-neutral-600">
                  {radius.value}
                </Text>
              </div>
            </div>
          ))}
        </div>
        <Text variant="small" className="mt-4 text-neutral-600">
          <strong>rounded-md (8px)</strong> is our default for "professional warmth"—not too sharp,
          not too round
        </Text>
      </div>

      {/* Transitions */}
      <div>
        <Heading as="h3" variant="h3" className="mb-6">
          Transitions & Easing
        </Heading>
        <div className="grid gap-4 md:grid-cols-3">
          {transitions.map((transition) => (
            <div key={transition.name} className="rounded-xl border border-neutral-200 bg-white p-6">
              <div className="mb-4 flex items-baseline justify-between">
                <Text variant="body" className="font-mono font-semibold text-neutral-900">
                  {transition.name}
                </Text>
                <Text variant="small" className="font-mono text-neutral-600">
                  {transition.duration}
                </Text>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
                <motion.div
                  className="h-full bg-terracotta-500"
                  animate={{ width: ["0%", "100%"] }}
                  transition={{
                    duration: parseInt(transition.duration) / 1000,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: [0.33, 1, 0.68, 1] as const,
                  }}
                />
              </div>
              <Text variant="small" className="mt-3 text-neutral-600">
                {transition.use}
              </Text>
            </div>
          ))}
        </div>
      </div>

      {/* Z-Index */}
      <div>
        <Heading as="h3" variant="h3" className="mb-6">
          Z-Index Layers (1000-Unit Scale)
        </Heading>
        <div className="space-y-2">
          {zIndexLayers.map((layer, index) => (
            <div
              key={layer.name}
              className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4"
              style={{ marginLeft: `${index * 16}px` }}
            >
              <Text variant="body" className="w-24 font-mono font-bold text-neutral-900">
                {layer.name}
              </Text>
              <Text variant="small" className="w-20 font-mono text-neutral-600">
                z-{layer.value}
              </Text>
              <Text variant="small" className="flex-1 text-neutral-700">
                {layer.use}
              </Text>
            </div>
          ))}
        </div>
      </div>

      {/* Opacity */}
      <div>
        <Heading as="h3" variant="h3" className="mb-6">
          Opacity Levels (Accessibility-Compliant)
        </Heading>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {opacityLevels.map((opacity) => (
            <div key={opacity.name} className="rounded-xl border border-neutral-200 bg-white p-6 text-center">
              <div
                className="mb-4 h-16 w-16 mx-auto rounded-lg bg-terracotta-500"
                style={{ opacity: opacity.value }}
              />
              <Text variant="small" className="mb-1 font-mono font-bold text-neutral-900">
                {opacity.name}
              </Text>
              <Text variant="small" className="mb-2 font-mono text-neutral-600">
                {opacity.percent}
              </Text>
              <Text variant="small" className="text-neutral-600">
                {opacity.use}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FoundationPlayground.displayName = "FoundationPlayground";
