/**
 * FormFieldMolecule
 *
 * Built with: Label + Input + Text
 * Purpose: Complete form input with validation and error messaging
 */

import { Label } from "@/components/atoms/Label";
import { Input } from "@/components/atoms/Input";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";

export interface FormFieldMoleculeProps {
  id: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  success?: string;
  required?: boolean;
  hint?: string;
  type?: string;
  leftIcon?: React.ReactNode;
  className?: string;
}

export const FormFieldMolecule = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  success,
  required = false,
  hint,
  type = "text",
  leftIcon,
  className,
}: FormFieldMoleculeProps) => {
  return (
    <div className={cn("space-y-1", className)}>
      <Label htmlFor={id} required={required} hint={hint}>
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={!!error}
        leftIcon={leftIcon}
      />
      {error && (
        <Text variant="small" className="text-terracotta-700">
          {error}
        </Text>
      )}
      {success && !error && (
        <Text variant="small" className="text-sage-700">
          {success}
        </Text>
      )}
    </div>
  );
};

FormFieldMolecule.displayName = "FormFieldMolecule";
