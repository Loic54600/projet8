import React from 'react';

const Localisation = ({ logement }) => {
    return (
        <div className="title" key={logement.id}>
            <h2 className="title_h2">{logement.title}</h2>
            <p className="title_p">{logement.location}</p>
        </div>
    );
};

export default Localisation;