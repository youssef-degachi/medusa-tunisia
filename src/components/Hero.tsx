"use client";

import { motion } from "motion/react";
import { Composition } from "@/components/Composition";
import { MedusaMark } from "@/components/MedusaMark";
import { useLanguage } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

function Words({ words, offset }: { words: string[]; offset: number }) {
  return (
    <span className="block">
      {words.map((w, i) => (
        <span key={w + i} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] me-[0.22em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", clipPath: "inset(0 0 100% 0)" }}
            animate={{ y: "0%", clipPath: "inset(0 0 -20% 0)" }}
            transition={{ duration: 1.3, ease, delay: 0.35 + (offset + i) * 0.09 }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const offsets = t.hero.lines.reduce<number[]>((acc, words, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + t.hero.lines[i - 1].length);
    return acc;
  }, []);

  return (
    <section className="relative min-h-svh flex flex-col justify-end overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink">
        <Composition motif="medallion" tones={["#0d0c0a", "#b48a52"]} className="absolute inset-0 h-full w-full opacity-70" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 55% at 80% 15%, rgba(180,138,82,0.22) 0%, transparent 60%), linear-gradient(180deg, rgba(13,12,10,0.55) 0%, rgba(13,12,10,0.35) 35%, rgba(13,12,10,0.92) 85%, #0d0c0a 100%)",
          }}
        />
        <MedusaMark className="absolute -end-16 top-16 h-[42vw] max-h-[28rem] w-[42vw] max-w-[28rem] text-brass-soft opacity-[0.07] hidden lg:block" />
      </div>
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, ease, delay: 0.2 }}
        className="absolute top-[38%] end-0 w-[42vw] h-px bg-brass/40 origin-right hidden lg:block"
      />

      <div className="wrap pb-14 md:pb-20 pt-40">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="label flex items-center gap-4 mb-10"
        >
          <span className="h-px w-10 bg-brass" aria-hidden="true" />
          {t.hero.kicker}
        </motion.p>

        <h1 className="font-display italic font-light text-bone text-[clamp(3.1rem,10.5vw,10.5rem)] leading-[0.94] tracking-[-0.025em] max-w-[13ch]">
          {t.hero.lines.map((words, i) => (
            <Words key={i} words={words} offset={offsets[i]} />
          ))}
        </h1>

        <div className="mt-14 md:mt-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 1.4 }}
            className="max-w-md text-ash text-[0.95rem] leading-8"
          >
            {t.hero.paragraph}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex items-center gap-4 self-start md:self-auto"
            aria-hidden="true"
          >
            <span className="label [writing-mode:vertical-rl] rotate-180">{t.hero.scroll}</span>
            <span className="relative block h-16 w-px bg-bone/15 overflow-hidden">
              <span className="absolute inset-0 bg-brass-soft animate-scroll-line" />
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
