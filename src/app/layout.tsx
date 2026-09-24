import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";
import { CartDrawer } from "@/components/CartDrawer";
import { MotionProvider } from "@/components/MotionProvider";
import { CartProvider } from "@/lib/cart";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MEDUSA — Handcrafted Jewelry & Accessories, Tunisia",
    template: "%s — MEDUSA",
  },
  description:
    "MEDUSA is a Tunisian house of jewelry, eyewear, leather goods and silk — cast in Tunis, hammered in Djerba, tanned in Kairouan. Ancient myth, modern armour.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-ink text-bone font-body">
        <MotionProvider>
          <CartProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brass focus:text-ink focus:px-4 focus:py-2 label"
            >
              Skip to content
            </a>
            <Nav />
            <main id="main" className="flex-1 flex flex-col">
              {children}
            </main>
            <Footer />
            <Cursor />
            <CartDrawer />
            <div className="grain" aria-hidden="true" />
          </CartProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
