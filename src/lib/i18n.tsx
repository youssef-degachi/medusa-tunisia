"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { dict, type Dictionary } from "@/lib/dictionary";

export type Locale = "en" | "fr" | "ar";

export const locales: { code: Locale; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "ar", label: "AR" },
  { code: "en", label: "EN" },
];

export const defaultLocale: Locale = "fr";

const STORAGE_KEY = "medusa-locale";

function isLocale(v: string | null): v is Locale {
  return v === "en" || v === "fr" || v === "ar";
}

let current: Locale = defaultLocale;
const listeners = new Set<() => void>();

if (typeof window !== "undefined") {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLocale(stored)) current = stored;
}

function applyToDocument(locale: Locale) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
}

function setLocale(next: Locale) {
  current = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // storage unavailable — locale still switches for this session
  }
  applyToDocument(next);
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot() {
  return current;
}

function getServerSnapshot() {
  return defaultLocale;
}

/** Picks the string for the active locale out of a `{ en, fr, ar }` text map. */
export function pick(text: Record<Locale, string>, locale: Locale): string {
  return text[locale] ?? text[defaultLocale];
}

type LanguageContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  setLocale: (l: Locale) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const dir = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    applyToDocument(locale);
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, dir, setLocale, t: dict[locale] }),
    [locale, dir],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
