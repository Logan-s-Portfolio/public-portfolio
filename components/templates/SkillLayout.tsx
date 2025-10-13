/**
 * SkillLayout Template
 *
 * Layout for individual skill detail pages.
 * Shows skill overview, examples, how it's used, approach, and related skills.
 * Uses ContentLayout as base with structured skill sections.
 */

import { ReactNode } from "react";
import { ContentLayout } from "./ContentLayout";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Badge } from "@/components/atoms/Badge";
import { Link } from "@/components/atoms/Link";
import { cn } from "@/lib/utils";

export interface SkillExample {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  href: string;
}

export interface RelatedSkill {
  id: string;
  name: string;
  href: string;
}

export interface SkillData {
  /** Skill name */
  name: string;
  /** Skill icon (emoji) */
  icon: string;
  /** One-line description */
  description: string;
  /** Years of experience */
  years: string;
  /** Project examples using this skill */
  examples: SkillExample[];
  /** How you use this skill (JSX content) */
  howIUseIt: ReactNode;
  /** Your approach/philosophy (JSX content) */
  myApproach: ReactNode;
  /** Related skills */
  relatedSkills: RelatedSkill[];
}

export interface SkillLayoutProps {
  /** Skill data */
  skillData: SkillData;
  /** Current path for active nav state */
  currentPath?: string;
}

export const SkillLayout = ({
  skillData,
  currentPath,
}: SkillLayoutProps) => {
  const { name, icon, description, years, examples, howIUseIt, myApproach, relatedSkills } = skillData;

  const sidebar = (
    <div className="space-y-6">
      {/* Skill Overview Card */}
      <div className="rounded-xl bg-white p-6 shadow-md">
        <div className="mb-4 text-5xl" aria-hidden="true">
          {icon}
        </div>
        <Heading
          as="h3"
          variant="section"
          className="mb-2 font-fraunces text-lg font-semibold text-neutral-900"
        >
          {name}
        </Heading>
        <Badge variant="sage" size="sm" className="mb-4">
          {years}
        </Badge>
        <Text variant="small" className="text-neutral-600">
          {description}
        </Text>
      </div>

      {/* Related Skills */}
      {relatedSkills.length > 0 && (
        <div className="rounded-xl bg-neutral-50 p-6">
          <Heading
            as="h4"
            variant="section"
            className="mb-4 font-fraunces text-base font-semibold text-neutral-900"
          >
            Related Skills
          </Heading>
          <ul className="space-y-2">
            {relatedSkills.map((skill) => (
              <li key={skill.id}>
                <Link
                  href={skill.href}
                  className="font-inter text-sm text-terracotta-600 transition-colors hover:text-terracotta-700"
                >
                  {skill.name} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <ContentLayout
      title={name}
      subtitle={description}
      sidebar={sidebar}
      currentPath={currentPath}
    >
      {/* Examples Section */}
      {examples.length > 0 && (
        <section className="mb-16">
          <Heading as="h2" variant="title" className="mb-8">
            Examples
          </Heading>
          <div className="space-y-8">
            {examples.map((example, index) => (
              <a
                key={index}
                href={example.href}
                className="group block overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-video w-full overflow-hidden bg-neutral-100">
                  <img
                    src={example.imageSrc}
                    alt={example.title}
                    className="h-full w-full object-cover transition-transform duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <Heading
                    as="h3"
                    variant="section"
                    className="mb-3 font-fraunces text-xl font-semibold text-neutral-900"
                  >
                    {example.title}
                  </Heading>
                  <Text variant="body" className="mb-4 text-neutral-600">
                    {example.description}
                  </Text>
                  <div className="flex flex-wrap gap-2">
                    {example.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* How I Use It Section */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-6">
          How I Use It
        </Heading>
        <div className="space-y-6">{howIUseIt}</div>
      </section>

      {/* My Approach Section */}
      <section className="mb-16">
        <Heading as="h2" variant="title" className="mb-6">
          My Approach
        </Heading>
        <div className="space-y-6">{myApproach}</div>
      </section>
    </ContentLayout>
  );
};

SkillLayout.displayName = "SkillLayout";
