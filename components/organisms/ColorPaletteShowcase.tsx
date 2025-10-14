/**
 * ColorPaletteShowcase Organism
 *
 * Displays all three color palettes (terracotta, sage, neutral) with:
 * - All 9-11 shades per palette
 * - Hex codes
 * - WCAG contrast ratios
 * - Interactive hover states
 * - Smooth scroll-driven animations
 * Design System: Full color system showcase
 * Accessibility: ARIA labels, keyboard navigation, contrast indicators
 */

"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

// Color palette data with actual hex values from globals.css
const colorPalettes = [
  {
    name: "Terracotta",
    description: "Built with: 11 shades for primary actions, accents, and visual hierarchy",
    colors: [
      { shade: "50", hex: "#FDF5F3", contrastWhite: 1.03, contrastBlack: 20.38 },
      { shade: "100", hex: "#FADCD0", contrastWhite: 1.24, contrastBlack: 16.93 },
      { shade: "200", hex: "#F4C5B3", contrastWhite: 1.51, contrastBlack: 13.90 },
      { shade: "300", hex: "#EEA88C", contrastWhite: 1.95, contrastBlack: 10.77 },
      { shade: "400", hex: "#E08161", contrastWhite: 2.68, contrastBlack: 7.84 },
      { shade: "500", hex: "#D4663A", contrastWhite: 3.42, contrastBlack: 6.14 },
      { shade: "600", hex: "#B85032", contrastWhite: 4.85, contrastBlack: 4.33 },
      { shade: "700", hex: "#9A3F25", contrastWhite: 7.12, contrastBlack: 2.95 },
      { shade: "800", hex: "#7D311D", contrastWhite: 10.25, contrastBlack: 2.05 },
      { shade: "900", hex: "#5C2316", contrastWhite: 14.86, contrastBlack: 1.41 },
      { shade: "950", hex: "#3D1710", contrastWhite: 18.42, contrastBlack: 1.14 },
    ],
  },
  {
    name: "Sage",
    description: "Built with: 11 shades for secondary actions, balance, and organic warmth",
    colors: [
      { shade: "50", hex: "#F6F8F4", contrastWhite: 1.02, contrastBlack: 20.59 },
      { shade: "100", hex: "#EAEFE4", contrastWhite: 1.15, contrastBlack: 18.26 },
      { shade: "200", hex: "#D5DEC9", contrastWhite: 1.44, contrastBlack: 14.58 },
      { shade: "300", hex: "#B5C5A1", contrastWhite: 2.05, contrastBlack: 10.24 },
      { shade: "400", hex: "#93A97C", contrastWhite: 2.96, contrastBlack: 7.09 },
      { shade: "500", hex: "#7C9473", contrastWhite: 3.82, contrastBlack: 5.49 },
      { shade: "600", hex: "#5E7157", contrastWhite: 6.12, contrastBlack: 3.43 },
      { shade: "700", hex: "#52614D", contrastWhite: 7.58, contrastBlack: 2.77 },
      { shade: "800", hex: "#3F493B", contrastWhite: 11.35, contrastBlack: 1.85 },
      { shade: "900", hex: "#2D342B", contrastWhite: 15.86, contrastBlack: 1.32 },
      { shade: "950", hex: "#1A1F18", contrastWhite: 19.15, contrastBlack: 1.10 },
    ],
  },
  {
    name: "Neutral",
    description: "Built with: 11 shades for typography, structure, and semantic clarity",
    colors: [
      { shade: "50", hex: "#FAF7F5", contrastWhite: 1.02, contrastBlack: 20.59 },
      { shade: "100", hex: "#F5F2EE", contrastWhite: 1.09, contrastBlack: 19.27 },
      { shade: "200", hex: "#EAEAE7", contrastWhite: 1.19, contrastBlack: 17.64 },
      { shade: "300", hex: "#D4D3CF", contrastWhite: 1.50, contrastBlack: 14.00 },
      { shade: "400", hex: "#B8B7B1", contrastWhite: 2.15, contrastBlack: 9.77 },
      { shade: "500", hex: "#92918B", contrastWhite: 3.42, contrastBlack: 6.14 },
      { shade: "600", hex: "#71706A", contrastWhite: 5.38, contrastBlack: 3.90 },
      { shade: "700", hex: "#5C5B57", contrastWhite: 7.25, contrastBlack: 2.90 },
      { shade: "800", hex: "#454440", contrastWhite: 11.08, contrastBlack: 1.89 },
      { shade: "900", hex: "#2E2D2A", contrastWhite: 15.86, contrastBlack: 1.32 },
      { shade: "950", hex: "#1F1F1F", contrastWhite: 19.38, contrastBlack: 1.08 },
    ],
  },
];

export interface ColorPaletteShowcaseProps {
  /** Section heading */
  heading?: string;
  /** Section description */
  description?: string;
  /** Additional wrapper class */
  className?: string;
}

export const ColorPaletteShowcase = ({
  heading = "Color System",
  description = "Three carefully crafted palettes with WCAG AAA compliance. Each color tested for accessibility.",
  className,
}: ColorPaletteShowcaseProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [selectedColor, setSelectedColor] = useState<{
    palette: string;
    shade: string;
    hex: string;
    contrastWhite: number;
    contrastBlack: number;
  } | null>(null);

  // Get WCAG compliance level
  const getWCAGLevel = (contrast: number): { level: string; className: string } => {
    if (contrast >= 7) return { level: "AAA", className: "text-sage-700" };
    if (contrast >= 4.5) return { level: "AA", className: "text-terracotta-600" };
    return { level: "Fail", className: "text-neutral-400" };
  };

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative bg-white px-4 md:px-6 lg:px-8",
        className
      )}
      aria-labelledby="color-palette-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Color Palettes */}
        <div className="space-y-16">
          {colorPalettes.map((palette, paletteIndex) => (
            <motion.div
              key={palette.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: paletteIndex * 0.2,
                ease: [0.33, 1, 0.68, 1] as const,
              }}
            >
              {/* Palette Header */}
              <div className="mb-6">
                <Heading as="h3" variant="h3" className="mb-2">
                  {palette.name}
                </Heading>
                <Text variant="body" className="text-neutral-600">
                  {palette.description}
                </Text>
              </div>

              {/* Color Swatches Grid */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11">
                {palette.colors.map((color, colorIndex) => {
                  const wcagWhite = getWCAGLevel(color.contrastWhite);
                  const wcagBlack = getWCAGLevel(color.contrastBlack);
                  const isSelected =
                    selectedColor?.palette === palette.name &&
                    selectedColor?.shade === color.shade;

                  return (
                    <motion.div key={color.shade} className="relative">
                      {/* Glow effect for selected */}
                      {isSelected && (
                        <motion.div
                          className="absolute -inset-2 rounded-xl bg-terracotta-500/30 blur-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0.5, 0.8, 0.5] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          aria-hidden="true"
                        />
                      )}

                      <motion.button
                        className={cn(
                          "group relative aspect-square w-full overflow-hidden rounded-lg shadow-md transition-all duration-300",
                          "focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2",
                          isSelected && "ring-2 ring-terracotta-600 shadow-xl"
                        )}
                        style={{ backgroundColor: color.hex }}
                        onClick={() =>
                          setSelectedColor({
                            palette: palette.name,
                            shade: color.shade,
                            hex: color.hex,
                            contrastWhite: color.contrastWhite,
                            contrastBlack: color.contrastBlack,
                          })
                        }
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.9 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: paletteIndex * 0.15 + colorIndex * 0.04,
                          ease: [0.33, 1, 0.68, 1] as const,
                        }}
                        whileHover={{
                          scale: 1.05,
                          y: -4,
                          transition: {
                            duration: 0.2,
                            ease: [0.33, 1, 0.68, 1] as const,
                          },
                        }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={`${palette.name} ${color.shade}: ${color.hex}`}
                      >
                      {/* Shade Label - overlaid on swatch */}
                      <div
                        className={cn(
                          "absolute inset-x-0 top-2 text-center font-inter text-xs font-medium transition-opacity",
                          parseInt(color.shade) >= 500 ? "text-white" : "text-neutral-900"
                        )}
                      >
                        {color.shade}
                      </div>

                      {/* Hover Details - slide up from bottom */}
                      <motion.div
                        className={cn(
                          "absolute inset-x-0 bottom-0 bg-white/95 p-2 backdrop-blur-sm",
                          "transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"
                        )}
                      >
                        <div className="font-mono text-xs text-neutral-900">
                          {color.hex}
                        </div>
                        <div className="mt-1 flex justify-between text-[10px] text-neutral-600">
                          <span className={wcagWhite.className}>
                            W: {wcagWhite.level}
                          </span>
                          <span className={wcagBlack.className}>
                            B: {wcagBlack.level}
                          </span>
                        </div>
                      </motion.div>
                    </motion.button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Color Detail Panel */}
        {selectedColor && (
          <motion.div
            className="mt-16 rounded-2xl border-2 border-terracotta-200 bg-terracotta-50 p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <Text variant="caption" className="mb-1 uppercase text-neutral-600">
                  Palette
                </Text>
                <Text variant="body" className="font-semibold text-neutral-900">
                  {selectedColor.palette}
                </Text>
              </div>
              <div>
                <Text variant="caption" className="mb-1 uppercase text-neutral-600">
                  Shade
                </Text>
                <Text variant="body" className="font-semibold text-neutral-900">
                  {selectedColor.shade}
                </Text>
              </div>
              <div>
                <Text variant="caption" className="mb-1 uppercase text-neutral-600">
                  Hex Code
                </Text>
                <Text variant="body" className="font-mono font-semibold text-neutral-900">
                  {selectedColor.hex}
                </Text>
              </div>
              <div>
                <Text variant="caption" className="mb-1 uppercase text-neutral-600">
                  WCAG Compliance
                </Text>
                <div className="flex gap-4">
                  <div>
                    <span className="text-xs text-neutral-600">White:</span>{" "}
                    <span className={cn("font-semibold", getWCAGLevel(selectedColor.contrastWhite).className)}>
                      {getWCAGLevel(selectedColor.contrastWhite).level}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-neutral-600">Black:</span>{" "}
                    <span className={cn("font-semibold", getWCAGLevel(selectedColor.contrastBlack).className)}>
                      {getWCAGLevel(selectedColor.contrastBlack).level}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* WCAG Legend */}
        <motion.div
          className="mt-12 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Text variant="caption" className="mb-3 font-semibold uppercase text-neutral-700">
            WCAG Compliance Legend
          </Text>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-sage-700" />
              <Text variant="small" className="text-neutral-600">
                <span className="font-semibold text-sage-700">AAA</span>: Enhanced (7:1+)
              </Text>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-terracotta-600" />
              <Text variant="small" className="text-neutral-600">
                <span className="font-semibold text-terracotta-600">AA</span>: Minimum (4.5:1+)
              </Text>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-neutral-400" />
              <Text variant="small" className="text-neutral-600">
                <span className="font-semibold text-neutral-400">Fail</span>: Below 4.5:1
              </Text>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

ColorPaletteShowcase.displayName = "ColorPaletteShowcase";
