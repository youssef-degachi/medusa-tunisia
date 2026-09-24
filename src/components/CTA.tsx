"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";

export function CTA({
  eyebrow,
  line1,
  line2,
  href = "/shop",
  linkLabel,
}: {
  eyebrow?: string;
  line1?: string;
  line2?: string;
  href?: string;
  linkLabel?: string;
}) {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 70% at 50% 100%, rgba(180,138,82,0.14) 0%, transparent 65%)",
        }}
      />
      <div className="wrap py-32 md:py-48 text-center">
        <Reveal>
          <p className="label mb-8">{eyebrow ?? t.cta.eyebrow}</p>
          <h2 className="text-[clamp(2.8rem,8vw,8.5rem)] leading-[0.95] tracking-[-0.03em]">
            {line1 ?? t.cta.line1}
            <br />
            <em className="italic text-brass-soft">{line2 ?? t.cta.line2}</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <Link
            href={href}
            className="group inline-flex flex-col items-center mt-14 font-body text-sm tracking-[0.2em] uppercase text-bone"
          >
            <span>{linkLabel ?? t.cta.linkLabel}</span>
            <span className="relative mt-3 block h-px w-full bg-brass overflow-hidden">
              <span className="absolute inset-0 bg-brass-soft -translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
