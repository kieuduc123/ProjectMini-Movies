import { Fragment } from "react";
// import { NavLink } from "react-router-dom";
import "swiper/scss";
import MoviList from "./components/movie/MoviList";
import Banner from "./components/banner/Banner";
import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import Homepage from "./page/Homepage";


function App() {
  return (
   <Fragment>
    {/* <Banner></Banner> */}
   
   <Routes>
    <Route path="/" element= {<Main></Main>}>
      {/* <Route path="/" element={<Banner></Banner>}></Route> */}
      <Route path="/" element={
        <> 
        <Homepage></Homepage>
        <Banner></Banner>
        </>
        } > </Route> 
    </Route>
   </Routes>

   </Fragment>
  ) 
}

export default App
