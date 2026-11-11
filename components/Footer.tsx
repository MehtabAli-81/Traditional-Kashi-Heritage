import Link from "next/link";

const policyLinks = [
  ["Shipping", "/shipping"],
  ["Returns & breakage", "/returns"],
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main wrap">
        <div className="footer-brand-column">
          <Link href="/" className="footer-brand">Nasarpor Kashi <span>Heritage</span></Link>
          <p>From clay to art. A digital home for the hand-painted Kashi craft of Nasarpur, Sindh.</p>
          <span className="footer-location">NASARPUR · SINDH · PAKISTAN</span>
        </div>
        <div className="footer-link-column">
          <h2>Explore</h2>
          <Link href="/shop">Shop the collection</Link>
          <Link href="/about">Our craft & purpose</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-link-column">
          <h2>Helpful notes</h2>
          {policyLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </div>
      </div>
      <div className="footer-bottom wrap">
        <span>© {new Date().getFullYear()} Nasarpor Kashi Heritage</span>
      </div>
    </footer>
  );
}