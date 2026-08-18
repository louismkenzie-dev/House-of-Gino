import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { serviceShowcases } from "@/lib/service-showcases";
import { whatsappLink } from "@/lib/contact";

export function ServiceShowcase() {
  return (
    <>
      {serviceShowcases.map((s, i) => (
        <section key={s.id} id={s.id} className="scroll-mt-32 mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-gold/20 bg-card p-6 md:p-12 shadow-soft"
          >
            <div
              className={`grid items-center gap-10 lg:gap-16 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <BeforeAfterSlider
                  before={s.before}
                  after={s.after}
                  beforeAlt={s.beforeAlt}
                  afterAlt={s.afterAlt}
                  label={`Compare before and after ${s.service.toLowerCase()}`}
                />
                <p className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-foreground/45">
                  {s.caption}
                </p>
              </div>

              <div>
                <p className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold">
                  <Sparkles className="size-3.5" /> {s.eyebrow}
                </p>
                <h3 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
                  {s.headline}
                  <span className="font-script gold-text block text-5xl md:text-6xl">
                    {s.headlineScript}
                  </span>
                </h3>
                <p className="mt-6 text-foreground/70 leading-relaxed">{s.blurb}</p>

                <ul className="mt-7 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-foreground/75">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gold/20">
                        <Check className="size-3 text-gold" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(s.ctaMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-9 inline-flex rounded-full bg-foreground px-8 py-4 text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:bg-gold hover:text-foreground"
                >
                  {s.ctaLabel}
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      ))}
    </>
  );
}
