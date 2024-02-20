import React from 'react';


const Profil = ({ logement }) => {
    return (
            <div className="profil">
                <h3 className="title_h3">{logement.host.name}</h3>
                <img className="profil_host" src={logement.host.picture} alt="image de logement" />
            </div>
    );
};

export default Profil;