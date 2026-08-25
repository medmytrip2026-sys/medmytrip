"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "./SectionHeading";
import { treatments } from "@/data/site";
import { Reveal } from "@/lib/motion";

export function Treatments() {
  const featured = treatments.filter((t) => t.featured);

  return (
    <section id="treatments" className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Treatments"
            title={<>Specialised care across <span className="text-primary">every discipline</span></>}
            description="From routine procedures to complex surgeries, our specialists handle the full spectrum of care."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((t, i) => {
            const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[t.icon] ?? Icons.Activity;
            return (
              <motion.div
                key={t.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                whileHover={{ y: -4 }}
              >
                <Link
                  href={`/treatments?category=${t.category}#${t.slug}`}
                  className="group relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-soft transition-shadow hover:border-primary/30 hover:shadow-lift"
                >
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 gradient-primary transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold leading-snug text-foreground sm:text-base">{t.name}</h3>
                  <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/treatments"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white px-6 py-3 text-sm font-bold text-primary shadow-soft transition-all hover:bg-primary hover:text-white hover:shadow-lift"
          >
            View All Treatments
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
