import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Check, ChevronsUpDown, CalendarIcon, MessageCircle, Send, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { DOG_BREEDS, TREATMENTS } from "@/lib/dog-breeds";
import { whatsappLink } from "@/lib/contact";

const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
];

export function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dogName, setDogName] = useState("");
  const [breed, setBreed] = useState("");
  const [customBreed, setCustomBreed] = useState("");
  const [breedOpen, setBreedOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [treatments, setTreatments] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const toggleTreatment = (t: string) => {
    setTreatments((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  };

  const finalBreed = breed === "Other" ? customBreed.trim() : breed;

  const validate = () => {
    if (!name.trim()) return "Please add your name.";
    if (!phone.trim()) return "Please add a contact number.";
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return "Please add a valid email.";
    if (!dogName.trim()) return "What's your dog called?";
    if (!finalBreed) return "Please choose a breed.";
    if (!date) return "Pick a preferred date.";
    if (!time) return "Pick a preferred time.";
    if (treatments.length === 0) return "Choose at least one treatment.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) { toast.error(err); return; }
    setSubmitting(true);
    // UI-only for now: simulate request, then open WhatsApp prefilled with details.
    await new Promise((r) => setTimeout(r, 600));
    const summary =
      `Hi Chelsea! I'd like to book an appointment.\n\n` +
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n` +
      `Dog: ${dogName} (${finalBreed})\n` +
      `Preferred: ${format(date!, "EEE d MMM yyyy")} at ${time}\n` +
      `Treatments: ${treatments.join(", ")}` +
      (notes.trim() ? `\nNotes: ${notes}` : "");
    window.open(whatsappLink(summary), "_blank");
    toast.success("Booking request ready — sent via WhatsApp. We'll be in touch shortly!");
    setSubmitting(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-card rounded-3xl border border-gold/20 p-6 md:p-10 shadow-soft"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Your name">
          <input value={name} onChange={(e) => setName(e.target.value)} className={inputCls} placeholder="Jane Doe" />
        </Field>
        <Field label="Contact telephone">
          <input value={phone} onChange={(e) => setPhone(e.target.value)} className={inputCls} placeholder="07…" inputMode="tel" />
        </Field>
        <Field label="Email" className="md:col-span-2">
          <input value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls} placeholder="you@example.com" inputMode="email" />
        </Field>

        <Field label="Dog's name">
          <input value={dogName} onChange={(e) => setDogName(e.target.value)} className={inputCls} placeholder="Gino" />
        </Field>

        <Field label="Dog's breed">
          <Popover open={breedOpen} onOpenChange={setBreedOpen}>
            <PopoverTrigger asChild>
              <button type="button" className={cn(inputCls, "flex items-center justify-between text-left")}>
                <span className={breed ? "" : "text-foreground/40"}>{breed || "Search breeds…"}</span>
                <ChevronsUpDown className="size-4 opacity-50" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width] p-0 bg-cream border-gold/30" align="start">
              <Command>
                <CommandInput placeholder="Type to search…" />
                <CommandList>
                  <CommandEmpty>No breed found.</CommandEmpty>
                  <CommandGroup>
                    {DOG_BREEDS.map((b) => (
                      <CommandItem key={b} value={b} onSelect={() => { setBreed(b); setBreedOpen(false); }}>
                        <Check className={cn("mr-2 size-4", breed === b ? "opacity-100" : "opacity-0")} />
                        {b}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </Field>

        {breed === "Other" && (
          <Field label="Tell us the breed" className="md:col-span-2">
            <input value={customBreed} onChange={(e) => setCustomBreed(e.target.value)} className={inputCls} placeholder="e.g. Cockerpoo x Poodle" />
          </Field>
        )}

        <Field label="Preferred date">
          <Popover>
            <PopoverTrigger asChild>
              <button type="button" className={cn(inputCls, "flex items-center justify-between text-left")}>
                <span className={date ? "" : "text-foreground/40"}>{date ? format(date, "EEE d MMM yyyy") : "Pick a date"}</span>
                <CalendarIcon className="size-4 opacity-50" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-cream border-gold/30" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0)) || d.getDay() === 0}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </Field>

        <Field label="Preferred time">
          <Popover>
            <PopoverTrigger asChild>
              <button type="button" className={cn(inputCls, "flex items-center justify-between text-left")}>
                <span className={time ? "" : "text-foreground/40"}>{time || "Pick a time"}</span>
                <ChevronsUpDown className="size-4 opacity-50" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width] p-2 bg-cream border-gold/30 max-h-64 overflow-y-auto" align="start">
              <div className="grid grid-cols-2 gap-1">
                {TIME_SLOTS.map((t) => (
                  <button key={t} type="button" onClick={() => setTime(t)}
                    className={cn(
                      "text-sm px-3 py-2 rounded-md text-left hover:bg-gold/20 transition-colors",
                      time === t && "bg-gold text-foreground"
                    )}>
                    {t}
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </Field>
      </div>

      <div className="mt-6">
        <label className="text-xs uppercase tracking-[0.2em] text-foreground/60">Treatments (choose any)</label>
        <div className="mt-3 flex flex-wrap gap-2">
          {TREATMENTS.map((t) => {
            const active = treatments.includes(t);
            return (
              <button type="button" key={t} onClick={() => toggleTreatment(t)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all",
                  active
                    ? "bg-foreground text-cream border-foreground"
                    : "bg-cream border-gold/30 text-foreground/80 hover:border-gold"
                )}>
                {active ? <Check className="size-3.5" /> : <Plus className="size-3.5" />}
                {t}
              </button>
            );
          })}
        </div>
        {treatments.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {treatments.map((t) => (
              <span key={t} className="inline-flex items-center gap-1 text-xs bg-gold/20 text-foreground px-2.5 py-1 rounded-full">
                {t}
                <button type="button" onClick={() => toggleTreatment(t)} aria-label={`Remove ${t}`}>
                  <X className="size-3" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6">
        <Field label="Anything else we should know?">
          <textarea rows={4} value={notes} onChange={(e) => setNotes(e.target.value)}
            className={cn(inputCls, "resize-none")} placeholder="Coat condition, nervous around clippers, etc." />
        </Field>
      </div>

      <button type="submit" disabled={submitting}
        className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-cream py-4 text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-foreground transition-colors disabled:opacity-60">
        {submitting ? "Sending…" : (<><Send className="size-4" /> Send booking request</>)}
      </button>
      <p className="mt-3 text-xs text-foreground/50 text-center inline-flex items-center justify-center gap-1.5 w-full">
        <MessageCircle className="size-3.5" /> Confirmation emails to you and Chelsea coming soon — for now we'll continue on WhatsApp.
      </p>
    </motion.form>
  );
}

const inputCls =
  "w-full bg-cream border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors";

function Field({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label className="text-xs uppercase tracking-[0.2em] text-foreground/60">{label}</label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
