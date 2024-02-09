import React from 'react';
import { Link } from 'react-router-dom';
import  logement  from "../../datas/logement.json";


const Gallery = () => {
    return (
        <section className="gallery">
            <div className="gallery_encadrement">
                {logement.map((logement) => {
                    return (
                        <Link to={`/logement/${logement.id}`}>
                            <article className="gallery_article" key={logement.id}>
                                <img className="gallery_img" src={logement.cover} alt="image de logement"/>
                                <span className="gallery_title">{logement.title}</span>
                            </article>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Gallery;
