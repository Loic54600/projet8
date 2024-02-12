import React from 'react';


const Profil = ({ logement }) => {
    return (
        <section className="detail_element">
            <div className="title" key={logement.id}>
                <h2 className="h2_title">{logement.title}</h2>
                <p className="p_title">{logement.location}</p>
            </div>
            <div className="profil">
                <h3 className="h3_title">{logement.host.name}</h3>
                <img className="Host" src={logement.host.picture} alt="image de logement" />
            </div>
        </section>
    );
};

export default Profil;