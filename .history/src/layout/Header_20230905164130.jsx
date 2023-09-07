import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
          <header className="header flex items-center 
justify-center gap-x-5 text-white py-10 mb-5">
     <NavLink to= "/" 
     className={({isActive}) => (isActive ? "text-primary" :"")}
     >Home</Nav>
     <NavLink to= "/movies" className={({isActive}) => (isActive ? "text-primary" :"")}>Movies</NavLink>
     <NavLink to= "/concact " className={({isActive}) => (isActive ? "text-primary" :"")}>Concact</NavLink>
   </header>
    );
};

export default Header;
