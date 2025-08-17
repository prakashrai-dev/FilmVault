import React, { useEffect, useState } from "react";
import genreIds from "../utility/genres";

const Watchlist = ({ watchlist, setWatchlist, handleRemovefromWatchlist }) => {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  let handleSearch = (e) => setSearch(e.target.value);
  let handleFilter = (genre) => setCurrGenre(genre);

  let sortIncreasing = () => {
    let sortedInc = watchlist.sort((a, b) => a.vote_average - b.vote_average);
    setWatchlist([...sortedInc]);
  };

  let sortDecreasing = () => {
    let sortedDec = watchlist.sort((a, b) => b.vote_average - a.vote_average);
    setWatchlist([...sortedDec]);
  };

  useEffect(() => {
    let temp = watchlist.map((m) => genreIds[m.genre_ids[0]]);
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);

  return (
    <div>
      {/* Genre Chips */}
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => (
          <div
            key={genre}
            onClick={() => handleFilter(genre)}
            className={
              currGenre === genre
                ? "p-2 flex justify-center items-center h-[3rem] w-[9rem] rounded-xl bg-blue-500 text-white mx-2 mb-2"
                : "p-2 flex justify-center items-center h-[3rem] w-[9rem] rounded-xl bg-gray-300 text-gray-900 mx-2 mb-2 dark:bg-gray-700 dark:text-gray-100"
            }
          >
            {genre}
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search for Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 dark:bg-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 outline-none px-5 rounded-md"
        />
      </div>

      {/* Table */}
      <div className="rounded-lg overflow-x-auto border border-gray-200 dark:border-gray-800 m-4 sm:m-8">
        <table className="min-w-full text-gray-800 dark:text-gray-100 text-center text-sm sm:text-base">
          <thead className="border-b-2 border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
            <tr>
              <th className="py-3">Name</th>
              <th className="py-3">
                <div className="flex justify-center items-center">
                  <div onClick={sortDecreasing} className="p-2 hover:opacity-80 cursor-pointer">
                    <i className="fa-solid fa-arrow-down" />
                  </div>
                  <div className="p-2">Ratings</div>
                  <div onClick={sortIncreasing} className="p-2 hover:opacity-80 cursor-pointer">
                    <i className="fa-solid fa-arrow-up" />
                  </div>
                </div>
              </th>
              <th className="py-3">Popularity</th>
              <th className="py-3">Genre</th>
              <th className="py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((m) => (currGenre === "All Genres" ? true : genreIds[m.genre_ids[0]] === currGenre))
              .filter((m) => m.title.toLowerCase().includes(search.toLowerCase()))
              .map((movieObj) => (
                <tr className="border-b-2 border-gray-200 dark:border-gray-800" key={movieObj.id}>
                  <td className="flex items-center px-2 sm:px-6 py-2 sm:py-4">
                    <img
                      className="h-[6rem] w-[8rem] sm:h-[8rem] sm:w-[10rem] object-cover rounded-md"
                      src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                      alt={movieObj.title}
                    />
                    <div className="ml-4">{movieObj.title}</div>
                  </td>

                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{movieObj.genre_ids.map((id) => genreIds[id]).join(", ")}</td>

                  <td
                    onClick={() => handleRemovefromWatchlist(movieObj)}
                    className="text-red-600 hover:underline hover:cursor-pointer"
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Watchlist;
