import { Instagram } from "lucide-react";
import { INSTAGRAM } from "@/lib/contact";
import dog1 from "@/assets/instagram/dog-1.jpg";
import dog2 from "@/assets/instagram/dog-2.jpg";
import dog3 from "@/assets/instagram/dog-3.jpg";
import dog4 from "@/assets/instagram/dog-4.jpg";
import dog5 from "@/assets/instagram/dog-5.jpg";
import dog6 from "@/assets/instagram/dog-6.jpg";
import dog7 from "@/assets/instagram/dog-7.jpg";

const photos = [
  { src: dog1, alt: "Freshly groomed apricot cockapoo with a teddy-bear cut" },
  { src: dog2, alt: "Cream cavapoo sitting pretty after a trim" },
  { src: dog3, alt: "Cheeky black doodle puppy showing off his fresh face" },
  { src: dog4, alt: "Healthy white teeth after a House of Gino dental clean" },
  { src: dog5, alt: "Smiling labradoodle in a fruity bandana" },
  { src: dog6, alt: "Border collie freshly de-shed on the grooming table" },
  { src: dog7, alt: "Red cockapoo fresh out the bath on the grooming table" },
];

export function InstagramFeed() {
  return (
    <section className="mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-32">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">@houseofgino_</p>
          <h2 className="font-display text-4xl md:text-6xl">From the salon floor.</h2>
        </div>
        <a href={INSTAGRAM} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:text-gold">
          <Instagram className="size-4" /> Follow on Instagram →
        </a>
      </div>

      {/* Marquee slider */}
      <div className="relative overflow-hidden -mx-5 md:-mx-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex gap-4 w-max animate-marquee py-2 px-5 md:px-8">
          {[...photos, ...photos].map((p, i) => (
            <a
              key={i}
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="group relative size-64 md:size-72 shrink-0 rounded-2xl overflow-hidden border border-gold/20 shadow-soft"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity grid place-items-end p-4">
                <Instagram className="size-5 text-cream" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Static grid for accessibility / no-JS */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-10">
        {photos.map((p, i) => (
          <a key={i} href={INSTAGRAM} target="_blank" rel="noreferrer"
            className="group relative aspect-square rounded-xl overflow-hidden border border-gold/20">
            <img src={p.src} alt={p.alt} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
          </a>
        ))}
      </div>
    </section>
  );
}
