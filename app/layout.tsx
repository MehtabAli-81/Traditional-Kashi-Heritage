import type { Metadata } from "next";
import { CartProvider } from "@/components/CartProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nasarpor Kashi Heritage | Handmade Kashi Pottery",
    template: "%s | Nasarpor Kashi Heritage",
  },
  description: "Discover the hand-painted Kashi pottery of Nasarpur, Sindh. Meet the craft, explore sample collections, and learn how artisan-led orders will work.",
  keywords: ["Kashi pottery", "Nasarpur", "Sindh craft", "hand-painted pottery", "artisan-made decor"],
  openGraph: {
    type: "website",
    siteName: "Nasarpor Kashi Heritage",
    title: "Nasarpor Kashi Heritage | Handmade Kashi Pottery",
    description: "From clay to art. A digital home for the hand-painted Kashi craft of Nasarpur, Sindh.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
