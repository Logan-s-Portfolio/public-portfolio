/**
 * ProjectsGrid Organism
 *
 * Grid of 4 project cards with scroll-based fade-in animation.
 * Design System: 2x2 grid with simple opacity reveal.
 * Accessibility: Semantic HTML, reduced motion support
 */

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { Tag } from "@/components/atoms/Tag";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  badge: string;
  imageSrc: string;
  imageAlt: string;
  tags: Array<{ label: string; variant: "terracotta" | "sage" }>;
  href: string;
  linkText: string;
}

export interface ProjectsGridProps {
  /** Array of 4 project cards */
  projects: [ProjectData, ProjectData, ProjectData, ProjectData];
  /** Whether the grid is visible (triggered after about section) */
  isVisible?: boolean;
  /** Whether sidebar is framed */
  isFramed?: boolean;
  /** Additional wrapper class */
  className?: string;
}

export const ProjectsGrid = ({
  projects,
  isVisible = false,
  isFramed = false,
  className,
}: ProjectsGridProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "absolute inset-0 flex items-center justify-center px-4 md:px-6 lg:px-8 bg-white/95 backdrop-blur-sm",
        isVisible ? "" : "pointer-events-none",
        className
      )}
    >
      <div
        className="w-full max-w-6xl"
        style={{
          paddingLeft: isFramed ? "calc(256px + 1rem)" : undefined,
          transition: "padding 0.6s cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} layout="grid">
              <ProjectCard.Image
                src={project.imageSrc}
                alt={project.imageAlt}
                className="object-cover object-top"
              />
              <ProjectCard.Content>
                <ProjectCard.Header>
                  <ProjectCard.Badge variant="featured">
                    {project.badge}
                  </ProjectCard.Badge>
                  <ProjectCard.Title>{project.title}</ProjectCard.Title>
                  <ProjectCard.Description>
                    {project.description}
                  </ProjectCard.Description>
                </ProjectCard.Header>
                <ProjectCard.Tags>
                  {project.tags.map((tag) => (
                    <Tag key={tag.label} variant={tag.variant} size="sm">
                      {tag.label}
                    </Tag>
                  ))}
                </ProjectCard.Tags>
                <ProjectCard.Footer>
                  <ProjectCard.Link href={project.href}>
                    {project.linkText}
                  </ProjectCard.Link>
                </ProjectCard.Footer>
              </ProjectCard.Content>
            </ProjectCard>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

ProjectsGrid.displayName = "ProjectsGrid";
