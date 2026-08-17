"use client";

import { motion } from "motion/react";
import { ArrowIcon, CheckIcon } from "@/lib/icons";
import { waLink } from "@/lib/content";

const points = [
  "Scheduled preventive visits across all units",
  "Genuine spares and cartridges on call",
  "Single invoice, single contract, one team",
];

export default function AMC() {
  return (
    <section id="amc" className="py-[clamp(3.5rem,8vw,7rem)] bg-surface-2/60">
      <div className="mx-auto max-w-[1220px] px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-body text-xs tracking-[0.14em] uppercase text-brass mb-3">
              04 / For Apartments &amp; Societies
            </p>
            <h2 className="font-heading tracking-wide text-ink text-[clamp(2.1rem,4vw,3.4rem)] leading-[1] mb-4">
              One contract. Every tap covered.
            </h2>
            <p className="text-ink-soft text-[1.05rem] max-w-lg">
              Facility managers and residents&rsquo; associations rely on us for
              scheduled Jaquar maintenance across entire buildings — one AMC, one
              point of contact, no chasing separate vendors per block.
            </p>
            <ul className="mt-7 space-y-3.5">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-ink">
                  <CheckIcon className="w-5 h-5 mt-0.5 shrink-0 text-brand" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a
              href={waLink(
                "Hi 4Way Solutions! I manage an apartment/society and I'd like to enquire about your AMC plans."
              )}
              target="_blank"
              rel="noopener"
              className="group relative mt-9 inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-brass text-white px-6 py-3.5 shadow-[0_20px_40px_-18px_rgba(184,130,62,0.6)] transition-transform hover:-translate-y-0.5"
            >
              <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-[20deg] bg-white/25 -translate-x-[250%] transition-transform duration-700 ease-out group-hover:translate-x-[400%]" />
              <span className="relative">Enquire about AMC</span>
              <ArrowIcon className="relative w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ rotate: -0.5 }}
            className="relative rounded-3xl bg-gradient-to-br from-brand-strong to-[#082C48] text-white p-10 md:p-14 overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, white 0, transparent 45%)",
              }}
            />
            <div className="relative font-heading tracking-wide text-[5rem] md:text-[6rem] leading-none">
              AMC
            </div>
            <p className="relative mt-6 text-white/85 max-w-sm">
              Annual Maintenance Contract — the same free preventive-visit
              standard we give individual Jaquar customers, scaled to a full
              apartment complex.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
