import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "HealthBridgeIn — Medical Treatment in India for Bangladeshi Patients",
  description: "HealthBridgeIn connects Bangladeshi patients to India's top hospitals and doctors. Bangla support, visa assistance, airport pickup and transparent cost estimates.",
  keywords: ["medical tourism India", "Bangladesh patients", "India hospitals", "medical visa India", "HealthBridgeIn"],
  metadataBase: new URL("https://healthbridge.in"),
  openGraph: {
    title: "HealthBridgeIn — Medical Treatment in India for Bangladeshi Patients",
    description: "HealthBridgeIn connects Bangladeshi patients to India's top hospitals and doctors. Bangla support, visa assistance, airport pickup and transparent cost estimates.",
    url: "/",
    siteName: "HealthBridgeIn",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9f3f0933-ba7c-4c70-93c1-92906cf4031d/id-preview-47e7a4ac--378b0401-c324-4b40-9a54-2f232ed9ec10.lovable.app-1783948303023.png",
        width: 1200,
        height: 630,
        alt: "HealthBridgeIn — Medical Treatment in India",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HealthBridgeIn — Medical Treatment in India for Bangladeshi Patients",
    description: "HealthBridgeIn connects Bangladeshi patients to India's top hospitals and doctors. Bangla support, visa assistance, airport pickup and transparent cost estimates.",
    images: ["https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9f3f0933-ba7c-4c70-93c1-92906cf4031d/id-preview-47e7a4ac--378b0401-c324-4b40-9a54-2f232ed9ec10.lovable.app-1783948303023.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
