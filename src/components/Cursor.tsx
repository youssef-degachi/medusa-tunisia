"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const INTERACTIVE = "a, button, select, input, textarea, label, [data-cursor]";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const scale = useMotionValue(1);
  const opacity = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 420, damping: 40, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 420, damping: 40, mass: 0.6 });
  const sScale = useSpring(scale, { stiffness: 260, damping: 26 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    document.documentElement.classList.add("has-cursor");

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      opacity.set(1);
    };
    const onOver = (e: PointerEvent) => {
      const target = e.target as Element | null;
      scale.set(target?.closest(INTERACTIVE) ? 2.6 : 1);
    };
    const onLeave = () => opacity.set(0);
    const onEnter = () => opacity.set(1);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [x, y, scale, opacity]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[70] hidden [@media(hover:hover)_and_(pointer:fine)]:block"
      style={{ x: sx, y: sy, opacity }}
    >
      <motion.div
        className="relative -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full border border-brass-soft"
        style={{ scale: sScale }}
      />
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-[3px] w-[3px] rounded-full bg-brass-soft" />
    </motion.div>
  );
}
