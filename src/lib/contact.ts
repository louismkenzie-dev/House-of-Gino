export const PHONE = "07763146964";
export const PHONE_INTL = "447763146964";
export const INSTAGRAM = "https://www.instagram.com/houseofgino_/";
export const FACEBOOK = "https://www.facebook.com/profile.php?id=61588419812182";
export const ADDRESS_LINES = [
  "Find us just off the car park at Roots & Shoots",
  "Stowmarket Road, Badley",
  "Ipswich, Suffolk, IP6 8RR",
];
export const COORDS = { lng: 1.0234, lat: 52.1457 }; // Roots & Shoots Garden Centre, Badley, IP6 8RR
export const PLACE_QUERY = "Roots & Shoots Garden Centre, Stowmarket Road, Badley, Ipswich IP6 8RR";

export function whatsappLink(message: string) {
  return `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(message)}`;
}
