"use client";

import Image from "next/image";
import { motion } from "motion/react";
import CountUp from "./CountUp";
import { CartridgeIcon, DropIcon, PhoneIcon } from "@/lib/icons";

const items = [
  {
    logo: true as const,
    label: "Authorised Partner",
  },
  {
    icon: DropIcon,
    label: "Free Maintenance Visits / Year",
    count: 4,
  },
  {
    icon: PhoneIcon,
    label: "Registration",
    value: "Free Service Call",
  },
  {
    icon: CartridgeIcon,
    label: "Spares",
    value: "All Jaquar Models",
  },
];

export default function SpecStrip() {
  return (
    <div className="relative border-y border-line bg-surface/70 backdrop-blur-sm">
      <div className="mx-auto max-w-[1220px] px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-line">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-3 py-6 px-3 md:px-6"
            >
              {"logo" in it ? (
                <div>
                  <Image
                    src="/logo/jaquar.svg"
                    alt="Jaquar"
                    width={679}
                    height={250}
                    className="h-6 md:h-7 w-auto"
                  />
                  <div className="font-body text-[0.65rem] uppercase tracking-[0.08em] text-ink-faint mt-1.5">
                    {it.label}
                  </div>
                </div>
              ) : (
                <>
                  <it.icon className="w-6 h-6 shrink-0 text-brand" />
                  <div>
                    {"count" in it && it.count !== undefined ? (
                      <div className="font-heading tracking-wide text-2xl md:text-3xl text-ink leading-none">
                        <CountUp to={it.count} />
                      </div>
                    ) : (
                      <div className="font-heading tracking-wide text-[0.95rem] text-ink leading-tight">
                        {it.value}
                      </div>
                    )}
                    <div className="font-body text-[0.65rem] uppercase tracking-[0.08em] text-ink-faint mt-1">
                      {it.label}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
