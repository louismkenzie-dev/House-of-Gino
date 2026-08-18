import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";
import { INSTAGRAM, FACEBOOK, whatsappLink } from "@/lib/contact";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/visit", label: "Visit" },
  { to: "/book", label: "Book" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let current = window.scrollY > 40;
    setScrolled(current);
    const onScroll = () => {
      const y = window.scrollY;
      // hysteresis: only flip past separated thresholds to avoid jitter
      if (!current && y > 64) {
        current = true;
        setScrolled(true);
      } else if (current && y < 24) {
        current = false;
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/70 border-b border-gold/20">
      <div className={`mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between transition-[height] duration-500 ease-out ${scrolled ? "h-20" : "h-28 md:h-40"}`}>
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-[0.18em] uppercase">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-foreground/70 hover:text-foreground transition-colors relative group"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"
            className="size-9 rounded-full border border-gold/40 grid place-items-center text-foreground/70 hover:bg-gold hover:text-cream hover:border-gold transition-all">
            <Instagram className="size-4" />
          </a>
          <a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook"
            className="size-9 rounded-full border border-gold/40 grid place-items-center text-foreground/70 hover:bg-gold hover:text-cream hover:border-gold transition-all">
            <Facebook className="size-4" />
          </a>
          <Link to="/book"
            className="ml-2 rounded-full bg-foreground text-cream px-5 py-2.5 text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-foreground transition-colors">
            Book
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden size-10 grid place-items-center" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gold/20 bg-cream px-5 py-6 flex flex-col gap-4">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
              className="text-sm tracking-[0.18em] uppercase text-foreground/80">
              {n.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="size-9 rounded-full border border-gold/40 grid place-items-center"><Instagram className="size-4" /></a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer" className="size-9 rounded-full border border-gold/40 grid place-items-center"><Facebook className="size-4" /></a>
          </div>
        </div>
      )}
    </header>
  );
}
