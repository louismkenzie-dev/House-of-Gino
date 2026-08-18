import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import chelsea from "@/assets/chelsea.jpg";
import salon from "@/assets/salon-exterior.jpg";
import emblem from "@/assets/grooming-emblem.png";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About — Meet Chelsea & the story of House of Gino" },
      { name: "description", content: "How Chelsea built House of Gino — a boutique one-room dog grooming salon in Badley, Suffolk, dedicated to calm, patient, expert grooming." },
      { property: "og:title", content: "About House of Gino" },
      { property: "og:description", content: "The story behind Suffolk's most-loved boutique dog groomer." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "Years ago", title: "A pup named Gino", text: "It started, like all the best stories do, with a dog. Gino — the original four-legged muse who lent his name to the salon and his calm energy to its philosophy." },
  { year: "Training", title: "Years of practice", text: "Chelsea trained, qualified and quietly built a reputation across Suffolk for being the groomer dogs actually want to come back to. Patient, gentle, never rushed." },
  { year: "The salon", title: "A room of her own", text: "The little glass conservatory at Roots & Shoots became the home of House of Gino — designed deliberately as a one-dog-at-a-time space, never busy, never loud." },
  { year: "Today", title: "A wagging fanbase", text: "Walk-ins, regulars, puppies on their first ever groom — the door is open Monday to Friday and Saturday mornings, with the kettle always on." },
];

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-5 md:px-8 pt-20 pb-16 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Story</p>
        <h1 className="font-display text-5xl md:text-7xl leading-tight">
          A small salon with a
          <span className="font-script gold-text block text-6xl md:text-8xl mt-2">very big heart.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 mb-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -4 }}
          whileInView={{ opacity: 1, y: 0, rotate: -2 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Decorative tape */}
          <span aria-hidden className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 h-6 w-24 bg-gold/40 rotate-[-3deg] rounded-sm shadow-sm" />
          {/* Frame */}
          <div className="relative bg-cream p-4 pb-20 rounded-sm shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ring-foreground/10">
            <div className="absolute inset-4 bottom-20 ring-1 ring-gold/40 pointer-events-none rounded-[2px]" />
            <div className="overflow-hidden rounded-[2px]">
              <img
                src={chelsea}
                alt="Chelsea, founder of House of Gino, with her two dogs in the salon"
                className="block w-full aspect-[4/5] object-cover"
              />
            </div>
            <p className="font-script text-3xl text-foreground/80 text-center mt-6">Chelsea &amp; the boys</p>
          </div>
          {/* Soft glow */}
          <div aria-hidden className="absolute -inset-6 -z-10 bg-gradient-to-br from-gold/20 to-transparent blur-2xl rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-6"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gold">Meet the founder</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">Hi, I'm Chelsea.</h2>
          <p className="text-foreground/70 leading-relaxed text-lg">
            Behind every wash, trim and trot home is me — and the two dogs who taught me everything I needed to know
            about patience, trust and a really good blow-dry. House of Gino is the salon I always wished existed:
            unhurried, deeply personal, and built around the dog in the chair.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            One dog at a time. No crates, no queue, no chaos — just calm music, kind hands and the occasional treat
            (okay, several treats).
          </p>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-soft max-w-xs mt-8 hidden md:block">
            <img src={salon} alt="The House of Gino salon at Roots & Shoots" className="size-full object-cover" />
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-4xl px-5 md:px-8 pb-32">
        <div className="relative">
          <img src={emblem} alt="" className="absolute -top-12 right-0 w-32 opacity-30 -z-10" />
          <div className="space-y-16">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="grid md:grid-cols-[160px_1fr] gap-6 items-start border-l border-gold/30 pl-8 md:pl-0 md:border-l-0"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-gold pt-2">{m.year}</p>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl">{m.title}</h3>
                  <p className="mt-3 text-foreground/70 leading-relaxed">{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
