import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import MoviCard from './MoviCard';
const MoviList = () => {
    return (
        <div className="movies-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidePrevView={"auto"}>
          <SwiperSlide>
             <MoviCard></MoviCard>
          </SwiperSlide>
          
          <SwiperSlide>
         <MoviCard></MoviCard>
         </SwiperSlide>
    
         <SwiperSlide>
       <MoviCard></MoviCard>
    </SwiperSlide>
    
    <SwiperSlide>
       <MoviCard></MoviCard>
    </SwiperSlide>
    
    <SwiperSlide>
       <MoviCard></MoviCard>
    </SwiperSlide>
    
    <SwiperSlide>
       <MoviCard></MoviCard>
    </SwiperSlide>
    
    <SwiperSlide>
       <MoviCard></MoviCard>
    </SwiperSlide>
        </Swiper>
     </div>   
        
    );
};

export default MoviList;