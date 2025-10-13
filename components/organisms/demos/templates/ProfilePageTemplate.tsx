/**
 * ProfilePageTemplate
 *
 * Built with: UserProfileCard + ImageWithMeta × 3 + Divider
 * Purpose: Single user profile page layout with portfolio/posts
 */

import { UserProfileCard } from "../organisms/UserProfileCard";
import { ImageWithMeta } from "../molecules/ImageWithMeta";
import { Divider } from "@/components/atoms/Divider";
import { Heading } from "@/components/atoms/Heading";
import { cn } from "@/lib/utils";

interface Post {
  id: string;
  image: string;
  alt: string;
  caption: string;
}

export interface ProfilePageTemplateProps {
  // User profile data
  avatarSrc?: string;
  name: string;
  title: string;
  status: "online" | "away" | "offline";
  lastSeen?: string;
  followers: number;
  following: number;
  posts: number;
  skills: Array<{
    label: string;
    variant?: "default" | "terracotta" | "sage";
  }>;

  // Posts/Portfolio
  recentPosts: Post[];

  className?: string;
}

export const ProfilePageTemplate = ({
  avatarSrc,
  name,
  title,
  status,
  lastSeen,
  followers,
  following,
  posts,
  skills,
  recentPosts,
  className,
}: ProfilePageTemplateProps) => {
  return (
    <div className={cn("max-w-6xl mx-auto p-6 space-y-8", className)}>
      {/* Hero Section: Profile Card */}
      <div className="max-w-2xl mx-auto">
        <UserProfileCard
          avatarSrc={avatarSrc}
          name={name}
          title={title}
          status={status}
          lastSeen={lastSeen}
          followers={followers}
          following={following}
          posts={posts}
          skills={skills}
          variant="stranger"
        />
      </div>

      <Divider label="Recent Posts" />

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentPosts.map((post) => (
          <ImageWithMeta
            key={post.id}
            src={post.image}
            alt={post.alt}
            caption={post.caption}
            linkText="View"
            linkHref={`#post-${post.id}`}
            aspectRatio="1/1"
          />
        ))}
      </div>

      {/* Empty state if no posts */}
      {recentPosts.length === 0 && (
        <div className="text-center py-12">
          <Heading variant="h3" className="text-neutral-400">
            No posts yet
          </Heading>
        </div>
      )}
    </div>
  );
};

ProfilePageTemplate.displayName = "ProfilePageTemplate";
