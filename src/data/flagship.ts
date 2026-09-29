export const developmentModes = [
  "Overview",
  "Towers",
  "Amenities",
  "Master Plan",
] as const;
export type DevelopmentMode = (typeof developmentModes)[number];
export type ModelAsset = {
  url: string;
  format: "glb" | "gltf";
  nodeNames: Partial<Record<DevelopmentMode, string[]>>;
};
// Populate only after optimization and verification against the supplied SKP.
export const developmentModel: ModelAsset | null = null;
export type VerifiedResidence = {
  id: string;
  label: string;
  planImage: string | null;
};
export type VerifiedFloor = {
  id: string;
  label: string;
  residences: VerifiedResidence[];
};
export type Tower = {
  id: string;
  label: string;
  status: "unverified" | "verified";
  floors: VerifiedFloor[];
};
// Requested UI labels; no floor numbers or inventory inferred from renders.
export const towers: Tower[] = [
  { id: "a", label: "Tower A", status: "unverified", floors: [] },
  { id: "b", label: "Tower B", status: "unverified", floors: [] },
];
