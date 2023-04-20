import { NavLink } from 'react-router-dom';
import Menu from '../Icons/Menu';
import { useContext, useState } from 'react';
import { LivingDexContext } from '../../context/LivingContext';

function Nav() {
  const { boxes } = useContext(LivingDexContext);

  const [isDisabled, setIsDisabled] = useState(true);
  const handleClick = () => {
    setIsDisabled((prev) => !prev);
  };

  return (
    <header className="mb-4">
      <nav
        className="
          bg-primary
          flex flex-wrap
          items-center
          justify-between
          py-4
          md:py-0
          px-4
        "
      >
        <div>
          <NavLink to="/">DexIn</NavLink>
        </div>

        <Menu action={handleClick} />

        <div
          className={`${
            isDisabled && 'hidden'
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul
            className="
              pt-4
              md:flex
              md:justify-between 
              md:items-center
              md:pt-0"
          >
            <li>
              <NavLink to="/pokedex">Pokedex</NavLink>
            </li>
            <li>
              <NavLink className="md:p-4 py-2 block" to="/boxes">
                Boxes {boxes.length}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

// const button = document.querySelector('#menu-button');
// const menu = document.querySelector('#menu');

// button.addEventListener('click', () => {
//   menu.classList.toggle('hidden');
// });
