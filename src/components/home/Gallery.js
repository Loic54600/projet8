import React from 'react';
import logements from "../../../src/datas/logement.json";





const Gallery = () => {
    return (
        <section className="gallery">
            {logements.map((logement) => {
        return (
          <article key={logement.id}>
              <div image={logement.cover} title={logement.title} />
          </article>
        );
      })}
        </section>
    );
};

export default Gallery;