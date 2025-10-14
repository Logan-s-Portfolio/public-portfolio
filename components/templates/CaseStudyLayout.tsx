/**
 * CaseStudyLayout Template
 *
 * Layout for detailed case study pages.
 * Shows hero, content sections, timeline, testimonial, and navigation.
 */

import { ReactNode } from "react";
import { PageLayout } from "./PageLayout";
import { CaseStudyHero } from "@/components/organisms/CaseStudyHero";
import { TimelineSection } from "@/components/organisms/TimelineSection";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import { Heading } from "@/components/atoms/Heading";
import { Link } from "@/components/atoms/Link";
import { cn } from "@/lib/utils";

export interface GridBlock {
  type: "grid";
  content: Array<{
    label: string;
    value: string;
  }>;
}

export interface TextBlock {
  type: "text";
  content: ReactNode;
}

export interface CodeBlock {
  type: "code";
  content: ReactNode;
}

export interface ImageBlock {
  type: "image";
  content: {
    src: string;
    alt: string;
    caption?: string;
  };
}

export type ContentBlock = GridBlock | TextBlock | CodeBlock | ImageBlock;

export interface CaseStudySection {
  id: string;
  heading: string;
  contentBlocks: ContentBlock[];
}

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
}

export interface CaseStudyData {
  title: string;
  tagline: string;
  heroImage: string;
  tags: string[];
  breadcrumbs: Array<{
    label: string;
    href: string;
  }>;
  sections: CaseStudySection[];
  timeline?: TimelineItem[];
  testimonial?: Testimonial;
}

export interface CaseStudyLayoutProps {
  caseStudyData: CaseStudyData;
  navigation?: {
    prev?: {
      title: string;
      href: string;
    };
    next?: {
      title: string;
      href: string;
    };
  };
  currentPath?: string;
}

export const CaseStudyLayout = ({
  caseStudyData,
  navigation,
  currentPath,
}: CaseStudyLayoutProps) => {
  const { title, tagline, heroImage, tags, breadcrumbs, sections, timeline, testimonial } =
    caseStudyData;

  return (
    <PageLayout currentPath={currentPath} maxWidth="full">
      {/* Hero Section */}
      <CaseStudyHero
        title={title}
        tagline={tagline}
        imageSrc={heroImage}
        tags={tags}
        breadcrumbs={breadcrumbs}
      />

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
        {/* Content Sections */}
        {sections.map((section) => (
          <section key={section.id} className="mb-16">
            <Heading as="h2" variant="h3" className="mb-8">
              {section.heading}
            </Heading>

            <div className="space-y-8">
              {section.contentBlocks.map((block, index) => {
                if (block.type === "grid") {
                  return (
                    <div
                      key={index}
                      className="grid grid-cols-1 gap-6 rounded-xl bg-neutral-50 p-6 md:grid-cols-2"
                    >
                      {block.content.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          <div className="mb-2 font-inter text-sm font-semibold uppercase tracking-wide text-neutral-600">
                            {item.label}
                          </div>
                          <div className="font-inter text-base text-neutral-900">
                            {item.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }

                if (block.type === "text") {
                  return (
                    <div key={index} className="prose prose-lg max-w-none">
                      {block.content}
                    </div>
                  );
                }

                if (block.type === "code") {
                  return <div key={index}>{block.content}</div>;
                }

                if (block.type === "image") {
                  return (
                    <figure key={index} className="my-8">
                      <div className="overflow-hidden rounded-xl bg-neutral-100">
                        <img
                          src={block.content.src}
                          alt={block.content.alt}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      {block.content.caption && (
                        <figcaption className="mt-3 text-center font-inter text-sm text-neutral-600">
                          {block.content.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }

                return null;
              })}
            </div>
          </section>
        ))}

        {/* Timeline Section */}
        {timeline && timeline.length > 0 && (
          <section className="mb-16">
            <Heading as="h2" variant="h3" className="mb-8">
              Project Timeline
            </Heading>
            <TimelineSection
              milestones={timeline.map((item) => ({
                id: item.id,
                date: item.date,
                title: item.title,
                description: item.description,
              }))}
            />
          </section>
        )}

        {/* Testimonial Section */}
        {testimonial && (
          <section className="mb-16">
            <Heading as="h2" variant="h3" className="mb-8">
              Client Feedback
            </Heading>
            <TestimonialCard
              quote={testimonial.quote}
              name={testimonial.authorName}
              role={testimonial.authorTitle}
              avatar={testimonial.authorImage}
              layout="vertical"
            />
          </section>
        )}

        {/* Navigation */}
        {navigation && (navigation.prev || navigation.next) && (
          <nav
            className="mt-16 flex items-center justify-between border-t border-neutral-200 pt-8"
            aria-label="Case study navigation"
          >
            {navigation.prev ? (
              <Link
                href={navigation.prev.href}
                className="group flex items-center gap-2 font-inter text-base font-medium text-terracotta-600 transition-colors hover:text-terracotta-700"
              >
                <svg
                  className="h-5 w-5 transition-transform group-hover:-translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{navigation.prev.title}</span>
              </Link>
            ) : (
              <div />
            )}

            {navigation.next && (
              <Link
                href={navigation.next.href}
                className="group flex items-center gap-2 font-inter text-base font-medium text-terracotta-600 transition-colors hover:text-terracotta-700"
              >
                <span>{navigation.next.title}</span>
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            )}
          </nav>
        )}
      </div>
    </PageLayout>
  );
};

CaseStudyLayout.displayName = "CaseStudyLayout";
