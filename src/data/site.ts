import { portfolio } from "./sipl";
export { contact } from "./sipl";
export const navigation = [
  ["Projects", "/#projects"],
  ["About SIPL", "/#about"],
  ["Sri Krishna Vilas", "/projects/sri-krishna-vilas"],
  ["Residences", "/#residences"],
  ["Amenities", "/#living"],
  ["Location", "/#location"],
  ["Gallery", "/#gallery"],
  ["Contact", "/#enquire"],
] as const;
export const projects = portfolio.map((p, i) => ({
  ...p,
  category: `${p.vertical} · ${p.status}`,
  number: `0${i + 1}`,
}));
