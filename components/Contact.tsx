"use client";

import { motion } from "motion/react";
import SectionHead from "./SectionHead";
import { ChatIcon, MailIcon, PhoneIcon, PinIcon } from "@/lib/icons";
import {
  ADDRESS_LINES,
  EMAIL,
  LANDLINE_DISPLAY,
  LANDLINE_TEL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  waLink,
} from "@/lib/content";

const rows = [
  { icon: PhoneIcon, label: "Phone", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
  {
    icon: ChatIcon,
    label: "WhatsApp",
    value: PHONE_DISPLAY,
    href: waLink("Hi 4Way Solutions! I found your number online and wanted to get in touch."),
    external: true,
  },
  { icon: PhoneIcon, label: "Landline", value: LANDLINE_DISPLAY, href: `tel:${LANDLINE_TEL}` },
  { icon: MailIcon, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
];

export default function Contact() {
  return (
    <section id="contact" className="py-[clamp(3.5rem,8vw,7rem)]">
      <div className="mx-auto max-w-[1220px] px-5 md:px-8">
        <SectionHead
          eyebrow="05 / Get in Touch"
          title="Talk to us."
          body="Call, message or write in — whichever is easiest."
        />

        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-line divide-y divide-line overflow-hidden bg-surface"
          >
            {rows.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target={r.external ? "_blank" : undefined}
                rel={r.external ? "noopener" : undefined}
                className="group flex items-center gap-4 p-5 transition-colors hover:bg-surface-2"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-strong transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <r.icon className="w-5 h-5" />
                </span>
                <span>
                  <span className="block font-body text-[0.65rem] uppercase tracking-[0.1em] text-ink-faint">
                    {r.label}
                  </span>
                  <span className="block font-body text-ink">
                    {r.value}
                  </span>
                </span>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-line bg-surface-2/60 p-7 md:p-8 flex flex-col justify-between gap-6"
          >
            <div>
              <span className="block font-body text-[0.65rem] uppercase tracking-[0.1em] text-ink-faint mb-3">
                Address
              </span>
              <p className="text-ink leading-relaxed">
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm text-ink transition-colors hover:border-brand hover:text-brand-strong"
            >
              <PinIcon className="w-4 h-4" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
