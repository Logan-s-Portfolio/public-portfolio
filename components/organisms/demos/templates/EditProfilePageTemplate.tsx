/**
 * EditProfilePageTemplate
 *
 * Built with: UserProfileCard + ProfileEditForm
 * Purpose: Split layout for profile editing with live preview
 */

import { UserProfileCard } from "../organisms/UserProfileCard";
import { ProfileEditForm } from "../organisms/ProfileEditForm";
import { cn } from "@/lib/utils";

export interface EditProfilePageTemplateProps {
  // Preview data (current state)
  avatarSrc?: string;
  name: string;
  title: string;
  status: "online" | "away" | "offline";
  followers: number;
  following: number;
  posts: number;
  skills: Array<{
    label: string;
    variant?: "default" | "terracotta" | "sage";
  }>;

  // Form state
  formData: {
    name?: string;
    email?: string;
    bio?: string;
    website?: string;
  };

  // Form handlers
  onNameChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBioChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onWebsiteChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  // Validation
  errors?: {
    name?: string;
    email?: string;
    bio?: string;
    website?: string;
  };

  // Actions
  onSave?: () => void;
  onCancel?: () => void;

  className?: string;
}

export const EditProfilePageTemplate = ({
  avatarSrc,
  name,
  title,
  status,
  followers,
  following,
  posts,
  skills,
  formData,
  onNameChange,
  onEmailChange,
  onBioChange,
  onWebsiteChange,
  errors,
  onSave,
  onCancel,
  className,
}: EditProfilePageTemplateProps) => {
  return (
    <div className={cn("max-w-7xl mx-auto p-6", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Edit Form */}
        <ProfileEditForm
          avatarSrc={avatarSrc}
          currentName={name}
          currentTitle={title}
          name={formData.name}
          email={formData.email}
          bio={formData.bio}
          website={formData.website}
          onNameChange={onNameChange}
          onEmailChange={onEmailChange}
          onBioChange={onBioChange}
          onWebsiteChange={onWebsiteChange}
          errors={errors}
          onSave={onSave}
          onCancel={onCancel}
        />

        {/* Right: Live Preview */}
        <div className="hidden lg:block">
          <UserProfileCard
            avatarSrc={avatarSrc}
            name={formData.name || name}
            title={title}
            status={status}
            followers={followers}
            following={following}
            posts={posts}
            skills={skills}
            variant="connected"
          />
        </div>
      </div>
    </div>
  );
};

EditProfilePageTemplate.displayName = "EditProfilePageTemplate";
