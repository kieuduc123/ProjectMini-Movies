import React, { Fragment } from 'react';
import MoviList from '../components/movie/MoviList';

const Homepage = () => {
    return (
        <Fragment>
           <section className="movies-layout page-container pb-10">
               <h2 className="capitalize text-white mb-5 text-3xl font-bold">Now Playing</h2>
               <MoviList></MoviList>
           </section>
           <section className="movies-layout page-container pb-10">
             <h2 className="capitalize text-white mb-5 text-3xl font-bold">Top Rated </h2>
             <MoviList type = "top_rated"> </MoviList>   
           </section>
          < section className="movies-layout page-container pb-10">
           <h2 className="capitalize text-white mb-5 text-3xl font-bold">Trending</h2>
           <MoviList type = "popular"> </MoviList>
           </section>  
        </Fragment>
    );
};

export default Homepage;