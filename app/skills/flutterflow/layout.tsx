import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'FlutterFlow Mobile Development',
  description: "Production-ready mobile apps built at unprecedented speed through visual development, database-first architecture, and AI-driven custom code. Cross-platform apps with Flutter and Firebase.",
  keywords: ['FlutterFlow', 'Mobile Development', 'Flutter', 'Firebase', 'Cross-Platform', 'No-Code', 'AI Development'],
  openGraph: {
    title: 'FlutterFlow | Logan Bell',
    description: "10x faster mobile development with FlutterFlow, Firebase, and AI-driven custom code.",
    url: 'https://loganbell.design/skills/flutterflow',
  },
};

export default function FlutterFlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
