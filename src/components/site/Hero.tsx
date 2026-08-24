"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, FileText, CreditCard, Activity, Siren, FileEdit } from "lucide-react";
import heroImg from "@/assets/hero_medmytrip.png";

export function Hero() {
  return (
    <section id="home" className="relative isolate w-full overflow-hidden min-h-[600px] flex items-center pt-24 pb-10 lg:pt-28 lg:pb-16">
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroImg.src}
          className="h-full w-full object-cover object-center opacity-90"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Subtle white/blue gradient to make text readable but keep video bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#003B71] sm:text-5xl lg:text-[3.5rem]">
            India's Largest <br/> Medical Travel Company
          </h1>
          <p className="mt-4 text-lg font-medium text-slate-700 sm:text-xl">
            A mission of hope, healing, and health
          </p>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            MedMyTrip guides international patients through every step of treatment in India —
            from first enquiry and doctor selection to travel, recovery and follow-up care.
          </p>
          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full gradient-primary px-8 py-3.5 text-sm font-bold text-white shadow-lift transition-transform hover:scale-[1.03]"
          >
            Book Consultation <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Action Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { icon: CalendarCheck, title: "Book Appointment" },
            { icon: FileText, title: "Second Opinion" },
            { icon: CreditCard, title: "Global Wellness Card" },
            { icon: Activity, title: "Health Packages" },
          ].map((card, i) => (
            <div
              key={card.title}
              className="group flex cursor-pointer items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,102,204,0.15)]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0066CC] transition-colors group-hover:bg-[#0066CC] group-hover:text-white">
                <card.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-bold text-[#003B71] leading-tight">
                {card.title}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Side Buttons */}
      <a
        href="#contact"
        className="fixed left-0 top-1/2 z-40 -translate-y-1/2 rounded-r-lg bg-[#DC3545] p-2 text-white shadow-lg transition-transform hover:scale-105 hidden lg:flex flex-col items-center justify-center text-center w-[72px]"
      >
        <Siren className="h-6 w-6 mb-1" />
        <span className="text-[10px] font-bold leading-tight">Contact for<br/>Emergency</span>
      </a>

      <a
        href="#contact"
        className="fixed right-0 top-1/2 z-40 -translate-y-1/2 rounded-l-lg bg-[#F39B1F] p-2 text-white shadow-lg transition-transform hover:scale-105 hidden lg:flex flex-col items-center justify-center text-center w-[72px]"
      >
        <FileEdit className="h-6 w-6 mb-1" />
        <span className="text-[10px] font-bold leading-tight">Write to<br/>CEO</span>
      </a>
    </section>
  );
}
