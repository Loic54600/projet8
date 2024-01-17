import React from 'react';
import Kasa from "../assets/img/kasa.png";
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return ( 
        <nav className='navbar'>
            <div class="img.kasa">
                <img  className="kasa" src={Kasa}/>
            </div>
            {/*Navigation*/ }
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