import React from 'react';
import { useNavigate } from 'react-router-dom';

const MoviCard = ({item}) => {
    const {
        title,
        vote_average,
        release_date,
        poster_path,id
    }
    = item;
    const nagigate = useNavigate();
    return (
        <div className="movies-card flex flex-col bg-slate-800 text-white rounded-lg p-3 h-full select-none">
           <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" className="w-full h-[250px] object-cover 
           rounded-lg mb-5" />
           <div className="flex flex-col flex-1">
              <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>
             <div className="flex items-center justify-between text-sm opacity-50">
                <span>{new Date (release_date).getFullYear()}</span>
               <span>{vote_average}</span>
             </div>
               <button onClick={() => nagigate(`/movi/${id}`)} className=" mt-3 py-3 px-6 rounded-lg capitalize bg-primary w-full mt-auto">Watch now</button>
            </div>
        </div>

    );
};

export default MoviCard;