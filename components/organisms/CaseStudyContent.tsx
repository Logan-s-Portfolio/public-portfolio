/**
 * CaseStudyContent Organism
 *
 * Structured content sections for case study pages.
 * Used to display Overview, Challenge, Solution, Results sections.
 * Layout: Prose-width container (max-w-3xl = 768px) centered
 * Content Blocks: Text, Image, Code, Quick Facts (2-column grid)
 * Design System: Neutral colors, 8pt spacing, responsive
 * Accessibility: Semantic HTML, proper heading hierarchy
 */

import { cn } from "@/lib/utils";
import Image from "next/image";

// Content Block Types
export interface TextBlock {
  type: "text";
  /** Array of paragraph strings */
  paragraphs: string[];
}

export interface ImageBlock {
  type: "image";
  /** Image source */
  src: string;
  /** Image alt text */
  alt: string;
  /** Optional caption */
  caption?: string;
  /** Image aspect ratio (default: video 16:9) */
  aspectRatio?: "video" | "square" | "portrait";
}

export interface CodeBlock {
  type: "code";
  /** Code string */
  code: string;
  /** Programming language for syntax highlighting */
  language?: string;
}

export interface QuickFactsBlock {
  type: "quickFacts";
  /** Array of key-value pairs */
  facts: Array<{
    label: string;
    value: string;
  }>;
}

export type ContentBlock = TextBlock | ImageBlock | CodeBlock | QuickFactsBlock;

export interface ContentSection {
  /** Section heading */
  heading: string;
  /** Array of content blocks */
  blocks: ContentBlock[];
}

export interface CaseStudyContentProps {
  /** Array of content sections */
  sections: ContentSection[];
  /** Additional wrapper class */
  className?: string;
}

export const CaseStudyContent = ({
  sections,
  className,
}: CaseStudyContentProps) => {
  const renderBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case "text":
        return (
          <div key={index} className="space-y-4">
            {block.paragraphs.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className="font-inter text-base leading-[1.6] text-neutral-600"
              >
                {paragraph}
              </p>
            ))}
          </div>
        );

      case "image":
        const aspectRatioClass =
          block.aspectRatio === "square"
            ? "aspect-square"
            : block.aspectRatio === "portrait"
            ? "aspect-[3/4]"
            : "aspect-video";

        return (
          <figure key={index} className="my-8">
            <div
              className={cn(
                "relative w-full overflow-hidden rounded-lg bg-neutral-100 shadow-md",
                aspectRatioClass
              )}
            >
              <Image
                src={block.src}
                alt={block.alt}
                fill
                className="object-cover"
              />
            </div>
            {block.caption && (
              <figcaption className="mt-3 text-center font-inter text-sm text-neutral-500">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );

      case "code":
        return (
          <div key={index} className="my-8">
            <pre className="overflow-x-auto rounded-lg bg-neutral-900 p-4 shadow-md">
              <code
                className={cn(
                  "font-mono text-sm text-neutral-100",
                  block.language && `language-${block.language}`
                )}
              >
                {block.code}
              </code>
            </pre>
          </div>
        );

      case "quickFacts":
        return (
          <div
            key={index}
            className="my-8 grid grid-cols-1 gap-6 rounded-lg bg-neutral-50 p-6 md:grid-cols-2 md:gap-8"
          >
            {block.facts.map((fact, factIndex) => (
              <div key={factIndex} className="space-y-1">
                <dt className="font-inter text-sm font-medium uppercase tracking-[0.05em] text-neutral-500">
                  {fact.label}
                </dt>
                <dd className="font-fraunces text-xl font-semibold text-neutral-900">
                  {fact.value}
                </dd>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <article
      className={cn(
        "bg-white px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24",
        className
      )}
    >
      <div className="mx-auto max-w-3xl">
        <div className="space-y-16">
          {sections.map((section, sectionIndex) => (
            <section key={sectionIndex} className="space-y-6">
              {/* Section Heading */}
              <h2 className="font-fraunces text-2xl font-semibold text-neutral-900 md:text-3xl">
                {section.heading}
              </h2>

              {/* Content Blocks */}
              <div className="space-y-6">
                {section.blocks.map((block, blockIndex) =>
                  renderBlock(block, blockIndex)
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
};

CaseStudyContent.displayName = "CaseStudyContent";
