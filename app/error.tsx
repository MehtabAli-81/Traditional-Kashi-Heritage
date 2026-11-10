"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error("Storefront error", error); }, [error]);
  return (
    <section className="state-page wrap">
      <span className="eyebrow">A SMALL STUDIO PAUSE</span>
      <h1>That didn’t go to plan.</h1>
      <p>The collection is still here. Try again, or browse the current sample catalog.</p>
      <div className="state-actions"><button className="button button-primary" onClick={() => reset()}>Try again</button><Link className="button button-outline" href="/shop">Browse the shop</Link></div>
    </section>
  );
}
