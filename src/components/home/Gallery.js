import React from 'react';
import { Link } from 'react-router-dom';
import logements from "../../../src/datas/logement.json";

const Gallery = () => {
    return (
        <section className="gallery">
            <div className="gallery_encadrement">
                {logements.map((logement) => {
                    return (
                        <Link to={`/logement/${logement.id}`}>
                            <div className="encadrement">
                                <article className="gallery_article" key={logement.id}>
                                    <img className="gallery_img" src={logement.cover} alt="image de logement" />
                                    <span className="gallery_title">{logement.title}</span>
                                </article>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Gallery;