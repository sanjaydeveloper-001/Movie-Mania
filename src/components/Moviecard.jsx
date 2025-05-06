import React from "react";

function Moviecard({
  movieObj,
  poster_path,
  title,
  HandleAddWatchl,
  HandleRemoveWatchl,
  Watchl
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
      className="w-[200px] h-[50vh] m-2 bg-cover bg-center rounded-xl hover:scale-105 duration-100 cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => HandleRemoveWatchl(movieObj)}
          className="text-2xl py-1 flex h-10 w-10 item-center justify-center rounded-xl bg-gray-900/60 hover:bg-red-900"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => HandleAddWatchl(movieObj)}
          className="text-2xl py-1 flex h-10 w-10 item-center justify-center rounded-xl bg-gray-900/60 hover:bg-green-900"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/80 rounded-xl">
        {title}
      </div>
    </div>
  );
}

export default Moviecard;
