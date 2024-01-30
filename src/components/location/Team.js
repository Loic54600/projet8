import React from 'react';

import logements from "../../../src/datas/logement.json";

const collapse = () => {
    return (
        <section className="collapse">
            {logements.map((logement) => {
                return (
                    <details class="accord">
                        <summary class="accordion_title">Description</summary>
                        <div class="accordion_content">
                            <p>{logement.description}</p>
                        </div>
                    </details>


                );
            })}
            
            {logements.map((logement) => {
                return (
                    <details class="accord">
                        <summary class="accordion_title">Equipement</summary>
                        <div class="accordion_content">
                            <p>{logement.equipments}</p>
                        </div>
                    </details>
                );
            })}
        </section>
    );
};

export default collapse;