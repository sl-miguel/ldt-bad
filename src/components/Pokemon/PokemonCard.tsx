import { useNavigate } from 'react-router-dom';
import { Pokemon } from '../../types/pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/pokedex/${pokemon.id}`, { state: pokemon })}
      className="card max-w-xs bg-neutral text-neutral-content hover:bg-primary"
    >
      <figure className="px-10 pt-10">
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title capitalize text-4xl">{pokemon.name}</h2>
        <div className="card-actions">
          {pokemon.types.map(({ type, slot }) => (
            <div
              key={slot}
              className="badge badge-outline badge-lg capitalize font-extrabold"
            >
              {type.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
