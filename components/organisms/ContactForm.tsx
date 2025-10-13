/**
 * ContactForm Organism
 *
 * Contact form with validation and submission states.
 * Form fields: Name, Email, Project Type, Message
 * Validation: React Hook Form with error states
 * States: Idle, Submitting, Success, Error
 * Max-width: 600px (centered)
 * Design System: 8pt spacing, terracotta focus states, semantic error messages
 * Accessibility: Semantic form element, labels, error messages, keyboard navigation
 */

"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/atoms/Input";
import { TextArea } from "@/components/molecules/TextArea";
import { CustomSelect } from "@/components/molecules/CustomSelect";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { cn } from "@/lib/utils";

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export interface ContactFormProps {
  /** Form submission handler */
  onSubmit: (data: ContactFormData) => Promise<void>;
  /** Additional wrapper class */
  className?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export const ContactForm = ({
  onSubmit,
  className,
}: ContactFormProps) => {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ContactFormData>();

  const handleFormSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    try {
      await onSubmit(data);
      setStatus("success");
      reset();
      // Reset success state after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      // Reset error state after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className={cn("mx-auto w-full max-w-[600px]", className)}>
      {/* Status Messages */}
      {status === "success" && (
        <div className="mb-6" role="alert" aria-live="polite">
          <Badge variant="success" className="w-full justify-center py-3">
            Message sent! I'll respond within 24 hours.
          </Badge>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6" role="alert" aria-live="polite">
          <Badge variant="error" className="w-full justify-center py-3">
            Something went wrong. Please try again.
          </Badge>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-inter text-sm font-medium text-neutral-900"
          >
            Name <span className="text-terracotta-600">*</span>
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            error={!!errors.name}
            disabled={status === "submitting"}
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
          />
          {errors.name && (
            <p
              className="mt-1.5 font-inter text-xs text-terracotta-700"
              role="alert"
            >
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-inter text-sm font-medium text-neutral-900"
          >
            Email <span className="text-terracotta-600">*</span>
          </label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            error={!!errors.email}
            disabled={status === "submitting"}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p
              className="mt-1.5 font-inter text-xs text-terracotta-700"
              role="alert"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Project Type Field */}
        <div>
          <label
            htmlFor="projectType"
            className="mb-2 block font-inter text-sm font-medium text-neutral-900"
          >
            Project Type <span className="text-terracotta-600">*</span>
          </label>
          <Controller
            name="projectType"
            control={control}
            rules={{ required: "Please select a project type" }}
            render={({ field }) => (
              <CustomSelect
                id="projectType"
                options={[
                  { value: "", label: "Select a project type", disabled: true },
                  { value: "new-project", label: "New Project" },
                  { value: "consulting", label: "Consulting" },
                  { value: "collaboration", label: "Collaboration" },
                  { value: "just-saying-hi", label: "Just Saying Hi" },
                ]}
                value={field.value}
                onChange={field.onChange}
                placeholder="Select a project type"
                error={!!errors.projectType}
                disabled={status === "submitting"}
              />
            )}
          />
          {errors.projectType && (
            <p
              className="mt-1.5 font-inter text-xs text-terracotta-700"
              role="alert"
            >
              {errors.projectType.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block font-inter text-sm font-medium text-neutral-900"
          >
            Message <span className="text-terracotta-600">*</span>
          </label>
          <TextArea
            id="message"
            placeholder="Tell me about your project..."
            error={!!errors.message}
            disabled={status === "submitting"}
            showCounter
            maxLength={1000}
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
          />
          {errors.message && (
            <p
              className="mt-1.5 font-inter text-xs text-terracotta-700"
              role="alert"
            >
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === "submitting"}
            className="w-full sm:w-auto sm:min-w-[200px]"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
};

ContactForm.displayName = "ContactForm";
