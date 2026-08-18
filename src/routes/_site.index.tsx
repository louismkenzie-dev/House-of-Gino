import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { Testimonials } from "@/components/site/Testimonials";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { VenueMap } from "@/components/site/VenueMap";
import { motion } from "framer-motion";
import chelsea from "@/assets/chelsea.jpg";
import emblem from "@/assets/grooming-emblem.png";
import cafeCakes from "@/assets/cafe-cakes.jpg";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "House of Gino — Boutique Dog Grooming in Suffolk" },
      { name: "description", content: "Run by Chelsea — boutique dog grooming in Badley, Ipswich. Full grooms, hand stripping, puppy grooms and more. Mon–Fri & Saturday mornings." },
      { property: "og:title", content: "House of Gino — Boutique Dog Grooming in Suffolk" },
      { property: "og:description", content: "Calm hands, clean cuts, happy dogs. Boutique grooming with Chelsea in Badley, Ipswich." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />

      {/* Marquee strip */}
      <div className="relative overflow-hidden border-y border-gold/20 bg-foreground text-cream py-5">
        <div className="flex gap-16 whitespace-nowrap animate-[marquee_40s_linear_infinite]">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-16 shrink-0">
              {["Full grooms", "Hand stripping", "Puppy grooms", "Walk-in nail trims", "Ultrasound teeth cleaning", "Bath & blow-out", "Face & hygiene trims"].map((w) => (
                <span key={w} className="font-display text-2xl tracking-wide flex items-center gap-16">
                  {w}
                  <span className="text-gold">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <ServicesGrid limit={6} />

      {/* About preview */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft">
            <img src={chelsea} alt="Chelsea, founder of House of Gino" className="size-full object-cover" />
          </div>
          <img src={emblem} alt="" className="absolute -bottom-8 -right-8 w-44 opacity-80 hidden md:block" />
        </motion.div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Meet Chelsea</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Years of practice.
            <span className="font-script gold-text block text-5xl md:text-7xl">A lifetime of love.</span>
          </h2>
          <p className="mt-7 text-foreground/70 leading-relaxed">
            House of Gino is a one-room boutique salon tucked just off the car park at Roots & Shoots in Badley.
            Chelsea built it from the ground up — a quiet, calm space designed entirely around the dogs that walk through the door.
          </p>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            Every appointment is one-on-one. No conveyor belt, no rushing, no stress — just patient grooming
            from someone who's been doing this long enough to know every breed, every coat, and every wagging tail by name.
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:text-gold">
            Read our story →
          </Link>
        </div>
      </section>

      <Testimonials />

      {/* Book CTA */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20">
        <div className="rounded-[2rem] border border-gold/30 bg-foreground text-cream p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-transparent pointer-events-none" />
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4 relative">Reservations</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight relative">
            Ready to book
            <span className="font-script gold-text block text-5xl md:text-7xl">your dog in?</span>
          </h2>
          <p className="mt-6 text-cream/70 max-w-xl mx-auto relative">
            Pick your date, time and treatments in our quick booking form — Chelsea will confirm everything personally.
          </p>
          <Link to="/book"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold text-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-cream transition-colors relative">
            Book an appointment →
          </Link>
        </div>
      </section>

      <InstagramFeed />

      {/* Visit + map */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-32">
        <div className="max-w-2xl mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Find Us</p>
          <h2 className="font-display text-4xl md:text-6xl">
            Tucked in front of
            <span className="font-script gold-text block text-5xl md:text-7xl">Roots & Shoots.</span>
          </h2>
        </div>
        <VenueMap />

        {/* Cafe nearby */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mt-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-secondary/40 border border-gold/20 rounded-[2rem] p-6 md:p-10"
        >
          <div className="aspect-[4/5] md:aspect-[5/4] rounded-2xl overflow-hidden shadow-soft order-1 lg:order-none">
            <img src={cafeCakes} alt="Homemade cakes and cookies at the Roots & Shoots café" className="size-full object-cover" />
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">While You Wait</p>
            <h3 className="font-display text-3xl md:text-5xl leading-tight">
              Cake, coffee &amp;
              <span className="font-script gold-text block text-4xl md:text-6xl">a wander round the nursery.</span>
            </h3>
            <p className="mt-6 text-foreground/70 leading-relaxed">
              Drop your dog in for their pampering session and stroll straight into Roots &amp; Shoots next door.
              Their lovely little café serves freshly baked cakes, cookies and proper coffee — and the garden centre
              itself is full of plants, gifts and quiet corners to potter about in.
            </p>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              By the time you've finished your slice of carrot cake, your pup will be groomed, glossy and ready to go.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
