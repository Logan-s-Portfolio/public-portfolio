/**
 * HomeLayout Template
 *
 * Hero-focused landing page with multiple full-width sections.
 * Features animated background and scroll animations for each section.
 * Layout: Hero (full viewport) → ProjectShowcase → SkillsShowcase → Testimonials
 * Design System: Full-width sections, scroll animations, AnimatedBackground
 * Accessibility: Scroll animations respect prefers-reduced-motion, semantic HTML
 */

import { PageLayout } from "./PageLayout";
import { Hero, HeroProps } from "@/components/organisms/Hero";
import { ProjectShowcase, ShowcaseProject } from "@/components/organisms/ProjectShowcase";
import { SkillsShowcase, Skill } from "@/components/organisms/SkillsShowcase";
import { TestimonialsSection, Testimonial } from "@/components/organisms/TestimonialsSection";
import { ScrollAnimationSection } from "@/components/organisms/ScrollAnimationSection";

export interface HomeLayoutProps {
  /** Hero section data */
  heroData: Pick<HeroProps, "eyebrow" | "headline" | "subheadline" | "primaryCTA" | "secondaryCTA">;
  /** Featured projects for showcase */
  featuredProjects: ShowcaseProject[];
  /** Skills for showcase */
  skills: Skill[];
  /** Testimonials */
  testimonials: Testimonial[];
  /** Current path for active nav state */
  currentPath?: string;
}

export const HomeLayout = ({
  heroData,
  featuredProjects,
  skills,
  testimonials,
  currentPath,
}: HomeLayoutProps) => {
  return (
    <PageLayout showAnimatedBg currentPath={currentPath} maxWidth="full">
      {/* Hero Section - Full Viewport */}
      <Hero
        eyebrow={heroData.eyebrow}
        headline={heroData.headline}
        subheadline={heroData.subheadline}
        primaryCTA={heroData.primaryCTA}
        secondaryCTA={heroData.secondaryCTA}
      />

      {/* Featured Projects Section */}
      <ScrollAnimationSection animationType="fadeIn" threshold={0.2}>
        <ProjectShowcase
          heading="Featured Work"
          projects={featuredProjects}
          ctaLabel="View All Projects"
          ctaHref="/case-studies"
        />
      </ScrollAnimationSection>

      {/* Skills Section */}
      <ScrollAnimationSection animationType="slideUp" threshold={0.2}>
        <SkillsShowcase heading="Skills & Expertise" skills={skills} />
      </ScrollAnimationSection>

      {/* Testimonials Section */}
      <ScrollAnimationSection animationType="fadeIn" threshold={0.2}>
        <TestimonialsSection
          heading="What Others Say"
          testimonials={testimonials}
        />
      </ScrollAnimationSection>
    </PageLayout>
  );
};

HomeLayout.displayName = "HomeLayout";
