import Router from './components/Router';
import Navbar from './components/Navbar/Navbar';
import { LivingDexContext } from './context/LivingContext';
import { useEffect, useState } from 'react';
import { Box } from './types/LivingContext';

function App() {
  // const [boxes, setBoxes] = useState<Box[]>([]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('boxes') as string);
  //   if (items) setBoxes(items);
  // }, []);

  const [boxes, setBoxes] = useState<Box[]>(getInitialBoxes());

  useEffect(() => {
    localStorage.setItem('boxes', JSON.stringify(boxes));
  }, [boxes]);

  return (
    <LivingDexContext.Provider value={{ boxes, setBoxes }}>
      <Navbar />
      <Router />
    </LivingDexContext.Provider>
  );
}

function getInitialBoxes(): Box[] {
  const savedBoxes = localStorage.getItem('boxes');
  return savedBoxes ? JSON.parse(savedBoxes) : [];
}

export default App;
