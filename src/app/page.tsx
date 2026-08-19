import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Services } from "@/components/site/Services";
import { Treatments } from "@/components/site/Treatments";
import { Doctors } from "@/components/site/Doctors";
import { Hospitals } from "@/components/site/Hospitals";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Partners } from "@/components/site/Partners";
import { contactInfo } from "@/data/site";

function ViewAllLink({ href, label }: { href: "/doctors" | "/hospitals"; label: string }) {
  return (
    <div className="mt-10 flex justify-center">
      <Link
        href={href}
        className="group inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white hover:shadow-lift"
      >
        {label}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "HealthBridgeIn",
    "alternateName": "Health Bridge In",
    "url": "https://healthbridge.in",
    "logo": "https://healthbridge.in/favicon.ico",
    "description": "HealthBridgeIn connects Bangladeshi patients to India's top hospitals and doctors. Bangla support, visa assistance, airport pickup and transparent cost estimates.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": contactInfo.address.split(",")[0],
      "addressLocality": "Madhubani",
      "addressRegion": "Bihar",
      "postalCode": "847231",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": `+${contactInfo.whatsappIndia}`,
        "contactType": "WhatsApp Support India",
        "availableLanguage": ["English", "Bengali", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": contactInfo.bangladesh1,
        "contactType": "Customer Support Bangladesh Office 1",
        "areaServed": "BD",
        "availableLanguage": ["Bengali", "English"]
      },
      {
        "@type": "ContactPoint",
        "telephone": contactInfo.bangladesh2,
        "contactType": "Customer Support Bangladesh Office 2",
        "areaServed": "BD",
        "availableLanguage": ["Bengali", "English"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <HowItWorks />
        <Services />
        <Treatments />
        <Doctors limit={3} />
        <ViewAllLink href="/doctors" label="View all doctors" />
        <Hospitals limit={2} />
        <div className="bg-gradient-to-b from-muted/40 to-background">
          <ViewAllLink href="/hospitals" label="View all hospitals" />
          <div className="h-16" />
        </div>
        <Testimonials />
        <Partners />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
