import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/PageHeading";
import { ProductDetail } from "@/components/ProductDetail";
import { products, getProduct } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Piece not found" };
  return {
    title: `${product.name} — ${product.category}`,
    description: product.shortDescription,
    openGraph: { type: "website", title: product.name, description: product.shortDescription },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return (
    <div className="wrap product-detail-page">
      <Breadcrumbs items={[{ label: "Shop", href: "/shop" }, { label: product.category, href: `/shop?category=${encodeURIComponent(product.category)}` }, { label: product.name }]} />
      <ProductDetail product={product} />
    </div>
  );
}
