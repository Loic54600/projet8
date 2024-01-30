import React from 'react';
import collapses from "../../../src/datas/collapses.json";



const Aboutmenu = () => {
  return (
    <section className="aboutgallery">
      <div className="aboutgallery_cards">
        /*
        <section className="menu">
          {collapses.map((collapse) => {
              return (
              <details class="accordion" key={collapse.id}>
                  <summary class="accordion__title">{collapse.title}</summary>
                  <div class="accordion__content">
                    <p>{collapse.content}</p>
                  </div>
              </details>
              );
          })}
        </section> 
      </div>
    </section>
  );
};

export default Aboutmenu;