export interface Pokemons {
  count: number;
  next: string | null;
  previous: string | null;
  results: Species[];
}

export interface Species {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  order: number;
  base_experience: number;
  height: number;
  weight: number;
  abilities: Ability[];
  forms: Species[];
  held_items: any[];
  is_default: boolean;
  moves: Move[];
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
}

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

export interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Species;
  version_group: Species;
}

export interface Sprites {
  other: {
    'official-artwork': {
      front_default: string;
      front_shiny: string;
    };
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}
