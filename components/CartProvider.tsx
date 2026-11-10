"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import type { Product } from "@/lib/products";

export type CartLine = {
  lineId: string;
  productId: string;
  slug: string;
  name: string;
  image: string;
  fallbackImage: string;
  unitPrice: number;
  quantity: number;
  customization?: string;
};

type CartSnapshot = { items: CartLine[]; ready: boolean; storageError: boolean };
type CartContextValue = CartSnapshot & {
  itemCount: number;
  subtotal: number;
  addItem: (product: Product, customization?: string, personalizationFee?: number) => void;
  setQuantity: (lineId: string, quantity: number) => void;
  removeItem: (lineId: string) => void;
  clearCart: () => void;
};

const CART_KEY = "nkh-demo-cart-v1";
const EMPTY_ITEMS: CartLine[] = [];
const SERVER_SNAPSHOT: CartSnapshot = { items: EMPTY_ITEMS, ready: false, storageError: false };
let currentSnapshot: CartSnapshot = SERVER_SNAPSHOT;
const listeners = new Set<() => void>();
const CartContext = createContext<CartContextValue | null>(null);

function parseSavedCart(value: string | null): CartLine[] {
  if (!value) return [];
  const parsed: unknown = JSON.parse(value);
  if (!Array.isArray(parsed)) throw new Error("Saved bag is not a list");
  return parsed.filter((item): item is CartLine =>
    Boolean(item && typeof item.lineId === "string" && typeof item.productId === "string" &&
      typeof item.slug === "string" && typeof item.name === "string" &&
      typeof item.unitPrice === "number" && typeof item.quantity === "number" && item.quantity > 0),
  );
}

function ensureLoaded() {
  if (typeof window === "undefined" || currentSnapshot.ready) return;
  try {
    currentSnapshot = { items: parseSavedCart(window.localStorage.getItem(CART_KEY)), ready: true, storageError: false };
  } catch {
    currentSnapshot = { items: [], ready: true, storageError: true };
  }
}

function getSnapshot(): CartSnapshot {
  ensureLoaded();
  return currentSnapshot;
}

function getServerSnapshot(): CartSnapshot {
  return SERVER_SNAPSHOT;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function commit(items: CartLine[]) {
  let storageError = false;
  try {
    window.localStorage.setItem(CART_KEY, JSON.stringify(items));
  } catch {
    storageError = true;
  }
  currentSnapshot = { items, ready: true, storageError };
  listeners.forEach((listener) => listener());
}

export function CartProvider({ children }: { children: ReactNode }) {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const addItem = useCallback((product: Product, customization = "", personalizationFee = 0) => {
    const cleanCustomization = customization.trim();
    const unitPrice = product.price + personalizationFee;
    const lineId = `${product.id}:${unitPrice}:${cleanCustomization.toLowerCase()}`;
    const items = getSnapshot().items;
    const existing = items.find((line) => line.lineId === lineId);
    if (existing) {
      commit(items.map((line) => line.lineId === lineId ? { ...line, quantity: Math.min(line.quantity + 1, 99) } : line));
      return;
    }
    commit([...items, {
      lineId,
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: product.image,
      fallbackImage: product.fallbackImage,
      unitPrice,
      quantity: 1,
      ...(cleanCustomization ? { customization: cleanCustomization } : {}),
    }]);
  }, []);

  const setQuantity = useCallback((lineId: string, quantity: number) => {
    const items = getSnapshot().items;
    const next = Math.floor(quantity);
    commit(next <= 0
      ? items.filter((line) => line.lineId !== lineId)
      : items.map((line) => line.lineId === lineId ? { ...line, quantity: Math.min(next, 99) } : line));
  }, []);

  const removeItem = useCallback((lineId: string) => {
    commit(getSnapshot().items.filter((line) => line.lineId !== lineId));
  }, []);

  const clearCart = useCallback(() => commit([]), []);

  const value = useMemo(() => ({
    ...snapshot,
    itemCount: snapshot.items.reduce((sum, line) => sum + line.quantity, 0),
    subtotal: snapshot.items.reduce((sum, line) => sum + line.unitPrice * line.quantity, 0),
    addItem,
    setQuantity,
    removeItem,
    clearCart,
  }), [snapshot, addItem, setQuantity, removeItem, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used inside CartProvider");
  return value;
}
