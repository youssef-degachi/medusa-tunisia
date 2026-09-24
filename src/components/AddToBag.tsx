"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import { pick, useLanguage } from "@/lib/i18n";
import type { Product } from "@/lib/data";

export function AddToBag({ product }: { product: Product }) {
  const { add } = useCart();
  const { t, locale } = useLanguage();
  const [qty, setQty] = useState(1);
  const soldOut = product.availability === "Sold out";

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="inline-flex items-center gap-4 border hairline px-4 py-3">
        <button
          type="button"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          aria-label={t.addToBag.decrease}
          className="text-ash hover:text-bone transition-colors"
        >
          <Minus className="h-4 w-4" aria-hidden="true" />
        </button>
        <span className="w-5 text-center">{qty}</span>
        <button
          type="button"
          onClick={() => setQty((q) => q + 1)}
          aria-label={t.addToBag.increase}
          className="text-ash hover:text-bone transition-colors"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <button
        type="button"
        disabled={soldOut}
        onClick={() => add({ slug: product.slug, title: pick(product.title, locale), price: product.price }, qty)}
        className="group inline-flex items-center gap-3 border border-brass px-7 py-4 label text-bone transition-colors duration-500 hover:bg-brass hover:text-ink disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-bone"
      >
        <ShoppingBag className="h-4 w-4" aria-hidden="true" />
        {soldOut ? t.addToBag.soldOut : t.addToBag.add}
      </button>
    </div>
  );
}
