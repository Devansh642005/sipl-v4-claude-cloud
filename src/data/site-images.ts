/**
 * Single source for every image used by the redesigned site.
 * Swap a file here and it updates everywhere.
 */
export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Explicit crop focus. Never rely on a blanket centre crop for towers. */
  position?: string;
  fit?: "cover" | "contain";
  /** Renders are labelled as artist's impressions. */
  render?: boolean;
};

const skv = "/projects/sri-krishna-vilas";

export const siteImages = {
  logo: {
    src: "/assets/logo-dark.png",
    alt: "SIPL Group — Building Trust",
    width: 1000,
    height: 530,
    fit: "contain",
  },
  logoLight: {
    src: "/assets/logo-light.png",
    alt: "SIPL Group — Building Trust",
    width: 1600,
    height: 574,
    fit: "contain",
  },
  aerialTwinTowers: {
    // Low-resolution placeholder supplied with the asset pack; replace with the final render.
    src: `${skv}/_placeholder-lowres/vilas-aerial-twin-towers-LOWRES.webp`,
    alt: "Aerial artist's impression of the Govardhan and Gokul towers at Sri Krishna Vilas amid landscaped grounds",
    width: 1344,
    height: 807,
    position: "42% 0%",
    render: true,
  },
  angleTwinTowers: {
    src: `${skv}/_placeholder-lowres/vilas-angle-twin-towers-LOWRES.webp`,
    alt: "Angled artist's impression of the twin towers at Sri Krishna Vilas",
    width: 1344,
    height: 799,
    position: "50% 20%",
    render: true,
  },
  livingDining: {
    src: `${skv}/vilas-living-dining-1600.webp`,
    alt: "Artist's impression of a living and dining room with warm timber and soft light at Sri Krishna Vilas",
    width: 1600,
    height: 900,
    position: "47% 55%",
    render: true,
  },
  bedroom: {
    src: `${skv}/vilas-bedroom-1600.webp`,
    alt: "Artist's impression of a bedroom at Sri Krishna Vilas",
    width: 1600,
    height: 900,
    position: "50% 50%",
    render: true,
  },
  balconyPoolView: {
    src: `${skv}/vilas-balcony-pool-view-1600.webp`,
    alt: "Artist's impression of a balcony overlooking the pool at Sri Krishna Vilas",
    width: 1600,
    height: 900,
    position: "50% 55%",
    render: true,
  },
  atriumSkylight: {
    src: `${skv}/vilas-atrium-skylight-1600.webp`,
    alt: "Artist's impression of the skylit atrium at Sri Krishna Vilas",
    width: 1600,
    height: 900,
    position: "50% 40%",
    render: true,
  },
  lobbyReception: {
    src: `${skv}/vilas-lobby-reception-1600.webp`,
    alt: "Artist's impression of the lobby reception at Sri Krishna Vilas",
    width: 1600,
    height: 900,
    position: "50% 50%",
    render: true,
  },
  gardenAmphitheatre: {
    src: `${skv}/vilas-garden-amphitheatre-1600.webp`,
    alt: "Artist's impression of the landscaped garden and amphitheatre at Sri Krishna Vilas",
    width: 1600,
    height: 900,
    position: "55% 60%",
    render: true,
  },
  frontageLandscapeRoad: {
    src: `${skv}/vilas-frontage-landscape-road-1600.webp`,
    alt: "Artist's impression of the landscaped frontage and approach road at Sri Krishna Vilas",
    width: 1600,
    height: 900,
    position: "50% 55%",
    render: true,
  },
  govardhanEntrance: {
    src: `${skv}/vilas-govardhan-entrance-1600.webp`,
    alt: "Artist's impression of the Govardhan tower entrance at Sri Krishna Vilas",
    width: 1600,
    height: 900,
    position: "49% 50%",
    render: true,
  },
  gokulEntrance: {
    src: `${skv}/vilas-gokul-entrance-1600.webp`,
    alt: "Artist's impression of the Gokul tower entrance at Sri Krishna Vilas",
    width: 1600,
    height: 900,
    position: "52% 50%",
    render: true,
  },
  kashiFacade: {
    src: "/assets/hospitality.webp",
    alt: "Facade of The Kashi Residency in Varanasi",
    width: 596,
    height: 563,
    position: "50% 40%",
  },
  kashiGuestroom: {
    src: "/assets/corporate/kashi-room.webp",
    alt: "A guest room at The Kashi Residency, Varanasi",
    width: 1440,
    height: 1024,
    position: "50% 50%",
  },
  eventPhoto: {
    src: "/assets/corporate/event-1.webp",
    alt: "People gathered at an SIPL Group event",
    width: 1400,
    height: 933,
    position: "50% 40%",
  },
  sitePhoto: {
    src: "/assets/progress.webp",
    alt: "Construction progress photograph from the Sri Krishna Vilas site",
    width: 1200,
    height: 1600,
    position: "50% 40%",
  },
  courtyard: {
    src: "/assets/progress-courtyard.webp",
    alt: "Courtyard photograph from the Sri Krishna Vilas site",
    width: 1200,
    height: 1600,
    position: "50% 50%",
  },
  logoBarsana: {
    src: "/assets/barsana-logo.webp",
    alt: "Barsana project logo",
    width: 445,
    height: 195,
    fit: "contain",
  },
  logoRamanReti: {
    src: "/assets/raman-logo.webp",
    alt: "Raman Reti project logo",
    width: 549,
    height: 143,
    fit: "contain",
  },
  logoManasiGanga: {
    src: "/assets/manasi-logo.webp",
    alt: "Manasi Ganga project logo",
    width: 277,
    height: 195,
    fit: "contain",
  },
} satisfies Record<string, SiteImage>;

export type SiteImageKey = keyof typeof siteImages;
