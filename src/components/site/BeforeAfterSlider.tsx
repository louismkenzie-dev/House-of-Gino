import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  label: string;
};

/**
 * Drag-to-reveal comparison. The native range input sits invisibly over the
 * image so pointer, touch and keyboard all work without custom drag handling.
 */
export function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  label,
}: Props) {
  const [pos, setPos] = useState(50);

  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-gold/25 bg-secondary shadow-soft select-none has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-cream">
      {/* After sits underneath — revealed as the handle moves left */}
      <img
        src={after}
        alt={afterAlt}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      {/* Before is clipped to the left of the handle */}
      <img
        src={before}
        alt={beforeAlt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      {/* Corner labels */}
      <div
        className="pointer-events-none absolute left-4 top-4 rounded-full border border-cream/25 bg-foreground/70 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-cream backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: pos < 18 ? 0 : 1 }}
      >
        {beforeLabel}
      </div>
      <div
        className="pointer-events-none absolute right-4 top-4 rounded-full border border-gold/40 bg-gold/90 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-foreground backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: pos > 82 ? 0 : 1 }}
      >
        {afterLabel}
      </div>

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-px bg-cream/90 shadow-[0_0_18px_rgba(0,0,0,0.35)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/50 bg-cream text-foreground shadow-soft transition-transform duration-300 group-hover:scale-110">
          <div className="flex items-center">
            <ChevronLeft className="size-4 -mr-1 text-gold" strokeWidth={2.5} />
            <ChevronRight className="size-4 -ml-1 text-gold" strokeWidth={2.5} />
          </div>
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        step={0.1}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={label}
        aria-valuetext={`${Math.round(pos)}% ${beforeLabel}`}
        style={{ touchAction: "pan-y" }}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0 focus:outline-none"
      />

      {/* Hint — fades out once the visitor starts dragging */}
      <div
        className="pointer-events-none absolute bottom-4 left-1/2 z-30 -translate-x-1/2 rounded-full bg-foreground/70 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-cream backdrop-blur-sm transition-opacity duration-500"
        style={{ opacity: pos === 50 ? 1 : 0 }}
      >
        Drag to reveal
      </div>
    </div>
  );
}
