import archiveMedia from "./new-zip-media.json";
import imported from "./corporate-media.json";
import dimensions from "./media-dimensions.json";
import legacy from "./asset-map.json";
export type MediaAsset = {
  id: string;
  src: string;
  alt: string;
  category: string;
  project?: string;
  type: string;
  aspectRatio: number;
  width?: number;
  height?: number;
  caption: string;
  actualOrRender: string;
  priority?: boolean;
  source: string;
  verified: boolean;
  sourceArchivePath?: string;
  verificationStatus?: string;
  focalPoint?: string;
  notes?: string;
};
const descriptions: Record<string, string> = {
  varanasi: "Boats and ghats along the Ganges in Varanasi",
  hero: "Sri Krishna Vilas architectural visualisation",
  hospitality: "The Kashi Residency hospitality image",
  "barsana-logo": "Barsana project identity",
  "raman-logo": "Raman Reti project identity",
  "manasi-logo": "Manasi Ganga project identity",
};
export const media: Record<string, MediaAsset> = Object.fromEntries([
  ...Object.entries(legacy)
    .filter(([, v]) => "public" in v && /\.(webp|jpg|png)$/.test(v.public))
    .map(([id, v]) => [
      id,
      {
        id,
        src: "public" in v ? v.public : "",
        alt: descriptions[id] || id.replaceAll("-", " "),
        category:
          id === "varanasi"
            ? "city"
            : id.includes("logo")
              ? "brand"
              : id.includes("certificate")
                ? "document"
                : id === "hospitality"
                  ? "hospitality"
                  : "project",
        project: ["varanasi", "logo-light", "logo-dark"].includes(id)
          ? undefined
          : id === "hospitality"
            ? "the-kashi-residency"
            : id === "barsana-logo"
              ? "barsana"
              : id === "raman-logo"
                ? "raman-reti"
                : id === "manasi-logo"
                  ? "manasi-ganga"
                  : "sri-krishna-vilas",
        type: id.includes("logo") ? "logo" : "image",
        aspectRatio: 1.5,
        caption: descriptions[id] || id.replaceAll("-", " "),
        actualOrRender:
          id.includes("certificate") || id.includes("brochure")
            ? "document"
            : id.startsWith("progress") ||
                id === "varanasi" ||
                id === "hospitality"
              ? "actual"
              : id.includes("logo")
                ? "identity"
                : "render",
        source: v.original,
        verified: true,
      },
    ]),
  ...imported.map((m) => [m.id, m]),
  [
    "logo",
    {
      id: "logo",
      src: "/assets/logo-dark.png",
      alt: "SIPL Group — Building Trust",
      category: "brand",
      type: "logo",
      aspectRatio: 2,
      caption: "SIPL Group",
      actualOrRender: "identity",
      source: "Supplied SIPL logo",
      verified: true,
    },
  ],
  [
    "hospitality",
    {
      id: "hospitality",
      src: "/assets/hospitality.webp",
      alt: "The Kashi Residency",
      category: "hospitality",
      project: "the-kashi-residency",
      type: "image",
      aspectRatio: 1.5,
      caption: "The Kashi Residency · Official hospitality portfolio",
      actualOrRender: "actual",
      source: "siplgroup/img/The Kashi Residency.jpeg",
      verified: true,
    },
  ],
]);
export const mediaSlots = {
  corporateHero: "varanasi",
  aboutPreview: "event-1",
  culture: "event-2",
  realEstate: "barsana-logo",
  hospitality: "kashi-room",
  filmPoster: "pool",
  recognition: "skv-igbc-precertificate",
  aboutHero: "event-2",
  legacyHero: "varanasi",
  nriHero: "varanasi",
  careersHero: "event-3",
  readingCover: "event-4",
  contactCity: "varanasi",
  amenityPanorama: "walkway",
};
export const approvedFilm = {
  src: "/media/sri-krishna-vilas-corporate-film.mp4",
  original: "/media/sri-krishna-vilas-tour.mp4",
  poster: mediaSlots.filmPoster,
  durationLabel: "50 seconds",
  description:
    "Silent architectural film showing Sri Krishna Vilas exteriors, landscaped spaces and shared interiors. Visualisations are illustrative.",
};

for (const asset of Object.values(media)) {
  const size = (
    dimensions as Record<
      string,
      { width: number; height: number; aspectRatio: number }
    >
  )[asset.src];
  if (size) Object.assign(asset, size);
}

for (const asset of archiveMedia) media[asset.id] = asset;
export const mediaReplacementBySource: Record<string, string> =
  Object.fromEntries(
    archiveMedia.filter((a) => a.replaces).map((a) => [a.replaces!, a.src]),
  );

for (const [id, filename, alt] of [
  [
    "editorial-arrival",
    "arrival",
    "Sri Krishna Vilas exterior architectural visualisation",
  ],
  [
    "editorial-atrium",
    "atrium",
    "Sri Krishna Vilas atrium architectural visualisation",
  ],
  [
    "editorial-interior",
    "interior",
    "Sri Krishna Vilas sample-flat interior visualisation",
  ],
]) {
  media[id] = {
    id,
    src: `/media/editorial/${filename}.webp`,
    alt,
    category: "project",
    project: "sri-krishna-vilas",
    type: "image",
    aspectRatio: 16 / 9,
    caption: alt,
    actualOrRender: "render",
    source:
      "Client-supplied Image & Video; see docs/editorial-asset-manifest.json",
    verified: true,
  };
}
