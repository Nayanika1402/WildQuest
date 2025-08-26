import { Link, Outlet } from "react-router-dom";

function Gamelist() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Choose a Game</h1>

      <nav className="space-x-4 mb-6">
        <Link to="crossword" className="text-blue-600 hover:underline">
          Crossword
        </Link>
        <Link to="spritegame" className="text-blue-600 hover:underline">
          Sprite Game
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Gamelist;
