import React, { useEffect, useState } from 'react';
import MoviCard from './MoviCard';
import { SwiperSlide, Swiper } from 'swiper/react';
import useSWR from "swr";
import {fetcher} from "../../config";

const MoviList = ({type = "now_playing"}) => {
    const {data} = useSWR(`https://api.themoviedb.org/3/movie/${type}?api_key=82f981a5eeb9176fcf0342b76912bc77`, fetcher);
    // console.log("movies ~ data" , data);
    const movies = data ?.results || [];
//    const [movies, setMovies] = useState([]);
//    useEffect(() =>{
//    if (data && data.results)  setMovies(data.results);
//    },[data]);
//    console.log(movies);
    return (
        <div className="movies-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidePrevView={"auto"}>
            {movies.length > 0 && movies.map((item) =>(
               <SwiperSlide key={item.id}>
                  <MoviCard item={item}></MoviCard>
               </SwiperSlide>
                ))}
        </Swiper>
     </div>     
    );
};

export default MoviList;