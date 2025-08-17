import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";


const App = () => {

  

  let [watchlist,setWatchlist]=useState([]);

  let handleAddtoWatchlist = (movieObj) =>{
    let newWatchlist = [...watchlist,movieObj]
    localStorage.setItem('moviesApp',JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist);
    console.log(newWatchlist);
  }
  let handleRemovefromWatchlist =(movieObj)=>{
    let filteredWatchlist = watchlist.filter((movie)=>{
      return movie.id !== movieObj.id
    })
   
 setWatchlist(filteredWatchlist);
  localStorage.setItem('moviesApp',JSON.stringify(filteredWatchlist))
  }

useEffect(()=>{
  let moviesFromLocalStorage = localStorage.getItem('moviesApp')
  if(!moviesFromLocalStorage){
    return
  }
  else{setWatchlist(JSON.parse(moviesFromLocalStorage));

  }
},[])


  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
               
                 <Banner /> <Movies watchlist={watchlist} handleAddtoWatchlist={handleAddtoWatchlist} handleRemovefromWatchlist={handleRemovefromWatchlist} />
              </>
            }
          />

          <Route 
  path="/watchlist" 
  element={<Watchlist 
    watchlist={watchlist} 
    setWatchlist={setWatchlist}
    handleRemovefromWatchlist={handleRemovefromWatchlist}
    
  />} 
/>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
