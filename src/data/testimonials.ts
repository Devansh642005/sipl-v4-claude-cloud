export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  project?: string;
  rating?: number;
  source: string;
  sourceUrl?: string;
  date?: string;
  media?: string;
  verified: boolean;
};
export const testimonials: Testimonial[] = [];
