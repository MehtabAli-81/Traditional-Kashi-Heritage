import type { Metadata } from "next";
import { PageHeading } from "@/components/PageHeading";
import { DemoNotice } from "@/components/DemoNotice";

export const metadata: Metadata = { title: "Privacy policy", description: "The assignment limits customer information use to order processing, delivery, support, and lawful communication." };

export default function PrivacyPage() {
  return (
    <div className="policy-page wrap">
      <PageHeading eyebrow="YOUR INFORMATION, WITH RESPECT" title={<>Privacy, made<br /><em>clear.</em></>} description="This page reflects the privacy principle in the assignment and explains what the classroom demo does." />
      <DemoNotice compact />
      <div className="privacy-content">
        <section><span>01</span><div><h2>How a real store should use information</h2><p>Under the assignment policy, customer information should be used only for order processing, delivery, customer support, and lawful communication. It should not be repurposed for unrelated marketing without an appropriate basis and consent.</p></div></section>
        <section><span>02</span><div><h2>What this demo actually stores</h2><p>The shopping bag is stored in browser local storage so it remains available on this device. Checkout form fields are not sent to a server or saved as a business order. No payment details are requested or processed.</p></div></section>
        <section><span>03</span><div><h2>Before a live launch</h2><p>A production store needs an identified data controller, a working privacy contact, appropriate security and retention rules, and disclosures for its chosen commerce, analytics, payment, and delivery providers. This student demo does not configure those services.</p></div></section>
        <section><span>04</span><div><h2>Questions and requests</h2><p>The assignment does not supply a verified business email or phone number. Add a real customer-care contact before accepting customer information through a live store.</p></div></section>
      </div>
    </div>
  );
}
