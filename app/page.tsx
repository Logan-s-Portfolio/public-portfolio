/**
 * Landing Page (/)
 *
 * Clean intro page with typing animation and about section.
 * CTA button routes to /home for main portfolio.
 */

"use client";

import { ViewportHero } from "@/components/organisms/ViewportHero";

export default function LandingPage() {
  const bioParagraphs = [
    "I'm a product designer and entrepreneur based in Austin, TX. With over 10 years of experience, I specialize in creating intuitive, beautiful interfaces that users love and businesses need.",
    "My approach combines deep user research, rapid prototyping, and systematic thinking to deliver products that solve real problems. I'm passionate about design systems, accessibility, and building tools that empower teams.",
    "When I'm not designing, you'll find me exploring Austin's coffee scene, contributing to open-source projects, or mentoring aspiring designers.",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-white to-sage-50/30">
      <ViewportHero
        name="Logan Bell"
        greeting="Hi, I'm"
        typingPhrases={[
          "Product Designer",
          "Entrepreneur",
          "Crafting memorable user experiences",
        ]}
        photoUrl="/logan-bell.jpg"
        aboutPhotoUrl="/BrittanyGilbertPhotography-2840.JPG.jpeg"
        photoAlt="Logan Bell - Product Designer & Entrepreneur"
        location="Austin, TX"
        bioParagraphs={bioParagraphs}
        ctaLabel="See My Work"
        ctaHref="/home"
      />
    </div>
  );
}
