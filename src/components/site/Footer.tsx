import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { contactInfo } from "@/data/site";
import { MedMyTripLogo } from "./MedMyTripLogo";

const quick = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Treatments", href: "/treatments" },
  { label: "Doctors", href: "#doctors" },
  { label: "Hospitals", href: "#hospitals" },
  { label: "Blog", href: "/blog" },
];

const legal = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Refund Policy", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#001e3d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,102,204,0.2),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center bg-white rounded-lg p-2 max-w-fit">
              <MedMyTripLogo className="h-10 w-[200px]" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Connecting patients worldwide — across English-speaking and French-speaking countries —
              with India's leading hospitals, doctors and end-to-end medical travel support.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((I, k) => (
                <a
                  key={k}
                  href="#"
                  aria-label="Social link"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition-all hover:border-[#00A3E0] hover:bg-[#0066CC] hover:text-white"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {quick.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-[#00A3E0]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-[#00A3E0]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#00A3E0]" />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#00A3E0]" />
                <span>{contactInfo.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#00A3E0]" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} MedMyTrip. All rights reserved.</p>
          <p>Made with care for patients around the world &amp; India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
