import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Hospitals } from "@/components/site/Hospitals";
import { ArrowLeft } from "lucide-react";
import { hospitals as allHospitals } from "@/data/site";

export const metadata: Metadata = {
  title: "Partner Hospitals — MedMyTrip",
  description: "Explore JCI and NABH accredited partner hospitals across India. Filter by city, specialty and accreditation.",
  openGraph: {
    title: "Partner Hospitals — MedMyTrip",
    description: "Explore JCI and NABH accredited partner hospitals across India. Filter by city, specialty and accreditation.",
  },
};

export default function HospitalsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Accredited Partner Hospitals in India",
    "numberOfItems": allHospitals.length,
    "itemListElement": allHospitals.map((h, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Hospital",
        "name": h.name,
        "description": h.description,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": h.city,
          "addressCountry": "IN"
        }
      }
    }))
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
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
              India's most <span className="text-secondary">accredited hospitals</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85">
              9 trusted partner hospitals — Medanta, Apollo, Fortis, Artemis, BLK-Max, Max Saket, Manipal, Amrita and Sanar International. Filter by city, specialty or accreditation.
            </p>
          </div>
        </section>
        <Hospitals showFilters showHeading={false} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
