import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { whatsappLink, PHONE, INSTAGRAM, FACEBOOK } from "@/lib/contact";
import { MessageCircle, Phone, Instagram, Facebook } from "lucide-react";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Book — Express interest with House of Gino" },
      { name: "description", content: "Register your interest in a booking with Chelsea. Send a WhatsApp, call, or DM @houseofgino_ on Instagram." },
      { property: "og:title", content: "Book with House of Gino" },
      { property: "og:description", content: "Send a quick message to Chelsea to register interest in a grooming appointment." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", dog: "", breed: "", service: "Full groom", notes: "" });
  const message = `Hi Chelsea! I'd like to register interest in a booking.%0A%0AName: ${form.name}%0ADog: ${form.dog} (${form.breed})%0AService: ${form.service}%0ANotes: ${form.notes}`;
  const link = `https://wa.me/447763146964?text=${message}`;

  return (
    <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 grid lg:grid-cols-2 gap-16">
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Express Interest</p>
        <h1 className="font-display text-5xl md:text-6xl leading-tight">
          Let's get
          <span className="font-script gold-text block text-6xl md:text-7xl">your pup in the diary.</span>
        </h1>
        <p className="mt-6 text-foreground/70 leading-relaxed">
          A full booking system is on its way. For now, fill in a few quick details and we'll continue the conversation
          on WhatsApp — Chelsea reads every message herself.
        </p>
        <div className="mt-10 space-y-4">
          <a href={`tel:${PHONE}`} className="flex items-center gap-4 p-5 rounded-xl border border-gold/20 hover:border-gold transition-colors">
            <Phone className="size-5 text-gold" />
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-foreground/50">Call or text</div>
              <div className="font-display text-xl">{PHONE}</div>
            </div>
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-xl border border-gold/20 hover:border-gold transition-colors">
            <Instagram className="size-5 text-gold" />
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-foreground/50">DM us</div>
              <div className="font-display text-xl">@houseofgino_</div>
            </div>
          </a>
          <a href={FACEBOOK} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-xl border border-gold/20 hover:border-gold transition-colors">
            <Facebook className="size-5 text-gold" />
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-foreground/50">Facebook</div>
              <div className="font-display text-xl">House of Gino</div>
            </div>
          </a>
        </div>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); window.open(link, "_blank"); }}
        className="bg-card rounded-3xl border border-gold/20 p-8 md:p-10 shadow-soft self-start"
      >
        <h2 className="font-display text-2xl mb-6">Tell us about your dog</h2>
        <div className="space-y-4">
          {[
            { k: "name", label: "Your name" },
            { k: "dog", label: "Dog's name" },
            { k: "breed", label: "Breed" },
          ].map((f) => (
            <div key={f.k}>
              <label className="text-xs uppercase tracking-[0.2em] text-foreground/60">{f.label}</label>
              <input required value={(form as any)[f.k]} onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                className="mt-1.5 w-full bg-cream border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
            </div>
          ))}
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-foreground/60">Service of interest</label>
            <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="mt-1.5 w-full bg-cream border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-gold">
              {["Full groom", "Bath & brush / deshed", "Hand stripping", "Puppy groom", "Ultrasound teeth cleaning", "Walk-in nail trim", "Face & hygiene trim", "Not sure yet"].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-foreground/60">Anything we should know?</label>
            <textarea rows={4} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="mt-1.5 w-full bg-cream border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-gold resize-none" />
          </div>
        </div>
        <button type="submit"
          className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-cream py-4 text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-foreground transition-colors">
          <MessageCircle className="size-4" /> Send via WhatsApp
        </button>
        <p className="mt-3 text-xs text-foreground/50 text-center">Opens WhatsApp with your details prefilled.</p>
      </form>
    </section>
  );
}
