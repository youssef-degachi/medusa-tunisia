import { taglines } from "@/lib/data";

export function Marquee() {
  const items = [...taglines, ...taglines];
  return (
    <section className="border-b hairline py-8 overflow-hidden" aria-label="House notes">
      <div className="flex w-max animate-marquee will-change-transform motion-reduce:animate-none">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 pr-8 whitespace-nowrap"
            aria-hidden={i >= taglines.length ? true : undefined}
          >
            <span className="font-display text-2xl md:text-[1.75rem] font-light text-bone/80">{item}</span>
            <span className="h-1.5 w-1.5 rotate-45 bg-brass" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  );
}
