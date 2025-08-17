import React, { useEffect, useLayoutEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios';
import Pagnation from './Pagnation';

const Movies = ({handleAddtoWatchlist,handleRemovefromWatchlist,watchlist}) => {
  const [movies,setMovies] = useState([])
  const [pageNumber,setPageNumber] = useState(1)
  
  const handlePrev = () => {
    if(pageNumber == 1){
      setPageNumber(1);
    }
    else{
      setPageNumber(pageNumber-1);
    }
    
  }
  const handleNext = ()  => {
    setPageNumber(pageNumber+1);

  }

  useEffect(()=>{
     axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5666864985c3501463157f7d4222a5e7&language=en-US&page=${pageNumber}`).then(function(res){
      setMovies(res.data.results)
     })
  },[pageNumber])


  return (
    <div>
      <div className='text-2xl my-9 text-center font-bold'>
        Trending Movies
      </div>

      <div className='flex flex-row flex-wrap justify-around gap-1.5 space-y-17'>
{movies.map((movieObj)=>{
  return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddtoWatchlist={handleAddtoWatchlist} handleRemovefromWatchlist={handleRemovefromWatchlist} watchlist={watchlist} />
})}




      </div>
      <Pagnation pageNumber={pageNumber} handleNext={handleNext} handlePrev={handlePrev} />

    </div>
  )
}

export default Movies
// https://api.themoviedb.org/3/movie/popular?api_key=5666864985c3501463157f7d4222a5e7&language=en-US&page=2