import React from 'react';

const Card = ({ logement }) => {
    return (
        <section>
            <section className="detail">
                <section className="detail_element">
                    <div className="title" key={logement.id}>
                        <h2 className="h2_title">{logement.title}</h2>
                        <p className="p_title">{logement.location}</p>
                    </div>
                    <div className="profil">
                        <h3 className="h3_title">{logement.host.name}</h3>
                        <img className="Host" src={logement.host.picture} alt="image de logement" />
                    </div>
                </section>
                <section className="tag-star">
                    <div className="tag" >
                        <p className="element">{logement.tags}</p>
                    </div>
                    <div className="rating">
                        <input type="radio" id="star5" name="rating" value="5" /><label for="star5"></label>
                        <input type="radio" id="star4" name="rating" value="4" /><label for="star4"></label>
                        <input type="radio" id="star3" name="rating" value="3" /><label for="star3"></label>
                        <input type="radio" id="star2" name="rating" value="2" /><label for="star2"></label>
                        <input type="radio" id="star1" name="rating" value="1" /><label for="star1"></label>
                    </div>
                </section>
                <div className="accord_collapse">
                    <details className="accord">
                        <summary className="accordion_title">Description</summary>
                        <div className="accordion_content">
                            <p>{logement.description}</p>
                        </div>
                    </details>
                    

                </div>
            </section>
        </section>
    );
};


export default Card;