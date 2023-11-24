import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";



const useNowPlayingMovies = ()=>{

    const dispatch = useDispatch();
    const getNowPlayingMovies =() =>{
      fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data.results); // Check the console to see the data
          dispatch(addNowPlayingMovies(data.results));
        })
        .catch((err) => {
          console.error('Error fetching now playing movies:', err);
        });
    };
  
    useEffect(()=>{
  
      getNowPlayingMovies();
  
    },[]);

}


export default useNowPlayingMovies;