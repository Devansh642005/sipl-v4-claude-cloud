export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  media?: string;
  body: { heading?: string; text: string }[];
  source: string;
  verified: boolean;
};
export const articles: Article[] = [];
