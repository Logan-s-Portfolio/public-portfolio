/**
 * ComponentSpecimen Organism
 *
 * Square specimen containers for showcasing design system components.
 * Each specimen displays a component category with all variants and use cases.
 * Design System: Square aspect ratio, scrollable content, terracotta/sage accents
 */

"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { Avatar } from "@/components/atoms/Avatar";
import { Input } from "@/components/atoms/Input";
import { Link } from "@/components/atoms/Link";
import { Spinner } from "@/components/atoms/Spinner";
import { Divider } from "@/components/atoms/Divider";
import { ProgressBar } from "@/components/atoms/ProgressBar";
import { Skeleton } from "@/components/atoms/Skeleton";
import { Code } from "@/components/atoms/Code";
import { IconButton } from "@/components/atoms/IconButton";
import { Checkbox } from "@/components/atoms/Checkbox";
import { Label } from "@/components/atoms/Label";
import { Tag } from "@/components/atoms/Tag";
import { Image } from "@/components/atoms/Image";
import { Mail, Search, Heart, Settings, Trash2, Plus } from "lucide-react";

export interface ComponentSpecimenProps {
  className?: string;
}

export const ComponentSpecimen = ({ className }: ComponentSpecimenProps) => {
  return (
    <div className={cn("space-y-8", className)}>
      {/* Buttons Specimen */}
      <div className="w-full max-w-2xl mx-auto">
        {/* Square Container */}
        <div className="aspect-square border-2 border-neutral-200 rounded-lg bg-white flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-8 py-4 border-b-2 border-neutral-200 bg-neutral-50 flex-shrink-0">
            <Heading as="h3" variant="section" className="text-neutral-900 mb-1">
              Buttons
            </Heading>
            <Text variant="small" className="text-neutral-600">
              Five variants for different interaction hierarchies
            </Text>
          </div>

          {/* Content */}
          <div className="p-8 overflow-auto flex-1">
          <div className="space-y-6">

          {/* Primary Button */}
          <div className="space-y-2">
            <Button variant="primary" size="md">
              Primary Button
            </Button>
            <div className="pl-4 border-l-2 border-terracotta-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Main call-to-action. Most important action on the page (submit forms, confirm actions, primary navigation).
              </Text>
            </div>
          </div>

          {/* Secondary Button */}
          <div className="space-y-2">
            <Button variant="secondary" size="md">
              Secondary Button
            </Button>
            <div className="pl-4 border-l-2 border-sage-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Supporting actions. Less emphasis than primary but still important (view more, explore options, alternative paths).
              </Text>
            </div>
          </div>

          {/* Outline Button */}
          <div className="space-y-2">
            <Button variant="outline" size="md">
              Outline Button
            </Button>
            <div className="pl-4 border-l-2 border-neutral-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Alternative CTAs. Subtle emphasis for secondary flows (skip steps, learn more, additional options).
              </Text>
            </div>
          </div>

          {/* Ghost Button */}
          <div className="space-y-2">
            <Button variant="ghost" size="md">
              Ghost Button
            </Button>
            <div className="pl-4 border-l-2 border-neutral-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Tertiary actions. Minimal visual weight for low-priority interactions (cancel, close, dismiss).
              </Text>
            </div>
          </div>

          {/* Destructive Button */}
          <div className="space-y-2">
            <Button variant="destructive" size="md">
              Destructive Button
            </Button>
            <div className="pl-4 border-l-2 border-terracotta-300">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Dangerous actions. Requires careful consideration (delete, remove, permanent changes).
              </Text>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>

      {/* Headings Specimen */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="aspect-square border-2 border-neutral-200 rounded-lg bg-white flex flex-col overflow-hidden">
          <div className="px-8 py-4 border-b-2 border-neutral-200 bg-neutral-50 flex-shrink-0">
            <Heading as="h3" variant="section" className="text-neutral-900 mb-1">
              Headings
            </Heading>
            <Text variant="small" className="text-neutral-600">
              Semantic headings with Fraunces display and Inter body type
            </Text>
          </div>

          <div className="p-8 overflow-auto flex-1">
          <div className="space-y-6">

          {/* Display */}
          <div className="space-y-2">
            <Heading variant="display">Display Heading</Heading>
            <div className="pl-4 border-l-2 border-terracotta-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Hero sections, landing pages. Largest heading (48px+) for maximum impact and brand personality.
              </Text>
            </div>
          </div>

          {/* H1 */}
          <div className="space-y-2">
            <Heading variant="h1">Heading 1</Heading>
            <div className="pl-4 border-l-2 border-sage-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Page titles, main content headers. Primary heading (40px) establishing page hierarchy.
              </Text>
            </div>
          </div>

          {/* H2 */}
          <div className="space-y-2">
            <Heading variant="h2">Heading 2</Heading>
            <div className="pl-4 border-l-2 border-terracotta-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Section headers (32px). Major content divisions with Fraunces warmth.
              </Text>
            </div>
          </div>

          {/* H3 */}
          <div className="space-y-2">
            <Heading variant="h3">Heading 3</Heading>
            <div className="pl-4 border-l-2 border-sage-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Subsection headers (24px). Font switches to Inter for better readability at smaller sizes.
              </Text>
            </div>
          </div>

          {/* H4 */}
          <div className="space-y-2">
            <Heading variant="h4">Heading 4</Heading>
            <div className="pl-4 border-l-2 border-neutral-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Component titles, card headers (18px). Inter font for clarity.
              </Text>
            </div>
          </div>

          </div>
          </div>
        </div>
      </div>

      {/* Text Specimen */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="aspect-square border-2 border-neutral-200 rounded-lg bg-white flex flex-col overflow-hidden">
          <div className="px-8 py-4 border-b-2 border-neutral-200 bg-neutral-50 flex-shrink-0">
            <Heading as="h3" variant="section" className="text-neutral-900 mb-1">
              Text
            </Heading>
            <Text variant="small" className="text-neutral-600">
              Body copy variants for different content contexts
            </Text>
          </div>

          <div className="p-8 overflow-auto flex-1">
          <div className="space-y-6">

          {/* Lead */}
          <div className="space-y-2">
            <Text variant="lead">Lead text introduces the content with slightly larger size and medium weight.</Text>
            <div className="pl-4 border-l-2 border-terracotta-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Introduction paragraphs, article summaries (18px, medium weight, 1.6 line height).
              </Text>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-2">
            <Text variant="body">Body text is the default reading size for comfortable long-form content.</Text>
            <div className="pl-4 border-l-2 border-sage-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Main content, paragraphs, descriptions (16px, 1.5 line height).
              </Text>
            </div>
          </div>

          {/* Caption */}
          <div className="space-y-2">
            <Text variant="caption">Caption text provides additional context or metadata.</Text>
            <div className="pl-4 border-l-2 border-neutral-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Image captions, timestamps, metadata (14px, neutral-600).
              </Text>
            </div>
          </div>

          {/* Small */}
          <div className="space-y-2">
            <Text variant="small">Small text for fine print and secondary information.</Text>
            <div className="pl-4 border-l-2 border-neutral-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Legal text, helper text, footnotes (12px, neutral-600).
              </Text>
            </div>
          </div>

          </div>
          </div>
        </div>
      </div>

      {/* Badge Specimen */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="aspect-square border-2 border-neutral-200 rounded-lg bg-white flex flex-col overflow-hidden">
          <div className="px-8 py-4 border-b-2 border-neutral-200 bg-neutral-50 flex-shrink-0">
            <Heading as="h3" variant="section" className="text-neutral-900 mb-1">
              Badges
            </Heading>
            <Text variant="small" className="text-neutral-600">
              Status indicators with design system colors
            </Text>
          </div>

          <div className="p-8 overflow-auto flex-1">
          <div className="space-y-6">

          {/* Default */}
          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <Badge variant="default" size="sm">Small</Badge>
              <Badge variant="default" size="md">Medium</Badge>
              <Badge variant="default" size="lg">Large</Badge>
            </div>
            <div className="pl-4 border-l-2 border-neutral-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Default state, neutral information, general tags.
              </Text>
            </div>
          </div>

          {/* Success */}
          <div className="space-y-2">
            <Badge variant="success" dot>Success</Badge>
            <div className="pl-4 border-l-2 border-sage-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Completed states, confirmations, positive indicators (sage green).
              </Text>
            </div>
          </div>

          {/* Warning */}
          <div className="space-y-2">
            <Badge variant="warning" dot>Warning</Badge>
            <div className="pl-4 border-l-2 border-terracotta-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Caution states, pending actions, attention needed (terracotta).
              </Text>
            </div>
          </div>

          {/* Error */}
          <div className="space-y-2">
            <Badge variant="error" dot>Error</Badge>
            <div className="pl-4 border-l-2 border-terracotta-300">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Error states, failed actions, critical alerts (darker terracotta).
              </Text>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-2">
            <Badge variant="info" dot>Info</Badge>
            <div className="pl-4 border-l-2 border-sage-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Informational states, tips, helpful context (light sage).
              </Text>
            </div>
          </div>

          </div>
          </div>
        </div>
      </div>

      {/* Avatar Specimen */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="aspect-square border-2 border-neutral-200 rounded-lg bg-white flex flex-col overflow-hidden">
          <div className="px-8 py-4 border-b-2 border-neutral-200 bg-neutral-50 flex-shrink-0">
            <Heading as="h3" variant="section" className="text-neutral-900 mb-1">
              Avatars
            </Heading>
            <Text variant="small" className="text-neutral-600">
              User photos with warm fallback states
            </Text>
          </div>

          <div className="p-8 overflow-auto flex-1">
          <div className="space-y-6">

          {/* Sizes */}
          <div className="space-y-2">
            <div className="flex gap-3 items-center">
              <Avatar size="xs" alt="Extra small" fallback="XS" />
              <Avatar size="sm" alt="Small" fallback="SM" />
              <Avatar size="md" alt="Medium" fallback="MD" />
              <Avatar size="lg" alt="Large" fallback="LG" />
              <Avatar size="xl" alt="Extra large" fallback="XL" />
              <Avatar size="2xl" alt="2X large" fallback="2X" />
            </div>
            <div className="pl-4 border-l-2 border-terracotta-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                All sizes from xs (24px) to 2xl (96px). Use appropriate size for context (comments, profiles, headers).
              </Text>
            </div>
          </div>

          {/* With Ring */}
          <div className="space-y-2">
            <Avatar size="lg" alt="User with ring" fallback="LB" ring />
            <div className="pl-4 border-l-2 border-sage-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Add ring for emphasis, active states, or to distinguish from background.
              </Text>
            </div>
          </div>

          {/* Fallback States */}
          <div className="space-y-2">
            <div className="flex gap-3 items-center">
              <Avatar size="md" alt="Initials" fallback="AB" />
              <Avatar size="md" alt="Icon fallback" />
            </div>
            <div className="pl-4 border-l-2 border-neutral-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Graceful fallbacks with terracotta background: initials (1-2 chars) or user icon.
              </Text>
            </div>
          </div>

          </div>
          </div>
        </div>
      </div>

      {/* Input Specimen */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="aspect-square border-2 border-neutral-200 rounded-lg bg-white flex flex-col overflow-hidden">
          <div className="px-8 py-4 border-b-2 border-neutral-200 bg-neutral-50 flex-shrink-0">
            <Heading as="h3" variant="section" className="text-neutral-900 mb-1">
              Inputs
            </Heading>
            <Text variant="small" className="text-neutral-600">
              Text input fields with terracotta focus states
            </Text>
          </div>

          <div className="p-8 overflow-auto flex-1">
          <div className="space-y-6">

          {/* Sizes */}
          <div className="space-y-2">
            <div className="space-y-3">
              <Input size="sm" placeholder="Small input (32px)" />
              <Input size="md" placeholder="Medium input (40px)" />
              <Input size="lg" placeholder="Large input (48px)" />
            </div>
            <div className="pl-4 border-l-2 border-terracotta-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Three sizes aligned to 8-point grid. Choose based on form hierarchy and touch targets.
              </Text>
            </div>
          </div>

          {/* With Icons */}
          <div className="space-y-2">
            <div className="space-y-3">
              <Input placeholder="Search..." leftIcon={<Search />} />
              <Input placeholder="Email..." rightIcon={<Mail />} />
            </div>
            <div className="pl-4 border-l-2 border-sage-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Add icons for context. Spacing automatically adjusted (8-point grid).
              </Text>
            </div>
          </div>

          {/* Error State */}
          <div className="space-y-2">
            <Input placeholder="Invalid input" error />
            <div className="pl-4 border-l-2 border-terracotta-300">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Error state with terracotta border (design system, not generic red).
              </Text>
            </div>
          </div>

          </div>
          </div>
        </div>
      </div>

      {/* Link Specimen */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="aspect-square border-2 border-neutral-200 rounded-lg bg-white flex flex-col overflow-hidden">
          <div className="px-8 py-4 border-b-2 border-neutral-200 bg-neutral-50 flex-shrink-0">
            <Heading as="h3" variant="section" className="text-neutral-900 mb-1">
              Links
            </Heading>
            <Text variant="small" className="text-neutral-600">
              Navigation with terracotta accents and affordance
            </Text>
          </div>

          <div className="p-8 overflow-auto flex-1">
          <div className="space-y-6">

          {/* Default */}
          <div className="space-y-2">
            <Link href="#" variant="default">Default link with underline</Link>
            <div className="pl-4 border-l-2 border-terracotta-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                In-content links, references. Terracotta color with underline for accessibility.
              </Text>
            </div>
          </div>

          {/* Nav */}
          <div className="space-y-2">
            <div className="flex gap-4">
              <Link href="#" variant="nav">Navigation</Link>
              <Link href="#" variant="nav" active>Active Page</Link>
            </div>
            <div className="pl-4 border-l-2 border-sage-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Navigation menus, headers. Neutral with terracotta on hover/active.
              </Text>
            </div>
          </div>

          {/* External */}
          <div className="space-y-2">
            <Link href="#" external>External link with icon</Link>
            <div className="pl-4 border-l-2 border-neutral-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                External resources. Auto adds icon, target="_blank", and rel attributes.
              </Text>
            </div>
          </div>

          </div>
          </div>
        </div>
      </div>

      {/* Spinner Specimen */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="aspect-square border-2 border-neutral-200 rounded-lg bg-white flex flex-col overflow-hidden">
          <div className="px-8 py-4 border-b-2 border-neutral-200 bg-neutral-50 flex-shrink-0">
            <Heading as="h3" variant="section" className="text-neutral-900 mb-1">
              Spinners
            </Heading>
            <Text variant="small" className="text-neutral-600">
              Loading indicators respecting motion preferences
            </Text>
          </div>

          <div className="p-8 overflow-auto flex-1">
          <div className="space-y-6">

          {/* Sizes */}
          <div className="space-y-2">
            <div className="flex gap-4 items-center">
              <Spinner size="xs" />
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
              <Spinner size="xl" />
            </div>
            <div className="pl-4 border-l-2 border-terracotta-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Five sizes (12px to 32px). Inherits color from parent. Motion-safe: static for reduced motion preference.
              </Text>
            </div>
          </div>

          {/* In Context */}
          <div className="space-y-2">
            <Button variant="primary" disabled>
              <Spinner size="sm" className="text-white" /> Loading...
            </Button>
            <div className="pl-4 border-l-2 border-sage-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Inline with text/buttons. Uses currentColor for automatic color matching.
              </Text>
            </div>
          </div>

          </div>
          </div>
        </div>
      </div>

      {/* Divider Specimen */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="aspect-square border-2 border-neutral-200 rounded-lg bg-white flex flex-col overflow-hidden">
          <div className="px-8 py-4 border-b-2 border-neutral-200 bg-neutral-50 flex-shrink-0">
            <Heading as="h3" variant="section" className="text-neutral-900 mb-1">
              Dividers
            </Heading>
            <Text variant="small" className="text-neutral-600">
              Visual separators with optional labels
            </Text>
          </div>

          <div className="p-8 overflow-auto flex-1">
          <div className="space-y-6">

          {/* Solid */}
          <div className="space-y-2">
            <Divider variant="solid" />
            <div className="pl-4 border-l-2 border-neutral-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Default separator for sections, content blocks. Neutral-200 for soft separation.
              </Text>
            </div>
          </div>

          {/* Dashed */}
          <div className="space-y-2">
            <Divider variant="dashed" />
            <div className="pl-4 border-l-2 border-terracotta-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Lighter visual separation, temporary boundaries, draft states.
              </Text>
            </div>
          </div>

          {/* With Label */}
          <div className="space-y-2">
            <Divider label="Section Break" />
            <div className="pl-4 border-l-2 border-sage-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Named sections, form groups, content transitions with context.
              </Text>
            </div>
          </div>

          </div>
          </div>
        </div>
      </div>

      {/* ProgressBar Specimen */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="aspect-square border-2 border-neutral-200 rounded-lg bg-white flex flex-col overflow-hidden">
          <div className="px-8 py-4 border-b-2 border-neutral-200 bg-neutral-50 flex-shrink-0">
            <Heading as="h3" variant="section" className="text-neutral-900 mb-1">
              Progress Bars
            </Heading>
            <Text variant="small" className="text-neutral-600">
              Linear progress indicators with terracotta fill
            </Text>
          </div>

          <div className="p-8 overflow-auto flex-1">
          <div className="space-y-6">

          {/* Sizes */}
          <div className="space-y-2">
            <div className="space-y-3">
              <ProgressBar size="sm" value={75} />
              <ProgressBar size="md" value={60} />
              <ProgressBar size="lg" value={45} />
            </div>
            <div className="pl-4 border-l-2 border-terracotta-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Three sizes (4px/8px/12px). Determinate progress with smooth transitions.
              </Text>
            </div>
          </div>

          {/* Indeterminate */}
          <div className="space-y-2">
            <ProgressBar indeterminate />
            <div className="pl-4 border-l-2 border-sage-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Unknown duration loading states. Animated sweep pattern.
              </Text>
            </div>
          </div>

          {/* With Label */}
          <div className="space-y-2">
            <ProgressBar value={80} label="Uploading files" showLabel />
            <div className="pl-4 border-l-2 border-neutral-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Show progress context with percentage. Helpful for file uploads, processing.
              </Text>
            </div>
          </div>

          </div>
          </div>
        </div>
      </div>

      {/* Skeleton Specimen */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="aspect-square border-2 border-neutral-200 rounded-lg bg-white flex flex-col overflow-hidden">
          <div className="px-8 py-4 border-b-2 border-neutral-200 bg-neutral-50 flex-shrink-0">
            <Heading as="h3" variant="section" className="text-neutral-900 mb-1">
              Skeletons
            </Heading>
            <Text variant="small" className="text-neutral-600">
              Content loading placeholders with warm aesthetic
            </Text>
          </div>

          <div className="p-8 overflow-auto flex-1">
          <div className="space-y-6">

          {/* Text Lines */}
          <div className="space-y-2">
            <Skeleton variant="text" lines={3} />
            <div className="pl-4 border-l-2 border-neutral-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Paragraph loading states. Varying widths for realistic appearance.
              </Text>
            </div>
          </div>

          {/* Rectangle */}
          <div className="space-y-2">
            <Skeleton variant="rectangle" width="100%" height={120} />
            <div className="pl-4 border-l-2 border-terracotta-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Cards, images, content blocks. Customizable dimensions.
              </Text>
            </div>
          </div>

          {/* Circle */}
          <div className="space-y-2">
            <div className="flex gap-3">
              <Skeleton variant="circle" width={40} />
              <Skeleton variant="circle" width={48} />
              <Skeleton variant="circle" width={64} />
            </div>
            <div className="pl-4 border-l-2 border-sage-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Avatar placeholders. Perfect for user profile loading states.
              </Text>
            </div>
          </div>

          </div>
          </div>
        </div>
      </div>

      {/* Code Specimen */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="aspect-square border-2 border-neutral-200 rounded-lg bg-white flex flex-col overflow-hidden">
          <div className="px-8 py-4 border-b-2 border-neutral-200 bg-neutral-50 flex-shrink-0">
            <Heading as="h3" variant="section" className="text-neutral-900 mb-1">
              Code
            </Heading>
            <Text variant="small" className="text-neutral-600">
              Inline and block code with JetBrains Mono
            </Text>
          </div>

          <div className="p-8 overflow-auto flex-1">
          <div className="space-y-6">

          {/* Inline */}
          <div className="space-y-2">
            <Text variant="body">
              Use the <Code>npm install</Code> command to install dependencies.
            </Text>
            <div className="pl-4 border-l-2 border-terracotta-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Inline code snippets, commands, variables. Terracotta-700 on neutral-100.
              </Text>
            </div>
          </div>

          {/* Block */}
          <div className="space-y-2">
            <Code inline={false} language="typescript">
              {`const greeting = "Hello World";\nconsole.log(greeting);`}
            </Code>
            <div className="pl-4 border-l-2 border-sage-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Multi-line code blocks. Dark background (neutral-900) with light text.
              </Text>
            </div>
          </div>

          </div>
          </div>
        </div>
      </div>

      {/* IconButton Specimen */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="aspect-square border-2 border-neutral-200 rounded-lg bg-white flex flex-col overflow-hidden">
          <div className="px-8 py-4 border-b-2 border-neutral-200 bg-neutral-50 flex-shrink-0">
            <Heading as="h3" variant="section" className="text-neutral-900 mb-1">
              Icon Buttons
            </Heading>
            <Text variant="small" className="text-neutral-600">
              Compact icon-only actions with perfect circles
            </Text>
          </div>

          <div className="p-8 overflow-auto flex-1">
          <div className="space-y-6">

          {/* Default */}
          <div className="space-y-2">
            <div className="flex gap-2">
              <IconButton variant="default" size="sm" icon={<Heart />} aria-label="Like" />
              <IconButton variant="default" size="md" icon={<Heart />} aria-label="Like" />
              <IconButton variant="default" size="lg" icon={<Heart />} aria-label="Like" />
            </div>
            <div className="pl-4 border-l-2 border-terracotta-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Primary icon actions. Terracotta background with white icon (32px/40px/48px).
              </Text>
            </div>
          </div>

          {/* Ghost */}
          <div className="space-y-2">
            <IconButton variant="ghost" size="md" icon={<Settings />} aria-label="Settings" />
            <div className="pl-4 border-l-2 border-sage-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Subtle icon actions. Transparent with hover state, minimal visual weight.
              </Text>
            </div>
          </div>

          {/* Outline */}
          <div className="space-y-2">
            <div className="flex gap-2">
              <IconButton variant="outline" size="md" icon={<Plus />} aria-label="Add" />
              <IconButton variant="outline" size="md" icon={<Trash2 />} aria-label="Delete" />
            </div>
            <div className="pl-4 border-l-2 border-neutral-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Alternative icon actions. Border with terracotta hover state.
              </Text>
            </div>
          </div>

          </div>
          </div>
        </div>
      </div>

      {/* Checkbox Specimen */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="aspect-square border-2 border-neutral-200 rounded-lg bg-white flex flex-col overflow-hidden">
          <div className="px-8 py-4 border-b-2 border-neutral-200 bg-neutral-50 flex-shrink-0">
            <Heading as="h3" variant="section" className="text-neutral-900 mb-1">
              Checkboxes
            </Heading>
            <Text variant="small" className="text-neutral-600">
              Boolean selection with terracotta checked state
            </Text>
          </div>

          <div className="p-8 overflow-auto flex-1">
          <div className="space-y-6">

          {/* Sizes */}
          <div className="space-y-2">
            <div className="flex gap-3 items-center">
              <Checkbox size="sm" checked />
              <Checkbox size="md" checked />
              <Checkbox size="lg" checked />
            </div>
            <div className="pl-4 border-l-2 border-terracotta-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Three sizes (16px/20px/24px). Terracotta checked state with white checkmark.
              </Text>
            </div>
          </div>

          {/* States */}
          <div className="space-y-2">
            <div className="flex gap-3 items-center">
              <Checkbox checked={false} />
              <Checkbox checked={true} />
              <Checkbox indeterminate />
            </div>
            <div className="pl-4 border-l-2 border-sage-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Unchecked, checked, indeterminate. Supports aria-checked="mixed" for partial selection.
              </Text>
            </div>
          </div>

          </div>
          </div>
        </div>
      </div>

      {/* Label Specimen */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="aspect-square border-2 border-neutral-200 rounded-lg bg-white flex flex-col overflow-hidden">
          <div className="px-8 py-4 border-b-2 border-neutral-200 bg-neutral-50 flex-shrink-0">
            <Heading as="h3" variant="section" className="text-neutral-900 mb-1">
              Labels
            </Heading>
            <Text variant="small" className="text-neutral-600">
              Form field labels with accessibility focus
            </Text>
          </div>

          <div className="p-8 overflow-auto flex-1">
          <div className="space-y-6">

          {/* Basic */}
          <div className="space-y-2">
            <Label htmlFor="example-input">Email Address</Label>
            <Input id="example-input" placeholder="you@example.com" />
            <div className="pl-4 border-l-2 border-neutral-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Basic form labels. Inter text-sm font-medium, neutral-700.
              </Text>
            </div>
          </div>

          {/* Required */}
          <div className="space-y-2">
            <Label htmlFor="required-input" required>Username</Label>
            <Input id="required-input" placeholder="john_doe" />
            <div className="pl-4 border-l-2 border-terracotta-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Required fields. Terracotta asterisk (design system, not generic red).
              </Text>
            </div>
          </div>

          {/* With Hint */}
          <div className="space-y-2">
            <Label htmlFor="hint-input" hint="Use at least 8 characters">Password</Label>
            <Input id="hint-input" type="password" />
            <div className="pl-4 border-l-2 border-sage-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Helper text for guidance. Neutral-600 small text below label.
              </Text>
            </div>
          </div>

          </div>
          </div>
        </div>
      </div>

      {/* Tag Specimen */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="aspect-square border-2 border-neutral-200 rounded-lg bg-white flex flex-col overflow-hidden">
          <div className="px-8 py-4 border-b-2 border-neutral-200 bg-neutral-50 flex-shrink-0">
            <Heading as="h3" variant="section" className="text-neutral-900 mb-1">
              Tags
            </Heading>
            <Text variant="small" className="text-neutral-600">
              Technology and category tags with design system colors
            </Text>
          </div>

          <div className="p-8 overflow-auto flex-1">
          <div className="space-y-6">

          {/* Sizes */}
          <div className="space-y-2">
            <div className="flex gap-2 items-center flex-wrap">
              <Tag size="sm">Small</Tag>
              <Tag size="md">Medium</Tag>
            </div>
            <div className="pl-4 border-l-2 border-neutral-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Two sizes (24px/32px). Use based on context and density.
              </Text>
            </div>
          </div>

          {/* Variants */}
          <div className="space-y-2">
            <div className="flex gap-2 flex-wrap">
              <Tag variant="default">React</Tag>
              <Tag variant="terracotta">TypeScript</Tag>
              <Tag variant="sage">Next.js</Tag>
            </div>
            <div className="pl-4 border-l-2 border-terracotta-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Category colors: neutral (default), terracotta (primary), sage (accent).
              </Text>
            </div>
          </div>

          {/* Removable */}
          <div className="space-y-2">
            <Tag variant="terracotta" removable onRemove={() => {}}>
              Removable Tag
            </Tag>
            <div className="pl-4 border-l-2 border-sage-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Filter chips, selected items. Remove button with smooth transitions.
              </Text>
            </div>
          </div>

          </div>
          </div>
        </div>
      </div>

      {/* Image Specimen */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="aspect-square border-2 border-neutral-200 rounded-lg bg-white flex flex-col overflow-hidden">
          <div className="px-8 py-4 border-b-2 border-neutral-200 bg-neutral-50 flex-shrink-0">
            <Heading as="h3" variant="section" className="text-neutral-900 mb-1">
              Images
            </Heading>
            <Text variant="small" className="text-neutral-600">
              Next.js optimized images with design system styling
            </Text>
          </div>

          <div className="p-8 overflow-auto flex-1">
          <div className="space-y-6">

          {/* Aspect Ratios */}
          <div className="space-y-2">
            <Image
              src="/api/placeholder/400/400"
              alt="Square image"
              aspectRatio="1/1"
              rounded="md"
            />
            <div className="pl-4 border-l-2 border-terracotta-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Multiple aspect ratios: 16/9, 4/3, 1/1, 3/2. Maintains consistency across layouts.
              </Text>
            </div>
          </div>

          {/* Border Radius */}
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-2">
              <Image src="/api/placeholder/100/100" alt="None" aspectRatio="1/1" rounded="none" />
              <Image src="/api/placeholder/100/100" alt="Medium" aspectRatio="1/1" rounded="md" />
              <Image src="/api/placeholder/100/100" alt="Full" aspectRatio="1/1" rounded="full" />
            </div>
            <div className="pl-4 border-l-2 border-sage-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Border radius options: none, sm, md, lg, xl, full. 8-point grid aligned.
              </Text>
            </div>
          </div>

          {/* With Caption */}
          <div className="space-y-2">
            <Image
              src="/api/placeholder/300/200"
              alt="Captioned image"
              aspectRatio="3/2"
              caption="Semantic figure with figcaption element"
            />
            <div className="pl-4 border-l-2 border-neutral-200">
              <Text variant="small" className="font-semibold text-neutral-900">
                Use Case:
              </Text>
              <Text variant="small" className="text-neutral-700">
                Accessible captions with semantic HTML. 8px spacing (mt-2).
              </Text>
            </div>
          </div>

          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ComponentSpecimen.displayName = "ComponentSpecimen";
