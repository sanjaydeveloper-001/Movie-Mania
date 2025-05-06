import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function Navbar({Watchl}) {
  return (
    <div className="flex border items-center justify-between px-10">
    <div className="flex items-center">
    <img className="w-20" src={Logo} />
      <h1 className="text-3xl text-blue-900 font-bold">Movie</h1><span className="text-3xl text-blue-900 font-bold">Mania</span>
    </div>
    <div className="flex items-center space-x-8">
    {Watchl.length !=0 ? <div className="ml-52 z-[1] mb-5 text-black font-bold absolute rounded-xl -py-1 px-2 bg-blue-500/60">{Watchl.length}</div> : null}

      <Link className="text-2xl font-bold text-blue-500" to="/">
        Movies
      </Link>

      <Link className="z-[2] text-2xl font-bold text-blue-500" to="/Watchlist">
        Watchlist
      </Link>
    </div>
    </div>
  );
}

export default Navbar;
