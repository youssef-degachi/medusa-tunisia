"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

export function CartDrawer() {
  const { lines, subtotal, isOpen, close, remove, setQty, checkoutHref } = useCart();
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[80] bg-ink/70 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease }}
            role="dialog"
            aria-modal="true"
            aria-label={t.cart.title}
            className="fixed inset-y-0 right-0 z-[90] flex w-full max-w-md flex-col bg-soot border-l hairline"
          >
            <div className="flex items-center justify-between px-6 py-6 border-b hairline">
              <p className="label">{t.cart.title}</p>
              <button type="button" onClick={close} aria-label={t.cart.close} className="p-1 text-bone hover:text-brass-soft transition-colors">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {lines.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-6 px-8 text-center">
                <p className="text-ash leading-7">{t.cart.empty}</p>
                <Link href="/shop" onClick={close} className="label link-line text-bone">
                  {t.cart.browse}
                </Link>
              </div>
            ) : (
              <>
                <ul className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
                  {lines.map((l) => (
                    <li key={l.slug} className="flex gap-4">
                      <div className="flex-1">
                        <div className="flex items-baseline justify-between gap-3">
                          <p className="font-display text-xl leading-tight">{l.title}</p>
                          <button
                            type="button"
                            onClick={() => remove(l.slug)}
                            aria-label={`${t.cart.remove} ${l.title}`}
                            className="text-ash hover:text-bone transition-colors"
                          >
                            <X className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </div>
                        <p className="mt-1 text-sm text-ash">{formatPrice(l.price, "TND")}</p>
                        <div className="mt-3 inline-flex items-center gap-3 border hairline px-3 py-1.5">
                          <button
                            type="button"
                            onClick={() => setQty(l.slug, l.qty - 1)}
                            aria-label={t.addToBag.decrease}
                            className="text-ash hover:text-bone transition-colors"
                          >
                            <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                          <span className="w-4 text-center text-sm">{l.qty}</span>
                          <button
                            type="button"
                            onClick={() => setQty(l.slug, l.qty + 1)}
                            aria-label={t.addToBag.increase}
                            className="text-ash hover:text-bone transition-colors"
                          >
                            <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-t hairline px-6 py-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="label">{t.cart.subtotal}</span>
                    <span className="font-display text-2xl">{formatPrice(subtotal, "TND")}</span>
                  </div>
                  <p className="text-xs text-ash mb-6">{t.cart.shippingNote}</p>
                  <a
                    href={checkoutHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 border border-brass px-7 py-4 label text-bone transition-colors duration-500 hover:bg-brass hover:text-ink"
                  >
                    {t.cart.checkout}
                  </a>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
