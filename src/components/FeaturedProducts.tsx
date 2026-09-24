"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products, selectedProductSlugs, formatPrice } from "@/lib/data";
import { Composition } from "@/components/Composition";
import { Reveal } from "@/components/Reveal";
import { pick, useLanguage } from "@/lib/i18n";

const layout = [
  "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto",
  "md:col-span-5 aspect-[4/3]",
  "md:col-span-5 aspect-[4/3]",
  "md:col-span-4 aspect-[3/4]",
  "md:col-span-8 aspect-[16/9]",
];

export function FeaturedProducts() {
  const { t, locale } = useLanguage();
  const { heading } = t.featured;
  const featured = selectedProductSlugs
    .map((s) => products.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="wrap pt-28 md:pt-40 pb-24" aria-labelledby="featured-heading">
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b hairline pb-8 mb-12">
        <div>
          <p className="label mb-4">{t.featured.eyebrow}</p>
          <h2 id="featured-heading" className="text-[clamp(2.4rem,5.5vw,5.5rem)]">
            {heading.pre} <em className="italic text-brass-soft">{heading.em}</em> {heading.post}
          </h2>
        </div>
        <Link href="/shop" className="label link-line text-bone self-start md:self-auto">
          {t.featured.shopAll}
        </Link>
      </Reveal>

      <ul className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 md:grid-flow-dense">
        {featured.map((p, i) => (
          <Reveal as="li" key={p.slug} delay={(i % 2) * 0.12} className={layout[i]}>
            <Link
              href={`/shop/${p.slug}`}
              className="group relative block h-full w-full overflow-hidden"
              aria-label={`${pick(p.title, locale)}, ${formatPrice(p.price, p.currency)}`}
            >
              <Composition
                motif={p.motif}
                tones={p.tones}
                className="absolute inset-0 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between gap-4">
                <div className="translate-y-3 opacity-80 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-display text-3xl md:text-4xl font-light leading-none text-bone">
                    {pick(p.title, locale)}
                  </p>
                  <p className="label mt-3 opacity-0 transition-opacity duration-700 delay-100 group-hover:opacity-100">
                    {formatPrice(p.price, p.currency)} · {t.categories[p.category]}
                  </p>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 text-brass-soft opacity-0 -translate-x-2 translate-y-2 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 rtl:group-hover:translate-x-2"
                  aria-hidden="true"
                />
              </div>
              <span className="absolute top-5 start-6 md:start-8 label text-bone/70">
                {String(i + 1).padStart(2, "0")}
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
