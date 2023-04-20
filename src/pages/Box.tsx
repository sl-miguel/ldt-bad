import { useContext } from 'react';
import { LivingDexContext } from '../context/LivingContext';
import { useNavigate, useParams } from 'react-router-dom';
import { Box as IBox, Specie } from '../types/LivingContext';

function Box() {
  const navigation = useNavigate();
  const { boxes, setBoxes } = useContext(LivingDexContext);
  const { id } = useParams();
  const boxId = Number(id);

  if (isNaN(boxId) || boxId < 0 || boxId >= boxes.length) {
    navigation('/boxes');
  }

  const box: IBox = boxes[Number(id)];

  const handlePokemon = (specie: Specie) => {
    const updatedBox = {
      ...box,
      pokemons: box.pokemons.map((pokemon) =>
        // pokemon.id === specie.id
        //   ? { ...pokemon, captured: !specie.captured }
        //   : pokemon
        pokemon.id === specie.id
          ? { ...pokemon, status: specie.status === 2 ? 0 : specie.status + 1 }
          : pokemon
      ),
    };
    setBoxes((prevBoxes) =>
      prevBoxes.map((prevBox) =>
        prevBox.name === box.name ? updatedBox : prevBox
      )
    );

    console.log(specie);
  };

  return (
    <div>
      <h1>Total Pokemons: {box.pokemons.length}</h1>

      <div className="flex flex-wrap justify-center gap-5 my-4">
        {box?.pokemons.map((pokemon) => (
          <div key={pokemon.id} className="indicator">
            <span
              className={`indicator-item badge ${
                pokemon.status === 0
                  ? ''
                  : pokemon.status === 1
                  ? 'badge-accent'
                  : 'badge-secondary'
              }`}
            ></span>
            <img
              onClick={() => handlePokemon(pokemon)}
              src={
                pokemon.status === 2
                  ? pokemon.sprite.shiny
                  : pokemon.sprite.normal
              }
              className={`w-16 h-16 ${pokemon.status ? '' : 'notCaptured'}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Box;
