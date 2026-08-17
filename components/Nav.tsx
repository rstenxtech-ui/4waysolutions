"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/content";
import { PhoneIcon } from "@/lib/icons";

export default function Nav() {
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setCondensed(window.scrollY > 40);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onOutside = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("pointerdown", onOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  const solid = condensed || open;

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,padding] duration-300 ${
        solid
          ? "bg-surface/92 backdrop-blur-sm shadow-[0_8px_30px_-16px_rgba(14,32,51,0.35)] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-[1220px] px-5 md:px-8 flex items-center justify-between gap-4">
        <a
          href="#top"
          aria-label="4Way Solutions — home"
          className="flex items-center shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo/4WaySolutions.png"
            alt="4Way Solutions"
            width={308}
            height={97}
            className="h-11 sm:h-12 md:h-14 w-auto"
            priority
          />
        </a>

        <ul
          className={`hidden lg:flex items-center gap-6 xl:gap-8 font-body text-[0.92rem] transition-colors duration-300 ${
            solid ? "text-ink-soft" : "text-white/90"
          }`}
        >
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-1 transition-colors hover:text-brand-strong after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-brand after:transition-[width] after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className={`hidden sm:inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-body transition-colors duration-300 ${
              solid
                ? "border-line-strong text-ink-soft hover:border-brand hover:text-brand-strong"
                : "border-white/30 text-white/90 hover:border-white/60 hover:text-white"
            }`}
          >
            <PhoneIcon className="w-4 h-4" />
            {PHONE_DISPLAY}
          </a>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className={`lg:hidden touch-manipulation relative w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-md border transition-colors duration-300 ${
              solid ? "border-line-strong" : "border-white/30"
            }`}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className={`block h-[1.5px] w-5 origin-center transition-colors duration-300 ${solid ? "bg-ink" : "bg-white"}`}
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className={`block h-[1.5px] w-5 transition-colors duration-300 ${solid ? "bg-ink" : "bg-white"}`}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className={`block h-[1.5px] w-5 origin-center transition-colors duration-300 ${solid ? "bg-ink" : "bg-white"}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden absolute left-0 right-0 top-full bg-surface/95 backdrop-blur-md border-t border-line"
          >
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 text-ink-soft border-b border-line last:border-none touch-manipulation"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
