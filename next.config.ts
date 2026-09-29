import type { NextConfig } from "next";
const config: NextConfig = {
  images: { qualities: [75, 90], formats: ["image/avif", "image/webp"] },
};
export default config;
