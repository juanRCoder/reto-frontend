export interface Country {
  code: string;
  name: string;
  capital?: string;
  continent: { name: string };
  languages: { name: string }[];
  currency: string;
}

export interface GraphQLResponse {
  countries: Country[];
}

export interface propSearchInput {
  search: (str: string) => void;
  searchForContinent: (continents: string[]) => void;
}

export interface propModalContinents {
  cleanInput: () => void;
  searchForContinent: (continents: string[]) => void;
}

export interface propCardCountry {
  country: string;
  continent: string;
  onclick: () => void
}
