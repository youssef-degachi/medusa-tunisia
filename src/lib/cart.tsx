"use client";

import { createContext, useContext, useMemo, useState, useSyncExternalStore, type ReactNode } from "react";
import { formatPrice, whatsappNumber, type Product } from "@/lib/data";

export type CartLine = {
  slug: string;
  title: string;
  price: number;
  qty: number;
};

const STORAGE_KEY = "medusa-cart-v1";
const EMPTY: CartLine[] = [];

let lines: CartLine[] = EMPTY;
const listeners = new Set<() => void>();

function loadInitial(): CartLine[] {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartLine[]) : EMPTY;
  } catch {
    return EMPTY;
  }
}

if (typeof window !== "undefined") {
  lines = loadInitial();
}

function persist() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch {
    // storage unavailable — cart still works for this session
  }
}

function emit() {
  persist();
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot() {
  return lines;
}

function getServerSnapshot() {
  return EMPTY;
}

function storeAdd(product: Product, qty: number) {
  const existing = lines.find((l) => l.slug === product.slug);
  lines = existing
    ? lines.map((l) => (l.slug === product.slug ? { ...l, qty: l.qty + qty } : l))
    : [...lines, { slug: product.slug, title: product.title, price: product.price, qty }];
  emit();
}

function storeRemove(slug: string) {
  lines = lines.filter((l) => l.slug !== slug);
  emit();
}

function storeSetQty(slug: string, qty: number) {
  if (qty < 1) return storeRemove(slug);
  lines = lines.map((l) => (l.slug === slug ? { ...l, qty } : l));
  emit();
}

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (product: Product, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  checkoutHref: string;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const currentLines = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo<CartContextValue>(() => {
    const count = currentLines.reduce((n, l) => n + l.qty, 0);
    const subtotal = currentLines.reduce((n, l) => n + l.qty * l.price, 0);
    const items = currentLines.map((l) => `• ${l.title} x${l.qty} — ${formatPrice(l.price * l.qty, "TND")}`).join("\n");
    const message =
      currentLines.length === 0
        ? "Hello MEDUSA, I'd like to place an order."
        : `Hello MEDUSA, I'd like to order:\n\n${items}\n\nTotal: ${formatPrice(subtotal, "TND")}`;

    return {
      lines: currentLines,
      count,
      subtotal,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add: (product, qty = 1) => {
        storeAdd(product, qty);
        setIsOpen(true);
      },
      remove: storeRemove,
      setQty: storeSetQty,
      checkoutHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    };
  }, [currentLines, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
