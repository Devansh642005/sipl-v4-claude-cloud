import { projects } from "./projects";
import { contact } from "./contact";
export type ConciergeAnswer = {
  text: string;
  source: string;
  image?: string;
  href?: string;
  action?: "film" | "enquire";
  label?: string;
};
const projectPath = "/projects/sri-krishna-vilas";
export function answerConcierge(input: string): ConciergeAnswer {
  const q = input
    .toLowerCase()
    .replace(/[^a-z0-9.\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const fallback = {
    text: "Please contact SIPL for the latest verified information. I can help you explore published projects, amenities, reference plans and contact details.",
    source: "SIPL contact information",
    href: "/contact",
    label: "Contact SIPL",
  };
  if (
    /\b(price|pricing|cost|rate|rates|discount|offer|offers|rera|vda|approval|approved|possession|inventory|available|availability|completion|percent|percentage|sqft|square|area of|unit area|travel|minutes|bank|loan approval|guarantee)\b/.test(
      q,
    )
  )
    return fallback;
  const other = projects
    .slice(1)
    .find(
      (p) =>
        q.includes(p.name.toLowerCase()) ||
        (p.id === "the-kashi-residency" && /\bkashi\b/.test(q)),
    );
  if (other)
    return {
      text: `${other.name} is a ${other.status.toLowerCase()} ${other.category.toLowerCase()} project in SIPL’s published portfolio. ${other.description} Contact SIPL for current project-specific details.`,
      source: "Official SIPL project portfolio",
      image: other.image,
      href: other.href,
      label: "Explore Project",
    };
  const scenes: [RegExp, string, string, string][] = [
    [/\b(pool|swim|swimming)\b/, "pool", "Pool and garden area", "living"],
    [/\b(gym|fitness)\b/, "gym", "Open Gym", "living"],
    [/\b(lobby|reception)\b/, "lobby", "Lobby reference", "gallery"],
    [/\b(atrium)\b/, "atrium", "Atrium", "gallery"],
    [/\b(jog|jogging|track)\b/, "jogging", "Jogging Track", "living"],
    [
      /\b(exterior|building|tower|entrance)\b/,
      "hero",
      "Project exterior",
      "architecture",
    ],
    [/\b(master|site plan)\b/, "master-plan", "Master plan", "master-plan"],
  ];
  for (const [match, image, title, section] of scenes)
    if (match.test(q))
      return {
        text: `${title} at Sri Krishna Vilas. This is an illustrative project reference, not a photograph of completed construction. Explore the full section and confirm current specifications with SIPL.`,
        source: "Supplied Sri Krishna Vilas project material",
        image,
        href: projectPath + "#" + section,
        label:
          section === "master-plan" ? "View Master Plan" : "Explore Section",
      };
  if (/\b(video|film|walkthrough|watch|tour)\b/.test(q))
    return {
      text: "Watch the approved silent architectural film for Sri Krishna Vilas. The film uses illustrative project imagery.",
      source: "Approved Sri Krishna Vilas project film",
      action: "film",
      label: "Watch Project Film",
    };
  if (
    /\b(bhk|residence|residences|configuration|configurations|bedroom|types)\b/.test(
      q,
    )
  )
    return {
      text: "Sri Krishna Vilas offers 1, 1.5, 2 and 3 BHK configurations. Explore the supplied reference plans; the detailed 1.5 BHK plan is available on request. Confirm current layouts with SIPL.",
      source: "Official project introduction and supplied reference plans",
      href: projectPath + "#residences",
      label: "Explore Residences",
    };
  if (/\b(igbc|gold|recognition|certificate|certification|award)\b/.test(q))
    return {
      text: "Sri Krishna Vilas: IGBC Green Homes — Precertified Gold, November 2025, registration GH240670. This is project precertification, not final certification or a corporate award. Confirm current status with SIPL.",
      source: "Supplied IGBC document GH240670",
      image: "skv-igbc-precertificate",
      href: "/about/awards",
      label: "View Recognition",
    };
  if (/\b(amenity|amenities|facilities)\b/.test(q))
    return {
      text: "Published amenities include Club House, Exclusive Pool and Garden Area, Kids Play Area, Badminton Court, Open Gym, Close Gym & Spa, Jogging Track and Guest Rooms. Confirm final specifications and availability with SIPL.",
      source: "Official Sri Krishna Vilas amenity list",
      image: "pool",
      href: projectPath + "#living",
      label: "Discover Amenities",
    };
  if (/\b(brochure|download|document)\b/.test(q))
    return {
      text: "The official Sri Krishna Vilas brochure is available to review. Plans and visualisations are reference material; confirm current details with SIPL.",
      source: "Official linked SIPL brochure",
      href: "/documents/sri-krishna-vilas-official-brochure.pdf",
      label: "View Brochure",
    };
  if (/\b(visit|appointment|booking|book|enquire|enquiry)\b/.test(q))
    return {
      text: "Share your enquiry or preferred visit arrangements with SIPL. The team confirms appointments directly. Website forms prepare an email draft; they do not confirm a booking.",
      source: "SIPL enquiry flow",
      action: "enquire",
      label: "Plan a Visit",
    };
  if (/\b(contact|office|phone|email|call)\b/.test(q))
    return {
      text: `Call ${contact.phone} or email ${contact.email}. Corporate Office: ${contact.corporateOffice}. Registered Office: ${contact.registeredOffice}.`,
      source: "Official SIPL contact information",
      href: "/contact",
      label: "Contact SIPL",
    };
  if (/\b(location|connectivity|nearby|address)\b/.test(q))
    return {
      text: "Sri Krishna Vilas is on Lahartara–Bhitari Road, Varanasi. Nearby development references retain their original proposed or sanctioned qualifiers. Contact SIPL to confirm the site entrance and current context.",
      source: "Official project location information",
      href: projectPath + "#location",
      label: "View Location Context",
    };
  if (/\b(sri|krishna|vilas)\b/.test(q))
    return {
      text: "Sri Krishna Vilas is SIPL’s running residential project on Lahartara–Bhitari Road, Varanasi. Published facts include 2.65 Acres, 70% Open Area and 3 Tier Security.",
      source: "Official Sri Krishna Vilas introduction",
      image: "hero",
      href: projectPath,
      label: "Explore Sri Krishna Vilas",
    };
  if (/\b(project|projects|portfolio|sipl|hello|hi|help)\b/.test(q))
    return {
      text: "SIPL Group works across real estate and hospitality. Explore Sri Krishna Vilas, Barsana, Raman Reti, The Kashi Residency and Manasi Ganga, with running and upcoming statuses clearly identified.",
      source: "Official SIPL portfolio",
      href: "/projects",
      label: "Explore Projects",
    };
  return fallback;
}
