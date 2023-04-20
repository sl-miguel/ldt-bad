import { Pokemon } from '../../types/pokemon';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
  pokemons: Pokemon[];
}

function PokemonList({ pokemons }: PokemonListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
