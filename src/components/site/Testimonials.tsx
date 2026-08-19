"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { testimonials } from "@/data/site";
import { Reveal } from "@/lib/motion";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) => setI((v) => (v + d + testimonials.length) % testimonials.length);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Patient Stories"
          title={<>Real journeys, <span className="text-primary">real recoveries</span></>}
          description="Hear from patients across Bangladesh who trusted us with their care in India."
        />
      </Reveal>

      <div className="mt-14">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-lift sm:p-12">
          <Quote className="absolute right-8 top-8 h-24 w-24 text-primary/5" strokeWidth={1.5} />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 gap-8 sm:grid-cols-[auto_1fr] sm:items-center"
            >
              <div className="flex sm:flex-col sm:items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="h-24 w-24 shrink-0 rounded-2xl object-cover shadow-soft sm:h-32 sm:w-32"
                />
                <div className="ml-4 flex flex-col justify-center sm:ml-0 sm:mt-4 sm:items-center sm:text-center">
                  <p className="font-display text-base font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.country}</p>
                  <div className="mt-1.5 flex items-center gap-0.5 text-secondary">
                    {[...Array(t.rating)].map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
                  {t.treatment}
                </span>
                <p className="mt-4 text-lg leading-relaxed text-foreground sm:text-xl">"{t.quote}"</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => go(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:bg-primary hover:text-white"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Go to slide ${k + 1}`}
                className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-border"}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:bg-primary hover:text-white"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
