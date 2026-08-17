"use client";

import { motion } from "motion/react";
import SectionHead from "./SectionHead";
import CountUp from "./CountUp";
import { BENEFITS, waLink } from "@/lib/content";
import { ArrowIcon } from "@/lib/icons";

export default function Benefits() {
  return (
    <section id="benefits" className="py-[clamp(3.5rem,8vw,7rem)] bg-surface-2/60">
      <div className="mx-auto max-w-[1220px] px-5 md:px-8">
        <SectionHead
          eyebrow="02 / Jaquar Customer Benefits"
          title="If it’s Jaquar, this is on us."
          body="Every Jaquar customer gets these four benefits at no cost — no fine print, just standard care."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative grid lg:grid-cols-[1.6fr_1fr] rounded-3xl border border-line bg-surface shadow-[0_32px_64px_-40px_rgba(14,32,51,0.35)] overflow-hidden"
        >
          <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 divide-line">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.mark}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-7 md:p-9 border-line sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(-n+2)]:border-b"
              >
                <span className="font-body text-xs text-brass tracking-widest">
                  {b.mark}
                </span>
                <h4 className="font-heading tracking-wide text-xl text-ink mt-2 mb-1.5">
                  {b.title}
                </h4>
                <p className="text-ink-soft text-[0.92rem] leading-relaxed">
                  {b.body}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="relative flex flex-col items-start justify-center gap-8 bg-brand-strong text-white p-9 md:p-10 before:absolute before:inset-y-0 before:left-0 before:w-px before:border-l-2 before:border-dashed before:border-white/25">
            <div>
              <div className="font-heading tracking-wide text-6xl leading-none">
                <CountUp to={4} />
              </div>
              <p className="mt-3 text-sm text-white/80 max-w-[16rem]">
                Preventive visits, every year, free
              </p>
            </div>
            <a
              href={waLink(
                "Hi 4Way Solutions! I'm a Jaquar customer and I'd like to register a free service call."
              )}
              target="_blank"
              rel="noopener"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white text-brand-strong px-5 py-3 text-sm transition-transform hover:-translate-y-0.5"
            >
              <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-[20deg] bg-brand-soft -translate-x-[250%] transition-transform duration-700 ease-out group-hover:translate-x-[400%]" />
              <span className="relative">Register a service call</span>
              <ArrowIcon className="relative w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
