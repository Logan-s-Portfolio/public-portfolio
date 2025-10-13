/**
 * Design System Showcase - Screenshot Page
 *
 * Temporary page for taking design system screenshots
 */

"use client";

import { useState } from "react";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { Tag } from "@/components/atoms/Tag";
import { Badge } from "@/components/atoms/Badge";
import { Input } from "@/components/atoms/Input";
import { CustomSelect } from "@/components/molecules/CustomSelect";
import { CheckboxField } from "@/components/molecules/CheckboxField";
import { TextArea } from "@/components/molecules/TextArea";

export default function DesignShowcasePage() {
  const [selectValue, setSelectValue] = useState("react");
  const [checked, setChecked] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-sage-50 relative">
      {/* Grid Layout - positioned at top-left with padding */}
      <div className="absolute top-0 left-0 pt-12 pl-12">
        <div className="grid grid-cols-12 gap-4">

          {/* Typography Section - Spans 5 columns */}
          <div className="col-span-5 space-y-3 rounded-2xl border-2 border-neutral-200 bg-white p-5 shadow-lg">
            <Heading as="h1" variant="display" className="text-neutral-900">
              Typography
            </Heading>
            <Heading as="h2" variant="h2" className="text-terracotta-700">
              Lorem Ipsum Dolor
            </Heading>
            <Text variant="lead" className="text-neutral-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
            </Text>
            <Text variant="body" className="text-neutral-600">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Text variant="small" className="font-mono text-sage-600">
              const lorem = "ipsum"; // JetBrains Mono
            </Text>
          </div>

          {/* Color Palette - Spans 4 columns */}
          <div className="col-span-4 space-y-2 rounded-2xl border-2 border-neutral-200 bg-white p-5 shadow-lg">
            <Heading as="h3" variant="h3" className="mb-2 text-neutral-900">
              Colors
            </Heading>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-12 flex-1 rounded-lg bg-terracotta-500 shadow-md" />
                <div className="h-12 flex-1 rounded-lg bg-terracotta-300 shadow-md" />
                <div className="h-12 flex-1 rounded-lg bg-terracotta-700 shadow-md" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-12 flex-1 rounded-lg bg-sage-500 shadow-md" />
                <div className="h-12 flex-1 rounded-lg bg-sage-300 shadow-md" />
                <div className="h-12 flex-1 rounded-lg bg-sage-700 shadow-md" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-12 flex-1 rounded-lg bg-neutral-200 shadow-md" />
                <div className="h-12 flex-1 rounded-lg bg-neutral-500 shadow-md" />
                <div className="h-12 flex-1 rounded-lg bg-neutral-900 shadow-md" />
              </div>
            </div>
          </div>

          {/* Buttons - Spans 3 columns */}
          <div className="col-span-3 space-y-3 rounded-2xl border-2 border-neutral-200 bg-white p-5 shadow-lg">
            <Heading as="h3" variant="h3" className="mb-2 text-neutral-900">
              Buttons
            </Heading>
            <div className="space-y-3">
              <Button variant="primary" size="md" className="w-full">
                Primary
              </Button>
              <Button variant="secondary" size="md" className="w-full">
                Secondary
              </Button>
              <Button variant="ghost" size="md" className="w-full">
                Ghost
              </Button>
              <Button variant="outline" size="md" className="w-full">
                Outline
              </Button>
            </div>
          </div>

          {/* Tags & Badges - Spans 4 columns */}
          <div className="col-span-4 rounded-2xl border-2 border-neutral-200 bg-white p-5 shadow-lg">
            <Heading as="h3" variant="h3" className="mb-2 text-neutral-900">
              Tags & Badges
            </Heading>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Tag variant="terracotta" size="md">React</Tag>
                <Tag variant="sage" size="md">TypeScript</Tag>
                <Tag variant="terracotta" size="md">Next.js</Tag>
              </div>
              <div className="flex flex-wrap gap-2">
                <Tag variant="sage" size="sm">Tailwind</Tag>
                <Tag variant="terracotta" size="sm">Framer</Tag>
                <Tag variant="sage" size="sm">Vitest</Tag>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="success">Active</Badge>
                <Badge variant="warning">Beta</Badge>
                <Badge variant="error">Deprecated</Badge>
              </div>
            </div>
          </div>

          {/* Form Elements - Spans 5 columns */}
          <div className="col-span-5 space-y-5 rounded-2xl border-2 border-neutral-200 bg-white p-5 shadow-lg">
            <Heading as="h3" variant="h3" className="mb-2 text-neutral-900">
              Form Elements
            </Heading>
            <Input
              label="Project Name"
              placeholder="My awesome project"
              type="text"
            />
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-700">
                Select Framework
              </label>
              <CustomSelect
                options={[
                  { value: "react", label: "React" },
                  { value: "nextjs", label: "Next.js" },
                  { value: "vue", label: "Vue" },
                ]}
                value={selectValue}
                onChange={setSelectValue}
                fullWidth
              />
            </div>
            <CheckboxField
              label="Enable dark mode"
              checked={checked}
              onChange={setChecked}
            />
          </div>

          {/* Cards Preview - Spans 3 columns */}
          <div className="col-span-3 rounded-2xl border-2 border-terracotta-200 bg-gradient-to-br from-terracotta-50 to-white p-5 shadow-lg">
            <Heading as="h3" variant="h3" className="mb-3 text-terracotta-700">
              Cards
            </Heading>
            <Text variant="body" className="mb-4 text-neutral-600">
              Versatile card components with multiple variants
            </Text>
            <div className="rounded-lg border border-terracotta-200 bg-white p-4">
              <Text variant="small" className="font-semibold text-neutral-900">
                Nested Card
              </Text>
            </div>
          </div>

          {/* Spacing System - Spans 6 columns */}
          <div className="col-span-6 rounded-2xl border-2 border-neutral-200 bg-white p-5 shadow-lg">
            <Heading as="h3" variant="h3" className="mb-2 text-neutral-900">
              Spacing System
            </Heading>

            {/* Spacing scale - horizontal */}
            <div className="flex items-end gap-4 justify-between h-48">
              <div className="flex flex-col items-center justify-end gap-2 flex-1">
                <div className="w-full h-8 rounded bg-terracotta-500 shadow-md" />
                <Text variant="small" className="font-mono text-neutral-900">8px</Text>
              </div>
              <div className="flex flex-col items-center justify-end gap-2 flex-1">
                <div className="w-full h-16 rounded bg-sage-500 shadow-md" />
                <Text variant="small" className="font-mono text-neutral-900">16px</Text>
              </div>
              <div className="flex flex-col items-center justify-end gap-2 flex-1">
                <div className="w-full h-24 rounded bg-terracotta-500 shadow-md" />
                <Text variant="small" className="font-mono text-neutral-900">24px</Text>
              </div>
              <div className="flex flex-col items-center justify-end gap-2 flex-1">
                <div className="w-full h-32 rounded bg-sage-500 shadow-md" />
                <Text variant="small" className="font-mono text-neutral-900">32px</Text>
              </div>
              <div className="flex flex-col items-center justify-end gap-2 flex-1">
                <div className="w-full h-40 rounded bg-terracotta-500 shadow-md" />
                <Text variant="small" className="font-mono text-neutral-900">48px</Text>
              </div>
              <div className="flex flex-col items-center justify-end gap-2 flex-1">
                <div className="w-full h-48 rounded bg-sage-500 shadow-md" />
                <Text variant="small" className="font-mono text-neutral-900">64px</Text>
              </div>
            </div>
          </div>

          {/* Profile Card Example - Spans 6 columns */}
          <div className="col-span-6 rounded-2xl border-2 border-neutral-200 bg-white p-5 shadow-lg">
            <Heading as="h3" variant="h3" className="mb-3 text-neutral-900">
              Components
            </Heading>
            <div className="rounded-xl border-2 border-neutral-200 bg-white p-6 shadow-md">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-terracotta-200">
                    <img
                      src="/logan-bell.jpg"
                      alt="Logan Bell"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Heading as="h4" variant="h4" className="text-neutral-900">
                      Logan Bell
                    </Heading>
                    <Badge variant="success">Active</Badge>
                  </div>
                  <Text variant="body" className="text-neutral-600 mb-1">
                    Product Designer
                  </Text>
                  <Text variant="small" className="text-neutral-500">
                    Austin, TX • 10+ years experience
                  </Text>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Tag variant="terracotta" size="sm">Design Systems</Tag>
                <Tag variant="sage" size="sm">UI/UX</Tag>
                <Tag variant="terracotta" size="sm">Prototyping</Tag>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Square Screenshot Target Zone - overlaid on top */}
      <div className="absolute top-0 left-0 pointer-events-none" style={{ width: '800px', height: '800px' }}>
        {/* Corner Markers - Top Left */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-terracotta-500" />

        {/* Corner Markers - Top Right */}
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-terracotta-500" />

        {/* Corner Markers - Bottom Left */}
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-terracotta-500" />

        {/* Corner Markers - Bottom Right */}
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-terracotta-500" />
      </div>

    </div>
  );
}
