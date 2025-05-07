import React, { useState } from 'react'

function Pages({HandlePrev , HandleNext , pageNo}) {

  return (
    <div className='w-full p-3 my-5 flex justify-center gap-5'>
        <div onClick={HandlePrev} className='bg-blue-600/80 rounded-xl text-white text-center text-xl h-10 w-25 pt-1 hover:cursor-pointer hover:text-black'>{'<'} Prev</div>
        <h1 className='text-2xl text-blue-600 font-bold'>{pageNo}</h1>
        <div onClick={HandleNext} className='bg-blue-600/80 rounded-xl text-white text-center text-xl h-10 w-25 pt-1 hover:cursor-pointer hover:text-black'>Next {'>'}</div>
    </div>
  )
}

export default Pages