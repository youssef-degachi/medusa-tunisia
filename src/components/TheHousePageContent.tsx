"use client";

import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { Composition } from "@/components/Composition";
import { useLanguage } from "@/lib/i18n";

export function TheHousePageContent() {
  const { t } = useLanguage();
  const h = t.theHouse;

  return (
    <>
      <section className="wrap pt-40 md:pt-52 pb-24 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-8">
          <p className="label mb-6">{h.eyebrow}</p>
          <h1 className="text-[clamp(3rem,8vw,8rem)] leading-[0.92] tracking-[-0.03em]">
            {h.heading.pre} <em className="italic text-brass-soft">{h.heading.em}</em> {h.heading.post}
          </h1>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-4 self-end">
          <p className="text-ash leading-8">{h.intro}</p>
        </Reveal>
      </section>

      <section className="wrap pb-24 md:pb-32" aria-label="Atelier">
        <Reveal>
          <Composition motif="aegis" tones={["#14120f", "#b48a52"]} className="w-full aspect-[16/8] md:aspect-[21/8]" />
          <p className="label mt-4 flex justify-between">
            <span>{h.atelierCaption1}</span>
            <span className="text-ash/70">{h.atelierCaption2}</span>
          </p>
        </Reveal>
      </section>

      <section className="border-y hairline bg-soot" aria-labelledby="team-heading">
        <div className="wrap py-24 md:py-32">
          <Reveal className="mb-16">
            <p className="label mb-4">{h.teamEyebrow}</p>
            <h2 id="team-heading" className="text-[clamp(2.2rem,4.5vw,4.5rem)]">{h.teamHeading}</h2>
          </Reveal>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {h.team.map((f, i) => (
              <Reveal as="li" key={f.name} delay={i * 0.12} className={i === 1 ? "md:mt-16" : i === 2 ? "md:mt-32" : ""}>
                <div
                  className="relative h-28 w-28 rounded-full border hairline flex items-center justify-center mb-8"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 30%, rgba(216,189,140,0.22), rgba(23,22,19,1) 70%)",
                  }}
                  aria-hidden="true"
                >
                  <span className="font-display text-4xl font-light tracking-[0.05em] text-brass-soft">
                    {f.name.trim().charAt(0)}
                  </span>
                  <span className="absolute -inset-2 rounded-full border border-brass/15" />
                </div>
                <h3 className="text-3xl font-light">{f.name}</h3>
                <p className="label mt-3 text-brass">{f.role}</p>
                <p className="mt-6 text-ash leading-8">{f.bio}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12" aria-labelledby="timeline-heading">
        <Reveal className="lg:col-span-4">
          <p className="label mb-4">{h.timelineEyebrow}</p>
          <h2 id="timeline-heading" className="text-[clamp(2.2rem,4.5vw,4.5rem)]">
            {h.timelineHeading.pre} <em className="italic text-brass-soft">{h.timelineHeading.em}</em> {h.timelineHeading.post}
          </h2>
        </Reveal>
        <ol className="lg:col-span-7 lg:col-start-6 relative border-s border-brass/60 ms-2 lg:ms-0">
          {h.timeline.map((t, i) => (
            <Reveal as="li" key={t.year} delay={i * 0.05} className="relative ps-10 md:ps-16 pb-12 last:pb-0">
              <span
                className="absolute -start-[5px] top-3 h-[9px] w-[9px] rounded-full bg-ink border border-brass"
                aria-hidden="true"
              />
              <p className="font-display text-4xl md:text-5xl font-light leading-none text-brass-soft">{t.year}</p>
              <p className="mt-4 text-ash leading-8 max-w-md">{t.event}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-t hairline" aria-labelledby="craft-heading">
        <div className="wrap py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <p className="label mb-4">{h.craftEyebrow}</p>
            <h2 id="craft-heading" className="text-[clamp(2.2rem,4.5vw,4.5rem)]">{h.craftHeading}</h2>
          </Reveal>
          <ul className="lg:col-span-8 border-t hairline">
            {h.craftCategories.map((s, i) => (
              <Reveal as="li" key={s.name} delay={i * 0.05}>
                <div className="group grid grid-cols-[2.5rem_1fr] md:grid-cols-[3rem_1fr_1fr] items-baseline gap-4 py-6 border-b hairline transition-colors duration-500 hover:border-brass/60">
                  <span className="label text-brass">0{i + 1}</span>
                  <span className="font-display text-3xl md:text-4xl font-light leading-none">{s.name}</span>
                  <span className="col-start-2 md:col-start-3 text-sm text-ash">{s.note}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t hairline bg-soot" aria-labelledby="materials-heading">
        <div className="wrap py-24 md:py-32">
          <Reveal className="mb-12">
            <p className="label mb-4">{h.materialsEyebrow}</p>
            <h2 id="materials-heading" className="text-[clamp(2.2rem,4.5vw,4.5rem)]">{h.materialsHeading}</h2>
          </Reveal>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t hairline pt-10">
            {h.materials.map((m, i) => (
              <Reveal as="li" key={m.title} delay={i * 0.06}>
                <h3 className="font-display text-2xl font-light mb-3 text-brass-soft">{m.title}</h3>
                <p className="text-ash leading-7">{m.detail}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTA eyebrow={h.ctaEyebrow} line1={h.ctaLine1} line2={h.ctaLine2} href="/contact" linkLabel={h.ctaLinkLabel} />
    </>
  );
}
