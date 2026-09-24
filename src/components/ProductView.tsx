"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { formatPrice, type Product } from "@/lib/data";
import { Composition } from "@/components/Composition";
import { Reveal } from "@/components/Reveal";
import { AddToBag } from "@/components/AddToBag";
import { pick, useLanguage } from "@/lib/i18n";

export function ProductView({
  product,
  prev,
  next,
  index,
  total,
}: {
  product: Product;
  prev: Product;
  next: Product;
  index: number;
  total: number;
}) {
  const { t, locale } = useLanguage();
  const p = t.product;

  const meta: [string, string][] = [
    [p.category, t.categories[product.category]],
    [p.material, pick(product.material, locale)],
    [p.craft, pick(product.craft, locale)],
    [p.origin, pick(product.origin, locale)],
    [p.availability, t.availability[product.availability]],
  ];

  return (
    <article>
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Composition motif={product.motif} tones={product.tones} className="absolute inset-0 opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink" />
        </div>
        <div className="wrap pt-44 md:pt-56 pb-16 md:pb-24">
          <Reveal>
            <p className="label flex items-center gap-4 mb-8">
              <span className="text-brass">{String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
              <span className="h-px w-10 bg-brass/50" aria-hidden="true" />
              {t.categories[product.category]}
            </p>
            <h1 className="text-[clamp(3.2rem,11vw,11.5rem)] leading-[0.9] tracking-[-0.03em]">
              {pick(product.title, locale)}
            </h1>
            <p className="mt-8 font-display text-3xl md:text-4xl italic font-light text-brass-soft">
              {formatPrice(product.price, product.currency)}
            </p>
          </Reveal>
        </div>
      </header>

      <section className="wrap" aria-label="Product details">
        <Reveal>
          <dl className="grid grid-cols-2 md:grid-cols-5 border-t border-s hairline">
            {meta.map(([k, v]) => (
              <div key={k} className="border-b border-e hairline px-5 py-6 md:py-8">
                <dt className="label mb-3">{k}</dt>
                <dd className="text-lg md:text-xl leading-tight">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="wrap py-16 md:py-20">
        <Reveal>
          <AddToBag product={product} />
        </Reveal>
      </section>

      <section className="wrap pb-24 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4">
          <p className="label mb-6">{p.thePiece}</p>
          <p className="font-display text-3xl md:text-4xl italic font-light leading-[1.15] text-bone/90">
            {pick(product.summary, locale)}
          </p>
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7 space-y-8">
          {product.narrative[locale].map((para, i) => (
            <Reveal as="p" key={i} delay={i * 0.1} className="text-ash leading-8 first:text-bone">
              {para}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap pb-24" aria-label="Gallery">
        <Reveal className="border-t hairline pt-6 mb-10 flex items-baseline justify-between">
          <p className="label">{p.gallery}</p>
          <p className="label">{product.gallery.length} {p.plates}</p>
        </Reveal>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5 [&>*]:break-inside-avoid">
          {product.gallery.map((g, i) => (
            <Reveal as="figure" key={i} delay={(i % 3) * 0.1}>
              <Composition
                motif={g.motif}
                tones={product.tones}
                flip={g.flip}
                className="w-full"
                style={{ aspectRatio: g.ratio }}
                title={`${pick(product.title, locale)}, ${p.plate.toLowerCase()} ${i + 1}`}
              />
              <figcaption className="label mt-3 flex justify-between">
                <span>{p.plate} {String(i + 1).padStart(2, "0")}</span>
                <span className="text-ash/70">{p.detail}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      <nav className="border-t hairline" aria-label="Adjacent products">
        <div className="wrap grid grid-cols-1 md:grid-cols-2">
          <Link
            href={`/shop/${prev.slug}`}
            className="group py-12 md:py-16 md:pe-10 md:border-e hairline flex flex-col gap-4"
          >
            <span className="label flex items-center gap-3">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-x-1 rtl:rotate-180" aria-hidden="true" />
              {p.previous}
            </span>
            <span className="font-display text-4xl md:text-5xl font-light leading-none transition-colors duration-500 group-hover:text-brass-soft">
              {pick(prev.title, locale)}
            </span>
            <span className="text-sm text-ash">{formatPrice(prev.price, prev.currency)} · {t.categories[prev.category]}</span>
          </Link>
          <Link
            href={`/shop/${next.slug}`}
            className="group py-12 md:py-16 md:ps-10 border-t md:border-t-0 hairline flex flex-col gap-4 md:items-end md:text-end"
          >
            <span className="label flex items-center gap-3">
              {p.next}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1 rtl:rotate-180" aria-hidden="true" />
            </span>
            <span className="font-display text-4xl md:text-5xl font-light leading-none transition-colors duration-500 group-hover:text-brass-soft">
              {pick(next.title, locale)}
            </span>
            <span className="text-sm text-ash">{formatPrice(next.price, next.currency)} · {t.categories[next.category]}</span>
          </Link>
        </div>
      </nav>
    </article>
  );
}
