import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Pokedex from '../pages/Pokedex';
import Pokemon from '../pages/Pokemon';
import NewBox from '../pages/NewBox';
import Box from '../pages/Box';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boxes">
        <Route index element={<Home />} />
        <Route path="/boxes/:id" element={<Box />} />
        <Route path="/boxes/new" element={<NewBox />} />
      </Route>
      <Route path="/pokedex">
        <Route index element={<Pokedex />} />
        <Route path=":pokemonId" element={<Pokemon />} />
      </Route>
    </Routes>
  );
}

export default Router;
