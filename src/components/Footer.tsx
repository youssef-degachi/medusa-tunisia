"use client";

import Link from "next/link";
import {
  addressCity,
  email,
  instagramUrl,
  navLinks,
  phoneDisplay,
  temuCode,
  temuUrl,
  whatsappNumber,
  youtubeUrl,
} from "@/lib/data";
import { pick, useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t, locale } = useLanguage();

  const elsewhere = [
    { label: t.footer.instagram, href: instagramUrl },
    { label: t.footer.whatsapp, href: `https://wa.me/${whatsappNumber}` },
    { label: t.footer.youtube, href: youtubeUrl },
    { label: `${t.footer.temu} (${temuCode})`, href: temuUrl },
  ];

  return (
    <footer className="relative border-t hairline bg-soot mt-auto overflow-hidden">
      <div className="wrap pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <address className="not-italic text-sm leading-7 text-ash">
              <p className="label text-brass mb-4">{pick(addressCity, locale)}</p>
              <p>{phoneDisplay}</p>
              <p className="mt-1">{t.contact.hoursValue}</p>
              <p className="mt-3">
                <a href={`mailto:${email}`} className="link-line text-bone">
                  {email}
                </a>
              </p>
            </address>
          </div>

          <div className="md:col-span-3">
            <p className="label text-brass mb-4">{t.footer.sitemap}</p>
            <ul className="text-sm leading-8">
              <li>
                <Link href="/" className="link-line text-ash hover:text-bone transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-line text-ash hover:text-bone transition-colors">
                    {t.nav[l.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="label text-brass mb-4">{t.footer.elsewhere}</p>
            <ul className="text-sm leading-8">
              {elsewhere.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-line text-ash hover:text-bone transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="font-display font-light uppercase tracking-[0.08em] leading-none text-bone/[0.07] select-none mt-20 -mb-2 text-[clamp(3.5rem,13vw,13rem)] whitespace-nowrap"
        >
          Medusa
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t hairline pt-6 mt-4">
          <p className="label">{t.footer.rights}</p>
          <p className="label flex gap-6">
            <Link href="/care" className="link-line">{t.footer.careShipping}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
