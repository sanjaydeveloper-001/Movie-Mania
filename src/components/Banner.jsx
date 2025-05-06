import React from 'react'

function Banner() {
  return (
    <div className='flex w-full h-[20vh] md:h-[75vh] bg-cover items-end' style={{backgroundImage : `url(https://i.ytimg.com/vi/E9at_xNJWOA/maxresdefault.jpg)`}}>

        <div className=' w-full text-center text-xl bg-gray-900/50 text-white p-2'>
            Jana Nayagan
        </div>

    </div>
  )
}

export default Banner