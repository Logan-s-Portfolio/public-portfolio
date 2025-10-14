import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
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
  metadataBase: new URL('https://loganbell.design'),
  title: {
    default: 'Logan Bell - Product Designer & Entrepreneur',
    template: '%s | Logan Bell'
  },
  description: "Product designer and entrepreneur based in Austin, TX. Specializing in design systems, AI-assisted development, and building digital products that solve real problems.",
  keywords: ['Logan Bell', 'Product Designer', 'Design Systems', 'AI Development', 'Entrepreneur', 'Austin TX', 'FlutterFlow', 'Next.js', 'UX Design'],
  authors: [{ name: 'Logan Bell', url: 'https://loganbell.design' }],
  creator: 'Logan Bell',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://loganbell.design',
    siteName: 'Logan Bell Portfolio',
    title: 'Logan Bell - Product Designer & Entrepreneur',
    description: "Product designer and entrepreneur based in Austin, TX. Specializing in design systems, AI-assisted development, and building digital products that solve real problems.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Logan Bell - Product Designer & Entrepreneur'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logan Bell - Product Designer & Entrepreneur',
    description: "Product designer and entrepreneur based in Austin, TX. Specializing in design systems, AI-assisted development, and building digital products.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',  // Add Google Search Console verification code later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Logan Bell',
    url: 'https://loganbell.design',
    image: 'https://loganbell.design/logan-bell.jpg',
    sameAs: [
      'https://www.linkedin.com/in/connerloganbell/',
    ],
    jobTitle: 'Product Designer & Entrepreneur',
    worksFor: {
      '@type': 'Organization',
      name: 'Duro',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    description: 'Product designer and entrepreneur based in Austin, TX. Specializing in design systems, AI-assisted development, and building digital products that solve real problems.',
    knowsAbout: [
      'Design Systems',
      'Product Design',
      'AI-Assisted Development',
      'FlutterFlow',
      'Next.js',
      'TypeScript',
      'UX Design',
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Logan Bell Portfolio',
    url: 'https://loganbell.design',
    description: 'Product designer and entrepreneur portfolio showcasing design systems, case studies, and AI-assisted development work.',
    author: {
      '@type': 'Person',
      name: 'Logan Bell',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
