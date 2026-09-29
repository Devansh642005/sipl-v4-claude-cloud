import { contact } from "@/data/contact";
/** Honest email adapter. Replace with a server transport when an endpoint is commissioned. */
export function enquiryMailto(subject: string, values: Record<string, string>) {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    Object.entries(values)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n"),
  )}`;
}
