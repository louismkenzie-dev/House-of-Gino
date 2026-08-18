import { createFileRoute } from "@tanstack/react-router";
import { BookingForm } from "@/components/site/BookingForm";
import { whatsappLink, PHONE } from "@/lib/contact";
import { MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/_site/book")({
  head: () => ({
    meta: [
      { title: "Book an appointment — House of Gino" },
      { name: "description", content: "Request a grooming appointment with Chelsea. Choose your date, time and treatments — or message us directly on WhatsApp." },
      { property: "og:title", content: "Book — House of Gino" },
      { property: "og:description", content: "Request a grooming appointment with Chelsea." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 md:px-8 py-20 md:py-28">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Book an Appointment</p>
        <h1 className="font-display text-5xl md:text-6xl leading-tight">
          Reserve your
          <span className="font-script gold-text block text-6xl md:text-7xl">pup's pamper.</span>
        </h1>
        <p className="mt-6 text-foreground/70 leading-relaxed">
          Tell us a few details and Chelsea will be in touch to confirm the slot.
          Prefer to chat? Send a WhatsApp or give us a call.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={whatsappLink("Hi Chelsea, I'd like to book a grooming appointment.")}
             target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-cream hover:border-gold transition-colors">
            <MessageCircle className="size-4" /> WhatsApp
          </a>
          <a href={`tel:${PHONE}`}
             className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-cream hover:border-gold transition-colors">
            <Phone className="size-4" /> {PHONE}
          </a>
        </div>
      </div>
      <BookingForm />
    </section>
  );
}
