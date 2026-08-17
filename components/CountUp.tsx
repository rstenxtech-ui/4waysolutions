"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";

export default function CountUp({
  to,
  className,
}: {
  to: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <motion.span ref={ref} className={className}>
      {value}
    </motion.span>
  );
}
