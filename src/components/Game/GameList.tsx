import { Versions } from '../../types/version';
import GameCard from './GameCard';

interface GameListProps {
  games: Versions;
}

function GameList({ games }: GameListProps) {
  return (
    <div>
      {games.results.map((result) => (
        <GameCard key={result.name} game={result} />
      ))}
    </div>
  );
}

export default GameList;
