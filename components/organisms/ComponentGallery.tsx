/**
 * ComponentGallery Organism
 *
 * Showcases all 64+ components organized by Atomic Design methodology.
 * Features filtering by component type, search, and animated grid layout.
 * Design System: Complete component library showcase
 * Accessibility: Keyboard navigation, ARIA labels, search
 */

"use client";

import { useRef, useState, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

type ComponentCategory = "atoms" | "molecules" | "organisms" | "templates" | "all";

interface Component {
  name: string;
  category: ComponentCategory;
  description: string;
  storybook?: string;
}

const components: Component[] = [
  // Atoms (17)
  { name: "Avatar", category: "atoms", description: "User profile image with fallback", storybook: "?path=/story/atoms-avatar" },
  { name: "Badge", category: "atoms", description: "Status and notification indicators", storybook: "?path=/story/atoms-badge" },
  { name: "Button", category: "atoms", description: "Primary interactive element", storybook: "?path=/story/atoms-button" },
  { name: "Checkbox", category: "atoms", description: "Boolean input control", storybook: "?path=/story/atoms-checkbox" },
  { name: "Code", category: "atoms", description: "Inline and block code display", storybook: "?path=/story/atoms-code" },
  { name: "Divider", category: "atoms", description: "Visual content separator", storybook: "?path=/story/atoms-divider" },
  { name: "Heading", category: "atoms", description: "Semantic heading levels H1-H6", storybook: "?path=/story/atoms-heading" },
  { name: "IconButton", category: "atoms", description: "Button with icon only", storybook: "?path=/story/atoms-iconbutton" },
  { name: "Image", category: "atoms", description: "Optimized responsive images", storybook: "?path=/story/atoms-image" },
  { name: "Input", category: "atoms", description: "Text input field", storybook: "?path=/story/atoms-input" },
  { name: "Label", category: "atoms", description: "Form field labels", storybook: "?path=/story/atoms-label" },
  { name: "Link", category: "atoms", description: "Navigation and anchor links", storybook: "?path=/story/atoms-link" },
  { name: "ProgressBar", category: "atoms", description: "Linear progress indicator", storybook: "?path=/story/atoms-progressbar" },
  { name: "Skeleton", category: "atoms", description: "Loading state placeholder", storybook: "?path=/story/atoms-skeleton" },
  { name: "Spinner", category: "atoms", description: "Circular loading indicator", storybook: "?path=/story/atoms-spinner" },
  { name: "Tag", category: "atoms", description: "Categorical labels", storybook: "?path=/story/atoms-tag" },
  { name: "Text", category: "atoms", description: "Body text with variants", storybook: "?path=/story/atoms-text" },

  // Molecules (15)
  { name: "Breadcrumb", category: "molecules", description: "Navigation trail", storybook: "?path=/story/molecules-breadcrumb" },
  { name: "CheckboxField", category: "molecules", description: "Checkbox with label", storybook: "?path=/story/molecules-checkboxfield" },
  { name: "CustomSelect", category: "molecules", description: "Styled select dropdown", storybook: "?path=/story/molecules-customselect" },
  { name: "Dropdown", category: "molecules", description: "Menu dropdown component", storybook: "?path=/story/molecules-dropdown" },
  { name: "FormField", category: "molecules", description: "Input with label and error", storybook: "?path=/story/molecules-formfield" },
  { name: "ImageWithCaption", category: "molecules", description: "Image with caption text", storybook: "?path=/story/molecules-imagewithcaption" },
  { name: "NavItem", category: "molecules", description: "Navigation menu item", storybook: "?path=/story/molecules-navitem" },
  { name: "ProjectCard", category: "molecules", description: "Project preview card", storybook: "?path=/story/molecules-projectcard" },
  { name: "SkillBadge", category: "molecules", description: "Skill tag with icon", storybook: "?path=/story/molecules-skillbadge" },
  { name: "SocialLink", category: "molecules", description: "Social media link button", storybook: "?path=/story/molecules-sociallink" },
  { name: "StatCard", category: "molecules", description: "Statistic display card", storybook: "?path=/story/molecules-statcard" },
  { name: "TestimonialCard", category: "molecules", description: "Client testimonial card", storybook: "?path=/story/molecules-testimonialcard" },
  { name: "TextArea", category: "molecules", description: "Multi-line text input", storybook: "?path=/story/molecules-textarea" },
  { name: "ThemeToggle", category: "molecules", description: "Dark mode toggle", storybook: "?path=/story/molecules-themetoggle" },
  { name: "VideoEmbed", category: "molecules", description: "Responsive video player", storybook: "?path=/story/molecules-videoembed" },

  // Organisms (23)
  { name: "AboutSection", category: "organisms", description: "About content section", storybook: "?path=/story/organisms-aboutsection" },
  { name: "AnimatedBackground", category: "organisms", description: "Animated gradient background", storybook: "?path=/story/organisms-animatedbackground" },
  { name: "CaseStudyContent", category: "organisms", description: "Case study body content", storybook: "?path=/story/organisms-casestudycontent" },
  { name: "CaseStudyHero", category: "organisms", description: "Case study hero section", storybook: "?path=/story/organisms-casestudyhero" },
  { name: "ColorPaletteShowcase", category: "organisms", description: "Color system display", storybook: "" },
  { name: "ContactForm", category: "organisms", description: "Contact form with validation", storybook: "?path=/story/organisms-contactform" },
  { name: "DesignSystemHero", category: "organisms", description: "Design system landing hero", storybook: "" },
  { name: "FloatingElements", category: "organisms", description: "Animated floating shapes", storybook: "?path=/story/organisms-floatingelements" },
  { name: "Footer", category: "organisms", description: "Site footer navigation", storybook: "?path=/story/organisms-footer" },
  { name: "Hero", category: "organisms", description: "Page hero section", storybook: "?path=/story/organisms-hero" },
  { name: "Navbar", category: "organisms", description: "Top navigation bar", storybook: "?path=/story/organisms-navbar" },
  { name: "OfferingsSection", category: "organisms", description: "Services showcase section", storybook: "?path=/story/organisms-offeringssection" },
  { name: "ProjectGrid", category: "organisms", description: "Project cards grid", storybook: "?path=/story/organisms-projectgrid" },
  { name: "ProjectShowcase", category: "organisms", description: "Featured project display", storybook: "?path=/story/organisms-projectshowcase" },
  { name: "ScrollAnimationSection", category: "organisms", description: "Scroll-triggered animations", storybook: "?path=/story/organisms-scrollanimationsection" },
  { name: "ScrollCards", category: "organisms", description: "Horizontal scroll cards", storybook: "" },
  { name: "SideNav", category: "organisms", description: "Sidebar navigation menu", storybook: "" },
  { name: "SkillsShowcase", category: "organisms", description: "Skills grid display", storybook: "?path=/story/organisms-skillsshowcase" },
  { name: "SpacingVisualizer", category: "organisms", description: "8-point grid showcase", storybook: "" },
  { name: "TestimonialsSection", category: "organisms", description: "Testimonials carousel", storybook: "?path=/story/organisms-testimonialssection" },
  { name: "TimelineSection", category: "organisms", description: "Timeline with entries", storybook: "?path=/story/organisms-timelinesection" },
  { name: "TypeSpecimen", category: "organisms", description: "Typography showcase", storybook: "" },
  { name: "ViewportHero", category: "organisms", description: "Full-viewport hero with scroll effects", storybook: "" },

  // Templates (7)
  { name: "CaseStudyLayout", category: "templates", description: "Case study page template" },
  { name: "ContentLayout", category: "templates", description: "Content page template", storybook: "?path=/story/templates-contentlayout" },
  { name: "DesignSystemLayout", category: "templates", description: "Design docs template" },
  { name: "DocsLayout", category: "templates", description: "Documentation template" },
  { name: "HomeLayout", category: "templates", description: "Homepage template", storybook: "?path=/story/templates-homelayout" },
  { name: "PageLayout", category: "templates", description: "Base page template", storybook: "?path=/story/templates-pagelayout" },
  { name: "SkillLayout", category: "templates", description: "Skills page template" },
];

export interface ComponentGalleryProps {
  /** Section heading */
  heading?: string;
  /** Section description */
  description?: string;
  /** Additional wrapper class */
  className?: string;
}

export const ComponentGallery = ({
  heading = "Component Library",
  description = "64+ components built from scratch with Atomic Design. Every component documented in Storybook.",
  className,
}: ComponentGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState<ComponentCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter components
  const filteredComponents = useMemo(() => {
    let filtered = components;

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((c) => c.category === activeCategory);
    }

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(
        (c) =>
          c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  // Component count by category
  const categoryCounts = {
    all: components.length,
    atoms: components.filter((c) => c.category === "atoms").length,
    molecules: components.filter((c) => c.category === "molecules").length,
    organisms: components.filter((c) => c.category === "organisms").length,
    templates: components.filter((c) => c.category === "templates").length,
  };

  const categories: { id: ComponentCategory; label: string; color: string }[] = [
    { id: "all", label: "All Components", color: "neutral" },
    { id: "atoms", label: "Atoms", color: "terracotta" },
    { id: "molecules", label: "Molecules", color: "sage" },
    { id: "organisms", label: "Organisms", color: "terracotta" },
    { id: "templates", label: "Templates", color: "sage" },
  ];

  const getCategoryColor = (color: string, variant: "bg" | "border" | "text" = "bg") => {
    const colors = {
      terracotta: {
        bg: "bg-terracotta-500",
        border: "border-terracotta-500",
        text: "text-terracotta-600",
      },
      sage: {
        bg: "bg-sage-500",
        border: "border-sage-500",
        text: "text-sage-600",
      },
      neutral: {
        bg: "bg-neutral-700",
        border: "border-neutral-700",
        text: "text-neutral-700",
      },
    };
    return colors[color as keyof typeof colors]?.[variant] || colors.neutral[variant];
  };

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative bg-gradient-to-b from-white via-neutral-50 to-white px-4 py-16 md:px-6 md:py-24 lg:px-8",
        className
      )}
      aria-labelledby="component-gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
          <Heading as="h2" variant="hero" id="component-gallery-heading" className="mb-4">
            {heading}
          </Heading>
          <Text variant="lead" className="mx-auto max-w-3xl text-neutral-600">
            {description}
          </Text>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "group rounded-xl border-2 px-6 py-3 font-inter text-sm font-medium transition-all duration-300",
                "focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2",
                activeCategory === category.id
                  ? `${getCategoryColor(category.color, "bg")} ${getCategoryColor(category.color, "border")} text-white shadow-md`
                  : "border-neutral-300 bg-white text-neutral-700 hover:border-terracotta-300 hover:shadow-sm"
              )}
            >
              {category.label}
              <span className="ml-2 opacity-75">({categoryCounts[category.id]})</span>
            </button>
          ))}
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="mb-12 mx-auto max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
        >
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border-2 border-neutral-300 bg-white px-6 py-3 font-inter text-base text-neutral-900 placeholder:text-neutral-400 transition-all duration-300 focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2"
          />
        </motion.div>

        {/* Component Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredComponents.map((component, index) => (
              <motion.div
                key={component.name}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.03,
                  ease: [0.33, 1, 0.68, 1],
                }}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.2,
                    ease: [0.33, 1, 0.68, 1],
                  },
                }}
              >
                <div
                  className={cn(
                    "relative overflow-hidden rounded-xl border-2 bg-white p-6 shadow-md transition-all duration-300",
                    "group-hover:shadow-xl",
                    "focus-within:ring-2 focus-within:ring-terracotta-500 focus-within:ring-offset-2",
                    getCategoryColor(
                      categories.find((c) => c.id === component.category)?.color || "neutral",
                      "border"
                    ).replace("500", "200")
                  )}
                >
                {/* Category Badge */}
                <div
                  className={cn(
                    "absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white",
                    getCategoryColor(
                      categories.find((c) => c.id === component.category)?.color || "neutral"
                    )
                  )}
                >
                  {component.category}
                </div>

                {/* Component Info */}
                <div className="mb-4">
                  <Heading as="h3" variant="section" className="mb-2 pr-20">
                    {component.name}
                  </Heading>
                  <Text variant="small" className="text-neutral-600">
                    {component.description}
                  </Text>
                </div>

                {/* Storybook Link */}
                {component.storybook && (
                  <a
                    href={`http://localhost:6006/${component.storybook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-terracotta-600 transition-colors hover:text-terracotta-700"
                  >
                    <span>View in Storybook</span>
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </a>
                )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredComponents.length === 0 && (
          <motion.div
            className="py-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Text variant="lead" className="text-neutral-600">
              No components found matching "{searchQuery}"
            </Text>
          </motion.div>
        )}
      </div>
    </section>
  );
};

ComponentGallery.displayName = "ComponentGallery";
