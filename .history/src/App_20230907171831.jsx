import MoviePage from "./page/MoviePage";
import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import Concact from "./page/Concact";
import Main from "./layout/Main";
// import HomePage from "./pages/HomePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";

// dynamic import
// Advanced react pattern
const HomePage = lazy(() => import("./page/Homepage"));
const MovieDetailsPage = lazy(() => import("./page/MovieDetailsPage"));
const MoviePage = lazy(() => import("./page/MoviePage"));
// const MoviePageV2 = lazy(() => import("./pages/MoviePageV2"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <Banner></Banner>
                  <HomePage></HomePage>
                </>
              }
            ></Route>
            <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
            <Route
              path="/movies/:movieId"
              element={<MovieDetailsPage></MovieDetailsPage>}
            ></Route>
            <Route path="/concact" element = {<Concact></Concact>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
