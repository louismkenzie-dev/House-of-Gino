import { createFileRoute } from "@tanstack/react-router";
import { VenueMap } from "@/components/site/VenueMap";

export const Route = createFileRoute("/_site/visit")({
  head: () => ({
    meta: [
      { title: "Visit — House of Gino, Badley, Ipswich, Suffolk" },
      { name: "description", content: "Find House of Gino just off the car park at Roots & Shoots, Stowmarket Road, Badley, Ipswich, IP6 8RR. Get directions and opening hours." },
      { property: "og:title", content: "Visit House of Gino" },
      { property: "og:description", content: "Boutique dog grooming tucked in front of Roots & Shoots in Badley, Suffolk." },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 md:px-8 py-20">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Visit</p>
        <h1 className="font-display text-5xl md:text-7xl">Come find us.</h1>
        <p className="mt-5 text-foreground/70">A little glass conservatory tucked in front of Roots & Shoots — look for the topiary dog at the door.</p>
      </div>
      <VenueMap />
      <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
        {[
          { h: "Opening hours", lines: ["Monday – Friday", "Saturday mornings", "Closed Sundays"] },
          { h: "Address", lines: ["Roots & Shoots car park", "Stowmarket Road, Badley", "Ipswich, IP6 8RR"] },
          { h: "Get in touch", lines: ["07763 146964", "Text · Call · WhatsApp", "DM @houseofgino_"] },
        ].map((b) => (
          <div key={b.h} className="rounded-2xl bg-card border border-gold/20 p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">{b.h}</p>
            {b.lines.map((l) => <div key={l} className="text-foreground/80">{l}</div>)}
          </div>
        ))}
      </div>
    </section>
  );
}
