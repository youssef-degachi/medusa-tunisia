import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Care & shipping",
  description: "How to care for your MEDUSA piece, and how shipping, delivery and returns work.",
};

const care = [
  { title: "Brass & gold vermeil", detail: "Keep dry and away from perfume or salt water. Wipe with a soft cloth after wearing; store in the pouch provided to slow tarnish." },
  { title: "Sterling silver", detail: "Oxidised areas are meant to stay dark — polish only the raised surfaces with a silver cloth, never the recessed pattern." },
  { title: "Leather goods", detail: "Condition every few months with a neutral leather balm. Avoid direct sun for long periods; the leather will darken naturally with handling." },
  { title: "Silk", detail: "Hand wash cold or dry clean only. Iron on the reverse, low heat, with a cloth between the iron and the silk." },
];

const shipping = [
  { title: "Processing time", detail: "In-stock pieces ship within 2–4 working days. Made-to-order leather pieces take 10–14 days before dispatch." },
  { title: "Delivery", detail: "Tunisia-wide delivery in 2–5 working days. Delivery cost and international shipping are confirmed over WhatsApp when you check out." },
  { title: "Payment", detail: "Pay on delivery is available within Tunisia. Orders are confirmed by message before anything ships." },
  { title: "Returns", detail: "Unworn pieces in original packaging can be returned within 7 days of delivery. Custom and made-to-order pieces are final sale." },
];

export default function CarePage() {
  return (
    <section className="wrap pt-40 md:pt-52 pb-24 md:pb-32">
      <Reveal>
        <p className="label mb-6">Colophon</p>
        <h1 className="text-[clamp(2.8rem,7vw,7rem)] leading-[0.95] tracking-[-0.03em]">
          Care &amp; <em className="italic text-brass-soft">shipping</em>
        </h1>
        <p className="mt-8 max-w-xl text-ash leading-8">
          Everything here is handmade, so it ages with a little more character
          than something mass-produced. Here&apos;s how to keep each material at
          its best, and how delivery works.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
        <Reveal>
          <h2 className="font-display text-2xl mb-6 text-brass-soft">Caring for your piece</h2>
          <ul className="border-t hairline">
            {care.map((c) => (
              <li key={c.title} className="border-b hairline-bone py-5">
                <p className="text-bone mb-2">{c.title}</p>
                <p className="text-sm text-ash leading-7">{c.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-2xl mb-6 text-brass-soft">Shipping &amp; returns</h2>
          <ul className="border-t hairline">
            {shipping.map((c) => (
              <li key={c.title} className="border-b hairline-bone py-5">
                <p className="text-bone mb-2">{c.title}</p>
                <p className="text-sm text-ash leading-7">{c.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
