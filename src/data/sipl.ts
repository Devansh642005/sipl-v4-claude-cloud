/** Verified against official SIPL pages and reviewed documents on 8 September 2026.
 * Source conflicts and asset provenance: docs/source-verification.md.
 * No live availability, pricing, legal identifiers or unit inventory is represented.
 */
export const company = {
  name: "SIPL Group",
  tagline: "Building Trust",
  website: "https://siplgroup.in/",
};
export const contact = {
  phone: "0542-4000511",
  tel: "+915424000511",
  email: "email@siplgroup.in",
  registeredOffice: "B-30/251, Nagwa, Lanka, Varanasi, Uttar Pradesh – 221005",
  corporateOffice:
    "Plot Survey No – 529 A&B, Lahartara-Bhitari Road, Bhitari, Varanasi – 221107",
};
export const project = {
  name: "Sri Krishna Vilas",
  address: "Lahartara-Bhitari Road, Varanasi",
  developer: "Shreemaa Infrarealty Private Limited",
  size: "2.65 Acres",
  openArea: "70%",
  security: "3 Tier Security",
  source: "https://siplgroup.in/sri-krishna-vilas/",
  walkthrough: "https://www.youtube.com/watch?v=3hNM2ulWbI4",
  brochure: "/documents/sri-krishna-vilas-official-brochure.pdf",
  heroVideo: "/media/sri-krishna-vilas-tour-web.mp4",
  heroVideoApproved: true,
  film: "/media/skv-walkthrough.mp4",
};
export const configurations = [
  {
    label: "1 BHK",
    plan: "/assets/plan-1bhk.webp",
    source: "Supplied brochure · page 13",
    note: "Earlier supplied edition. Confirm the current detailed plan with SIPL.",
  },
  {
    label: "1.5 BHK",
    plan: null,
    source: "Official project introduction",
    note: "Detailed plan available on request.",
  },
  {
    label: "2 BHK",
    plan: "/assets/plan-2bhk.webp",
    source: "Official linked brochure · page 17",
    note: "Brochure reference plan. Confirm the current detailed plan with SIPL.",
  },
  {
    label: "3 BHK",
    plan: "/assets/plan-3bhk.webp",
    source: "Official linked brochure · page 21",
    note: "Brochure reference plan. Confirm the current detailed plan with SIPL.",
  },
] as const;
export const amenities = [
  "70% Open Area",
  "3 Tier Security",
  "24x7 Power Backup",
  "Gated Community",
  "Club House",
  "Exclusive Pool and Garden Area",
  "Kids Play Area",
  "Badminton Court",
  "Open Gym",
  "Close Gym & Spa",
  "Jogging Track",
  "Guest Rooms",
];
export const portfolio = [
  {
    name: "Sri Krishna Vilas",
    vertical: "Real Estate",
    status: "Running",
    description:
      "The primary residential experience. Explore the architecture, residences and life at Sri Krishna Vilas.",
    href: "/projects/sri-krishna-vilas",
    image: "hero",
    logo: false,
  },
  {
    name: "Barsana",
    vertical: "Real Estate",
    status: "Upcoming",
    description:
      "A residential group-housing project in SIPL’s Varanasi portfolio.",
    href: "/#enquire?project=Barsana",
    image: "barsana-logo",
    logo: true,
  },
  {
    name: "Raman Reti",
    vertical: "Real Estate",
    status: "Upcoming",
    description:
      "SIPL’s upcoming real-estate chapter, introduced through a township concept.",
    href: "/#enquire?project=Raman%20Reti",
    image: "raman-logo",
    logo: true,
  },
  {
    name: "The Kashi Residency",
    vertical: "Hospitality",
    status: "Running",
    description: "The group’s hospitality chapter in Varanasi.",
    href: "https://kashiresidency.com/",
    image: "hospitality",
    logo: false,
  },
  {
    name: "Manasi Ganga",
    vertical: "Hospitality",
    status: "Upcoming",
    description:
      "Listed under upcoming hospitality in SIPL’s official portfolio.",
    href: "/#enquire?project=Manasi%20Ganga",
    image: "manasi-logo",
    logo: true,
  },
];
export const nearbyDevelopment = [
  {
    name: "Varanasi–Prayagraj 6 Lane Highway",
    status: "Connectivity reference",
  },
  {
    name: "Night Market from Lahartara to Chowkaghat",
    status: "City reference",
  },
  {
    name: "Flyover from Bauliya Tiraha via Harhua to Babatpur Airport",
    status: "Connectivity reference",
  },
  { name: "Cable Car Project", status: "Proposed" },
  { name: "International Cricket Stadium", status: "Sanctioned" },
  { name: "6 Lane Road from Lahartara to IP Vijya", status: "Proposed" },
];
export const priorities = [
  {
    name: "Family Living",
    features: ["Kids Play Area", "Gated Community", "70% Open Area"],
  },
  {
    name: "Open Space",
    features: [
      "70% Open Area",
      "Exclusive Pool and Garden Area",
      "Jogging Track",
    ],
  },
  {
    name: "Wellbeing",
    features: [
      "Open Gym",
      "Close Gym & Spa",
      "Jogging Track",
      "Exclusive Pool and Garden Area",
    ],
  },
  {
    name: "Privacy",
    features: [
      "Design emphasis on privacy",
      "Light and ventilation",
      "3 Tier Security",
    ],
  },
  {
    name: "Connectivity",
    features: [
      "Lahartara-Bhitari Road, Varanasi",
      "Varanasi–Prayagraj highway reference",
    ],
  },
  {
    name: "Lifestyle",
    features: ["Club House", "Badminton Court", "Guest Rooms"],
  },
];
export const faqs = [
  {
    q: "What configurations are offered?",
    a: "Sri Krishna Vilas offers 1, 1.5, 2 and 3 BHK configurations. Detailed plans and current availability can be requested from SIPL.",
    href: "#residences",
    action: "Explore configurations",
  },
  {
    q: "What amenities are available?",
    a: "The official project highlights include a pool and garden area, club house, kids play area, badminton court, open gym, Close Gym & Spa, jogging track and guest rooms.",
    href: "#amenity-index",
    action: "View all project highlights",
  },
  {
    q: "Where is Sri Krishna Vilas?",
    a:
      project.address +
      ". See the location chapter for official connectivity references without estimated travel times.",
    href: "#location",
    action: "Explore location",
  },
  {
    q: "Can I request a floor plan?",
    a: "Yes. Explore the supplied reference plans or request a detailed plan for your preferred configuration.",
    href: "#residences",
    action: "Find your residence",
  },
  {
    q: "How do I book a site visit?",
    a: "Choose Request a Site Visit in the enquiry form. Your date and time are preferences, not confirmed availability. Call SIPL to arrange the appointment.",
    href: "#enquire?intent=visit",
    action: "Request a visit",
  },
  {
    q: "How do I contact SIPL?",
    a: "Call " + contact.phone + " or email " + contact.email + ".",
    href: "tel:" + contact.tel,
    action: "Call SIPL",
  },
];
export type GalleryCategory =
  "Exteriors" | "Interiors" | "Amenities" | "Master Plan" | "Construction";
export type GalleryAsset = {
  id: string;
  title: string;
  category: GalleryCategory;
  src: string;
  note: string;
};
const assets: [string, string, GalleryCategory][] = [
  ["hero", "The arrival", "Exteriors"],
  ["architecture", "West–north perspective", "Exteriors"],
  ["east", "East-side perspective", "Exteriors"],
  ["exterior-front", "The residential frontage", "Exteriors"],
  ["exterior-aerial", "The development from above", "Exteriors"],
  ["exterior-evening", "An evening perspective", "Exteriors"],
  ["walkway", "Between the buildings", "Exteriors"],
  ["atrium", "The atrium", "Interiors"],
  ["lobby", "The welcome home", "Interiors"],
  ["living", "Living room", "Interiors"],
  ["bedroom", "Bedroom", "Interiors"],
  ["pool", "Pool and garden", "Amenities"],
  ["gym", "Open gym", "Amenities"],
  ["jogging", "Jogging track", "Amenities"],
  ["badminton", "Badminton court", "Amenities"],
  ["theatre", "Open theatre", "Amenities"],
  ["clubhouse", "Club house", "Amenities"],
  ["indoor-gym", "Close Gym & Spa", "Amenities"],
  ["guest-room", "Guest room", "Interiors"],
  ["kids-play", "Kids play area", "Amenities"],
  ["master-plan", "The master plan", "Master Plan"],
  ["progress", "Site perspective", "Construction"],
  ["progress-wide", "Construction from the approach", "Construction"],
  ["progress-courtyard", "Inside the development", "Construction"],
];
export const gallery: GalleryAsset[] = assets.map(([id, title, category]) => ({
  id,
  title,
  category,
  src: `/assets/${id}.webp`,
  note:
    category === "Construction"
      ? "Actual site photograph · Capture date not confirmed"
      : category === "Master Plan"
        ? "Illustrative master plan · Confirm current details with SIPL"
        : "Architectural visualisation · Illustrative design intent",
}));

export const documents = {
  certificate: {
    image: "/assets/skv-igbc-precertificate.jpg",
    title: "IGBC Green Homes · Precertified Gold",
    date: "November 2025",
    registration: "GH240670",
    source: "siplgroup/New Image/GH240670.jpg",
  },
  brochure: {
    href: project.brochure,
    cover: "/assets/official-brochure-cover.webp",
    status: "Official linked brochure · Confirm current edition with SIPL",
  },
};
