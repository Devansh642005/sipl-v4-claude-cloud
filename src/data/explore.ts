/** Sri Krishna Vilas explore pages: one list feeds the header, footer, home cards and sitemap. */
export const explorePages = [
  {
    href: "/tour",
    title: "Virtual tour",
    blurb: "The film with chapters you can jump to, and renders you can look around.",
    image: "atriumSkylight",
  },
  {
    href: "/floor-plans",
    title: "Floor plans",
    blurb: "1, 1.5, 2 and 3 BHK reference plans, side by side.",
    image: "livingDining",
  },
  {
    href: "/amenities",
    title: "Amenities",
    blurb: "Pool, garden, gym, courts and the everyday comforts.",
    image: "balconyPoolView",
  },
  {
    href: "/progress",
    title: "Site progress",
    blurb: "Photographs from the site, not only renders.",
    image: "sitePhoto",
  },
  {
    href: "/location",
    title: "Location",
    blurb: "Lahartara–Bhitari Road, with a live map and directions.",
    image: "frontageLandscapeRoad",
  },
  {
    href: "/buyers-guide",
    title: "Buyer's guide",
    blurb: "How buying works, step by step, and questions answered.",
    image: "bedroom",
  },
] as const;

export const filmChapters = [
  { t: 0.5, title: "The arrival", note: "Both towers, from above" },
  { t: 8.6, title: "The architecture", note: "Balconies and building depth" },
  { t: 16.6, title: "Reception", note: "Marble, timber and an arched wall" },
  { t: 24.6, title: "The atrium", note: "Skylight and glass lift shaft" },
  { t: 32.6, title: "Balcony and pool", note: "Open skies over the pool" },
  { t: 40.6, title: "The garden", note: "Landscape and stepped seating" },
  { t: 47.6, title: "Tower entrance", note: "Govardhan entrance" },
  { t: 52.6, title: "Landscaped paths", note: "Lawns and walkways" },
  { t: 56.8, title: "Living and dining", note: "A home, considered" },
  { t: 61.2, title: "The bedroom", note: "Warm timber, quiet light" },
] as const;

export const panViews = [
  { src: "/projects/sri-krishna-vilas/vilas-garden-amphitheatre-2400.webp", title: "Garden and amphitheatre" },
  { src: "/projects/sri-krishna-vilas/vilas-frontage-landscape-road-2400.webp", title: "Landscaped frontage" },
  { src: "/projects/sri-krishna-vilas/vilas-atrium-skylight-2400.webp", title: "Atrium and skylight" },
  { src: "/projects/sri-krishna-vilas/vilas-lobby-reception-2400.webp", title: "Reception" },
  { src: "/projects/sri-krishna-vilas/vilas-balcony-pool-view-1600.webp", title: "Balcony and pool" },
  { src: "/projects/sri-krishna-vilas/vilas-living-dining-1600.webp", title: "Living and dining" },
  { src: "/projects/sri-krishna-vilas/vilas-bedroom-1600.webp", title: "Bedroom" },
] as const;

export const buyingSteps = [
  ["Enquire", "Tell us what you are looking for. We share the project details, plans and brochure."],
  ["Visit the site", "See the project and the surroundings, and talk through the residences in person."],
  ["Choose your residence", "Pick the configuration and floor that suit your family and budget."],
  ["Confirm the details", "Review the price sheet, payment schedule and approvals with our team."],
  ["Book", "Complete the booking formalities and the agreement documents."],
  ["Arrange finance", "If you need a home loan, we help you with the paperwork banks ask for."],
  ["Follow progress", "Track construction through site updates and visits."],
  ["Possession", "Complete the final formalities and receive your home."],
] as const;
