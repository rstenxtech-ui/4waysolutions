"use client";

import { motion } from "motion/react";
import SectionHead from "./SectionHead";
import TiltCard from "./TiltCard";
import { SERVICES } from "@/lib/content";
import { DropIcon, SprayIcon, WrenchIcon } from "@/lib/icons";

const iconMap = { drop: DropIcon, wrench: WrenchIcon, spray: SprayIcon };

export default function Services() {
  return (
    <section id="services" className="py-[clamp(3.5rem,8vw,7rem)]">
      <div className="mx-auto max-w-[1220px] px-5 md:px-8">
        <SectionHead
          eyebrow="01 / Scope of Work"
          title="Three services. One accountable team."
          body="From the first tap installed to the last window washed — everything runs through the same team, so nothing gets lost between vendors."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                key={s.idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="h-full"
              >
                <TiltCard className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-8 overflow-hidden transition-shadow hover:shadow-[0_28px_56px_-32px_rgba(14,32,51,0.35)]">
                  <span className="absolute -top-2 right-4 font-heading text-[5rem] leading-none text-line select-none transition-colors group-hover:text-brand-soft">
                    {s.idx}
                  </span>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand-strong mb-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="relative font-heading tracking-wide text-xl text-ink mb-2.5">
                    {s.title}
                  </h3>
                  <p className="relative text-ink-soft text-[0.95rem] leading-relaxed">
                    {s.body}
                  </p>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brand to-brass transition-[width] duration-500 group-hover:w-full" />
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
