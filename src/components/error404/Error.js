import React from 'react';
import Error404 from "../../assets/img/404.png";
import { NavLink } from 'react-router-dom';

const Error= () => {
    return (
        <section className="error">
            <div className="img.error">
                <img  className="error" alt="error" src={Error404}/>
            </div>
            <div>
                <h3 className="h3-404"> Oups! La page que vous demandez n'existe pas.</h3>
            </div>
            <NavLink to="/">
                    <div className="back">Retourner sur la page d'accueil</div>
            </NavLink>
        </section>
    );
};

export default Error;