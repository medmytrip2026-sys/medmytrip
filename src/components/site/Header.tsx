"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contactInfo } from "@/data/site";
import { MedMyTripLogo } from "./MedMyTripLogo";

type NavLink = { label: string; href?: string; to?: string };

const links: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Services", href: "/#services" },
  { label: "Treatments", to: "/treatments" },
  { label: "Doctors", to: "/doctors" },
  { label: "Hospitals", to: "/hospitals" },
  { label: "Blog", to: "/blog" },
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
    <>
      {/* ── Top info bar ── */}
      <div className="hidden bg-[#003B71] text-white/90 text-xs sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="h-3 w-3" />
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="h-3 w-3" />
              {contactInfo.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-semibold transition-colors hover:bg-white/20"
            >
              <MessageCircle className="h-3 w-3" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* ── Main navbar ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-[0_4px_24px_-6px_rgba(0,59,113,0.12)] border-b border-border"
            : "bg-white/90 backdrop-blur-md border-b border-border/60"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-start">
            <MedMyTripLogo className="h-10 w-auto" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => {
              const isActive = l.to
                ? l.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(l.to)
                : false;
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
                  const isActive = l.to
                    ? l.to === "/"
                      ? pathname === "/"
                      : pathname.startsWith(l.to)
                    : false;
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
                <div className="mt-2">
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-4 py-2.5 text-sm font-semibold text-white"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
