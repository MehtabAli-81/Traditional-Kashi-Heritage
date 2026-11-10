"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, Minus, Plus, ShieldCheck } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice, isAvailable } from "@/lib/products";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { useCart } from "@/components/CartProvider";
import { DemoNotice } from "@/components/DemoNotice";

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [customText, setCustomText] = useState("");
  const [added, setAdded] = useState(false);
  const available = isAvailable(product);
  const hasPersonalization = Boolean(product.customizable && customText.trim());
  const personalizationFee = hasPersonalization ? 400 : 0;

  function addToBag() {
    if (!available) return;
    for (let count = 0; count < quantity; count += 1) addItem(product, hasPersonalization ? customText : "", personalizationFee);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1700);
  }

  return (
    <div className="product-detail-grid">
      <div className="detail-image-column"><div className="detail-main-image"><ImageWithFallback src={product.image} fallback={product.fallbackImage} alt={product.shortDescription} className="detail-image" loading="eager" /><span className="detail-image-stamp">NASARPUR<br />KASHI CRAFT</span></div><span className="detail-image-caption">REPRESENTATIVE CATALOG PHOTO · SAMPLE LISTING</span></div>
      <div className="detail-copy-column">
        <span className="eyebrow">{product.category.toUpperCase()} · HAND-PAINTED KASHI</span>
        <h1>{product.name}</h1>
        <div className="detail-price-line"><strong>{formatPrice(product.price)}</strong><span>Illustrative sample price</span></div>
        {product.priceNote && <span className="product-price-note detail-price-note">{product.priceNote}</span>}
        <p className="detail-summary">{product.shortDescription}</p><p className="detail-description">{product.description}</p>
        {product.customizable && <div className="customization-field"><label htmlFor="custom-request">Personalization request <span>(optional)</span></label><textarea id="custom-request" maxLength={60} rows={3} value={customText} onChange={(event) => setCustomText(event.target.value)} placeholder="Name, short message, logo, or pattern idea" /><p>Custom work is quoted with the artisan. This demo adds Rs. 400 as an example within the assignment&apos;s Rs. 300–500 range.</p></div>}
        {available ? <div className="detail-availability"><span className="availability-dot" /> Sample listing shown as available <span>· verify before launch</span></div> : <div className="detail-out-of-stock" role="status"><strong>Not available in the sample catalog.</strong><span>This is a demonstration state, not live stock information.</span></div>}
        <div className="detail-buy-row"><div className="quantity-control" aria-label="Quantity"><button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))} disabled={!available}><Minus size={15} /></button><span aria-live="polite">{quantity}</span><button type="button" aria-label="Increase quantity" onClick={() => setQuantity((value) => Math.min(20, value + 1))} disabled={!available}><Plus size={15} /></button></div><button className="button button-primary detail-add-button" type="button" onClick={addToBag} disabled={!available}>{added ? <><Check size={17} /> Added to your bag</> : <>Add to bag <ArrowRight size={17} /></>}</button></div>
        <span className="sr-only" aria-live="polite">{added ? `${quantity} ${product.name} added to the demo bag` : ""}</span>
        <div className="detail-policy-note"><ShieldCheck size={18} /><p>Fragile items are intended to be quality-checked and carefully packed. Shipping, final price, and availability are confirmed before a real order.</p></div>
        <DemoNotice compact />
        <div className="detail-description-block"><h2>The story of this piece</h2><p>{product.story}</p><Link className="text-link" href="/contact">Ask about a custom order <ArrowRight size={15} /></Link></div>
        <div className="detail-tags">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
    </div>
  );
}
