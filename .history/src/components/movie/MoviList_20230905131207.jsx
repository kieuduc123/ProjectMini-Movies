import React, { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import MoviCard from './MoviCard';
import "swiper/scss";
import useSWR from "swr";
import {fetcher} from "../../config";
const MoviList = () => {
    const {data,error} = useSWR("https://api.themoviedb.org/3/movie/now_playing?api_key=1a5014308e53baae4dd33694dab48db0 ", fetch);
    console.log("movies ~ data" , data);
   const [movies, setMovies] = useState([]);
   useEffect(() =>{
    setMovies(data.results);
   },[data]);
   console.log(movies);
    return (
        <div className="movies-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidePrevView={"auto"}>
          <SwiperSlide className='w-[300px]'>
             <MoviCard></MoviCard>
          </SwiperSlide>
          
          <SwiperSlide className='w-[300px]'>
         <MoviCard></MoviCard>
         </SwiperSlide>
    
         <SwiperSlide className='w-[300px]'>
       <MoviCard></MoviCard>
    </SwiperSlide>
    
    <SwiperSlide className='w-[300px]'>
       <MoviCard></MoviCard>
    </SwiperSlide>
    
    <SwiperSlide className='w-[300px]'>
       <MoviCard></MoviCard>
    </SwiperSlide>
    
    <SwiperSlide className='w-[300px]'>
       <MoviCard></MoviCard>
    </SwiperSlide>
    
    <SwiperSlide className='w-[300px]'>
       <MoviCard></MoviCard>
    </SwiperSlide>
        </Swiper>
     </div>   
        
    );
};

export default MoviList;