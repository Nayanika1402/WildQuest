import { Link, Outlet, useLocation } from "react-router-dom";

function Gamelist() {
  const location = useLocation();

  // Check if user is on the base gamelist route (no game selected)
  const isBaseRoute = location.pathname.endsWith("/game") || location.pathname === "/game";

  return (
    <div className="p-6 items-center justify-center text-center ">
      {isBaseRoute ? (
        <div className="bg-green-200 p-2">
          <h1 className="text-2xl font-bold mb-4">Choose a Game</h1>
          
            
            <Link to="crossword" className="bg-[#137f13] text-white p-3 rounded m-3 hover:shadow-[5px_10px_6px_-2px_rgba(0,_0,_0,_0.2)]">
              Crossword
            </Link>
            <Link to="spritegame" className="bg-[#137f13] text-white p-3 rounded m-3 hover:shadow-[5px_10px_6px_-2px_rgba(0,_0,_0,_0.2)]">
              Sprite Game
            </Link>
          <div className="text-3xl m-6">🐘 🐊</div>
        </div>
      ) : (
        <div className="mb-6">
          <Link to="/game" className="bg-red-600 hover:shadow-[5px_10px_6px_-2px_rgba(0,_0,_0,_0.2)] text-white p-3 rounded">
            ⬅ Back
          </Link>
        </div>
      )}

      <Outlet />
    </div>
  );
}

export default Gamelist;
