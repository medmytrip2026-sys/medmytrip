"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { treatments, contactInfo, type TreatmentCategory } from "@/data/site";

const categories: TreatmentCategory[] = ["Medical", "Aesthetic", "Wellness"];

function whatsappLink(treatmentName: string) {
  const text = `Hello MedMyTrip, I would like to know more about ${treatmentName} treatment in India.`;
  return `https://wa.me/${contactInfo.whatsappIndia}?text=${encodeURIComponent(text)}`;
}

export function TreatmentsExplorer() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as TreatmentCategory | null) ?? "Medical";
  const [active, setActive] = useState<TreatmentCategory>(
    categories.includes(initialCategory) ? initialCategory : "Medical",
  );

  useEffect(() => {
    const requested = searchParams.get("category") as TreatmentCategory | null;
    if (requested && categories.includes(requested)) setActive(requested);
  }, [searchParams]);

  const grouped = useMemo(
    () => categories.map((c) => ({ category: c, items: treatments.filter((t) => t.category === c) })),
    [],
  );

  const activeItems = grouped.find((g) => g.category === active)?.items ?? [];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-border bg-card p-1.5 shadow-soft sm:mx-auto sm:w-fit">
        {categories.map((c) => {
          const count = grouped.find((g) => g.category === c)?.items.length ?? 0;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                active === c ? "text-white" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {active === c && (
                <motion.span
                  layoutId="treatment-tab"
                  className="absolute inset-0 rounded-full gradient-primary"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative">
                {c} Treatments <span className="opacity-70">({count})</span>
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {activeItems.map((t, i) => {
            const Icon =
              (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[t.icon] ??
              Icons.Activity;
            return (
              <motion.div
                id={t.slug}
                key={t.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                whileHover={{ y: -4 }}
                className="group scroll-mt-28 flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:border-primary/30 hover:shadow-lift"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary/10 px-2.5 py-1 text-xs font-bold text-secondary">
                    <Star className="h-3 w-3 fill-secondary" /> {t.rating}%
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold leading-snug text-foreground">{t.name}</h3>
                  <p className="mt-1 text-xs font-semibold text-muted-foreground">
                    {t.rating}% Rated Value for Money
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-2 pt-2">
                  <div>
                    <p className="text-[11px] font-semibold text-muted-foreground">Packages Starting from</p>
                    <p className="text-sm font-extrabold text-primary">${t.startingPrice.toLocaleString()}</p>
                  </div>
                  <a
                    href={whatsappLink(t.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-2 text-xs font-bold text-primary transition-all hover:bg-primary hover:text-white"
                  >
                    Consult <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      <div className="mt-14 flex justify-center">
        <a
          href={contactInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-bold text-white shadow-soft transition-all hover:scale-[1.02] hover:shadow-lift"
        >
          <MessageCircle className="h-4 w-4" /> Not sure which treatment you need? Talk to us
        </a>
      </div>
    </section>
  );
}
