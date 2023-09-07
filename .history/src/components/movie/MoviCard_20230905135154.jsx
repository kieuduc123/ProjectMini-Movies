import React from 'react';

const MoviCard = ({item}) => {
    const {
        title,
        vote_average,
        release_date,
        poster_path,

    }
    return (
        <div className="movies-card bg-slate-800 text-white rounded-lg p-3">
  <img src="https://image-us.24h.com.vn/upload/2-2019/images/2019-05-04/
1556964571-319-avengers-infinity-war-2-1556858276-width1280height720.jpg" alt="" className="w-full h-[250px] object-cover 
rounded-lg mb-5" />
  <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>
  <div className="flex items-center justify-between text-sm opacity-50">
    <span>{new Date (release_date).getFullYear()}</span>
    <span>{vote_average}</span>
  </div>
    <button className=" mt-3 py-3 px-6 rounded-lg capitalize bg-primary w-full">Watch now</button>
</div>
 

    );
};

export default MoviCard;