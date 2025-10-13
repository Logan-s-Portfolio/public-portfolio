/**
 * ImageWithMeta Molecule
 *
 * Built with: Image + Text + Link
 * Purpose: Content image with caption and action link
 */

import { Image } from "@/components/atoms/Image";
import { Text } from "@/components/atoms/Text";
import { Link } from "@/components/atoms/Link";
import { cn } from "@/lib/utils";

export interface ImageWithMetaProps {
  src: string;
  alt: string;
  caption?: string;
  linkText?: string;
  linkHref?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/2";
  className?: string;
}

export const ImageWithMeta = ({
  src,
  alt,
  caption,
  linkText,
  linkHref,
  aspectRatio = "16/9",
  className,
}: ImageWithMetaProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      <Image src={src} alt={alt} aspectRatio={aspectRatio} rounded="md" />

      {(caption || linkText) && (
        <div className="flex items-center justify-between">
          {caption && (
            <Text variant="caption" className="text-neutral-700">
              {caption}
            </Text>
          )}
          {linkText && linkHref && (
            <Link href={linkHref} variant="default">
              {linkText}
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

ImageWithMeta.displayName = "ImageWithMeta";
