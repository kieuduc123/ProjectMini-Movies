import { Fragment } from "react";
// import { NavLink } from "react-router-dom";
import "swiper/scss";
import MoviList from "./components/movie/MoviList";
import Banner from "./components/banner/Banner";


function App() {
  return (
   <Fragment>
    <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
      <span className="text-primary">Home</span>
      <span>Movies</span>
      <span>Concact</span>
    </header>

    <Banner></Banner>
    <section className="movies-layout page-container pb-10">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">Now Playing</h2>
        <MoviList></MoviList>
   </section>

    <section className="movies-layout page-container pb-10">
      <h2 className="capitalize text-white mb-5 text-3xl font-bold">Top Rated </h2>
      <MoviList type = "top_rated"> </MoviList>   
    </section>

 <section className="movies-layout page-container pb-10">
   <h2 className="capitalize text-white mb-5 text-3xl font-bold">Trending</h2>
  <MoviList type = "popular"> </MoviList>
 </section>
   </Fragment>
  ) 
}

export default App
