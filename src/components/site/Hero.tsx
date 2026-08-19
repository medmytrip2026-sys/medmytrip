"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, MessageCircle, ShieldCheck, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { contactInfo } from "@/data/site";

function Counter({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
      return () => controls.stop();
    }
  }, [inView, to, count]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Hero() {
  const wa = contactInfo.whatsappUrl;

  return (
    <section id="home" className="relative isolate overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg.src}
          alt="Modern Indian hospital at golden hour"
          width={1920}
          height={1200}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,transparent_0%,rgba(0,0,0,0.65)_100%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-18 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-white"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/95 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" /> Trusted Medical Travel Partner
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Connecting Bangladeshi Patients to{" "}
            <span className="bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
              Healthcare in India
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            We help Bangladeshi patients connect with India's leading hospitals and experienced
            doctors. From treatment planning to visa assistance, we support every step of your
            medical journey.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary shadow-lift transition-transform hover:scale-[1.03]"
            >
              Book Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-6 py-3.5 text-sm font-bold text-white shadow-lift transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-white/80">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/80?img=${i + 10}`}
                  alt=""
                  loading="lazy"
                  className="h-9 w-9 rounded-full border-2 border-white/70 object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-secondary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-xs">Rated 4.9 by 1000+ patients from Bangladesh</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="grid grid-cols-1 gap-4 rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl sm:grid-cols-3 lg:p-6"
        >
          {[
            { value: 75, label: "Partner Hospitals" },
            { value: 100, label: "Expert Doctors" },
            { value: 1000, label: "Patients Assisted" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl bg-white/95 p-5 text-center shadow-soft">
              <div className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
                <Counter to={s.value} />
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        className="block h-16 w-full text-background"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,80L0,80Z"
        />
      </svg>
    </section>
  );
}
