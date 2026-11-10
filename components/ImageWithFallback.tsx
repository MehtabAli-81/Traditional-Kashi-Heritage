"use client";

import { useState } from "react";
import { assetUrl } from "@/lib/paths";

type Props = {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
};

export function ImageWithFallback({ src, fallback, alt, className, loading = "lazy" }: Props) {
  const isStaticPagesBuild = Boolean(process.env.NEXT_PUBLIC_BASE_PATH);
  const [currentSrc, setCurrentSrc] = useState(
    isStaticPagesBuild && src.startsWith("/manus-storage/") ? fallback : src,
  );

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={assetUrl(currentSrc)}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => {
        if (currentSrc !== fallback) setCurrentSrc(fallback);
      }}
    />
  );
}