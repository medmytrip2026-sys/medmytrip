"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/site";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={contactInfo.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] py-3 pl-3 pr-4 text-sm font-bold text-white shadow-lift hover:scale-105 transition-transform"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-full bg-white/15">
        <MessageCircle className="h-5 w-5" />
        <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
      </span>
    </motion.a>
  );
}
