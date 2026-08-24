"use client";

import { useRef, type ComponentType } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import * as Icons from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { steps } from "@/data/site";
import { Reveal } from "@/lib/motion";

type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;
const iconMap = Icons as unknown as Record<string, IconType>;

function TicketCard({
  step,
  index,
  align,
}: {
  step: (typeof steps)[number];
  index: number;
  align: "left" | "right";
}) {
  const Icon = iconMap[step.icon] ?? Icons.MapPin;
  return (
    <div
      className={`relative flex w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-lift ${
        align === "right" ? "lg:ml-auto" : ""
      }`}
    >
      {/* stub */}
      <div className="relative flex w-20 flex-none flex-col items-center justify-center gap-2 gradient-primary px-2 py-6 sm:w-24">
        <Icon className="h-6 w-6 text-white" strokeWidth={2} />
        <span className="font-ticket text-[10px] font-semibold tracking-[0.18em] text-white/70">
          {step.code}
        </span>
        {/* perforation notches, punched through to the section backdrop */}
        <span className="absolute left-20 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-navy-dark ring-2 ring-navy-dark sm:left-24" />
        <span className="absolute bottom-3 left-20 h-3 w-3 -translate-x-1/2 rounded-full bg-navy-dark ring-2 ring-navy-dark sm:left-24" />
      </div>

      {/* content */}
      <div className="flex flex-1 flex-col justify-center gap-1 border-l border-dashed border-border px-5 py-5">
        <p className="font-ticket text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
          Leg 0{index + 1}
        </p>
        <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">{step.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
      </div>
    </div>
  );
}

export function HowItWorks() {
  const trackRef = useRef<HTMLOListElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.8", "end 0.55"],
  });
  const planeTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden bg-navy-dark py-20 lg:py-28">
      {/* night-sky texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-glow/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/15 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="How It Works"
            title={
              <>
                Your medical journey in <span className="text-secondary">6 simple steps</span>
              </>
            }
            description="A guided, transparent process — designed for peace of mind at every stage."
          />
        </Reveal>

        {/* boarding-pass route strip */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex items-center justify-center gap-3 font-ticket text-[11px] uppercase tracking-[0.2em] text-white/50">
            <span className="rounded border border-white/15 px-2.5 py-1">Your Home</span>
            <span className="h-px w-8 bg-white/20 sm:w-16" />
            <Icons.Plane className="h-4 w-4 text-secondary" strokeWidth={2} />
            <span className="h-px w-8 bg-white/20 sm:w-16" />
            <span className="rounded border border-secondary/40 bg-secondary/10 px-2.5 py-1 text-secondary">
              India
            </span>
          </div>
        </Reveal>

        <div className="relative mt-16">
          {/* flight path baseline */}
          <div
            className="absolute left-6 top-0 h-full w-px -translate-x-1/2 lg:left-1/2"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, color-mix(in oklab, white 25%, transparent) 0 6px, transparent 6px 14px)",
            }}
          />
          {/* flight path flown so far */}
          <motion.div
            className="absolute left-6 top-0 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-secondary to-primary-glow lg:left-1/2"
            style={{
              height: "100%",
              scaleY: prefersReducedMotion ? 1 : scrollYProgress,
              transformOrigin: "top",
            }}
          />
          {/* departure marker */}
          <div className="absolute left-6 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:left-1/2">
            <div className="grid h-9 w-9 place-items-center rounded-full border-2 border-navy-dark bg-white text-navy-dark shadow-lift">
              <Icons.PlaneTakeoff className="h-4 w-4" strokeWidth={2} />
            </div>
          </div>
          {/* arrival marker */}
          <div className="absolute bottom-0 left-6 flex -translate-x-1/2 translate-y-1/2 items-center justify-center lg:left-1/2">
            <div className="grid h-9 w-9 place-items-center rounded-full border-2 border-navy-dark bg-secondary text-navy-dark shadow-lift">
              <Icons.PlaneLanding className="h-4 w-4" strokeWidth={2} />
            </div>
          </div>
          {/* traveling plane, position tied to scroll progress */}
          {!prefersReducedMotion && (
            <motion.div
              aria-hidden
              className="absolute left-6 z-10 -translate-x-1/2 -translate-y-1/2 lg:left-1/2"
              style={{ top: planeTop }}
            >
              <div className="grid h-8 w-8 place-items-center rounded-full bg-white text-navy-dark shadow-lift ring-4 ring-navy-dark">
                <Icons.Plane className="h-4 w-4 rotate-90" strokeWidth={2.25} />
              </div>
            </motion.div>
          )}

          <ol ref={trackRef} className="relative space-y-10 py-10 lg:space-y-16">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={step.title}
                  initial={
                    prefersReducedMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: isLeft ? -28 : 28, y: 12 }
                  }
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-14 sm:pl-20 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:pl-0"
                >
                  <div className={`lg:col-start-1 ${isLeft ? "lg:flex lg:justify-end" : ""}`}>
                    {isLeft && <TicketCard step={step} index={i} align="right" />}
                  </div>
                  <div className="lg:col-start-2">
                    {!isLeft && <TicketCard step={step} index={i} align="left" />}
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
