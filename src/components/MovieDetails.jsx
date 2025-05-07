import React, { useEffect, useState } from 'react'
import gonerids from '../utilities/gonerids';
import DetailsList from '../utilities/DeatilsList';
import TagPlus from '../assets/TagPlus.png';
import TagMinus from '../assets/TagMinus.png';
 
function MovieDetails({contain , currentMovie , setCurrentMovie , HandleAddWatchl , HandleRemoveWatchl}) {

    let HandleRemovieDetails = () => {
        console.log("Working Well");
        setCurrentMovie('');
    }

  return (
    
    <>
        <div className='flex justify-between w-full px-15 py-5'>
            <div className=' text-2xl font-bold'>Movie-Preview</div>
            <div onClick={HandleRemovieDetails} className='text-xl font-bold cursor-pointer px-6 py-1 bg-blue-600 rounded-3xl text-white hover:bg-blue-600/60 hover:text-blue-900'><i className="fa-solid fa-xmark"></i></div>
        </div>

        <div className='w-full px-12 mb-10 flex flex-col gap-10'>
            <div className='w-full h-[70vh] relative '>

                {contain ? <img onClick={()=>HandleRemoveWatchl(currentMovie)} className='absolute w-22 h-30 left-1 -top-5.5 hover:cursor-pointer' src={TagMinus}/> : <img onClick={()=>HandleAddWatchl(currentMovie)} className='absolute w-22 h-30 left-1 -top-5.5 hover:cursor-pointer' src={TagPlus}/> }

                <img className='w-full h-full' src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`} />
            </div>

            <table className='h-max w-full text-start flex flex-col border'>
                <thead className='border w-full pl-10 py-3'>
                    <tr className=' flex w-full text-xl font-bold'>
                        <th className='w-[50%] text-start' >Attributes</th>
                        <th >Value</th>
                    </tr>
                </thead>
                <tbody className='h-full border w-full pl-10 text-xl'>
                {DetailsList.map(([label, key], i)=>{
                     return (
                        <tr className='w-full flex flex-row my-5'>
                            <td className='w-[48%] font-bold '>{label}</td>
                            <td className='w-[2%] font-bold'>:</td>
                            <td className='w-[50%]'>{currentMovie[key]}</td>
                        </tr>
                     )
                   })}
                   <tr className='flex w-full mb-5' >
                        <td className='w-[48%] font-bold'>Genre</td>
                        <td className='w-[2%] font-bold'>:</td>
                        <td className='flex w-[50%]' >
                            {currentMovie.genre_ids.map((ids)=>{
                                return ( <div className='mr-5 underline'>{gonerids[ids]}</div>)
                            })}
                        </td>
                   </tr>
                   <tr className='flex w-full mb-10'>
                        <td className='w-[48%] font-bold'>Adult</td>
                        <td className='w-[2%] font-bold'>:</td>
                        <td >{currentMovie.Adult ? "Yes" : "No"}</td>                           
                    </tr>

                </tbody>
            </table>
        </div>
    </>
  )
}

export default MovieDetails