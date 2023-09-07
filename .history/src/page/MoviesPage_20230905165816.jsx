import React from 'react';
import MoviList from '../components/movie/MoviList';

const MoviesPage = () => {
    return (
        <div className='py-10'>
           <MoviList type='latest'></MoviList>
        </div>
    );
};

export default MoviesPage;