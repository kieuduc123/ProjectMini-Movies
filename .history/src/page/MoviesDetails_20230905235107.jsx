import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from "swr";
import { api_key, fetcher } from '../config';
const MoviesDetails = () => {
    const {movieId} = useParams();
       const {data,error} = useSWR(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`,fetcher)
    return  <>
           <div className="w-full h-[600px] relative mb-10">
            <div className="absolute inset-0 bg-black bg-opacity-25"></div>
            <div className="w-full h-full bg-cover bg-no-repeat" style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${backdrop_path})`
            }}
            ></div>
           </div>
        </>
    
};

export default MoviesDetails;