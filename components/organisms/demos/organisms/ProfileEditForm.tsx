/**
 * ProfileEditForm Organism
 *
 * Built with: UserInfoCard + FormFieldMolecule × 4 + ActionButtonGroup + Divider
 * Purpose: Profile editing form with preview and validation
 */

import { UserInfoCard } from "../molecules/UserInfoCard";
import { FormFieldMolecule } from "../molecules/FormFieldMolecule";
import { ActionButtonGroup } from "../molecules/ActionButtonGroup";
import { Divider } from "@/components/atoms/Divider";
import { Heading } from "@/components/atoms/Heading";
import { cn } from "@/lib/utils";
import { User, Mail, Globe } from "lucide-react";

export interface ProfileEditFormProps {
  // Preview data
  avatarSrc?: string;
  currentName: string;
  currentTitle: string;

  // Form values
  name?: string;
  email?: string;
  bio?: string;
  website?: string;

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

export const ProfileEditForm = ({
  avatarSrc,
  currentName,
  currentTitle,
  name,
  email,
  bio,
  website,
  onNameChange,
  onEmailChange,
  onBioChange,
  onWebsiteChange,
  errors = {},
  onSave,
  onCancel,
  className,
}: ProfileEditFormProps) => {
  return (
    <div
      className={cn(
        "border-2 border-neutral-200 rounded-lg bg-white p-6 space-y-6",
        className
      )}
    >
      {/* Header */}
      <div className="space-y-2">
        <Heading variant="h3">Edit Profile</Heading>
        <UserInfoCard
          avatarSrc={avatarSrc}
          name={currentName}
          title={currentTitle}
          size="compact"
        />
      </div>

      <Divider />

      {/* Form Fields */}
      <div className="space-y-4">
        <FormFieldMolecule
          id="profile-name"
          label="Full Name"
          placeholder="Enter your full name"
          value={name}
          onChange={onNameChange}
          error={errors.name}
          required
          leftIcon={<User />}
        />

        <FormFieldMolecule
          id="profile-email"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={onEmailChange}
          error={errors.email}
          required
          leftIcon={<Mail />}
        />

        <FormFieldMolecule
          id="profile-bio"
          label="Bio"
          placeholder="Tell us about yourself"
          value={bio}
          onChange={onBioChange}
          error={errors.bio}
          hint="Maximum 160 characters"
        />

        <FormFieldMolecule
          id="profile-website"
          label="Website"
          type="url"
          placeholder="https://yoursite.com"
          value={website}
          onChange={onWebsiteChange}
          error={errors.website}
          leftIcon={<Globe />}
        />
      </div>

      <Divider />

      {/* Actions */}
      <ActionButtonGroup
        primaryLabel="Save Changes"
        primaryAction={onSave}
        onLike={onCancel}
        isLiked={false}
      />
    </div>
  );
};

ProfileEditForm.displayName = "ProfileEditForm";
