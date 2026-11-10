import type { Metadata } from "next";
import { ShopCatalog } from "@/components/ShopCatalog";

export const metadata: Metadata = {
  title: "Shop handmade Kashi pottery",
  description: "Browse sample vases, wall plates, tiles, serving pieces, and custom nameplates inspired by Nasarpur Kashi pottery.",
};

export default function ShopPage() {
  return <ShopCatalog />;
}
