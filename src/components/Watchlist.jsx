import React, { useEffect, useState } from 'react'
import gonerids from '../utilities/gonerids.js';

function Watchlist({HandleRemoveWatchl , Watchl , setWatchl}) {
    const [search , setSearch] = useState('');
    const [genreList , setGenreList] = useState(['All Genre']);
    const [curGenre , setCurrGenre] = useState('All Genre');
    let i = 1;

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    let sortIncrease = () => {
        let sortedIncreasing = Watchl.sort((movieA , movieB) => {
            return movieA.vote_average - movieB.vote_average;
        })
        setWatchl([...sortedIncreasing]);
    }

    let sortDecrease = () => {
        let sortedDecreasing = Watchl.sort((movieA , movieB) => {
            return movieB.vote_average - movieA.vote_average;
        })
        setWatchl([...sortedDecreasing]);
    }

    let handleChangeGenre = (genre) => {
        setCurrGenre(genre);
    }

    useEffect(() => {
        let temp = Watchl.map((movieObj)=>{
            return gonerids[movieObj.genre_ids[0]];
        })
        temp = new Set(temp);
        setGenreList(['All Genre' , ...temp]);
        
    },[Watchl])


  return (
    <>

        <div className='w-full flex justify-center my-4 gap-4' >
            {genreList.map((genre)=>{
                return <div onClick={()=>handleChangeGenre(genre)} className={curGenre==genre ? 'hover:cursor-pointer flex items-center h-[35px] w-[100px] bg-blue-400 justify-center rounded-xl' : 'hover:cursor-pointer flex items-center h-[35px] w-[100px] bg-gray-400/50 justify-center rounded-xl'}>{genre}</div>
            })}
            {/* <div className=>Crime</div> */}
        </div>

        <div className='flex flex-row justify-center'>
            <input onChange={handleSearch} value={search} type="text" placeholder='Search for Movies' className='h-[35px] w-[250px] pl-3 bg-gray-200 outline-none' />
        </div>

        <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
            <table className='w-full text-gray-500 text-center'>
                <thead >
                    <tr>
                        <th>Name</th>
                        <th className='flex justify-center p-2 gap-4'>
                            <div onClick={sortIncrease} className='hover:cursor-pointer'><i className="fa-solid fa-arrow-up"></i></div>
                                <div>Rating</div>
                            <div onClick={sortDecrease} className='hover:cursor-pointer'><i className="fa-solid fa-arrow-down"></i></div>
                        </th>
                        <th>Popularity</th>
                        <th>Gonre</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {Watchl.filter((movieObj)=>{
                        if(curGenre == 'All Genre'){
                            return true
                        }
                        else{
                            return gonerids[movieObj.genre_ids[0]]==curGenre;
                        }
                    }).filter((movieObj)=>{
                        return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase());
                    }).map((movie)=>{
                        return (
                        <tr className='border b-2'>

                            <td className='flex items-center px-3 py-3'>
                                <div className=' font-bold px-5'>{i++}</div>
                                <img className='h-[6rem] w-[10rem]' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}  />
                                <div className='mx-10 font-bold'>{movie.title}</div>
                            </td>
                            
                            <td>{movie.vote_average}</td>
                            
                            <td>{movie.popularity}</td>
                            
                            <td>{gonerids[movie.genre_ids[0]]}</td>
                            <td>
                                <div onClick={()=>HandleRemoveWatchl(movie)} className='text-red-500 hover:cursor-pointer hover:text-red-400'>Delete</div>
                            </td>
                        </tr>)
                    })}

                </tbody>
            </table>

        </div>
    </>
  )
}

export default Watchlist