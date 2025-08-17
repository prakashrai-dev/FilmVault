import React from "react";

const MovieCard = ({ poster_path, name, handleAddtoWatchlist, movieObj, handleRemovefromWatchlist, watchlist }) => {
  function doesContain(m) {
    return watchlist.some((x) => x.id === m.id);
  }

  const inList = doesContain(movieObj);

  return (
    <div
      className="w-[45vw] sm:w-[200px] h-[30vh] sm:h-[40vh] bg-cover bg-center rounded-2xl relative overflow-hidden
                 shadow hover:shadow-lg transition hover:scale-115"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}
    >
      <div
        onClick={() => (inList ? handleRemovefromWatchlist(movieObj) : handleAddtoWatchlist(movieObj))}
        className="absolute top-2 right-2 rounded-lg bg-gray-900/80 h-7 w-7 flex items-center justify-center text-white text-sm
                   hover:bg-gray-800 cursor-pointer"
        title={inList ? "Remove from Watchlist" : "Add to Watchlist"}
      >
        {inList ? "✖" : "❤"}
      </div>

      <div className="absolute bottom-0 w-full text-white text-sm sm:text-base p-1 text-center font-bold bg-black/70">
        {name}
      </div>
    </div>
  );
};

export default MovieCard;
