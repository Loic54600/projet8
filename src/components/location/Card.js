import React from 'react';
import Collapse from '../about/Propscollapse';

const Card = ({ logement }) => {
  return (
    <section className="card_logement">
      <Collapse title="Description" content={logement.description} />

      <Collapse title="Équipements" content={logement.equipments.map((equipment, id) => {
          return (<span key={id}>{equipment}</span>)
      })}/>

    </section>
  );
};

export default Card;
