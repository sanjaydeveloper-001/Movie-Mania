import React, { useState , useEffect } from 'react'

function Banner({totalMovielist}) {

  let i=0;
  const[rndNum , setRndNum] = useState(5);


  useEffect(() => {
    const interval = setInterval(() => {
      changeBanner();
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  function changeBanner(){
    let random = Math.floor(Math.random()*20);
    if(i==random){
      if(i==0){
        random++;
      }
      else{
        random--;
      }
    }
    i=random;
    setRndNum(random);
  }

  return (
    <div className='flex w-full h-[50vh] md:h-[75vh] bg-cover items-end duration-[100] ' style={{backgroundImage : `url(https://image.tmdb.org/t/p/original${totalMovielist?.[rndNum]?.backdrop_path})`}}>

        <div className=' w-full text-center text-xl bg-gray-900/50 text-white p-2'>
            {totalMovielist?.[rndNum]?.title}
        </div>

    </div>
  )
}

export default Banner