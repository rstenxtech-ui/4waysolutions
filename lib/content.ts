export const PHONE_DISPLAY = "+91 73052 31666";
export const PHONE_TEL = "+917305231666";
export const PHONE_WA = "917305231666";
export const LANDLINE_DISPLAY = "044 4958 3814";
export const LANDLINE_TEL = "+914449583814";
export const EMAIL = "4wayplumbingsolutions@gmail.com";
export const ADDRESS_LINES = [
  "Flat No 16, Door No 28/38, Gandhi Street,",
  "Near Chintamani Vinayagar Koil,",
  "Alwarthirunagar, Chennai,",
  "Tamil Nadu, 600087",
];
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Flat+No+16+Door+No+28%2F38+Gandhi+Street+Near+Chintamani+Vinayagar+Koil+Alwarthirunagar+Chennai+Tamil+Nadu+600087";

export function waLink(text: string) {
  return `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(text)}`;
}

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#range", label: "Jaquar Range" },
  { href: "#benefits", label: "Free Benefits" },
  { href: "#amc", label: "AMC" },
  { href: "#contact", label: "Contact" },
];

export const SERVICES = [
  {
    idx: "01",
    icon: "drop" as const,
    title: "Jaquar Sales & Service",
    body: "Genuine Jaquar faucets, showers, sanitaryware and wellness products — sold, installed and serviced by trained technicians, with spares for every model.",
  },
  {
    idx: "02",
    icon: "wrench" as const,
    title: "Plumbing Services",
    body: "General plumbing repair, installation and maintenance for homes and apartments — done right the first time.",
  },
  {
    idx: "03",
    icon: "spray" as const,
    title: "Home Cleaning",
    body: "Thorough deep cleaning, carpet cleaning and window washing, using modern equipment and trained staff.",
  },
];

export const BENEFITS = [
  {
    mark: "01",
    title: "Free service call registration",
    body: "Log a service request with us at no charge, any time you need one.",
  },
  {
    mark: "02",
    title: "Free preventive maintenance",
    body: "Four scheduled visits a year to check and maintain your Jaquar fittings before problems start.",
  },
  {
    mark: "03",
    title: "Spares, sale & service",
    body: "Genuine spares for all Jaquar faucet and wellness products, fitted by trained technicians.",
  },
  {
    mark: "04",
    title: "AMC for apartments",
    body: "Annual maintenance contracts built for apartment blocks and residents’ associations.",
  },
];

export const RANGE_CATEGORIES = [
  {
    id: "cat-1",
    label: "Faucets & Mixers",
    title: "Faucets & Mixers",
    body: "Single-lever and wall-mixer faucets for kitchen and bath, in Jaquar’s full range of finishes.",
    image: "/products/faucets.jpeg",
  },
  {
    id: "cat-2",
    label: "Showers",
    title: "Showers",
    body: "Overhead and rain showers, shower panels and diverters, supplied and fitted.",
    image: "/products/showers.jpeg",
  },
  {
    id: "cat-3",
    label: "Shower Enclosures",
    title: "Shower Enclosures",
    body: "Framed and frameless glass enclosures, fitted and sealed for a leak-free finish.",
    image: "/products/shower-enclosures.jpeg",
  },
  {
    id: "cat-4",
    label: "Sanitaryware",
    title: "Sanitaryware",
    body: "Wash basins and water closets, installed with correct fall and sealing.",
    image: "/products/sanitaryware.jpeg",
  },
  {
    id: "cat-5",
    label: "Bath Tubs & Whirlpools",
    title: "Bath Tubs & Whirlpools",
    body: "Bathtubs and whirlpool baths for a full wellness bathroom.",
    image: "/products/bath-tubs.jpeg",
  },
  {
    id: "cat-6",
    label: "Steam & Sauna",
    title: "Steam & Sauna",
    body: "Steam bath and sauna units, installed and commissioned for home wellness rooms.",
    image: "/products/steam-sauna.jpeg",
  },
  {
    id: "cat-7",
    label: "Water Heaters",
    title: "Water Heaters",
    body: "Storage and instant water heaters, supplied and plumbed in.",
    image: "/products/water-heaters.jpeg",
  },
  {
    id: "cat-8",
    label: "Accessories",
    title: "Bath Fittings & Accessories",
    body: "Towel rails, robe hooks, soap dishes and paper holders, in matching finishes.",
    image: "/products/accessories.jpeg",
  },
];
