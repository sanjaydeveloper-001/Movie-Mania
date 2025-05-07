import React, { useEffect, useState } from 'react'
import Moviecard from './Moviecard'
import axios from 'axios'
import Pages from './Pages';

function Movies({ HandleAddWatchl , HandleRemoveWatchl , Watchl , HandleMovieDetailsCard , setTotalMovieList}) {

    const[movie , setMovie] = useState([]);
    const[pageNo , setPageNo] = useState(1);



    const HandlePrev = ()=> {
        if(pageNo>1){
            setPageNo(pageNo-1);
        }   
    }

    const HandleNext = ()=> {
        setPageNo(pageNo+1);
    }

    useEffect( ()=> {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e93024c976aae365e9e0bf4e379f4181&language=en-US&page=${pageNo}`).then(function(res){
            setMovie(res.data.results)
            setTotalMovieList(res.data.results);
        })
    },[pageNo])

  return (
    <div>
        <div className='text-xl font-bold text-center p-4 m-5'>Tending Movies</div>

        <div className='flex flex-row flex-wrap justify-around '>

            {movie.map((movieObj)=> {
                return <Moviecard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} title={movieObj.title} HandleAddWatchl={HandleAddWatchl} HandleRemoveWatchl={HandleRemoveWatchl} Watchl={Watchl} HandleMovieDetailsCard={HandleMovieDetailsCard} />
            })}
            
        </div>
        
        <Pages HandlePrev={HandlePrev} HandleNext={HandleNext} pageNo={pageNo}/>
    </div>
  )
}

export default Movies
