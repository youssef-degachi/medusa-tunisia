"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useLanguage();
  const { heading } = t.notFound;

  return (
    <section className="wrap flex-1 flex flex-col justify-center pt-40 pb-32">
      <p className="label mb-6">404</p>
      <h1 className="text-[clamp(3rem,8vw,8rem)] leading-[0.92]">
        {heading.pre} <em className="italic text-brass-soft">{heading.em}</em> {heading.post}
      </h1>
      <Link href="/shop" className="label link-line text-bone mt-12 self-start">
        {t.notFound.back}
      </Link>
    </section>
  );
}
