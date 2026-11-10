import type { Metadata } from "next";
import { PageHeading } from "@/components/PageHeading";
import { DemoNotice } from "@/components/DemoNotice";

export const metadata: Metadata = { title: "Store terms", description: "Terms for the Nasarpor Kashi Heritage student storefront demonstration." };

export default function TermsPage() {
  return (
    <div className="policy-page wrap">
      <PageHeading eyebrow="THE SMALL PRINT, CLEARLY STATED" title={<>Terms for this<br /><em>demonstration.</em></>} description="These notes set expectations for the sample storefront. They are not a substitute for reviewed business terms." />
      <DemoNotice compact />
      <div className="privacy-content">
        <section><span>01</span><div><h2>Sample listings and pricing</h2><p>Product descriptions, generated category imagery, displayed prices, and availability states are illustrative. The assignment supplies category names and one example selling price as unit economics; it does not provide a verified per-product catalogue, price list, or stock feed.</p></div></section>
        <section><span>02</span><div><h2>Handmade character</h2><p>The assignment describes artisan-produced Kashi items with natural variations. The real seller should disclose materials and expected variation honestly and confirm any requested size, design, or customization with the artisan.</p></div></section>
        <section><span>03</span><div><h2>No live order or payment</h2><p>The cart and checkout are client-side demonstrations. Submitting the checkout does not send a real order, reserve inventory, notify a seller, calculate delivery, or authorize a payment.</p></div></section>
        <section><span>04</span><div><h2>Before trading</h2><p>Replace these demo terms with business-reviewed policies, merchant identity and contact details, final price and shipping information, connected order management, and valid payment instructions before selling online.</p></div></section>
      </div>
      <p className="policy-updated">Prepared for the e-commerce assignment demonstration.</p>
    </div>
  );
}
