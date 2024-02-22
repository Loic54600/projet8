import React from 'react';
import Collapse from '../about/Propscollapse';

const Card = ({ logement }) => {
  return (
    <section className="card_logement">
      <Collapse title="Description" content={logement.description} />

      <Collapse title="Équipements">
        <ul className="equipments-content">
          {logement.equipments.map((equipment, id) => {
            return (
              <li key={id}>{equipment}</li>
            )
          })}
        </ul>
      </Collapse>
      
    </section>
  );
};

export default Card;

