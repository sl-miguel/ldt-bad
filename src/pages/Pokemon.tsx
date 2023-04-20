import { useEffect, useState } from 'react';
import { getPokemon } from '../utils/pokeapi';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Pokemon as IPokemon } from '../types/pokemon';

// https://pokeapi.co/api/v2/pokemon-species/{name | id}
function Pokemon() {
  const { state } = useLocation();
  const { pokemonId } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    if (state) return setPokemon(state);
    if (!pokemonId) return;

    const getData = async () => {
      const data = await getPokemon(pokemonId);
      setPokemon(data);
    };

    // getPokemonDetails
    // API :

    getData();
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={pokemon?.sprites.other['official-artwork'].front_default}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold capitalize">{pokemon?.name}</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            onClick={() => navigate('/pokedex')}
            className="btn btn-primary"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
