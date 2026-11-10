"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, LockKeyhole } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { DemoNotice } from "@/components/DemoNotice";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { formatPrice } from "@/lib/products";

const paymentOptions = [
  { id: "cod", title: "Cash on delivery", note: "Planned payment option · availability must be confirmed." },
  { id: "easypaisa", title: "Easypaisa", note: "Payment instructions would be shared after a real order is confirmed." },
  { id: "jazzcash", title: "JazzCash", note: "Payment instructions would be shared after a real order is confirmed." },
  { id: "bank", title: "Bank transfer", note: "Account details are not connected to this demo." },
];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, ready, clearCart } = useCart();
  const [payment, setPayment] = useState("cod");
  const [country, setCountry] = useState("Pakistan");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!items.length) {
      setError("Your bag is empty. Add a sample piece before continuing.");
      return;
    }
    setSubmitting(true);
    // This is intentionally an in-browser demonstration, not a real order endpoint.
    clearCart();
    router.push("/order-confirmation/?demo=1");
  }

  if (!ready) return <div className="wrap checkout-page"><span className="eyebrow">CHECKOUT PREVIEW</span><h1>Preparing your bag…</h1></div>;
  if (!items.length && !submitting) return <section className="empty-cart-page wrap"><span className="eyebrow">CHECKOUT PREVIEW</span><h1>There’s nothing in your bag.</h1><p>Add a sample piece to see the checkout demonstration.</p><Link className="button button-primary" href="/shop">Shop the collection <ArrowRight size={17} /></Link></section>;

  return (
    <div className="wrap checkout-page">
      <Link href="/cart" className="checkout-back"><ArrowLeft size={15} /> Back to bag</Link>
      <div className="checkout-heading"><span className="eyebrow">A SIMPLE, HONEST CHECKOUT PREVIEW</span><h1>Almost <em>yours.</em></h1><p>Review your details. This demo will not send an order or take a payment.</p></div>
      <DemoNotice compact />
      {error && <div className="error-banner" role="alert">{error}</div>}
      <form className="checkout-layout" onSubmit={onSubmit}>
        <div className="checkout-form-column">
          <section className="checkout-section">
            <div className="checkout-section-heading"><span>01</span><div><h2>Where should it go?</h2><p>Delivery details for an artisan to confirm.</p></div></div>
            <div className="form-grid">
              <label className="form-field form-field-wide">Full name<input name="name" autoComplete="name" required maxLength={100} placeholder="Your name" /></label>
              <label className="form-field">Email address<input name="email" type="email" autoComplete="email" required maxLength={160} placeholder="you@example.com" /></label>
              <label className="form-field">Phone / WhatsApp<input name="phone" type="tel" autoComplete="tel" required maxLength={30} placeholder="A number for delivery updates" /></label>
              <label className="form-field form-field-wide">Street address<input name="address" autoComplete="street-address" required maxLength={180} placeholder="House, street, and area" /></label>
              <label className="form-field">City<input name="city" autoComplete="address-level2" required maxLength={80} placeholder="City" /></label>
              <label className="form-field">Province / region<input name="region" autoComplete="address-level1" required maxLength={80} placeholder="Province or region" /></label>
              <label className="form-field form-field-wide">Country<select name="country" value={country} onChange={(event) => setCountry(event.target.value)}><option>Pakistan</option><option>United Arab Emirates</option><option>United Kingdom</option><option>United States</option><option>Other</option></select></label>
            </div>
            {country !== "Pakistan" && <p className="international-note">International delivery is part of the growth plan, but rates and availability are not connected here. Confirm a quote before placing a real order.</p>}
          </section>
          <section className="checkout-section payment-section">
            <div className="checkout-section-heading"><span>02</span><div><h2>How would you like to pay?</h2><p>Options described in the assignment. No live payment integration is connected.</p></div></div>
            <div className="payment-options">
              {paymentOptions.map((option) => <label className={`payment-option ${payment === option.id ? "is-selected" : ""}`} key={option.id}><input type="radio" name="payment" value={option.id} checked={payment === option.id} onChange={() => setPayment(option.id)} /><span className="payment-radio" /><span className="payment-copy"><strong>{option.title}</strong><small>{option.note}</small></span></label>)}
            </div>
            <p className="future-payment-note"><LockKeyhole size={15} /> Card payments are a future option in the assignment; no card data is collected in this demo.</p>
          </section>
          <label className="form-field order-note-field">Order note <span>(optional)</span><textarea name="note" maxLength={500} rows={3} placeholder="Gift message, custom request, or delivery note" /></label>
        </div>
        <aside className="checkout-order-card">
          <span className="eyebrow">YOUR SAMPLE ORDER</span>
          <h2>Ready for <em>review.</em></h2>
          <div className="checkout-lines">{items.map((item) => <div className="checkout-line" key={item.lineId}><div className="checkout-line-image"><ImageWithFallback src={item.image} fallback={item.fallbackImage} alt="" /></div><div className="checkout-line-copy"><strong>{item.name}</strong>{item.customization && <span>Custom: {item.customization}</span>}<small>Qty {item.quantity}</small></div><b>{formatPrice(item.unitPrice * item.quantity)}</b></div>)}</div>
          <div className="summary-divider" />
          <div className="summary-row"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
          <div className="summary-row"><span>Delivery</span><span>Confirm with artisan</span></div>
          <div className="summary-total"><span>Estimated total</span><strong>{formatPrice(subtotal)}<small> + confirmed delivery</small></strong></div>
          <button className="button button-primary summary-checkout" type="submit" disabled={submitting}>{submitting ? "Opening preview…" : <>Review demo order <ArrowRight size={17} /></>}</button>
          <p className="checkout-privacy-note">Your form details are not sent to a merchant or saved as a business order. This is a local browser demonstration only.</p>
        </aside>
      </form>
    </div>
  );
}
