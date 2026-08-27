"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, BadgeCheck, Search } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { hospitals as allHospitals } from "@/data/site";
import { Reveal } from "@/lib/motion";

export function Hospitals({
  limit,
  showFilters = false,
  showHeading = true,
}: {
  limit?: number;
  showFilters?: boolean;
  showHeading?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("All");
  const [spec, setSpec] = useState("All");
  const [accred, setAccred] = useState("All");

  const cities = useMemo(
    () => ["All", ...Array.from(new Set(allHospitals.map((h) => h.city)))],
    [],
  );
  const specs = useMemo(() => {
    const set = new Set<string>();
    allHospitals.forEach((h) => h.specialities.forEach((s) => set.add(s)));
    return ["All", ...Array.from(set)];
  }, []);
  const accreds = useMemo(
    () => ["All", ...Array.from(new Set(allHospitals.map((h) => h.accreditation)))],
    [],
  );

  const filtered = useMemo(() => {
    let list = allHospitals;
    if (city !== "All") list = list.filter((h) => h.city === city);
    if (spec !== "All") list = list.filter((h) => h.specialities.includes(spec));
    if (accred !== "All") list = list.filter((h) => h.accreditation === accred);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (h) =>
          h.name.toLowerCase().includes(q) ||
          h.location.toLowerCase().includes(q) ||
          h.description.toLowerCase().includes(q),
      );
    }
    if (limit) list = list.slice(0, limit);
    return list;
  }, [query, city, spec, accred, limit]);

  return (
    <section
      id="hospitals"
      className="relative overflow-hidden bg-gradient-to-b from-muted/40 to-background py-20 lg:py-2"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <Reveal>
            <SectionHeading
              eyebrow="Partner Hospitals"
              title={
                <>
                  India's <span className="text-primary">most accredited</span> medical facilities
                </>
              }
              description="JCI and NABH accredited hospitals with world-class infrastructure and outcomes."
            />
          </Reveal>
        )}

        {showFilters && (
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_auto]">
            <label className="flex items-center gap-2 rounded-xl border border-border bg-background px-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search hospitals…"
                className="w-full bg-transparent py-2.5 text-sm outline-none"
              />
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none cursor-pointer"
            >
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c === "All" ? "All Cities" : c}
                </option>
              ))}
            </select>
            <select
              value={spec}
              onChange={(e) => setSpec(e.target.value)}
              className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none cursor-pointer"
            >
              {specs.map((s) => (
                <option key={s} value={s}>
                  {s === "All" ? "All Specialties" : s}
                </option>
              ))}
            </select>
            <select
              value={accred}
              onChange={(e) => setAccred(e.target.value)}
              className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none cursor-pointer"
            >
              {accreds.map((a) => (
                <option key={a} value={a}>
                  {a === "All" ? "All Accreditations" : a}
                </option>
              ))}
            </select>
            <button
              onClick={() => {
                setQuery("");
                setCity("All");
                setSpec("All");
                setAccred("All");
              }}
              className="rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 px-4 py-2.5 text-sm font-bold text-primary transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!query && city === "All" && spec === "All" && accred === "All"}
            >
              Reset
            </button>
          </div>
        )}

        {showFilters && (
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
            hospital{filtered.length === 1 ? "" : "s"}
          </p>
        )}

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {filtered.map((h, i) => (
            <motion.article
              key={h.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift"
            >
              <Link href={`/hospitals/${h.id}`} className="block">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={typeof h.image === "string" ? h.image : h.image.src}
                    alt={h.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-3">
                    <div className="text-white">
                      <h3 className="text-xl font-bold leading-tight drop-shadow transition-colors group-hover:text-primary">
                        {h.name}
                      </h3>
                      <p className="flex items-center gap-1 text-sm text-white/90 transition-colors group-hover:text-primary">
                        <MapPin className="h-3.5 w-3.5 transition-colors group-hover:text-primary" />{" "}
                        {h.location}
                      </p>
                    </div>
                  </div>
                  <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
                    <BadgeCheck className="h-3 w-3" /> {h.accreditation} Accredited
                  </span>
                </div>
              </Link>
              <div className="p-6">
                <h4 className="mb-2 text-base font-bold text-primary">{h.name}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{h.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {h.specialities.map((sp) => (
                    <span
                      key={sp}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
                    >
                      {sp}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/hospitals/${h.id}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition-transform hover:translate-x-1"
                >
                  View Hospital <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {showFilters && filtered.length === 0 && (
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
            No hospitals match these filters. Adjust the filters or contact us for a personalised
            match.
          </div>
        )}
      </div>
    </section>
  );
}
