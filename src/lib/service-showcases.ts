import teethBefore from "@/assets/services/teeth-before.webp";
import teethAfter from "@/assets/services/teeth-after.webp";

/**
 * Visual proof for individual menu items. Each entry is matched to a service
 * by `service` (must equal the name in site-data.ts) and rendered beneath the
 * menu. Add more entries as photography becomes available.
 */
export const serviceShowcases = [
  {
    id: "ultrasound-teeth-cleaning",
    service: "Ultrasound Teeth Cleaning",
    eyebrow: "Before & After",
    headline: "Years of tartar,",
    headlineScript: "gone in one sitting.",
    blurb:
      "Silent ultrasonic vibrations lift plaque and tartar away — no scraping, no sedation, no stress. Just drag the slider to see the difference on a single visit.",
    points: [
      "No anaesthetic and no sharp tools",
      "Calm enough for nervous dogs",
      "Around 20–30 minutes, awake and comfortable",
      "Every 6–8 weeks keeps teeth bright",
    ],
    before: teethBefore,
    after: teethAfter,
    beforeAlt:
      "Close-up of a dog's canine tooth heavily stained with yellow-brown tartar before ultrasound cleaning",
    afterAlt:
      "The same dog's canine tooth looking noticeably whiter and cleaner after ultrasound cleaning",
    caption: "Before and after a single ultrasound session.",
    ctaLabel: "Book teeth cleaning",
    ctaMessage: "Hi Chelsea, I'd like to book an ultrasound teeth cleaning for my dog.",
  },
] as const;

export type ServiceShowcaseItem = (typeof serviceShowcases)[number];

export const showcaseByService = new Map<string, ServiceShowcaseItem>(
  serviceShowcases.map((s) => [s.service, s]),
);
