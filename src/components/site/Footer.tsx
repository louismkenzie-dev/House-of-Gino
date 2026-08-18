import { Instagram, Facebook, Phone, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logoLight from "@/assets/logo-light.png";
import { ADDRESS_LINES, FACEBOOK, INSTAGRAM, PHONE, whatsappLink } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-gold/20 bg-foreground text-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="inline-block">
            <img src={logoLight} alt="House of Gino" className="h-32 md:h-40 w-auto" />
          </Link>
          <p className="mt-6 max-w-md text-cream/70 leading-relaxed">
            Boutique dog grooming by Chelsea — pampering pups across Suffolk with patience, skill and a whole lot of love.
          </p>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Visit</h4>
          <address className="not-italic text-sm text-cream/70 leading-relaxed">
            {ADDRESS_LINES.map((l) => <div key={l}>{l}</div>)}
          </address>
          <p className="mt-4 text-xs text-cream/50">Mon–Fri & Saturday mornings</p>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Connect</h4>
          <div className="flex flex-col gap-3 text-sm text-cream/80">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 hover:text-gold"><Phone className="size-4" /> {PHONE}</a>
            <a href={whatsappLink("Hi Chelsea!")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><MessageCircle className="size-4" /> WhatsApp</a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><Instagram className="size-4" /> Instagram</a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><Facebook className="size-4" /> Facebook</a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/40 tracking-widest uppercase">
        © {new Date().getFullYear()} House of Gino · Crafted with care in Suffolk
      </div>
    </footer>
  );
}
