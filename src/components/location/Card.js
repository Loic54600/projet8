import React from 'react';
import logements from "../../../src/datas/logement.json";


const Card = () => {
    return (
        <section className="detail">
            {logements.map((logement) => {
                return (
                    <div className="title" key={logement.id}>
                        <h2 className="h2_title">{logement.title}</h2>
                        <p className="p_title">{logement.location}</p>
                    </div>
                    /*<div className="profil">
                        <h3 className="h3_title">{logement.name}</h3>
                        <img  className="Host" src={logement.picture} alt="image de logement"/>
                    </div>*/
                    );
                })}
        </section>
    );
};

export default Card;