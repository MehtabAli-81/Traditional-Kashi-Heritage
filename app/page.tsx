import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, HandHeart, PackageCheck, Sparkles } from "lucide-react";
import { DemoNotice } from "@/components/DemoNotice";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { ProductCard } from "@/components/ProductCard";
import { featuredProducts, type ProductCategory } from "@/lib/products";

const categoryImages: Record<ProductCategory, { src: string; fallback: string; alt: string }> = {
  "Vases": { src: "/manus-storage/async-images/X6ZwvZkCEsEZ6UDpQzQLz5/image-2.webp", fallback: "/images/assignment-cups-and-jug.jpeg", alt: "Illustrative Kashi vase in blue and white" },
  "Wall plates": { src: "/manus-storage/async-images/X6ZwvZkCEsEZ6UDpQzQLz5/image-3.webp", fallback: "/images/assignment-serving-bowls.jpeg", alt: "Illustrative blue-and-white wall plate" },
  "Tiles": { src: "/manus-storage/async-images/X6ZwvZkCEsEZ6UDpQzQLz5/image-4.webp", fallback: "/images/assignment-serving-bowls.jpeg", alt: "Illustrative hand-painted Kashi tiles" },
  "Serving": { src: "/images/assignment-serving-bowls.jpeg", fallback: "/images/assignment-serving-bowls.jpeg", alt: "Hand-painted serving bowls pictured in the assignment" },
  "Custom nameplates": { src: "/manus-storage/async-images/X6ZwvZkCEsEZ6UDpQzQLz5/image-5.webp", fallback: "/images/assignment-cups-and-jug.jpeg", alt: "Illustrative floral Kashi nameplate, blank for personalization" },
};

const categoryCopy: Record<ProductCategory, string> = {
  "Vases": "Hand-painted forms for a thoughtful room.",
  "Wall plates": "Blue-and-white cultural décor for your walls.",
  "Tiles": "A planned expansion into expressive accent surfaces.",
  "Serving": "Everyday table pieces and memorable gifts.",
  "Custom nameplates": "Names, messages, logos, and special patterns.",
};

const commitments = [
  { icon: HandHeart, number: "01", title: "Fair value, closer to the maker", text: "A direct B2C and D2C path designed to give artisan families dignified, dependable market access." },
  { icon: PackageCheck, number: "02", title: "Checked before dispatch", text: "The assignment’s quality policy calls for inspection of cracks, finish, size, and customization before an item ships." },
  { icon: Sparkles, number: "03", title: "A craft with a future", text: "A portion of business profit is intended to support tools, training, and product development." },
];

export default function HomePage() {
  const homeProducts = featuredProducts.slice(0, 4);
  return (
    <>
      <section className="hero-section wrap">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> KASHI POTTERY · NASARPUR, SINDH</span>
          <h1>A living craft,<br /><em>shaped by hand.</em></h1>
          <p className="hero-lead">A little piece of Nasarpur, made slowly and painted with care. Meet the people and patterns behind Pakistan’s Kashi pottery.</p>
          <div className="hero-actions">
            <Link href="/shop" className="button button-primary">Explore the collection <ArrowRight size={17} /></Link>
            <Link href="/about" className="text-link">Meet the makers <ArrowUpRight size={16} /></Link>
          </div>
          <div className="hero-note"><span className="hero-note-line" /> <span>FROM CLAY TO ART — THE ART OF NASARPUR</span></div>
        </div>
        <div className="hero-art" aria-label="Representative Kashi pottery image">
          <ImageWithFallback src="/manus-storage/async-images/X6ZwvZkCEsEZ6UDpQzQLz5/image-1.webp" fallback="/images/assignment-cups-and-jug.jpeg" alt="Hand-painted Kashi pottery arranged in an artisan studio" className="hero-image" loading="eager" />
          <div className="hero-art-caption"><span>01 / 05</span><span>Hand-painted · Artisan-made</span></div>
          <div className="hero-seal"><span>CRAFTED<br />IN SINDH</span><span className="seal-flower">✳</span></div>
        </div>
        <a className="hero-scroll" href="#collection"><ArrowDown size={15} /> SCROLL TO DISCOVER</a>
      </section>

      <section className="intro-strip" aria-label="Store values">
        <div className="wrap intro-strip-inner"><span>Authentic Kashi craft</span><i /><span>Direct artisan partnerships</span><i /><span>Quality checked with care</span><i /><span>Protective packaging planned</span></div>
      </section>

      <section className="section wrap collection-section" id="collection">
        <div className="section-heading-row"><div><span className="eyebrow">THE COLLECTION · 01—05</span><h2>Made to be <em>kept.</em></h2></div><p>Find a piece for the table, the wall, or the ones you love. Browse the categories shaped by the assignment’s artisan collection.</p></div>
        <div className="category-grid">{(Object.keys(categoryCopy) as ProductCategory[]).map((category, index) => (
          <Link key={category} href={`/shop?category=${encodeURIComponent(category)}`} className={`category-card category-card-${index + 1}`}>
            <div className="category-image-wrap"><ImageWithFallback src={categoryImages[category].src} fallback={categoryImages[category].fallback} alt={categoryImages[category].alt} className="category-image" /><span className="category-index">0{index + 1}</span><span className="category-arrow"><ArrowUpRight size={19} /></span></div>
            <div className="category-card-copy"><h3>{category}</h3><p>{categoryCopy[category]}</p></div>
          </Link>
        ))}</div>
      </section>

     

      <section className="story-band">
        <div className="story-band-art"><ImageWithFallback src="/images/assignment-cups-and-jug.jpeg" fallback="/images/assignment-cups-and-jug.jpeg" alt="Kashi cups and a pitcher pictured in the assignment" className="story-band-image" /><span className="story-image-label">FIG. 01 · FROM THE ASSIGNMENT</span></div>
        <div className="story-band-copy"><span className="eyebrow">A HERITAGE, REIMAGINED</span><h2>From Nasarpur,<br />with <em>meaning.</em></h2><p>Kashi work is more than a pattern. Its blue-and-white lines, hand-painted florals, and familiar forms carry a distinct cultural identity. This storefront brings that story closer to the people who want to live with it.</p><Link href="/about" className="button button-light">Discover the story <ArrowRight size={17} /></Link></div>
        <span className="story-band-index" aria-hidden="true">02</span>
      </section>

      <section className="section wrap commitments-section"><div className="section-heading-row commitments-heading"><div><span className="eyebrow">MORE THAN A PURCHASE</span><h2>Craft with <em>care.</em></h2></div><p>Every order should honor the hands that made it, the customer who chose it, and the care that fragile pottery deserves.</p></div>
        <div className="commitments-grid">{commitments.map(({ icon: Icon, number, title, text }) => <article className="commitment-card" key={number}><div className="commitment-top"><span>{number}</span><Icon size={22} strokeWidth={1.45} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="custom-callout wrap"><div className="custom-callout-copy"><span className="eyebrow">MADE PERSONAL · MADE TO ORDER</span><h2>A gift with<br /><em>your story on it.</em></h2><p>Custom names, logos, messages, or special patterns make an occasion feel like yours. The assignment’s example add-on is Rs. 300–500; a maker confirms the final quote.</p><Link href="/product/custom-floral-nameplate" className="button button-primary">Explore custom work <ArrowRight size={17} /></Link></div>
        <div className="custom-callout-art"><div className="custom-arch"><ImageWithFallback src="/manus-storage/async-images/X6ZwvZkCEsEZ6UDpQzQLz5/image-5.webp" fallback="/images/assignment-cups-and-jug.jpeg" alt="Illustrative blank Kashi plaque with a blue floral border" className="custom-image" /></div><span className="custom-art-note">A PERSONAL TOUCH, PAINTED BY HAND</span></div>
      </section>

      <section className="home-bottom wrap"><div className="home-bottom-text"><span className="eyebrow">THE NEXT CHAPTER</span><h2>Keep the craft<br /><em>in the picture.</em></h2></div><div className="home-bottom-right"><p>From local stories to a wider marketplace: the plan starts with direct orders and careful packing, then grows through designers, gift buyers, exhibitions, and selected craft platforms.</p><Link href="/about#growth" className="text-link">See the growth plan <ArrowRight size={16} /></Link></div><div className="home-bottom-index">03<span> / 03</span></div></section>
      <div className="wrap"><DemoNotice /></div>
    </>
  );
}
