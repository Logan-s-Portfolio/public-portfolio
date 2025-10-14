import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Explore how I build design systems, mobile apps, and digital products that solve real problems. View my services, projects, and case studies.",
  openGraph: {
    title: 'Portfolio | Logan Bell',
    description: "Explore how I build design systems, mobile apps, and digital products that solve real problems.",
    url: 'https://loganbell.design/home',
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
