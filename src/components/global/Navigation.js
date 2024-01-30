import React from 'react';

import Kasa from "../../assets/img/kasa.png";
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return ( 
        <nav className="navbar">
            <div class="img.kasa">
                <img  className="kasa" alt="kasa" src={Kasa}/>
            </div>
            {/*Navigation*/ }
            <ul className="ul_nav">
                <NavLink to="/">
                    <div>Accueil</div>
                </NavLink>
                <NavLink to="/about" >
                    <div>A Propos</div>
                </NavLink>
                {/*
                <NavLink to="/error">
                    <div>Error</div>
                </NavLink> */ }
            </ul>
      </nav>
    );
};

export default Navigation;