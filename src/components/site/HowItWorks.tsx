"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { steps } from "@/data/site";
import { Reveal } from "@/lib/motion";

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title={<>Your medical journey in <span className="text-primary">6 simple steps</span></>}
            description="A guided, transparent process — designed for peace of mind at every stage."
          />
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent lg:left-1/2 lg:-translate-x-1/2 lg:block" />
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent lg:hidden" />

          <ol className="space-y-8 lg:space-y-14">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative grid grid-cols-[3rem_1fr] items-start gap-5 lg:grid-cols-2 lg:gap-16 ${
                    isLeft ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className={`hidden lg:block ${isLeft ? "text-right pr-12" : "pl-12"}`}>
                    <div className="inline-block max-w-md rounded-2xl border border-border bg-card p-6 text-left shadow-soft">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary">Step {i + 1}</p>
                      <h3 className="mt-2 text-xl font-bold text-foreground">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                    </div>
                  </div>

                  <div className="relative flex items-start lg:justify-center">
                    <div className="absolute left-6 top-3 -translate-x-1/2 lg:left-1/2">
                      <div className="grid h-12 w-12 place-items-center rounded-full gradient-primary text-lg font-extrabold text-white shadow-lift ring-4 ring-background">
                        {i + 1}
                      </div>
                    </div>
                  </div>

                  <div className="lg:hidden">
                    <div className="ml-6 rounded-2xl border border-border bg-card p-5 shadow-soft">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-primary">Step {i + 1}</p>
                      <h3 className="mt-1 text-base font-bold text-foreground">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
