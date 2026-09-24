"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "p" | "figure" | "article";
};

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, className, delay = 0, y = 32, as = "div" }: Props) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1, ease, delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}
