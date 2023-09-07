import { Fragment } from "react";
// import { NavLink } from "react-router-dom";
import "swiper/scss";
import MoviList from "./components/movie/MoviList";
import Banner from "./components/banner/Banner";
import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import Homepage from "./page/Homepage";
import MoviesPage from "./page/MoviesPage";
import Concact from "./page/Concact";
import MoviDetails from "./page/MoviDetails";


function App() {
  return (
   <Fragment>
    {/* <Banner></Banner> */}
   
   <Routes>
    <Route  element= {<Main></Main>}>
      {/* <Route path="/" element={<Banner></Banner>}></Route> */}
      <Route path="/" element={
        <> 
        <Banner></Banner>
        <Homepage></Homepage>
        </>
        } > </Route> 
        <Route path="/movies" element={<MoviesPage></MoviesPage>} >
        </Route>
        <Route  path="/movies/:movieId/" element= {<MoviDetails></MoviDetails>}></Route>
        <Route path="/concact" element = {<Concact></Concact>}></Route>
    </Route>
   </Routes>
   </Fragment>
  ) 
}

export default App
