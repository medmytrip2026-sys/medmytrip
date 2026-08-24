"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { contactInfo } from "@/data/site";
import { Reveal } from "@/lib/motion";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    country: "",
    phone: "",
    email: "",
    treatment: "",
    message: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSent(false);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz8n_6Ekj2tKW5UKzt9qQMJ0rebnE2S5ikjcQVYqWOHl41W-eNcBQYGYwSJV-QhiXY/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSent(true);
        toast.success("Enquiry sent successfully. We’ll be in touch soon.");

        setForm({
          name: "",
          country: "",
          phone: "",
          email: "",
          treatment: "",
          message: "",
        });

        setTimeout(() => setSent(false), 4000);
      } else {
        toast.error("We couldn’t send your enquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const details = [
    { icon: MessageCircle, label: "WhatsApp India", value: contactInfo.whatsappIndia, href: `https://wa.me/${contactInfo.whatsappIndia.replace(/[^0-9]/g, "")}`, accent: "whatsapp" },
    { icon: MessageCircle, label: "WhatsApp Kolkata", value: contactInfo.whatsappKolkata, href: `https://wa.me/${contactInfo.whatsappKolkata.replace(/[^0-9]/g, "")}`, accent: "whatsapp" },
    { icon: Phone, label: "Bangladesh", value: contactInfo.bangladesh1, href: `tel:${contactInfo.bangladesh1}` },
    { icon: Phone, label: "Bangladesh", value: contactInfo.bangladesh2, href: `tel:${contactInfo.bangladesh2}` },
    { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: MapPin, label: "Office Address", value: contactInfo.address },
  ];

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Get In Touch"
          title={<>Book a <span className="text-primary">free consultation</span> today</>}
          description="Share your reports and our medical team will respond within 24 hours."
        />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_1fr]">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Full Name" required>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="John Smith" />
            </Field>
            <Field label="Country">
              <input value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className={inputCls} placeholder="e.g. United Kingdom, Canada, France" />
            </Field>
            <Field label="Phone / WhatsApp" required>
              <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} placeholder="+1 XXX XXX XXXX" />
            </Field>
            <Field label="Email">
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="you@email.com" />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Treatment Needed">
                <input value={form.treatment} onChange={(e) => setForm({ ...form, treatment: e.target.value })} className={inputCls} placeholder="e.g. Cardiac bypass, Oncology consultation" />
              </Field>
            </div>
            {/* <div className="sm:col-span-2">
              <Field label="Upload Medical Reports (optional)">
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-border bg-muted/40 px-4 py-4 text-sm text-muted-foreground transition-colors hover:border-primary hover:bg-primary/5">
                  <Upload className="h-5 w-5 text-primary" />
                  <span>PDF, JPG or PNG up to 10MB</span>
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                </label>
              </Field>
            </div> */}
            <div className="sm:col-span-2">
              <Field label="Message">
                <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputCls} resize-none`} placeholder="Tell us briefly about your medical condition..." />
              </Field>
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 group inline-flex w-full items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3.5 text-sm font-bold text-white shadow-soft transition-transform hover:scale-[1.02] hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending...
              </>
            ) : sent ? (
              <>
                <Check className="h-4 w-4" /> Sent — we'll be in touch
              </>
            ) : (
              <>
                Send Enquiry <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h3 className="font-display text-lg font-bold text-foreground">Reach us directly</h3>
            <div className="mt-4 space-y-3">
              {details.map((d, k) => {
                const Icon = d.icon;
                const wrapperCls = "flex items-start gap-3 rounded-2xl border border-border p-3 transition-colors hover:border-primary/40 hover:bg-primary/5";
                const iconCls = d.accent === "whatsapp"
                  ? "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--whatsapp)]/10 text-[color:var(--whatsapp)]"
                  : "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary";
                const content = (
                  <>
                    <span className={iconCls}><Icon className="h-5 w-5" /></span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{d.label}</p>
                      <p className="truncate text-sm font-semibold text-foreground">{d.value}</p>
                    </div>
                  </>
                );
                return d.href ? (
                  <a key={k} href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={wrapperCls}>{content}</a>
                ) : (
                  <div key={k} className={wrapperCls}>{content}</div>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=Madhubani+Medical+College+Bihar&output=embed"
              loading="lazy"
              className="h-64 w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>

      <Toaster position="top-right" richColors />
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15 transition-all";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </span>
      {children}
    </label>
  );
}
