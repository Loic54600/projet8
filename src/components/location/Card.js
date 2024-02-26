import React from 'react';
import Collapse from '../about/Propscollapse';

const Card = ({ logement }) => {
  return (
    <section className="card_logement">
      <Collapse title="Description" content={logement.description} />

      <Collapse title="Équipements">

        {logement.equipments.map((equipment, id) => {
          return (
            <ul className="equipments-content">
              <li key={id} content={equipment} />
            </ul>
          )
        })}

      </Collapse>

    </section>
  );
};

export default Card;

