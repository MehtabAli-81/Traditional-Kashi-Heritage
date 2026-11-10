import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function OrderConfirmationPage() {
  return (
    <section className="order-confirmation-page wrap">
      <div className="confirmation-mark"><Check size={28} /></div>
      <span className="eyebrow">CHECKOUT PREVIEW · NO PAYMENT TAKEN</span>
      <h1>Your review is <em>ready.</em></h1>
      <p>This was a local demonstration only. No order was sent to Nasarpor Kashi Heritage, no merchant was notified, and no payment or delivery booking was created.</p>
      <div className="confirmation-detail"><strong>Before launch</strong><span>Connect a commerce backend, verified artisan stock and customer-support contact, delivery rates, and the payment methods you intend to offer.</span></div>
      <Link className="button button-primary" href="/shop">Return to the collection <ArrowRight size={17} /></Link>
    </section>
  );
}
