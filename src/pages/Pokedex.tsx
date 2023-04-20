import { useEffect, useState } from 'react';
import { getPokemons } from '../utils/pokeapi';
import { Pokemon } from '../types/pokemon';
import PokemonList from '../components/Pokemon/PokemonList';

interface Controls {
  count: number;
  next: string | null;
  previous: string | null;
}

function Pokedex() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [controls, setControls] = useState<Controls>();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const next = () => {
    if (controls?.next) setPage((previous) => previous + 1);
  };

  const prev = () => {
    if (controls?.previous) setPage((previous) => previous - 1);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await getPokemons(page, 5);
      setControls({
        count: data.count,
        next: data.next,
        previous: data.previous,
      });

      // @ts-ignore
      setPokemons(data.results);
      setLoading(false);
    };

    getData();
  }, [page]);

  return (
    <>
      {loading && (
        <progress className="progress progress-accent w-56"></progress>
      )}
      {!loading && <PokemonList pokemons={pokemons} />}
      <div className="btn-group flex justify-center my-4">
        <button onClick={prev} className="btn btn-lg btn-primary">
          «
        </button>
        <button className="btn btn-lg btn-primary">Page {page}</button>
        <button onClick={next} className="btn btn-lg btn-primary">
          »
        </button>
      </div>
    </>
  );
}

export default Pokedex;
