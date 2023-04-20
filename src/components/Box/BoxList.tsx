import { Box } from '../../types/LivingContext';
import BoxCard from './BoxCard';

interface BoxListProps {
  boxes: Box[];
}

function BoxList({ boxes }: BoxListProps) {
  return (
    <div className="flex flex-wrap gap-4 my-4">
      {boxes.map((box, index) => (
        <BoxCard key={index} index={index} box={box} />
      ))}
    </div>
  );
}

export default BoxList;
