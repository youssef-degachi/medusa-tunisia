"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { products, categories, formatPrice } from "@/lib/data";
import { Composition } from "@/components/Composition";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProductGrid() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const visible = filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter products by category"
        className="flex flex-wrap gap-x-8 gap-y-3 border-y hairline py-5 mb-12"
      >
        {categories.map((c) => {
          const active = c === filter;
          const count = c === "All" ? products.length : products.filter((p) => p.category === c).length;
          return (
            <button
              key={c}
              role="tab"
              type="button"
              aria-selected={active}
              onClick={() => setFilter(c)}
              className={`relative label pb-1 transition-colors duration-500 ${
                active ? "text-bone" : "hover:text-bone/80"
              }`}
            >
              {c}
              <sup className="ml-1.5 text-[0.55rem] text-brass">{count}</sup>
              {active && (
                <motion.span
                  layoutId="filter-underline"
                  className="absolute left-0 -bottom-[1px] h-px w-full bg-brass"
                  transition={{ duration: 0.6, ease }}
                />
              )}
            </button>
          );
        })}
      </div>

      <LayoutGroup>
        <motion.ul layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-14">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((p, i) => (
              <motion.li
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.35 } }}
                transition={{ duration: 0.8, ease, delay: i * 0.04 }}
                className={i % 3 === 1 ? "lg:mt-16" : ""}
              >
                <Link href={`/shop/${p.slug}`} className="group block">
                  <div className="relative overflow-hidden" style={{ aspectRatio: i % 3 === 1 ? "3 / 4" : "4 / 5" }}>
                    <Composition
                      motif={p.motif}
                      tones={p.tones}
                      className="absolute inset-0 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                    <span className="absolute top-4 left-5 label text-bone/70">
                      {String(products.indexOf(p) + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute top-4 right-5 label text-brass-soft">{formatPrice(p.price, p.currency)}</span>
                    {p.availability !== "In stock" && (
                      <span className="absolute bottom-4 left-5 label bg-ink/70 backdrop-blur-sm px-2 py-1 text-bone">
                        {p.availability}
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b hairline-bone pt-5 pb-4 transition-colors duration-500 group-hover:border-brass/50">
                    <h2 className="font-display text-3xl font-light leading-none">{p.title}</h2>
                    <span className="label shrink-0">{p.category}</span>
                  </div>
                  <p className="mt-3 text-sm text-ash">{p.material}</p>
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>

      <p className="label mt-16" aria-live="polite">
        Showing {visible.length} of {products.length}
      </p>
    </div>
  );
}
