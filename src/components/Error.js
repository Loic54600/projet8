import React from 'react';
import Error404 from "../assets/img/404.png";
import { NavLink } from 'react-router-dom';

const Error= () => {
    return (
        <section className="error">
            <div class="img.error">
                <img  className="error" alt="error" src={Error404}/>
            </div>
            <h2 className="h2-404"> Oups! La page que vous deamndez n'existe pas.</h2>
            <NavLink to="/">
                    <div className="back">Retourner sur la page d'accueil</div>
                </NavLink>
            
        </section>
    );
};

export default Error;