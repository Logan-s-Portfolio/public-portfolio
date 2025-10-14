/**
 * AtomicShowcase Organism
 *
 * Demonstrates atomic design methodology through a complete chain:
 * Atoms → Molecules → Organisms → Templates
 *
 * Theme: User Profile & Social System
 * Shows how components compose from smallest to largest
 */

"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

// Import atoms for direct display
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

// Import molecules
import { UserInfoCard } from "./demos/molecules/UserInfoCard";
import { StatusIndicator } from "./demos/molecules/StatusIndicator";
import { ActionButtonGroup } from "./demos/molecules/ActionButtonGroup";
import { StatDisplay } from "./demos/molecules/StatDisplay";
import { FormFieldMolecule } from "./demos/molecules/FormFieldMolecule";
import { SkillTagGroup } from "./demos/molecules/SkillTagGroup";
import { LoadingCard } from "./demos/molecules/LoadingCard";
import { ImageWithMeta } from "./demos/molecules/ImageWithMeta";

// Import organisms
import { UserProfileCard } from "./demos/organisms/UserProfileCard";
import { ProfileEditForm } from "./demos/organisms/ProfileEditForm";
import { UserCardGrid } from "./demos/organisms/UserCardGrid";
import { ProfileLoadingState } from "./demos/organisms/ProfileLoadingState";

// Import templates
import { ProfilePageTemplate } from "./demos/templates/ProfilePageTemplate";
import { TeamDirectoryTemplate } from "./demos/templates/TeamDirectoryTemplate";
import { EditProfilePageTemplate } from "./demos/templates/EditProfilePageTemplate";

type AtomicLevel = "atoms" | "molecules" | "organisms" | "templates";

export interface AtomicShowcaseProps {
  className?: string;
}

// Sample data for demos
const sampleUser = {
  avatarSrc: undefined,
  name: "Sarah Chen",
  title: "Product Designer",
  status: "online" as const,
  lastSeen: "2 minutes ago",
  followers: 1248,
  following: 432,
  posts: 86,
  skills: [
    { label: "UI Design", variant: "terracotta" as const },
    { label: "Figma", variant: "sage" as const },
    { label: "React", variant: "default" as const },
    { label: "TypeScript", variant: "terracotta" as const },
    { label: "Design Systems", variant: "sage" as const },
  ],
};

const sampleUsers = [
  { id: "1", ...sampleUser, name: "Sarah Chen" },
  { id: "2", ...sampleUser, name: "Marcus Johnson", title: "Frontend Dev", status: "away" as const },
  { id: "3", ...sampleUser, name: "Emma Davis", title: "UX Researcher", status: "offline" as const },
  { id: "4", ...sampleUser, name: "Alex Kim", title: "Design Lead", status: "online" as const },
];

const samplePosts = [
  { id: "1", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=400&fit=crop", alt: "Project 1", caption: "Design System Launch" },
  { id: "2", image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=400&fit=crop", alt: "Project 2", caption: "Mobile App Redesign" },
  { id: "3", image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=400&h=400&fit=crop", alt: "Project 3", caption: "Brand Identity" },
];

export const AtomicShowcase = ({ className }: AtomicShowcaseProps) => {
  const [activeLevel, setActiveLevel] = useState<AtomicLevel>("atoms");
  const shouldReduceMotion = useReducedMotion();

  const tabs: Array<{ id: AtomicLevel; label: string; count: number }> = [
    { id: "atoms", label: "Atoms", count: 17 },
    { id: "molecules", label: "Molecules", count: 8 },
    { id: "organisms", label: "Organisms", count: 4 },
    { id: "templates", label: "Templates", count: 3 },
  ];

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
          aria-label="Atomic design tabs"
        >
          {tabs.map((tab) => {
            const isActive = activeLevel === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`${tab.id}-panel`}
                onClick={() => setActiveLevel(tab.id)}
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
                    layoutId="activeAtomicTab"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.3, ease: [0.33, 1, 0.68, 1] as const }
                    }
                  />
                )}
                {tab.label} ({tab.count})
              </button>
            );
          })}
        </nav>
      </div>

      {/* Scrollable Content Area */}
      <div className="overflow-y-auto px-6 py-8 md:px-8 md:py-12" style={{ minHeight: 0 }}>
        {activeLevel === "atoms" && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Tab Description */}
            <div className="space-y-3">
              <Heading as="h2" variant="h2" className="text-neutral-900">
                Atoms
              </Heading>
              <Text variant="lead" className="text-neutral-600">
                The foundational building blocks. Atoms are the smallest, indivisible UI elements—buttons, inputs, labels, and icons. They cannot be broken down further and serve as the base for all larger components.
              </Text>
            </div>

            <Divider />

            {/* Buttons Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  Buttons
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Five variants for different interaction hierarchies
                </Text>
              </div>
              <div className="flex gap-2 flex-wrap">
                {/* Primary Button */}
                <Button variant="primary" size="md">
                  Primary Button
                </Button>

                {/* Secondary Button */}
                <Button variant="secondary" size="md">
                  Secondary Button
                </Button>

                {/* Outline Button */}
                <Button variant="outline" size="md">
                  Outline Button
                </Button>

                {/* Ghost Button */}
                <Button variant="ghost" size="md">
                  Ghost Button
                </Button>

                {/* Destructive Button */}
                <Button variant="destructive" size="md">
                  Destructive Button
                </Button>
              </div>
            </div>

            <Divider />

            {/* Headings Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  Headings
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Semantic headings with Fraunces display and Inter body type
                </Text>
              </div>
              <div className="space-y-4">
                {/* Display */}
                <Heading variant="display">Display Heading</Heading>

                {/* H1 */}
                <Heading variant="h1">Heading 1</Heading>

                {/* H2 */}
                <Heading variant="h2">Heading 2</Heading>

                {/* H3 */}
                <Heading variant="h3">Heading 3</Heading>

                {/* H4 */}
                <Heading variant="h4">Heading 4</Heading>
              </div>
            </div>

            <Divider />

            {/* Text Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  Text
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Body copy variants for different content contexts
                </Text>
              </div>
              <div className="space-y-4">
                {/* Lead */}
                <Text variant="lead">Lead text introduces the content with slightly larger size and medium weight.</Text>

                {/* Body */}
                <Text variant="body">Body text is the default reading size for comfortable long-form content.</Text>

                {/* Caption */}
                <Text variant="caption">Caption text provides additional context or metadata.</Text>

                {/* Small */}
                <Text variant="small">Small text for fine print and secondary information.</Text>
              </div>
            </div>

            <Divider />

            {/* Badge Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  Badges
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Status indicators with design system colors
                </Text>
              </div>
              <div className="flex gap-2 flex-wrap items-center">
                {/* Default */}
                <Badge variant="default" size="sm">Small</Badge>
                <Badge variant="default" size="md">Medium</Badge>
                <Badge variant="default" size="lg">Large</Badge>

                {/* Success */}
                <Badge variant="success" dot>Success</Badge>

                {/* Warning */}
                <Badge variant="warning" dot>Warning</Badge>

                {/* Error */}
                <Badge variant="error" dot>Error</Badge>

                {/* Info */}
                <Badge variant="info" dot>Info</Badge>
              </div>
            </div>

            <Divider />

            {/* Tag Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  Tags
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Technology and category tags with design system colors
                </Text>
              </div>
              <div className="space-y-4">
                {/* Sizes */}
                <div className="flex gap-2 items-center flex-wrap">
                  <Tag size="sm">Small</Tag>
                  <Tag size="md">Medium</Tag>
                </div>

                {/* Variants */}
                <div className="flex gap-2 flex-wrap">
                  <Tag variant="default">React</Tag>
                  <Tag variant="terracotta">TypeScript</Tag>
                  <Tag variant="sage">Next.js</Tag>
                </div>

                {/* Removable */}
                <Tag variant="terracotta" removable onRemove={() => {}}>
                  Removable Tag
                </Tag>
              </div>
            </div>

            <Divider />

            {/* Avatar Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  Avatars
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  User photos with warm fallback states
                </Text>
              </div>
              <div className="space-y-4">
                {/* Sizes */}
                <div className="flex gap-3 items-center">
                  <Avatar size="xs" alt="Extra small" fallback="XS" />
                  <Avatar size="sm" alt="Small" fallback="SM" />
                  <Avatar size="md" alt="Medium" fallback="MD" />
                  <Avatar size="lg" alt="Large" fallback="LG" />
                  <Avatar size="xl" alt="Extra large" fallback="XL" />
                  <Avatar size="2xl" alt="2X large" fallback="2X" />
                </div>

                {/* With Ring & Fallback States */}
                <div className="flex gap-3 items-center">
                  <Avatar size="lg" alt="User with ring" fallback="LB" ring />
                  <Avatar size="md" alt="Initials" fallback="AB" />
                  <Avatar size="md" alt="Icon fallback" />
                </div>
              </div>
            </div>

            <Divider />

            {/* Input Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  Inputs
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Text input fields with terracotta focus states
                </Text>
              </div>
              <div className="space-y-4">
                {/* Sizes */}
                <div className="space-y-3">
                  <Input size="sm" placeholder="Small input (32px)" />
                  <Input size="md" placeholder="Medium input (40px)" />
                  <Input size="lg" placeholder="Large input (48px)" />
                </div>

                {/* With Icons */}
                <div className="space-y-3">
                  <Input placeholder="Search..." leftIcon={<Search />} />
                  <Input placeholder="Email..." rightIcon={<Mail />} />
                </div>

                {/* Error State */}
                <Input placeholder="Invalid input" error />
              </div>
            </div>

            <Divider />

            {/* Link Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  Links
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Navigation with terracotta accents and affordance
                </Text>
              </div>
              <div className="flex flex-col gap-4">
                {/* Default */}
                <Link href="#" variant="default">Default link with underline</Link>

                {/* Nav */}
                <div className="flex gap-4">
                  <Link href="#" variant="nav">Navigation</Link>
                  <Link href="#" variant="nav" active>Active Page</Link>
                </div>

                {/* External */}
                <Link href="#" external>External link with icon</Link>
              </div>
            </div>

            <Divider />

            {/* Spinner Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  Spinners
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Loading indicators respecting motion preferences
                </Text>
              </div>
              <div className="space-y-4">
                {/* Sizes */}
                <div className="flex gap-4 items-center">
                  <Spinner size="xs" />
                  <Spinner size="sm" />
                  <Spinner size="md" />
                  <Spinner size="lg" />
                  <Spinner size="xl" />
                </div>

                {/* In Context */}
                <Button variant="primary" disabled>
                  <Spinner size="sm" className="text-white" /> Loading...
                </Button>
              </div>
            </div>

            <Divider />

            {/* Divider Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  Dividers
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Visual separators with optional labels
                </Text>
              </div>
              <div className="space-y-4">
                {/* Solid */}
                <Divider variant="solid" />

                {/* Dashed */}
                <Divider variant="dashed" />

                {/* With Label */}
                <Divider label="Section Break" />
              </div>
            </div>

            <Divider />

            {/* ProgressBar Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  Progress Bars
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Linear progress indicators with terracotta fill
                </Text>
              </div>
              <div className="space-y-4">
                {/* Sizes */}
                <div className="space-y-3">
                  <ProgressBar size="sm" value={75} />
                  <ProgressBar size="md" value={60} />
                  <ProgressBar size="lg" value={45} />
                </div>

                {/* Indeterminate */}
                <ProgressBar indeterminate />

                {/* With Label */}
                <ProgressBar value={80} label="Uploading files" showLabel />
              </div>
            </div>

            <Divider />

            {/* Skeleton Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  Skeletons
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Content loading placeholders with warm aesthetic
                </Text>
              </div>
              <div className="space-y-4">
                {/* Text Lines */}
                <Skeleton variant="text" lines={3} />

                {/* Rectangle */}
                <Skeleton variant="rectangle" width="100%" height={120} />

                {/* Circle */}
                <div className="flex gap-3">
                  <Skeleton variant="circle" width={40} />
                  <Skeleton variant="circle" width={48} />
                  <Skeleton variant="circle" width={64} />
                </div>
              </div>
            </div>

            <Divider />

            {/* Code Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  Code
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Inline and block code with JetBrains Mono
                </Text>
              </div>
              <div className="space-y-4">
                {/* Inline */}
                <Text variant="body">
                  Use the <Code>npm install</Code> command to install dependencies.
                </Text>

                {/* Block */}
                <Code inline={false} language="typescript">
                  {`const greeting = "Hello World";\nconsole.log(greeting);`}
                </Code>
              </div>
            </div>

            <Divider />

            {/* IconButton Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  Icon Buttons
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Compact icon-only actions with perfect circles
                </Text>
              </div>
              <div className="space-y-4">
                {/* Default */}
                <div className="flex gap-2">
                  <IconButton variant="default" size="sm" icon={<Heart />} aria-label="Like" />
                  <IconButton variant="default" size="md" icon={<Heart />} aria-label="Like" />
                  <IconButton variant="default" size="lg" icon={<Heart />} aria-label="Like" />
                </div>

                {/* Ghost & Outline */}
                <div className="flex gap-2">
                  <IconButton variant="ghost" size="md" icon={<Settings />} aria-label="Settings" />
                  <IconButton variant="outline" size="md" icon={<Plus />} aria-label="Add" />
                  <IconButton variant="outline" size="md" icon={<Trash2 />} aria-label="Delete" />
                </div>
              </div>
            </div>

            <Divider />

            {/* Checkbox Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  Checkboxes
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Boolean selection with terracotta checked state
                </Text>
              </div>
              <div className="space-y-4">
                {/* Sizes */}
                <div className="flex gap-3 items-center">
                  <Checkbox size="sm" checked readOnly />
                  <Checkbox size="md" checked readOnly />
                  <Checkbox size="lg" checked readOnly />
                </div>

                {/* States */}
                <div className="flex gap-3 items-center">
                  <Checkbox checked={false} readOnly />
                  <Checkbox checked={true} readOnly />
                  <Checkbox indeterminate readOnly />
                </div>
              </div>
            </div>

            <Divider />

            {/* Label Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  Labels
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Form field labels with accessibility focus
                </Text>
              </div>
              <div className="space-y-4">
                {/* Basic */}
                <div className="space-y-2">
                  <Label htmlFor="example-input">Email Address</Label>
                  <Input id="example-input" placeholder="you@example.com" />
                </div>

                {/* Required */}
                <div className="space-y-2">
                  <Label htmlFor="required-input" required>Username</Label>
                  <Input id="required-input" placeholder="john_doe" />
                </div>

                {/* With Hint */}
                <div className="space-y-2">
                  <Label htmlFor="hint-input" hint="Use at least 8 characters">Password</Label>
                  <Input id="hint-input" type="password" />
                </div>
              </div>
            </div>

            <Divider />

            {/* Image Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  Images
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Next.js optimized images with design system styling
                </Text>
              </div>
              <div className="space-y-4">
                {/* Aspect Ratios */}
                <Image
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop"
                  alt="Mountain landscape at sunrise"
                  aspectRatio="1/1"
                  rounded="md"
                />

                {/* Border Radius */}
                <div className="grid grid-cols-3 gap-2">
                  <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop" alt="Mountain view" aspectRatio="1/1" rounded="none" />
                  <Image src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=100&h=100&fit=crop" alt="Desert dunes" aspectRatio="1/1" rounded="md" />
                  <Image src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=100&h=100&fit=crop" alt="Ocean waves" aspectRatio="1/1" rounded="full" />
                </div>

                {/* With Caption */}
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
                  alt="Mountain landscape with misty valleys"
                  aspectRatio="3/2"
                  caption="Semantic figure with figcaption element"
                />
              </div>
            </div>
          </div>
        )}

        {activeLevel === "molecules" && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Tab Description */}
            <div className="space-y-3">
              <Heading as="h2" variant="h2" className="text-neutral-900">
                Molecules
              </Heading>
              <Text variant="lead" className="text-neutral-600">
                Simple groups working together. Molecules combine two or more atoms into functional units—like a search bar (input + button) or a form field (label + input + error text). They do one thing well.
              </Text>
            </div>

            <Divider />

            {/* UserInfoCard Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  UserInfoCard
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Built with: Avatar + Heading + Text
                </Text>
              </div>
              <div className="space-y-4">
                <UserInfoCard name="Sarah Chen" title="Product Designer" size="compact" />
                <UserInfoCard name="Sarah Chen" title="Product Designer" size="default" />
                <UserInfoCard name="Sarah Chen" title="Product Designer" size="expanded" />
              </div>
            </div>

            <Divider />

            {/* StatusIndicator Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  StatusIndicator
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Built with: Badge + Text
                </Text>
              </div>
              <div className="space-y-4">
                <StatusIndicator status="online" lastSeen="Just now" />
                <StatusIndicator status="away" lastSeen="15 minutes ago" />
                <StatusIndicator status="offline" lastSeen="2 hours ago" />
              </div>
            </div>

            <Divider />

            {/* ActionButtonGroup Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  ActionButtonGroup
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Built with: Button + IconButton × 2
                </Text>
              </div>
              <div className="space-y-4">
                <ActionButtonGroup primaryLabel="Follow" />
                <ActionButtonGroup primaryLabel="Follow" isLiked />
              </div>
            </div>

            <Divider />

            {/* StatDisplay Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  StatDisplay
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Built with: Heading + Text
                </Text>
              </div>
              <div className="flex justify-around">
                <StatDisplay value="1.2K" label="Followers" />
                <StatDisplay value="432" label="Following" />
                <StatDisplay value="86" label="Posts" />
              </div>
            </div>

            <Divider />

            {/* SkillTagGroup Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  SkillTagGroup
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Built with: Text + Tag × N
                </Text>
              </div>
              <SkillTagGroup skills={sampleUser.skills} />
            </div>

            <Divider />

            {/* LoadingCard Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  LoadingCard
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Built with: Skeleton × 3
                </Text>
              </div>
              <LoadingCard />
            </div>

            <Divider />

            {/* ImageWithMeta Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  ImageWithMeta
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Built with: Image + Text + Link
                </Text>
              </div>
              <ImageWithMeta
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=300&fit=crop"
                alt="Portfolio piece"
                caption="Design System Project"
                linkText="View Details"
                linkHref="#"
                aspectRatio="4/3"
              />
            </div>

            <Divider />

            {/* FormFieldMolecule Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  FormField
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Built with: Label + Input + Text
                </Text>
              </div>
              <div className="space-y-4">
                <FormFieldMolecule
                  id="demo-field"
                  label="Email Address"
                  placeholder="you@example.com"
                  required
                />
                <FormFieldMolecule
                  id="demo-error"
                  label="Username"
                  placeholder="johndoe"
                  error="This username is already taken"
                />
              </div>
            </div>
          </div>
        )}

        {activeLevel === "organisms" && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Tab Description */}
            <div className="space-y-3">
              <Heading as="h2" variant="h2" className="text-neutral-900">
                Organisms
              </Heading>
              <Text variant="lead" className="text-neutral-600">
                Complex, standalone sections. Organisms are sophisticated UI components built from molecules and atoms—navigation bars, profile cards, or entire forms. They're substantial enough to stand on their own.
              </Text>
            </div>

            <Divider />

            {/* UserProfileCard Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  UserProfileCard
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Built with: UserInfoCard + StatusIndicator + StatDisplay × 3 + SkillTagGroup + ActionButtonGroup
                </Text>
              </div>
              <UserProfileCard {...sampleUser} />
            </div>

            <Divider />

            {/* ProfileEditForm Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  ProfileEditForm
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Built with: UserInfoCard + FormFieldMolecule × 4 + ActionButtonGroup
                </Text>
              </div>
              <ProfileEditForm
                currentName="Sarah Chen"
                currentTitle="Product Designer"
                name="Sarah Chen"
                email="sarah@example.com"
              />
            </div>

            <Divider />

            {/* UserCardGrid Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  UserCardGrid
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Built with: StatDisplay + UserProfileCard × N
                </Text>
              </div>
              <UserCardGrid users={sampleUsers} totalCount={24} title="Design Team" />
            </div>

            <Divider />

            {/* ProfileLoadingState Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  ProfileLoadingState
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Built with: LoadingCard + Skeleton × N
                </Text>
              </div>
              <ProfileLoadingState />
            </div>
          </div>
        )}

        {activeLevel === "templates" && (
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Tab Description */}
            <div className="space-y-3">
              <Heading as="h2" variant="h2" className="text-neutral-900">
                Templates
              </Heading>
              <Text variant="lead" className="text-neutral-600">
                Page-level layouts. Templates arrange organisms into complete page structures. They define the content hierarchy and spacing without real data—showing where components live on the page.
              </Text>
            </div>

            <Divider />

            {/* ProfilePageTemplate Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  ProfilePageTemplate
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Built with: UserProfileCard + ImageWithMeta × 3
                </Text>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg overflow-hidden">
                <div className="scale-75 origin-top -mb-[25%]">
                  <ProfilePageTemplate {...sampleUser} recentPosts={samplePosts} />
                </div>
              </div>
            </div>

            <Divider />

            {/* TeamDirectoryTemplate Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  TeamDirectoryTemplate
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Built with: ActionButtonGroup + UserCardGrid
                </Text>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg overflow-hidden">
                <div className="scale-75 origin-top -mb-[25%]">
                  <TeamDirectoryTemplate users={sampleUsers} totalCount={24} />
                </div>
              </div>
            </div>

            <Divider />

            {/* EditProfilePageTemplate Specimen */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h3" variant="h3" className="text-neutral-900">
                  EditProfilePageTemplate
                </Heading>
                <Text variant="small" className="text-neutral-600">
                  Built with: ProfileEditForm + UserProfileCard
                </Text>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg overflow-hidden">
                <div className="scale-75 origin-top -mb-[25%]">
                  <EditProfilePageTemplate
                    {...sampleUser}
                    formData={{ name: "Sarah Chen", email: "sarah@example.com" }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

AtomicShowcase.displayName = "AtomicShowcase";
