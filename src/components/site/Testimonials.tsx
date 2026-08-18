import { motion } from "framer-motion";
import { testimonials } from "@/lib/site-data";
import groomingIcons from "@/assets/grooming-icons.png";

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-secondary/40 border-y border-gold/15">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Tail Wags</p>
          <h2 className="font-display text-4xl md:text-6xl">
            Loved by Suffolk's
            <span className="font-script gold-text block text-5xl md:text-7xl">fluffiest regulars.</span>
          </h2>
          <img src={groomingIcons} alt="" className="mt-8 h-12 md:h-16 w-auto opacity-80" />
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-cream rounded-2xl p-7 border border-gold/15 shadow-sm"
            >
              <div className="flex gap-1 text-gold mb-4">{"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}</div>
              <blockquote className="text-foreground/80 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-display text-lg">{t.name}</span>
                <span className="text-foreground/50"> · {t.dog}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
