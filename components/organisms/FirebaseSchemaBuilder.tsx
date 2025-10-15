/**
 * FirebaseSchemaBuilder Organism
 *
 * Visual representation of Firebase schema creation in FlutterFlow
 * Shows collections, fields, and data types
 * Design System: Firebase-inspired with terracotta/sage accents
 * Accessibility: Semantic HTML, ARIA labels
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Text } from "@/components/atoms/Text";
import { Heading } from "@/components/atoms/Heading";
import {
  Flame,
  User,
  FileText as FileTextIcon,
  MessageCircle,
  Sparkles,
  Edit,
  Trash2,
} from "lucide-react";

export interface FirebaseSchemaBuilderProps {
  /** Additional wrapper class */
  className?: string;
}

interface Collection {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  fields: { name: string; type: string; isList?: boolean }[];
  color: "terracotta" | "sage";
}

export const FirebaseSchemaBuilder = ({
  className,
}: FirebaseSchemaBuilderProps) => {
  const [selectedCollection, setSelectedCollection] = useState<string | null>("users");
  const [expandedCollection, setExpandedCollection] = useState<string | null>("users");

  const collections: Collection[] = [
    {
      name: "users",
      icon: User,
      color: "terracotta",
      fields: [
        { name: "uid", type: "String" },
        { name: "email", type: "String" },
        { name: "displayName", type: "String" },
        { name: "photoUrl", type: "String" },
        { name: "createdAt", type: "Timestamp" },
        { name: "subscriptionTier", type: "String" },
      ],
    },
    {
      name: "posts",
      icon: FileTextIcon,
      color: "sage",
      fields: [
        { name: "title", type: "String" },
        { name: "content", type: "String" },
        { name: "authorId", type: "String" },
        { name: "tags", type: "String", isList: true },
        { name: "publishedAt", type: "Timestamp" },
        { name: "likeCount", type: "Integer" },
      ],
    },
    {
      name: "comments",
      icon: MessageCircle,
      color: "terracotta",
      fields: [
        { name: "postId", type: "String" },
        { name: "userId", type: "String" },
        { name: "text", type: "String" },
        { name: "createdAt", type: "Timestamp" },
      ],
    },
  ];

  const selected = collections.find((c) => c.name === selectedCollection);

  const toggleExpanded = (collectionName: string) => {
    setExpandedCollection(expandedCollection === collectionName ? null : collectionName);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border-2 border-neutral-200 bg-white shadow-lg",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-terracotta-700 bg-terracotta-600 px-4 py-3 shadow-md">
        <div className="flex items-center gap-3">
          <Flame className="h-6 w-6 text-white" />
          <Heading as="h3" variant="h3" className="text-white">
            Firestore Database Schema
          </Heading>
        </div>
        <button className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 shadow-sm hover:bg-neutral-50 transition-colors">
          <Sparkles className="h-3.5 w-3.5 text-terracotta-700" />
          <Text variant="small" className="font-semibold text-terracotta-700">
            AI Gen Schema
          </Text>
        </button>
      </div>

      {/* Mobile Accordion View - Only visible on mobile */}
      <div className="md:hidden p-4 space-y-3">
        {collections.map((collection) => {
          const IconComponent = collection.icon;
          const isExpanded = expandedCollection === collection.name;
          return (
            <div key={collection.name}>
              <button
                onClick={() => toggleExpanded(collection.name)}
                className={cn(
                  "w-full rounded-lg border-2 p-4 text-left transition-all",
                  collection.color === "terracotta"
                    ? "bg-terracotta-50 border-terracotta-200 hover:border-terracotta-300"
                    : "bg-sage-50 border-sage-200 hover:border-sage-300"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg",
                        collection.color === "terracotta"
                          ? "bg-terracotta-600"
                          : "bg-sage-600"
                      )}
                    >
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <Text variant="small" className="font-semibold text-neutral-900">
                        {collection.name}
                      </Text>
                      <Text variant="small" className="text-neutral-600">
                        {collection.fields.length} fields
                      </Text>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Text variant="small" className="text-neutral-600">▼</Text>
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 space-y-2 pl-4">
                      {collection.fields.map((field) => (
                        <div
                          key={field.name}
                          className={cn(
                            "rounded-lg border p-3",
                            collection.color === "terracotta"
                              ? "bg-terracotta-100 border-terracotta-200"
                              : "bg-sage-100 border-sage-200"
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <Text variant="small" className="font-mono font-semibold text-neutral-900">
                                  {field.name}
                                </Text>
                                {field.isList && (
                                  <span className="rounded bg-neutral-700 px-2 py-0.5 text-xs font-bold text-white">
                                    LIST
                                  </span>
                                )}
                              </div>
                              <Text variant="small" className="text-neutral-600 mt-0.5">
                                {field.type}
                              </Text>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Desktop Mockup - Only visible on desktop */}
      <div className="hidden md:block">
      <div className="flex" style={{ minHeight: "400px" }}>
        {/* Collections List */}
        <div className="w-64 border-r-2 border-neutral-200 bg-neutral-50 p-4">
          <div className="mb-3 flex items-center justify-between">
            <Text variant="small" className="font-semibold text-neutral-700 uppercase tracking-wide">
              Collections
            </Text>
            <button
              className="rounded-full bg-terracotta-600 text-white w-6 h-6 flex items-center justify-center text-sm font-bold hover:bg-terracotta-700 transition-colors shadow-sm"
              aria-label="Add collection"
            >
              +
            </button>
          </div>

          <div className="space-y-2">
            {collections.map((collection) => {
              const IconComponent = collection.icon;
              return (
                <motion.button
                  key={collection.name}
                  className={cn(
                    "w-full flex items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors",
                    selectedCollection === collection.name
                      ? collection.color === "terracotta"
                        ? "bg-terracotta-100 border-2 border-terracotta-400"
                        : "bg-sage-100 border-2 border-sage-400"
                      : "bg-white border-2 border-neutral-200 hover:border-neutral-300"
                  )}
                  onClick={() => setSelectedCollection(collection.name)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <IconComponent className="h-5 w-5 text-neutral-700" />
                  <div className="flex-1 min-w-0">
                    <Text variant="small" className="font-semibold text-neutral-900 truncate">
                      {collection.name}
                    </Text>
                    <Text variant="small" className="text-neutral-600">
                      {collection.fields.length} fields
                    </Text>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-6 rounded-lg bg-sage-50 border border-sage-200 p-3">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-3.5 w-3.5 text-sage-700" />
              <Text variant="small" className="font-semibold text-sage-900">
                Pro Tip
              </Text>
            </div>
            <Text variant="small" className="text-sage-700">
              Use AI Gen Schema: "Create a collection for user profiles with subscription tiers"
            </Text>
          </div>
        </div>

        {/* Field Details */}
        <div className="flex-1 p-6">
          <AnimatePresence mode="wait">
            {selected && (
              <motion.div
                key={selected.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg",
                      selected.color === "terracotta"
                        ? "bg-terracotta-100"
                        : "bg-sage-100"
                    )}>
                      <selected.icon className={cn(
                        "h-5 w-5",
                        selected.color === "terracotta"
                          ? "text-terracotta-700"
                          : "text-sage-700"
                      )} />
                    </div>
                    <Heading as="h3" variant="h3" className="text-neutral-900">
                      {selected.name} Collection
                    </Heading>
                  </div>
                  <Text variant="body" className="text-neutral-600">
                    Document schema with {selected.fields.length} fields
                  </Text>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-4">
                    <Text variant="small" className="font-semibold text-neutral-700 uppercase tracking-wide">
                      Fields
                    </Text>
                    <button
                      className="rounded-lg bg-neutral-200 px-3 py-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-300 transition-colors shadow-sm"
                    >
                      + Add Field
                    </button>
                  </div>

                  {selected.fields.map((field, index) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={cn(
                        "flex items-center justify-between rounded-lg border-2 p-3",
                        selected.color === "terracotta"
                          ? "bg-terracotta-50 border-terracotta-200"
                          : "bg-sage-50 border-sage-200"
                      )}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Text variant="small" className="font-mono font-semibold text-neutral-900">
                            {field.name}
                          </Text>
                          {field.isList && (
                            <span className="rounded bg-neutral-700 px-2 py-0.5 text-xs font-bold text-white">
                              LIST
                            </span>
                          )}
                        </div>
                        <Text variant="small" className="text-neutral-600 mt-0.5">
                          Type: {field.type}
                        </Text>
                      </div>
                      <div className="flex gap-2">
                        <button
                          className="text-neutral-400 hover:text-neutral-600 transition-colors"
                          aria-label="Edit field"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          className="text-neutral-400 hover:text-red-600 transition-colors"
                          aria-label="Delete field"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Data Type Reference */}
                <div className="mt-6 rounded-lg bg-neutral-100 border-2 border-neutral-200 p-4">
                  <Text variant="small" className="font-semibold text-neutral-700 mb-3">
                    Available Data Types
                  </Text>
                  <div className="grid grid-cols-2 gap-2">
                    {["String", "Integer", "Double", "Boolean", "Timestamp", "LatLng", "DocumentRef", "JSON"].map((type) => (
                      <div key={type} className="rounded-lg bg-white px-3 py-1.5 border border-neutral-200 shadow-sm">
                        <Text variant="small" className="font-mono text-neutral-700">
                          {type}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t-2 border-neutral-200 bg-neutral-50 px-4 py-2">
        <Text variant="small" className="text-center text-neutral-600">
          Field names cannot be changed after creation • Use AI Gen for complex schemas
        </Text>
      </div>
      </div>
      {/* End Desktop Mockup */}
    </div>
  );
};

FirebaseSchemaBuilder.displayName = "FirebaseSchemaBuilder";
