import { useNavigate } from 'react-router-dom';
import { Box, SpecieStatus } from '../../types/LivingContext';
import Joystick from '../Icons/Joystick';
import Pokeball from '../Icons/Pokeball';
import Shiny from '../Icons/Shiny';

interface BoxCardProps {
  box: Box;
  index: number;
}

function BoxCard({ box, index }: BoxCardProps) {
  const navigation = useNavigate();

  return (
    <div
      onClick={() => navigation(`/boxes/${index}`)}
      className="card w-96 bg-primary text-primary-content"
    >
      <div className="card-body">
        <h2 className="card-title">{box.name}</h2>
        <div className="card-actions justify-center">
          <div className="badge badge-lg flex gap-3">
            <Pokeball />
            {
              box.pokemons.filter(
                (pokemon) => pokemon.status === SpecieStatus.CAPTURED
              ).length
            }
            /{box.pokemons.length}
          </div>
          <div className="badge badge-lg flex gap-3">
            <Shiny />
            {
              box.pokemons.filter(
                (pokemon) => pokemon.status === SpecieStatus.SHINY_CAPTURED
              ).length
            }
            /{box.pokemons.length}
          </div>
          <div className="badge badge-lg flex gap-3 capitalize">
            <Joystick /> {box.version}
          </div>
        </div>
      </div>
    </div>

    // <div onClick={() => navigation(`/boxes/${index}`)} className="p-4">
    //   <div>
    //     <h3>{box.name}</h3>
    //     <div>
    //       <p>
    //         <Pokeball />
    //         {
    //           box.pokemons.filter(
    //             (pokemon) => pokemon.status === SpecieStatus.CAPTURED
    //           ).length
    //         }{' '}
    //         / {box.pokemons.length}
    //       </p>
    //       <p>
    //         <Shiny />
    //         {
    //           box.pokemons.filter(
    //             (pokemon) => pokemon.status === SpecieStatus.SHINY_CAPTURED
    //           ).length
    //         }
    //         / {box.pokemons.length}
    //       </p>
    //       <p>
    //         <Joystick /> {box.version}
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default BoxCard;
