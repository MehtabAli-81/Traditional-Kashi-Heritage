"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { DemoNotice } from "@/components/DemoNotice";
import { PageHeading } from "@/components/PageHeading";
import { ProductCard } from "@/components/ProductCard";
import { categories, products, type ProductCategory } from "@/lib/products";

const filters = ["All pieces", ...categories] as const;
type Filter = typeof filters[number];

function LoadingCatalog() {
  return <div className="shop-page wrap"><div className="page-heading"><span className="eyebrow">THE NASARPUR COLLECTION</span><h1>Find your piece<em>.</em></h1><p>Preparing the collection…</p></div><div className="product-grid" aria-label="Loading products" aria-busy="true">{[0, 1, 2, 3].map((item) => <div className="product-skeleton" key={item}><div /><span /><span /></div>)}</div></div>;
}

function CatalogContents() {
  const searchParams = useSearchParams();
  const queryCategory = searchParams.get("category") as ProductCategory | null;
  const validQueryCategory = queryCategory && categories.includes(queryCategory) ? queryCategory : "All pieces";
  const [manualCategory, setManualCategory] = useState<Filter | null>(null);
  const category = manualCategory ?? validQueryCategory;
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [availableOnly, setAvailableOnly] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 280);
    return () => window.clearTimeout(timer);
  }, []);

  const visibleProducts = useMemo(() => {
    const normalized = search.trim().toLowerCase();
    const result = products.filter((product) => {
      const matchesCategory = category === "All pieces" || product.category === category;
      const matchesText = !normalized || `${product.name} ${product.category} ${product.shortDescription} ${product.tags.join(" ")}`.toLowerCase().includes(normalized);
      const matchesAvailability = !availableOnly || product.availability === "sample-available";
      return matchesCategory && matchesText && matchesAvailability;
    });
    if (sort === "price-low") result.sort((a, b) => a.price - b.price);
    if (sort === "price-high") result.sort((a, b) => b.price - a.price);
    if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "featured") result.sort((a, b) => Number(b.featured) - Number(a.featured));
    return result;
  }, [category, search, sort, availableOnly]);

  return (
    <div className="shop-page wrap">
      <PageHeading eyebrow="THE NASARPUR COLLECTION" title={<>Find your piece<em>.</em></>} description="Hand-painted pottery, table pieces, and custom gifts inspired by the Kashi craft of Nasarpur." />
      <DemoNotice compact />
      <div className="shop-toolbar">
        <div className="catalog-search"><Search size={18} strokeWidth={1.7} /><label className="sr-only" htmlFor="product-search">Search products</label><input id="product-search" type="search" placeholder="Search the collection" value={search} onChange={(event) => setSearch(event.target.value)} />{search && <button type="button" aria-label="Clear search" onClick={() => setSearch("")}><X size={16} /></button>}</div>
        <div className="shop-toolbar-right">
          <label className="availability-filter"><input type="checkbox" checked={availableOnly} onChange={(event) => setAvailableOnly(event.target.checked)} /> Show demo-available items</label>
          <label className="sort-select"><SlidersHorizontal size={16} /><span>Sort</span><select aria-label="Sort products" value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="name">Name: A to Z</option></select></label>
        </div>
      </div>
      <div className="catalog-filters" role="group" aria-label="Filter by category">{filters.map((filter) => <button key={filter} type="button" className={category === filter ? "filter-chip is-selected" : "filter-chip"} aria-pressed={category === filter} onClick={() => setManualCategory(filter)}>{filter}</button>)}</div>
      <div className="catalog-result-line"><span>{loading ? "Preparing collection…" : `${visibleProducts.length} ${visibleProducts.length === 1 ? "piece" : "pieces"}`}</span><span>Illustrative prices in PKR</span></div>
      {loading ? <div className="product-grid" aria-label="Loading products" aria-busy="true">{[0, 1, 2, 3].map((item) => <div className="product-skeleton" key={item}><div /><span /><span /></div>)}</div> : visibleProducts.length ? <div className="product-grid">{visibleProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}</div> : <div className="empty-results"><div className="empty-results-icon"><Search size={25} /></div><h2>No pieces found.</h2><p>Try another word or clear a category filter to see more of the collection.</p><button className="button button-outline" type="button" onClick={() => { setSearch(""); setManualCategory("All pieces"); setAvailableOnly(false); }}>Clear filters</button></div>}
      <section className="catalog-bottom-note"><span className="eyebrow">A NOTE ON EACH PIECE</span><p>Kashi pottery is made by hand. Natural variation in line, glaze, and finish is part of its character. These sample listings are not live stock.</p></section>
    </div>
  );
}

export function ShopCatalog() {
  return <Suspense fallback={<LoadingCatalog />}><CatalogContents /></Suspense>;
}
