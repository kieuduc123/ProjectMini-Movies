import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../../config';
import { SwiperSlide, Swiper } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
const Banner = () => {
    const {data} = useSWR (
        `https://api.themoviedb.org/3/movie/upcoming?api_key=82f981a5eeb9176fcf0342b76912bc77`, fetcher
    )
    const movies = data ?.results || [];
    return (

 <section className="banner h-[500px] page-container mb-10 overflow-hidden ">
  <Swiper grabCursor="true" slidePrevClass={"auto"} >
    {movies.length > 0 && movies.map ((item) => (
    <SwiperSlide key={item.id}>
        <BannerItem item= {item}></BannerItem>
    </SwiperSlide>
     ))}
  </Swiper>
</section>
        
    );
};

function BannerItem ({item}){
    const {
        title,
        poster_path,
    }
    = item;
    const navigate = useNavigate();
    return (
        <div className="w-full h-full rounded-lg relative">
  <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-md"></div>
  <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" className="w-full h-full object-cover rounded-lg object-center" />
  <div className="absolute left-5 bottom-5 w-full text-white">
    <h2 className="font-bold text-3xl mb-5">Avengers: Endgame</h2>
    <div className="flex items-center gap-x-3">
      <span className="py-2 px-2 border border-white rounded-md">Adventure</span>
      <span className="py-2 px-2 border border-white rounded-md">Adventure</span>
      <span className="py-2 px-2 border border-white rounded-md">Adventure</span>
    </div>
    <button onClick={() => navigate(`/movie/${id}`)}> Watch Now</button>
  </div>
</div>
    )

}
export default Banner;