import { COORDS, ADDRESS_LINES, PLACE_QUERY } from "@/lib/contact";
import { MapPin, Navigation } from "lucide-react";

export function VenueMap() {
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(PLACE_QUERY)}`;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${COORDS.lng - 0.02}%2C${COORDS.lat - 0.012}%2C${COORDS.lng + 0.02}%2C${COORDS.lat + 0.012}&layer=mapnik&marker=${COORDS.lat}%2C${COORDS.lng}`;

  return (
    <div className="relative">
      <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden border border-gold/30 shadow-soft bg-secondary">
        <iframe
          title="Map showing House of Gino near Roots & Shoots, Badley"
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0 grayscale-[15%] sepia-[8%]"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/20 rounded-3xl" />
        <div className="pointer-events-none absolute left-5 top-5 rounded-2xl border border-gold/25 bg-cream/90 px-4 py-3 shadow-soft backdrop-blur-sm">
          <p className="font-display text-lg leading-none">House of Gino</p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-foreground/55">Roots & Shoots, IP6 8RR</p>
        </div>
      </div>
      <a href={directions} target="_blank" rel="noreferrer"
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-foreground text-cream px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-foreground transition-colors shadow-soft">
        <Navigation className="size-4" /> Get directions
      </a>
      <div className="mt-12 flex items-start gap-3 text-sm text-foreground/70">
        <MapPin className="size-5 text-gold shrink-0 mt-0.5" />
        <div>
          {ADDRESS_LINES.map((l) => <div key={l}>{l}</div>)}
        </div>
      </div>
    </div>
  );
}
