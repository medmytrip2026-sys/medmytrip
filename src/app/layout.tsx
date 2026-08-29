import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "../styles.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ticket",
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MedMyTrip — Medical Treatment in India for International Patients",
  description:
    "MedMyTrip connects patients from English-speaking and French-speaking countries worldwide to India's top hospitals and doctors. Multilingual support, visa assistance, airport pickup and transparent cost estimates.",
  keywords: [
    "medical tourism India",
    "international patients",
    "medical tourism for English speaking countries",
    "medical tourism for French speaking countries",
    "India hospitals",
    "medical visa India",
    "MedMyTrip",
  ],
  metadataBase: new URL("https://healthbridge.in"),
  openGraph: {
    title: "MedMyTrip — Medical Treatment in India for International Patients",
    description:
      "MedMyTrip connects patients from English-speaking and French-speaking countries worldwide to India's top hospitals and doctors. Multilingual support, visa assistance, airport pickup and transparent cost estimates.",
    url: "/",
    siteName: "MedMyTrip",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9f3f0933-ba7c-4c70-93c1-92906cf4031d/id-preview-47e7a4ac--378b0401-c324-4b40-9a54-2f232ed9ec10.lovable.app-1783948303023.png",
        width: 1200,
        height: 630,
        alt: "MedMyTrip — Medical Treatment in India",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MedMyTrip — Medical Treatment in India for International Patients",
    description:
      "MedMyTrip connects patients from English-speaking and French-speaking countries worldwide to India's top hospitals and doctors. Multilingual support, visa assistance, airport pickup and transparent cost estimates.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9f3f0933-ba7c-4c70-93c1-92906cf4031d/id-preview-47e7a4ac--378b0401-c324-4b40-9a54-2f232ed9ec10.lovable.app-1783948303023.png",
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
