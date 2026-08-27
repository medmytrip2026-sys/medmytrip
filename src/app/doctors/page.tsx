import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Doctors } from "@/components/site/Doctors";
import { ArrowLeft } from "lucide-react";
import { doctors as allDoctors } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Doctors — MedMyTrip",
  description:
    "Browse India's most trusted specialists. Filter by specialty, city and hospital, and book an appointment through MedMyTrip.",
  openGraph: {
    title: "Our Doctors — MedMyTrip",
    description:
      "Browse and filter India's most trusted specialists — cardiology, oncology, neurology, orthopaedics, IVF and more.",
  },
};

export default function DoctorsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Trusted Specialists in India",
    numberOfItems: allDoctors.length,
    itemListElement: allDoctors.map((d, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Physician",
        name: d.name,
        jobTitle: d.designation,
        medicalSpecialty: d.specialization,
        worksFor: {
          "@type": "MedicalOrganization",
          name: d.hospital,
          address: {
            "@type": "PostalAddress",
            addressLocality: d.city,
            addressCountry: "IN",
          },
        },
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-20 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_55%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Find the right <span className="text-secondary">specialist</span> for you
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85">
              Search 100+ senior consultants across India's top hospitals. Filter by specialty and
              city, then request an appointment in a click.
            </p>
          </div>
        </section>
        <Doctors showFilters showHeading={false} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
