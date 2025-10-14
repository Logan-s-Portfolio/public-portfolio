import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact',
  description: "Let's connect! Schedule a meeting to discuss new projects, creative ideas, or opportunities to collaborate. Available for 30-min consultations, coffee meetings, and portfolio reviews.",
  openGraph: {
    title: 'Contact | Logan Bell',
    description: "Schedule a meeting or reach out directly to discuss your next project.",
    url: 'https://loganbell.design/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
