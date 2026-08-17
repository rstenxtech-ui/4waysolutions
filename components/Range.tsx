"use client";

import Image from "next/image";
import { motion } from "motion/react";
import SectionHead from "./SectionHead";
import { RANGE_CATEGORIES } from "@/lib/content";

export default function Range() {
  return (
    <section id="range" className="py-[clamp(3.5rem,8vw,7rem)]">
      <div className="mx-auto max-w-[1220px] px-5 md:px-8">
        <SectionHead
          eyebrow="03 / Product Range"
          title="Every Jaquar category, one call away."
          body="We sell, install and service the full Jaquar catalogue — explore what we cover."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {RANGE_CATEGORIES.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-line bg-surface overflow-hidden transition-shadow hover:shadow-[0_24px_48px_-28px_rgba(14,32,51,0.35)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-2">
                <Image
                  src={c.image}
                  alt={`${c.title} — Jaquar`}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-3 left-3 font-body text-[0.65rem] text-white/90 bg-ink/40 backdrop-blur-sm rounded-full px-2 py-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-heading tracking-wide text-[1.05rem] sm:text-xl text-ink leading-snug">
                  {c.label}
                </h3>
                <p className="hidden sm:block mt-1.5 text-ink-soft text-sm leading-relaxed line-clamp-2">
                  {c.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
