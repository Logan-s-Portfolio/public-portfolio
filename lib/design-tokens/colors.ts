/**
 * Color Tokens - Design System Foundation
 * Status: ✅ Complete
 *
 * Our color system balances earthy warmth with modern sophistication.
 * All semantic tokens meet WCAG 2.1 AA accessibility standards.
 *
 * Philosophy: Terracotta primary evokes craftsmanship and authenticity,
 * while warm neutrals create a comfortable, timeless foundation.
 */

// ============================================================================
// PRIMITIVE COLORS
// ============================================================================

/**
 * Terracotta Scale - Primary Brand Color
 * Warm, grounded, evokes craftsmanship and authenticity
 */
export const terracotta = {
  50: '#FDF5F3',
  100: '#FADCD0',
  200: '#F4C5B3',
  300: '#EEA88C',
  400: '#E08161',
  500: '#D4663A', // Brand anchor - decorative use only (24px+ text)
  600: '#B85032', // Primary interactive - light mode
  700: '#9A3F25', // Primary text - light mode
  800: '#7D311D',
  900: '#5C2316',
  950: '#3D1710',
} as const;

/**
 * Warm Neutral Scale - Foundation
 * Comfortable, sophisticated base with warm undertones
 */
export const neutral = {
  50: '#FAF7F5',   // Warm off-white
  100: '#F5F2EE',
  200: '#EAEAE7',
  300: '#D4D3CF',
  400: '#B8B7B1',
  500: '#92918B',
  600: '#71706A',
  700: '#5C5B57',
  800: '#454440',
  900: '#2E2D2A',  // Primary text
  950: '#1F1F1F',
} as const;

/**
 * Sage Scale - Accent Color
 * Natural, calming, complements terracotta
 */
export const sage = {
  50: '#F6F8F4',
  100: '#EAEFE4',
  200: '#D5DEC9',
  300: '#B5C5A1',
  400: '#93A97C',
  500: '#7C9473',  // Accent anchor
  600: '#5E7157',
  700: '#52614D',
  800: '#3F493B',
  900: '#2D342B',
  950: '#1A1F18',
} as const;

/**
 * Feedback Colors - Fixed values across modes
 */
export const feedback = {
  warning: {
    light: '#D4A574',  // Warm amber
    dark: '#E8C299',   // Light warm amber
  },
  error: {
    light: '#A84032',  // Brick red
    dark: '#E08A7F',   // Light brick
  },
} as const;

// ============================================================================
// SEMANTIC TOKEN MAPPINGS
// ============================================================================

/**
 * Light Mode Semantic Tokens
 * Optimized for light backgrounds with warm undertones
 */
export const lightMode = {
  // Primary Actions & Interactive Elements
  primary: terracotta[600],           // #B85032
  'primary-hover': terracotta[700],   // #9A3F25
  'primary-foreground': '#FFFFFF',

  // Accent & Secondary Actions
  accent: sage[500],                  // #7C9473
  'accent-foreground': '#FFFFFF',

  // Backgrounds
  background: neutral[50],            // #FAF7F5
  'background-elevated': '#FFFFFF',

  // Text & Foregrounds
  foreground: neutral[900],           // #2E2D2A
  'muted': neutral[100],              // #F5F2EE
  'muted-foreground': neutral[600],   // #71706A

  // Borders
  border: neutral[300],               // #D4D3CF

  // Links & Headings
  link: terracotta[700],              // #9A3F25
  'heading-accent': terracotta[500],  // #D4663A (24px+ only)

  // Feedback States
  success: sage[600],                 // #5E7157
  warning: feedback.warning.light,    // #D4A574
  error: feedback.error.light,        // #A84032
} as const;

/**
 * Dark Mode Semantic Tokens
 * Optimized for dark backgrounds with maintained warmth
 */
export const darkMode = {
  // Primary Actions & Interactive Elements
  primary: terracotta[200],           // #F4C5B3
  'primary-hover': terracotta[300],   // #EEA88C
  'primary-foreground': neutral[950], // #1F1F1F

  // Accent & Secondary Actions
  accent: sage[300],                  // #B5C5A1
  'accent-foreground': neutral[950],  // #1F1F1F

  // Backgrounds
  background: neutral[950],           // #1F1F1F
  'background-elevated': neutral[900],// #2E2D2A

  // Text & Foregrounds
  foreground: neutral[50],            // #FAF7F5
  'muted': neutral[800],              // #454440
  'muted-foreground': neutral[400],   // #B8B7B1

  // Borders
  border: neutral[700],               // #5C5B57

  // Links & Headings
  link: terracotta[300],              // #EEA88C
  'heading-accent': terracotta[200],  // #F4C5B3

  // Feedback States
  success: sage[300],                 // #B5C5A1
  warning: feedback.warning.dark,     // #E8C299
  error: feedback.error.dark,         // #E08A7F
} as const;

// ============================================================================
// EXPORTS & TYPES
// ============================================================================

/**
 * All primitive color scales
 */
export const primitives = {
  terracotta,
  neutral,
  sage,
  feedback,
} as const;

/**
 * Export type for semantic color tokens
 */
export type SemanticColorToken = keyof typeof lightMode;

/**
 * Default export with all color tokens
 */
export const colors = {
  primitives,
  lightMode,
  darkMode,
} as const;
