import { Phone, MapPin, Handshake } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const partners = [
  {
    name: "Indian Treatment Guide",
    location: "Dhaka, Bangladesh",
    contactName: "Rudro Sen",
    phone: "+880 1781-419252",
    tel: "+8801781419252",
  },
  {
    name: "HealthBridgebd",
    location: "Dhaka, Bangladesh",
    contactName: "Shihab",
    phone: "+880 1962-659355",
    tel: "+8801962659355",
  },
];

export function Partners() {
  return (
    <section id="partners" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Official Partners"
          title={
            <>
              Our trusted <span className="text-primary">regional partners</span>
            </>
          }
          description="Reach out to our official regional representatives for on-ground assistance with reports, consultations and travel."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift sm:p-8"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 transition-all group-hover:bg-primary/10" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Handshake className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-foreground sm:text-xl">{p.name}</h3>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" /> {p.location}
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-border/70 bg-background/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Contact Person
                  </p>
                  <p className="mt-1 text-base font-bold text-foreground">{p.contactName}</p>
                  <a
                    href={`tel:${p.tel}`}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    {p.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
