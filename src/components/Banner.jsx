import React, { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/week?api_key=5666864985c3501463157f7d4222a5e7`)
      .then((res) => setMovies(res.data.results || []));
  }, []);

  useEffect(() => {
    if (!movies.length) return;
    const id = setInterval(() => setIndex((p) => (p + 1) % movies.length), 4000);
    return () => clearInterval(id);
  }, [movies]);

  if (!movies.length) return null;
  const movie = movies[index];

  return (
    <div
      className="h-[30vh] sm:h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center relative"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 w-full text-center py-2 sm:py-4 px-2">
        <h1 className="text-white text-lg sm:text-2xl md:text-4xl font-extrabold drop-shadow">
          {movie.title}
        </h1>
        <p className="hidden md:block text-gray-100/90 mt-2 px-4">
          {(movie.overview || "").slice(0, 160)}{(movie.overview || "").length > 160 ? "..." : ""}
        </p>
      </div>
    </div>
  );
};

export default Banner;
