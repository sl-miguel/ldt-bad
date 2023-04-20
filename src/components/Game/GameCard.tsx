import { Result } from '../../types/version';

interface GameCardProps {
  game: Result;
}

function GameCard({ game }: GameCardProps) {
  return (
    <div>
      <p onClick={() => console.log(game.name)}>{game.name}</p>
    </div>
  );
}

export default GameCard;
