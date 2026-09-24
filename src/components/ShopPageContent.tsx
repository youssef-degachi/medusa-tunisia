"use client";

import { ProductGrid } from "@/components/ProductGrid";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { useLanguage } from "@/lib/i18n";

export function ShopPageContent() {
  const { t } = useLanguage();
  const { heading } = t.shop;

  return (
    <>
      <section className="wrap pt-40 md:pt-52 pb-24">
        <Reveal>
          <p className="label mb-6">{t.shop.eyebrow}</p>
          <h1 className="text-[clamp(3rem,9vw,9rem)] leading-[0.92] tracking-[-0.03em] max-w-[9ch]">
            {heading.pre} <em className="italic text-brass-soft">{heading.em}</em>
          </h1>
          <p className="mt-10 max-w-lg text-ash leading-8">{t.shop.intro}</p>
        </Reveal>
        <div className="mt-20">
          <ProductGrid />
        </div>
      </section>
      <CTA eyebrow={t.shop.ctaEyebrow} line1={t.shop.ctaLine1} line2={t.shop.ctaLine2} href="/contact" linkLabel={t.shop.ctaLinkLabel} />
    </>
  );
}
