"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contactInfo } from "@/data/site";
import logoIcon from "@/assets/healthbridgein-icon.png";

type NavLink = { label: string; href?: string; to?: string };

const links: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Services", href: "/#services" },
  { label: "Treatments", href: "/#treatments" },
  { label: "Doctors", to: "/doctors" },
  { label: "Hospitals", to: "/hospitals" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wa = contactInfo.whatsappUrl;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lift border-b border-border"
          : "bg-white/90 backdrop-blur-md border-b border-border/60"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <img
            src={logoIcon.src}
            alt="HealthBridgeIn logo"
            className="h-12 w-12 shrink-0 object-contain"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-extrabold tracking-tight">
              <span className="text-[#1F7A34]">Health</span>
              <span className="text-[#F39B1F]">Bridge</span>
              <span className="text-[#1F7A34]">In</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary/80">
              Bangladesh · India
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const isActive = l.to ? (l.to === "/" ? pathname === "/" : pathname.startsWith(l.to)) : false;
            return l.to ? (
              <Link
                key={l.label}
                href={l.to}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:text-primary hover:bg-primary/5 ${
                  isActive ? "text-primary bg-primary/10" : "text-foreground/75"
                }`}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/75 transition-colors hover:text-primary hover:bg-primary/5"
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--whatsapp)]/30 bg-[color:var(--whatsapp)]/10 px-4 py-2 text-sm font-semibold text-[color:var(--whatsapp)] transition-all hover:bg-[color:var(--whatsapp)] hover:text-white"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lift transition-transform hover:scale-[1.03]"
          >
            Book Consultation
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-border text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-white lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
              {links.map((l) => {
                const isActive = l.to ? (l.to === "/" ? pathname === "/" : pathname.startsWith(l.to)) : false;
                return l.to ? (
                  <Link
                    key={l.label}
                    href={l.to}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2.5 text-sm font-semibold hover:bg-muted hover:text-primary ${
                      isActive ? "text-primary bg-primary/10" : "text-foreground/80"
                    }`}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground/80 hover:bg-muted hover:text-primary"
                  >
                    {l.label}
                  </a>
                );
              })}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-full gradient-primary px-4 py-2.5 text-sm font-semibold text-white"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
