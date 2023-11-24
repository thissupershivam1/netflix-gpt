import React, { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideos } from '../utils/moviesSlice';
import useNowPlayingMovies from '../hooks/useMovieTrailer';

const VideoBackground = () => {

    const trailerVideo= useSelector(store=> store.movies?.trailerVideos);
    // console.log(trailerVideo?.key);

    useNowPlayingMovies();
  
   
    
  return (
    <div className='w-full h-96'>

<iframe
  className='w-full aspect-video'
  src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&controls=0&showinfo=0`}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
></iframe>


    </div>
  )
}

export default VideoBackground