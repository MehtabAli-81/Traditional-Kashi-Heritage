"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/components/CartProvider";

function BrandMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="brand-mark">
      <circle cx="24" cy="24" r="19" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 8c4.6 5.1 4.6 9.8 0 14.2C19.4 17.8 19.4 13.1 24 8Z" fill="currentColor" />
      <path d="M40 24c-5.1 4.6-9.8 4.6-14.2 0 4.4-4.6 9.1-4.6 14.2 0Z" fill="currentColor" />
      <path d="M24 40c-4.6-5.1-4.6-9.8 0-14.2 4.6 4.4 4.6 9.1 0 14.2Z" fill="currentColor" />
      <path d="M8 24c5.1-4.6 9.8-4.6 14.2 0C17.8 28.6 13.1 28.6 8 24Z" fill="currentColor" />
      <circle cx="24" cy="24" r="3.4" fill="#f7f4ed" />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="announcement-bar">
        <span>Hand-painted in Nasarpur, Sindh</span>
        <span className="announcement-divider">·</span>
        <span></span>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="brand" aria-label="Nasarpor Kashi Heritage home" onClick={closeMenu}>
            <BrandMark />
            <span className="brand-wording">
              <span className="brand-name">Nasarpor Kashi</span>
              <span className="brand-subtitle">HERITAGE POTTERY</span>
            </span>
          </Link>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            <Link href="/shop" onClick={closeMenu}>Shop</Link>
            <Link href="/shop?category=Serving" onClick={closeMenu}>Table & serving</Link>
            <Link href="/shop?category=Custom%20nameplates" onClick={closeMenu}>Custom gifts</Link>
            <Link href="/about" onClick={closeMenu}>Our story</Link>
          </nav>

          <div className="header-actions">
            <Link href="/shop" className="icon-link search-link" aria-label="Search the collection">
              <Search size={19} strokeWidth={1.65} />
            </Link>
            <Link href="/cart" className="bag-link" aria-label={`Shopping bag, ${itemCount} items`}>
              <ShoppingBag size={20} strokeWidth={1.65} />
              <span>Bag</span>
              <span className="bag-count" aria-live="polite">{itemCount}</span>
            </Link>
            <button className="mobile-menu-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
