"use client";

import { addressCity, email, phoneDisplay, whatsappNumber } from "@/lib/data";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { pick, useLanguage } from "@/lib/i18n";

export function ContactPageContent() {
  const { t, locale } = useLanguage();
  const { heading } = t.contact;

  return (
    <>
      <section className="wrap pt-40 md:pt-52 pb-16 md:pb-24">
        <Reveal>
          <p className="label mb-6">{t.contact.eyebrow}</p>
          <h1 className="text-[clamp(3rem,8.5vw,8.5rem)] leading-[0.92] tracking-[-0.03em] max-w-[11ch]">
            {heading.pre} <em className="italic text-brass-soft">{heading.em}</em>{heading.post}
          </h1>
        </Reveal>
      </section>

      <section className="wrap pb-24 md:pb-40 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        <Reveal className="lg:col-span-7">
          <ContactForm />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
          <p className="label mb-8">{t.contact.workshops}</p>
          <address className="not-italic border-t hairline pt-6">
            <p className="font-display text-3xl font-light mb-4">{pick(addressCity, locale)}</p>
            <div className="mt-4 text-sm leading-7">
              <p>
                <a href={`tel:+${whatsappNumber}`} className="link-line text-bone">
                  {phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="link-line text-bone">
                  {t.footer.whatsapp}
                </a>
              </p>
              <p>
                <a href={`mailto:${email}`} className="link-line text-bone">
                  {email}
                </a>
              </p>
            </div>
          </address>
          <div className="mt-14 border-t hairline pt-6">
            <p className="label mb-3">{t.contact.hoursLabel}</p>
            <p className="text-sm text-ash leading-7">{t.contact.hoursValue}</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
