"use client";

import { motion } from "motion/react";

export default function SectionHead({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl mb-12 md:mb-16 ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="font-body text-xs tracking-[0.14em] uppercase text-brass mb-3">
        {eyebrow}
      </p>
      <h2 className="font-heading tracking-wide text-ink text-[clamp(2.1rem,4vw,3.4rem)] leading-[1]">
        {title}
      </h2>
      {body && <p className="mt-4 text-ink-soft text-[1.05rem]">{body}</p>}
    </motion.div>
  );
}
