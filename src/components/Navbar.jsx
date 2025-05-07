import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { Link} from "react-router-dom";

function Navbar({Watchl , width }) {

  const[isOpen , setIsOpen] = useState(false);

  let HandleChangeOpen = () =>{
    setIsOpen(true);
  }

  let HandleChangeClose = () =>{
    setIsOpen(false);
  }

  return (
    <div className="flex border items-center justify-between px-5">
      <div className="flex items-center">
        <img className="w-20" src={Logo} />
        <h1 className="text-2xl text-blue-900 font-bold">Movie</h1><span className="text-2xl text-blue-900 font-bold">Mania</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        {Watchl.length !=0 ? <div className="ml-52 z-[1] mb-5 text-black font-bold absolute rounded-xl -py-1 px-2 bg-blue-500/60">{Watchl.length}</div> : null}

        <Link className="text-2xl font-bold text-blue-500" to="/">
          Movies
        </Link>

        <Link className="z-[2] text-2xl font-bold text-blue-500" to="/Watchlist">
          Watchlist
        </Link>
      </div>

      {isOpen ? <div onClick={HandleChangeClose} className="[@media(min-width:500px)]:hidden text-2xl text-blue-900"><i className="fa-solid fa-xmark"></i></div> :
       <div onClick={HandleChangeOpen} className="[@media(min-width:500px)]:hidden text-2xl text-blue-900"><i className="fa-solid fa-bars"></i></div>   }

      {isOpen ? <div className="flex flex-col items-center justify-around fixed h-[30%] w-[50%] bg-white border top-[14%] right-0">
        {Watchl.length !=0 ?
         <div className="z-[1] text-black font-bold absolute rounded-xl -py-1 px-2 bg-blue-500/60 right-5 bottom-12">{Watchl.length}</div> : null}

        <Link className="text-2xl font-bold text-blue-500" to="/">
          Movies
        </Link>

        <Link className="z-[2] text-2xl font-bold text-blue-500" to="/Watchlist">
          Watchlist
        </Link>
      </div> : ''}
    </div>
  );
}

export default Navbar;
