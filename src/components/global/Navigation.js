import React from 'react';
import { NavLink } from 'react-router-dom';

import Kasa from "../../assets/img/kasa.png";



{/*Navigation*/ }
const Navigation = () => {
    return (
        <header>
            <nav className="navbar">
                <NavLink to="/">
                    <img className="img_kasa" alt="kasa" src={Kasa} />
                </NavLink>
                <ul className="ul_nav">
                    <NavLink to="/">
                        <div className="ul_title">Accueil</div>
                    </NavLink>
                    <NavLink to="/about" >
                        <div className="ul_title">A Propos</div>
                    </NavLink>
                    {/* 
                    <NavLink to="/error">
                        <div className="ul_title">Error</div>
                    </NavLink>
                    */}
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;