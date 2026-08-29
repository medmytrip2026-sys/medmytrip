"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contactInfo } from "@/data/site";
import { Reveal } from "@/lib/motion";

export function Contact() {
  const details = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: contactInfo.phone,
      href: `https://wa.me/${contactInfo.whatsappIndia}`,
      accent: "whatsapp",
    },
    { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
    { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: MapPin, label: "Office Address", value: contactInfo.address },
  ];

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-4 pt-2 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24 scroll-mt-24"
    >
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
            Prefer to <span className="text-primary">reach us directly</span>?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            WhatsApp, call, email us, or find our office on the map below.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border bg-card p-6 shadow-soft"
        >
          <h3 className="font-display text-lg font-bold text-foreground">Reach us directly</h3>
          <div className="mt-4 space-y-3">
            {details.map((d, k) => {
              const Icon = d.icon;
              const wrapperCls =
                "flex items-start gap-3 rounded-2xl border border-border p-3 transition-colors hover:border-primary/40 hover:bg-primary/5";
              const iconCls =
                d.accent === "whatsapp"
                  ? "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--whatsapp)]/10 text-[color:var(--whatsapp)]"
                  : "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary";
              const content = (
                <>
                  <span className={iconCls}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                      {d.label}
                    </p>
                    <p className="truncate text-sm font-semibold text-foreground">{d.value}</p>
                  </div>
                </>
              );
              return d.href ? (
                <a
                  key={k}
                  href={d.href}
                  target={d.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={wrapperCls}
                >
                  {content}
                </a>
              ) : (
                <div key={k} className={wrapperCls}>
                  {content}
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-border shadow-soft"
        >
          <iframe
            title="Office Location"
            src="https://www.google.com/maps?q=B-23+Okhla+Vihar+New+Delhi+110025&output=embed"
            loading="lazy"
            className="h-full min-h-64 w-full"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
