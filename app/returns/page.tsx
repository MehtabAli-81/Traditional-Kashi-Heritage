import type { Metadata } from "next";
import { Camera, Clock3, RefreshCw } from "lucide-react";
import { PageHeading } from "@/components/PageHeading";
import { DemoNotice } from "@/components/DemoNotice";

export const metadata: Metadata = { title: "Returns and breakage policy", description: "Three-day returns for damaged, incorrect, or materially different items, and a 24-hour delivery-damage claim window." };

export default function ReturnsPage() {
  return (
    <div className="policy-page wrap">
      <PageHeading eyebrow="A FAIR RESOLUTION" title={<>If something isn’t<br /><em>right.</em></>} description="The assignment sets a specific, limited return and breakage policy for fragile handmade products." />
      <DemoNotice compact />
      <div className="policy-card-grid">
        <article><Clock3 size={22} /><span className="eyebrow">THREE-DAY WINDOW</span><h2>For the right reasons.</h2><p>A three-day return or exchange window applies to items that are damaged, incorrect, or materially different from their description. It does not extend to general change-of-mind returns under the assignment policy.</p></article>
        <article><Camera size={22} /><span className="eyebrow">WITHIN 24 HOURS</span><h2>Show what arrived.</h2><p>For delivery breakage, customers can submit photographs or an unboxing video within 24 hours. The assignment says verified delivery damage qualifies for replacement or refund.</p></article>
        <article><RefreshCw size={22} /><span className="eyebrow">REVIEW & RESOLUTION</span><h2>Handled with care.</h2><p>A real store must publish a working customer-care contact and a practical method to submit evidence before accepting orders. No case submission or refund service is connected in this demo.</p></article>
      </div>
      <section className="policy-callout"><span className="eyebrow">NATURAL HANDMADE VARIATION</span><p>Handmade pieces can vary in brushwork and finish. The assignment calls for honest descriptions of materials and natural variations; a product materially different from its description remains covered by its stated return window.</p></section>
      <p className="policy-updated">Policy summary transcribed from the attached E-Commerce assignment.</p>
    </div>
  );
}
