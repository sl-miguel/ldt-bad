import { useState, useEffect, useContext } from 'react';
import { Versions } from '../types/version';
import { getPokedexById, getPokedexes, getVersions } from '../utils/pokeapi';
import { Pokedex } from '../types/pokedex';
import { LivingDexContext } from '../context/LivingContext';
import { Box, SpecieStatus } from '../types/LivingContext';
import { useNavigate } from 'react-router-dom';

function NewBox() {
  const livingDex = useContext(LivingDexContext);
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState<Pokedex[]>();

  const navigation = useNavigate();

  const [form, setForm] = useState({
    selectedGame: '',
    name: '',
  });

  useEffect(() => {
    const getData = async () => {
      const pokedexes = await getPokedexes();
      setGames([...pokedexes.results.reverse()]);
    };

    getData();
  }, []);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;
    setForm((prev) => ({ ...prev, selectedGame: value }));
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setForm((prev) => ({ ...prev, name: value }));
  };

  const createBox = async () => {
    setLoading(true);
    const data = await getPokedexById(form.selectedGame);
    const box: Box = {
      name: form.name,
      version:
        games?.find((game) => game.url === form.selectedGame)?.name ?? '',
      pokemons: data.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        captured: false,
        shiny: false,
        status: SpecieStatus.NOT_CAPTURED,
        sprite: {
          normal: pokemon.sprites.other['official-artwork'].front_default,
          shiny: pokemon.sprites.other['official-artwork'].front_shiny,
        },
      })),
    };
    livingDex.setBoxes((boxes) => [...boxes, box]);
    setLoading(false);
    navigation(`/boxes/${livingDex.boxes.length}`);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md flex flex-col gap-4">
          <h1 className="text-5xl font-bold">Create a new box:</h1>

          <select
            onChange={handleSelect}
            className="select select-primary w-full"
          >
            <option disabled defaultValue="true">
              Select Game
            </option>
            {games?.map((game) => (
              <option value={game.url} key={game.name}>
                {game.name}
              </option>
            ))}
          </select>
          <div className="flex gap-4">
            <input
              onChange={handleInput}
              type="text"
              placeholder="Name"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            {loading ? (
              <button className="btn loading">Creating</button>
            ) : (
              <button onClick={createBox} className="btn btn-primary">
                Start
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBox;
