import React from 'react';
import Accordion from "../../components/about/Accordion";
import Logements from "../../../src/datas/logement.json";

const Card = () => {
    return (
        <section className="aboutgallery">
        <div className="aboutgallery_cards">
          {Logements.map((logement) => {
            return (
              <div className="App" key={logement.id} >
                <Accordion
                  title= "Description"
                  content={logement.description}
                />
              </div> 
            );
          })}
        </div>
        <div className="aboutgallery_cards">
          {Logements.map((logement) => {
            return (
              <div className="App" key={logement.id} >
                <Accordion
                  title= "Equipements"
                  content={logement.equipement }
                />
              </div> 
            );
          })}
        </div>
      </section>
    );
};

export default Card;