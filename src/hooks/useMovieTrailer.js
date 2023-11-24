import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import {  addTrailerVideos } from "../utils/moviesSlice";
import { useEffect } from "react";



const useNowPlayingMovies = ()=>{

    const dispatch = useDispatch();
   
    const getMovieVideo= async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/670292/videos?language=en-US', options);
        const json = await data.json();
        // console.log(json);
        const filterData= json.results.filter((video)=>video.type==="Trailer");
        const trailer= filterData.length? filterData[0]: json.results[0];
        // console.log(trailer);
        dispatch(addTrailerVideos(trailer));
    }

    useEffect(()=>{
        getMovieVideo();

    },[]);

}


export default useNowPlayingMovies;