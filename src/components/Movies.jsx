import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagnation from "./Pagnation";

const Movies = ({ handleAddtoWatchlist, handleRemovefromWatchlist, watchlist }) => {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const handlePrev = () => setPageNumber((p) => (p > 1 ? p - 1 : 1));
  const handleNext = () => setPageNumber((p) => p + 1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=5666864985c3501463157f7d4222a5e7&language=en-US&page=${pageNumber}`
      )
      .then((res) => setMovies(res.data.results || []));
  }, [pageNumber]);

  return (
    <div>
      <div className="text-xl sm:text-2xl my-6 sm:my-9 text-center font-bold">Trending Movies</div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 p-6">
        {movies.map((movieObj) => (
          <MovieCard
            key={movieObj.id}
            movieObj={movieObj}
            poster_path={movieObj.poster_path}
            name={movieObj.original_title}
            handleAddtoWatchlist={handleAddtoWatchlist}
            handleRemovefromWatchlist={handleRemovefromWatchlist}
            watchlist={watchlist}
          />
        ))}
      </div>

      <Pagnation pageNumber={pageNumber} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
};

export default Movies;
