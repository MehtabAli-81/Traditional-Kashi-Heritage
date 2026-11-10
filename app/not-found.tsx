import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="state-page wrap">
      <span className="eyebrow">THIS PIECE ISN’T HERE</span>
      <h1>We couldn’t find that page.</h1>
      <p>The address may have changed, or this sample listing is no longer part of the collection.</p>
      <div className="state-actions"><Link className="button button-primary" href="/shop">Explore the collection</Link><Link className="text-link" href="/">Back to the beginning</Link></div>
    </section>
  );
}
