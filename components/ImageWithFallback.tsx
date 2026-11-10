"use client";

import { useState, useEffect } from "react";
import { assetUrl } from "@/lib/paths";

type Props = {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
};

export function ImageWithFallback({ src, fallback, alt, className, loading = "lazy" }: Props) {
  const [currentSrc, setCurrentSrc] = useState<string>(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  const displayUrl = assetUrl(currentSrc);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={displayUrl}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => {
        if (currentSrc !== fallback) {
          setCurrentSrc(fallback);
        }
      }}
    />
  );
}