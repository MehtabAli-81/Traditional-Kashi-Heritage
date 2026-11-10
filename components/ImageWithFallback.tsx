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
    // The project mixes local assignment photography with managed image assets.
    // A local fallback keeps the export usable on hosts without Manus Storage.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={currentSrc.startsWith("/manus-storage/") ? currentSrc : assetUrl(currentSrc)}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => {
        if (currentSrc !== fallback) setCurrentSrc(fallback);
      }}
    />
  );
}
