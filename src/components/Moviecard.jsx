import React from "react";

function Moviecard({
  movieObj,
  poster_path,
  title,
  HandleAddWatchl,
  HandleRemoveWatchl,
  Watchl,
  HandleMovieDetailsCard
}) {

  function doesContain(movieObj) {
    for (let i=0; i<Watchl.length; i++) {
      if (Watchl[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }


  return (
    <div
      className='w-[12%] h-[50vh] m-2 bg-cover bg-center rounded-xl hover:scale-105 duration-100 flex flex-col justify-between items-end'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => HandleRemoveWatchl(movieObj)}
          className="cursor-pointer m-1 text-xl py-1 px-1 rounded-xl bg-gray-900/60 hover:bg-red-900"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => HandleAddWatchl(movieObj)}
          className="cursor-pointer m-1 text-xl py-1 px-1 rounded-xl bg-gray-900/60 hover:bg-green-900"
        >
          &#128525;
        </div>
      )}

      <div className="w-full flex" >
        <div className="text-white text-xl w-full p-2 text-center bg-gray-900/90 rounded-bl-xl">{title}</div>
        <div onClick={()=>HandleMovieDetailsCard(movieObj)} className="cursor-pointer w-[15%] font-bold text-xl text-center flex items-center justify-center bg-blue-500/90 rounded-br-xl">{'>'}</div>
      </div>
      
    </div>
  );
}

export default Moviecard;
