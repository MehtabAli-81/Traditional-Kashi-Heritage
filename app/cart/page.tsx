"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { DemoNotice } from "@/components/DemoNotice";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { formatPrice } from "@/lib/products";

export default function CartPage() {
  const { items, subtotal, ready, storageError, setQuantity, removeItem, clearCart } = useCart();

  if (!ready) return <div className="wrap cart-page"><span className="eyebrow">YOUR BAG</span><h1>Gathering your pieces…</h1><div className="cart-skeleton" aria-busy="true" /></div>;

  if (!items.length) {
    return (
      <section className="empty-cart-page wrap">
        <span className="eyebrow">YOUR BAG · 00</span>
        <div className="empty-cart-mark"><span>✳</span></div>
        <h1>Your bag is <em>waiting.</em></h1>
        <p>Find a hand-painted piece or a thoughtful gift to begin. This sample cart stays in your browser.</p>
        <Link className="button button-primary" href="/shop">Explore the collection <ArrowRight size={17} /></Link>
      </section>
    );
  }

  return (
    <div className="cart-page wrap">
      <div className="cart-page-heading"><div><span className="eyebrow">YOUR BAG · {String(items.reduce((sum, item) => sum + item.quantity, 0)).padStart(2, "0")}</span><h1>Pieces you’ve <em>chosen.</em></h1></div><Link className="text-link" href="/shop"><ArrowLeft size={15} /> Keep exploring</Link></div>
      {storageError && <div className="error-banner" role="alert"><div><strong>Your saved bag had a problem.</strong><span>It may not persist on this device. You can continue or clear and restart.</span></div><button type="button" onClick={clearCart}>Clear saved bag</button></div>}
      <div className="cart-layout">
        <div className="cart-items-column">
          {items.map((line) => (
            <article className="cart-line" key={line.lineId}>
              <Link href={`/product/${line.slug}`} className="cart-line-image"><ImageWithFallback src={line.image} fallback={line.fallbackImage} alt={line.name} /></Link>
              <div className="cart-line-copy">
                <span className="eyebrow">SAMPLE PIECE</span>
                <Link href={`/product/${line.slug}`} className="cart-line-name">{line.name}</Link>
                {line.customization && <span className="cart-customization">Personalization: {line.customization}</span>}
                <span className="cart-line-price">{formatPrice(line.unitPrice)} <small>each · illustrative</small></span>
                <div className="cart-line-controls">
                  <div className="quantity-control" aria-label={`Quantity for ${line.name}`}>
                    <button type="button" aria-label={`Remove one ${line.name}`} onClick={() => setQuantity(line.lineId, line.quantity - 1)}><Minus size={14} /></button>
                    <span aria-live="polite">{line.quantity}</span>
                    <button type="button" aria-label={`Add one ${line.name}`} onClick={() => setQuantity(line.lineId, line.quantity + 1)}><Plus size={14} /></button>
                  </div>
                  <button className="remove-line" type="button" onClick={() => removeItem(line.lineId)}><Trash2 size={15} /> Remove</button>
                </div>
              </div>
              <strong className="cart-line-total">{formatPrice(line.unitPrice * line.quantity)}</strong>
            </article>
          ))}
          <DemoNotice compact />
        </div>
        <aside className="order-summary">
          <span className="eyebrow">ORDER SUMMARY</span>
          <h2>A careful <em>arrival.</em></h2>
          <div className="summary-row"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
          <div className="summary-row"><span>Delivery</span><span>Confirmed with artisan</span></div>
          <div className="summary-divider" />
          <div className="summary-total"><span>Estimated total</span><strong>{formatPrice(subtotal)}<small> + confirmed delivery</small></strong></div>
          <Link href="/checkout" className="button button-primary summary-checkout">Continue to checkout <ArrowRight size={17} /></Link>
          <p className="summary-footnote">Demo checkout only. No order is submitted, and no payment is taken.</p>
          <div className="summary-assurance"><span>✓</span> Fragile pieces are intended to be checked and packed with care.</div>
        </aside>
      </div>
    </div>
  );
}
