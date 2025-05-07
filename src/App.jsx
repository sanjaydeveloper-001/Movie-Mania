import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Banner from "./components/Banner";
import Watchlist from "./components/Watchlist";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  let [Watchl, setWatchl] = useState([]);
  const[currentMovie , setCurrentMovie] = useState('');
  const[totalMovielist , setTotalMovieList] = useState([]);
  const[contain , setContain] = useState(false);
  const width = useState(window.innerWidth);

  useEffect(()=>{
    if(Watchl.includes(currentMovie)){
        setContain(true);
    }
    else{
        setContain(false);
    }
  },[Watchl])


  let HandleMovieDetailsCard = (movieObj) =>{
    console.log(movieObj);
    setCurrentMovie(movieObj);
  };

  let HandleAddWatchl = (movieObj) => {
    let newWatchlist = [...Watchl, movieObj];
    localStorage.setItem("movieApp", JSON.stringify(newWatchlist));
    setWatchl(newWatchlist);
  };

  let HandleRemoveWatchl = (movieObj) => {
    let filteredWatchlist = Watchl.filter((movie) => {
      return movie.id != movieObj.id;
    });
    localStorage.setItem("movieApp", JSON.stringify(filteredWatchlist));
    setWatchl(filteredWatchlist);
  };

  useEffect(() => {
    let movieListFromLocalStorgate = localStorage.getItem("movieApp");
    if (!movieListFromLocalStorgate) {
      return;
    }
    setWatchl(JSON.parse(movieListFromLocalStorgate));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar Watchl={Watchl} width={width} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {currentMovie == '' ?<> <Banner totalMovielist={totalMovielist} />
                <Movies
                  HandleAddWatchl={HandleAddWatchl}
                  HandleRemoveWatchl={HandleRemoveWatchl}
                  Watchl={Watchl}
                  HandleMovieDetailsCard={HandleMovieDetailsCard}
                  setTotalMovieList={setTotalMovieList}
                />
                </>
                : <MovieDetails contain={contain} currentMovie={currentMovie} setCurrentMovie={setCurrentMovie} HandleAddWatchl={HandleAddWatchl} HandleRemoveWatchl={HandleRemoveWatchl} />
                }
              </>
            }
          />

          <Route
            path="/Watchlist"
            element={<Watchlist 
                       HandleRemoveWatchl={HandleRemoveWatchl}
                       Watchl={Watchl} 
                       setWatchl={setWatchl} 
                    />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
