"use client";

import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ChatIcon, PhoneIcon } from "@/lib/icons";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "@/lib/content";

const headline = ["Water is", "everything.", "We keep yours running right."];

const ambientShimmers = [
  { left: "12%", size: 6, duration: 8, delay: 0, opacity: 0.65, blur: "0px" },
  { left: "22%", size: 10, duration: 11, delay: 1.4, opacity: 0.45, blur: "1px" },
  { left: "32%", size: 4, duration: 7.5, delay: 0.5, opacity: 0.7, blur: "0px" },
  { left: "46%", size: 12, duration: 12, delay: 2.2, opacity: 0.35, blur: "2px" },
  { left: "62%", size: 8, duration: 9.5, delay: 0.9, opacity: 0.5, blur: "1px" },
  { left: "75%", size: 5, duration: 7, delay: 1.8, opacity: 0.6, blur: "0px" },
  { left: "86%", size: 11, duration: 10.5, delay: 0.4, opacity: 0.4, blur: "1.5px" },
  { left: "94%", size: 5, duration: 6.8, delay: 2.5, opacity: 0.55, blur: "0px" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "200px 0px 200px 0px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-[#060E17]"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110 will-change-transform">
          <Image
            src="/Hero_background2.png"
            alt="Opulent luxury master bathroom with emerald marble finishes, illuminated vanity, crystal chandeliers, and freestanding soaking tub"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center contrast-[1.04] saturate-[1.06]"
          />
        </motion.div>

        {/* Ambient Luxury Warmth & Golden Lighting Bloom */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-screen opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 24% 34%, rgba(217, 162, 90, 0.22) 0%, rgba(217, 162, 90, 0.08) 45%, transparent 75%)",
          }}
        />

        {/* Cinematic Scrims: Multi-layer soft gradients for optimal typography contrast while preserving bath luxury */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D15]/95 via-[#060D15]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060D15]/75 via-[#060D15]/25 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050B12]/65 via-[#050B12]/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-bg via-bg/40 to-transparent" />

        {/* Subtle Floating Ambient Luminescence / Shimmer */}
        {inView &&
          ambientShimmers.map((b, i) => (
            <motion.span
              key={i}
              className="absolute bottom-0 rounded-full bg-gradient-to-t from-amber-200/80 to-white/90 shadow-[0_0_12px_rgba(217,162,90,0.8)] will-change-transform"
              style={{
                left: b.left,
                width: b.size,
                height: b.size,
                filter: `blur(${b.blur})`,
              }}
              animate={{
                y: ["0%", "-115vh"],
                x: [0, i % 2 === 0 ? 20 : -20, 0],
                opacity: [0, b.opacity, b.opacity * 0.8, 0],
              }}
              transition={{
                duration: b.duration * 1.8,
                delay: b.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto w-full max-w-[1220px] px-5 pb-20 pt-40 md:px-8 md:pb-28 md:pt-56 z-10"
      >
        {/* Luxury Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-brass/40 bg-gradient-to-r from-brass/20 via-[#0A1622]/70 to-brass/10 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(184,130,62,0.18)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brass opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brass" />
          </span>
          <span className="font-body text-xs md:text-sm tracking-[0.14em] uppercase text-white/95 font-medium">
            Authorised Jaquar Service Partner · Chennai
          </span>
        </motion.div>

        <h1 className="font-heading text-white leading-[0.98] tracking-wide text-[clamp(2.8rem,7.2vw,6rem)] max-w-4xl [text-shadow:0_4px_32px_rgba(0,0,0,0.55)]">
          {headline.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.75,
                  delay: 0.15 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`block ${i === 1 ? "text-brass drop-shadow-[0_2px_16px_rgba(184,130,62,0.35)]" : ""}`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-7 max-w-xl text-[1.05rem] md:text-lg text-white/85 leading-relaxed [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]"
        >
          4Way Solutions is Chennai&rsquo;s authorised partner for Jaquar sales,
          service and genuine spares — plus plumbing and home cleaning, handled
          by one dependable team.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-4 font-heading tracking-wide text-brass text-lg md:text-xl [text-shadow:0_2px_12px_rgba(0,0,0,0.3)]"
        >
          &ldquo;நீரின்றி அமையாது உலகு!&rdquo;{" "}
          <span className="font-body text-sm md:text-base text-white/70 italic">
            — without water, there is no world.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={`tel:${PHONE_TEL}`}
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-brand-strong to-brand border border-white/20 text-white px-6 py-3.5 shadow-[0_16px_36px_-12px_rgba(14,78,130,0.7),0_0_24px_rgba(21,105,167,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_-10px_rgba(14,78,130,0.85),0_0_32px_rgba(21,105,167,0.4)]"
          >
            <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-[20deg] bg-white/25 -translate-x-[250%] transition-transform duration-700 ease-out group-hover:translate-x-[400%]" />
            <PhoneIcon className="relative w-4.5 h-4.5" />
            <span className="relative font-medium">Call {PHONE_DISPLAY}</span>
          </a>
          <a
            href={waLink(
              "Hi 4Way Solutions! I'd like to know more about your Jaquar sales & service."
            )}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 rounded-full border border-brass/40 bg-black/25 backdrop-blur-md px-6 py-3.5 text-white transition-all duration-300 hover:border-brass hover:bg-brass/15 hover:shadow-[0_0_24px_rgba(184,130,62,0.25)]"
          >
            <ChatIcon className="w-4.5 h-4.5 text-amber-200" />
            <span className="font-medium">Chat on WhatsApp</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/75 z-10"
      >
        <span className="font-body text-[0.65rem] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-brass/90 to-transparent"
        />
      </motion.div>
    </section>
  );
}
