import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return ( 
        <nav className='navbar'>
            <NavLink>
                <img src="../assets/img/kasa.png"/>
            </NavLink>
            <NavLink to="/">
                <div>Accueil</div>
            </NavLink>
            <NavLink to="/about" >
                <div>A Propos</div>
            </NavLink>
      </nav>
    );
};

export default Navigation;