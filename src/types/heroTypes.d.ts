interface Hero {
  id?: string;
  image?:{url:string;}
  name?: string;
  appearance?: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    "eye-color": string;
    "hair-color": string;
  };
  biography?: {
    "full-name": string;
    "alter-egos": string;
    aliases: string[];
    "place-of-birth": string;
    "first-appearance": string;
    publisher: string;
    alignment: string;
  };
  powerstats?: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  connections?: {
    "group-affiliation": string;
    relatives: string;
  };
  work?: {
    occupation: string;
    base: string;
  };
  created?: string;
  updated?: string;
};
