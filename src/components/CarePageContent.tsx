"use client";

import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";

export function CarePageContent() {
  const { t } = useLanguage();
  const c = t.care;

  return (
    <section className="wrap pt-40 md:pt-52 pb-24 md:pb-32">
      <Reveal>
        <p className="label mb-6">{c.eyebrow}</p>
        <h1 className="text-[clamp(2.8rem,7vw,7rem)] leading-[0.95] tracking-[-0.03em]">
          {c.heading.pre} <em className="italic text-brass-soft">{c.heading.em}</em>
        </h1>
        <p className="mt-8 max-w-xl text-ash leading-8">{c.intro}</p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
        <Reveal>
          <h2 className="font-display text-2xl mb-6 text-brass-soft">{c.careHeading}</h2>
          <ul className="border-t hairline">
            {c.care.map((item) => (
              <li key={item.title} className="border-b hairline-bone py-5">
                <p className="text-bone mb-2">{item.title}</p>
                <p className="text-sm text-ash leading-7">{item.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-2xl mb-6 text-brass-soft">{c.shippingHeading}</h2>
          <ul className="border-t hairline">
            {c.shipping.map((item) => (
              <li key={item.title} className="border-b hairline-bone py-5">
                <p className="text-bone mb-2">{item.title}</p>
                <p className="text-sm text-ash leading-7">{item.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
