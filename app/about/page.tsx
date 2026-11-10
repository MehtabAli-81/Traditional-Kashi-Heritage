import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HandHeart, PackageCheck, Palette } from "lucide-react";
import { DemoNotice } from "@/components/DemoNotice";
import { PageHeading } from "@/components/PageHeading";

export const metadata: Metadata = { title: "Our craft & purpose", description: "Meet the Kashi craft of Nasarpur, Sindh, and the artisan-led business purpose in the E-Commerce assignment." };

const pillars = [
  { icon: Palette, title: "Authentic by design", text: "Every listed piece is intended to be handmade or artisan-produced Kashi pottery, with honest descriptions and natural variations." },
  { icon: PackageCheck, title: "Checked before it travels", text: "The quality policy calls for inspection of cracks, finish, size, and customization before dispatch; fragile work is to be carefully packed." },
  { icon: HandHeart, title: "Value shared fairly", text: "The business is designed around direct partnerships, timely agreed payments, and reinvestment in tools, training, and product development." },
];

const phases = [
  { phase: "01", time: "0–6 months", title: "Build the first path", text: "Launch the website and social pages, share artisan-process stories, strengthen protective packaging, collect reviews, and partner with interior designers." },
  { phase: "02", time: "6–12 months", title: "Grow the gift and design market", text: "Plan targeted digital ads, corporate gifting, exhibitions, seasonal collections, and improved payment and order-tracking experiences." },
  { phase: "03", time: "1–2 years", title: "Reach wider markets", text: "Explore selected craft marketplaces, overseas Pakistanis, export-ready packaging, and an expanded premium décor and tile range." },
];

export default function AboutPage() {
  return (
    <div className="story-page wrap">
      <PageHeading eyebrow="THE ART OF NASARPUR" title={<>A craft worth<br /><em>carrying forward.</em></>} description="Nasarpor Kashi Heritage is a digital business proposal for authentic handmade Kashi pottery from Nasarpur, Sindh." />
      <DemoNotice compact />
      <section className="about-intro-grid">
        <div className="about-intro-aside"><span className="about-aside-number">01</span><span className="eyebrow">OUR PURPOSE</span><h2>Culture, with a clear path to the <em>customer.</em></h2></div>
        <div className="about-intro-copy"><p className="about-lead">Kashi work is valued for its blue-and-white patterns, hand-painted floral motifs, and strong cultural identity. This store is designed to make the craft easier to discover and purchase while supporting dignified market access for artisan families.</p><p>The proposed model is B2C and D2C: work directly with artisans, check every item, then serve customers through a website, social shops, and WhatsApp Business. It is a way to reduce unnecessary middlemen and give each piece room to tell its story.</p><p>The assignment describes an initial network of <strong>10–15 artisan families</strong> in Nasarpur and nearby areas. That is a planned partnership target, not a claim about an established store.</p><Link href="/shop" className="text-link">Explore the sample catalog <ArrowRight size={16} /></Link></div>
      </section>
      <section className="about-pillars">
        <span className="eyebrow">THE PROMISE BEHIND THE PIECE</span>
        <div className="about-pillar-grid">{pillars.map(({ icon: Icon, title, text }, index) => <article key={title} className="about-pillar"><div><span>0{index + 1}</span><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="about-model-section">
        <div><span className="eyebrow">DIRECT FROM ARTISAN TO CUSTOMER</span><h2>How the model <em>works.</em></h2></div>
        <ol className="model-steps"><li><span>01</span><div><strong>Artisans make</strong><p>Kashi products are shaped, finished, and hand-painted.</p></div></li><li><span>02</span><div><strong>Quality team checks</strong><p>Cracks, finish, size, and any customization are inspected.</p></div></li><li><span>03</span><div><strong>Customers order</strong><p>Discover products online, through social channels, and messaging.</p></div></li><li><span>04</span><div><strong>Careful dispatch</strong><p>Support, protective packaging, and courier partners complete the planned journey.</p></div></li></ol>
      </section>
      <section className="growth-section" id="growth"><div className="growth-title"><span className="eyebrow">A THREE-PHASE PLAN</span><h2>Local story.<br /><em>Wider world.</em></h2></div><div className="growth-timeline">{phases.map((item) => <article className="growth-phase" key={item.phase}><div><span>{item.phase}</span><span>{item.time}</span></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
      <section className="about-closing"><span className="eyebrow">A NOTE ON THE ASSIGNMENT</span><p>The source file uses both “Nasarpor Kashi Heritage” and “Hala Kashi Heritage” in different sections. This storefront uses the cover title, Nasarpor Kashi Heritage, consistently.</p></section>
    </div>
  );
}
