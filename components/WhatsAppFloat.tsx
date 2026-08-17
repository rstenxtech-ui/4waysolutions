"use client";

import { motion } from "motion/react";
import { WhatsAppIcon } from "@/lib/icons";
import { waLink } from "@/lib/content";

export default function WhatsAppFloat() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      href={waLink(
        "Hi 4Way Solutions! 👋 My tap's acting up and I hear you're Chennai's Jaquar experts — got a minute to help?"
      )}
      target="_blank"
      rel="noopener"
      aria-label="Chat with 4Way Solutions on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_32px_-12px_rgba(0,0,0,0.4)]"
    >
      <WhatsAppIcon className="relative w-7 h-7" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-ink px-3 py-1.5 font-body text-xs text-bg opacity-0 transition-opacity group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
