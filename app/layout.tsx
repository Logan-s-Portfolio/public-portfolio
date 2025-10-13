import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/**
 * Fraunces - Variable Serif Display Font
 * Used for large headings (48px+) and display elements
 * Variable font technology: Weight, Optical Size, Softness axes
 */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/**
 * Inter - Sans-Serif Body Font
 * Used for body text, UI elements, smaller headings
 * Industry-standard readability with excellent OpenType features
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/**
 * JetBrains Mono - Monospace Code Font
 * Used for code snippets and technical content
 * Modern, readable, with programming ligatures
 */
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Logan's Portfolio - Design Systems Architect",
  description: "Full-stack developer and design systems architect building world-class, accessible interfaces from first principles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
