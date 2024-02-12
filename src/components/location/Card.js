import React from 'react';
import greyStar from '../../assets/img/star/grey_star.png';
import redStar from '../../assets/img/star/red_star.png';
import logement from "../../datas/logement.json";


function Tag() {
    return (
        <div className="tag" >
            <p className="element"></p>
        </div>)
}


const Card = ({ logement }) => {
    return (
        <section>
            <section className="detail">
                <section className="tag-star">
                    <Tag />




                </section>
            </section>
        </section>
    );
};


export default Card;



{/*  
<div className="rating">
                        <input type="radio" id="star5" name="rating" value="5" /><label for="star5"></label>
                        <input type="radio" id="star4" name="rating" value="4" /><label for="star4"></label>
                        <input type="radio" id="star3" name="rating" value="3" /><label for="star3"></label>
                        <input type="radio" id="star2" name="rating" value="2" /><label for="star2"></label>
                        <input type="radio" id="star1" name="rating" value="1" /><label for="star1"></label>
                    </div>
                
               
                <div className="accord_collapse">
                    <details className="accord">
                        <summary className="accordion_title">Description</summary>
                        <div className="accordion_content">
                            <p></p>
                        </div>
                    </details>
                </div>*/}