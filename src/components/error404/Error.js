import React from 'react';
import Error404 from "../../assets/img/404.png";
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <section className="error">
            <img className="error_img" alt="error" src={Error404} />
            <div>
                <h3 className="error_h3"> Oups! La page que vous demandez n'existe pas.</h3>
            </div>
            <NavLink to="/">
                <div className="error_h4">Retourner sur la page d'accueil</div>
            </NavLink>
        </section>
    );
};

export default Error;