"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { navLinks } from "@/lib/data";
import { useCart } from "@/lib/cart";
import { MedusaMark } from "@/components/MedusaMark";

function subscribe(cb: () => void) {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
}

function useScrolled() {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > 40,
    () => false,
  );
}

export function Nav() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const cart = useCart();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-[background-color,backdrop-filter,border-color] duration-700 border-b ${
          scrolled && !open
            ? "bg-soot/80 backdrop-blur-md hairline"
            : "bg-transparent border-transparent"
        }`}
      >
        <nav className="wrap flex items-center justify-between h-20" aria-label="Primary">
          <Link
            href="/"
            onClick={close}
            className="flex items-center gap-2.5 relative z-[70] text-bone"
          >
            <MedusaMark className="h-7 w-7 text-brass-soft" />
            <span className="font-display text-[1.35rem] tracking-[0.18em] uppercase font-normal">MEDUSA</span>
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => {
              const active = pathname === l.href || pathname.startsWith(l.href + "/");
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`label link-line transition-colors duration-500 hover:text-bone ${
                      active ? "text-bone" : ""
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={cart.open}
              aria-label={`Open bag, ${cart.count} item${cart.count === 1 ? "" : "s"}`}
              className="relative z-[70] flex items-center text-bone hover:text-brass-soft transition-colors"
            >
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
              {cart.count > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-brass px-1 text-[0.6rem] font-medium text-ink">
                  {cart.count}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="md:hidden relative z-[70] flex items-center gap-3 label text-bone"
            >
              <span>{open ? "Close" : "Menu"}</span>
              <span className="relative block h-3 w-6" aria-hidden="true">
                <span
                  className={`absolute left-0 top-0 h-px w-full bg-bone transition-transform duration-500 ${
                    open ? "translate-y-[5.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-px w-full bg-bone transition-transform duration-500 ${
                    open ? "-translate-y-[5.5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] bg-ink/97 backdrop-blur-lg md:hidden flex flex-col"
          >
            <div className="wrap flex-1 flex flex-col justify-center pt-24 pb-12">
              <ul className="flex flex-col gap-2 border-t hairline pt-8">
                {[{ href: "/", label: "Home" }, ...navLinks].map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.12 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={l.href}
                      onClick={close}
                      className="flex items-baseline gap-5 py-3 border-b hairline-bone"
                    >
                      <span className="label text-brass">0{i + 1}</span>
                      <span className="font-display text-5xl italic font-light text-bone">{l.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="label mt-10"
              >
                Tunis · Djerba · Est. 2021
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
