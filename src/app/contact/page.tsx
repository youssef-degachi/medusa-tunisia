import type { Metadata } from "next";
import { addresses } from "@/lib/data";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with MEDUSA. Workshops in Tunis and Djerba; we reply to every message within a couple of days.",
};

export default function ContactPage() {
  return (
    <>
      <section className="wrap pt-40 md:pt-52 pb-16 md:pb-24">
        <Reveal>
          <p className="label mb-6">Contact</p>
          <h1 className="text-[clamp(3rem,8.5vw,8.5rem)] leading-[0.92] tracking-[-0.03em] max-w-[11ch]">
            Tell us what you <em className="italic text-brass-soft">need</em>.
          </h1>
        </Reveal>
      </section>

      <section className="wrap pb-24 md:pb-40 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        <Reveal className="lg:col-span-7">
          <ContactForm />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
          <p className="label mb-8">Workshops</p>
          <div className="space-y-10">
            {addresses.map((a) => (
              <address key={a.city} className="not-italic border-t hairline pt-6">
                <p className="font-display text-3xl font-light mb-4">{a.city}</p>
                <div className="text-sm text-ash leading-7">
                  {a.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
                <div className="mt-4 text-sm leading-7">
                  <p>
                    <a href={`tel:${a.phone.replace(/\s/g, "")}`} className="link-line text-bone">
                      {a.phone}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${a.email}`} className="link-line text-bone">
                      {a.email}
                    </a>
                  </p>
                </div>
              </address>
            ))}
          </div>
          <div className="mt-14 border-t hairline pt-6">
            <p className="label mb-3">Hours</p>
            <p className="text-sm text-ash leading-7">
              Monday to Saturday, 09:00 — 18:00 (GMT+1).
              <br />
              For order updates, WhatsApp is the fastest way to reach us.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
