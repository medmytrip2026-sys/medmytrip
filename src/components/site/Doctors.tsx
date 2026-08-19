"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Building2,
  CalendarCheck,
  Search,
  MapPin,
  GraduationCap,
  Briefcase,
  Sparkles,
  BookOpen,
  CheckCircle2,
  PhoneCall,
  X,
  Stethoscope,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { doctors as allDoctors, contactInfo } from "@/data/site";
import { Reveal } from "@/lib/motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Doctors({
  limit,
  showFilters = false,
  showHeading = true,
}: {
  limit?: number;
  showFilters?: boolean;
  showHeading?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [spec, setSpec] = useState("All");
  const [city, setCity] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState<(typeof allDoctors)[0] | null>(null);

  const specialties = useMemo(
    () => ["All", ...Array.from(new Set(allDoctors.map((d) => d.specialization)))],
    [],
  );
  const cities = useMemo(() => ["All", ...Array.from(new Set(allDoctors.map((d) => d.city)))], []);

  const filtered = useMemo(() => {
    let list = allDoctors;
    if (spec !== "All") list = list.filter((d) => d.specialization === spec);
    if (city !== "All") list = list.filter((d) => d.city === city);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.specialization.toLowerCase().includes(q) ||
          d.hospital.toLowerCase().includes(q),
      );
    }
    if (limit) list = list.slice(0, limit);
    return list;
  }, [query, spec, city, limit]);

  const handleWhatsAppBooking = (
    doctorName: string,
    specialization: string,
    hospital: string,
    city: string,
  ) => {
    const text = `Hello HealthBridgeIn, I would like to book a consultation with ${doctorName} (${specialization}) at ${hospital}, ${city}. Please assist me with the appointment booking process.`;
    return `https://wa.me/${contactInfo.whatsappIndia}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="doctors" className="mx-auto max-w-7xl px-4 pt-0 py-2 sm:px-6 lg:px-8 lg:py-1">
      {showHeading && (
        <Reveal>
          <SectionHeading
            eyebrow="Our Doctors"
            title={
              <>
                Meet India's <span className="text-primary">most trusted specialists</span>
              </>
            }
            description="Every doctor is hand-picked for expertise, patient outcomes and compassionate care."
          />
        </Reveal>
      )}

      {showFilters && (
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft sm:grid-cols-[1.4fr_1fr_1fr_auto]">
          <label className="flex items-center gap-2 rounded-xl border border-border bg-background px-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, specialty, hospital…"
              className="w-full bg-transparent py-2.5 text-sm outline-none"
            />
          </label>
          <select
            value={spec}
            onChange={(e) => setSpec(e.target.value)}
            className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none cursor-pointer"
          >
            {specialties.map((s) => (
              <option key={s} value={s}>
                {s === "All" ? "All Specialties" : s}
              </option>
            ))}
          </select>
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
          <button
            onClick={() => {
              setQuery("");
              setSpec("All");
              setCity("All");
            }}
            className="rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 px-4 py-2.5 text-sm font-bold text-primary transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!query && spec === "All" && city === "All"}
          >
            Reset
          </button>
        </div>
      )}

      {showFilters && (
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> doctor
          {filtered.length === 1 ? "" : "s"}
        </p>
      )}

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((d, i) => (
          <motion.article
            key={d.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
            whileHover={{ y: -6 }}
            onClick={() => setSelectedDoctor(d)}
            className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:shadow-lift cursor-pointer flex flex-col justify-between"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
              <img
                src={typeof d.image === "string" ? d.image : d.image.src}
                alt={d.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary shadow-soft">
                <Award className="h-3 w-3" /> Verified
              </span>
              <div className="absolute inset-x-4 bottom-4 text-white">
                <h3 className="text-lg font-bold leading-tight group-hover:text-primary-glow transition-colors">
                  {d.name}
                </h3>
                <p className="text-sm text-white/90 font-medium">{d.specialization}</p>
              </div>
            </div>
            <div className="space-y-3 p-5 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                  {d.designation}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building2 className="h-4 w-4 text-primary shrink-0" />{" "}
                  <span className="line-clamp-1">{d.hospital}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary shrink-0" /> {d.city}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                  <Award className="h-4 w-4 text-primary shrink-0" /> {d.experience} Experience
                </div>
              </div>
              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedDoctor(d);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-2 text-xs font-bold text-primary transition-all hover:bg-primary/10"
                >
                  View Full Profile
                </button>
                <a
                  href={handleWhatsAppBooking(d.name, d.specialization, d.hospital, d.city)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-3 py-2 text-xs font-bold text-white shadow-soft transition-transform hover:scale-[1.02] hover:shadow-lift"
                >
                  <CalendarCheck className="h-3.5 w-3.5" /> Book Now
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {showFilters && filtered.length === 0 && (
        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          No doctors match these filters. Try clearing them or contact us — we'll match you
          personally.
        </div>
      )}

      {/* Doctor Detail Modal */}
      <Dialog
        open={selectedDoctor !== null}
        onOpenChange={(open) => !open && setSelectedDoctor(null)}
      >
        <DialogContent className="max-w-2xl sm:max-w-3xl max-h-[90vh] overflow-hidden p-0 rounded-3xl border border-border bg-card shadow-lift flex flex-col">
          {selectedDoctor && (
            <>
              {/* Header Banner */}
              <div className="relative gradient-primary p-6 text-white flex justify-between items-start shrink-0">
                <div className="space-y-1.5 max-w-[90%]">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                    <Stethoscope className="h-3.5 w-3.5" /> Verified Specialist
                  </div>
                  <DialogTitle className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                    {selectedDoctor.name}
                  </DialogTitle>
                  <DialogDescription className="text-white/90 text-sm sm:text-base font-medium">
                    {selectedDoctor.designation}
                  </DialogDescription>
                </div>
              </div>

              {/* Scrollable Content */}
              <ScrollArea className="flex-1 p-6 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr] gap-6">
                  {/* Left Column - Image & Quick info */}
                  <div className="space-y-4">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-soft border border-border/50 bg-muted">
                      <img
                        src={typeof selectedDoctor.image === "string" ? selectedDoctor.image : selectedDoctor.image.src}
                        alt={selectedDoctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-2xl border border-border bg-muted/40 p-4 space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <Building2 className="h-5 w-5 text-primary shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground font-semibold">HOSPITAL</p>
                          <p className="font-bold text-foreground">{selectedDoctor.hospital}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="h-5 w-5 text-primary shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground font-semibold">LOCATION</p>
                          <p className="font-bold text-foreground">{selectedDoctor.city}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Award className="h-5 w-5 text-primary shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground font-semibold">EXPERIENCE</p>
                          <p className="font-bold text-foreground">{selectedDoctor.experience}</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href={handleWhatsAppBooking(
                        selectedDoctor.name,
                        selectedDoctor.specialization,
                        selectedDoctor.hospital,
                        selectedDoctor.city,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-primary py-3.5 text-sm font-bold text-white shadow-soft transition-all hover:scale-[1.02] hover:shadow-lift"
                    >
                      <CalendarCheck className="h-5 w-5" /> Book Free Consultation
                    </a>
                  </div>

                  {/* Right Column - Qualifications & Details */}
                  <div className="space-y-5">
                    {/* About */}
                    {selectedDoctor.about && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-extrabold uppercase tracking-widest text-primary flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-secondary" /> About Specialist
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {selectedDoctor.about}
                        </p>
                      </div>
                    )}

                    {/* Qualifications */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-extrabold uppercase tracking-widest text-primary flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" /> Qualifications
                      </h4>
                      <ul className="space-y-2.5">
                        {selectedDoctor.qualifications.map((q, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground leading-snug"
                          >
                            <CheckCircle2 className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Post Graduate Training */}
                    {selectedDoctor.training && selectedDoctor.training.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-extrabold uppercase tracking-widest text-primary flex items-center gap-2">
                          <BookOpen className="h-4 w-4" /> Clinical Training
                        </h4>
                        <ul className="space-y-2.5">
                          {selectedDoctor.training.map((t, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                            >
                              <CheckCircle2 className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Fellowships */}
                    {selectedDoctor.fellowships && selectedDoctor.fellowships.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-extrabold uppercase tracking-widest text-primary flex items-center gap-2">
                          <Award className="h-4 w-4" /> Fellowships
                        </h4>
                        <ul className="space-y-2.5">
                          {selectedDoctor.fellowships.map((f, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                            >
                              <CheckCircle2 className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Clinical Focus / Key Services */}
                    {selectedDoctor.clinicalFocus && selectedDoctor.clinicalFocus.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-extrabold uppercase tracking-widest text-primary flex items-center gap-2">
                          <Stethoscope className="h-4 w-4" /> Clinical Focus & Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedDoctor.clinicalFocus.map((cf, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
                            >
                              {cf}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Speciality Interest */}
                    {selectedDoctor.specialityInterest &&
                      selectedDoctor.specialityInterest.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-extrabold uppercase tracking-widest text-primary flex items-center gap-2">
                            <Sparkles className="h-4 w-4" /> Speciality Interests
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {selectedDoctor.specialityInterest.map((si, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-xs text-muted-foreground"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                                <span>{si}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    {/* Procedures */}
                    {selectedDoctor.procedures && selectedDoctor.procedures.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-extrabold uppercase tracking-widest text-primary flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4" /> Key Procedures
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedDoctor.procedures.map((p, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center rounded-lg border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-foreground"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Work Experience */}
                    {selectedDoctor.workExperience && selectedDoctor.workExperience.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-extrabold uppercase tracking-widest text-primary flex items-center gap-2">
                          <Briefcase className="h-4 w-4" /> Work Experience & Research
                        </h4>
                        <ul className="space-y-2.5">
                          {selectedDoctor.workExperience.map((we, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                            >
                              <CheckCircle2 className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                              <span>{we}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Awards */}
                    {selectedDoctor.awards && selectedDoctor.awards.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-extrabold uppercase tracking-widest text-primary flex items-center gap-2">
                          <Award className="h-4 w-4" /> Awards & Recognitions
                        </h4>
                        <ul className="space-y-2.5 border-l border-primary/20 pl-4 py-1">
                          {selectedDoctor.awards.map((aw, idx) => (
                            <li
                              key={idx}
                              className="relative text-sm text-muted-foreground leading-relaxed"
                            >
                              <span className="absolute -left-[21px] top-1 h-2 w-2 rounded-full bg-primary border border-white" />
                              <span>{aw}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollArea>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
