import React from 'react';

import logements from "../../../src/datas/logement.json";

const detail = () => {
    return (
        <section className="evalutaion">
            {logements.map((logement) => {
                return (
            <div className="tag">
                <p className="element">{logement.tags}</p>
            </div>
            /*
            <div class="rating">
                <input type="radio" id="star5" name="rating" value="5" /><label for="star5"></label>
                <input type="radio" id="star4" name="rating" value="4" /><label for="star4"></label>
                <input type="radio" id="star3" name="rating" value="3" /><label for="star3"></label>
                <input type="radio" id="star2" name="rating" value="2" /><label for="star2"></label>
                <input type="radio" id="star1" name="rating" value="1" /><label for="star1"></label>
            </div>*/
             );
            })}
        </section>
    );
};

export default detail;