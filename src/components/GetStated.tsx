import { Link } from 'react-router-dom';

function GetStarted() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Living'Dex Tracker</h1>
          <p className="py-6">
            Living Dex Tracker helps keep track of all captured Pokémons from a
            game, allowing us to easily see which ones we still need to catch or
            trade to complete the Pokedex.
          </p>
          <Link className="btn btn-primary" to="/boxes/new">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
