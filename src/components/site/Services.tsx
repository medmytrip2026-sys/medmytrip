"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { services } from "@/data/site";
import { Reveal } from "@/lib/motion";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Everything you need — <span className="text-primary">under one roof</span>
            </>
          }
          description="End-to-end medical travel support so you can focus entirely on recovery."
        />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon =
            (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[
              s.icon
            ] ?? Icons.CheckCircle2;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-start gap-4 rounded-2xl bg-muted/70 p-5 transition-colors hover:bg-muted"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
