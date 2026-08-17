"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const HUMP =
  "M0,60 C300,20 300,100 600,60 C900,20 900,100 1200,60 L1200,120 L0,120 Z";

export default function WaveDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "200px 0px 200px 0px" });

  return (
    <div ref={ref} className="relative h-14 md:h-20 overflow-hidden bg-bg">
      <motion.svg
        viewBox="0 0 2400 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-[200%] will-change-transform"
        animate={inView ? { x: ["0%", "-50%"] } : undefined}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        <path d={HUMP} fill="var(--brand-soft)" opacity={0.7} />
        <path d={HUMP} transform="translate(1200,0)" fill="var(--brand-soft)" opacity={0.7} />
      </motion.svg>
      <motion.svg
        viewBox="0 0 2400 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-[200%] translate-y-2 will-change-transform"
        animate={inView ? { x: ["-50%", "0%"] } : undefined}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <path d={HUMP} fill="var(--surface)" />
        <path d={HUMP} transform="translate(1200,0)" fill="var(--surface)" />
      </motion.svg>
    </div>
  );
}
