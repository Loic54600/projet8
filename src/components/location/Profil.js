import React from 'react';


const Profil = ({ logement }) => {
    return (
        <section className="detail_element">
            <div className="title" key={logement.id}>
                <h2 className="title_h2">{logement.title}</h2>
                <p className="title_p">{logement.location}</p>
            </div>
            <div className="profil">
                <h3 className="title_h3">{logement.host.name}</h3>
                <img className="profil_host" src={logement.host.picture} alt="image de logement" />
            </div>
        </section>
    );
};

export default Profil;