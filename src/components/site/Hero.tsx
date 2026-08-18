import { Phone, MessageCircle, Sparkles, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { whatsappLink, PHONE } from "@/lib/contact";
import heroDog from "@/assets/hero-dog.jpg";
import emblem from "@/assets/grooming-emblem.png";
import dogLine from "@/assets/dog-line.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* trotting dog silhouette across the top */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-4 opacity-[0.08] h-24">
        <img src={dogLine} alt="" className="absolute h-24 w-auto animate-[trot_22s_linear_infinite]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 pt-16 md:pt-24 pb-20 md:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream/60 px-4 py-1.5 text-[11px] tracking-[0.25em] uppercase text-foreground/70">
            <Sparkles className="size-3.5 text-gold" />
            Boutique grooming · Suffolk
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            A little house of
            <span className="block font-script text-6xl md:text-8xl lg:text-9xl gold-text mt-3 leading-none">
              pampering
            </span>
            <span className="block mt-3">for very good dogs.</span>
          </h1>
          <p className="mt-7 text-lg text-foreground/70 max-w-xl leading-relaxed">
            Run by Chelsea — with years of experience and a queue of four-legged regulars.
            Calm hands, clean cuts, and a salon that smells of rosemary and warm towels.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={whatsappLink("Hi Chelsea, I'd like to register interest in booking a grooming appointment.")}
              target="_blank" rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-cream px-7 py-4 text-sm tracking-[0.18em] uppercase hover:bg-gold hover:text-foreground transition-colors"
            >
              <MessageCircle className="size-4" />
              Book via WhatsApp
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-4 text-sm tracking-[0.18em] uppercase hover:border-gold hover:text-gold transition-colors"
            >
              <Phone className="size-4" />
              {PHONE}
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-foreground/50">
            <span>Mon–Fri</span>
            <span className="size-1 rounded-full bg-gold" />
            <span>Sat mornings</span>
            <span className="size-1 rounded-full bg-gold" />
            <Link to="/services" className="hover:text-foreground">View prices →</Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft">
            <img src={heroDog} alt="A happy fluffy dog being groomed at House of Gino" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
          </div>
          <motion.img
            src={emblem} alt=""
            initial={{ rotate: -8 }} animate={{ rotate: [-8, 4, -8] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 w-40 opacity-80 hidden md:block"
          />
          <div className="absolute -bottom-6 -right-4 md:-right-10 bg-cream rounded-2xl shadow-gold border border-gold/20 px-6 py-5 max-w-[14rem]">
            <div className="flex gap-1 text-gold mb-2">
              {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
            </div>
            <p className="text-xs text-foreground/70 leading-relaxed">
              "The only groomer my dog will sit still for."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
