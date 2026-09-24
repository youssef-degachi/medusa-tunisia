import type { Metadata } from "next";
import { ProductGrid } from "@/components/ProductGrid";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Nine handcrafted pieces from MEDUSA — jewelry, eyewear, leather goods and silk, made in Tunis, Djerba and Kairouan.",
};

export default function ShopPage() {
  return (
    <>
      <section className="wrap pt-40 md:pt-52 pb-24">
        <Reveal>
          <p className="label mb-6">The collection · 2026</p>
          <h1 className="text-[clamp(3rem,9vw,9rem)] leading-[0.92] tracking-[-0.03em] max-w-[9ch]">
            Shop, <em className="italic text-brass-soft">selected</em>
          </h1>
          <p className="mt-10 max-w-lg text-ash leading-8">
            Nine pieces made across three Tunisian workshops. We release in
            small batches; when a piece says limited edition, it means the
            run will not be repeated.
          </p>
        </Reveal>
        <div className="mt-20">
          <ProductGrid />
        </div>
      </section>
      <CTA eyebrow="Custom orders" line1="Want something" line2="bespoke?" href="/contact" linkLabel="Talk to the atelier" />
    </>
  );
}
