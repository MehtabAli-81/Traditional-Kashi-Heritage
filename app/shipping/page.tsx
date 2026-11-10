import type { Metadata } from "next";
import { PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { PageHeading } from "@/components/PageHeading";
import { DemoNotice } from "@/components/DemoNotice";

export const metadata: Metadata = { title: "Shipping information", description: "How protective packaging and courier delivery are planned for Nasarpor Kashi Heritage." };

export default function ShippingPage() {
  return (
    <div className="policy-page wrap">
      <PageHeading eyebrow="DELIVERY, WITH CARE" title={<>A careful journey<br /><em>home.</em></>} description="Kashi pottery is fragile. Protective packaging and clear communication matter as much as the piece itself." />
      <DemoNotice compact />
      <div className="policy-card-grid">
        <article><Truck size={22} /><span className="eyebrow">COURIER PARTNERS</span><h2>Planned, not yet connected.</h2><p>The assignment proposes courier partnerships for domestic and future international delivery. This demo has no live carrier, delivery schedule, tracking number, or shipping-rate calculator.</p></article>
        <article><PackageCheck size={22} /><span className="eyebrow">FRAGILE PACKING</span><h2>Pack to protect.</h2><p>The business plan calls for protective packaging and a quality check before dispatch. A real store should confirm the final packing method and delivery charges before accepting an order.</p></article>
        <article><ShieldCheck size={22} /><span className="eyebrow">OVERSEAS ORDERS</span><h2>Ask for a quote.</h2><p>The assignment has an international growth ambition. Export packaging and overseas delivery are future plans; confirm country coverage, costs, and timing before arranging an international order.</p></article>
      </div>
      <section className="policy-callout"><span className="eyebrow">DELIVERY DETAILS TO CONFIRM</span><p>Before a real order is accepted, confirm the address, shipping rate, dispatch estimate, courier coverage, and what to do if a fragile parcel arrives damaged. No delivery rate or timing has been invented for this demo.</p></section>
      <p className="policy-updated">Information reflects the attached assignment and this student storefront demonstration.</p>
    </div>
  );
}
