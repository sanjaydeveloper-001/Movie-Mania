import React, { useState } from 'react'

function Pages({HandlePrev , HandleNext , pageNo}) {

  return (
    <div className='w-full p-3 my-5 flex justify-center gap-5'>
        <div onClick={HandlePrev} className='bg-blue-600/80 rounded-2xl text-white w-[50px] flex justify-center items-center text-xl hover:cursor-pointer hover:text-black'><i class="fa-solid fa-arrow-left"></i></div>
        <h1 className='text-2xl text-blue-600 font-bold'>{pageNo}</h1>
        <div onClick={HandleNext} className='bg-blue-600/80 rounded-2xl text-white w-[50px] flex justify-center items-center text-xl hover:cursor-pointer hover:text-black'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pages