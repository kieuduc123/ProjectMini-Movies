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
   </Fragment>

  ) 
  
}

export default App
