import { GenerationResponse } from '../types/generation';
import { PokedexResponse, SinglePokedex } from '../types/pokedex';
import { Pokemon, Pokemons } from '../types/pokemon';
import { Versions } from '../types/version';

const getPokedexes = async () => {
  const URL = 'https://pokeapi.co/api/v2/pokedex/?limit=100000&offset=0';
  const response = await fetch(URL);
  const json: PokedexResponse = await response.json();
  return json;
};

const getVersions = async () => {
  const URL = 'https://pokeapi.co/api/v2/version?limit=100000&offset=0';
  const response = await fetch(URL);
  const json: Versions = await response.json();
  return json;
};

const getPokemons = async (page: number, offset = 20) => {
  let pokemons = [];

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${offset}&offset=${
      (page - 1) * offset
    }`
  );
  const json: Pokemons = await response.json();

  for (const result of json.results) {
    const data = await getPokemon(result.name);
    pokemons.push(data);
  }

  return { ...json, results: [...pokemons] };
};

const getPokemon = async (name: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!response.ok) return;
  const json: Pokemon = await response.json();
  return json;
};

// Pokedex:
// 1. Get Pokemon
// 2. Get Pokemon Species

// 1. Get Generations:
//    https://pokeapi.co/api/v2/generation?offset=0&limit=1000
//    "results": [ {"name": "generation-i", "url": "https://pokeapi.co/api/v2/generation/9/" }]
// 2. Get Pokemons name from generations:
//    https://pokeapi.co/api/v2/generation/9/
//    pokemon_species: [{"name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon-species/1/"}]
// 3. Get Sprites with name:
//    getPokemon(name)
const getGenerations = async () => {
  const response = await fetch(
    'https://pokeapi.co/api/v2/generation?offset=0&limit=100'
  );
  const json = await response.json();
  return json;
};

const getGeneration = async (url: string) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

// https://pokeapi.co/api/v2/generation/9/
const getPokemonByGen = async (genUrl: string) => {
  let pokemons = [];

  const response = await fetch(genUrl);

  const json: GenerationResponse = await response.json();
  for (const specie of json.pokemon_species) {
    const pokemon = await getPokemon(specie.name);
    pokemons.push(pokemon);
  }

  return pokemons;
};

const getPokedexById = async (pokedexUrl: string) => {
  let pokemons = [];
  const response = await fetch(pokedexUrl);

  const json: SinglePokedex = await response.json();

  for (const specie of json.pokemon_entries) {
    const pokemon = await getPokemon(specie.pokemon_species.name);

    if (!pokemon) {
      console.log('Pokemon not found:', specie.pokemon_species);
      continue;
    }

    pokemons.push(pokemon);
  }

  return pokemons;
};

export {
  getVersions,
  getPokemons,
  getPokemon,
  getPokedexes,
  getPokemonByGen,
  getPokedexById,
};
