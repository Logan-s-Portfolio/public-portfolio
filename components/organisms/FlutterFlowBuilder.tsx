/**
 * FlutterFlowBuilder Organism
 *
 * Visual representation of FlutterFlow's builder interface
 * Shows the 4-panel layout: Navigation Menu, Canvas, Properties Panel, Toolbar
 * Design System: Clean interface mockup with terracotta/sage accents
 * Accessibility: Semantic HTML, ARIA labels
 */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Text } from "@/components/atoms/Text";
import { Heading } from "@/components/atoms/Heading";
import {
  LayoutDashboard,
  Package,
  FileText,
  GitBranch,
  Presentation,
  Flame,
  Box,
  Settings,
  Globe,
  Image as ImageIcon,
  Code,
  Cloud,
  Search,
  Smartphone,
  Play,
} from "lucide-react";

export interface FlutterFlowBuilderProps {
  /** Which step to highlight */
  highlightStep?: "schema" | "wireframe" | "functional" | "design" | "custom" | "storyboard" | "cloud-functions" | "api-calls";
  /** Additional wrapper class */
  className?: string;
}

export const FlutterFlowBuilder = ({
  highlightStep,
  className,
}: FlutterFlowBuilderProps) => {
  const [selectedPanel, setSelectedPanel] = useState<
    "nav" | "canvas" | "properties" | null
  >(null);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", step: null },
    { icon: Package, label: "Widget Palette", step: "wireframe" },
    { icon: FileText, label: "Page Selector", step: "wireframe" },
    { icon: GitBranch, label: "Widget Tree", step: "functional" },
    { icon: Presentation, label: "Storyboard", step: "storyboard" },
    { icon: Flame, label: "Firestore", step: "schema" },
    { icon: Box, label: "Data Types", step: "schema" },
    { icon: Settings, label: "App Values", step: "functional" },
    { icon: Globe, label: "API Calls", step: "api-calls" },
    { icon: ImageIcon, label: "Media Assets", step: "design" },
    { icon: Code, label: "Custom Functions", step: "custom" },
    { icon: Cloud, label: "Cloud Functions", step: "cloud-functions" },
  ];

  // Mobile feature cards - highlight relevant tools for each step
  const getMobileFeatures = () => {
    switch (highlightStep) {
      case "schema":
        return [
          { icon: Flame, label: "Firestore", description: "NoSQL database integration", color: "terracotta" },
          { icon: Box, label: "Data Types", description: "Schema field definitions", color: "sage" },
          { icon: Settings, label: "Collections", description: "Organize data structure", color: "terracotta" },
        ];
      case "storyboard":
        return [
          { icon: Presentation, label: "Storyboard", description: "Visual app flow mapping", color: "terracotta" },
          { icon: FileText, label: "Page Selector", description: "Navigate between pages", color: "sage" },
          { icon: Package, label: "Widget Palette", description: "Drag-drop UI components", color: "terracotta" },
        ];
      case "wireframe":
        return [
          { icon: Package, label: "Widget Palette", description: "Drag-drop UI components", color: "terracotta" },
          { icon: GitBranch, label: "Widget Tree", description: "View component hierarchy", color: "sage" },
          { icon: FileText, label: "Page Selector", description: "Navigate between pages", color: "terracotta" },
        ];
      case "api-calls":
      case "functional":
        return [
          { icon: Globe, label: "API Calls", description: "Configure REST endpoints", color: "terracotta" },
          { icon: Settings, label: "Actions", description: "Wire onTap, onChange events", color: "sage" },
          { icon: Flame, label: "Firestore Queries", description: "Connect to database", color: "terracotta" },
        ];
      case "design":
        return [
          { icon: ImageIcon, label: "Theme Settings", description: "Brand colors and fonts", color: "terracotta" },
          { icon: Package, label: "Custom Components", description: "Reusable UI patterns", color: "sage" },
          { icon: Presentation, label: "Animations", description: "Smooth transitions", color: "terracotta" },
        ];
      case "custom":
        return [
          { icon: Code, label: "Custom Functions", description: "Write synchronous Dart logic", color: "terracotta" },
          { icon: Settings, label: "Custom Actions", description: "Async operations with APIs", color: "sage" },
        ];
      case "cloud-functions":
        return [
          { icon: Cloud, label: "Cloud Functions", description: "Backend logic on GCP", color: "terracotta" },
          { icon: Code, label: "Server-side Code", description: "Node.js Firebase functions", color: "sage" },
        ];
      default:
        return [
          { icon: Package, label: "Widget Builder", description: "Drag-drop interface", color: "terracotta" },
          { icon: Flame, label: "Firebase", description: "Backend integration", color: "sage" },
          { icon: Code, label: "Custom Code", description: "Extend with Dart", color: "terracotta" },
        ];
    }
  };

  const mobileFeatures = getMobileFeatures();

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border-2 border-neutral-200 bg-white shadow-lg",
        className
      )}
    >
      {/* Mobile Feature Cards - Only visible on mobile */}
      <div className="md:hidden">
        <div className="border-b-2 border-neutral-200 bg-neutral-50 px-4 py-3">
          <Text variant="small" className="font-semibold text-neutral-700">
            FlutterFlow Tools Used
          </Text>
        </div>
        <div className="p-4 space-y-3">
          {mobileFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "rounded-lg border-2 p-4",
                  feature.color === "terracotta"
                    ? "bg-terracotta-50 border-terracotta-200"
                    : "bg-sage-50 border-sage-200"
                )}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg shrink-0",
                      feature.color === "terracotta"
                        ? "bg-terracotta-600"
                        : "bg-sage-600"
                    )}
                  >
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Text variant="small" className="font-semibold text-neutral-900 mb-1">
                      {feature.label}
                    </Text>
                    <Text variant="small" className="text-neutral-600">
                      {feature.description}
                    </Text>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Desktop Mockup - Only visible on desktop */}
      <div className="hidden md:block">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b-2 border-neutral-200 bg-neutral-50 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500" aria-hidden="true" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" aria-hidden="true" />
            <div className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true" />
          </div>
          <Text variant="small" className="font-semibold text-neutral-700">
            FlutterFlow Builder
          </Text>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 rounded-lg bg-neutral-200 px-3 py-1.5 hover:bg-neutral-300 transition-colors">
            <Search className="h-3.5 w-3.5 text-neutral-600" />
            <Text variant="small" className="text-neutral-600">
              Search
            </Text>
          </button>
          <button className="flex items-center gap-1.5 rounded-lg bg-neutral-200 px-3 py-1.5 hover:bg-neutral-300 transition-colors">
            <Smartphone className="h-3.5 w-3.5 text-neutral-600" />
            <Text variant="small" className="text-neutral-600">
              iPhone 14
            </Text>
          </button>
          <button className="flex items-center gap-1.5 rounded-lg bg-terracotta-600 px-3 py-1.5 shadow-sm hover:bg-terracotta-700 transition-colors">
            <Play className="h-3.5 w-3.5 text-white fill-white" />
            <Text variant="small" className="font-semibold text-white">
              Run
            </Text>
          </button>
        </div>
      </div>

      {/* Main Layout: Nav | Canvas | Properties */}
      <div className="flex" style={{ height: "500px" }}>
        {/* Navigation Menu */}
        <motion.div
          className={cn(
            "w-56 border-r-2 border-neutral-200 bg-neutral-50 p-3 overflow-y-auto",
            selectedPanel === "nav" && "bg-sage-50"
          )}
          onClick={() => setSelectedPanel("nav")}
          whileHover={{ backgroundColor: "rgb(243 244 246)" }}
        >
          <div className="space-y-1">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.label}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 transition-colors cursor-pointer",
                    highlightStep === item.step
                      ? "bg-terracotta-100 border border-terracotta-300"
                      : "hover:bg-neutral-100"
                  )}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <IconComponent className="h-4 w-4 text-neutral-600" />
                  <Text variant="small" className="text-neutral-700 font-medium">
                    {item.label}
                  </Text>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Canvas */}
        <motion.div
          className={cn(
            "flex-1 bg-neutral-100 p-6 overflow-hidden relative",
            selectedPanel === "canvas" && "bg-sage-50"
          )}
          onClick={() => setSelectedPanel("canvas")}
        >
          {/* Device Frame */}
          <div className="mx-auto w-72 overflow-hidden rounded-3xl border-4 border-neutral-800 bg-white shadow-xl" style={{ height: "450px" }}>
            {/* Status Bar */}
            <div className="flex items-center justify-between bg-neutral-900 px-4 py-2">
              <Text variant="small" className="text-white font-semibold">9:41</Text>
              <div className="flex gap-1">
                <div className="h-1 w-4 bg-white rounded-full" />
                <div className="h-1 w-4 bg-white rounded-full opacity-75" />
                <div className="h-1 w-4 bg-white rounded-full opacity-50" />
              </div>
            </div>

            {/* App Content Preview */}
            <div className="p-4 space-y-3">
              {highlightStep === "schema" && (
                <>
                  <div className="rounded-lg bg-terracotta-100 p-3 border border-terracotta-300">
                    <div className="flex items-center gap-2 mb-1">
                      <Flame className="h-3.5 w-3.5 text-terracotta-700" />
                      <Text variant="small" className="font-semibold text-terracotta-900">users</Text>
                    </div>
                    <Text variant="small" className="text-terracotta-700 text-xs">uid, email, displayName</Text>
                  </div>
                  <div className="rounded-lg bg-sage-100 p-3 border border-sage-300">
                    <div className="flex items-center gap-2 mb-1">
                      <Flame className="h-3.5 w-3.5 text-sage-700" />
                      <Text variant="small" className="font-semibold text-sage-900">posts</Text>
                    </div>
                    <Text variant="small" className="text-sage-700 text-xs">title, content, authorId</Text>
                  </div>
                  <div className="rounded-lg bg-terracotta-100 p-3 border border-terracotta-300">
                    <div className="flex items-center gap-2 mb-1">
                      <Flame className="h-3.5 w-3.5 text-terracotta-700" />
                      <Text variant="small" className="font-semibold text-terracotta-900">comments</Text>
                    </div>
                    <Text variant="small" className="text-terracotta-700 text-xs">postId, userId, text</Text>
                  </div>
                </>
              )}

              {highlightStep === "storyboard" && (
                <>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 rounded bg-neutral-100 border border-neutral-300">
                      <div className="h-8 w-8 rounded bg-terracotta-500" />
                      <Text variant="small" className="font-semibold text-neutral-900 text-xs">HomePage</Text>
                    </div>
                    <div className="ml-4 flex items-center gap-2">
                      <div className="w-px h-4 bg-neutral-300" />
                    </div>
                    <div className="ml-4 flex items-center gap-2 p-2 rounded bg-neutral-100 border border-neutral-300">
                      <div className="h-8 w-8 rounded bg-sage-500" />
                      <Text variant="small" className="font-semibold text-neutral-900 text-xs">ProfilePage</Text>
                    </div>
                    <div className="ml-4 flex items-center gap-2">
                      <div className="w-px h-4 bg-neutral-300" />
                    </div>
                    <div className="ml-4 flex items-center gap-2 p-2 rounded bg-neutral-100 border border-neutral-300">
                      <div className="h-8 w-8 rounded bg-terracotta-500" />
                      <Text variant="small" className="font-semibold text-neutral-900 text-xs">SettingsPage</Text>
                    </div>
                  </div>
                </>
              )}

              {highlightStep === "wireframe" && (
                <>
                  <div className="h-12 rounded-lg bg-neutral-200" />
                  <div className="h-32 rounded-lg bg-neutral-200" />
                  <div className="h-12 rounded-lg bg-neutral-200" />
                  <div className="h-12 rounded-lg bg-neutral-200" />
                </>
              )}

              {(highlightStep === "functional" || highlightStep === "api-calls") && (
                <>
                  <div className="rounded-lg bg-neutral-100 p-2 border border-neutral-300">
                    <Text variant="small" className="font-semibold text-neutral-900 text-xs mb-2">Login Button</Text>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs">
                        <Settings className="h-3 w-3 text-terracotta-600" />
                        <Text variant="small" className="text-neutral-700 text-xs">onTap → Validate Form</Text>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs">
                        <Globe className="h-3 w-3 text-sage-600" />
                        <Text variant="small" className="text-neutral-700 text-xs">API: authenticateUser()</Text>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs">
                        <Settings className="h-3 w-3 text-terracotta-600" />
                        <Text variant="small" className="text-neutral-700 text-xs">Navigate → HomePage</Text>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-sage-50 p-2 border border-sage-200">
                    <div className="flex items-center justify-between mb-1">
                      <Text variant="small" className="font-semibold text-sage-900 text-xs">Firestore Query</Text>
                      <Text variant="small" className="text-sage-700 text-xs">✓</Text>
                    </div>
                    <Text variant="small" className="text-sage-700 text-xs">users.where(uid == auth.uid)</Text>
                  </div>
                </>
              )}

              {highlightStep === "design" && (
                <>
                  <div className="rounded-lg bg-terracotta-600 p-3 flex items-center justify-between shadow-md">
                    <Text variant="small" className="font-bold text-white text-xs">My App</Text>
                    <div className="h-6 w-6 rounded-full bg-white/20" />
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-lg bg-white border-2 border-neutral-200 p-3 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-10 w-10 rounded-full bg-sage-500" />
                        <div className="flex-1">
                          <div className="h-2 w-20 rounded bg-neutral-300 mb-1" />
                          <div className="h-2 w-16 rounded bg-neutral-200" />
                        </div>
                      </div>
                      <div className="h-1.5 w-full rounded bg-neutral-200 mb-1" />
                      <div className="h-1.5 w-3/4 rounded bg-neutral-200" />
                    </div>
                    <div className="rounded-lg bg-white border-2 border-neutral-200 p-3 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-10 w-10 rounded-full bg-terracotta-500" />
                        <div className="flex-1">
                          <div className="h-2 w-20 rounded bg-neutral-300 mb-1" />
                          <div className="h-2 w-16 rounded bg-neutral-200" />
                        </div>
                      </div>
                      <div className="h-1.5 w-full rounded bg-neutral-200 mb-1" />
                      <div className="h-1.5 w-2/3 rounded bg-neutral-200" />
                    </div>
                  </div>
                </>
              )}

              {highlightStep === "custom" && (
                <>
                  <div className="rounded-lg bg-neutral-800 p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-3.5 w-3.5 text-terracotta-400" />
                      <Text variant="small" className="font-semibold text-terracotta-400 text-xs">Custom Function</Text>
                    </div>
                    <div className="font-mono text-xs space-y-0.5">
                      <Text variant="small" className="text-green-400">String formatPrice(</Text>
                      <Text variant="small" className="text-neutral-300 ml-2">double amount) {`{`}</Text>
                      <Text variant="small" className="text-neutral-300 ml-4">return '\$' +</Text>
                      <Text variant="small" className="text-neutral-300 ml-6">amount.toFixed(2);</Text>
                      <Text variant="small" className="text-neutral-300 ml-2">{`}`}</Text>
                    </div>
                  </div>
                </>
              )}

              {highlightStep === "cloud-functions" && (
                <>
                  <div className="rounded-lg bg-neutral-800 p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Cloud className="h-3.5 w-3.5 text-sage-400" />
                      <Text variant="small" className="font-semibold text-sage-400 text-xs">Cloud Function (GCP)</Text>
                    </div>
                    <div className="font-mono text-xs space-y-0.5">
                      <Text variant="small" className="text-green-400">exports.sendEmail =</Text>
                      <Text variant="small" className="text-neutral-300 ml-2">async (req, res) =&gt; {`{`}</Text>
                      <Text variant="small" className="text-neutral-300 ml-4">const data =</Text>
                      <Text variant="small" className="text-neutral-300 ml-6">await db.get();</Text>
                      <Text variant="small" className="text-neutral-300 ml-4">// Send email</Text>
                      <Text variant="small" className="text-neutral-300 ml-2">{`}`}</Text>
                    </div>
                  </div>
                </>
              )}

              {!highlightStep && (
                <>
                  <div className="h-16 rounded-lg bg-neutral-200" />
                  <div className="h-24 rounded-lg bg-neutral-200" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 rounded-lg bg-neutral-200" />
                    <div className="h-16 rounded-lg bg-neutral-200" />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Canvas Label */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="rounded-full bg-neutral-800 px-4 py-1">
              <Text variant="small" className="text-white font-medium">Canvas</Text>
            </div>
          </div>
        </motion.div>

        {/* Properties Panel */}
        <motion.div
          className={cn(
            "w-64 border-l-2 border-neutral-200 bg-neutral-50 p-3 overflow-y-auto",
            selectedPanel === "properties" && "bg-sage-50"
          )}
          onClick={() => setSelectedPanel("properties")}
          whileHover={{ backgroundColor: "rgb(243 244 246)" }}
        >
          <div className="space-y-3">
            <div>
              <Heading as="h4" variant="h3" className="mb-2 text-sm">
                Properties
              </Heading>
              <div className="space-y-2">
                <div className="rounded bg-white border border-neutral-200 p-2">
                  <Text variant="small" className="text-neutral-600">Width</Text>
                  <Text variant="small" className="font-semibold text-neutral-900">100%</Text>
                </div>
                <div className="rounded bg-white border border-neutral-200 p-2">
                  <Text variant="small" className="text-neutral-600">Height</Text>
                  <Text variant="small" className="font-semibold text-neutral-900">Auto</Text>
                </div>
                <div className="rounded bg-white border border-neutral-200 p-2">
                  <Text variant="small" className="text-neutral-600">Background</Text>
                  <div className="mt-1 h-6 rounded bg-terracotta-600 border border-terracotta-700" />
                </div>
              </div>
            </div>

            <div>
              <Heading as="h4" variant="h3" className="mb-2 text-sm">
                Actions
              </Heading>
              <div className="space-y-2">
                <div className="rounded bg-terracotta-50 border border-terracotta-200 p-2">
                  <Text variant="small" className="font-semibold text-terracotta-900">On Tap</Text>
                  <Text variant="small" className="text-terracotta-700">→ Navigate</Text>
                </div>
              </div>
            </div>

            <div>
              <Heading as="h4" variant="h3" className="mb-2 text-sm">
                Backend Query
              </Heading>
              <div className="rounded bg-sage-50 border border-sage-200 p-2">
                <Text variant="small" className="font-semibold text-sage-900">Firestore Query</Text>
                <Text variant="small" className="text-sage-700">Collection: users</Text>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Label */}
      <div className="border-t-2 border-neutral-200 bg-neutral-50 px-4 py-2">
        <Text variant="small" className="text-center text-neutral-600">
          {selectedPanel === "nav" && "Navigation Menu: Access all FlutterFlow features"}
          {selectedPanel === "canvas" && "Canvas: Build your app with visual preview"}
          {selectedPanel === "properties" && "Properties Panel: Customize selected elements"}
          {!selectedPanel && "Click any panel to explore • 4-panel interface for rapid development"}
        </Text>
      </div>
      </div>
      {/* End Desktop Mockup */}
    </div>
  );
};

FlutterFlowBuilder.displayName = "FlutterFlowBuilder";
