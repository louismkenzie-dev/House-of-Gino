import { createFileRoute } from "@tanstack/react-router";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { whatsappLink } from "@/lib/contact";

export const Route = createFileRoute("/_site/services")({
  head: () => ({
    meta: [
      { title: "Services & Prices — House of Gino Dog Grooming" },
      { name: "description", content: "Full grooms from £45, hand stripping from £50, puppy grooms, walk-in nail trims and more. Honest boutique pricing in Badley, Ipswich." },
      { property: "og:title", content: "Services & Prices — House of Gino" },
      { property: "og:description", content: "The full menu of boutique dog grooming services with Chelsea in Suffolk." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 md:px-8 pt-20 pb-8 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Services</p>
        <h1 className="font-display text-5xl md:text-7xl">The full menu.</h1>
        <p className="mt-6 max-w-xl mx-auto text-foreground/70">
          Whether your dog needs a full makeover or a quick tidy-up — we've got you covered.
        </p>
      </section>
      <ServicesGrid />
      <section className="mx-auto max-w-3xl px-5 md:px-8 pb-32 text-center">
        <div className="rounded-3xl bg-foreground text-cream p-12 shadow-soft">
          <h2 className="font-display text-3xl md:text-4xl">Not sure what your dog needs?</h2>
          <p className="mt-3 text-cream/70">Send a quick message — Chelsea will recommend the right treatment.</p>
          <a href={whatsappLink("Hi Chelsea, can you help me pick the right grooming service for my dog?")}
            target="_blank" rel="noreferrer"
            className="mt-7 inline-flex rounded-full bg-gold text-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-cream transition-colors">
            Ask Chelsea
          </a>
        </div>
      </section>
    </>
  );
}
