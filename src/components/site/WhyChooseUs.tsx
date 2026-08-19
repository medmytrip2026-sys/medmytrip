"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { whyChooseUs } from "@/data/site";
import { Reveal } from "@/lib/motion";

export function WhyChooseUs() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>The trusted bridge between <span className="text-primary">Bangladesh &amp; India</span></>}
          description="Personalised, Bangla-first medical concierge — from your first WhatsApp message to a safe return home."
        />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((f, i) => {
          const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>)[f.icon] ?? Icons.Check;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-white shadow-soft">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
