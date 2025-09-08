import type { HeroProps } from "../types/hero.types.js";

type AllHeroProps = {
  items: HeroProps[]; // heroProps er array nilam to, oitar por page er info gula
} & {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
};

// return type shudu matro string use na kore Promise<string> use korar karon holo, .json() ekta Promise return kore
export const fetchSuperheroDetails = async (id: string): Promise<HeroProps> => {
  const response = await fetch(
    `https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records/${id}`
  );
  if (!response.ok) {
    throw new Error("Fetch failed");
  }
  return response.json();
};

export const fetchSuperheroesByApi = async (
  url: string
): Promise<AllHeroProps> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
