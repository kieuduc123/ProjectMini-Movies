import React from 'react';
// import MoviList from '../components/movie/MoviList';
import { fetcher } from '../config';
import useSWR from "swr";
import MoviCard from '../components/movie/MoviCard';

const MoviesPage = () => {
    const {data} = useSWR(`https://api.themoviedb.org/3/movie/popular?
    api_key=82f981a5eeb9176fcf0342b76912bc77`, fetcher);
     console.log("movies ~ data" , data);
     const movies = data ?.results || [];
    return (
        <div className='py-10'>
        <div className="grid grid-cola-4 gap-10">
            {movies.length > 0 &&
            movies.map((item) => (
                <MoviCard key={item.id} item={item}></MoviCard>
            ))}
        </div>
        </div>
    );
};

export default MoviesPage;