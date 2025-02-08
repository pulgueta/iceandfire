export type Character = {
  url: string;
  name: string;
  gender: string;
  culture: string;
  born: string;
  died: string;
  titles: unknown[];
  aliases: string[];
  father: string;
  mother: string;
  spouse: string;
  allegiances: string[];
  books: string[];
  povBooks: unknown[];
  tvSeries: string[];
  playedBy: string[];
};

export type House = {
  url: string;
  name: string;
  region: string;
  coatOfArms: string;
  words: string;
  titles: string[];
  seats: string[];
  currentLord: string;
  heir: string;
  overlord: string;
  founded: string;
  founder: string;
  diedOut: string;
  ancestralWeapons: unknown[];
  cadetBranches: string[];
  swornMembers: string[];
};
