import React, { useEffect, useState } from "react";
import genreIds from "../utility/genres";

const Watchlist = ({ watchlist,setWatchlist,handleRemovefromWatchlist }) => {
  const [search, setSearch] = useState("");
  const [genreList , setGenreList] = useState(['All Genres']);
  const [currGenre , setCurrGenre] = useState('All Genres');

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFiter = (genre) =>{
    setCurrGenre(genre)

  }
   
 let sortIncreasing =()=>{
  let sortedInc =  watchlist.sort((movieA,movieB)=>{
    return movieA.vote_average - movieB.vote_average
  });
  setWatchlist([...sortedInc])

 }

  let sortDecreasing =()=>{
let sortedDec =  watchlist.sort((movieA,movieB)=>{
    return movieB.vote_average - movieA.vote_average
  });
  setWatchlist([...sortedDec])
  }


  useEffect(()=>{
    let temp = watchlist.map((movieObj)=>{
      return genreIds[movieObj.genre_ids[0]]

    })
    temp = new Set(temp);
    setGenreList(['All Genres' ,...temp])
    console.log(temp);
    
  },[watchlist])

  return (
    <div>

      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre)=>{
          return  (
           <div onClick={()=>handleFiter(genre)} className={currGenre==genre ? "p-2 flex justify-center items-center h-[3rm] w-[9rem] rounded-xl bg-blue-400 text-white mx-4" :"p-2 flex justify-center items-center h-[3rm] w-[9rem] rounded-xl bg-gray-400/50 text-white mx-4"}>
         {genre}
        </div>
          )
        })}
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search for Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none  px-5"
        />
      </div>

      <div className="rounded-lg overflow-hidden  border border-gray-200 m-8">
        <table className="w-full text-gray-700 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>

              <th className="flex justify-center">
                <div onClick={sortDecreasing}  className="p-2"><i class="fa-solid fa-arrow-down"></i></div>
                <div className="p-2"> Ratings</div>
                <div onClick={sortIncreasing} className="p-2"><i class="fa-solid fa-arrow-up"></i></div>
              </th>


              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist.filter((movieObj)=>{
              if(currGenre == 'All Genres'){
                return true
              }
              else{
                return genreIds[movieObj.genre_ids[0]] == currGenre;
              }
            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2" key={movieObj.id}>
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[8rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                      />
                      <div className="mx-12">{movieObj.title}</div>
                    </td>

                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                   <td className="align-middle">
  {movieObj.genre_ids.map((id) => genreIds[id]).join(", ")}
</td>


                    <td onClick={()=>handleRemovefromWatchlist(movieObj)} className="text-red-800 hover:cursor-pointer ">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Watchlist;
