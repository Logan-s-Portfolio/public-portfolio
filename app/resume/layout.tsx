import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Resume',
  description: "Product-focused founder who leverages AI-driven development to ship production-ready platforms. 4+ years of marketplace and partnership experience with modern AI-assisted workflows.",
  openGraph: {
    title: 'Resume | Logan Bell',
    description: "Product Builder & SaaS Founder with 4+ years of marketplace experience. AI-driven development, design systems, and full-stack platforms.",
    url: 'https://loganbell.design/resume',
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
