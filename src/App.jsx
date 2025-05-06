import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Banner from "./components/Banner";
import Watchlist from "./components/Watchlist";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [Watchl, setWatchl] = useState([]);

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
        <Navbar Watchl={Watchl} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  HandleAddWatchl={HandleAddWatchl}
                  HandleRemoveWatchl={HandleRemoveWatchl}
                  Watchl={Watchl}
                />
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
