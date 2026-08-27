"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { testimonials } from "@/data/site";
import { Reveal } from "@/lib/motion";

const PAGE_SIZE = 2;

export function Testimonials() {
  const pageCount = Math.ceil(testimonials.length / PAGE_SIZE);
  const [page, setPage] = useState(0);
  const pair = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  const go = (d: number) => setPage((v) => (v + d + pageCount) % pageCount);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Patient Stories"
          title={
            <>
              Real journeys, <span className="text-primary">real recoveries</span>
            </>
          }
          description="Hear from patients around the world who trusted us with their care in India."
        />
      </Reveal>

      <div className="mt-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2"
          >
            {pair.map((t) => (
              <div
                key={t.name}
                className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-lift"
              >
                <Quote
                  className="absolute right-6 top-6 h-20 w-20 text-primary/5"
                  strokeWidth={1.5}
                />
                <div className="flex items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="h-16 w-16 shrink-0 rounded-2xl object-cover shadow-soft"
                  />
                  <div className="ml-4 flex flex-col justify-center">
                    <p className="font-display text-base font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.country}</p>
                    <div className="mt-1.5 flex items-center gap-0.5 text-amber-500">
                      {[...Array(t.rating)].map((_, k) => (
                        <Star key={k} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <span className="mt-5 inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
                    {t.treatment}
                  </span>
                  <p className="mt-4 text-base leading-relaxed text-foreground">"{t.quote}"</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => go(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:bg-primary hover:text-white"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: pageCount }).map((_, k) => (
              <button
                key={k}
                onClick={() => setPage(k)}
                aria-label={`Go to slide ${k + 1}`}
                className={`h-2 rounded-full transition-all ${k === page ? "w-8 bg-primary" : "w-2 bg-border"}`}
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
