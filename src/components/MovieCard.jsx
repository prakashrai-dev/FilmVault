import Watchlist from "./Watchlist"


const MovieCard = ({poster_path,name,handleAddtoWatchlist,movieObj,handleRemovefromWatchlist,watchlist}) => {


function doesContain(movieObj){
  for(let i=0; i<watchlist.length;i++){
    if(watchlist[i].id == movieObj.id){
      return true;
    }
   
  }
   return false;

}

  return (
    <div className="h-[40vh] w-[230px] bg-cover bg-center mx-0.5 hover:cursor-pointer hover:scale-110 duration-300 rounded-2xl" 
    
    style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>

      {doesContain(movieObj) ?
        <div  onClick={()=>(handleRemovefromWatchlist(movieObj))} className= "mx-46 my-4 rounded-lg bg-gray-900 h-6 w-6 " > &#10060;</div> : 
        <div onClick={()=>(handleAddtoWatchlist(movieObj))} className= "mx-46 my-4 rounded-lg bg-gray-900 h-6 w-6 " >
        &#128525;
      </div>
      }

      

      

      <div className='text-white text-l w-full p-0.3 text-center font-bold my-85 bg-black'> 
        {name}
      </div>

      

      
    </div>
  )
}

export default MovieCard
