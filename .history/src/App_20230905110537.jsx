import { Fragment } from "react";
import { NavLink } from "react-router-dom";


function App() {
  return (
   <Fragment>
    <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
      <span className="text-primary">Home</span>
      <span>Movies</span>
      <span>Concact</span>
    </header>
    <section className="banner h-[400px] page-container">
      <div className="w-full h-full rounded-lg relative">
        <img src="https://s3.cloud.cmctelecom.vn/tinhte2/2019/04/4629787_cover_endgamex-1.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute left-5 bottom-5 w-full text-white">
          <h2 className="font-bold text-3xl">Avengers: Endgame</h2>
        </div>
      </div>
    </section>
   </Fragment>

  ) 
  
}

export default App
