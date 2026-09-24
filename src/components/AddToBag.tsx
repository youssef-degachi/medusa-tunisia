"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/data";

export function AddToBag({ product }: { product: Product }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const soldOut = product.availability === "Sold out";

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="inline-flex items-center gap-4 border hairline px-4 py-3">
        <button
          type="button"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          aria-label="Decrease quantity"
          className="text-ash hover:text-bone transition-colors"
        >
          <Minus className="h-4 w-4" aria-hidden="true" />
        </button>
        <span className="w-5 text-center">{qty}</span>
        <button
          type="button"
          onClick={() => setQty((q) => q + 1)}
          aria-label="Increase quantity"
          className="text-ash hover:text-bone transition-colors"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <button
        type="button"
        disabled={soldOut}
        onClick={() => add(product, qty)}
        className="group inline-flex items-center gap-3 border border-brass px-7 py-4 label text-bone transition-colors duration-500 hover:bg-brass hover:text-ink disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-bone"
      >
        <ShoppingBag className="h-4 w-4" aria-hidden="true" />
        {soldOut ? "Sold out" : "Add to bag"}
      </button>
    </div>
  );
}
