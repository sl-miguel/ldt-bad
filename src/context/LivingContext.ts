import { createContext } from 'react';
import { LivingContext } from '../types/LivingContext';

export const LivingDexContext = createContext<LivingContext>({
  boxes: [],
  setBoxes(boxes) {
    return boxes;
  },
});
