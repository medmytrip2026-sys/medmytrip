import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Award,
  Building2,
  CalendarCheck,
  MapPin,
  GraduationCap,
  Briefcase,
  Sparkles,
  BookOpen,
  CheckCircle2,
  ArrowLeft,
  Stethoscope,
  MessageCircle,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { doctors, getDoctorById, getRelatedDoctors, contactInfo } from "@/data/site";

const BASE_URL = "https://healthbridge.in";

export function generateStaticParams() {
  return doctors.map((d) => ({ id: d.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const doctor = getDoctorById(id);
  if (!doctor) return {};

  const url = `${BASE_URL}/doctors/${doctor.id}`;
  const description = `${doctor.name} — ${doctor.designation} at ${doctor.hospital}, ${doctor.city}. ${doctor.experience ? `${doctor.experience} of experience. ` : ""}Book a consultation through MedMyTrip.`;
  const image = typeof doctor.image === "string" ? doctor.image : doctor.image.src;

  return {
    title: `${doctor.name} — ${doctor.specialization} in ${doctor.city} | MedMyTrip`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${doctor.name} — ${doctor.specialization}`,
      description,
      url,
      images: [{ url: image }],
    },
  };
}

function imgSrc(image: (typeof doctors)[number]["image"]) {
  return typeof image === "string" ? image : image.src;
}

function handleWhatsAppBooking(doctorName: string, specialization: string, hospital: string) {
  const text = `Hello MedMyTrip, I would like to book a consultation with ${doctorName} (${specialization}) at ${hospital}. Please assist me with the appointment booking process.`;
  return `https://wa.me/${contactInfo.whatsappIndia}?text=${encodeURIComponent(text)}`;
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const doctor = getDoctorById(id);
  if (!doctor) notFound();

  const related = getRelatedDoctors(doctor);
  const url = `${BASE_URL}/doctors/${doctor.id}`;

  const physicianJsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    jobTitle: doctor.designation,
    medicalSpecialty: doctor.specialization,
    image: imgSrc(doctor.image),
    url,
    worksFor: {
      "@type": "MedicalOrganization",
      name: doctor.hospital,
      address: {
        "@type": "PostalAddress",
        addressLocality: doctor.city,
        addressCountry: "IN",
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Doctors", item: `${BASE_URL}/doctors` },
      { "@type": "ListItem", position: 3, name: doctor.name, item: url },
    ],
  };

  const sections: { title: string; icon: typeof GraduationCap; items?: string[] }[] = [
    { title: "Qualifications", icon: GraduationCap, items: doctor.qualifications },
    { title: "Clinical Training", icon: BookOpen, items: doctor.training },
    { title: "Field of Expertise", icon: Stethoscope, items: doctor.fieldOfExpertise },
    { title: "Clinical Focus & Expertise", icon: Stethoscope, items: doctor.clinicalFocus },
    { title: "Speciality Interests", icon: Sparkles, items: doctor.specialityInterest },
    { title: "Key Procedures", icon: CheckCircle2, items: doctor.procedures },
    { title: "Fellowships", icon: Award, items: doctor.fellowships },
    { title: "Work Experience & Research", icon: Briefcase, items: doctor.workExperience },
    { title: "Experience Details", icon: Briefcase, items: doctor.experienceDetails },
    { title: "Awards & Recognitions", icon: Award, items: doctor.awards },
  ].filter((s) => s.items && s.items.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-16 text-white sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_55%)]" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-1 text-xs text-white/70"
            >
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <Link href="/doctors" className="hover:text-white">
                Doctors
              </Link>
              <span>/</span>
              <span className="text-white/90">{doctor.name}</span>
            </nav>
            <Link
              href="/doctors"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Doctors
            </Link>
            <div className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <Stethoscope className="h-3.5 w-3.5" /> Verified Specialist
            </div>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {doctor.name}
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-white/90">{doctor.designation}</p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.8fr]">
            {/* Left column */}
            <div className="space-y-5">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-border/50 bg-muted shadow-soft">
                <img
                  src={imgSrc(doctor.image)}
                  alt={doctor.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="space-y-4 rounded-2xl border border-border bg-muted/40 p-5">
                <div className="flex items-center gap-3 text-sm">
                  <Building2 className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground">HOSPITAL</p>
                    <p className="font-bold text-foreground">{doctor.hospital}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground">LOCATION</p>
                    <p className="font-bold text-foreground">{doctor.city}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Stethoscope className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground">SPECIALIZATION</p>
                    <p className="font-bold text-foreground">{doctor.specialization}</p>
                  </div>
                </div>
                {doctor.experience && (
                  <div className="flex items-center gap-3 text-sm">
                    <Award className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground">EXPERIENCE</p>
                      <p className="font-bold text-foreground">{doctor.experience}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={handleWhatsAppBooking(doctor.name, doctor.specialization, doctor.hospital)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-primary py-3.5 text-sm font-bold text-white shadow-soft transition-all hover:scale-[1.02] hover:shadow-lift"
                >
                  <CalendarCheck className="h-5 w-5" /> Book Free Consultation
                </a>
                <a
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/5 py-3.5 text-sm font-bold text-primary transition-all hover:bg-primary/10"
                >
                  <MessageCircle className="h-5 w-5" /> Ask a Question on WhatsApp
                </a>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8">
              {doctor.about && (
                <div className="space-y-2">
                  <h2 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-primary">
                    <Sparkles className="h-4 w-4 text-secondary" /> About Specialist
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                    {doctor.about}
                  </p>
                </div>
              )}

              {sections.map(({ title, icon: Icon, items }) => (
                <div key={title} className="space-y-2">
                  <h2 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-primary">
                    <Icon className="h-4 w-4" /> {title}
                  </h2>
                  <ul className="space-y-2.5">
                    {items!.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4.5 w-4.5 mt-0.5 shrink-0 text-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {sections.length === 0 && !doctor.about && (
                <p className="text-sm text-muted-foreground">
                  A full profile for this specialist is being confirmed with the hospital.
                  Qualifications, experience and procedure details will be published here once
                  verified. Contact us on WhatsApp for the latest information.
                </p>
              )}
            </div>
          </div>

          {related.length > 0 && (
            <section className="mt-16 border-t border-border pt-12">
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
                Related <span className="text-primary">specialists</span>
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((d) => (
                  <Link
                    key={d.id}
                    href={`/doctors/${d.id}`}
                    className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:shadow-lift"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                      <img
                        src={imgSrc(d.image)}
                        alt={d.name}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute inset-x-4 bottom-4 text-white">
                        <h3 className="text-base font-bold leading-tight group-hover:text-primary-glow transition-colors">
                          {d.name}
                        </h3>
                        <p className="text-xs text-white/90 font-medium">{d.specialization}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Building2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                        <span className="line-clamp-1">{d.hospital}</span>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
