import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Award,
  BedDouble,
  Building2,
  CalendarCheck,
  MapPin,
  CheckCircle2,
  ArrowLeft,
  Stethoscope,
  MessageCircle,
  CalendarDays,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import {
  hospitals,
  getHospitalById,
  getDoctorsAtHospital,
  contactInfo,
  type Doctor,
} from "@/data/site";

const BASE_URL = "https://healthbridge.in";

export function generateStaticParams() {
  return hospitals.map((h) => ({ id: h.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const hospital = getHospitalById(id);
  if (!hospital) return {};

  const url = `${BASE_URL}/hospitals/${hospital.id}`;
  const description = `${hospital.name} — ${hospital.location}. ${hospital.description} Get a free treatment quote through MedMyTrip.`;
  const image = typeof hospital.image === "string" ? hospital.image : hospital.image.src;

  return {
    title: `${hospital.name} — ${hospital.city} | MedMyTrip`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: hospital.name,
      description,
      url,
      images: [{ url: image }],
    },
  };
}

function imgSrc(image: (typeof hospitals)[number]["image"]) {
  return typeof image === "string" ? image : image.src;
}

function whatsAppEnquiry(hospitalName: string) {
  const text = `Hello MedMyTrip, I would like treatment options and a cost estimate at ${hospitalName}.`;
  return `https://wa.me/${contactInfo.whatsappIndia}?text=${encodeURIComponent(text)}`;
}

function doctorImgSrc(image: Doctor["image"]) {
  return typeof image === "string" ? image : image.src;
}

export default async function HospitalProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const hospital = getHospitalById(id);
  if (!hospital) notFound();

  const doctorsHere = getDoctorsAtHospital(hospital);
  const url = `${BASE_URL}/hospitals/${hospital.id}`;

  const hospitalJsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: hospital.name,
    description: hospital.description,
    image: imgSrc(hospital.image),
    url,
    address: {
      "@type": "PostalAddress",
      addressLocality: hospital.city,
      addressCountry: "IN",
    },
    medicalSpecialty: hospital.specialities,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Hospitals", item: `${BASE_URL}/hospitals` },
      { "@type": "ListItem", position: 3, name: hospital.name, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalJsonLd) }}
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
              <Link href="/hospitals" className="hover:text-white">
                Hospitals
              </Link>
              <span>/</span>
              <span className="text-white/90">{hospital.name}</span>
            </nav>
            <Link
              href="/hospitals"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Hospitals
            </Link>
            <div className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <Award className="h-3.5 w-3.5" /> {hospital.accreditation} Accredited
            </div>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {hospital.name}
            </h1>
            <p className="mt-3 flex items-center gap-1.5 text-lg text-white/90">
              <MapPin className="h-4 w-4" /> {hospital.location}
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.8fr]">
            {/* Left column */}
            <div className="space-y-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/50 bg-muted shadow-soft">
                <img
                  src={imgSrc(hospital.image)}
                  alt={hospital.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4 rounded-2xl border border-border bg-muted/40 p-5">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground">LOCATION</p>
                    <p className="font-bold text-foreground">{hospital.location}</p>
                  </div>
                </div>
                {hospital.established && (
                  <div className="flex items-center gap-3 text-sm">
                    <CalendarDays className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground">ESTABLISHED</p>
                      <p className="font-bold text-foreground">{hospital.established}</p>
                    </div>
                  </div>
                )}
                {hospital.beds && (
                  <div className="flex items-center gap-3 text-sm">
                    <BedDouble className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground">BEDS</p>
                      <p className="font-bold text-foreground">{hospital.beds}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3 text-sm">
                  <Award className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground">ACCREDITATION</p>
                    <p className="font-bold text-foreground">{hospital.accreditation}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={whatsAppEnquiry(hospital.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-primary py-3.5 text-sm font-bold text-white shadow-soft transition-all hover:scale-[1.02] hover:shadow-lift"
                >
                  <CalendarCheck className="h-5 w-5" /> Get a Free Quote
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
              {hospital.about && (
                <div className="space-y-2">
                  <h2 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-primary">
                    <Building2 className="h-4 w-4 text-secondary" /> About the Hospital
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                    {hospital.about}
                  </p>
                </div>
              )}

              {hospital.accreditations && hospital.accreditations.length > 0 && (
                <div className="space-y-2">
                  <h2 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-primary">
                    <Award className="h-4 w-4" /> Accreditations
                  </h2>
                  <ul className="space-y-2.5">
                    {hospital.accreditations.map((item, idx) => (
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
              )}

              {hospital.keySpecialties && hospital.keySpecialties.length > 0 && (
                <div className="space-y-2">
                  <h2 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-primary">
                    <Stethoscope className="h-4 w-4" /> Key Specialties
                  </h2>
                  <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {hospital.keySpecialties.map((item, idx) => (
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
              )}
            </div>
          </div>

          {doctorsHere.length > 0 && (
            <section className="mt-16 border-t border-border pt-12">
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
                Consultants at <span className="text-primary">this hospital</span>
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {doctorsHere.map((d) => (
                  <Link
                    key={d.id}
                    href={`/doctors/${d.id}`}
                    className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:shadow-lift"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                      <img
                        src={doctorImgSrc(d.image)}
                        alt={d.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute inset-x-4 bottom-4 text-white">
                        <h3 className="text-base font-bold leading-tight group-hover:text-primary-glow transition-colors">
                          {d.name}
                        </h3>
                        <p className="text-xs text-white/90 font-medium">{d.specialization}</p>
                      </div>
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
