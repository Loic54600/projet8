import React from 'react';
import { NavLink } from 'react-router-dom';

import Kasa from "../../assets/img/kasa.png";




const Navigation = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="img.kasa">
                    <img className="kasa" alt="kasa" src={Kasa} />
                </div>
                {/*Navigation*/}
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
        </header>
    );
};

export default Navigation;