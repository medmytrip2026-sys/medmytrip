import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { TreatmentsExplorer } from "@/components/site/TreatmentsExplorer";
import { ArrowLeft } from "lucide-react";
import { treatments as allTreatments } from "@/data/site";

export const metadata: Metadata = {
  title: "Find Treatments — MedMyTrip",
  description: "Browse Medical, Aesthetic and Wellness treatments across India's top hospitals — transparent pricing and trusted specialists.",
  openGraph: {
    title: "Find Treatments — MedMyTrip",
    description: "Browse Medical, Aesthetic and Wellness treatments across India's top hospitals — transparent pricing and trusted specialists.",
  },
};

export default function TreatmentsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Treatments Offered in India",
    "numberOfItems": allTreatments.length,
    "itemListElement": allTreatments.map((t, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "MedicalProcedure",
        "name": t.name,
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
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Find <span className="text-secondary">Treatments</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85">
              Explore Medical, Aesthetic and Wellness treatments across India's top hospitals — transparent pricing, verified specialists.
            </p>
          </div>
        </section>
        <Suspense>
          <TreatmentsExplorer />
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
