/**
 * ProjectGrid Organism
 *
 * Responsive grid of project cards for case studies hub page.
 * Layout: 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile)
 * Grid gap: 32px (space-8) for generous spacing
 * Design System: Uses ProjectCard molecule, 8pt spacing, responsive breakpoints
 * Accessibility: Semantic list structure with keyboard navigation
 */

import { ProjectCard } from "@/components/molecules/ProjectCard";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { cn } from "@/lib/utils";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  href: string;
  featured?: boolean;
}

export interface ProjectGridProps {
  /** Array of projects to display */
  projects: Project[];
  /** Show load more button */
  showLoadMore?: boolean;
  /** Load more button handler */
  onLoadMore?: () => void;
  /** Load more button label */
  loadMoreLabel?: string;
  /** Additional wrapper class */
  className?: string;
}

export const ProjectGrid = ({
  projects,
  showLoadMore = false,
  onLoadMore,
  loadMoreLabel = "Load More Projects",
  className,
}: ProjectGridProps) => {
  return (
    <section
      className={cn("w-full", className)}
      aria-label="Projects grid"
    >
      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} layout="grid">
            <ProjectCard.Image
              src={project.imageSrc}
              alt={`${project.title} project thumbnail`}
              width={800}
              height={600}
            />
            <ProjectCard.Content>
              <ProjectCard.Header>
                {project.featured && (
                  <ProjectCard.Badge variant="featured">
                    Featured
                  </ProjectCard.Badge>
                )}
                <ProjectCard.Title>{project.title}</ProjectCard.Title>
              </ProjectCard.Header>

              <ProjectCard.Description>
                {project.description}
              </ProjectCard.Description>

              {project.tags && project.tags.length > 0 && (
                <ProjectCard.Tags>
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      size="sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </ProjectCard.Tags>
              )}

              <ProjectCard.Footer>
                <ProjectCard.Link href={project.href}>
                  View Case Study
                </ProjectCard.Link>
              </ProjectCard.Footer>
            </ProjectCard.Content>
          </ProjectCard>
        ))}
      </div>

      {/* Load More Button */}
      {showLoadMore && onLoadMore && (
        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={onLoadMore}
          >
            {loadMoreLabel}
          </Button>
        </div>
      )}
    </section>
  );
};

ProjectGrid.displayName = "ProjectGrid";
