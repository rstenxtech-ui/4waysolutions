"use client";

import { motion, useMotionTemplate, useSpring } from "motion/react";
import { useRef, type ReactNode, type MouseEvent } from "react";

export default function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 300, damping: 25 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 25 });
  const glowX = useSpring(50, { stiffness: 300, damping: 30 });
  const glowY = useSpring(50, { stiffness: 300, damping: 30 });

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 10);
    rotateX.set((0.5 - py) * 10);
    glowX.set(px * 100);
    glowY.set(py * 100);
  }

  function onMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const glowBg = useMotionTemplate`radial-gradient(280px circle at ${glowX}% ${glowY}%, var(--brand-soft), transparent 70%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      <motion.div
        aria-hidden
        style={{ backgroundImage: glowBg }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {children}
    </motion.div>
  );
}
