/**
 * AtomicDesignShowcase Organism
 *
 * Exploded view animation showing atomic design decomposition
 * Takes a Hero organism and visually separates it into molecules then atoms
 * Design System: Terracotta/Sage accents, 8-point grid
 * Accessibility: Semantic HTML, ARIA labels
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { Avatar } from "@/components/atoms/Avatar";

type ViewMode = "complete" | "molecules" | "atoms";

interface SelectedPiece {
  type: "atom" | "molecule" | "organism";
  name: string;
  description: string;
}

export interface AtomicDesignShowcaseProps {
  className?: string;
}

export const AtomicDesignShowcase = ({ className }: AtomicDesignShowcaseProps) => {
  const [viewMode, setViewMode] = useState<ViewMode>("complete");
  const [selectedPiece, setSelectedPiece] = useState<SelectedPiece | null>(null);

  // Get positions based on view mode
  const getPositions = () => {
    if (viewMode === "complete") {
      return {
        avatar: { x: 0, y: 0, scale: 1 },
        badge1: { x: 120, y: 20, scale: 1 },
        badge2: { x: 240, y: 20, scale: 1 },
        badge3: { x: 360, y: 20, scale: 1 },
        eyebrow: { x: 0, y: 80, scale: 1 },
        headline: { x: 0, y: 120, scale: 1 },
        subheadline: { x: 0, y: 200, scale: 1 },
        primaryBtn: { x: 0, y: 280, scale: 1 },
        secondaryBtn: { x: 180, y: 280, scale: 1 },
      };
    } else if (viewMode === "molecules") {
      return {
        avatar: { x: -150, y: -80, scale: 1.1 },
        badge1: { x: 100, y: -100, scale: 1.1 },
        badge2: { x: 250, y: -120, scale: 1.1 },
        badge3: { x: 400, y: -100, scale: 1.1 },
        eyebrow: { x: -100, y: 80, scale: 1.05 },
        headline: { x: 50, y: 150, scale: 1.05 },
        subheadline: { x: -80, y: 250, scale: 1.05 },
        primaryBtn: { x: -50, y: 350, scale: 1.1 },
        secondaryBtn: { x: 220, y: 370, scale: 1.1 },
      };
    } else {
      return {
        avatar: { x: -200, y: -150, scale: 1.2 },
        badge1: { x: 80, y: -180, scale: 1.2 },
        badge2: { x: 250, y: -200, scale: 1.2 },
        badge3: { x: 420, y: -180, scale: 1.2 },
        eyebrow: { x: -150, y: 50, scale: 1.1 },
        headline: { x: 100, y: 180, scale: 1.1 },
        subheadline: { x: -120, y: 300, scale: 1.1 },
        primaryBtn: { x: -100, y: 420, scale: 1.2 },
        secondaryBtn: { x: 250, y: 450, scale: 1.2 },
      };
    }
  };

  const positions = getPositions();

  return (
    <div className={cn("space-y-8", className)}>
      {/* Header */}
      <div className="text-center">
        <Heading as="h2" variant="h2" className="mb-4">
          Exploded View: Hero Organism
        </Heading>
        <Text variant="lead" className="text-neutral-600 max-w-2xl mx-auto">
          Watch a real Hero component from our Storybook explode into its atomic parts.
          Click the buttons to see molecules separate, then atoms.
        </Text>
      </div>

      {/* View Mode Controls */}
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setViewMode("complete")}
          className={cn(
            "rounded-lg px-6 py-3 font-inter text-sm font-semibold transition-all",
            viewMode === "complete"
              ? "bg-neutral-800 text-white shadow-md"
              : "bg-white border-2 border-neutral-200 text-neutral-700 hover:border-neutral-300"
          )}
        >
          Assemble
        </button>
        <button
          onClick={() => setViewMode("molecules")}
          className={cn(
            "rounded-lg px-6 py-3 font-inter text-sm font-semibold transition-all",
            viewMode === "molecules"
              ? "bg-sage-600 text-white shadow-md"
              : "bg-white border-2 border-neutral-200 text-neutral-700 hover:border-neutral-300"
          )}
        >
          Explode Molecules
        </button>
        <button
          onClick={() => setViewMode("atoms")}
          className={cn(
            "rounded-lg px-6 py-3 font-inter text-sm font-semibold transition-all",
            viewMode === "atoms"
              ? "bg-terracotta-600 text-white shadow-md"
              : "bg-white border-2 border-neutral-200 text-neutral-700 hover:border-neutral-300"
          )}
        >
          Explode Atoms
        </button>
      </div>

      {/* Exploded View Canvas */}
      <div className="relative mx-auto" style={{ minHeight: "700px", maxWidth: "1000px" }}>
        <div className="relative flex items-center justify-center" style={{ minHeight: "700px" }}>

          {/* Avatar Atom */}
          <motion.div
            className="absolute"
            style={{ left: "50%", top: "50%" }}
            animate={{
              x: positions.avatar.x,
              y: positions.avatar.y,
              scale: positions.avatar.scale,
            }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            onClick={() => setSelectedPiece({
              type: "atom",
              name: "Avatar",
              description: "A circular avatar component that displays initials or an image"
            })}
          >
            <div className={cn(
              "cursor-pointer rounded-full transition-all",
              viewMode !== "complete" && "ring-4 ring-terracotta-500 ring-offset-4"
            )}>
              <Avatar size="lg" fallback="LB" alt="Logan Bell" />
            </div>
            {viewMode !== "complete" && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-terracotta-600 text-white px-2 py-1 rounded text-xs font-semibold">
                Avatar Atom
              </div>
            )}
          </motion.div>

          {/* Badge Atoms */}
          <motion.div
            className="absolute"
            style={{ left: "50%", top: "50%" }}
            animate={{
              x: positions.badge1.x,
              y: positions.badge1.y,
              scale: positions.badge1.scale,
            }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            onClick={() => setSelectedPiece({
              type: "atom",
              name: "Badge #1",
              description: "A badge component for displaying tags or status"
            })}
          >
            <div className={cn(
              "cursor-pointer transition-all",
              viewMode !== "complete" && "ring-2 ring-terracotta-500 ring-offset-2 rounded-full"
            )}>
              <Badge variant="terracotta" size="sm">React</Badge>
            </div>
            {viewMode === "atoms" && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-terracotta-600 text-white px-2 py-1 rounded text-xs font-semibold">
                Badge
              </div>
            )}
          </motion.div>

          <motion.div
            className="absolute"
            style={{ left: "50%", top: "50%" }}
            animate={{
              x: positions.badge2.x,
              y: positions.badge2.y,
              scale: positions.badge2.scale,
            }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            onClick={() => setSelectedPiece({
              type: "atom",
              name: "Badge #2",
              description: "A badge component for displaying tags or status"
            })}
          >
            <div className={cn(
              "cursor-pointer transition-all",
              viewMode !== "complete" && "ring-2 ring-terracotta-500 ring-offset-2 rounded-full"
            )}>
              <Badge variant="sage" size="sm">Next.js</Badge>
            </div>
            {viewMode === "atoms" && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-terracotta-600 text-white px-2 py-1 rounded text-xs font-semibold">
                Badge
              </div>
            )}
          </motion.div>

          <motion.div
            className="absolute"
            style={{ left: "50%", top: "50%" }}
            animate={{
              x: positions.badge3.x,
              y: positions.badge3.y,
              scale: positions.badge3.scale,
            }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            onClick={() => setSelectedPiece({
              type: "atom",
              name: "Badge #3",
              description: "A badge component for displaying tags or status"
            })}
          >
            <div className={cn(
              "cursor-pointer transition-all",
              viewMode !== "complete" && "ring-2 ring-terracotta-500 ring-offset-2 rounded-full"
            )}>
              <Badge variant="neutral" size="sm">TypeScript</Badge>
            </div>
            {viewMode === "atoms" && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-terracotta-600 text-white px-2 py-1 rounded text-xs font-semibold">
                Badge
              </div>
            )}
          </motion.div>

          {/* Eyebrow Text Atom */}
          <motion.div
            className="absolute"
            style={{ left: "50%", top: "50%" }}
            animate={{
              x: positions.eyebrow.x,
              y: positions.eyebrow.y,
              scale: positions.eyebrow.scale,
            }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            onClick={() => setSelectedPiece({
              type: "atom",
              name: "Text (Eyebrow)",
              description: "Small text component used for labels and captions"
            })}
          >
            <div className={cn(
              "cursor-pointer transition-all",
              viewMode !== "complete" && "ring-2 ring-terracotta-500 ring-offset-2 rounded px-2"
            )}>
              <Text variant="caption" className="text-neutral-600 uppercase tracking-wide">
                Full-Stack Engineer
              </Text>
            </div>
            {viewMode === "atoms" && (
              <div className="absolute -top-8 left-0 whitespace-nowrap bg-terracotta-600 text-white px-2 py-1 rounded text-xs font-semibold">
                Text Atom
              </div>
            )}
          </motion.div>

          {/* Headline Atom */}
          <motion.div
            className="absolute"
            style={{ left: "50%", top: "50%" }}
            animate={{
              x: positions.headline.x,
              y: positions.headline.y,
              scale: positions.headline.scale,
            }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            onClick={() => setSelectedPiece({
              type: "atom",
              name: "Heading (Hero)",
              description: "Large heading component for page titles"
            })}
          >
            <div className={cn(
              "cursor-pointer transition-all",
              viewMode !== "complete" && "ring-2 ring-terracotta-500 ring-offset-2 rounded px-2"
            )}>
              <Heading as="h1" variant="hero" className="whitespace-nowrap">
                Logan Bell
              </Heading>
            </div>
            {viewMode === "atoms" && (
              <div className="absolute -top-8 left-0 whitespace-nowrap bg-terracotta-600 text-white px-2 py-1 rounded text-xs font-semibold">
                Heading Atom
              </div>
            )}
          </motion.div>

          {/* Subheadline Atom */}
          <motion.div
            className="absolute"
            style={{ left: "50%", top: "50%" }}
            animate={{
              x: positions.subheadline.x,
              y: positions.subheadline.y,
              scale: positions.subheadline.scale,
            }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            onClick={() => setSelectedPiece({
              type: "atom",
              name: "Text (Body)",
              description: "Body text component for paragraphs and descriptions"
            })}
          >
            <div className={cn(
              "cursor-pointer transition-all max-w-md",
              viewMode !== "complete" && "ring-2 ring-terracotta-500 ring-offset-2 rounded px-2 py-1"
            )}>
              <Text variant="lead" className="text-neutral-700">
                Building delightful experiences with code
              </Text>
            </div>
            {viewMode === "atoms" && (
              <div className="absolute -top-8 left-0 whitespace-nowrap bg-terracotta-600 text-white px-2 py-1 rounded text-xs font-semibold">
                Text Atom
              </div>
            )}
          </motion.div>

          {/* Primary Button Atom */}
          <motion.div
            className="absolute"
            style={{ left: "50%", top: "50%" }}
            animate={{
              x: positions.primaryBtn.x,
              y: positions.primaryBtn.y,
              scale: positions.primaryBtn.scale,
            }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            onClick={() => setSelectedPiece({
              type: "atom",
              name: "Button (Primary)",
              description: "Primary action button with terracotta styling"
            })}
          >
            <div className={cn(
              "cursor-pointer transition-all",
              viewMode !== "complete" && "ring-2 ring-terracotta-500 ring-offset-4 rounded-lg"
            )}>
              <Button variant="primary" size="lg">View Work</Button>
            </div>
            {viewMode !== "complete" && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-terracotta-600 text-white px-2 py-1 rounded text-xs font-semibold">
                Button Atom
              </div>
            )}
          </motion.div>

          {/* Secondary Button Atom */}
          <motion.div
            className="absolute"
            style={{ left: "50%", top: "50%" }}
            animate={{
              x: positions.secondaryBtn.x,
              y: positions.secondaryBtn.y,
              scale: positions.secondaryBtn.scale,
            }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            onClick={() => setSelectedPiece({
              type: "atom",
              name: "Button (Secondary)",
              description: "Secondary action button with outline styling"
            })}
          >
            <div className={cn(
              "cursor-pointer transition-all",
              viewMode !== "complete" && "ring-2 ring-terracotta-500 ring-offset-4 rounded-lg"
            )}>
              <Button variant="outline" size="lg">Contact Me</Button>
            </div>
            {viewMode !== "complete" && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-terracotta-600 text-white px-2 py-1 rounded text-xs font-semibold">
                Button Atom
              </div>
            )}
          </motion.div>

        </div>
      </div>

      {/* Info Panel */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {selectedPiece ? (
            <motion.div
              key="selected"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={cn(
                "rounded-lg border-2 p-6",
                selectedPiece.type === "atom" && "border-terracotta-200 bg-terracotta-50",
                selectedPiece.type === "molecule" && "border-sage-200 bg-sage-50"
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <Heading as="h3" variant="section">
                  {selectedPiece.name}
                </Heading>
                <button
                  onClick={() => setSelectedPiece(null)}
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  ✕
                </button>
              </div>
              <Text variant="body" className="text-neutral-700">
                {selectedPiece.description}
              </Text>
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="rounded-lg border-2 border-neutral-200 bg-neutral-50 p-6 text-center"
            >
              <Text variant="body" className="text-neutral-600">
                {viewMode === "complete" && "This is a complete Hero organism. Click 'Explode' to separate it!"}
                {viewMode === "molecules" && "Molecules separated! Each component is now floating independently."}
                {viewMode === "atoms" && "Fully deconstructed! Click any piece to learn about it."}
              </Text>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

AtomicDesignShowcase.displayName = "AtomicDesignShowcase";
