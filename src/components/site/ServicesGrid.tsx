import { motion } from "framer-motion";
import { Scissors, Bath, PawPrint, Sparkles, Plus, ArrowDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { services } from "@/lib/site-data";
import { showcaseByService } from "@/lib/service-showcases";
import { ServiceShowcase } from "./ServiceShowcase";

const icons = [Scissors, Bath, PawPrint, Sparkles, Scissors, PawPrint, Sparkles];

function ServiceCard({
  s,
  Icon,
  i,
}: {
  s: (typeof services)[number];
  Icon: typeof Scissors;
  i: number;
}) {
  const [open, setOpen] = useState(false);
  const showcase = showcaseByService.get(s.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: i * 0.05 }}
      className="group relative bg-card rounded-2xl border border-gold/15 p-7 hover:border-gold/50 hover:shadow-gold transition-all overflow-hidden cursor-pointer min-h-[280px]"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((v) => !v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((v) => !v);
        }
      }}
      aria-expanded={open}
    >
      {/* Front */}
      <motion.div
        animate={{ opacity: open ? 0 : 1, y: open ? -10 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {showcase && (
          <span className="absolute right-0 top-0 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-gold">
            Before &amp; After
          </span>
        )}
        <div className="size-12 rounded-xl bg-gradient-to-br from-gold/30 to-gold-soft/40 grid place-items-center mb-5 group-hover:scale-110 transition-transform">
          <Icon className="size-5 text-foreground" strokeWidth={1.5} />
        </div>
        <h3 className="font-display text-2xl">{s.name}</h3>
        <p className="text-sm text-gold tracking-wider uppercase mt-1">{s.price}</p>
        <p className="mt-4 text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
        <div className="mt-5 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-foreground/40 group-hover:text-gold transition-colors">
          <Plus className="size-3.5" /> More
        </div>
      </motion.div>

      {/* Back */}
      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : 10 }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0 p-7 bg-gradient-to-br from-foreground to-foreground/95 text-cream rounded-2xl flex flex-col justify-between pointer-events-none"
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <div>
          <h3 className="font-display text-2xl text-cream">{s.name}</h3>
          <p className="text-xs text-gold tracking-wider uppercase mt-1">{s.price}</p>
          <p className="mt-5 text-sm text-cream/85 leading-relaxed">
            {(s as { details?: string }).details ?? s.desc}
          </p>
        </div>
        {showcase ? (
          <a
            href={`#${showcase.id}`}
            onClick={(e) => e.stopPropagation()}
            className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gold hover:text-cream transition-colors"
          >
            See the results <ArrowDown className="size-3.5" />
          </a>
        ) : (
          <div className="mt-4 text-[11px] uppercase tracking-[0.2em] text-gold/80">
            Tap to close
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;
  return (
    <section className="mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-32">
      <div className="max-w-2xl">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">The Menu</p>
        <h2 className="font-display text-4xl md:text-6xl leading-tight">
          Crafted treatments,
          <span className="font-script gold-text block text-5xl md:text-7xl">honest prices.</span>
        </h2>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((s, i) => {
          const Icon = icons[i % icons.length];
          return <ServiceCard key={s.name} s={s} Icon={Icon} i={i} />;
        })}
      </div>

      {!limit && <ServiceShowcase />}

      {limit && (
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:text-gold"
          >
            See the full menu →
          </Link>
        </div>
      )}
    </section>
  );
}
