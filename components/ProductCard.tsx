"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice, isAvailable } from "@/lib/products";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { useCart } from "@/components/CartProvider";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const available = isAvailable(product);

  function add() {
    if (!available) return;
    addItem(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  }

  return (
    <article className="product-card" style={{ "--card-index": index } as React.CSSProperties}>
      <Link href={`/product/${product.slug}`} className="product-image-link" aria-label={`View ${product.name}`}>
        <div className="product-image-wrap">
          <ImageWithFallback src={product.image} fallback={product.fallbackImage} alt={product.shortDescription} className="product-image" />
          <span className="product-category-tag">{product.category}</span>
          {!available && <span className="stock-badge">Demo · unavailable</span>}
          <span className="product-open-icon" aria-hidden="true"><ArrowUpRight size={18} /></span>
        </div>
      </Link>
      <div className="product-card-copy">
        <div className="product-card-heading">
          <Link href={`/product/${product.slug}`} className="product-name">{product.name}</Link>
          <span className="product-price">{formatPrice(product.price)}</span>
        </div>
        {product.priceNote && <span className="product-price-note">{product.priceNote}</span>}
        <p>{product.shortDescription}</p>
        <button className="quick-add" type="button" onClick={add} disabled={!available}>
          {available ? <><Plus size={15} /> {added ? "Added to bag" : "Add to bag"}</> : "Not available in demo"}
        </button>
        <span className="sr-only" aria-live="polite">{added ? `${product.name} added to the demo bag` : ""}</span>
      </div>
    </article>
  );
}
