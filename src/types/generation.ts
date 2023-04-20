export interface GenerationResponse {
  abilities: any[];
  id: number;
  main_region: Type;
  moves: Type[];
  name: string;
  names: Language[];
  pokemon_species: Type[];
  types: Type[];
  version_groups: Type[];
}

interface Type {
  name: string;
  url: string;
}

export interface Language {
  language: Type;
  name: string;
}
