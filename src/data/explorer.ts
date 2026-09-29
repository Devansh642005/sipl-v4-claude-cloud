export type Chapter = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  position: string;
  hotspot: { x: number; y: number } | null;
};
export const chapters: Chapter[] = [
  {
    id: "arrival",
    number: "01",
    title: "The arrival",
    subtitle: "A first impression. A new perspective.",
    description:
      "Begin at the entrance to Sri Krishna Vilas. An architectural introduction to the place you could call home.",
    image: "hero",
    position: "62% center",
    hotspot: null,
  },
  {
    id: "exterior",
    number: "02",
    title: "A sense of scale",
    subtitle: "The architecture, in view.",
    description:
      "See the residential towers from another perspective. The architectural design places emphasis on light, ventilation and privacy.",
    image: "east",
    position: "50% center",
    hotspot: null,
  },
  {
    id: "walkway",
    number: "03",
    title: "Between the buildings",
    subtitle: "Room for the everyday.",
    description:
      "Move through the shared walkway. A different view of the spaces between the residences.",
    image: "walkway",
    position: "50% center",
    hotspot: null,
  },
  {
    id: "atrium",
    number: "04",
    title: "Look up. Slow down.",
    subtitle: "A moment in the atrium.",
    description:
      "Light, height and the rhythm of the balconies create an open architectural composition.",
    image: "atrium",
    position: "50% center",
    hotspot: null,
  },
  {
    id: "lobby",
    number: "05",
    title: "A quiet welcome",
    subtitle: "The transition into home.",
    description:
      "A closer look at the proposed lobby interior, its material palette and places to pause.",
    image: "lobby",
    position: "50% center",
    hotspot: null,
  },
  {
    id: "recreation",
    number: "06",
    title: "A change of pace",
    subtitle: "Life beyond your front door.",
    description:
      "Explore the pool visualisation and imagine a slower moment in the shared recreation spaces.",
    image: "pool",
    position: "55% center",
    hotspot: null,
  },
  {
    id: "home",
    number: "07",
    title: "Make it your own",
    subtitle: "The most personal chapter.",
    description:
      "An interior perspective on coming home. Illustrative furnishings show one possible expression of the living space.",
    image: "living",
    position: "50% center",
    hotspot: null,
  },
];
export type Residence = {
  id: string;
  label: string;
  unitType: string | null;
  area: number | null;
  areaBasis: string | null;
  tower: string | null;
  planImage: string | null;
  download: string | null;
  status: "pending-verification";
};
export const residences: Residence[] = ["1 BHK", "2 BHK", "3 BHK"].map(
  (label, i) => ({
    id: `residence-${i + 1}`,
    label,
    unitType: null,
    area: null,
    areaBasis: null,
    tower: null,
    planImage: null,
    download: null,
    status: "pending-verification",
  }),
);
export const location = {
  address: "Lahartara–Bhitari Road, Varanasi",
  source: "Supplied project description",
  coordinates: null,
  directionsUrl: null,
  destinations: [],
};
export const film: {
  src: string | null;
  poster: string;
  captions: string | null;
} = { src: null, poster: "/assets/architecture.webp", captions: null };
