"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  FileText,
  CreditCard,
  Activity,
  Building2,
  UserRound,
  Users,
  Check,
  Loader2,
  Send,
} from "lucide-react";
import heroImg from "@/assets/hero_medmytrip.png";
import { countries, getDialCode } from "@/data/countries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const stats = [
  { icon: Building2, value: "75+", label: "Partner Hospitals" },
  { icon: UserRound, value: "100+", label: "Expert Doctors" },
  { icon: Users, value: "1,000+", label: "Patients Assisted" },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

export function Hero() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [form, setForm] = useState({
    name: "",
    country: "",
    phone: "",
    email: "",
    treatment: "",
    message: "",
  });

  const dialCode = getDialCode(form.country);

  const validateEmail = (value: string) => {
    if (!value.trim()) {
      setEmailError("Email is required");
      return false;
    }
    if (!EMAIL_PATTERN.test(value.trim())) {
      setEmailError("Enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validateEmail(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setSent(false);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxCNkH4708AvHPucx2fwvslDw6OIX2JnIkw-HazFMLV7T0sDBTLMfV0p55fn_Sp06k/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            ...form,
            phone: dialCode ? `${dialCode} ${form.phone}` : form.phone,
          }),
        },
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
        setEmailError("");

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

  return (
    <section
      id="home"
      className="relative isolate flex w-full flex-col justify-center overflow-hidden min-h-[max(640px,calc(100vh-65px))] sm:min-h-[max(640px,calc(100vh-105px))] pt-16 pb-8 lg:pt-16 lg:pb-10"
    >
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroImg.src}
          className="h-full w-full object-cover object-center opacity-90"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Subtle white/blue gradient to make text readable but keep video bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#003B71] sm:text-4xl lg:text-5xl">
              India's Largest <br /> Medical Travel Company
            </h1>
            <p className="mt-2 text-base font-medium text-slate-700 sm:text-lg">
              A mission of hope, healing, and health
            </p>
            <p className="mt-1.5 text-sm text-slate-600 sm:text-base">
              MedMyTrip guides international patients through every step of treatment in India — from
              first enquiry and doctor selection to travel, recovery and follow-up care.
            </p>

            {/* Stats */}
            <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3 sm:gap-x-9">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-4">
                  {i > 0 && <div className="hidden h-10 w-px bg-slate-300/70 sm:block" aria-hidden />}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0066CC]">
                      <stat.icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <div className="bg-gradient-to-r from-[#003B71] to-[#0066CC] bg-clip-text text-2xl font-extrabold leading-none text-transparent sm:text-3xl">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-500 sm:text-[11px]">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Compact lead-capture card */}
          <motion.div
            id="consultation-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-full scroll-mt-24 rounded-3xl bg-white p-4 shadow-[0_20px_60px_-15px_rgba(0,59,113,0.3)] sm:p-5"
          >
            <h2 className="text-base font-extrabold text-[#003B71] sm:text-lg">
              Get a Free Consultation
            </h2>
            <p className="mt-0.5 text-xs text-slate-500">
              Share your details — our medical team responds within 24 hours.
            </p>

            <form onSubmit={onSubmit} className="mt-3 grid grid-cols-1 gap-x-3 gap-y-2.5 sm:grid-cols-2">
              <HeroField label="Full Name" required>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputCls}
                  placeholder="John Smith"
                />
              </HeroField>

              <HeroField label="Country" required>
                <Select
                  required
                  name="country"
                  value={form.country}
                  onValueChange={(value) => setForm({ ...form, country: value })}
                >
                  <SelectTrigger className={inputCls}>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent className="max-h-72">
                    {countries.map((c) => (
                      <SelectItem key={c.iso2} value={c.name}>
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </HeroField>

              <HeroField label="Phone / WhatsApp" required>
                <div className="flex gap-2">
                  <div className="flex w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/40 px-2 py-2 text-sm font-semibold text-foreground">
                    {dialCode || "+__"}
                  </div>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={`${inputCls} flex-1`}
                    placeholder="XXX XXX XXXX"
                  />
                </div>
              </HeroField>

              <HeroField label="Email" required>
                <input
                  required
                  type="email"
                  pattern={EMAIL_PATTERN.source}
                  title="Enter a valid email address"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    if (emailError) validateEmail(e.target.value);
                  }}
                  onBlur={(e) => validateEmail(e.target.value)}
                  aria-invalid={Boolean(emailError)}
                  className={`${inputCls} ${emailError ? "border-destructive focus:border-destructive focus:ring-destructive/15" : ""}`}
                  placeholder="you@email.com"
                />
                {emailError && <p className="mt-1 text-xs text-destructive">{emailError}</p>}
              </HeroField>

              <div className="sm:col-span-2">
                <HeroField label="Treatment Needed" required>
                  <input
                    required
                    value={form.treatment}
                    onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                    className={inputCls}
                    placeholder="e.g. Cardiac bypass, Oncology consultation"
                  />
                </HeroField>
              </div>

              <div className="sm:col-span-2">
                <HeroField label="Message" required>
                  <textarea
                    required
                    rows={1}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputCls} resize-none`}
                    placeholder="Tell us briefly about your medical condition..."
                  />
                </HeroField>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full gradient-primary px-6 py-2.5 text-sm font-bold text-white shadow-soft transition-transform hover:scale-[1.02] hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
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
                    Send Enquiry{" "}
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Action Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            { icon: CalendarCheck, title: "Book Appointment" },
            { icon: FileText, title: "Second Opinion" },
            { icon: CreditCard, title: "Global Wellness Card" },
            { icon: Activity, title: "Health Packages" },
          ].map((card, i) => (
            <div
              key={card.title}
              className="group flex cursor-pointer items-center gap-3 rounded-2xl bg-white p-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,102,204,0.15)]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0066CC] transition-colors group-hover:bg-[#0066CC] group-hover:text-white">
                <card.icon className="h-4.5 w-4.5" />
              </div>
              <span className="text-sm font-bold text-[#003B71] leading-tight">{card.title}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15 transition-all";

function HeroField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-0.5 block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </span>
      {children}
    </label>
  );
}
