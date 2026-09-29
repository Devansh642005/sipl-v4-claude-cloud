export type NewsItem = {
  id: string;
  title: string;
  category: string;
  summary: string;
  href: string;
  image?: string;
  date?: string;
  verified: boolean;
  source: string;
  lastChecked: string;
};
export const news: NewsItem[] = [
  {
    id: "upcoming-residential",
    title: "On the horizon: Barsana & Raman Reti",
    category: "Upcoming projects",
    summary:
      "Explore the next residential developments listed in SIPL’s portfolio.",
    href: "/projects/real-estate",
    image: "barsana-logo",
    verified: true,
    source: "https://siplgroup.in/",
    lastChecked: "2026-09-10",
  },
  {
    id: "project-brochure",
    title: "A closer look at Sri Krishna Vilas",
    category: "Project information",
    summary:
      "Browse the official project brochure, reference plans and architectural film.",
    href: "/projects/sri-krishna-vilas#project-information",
    verified: true,
    source: "https://siplgroup.in/sri-krishna-vilas/",
    lastChecked: "2026-09-10",
  },
  {
    id: "hospitality-next",
    title: "The hospitality portfolio",
    category: "Portfolio update",
    summary: "Discover The Kashi Residency and upcoming Manasi Ganga.",
    href: "/projects/hospitality",
    image: "manasi-logo",
    verified: true,
    source: "https://siplgroup.in/",
    lastChecked: "2026-09-10",
  },
];
