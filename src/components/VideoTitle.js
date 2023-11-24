import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-full aspect-video absolute bg-gradient-to-r from-black'>

        <div className='m-20'>
        <h1 className='text-5xl font-bold text-white'>{title}</h1>
        <p className='text-lg font-normal w-1/2 m-2 text-white'>{overview}</p>

        <div className='flex justify-start items-center m-5  text-white'>

        <button className='bg-black text-white h-14 w-40 rounded-lg'>Play</button>
        <button className='mx-5 bg-black text-white h-14 w-40 rounded-lg'>More Info</button>

        </div>

       

        </div>
        
    </div>
  )
}

export default VideoTitle