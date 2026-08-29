"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Reveal, stagger } from "@/lib/motion";

const patientPhotos = Array.from({ length: 11 }, (_, i) => {
  const n = i + 1;
  const ext = n === 11 ? "png" : "jpeg";
  return `/satisfied-patients/patient-${n}.${ext}`;
});

export function SatisfiedPatients() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Happy Patients"
          title={
            <>
              Satisfied patients, <span className="text-primary">proud service</span>
            </>
          }
          description="Moments with patients and families who trusted MedMyTrip for their treatment journey in India."
        />
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6"
      >
        {patientPhotos.map((src, i) => (
          <motion.div
            key={src}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
          >
            <img
              src={src}
              alt={`MedMyTrip patient photo ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
