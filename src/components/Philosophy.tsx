"use client";

import { useLanguage } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

const offsets = ["lg:col-start-1", "lg:col-start-5", "lg:col-start-9"];

export function Philosophy() {
  const { t } = useLanguage();
  const { heading } = t.philosophy;

  return (
    <section className="relative bg-soot border-y hairline" aria-labelledby="philosophy-heading">
      <div className="wrap py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 md:mb-28">
          <Reveal className="lg:col-span-4">
            <p className="label mb-4">{t.philosophy.eyebrow}</p>
            <h2 id="philosophy-heading" className="text-[clamp(2.4rem,5vw,5rem)]">
              {heading.pre} <em className="italic text-brass-soft">{heading.em}</em> {heading.post}
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-ash leading-8 max-w-md">{t.philosophy.intro}</p>
          </Reveal>
        </div>

        <ol className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-y-0">
          {t.philosophy.pillars.map((p, i) => (
            <Reveal
              as="li"
              key={p.n}
              delay={i * 0.15}
              className={`lg:col-span-4 ${offsets[i]} ${i === 1 ? "lg:mt-24" : ""} ${
                i === 2 ? "lg:mt-48" : ""
              }`}
            >
              <div className="border-t hairline pt-6">
                <span className="font-display text-brass text-2xl italic">{p.n}</span>
                <h3 className="mt-6 text-[2rem] md:text-[2.5rem] leading-[1.05] tracking-[-0.01em]">
                  {p.title}
                </h3>
                <p className="mt-6 text-ash leading-8 max-w-sm">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
