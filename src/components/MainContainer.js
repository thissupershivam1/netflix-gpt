import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies);
    console.log(movies)
    if(movies===null) return;
    const getRandomNumber = (n) => {
        // Ensure that n is a positive integer
        if (!Number.isInteger(n) || n < 1) {
            console.error("Invalid input. Please provide a positive integer.");
            return null;
        }
    
        // Generate a random number between 1 and n (inclusive)
        const randomNumber = Math.floor(Math.random() * n) + 1;
    
        return randomNumber;
    };
    const randomIndex= getRandomNumber(movies.length-1);
    console.log(randomIndex);
    const mainMovie=movies[0];
    const {original_title,overview} = mainMovie;
    // console.log(mainMovie);
  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground/>
    </div>
  )
}

export default MainContainer