export interface Box {
  name: string;
  version: string;
  pokemons: Specie[];
}

export interface Specie {
  id: number;
  name: string;
  captured: boolean;
  shiny: boolean;
  status: SpecieStatus;
  sprite: {
    normal: string;
    shiny: string;
  };
}

export enum SpecieStatus {
  NOT_CAPTURED,
  CAPTURED,
  SHINY_CAPTURED,
}

export interface LivingContext {
  boxes: Box[];
  setBoxes: (callback: React.SetStateAction<Box[]>) => void;
}
