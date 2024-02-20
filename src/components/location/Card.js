import React from 'react';
import Test from '../about/Propscollapse';

const Card = ({ logement }) => {
  return (
    <div>
      <Test title="Description" content={logement.description} />
      <Test title="Equipements" content={logement.equipments} />
    </div>
  );
};

export default Card;