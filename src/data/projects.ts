export type Project = {
  id: string;
  name: string;
  category: "Real Estate" | "Hospitality";
  status: "Running" | "Upcoming";
  image: string;
  href: string;
  description: string;
  location?: string;
  verified: boolean;
  source: string;
  lastChecked: string;
};
export const projects: Project[] = [
  {
    id: "sri-krishna-vilas",
    name: "Sri Krishna Vilas",
    category: "Real Estate",
    status: "Running",
    image: "hero",
    href: "/projects/sri-krishna-vilas",
    description:
      "Residential living with open surroundings and a choice of 1, 1.5, 2 and 3 BHK configurations.",
    location: "Lahartara–Bhitari Road, Varanasi",
  },
  {
    id: "barsana",
    name: "Barsana",
    category: "Real Estate",
    status: "Upcoming",
    image: "barsana-logo",
    href: "/projects/barsana",
    description:
      "An upcoming residential group-housing project in the SIPL portfolio.",
    location: "Varanasi",
  },
  {
    id: "raman-reti",
    name: "Raman Reti",
    category: "Real Estate",
    status: "Upcoming",
    image: "raman-logo",
    href: "/projects/raman-reti",
    description:
      "An upcoming real-estate development, introduced by SIPL through a township concept.",
  },
  {
    id: "the-kashi-residency",
    name: "The Kashi Residency",
    category: "Hospitality",
    status: "Running",
    image: "hospitality",
    href: "/hospitality/the-kashi-residency",
    description: "Explore the group’s hospitality presence in Varanasi.",
    location: "Varanasi",
  },
  {
    id: "manasi-ganga",
    name: "Manasi Ganga",
    category: "Hospitality",
    status: "Upcoming",
    image: "manasi-logo",
    href: "/hospitality/manasi-ganga",
    description: "The next hospitality chapter in SIPL’s announced portfolio.",
  },
].map((p) => ({
  ...p,
  verified: true,
  source: "https://siplgroup.in/",
  lastChecked: "2026-09-10",
})) as Project[];
