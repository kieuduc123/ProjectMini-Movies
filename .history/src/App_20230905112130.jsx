import { Fragment } from "react";
import { NavLink } from "react-router-dom";


function App() {
  return (
   <Fragment>
    <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
      <span className="text-primary">Home</span>
      <span>Movies</span>
      <span>Concact</span>
    </header>

    <section className="banner h-[500px] page-container mb-10">
      <div className="w-full h-full rounded-lg relative">
        <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-md"></div>
        <img src="https://s3.cloud.cmctelecom.vn/tinhte2/2019/04/4629787_cover_endgamex-1.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute left-5 bottom-5 w-full text-white">
          <h2 className="font-bold text-3xl mb-5">Avengers: Endgame</h2>
          <div className="flex items-center gap-x-3">
            <span className="py-2 px-2 border border-white rounded-md">Adventure</span>
            <span className="py-2 px-2 border border-white rounded-md">Adventure</span>
            <span className="py-2 px-2 border border-white rounded-md">Adventure</span>
          </div>
          <button className="py-3 px-6 rounded-lg file:"></button>
        </div>
      </div>
    </section>
    <section className="movies-layout page-container pb-10">
      <h2 className="capitalize text-white mb-5 text-3xl font-bold">Now Playing</h2>
      <div className="movies-list  grid grid-cols-4 gap-4">
        <div className="movies-card bg-slate-800 rounded-lg p-3">
          <img src="https://image-us.24h.com.vn/upload/2-2019/images/2019-05-04/1556964571-319-avengers-infinity-war-2-1556858276-width1280height720.jpg" alt="" className="w-full h-[250px] object-cover rounded-lg mb-5" />
        </div>
      </div>
    </section>

   </Fragment>

  ) 
  
}

export default App
