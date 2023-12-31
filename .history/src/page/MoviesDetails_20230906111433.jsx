import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from "swr";
import { api_key, fetcher } from '../config';
const MoviesDetails = () => {
    const {movieId} = useParams();
       const {data,error} = useSWR(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`,fetcher);
       if(!data) return null;
       const {
        backdrop_path,
        poster_path,
        title,
        genres,
        overview
    } = data;
    return (
     <div className='py-10'>
        <div className="w-full h-[600px] relative">
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="w-full h-full bg-cover bg-no-repeat" style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
            }}></div>
            </div>
            <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} className='w-full h-full object-cover rounded-xl' alt=''></img>
            </div>

           <h1 className='text-center font-bold text-3xl text-white mb-10'>{title}</h1>
           {genres.length > 0 && (
            <div className='flex items-center justify-center gap-x-5 mb-10'>{
                genres.map((item) => (
                    <span className='py-2 px-4 border-primary text-primary border roun' key={item.id}>{item.name}</span>
                ))}
            </div>
           )}
           <p className='text-center mb-10 leading-relaxed max-w-[600px] mx-auto'>{overview}</p>
           <MoviCredit></MoviCredit>
     </div>
   
   );
};

function MoviCredit (){
    const {movieId} = useParams();
       const {data,error} = useSWR(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}`,fetcher);
       if(!data) return null;
       const {cast} = data;
       if(!cast || cast.length <= 0) return null;
    return (
        <>
               <h2 className='text-center text-2xl '>Casts</h2>
               <div className='grid grid-cols-4 gap-5'>
                {cast.slice(0,8).map ((item) =>{
                <div className='cast-item' key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/original/${item.profile_path}` }  className='w-full h-[350px] object-cover rounded-lg' alt=''></img>
                </div>
                 })}
               </div>
           
        </>
    )
}


export default MoviesDetails;