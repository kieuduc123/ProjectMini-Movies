import React from 'react';
import { useParams } from 'react-router-dom';
import {useSWR} from "swr";
import { api_key } from '../config';
const MoviDetails = () => {
    const {movieId} = useParams();
       const [data,error] = useSWR(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`)
    return (
        <div>
            njhdjfbhjfdhjbhdjfbjfbjf
        </div>
    );
};

export default MoviDetails;