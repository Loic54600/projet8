import React from 'react';
import logements from "../../../src/datas/logement.json";





const Gallery = () => {
    return (
        <section className="gallery">
            <div className="test">
                {logements.map((logement) => {
                    return (
                        <article key={logement.id}>
                            <img className="gallery_img" src={logement.cover} alt="" />
                            <span>{logement.title}</span>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Gallery;